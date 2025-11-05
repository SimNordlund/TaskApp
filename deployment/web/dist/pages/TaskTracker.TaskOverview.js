import { reactExports, asPluginWidgets, Fragment, addEnumerations, selectTranslation } from '../index-4mfddfkU.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-Ouf8FsgU.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-B2qOJ4td.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-DekUHBTZ.js';
import { DatabaseObjectListProperty } from '../DatabaseObjectListProperty-bv83QC9Y.js';
import { GalleryWidgetModule, ProgressBarWidgetModule, ListActionProperty } from '../ProgressBar-CdjoDNSY.js';
import { MicroflowObjectProperty } from '../MicroflowObjectProperty-DSOqr-FG.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-CAuzrF8_.js';
import { WebIconProperty } from '../WebIconProperty-D31g4FWT.js';
import { WebStaticImageProperty } from '../WebStaticImageProperty-_lIkqA-b.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-51nXt5AX.js';
import { Container } from '../Container-Dx2M9vEg.js';
import { DataView } from '../DataView-BR45rEOj.js';
import { Div } from '../Div-DARk7tBI.js';
import '../Fragment-DrLk0xpL.js';
import { ImageWidgetModule, Text } from '../Text-BEd6XRh9.js';
import { content as content$1 } from '../TaskTracker.Tasks_TopBar-CgXkLda9.js';
import '../DaFVLkxr-BwbOhnke.js';
import '../D4nQ98US-DIL-lu1k.js';
import '../DGnMnCeA-CZ4oDNF6.js';
import '../bdxqAC6d-DAEMpsZ9.js';
import '../InlineText-C-RvyD35.js';
import '../SidebarToggle-fh3TqfUx.js';
import '../Y8h_6YnI-C02bM5Tk.js';
import '../ScrollContainer-C-B529-s.js';

var n,o={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/n=o,function(){var e={}.hasOwnProperty;function t(){for(var n=[],o=0;o<arguments.length;o++){var a=arguments[o];if(a){var i=typeof a;if("string"===i||"number"===i)n.push(a);else if(Array.isArray(a)){if(a.length){var r=t.apply(null,a);r&&n.push(r);}}else if("object"===i){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){n.push(a.toString());continue}for(var l in a)e.call(a,l)&&a[l]&&n.push(l);}}}return n.join(" ")}n.exports?(t.default=t,n.exports=t):window.classNames=t;}();var a=o.exports;const i=t=>{const{type:n,className:o,style:i,value:r,onClick:l,onKeyDown:s,tabIndex:c}=t;return reactExports.createElement("span",{role:l||s?"button":void 0,className:a("widget-badge",n,o,{"widget-badge-clickable":l}),onClick:l,onKeyDown:s,style:i,tabIndex:c},r)};function r(n){var o,a,r;const l=reactExports.useCallback((()=>{var e;(e=n.onClick)&&e.canExecute&&!e.isExecuting&&e.execute();}),[n.onClick]),s=reactExports.useCallback((e=>{"Enter"!==e.key&&" "!==e.key||l();}),[l]),c=n.onClick&&n.onClick.canExecute;return reactExports.createElement(i,{type:n.type,value:null!==(a=null===(o=n.value)||void 0===o?void 0:o.value)&&void 0!==a?a:"",onClick:c?l:void 0,onKeyDown:c?s:void 0,className:n.class,style:n.style,tabIndex:c?null!==(r=n.tabIndex)&&void 0!==r?r:0:void 0})}

var BadgeWidgetModule = /*#__PURE__*/Object.freeze({
	__proto__: null,
	default: r
});

