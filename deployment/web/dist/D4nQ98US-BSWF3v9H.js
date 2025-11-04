import { LogManager, useDependency, fromComputation$, fromObjectItem, reaction, ensure } from './index-CmmNAaD_.js';
import { scheduleAction } from './DaFVLkxr-Bkn_Z2yo.js';

const logger = LogManager.get().getLogger();
function listItemProperty(getValue$, description, dataSourceId, itemValueTemplate, legacyItems = false) {
  let reactions = {};
  const lastRequestedItems = /* @__PURE__ */ new Set(), [isUpdated, triggerUpdate] = useDependency(`Update ${description}`, () => {
    Object.values(reactions).forEach((r) => r.disposer()), reactions = {};
  });
  return [fromComputation$(`Value for ${description}`, () => {
    isUpdated.dependOn();
    const itemGetter = (item) => function(item2) {
      let returningData = true;
      lastRequestedItems.add(item2.id);
      const mxObject = fromObjectItem(item2, dataSourceId, description), currentReaction = reactions[item2.id];
      if (currentReaction && currentReaction.source !== mxObject && (currentReaction.disposer(), delete reactions[item2.id]), !(item2.id in reactions)) {
        const computedValue$ = getValue$(mxObject), entry = { source: mxObject };
        entry.disposer = reaction(() => (returningData || scheduleAction(triggerUpdate), computedValue$.dependOn()), (value) => entry.value = value, { fireImmediately: true }), reactions[item2.id] = entry;
      }
      return returningData = false, ensure(reactions[item2.id]).value;
    }(item);
    return Object.assign(legacyItems ? (item) => (logger.warn(`DEPRECATED: direct usage of ${description} as a function, use .get() instead -- will be removed in version: 10.0`), itemGetter(item)) : {}, itemValueTemplate, { get: itemGetter });
  }), function() {
    Object.entries(reactions).forEach(([key, value]) => {
      lastRequestedItems.has(key) || (value.disposer(), delete reactions[key]);
    }), lastRequestedItems.clear();
  }];
}

export { listItemProperty };
