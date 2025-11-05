import { reactExports, asPluginWidgets, Fragment, selectTranslation } from '../index-4mfddfkU.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-Ouf8FsgU.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-B2qOJ4td.js';
import { DatabaseObjectListProperty } from '../DatabaseObjectListProperty-bv83QC9Y.js';
import { GalleryWidgetModule, ProgressBarWidgetModule, ListActionProperty } from '../ProgressBar-CdjoDNSY.js';
import { MicroflowObjectProperty } from '../MicroflowObjectProperty-DSOqr-FG.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-CAuzrF8_.js';
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
import '../WebIconProperty-D31g4FWT.js';
import '../SidebarToggle-fh3TqfUx.js';
import '../Y8h_6YnI-C02bM5Tk.js';
import '../ScrollContainer-C-B529-s.js';

const React = { createElement: reactExports.createElement };
const Gallery = Object.getOwnPropertyDescriptor(GalleryWidgetModule, "Gallery")?.value || Object.getOwnPropertyDescriptor(GalleryWidgetModule, "default")?.value;
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const ProgressBar = Object.getOwnPropertyDescriptor(ProgressBarWidgetModule, "ProgressBar")?.value || Object.getOwnPropertyDescriptor(ProgressBarWidgetModule, "default")?.value;
const { $Fragment, $Container, $Image, $Text, $DataView, $Div, $ProgressBar, $ConditionalVisibilityWrapper, $ActionButton, $Gallery } = asPluginWidgets({ Fragment, Container, Image, Text, DataView, Div, ProgressBar, ConditionalVisibilityWrapper, ActionButton, Gallery });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Fragment,
    {
      key: "p.TaskTracker.TeamOverview.snippetCall1",
      $widgetId: "p.TaskTracker.TeamOverview.snippetCall1",
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
                          "operationId": "Uec7Z7nWl1agFO5WbxIUFw",
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
                        key: "p.TaskTracker.TeamOverview.layoutGrid1$row0",
                        $widgetId: "p.TaskTracker.TeamOverview.layoutGrid1$row0",
                        class: "row",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Div,
                            {
                              key: "p.TaskTracker.TeamOverview.layoutGrid1$row0$column0",
                              $widgetId: "p.TaskTracker.TeamOverview.layoutGrid1$row0$column0",
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
                                      "operationId": "7dC18atRAVWAiEy5uuhLoA",
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
                              key: "p.TaskTracker.TeamOverview.layoutGrid1$row0$column1",
                              $widgetId: "p.TaskTracker.TeamOverview.layoutGrid1$row0$column1",
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
                                          key: "p.TaskTracker.TeamOverview.layoutGrid2$row0",
                                          $widgetId: "p.TaskTracker.TeamOverview.layoutGrid2$row0",
                                          class: "row",
                                          style: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Div,
                                              {
                                                key: "p.TaskTracker.TeamOverview.layoutGrid2$row0$column0",
                                                $widgetId: "p.TaskTracker.TeamOverview.layoutGrid2$row0$column0",
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
                                                key: "p.TaskTracker.TeamOverview.layoutGrid2$row0$column1",
                                                $widgetId: "p.TaskTracker.TeamOverview.layoutGrid2$row0$column1",
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
                                      "operationId": "9wk1xj3d6lygBlSHOynECg",
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
      key: "p.TaskTracker.TeamOverview.container9",
      $widgetId: "p.TaskTracker.TeamOverview.container9",
      class: "mx-name-container9 spacing-inner-left-large spacing-inner-right-large",
      style: void 0,
      renderMode: "div",
      onClick: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.TaskTracker.TeamOverview.layoutGrid3",
            $widgetId: "p.TaskTracker.TeamOverview.layoutGrid3",
            class: "mx-name-layoutGrid3 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.TaskTracker.TeamOverview.layoutGrid3$row0",
                  $widgetId: "p.TaskTracker.TeamOverview.layoutGrid3$row0",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.TaskTracker.TeamOverview.layoutGrid3$row0$column0",
                        $widgetId: "p.TaskTracker.TeamOverview.layoutGrid3$row0$column0",
                        class: "col-lg col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.TaskTracker.TeamOverview.text3",
                              $widgetId: "p.TaskTracker.TeamOverview.text3",
                              class: "mx-name-text3",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "The Team" }, "args": {} }
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
                  key: "p.TaskTracker.TeamOverview.layoutGrid3$row1",
                  $widgetId: "p.TaskTracker.TeamOverview.layoutGrid3$row1",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.TaskTracker.TeamOverview.layoutGrid3$row1$column0",
                        $widgetId: "p.TaskTracker.TeamOverview.layoutGrid3$row1$column0",
                        class: "col-lg col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Gallery,
                            {
                              key: "p.TaskTracker.TeamOverview.gallery2",
                              $widgetId: "p.TaskTracker.TeamOverview.gallery2",
                              advanced: false,
                              datasource: DatabaseObjectListProperty({
                                "dataSourceId": "p.54",
                                "entity": "MendixSSO.MendixSSOUser",
                                "operationId": "Q0c4MfGaHVyyDO2lkx4IxQ",
                                "sort": [
                                  [
                                    "DisplayName",
                                    "asc"
                                  ]
                                ]
                              }),
                              content: TemplatedWidgetProperty({
                                "dataSourceId": "p.54",
                                "editable": false,
                                "children": () => [
                                  /* @__PURE__ */ React.createElement(
                                    $Container,
                                    {
                                      key: "p.TaskTracker.TeamOverview.container3",
                                      $widgetId: "p.TaskTracker.TeamOverview.container3",
                                      class: "mx-name-container3 card shadow-medium",
                                      style: void 0,
                                      renderMode: "div",
                                      onClick: void 0,
                                      content: [
                                        /* @__PURE__ */ React.createElement(
                                          $Div,
                                          {
                                            key: "p.TaskTracker.TeamOverview.layoutGrid4",
                                            $widgetId: "p.TaskTracker.TeamOverview.layoutGrid4",
                                            class: "mx-name-layoutGrid4 mx-layoutgrid mx-layoutgrid-fluid spacing-inner-left-none spacing-inner-right-none spacing-inner-top-none",
                                            style: void 0,
                                            content: [
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "p.TaskTracker.TeamOverview.layoutGrid4$row0",
                                                  $widgetId: "p.TaskTracker.TeamOverview.layoutGrid4$row0",
                                                  class: "row",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Div,
                                                      {
                                                        key: "p.TaskTracker.TeamOverview.layoutGrid4$row0$column0",
                                                        $widgetId: "p.TaskTracker.TeamOverview.layoutGrid4$row0$column0",
                                                        class: "col-lg col-md col",
                                                        style: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Text,
                                                            {
                                                              key: "p.TaskTracker.TeamOverview.text7",
                                                              $widgetId: "p.TaskTracker.TeamOverview.text7",
                                                              class: "mx-name-text7 spacing-outer-bottom-none",
                                                              style: void 0,
                                                              caption: selectTranslation([
                                                                ExpressionProperty({
                                                                  "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "DisplayName" }, "args": { "currentObject": { "widget": "p.TaskTracker.TeamOverview.gallery2", "source": "object" } } }
                                                                })
                                                              ]),
                                                              renderMode: "h3"
                                                            }
                                                          ),
                                                          /* @__PURE__ */ React.createElement(
                                                            $Text,
                                                            {
                                                              key: "p.TaskTracker.TeamOverview.text8",
                                                              $widgetId: "p.TaskTracker.TeamOverview.text8",
                                                              class: "mx-name-text8",
                                                              style: void 0,
                                                              caption: selectTranslation([
                                                                ExpressionProperty({
                                                                  "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "EmailAddress" }, "args": { "currentObject": { "widget": "p.TaskTracker.TeamOverview.gallery2", "source": "object" } } }
                                                                })
                                                              ]),
                                                              renderMode: "p"
                                                            }
                                                          ),
                                                          /* @__PURE__ */ React.createElement(
                                                            $DataView,
                                                            {
                                                              key: "p.TaskTracker.TeamOverview.dataView3",
                                                              $widgetId: "p.TaskTracker.TeamOverview.dataView3",
                                                              class: "mx-name-dataView3 form-horizontal",
                                                              style: void 0,
                                                              tabIndex: void 0,
                                                              object: MicroflowObjectProperty({
                                                                "dataSourceId": "p.85",
                                                                "scope": "p.TaskTracker.TeamOverview.gallery2",
                                                                "editable": true,
                                                                "operationId": "9Ci4R0ARFV2gAkEl+XhXjA",
                                                                "argMap": { "MendixSSOUser": { "widget": "p.TaskTracker.TeamOverview.gallery2", "source": "object" } }
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
                                                                    key: "p.TaskTracker.TeamOverview.text9",
                                                                    $widgetId: "p.TaskTracker.TeamOverview.text9",
                                                                    class: "mx-name-text9 text-nowrap",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Assigned open tasks: " }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "AssignedTasks" }, { "type": "literal", "value": "{}" }] }] }, "args": { "currentObject": { "widget": "p.TaskTracker.TeamOverview.dataView3", "source": "object" } } }
                                                                      })
                                                                    ]),
                                                                    renderMode: "p"
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
                                                        key: "p.TaskTracker.TeamOverview.layoutGrid4$row0$column1",
                                                        $widgetId: "p.TaskTracker.TeamOverview.layoutGrid4$row0$column1",
                                                        class: "col-lg-auto col-md-auto col-auto",
                                                        style: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Image,
                                                            {
                                                              key: "p.TaskTracker.TeamOverview.image3",
                                                              $widgetId: "p.TaskTracker.TeamOverview.image3",
                                                              datasource: "imageUrl",
                                                              imageObject: void 0,
                                                              defaultImageDynamic: void 0,
                                                              imageUrl: selectTranslation([
                                                                ExpressionProperty({
                                                                  "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "AvatarURL" }, "args": { "currentObject": { "widget": "p.TaskTracker.TeamOverview.gallery2", "source": "object" } } }
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
                                                              heightUnit: "auto",
                                                              height: 100,
                                                              iconSize: 14,
                                                              displayAs: "fullImage",
                                                              responsive: false,
                                                              class: "mx-name-image3 img-circle",
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
                              }),
                              desktopItems: 4,
                              tabletItems: 4,
                              phoneItems: 2,
                              pageSize: 20,
                              pagination: "virtualScrolling",
                              pagingPosition: "below",
                              showEmptyPlaceholder: "none",
                              emptyPlaceholder: void 0,
                              itemClass: void 0,
                              onClick: ListActionProperty({
                                "action": { "type": "openPage", "argMap": { "param$MendixSSOUser": { "widget": "p.TaskTracker.TeamOverview.gallery2", "source": "object" } }, "config": { "name": "TaskTracker/MyAccountViewEdit.page.xml", "location": "modal", "resizable": false, "allowedRoles": ["Manager", "Member"] }, "disabledDuringExecution": false },
                                "abortOnServerValidation": false,
                                "dataSourceId": "p.54",
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
                              class: "mx-name-gallery2",
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
  "Team Overview"
]);
const classes = "layout-atlas layout-atlas-responsive-topbar";
const url = "/p/team";
const style = {};
const content = {
  ...content$1,
  "TaskTracker.Tasks_TopBar.Main": region$Main
};

export { classes, content, style, title, url };
