import { AssertionError, reactExports, WidgetIdContext, useEnsureConstantValues, useStoreBackendValue, useOwnStoreBackendSlot, readUntracked, useDependableValue, isJson } from './index-CkReQaf8.js';

function usePersistentState(key, initialValue) {
  if ("string" != typeof key || 0 === key.length)
    throw new AssertionError("Key must be defined");
  const widgetId = reactExports.useContext(WidgetIdContext);
  reactExports.useDebugValue(`usePersistentState(${key}, ${widgetId})`), useEnsureConstantValues(key, widgetId);
  const slotName = `hook:${key}`, [slot$, setSlot] = useStoreBackendValue(widgetId, slotName);
  useOwnStoreBackendSlot(widgetId, slotName);
  const setValue = reactExports.useCallback((newValueOrBuilder) => {
    newValueOrBuilder instanceof Function ? setValue(newValueOrBuilder(readUntracked(slot$))) : void 0 !== newValueOrBuilder ? (assertIsValidPersistableValue(newValueOrBuilder), setSlot(JSON.parse(JSON.stringify(newValueOrBuilder)))) : setSlot(void 0);
  }, [slot$]);
  return reactExports.useMemo(() => {
    void 0 === readUntracked(slot$) && setValue("function" == typeof initialValue ? initialValue() : initialValue);
  }, []), [useDependableValue(slot$), setValue];
}
function assertIsValidPersistableValue(value) {
  if (!["boolean", "number", "string"].includes(typeof value) && null !== value)
    if (Array.isArray(value))
      value.forEach(assertIsValidPersistableValue);
    else {
      if (!isJson(value))
        throw new AssertionError(`usePersistentState: received non-primitive value ${value}`);
      Object.values(value).forEach(assertIsValidPersistableValue);
    }
}

export { usePersistentState };
