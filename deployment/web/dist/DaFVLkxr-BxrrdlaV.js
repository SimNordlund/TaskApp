import { allowStateChangesInsideComputed, runInAction, configure } from './index-CkReQaf8.js';

function runActionInComputed(action) {
  return allowStateChangesInsideComputed(() => runInAction(action));
}
configure({ enforceActions: "always" });
const scheduledActions = [];
function scheduleAction(action) {
  scheduledActions.push(action), 1 === scheduledActions.length && setTimeout(() => runInAction(() => scheduledActions.splice(0).forEach((f) => f())), 0);
}

export { runActionInComputed, scheduleAction };
