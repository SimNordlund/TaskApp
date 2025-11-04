import { getFocus, getHTMLElement, ensure, isNavigableElement, isHTMLElement, reactExports, newId, Big, useForceUpdate, tuple, repeat, reaction, useStoreBackendValue, readUntracked, jsxRuntimeExports, classNames, NestedStoreProvider } from './index-CmmNAaD_.js';
import { useLegacyResize, getBox } from './bdxqAC6d-BxVkIcZq.js';
import { usePersistentState } from './Y8h_6YnI-DQxyyQ7Y.js';
import { isRightToLeft } from './D2Vzasyw-DOTGS83T.js';
import { PageFragment } from './Placeholder-C-HgUb7V.js';

var NavigationKeys, NavigationCommand;
!function(NavigationKeys2) {
  NavigationKeys2[NavigationKeys2.UpDown = 0] = "UpDown", NavigationKeys2[NavigationKeys2.LeftRight = 1] = "LeftRight";
}(NavigationKeys || (NavigationKeys = {})), function(NavigationCommand2) {
  NavigationCommand2[NavigationCommand2.FORWARD = 0] = "FORWARD", NavigationCommand2[NavigationCommand2.BACKWARD = 1] = "BACKWARD";
}(NavigationCommand || (NavigationCommand = {}));
class RovingTabIndex {
  constructor(keys, container, childQuery = findNavigableDescendants) {
    this.children = [], this.currentIndex = -1, this.focused = false, this.updating = false, this.shiftingFocus = false, this.mutationObserver = new MutationObserver(this.onMutation.bind(this)), this.keys = keys, this.container = container, this.childQuery = childQuery, this.keyListener = this.createKeyListener(), this.focusInListener = this.createFocusInListener(), this.focusOutListener = this.createFocusOutListener(), this.addListeners(), this.handleMutation();
  }
  onMutation(_records) {
    this.handleMutation();
  }
  handleMutation() {
    const children = (elements = this.childQuery(this.container), Array.isArray(elements) ? elements : Array.from(elements).filter((e) => e instanceof HTMLElement)).filter((c) => !c.hasAttribute("data-roving-inactive"));
    var elements;
    this.doWithoutMutations(() => this.updateChildren(children));
  }
  setChildQuery(childQuery = findNavigableDescendants) {
    this.childQuery = childQuery;
  }
  setOnActiveRowChange(callback) {
    this.onActiveRowChange = callback;
  }
  setContainer(newContainer) {
    this.container !== newContainer && (this.removeListeners(), this.container = newContainer, this.addListeners(), this.handleMutation());
  }
  updateChildren(newChildren) {
    const oldCurrent = this.getCurrentElement();
    if (function(oldChildren, newChildren2) {
      if (a = oldChildren, b = newChildren2, a.length === b.length && a.every((e, i) => e === b[i]))
        return false;
      var a, b;
      const oldSet = /* @__PURE__ */ new Set();
      return oldChildren.forEach((v) => oldSet.add(v)), newChildren2.forEach((v) => {
        oldSet.delete(v) || v.setAttribute("data-roving-tabindex", "");
      }), oldSet.forEach((v) => unmanageElement(v)), true;
    }(this.children, newChildren) && (this.children = newChildren.slice()), oldCurrent) {
      const newIndex = newChildren.indexOf(oldCurrent);
      if (this.setCurrentIndex(-1 !== newIndex ? newIndex : this.findValidIndex(false, 0)), this.focused) {
        const newCurrent = this.getCurrentElement();
        setTimeout(() => this.restoreFocus(oldCurrent !== newCurrent), 0);
      }
    } else
      this.updateTabIndices();
    this.updateState();
  }
  restoreFocus(force) {
    if (this.shiftingFocus && !force)
      return;
    const active = getFocus(), current = this.getCurrentElement();
    (force || !active || current && current !== active && current.contains(active)) && this.focusCurrentElement();
  }
  updateState() {
    const current = this.getCurrentElement();
    current && isInteractive(current) || (this.setCurrentIndex(this.findValidIndex()), this.focused && this.focusCurrentElement());
  }
  destroy() {
    this.mutationObserver.disconnect(), this.removeListeners(), this.children.forEach(unmanageElement);
  }
  addListeners() {
    this.container.addEventListener("keydown", this.keyListener), this.container.addEventListener("focusin", this.focusInListener), this.container.addEventListener("focusout", this.focusOutListener);
  }
  removeListeners() {
    this.container.removeEventListener("keydown", this.keyListener), this.container.removeEventListener("focusin", this.focusInListener), this.container.removeEventListener("focusout", this.focusOutListener);
  }
  doWithoutMutations(callback) {
    const wasUpdating = this.updating;
    wasUpdating || (this.updating = true, this.mutationObserver.disconnect()), callback(), wasUpdating || (this.mutationObserver.observe(this.container, { childList: true, attributes: true, subtree: true }), this.updating = false);
  }
  createKeyListener() {
    return (e) => {
      const command = this.getNavigationCommand(e);
      if (null !== command) {
        e.preventDefault();
        const reverse = command.valueOf() === NavigationCommand.BACKWARD.valueOf();
        this.setCurrentIndex(this.findValidIndex(reverse)), this.focusCurrentElement();
      }
    };
  }
  createFocusInListener() {
    return (e) => {
      const target = getHTMLElement(ensure(e.target));
      let newIndex = -1, current = target;
      for (; current && (newIndex = this.children.indexOf(current), -1 === newIndex); )
        current = current.parentElement;
      -1 !== newIndex && this.setCurrentIndex(newIndex), target && target !== current && !isNavigableElement(target) && window.setTimeout(() => this.focusCurrentElement(), 0), this.focused = true;
    };
  }
  createFocusOutListener() {
    return (e) => {
      const current = this.getCurrentElement(), relatedTarget = getHTMLElement(ensure(e.relatedTarget ?? document.activeElement));
      this.shiftingFocus = true, relatedTarget && this.container.contains(relatedTarget) || window.setTimeout(() => {
        this.focused = false;
      }, 0), ensure(e.target) === current && window.setTimeout(() => {
        isInteractive(current) && null !== current.parentNode || this.doWithoutMutations(() => {
          this.updateState(), this.focusCurrentElement();
        });
      }, 0), window.setTimeout(() => {
        this.shiftingFocus = false;
      }, 0);
    };
  }
  getNavigationCommand(e) {
    switch (this.keys) {
      case NavigationKeys.UpDown:
        switch (e.key) {
          case "ArrowUp":
          case "Up":
            return NavigationCommand.BACKWARD;
          case "ArrowDown":
          case "Down":
            return NavigationCommand.FORWARD;
        }
        break;
      case NavigationKeys.LeftRight: {
        const rtl = isRightToLeft();
        switch (e.key) {
          case "ArrowLeft":
          case "Left":
            return rtl ? NavigationCommand.FORWARD : NavigationCommand.BACKWARD;
          case "ArrowRight":
          case "Right":
            return rtl ? NavigationCommand.BACKWARD : NavigationCommand.FORWARD;
        }
        break;
      }
    }
    return null;
  }
  setCurrentIndex(index) {
    this.currentIndex = index, this.updateTabIndices(), this.onActiveRowChange && this.onActiveRowChange(index);
  }
  focusCurrentElement() {
    const current = this.getCurrentElement();
    current && current.focus();
  }
  updateTabIndices() {
    this.doWithoutMutations(() => {
      this.children.forEach((c, i) => c.setAttribute("tabindex", i === this.currentIndex ? "0" : "-1"));
    });
  }
  findValidIndex(reverse = false, offset = 1, startIndex = this.currentIndex) {
    const newIndex = reverse ? findLastIndexInArray(this.children, isInteractive, startIndex - offset) : findFirstIndexInArray(this.children, isInteractive, startIndex + offset);
    return -1 !== newIndex ? newIndex : reverse ? findFirstIndexInArray(this.children, isInteractive) : findLastIndexInArray(this.children, isInteractive);
  }
  getCurrentElement() {
    return -1 !== this.currentIndex ? this.children[this.currentIndex] : null;
  }
}
function unmanageElement(e) {
  e.removeAttribute("tabindex"), e.removeAttribute("data-roving-tabindex");
}
function findFirstIndexInArray(elements, predicate, startIndex = 0) {
  const index = elements.slice(startIndex).findIndex(predicate);
  return -1 === index ? -1 : index + startIndex;
}
function findLastIndexInArray(elements, predicate, startIndex = elements.length - 1) {
  const index = elements.slice(0, startIndex + 1).reverse().findIndex(predicate);
  return -1 === index ? -1 : startIndex - index;
}
function findNavigableDescendants(element, output = []) {
  for (let i = 0, len = element.children.length; i < len; i++) {
    const child = element.children.item(i);
    isHTMLElement(child) && ((child.hasAttribute("data-roving-tabindex") || isNavigableElement(child)) && output.push(child), findNavigableDescendants(child, output));
  }
  return output;
}
function isInteractive(element) {
  return function(element2) {
    const computedStyle = window.getComputedStyle(element2);
    return "visible" === computedStyle.visibility && "none" !== computedStyle.display;
  }(element) && function(element2) {
    return !element2.disabled;
  }(element);
}
function useRovingTabIndex(elementRef, navigationKeys, childQuery) {
  reactExports.useLayoutEffect(() => {
    const rovingTabIndex = new RovingTabIndex(navigationKeys, ensure(elementRef.current), childQuery);
    return () => rovingTabIndex.destroy();
  }, [elementRef, navigationKeys, childQuery]);
}

