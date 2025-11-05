import { reactExports, jsxRuntimeExports, classNames, newId, getFocus, setFocus } from './index-4mfddfkU.js';

const SidebarToggleContext = reactExports.createContext({ scrollcontainerId: "", toggleStatus: false, toggleAction: () => {
}, setToggleButtonID: (_id) => {
}, resetSidebar: () => {
} });

const ScrollContainerRegion = reactExports.forwardRef((props, ref) => jsxRuntimeExports.jsx("div", { id: props.id, className: classNames(`mx-scrollcontainer-${props.name}`, props.class, { "mx-scrollcontainer-toggleable": props.canToggle }), inert: props.inert ? "" : void 0, style: { ...props.style, ...props.size ? { "--sidebar-size": props.size } : {} }, ref, "aria-hidden": props.ariaHidden, ...props.dataFocusIndex ? { "data-focusindex": props.dataFocusIndex } : void 0, children: jsxRuntimeExports.jsx("div", { className: classNames("mx-scrollcontainer-wrapper", { "mx-scrollcontainer-nested": props.hasNestedScrollContainer }), children: props.children }) }));

function ScrollContainer(props) {
  const uniqueId = reactExports.useMemo(() => newId("scrollcontainer"), []), [toggleMode, isSidebarOpenInitially, toggleableSidebarSize] = function(left, right) {
    if (left.enabled && "none" !== left.toggleMode)
      return [left.toggleMode, left.initiallyOpen, getRegionSize(left)];
    if (right.enabled && "none" !== right.toggleMode)
      return [right.toggleMode, right.initiallyOpen, getRegionSize(right)];
    return ["none", false, "0px"];
  }(props.left, props.right), [isSidebarOpen, setSidebarOpen] = reactExports.useState(isSidebarOpenInitially), [toggleButtonID, setToggleButtonID] = reactExports.useState(""), toggleSidebar = (newStatus) => {
    setSidebarOpen(newStatus || ((isOpen) => !isOpen));
  }, resetSidebar = () => {
    "push" !== toggleMode && "slide" !== toggleMode || setSidebarOpen(isSidebarOpenInitially);
  };
  function renderBody() {
    if (!props.top.enabled && !props.bottom.enabled)
      return jsxRuntimeExports.jsx(HorizontalContainer, { ...props, containerType: ContainerType.Standalone, toggleMode, toggleableSidebarSize, containerId: uniqueId, sidebarStatus: isSidebarOpen, toggleSidebarStatus: toggleSidebar, toggleButtonID });
    return !props.left.enabled && !props.right.enabled ? jsxRuntimeExports.jsx(VerticalContainer, { ...props, containerType: ContainerType.Standalone }) : "headline" === props.layoutMode ? jsxRuntimeExports.jsx(VerticalContainer, { ...props, containerType: ContainerType.Outer, containerId: uniqueId, children: jsxRuntimeExports.jsx(HorizontalContainer, { ...props, containerType: ContainerType.Inner, containerId: uniqueId, toggleMode, toggleableSidebarSize, sidebarStatus: isSidebarOpen, toggleSidebarStatus: toggleSidebar, toggleButtonID }) }) : jsxRuntimeExports.jsx(HorizontalContainer, { ...props, containerType: ContainerType.Outer, containerId: uniqueId, toggleableSidebarSize, toggleMode, sidebarStatus: isSidebarOpen, toggleSidebarStatus: toggleSidebar, toggleButtonID, children: jsxRuntimeExports.jsx(VerticalContainer, { ...props, containerType: ContainerType.Inner }) });
  }
  return "none" === toggleMode ? renderBody() : jsxRuntimeExports.jsx(SidebarToggleContext.Provider, { value: { toggleStatus: isSidebarOpen, toggleAction: () => {
    setSidebarOpen((isOpen) => !isOpen);
  }, scrollcontainerId: uniqueId, setToggleButtonID: (id) => {
    setToggleButtonID(id);
  }, resetSidebar }, children: renderBody() });
}
function getRegionSize(props) {
  if (!props.enabled)
    throw new Error("Region is not enabled");
  return "auto" === props.sizeMode ? "min-content" : `${props.sizeValue}${"percentage" === props.sizeMode ? "%" : "px"}`;
}
var ContainerType;
function HorizontalContainer(props) {
  const sidebarRef = reactExports.useRef(null), { toggleMode, sidebarStatus } = props, [sidebarHidden, setSidebarHidden] = reactExports.useState(false), onClick = reactExports.useCallback((e) => {
    sidebarStatus && (sidebarRef.current?.contains(e.target) || props.toggleSidebarStatus(false));
  }, [sidebarStatus]);
  return reactExports.useEffect(() => {
    if (sidebarRef.current) {
      const resizeObserver = new ResizeObserver(() => {
        if (0 === sidebarRef.current?.clientWidth) {
          if (setSidebarHidden(true), sidebarRef.current.contains(getFocus())) {
            const toggleButton = document.querySelector(`[data-button-id="${props.toggleButtonID}"]`);
            toggleButton && setFocus(toggleButton);
          }
        } else
          setSidebarHidden(false);
      });
      return resizeObserver.observe(sidebarRef.current), () => {
        resizeObserver.disconnect();
      };
    }
    return () => {
    };
  }, [sidebarRef.current]), reactExports.useEffect(() => {
    const handleKeyUp = (e) => {
      "Escape" === e.key && props.toggleSidebarStatus(false);
    };
    return sidebarStatus ? window.document.addEventListener("keyup", handleKeyUp) : window.document.removeEventListener("keyup", handleKeyUp), () => {
      window.document.removeEventListener("keyup", handleKeyUp);
    };
  }, [sidebarStatus]), jsxRuntimeExports.jsxs("div", { className: classNames("mx-scrollcontainer", "mx-scrollcontainer-horizontal", { "mx-scrollcontainer-fixed": props.scrollPerRegion, "mx-scrollcontainer-open": sidebarStatus, [`mx-scrollcontainer-${toggleMode}`]: "none" !== toggleMode }, props.containerType !== ContainerType.Inner ? props.class : void 0), style: { ...props.containerType !== ContainerType.Inner ? props.style : void 0, "--toggleable-sidebar-width": props.toggleableSidebarSize }, onClick: "slide" === toggleMode || "push" === toggleMode ? onClick : void 0, "data-scrollcontainer-id": props.containerType !== ContainerType.Inner ? props.containerId : void 0, children: [props.left.enabled && jsxRuntimeExports.jsx(ScrollContainerRegion, { name: "left", id: "none" !== props.left.toggleMode ? props.containerId + "-toggleable" : void 0, class: props.left.class, style: props.left.style, size: getRegionSize(props.left), canToggle: "none" !== props.left.toggleMode, ref: "none" !== props.left.toggleMode ? sidebarRef : void 0, ariaHidden: sidebarHidden, ...sidebarHidden ? { dataFocusIndex: -1 } : null, children: props.left.content }), jsxRuntimeExports.jsx(ScrollContainerRegion, { name: "center", hasNestedScrollContainer: props.containerType === ContainerType.Outer, class: props.containerType !== ContainerType.Outer ? props.center.class : void 0, style: props.containerType !== ContainerType.Outer ? props.center.style : void 0, inert: sidebarStatus && ("slide" === toggleMode || "push" === toggleMode), children: props.children ?? props.center.content }), props.right.enabled && jsxRuntimeExports.jsx(ScrollContainerRegion, { name: "right", id: "none" !== props.right.toggleMode ? props.containerId + "-toggleable" : void 0, class: props.right.class, style: props.right.style, size: getRegionSize(props.right), canToggle: "none" !== props.right.toggleMode, ref: "none" !== props.right.toggleMode ? sidebarRef : void 0, ariaHidden: sidebarHidden, ...sidebarHidden ? { dataFocusIndex: -1 } : null, children: props.right.content })] });
}
function VerticalContainer(props) {
  return jsxRuntimeExports.jsxs("div", { className: classNames("mx-scrollcontainer", "mx-scrollcontainer-vertical", { "mx-scrollcontainer-fixed": props.scrollPerRegion }, props.containerType !== ContainerType.Inner ? props.class : void 0), style: { ...props.containerType !== ContainerType.Inner ? props.style : void 0 }, "data-scrollcontainer-id": props.containerId, children: [props.top.enabled && jsxRuntimeExports.jsx(ScrollContainerRegion, { name: "top", class: props.top.class, style: props.top.style, size: getRegionSize(props.top), children: props.top.content }), jsxRuntimeExports.jsx(ScrollContainerRegion, { name: "middle", hasNestedScrollContainer: props.containerType === ContainerType.Outer, class: props.containerType !== ContainerType.Outer ? props.center.class : void 0, style: props.containerType !== ContainerType.Outer ? props.center.style : void 0, children: props.children ?? props.center.content }), props.bottom.enabled && jsxRuntimeExports.jsx(ScrollContainerRegion, { name: "bottom", class: props.bottom.class, style: props.bottom.style, size: getRegionSize(props.bottom), children: props.bottom.content })] });
}
!function(ContainerType2) {
  ContainerType2[ContainerType2.Standalone = 0] = "Standalone", ContainerType2[ContainerType2.Outer = 1] = "Outer", ContainerType2[ContainerType2.Inner = 2] = "Inner";
}(ContainerType || (ContainerType = {}));

export { ScrollContainer, SidebarToggleContext };
