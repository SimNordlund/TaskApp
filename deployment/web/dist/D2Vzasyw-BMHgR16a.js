import { getSession } from './index-4mfddfkU.js';

let rightToLeft;
function isRightToLeft() {
  if (void 0 === rightToLeft) {
    const session = getSession();
    rightToLeft = "rtl" === session.getConfig("uiconfig.direction");
  }
  return rightToLeft;
}

export { isRightToLeft };
