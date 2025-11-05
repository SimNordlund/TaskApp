import { LogManager, asProperty, toFriendlyId, pageScope, readUntracked, getRuntimeArguments$, onlineData, available, unavailable } from './index-4mfddfkU.js';
import { handleDataSourceExecutionError } from './DGnMnCeA-CZ4oDNF6.js';
import { fromObjectProperty$ } from './ActionButton-B2qOJ4td.js';

const logger = LogManager.get().getLogger(), MicroflowObjectProperty = asProperty((config, store, widgetId) => {
  const friendlyId = toFriendlyId(widgetId), [form$] = store.useSlot(pageScope, "form"), form = readUntracked(form$)?.[0];
  return fromObjectProperty$(config, store, widgetId, getRuntimeArguments$(config.argMap, store, widgetId), async (args) => {
    try {
      !function(args2) {
        logger.debug(`Fetching object using microflow '${config.operationId}' for widget ${friendlyId}`, "parameter mapping:", args2);
      }(args);
      const result = await onlineData().retrieveByMicroflow(config.operationId, args, form);
      return function(mxObject, extra) {
        const guid = mxObject?.getGuid();
        logger.debug(guid ? `Received object '${guid}' and ${extra.length} objects over schema for widget ${friendlyId}` : `Received no object for widget ${friendlyId}`, "extra ids", extra.map((o) => o.getGuid()));
      }(result.mxObjects[0], result.extra), result.mxObjects[0] ? available(result.mxObjects[0]) : unavailable();
    } catch (e) {
      return handleDataSourceExecutionError(widgetId, e, "microflow"), unavailable();
    }
  });
});

export { MicroflowObjectProperty };
