import { reactExports, ensure, jsxRuntimeExports, classNames } from './index-CkReQaf8.js';
import { getBox, useLegacyResize } from './bdxqAC6d-CG8RDE5Y.js';

const DataView = (props) => {
  const dvNode = reactExports.useRef(null), controlsNode = reactExports.useRef(null), contentNode = reactExports.useRef(null), adjustHeightCallback = reactExports.useCallback((container) => {
    !function(container2, contentNode2, dvNode2, controlsNode2, hasFooter) {
      const content = ensure(contentNode2);
      if (!container2)
        return content.style.height = "auto", void (content.style.overflow = "");
      const parentBox = getBox(container2), dataView = getBox(dvNode2), remainder = parentBox.contentBox.height - (dataView.marginBox.height - dataView.contentBox.height) - (hasFooter ? getBox(controlsNode2).marginBox.height : 0);
      content.style.height = `${remainder}px`, content.style.overflow = "auto";
    }(container, contentNode.current, dvNode.current, controlsNode.current, !!props.footer);
  }, [props.footer, contentNode, dvNode, controlsNode]);
  return useLegacyResize(dvNode, adjustHeightCallback, [{ node: controlsNode, options: { childList: true, subtree: true, characterData: true } }]), jsxRuntimeExports.jsxs("div", { className: classNames("mx-dataview", props.class), style: props.style, "data-focusindex": props.tabIndex, ref: dvNode, children: [jsxRuntimeExports.jsx("div", { className: "mx-dataview-content", ref: contentNode, children: props.body }), props.emptyMessage.value && "unavailable" === props.object.status && jsxRuntimeExports.jsx("div", { className: "mx-dataview-message", children: jsxRuntimeExports.jsx("div", { children: jsxRuntimeExports.jsx("p", { children: props.emptyMessage.value }) }) }), props.footer && jsxRuntimeExports.jsx("div", { className: "mx-dataview-controls", style: props.hideFooter ? { display: "none" } : {}, ref: controlsNode, children: props.footer })] });
};

export { DataView };
