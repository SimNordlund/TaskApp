import { asProperty, fromConstant$, jsxRuntimeExports, NestedStoreProvider, reactExports, available, fromObjectItem } from './index-CkReQaf8.js';

const TemplatedWidgetProperty = asProperty(({ children, dataSourceId, editable }, _store, widgetId, propertyPath) => {
  const description = `widget template "${widgetId}/${propertyPath}"`;
  return fromConstant$({ get: (item) => {
    const namespace = `${widgetId}/${propertyPath}/${item.id}`;
    return jsxRuntimeExports.jsx(NestedStoreWithObject, { namespace, item, children: children() }, namespace);
  } });
  function NestedStoreWithObject(props) {
    return jsxRuntimeExports.jsx(NestedStoreProvider, { namespace: props.namespace, setupStore: reactExports.useCallback((store) => {
      const [, setObject] = store.useSlot(widgetId, "object"), [, setEditableObject] = store.useSlot(widgetId, "editableObject"), availableObject = available(fromObjectItem(props.item, dataSourceId, description));
      setObject(availableObject), editable && setEditableObject(availableObject);
    }, [props.item]), children: props.children });
  }
});

export { TemplatedWidgetProperty };
