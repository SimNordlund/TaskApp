import { jsxRuntimeExports } from './index-4mfddfkU.js';

function Container(props) {
  const RenderMode = props.renderMode;
  return jsxRuntimeExports.jsx(RenderMode, { className: props.class, style: props.style, ...getClickProps(props), ...props.ariaHidden ? { "aria-hidden": true } : {}, children: props.content });
}
function getClickProps(props) {
  const { tabIndex, onClick } = props;
  if (onClick?.canExecute) {
    const executeAction = () => {
      onClick.isExecuting && onClick.disabledDuringExecution || onClick.execute();
    }, handleEvent = (e) => {
      e.preventDefault(), e.stopPropagation(), executeAction();
    };
    return { tabIndex: tabIndex ?? 0, role: "button", onClick: handleEvent, onKeyDown: (e) => {
      "Enter" !== e.key && " " !== e.key || e.target !== e.currentTarget || handleEvent(e);
    } };
  }
}

export { Container };