function TabContainer(props) {
  const id = reactExports.useState(() => newId())[0], [activeTab, activeTabChanged, setActiveTab] = function(activeTab2, defaultTab) {
    const previousCurrentValueRef = reactExports.useRef(void 0), setActiveTab2 = reactExports.useCallback((newTab) => {
      activeTab2 && !activeTab2.readOnly && activeTab2.setValue(new Big(newTab + 1));
    }, [activeTab2?.readOnly, activeTab2?.setValue]);
    if (!activeTab2)
      return [defaultTab, false, () => {
      }];
    const currentValue = Math.max(activeTab2.value?.toNumber() ?? 0, 0), activeTabChanged2 = previousCurrentValueRef.current !== currentValue;
    activeTabChanged2 && (previousCurrentValueRef.current = currentValue);
    return [currentValue - 1, activeTabChanged2, setActiveTab2];
  }(props.activeTab, props.defaultTab), [selectedTabIndex, selectionHasChanged, setSelectedTabIndex] = function(tabs, activeTab2, activeTabChanged2, setActiveTab2) {
    const [selectedTabIndex2, setSelectedTabIndex2] = usePersistentState("selectedTab", activeTab2);
    let visibleTabToSelect = selectedTabIndex2 >= tabs.length ? -1 : selectedTabIndex2;
    if (-1 !== visibleTabToSelect) {
      for (; !isVisible(ensure(tabs[visibleTabToSelect])) && (visibleTabToSelect = (visibleTabToSelect + 1) % tabs.length, visibleTabToSelect !== selectedTabIndex2); )
        ;
      visibleTabToSelect !== selectedTabIndex2 && setSelectedTabIndex2(visibleTabToSelect);
    }
    const previousSelectionRef = reactExports.useRef(visibleTabToSelect), selectionHasChanged2 = previousSelectionRef.current !== visibleTabToSelect;
    previousSelectionRef.current = visibleTabToSelect, activeTabChanged2 && -1 !== activeTab2 && activeTab2 + 1 <= tabs.length && previousSelectionRef.current !== activeTab2 && selectTabIndex(activeTab2, false);
    const forceUpdate = useForceUpdate();
    function selectTabIndex(tabIndex, updateAttribute = true) {
      tabIndex === visibleTabToSelect ? (previousSelectionRef.current = -1, forceUpdate()) : (setSelectedTabIndex2(tabIndex), updateAttribute && setActiveTab2(tabIndex));
    }
    return tuple(visibleTabToSelect, selectionHasChanged2, selectTabIndex);
  }(props.tabs, activeTab, activeTabChanged, setActiveTab), tabsState = function(tabs, selectedTabIndex2, selectionHasChanged2) {
    const tabStateRef = reactExports.useRef(tabs.map((tab) => !tab.isDelayed && isVisible(tab) ? { key: 0 } : "hidden"));
    if (-1 !== selectedTabIndex2) {
      const selectedTabState = ensure(tabStateRef.current[selectedTabIndex2]);
      "hidden" === selectedTabState ? tabStateRef.current[selectedTabIndex2] = { key: 0 } : selectionHasChanged2 && ensure(tabs[selectedTabIndex2]).refreshOnShow && (selectedTabState.key += 1);
    }
    return tabStateRef.current;
  }(props.tabs, selectedTabIndex, selectionHasChanged), [invalidCounts, handleStore] = function(widgetName, length) {
    const [invalidCounts2, setInvalidCounts] = reactExports.useState(() => repeat(length, () => 0)), disposersRef = reactExports.useRef(repeat(length, () => {
    }));
    function handleStore2(store, index) {
      disposersRef.current[index]?.();
      const allInvalid$ = store.getAll$("isInvalid");
      disposersRef.current[index] = reaction(() => allInvalid$.dependOn().filter(Boolean).length, (invalidCount) => {
        setInvalidCounts((prevInvalidCounts) => {
          const newInvalidCounts = [...prevInvalidCounts];
          return newInvalidCounts[index] = invalidCount, newInvalidCounts;
        });
      }, { fireImmediately: false, name: `Validation of tab ${index} of ${widgetName}` });
    }
    return reactExports.useEffect(() => () => disposersRef.current.forEach((d) => d?.()), []), tuple(invalidCounts2, handleStore2);
  }(props.name, props.tabs.length), tabContainerNode = reactExports.useRef(null), tabListNode = reactExports.useRef(null), tabContentNode = reactExports.useRef(null);
  return useRovingTabIndex(tabListNode, NavigationKeys.LeftRight, reactExports.useCallback((element) => element.querySelectorAll("a"), [])), useLegacyResize(tabContainerNode, reactExports.useCallback(function(container) {
    const tabContent = ensure(tabContentNode.current);
    if (!container)
      return tabContent.style.height = "auto", void (tabContent.style.overflow = "");
    const parentBox = getBox(container), tabListBox = getBox(ensure(tabListNode.current)), remainder = parentBox.contentBox.height - tabListBox.marginBox.height;
    remainder > 100 ? (tabContent.style.height = `${remainder}px`, tabContent.style.overflow = "auto") : (tabContent.style.height = "auto", tabContent.style.overflow = "");
  }, [tabContentNode, tabListNode])), props.hoistedSelections?.forEach((s) => {
    const [value$, setValue] = useStoreBackendValue(s, "selection");
    setValue(readUntracked(value$));
  }), jsxRuntimeExports.jsxs("div", { className: classNames("mx-tabcontainer", props.class), style: props.style, "data-focusindex": props.tabIndex, ref: tabContainerNode, children: [jsxRuntimeExports.jsx("ul", { className: "nav nav-tabs mx-tabcontainer-tabs", role: "tablist", ref: tabListNode, children: props.tabs.map((tab, index) => isVisible(tab) ? jsxRuntimeExports.jsxs("li", { className: classNames({ active: selectedTabIndex === index }), role: "presentation", onClick: (e) => {
    setSelectedTabIndex(index), e.preventDefault();
  }, children: [jsxRuntimeExports.jsxs("a", { href: "#", className: `mx-name-${tab.name}`, id: `${id}-t${index}`, "aria-controls": `${id}-p${index}`, role: "tab", "aria-selected": selectedTabIndex === index, children: [tab.caption.value, tab.badge && jsxRuntimeExports.jsx("span", { className: "mx-tabcontainer-badge", style: { display: tab.badge.value ? "inline-block" : "none" }, children: tab.badge.value })] }), ensure(invalidCounts[index]) > 0 && jsxRuntimeExports.jsx("span", { className: "mx-tabcontainer-indicator", children: invalidCounts[index] })] }, index) : void 0) }), jsxRuntimeExports.jsx("div", { className: "tab-content mx-tabcontainer-content", "data-focusindex": "0", ref: tabContentNode, children: props.tabs.map((tab, index) => {
    const tabState = ensure(tabsState[index]), isContentVisible = reactExports.useMemo(() => void 0 === tab.isVisible || !!tab.isVisible.value, [tab.isVisible]);
    return jsxRuntimeExports.jsx("div", { className: classNames("tab-pane mx-tabcontainer-pane", { active: selectedTabIndex === index }), style: isVisible(tab) ? void 0 : { display: "none" }, id: `${id}-p${index}`, role: "tabpanel", "aria-labelledby": `${id}-t${index}`, children: jsxRuntimeExports.jsx(NestedStoreProvider, { namespace: `${props.widgetId}.${index}`, setupStore: reactExports.useCallback((store) => handleStore(store, index), []), children: "hidden" !== tabState && isContentVisible ? jsxRuntimeExports.jsx(PageFragment, { renderKey: tabState.key, children: tab.content }) : null }) }, index);
  }) })] });
}
function isVisible(tab) {
  return !tab.isVisible || "loading" === tab.isVisible.status && void 0 === tab.isVisible.value || Boolean(tab.isVisible.value);
}

export { TabContainer };