const React = { createElement: reactExports.createElement };
const Badge = Object.getOwnPropertyDescriptor(BadgeWidgetModule, "Badge")?.value || Object.getOwnPropertyDescriptor(BadgeWidgetModule, "default")?.value;
const Gallery = Object.getOwnPropertyDescriptor(GalleryWidgetModule, "Gallery")?.value || Object.getOwnPropertyDescriptor(GalleryWidgetModule, "default")?.value;
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const ProgressBar = Object.getOwnPropertyDescriptor(ProgressBarWidgetModule, "ProgressBar")?.value || Object.getOwnPropertyDescriptor(ProgressBarWidgetModule, "default")?.value;
const { $Fragment, $Container, $Image, $Text, $DataView, $Div, $ProgressBar, $ConditionalVisibilityWrapper, $ActionButton, $Gallery, $Badge } = asPluginWidgets({ Fragment, Container, Image, Text, DataView, Div, ProgressBar, ConditionalVisibilityWrapper, ActionButton, Gallery, Badge });
addEnumerations({
  "TaskTracker.ENUM_Priority": [
    [
      "High",
      selectTranslation([
        "High"
      ])
    ],
    [
      "Medium",
      selectTranslation([
        "Medium"
      ])
    ],
    [
      "Low",
      selectTranslation([
        "Low"
      ])
    ]
  ]
});
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Fragment,
    {
      key: "p.TaskTracker.TaskOverview.snippetCall1",
      $widgetId: "p.TaskTracker.TaskOverview.snippetCall1",
      content: [
        /* @__PURE__ */ React.createElement(
          $Container,
          {
            key: "p.TaskTracker.Header.container5",
            $widgetId: "p.TaskTracker.Header.container5",
            class: "mx-name-container5 pageheader spacing-outer-bottom-large",
            style: void 0,
            renderMode: "div",
            onClick: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Image,
                {
                  key: "p.TaskTracker.Header.image1",
                  $widgetId: "p.TaskTracker.Header.image1",
                  datasource: "image",
                  imageObject: WebStaticImageProperty({
                    "image": { "uri": "img/TaskTracker$Images$aerospace.jpg" }
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
                  widthUnit: "auto",
                  width: 100,
                  heightUnit: "auto",
                  height: 100,
                  iconSize: 14,
                  displayAs: "fullImage",
                  responsive: false,
                  class: "mx-name-image1 pageheader-img",
                  style: void 0,
                  tabIndex: void 0
                }
              ),
              /* @__PURE__ */ React.createElement(
                $Container,
                {
                  key: "p.TaskTracker.Header.container101",
                  $widgetId: "p.TaskTracker.Header.container101",
                  class: "mx-name-container101 pageheader-title-container",
                  style: void 0,
                  renderMode: "div",
                  onClick: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Text,
                      {
                        key: "p.TaskTracker.Header.text5",
                        $widgetId: "p.TaskTracker.Header.text5",
                        class: "mx-name-text5 text-bold text-white spacing-outer-bottom",
                        style: void 0,
                        caption: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Mendix Aerospace " }, "args": {} }
                          })
                        ]),
                        renderMode: "h1"
                      }
                    ),
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.TaskTracker.Header.dataView2",
                        $widgetId: "p.TaskTracker.Header.dataView2",
                        class: "mx-name-dataView2 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: MicroflowObjectProperty({
                          "dataSourceId": "p.15",
                          "editable": false,
                          "operationId": "Ljb4Z+WFQliZbg/sVVcoPA",
                          "argMap": {}
                        }),
                        emptyMessage: TextProperty({
                          "value": selectTranslation([
                            ""
                          ])
                        }),
                        body: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.TaskTracker.Header.text20",
                              $widgetId: "p.TaskTracker.Header.text20",
                              class: "mx-name-text20 text-semibold text-white",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Welcome, " }, { "type": "variable", "variable": "currentObject", "path": "DisplayName" }] }, "args": { "currentObject": { "widget": "p.TaskTracker.Header.dataView2", "source": "object" } } }
                                })
                              ]),
                              renderMode: "h3"
                            }
                          )
                        ],
                        hideFooter: true,
                        footer: void 0
                      }
                    )
                  ],
                  ariaHidden: false
                }
              ),
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.TaskTracker.Header.layoutGrid1",
                  $widgetId: "p.TaskTracker.Header.layoutGrid1",
                  class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid progress-container header-card shadow",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.TaskTracker.TaskOverview.layoutGrid1$row0",
                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0",
                        class: "row",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Div,
                            {
                              key: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column0",
                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column0",
                              class: "col-lg col-md col",
                              style: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $DataView,
                                  {
                                    key: "p.TaskTracker.Header.dataView1",
                                    $widgetId: "p.TaskTracker.Header.dataView1",
                                    class: "mx-name-dataView1 form-vertical",
                                    style: void 0,
                                    tabIndex: void 0,
                                    object: MicroflowObjectProperty({
                                      "dataSourceId": "p.26",
                                      "editable": false,
                                      "operationId": "ncHK1VQHXlensSPCp3ZDNg",
                                      "argMap": {}
                                    }),
                                    emptyMessage: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    body: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.TaskTracker.Header.container24",
                                          $widgetId: "p.TaskTracker.Header.container24",
                                          class: "mx-name-container24",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p.TaskTracker.Header.text48",
                                                $widgetId: "p.TaskTracker.Header.text48",
                                                class: "mx-name-text48 text-white",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Team Progress" }, "args": {} }
                                                  })
                                                ]),
                                                renderMode: "h4"
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p.TaskTracker.Header.text18",
                                                $widgetId: "p.TaskTracker.Header.text18",
                                                class: "mx-name-text18 text-white",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TeamProgress" }, { "type": "literal", "value": '{"decimalPrecision":0}' }] }, { "type": "literal", "value": "%" }] }, "args": { "currentObject": { "widget": "p.TaskTracker.Header.dataView1", "source": "object" } } }
                                                  })
                                                ]),
                                                renderMode: "h3"
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $ProgressBar,
                                              {
                                                key: "p.TaskTracker.Header.progressBar2",
                                                $widgetId: "p.TaskTracker.Header.progressBar2",
                                                type: "expression",
                                                staticCurrentValue: 50,
                                                expressionCurrentValue: ExpressionProperty({
                                                  "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "TeamProgress" }, "args": { "currentObject": { "widget": "p.TaskTracker.Header.dataView1", "source": "object" } } }
                                                }),
                                                staticMinValue: 0,
                                                expressionMinValue: ExpressionProperty({
                                                  "expression": { "expr": { "type": "literalNumeric", "value": "0" }, "args": {} }
                                                }),
                                                staticMaxValue: 100,
                                                expressionMaxValue: ExpressionProperty({
                                                  "expression": { "expr": { "type": "literalNumeric", "value": "100" }, "args": {} }
                                                }),
                                                onClick: void 0,
                                                showLabel: false,
                                                labelType: "text",
                                                labelText: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                customLabel: void 0,
                                                class: "mx-name-progressBar2",
                                                style: void 0,
                                                tabIndex: void 0
                                              }
                                            )
                                          ],
                                          ariaHidden: false
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
                            $Div,
                            {
                              key: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column1",
                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column1",
                              class: "col-lg col-md col hide-tablet hide-phone",
                              style: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Div,
                                  {
                                    key: "p.TaskTracker.Header.layoutGrid2",
                                    $widgetId: "p.TaskTracker.Header.layoutGrid2",
                                    class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid",
                                    style: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Div,
                                        {
                                          key: "p.TaskTracker.TaskOverview.layoutGrid2$row0",
                                          $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0",
                                          class: "row",
                                          style: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Div,
                                              {
                                                key: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column0",
                                                $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column0",
                                                class: "col-lg col-md col",
                                                style: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.TaskTracker.Header.text17",
                                                      $widgetId: "p.TaskTracker.Header.text17",
                                                      class: "mx-name-text17 text-white",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "Team members" }, "args": {} }
                                                        })
                                                      ]),
                                                      renderMode: "h4"
                                                    }
                                                  )
                                                ]
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Div,
                                              {
                                                key: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column1",
                                                $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column1",
                                                class: "col-lg col-md col",
                                                style: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.TaskTracker.Header.actionButton2$visibility",
                                                      $widgetId: "p.TaskTracker.Header.actionButton2$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Manager" }, { "type": "literal", "value": "Member" }] }, "args": {} }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ActionButton,
                                                          {
                                                            key: "p.TaskTracker.Header.actionButton2",
                                                            $widgetId: "p.TaskTracker.Header.actionButton2",
                                                            buttonId: "p.TaskTracker.Header.actionButton2",
                                                            class: "mx-name-actionButton2 text-white pull-right",
                                                            style: void 0,
                                                            tabIndex: void 0,
                                                            renderType: "link",
                                                            role: "button",
                                                            buttonClass: "btn-default",
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Visa teamet" }, "args": {} }
                                                              })
                                                            ]),
                                                            tooltip: TextProperty({
                                                              "value": selectTranslation([
                                                                ""
                                                              ])
                                                            }),
                                                            icon: void 0,
                                                            action: ActionProperty({
                                                              "action": { "type": "openPage", "argMap": {}, "config": { "name": "TaskTracker/TeamOverview.page.xml", "location": "content", "allowedRoles": ["Manager", "Member"] }, "disabledDuringExecution": true },
                                                              "abortOnServerValidation": true
                                                            })
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  )
                                                ]
                                              }
                                            )
                                          ]
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Gallery,
                                  {
                                    key: "p.TaskTracker.Header.gallery1",
                                    $widgetId: "p.TaskTracker.Header.gallery1",
                                    advanced: false,
                                    datasource: DatabaseObjectListProperty({
                                      "dataSourceId": "p.2",
                                      "entity": "MendixSSO.MendixSSOUser",
                                      "operationId": "mVkyiAmprVq80gzogfciYA",
                                      "sort": [
                                        [
                                          "DisplayName",
                                          "asc"
                                        ]
                                      ]
                                    }),
                                    content: TemplatedWidgetProperty({
                                      "dataSourceId": "p.2",
                                      "editable": false,
                                      "children": () => [
                                        /* @__PURE__ */ React.createElement(
                                          $Container,
                                          {
                                            key: "p.TaskTracker.Header.container4",
                                            $widgetId: "p.TaskTracker.Header.container4",
                                            class: "mx-name-container4 col-center",
                                            style: void 0,
                                            renderMode: "div",
                                            onClick: void 0,
                                            content: [
                                              /* @__PURE__ */ React.createElement(
                                                $Text,
                                                {
                                                  key: "p.TaskTracker.Header.text22",
                                                  $widgetId: "p.TaskTracker.Header.text22",
                                                  class: "mx-name-text22 text-white",
                                                  style: void 0,
                                                  caption: selectTranslation([
                                                    ExpressionProperty({
                                                      "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Medlemmar: " }, { "type": "variable", "variable": "currentObject", "path": "DisplayName" }] }, "args": { "currentObject": { "widget": "p.TaskTracker.Header.gallery1", "source": "object" } } }
                                                    })
                                                  ]),
                                                  renderMode: "span"
                                                }
                                              )
                                            ],
                                            ariaHidden: false
                                          }
                                        )
                                      ]
                                    }),
                                    desktopItems: 5,
                                    tabletItems: 1,
                                    phoneItems: 1,
                                    pageSize: 20,
                                    pagination: "virtualScrolling",
                                    pagingPosition: "below",
                                    showEmptyPlaceholder: "none",
                                    emptyPlaceholder: void 0,
                                    itemClass: void 0,
                                    onClick: void 0,
                                    filterList: [],
                                    filtersPlaceholder: void 0,
                                    sortList: [],
                                    filterSectionTitle: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    emptyMessageTitle: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    onSelectionChange: void 0,
                                    ariaLabelListBox: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    class: "mx-name-gallery1",
                                    style: void 0,
                                    tabIndex: void 0
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    )
                  ]
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
    $Container,
    {
      key: "p.TaskTracker.TaskOverview.container3",
      $widgetId: "p.TaskTracker.TaskOverview.container3",
      class: "mx-name-container3 spacing-inner-left-large spacing-inner-right-large hide-phone",
      style: void 0,
      renderMode: "div",
      onClick: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.TaskTracker.TaskOverview.layoutGrid4",
            $widgetId: "p.TaskTracker.TaskOverview.layoutGrid4",
            class: "mx-name-layoutGrid4 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.TaskTracker.TaskOverview.layoutGrid4$row0",
                  $widgetId: "p.TaskTracker.TaskOverview.layoutGrid4$row0",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.TaskTracker.TaskOverview.layoutGrid4$row0$column0",
                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid4$row0$column0",
                        class: "col-lg col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Div,
                            {
                              key: "p.TaskTracker.TaskOverview.layoutGrid3",
                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid3",
                              class: "mx-name-layoutGrid3 mx-layoutgrid mx-layoutgrid-fluid spacing-inner-left-none spacing-inner-right-none spacing-inner-top-none spacing-inner-bottom-none",
                              style: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Div,
                                  {
                                    key: "p.TaskTracker.TaskOverview.layoutGrid3$row0",
                                    $widgetId: "p.TaskTracker.TaskOverview.layoutGrid3$row0",
                                    class: "row align-children-center",
                                    style: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Div,
                                        {
                                          key: "p.TaskTracker.TaskOverview.layoutGrid3$row0$column0",
                                          $widgetId: "p.TaskTracker.TaskOverview.layoutGrid3$row0$column0",
                                          class: "col-lg-9 col-md col",
                                          style: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p.TaskTracker.TaskOverview.text3",
                                                $widgetId: "p.TaskTracker.TaskOverview.text3",
                                                class: "mx-name-text3",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "To Do" }, "args": {} }
                                                  })
                                                ]),
                                                renderMode: "h2"
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Div,
                                        {
                                          key: "p.TaskTracker.TaskOverview.layoutGrid3$row0$column1",
                                          $widgetId: "p.TaskTracker.TaskOverview.layoutGrid3$row0$column1",
                                          class: "col-lg-3 col-md col",
                                          style: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $ConditionalVisibilityWrapper,
                                              {
                                                key: "p.TaskTracker.TaskOverview.actionButton1$visibility",
                                                $widgetId: "p.TaskTracker.TaskOverview.actionButton1$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Manager" }, { "type": "literal", "value": "Member" }] }, "args": {} }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ActionButton,
                                                    {
                                                      key: "p.TaskTracker.TaskOverview.actionButton1",
                                                      $widgetId: "p.TaskTracker.TaskOverview.actionButton1",
                                                      buttonId: "p.TaskTracker.TaskOverview.actionButton1",
                                                      class: "mx-name-actionButton1 pull-right btn-lg spacing-outer-right-large",
                                                      style: void 0,
                                                      tabIndex: void 0,
                                                      renderType: "button",
                                                      role: void 0,
                                                      buttonClass: "btn-default",
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "+" }, "args": {} }
                                                        })
                                                      ]),
                                                      tooltip: TextProperty({
                                                        "value": selectTranslation([
                                                          ""
                                                        ])
                                                      }),
                                                      icon: void 0,
                                                      action: ActionProperty({
                                                        "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "mChMIeda3Vq1DV6w2B18qQ", "validate": "view", "allowedRoles": ["Manager", "Member"] }, "disabledDuringExecution": true },
                                                        "abortOnServerValidation": true
                                                      })
                                                    }
                                                  )
                                                ]
                                              }
                                            )
                                          ]
                                        }
                                      )
                                    ]
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.TaskTracker.TaskOverview.layoutGrid4$row0$column1",
                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid4$row0$column1",
                        class: "col-lg col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.TaskTracker.TaskOverview.text10",
                              $widgetId: "p.TaskTracker.TaskOverview.text10",
                              class: "mx-name-text10",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "In Progress" }, "args": {} }
                                })
                              ]),
                              renderMode: "h2"
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.TaskTracker.TaskOverview.layoutGrid4$row0$column2",
                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid4$row0$column2",
                        class: "col-lg col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.TaskTracker.TaskOverview.text19",
                              $widgetId: "p.TaskTracker.TaskOverview.text19",
                              class: "mx-name-text19",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "To Review" }, "args": {} }
                                })
                              ]),
                              renderMode: "h2"
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.TaskTracker.TaskOverview.layoutGrid4$row0$column3",
                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid4$row0$column3",
                        class: "col-lg col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.TaskTracker.TaskOverview.text21",
                              $widgetId: "p.TaskTracker.TaskOverview.text21",
                              class: "mx-name-text21",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Done" }, "args": {} }
                                })
                              ]),
                              renderMode: "h2"
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.TaskTracker.TaskOverview.actionButton4$visibility",
                              $widgetId: "p.TaskTracker.TaskOverview.actionButton4$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Manager" }, { "type": "literal", "value": "Member" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.TaskTracker.TaskOverview.actionButton4",
                                    $widgetId: "p.TaskTracker.TaskOverview.actionButton4",
                                    buttonId: "p.TaskTracker.TaskOverview.actionButton4",
                                    class: "mx-name-actionButton4 pull-right spacing-outer-right-large spacing-outer-bottom-medium btn-lg",
                                    style: void 0,
                                    tabIndex: void 0,
                                    renderType: "button",
                                    role: void 0,
                                    buttonClass: "btn-danger",
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "New" }, "args": {} }
                                      })
                                    ]),
                                    tooltip: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    icon: WebIconProperty({
                                      "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-add-circle" }
                                    }),
                                    action: ActionProperty({
                                      "action": { "type": "createObject", "argMap": {}, "config": { "entity": "TaskTracker.Task", "operationId": "Ye1utDvFDFmrXRvwruWtPg", "pageSettings": { "name": "TaskTracker/TaskEdit.page.xml", "location": "modal", "resizable": false, "allowedRoles": ["Manager", "Member"] }, "allowedRoles": ["Manager", "Member"], "objectParameter": "param$Task" }, "disabledDuringExecution": true },
                                      "abortOnServerValidation": true
                                    })
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.TaskTracker.TaskOverview.layoutGrid4$row1",
                  $widgetId: "p.TaskTracker.TaskOverview.layoutGrid4$row1",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.TaskTracker.TaskOverview.layoutGrid4$row1$column0",
                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid4$row1$column0",
                        class: "col-lg-3 col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Gallery,
                            {
                              key: "p.TaskTracker.TaskOverview.gallery2",
                              $widgetId: "p.TaskTracker.TaskOverview.gallery2",
                              advanced: false,
                              datasource: DatabaseObjectListProperty({
                                "dataSourceId": "p.58",
                                "entity": "TaskTracker.Task",
                                "operationId": "wbuRWMnKgV6O13vzuTWFZw",
                                "sort": [
                                  [
                                    "DueDate",
                                    "asc"
                                  ]
                                ],
                                "constraints": { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "Status", "context": "TaskTracker.Task", "attributeType": "#TaskTracker.ENUM_Status" }, { "type": "literal", "value": "To_Do" }] }
                              }),
                              content: TemplatedWidgetProperty({
                                "dataSourceId": "p.58",
                                "editable": false,
                                "children": () => [
                                  /* @__PURE__ */ React.createElement(
                                    $Fragment,
                                    {
                                      key: "p.TaskTracker.TaskOverview.snippetCall2",
                                      $widgetId: "p.TaskTracker.TaskOverview.snippetCall2",
                                      content: [
                                        /* @__PURE__ */ React.createElement(
                                          $Container,
                                          {
                                            key: "p.TaskTracker.TaskCard.container3",
                                            $widgetId: "p.TaskTracker.TaskCard.container3",
                                            class: "mx-name-container3 card shadow-medium",
                                            style: void 0,
                                            renderMode: "div",
                                            onClick: void 0,
                                            content: [
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "p.TaskTracker.TaskCard.layoutGrid1",
                                                  $widgetId: "p.TaskTracker.TaskCard.layoutGrid1",
                                                  class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid spacing-inner-left-none spacing-inner-right-none spacing-inner-top-none",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Div,
                                                      {
                                                        key: "p.TaskTracker.TaskOverview.layoutGrid1$row0.106",
                                                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0.106",
                                                        class: "row",
                                                        style: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column0.107",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column0.107",
                                                              class: "col-lg col-md col",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text4",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text4",
                                                                    class: "mx-name-text4 hide-phone hide-tablet",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "variable", "variable": "Task", "path": "Title" }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery2", "source": "object" } } }
                                                                      })
                                                                    ]),
                                                                    renderMode: "h4"
                                                                  }
                                                                ),
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text8",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text8",
                                                                    class: "mx-name-text8 hide-desktop",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "variable", "variable": "Task", "path": "Title" }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery2", "source": "object" } } }
                                                                      })
                                                                    ]),
                                                                    renderMode: "h5"
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          ),
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column1.112",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column1.112",
                                                              class: "col-lg-auto col-md-auto col-auto",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $DataView,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.dataView5",
                                                                    $widgetId: "p.TaskTracker.TaskCard.dataView5",
                                                                    class: "mx-name-dataView5 pull-right form-vertical",
                                                                    style: void 0,
                                                                    tabIndex: void 0,
                                                                    object: AssociationObjectProperty({
                                                                      "dataSourceId": "p.115",
                                                                      "scope": "p.TaskTracker.TaskOverview.gallery2",
                                                                      "editable": true,
                                                                      "path": "TaskTracker.Task_MendixSSOUser_Assignee/MendixSSO.MendixSSOUser",
                                                                      "operationId": "tfqEaVJJOFG5TVr4xEuo7Q"
                                                                    }),
                                                                    emptyMessage: TextProperty({
                                                                      "value": selectTranslation([
                                                                        ""
                                                                      ])
                                                                    }),
                                                                    body: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Image,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.image1",
                                                                          $widgetId: "p.TaskTracker.TaskCard.image1",
                                                                          datasource: "imageUrl",
                                                                          imageObject: void 0,
                                                                          defaultImageDynamic: void 0,
                                                                          imageUrl: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "AvatarURL" }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskCard.dataView5", "source": "object" } } }
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
                                                                          width: 40,
                                                                          heightUnit: "pixels",
                                                                          height: 40,
                                                                          iconSize: 14,
                                                                          displayAs: "fullImage",
                                                                          responsive: false,
                                                                          class: "mx-name-image1 img-circle",
                                                                          style: void 0,
                                                                          tabIndex: void 0
                                                                        }
                                                                      )
                                                                    ],
                                                                    hideFooter: true,
                                                                    footer: void 0
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          )
                                                        ]
                                                      }
                                                    )
                                                  ]
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $DataView,
                                                {
                                                  key: "p.TaskTracker.TaskCard.dataView9",
                                                  $widgetId: "p.TaskTracker.TaskCard.dataView9",
                                                  class: "mx-name-dataView9 spacing-outer-top-large hide-phone form-vertical",
                                                  style: void 0,
                                                  tabIndex: void 0,
                                                  object: AssociationObjectProperty({
                                                    "dataSourceId": "p.120",
                                                    "scope": "p.TaskTracker.TaskOverview.gallery2",
                                                    "editable": true,
                                                    "path": "TaskTracker.Task_MendixSSOUser_Assignee/MendixSSO.MendixSSOUser",
                                                    "operationId": "2RbRLrZFTFaAIWowk26aBg"
                                                  }),
                                                  emptyMessage: TextProperty({
                                                    "value": selectTranslation([
                                                      ""
                                                    ])
                                                  }),
                                                  body: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Text,
                                                      {
                                                        key: "p.TaskTracker.TaskCard.text6",
                                                        $widgetId: "p.TaskTracker.TaskCard.text6",
                                                        class: "mx-name-text6 text-detail spacing-outer-bottom",
                                                        style: void 0,
                                                        caption: selectTranslation([
                                                          ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Tilldelad: " }, { "type": "variable", "variable": "currentObject", "path": "DisplayName" }] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskCard.dataView9", "source": "object" } } }
                                                          })
                                                        ]),
                                                        renderMode: "p"
                                                      }
                                                    )
                                                  ],
                                                  hideFooter: true,
                                                  footer: void 0
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "p.TaskTracker.TaskCard.layoutGrid2",
                                                  $widgetId: "p.TaskTracker.TaskCard.layoutGrid2",
                                                  class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Div,
                                                      {
                                                        key: "p.TaskTracker.TaskOverview.layoutGrid2$row0.125",
                                                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0.125",
                                                        class: "row",
                                                        style: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column0.126",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column0.126",
                                                              class: "col-lg col-md col",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text5",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text5",
                                                                    class: "mx-name-text5 hide-phone hide-tablet",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Due: " }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Task", "path": "DueDate" }, { "type": "literal", "value": '{"type":"custom","pattern":"dd MMM yy"}' }] }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery2", "source": "object" } } }
                                                                      })
                                                                    ]),
                                                                    renderMode: "h5"
                                                                  }
                                                                ),
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text7",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text7",
                                                                    class: "mx-name-text7 hide-desktop",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Due: " }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Task", "path": "DueDate" }, { "type": "literal", "value": '{"type":"custom","pattern":"dd/MM/yy"}' }] }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery2", "source": "object" } } }
                                                                      })
                                                                    ]),
                                                                    renderMode: "h5"
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          ),
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column1.131",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column1.131",
                                                              class: "col-lg-auto col-md-auto col-auto",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $ConditionalVisibilityWrapper,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.badge1$visibility",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge1$visibility",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "Low" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery2", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge1",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge1",
                                                                          type: "badge",
                                                                          value: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "TaskTracker.ENUM_Priority" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery2", "source": "object" } } }
                                                                            })
                                                                          ]),
                                                                          onClick: void 0,
                                                                          class: "mx-name-badge1 label-info pull-right",
                                                                          style: void 0,
                                                                          tabIndex: void 0
                                                                        }
                                                                      )
                                                                    ]
                                                                  }
                                                                ),
                                                                /* @__PURE__ */ React.createElement(
                                                                  $ConditionalVisibilityWrapper,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.badge2$visibility",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge2$visibility",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "Medium" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery2", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge2",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge2",
                                                                          type: "badge",
                                                                          value: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "TaskTracker.ENUM_Priority" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery2", "source": "object" } } }
                                                                            })
                                                                          ]),
                                                                          onClick: void 0,
                                                                          class: "mx-name-badge2 label-warning pull-right",
                                                                          style: void 0,
                                                                          tabIndex: void 0
                                                                        }
                                                                      )
                                                                    ]
                                                                  }
                                                                ),
                                                                /* @__PURE__ */ React.createElement(
                                                                  $ConditionalVisibilityWrapper,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.badge3$visibility",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge3$visibility",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "High" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery2", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge3",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge3",
                                                                          type: "badge",
                                                                          value: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "TaskTracker.ENUM_Priority" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery2", "source": "object" } } }
                                                                            })
                                                                          ]),
                                                                          onClick: void 0,
                                                                          class: "mx-name-badge3 label-danger pull-right",
                                                                          style: void 0,
                                                                          tabIndex: void 0
                                                                        }
                                                                      )
                                                                    ]
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          )
                                                        ]
                                                      }
                                                    )
                                                  ]
                                                }
                                              )
                                            ],
                                            ariaHidden: false
                                          }
                                        )
                                      ]
                                    }
                                  )
                                ]
                              }),
                              desktopItems: 1,
                              tabletItems: 1,
                              phoneItems: 1,
                              pageSize: 10,
                              pagination: "virtualScrolling",
                              pagingPosition: "below",
                              showEmptyPlaceholder: "custom",
                              emptyPlaceholder: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.TaskTracker.TaskOverview.text2",
                                    $widgetId: "p.TaskTracker.TaskOverview.text2",
                                    class: "mx-name-text2",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "No tasks in To Do" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                )
                              ],
                              itemClass: void 0,
                              onClick: ListActionProperty({
                                "action": { "type": "openPage", "argMap": { "param$Task": { "widget": "p.TaskTracker.TaskOverview.gallery2", "source": "object" } }, "config": { "name": "TaskTracker/TaskEdit.page.xml", "location": "modal", "resizable": false, "allowedRoles": ["Manager", "Member"] }, "disabledDuringExecution": false },
                                "abortOnServerValidation": false,
                                "dataSourceId": "p.58",
                                "argumentTypes": {}
                              }),
                              filterList: [],
                              filtersPlaceholder: void 0,
                              sortList: [],
                              filterSectionTitle: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                })
                              ]),
                              emptyMessageTitle: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                })
                              ]),
                              onSelectionChange: void 0,
                              ariaLabelListBox: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                })
                              ]),
                              class: "mx-name-gallery2 widget-gallery-gridgap-none spacing-outer-right-large spacing-outer-top-large",
                              style: void 0,
                              tabIndex: void 0
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.TaskTracker.TaskOverview.layoutGrid4$row1$column1",
                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid4$row1$column1",
                        class: "col-lg-3 col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Gallery,
                            {
                              key: "p.TaskTracker.TaskOverview.gallery3",
                              $widgetId: "p.TaskTracker.TaskOverview.gallery3",
                              advanced: false,
                              datasource: DatabaseObjectListProperty({
                                "dataSourceId": "p.59",
                                "entity": "TaskTracker.Task",
                                "operationId": "KZW7IU+Qn1+OL39tXLH0Og",
                                "sort": [
                                  [
                                    "DueDate",
                                    "asc"
                                  ]
                                ],
                                "constraints": { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "Status", "context": "TaskTracker.Task", "attributeType": "#TaskTracker.ENUM_Status" }, { "type": "literal", "value": "Running" }] }
                              }),
                              content: TemplatedWidgetProperty({
                                "dataSourceId": "p.59",
                                "editable": false,
                                "children": () => [
                                  /* @__PURE__ */ React.createElement(
                                    $Fragment,
                                    {
                                      key: "p.TaskTracker.TaskOverview.snippetCall3",
                                      $widgetId: "p.TaskTracker.TaskOverview.snippetCall3",
                                      content: [
                                        /* @__PURE__ */ React.createElement(
                                          $Container,
                                          {
                                            key: "p.TaskTracker.TaskCard.container3.149",
                                            $widgetId: "p.TaskTracker.TaskCard.container3.149",
                                            class: "mx-name-container3 card shadow-medium",
                                            style: void 0,
                                            renderMode: "div",
                                            onClick: void 0,
                                            content: [
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "p.TaskTracker.TaskCard.layoutGrid1.150",
                                                  $widgetId: "p.TaskTracker.TaskCard.layoutGrid1.150",
                                                  class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid spacing-inner-left-none spacing-inner-right-none spacing-inner-top-none",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Div,
                                                      {
                                                        key: "p.TaskTracker.TaskOverview.layoutGrid1$row0.151",
                                                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0.151",
                                                        class: "row",
                                                        style: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column0.152",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column0.152",
                                                              class: "col-lg col-md col",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text4.153",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text4.153",
                                                                    class: "mx-name-text4 hide-phone hide-tablet",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "variable", "variable": "Task", "path": "Title" }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery3", "source": "object" } } }
                                                                      })
                                                                    ]),
                                                                    renderMode: "h4"
                                                                  }
                                                                ),
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text8.154",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text8.154",
                                                                    class: "mx-name-text8 hide-desktop",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "variable", "variable": "Task", "path": "Title" }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery3", "source": "object" } } }
                                                                      })
                                                                    ]),
                                                                    renderMode: "h5"
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          ),
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column1.155",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column1.155",
                                                              class: "col-lg-auto col-md-auto col-auto",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $DataView,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.dataView5.156",
                                                                    $widgetId: "p.TaskTracker.TaskCard.dataView5.156",
                                                                    class: "mx-name-dataView5 pull-right form-vertical",
                                                                    style: void 0,
                                                                    tabIndex: void 0,
                                                                    object: AssociationObjectProperty({
                                                                      "dataSourceId": "p.157",
                                                                      "scope": "p.TaskTracker.TaskOverview.gallery3",
                                                                      "editable": true,
                                                                      "path": "TaskTracker.Task_MendixSSOUser_Assignee/MendixSSO.MendixSSOUser",
                                                                      "operationId": "RFEpGeyp1lCR5ywDarbgGQ"
                                                                    }),
                                                                    emptyMessage: TextProperty({
                                                                      "value": selectTranslation([
                                                                        ""
                                                                      ])
                                                                    }),
                                                                    body: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Image,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.image1.158",
                                                                          $widgetId: "p.TaskTracker.TaskCard.image1.158",
                                                                          datasource: "imageUrl",
                                                                          imageObject: void 0,
                                                                          defaultImageDynamic: void 0,
                                                                          imageUrl: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "AvatarURL" }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskCard.dataView5.156", "source": "object" } } }
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
                                                                          width: 40,
                                                                          heightUnit: "pixels",
                                                                          height: 40,
                                                                          iconSize: 14,
                                                                          displayAs: "fullImage",
                                                                          responsive: false,
                                                                          class: "mx-name-image1 img-circle",
                                                                          style: void 0,
                                                                          tabIndex: void 0
                                                                        }
                                                                      )
                                                                    ],
                                                                    hideFooter: true,
                                                                    footer: void 0
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          )
                                                        ]
                                                      }
                                                    )
                                                  ]
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $DataView,
                                                {
                                                  key: "p.TaskTracker.TaskCard.dataView9.159",
                                                  $widgetId: "p.TaskTracker.TaskCard.dataView9.159",
                                                  class: "mx-name-dataView9 spacing-outer-top-large hide-phone form-vertical",
                                                  style: void 0,
                                                  tabIndex: void 0,
                                                  object: AssociationObjectProperty({
                                                    "dataSourceId": "p.160",
                                                    "scope": "p.TaskTracker.TaskOverview.gallery3",
                                                    "editable": true,
                                                    "path": "TaskTracker.Task_MendixSSOUser_Assignee/MendixSSO.MendixSSOUser",
                                                    "operationId": "mt2PWJtcc1ufwZzwGslckg"
                                                  }),
                                                  emptyMessage: TextProperty({
                                                    "value": selectTranslation([
                                                      ""
                                                    ])
                                                  }),
                                                  body: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Text,
                                                      {
                                                        key: "p.TaskTracker.TaskCard.text6.161",
                                                        $widgetId: "p.TaskTracker.TaskCard.text6.161",
                                                        class: "mx-name-text6 text-detail spacing-outer-bottom",
                                                        style: void 0,
                                                        caption: selectTranslation([
                                                          ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Tilldelad: " }, { "type": "variable", "variable": "currentObject", "path": "DisplayName" }] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskCard.dataView9.159", "source": "object" } } }
                                                          })
                                                        ]),
                                                        renderMode: "p"
                                                      }
                                                    )
                                                  ],
                                                  hideFooter: true,
                                                  footer: void 0
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "p.TaskTracker.TaskCard.layoutGrid2.162",
                                                  $widgetId: "p.TaskTracker.TaskCard.layoutGrid2.162",
                                                  class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Div,
                                                      {
                                                        key: "p.TaskTracker.TaskOverview.layoutGrid2$row0.163",
                                                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0.163",
                                                        class: "row",
                                                        style: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column0.164",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column0.164",
                                                              class: "col-lg col-md col",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text5.165",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text5.165",
                                                                    class: "mx-name-text5 hide-phone hide-tablet",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Due: " }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Task", "path": "DueDate" }, { "type": "literal", "value": '{"type":"custom","pattern":"dd MMM yy"}' }] }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery3", "source": "object" } } }
                                                                      })
                                                                    ]),
                                                                    renderMode: "h5"
                                                                  }
                                                                ),
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text7.166",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text7.166",
                                                                    class: "mx-name-text7 hide-desktop",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Due: " }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Task", "path": "DueDate" }, { "type": "literal", "value": '{"type":"custom","pattern":"dd/MM/yy"}' }] }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery3", "source": "object" } } }
                                                                      })
                                                                    ]),
                                                                    renderMode: "h5"
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          ),
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column1.167",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column1.167",
                                                              class: "col-lg-auto col-md-auto col-auto",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $ConditionalVisibilityWrapper,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.badge1$visibility.168",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge1$visibility.168",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "Low" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery3", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge1.168",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge1.168",
                                                                          type: "badge",
                                                                          value: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "TaskTracker.ENUM_Priority" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery3", "source": "object" } } }
                                                                            })
                                                                          ]),
                                                                          onClick: void 0,
                                                                          class: "mx-name-badge1 label-info pull-right",
                                                                          style: void 0,
                                                                          tabIndex: void 0
                                                                        }
                                                                      )
                                                                    ]
                                                                  }
                                                                ),
                                                                /* @__PURE__ */ React.createElement(
                                                                  $ConditionalVisibilityWrapper,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.badge2$visibility.169",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge2$visibility.169",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "Medium" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery3", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge2.169",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge2.169",
                                                                          type: "badge",
                                                                          value: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "TaskTracker.ENUM_Priority" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery3", "source": "object" } } }
                                                                            })
                                                                          ]),
                                                                          onClick: void 0,
                                                                          class: "mx-name-badge2 label-warning pull-right",
                                                                          style: void 0,
                                                                          tabIndex: void 0
                                                                        }
                                                                      )
                                                                    ]
                                                                  }
                                                                ),
                                                                /* @__PURE__ */ React.createElement(
                                                                  $ConditionalVisibilityWrapper,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.badge3$visibility.170",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge3$visibility.170",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "High" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery3", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge3.170",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge3.170",
                                                                          type: "badge",
                                                                          value: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "TaskTracker.ENUM_Priority" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery3", "source": "object" } } }
                                                                            })
                                                                          ]),
                                                                          onClick: void 0,
                                                                          class: "mx-name-badge3 label-danger pull-right",
                                                                          style: void 0,
                                                                          tabIndex: void 0
                                                                        }
                                                                      )
                                                                    ]
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          )
                                                        ]
                                                      }
                                                    )
                                                  ]
                                                }
                                              )
                                            ],
                                            ariaHidden: false
                                          }
                                        )
                                      ]
                                    }
                                  )
                                ]
                              }),
                              desktopItems: 1,
                              tabletItems: 1,
                              phoneItems: 1,
                              pageSize: 10,
                              pagination: "virtualScrolling",
                              pagingPosition: "below",
                              showEmptyPlaceholder: "custom",
                              emptyPlaceholder: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.TaskTracker.TaskOverview.text4",
                                    $widgetId: "p.TaskTracker.TaskOverview.text4",
                                    class: "mx-name-text4",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "No tasks in In Progress" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                )
                              ],
                              itemClass: void 0,
                              onClick: ListActionProperty({
                                "action": { "type": "openPage", "argMap": { "param$Task": { "widget": "p.TaskTracker.TaskOverview.gallery3", "source": "object" } }, "config": { "name": "TaskTracker/TaskEdit.page.xml", "location": "modal", "resizable": false, "allowedRoles": ["Manager", "Member"] }, "disabledDuringExecution": false },
                                "abortOnServerValidation": false,
                                "dataSourceId": "p.59",
                                "argumentTypes": {}
                              }),
                              filterList: [],
                              filtersPlaceholder: void 0,
                              sortList: [],
                              filterSectionTitle: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                })
                              ]),
                              emptyMessageTitle: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                })
                              ]),
                              onSelectionChange: void 0,
                              ariaLabelListBox: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                })
                              ]),
                              class: "mx-name-gallery3 widget-gallery-gridgap-none spacing-outer-right-large spacing-outer-top-large",
                              style: void 0,
                              tabIndex: void 0
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.TaskTracker.TaskOverview.layoutGrid4$row1$column2",
                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid4$row1$column2",
                        class: "col-lg-3 col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Gallery,
                            {
                              key: "p.TaskTracker.TaskOverview.gallery4",
                              $widgetId: "p.TaskTracker.TaskOverview.gallery4",
                              advanced: false,
                              datasource: DatabaseObjectListProperty({
                                "dataSourceId": "p.60",
                                "entity": "TaskTracker.Task",
                                "operationId": "c8eN41V48VqZdexYDWwNxg",
                                "sort": [
                                  [
                                    "DueDate",
                                    "asc"
                                  ]
                                ],
                                "constraints": { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "Status", "context": "TaskTracker.Task", "attributeType": "#TaskTracker.ENUM_Status" }, { "type": "literal", "value": "Review" }] }
                              }),
                              content: TemplatedWidgetProperty({
                                "dataSourceId": "p.60",
                                "editable": false,
                                "children": () => [
                                  /* @__PURE__ */ React.createElement(
                                    $Fragment,
                                    {
                                      key: "p.TaskTracker.TaskOverview.snippetCall4",
                                      $widgetId: "p.TaskTracker.TaskOverview.snippetCall4",
                                      content: [
                                        /* @__PURE__ */ React.createElement(
                                          $Container,
                                          {
                                            key: "p.TaskTracker.TaskCard.container3.179",
                                            $widgetId: "p.TaskTracker.TaskCard.container3.179",
                                            class: "mx-name-container3 card shadow-medium",
                                            style: void 0,
                                            renderMode: "div",
                                            onClick: void 0,
                                            content: [
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "p.TaskTracker.TaskCard.layoutGrid1.180",
                                                  $widgetId: "p.TaskTracker.TaskCard.layoutGrid1.180",
                                                  class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid spacing-inner-left-none spacing-inner-right-none spacing-inner-top-none",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Div,
                                                      {
                                                        key: "p.TaskTracker.TaskOverview.layoutGrid1$row0.181",
                                                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0.181",
                                                        class: "row",
                                                        style: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column0.182",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column0.182",
                                                              class: "col-lg col-md col",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text4.183",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text4.183",
                                                                    class: "mx-name-text4 hide-phone hide-tablet",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "variable", "variable": "Task", "path": "Title" }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery4", "source": "object" } } }
                                                                      })
                                                                    ]),
                                                                    renderMode: "h4"
                                                                  }
                                                                ),
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text8.184",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text8.184",
                                                                    class: "mx-name-text8 hide-desktop",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "variable", "variable": "Task", "path": "Title" }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery4", "source": "object" } } }
                                                                      })
                                                                    ]),
                                                                    renderMode: "h5"
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          ),
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column1.185",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column1.185",
                                                              class: "col-lg-auto col-md-auto col-auto",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $DataView,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.dataView5.186",
                                                                    $widgetId: "p.TaskTracker.TaskCard.dataView5.186",
                                                                    class: "mx-name-dataView5 pull-right form-vertical",
                                                                    style: void 0,
                                                                    tabIndex: void 0,
                                                                    object: AssociationObjectProperty({
                                                                      "dataSourceId": "p.187",
                                                                      "scope": "p.TaskTracker.TaskOverview.gallery4",
                                                                      "editable": true,
                                                                      "path": "TaskTracker.Task_MendixSSOUser_Assignee/MendixSSO.MendixSSOUser",
                                                                      "operationId": "3+Dubout312gixtXpAb2kQ"
                                                                    }),
                                                                    emptyMessage: TextProperty({
                                                                      "value": selectTranslation([
                                                                        ""
                                                                      ])
                                                                    }),
                                                                    body: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Image,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.image1.188",
                                                                          $widgetId: "p.TaskTracker.TaskCard.image1.188",
                                                                          datasource: "imageUrl",
                                                                          imageObject: void 0,
                                                                          defaultImageDynamic: void 0,
                                                                          imageUrl: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "AvatarURL" }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskCard.dataView5.186", "source": "object" } } }
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
                                                                          width: 40,
                                                                          heightUnit: "pixels",
                                                                          height: 40,
                                                                          iconSize: 14,
                                                                          displayAs: "fullImage",
                                                                          responsive: false,
                                                                          class: "mx-name-image1 img-circle",
                                                                          style: void 0,
                                                                          tabIndex: void 0
                                                                        }
                                                                      )
                                                                    ],
                                                                    hideFooter: true,
                                                                    footer: void 0
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          )
                                                        ]
                                                      }
                                                    )
                                                  ]
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $DataView,
                                                {
                                                  key: "p.TaskTracker.TaskCard.dataView9.189",
                                                  $widgetId: "p.TaskTracker.TaskCard.dataView9.189",
                                                  class: "mx-name-dataView9 spacing-outer-top-large hide-phone form-vertical",
                                                  style: void 0,
                                                  tabIndex: void 0,
                                                  object: AssociationObjectProperty({
                                                    "dataSourceId": "p.190",
                                                    "scope": "p.TaskTracker.TaskOverview.gallery4",
                                                    "editable": true,
                                                    "path": "TaskTracker.Task_MendixSSOUser_Assignee/MendixSSO.MendixSSOUser",
                                                    "operationId": "hGkMJLjlUl2YIegoBKDk2w"
                                                  }),
                                                  emptyMessage: TextProperty({
                                                    "value": selectTranslation([
                                                      ""
                                                    ])
                                                  }),
                                                  body: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Text,
                                                      {
                                                        key: "p.TaskTracker.TaskCard.text6.191",
                                                        $widgetId: "p.TaskTracker.TaskCard.text6.191",
                                                        class: "mx-name-text6 text-detail spacing-outer-bottom",
                                                        style: void 0,
                                                        caption: selectTranslation([
                                                          ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Tilldelad: " }, { "type": "variable", "variable": "currentObject", "path": "DisplayName" }] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskCard.dataView9.189", "source": "object" } } }
                                                          })
                                                        ]),
                                                        renderMode: "p"
                                                      }
                                                    )
                                                  ],
                                                  hideFooter: true,
                                                  footer: void 0
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "p.TaskTracker.TaskCard.layoutGrid2.192",
                                                  $widgetId: "p.TaskTracker.TaskCard.layoutGrid2.192",
                                                  class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Div,
                                                      {
                                                        key: "p.TaskTracker.TaskOverview.layoutGrid2$row0.193",
                                                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0.193",
                                                        class: "row",
                                                        style: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column0.194",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column0.194",
                                                              class: "col-lg col-md col",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text5.195",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text5.195",
                                                                    class: "mx-name-text5 hide-phone hide-tablet",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Due: " }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Task", "path": "DueDate" }, { "type": "literal", "value": '{"type":"custom","pattern":"dd MMM yy"}' }] }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery4", "source": "object" } } }
                                                                      })
                                                                    ]),
                                                                    renderMode: "h5"
                                                                  }
                                                                ),
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text7.196",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text7.196",
                                                                    class: "mx-name-text7 hide-desktop",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Due: " }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Task", "path": "DueDate" }, { "type": "literal", "value": '{"type":"custom","pattern":"dd/MM/yy"}' }] }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery4", "source": "object" } } }
                                                                      })
                                                                    ]),
                                                                    renderMode: "h5"
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          ),
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column1.197",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column1.197",
                                                              class: "col-lg-auto col-md-auto col-auto",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $ConditionalVisibilityWrapper,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.badge1$visibility.198",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge1$visibility.198",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "Low" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery4", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge1.198",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge1.198",
                                                                          type: "badge",
                                                                          value: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "TaskTracker.ENUM_Priority" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery4", "source": "object" } } }
                                                                            })
                                                                          ]),
                                                                          onClick: void 0,
                                                                          class: "mx-name-badge1 label-info pull-right",
                                                                          style: void 0,
                                                                          tabIndex: void 0
                                                                        }
                                                                      )
                                                                    ]
                                                                  }
                                                                ),
                                                                /* @__PURE__ */ React.createElement(
                                                                  $ConditionalVisibilityWrapper,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.badge2$visibility.199",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge2$visibility.199",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "Medium" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery4", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge2.199",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge2.199",
                                                                          type: "badge",
                                                                          value: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "TaskTracker.ENUM_Priority" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery4", "source": "object" } } }
                                                                            })
                                                                          ]),
                                                                          onClick: void 0,
                                                                          class: "mx-name-badge2 label-warning pull-right",
                                                                          style: void 0,
                                                                          tabIndex: void 0
                                                                        }
                                                                      )
                                                                    ]
                                                                  }
                                                                ),
                                                                /* @__PURE__ */ React.createElement(
                                                                  $ConditionalVisibilityWrapper,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.badge3$visibility.200",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge3$visibility.200",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "High" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery4", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge3.200",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge3.200",
                                                                          type: "badge",
                                                                          value: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "TaskTracker.ENUM_Priority" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery4", "source": "object" } } }
                                                                            })
                                                                          ]),
                                                                          onClick: void 0,
                                                                          class: "mx-name-badge3 label-danger pull-right",
                                                                          style: void 0,
                                                                          tabIndex: void 0
                                                                        }
                                                                      )
                                                                    ]
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          )
                                                        ]
                                                      }
                                                    )
                                                  ]
                                                }
                                              )
                                            ],
                                            ariaHidden: false
                                          }
                                        )
                                      ]
                                    }
                                  )
                                ]
                              }),
                              desktopItems: 1,
                              tabletItems: 1,
                              phoneItems: 1,
                              pageSize: 10,
                              pagination: "virtualScrolling",
                              pagingPosition: "below",
                              showEmptyPlaceholder: "custom",
                              emptyPlaceholder: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.TaskTracker.TaskOverview.text7",
                                    $widgetId: "p.TaskTracker.TaskOverview.text7",
                                    class: "mx-name-text7",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "No tasks in Review" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                )
                              ],
                              itemClass: void 0,
                              onClick: ListActionProperty({
                                "action": { "type": "openPage", "argMap": { "param$Task": { "widget": "p.TaskTracker.TaskOverview.gallery4", "source": "object" } }, "config": { "name": "TaskTracker/TaskEdit.page.xml", "location": "modal", "resizable": false, "allowedRoles": ["Manager", "Member"] }, "disabledDuringExecution": false },
                                "abortOnServerValidation": false,
                                "dataSourceId": "p.60",
                                "argumentTypes": {}
                              }),
                              filterList: [],
                              filtersPlaceholder: void 0,
                              sortList: [],
                              filterSectionTitle: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                })
                              ]),
                              emptyMessageTitle: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                })
                              ]),
                              onSelectionChange: void 0,
                              ariaLabelListBox: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                })
                              ]),
                              class: "mx-name-gallery4 widget-gallery-gridgap-none spacing-outer-right-large spacing-outer-top-large",
                              style: void 0,
                              tabIndex: void 0
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.TaskTracker.TaskOverview.layoutGrid4$row1$column3",
                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid4$row1$column3",
                        class: "col-lg-3 col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Gallery,
                            {
                              key: "p.TaskTracker.TaskOverview.gallery5",
                              $widgetId: "p.TaskTracker.TaskOverview.gallery5",
                              advanced: false,
                              datasource: DatabaseObjectListProperty({
                                "dataSourceId": "p.61",
                                "entity": "TaskTracker.Task",
                                "operationId": "32Xr/rn9CV2VG3hcstHkiw",
                                "sort": [
                                  [
                                    "DueDate",
                                    "asc"
                                  ]
                                ],
                                "constraints": { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "Status", "context": "TaskTracker.Task", "attributeType": "#TaskTracker.ENUM_Status" }, { "type": "literal", "value": "Done" }] }
                              }),
                              content: TemplatedWidgetProperty({
                                "dataSourceId": "p.61",
                                "editable": false,
                                "children": () => [
                                  /* @__PURE__ */ React.createElement(
                                    $Fragment,
                                    {
                                      key: "p.TaskTracker.TaskOverview.snippetCall5",
                                      $widgetId: "p.TaskTracker.TaskOverview.snippetCall5",
                                      content: [
                                        /* @__PURE__ */ React.createElement(
                                          $Container,
                                          {
                                            key: "p.TaskTracker.TaskCard.container3.209",
                                            $widgetId: "p.TaskTracker.TaskCard.container3.209",
                                            class: "mx-name-container3 card shadow-medium",
                                            style: void 0,
                                            renderMode: "div",
                                            onClick: void 0,
                                            content: [
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "p.TaskTracker.TaskCard.layoutGrid1.210",
                                                  $widgetId: "p.TaskTracker.TaskCard.layoutGrid1.210",
                                                  class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid spacing-inner-left-none spacing-inner-right-none spacing-inner-top-none",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Div,
                                                      {
                                                        key: "p.TaskTracker.TaskOverview.layoutGrid1$row0.211",
                                                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0.211",
                                                        class: "row",
                                                        style: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column0.212",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column0.212",
                                                              class: "col-lg col-md col",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text4.213",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text4.213",
                                                                    class: "mx-name-text4 hide-phone hide-tablet",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "variable", "variable": "Task", "path": "Title" }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery5", "source": "object" } } }
                                                                      })
                                                                    ]),
                                                                    renderMode: "h4"
                                                                  }
                                                                ),
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text8.214",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text8.214",
                                                                    class: "mx-name-text8 hide-desktop",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "variable", "variable": "Task", "path": "Title" }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery5", "source": "object" } } }
                                                                      })
                                                                    ]),
                                                                    renderMode: "h5"
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          ),
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column1.215",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column1.215",
                                                              class: "col-lg-auto col-md-auto col-auto",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $DataView,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.dataView5.216",
                                                                    $widgetId: "p.TaskTracker.TaskCard.dataView5.216",
                                                                    class: "mx-name-dataView5 pull-right form-vertical",
                                                                    style: void 0,
                                                                    tabIndex: void 0,
                                                                    object: AssociationObjectProperty({
                                                                      "dataSourceId": "p.217",
                                                                      "scope": "p.TaskTracker.TaskOverview.gallery5",
                                                                      "editable": true,
                                                                      "path": "TaskTracker.Task_MendixSSOUser_Assignee/MendixSSO.MendixSSOUser",
                                                                      "operationId": "bPcv2NiB31WtV48H8Ml7Pw"
                                                                    }),
                                                                    emptyMessage: TextProperty({
                                                                      "value": selectTranslation([
                                                                        ""
                                                                      ])
                                                                    }),
                                                                    body: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Image,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.image1.218",
                                                                          $widgetId: "p.TaskTracker.TaskCard.image1.218",
                                                                          datasource: "imageUrl",
                                                                          imageObject: void 0,
                                                                          defaultImageDynamic: void 0,
                                                                          imageUrl: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "AvatarURL" }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskCard.dataView5.216", "source": "object" } } }
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
                                                                          width: 40,
                                                                          heightUnit: "pixels",
                                                                          height: 40,
                                                                          iconSize: 14,
                                                                          displayAs: "fullImage",
                                                                          responsive: false,
                                                                          class: "mx-name-image1 img-circle",
                                                                          style: void 0,
                                                                          tabIndex: void 0
                                                                        }
                                                                      )
                                                                    ],
                                                                    hideFooter: true,
                                                                    footer: void 0
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          )
                                                        ]
                                                      }
                                                    )
                                                  ]
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $DataView,
                                                {
                                                  key: "p.TaskTracker.TaskCard.dataView9.219",
                                                  $widgetId: "p.TaskTracker.TaskCard.dataView9.219",
                                                  class: "mx-name-dataView9 spacing-outer-top-large hide-phone form-vertical",
                                                  style: void 0,
                                                  tabIndex: void 0,
                                                  object: AssociationObjectProperty({
                                                    "dataSourceId": "p.220",
                                                    "scope": "p.TaskTracker.TaskOverview.gallery5",
                                                    "editable": true,
                                                    "path": "TaskTracker.Task_MendixSSOUser_Assignee/MendixSSO.MendixSSOUser",
                                                    "operationId": "vB7y65+rNFezhtxuvXdqxA"
                                                  }),
                                                  emptyMessage: TextProperty({
                                                    "value": selectTranslation([
                                                      ""
                                                    ])
                                                  }),
                                                  body: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Text,
                                                      {
                                                        key: "p.TaskTracker.TaskCard.text6.221",
                                                        $widgetId: "p.TaskTracker.TaskCard.text6.221",
                                                        class: "mx-name-text6 text-detail spacing-outer-bottom",
                                                        style: void 0,
                                                        caption: selectTranslation([
                                                          ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Tilldelad: " }, { "type": "variable", "variable": "currentObject", "path": "DisplayName" }] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskCard.dataView9.219", "source": "object" } } }
                                                          })
                                                        ]),
                                                        renderMode: "p"
                                                      }
                                                    )
                                                  ],
                                                  hideFooter: true,
                                                  footer: void 0
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "p.TaskTracker.TaskCard.layoutGrid2.222",
                                                  $widgetId: "p.TaskTracker.TaskCard.layoutGrid2.222",
                                                  class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Div,
                                                      {
                                                        key: "p.TaskTracker.TaskOverview.layoutGrid2$row0.223",
                                                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0.223",
                                                        class: "row",
                                                        style: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column0.224",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column0.224",
                                                              class: "col-lg col-md col",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text5.225",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text5.225",
                                                                    class: "mx-name-text5 hide-phone hide-tablet",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Due: " }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Task", "path": "DueDate" }, { "type": "literal", "value": '{"type":"custom","pattern":"dd MMM yy"}' }] }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery5", "source": "object" } } }
                                                                      })
                                                                    ]),
                                                                    renderMode: "h5"
                                                                  }
                                                                ),
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text7.226",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text7.226",
                                                                    class: "mx-name-text7 hide-desktop",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Due: " }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Task", "path": "DueDate" }, { "type": "literal", "value": '{"type":"custom","pattern":"dd/MM/yy"}' }] }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery5", "source": "object" } } }
                                                                      })
                                                                    ]),
                                                                    renderMode: "h5"
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          ),
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column1.227",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column1.227",
                                                              class: "col-lg-auto col-md-auto col-auto",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $ConditionalVisibilityWrapper,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.badge1$visibility.228",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge1$visibility.228",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "Low" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery5", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge1.228",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge1.228",
                                                                          type: "badge",
                                                                          value: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "TaskTracker.ENUM_Priority" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery5", "source": "object" } } }
                                                                            })
                                                                          ]),
                                                                          onClick: void 0,
                                                                          class: "mx-name-badge1 label-info pull-right",
                                                                          style: void 0,
                                                                          tabIndex: void 0
                                                                        }
                                                                      )
                                                                    ]
                                                                  }
                                                                ),
                                                                /* @__PURE__ */ React.createElement(
                                                                  $ConditionalVisibilityWrapper,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.badge2$visibility.229",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge2$visibility.229",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "Medium" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery5", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge2.229",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge2.229",
                                                                          type: "badge",
                                                                          value: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "TaskTracker.ENUM_Priority" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery5", "source": "object" } } }
                                                                            })
                                                                          ]),
                                                                          onClick: void 0,
                                                                          class: "mx-name-badge2 label-warning pull-right",
                                                                          style: void 0,
                                                                          tabIndex: void 0
                                                                        }
                                                                      )
                                                                    ]
                                                                  }
                                                                ),
                                                                /* @__PURE__ */ React.createElement(
                                                                  $ConditionalVisibilityWrapper,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.badge3$visibility.230",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge3$visibility.230",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "High" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery5", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge3.230",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge3.230",
                                                                          type: "badge",
                                                                          value: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "TaskTracker.ENUM_Priority" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery5", "source": "object" } } }
                                                                            })
                                                                          ]),
                                                                          onClick: void 0,
                                                                          class: "mx-name-badge3 label-danger pull-right",
                                                                          style: void 0,
                                                                          tabIndex: void 0
                                                                        }
                                                                      )
                                                                    ]
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          )
                                                        ]
                                                      }
                                                    )
                                                  ]
                                                }
                                              )
                                            ],
                                            ariaHidden: false
                                          }
                                        )
                                      ]
                                    }
                                  )
                                ]
                              }),
                              desktopItems: 1,
                              tabletItems: 1,
                              phoneItems: 1,
                              pageSize: 10,
                              pagination: "virtualScrolling",
                              pagingPosition: "below",
                              showEmptyPlaceholder: "custom",
                              emptyPlaceholder: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.TaskTracker.TaskOverview.text6",
                                    $widgetId: "p.TaskTracker.TaskOverview.text6",
                                    class: "mx-name-text6",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "No tasks in Done" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                )
                              ],
                              itemClass: void 0,
                              onClick: ListActionProperty({
                                "action": { "type": "openPage", "argMap": { "param$Task": { "widget": "p.TaskTracker.TaskOverview.gallery5", "source": "object" } }, "config": { "name": "TaskTracker/TaskEdit.page.xml", "location": "modal", "resizable": false, "allowedRoles": ["Manager", "Member"] }, "disabledDuringExecution": false },
                                "abortOnServerValidation": false,
                                "dataSourceId": "p.61",
                                "argumentTypes": {}
                              }),
                              filterList: [],
                              filtersPlaceholder: void 0,
                              sortList: [],
                              filterSectionTitle: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                })
                              ]),
                              emptyMessageTitle: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                })
                              ]),
                              onSelectionChange: void 0,
                              ariaLabelListBox: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                })
                              ]),
                              class: "mx-name-gallery5 widget-gallery-gridgap-none spacing-outer-right-large spacing-outer-top-large",
                              style: void 0,
                              tabIndex: void 0
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ],
      ariaHidden: false
    }
  ),
  /* @__PURE__ */ React.createElement(
    $Container,
    {
      key: "p.TaskTracker.TaskOverview.container6",
      $widgetId: "p.TaskTracker.TaskOverview.container6",
      class: "mx-name-container6 spacing-inner-left-large spacing-inner-right-large hide-tablet hide-desktop",
      style: void 0,
      renderMode: "div",
      onClick: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.TaskTracker.TaskOverview.layoutGrid5",
            $widgetId: "p.TaskTracker.TaskOverview.layoutGrid5",
            class: "mx-name-layoutGrid5 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.TaskTracker.TaskOverview.layoutGrid5$row0",
                  $widgetId: "p.TaskTracker.TaskOverview.layoutGrid5$row0",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.TaskTracker.TaskOverview.layoutGrid5$row0$column0",
                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid5$row0$column0",
                        class: "col-lg col-md col-9",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.TaskTracker.TaskOverview.text8",
                              $widgetId: "p.TaskTracker.TaskOverview.text8",
                              class: "mx-name-text8",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "To Do" }, "args": {} }
                                })
                              ]),
                              renderMode: "h2"
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.TaskTracker.TaskOverview.layoutGrid5$row0$column1",
                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid5$row0$column1",
                        class: "col-lg col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.TaskTracker.TaskOverview.actionButton3$visibility",
                              $widgetId: "p.TaskTracker.TaskOverview.actionButton3$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Manager" }, { "type": "literal", "value": "Member" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.TaskTracker.TaskOverview.actionButton3",
                                    $widgetId: "p.TaskTracker.TaskOverview.actionButton3",
                                    buttonId: "p.TaskTracker.TaskOverview.actionButton3",
                                    class: "mx-name-actionButton3 pull-right btn-lg spacing-outer-right-large",
                                    style: void 0,
                                    tabIndex: void 0,
                                    renderType: "button",
                                    role: void 0,
                                    buttonClass: "btn-default",
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "+" }, "args": {} }
                                      })
                                    ]),
                                    tooltip: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    icon: void 0,
                                    action: ActionProperty({
                                      "action": { "type": "createObject", "argMap": {}, "config": { "entity": "TaskTracker.Task", "operationId": "EUhwi+FHoVWqyF/tbiV0oA", "pageSettings": { "name": "TaskTracker/TaskEdit.page.xml", "location": "modal", "resizable": false, "allowedRoles": ["Manager", "Member"] }, "allowedRoles": ["Manager", "Member"], "objectParameter": "param$Task" }, "disabledDuringExecution": true },
                                      "abortOnServerValidation": true
                                    })
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.TaskTracker.TaskOverview.layoutGrid5$row1",
                  $widgetId: "p.TaskTracker.TaskOverview.layoutGrid5$row1",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.TaskTracker.TaskOverview.layoutGrid5$row1$column0",
                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid5$row1$column0",
                        class: "col-lg col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Gallery,
                            {
                              key: "p.TaskTracker.TaskOverview.gallery6",
                              $widgetId: "p.TaskTracker.TaskOverview.gallery6",
                              advanced: false,
                              datasource: DatabaseObjectListProperty({
                                "dataSourceId": "p.235",
                                "entity": "TaskTracker.Task",
                                "operationId": "nrUdhUyHZ1W4Gua63ItfHQ",
                                "sort": [
                                  [
                                    "DueDate",
                                    "asc"
                                  ]
                                ],
                                "constraints": { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "Status", "context": "TaskTracker.Task", "attributeType": "#TaskTracker.ENUM_Status" }, { "type": "literal", "value": "To_Do" }] }
                              }),
                              content: TemplatedWidgetProperty({
                                "dataSourceId": "p.235",
                                "editable": false,
                                "children": () => [
                                  /* @__PURE__ */ React.createElement(
                                    $Fragment,
                                    {
                                      key: "p.TaskTracker.TaskOverview.snippetCall6",
                                      $widgetId: "p.TaskTracker.TaskOverview.snippetCall6",
                                      content: [
                                        /* @__PURE__ */ React.createElement(
                                          $Container,
                                          {
                                            key: "p.TaskTracker.TaskCard.container3.260",
                                            $widgetId: "p.TaskTracker.TaskCard.container3.260",
                                            class: "mx-name-container3 card shadow-medium",
                                            style: void 0,
                                            renderMode: "div",
                                            onClick: void 0,
                                            content: [
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "p.TaskTracker.TaskCard.layoutGrid1.261",
                                                  $widgetId: "p.TaskTracker.TaskCard.layoutGrid1.261",
                                                  class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid spacing-inner-left-none spacing-inner-right-none spacing-inner-top-none",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Div,
                                                      {
                                                        key: "p.TaskTracker.TaskOverview.layoutGrid1$row0.262",
                                                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0.262",
                                                        class: "row",
                                                        style: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column0.263",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column0.263",
                                                              class: "col-lg col-md col",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text4.264",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text4.264",
                                                                    class: "mx-name-text4 hide-phone hide-tablet",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "variable", "variable": "Task", "path": "Title" }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery6", "source": "object" } } }
                                                                      })
                                                                    ]),
                                                                    renderMode: "h4"
                                                                  }
                                                                ),
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text8.265",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text8.265",
                                                                    class: "mx-name-text8 hide-desktop",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "variable", "variable": "Task", "path": "Title" }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery6", "source": "object" } } }
                                                                      })
                                                                    ]),
                                                                    renderMode: "h5"
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          ),
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column1.266",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column1.266",
                                                              class: "col-lg-auto col-md-auto col-auto",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $DataView,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.dataView5.267",
                                                                    $widgetId: "p.TaskTracker.TaskCard.dataView5.267",
                                                                    class: "mx-name-dataView5 pull-right form-vertical",
                                                                    style: void 0,
                                                                    tabIndex: void 0,
                                                                    object: AssociationObjectProperty({
                                                                      "dataSourceId": "p.268",
                                                                      "scope": "p.TaskTracker.TaskOverview.gallery6",
                                                                      "editable": true,
                                                                      "path": "TaskTracker.Task_MendixSSOUser_Assignee/MendixSSO.MendixSSOUser",
                                                                      "operationId": "mxRWWpoU51yObnopNjWwWg"
                                                                    }),
                                                                    emptyMessage: TextProperty({
                                                                      "value": selectTranslation([
                                                                        ""
                                                                      ])
                                                                    }),
                                                                    body: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Image,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.image1.269",
                                                                          $widgetId: "p.TaskTracker.TaskCard.image1.269",
                                                                          datasource: "imageUrl",
                                                                          imageObject: void 0,
                                                                          defaultImageDynamic: void 0,
                                                                          imageUrl: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "AvatarURL" }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskCard.dataView5.267", "source": "object" } } }
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
                                                                          width: 40,
                                                                          heightUnit: "pixels",
                                                                          height: 40,
                                                                          iconSize: 14,
                                                                          displayAs: "fullImage",
                                                                          responsive: false,
                                                                          class: "mx-name-image1 img-circle",
                                                                          style: void 0,
                                                                          tabIndex: void 0
                                                                        }
                                                                      )
                                                                    ],
                                                                    hideFooter: true,
                                                                    footer: void 0
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          )
                                                        ]
                                                      }
                                                    )
                                                  ]
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $DataView,
                                                {
                                                  key: "p.TaskTracker.TaskCard.dataView9.270",
                                                  $widgetId: "p.TaskTracker.TaskCard.dataView9.270",
                                                  class: "mx-name-dataView9 spacing-outer-top-large hide-phone form-vertical",
                                                  style: void 0,
                                                  tabIndex: void 0,
                                                  object: AssociationObjectProperty({
                                                    "dataSourceId": "p.271",
                                                    "scope": "p.TaskTracker.TaskOverview.gallery6",
                                                    "editable": true,
                                                    "path": "TaskTracker.Task_MendixSSOUser_Assignee/MendixSSO.MendixSSOUser",
                                                    "operationId": "4qCXTZ08C1qisGPohOx7fQ"
                                                  }),
                                                  emptyMessage: TextProperty({
                                                    "value": selectTranslation([
                                                      ""
                                                    ])
                                                  }),
                                                  body: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Text,
                                                      {
                                                        key: "p.TaskTracker.TaskCard.text6.272",
                                                        $widgetId: "p.TaskTracker.TaskCard.text6.272",
                                                        class: "mx-name-text6 text-detail spacing-outer-bottom",
                                                        style: void 0,
                                                        caption: selectTranslation([
                                                          ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Tilldelad: " }, { "type": "variable", "variable": "currentObject", "path": "DisplayName" }] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskCard.dataView9.270", "source": "object" } } }
                                                          })
                                                        ]),
                                                        renderMode: "p"
                                                      }
                                                    )
                                                  ],
                                                  hideFooter: true,
                                                  footer: void 0
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "p.TaskTracker.TaskCard.layoutGrid2.273",
                                                  $widgetId: "p.TaskTracker.TaskCard.layoutGrid2.273",
                                                  class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Div,
                                                      {
                                                        key: "p.TaskTracker.TaskOverview.layoutGrid2$row0.274",
                                                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0.274",
                                                        class: "row",
                                                        style: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column0.275",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column0.275",
                                                              class: "col-lg col-md col",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text5.276",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text5.276",
                                                                    class: "mx-name-text5 hide-phone hide-tablet",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Due: " }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Task", "path": "DueDate" }, { "type": "literal", "value": '{"type":"custom","pattern":"dd MMM yy"}' }] }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery6", "source": "object" } } }
                                                                      })
                                                                    ]),
                                                                    renderMode: "h5"
                                                                  }
                                                                ),
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text7.277",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text7.277",
                                                                    class: "mx-name-text7 hide-desktop",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Due: " }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Task", "path": "DueDate" }, { "type": "literal", "value": '{"type":"custom","pattern":"dd/MM/yy"}' }] }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery6", "source": "object" } } }
                                                                      })
                                                                    ]),
                                                                    renderMode: "h5"
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          ),
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column1.278",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column1.278",
                                                              class: "col-lg-auto col-md-auto col-auto",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $ConditionalVisibilityWrapper,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.badge1$visibility.279",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge1$visibility.279",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "Low" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery6", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge1.279",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge1.279",
                                                                          type: "badge",
                                                                          value: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "TaskTracker.ENUM_Priority" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery6", "source": "object" } } }
                                                                            })
                                                                          ]),
                                                                          onClick: void 0,
                                                                          class: "mx-name-badge1 label-info pull-right",
                                                                          style: void 0,
                                                                          tabIndex: void 0
                                                                        }
                                                                      )
                                                                    ]
                                                                  }
                                                                ),
                                                                /* @__PURE__ */ React.createElement(
                                                                  $ConditionalVisibilityWrapper,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.badge2$visibility.280",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge2$visibility.280",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "Medium" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery6", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge2.280",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge2.280",
                                                                          type: "badge",
                                                                          value: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "TaskTracker.ENUM_Priority" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery6", "source": "object" } } }
                                                                            })
                                                                          ]),
                                                                          onClick: void 0,
                                                                          class: "mx-name-badge2 label-warning pull-right",
                                                                          style: void 0,
                                                                          tabIndex: void 0
                                                                        }
                                                                      )
                                                                    ]
                                                                  }
                                                                ),
                                                                /* @__PURE__ */ React.createElement(
                                                                  $ConditionalVisibilityWrapper,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.badge3$visibility.281",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge3$visibility.281",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "High" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery6", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge3.281",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge3.281",
                                                                          type: "badge",
                                                                          value: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "TaskTracker.ENUM_Priority" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery6", "source": "object" } } }
                                                                            })
                                                                          ]),
                                                                          onClick: void 0,
                                                                          class: "mx-name-badge3 label-danger pull-right",
                                                                          style: void 0,
                                                                          tabIndex: void 0
                                                                        }
                                                                      )
                                                                    ]
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          )
                                                        ]
                                                      }
                                                    )
                                                  ]
                                                }
                                              )
                                            ],
                                            ariaHidden: false
                                          }
                                        )
                                      ]
                                    }
                                  )
                                ]
                              }),
                              desktopItems: 1,
                              tabletItems: 1,
                              phoneItems: 2,
                              pageSize: 2,
                              pagination: "virtualScrolling",
                              pagingPosition: "below",
                              showEmptyPlaceholder: "custom",
                              emptyPlaceholder: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.TaskTracker.TaskOverview.text9",
                                    $widgetId: "p.TaskTracker.TaskOverview.text9",
                                    class: "mx-name-text9",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "No tasks in To Do" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                )
                              ],
                              itemClass: void 0,
                              onClick: ListActionProperty({
                                "action": { "type": "openPage", "argMap": { "param$Task": { "widget": "p.TaskTracker.TaskOverview.gallery6", "source": "object" } }, "config": { "name": "TaskTracker/TaskEdit.page.xml", "location": "modal", "resizable": false, "allowedRoles": ["Manager", "Member"] }, "disabledDuringExecution": false },
                                "abortOnServerValidation": false,
                                "dataSourceId": "p.235",
                                "argumentTypes": {}
                              }),
                              filterList: [],
                              filtersPlaceholder: void 0,
                              sortList: [],
                              filterSectionTitle: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                })
                              ]),
                              emptyMessageTitle: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                })
                              ]),
                              onSelectionChange: void 0,
                              ariaLabelListBox: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                })
                              ]),
                              class: "mx-name-gallery6 widget-gallery-gridgap-none spacing-outer-right-large spacing-outer-top-large",
                              style: void 0,
                              tabIndex: void 0
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.TaskTracker.TaskOverview.layoutGrid5$row2",
                  $widgetId: "p.TaskTracker.TaskOverview.layoutGrid5$row2",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.TaskTracker.TaskOverview.layoutGrid5$row2$column0",
                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid5$row2$column0",
                        class: "col-lg-auto col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.TaskTracker.TaskOverview.text11",
                              $widgetId: "p.TaskTracker.TaskOverview.text11",
                              class: "mx-name-text11 flex1",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "In Progress" }, "args": {} }
                                })
                              ]),
                              renderMode: "h2"
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.TaskTracker.TaskOverview.layoutGrid5$row3",
                  $widgetId: "p.TaskTracker.TaskOverview.layoutGrid5$row3",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.TaskTracker.TaskOverview.layoutGrid5$row3$column0",
                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid5$row3$column0",
                        class: "col-lg col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Gallery,
                            {
                              key: "p.TaskTracker.TaskOverview.gallery7",
                              $widgetId: "p.TaskTracker.TaskOverview.gallery7",
                              advanced: false,
                              datasource: DatabaseObjectListProperty({
                                "dataSourceId": "p.236",
                                "entity": "TaskTracker.Task",
                                "operationId": "/+Cm7gK9TFuiwDH8iGCN2Q",
                                "sort": [
                                  [
                                    "DueDate",
                                    "asc"
                                  ]
                                ],
                                "constraints": { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "Status", "context": "TaskTracker.Task", "attributeType": "#TaskTracker.ENUM_Status" }, { "type": "literal", "value": "Running" }] }
                              }),
                              content: TemplatedWidgetProperty({
                                "dataSourceId": "p.236",
                                "editable": false,
                                "children": () => [
                                  /* @__PURE__ */ React.createElement(
                                    $Fragment,
                                    {
                                      key: "p.TaskTracker.TaskOverview.snippetCall7",
                                      $widgetId: "p.TaskTracker.TaskOverview.snippetCall7",
                                      content: [
                                        /* @__PURE__ */ React.createElement(
                                          $Container,
                                          {
                                            key: "p.TaskTracker.TaskCard.container3.298",
                                            $widgetId: "p.TaskTracker.TaskCard.container3.298",
                                            class: "mx-name-container3 card shadow-medium",
                                            style: void 0,
                                            renderMode: "div",
                                            onClick: void 0,
                                            content: [
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "p.TaskTracker.TaskCard.layoutGrid1.299",
                                                  $widgetId: "p.TaskTracker.TaskCard.layoutGrid1.299",
                                                  class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid spacing-inner-left-none spacing-inner-right-none spacing-inner-top-none",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Div,
                                                      {
                                                        key: "p.TaskTracker.TaskOverview.layoutGrid1$row0.300",
                                                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0.300",
                                                        class: "row",
                                                        style: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column0.301",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column0.301",
                                                              class: "col-lg col-md col",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text4.302",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text4.302",
                                                                    class: "mx-name-text4 hide-phone hide-tablet",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "variable", "variable": "Task", "path": "Title" }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery7", "source": "object" } } }
                                                                      })
                                                                    ]),
                                                                    renderMode: "h4"
                                                                  }
                                                                ),
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text8.303",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text8.303",
                                                                    class: "mx-name-text8 hide-desktop",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "variable", "variable": "Task", "path": "Title" }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery7", "source": "object" } } }
                                                                      })
                                                                    ]),
                                                                    renderMode: "h5"
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          ),
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column1.304",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column1.304",
                                                              class: "col-lg-auto col-md-auto col-auto",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $DataView,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.dataView5.305",
                                                                    $widgetId: "p.TaskTracker.TaskCard.dataView5.305",
                                                                    class: "mx-name-dataView5 pull-right form-vertical",
                                                                    style: void 0,
                                                                    tabIndex: void 0,
                                                                    object: AssociationObjectProperty({
                                                                      "dataSourceId": "p.306",
                                                                      "scope": "p.TaskTracker.TaskOverview.gallery7",
                                                                      "editable": true,
                                                                      "path": "TaskTracker.Task_MendixSSOUser_Assignee/MendixSSO.MendixSSOUser",
                                                                      "operationId": "Qn+yNAPIKFahz5MRAJKZ5Q"
                                                                    }),
                                                                    emptyMessage: TextProperty({
                                                                      "value": selectTranslation([
                                                                        ""
                                                                      ])
                                                                    }),
                                                                    body: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Image,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.image1.307",
                                                                          $widgetId: "p.TaskTracker.TaskCard.image1.307",
                                                                          datasource: "imageUrl",
                                                                          imageObject: void 0,
                                                                          defaultImageDynamic: void 0,
                                                                          imageUrl: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "AvatarURL" }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskCard.dataView5.305", "source": "object" } } }
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
                                                                          width: 40,
                                                                          heightUnit: "pixels",
                                                                          height: 40,
                                                                          iconSize: 14,
                                                                          displayAs: "fullImage",
                                                                          responsive: false,
                                                                          class: "mx-name-image1 img-circle",
                                                                          style: void 0,
                                                                          tabIndex: void 0
                                                                        }
                                                                      )
                                                                    ],
                                                                    hideFooter: true,
                                                                    footer: void 0
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          )
                                                        ]
                                                      }
                                                    )
                                                  ]
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $DataView,
                                                {
                                                  key: "p.TaskTracker.TaskCard.dataView9.308",
                                                  $widgetId: "p.TaskTracker.TaskCard.dataView9.308",
                                                  class: "mx-name-dataView9 spacing-outer-top-large hide-phone form-vertical",
                                                  style: void 0,
                                                  tabIndex: void 0,
                                                  object: AssociationObjectProperty({
                                                    "dataSourceId": "p.309",
                                                    "scope": "p.TaskTracker.TaskOverview.gallery7",
                                                    "editable": true,
                                                    "path": "TaskTracker.Task_MendixSSOUser_Assignee/MendixSSO.MendixSSOUser",
                                                    "operationId": "P/3bhycPJFKd7RD/k89RPQ"
                                                  }),
                                                  emptyMessage: TextProperty({
                                                    "value": selectTranslation([
                                                      ""
                                                    ])
                                                  }),
                                                  body: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Text,
                                                      {
                                                        key: "p.TaskTracker.TaskCard.text6.310",
                                                        $widgetId: "p.TaskTracker.TaskCard.text6.310",
                                                        class: "mx-name-text6 text-detail spacing-outer-bottom",
                                                        style: void 0,
                                                        caption: selectTranslation([
                                                          ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Tilldelad: " }, { "type": "variable", "variable": "currentObject", "path": "DisplayName" }] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskCard.dataView9.308", "source": "object" } } }
                                                          })
                                                        ]),
                                                        renderMode: "p"
                                                      }
                                                    )
                                                  ],
                                                  hideFooter: true,
                                                  footer: void 0
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "p.TaskTracker.TaskCard.layoutGrid2.311",
                                                  $widgetId: "p.TaskTracker.TaskCard.layoutGrid2.311",
                                                  class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Div,
                                                      {
                                                        key: "p.TaskTracker.TaskOverview.layoutGrid2$row0.312",
                                                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0.312",
                                                        class: "row",
                                                        style: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column0.313",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column0.313",
                                                              class: "col-lg col-md col",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text5.314",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text5.314",
                                                                    class: "mx-name-text5 hide-phone hide-tablet",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Due: " }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Task", "path": "DueDate" }, { "type": "literal", "value": '{"type":"custom","pattern":"dd MMM yy"}' }] }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery7", "source": "object" } } }
                                                                      })
                                                                    ]),
                                                                    renderMode: "h5"
                                                                  }
                                                                ),
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text7.315",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text7.315",
                                                                    class: "mx-name-text7 hide-desktop",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Due: " }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Task", "path": "DueDate" }, { "type": "literal", "value": '{"type":"custom","pattern":"dd/MM/yy"}' }] }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery7", "source": "object" } } }
                                                                      })
                                                                    ]),
                                                                    renderMode: "h5"
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          ),
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column1.316",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column1.316",
                                                              class: "col-lg-auto col-md-auto col-auto",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $ConditionalVisibilityWrapper,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.badge1$visibility.317",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge1$visibility.317",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "Low" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery7", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge1.317",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge1.317",
                                                                          type: "badge",
                                                                          value: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "TaskTracker.ENUM_Priority" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery7", "source": "object" } } }
                                                                            })
                                                                          ]),
                                                                          onClick: void 0,
                                                                          class: "mx-name-badge1 label-info pull-right",
                                                                          style: void 0,
                                                                          tabIndex: void 0
                                                                        }
                                                                      )
                                                                    ]
                                                                  }
                                                                ),
                                                                /* @__PURE__ */ React.createElement(
                                                                  $ConditionalVisibilityWrapper,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.badge2$visibility.318",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge2$visibility.318",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "Medium" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery7", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge2.318",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge2.318",
                                                                          type: "badge",
                                                                          value: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "TaskTracker.ENUM_Priority" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery7", "source": "object" } } }
                                                                            })
                                                                          ]),
                                                                          onClick: void 0,
                                                                          class: "mx-name-badge2 label-warning pull-right",
                                                                          style: void 0,
                                                                          tabIndex: void 0
                                                                        }
                                                                      )
                                                                    ]
                                                                  }
                                                                ),
                                                                /* @__PURE__ */ React.createElement(
                                                                  $ConditionalVisibilityWrapper,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.badge3$visibility.319",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge3$visibility.319",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "High" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery7", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge3.319",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge3.319",
                                                                          type: "badge",
                                                                          value: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "TaskTracker.ENUM_Priority" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery7", "source": "object" } } }
                                                                            })
                                                                          ]),
                                                                          onClick: void 0,
                                                                          class: "mx-name-badge3 label-danger pull-right",
                                                                          style: void 0,
                                                                          tabIndex: void 0
                                                                        }
                                                                      )
                                                                    ]
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          )
                                                        ]
                                                      }
                                                    )
                                                  ]
                                                }
                                              )
                                            ],
                                            ariaHidden: false
                                          }
                                        )
                                      ]
                                    }
                                  )
                                ]
                              }),
                              desktopItems: 1,
                              tabletItems: 1,
                              phoneItems: 2,
                              pageSize: 2,
                              pagination: "virtualScrolling",
                              pagingPosition: "below",
                              showEmptyPlaceholder: "custom",
                              emptyPlaceholder: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.TaskTracker.TaskOverview.text12",
                                    $widgetId: "p.TaskTracker.TaskOverview.text12",
                                    class: "mx-name-text12",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "No tasks in In Progress" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                )
                              ],
                              itemClass: void 0,
                              onClick: ListActionProperty({
                                "action": { "type": "openPage", "argMap": { "param$Task": { "widget": "p.TaskTracker.TaskOverview.gallery7", "source": "object" } }, "config": { "name": "TaskTracker/TaskEdit.page.xml", "location": "modal", "resizable": false, "allowedRoles": ["Manager", "Member"] }, "disabledDuringExecution": false },
                                "abortOnServerValidation": false,
                                "dataSourceId": "p.236",
                                "argumentTypes": {}
                              }),
                              filterList: [],
                              filtersPlaceholder: void 0,
                              sortList: [],
                              filterSectionTitle: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                })
                              ]),
                              emptyMessageTitle: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                })
                              ]),
                              onSelectionChange: void 0,
                              ariaLabelListBox: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                })
                              ]),
                              class: "mx-name-gallery7 widget-gallery-gridgap-none spacing-outer-right-large spacing-outer-top-large",
                              style: void 0,
                              tabIndex: void 0
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.TaskTracker.TaskOverview.layoutGrid5$row4",
                  $widgetId: "p.TaskTracker.TaskOverview.layoutGrid5$row4",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.TaskTracker.TaskOverview.layoutGrid5$row4$column0",
                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid5$row4$column0",
                        class: "col-lg col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.TaskTracker.TaskOverview.text23",
                              $widgetId: "p.TaskTracker.TaskOverview.text23",
                              class: "mx-name-text23 flex1",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "To Review" }, "args": {} }
                                })
                              ]),
                              renderMode: "h2"
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.TaskTracker.TaskOverview.layoutGrid5$row5",
                  $widgetId: "p.TaskTracker.TaskOverview.layoutGrid5$row5",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.TaskTracker.TaskOverview.layoutGrid5$row5$column0",
                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid5$row5$column0",
                        class: "col-lg col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Gallery,
                            {
                              key: "p.TaskTracker.TaskOverview.gallery8",
                              $widgetId: "p.TaskTracker.TaskOverview.gallery8",
                              advanced: false,
                              datasource: DatabaseObjectListProperty({
                                "dataSourceId": "p.237",
                                "entity": "TaskTracker.Task",
                                "operationId": "j0I7TPn+v1Go/xj6/sAYvQ",
                                "sort": [
                                  [
                                    "DueDate",
                                    "asc"
                                  ]
                                ],
                                "constraints": { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "Status", "context": "TaskTracker.Task", "attributeType": "#TaskTracker.ENUM_Status" }, { "type": "literal", "value": "Review" }] }
                              }),
                              content: TemplatedWidgetProperty({
                                "dataSourceId": "p.237",
                                "editable": false,
                                "children": () => [
                                  /* @__PURE__ */ React.createElement(
                                    $Fragment,
                                    {
                                      key: "p.TaskTracker.TaskOverview.snippetCall8",
                                      $widgetId: "p.TaskTracker.TaskOverview.snippetCall8",
                                      content: [
                                        /* @__PURE__ */ React.createElement(
                                          $Container,
                                          {
                                            key: "p.TaskTracker.TaskCard.container3.336",
                                            $widgetId: "p.TaskTracker.TaskCard.container3.336",
                                            class: "mx-name-container3 card shadow-medium",
                                            style: void 0,
                                            renderMode: "div",
                                            onClick: void 0,
                                            content: [
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "p.TaskTracker.TaskCard.layoutGrid1.337",
                                                  $widgetId: "p.TaskTracker.TaskCard.layoutGrid1.337",
                                                  class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid spacing-inner-left-none spacing-inner-right-none spacing-inner-top-none",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Div,
                                                      {
                                                        key: "p.TaskTracker.TaskOverview.layoutGrid1$row0.338",
                                                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0.338",
                                                        class: "row",
                                                        style: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column0.339",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column0.339",
                                                              class: "col-lg col-md col",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text4.340",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text4.340",
                                                                    class: "mx-name-text4 hide-phone hide-tablet",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "variable", "variable": "Task", "path": "Title" }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery8", "source": "object" } } }
                                                                      })
                                                                    ]),
                                                                    renderMode: "h4"
                                                                  }
                                                                ),
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text8.341",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text8.341",
                                                                    class: "mx-name-text8 hide-desktop",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "variable", "variable": "Task", "path": "Title" }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery8", "source": "object" } } }
                                                                      })
                                                                    ]),
                                                                    renderMode: "h5"
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          ),
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column1.342",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column1.342",
                                                              class: "col-lg-auto col-md-auto col-auto",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $DataView,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.dataView5.343",
                                                                    $widgetId: "p.TaskTracker.TaskCard.dataView5.343",
                                                                    class: "mx-name-dataView5 pull-right form-vertical",
                                                                    style: void 0,
                                                                    tabIndex: void 0,
                                                                    object: AssociationObjectProperty({
                                                                      "dataSourceId": "p.344",
                                                                      "scope": "p.TaskTracker.TaskOverview.gallery8",
                                                                      "editable": true,
                                                                      "path": "TaskTracker.Task_MendixSSOUser_Assignee/MendixSSO.MendixSSOUser",
                                                                      "operationId": "Fm2MxwqHrFORNl6iyNLXfg"
                                                                    }),
                                                                    emptyMessage: TextProperty({
                                                                      "value": selectTranslation([
                                                                        ""
                                                                      ])
                                                                    }),
                                                                    body: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Image,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.image1.345",
                                                                          $widgetId: "p.TaskTracker.TaskCard.image1.345",
                                                                          datasource: "imageUrl",
                                                                          imageObject: void 0,
                                                                          defaultImageDynamic: void 0,
                                                                          imageUrl: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "AvatarURL" }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskCard.dataView5.343", "source": "object" } } }
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
                                                                          width: 40,
                                                                          heightUnit: "pixels",
                                                                          height: 40,
                                                                          iconSize: 14,
                                                                          displayAs: "fullImage",
                                                                          responsive: false,
                                                                          class: "mx-name-image1 img-circle",
                                                                          style: void 0,
                                                                          tabIndex: void 0
                                                                        }
                                                                      )
                                                                    ],
                                                                    hideFooter: true,
                                                                    footer: void 0
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          )
                                                        ]
                                                      }
                                                    )
                                                  ]
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $DataView,
                                                {
                                                  key: "p.TaskTracker.TaskCard.dataView9.346",
                                                  $widgetId: "p.TaskTracker.TaskCard.dataView9.346",
                                                  class: "mx-name-dataView9 spacing-outer-top-large hide-phone form-vertical",
                                                  style: void 0,
                                                  tabIndex: void 0,
                                                  object: AssociationObjectProperty({
                                                    "dataSourceId": "p.347",
                                                    "scope": "p.TaskTracker.TaskOverview.gallery8",
                                                    "editable": true,
                                                    "path": "TaskTracker.Task_MendixSSOUser_Assignee/MendixSSO.MendixSSOUser",
                                                    "operationId": "CD9Fu3uzdlOYuMo79ani7A"
                                                  }),
                                                  emptyMessage: TextProperty({
                                                    "value": selectTranslation([
                                                      ""
                                                    ])
                                                  }),
                                                  body: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Text,
                                                      {
                                                        key: "p.TaskTracker.TaskCard.text6.348",
                                                        $widgetId: "p.TaskTracker.TaskCard.text6.348",
                                                        class: "mx-name-text6 text-detail spacing-outer-bottom",
                                                        style: void 0,
                                                        caption: selectTranslation([
                                                          ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Tilldelad: " }, { "type": "variable", "variable": "currentObject", "path": "DisplayName" }] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskCard.dataView9.346", "source": "object" } } }
                                                          })
                                                        ]),
                                                        renderMode: "p"
                                                      }
                                                    )
                                                  ],
                                                  hideFooter: true,
                                                  footer: void 0
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "p.TaskTracker.TaskCard.layoutGrid2.349",
                                                  $widgetId: "p.TaskTracker.TaskCard.layoutGrid2.349",
                                                  class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Div,
                                                      {
                                                        key: "p.TaskTracker.TaskOverview.layoutGrid2$row0.350",
                                                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0.350",
                                                        class: "row",
                                                        style: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column0.351",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column0.351",
                                                              class: "col-lg col-md col",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text5.352",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text5.352",
                                                                    class: "mx-name-text5 hide-phone hide-tablet",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Due: " }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Task", "path": "DueDate" }, { "type": "literal", "value": '{"type":"custom","pattern":"dd MMM yy"}' }] }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery8", "source": "object" } } }
                                                                      })
                                                                    ]),
                                                                    renderMode: "h5"
                                                                  }
                                                                ),
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text7.353",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text7.353",
                                                                    class: "mx-name-text7 hide-desktop",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Due: " }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Task", "path": "DueDate" }, { "type": "literal", "value": '{"type":"custom","pattern":"dd/MM/yy"}' }] }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery8", "source": "object" } } }
                                                                      })
                                                                    ]),
                                                                    renderMode: "h5"
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          ),
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column1.354",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column1.354",
                                                              class: "col-lg-auto col-md-auto col-auto",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $ConditionalVisibilityWrapper,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.badge1$visibility.355",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge1$visibility.355",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "Low" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery8", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge1.355",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge1.355",
                                                                          type: "badge",
                                                                          value: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "TaskTracker.ENUM_Priority" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery8", "source": "object" } } }
                                                                            })
                                                                          ]),
                                                                          onClick: void 0,
                                                                          class: "mx-name-badge1 label-info pull-right",
                                                                          style: void 0,
                                                                          tabIndex: void 0
                                                                        }
                                                                      )
                                                                    ]
                                                                  }
                                                                ),
                                                                /* @__PURE__ */ React.createElement(
                                                                  $ConditionalVisibilityWrapper,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.badge2$visibility.356",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge2$visibility.356",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "Medium" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery8", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge2.356",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge2.356",
                                                                          type: "badge",
                                                                          value: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "TaskTracker.ENUM_Priority" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery8", "source": "object" } } }
                                                                            })
                                                                          ]),
                                                                          onClick: void 0,
                                                                          class: "mx-name-badge2 label-warning pull-right",
                                                                          style: void 0,
                                                                          tabIndex: void 0
                                                                        }
                                                                      )
                                                                    ]
                                                                  }
                                                                ),
                                                                /* @__PURE__ */ React.createElement(
                                                                  $ConditionalVisibilityWrapper,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.badge3$visibility.357",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge3$visibility.357",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "High" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery8", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge3.357",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge3.357",
                                                                          type: "badge",
                                                                          value: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "TaskTracker.ENUM_Priority" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery8", "source": "object" } } }
                                                                            })
                                                                          ]),
                                                                          onClick: void 0,
                                                                          class: "mx-name-badge3 label-danger pull-right",
                                                                          style: void 0,
                                                                          tabIndex: void 0
                                                                        }
                                                                      )
                                                                    ]
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          )
                                                        ]
                                                      }
                                                    )
                                                  ]
                                                }
                                              )
                                            ],
                                            ariaHidden: false
                                          }
                                        )
                                      ]
                                    }
                                  )
                                ]
                              }),
                              desktopItems: 1,
                              tabletItems: 1,
                              phoneItems: 2,
                              pageSize: 2,
                              pagination: "virtualScrolling",
                              pagingPosition: "below",
                              showEmptyPlaceholder: "custom",
                              emptyPlaceholder: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.TaskTracker.TaskOverview.text13",
                                    $widgetId: "p.TaskTracker.TaskOverview.text13",
                                    class: "mx-name-text13",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "No tasks in To Review" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                )
                              ],
                              itemClass: void 0,
                              onClick: ListActionProperty({
                                "action": { "type": "openPage", "argMap": { "param$Task": { "widget": "p.TaskTracker.TaskOverview.gallery8", "source": "object" } }, "config": { "name": "TaskTracker/TaskEdit.page.xml", "location": "modal", "resizable": false, "allowedRoles": ["Manager", "Member"] }, "disabledDuringExecution": false },
                                "abortOnServerValidation": false,
                                "dataSourceId": "p.237",
                                "argumentTypes": {}
                              }),
                              filterList: [],
                              filtersPlaceholder: void 0,
                              sortList: [],
                              filterSectionTitle: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                })
                              ]),
                              emptyMessageTitle: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                })
                              ]),
                              onSelectionChange: void 0,
                              ariaLabelListBox: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                })
                              ]),
                              class: "mx-name-gallery8 widget-gallery-gridgap-none spacing-outer-right-large spacing-outer-top-large",
                              style: void 0,
                              tabIndex: void 0
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.TaskTracker.TaskOverview.layoutGrid5$row6",
                  $widgetId: "p.TaskTracker.TaskOverview.layoutGrid5$row6",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.TaskTracker.TaskOverview.layoutGrid5$row6$column0",
                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid5$row6$column0",
                        class: "col-lg col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.TaskTracker.TaskOverview.text24",
                              $widgetId: "p.TaskTracker.TaskOverview.text24",
                              class: "mx-name-text24 flex1",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Done" }, "args": {} }
                                })
                              ]),
                              renderMode: "h2"
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.TaskTracker.TaskOverview.layoutGrid5$row7",
                  $widgetId: "p.TaskTracker.TaskOverview.layoutGrid5$row7",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.TaskTracker.TaskOverview.layoutGrid5$row7$column0",
                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid5$row7$column0",
                        class: "col-lg col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Gallery,
                            {
                              key: "p.TaskTracker.TaskOverview.gallery9",
                              $widgetId: "p.TaskTracker.TaskOverview.gallery9",
                              advanced: false,
                              datasource: DatabaseObjectListProperty({
                                "dataSourceId": "p.238",
                                "entity": "TaskTracker.Task",
                                "operationId": "JIF87WrqsFWP2xNVGTtv0A",
                                "sort": [
                                  [
                                    "DueDate",
                                    "asc"
                                  ]
                                ],
                                "constraints": { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "Status", "context": "TaskTracker.Task", "attributeType": "#TaskTracker.ENUM_Status" }, { "type": "literal", "value": "Done" }] }
                              }),
                              content: TemplatedWidgetProperty({
                                "dataSourceId": "p.238",
                                "editable": false,
                                "children": () => [
                                  /* @__PURE__ */ React.createElement(
                                    $Fragment,
                                    {
                                      key: "p.TaskTracker.TaskOverview.snippetCall9",
                                      $widgetId: "p.TaskTracker.TaskOverview.snippetCall9",
                                      content: [
                                        /* @__PURE__ */ React.createElement(
                                          $Container,
                                          {
                                            key: "p.TaskTracker.TaskCard.container3.374",
                                            $widgetId: "p.TaskTracker.TaskCard.container3.374",
                                            class: "mx-name-container3 card shadow-medium",
                                            style: void 0,
                                            renderMode: "div",
                                            onClick: void 0,
                                            content: [
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "p.TaskTracker.TaskCard.layoutGrid1.375",
                                                  $widgetId: "p.TaskTracker.TaskCard.layoutGrid1.375",
                                                  class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid spacing-inner-left-none spacing-inner-right-none spacing-inner-top-none",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Div,
                                                      {
                                                        key: "p.TaskTracker.TaskOverview.layoutGrid1$row0.376",
                                                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0.376",
                                                        class: "row",
                                                        style: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column0.377",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column0.377",
                                                              class: "col-lg col-md col",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text4.378",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text4.378",
                                                                    class: "mx-name-text4 hide-phone hide-tablet",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "variable", "variable": "Task", "path": "Title" }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery9", "source": "object" } } }
                                                                      })
                                                                    ]),
                                                                    renderMode: "h4"
                                                                  }
                                                                ),
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text8.379",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text8.379",
                                                                    class: "mx-name-text8 hide-desktop",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "variable", "variable": "Task", "path": "Title" }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery9", "source": "object" } } }
                                                                      })
                                                                    ]),
                                                                    renderMode: "h5"
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          ),
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column1.380",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column1.380",
                                                              class: "col-lg-auto col-md-auto col-auto",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $DataView,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.dataView5.381",
                                                                    $widgetId: "p.TaskTracker.TaskCard.dataView5.381",
                                                                    class: "mx-name-dataView5 pull-right form-vertical",
                                                                    style: void 0,
                                                                    tabIndex: void 0,
                                                                    object: AssociationObjectProperty({
                                                                      "dataSourceId": "p.382",
                                                                      "scope": "p.TaskTracker.TaskOverview.gallery9",
                                                                      "editable": true,
                                                                      "path": "TaskTracker.Task_MendixSSOUser_Assignee/MendixSSO.MendixSSOUser",
                                                                      "operationId": "StYIoM7CbV2r0pWx6Hs6Kw"
                                                                    }),
                                                                    emptyMessage: TextProperty({
                                                                      "value": selectTranslation([
                                                                        ""
                                                                      ])
                                                                    }),
                                                                    body: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Image,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.image1.383",
                                                                          $widgetId: "p.TaskTracker.TaskCard.image1.383",
                                                                          datasource: "imageUrl",
                                                                          imageObject: void 0,
                                                                          defaultImageDynamic: void 0,
                                                                          imageUrl: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "AvatarURL" }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskCard.dataView5.381", "source": "object" } } }
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
                                                                          width: 40,
                                                                          heightUnit: "pixels",
                                                                          height: 40,
                                                                          iconSize: 14,
                                                                          displayAs: "fullImage",
                                                                          responsive: false,
                                                                          class: "mx-name-image1 img-circle",
                                                                          style: void 0,
                                                                          tabIndex: void 0
                                                                        }
                                                                      )
                                                                    ],
                                                                    hideFooter: true,
                                                                    footer: void 0
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          )
                                                        ]
                                                      }
                                                    )
                                                  ]
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $DataView,
                                                {
                                                  key: "p.TaskTracker.TaskCard.dataView9.384",
                                                  $widgetId: "p.TaskTracker.TaskCard.dataView9.384",
                                                  class: "mx-name-dataView9 spacing-outer-top-large hide-phone form-vertical",
                                                  style: void 0,
                                                  tabIndex: void 0,
                                                  object: AssociationObjectProperty({
                                                    "dataSourceId": "p.385",
                                                    "scope": "p.TaskTracker.TaskOverview.gallery9",
                                                    "editable": true,
                                                    "path": "TaskTracker.Task_MendixSSOUser_Assignee/MendixSSO.MendixSSOUser",
                                                    "operationId": "Wr2f0yxKQ1CpAPIfhVkeoA"
                                                  }),
                                                  emptyMessage: TextProperty({
                                                    "value": selectTranslation([
                                                      ""
                                                    ])
                                                  }),
                                                  body: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Text,
                                                      {
                                                        key: "p.TaskTracker.TaskCard.text6.386",
                                                        $widgetId: "p.TaskTracker.TaskCard.text6.386",
                                                        class: "mx-name-text6 text-detail spacing-outer-bottom",
                                                        style: void 0,
                                                        caption: selectTranslation([
                                                          ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Tilldelad: " }, { "type": "variable", "variable": "currentObject", "path": "DisplayName" }] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskCard.dataView9.384", "source": "object" } } }
                                                          })
                                                        ]),
                                                        renderMode: "p"
                                                      }
                                                    )
                                                  ],
                                                  hideFooter: true,
                                                  footer: void 0
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "p.TaskTracker.TaskCard.layoutGrid2.387",
                                                  $widgetId: "p.TaskTracker.TaskCard.layoutGrid2.387",
                                                  class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Div,
                                                      {
                                                        key: "p.TaskTracker.TaskOverview.layoutGrid2$row0.388",
                                                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0.388",
                                                        class: "row",
                                                        style: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column0.389",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column0.389",
                                                              class: "col-lg col-md col",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text5.390",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text5.390",
                                                                    class: "mx-name-text5 hide-phone hide-tablet",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Due: " }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Task", "path": "DueDate" }, { "type": "literal", "value": '{"type":"custom","pattern":"dd MMM yy"}' }] }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery9", "source": "object" } } }
                                                                      })
                                                                    ]),
                                                                    renderMode: "h5"
                                                                  }
                                                                ),
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text7.391",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text7.391",
                                                                    class: "mx-name-text7 hide-desktop",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Due: " }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Task", "path": "DueDate" }, { "type": "literal", "value": '{"type":"custom","pattern":"dd/MM/yy"}' }] }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery9", "source": "object" } } }
                                                                      })
                                                                    ]),
                                                                    renderMode: "h5"
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          ),
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column1.392",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column1.392",
                                                              class: "col-lg-auto col-md-auto col-auto",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $ConditionalVisibilityWrapper,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.badge1$visibility.393",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge1$visibility.393",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "Low" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery9", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge1.393",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge1.393",
                                                                          type: "badge",
                                                                          value: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "TaskTracker.ENUM_Priority" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery9", "source": "object" } } }
                                                                            })
                                                                          ]),
                                                                          onClick: void 0,
                                                                          class: "mx-name-badge1 label-info pull-right",
                                                                          style: void 0,
                                                                          tabIndex: void 0
                                                                        }
                                                                      )
                                                                    ]
                                                                  }
                                                                ),
                                                                /* @__PURE__ */ React.createElement(
                                                                  $ConditionalVisibilityWrapper,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.badge2$visibility.394",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge2$visibility.394",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "Medium" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery9", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge2.394",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge2.394",
                                                                          type: "badge",
                                                                          value: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "TaskTracker.ENUM_Priority" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery9", "source": "object" } } }
                                                                            })
                                                                          ]),
                                                                          onClick: void 0,
                                                                          class: "mx-name-badge2 label-warning pull-right",
                                                                          style: void 0,
                                                                          tabIndex: void 0
                                                                        }
                                                                      )
                                                                    ]
                                                                  }
                                                                ),
                                                                /* @__PURE__ */ React.createElement(
                                                                  $ConditionalVisibilityWrapper,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.badge3$visibility.395",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge3$visibility.395",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "High" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery9", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge3.395",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge3.395",
                                                                          type: "badge",
                                                                          value: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "TaskTracker.ENUM_Priority" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery9", "source": "object" } } }
                                                                            })
                                                                          ]),
                                                                          onClick: void 0,
                                                                          class: "mx-name-badge3 label-danger pull-right",
                                                                          style: void 0,
                                                                          tabIndex: void 0
                                                                        }
                                                                      )
                                                                    ]
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          )
                                                        ]
                                                      }
                                                    )
                                                  ]
                                                }
                                              )
                                            ],
                                            ariaHidden: false
                                          }
                                        )
                                      ]
                                    }
                                  )
                                ]
                              }),
                              desktopItems: 1,
                              tabletItems: 1,
                              phoneItems: 2,
                              pageSize: 2,
                              pagination: "virtualScrolling",
                              pagingPosition: "below",
                              showEmptyPlaceholder: "custom",
                              emptyPlaceholder: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.TaskTracker.TaskOverview.text14",
                                    $widgetId: "p.TaskTracker.TaskOverview.text14",
                                    class: "mx-name-text14",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "No tasks in Done" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                )
                              ],
                              itemClass: void 0,
                              onClick: ListActionProperty({
                                "action": { "type": "openPage", "argMap": { "param$Task": { "widget": "p.TaskTracker.TaskOverview.gallery9", "source": "object" } }, "config": { "name": "TaskTracker/TaskEdit.page.xml", "location": "modal", "resizable": false, "allowedRoles": ["Manager", "Member"] }, "disabledDuringExecution": false },
                                "abortOnServerValidation": false,
                                "dataSourceId": "p.238",
                                "argumentTypes": {}
                              }),
                              filterList: [],
                              filtersPlaceholder: void 0,
                              sortList: [],
                              filterSectionTitle: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                })
                              ]),
                              emptyMessageTitle: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                })
                              ]),
                              onSelectionChange: void 0,
                              ariaLabelListBox: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                })
                              ]),
                              class: "mx-name-gallery9 widget-gallery-gridgap-none spacing-outer-right-large spacing-outer-top-large",
                              style: void 0,
                              tabIndex: void 0
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ],
      ariaHidden: false
    }
  )
]);
const title = selectTranslation([
  "Homepage"
]);
const classes = "layout-atlas layout-atlas-responsive-topbar";
const style = {};
const content = {
  ...content$1,
  "TaskTracker.Tasks_TopBar.Main": region$Main
};

export { classes, content, style, title };
