import { reactExports, ensure, jsxRuntimeExports, classNames } from './index-CmmNAaD_.js';
import { debounce, Alert, getAriaLabelProps, getValidationAriaProps } from './TextBox-Do0-cbSY.js';

function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
var index$1 = reactExports.useLayoutEffect, updateRef = function(ref, value) {
  "function" != typeof ref ? ref.current = value : ref(value);
}, HIDDEN_TEXTAREA_STYLE = { "min-height": "0", "max-height": "none", height: "0", visibility: "hidden", overflow: "hidden", position: "absolute", "z-index": "-1000", top: "0", right: "0", display: "block" }, forceHiddenStyles$1 = function(node) {
  Object.keys(HIDDEN_TEXTAREA_STYLE).forEach(function(key) {
    node.style.setProperty(key, HIDDEN_TEXTAREA_STYLE[key], "important");
  });
}, hiddenTextarea = null, getHeight = function(node, sizingData) {
  var height = node.scrollHeight;
  return "border-box" === sizingData.sizingStyle.boxSizing ? height + sizingData.borderSize : height - sizingData.paddingSize;
};
var noop = function() {
}, SIZING_STYLE = ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "boxSizing", "fontFamily", "fontSize", "fontStyle", "fontWeight", "letterSpacing", "lineHeight", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "tabSize", "textIndent", "textRendering", "textTransform", "width", "wordBreak", "wordSpacing", "scrollbarGutter"], isIE = !!document.documentElement.currentStyle, getSizingData$1 = function(node) {
  var style = window.getComputedStyle(node);
  if (null === style)
    return null;
  var obj, sizingStyle = (obj = style, SIZING_STYLE.reduce(function(acc, prop) {
    return acc[prop] = obj[prop], acc;
  }, {})), boxSizing = sizingStyle.boxSizing;
  return "" === boxSizing ? null : (isIE && "border-box" === boxSizing && (sizingStyle.width = parseFloat(sizingStyle.width) + parseFloat(sizingStyle.borderRightWidth) + parseFloat(sizingStyle.borderLeftWidth) + parseFloat(sizingStyle.paddingRight) + parseFloat(sizingStyle.paddingLeft) + "px"), { sizingStyle, paddingSize: parseFloat(sizingStyle.paddingBottom) + parseFloat(sizingStyle.paddingTop), borderSize: parseFloat(sizingStyle.borderBottomWidth) + parseFloat(sizingStyle.borderTopWidth) });
};
function useListener(target, type, listener) {
  var value, ref, latestListener = (value = listener, ref = reactExports.useRef(value), index$1(function() {
    ref.current = value;
  }), ref);
  reactExports.useLayoutEffect(function() {
    var handler = function(ev) {
      return latestListener.current(ev);
    };
    if (target)
      return target.addEventListener(type, handler), function() {
        return target.removeEventListener(type, handler);
      };
  }, []);
}
var _excluded = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"], TextareaAutosize = function(_ref, userRef) {
  var cacheMeasurements = _ref.cacheMeasurements, maxRows = _ref.maxRows, minRows = _ref.minRows, _ref$onChange = _ref.onChange, onChange = void 0 === _ref$onChange ? noop : _ref$onChange, _ref$onHeightChange = _ref.onHeightChange, onHeightChange = void 0 === _ref$onHeightChange ? noop : _ref$onHeightChange, props = function(r, e) {
    if (null == r)
      return {};
    var t = {};
    for (var n in r)
      if ({}.hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n))
          continue;
        t[n] = r[n];
      }
    return t;
  }(_ref, _excluded), isControlled = void 0 !== props.value, libRef = reactExports.useRef(null), ref = function(libRef2, userRef2) {
    var prevUserRef = reactExports.useRef();
    return reactExports.useCallback(function(instance) {
      libRef2.current = instance, prevUserRef.current && updateRef(prevUserRef.current, null), prevUserRef.current = userRef2, userRef2 && updateRef(userRef2, instance);
    }, [userRef2]);
  }(libRef, userRef), heightRef = reactExports.useRef(0), measurementsCacheRef = reactExports.useRef(), resizeTextarea = function() {
    var node = libRef.current, nodeSizingData = cacheMeasurements && measurementsCacheRef.current ? measurementsCacheRef.current : getSizingData$1(node);
    if (nodeSizingData) {
      measurementsCacheRef.current = nodeSizingData;
      var _calculateNodeHeight = function(sizingData, value, minRows2, maxRows2) {
        void 0 === minRows2 && (minRows2 = 1), void 0 === maxRows2 && (maxRows2 = 1 / 0), hiddenTextarea || ((hiddenTextarea = document.createElement("textarea")).setAttribute("tabindex", "-1"), hiddenTextarea.setAttribute("aria-hidden", "true"), forceHiddenStyles$1(hiddenTextarea)), null === hiddenTextarea.parentNode && document.body.appendChild(hiddenTextarea);
        var paddingSize = sizingData.paddingSize, borderSize = sizingData.borderSize, sizingStyle = sizingData.sizingStyle, boxSizing = sizingStyle.boxSizing;
        Object.keys(sizingStyle).forEach(function(_key) {
          var key = _key;
          hiddenTextarea.style[key] = sizingStyle[key];
        }), forceHiddenStyles$1(hiddenTextarea), hiddenTextarea.value = value;
        var height2 = getHeight(hiddenTextarea, sizingData);
        hiddenTextarea.value = value, height2 = getHeight(hiddenTextarea, sizingData), hiddenTextarea.value = "x";
        var rowHeight2 = hiddenTextarea.scrollHeight - paddingSize, minHeight = rowHeight2 * minRows2;
        "border-box" === boxSizing && (minHeight = minHeight + paddingSize + borderSize), height2 = Math.max(minHeight, height2);
        var maxHeight = rowHeight2 * maxRows2;
        return "border-box" === boxSizing && (maxHeight = maxHeight + paddingSize + borderSize), [height2 = Math.min(maxHeight, height2), rowHeight2];
      }(nodeSizingData, node.value || node.placeholder || "x", minRows, maxRows), height = _calculateNodeHeight[0], rowHeight = _calculateNodeHeight[1];
      heightRef.current !== height && (heightRef.current = height, node.style.setProperty("height", height + "px", "important"), onHeightChange(height, { rowHeight }));
    }
  };
  return reactExports.useLayoutEffect(resizeTextarea), function(libRef2, listener) {
    useListener(document.body, "reset", function(ev) {
      libRef2.current.form === ev.target && listener(ev);
    });
  }(libRef, function() {
    if (!isControlled) {
      var currentValue = libRef.current.value;
      requestAnimationFrame(function() {
        var node = libRef.current;
        node && currentValue !== node.value && resizeTextarea();
      });
    }
  }), useListener(window, "resize", resizeTextarea), function(listener) {
    useListener(document.fonts, "loadingdone", listener);
  }(resizeTextarea), reactExports.createElement("textarea", _extends({}, props, { onChange: function(event) {
    isControlled || resizeTextarea(), onChange(event);
  }, ref }));
}, index = reactExports.forwardRef(TextareaAutosize);
class TextArea extends reactExports.Component {
  constructor() {
    super(...arguments), this.state = {}, this.onChangeHandler = this.onChange.bind(this), this.onFocusHandler = this.onFocus.bind(this), this.onBlurHandler = this.onBlur.bind(this), this.onChangeBehaviourHandler = this.createOnChangeBehaviour();
  }
  componentDidMount() {
    const maxLength = this.props.maxLength;
    void 0 !== maxLength && this.props.inputValue.setValidator((val) => void 0 !== val && val.length > maxLength ? this.props.textTooLongMessage.value : void 0);
  }
  componentDidUpdate(prevProps) {
    this.props.inputValue.displayValue !== prevProps.inputValue.displayValue && this.setState({ editedValue: void 0 }), "available" !== prevProps.inputValue.status && "available" === this.props.inputValue.status && this.props.autoGrow && setTimeout(() => window.dispatchEvent(new Event("resize")), 0);
  }
  createOnChangeBehaviour() {
    return this.props.submitWhileEditing ? debounce(this.submitValue.bind(this), ensure(this.props.submitDelay)) : () => {
    };
  }
  getCurrentValue() {
    return this.state.editedValue ?? this.props.inputValue.displayValue;
  }
  submitValue() {
    const inputValue = this.props.inputValue, currentValue = this.getCurrentValue();
    currentValue !== inputValue.displayValue ? inputValue.setValue(currentValue) : this.setState({ editedValue: void 0 });
  }
  onChange(e) {
    this.setState({ editedValue: e.target.value }, () => {
      !this.props.inputValue.readOnly && e.target instanceof HTMLTextAreaElement && document.activeElement !== e.target && this.submitValue();
    }), this.onChangeBehaviourHandler();
  }
  onFocus() {
    this.dispatchAction("onEnter");
  }
  onBlur() {
    this.submitValue(), this.dispatchAction("onLeave");
  }
  render() {
    return jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [this.props.inputValue.readOnly && "control" !== this.props.readOnlyStyle ? this.renderAsText() : this.renderAsInput(), this.renderCounterMessage(), jsxRuntimeExports.jsx(Alert, { id: `${this.props.id}-error`, validation: this.props.inputValue.validation })] });
  }
  renderCounterMessage() {
    return !this.props.inputValue.readOnly && this.props.maxLength && this.props.counterMessage?.value ? jsxRuntimeExports.jsx("label", { className: "mx-textarea-counter", children: this.props.counterMessage.value.replace("{1}", this.getCurrentValue().length.toString()).replace("{2}", this.props.maxLength.toString()) }) : null;
  }
  renderAsInput() {
    return jsxRuntimeExports.jsx(index, { id: this.props.id, className: classNames("form-control", "mx-textarea-input", { "mx-textarea-noresize": !this.props.autoGrow }), value: this.getCurrentValue(), tabIndex: this.props.tabIndex, maxLength: this.props.maxLength, minRows: this.props.autoGrow ? 2 : this.props.numberOfLines, maxRows: this.props.autoGrow ? void 0 : this.props.numberOfLines, placeholder: this.props.placeholder.value && this.props.placeholder.value.length > 0 ? this.props.placeholder.value : void 0, onChange: this.onChangeHandler, onFocus: this.onFocusHandler, onBlur: this.onBlurHandler, disabled: this.props.inputValue.readOnly, ...getAriaLabelProps(this.props.ariaLabel?.value), ...getValidationAriaProps(this.props.inputValue.validation, this.props.id), "aria-required": this.props.ariaRequired });
  }
  renderAsText() {
    return jsxRuntimeExports.jsx("div", { className: "form-control-static", children: this.getCurrentValue() || "\xA0" });
  }
  dispatchAction(property) {
    const prop = this.props[property];
    "available" === this.props.inputValue.status && prop && prop.execute();
  }
}

export { TextArea };
