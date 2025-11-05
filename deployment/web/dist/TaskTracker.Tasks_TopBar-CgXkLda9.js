import { reactExports, t, jsxRuntimeExports, classNames, reactDomExports, asPluginWidgets, Fragment, selectTranslation, PlaceholderProperty } from './index-4mfddfkU.js';
import { ActionButton, TextProperty, ActionProperty } from './ActionButton-B2qOJ4td.js';
import { Placeholder, ExpressionProperty } from './Placeholder-Ouf8FsgU.js';
import { MicroflowObjectProperty } from './MicroflowObjectProperty-DSOqr-FG.js';
import { WebIconProperty } from './WebIconProperty-D31g4FWT.js';
import { WebStaticImageProperty } from './WebStaticImageProperty-_lIkqA-b.js';
import { ConditionalVisibilityWrapper } from './ConditionalVisibilityWrapper-51nXt5AX.js';
import { Container } from './Container-Dx2M9vEg.js';
import { DataView } from './DataView-BR45rEOj.js';
import './Fragment-DrLk0xpL.js';
import { ImageWidgetModule, Text } from './Text-BEd6XRh9.js';
import { useMenuActiveItem, preProcessMenus, createAnchor, SidebarToggle, NavigationTree } from './SidebarToggle-fh3TqfUx.js';
import './Y8h_6YnI-C02bM5Tk.js';
import { ScrollContainer } from './ScrollContainer-C-B529-s.js';

var classnames$1 = {exports: {}};

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
/* global define */
(function () {

  var hasOwn = {}.hasOwnProperty;

  function classNames() {
    var classes = [];

    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!arg) continue;
      var argType = typeof arg;

      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg)) {
        if (arg.length) {
          var inner = classNames.apply(null, arg);

          if (inner) {
            classes.push(inner);
          }
        }
      } else if (argType === 'object') {
        if (arg.toString === Object.prototype.toString) {
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        } else {
          classes.push(arg.toString());
        }
      }
    }

    return classes.join(' ');
  }

  if (module.exports) {
    classNames.default = classNames;
    module.exports = classNames;
  } else {
    window.classNames = classNames;
  }
})();
}(classnames$1));

var classnames = classnames$1.exports;

/* eslint-disable no-unused-vars */
const MF_CUSTOM_AUTHENTICATION = "AppSwitcherModule.DS_CustomAuthentication";
var LoadingState;
(function (LoadingState) {
    LoadingState["Idle"] = "idle";
    LoadingState["Fetching"] = "fetching";
    LoadingState["Complete"] = "complete";
    LoadingState["Failed"] = "failed";
})(LoadingState || (LoadingState = {}));

var HorizontalPosition;
(function (HorizontalPosition) {
    HorizontalPosition[HorizontalPosition["left"] = 0] = "left";
    HorizontalPosition[HorizontalPosition["right"] = 1] = "right";
})(HorizontalPosition || (HorizontalPosition = {}));
var VerticalPosition;
(function (VerticalPosition) {
    VerticalPosition[VerticalPosition["up"] = 0] = "up";
    VerticalPosition[VerticalPosition["down"] = 1] = "down";
})(VerticalPosition || (VerticalPosition = {}));

const useDeterminePosition = ({ elementRef, width, height, isOpen, isReady }) => {
    const [positionX, setPositionX] = reactExports.useState(HorizontalPosition.right);
    const [positionY, setPositionY] = reactExports.useState(VerticalPosition.down);
    reactExports.useEffect(() => {
        if (elementRef && width && height && isOpen) {
            const position = elementRef.getBoundingClientRect();
            const offsetLeft = position.x;
            const offsetTop = position.y;
            // determine horizontal axis position
            if (offsetLeft + width > window.innerWidth) {
                setPositionX(HorizontalPosition.left);
            }
            else {
                setPositionX(HorizontalPosition.right);
            }
            // determine vertical axis position
            if (offsetTop + height > window.innerHeight) {
                setPositionY(VerticalPosition.up);
            }
            else {
                setPositionY(VerticalPosition.down);
            }
        }
    }, [isReady, isOpen, width, height, elementRef]);
    return [positionX, positionY];
};

const getCustomAuthToken = async () => {
    const result = new Promise((resolve, reject) => {
        window.mx.data.action({
            params: {
                actionname: MF_CUSTOM_AUTHENTICATION
            },
            callback: (response) => {
                const customAuthentication = JSON.parse(response);
                resolve(customAuthentication);
            },
            error: e => {
                reject(e);
            }
        });
    });
    return result;
};

