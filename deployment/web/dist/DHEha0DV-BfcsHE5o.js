import { fromRequest$, available, withObjectKeeping$, fromComputation$, mapL, evaluateExpressionValue, scheduleSideEffect, toObjectItem, readUntracked } from './index-CmmNAaD_.js';
import { objectListTrigger, convertFilterExpressionToExpression, convertSortInstructionToExpression, getCompareFunction, withSetItemsStoreSideEffect$, asReloadableListValue$, withFirstLoadDoneSharing$ } from './DatabaseObjectListProperty-BT0YTY5Y.js';

function getClientPagedList$(config, store, widgetId, parameters$, fetchData) {
  const { fetchTrigger$, retrieveParameters$, silentlyResetOffset, needTotalCount$, delayedRetrieveParametersSetters, immediateRetrieveParametersSetters, loadedCallback } = objectListTrigger(config, [], store, widgetId, parameters$), fetchResult$ = fromRequest$(`Load data of ${widgetId}`, () => {
    const trigger = fetchTrigger$.dependOn();
    return "available" !== trigger.status ? trigger : trigger.value.empty ? available({ main: [], extra: [] }) : fetchData(trigger.value.parameters);
  }), objects$ = withObjectKeeping$(widgetId, store, fetchResult$, (x) => x.main.concat(x.extra)), filter$ = fromComputation$(`Filter of ${widgetId}`, () => retrieveParameters$.dependOn().filter), filteredObjects$ = fromRequest$(`Filtered data of ${widgetId}`, () => {
    const allObjects = objects$.dependOn();
    return "available" !== allObjects.status || 0 === allObjects.value.main.length ? mapL(allObjects, (a) => a.main) : async function(filter, mxObjects) {
      if (!filter)
        return mxObjects;
      const expression = convertFilterExpressionToExpression(filter);
      return (await Promise.all(mxObjects.map((mxObject) => evaluateExpressionValue(expression, mxObject).then((result) => result ? mxObject : void 0)))).filter((obj) => !!obj);
    }(filter$.dependOn(), allObjects.value.main).then((result) => available(result));
  }), sortOrder$ = fromComputation$(`Sort order of ${widgetId}`, () => retrieveParameters$.dependOn().sortOrder), sortedObjects = fromRequest$(`Sorted data of ${widgetId}`, () => {
    const unsortedObjects = filteredObjects$.dependOn();
    return "available" !== unsortedObjects.status || 0 === unsortedObjects.value.length ? unsortedObjects : async function(sortOrder, mxObjects) {
      if (0 === sortOrder.length)
        return mxObjects;
      return (await Promise.all(mxObjects.map((mxObject) => Promise.all(sortOrder.map((sortInstruction) => {
        const sortValueExpression = convertSortInstructionToExpression(sortInstruction);
        return evaluateExpressionValue(sortValueExpression, mxObject);
      })).then((sortValues) => ({ sortValues, mxObject }))))).sort(getCompareFunction(sortOrder)).map((sortItem) => sortItem.mxObject);
    }(sortOrder$.dependOn(), unsortedObjects.value).then((result) => available(result));
  }), markAsLoaded = () => store.addUpdateCallback(loadedCallback), listValue$ = fromComputation$(`Paged data of ${widgetId}`, () => {
    const objects = sortedObjects.dependOn();
    switch (objects.status) {
      case "loading":
        return { status: "loading", ...readUntracked(retrieveParameters$), ...immediateRetrieveParametersSetters };
      case "unavailable":
        return markAsLoaded(), { status: "unavailable", ...retrieveParameters$.dependOn(), ...immediateRetrieveParametersSetters };
      case "available":
        let { offset, limit, sortOrder, filter } = retrieveParameters$.dependOn();
        return offset >= objects.value.length && (offset = 0, scheduleSideEffect(silentlyResetOffset)), markAsLoaded(), { status: "available", offset, limit, sortOrder, filter, items: objects.value.slice(offset, offset + limit).map((obj) => toObjectItem(obj, config.dataSourceId)), totalCount: needTotalCount$.dependOn() ? objects.value.length : void 0, hasMoreItems: offset + limit < objects.value.length || 0 === limit, ...delayedRetrieveParametersSetters };
    }
  }), storedItemsListValue$ = withSetItemsStoreSideEffect$(widgetId, config.dataSourceId, listValue$, store);
  return asReloadableListValue$(withFirstLoadDoneSharing$(storedItemsListValue$, store, widgetId));
}

export { getClientPagedList$ };
