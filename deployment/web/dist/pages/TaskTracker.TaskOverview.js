import { reactExports, asPluginWidgets, Fragment, addEnumerations, selectTranslation } from '../index-CkReQaf8.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-mMZDhMpD.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-_oIWOEDQ.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-Dh6rLDXa.js';
import { DatabaseObjectListProperty } from '../DatabaseObjectListProperty-55NAdKPz.js';
import { GalleryWidgetModule, ProgressBarWidgetModule, ListActionProperty } from '../ProgressBar-BwWc3si9.js';
import { MicroflowObjectProperty } from '../MicroflowObjectProperty-DMF2xI6e.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-CwX8j72o.js';
import { WebStaticImageProperty } from '../WebStaticImageProperty-C8lEL5v3.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-BXholmiE.js';
import { Container } from '../Container-DpDHpBLi.js';
import { DataView } from '../DataView-cArw-CzT.js';
import { Div } from '../Div-CI4jyrhB.js';
import '../Fragment-B3BjuPk2.js';
import { ImageWidgetModule, Text } from '../Text-FRR1byrD.js';
import { content as content$1 } from '../TaskTracker.Tasks_TopBar-DeCwLxgf.js';
import '../DaFVLkxr-BxrrdlaV.js';
import '../D4nQ98US-rU0uAP8r.js';
import '../DGnMnCeA-DK-psBIA.js';
import '../bdxqAC6d-CG8RDE5Y.js';
import '../InlineText-CzI_QVvb.js';
import '../WebIconProperty-CtnHhOeg.js';
import '../SidebarToggle-CfuyXm-T.js';
import '../Y8h_6YnI-BNpJt4pJ.js';
import '../ScrollContainer-BI1EaQ7R.js';

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
                                                                "expression": { "expr": { "type": "literal", "value": "View Team" }, "args": {} }
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
                                                $Image,
                                                {
                                                  key: "p.TaskTracker.Header.image2",
                                                  $widgetId: "p.TaskTracker.Header.image2",
                                                  datasource: "imageUrl",
                                                  imageObject: void 0,
                                                  defaultImageDynamic: void 0,
                                                  imageUrl: selectTranslation([
                                                    ExpressionProperty({
                                                      "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "AvatarURL" }, "args": { "currentObject": { "widget": "p.TaskTracker.Header.gallery1", "source": "object" } } }
                                                    })
                                                  ]),
                                                  imageIcon: void 0,
                                                  isBackgroundImage: false,
                                                  children: void 0,
                                                  onClickType: "enlarge",
                                                  onClick: void 0,
                                                  alternativeText: selectTranslation([
                                                    ExpressionProperty({
                                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                  ]),
                                                  widthUnit: "percentage",
                                                  width: 40,
                                                  heightUnit: "auto",
                                                  height: 100,
                                                  iconSize: 14,
                                                  displayAs: "fullImage",
                                                  responsive: true,
                                                  class: "mx-name-image2 img-circle img-center spacing-outer-top-medium",
                                                  style: void 0,
                                                  tabIndex: void 0
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $Text,
                                                {
                                                  key: "p.TaskTracker.Header.text22",
                                                  $widgetId: "p.TaskTracker.Header.text22",
                                                  class: "mx-name-text22 text-white",
                                                  style: void 0,
                                                  caption: selectTranslation([
                                                    ExpressionProperty({
                                                      "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "DisplayName" }, "args": { "currentObject": { "widget": "p.TaskTracker.Header.gallery1", "source": "object" } } }
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
                                                        key: "p.TaskTracker.TaskOverview.layoutGrid1$row0.105",
                                                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0.105",
                                                        class: "row",
                                                        style: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column0.106",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column0.106",
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
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column1.111",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column1.111",
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
                                                                      "dataSourceId": "p.114",
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
                                                    "dataSourceId": "p.119",
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
                                                            "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Assigned to " }, { "type": "variable", "variable": "currentObject", "path": "DisplayName" }] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskCard.dataView9", "source": "object" } } }
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
                                                        key: "p.TaskTracker.TaskOverview.layoutGrid2$row0.124",
                                                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0.124",
                                                        class: "row",
                                                        style: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column0.125",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column0.125",
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
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column1.130",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column1.130",
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
                                            key: "p.TaskTracker.TaskCard.container3.148",
                                            $widgetId: "p.TaskTracker.TaskCard.container3.148",
                                            class: "mx-name-container3 card shadow-medium",
                                            style: void 0,
                                            renderMode: "div",
                                            onClick: void 0,
                                            content: [
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "p.TaskTracker.TaskCard.layoutGrid1.149",
                                                  $widgetId: "p.TaskTracker.TaskCard.layoutGrid1.149",
                                                  class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid spacing-inner-left-none spacing-inner-right-none spacing-inner-top-none",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Div,
                                                      {
                                                        key: "p.TaskTracker.TaskOverview.layoutGrid1$row0.150",
                                                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0.150",
                                                        class: "row",
                                                        style: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column0.151",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column0.151",
                                                              class: "col-lg col-md col",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text4.152",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text4.152",
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
                                                                    key: "p.TaskTracker.TaskCard.text8.153",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text8.153",
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
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column1.154",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column1.154",
                                                              class: "col-lg-auto col-md-auto col-auto",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $DataView,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.dataView5.155",
                                                                    $widgetId: "p.TaskTracker.TaskCard.dataView5.155",
                                                                    class: "mx-name-dataView5 pull-right form-vertical",
                                                                    style: void 0,
                                                                    tabIndex: void 0,
                                                                    object: AssociationObjectProperty({
                                                                      "dataSourceId": "p.156",
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
                                                                          key: "p.TaskTracker.TaskCard.image1.157",
                                                                          $widgetId: "p.TaskTracker.TaskCard.image1.157",
                                                                          datasource: "imageUrl",
                                                                          imageObject: void 0,
                                                                          defaultImageDynamic: void 0,
                                                                          imageUrl: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "AvatarURL" }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskCard.dataView5.155", "source": "object" } } }
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
                                                  key: "p.TaskTracker.TaskCard.dataView9.158",
                                                  $widgetId: "p.TaskTracker.TaskCard.dataView9.158",
                                                  class: "mx-name-dataView9 spacing-outer-top-large hide-phone form-vertical",
                                                  style: void 0,
                                                  tabIndex: void 0,
                                                  object: AssociationObjectProperty({
                                                    "dataSourceId": "p.159",
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
                                                        key: "p.TaskTracker.TaskCard.text6.160",
                                                        $widgetId: "p.TaskTracker.TaskCard.text6.160",
                                                        class: "mx-name-text6 text-detail spacing-outer-bottom",
                                                        style: void 0,
                                                        caption: selectTranslation([
                                                          ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Assigned to " }, { "type": "variable", "variable": "currentObject", "path": "DisplayName" }] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskCard.dataView9.158", "source": "object" } } }
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
                                                  key: "p.TaskTracker.TaskCard.layoutGrid2.161",
                                                  $widgetId: "p.TaskTracker.TaskCard.layoutGrid2.161",
                                                  class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Div,
                                                      {
                                                        key: "p.TaskTracker.TaskOverview.layoutGrid2$row0.162",
                                                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0.162",
                                                        class: "row",
                                                        style: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column0.163",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column0.163",
                                                              class: "col-lg col-md col",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text5.164",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text5.164",
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
                                                                    key: "p.TaskTracker.TaskCard.text7.165",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text7.165",
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
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column1.166",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column1.166",
                                                              class: "col-lg-auto col-md-auto col-auto",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $ConditionalVisibilityWrapper,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.badge1$visibility.167",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge1$visibility.167",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "Low" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery3", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge1.167",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge1.167",
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
                                                                    key: "p.TaskTracker.TaskCard.badge2$visibility.168",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge2$visibility.168",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "Medium" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery3", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge2.168",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge2.168",
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
                                                                    key: "p.TaskTracker.TaskCard.badge3$visibility.169",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge3$visibility.169",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "High" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery3", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge3.169",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge3.169",
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
                                            key: "p.TaskTracker.TaskCard.container3.178",
                                            $widgetId: "p.TaskTracker.TaskCard.container3.178",
                                            class: "mx-name-container3 card shadow-medium",
                                            style: void 0,
                                            renderMode: "div",
                                            onClick: void 0,
                                            content: [
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "p.TaskTracker.TaskCard.layoutGrid1.179",
                                                  $widgetId: "p.TaskTracker.TaskCard.layoutGrid1.179",
                                                  class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid spacing-inner-left-none spacing-inner-right-none spacing-inner-top-none",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Div,
                                                      {
                                                        key: "p.TaskTracker.TaskOverview.layoutGrid1$row0.180",
                                                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0.180",
                                                        class: "row",
                                                        style: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column0.181",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column0.181",
                                                              class: "col-lg col-md col",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text4.182",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text4.182",
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
                                                                    key: "p.TaskTracker.TaskCard.text8.183",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text8.183",
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
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column1.184",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column1.184",
                                                              class: "col-lg-auto col-md-auto col-auto",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $DataView,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.dataView5.185",
                                                                    $widgetId: "p.TaskTracker.TaskCard.dataView5.185",
                                                                    class: "mx-name-dataView5 pull-right form-vertical",
                                                                    style: void 0,
                                                                    tabIndex: void 0,
                                                                    object: AssociationObjectProperty({
                                                                      "dataSourceId": "p.186",
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
                                                                          key: "p.TaskTracker.TaskCard.image1.187",
                                                                          $widgetId: "p.TaskTracker.TaskCard.image1.187",
                                                                          datasource: "imageUrl",
                                                                          imageObject: void 0,
                                                                          defaultImageDynamic: void 0,
                                                                          imageUrl: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "AvatarURL" }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskCard.dataView5.185", "source": "object" } } }
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
                                                  key: "p.TaskTracker.TaskCard.dataView9.188",
                                                  $widgetId: "p.TaskTracker.TaskCard.dataView9.188",
                                                  class: "mx-name-dataView9 spacing-outer-top-large hide-phone form-vertical",
                                                  style: void 0,
                                                  tabIndex: void 0,
                                                  object: AssociationObjectProperty({
                                                    "dataSourceId": "p.189",
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
                                                        key: "p.TaskTracker.TaskCard.text6.190",
                                                        $widgetId: "p.TaskTracker.TaskCard.text6.190",
                                                        class: "mx-name-text6 text-detail spacing-outer-bottom",
                                                        style: void 0,
                                                        caption: selectTranslation([
                                                          ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Assigned to " }, { "type": "variable", "variable": "currentObject", "path": "DisplayName" }] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskCard.dataView9.188", "source": "object" } } }
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
                                                  key: "p.TaskTracker.TaskCard.layoutGrid2.191",
                                                  $widgetId: "p.TaskTracker.TaskCard.layoutGrid2.191",
                                                  class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Div,
                                                      {
                                                        key: "p.TaskTracker.TaskOverview.layoutGrid2$row0.192",
                                                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0.192",
                                                        class: "row",
                                                        style: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column0.193",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column0.193",
                                                              class: "col-lg col-md col",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text5.194",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text5.194",
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
                                                                    key: "p.TaskTracker.TaskCard.text7.195",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text7.195",
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
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column1.196",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column1.196",
                                                              class: "col-lg-auto col-md-auto col-auto",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $ConditionalVisibilityWrapper,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.badge1$visibility.197",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge1$visibility.197",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "Low" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery4", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge1.197",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge1.197",
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
                                                                    key: "p.TaskTracker.TaskCard.badge2$visibility.198",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge2$visibility.198",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "Medium" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery4", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge2.198",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge2.198",
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
                                                                    key: "p.TaskTracker.TaskCard.badge3$visibility.199",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge3$visibility.199",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "High" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery4", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge3.199",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge3.199",
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
                                            key: "p.TaskTracker.TaskCard.container3.208",
                                            $widgetId: "p.TaskTracker.TaskCard.container3.208",
                                            class: "mx-name-container3 card shadow-medium",
                                            style: void 0,
                                            renderMode: "div",
                                            onClick: void 0,
                                            content: [
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "p.TaskTracker.TaskCard.layoutGrid1.209",
                                                  $widgetId: "p.TaskTracker.TaskCard.layoutGrid1.209",
                                                  class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid spacing-inner-left-none spacing-inner-right-none spacing-inner-top-none",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Div,
                                                      {
                                                        key: "p.TaskTracker.TaskOverview.layoutGrid1$row0.210",
                                                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0.210",
                                                        class: "row",
                                                        style: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column0.211",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column0.211",
                                                              class: "col-lg col-md col",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text4.212",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text4.212",
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
                                                                    key: "p.TaskTracker.TaskCard.text8.213",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text8.213",
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
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column1.214",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column1.214",
                                                              class: "col-lg-auto col-md-auto col-auto",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $DataView,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.dataView5.215",
                                                                    $widgetId: "p.TaskTracker.TaskCard.dataView5.215",
                                                                    class: "mx-name-dataView5 pull-right form-vertical",
                                                                    style: void 0,
                                                                    tabIndex: void 0,
                                                                    object: AssociationObjectProperty({
                                                                      "dataSourceId": "p.216",
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
                                                                          key: "p.TaskTracker.TaskCard.image1.217",
                                                                          $widgetId: "p.TaskTracker.TaskCard.image1.217",
                                                                          datasource: "imageUrl",
                                                                          imageObject: void 0,
                                                                          defaultImageDynamic: void 0,
                                                                          imageUrl: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "AvatarURL" }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskCard.dataView5.215", "source": "object" } } }
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
                                                  key: "p.TaskTracker.TaskCard.dataView9.218",
                                                  $widgetId: "p.TaskTracker.TaskCard.dataView9.218",
                                                  class: "mx-name-dataView9 spacing-outer-top-large hide-phone form-vertical",
                                                  style: void 0,
                                                  tabIndex: void 0,
                                                  object: AssociationObjectProperty({
                                                    "dataSourceId": "p.219",
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
                                                        key: "p.TaskTracker.TaskCard.text6.220",
                                                        $widgetId: "p.TaskTracker.TaskCard.text6.220",
                                                        class: "mx-name-text6 text-detail spacing-outer-bottom",
                                                        style: void 0,
                                                        caption: selectTranslation([
                                                          ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Assigned to " }, { "type": "variable", "variable": "currentObject", "path": "DisplayName" }] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskCard.dataView9.218", "source": "object" } } }
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
                                                  key: "p.TaskTracker.TaskCard.layoutGrid2.221",
                                                  $widgetId: "p.TaskTracker.TaskCard.layoutGrid2.221",
                                                  class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Div,
                                                      {
                                                        key: "p.TaskTracker.TaskOverview.layoutGrid2$row0.222",
                                                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0.222",
                                                        class: "row",
                                                        style: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column0.223",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column0.223",
                                                              class: "col-lg col-md col",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text5.224",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text5.224",
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
                                                                    key: "p.TaskTracker.TaskCard.text7.225",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text7.225",
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
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column1.226",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column1.226",
                                                              class: "col-lg-auto col-md-auto col-auto",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $ConditionalVisibilityWrapper,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.badge1$visibility.227",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge1$visibility.227",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "Low" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery5", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge1.227",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge1.227",
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
                                                                    key: "p.TaskTracker.TaskCard.badge2$visibility.228",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge2$visibility.228",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "Medium" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery5", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge2.228",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge2.228",
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
                                                                    key: "p.TaskTracker.TaskCard.badge3$visibility.229",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge3$visibility.229",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "High" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery5", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge3.229",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge3.229",
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
                                "dataSourceId": "p.234",
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
                                "dataSourceId": "p.234",
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
                                            key: "p.TaskTracker.TaskCard.container3.259",
                                            $widgetId: "p.TaskTracker.TaskCard.container3.259",
                                            class: "mx-name-container3 card shadow-medium",
                                            style: void 0,
                                            renderMode: "div",
                                            onClick: void 0,
                                            content: [
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "p.TaskTracker.TaskCard.layoutGrid1.260",
                                                  $widgetId: "p.TaskTracker.TaskCard.layoutGrid1.260",
                                                  class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid spacing-inner-left-none spacing-inner-right-none spacing-inner-top-none",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Div,
                                                      {
                                                        key: "p.TaskTracker.TaskOverview.layoutGrid1$row0.261",
                                                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0.261",
                                                        class: "row",
                                                        style: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column0.262",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column0.262",
                                                              class: "col-lg col-md col",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text4.263",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text4.263",
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
                                                                    key: "p.TaskTracker.TaskCard.text8.264",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text8.264",
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
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column1.265",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column1.265",
                                                              class: "col-lg-auto col-md-auto col-auto",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $DataView,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.dataView5.266",
                                                                    $widgetId: "p.TaskTracker.TaskCard.dataView5.266",
                                                                    class: "mx-name-dataView5 pull-right form-vertical",
                                                                    style: void 0,
                                                                    tabIndex: void 0,
                                                                    object: AssociationObjectProperty({
                                                                      "dataSourceId": "p.267",
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
                                                                          key: "p.TaskTracker.TaskCard.image1.268",
                                                                          $widgetId: "p.TaskTracker.TaskCard.image1.268",
                                                                          datasource: "imageUrl",
                                                                          imageObject: void 0,
                                                                          defaultImageDynamic: void 0,
                                                                          imageUrl: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "AvatarURL" }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskCard.dataView5.266", "source": "object" } } }
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
                                                  key: "p.TaskTracker.TaskCard.dataView9.269",
                                                  $widgetId: "p.TaskTracker.TaskCard.dataView9.269",
                                                  class: "mx-name-dataView9 spacing-outer-top-large hide-phone form-vertical",
                                                  style: void 0,
                                                  tabIndex: void 0,
                                                  object: AssociationObjectProperty({
                                                    "dataSourceId": "p.270",
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
                                                        key: "p.TaskTracker.TaskCard.text6.271",
                                                        $widgetId: "p.TaskTracker.TaskCard.text6.271",
                                                        class: "mx-name-text6 text-detail spacing-outer-bottom",
                                                        style: void 0,
                                                        caption: selectTranslation([
                                                          ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Assigned to " }, { "type": "variable", "variable": "currentObject", "path": "DisplayName" }] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskCard.dataView9.269", "source": "object" } } }
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
                                                  key: "p.TaskTracker.TaskCard.layoutGrid2.272",
                                                  $widgetId: "p.TaskTracker.TaskCard.layoutGrid2.272",
                                                  class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Div,
                                                      {
                                                        key: "p.TaskTracker.TaskOverview.layoutGrid2$row0.273",
                                                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0.273",
                                                        class: "row",
                                                        style: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column0.274",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column0.274",
                                                              class: "col-lg col-md col",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text5.275",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text5.275",
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
                                                                    key: "p.TaskTracker.TaskCard.text7.276",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text7.276",
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
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column1.277",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column1.277",
                                                              class: "col-lg-auto col-md-auto col-auto",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $ConditionalVisibilityWrapper,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.badge1$visibility.278",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge1$visibility.278",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "Low" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery6", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge1.278",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge1.278",
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
                                                                    key: "p.TaskTracker.TaskCard.badge2$visibility.279",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge2$visibility.279",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "Medium" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery6", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge2.279",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge2.279",
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
                                                                    key: "p.TaskTracker.TaskCard.badge3$visibility.280",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge3$visibility.280",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "High" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery6", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge3.280",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge3.280",
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
                                "dataSourceId": "p.234",
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
                                "dataSourceId": "p.235",
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
                                "dataSourceId": "p.235",
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
                                            key: "p.TaskTracker.TaskCard.container3.297",
                                            $widgetId: "p.TaskTracker.TaskCard.container3.297",
                                            class: "mx-name-container3 card shadow-medium",
                                            style: void 0,
                                            renderMode: "div",
                                            onClick: void 0,
                                            content: [
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "p.TaskTracker.TaskCard.layoutGrid1.298",
                                                  $widgetId: "p.TaskTracker.TaskCard.layoutGrid1.298",
                                                  class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid spacing-inner-left-none spacing-inner-right-none spacing-inner-top-none",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Div,
                                                      {
                                                        key: "p.TaskTracker.TaskOverview.layoutGrid1$row0.299",
                                                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0.299",
                                                        class: "row",
                                                        style: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column0.300",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column0.300",
                                                              class: "col-lg col-md col",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text4.301",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text4.301",
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
                                                                    key: "p.TaskTracker.TaskCard.text8.302",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text8.302",
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
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column1.303",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column1.303",
                                                              class: "col-lg-auto col-md-auto col-auto",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $DataView,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.dataView5.304",
                                                                    $widgetId: "p.TaskTracker.TaskCard.dataView5.304",
                                                                    class: "mx-name-dataView5 pull-right form-vertical",
                                                                    style: void 0,
                                                                    tabIndex: void 0,
                                                                    object: AssociationObjectProperty({
                                                                      "dataSourceId": "p.305",
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
                                                                          key: "p.TaskTracker.TaskCard.image1.306",
                                                                          $widgetId: "p.TaskTracker.TaskCard.image1.306",
                                                                          datasource: "imageUrl",
                                                                          imageObject: void 0,
                                                                          defaultImageDynamic: void 0,
                                                                          imageUrl: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "AvatarURL" }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskCard.dataView5.304", "source": "object" } } }
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
                                                  key: "p.TaskTracker.TaskCard.dataView9.307",
                                                  $widgetId: "p.TaskTracker.TaskCard.dataView9.307",
                                                  class: "mx-name-dataView9 spacing-outer-top-large hide-phone form-vertical",
                                                  style: void 0,
                                                  tabIndex: void 0,
                                                  object: AssociationObjectProperty({
                                                    "dataSourceId": "p.308",
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
                                                        key: "p.TaskTracker.TaskCard.text6.309",
                                                        $widgetId: "p.TaskTracker.TaskCard.text6.309",
                                                        class: "mx-name-text6 text-detail spacing-outer-bottom",
                                                        style: void 0,
                                                        caption: selectTranslation([
                                                          ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Assigned to " }, { "type": "variable", "variable": "currentObject", "path": "DisplayName" }] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskCard.dataView9.307", "source": "object" } } }
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
                                                  key: "p.TaskTracker.TaskCard.layoutGrid2.310",
                                                  $widgetId: "p.TaskTracker.TaskCard.layoutGrid2.310",
                                                  class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Div,
                                                      {
                                                        key: "p.TaskTracker.TaskOverview.layoutGrid2$row0.311",
                                                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0.311",
                                                        class: "row",
                                                        style: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column0.312",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column0.312",
                                                              class: "col-lg col-md col",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text5.313",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text5.313",
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
                                                                    key: "p.TaskTracker.TaskCard.text7.314",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text7.314",
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
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column1.315",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column1.315",
                                                              class: "col-lg-auto col-md-auto col-auto",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $ConditionalVisibilityWrapper,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.badge1$visibility.316",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge1$visibility.316",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "Low" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery7", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge1.316",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge1.316",
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
                                                                    key: "p.TaskTracker.TaskCard.badge2$visibility.317",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge2$visibility.317",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "Medium" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery7", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge2.317",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge2.317",
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
                                                                    key: "p.TaskTracker.TaskCard.badge3$visibility.318",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge3$visibility.318",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "High" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery7", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge3.318",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge3.318",
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
                                "dataSourceId": "p.236",
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
                                "dataSourceId": "p.236",
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
                                            key: "p.TaskTracker.TaskCard.container3.335",
                                            $widgetId: "p.TaskTracker.TaskCard.container3.335",
                                            class: "mx-name-container3 card shadow-medium",
                                            style: void 0,
                                            renderMode: "div",
                                            onClick: void 0,
                                            content: [
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "p.TaskTracker.TaskCard.layoutGrid1.336",
                                                  $widgetId: "p.TaskTracker.TaskCard.layoutGrid1.336",
                                                  class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid spacing-inner-left-none spacing-inner-right-none spacing-inner-top-none",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Div,
                                                      {
                                                        key: "p.TaskTracker.TaskOverview.layoutGrid1$row0.337",
                                                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0.337",
                                                        class: "row",
                                                        style: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column0.338",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column0.338",
                                                              class: "col-lg col-md col",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text4.339",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text4.339",
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
                                                                    key: "p.TaskTracker.TaskCard.text8.340",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text8.340",
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
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column1.341",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column1.341",
                                                              class: "col-lg-auto col-md-auto col-auto",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $DataView,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.dataView5.342",
                                                                    $widgetId: "p.TaskTracker.TaskCard.dataView5.342",
                                                                    class: "mx-name-dataView5 pull-right form-vertical",
                                                                    style: void 0,
                                                                    tabIndex: void 0,
                                                                    object: AssociationObjectProperty({
                                                                      "dataSourceId": "p.343",
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
                                                                          key: "p.TaskTracker.TaskCard.image1.344",
                                                                          $widgetId: "p.TaskTracker.TaskCard.image1.344",
                                                                          datasource: "imageUrl",
                                                                          imageObject: void 0,
                                                                          defaultImageDynamic: void 0,
                                                                          imageUrl: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "AvatarURL" }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskCard.dataView5.342", "source": "object" } } }
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
                                                  key: "p.TaskTracker.TaskCard.dataView9.345",
                                                  $widgetId: "p.TaskTracker.TaskCard.dataView9.345",
                                                  class: "mx-name-dataView9 spacing-outer-top-large hide-phone form-vertical",
                                                  style: void 0,
                                                  tabIndex: void 0,
                                                  object: AssociationObjectProperty({
                                                    "dataSourceId": "p.346",
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
                                                        key: "p.TaskTracker.TaskCard.text6.347",
                                                        $widgetId: "p.TaskTracker.TaskCard.text6.347",
                                                        class: "mx-name-text6 text-detail spacing-outer-bottom",
                                                        style: void 0,
                                                        caption: selectTranslation([
                                                          ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Assigned to " }, { "type": "variable", "variable": "currentObject", "path": "DisplayName" }] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskCard.dataView9.345", "source": "object" } } }
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
                                                  key: "p.TaskTracker.TaskCard.layoutGrid2.348",
                                                  $widgetId: "p.TaskTracker.TaskCard.layoutGrid2.348",
                                                  class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Div,
                                                      {
                                                        key: "p.TaskTracker.TaskOverview.layoutGrid2$row0.349",
                                                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0.349",
                                                        class: "row",
                                                        style: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column0.350",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column0.350",
                                                              class: "col-lg col-md col",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text5.351",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text5.351",
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
                                                                    key: "p.TaskTracker.TaskCard.text7.352",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text7.352",
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
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column1.353",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column1.353",
                                                              class: "col-lg-auto col-md-auto col-auto",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $ConditionalVisibilityWrapper,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.badge1$visibility.354",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge1$visibility.354",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "Low" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery8", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge1.354",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge1.354",
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
                                                                    key: "p.TaskTracker.TaskCard.badge2$visibility.355",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge2$visibility.355",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "Medium" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery8", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge2.355",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge2.355",
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
                                                                    key: "p.TaskTracker.TaskCard.badge3$visibility.356",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge3$visibility.356",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "High" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery8", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge3.356",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge3.356",
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
                                "dataSourceId": "p.237",
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
                                "dataSourceId": "p.237",
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
                                            key: "p.TaskTracker.TaskCard.container3.373",
                                            $widgetId: "p.TaskTracker.TaskCard.container3.373",
                                            class: "mx-name-container3 card shadow-medium",
                                            style: void 0,
                                            renderMode: "div",
                                            onClick: void 0,
                                            content: [
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "p.TaskTracker.TaskCard.layoutGrid1.374",
                                                  $widgetId: "p.TaskTracker.TaskCard.layoutGrid1.374",
                                                  class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid spacing-inner-left-none spacing-inner-right-none spacing-inner-top-none",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Div,
                                                      {
                                                        key: "p.TaskTracker.TaskOverview.layoutGrid1$row0.375",
                                                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0.375",
                                                        class: "row",
                                                        style: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column0.376",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column0.376",
                                                              class: "col-lg col-md col",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text4.377",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text4.377",
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
                                                                    key: "p.TaskTracker.TaskCard.text8.378",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text8.378",
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
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column1.379",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid1$row0$column1.379",
                                                              class: "col-lg-auto col-md-auto col-auto",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $DataView,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.dataView5.380",
                                                                    $widgetId: "p.TaskTracker.TaskCard.dataView5.380",
                                                                    class: "mx-name-dataView5 pull-right form-vertical",
                                                                    style: void 0,
                                                                    tabIndex: void 0,
                                                                    object: AssociationObjectProperty({
                                                                      "dataSourceId": "p.381",
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
                                                                          key: "p.TaskTracker.TaskCard.image1.382",
                                                                          $widgetId: "p.TaskTracker.TaskCard.image1.382",
                                                                          datasource: "imageUrl",
                                                                          imageObject: void 0,
                                                                          defaultImageDynamic: void 0,
                                                                          imageUrl: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "AvatarURL" }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskCard.dataView5.380", "source": "object" } } }
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
                                                  key: "p.TaskTracker.TaskCard.dataView9.383",
                                                  $widgetId: "p.TaskTracker.TaskCard.dataView9.383",
                                                  class: "mx-name-dataView9 spacing-outer-top-large hide-phone form-vertical",
                                                  style: void 0,
                                                  tabIndex: void 0,
                                                  object: AssociationObjectProperty({
                                                    "dataSourceId": "p.384",
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
                                                        key: "p.TaskTracker.TaskCard.text6.385",
                                                        $widgetId: "p.TaskTracker.TaskCard.text6.385",
                                                        class: "mx-name-text6 text-detail spacing-outer-bottom",
                                                        style: void 0,
                                                        caption: selectTranslation([
                                                          ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Assigned to " }, { "type": "variable", "variable": "currentObject", "path": "DisplayName" }] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskCard.dataView9.383", "source": "object" } } }
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
                                                  key: "p.TaskTracker.TaskCard.layoutGrid2.386",
                                                  $widgetId: "p.TaskTracker.TaskCard.layoutGrid2.386",
                                                  class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Div,
                                                      {
                                                        key: "p.TaskTracker.TaskOverview.layoutGrid2$row0.387",
                                                        $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0.387",
                                                        class: "row",
                                                        style: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column0.388",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column0.388",
                                                              class: "col-lg col-md col",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.text5.389",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text5.389",
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
                                                                    key: "p.TaskTracker.TaskCard.text7.390",
                                                                    $widgetId: "p.TaskTracker.TaskCard.text7.390",
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
                                                              key: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column1.391",
                                                              $widgetId: "p.TaskTracker.TaskOverview.layoutGrid2$row0$column1.391",
                                                              class: "col-lg-auto col-md-auto col-auto",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $ConditionalVisibilityWrapper,
                                                                  {
                                                                    key: "p.TaskTracker.TaskCard.badge1$visibility.392",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge1$visibility.392",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "Low" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery9", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge1.392",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge1.392",
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
                                                                    key: "p.TaskTracker.TaskCard.badge2$visibility.393",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge2$visibility.393",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "Medium" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery9", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge2.393",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge2.393",
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
                                                                    key: "p.TaskTracker.TaskCard.badge3$visibility.394",
                                                                    $widgetId: "p.TaskTracker.TaskCard.badge3$visibility.394",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Task", "path": "Priority" }, { "type": "literal", "value": "High" }] }, "args": { "Task": { "widget": "p.TaskTracker.TaskOverview.gallery9", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Badge,
                                                                        {
                                                                          key: "p.TaskTracker.TaskCard.badge3.394",
                                                                          $widgetId: "p.TaskTracker.TaskCard.badge3.394",
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
