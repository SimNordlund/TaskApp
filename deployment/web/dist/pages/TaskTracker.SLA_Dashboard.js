import { reactExports, asPluginWidgets, selectTranslation } from '../index-CkReQaf8.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-mMZDhMpD.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-_oIWOEDQ.js';
import { DatabaseObjectListProperty } from '../DatabaseObjectListProperty-55NAdKPz.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-CwX8j72o.js';
import { WebIconProperty } from '../WebIconProperty-CtnHhOeg.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-BXholmiE.js';
import { Container } from '../Container-DpDHpBLi.js';
import { Div } from '../Div-CI4jyrhB.js';
import { ListView } from '../ListView-Dl2F5ZNV.js';
import { TabContainer } from '../TabContainer-Bb2C-JRZ.js';
import { Text } from '../Text-FRR1byrD.js';
import { content as content$1 } from '../TaskTracker.Tasks_TopBar-DeCwLxgf.js';
import '../DaFVLkxr-BxrrdlaV.js';
import '../bdxqAC6d-CG8RDE5Y.js';
import '../Y8h_6YnI-BNpJt4pJ.js';
import '../D2Vzasyw-DfSu0qGn.js';
import '../InlineText-CzI_QVvb.js';
import '../MicroflowObjectProperty-DMF2xI6e.js';
import '../DGnMnCeA-DK-psBIA.js';
import '../WebStaticImageProperty-C8lEL5v3.js';
import '../DataView-cArw-CzT.js';
import '../Fragment-B3BjuPk2.js';
import '../SidebarToggle-CfuyXm-T.js';
import '../ScrollContainer-BI1EaQ7R.js';