const useFetchAppList = (isOpen, forceRefresh, baseURL) => {
    const [loadingState, setLoadingState] = reactExports.useState(LoadingState.Idle);
    const [appList, setAppList] = reactExports.useState([]);
    const [tokenIsValid, setTokenIsValid] = reactExports.useState(false);
    const [authorizationError, setAuthorizationError] = reactExports.useState(false);
    const [fetchCount, setFetchCount] = reactExports.useState(0);
    const [timeStamp, setTimeStamp] = reactExports.useState();
    const [authenticationData, setAuthenticationData] = reactExports.useState();
    const shouldRefreshAuthToken = () => {
        if (!timeStamp || !authenticationData) {
            return true;
        }
        const now = new Date();
        const diffInSeconds = Math.round((now.getTime() - timeStamp.getTime()) / 1000);
        return diffInSeconds >= authenticationData.timeToLive || fetchCount >= authenticationData.timesToUse;
    };
    reactExports.useEffect(() => {
        if (shouldRefreshAuthToken()) {
            setTokenIsValid(false);
            return;
        }
        if (isOpen) {
            fetchAppList();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authenticationData, forceRefresh, isOpen]); // Warning: fetchAppList can't be added as dependency because it will create a loop.
    reactExports.useEffect(() => {
        if (!tokenIsValid) {
            getCustomAuthToken().then(customAuthentication => {
                if (!customAuthentication.authorization) {
                    setAuthorizationError(true);
                    return;
                }
                setAuthenticationData(customAuthentication);
                setFetchCount(0);
                setTokenIsValid(true);
                setTimeStamp(new Date());
            });
        }
    }, [tokenIsValid]);
    const fetchAppList = reactExports.useCallback(async () => {
        if (!authenticationData || !authenticationData.authorization || loadingState === LoadingState.Fetching) {
            return;
        }
        setLoadingState(LoadingState.Fetching);
        setFetchCount(fetchCount => fetchCount + 1);
        const url = `${baseURL}/users/${authenticationData.userId}/apps?refresh=${forceRefresh}`;
        const options = {
            method: "GET",
            headers: {
                Authorization: authenticationData.authorization,
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        };
        fetch(url, options)
            .then(response => {
            if (!response.ok || response.status >= 400) {
                setTokenIsValid(false);
                return;
            }
            const json = response.json();
            setLoadingState(LoadingState.Complete);
            return json;
        })
            .then(json => {
            if (json) {
                setAppList(json);
            }
        })
            .catch(() => {
            setTokenIsValid(false);
            setLoadingState(LoadingState.Failed);
            console.error("AppSwitcher >> Invalid token. Please refresh it.");
        });
    }, [authenticationData, baseURL, forceRefresh, loadingState]);
    return { authorizationError, appListLoadingState: loadingState, appList };
};

const ArrowLeftIcon = ({ className = "" }) => (
// TODO: This icon is super complex for what it needs to do. Maybe we can simplify it.
reactExports.createElement("svg", { className: className, viewBox: "0 0 16 17", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    reactExports.createElement("g", { clipPath: "url(#clip0_1814_7216)" },
        reactExports.createElement("path", { d: "M15.5 8.5H0.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        reactExports.createElement("path", { d: "M7.5 15.5L0.5 8.5L7.5 1.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })),
    reactExports.createElement("defs", null,
        reactExports.createElement("clipPath", { id: "clip0_1814_7216" },
            reactExports.createElement("rect", { width: "16", height: "16", fill: "currentColor", transform: "translate(0 0.5)" })))));
var ArrowLeftIcon$1 = t.memo(ArrowLeftIcon);

const SearchIcon = ({ className = "" }) => (reactExports.createElement("svg", { className: className, viewBox: "0 0 24 24" },
    reactExports.createElement("path", { stroke: "currentColor", fill: "transparent", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", d: "M14.406 18.573A7.874 7.874 0 108.246 4.08a7.874 7.874 0 006.16 14.493zM16.893 16.893L23 23.001" })));
var SearchIcon$1 = t.memo(SearchIcon);

const ExternalLinkIcon = ({ className = "" }) => (reactExports.createElement("svg", { className: className, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    reactExports.createElement("path", { d: "M15 10.8333V15.8333C15 16.2754 14.8244 16.6993 14.5118 17.0118C14.1993 17.3244 13.7754 17.5 13.3333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V6.66667C2.5 6.22464 2.67559 5.80072 2.98816 5.48816C3.30072 5.17559 3.72464 5 4.16667 5H9.16667", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
    reactExports.createElement("path", { d: "M12.5 2.5H17.5V7.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
    reactExports.createElement("path", { d: "M8.33337 11.6667L17.5 2.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })));
var ExternalLinkIcon$1 = t.memo(ExternalLinkIcon);

const AppListItem = ({ data }) => {
    return (reactExports.createElement("a", { href: data.appURL, className: "mxappswitcher-list-item", title: data.appName },
        reactExports.createElement("div", { className: "mxappswitcher-list-item__container", key: data.appId },
            reactExports.createElement("img", { className: "mxappswitcher-list-item__image", src: Object.prototype.hasOwnProperty.call(data, "appLogo")
                    ? data.appLogo
                    : "./img/AppSwitcherModule$Images$Mendix_logo.svg" }),
            reactExports.createElement("p", { className: "mxappswitcher-list-item__name" }, data.appName),
            reactExports.createElement("a", { href: data.appURL, className: "mxappswitcher-list-item__link", target: "_blank", rel: "noreferrer" },
                reactExports.createElement(ExternalLinkIcon$1, { className: "mxappswitcher-list-item__external-link" })))));
};

const ForceRefreshIcon = ({ className = "" }) => (reactExports.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", className: className, viewBox: "0 0 20 20" },
    reactExports.createElement("path", { d: "M19.167 3.333v5h-5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
    reactExports.createElement("path", { d: "M17.075 12.5a7.5 7.5 0 11-1.767-7.8l3.859 3.633", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })));
var ForceRefreshIcon$1 = t.memo(ForceRefreshIcon);

const AppList = ({ appList, setForceRefresh, forceRefresh, setSearchValue }) => {
    const onSetForceRefresh = () => {
        setForceRefresh(true);
        setSearchValue("");
    };
    return (reactExports.createElement("div", { className: "mxappswitcher-list mxappswitcher-panel__list" },
        (appList === null || appList === void 0 ? void 0 : appList.length) === 0 && reactExports.createElement("span", { className: "mxappswitcher-list__empty-message" }, "No apps found"),
        appList && appList.length > 0 && (reactExports.createElement(reactExports.Fragment, null,
            reactExports.createElement("div", { className: "mxappswitcher-list__title-wrapper" },
                reactExports.createElement("span", { className: "mxappswitcher-list__title" }, "Your apps"),
                reactExports.createElement("button", { className: classnames("mxappswitcher-list__refresh-button", {
                        "mxappswitcher-list__refresh-button--disabled": forceRefresh
                    }), onClick: onSetForceRefresh },
                    reactExports.createElement(ForceRefreshIcon$1, { className: "mxappswitcher-list__refresh-button-icon" }))),
            appList.map((appData) => {
                return reactExports.createElement(AppListItem, { data: appData, key: appData.appId });
            })))));
};

const Footer = () => {
    return (reactExports.createElement("div", { className: "mxappswitcher-footer mxappswitcher-panel__footer" },
        reactExports.createElement("img", { className: "mxappswitcher-footer__logo", src: "./img/AppSwitcherModule$Images$Mendix_logo.svg" }),
        reactExports.createElement("div", { className: "mxappswitcher-footer__text" },
            reactExports.createElement("p", { className: "mxappswitcher-footer__details" }, "Have an idea for an app?"),
            reactExports.createElement("p", { className: "mxappswitcher-footer__details" },
                reactExports.createElement("a", { className: "mxappswitcher-footer__link", href: "https://new.mendix.com/link/overview/", target: "_blank", rel: "noreferrer" }, "Create an app"),
                " ",
                "or visit the",
                " ",
                reactExports.createElement("a", { className: "mxappswitcher-footer__link", href: "https://marketplace.mendix.com/", target: "_blank", rel: "noreferrer" }, "Marketplace")))));
};
var Footer$1 = t.memo(Footer);

const SkeletonLoader = () => {
    const skeletonItemCount = 7;
    return (reactExports.createElement("div", { className: "mxappswitcher-skeleton-loader mxappswitcher-panel__skeleton-loader" },
        reactExports.createElement("div", { className: "mxappswitcher-skeleton-loader__box mxappswitcher-skeleton-loader__title" }),
        Array.from({ length: skeletonItemCount }, (_, i) => (reactExports.createElement("div", { key: i, className: "mxappswitcher-skeleton-loader__item" },
            reactExports.createElement("div", { className: "mxappswitcher-skeleton-loader__box mxappswitcher-skeleton-loader__item-icon" }),
            reactExports.createElement("div", { className: "mxappswitcher-skeleton-loader__box mxappswitcher-skeleton-loader__item-name" }),
            reactExports.createElement("div", { className: "mxappswitcher-skeleton-loader__box mxappswitcher-skeleton-loader__item-link" }))))));
};
var SkeletonLoader$1 = t.memo(SkeletonLoader);

const AppSwitcherPanel = ({ appListResponse, appListLoadingState, setForceRefresh, authorizationError, forceRefresh, positioning, positionX, positionY, setAppSwitcherPanelWidth, setAppSwitcherPanelHeight, onClose }) => {
    const ref = reactExports.useRef(null);
    const [filteredAppList, setFilteredAppList] = reactExports.useState();
    const [searchValue, setSearchValue] = reactExports.useState("");
    reactExports.useEffect(() => {
        setFilteredAppList(appListResponse);
    }, [appListResponse]);
    const onSearchChange = (event) => {
        const searchQuery = event.target.value;
        setSearchValue(event.target.value);
        if (searchQuery !== "") {
            const result = filterAppList(searchQuery);
            setFilteredAppList(result);
        }
        else {
            setFilteredAppList(appListResponse);
        }
    };
    const filterAppList = (searchQuery) => {
        return appListResponse !== undefined
            ? appListResponse.filter((result) => {
                return result.appName.toLowerCase().includes(searchQuery.toLowerCase());
            })
            : [];
    };
    reactExports.useLayoutEffect(() => {
        if (ref.current) {
            setAppSwitcherPanelWidth(ref.current.offsetWidth);
            setAppSwitcherPanelHeight(ref.current.offsetHeight);
        }
    }, [setAppSwitcherPanelHeight, setAppSwitcherPanelWidth]);
    return (reactExports.createElement("div", { className: classnames("mxappswitcher-panel", { "mxappswitcher-panel--sidebar-left": positioning === "sidebarLeft" }, {
            "mxappswitcher-panel--right-up": positioning === "contextMenu" &&
                positionX === HorizontalPosition.right &&
                positionY === VerticalPosition.up
        }, {
            "mxappswitcher-panel--left-up": positioning === "contextMenu" &&
                positionY === VerticalPosition.up &&
                positionX === HorizontalPosition.left
        }, {
            "mxappswitcher-panel--left-down": positioning === "contextMenu" &&
                positionY === VerticalPosition.down &&
                positionX === HorizontalPosition.left
        }), ref: ref },
        reactExports.createElement("button", { onClick: onClose, className: "mxappswitcher-close-button mxappswitcher-panel__close-button" },
            reactExports.createElement(ArrowLeftIcon$1, { className: "mxappswitcher-close-button__icon" }),
            " Close"),
        reactExports.createElement("div", { className: "mxappswitcher-search mxappswitcher-panel__search" },
            reactExports.createElement("input", { className: "mxappswitcher-search__input", type: "text", value: searchValue, onChange: onSearchChange, placeholder: "Search Apps", maxLength: 40 }),
            reactExports.createElement(SearchIcon$1, { className: "mxappswitcher-search__icon" })),
        appListLoadingState === LoadingState.Complete ? (reactExports.createElement(AppList, { appList: filteredAppList, setForceRefresh: setForceRefresh, forceRefresh: forceRefresh, setSearchValue: setSearchValue })) : appListLoadingState === LoadingState.Failed || authorizationError ? (reactExports.createElement("p", { className: "mxappswitcher-error mxappswitcher-panel__error" }, "No app here? No worries! Try to refresh the page or contact your admin.")) : (reactExports.createElement(SkeletonLoader$1, null)),
        reactExports.createElement(Footer$1, null)));
};
var AppSwitcherPanel$1 = t.memo(AppSwitcherPanel);

const SwitcherIcon = ({ className = "" }) => {
    return (reactExports.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: className, fill: "none", viewBox: "0 0 32 32" },
        reactExports.createElement("path", { id: "switcherIconDots", fillRule: "evenodd", clipRule: "evenodd", fill: "currentColor", d: "M8 10a2 2 0 100-4 2 2 0 000 4zM8 18a2 2 0 100-4 2 2 0 000 4zM16 18a2 2 0 100-4 2 2 0 000 4zM24 18a2 2 0 100-4 2 2 0 000 4zM8 26a2 2 0 100-4 2 2 0 000 4zM16 26a2 2 0 100-4 2 2 0 000 4zM24 26a2 2 0 100-4 2 2 0 000 4zM16 10a2 2 0 100-4 2 2 0 000 4zM24 10a2 2 0 100-4 2 2 0 000 4z" })));
};
var SwitcherIcon$1 = t.memo(SwitcherIcon);

const ToggleButton = ({ onClick, setAppSwitcherButtonHeight }) => {
    const ref = reactExports.useRef(null);
    reactExports.useLayoutEffect(() => {
        if (ref.current) {
            setAppSwitcherButtonHeight(ref.current.offsetHeight);
        }
    }, [setAppSwitcherButtonHeight]);
    return (
    // TODO: Add ARIA to the entire implementation.
    reactExports.createElement("button", { className: "mxappswitcher-toggle", onClick: onClick, ref: ref },
        reactExports.createElement(SwitcherIcon$1, { className: "mxappswitcher-toggle__icon" })));
};
var ToggleButton$1 = t.memo(ToggleButton);

const AppSwitcherContainer = (props) => {
    const [isOpen, setIsOpen] = reactExports.useState(false);
    const ref = reactExports.useRef(null);
    const [forceRefresh, setForceRefresh] = reactExports.useState(false);
    const { appListLoadingState, appList, authorizationError } = useFetchAppList(isOpen, forceRefresh, props.baseUrl);
    const [appSwitcherPanelWidth, setAppSwitcherPanelWidth] = reactExports.useState(0);
    const [appSwitcherPanelHeight, setAppSwitcherPanelHeight] = reactExports.useState(0);
    const [appSwitcherButtonHeight, setAppSwitcherButtonHeight] = reactExports.useState(0);
    const [positionX, positionY] = useDeterminePosition({
        elementRef: ref.current,
        width: appSwitcherPanelWidth,
        height: appSwitcherPanelHeight + appSwitcherButtonHeight,
        isOpen,
        isReady: isOpen && appListLoadingState === LoadingState.Complete
    });
    reactExports.useEffect(() => {
        const onOutsideClick = (event) => {
            if (isOpen && ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false);
                setForceRefresh(false);
            }
        };
        document.addEventListener("mousedown", onOutsideClick);
        return () => {
            document.removeEventListener("mousedown", onOutsideClick);
        };
    }, [isOpen]);
    return (reactExports.createElement("div", { className: classnames(props.class, "mxappswitcher"), style: props.style, ref: ref },
        reactExports.createElement(ToggleButton$1, { onClick: () => setIsOpen(!isOpen), setAppSwitcherButtonHeight: setAppSwitcherButtonHeight }),
        isOpen && (reactExports.createElement(AppSwitcherPanel$1, { appListResponse: appList, appListLoadingState: appListLoadingState, setForceRefresh: setForceRefresh, authorizationError: authorizationError, forceRefresh: forceRefresh, positioning: props.positioning, positionX: positionX, positionY: positionY, setAppSwitcherPanelWidth: setAppSwitcherPanelWidth, setAppSwitcherPanelHeight: setAppSwitcherPanelHeight, onClose: () => setIsOpen(false) }))));
};

let AppSwitcher$1 = class AppSwitcher extends reactExports.Component {
    render() {
        return (reactExports.createElement(AppSwitcherContainer, { baseUrl: this.props.baseUrl, positioning: this.props.positioning, name: "", class: "" }));
    }
};

var AppSwitcherWidgetModule = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: AppSwitcher$1
});

const Image = (props) => {
  const [enlarged, setEnlarged] = reactExports.useState(false), image = props.source.value ?? props.placeholder?.value;
  if (!image)
    return jsxRuntimeExports.jsx("img", { style: { display: "none" } });
  const tabIndex = props.alternativeText?.value ?? props.onClick ? { tabIndex: props.tabIndex ?? 0 } : {}, a11yProps = { ...props.alternativeText?.value ? { alt: props.alternativeText.value } : { role: "presentation" }, ...props.onClick ?? props.onClickEnlarge ? { role: "button" } : {}, ...tabIndex }, useMaxSize = props.width && props.height && isInPx(props.width) && isInPx(props.height), onClickHandler = props.onClickEnlarge ? () => setEnlarged(true) : props.onClick?.canExecute ? () => props.onClick?.canExecute && props.onClick.execute() : void 0;
  return jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [jsxRuntimeExports.jsx("img", { className: classNames("mx-image", props.class, { "img-responsive": props.responsive }), src: image.uri, onClick: onClickHandler, ...a11yProps, style: { ...props.style, cursor: onClickHandler ? "pointer" : void 0, maxHeight: useMaxSize ? props.height : void 0, maxWidth: useMaxSize ? props.width : void 0, height: useMaxSize ? void 0 : props.height, width: useMaxSize ? void 0 : props.width } }), enlarged ? reactDomExports.createPortal(jsxRuntimeExports.jsx(ImageZoom, { src: image.uri, alt: props.alternativeText?.value ?? void 0, onClick: () => setEnlarged(false) }), document.body) : null] });
};
function isInPx(value) {
  return value.endsWith("px");
}
const ImageZoom = ({ src, alt, onClick }) => (reactExports.useEffect(() => {
  const pageYOffset = window.pageYOffset;
  return document.getElementById("content").style.display = "none", () => {
    document.getElementById("content").style.display = "", setTimeout(() => window.scrollTo(0, pageYOffset), 0);
  };
}, []), jsxRuntimeExports.jsx("div", { className: "mx-imagezoom", onClick, role: "button", tabIndex: 0, children: jsxRuntimeExports.jsx("div", { className: "mx-imagezoom-wrapper", children: jsxRuntimeExports.jsx("img", { className: "mx-imagezoom-image", src, alt }) }) }));

function MenuBar(props) {
  const [activeItemId, setActiveItem] = useMenuActiveItem(), [expandedItemId, setExpandedItemId] = reactExports.useState();
  function onClick(menu) {
    menu.items?.length ? setExpandedItemId((oldExpanded) => oldExpanded !== menu.stableId ? menu.stableId : void 0) : (setActiveItem(menu), setExpandedItemId(void 0));
  }
  return reactExports.useEffect(() => {
    const onGlobalClick = () => setExpandedItemId(void 0);
    return document.addEventListener("click", onGlobalClick), () => document.removeEventListener("click", onGlobalClick);
  }, []), jsxRuntimeExports.jsx("div", { className: classNames("navbar", "navbar-default", "mx-navbar", props.class), style: props.style, tabIndex: -1, children: jsxRuntimeExports.jsx("ul", { className: "nav navbar-nav", role: "menu", children: preProcessMenus(props.menu).map((menu, index) => {
    const hasChildren = Boolean(menu.items?.length);
    return jsxRuntimeExports.jsxs("li", { className: classNames("mx-navbar-item", { dropdown: hasChildren, active: activeItemId === menu.stableId, open: expandedItemId === menu.stableId }), role: "none", children: [createAnchor(props.name, menu, expandedItemId === menu.stableId, onClick, hasChildren ? { children: jsxRuntimeExports.jsx("b", { className: "caret" }) } : {}), hasChildren && jsxRuntimeExports.jsx("ul", { className: "dropdown-menu mx-navbar-submenu", role: "menu", children: menu.items.map((subMenu, subIndex) => jsxRuntimeExports.jsx("li", { className: classNames("mx-navbar-subitem", { active: activeItemId === subMenu.stableId }), role: "none", children: createAnchor(props.name, subMenu, false, onClick) }, subIndex)) })] }, index);
  }) }) });
}

const React = { createElement: reactExports.createElement };
const AppSwitcher = Object.getOwnPropertyDescriptor(AppSwitcherWidgetModule, "AppSwitcher")?.value || Object.getOwnPropertyDescriptor(AppSwitcherWidgetModule, "default")?.value;
const Image$1 = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const { $ScrollContainer, $Container, $SidebarToggle, $AppSwitcher, $Image, $Text, $MenuBar, $Fragment, $DataView, $ConditionalVisibilityWrapper, $Image$1, $ActionButton, $NavigationTree, $Placeholder } = asPluginWidgets({ ScrollContainer, Container, SidebarToggle, AppSwitcher, Image, Text, MenuBar, Fragment, DataView, ConditionalVisibilityWrapper, Image$1, ActionButton, NavigationTree, Placeholder });
const region$Main = [
  /* @__PURE__ */ React.createElement(
    $ScrollContainer,
    {
      key: "l.TaskTracker.Tasks_TopBar.layoutContainer",
      $widgetId: "l.TaskTracker.Tasks_TopBar.layoutContainer",
      class: "mx-name-layoutContainer",
      style: void 0,
      scrollPerRegion: false,
      layoutMode: "headline",
      top: {
        "enabled": true,
        "content": [
          /* @__PURE__ */ React.createElement(
            $Container,
            {
              key: "l.TaskTracker.Tasks_TopBar.container1",
              $widgetId: "l.TaskTracker.Tasks_TopBar.container1",
              class: "mx-name-container1 region-topbar shadow row-left",
              style: void 0,
              renderMode: "div",
              onClick: void 0,
              content: [
                /* @__PURE__ */ React.createElement(
                  $SidebarToggle,
                  {
                    key: "l.TaskTracker.Tasks_TopBar.sidebarToggle3",
                    $widgetId: "l.TaskTracker.Tasks_TopBar.sidebarToggle3",
                    buttonId: "l.TaskTracker.Tasks_TopBar.sidebarToggle3",
                    renderType: "link",
                    buttonClass: "btn-default",
                    caption: selectTranslation([
                      ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                      })
                    ]),
                    tooltip: TextProperty({
                      "value": selectTranslation([
                        "Toggle Menu"
                      ])
                    }),
                    icon: WebIconProperty({
                      "icon": { "type": "image", "iconUrl": "img/Atlas_Core$Layout$hamburger.svg" }
                    }),
                    class: "mx-name-sidebarToggle3 toggle-btn hide-tablet hide-desktop spacing-outer-left",
                    style: void 0,
                    tabIndex: -1
                  }
                ),
                /* @__PURE__ */ React.createElement(
                  $Container,
                  {
                    key: "l.TaskTracker.Tasks_TopBar.container3",
                    $widgetId: "l.TaskTracker.Tasks_TopBar.container3",
                    class: "mx-name-container3 row-center hide-phone",
                    style: void 0,
                    renderMode: "div",
                    onClick: void 0,
                    content: [
                      /* @__PURE__ */ React.createElement(
                        $AppSwitcher,
                        {
                          key: "l.TaskTracker.Tasks_TopBar.appSwitcher1",
                          $widgetId: "l.TaskTracker.Tasks_TopBar.appSwitcher1",
                          baseUrl: "https://appswitcher.mendix.com/rest/v1",
                          positioning: "contextMenu",
                          class: "mx-name-appSwitcher1",
                          style: void 0,
                          tabIndex: void 0
                        }
                      )
                    ],
                    ariaHidden: false
                  }
                ),
                /* @__PURE__ */ React.createElement(
                  $Container,
                  {
                    key: "l.TaskTracker.Tasks_TopBar.container5",
                    $widgetId: "l.TaskTracker.Tasks_TopBar.container5",
                    class: "mx-name-container5 navbar-brand",
                    style: void 0,
                    renderMode: "div",
                    onClick: void 0,
                    content: [
                      /* @__PURE__ */ React.createElement(
                        $Image,
                        {
                          key: "l.TaskTracker.Tasks_TopBar.image2",
                          $widgetId: "l.TaskTracker.Tasks_TopBar.image2",
                          class: "mx-name-image2",
                          style: void 0,
                          tabIndex: void 0,
                          alternativeText: selectTranslation([
                            ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                            })
                          ]),
                          height: void 0,
                          width: void 0,
                          responsive: false,
                          source: WebStaticImageProperty({
                            "image": { "uri": "img/Atlas_Core$Layout$logo.svg" }
                          }),
                          onClick: void 0
                        }
                      )
                    ],
                    ariaHidden: false
                  }
                ),
                /* @__PURE__ */ React.createElement(
                  $Container,
                  {
                    key: "l.TaskTracker.Tasks_TopBar.container4",
                    $widgetId: "l.TaskTracker.Tasks_TopBar.container4",
                    class: "mx-name-container4",
                    style: void 0,
                    tabIndex: void 0,
                    renderMode: "div",
                    onClick: ActionProperty({
                      "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "W+yt2ObPlFqdotl4+ssTJw", "validate": "view", "allowedRoles": ["Manager", "Member"] }, "disabledDuringExecution": true }
                    }),
                    content: [
                      /* @__PURE__ */ React.createElement(
                        $Text,
                        {
                          key: "l.TaskTracker.Tasks_TopBar.text1",
                          $widgetId: "l.TaskTracker.Tasks_TopBar.text1",
                          class: "mx-name-text1 text-white text-bold spacing-outer-bottom-none",
                          style: void 0,
                          caption: selectTranslation([
                            ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": "Task Tracker" }, "args": {} }
                            })
                          ]),
                          renderMode: "h4"
                        }
                      )
                    ],
                    ariaHidden: false
                  }
                ),
                /* @__PURE__ */ React.createElement(
                  $Container,
                  {
                    key: "l.TaskTracker.Tasks_TopBar.container2",
                    $widgetId: "l.TaskTracker.Tasks_TopBar.container2",
                    class: "mx-name-container2 flexitem-1 justify-content-start",
                    style: void 0,
                    renderMode: "div",
                    onClick: void 0,
                    content: [
                      /* @__PURE__ */ React.createElement(
                        $MenuBar,
                        {
                          key: "l.TaskTracker.Tasks_TopBar.menuBar1",
                          $widgetId: "l.TaskTracker.Tasks_TopBar.menuBar1",
                          class: "mx-name-menuBar1 hide-icons hide-phone",
                          style: void 0,
                          menu: [
                            {
                              "caption": TextProperty({
                                "value": selectTranslation([
                                  "Home"
                                ])
                              }),
                              "action": ActionProperty({
                                "action": { "type": "openPage", "argMap": {}, "config": { "name": "TaskTracker/TaskOverview.page.xml", "location": "content", "allowedRoles": ["Manager", "Member"] }, "disabledDuringExecution": false },
                                "skipClientValidation": true
                              })
                            },
                            {
                              "caption": TextProperty({
                                "value": selectTranslation([
                                  "Team"
                                ])
                              }),
                              "action": ActionProperty({
                                "action": { "type": "openPage", "argMap": {}, "config": { "name": "TaskTracker/TeamOverview.page.xml", "location": "content", "allowedRoles": ["Manager", "Member"] }, "disabledDuringExecution": false },
                                "skipClientValidation": true
                              })
                            },
                            {
                              "caption": TextProperty({
                                "value": selectTranslation([
                                  "SLA Dashboard"
                                ])
                              }),
                              "action": ActionProperty({
                                "action": { "type": "openPage", "argMap": {}, "config": { "name": "TaskTracker/SLA_Dashboard.page.xml", "location": "content", "allowedRoles": ["Manager", "Member"] }, "disabledDuringExecution": false },
                                "skipClientValidation": true
                              })
                            },
                            {
                              "caption": TextProperty({
                                "value": selectTranslation([
                                  "Manage Department"
                                ])
                              }),
                              "action": ActionProperty({
                                "action": { "type": "openPage", "argMap": {}, "config": { "name": "TaskTracker/Department_Overview.page.xml", "location": "content", "allowedRoles": ["Manager", "Member"] }, "disabledDuringExecution": false },
                                "skipClientValidation": true
                              })
                            },
                            {
                              "caption": TextProperty({
                                "value": selectTranslation([
                                  "My Profile"
                                ])
                              }),
                              "action": ActionProperty({
                                "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "sjCPlcPXU1OMQweOjVTe/A", "validate": "view", "allowedRoles": ["Manager", "Member"] }, "disabledDuringExecution": true },
                                "skipClientValidation": true
                              })
                            }
                          ]
                        }
                      )
                    ],
                    ariaHidden: false
                  }
                ),
                /* @__PURE__ */ React.createElement(
                  $Fragment,
                  {
                    key: "l.TaskTracker.Tasks_TopBar.snippetCall2",
                    $widgetId: "l.TaskTracker.Tasks_TopBar.snippetCall2",
                    content: [
                      /* @__PURE__ */ React.createElement(
                        $DataView,
                        {
                          key: "l.TaskTracker.ProfilePicture.dataView10",
                          $widgetId: "l.TaskTracker.ProfilePicture.dataView10",
                          class: "mx-name-dataView10 spacing-outer-right form-vertical",
                          style: void 0,
                          tabIndex: void 0,
                          object: MicroflowObjectProperty({
                            "dataSourceId": "l.28",
                            "editable": true,
                            "operationId": "Bi84m7QUrlO6Q08ccZyO0Q",
                            "argMap": {}
                          }),
                          emptyMessage: TextProperty({
                            "value": selectTranslation([
                              ""
                            ])
                          }),
                          body: [
                            /* @__PURE__ */ React.createElement(
                              $ConditionalVisibilityWrapper,
                              {
                                key: "l.TaskTracker.ProfilePicture.container21$visibility",
                                $widgetId: "l.TaskTracker.ProfilePicture.container21$visibility",
                                visible: ExpressionProperty({
                                  "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "AvatarURL" }, { "type": "literal", "value": "" }] }, "args": { "currentObject": { "widget": "l.TaskTracker.ProfilePicture.dataView10", "source": "object" } } }
                                }),
                                contents: [
                                  /* @__PURE__ */ React.createElement(
                                    $Container,
                                    {
                                      key: "l.TaskTracker.ProfilePicture.container21",
                                      $widgetId: "l.TaskTracker.ProfilePicture.container21",
                                      class: "mx-name-container21 spacing-outer-top-none",
                                      style: void 0,
                                      renderMode: "div",
                                      onClick: void 0,
                                      content: [
                                        /* @__PURE__ */ React.createElement(
                                          $Image$1,
                                          {
                                            key: "l.TaskTracker.ProfilePicture.image1",
                                            $widgetId: "l.TaskTracker.ProfilePicture.image1",
                                            datasource: "imageUrl",
                                            imageObject: void 0,
                                            defaultImageDynamic: void 0,
                                            imageUrl: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "AvatarURL" }, "args": { "currentObject": { "widget": "l.TaskTracker.ProfilePicture.dataView10", "source": "object" } } }
                                              })
                                            ]),
                                            imageIcon: void 0,
                                            isBackgroundImage: false,
                                            children: void 0,
                                            onClickType: "action",
                                            onClick: void 0,
                                            alternativeText: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            widthUnit: "pixels",
                                            width: 24,
                                            heightUnit: "pixels",
                                            height: 24,
                                            iconSize: 14,
                                            displayAs: "fullImage",
                                            responsive: true,
                                            class: "mx-name-image1 img-circle",
                                            style: void 0,
                                            tabIndex: void 0
                                          }
                                        )
                                      ],
                                      ariaHidden: false
                                    }
                                  )
                                ]
                              }
                            ),
                            /* @__PURE__ */ React.createElement(
                              $ConditionalVisibilityWrapper,
                              {
                                key: "l.TaskTracker.ProfilePicture.image12$visibility",
                                $widgetId: "l.TaskTracker.ProfilePicture.image12$visibility",
                                visible: ExpressionProperty({
                                  "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "AvatarURL" }, { "type": "literal", "value": "" }] }, "args": { "currentObject": { "widget": "l.TaskTracker.ProfilePicture.dataView10", "source": "object" } } }
                                }),
                                contents: [
                                  /* @__PURE__ */ React.createElement(
                                    $Image$1,
                                    {
                                      key: "l.TaskTracker.ProfilePicture.image12",
                                      $widgetId: "l.TaskTracker.ProfilePicture.image12",
                                      datasource: "image",
                                      imageObject: WebStaticImageProperty({
                                        "image": { "uri": "img/Atlas_NativeMobile_Content$Native_Content$Avatar.png" }
                                      }),
                                      defaultImageDynamic: void 0,
                                      imageUrl: selectTranslation([
                                        ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                        })
                                      ]),
                                      imageIcon: void 0,
                                      isBackgroundImage: false,
                                      children: void 0,
                                      onClickType: "action",
                                      onClick: void 0,
                                      alternativeText: selectTranslation([
                                        ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                        })
                                      ]),
                                      widthUnit: "pixels",
                                      width: 24,
                                      heightUnit: "pixels",
                                      height: 24,
                                      iconSize: 14,
                                      displayAs: "fullImage",
                                      responsive: true,
                                      class: "mx-name-image12 img-circle",
                                      style: void 0,
                                      tabIndex: void 0
                                    }
                                  )
                                ]
                              }
                            )
                          ],
                          hideFooter: true,
                          footer: void 0
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ React.createElement(
                  $ConditionalVisibilityWrapper,
                  {
                    key: "l.TaskTracker.Tasks_TopBar.actionButton1$visibility",
                    $widgetId: "l.TaskTracker.Tasks_TopBar.actionButton1$visibility",
                    visible: ExpressionProperty({
                      "expression": { "expr": { "type": "function", "name": "_isNamedUser", "parameters": [] }, "args": {} }
                    }),
                    contents: [
                      /* @__PURE__ */ React.createElement(
                        $ActionButton,
                        {
                          key: "l.TaskTracker.Tasks_TopBar.actionButton1",
                          $widgetId: "l.TaskTracker.Tasks_TopBar.actionButton1",
                          buttonId: "l.TaskTracker.Tasks_TopBar.actionButton1",
                          class: "mx-name-actionButton1 btn-sm pull-right spacing-outer-left",
                          style: void 0,
                          tabIndex: void 0,
                          renderType: "button",
                          role: void 0,
                          buttonClass: "btn-inverse",
                          caption: selectTranslation([
                            ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": "Sign Out" }, "args": {} }
                            })
                          ]),
                          tooltip: TextProperty({
                            "value": selectTranslation([
                              ""
                            ])
                          }),
                          icon: void 0,
                          action: ActionProperty({
                            "action": { "type": "signOut", "argMap": {}, "config": { "namedUser": true }, "disabledDuringExecution": true },
                            "abortOnServerValidation": true
                          })
                        }
                      )
                    ]
                  }
                )
              ],
              ariaHidden: false
            }
          )
        ],
        "sizeMode": "auto",
        "class": ""
      },
      bottom: {
        "enabled": false
      },
      left: {
        "enabled": true,
        "content": [
          /* @__PURE__ */ React.createElement(
            $NavigationTree,
            {
              key: "l.TaskTracker.Tasks_TopBar.navigationTree1",
              $widgetId: "l.TaskTracker.Tasks_TopBar.navigationTree1",
              class: "mx-name-navigationTree1",
              style: void 0,
              menu: [
                {
                  "caption": TextProperty({
                    "value": selectTranslation([
                      "Home"
                    ])
                  }),
                  "action": ActionProperty({
                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "TaskTracker/TaskOverview.page.xml", "location": "content", "allowedRoles": ["Manager", "Member"] }, "disabledDuringExecution": false },
                    "skipClientValidation": true
                  })
                },
                {
                  "caption": TextProperty({
                    "value": selectTranslation([
                      "Team"
                    ])
                  }),
                  "action": ActionProperty({
                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "TaskTracker/TeamOverview.page.xml", "location": "content", "allowedRoles": ["Manager", "Member"] }, "disabledDuringExecution": false },
                    "skipClientValidation": true
                  })
                },
                {
                  "caption": TextProperty({
                    "value": selectTranslation([
                      "SLA Dashboard"
                    ])
                  }),
                  "action": ActionProperty({
                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "TaskTracker/SLA_Dashboard.page.xml", "location": "content", "allowedRoles": ["Manager", "Member"] }, "disabledDuringExecution": false },
                    "skipClientValidation": true
                  })
                },
                {
                  "caption": TextProperty({
                    "value": selectTranslation([
                      "Manage Department"
                    ])
                  }),
                  "action": ActionProperty({
                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "TaskTracker/Department_Overview.page.xml", "location": "content", "allowedRoles": ["Manager", "Member"] }, "disabledDuringExecution": false },
                    "skipClientValidation": true
                  })
                },
                {
                  "caption": TextProperty({
                    "value": selectTranslation([
                      "My Profile"
                    ])
                  }),
                  "action": ActionProperty({
                    "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "sjCPlcPXU1OMQweOjVTe/A", "validate": "view", "allowedRoles": ["Manager", "Member"] }, "disabledDuringExecution": true },
                    "skipClientValidation": true
                  })
                }
              ]
            }
          )
        ],
        "sizeMode": "percentage",
        "sizeValue": 80,
        "class": "background-inverse",
        "toggleMode": "push",
        "initiallyOpen": false
      },
      right: {
        "enabled": false
      },
      center: {
        "content": [
          /* @__PURE__ */ React.createElement(
            $Placeholder,
            {
              key: "l.TaskTracker.Tasks_TopBar.Main",
              $widgetId: "l.TaskTracker.Tasks_TopBar.Main",
              content: PlaceholderProperty({
                "id": "TaskTracker.Tasks_TopBar.Main"
              })
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Fragment,
            {
              key: "l.TaskTracker.Tasks_TopBar.snippetCall1",
              $widgetId: "l.TaskTracker.Tasks_TopBar.snippetCall1",
              content: void 0
            }
          )
        ],
        "class": "region-content"
      }
    }
  )
];
const content = {
  "Main": region$Main
};

export { content };
