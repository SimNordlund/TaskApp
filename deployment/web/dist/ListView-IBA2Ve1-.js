import { useIsFirstRender, reactExports, contains, attribute, literal, or, jsxRuntimeExports, classNames, translate, getStaticResourceUrl } from './index-CmmNAaD_.js';

function ListView(props) {
  useIsFirstRender() && props.listValue.limit === Number.POSITIVE_INFINITY && 0 !== props.pageSize && props.listValue.setLimit(props.pageSize);
  const [isLoadingMore, setIsLoadingMore] = reactExports.useState(false), dataAtLastLoadMore = reactExports.useRef();
  if (!isLoadingMore || "available" === props.listValue.status && props.listValue.items === dataAtLastLoadMore.current || setIsLoadingMore(false), "available" === props.listValue.status && props.listValue.items && props.selection) {
    const currentSelection = props.selection.value?.[0], fixedSelection = props.listValue.items[0]?.id;
    currentSelection !== fixedSelection && props.listValue.items.every((i) => i.id !== currentSelection) && props.selection.setValue(fixedSelection ? [fixedSelection] : void 0);
  }
  const [searchValue, setSearchValue] = reactExports.useState(getSearchValueFromFilter);
  reactExports.useEffect(() => setSearchValue(getSearchValueFromFilter()), [props.listValue.filter]), reactExports.useEffect(function() {
    const trimmedSearchValue = searchValue.trim();
    if (trimmedSearchValue === getSearchValueFromFilter())
      return;
    clearTimeout(searchTimeout.current), searchTimeout.current = window.setTimeout(() => {
      const searchExpressions = "" !== trimmedSearchValue ? props.searchAttributes.map((s) => contains(attribute(s.id), literal(trimmedSearchValue))) : [], filter = 0 === searchExpressions.length ? void 0 : 1 === searchExpressions.length ? searchExpressions[0] : or(...searchExpressions);
      props.listValue.setFilter(filter);
    }, 500);
  }, [searchValue]);
  const searchTimeout = reactExports.useRef(), contentProps = { listValue: props.listValue, itemTemplate: props.itemTemplate, selection: props.selection, onClick: props.onClick, isLoadingMore };
  return jsxRuntimeExports.jsxs("div", { className: classNames("mx-listview", props.class, { "mx-listview-clickable": null != props.onClick }), style: props.style, children: [props.searchAttributes && jsxRuntimeExports.jsxs("div", { className: "mx-listview-searchbar", children: [jsxRuntimeExports.jsx("input", { type: "text", placeholder: translate("mxui.widget.ListView", "search"), className: "form-control", value: searchValue, onChange: (e) => setSearchValue(e.target.value), "aria-label": translate("mxui.widget.ListView", "search") }), jsxRuntimeExports.jsx("button", { className: "btn mx-button", onClick: () => {
    "" !== searchValue ? setSearchValue("") : (props.listValue.reload(), 0 !== props.pageSize && props.listValue.setLimit(props.pageSize));
  }, "aria-label": translate("mxui.widget.ListView", "refresh"), title: translate("mxui.widget.ListView", "refresh"), children: jsxRuntimeExports.jsx("span", { className: classNames("mx-icon-filled", searchValue ? "mx-icon-remove" : "mx-icon-refresh") }) })] }), reactExports.useMemo(() => jsxRuntimeExports.jsx(ListViewContent, { ...contentProps }), Object.values(contentProps)), props.listValue.hasMoreItems && !isLoadingMore && jsxRuntimeExports.jsxs("button", { type: "button", className: "btn mx-button mx-listview-loadMore", onClick: function(e) {
    e.stopPropagation(), props.listValue.setLimit(props.listValue.limit + props.pageSize), setIsLoadingMore(true), dataAtLastLoadMore.current = props.listValue.items;
  }, children: [jsxRuntimeExports.jsx("span", { className: "mx-icon-filled mx-icon-repeat" }), " ", translate("mxui.widget.ListView", "load_more")] })] });
  function getSearchValueFromFilter() {
    const filter = props.listValue.filter;
    if (void 0 !== filter) {
      const condition = "or" === filter.name ? filter.args[0] : filter;
      if ("contains" === condition.name && "string" === condition.arg2.valueType)
        return condition.arg2.value;
    }
    return "";
  }
}
function ListViewContent(props) {
  return jsxRuntimeExports.jsxs("ul", { children: [0 === props.listValue.items?.length && jsxRuntimeExports.jsx("li", { className: "mx-listview-empty", children: jsxRuntimeExports.jsx("label", { children: translate("mxui.widget.ListView", "no_items") }) }), (props.listValue.items ?? []).map((item, index) => {
    const selection = props.selection, onClick = props.onClick?.get(item), clickEventHandler = onClick ? (e) => function(e2, action) {
      e2.stopPropagation(), !action.canExecute || action.disabledDuringExecution && action.isExecuting || action.execute();
    }(e, onClick) : selection ? () => function(item2, selection2) {
      selection2.value?.includes(item2.id) || selection2.setValue([item2.id]);
    }(item, selection) : void 0;
    return jsxRuntimeExports.jsx("li", { className: classNames(`mx-name-index-${index}`, { selected: selection?.value?.includes(item.id) }), tabIndex: clickEventHandler ? 0 : -1, role: clickEventHandler ? "button" : void 0, onClick: clickEventHandler, onKeyDown: clickEventHandler ? (e) => function(e2, clickEventHandler2) {
      "Enter" !== e2.key && " " !== e2.key || (e2.preventDefault(), clickEventHandler2(e2));
    }(e, clickEventHandler) : void 0, children: jsxRuntimeExports.jsx("div", { className: "mx-dataview", "data-focusindex": "0", children: jsxRuntimeExports.jsx("div", { className: "mx-dataview-content", children: props.itemTemplate?.get(item) }) }) }, item.id);
  }), props.isLoadingMore && jsxRuntimeExports.jsx("li", { className: "mx-listview-loading", children: jsxRuntimeExports.jsx("img", { src: getStaticResourceUrl("mxclientsystem/images/loading.gif") }) })] });
}

export { ListView };