const React = { createElement: reactExports.createElement };
const { $TabContainer, $ListView, $Div, $Text, $ConditionalVisibilityWrapper, $ActionButton, $Container } = asPluginWidgets({ TabContainer, ListView, Div, Text, ConditionalVisibilityWrapper, ActionButton, Container });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $TabContainer,
    {
      key: "p.TaskTracker.SLA_Dashboard.tabContainer1",
      $widgetId: "p.TaskTracker.SLA_Dashboard.tabContainer1",
      class: "mx-name-tabContainer1",
      style: void 0,
      tabIndex: void 0,
      widgetId: "p.TaskTracker.SLA_Dashboard.tabContainer1",
      defaultTab: 0,
      tabs: [
        {
          "name": "tabPage1",
          "caption": TextProperty({
            "value": selectTranslation([
              "Missed"
            ])
          }),
          "isDelayed": false,
          "refreshOnShow": false,
          "content": [
            /* @__PURE__ */ React.createElement(
              $ListView,
              {
                key: "p.TaskTracker.SLA_Dashboard.listView4",
                $widgetId: "p.TaskTracker.SLA_Dashboard.listView4",
                class: "mx-name-listView4 listview-lined listview-hover",
                style: void 0,
                listValue: DatabaseObjectListProperty({
                  "dataSourceId": "p.2",
                  "entity": "TaskTracker.Task",
                  "operationId": "Kv73I5mcxVmHEU/BThZnSA",
                  "sort": [
                    [
                      "CompletionDate",
                      "desc"
                    ]
                  ],
                  "constraints": { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "SLADashboardStatus", "context": "TaskTracker.Task", "attributeType": "#TaskTracker.Enumeration" }, { "type": "literal", "value": "SLA_Missed" }] }
                }),
                itemTemplate: TemplatedWidgetProperty({
                  "dataSourceId": "p.2",
                  "editable": false,
                  "children": () => [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.TaskTracker.SLA_Dashboard.layoutGrid3",
                        $widgetId: "p.TaskTracker.SLA_Dashboard.layoutGrid3",
                        class: "mx-name-layoutGrid3 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Div,
                            {
                              key: "p.TaskTracker.SLA_Dashboard.layoutGrid3$row0",
                              $widgetId: "p.TaskTracker.SLA_Dashboard.layoutGrid3$row0",
                              class: "row align-children-center",
                              style: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Div,
                                  {
                                    key: "p.TaskTracker.SLA_Dashboard.layoutGrid3$row0$column0",
                                    $widgetId: "p.TaskTracker.SLA_Dashboard.layoutGrid3$row0$column0",
                                    class: "col-lg col-md col",
                                    style: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Text,
                                        {
                                          key: "p.TaskTracker.SLA_Dashboard.text11",
                                          $widgetId: "p.TaskTracker.SLA_Dashboard.text11",
                                          class: "mx-name-text11 spacing-outer-bottom-none",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Title" }, "args": { "currentObject": { "widget": "p.TaskTracker.SLA_Dashboard.listView4", "source": "object" } } }
                                            })
                                          ]),
                                          renderMode: "h4"
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Text,
                                        {
                                          key: "p.TaskTracker.SLA_Dashboard.text44",
                                          $widgetId: "p.TaskTracker.SLA_Dashboard.text44",
                                          class: "mx-name-text44 spacing-outer-bottom-none",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": " " }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "CompletionDate" }, { "type": "literal", "value": '{"type":"date"}' }] }] }, "args": { "currentObject": { "widget": "p.TaskTracker.SLA_Dashboard.listView4", "source": "object" } } }
                                            })
                                          ]),
                                          renderMode: "p"
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Text,
                                        {
                                          key: "p.TaskTracker.SLA_Dashboard.text45",
                                          $widgetId: "p.TaskTracker.SLA_Dashboard.text45",
                                          class: "mx-name-text45 spacing-outer-bottom-none",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "SLADashboardStatus" }, { "type": "literal", "value": "TaskTracker.Enumeration" }] }, "args": { "currentObject": { "widget": "p.TaskTracker.SLA_Dashboard.listView4", "source": "object" } } }
                                            })
                                          ]),
                                          renderMode: "p"
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Text,
                                        {
                                          key: "p.TaskTracker.SLA_Dashboard.text46",
                                          $widgetId: "p.TaskTracker.SLA_Dashboard.text46",
                                          class: "mx-name-text46 spacing-outer-bottom-none",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "TaskTracker.Task_Department/TaskTracker.Department/Name" }, "args": { "currentObject": { "widget": "p.TaskTracker.SLA_Dashboard.listView4", "source": "object" } } }
                                            })
                                          ]),
                                          renderMode: "p"
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Div,
                                  {
                                    key: "p.TaskTracker.SLA_Dashboard.layoutGrid3$row0$column1",
                                    $widgetId: "p.TaskTracker.SLA_Dashboard.layoutGrid3$row0$column1",
                                    class: "col-lg-auto col-md-auto col-auto",
                                    style: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.TaskTracker.SLA_Dashboard.actionButton5$visibility",
                                          $widgetId: "p.TaskTracker.SLA_Dashboard.actionButton5$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Manager" }, { "type": "literal", "value": "Member" }] }, "args": {} }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.TaskTracker.SLA_Dashboard.actionButton5",
                                                $widgetId: "p.TaskTracker.SLA_Dashboard.actionButton5",
                                                buttonId: "p.TaskTracker.SLA_Dashboard.actionButton5",
                                                class: "mx-name-actionButton5",
                                                style: void 0,
                                                tabIndex: void 0,
                                                renderType: "link",
                                                role: "button",
                                                buttonClass: "btn-default",
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                tooltip: TextProperty({
                                                  "value": selectTranslation([
                                                    "Menu Right Icon"
                                                  ])
                                                }),
                                                icon: WebIconProperty({
                                                  "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-trash-can" }
                                                }),
                                                action: ActionProperty({
                                                  "action": { "type": "deleteObject", "argMap": { "$object": { "widget": "p.TaskTracker.SLA_Dashboard.listView4", "source": "object" } }, "config": { "closePage": false, "operationId": "uGDkfw4is1GmeCjWciHzBA" }, "disabledDuringExecution": true },
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
                }),
                onClick: void 0,
                pageSize: 5
              }
            )
          ]
        },
        {
          "name": "tabPage2",
          "caption": TextProperty({
            "value": selectTranslation([
              "All"
            ])
          }),
          "isDelayed": true,
          "refreshOnShow": false,
          "content": [
            /* @__PURE__ */ React.createElement(
              $ListView,
              {
                key: "p.TaskTracker.SLA_Dashboard.listView3",
                $widgetId: "p.TaskTracker.SLA_Dashboard.listView3",
                class: "mx-name-listView3 listview-lined listview-hover",
                style: void 0,
                listValue: DatabaseObjectListProperty({
                  "dataSourceId": "p.5",
                  "entity": "TaskTracker.Task",
                  "operationId": "e/D++F+dFFaH7qP7PqiPkA",
                  "sort": []
                }),
                itemTemplate: TemplatedWidgetProperty({
                  "dataSourceId": "p.5",
                  "editable": false,
                  "children": () => [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.TaskTracker.SLA_Dashboard.layoutGrid1",
                        $widgetId: "p.TaskTracker.SLA_Dashboard.layoutGrid1",
                        class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Div,
                            {
                              key: "p.TaskTracker.SLA_Dashboard.layoutGrid1$row0",
                              $widgetId: "p.TaskTracker.SLA_Dashboard.layoutGrid1$row0",
                              class: "row align-children-center",
                              style: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Div,
                                  {
                                    key: "p.TaskTracker.SLA_Dashboard.layoutGrid1$row0$column0",
                                    $widgetId: "p.TaskTracker.SLA_Dashboard.layoutGrid1$row0$column0",
                                    class: "col-lg col-md col",
                                    style: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Text,
                                        {
                                          key: "p.TaskTracker.SLA_Dashboard.text10",
                                          $widgetId: "p.TaskTracker.SLA_Dashboard.text10",
                                          class: "mx-name-text10 spacing-outer-bottom-none",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Title" }, "args": { "currentObject": { "widget": "p.TaskTracker.SLA_Dashboard.listView3", "source": "object" } } }
                                            })
                                          ]),
                                          renderMode: "h4"
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Text,
                                        {
                                          key: "p.TaskTracker.SLA_Dashboard.text41",
                                          $widgetId: "p.TaskTracker.SLA_Dashboard.text41",
                                          class: "mx-name-text41 spacing-outer-bottom-none",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": " " }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "CompletionDate" }, { "type": "literal", "value": '{"type":"date"}' }] }] }, "args": { "currentObject": { "widget": "p.TaskTracker.SLA_Dashboard.listView3", "source": "object" } } }
                                            })
                                          ]),
                                          renderMode: "p"
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Text,
                                        {
                                          key: "p.TaskTracker.SLA_Dashboard.text42",
                                          $widgetId: "p.TaskTracker.SLA_Dashboard.text42",
                                          class: "mx-name-text42 spacing-outer-bottom-none",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "SLADashboardStatus" }, { "type": "literal", "value": "TaskTracker.Enumeration" }] }, "args": { "currentObject": { "widget": "p.TaskTracker.SLA_Dashboard.listView3", "source": "object" } } }
                                            })
                                          ]),
                                          renderMode: "p"
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Text,
                                        {
                                          key: "p.TaskTracker.SLA_Dashboard.text43",
                                          $widgetId: "p.TaskTracker.SLA_Dashboard.text43",
                                          class: "mx-name-text43 spacing-outer-bottom-none",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "TaskTracker.Task_Department/TaskTracker.Department/Name" }, "args": { "currentObject": { "widget": "p.TaskTracker.SLA_Dashboard.listView3", "source": "object" } } }
                                            })
                                          ]),
                                          renderMode: "p"
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Div,
                                  {
                                    key: "p.TaskTracker.SLA_Dashboard.layoutGrid1$row0$column1",
                                    $widgetId: "p.TaskTracker.SLA_Dashboard.layoutGrid1$row0$column1",
                                    class: "col-lg-auto col-md-auto col-auto",
                                    style: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.TaskTracker.SLA_Dashboard.actionButton4$visibility",
                                          $widgetId: "p.TaskTracker.SLA_Dashboard.actionButton4$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Manager" }, { "type": "literal", "value": "Member" }] }, "args": {} }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.TaskTracker.SLA_Dashboard.actionButton4",
                                                $widgetId: "p.TaskTracker.SLA_Dashboard.actionButton4",
                                                buttonId: "p.TaskTracker.SLA_Dashboard.actionButton4",
                                                class: "mx-name-actionButton4",
                                                style: void 0,
                                                tabIndex: void 0,
                                                renderType: "link",
                                                role: "button",
                                                buttonClass: "btn-default",
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                tooltip: TextProperty({
                                                  "value": selectTranslation([
                                                    "Menu Right Icon"
                                                  ])
                                                }),
                                                icon: WebIconProperty({
                                                  "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-trash-can" }
                                                }),
                                                action: ActionProperty({
                                                  "action": { "type": "deleteObject", "argMap": { "$object": { "widget": "p.TaskTracker.SLA_Dashboard.listView3", "source": "object" } }, "config": { "closePage": false, "operationId": "Oiph7n2/WliNq2ltTchimQ" }, "disabledDuringExecution": true },
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
                }),
                onClick: void 0,
                pageSize: 5
              }
            )
          ]
        }
      ]
    }
  ),
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.TaskTracker.SLA_Dashboard.layoutGrid2",
      $widgetId: "p.TaskTracker.SLA_Dashboard.layoutGrid2",
      class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.TaskTracker.SLA_Dashboard.layoutGrid2$row0",
            $widgetId: "p.TaskTracker.SLA_Dashboard.layoutGrid2$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.TaskTracker.SLA_Dashboard.layoutGrid2$row0$column0",
                  $widgetId: "p.TaskTracker.SLA_Dashboard.layoutGrid2$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.TaskTracker.SLA_Dashboard.container2",
                        $widgetId: "p.TaskTracker.SLA_Dashboard.container2",
                        class: "mx-name-container2 background-white",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: void 0,
                        ariaHidden: false
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
]);
const title = selectTranslation([
  "SLA Dashboard"
]);
const classes = "layout-atlas layout-atlas-responsive-topbar";
const style = {};
const content = {
  ...content$1,
  "TaskTracker.Tasks_TopBar.Main": region$Main
};

export { classes, content, style, title };
