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
import { Text } from '../Text-FRR1byrD.js';
import { content as content$1 } from '../TaskTracker.Tasks_TopBar-DeCwLxgf.js';
import '../DaFVLkxr-BxrrdlaV.js';
import '../InlineText-CzI_QVvb.js';
import '../MicroflowObjectProperty-DMF2xI6e.js';
import '../DGnMnCeA-DK-psBIA.js';
import '../WebStaticImageProperty-C8lEL5v3.js';
import '../DataView-cArw-CzT.js';
import '../bdxqAC6d-CG8RDE5Y.js';
import '../Fragment-B3BjuPk2.js';
import '../SidebarToggle-CfuyXm-T.js';
import '../Y8h_6YnI-BNpJt4pJ.js';
import '../ScrollContainer-BI1EaQ7R.js';

const React = { createElement: reactExports.createElement };
const { $Div, $ConditionalVisibilityWrapper, $ActionButton, $Container, $ListView, $Text } = asPluginWidgets({ Div, ConditionalVisibilityWrapper, ActionButton, Container, ListView, Text });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.TaskTracker.Department_Overview.layoutGrid2",
      $widgetId: "p.TaskTracker.Department_Overview.layoutGrid2",
      class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.TaskTracker.Department_Overview.layoutGrid2$row0",
            $widgetId: "p.TaskTracker.Department_Overview.layoutGrid2$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.TaskTracker.Department_Overview.layoutGrid2$row0$column0",
                  $widgetId: "p.TaskTracker.Department_Overview.layoutGrid2$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ConditionalVisibilityWrapper,
                      {
                        key: "p.TaskTracker.Department_Overview.actionButton1$visibility",
                        $widgetId: "p.TaskTracker.Department_Overview.actionButton1$visibility",
                        visible: ExpressionProperty({
                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Manager" }, { "type": "literal", "value": "Member" }] }, "args": {} }
                        }),
                        contents: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.TaskTracker.Department_Overview.actionButton1",
                              $widgetId: "p.TaskTracker.Department_Overview.actionButton1",
                              buttonId: "p.TaskTracker.Department_Overview.actionButton1",
                              class: "mx-name-actionButton1",
                              style: void 0,
                              tabIndex: void 0,
                              renderType: "button",
                              role: void 0,
                              buttonClass: "btn-default",
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Add" }, "args": {} }
                                })
                              ]),
                              tooltip: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              icon: void 0,
                              action: ActionProperty({
                                "action": { "type": "createObject", "argMap": {}, "config": { "entity": "TaskTracker.Department", "operationId": "klcm3x+5lVOamEPOjMSc4A", "pageSettings": { "name": "TaskTracker/Department_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Manager", "Member"] }, "allowedRoles": ["Manager", "Member"], "objectParameter": "param$Department" }, "disabledDuringExecution": true },
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
            key: "p.TaskTracker.Department_Overview.layoutGrid2$row1",
            $widgetId: "p.TaskTracker.Department_Overview.layoutGrid2$row1",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.TaskTracker.Department_Overview.layoutGrid2$row1$column0",
                  $widgetId: "p.TaskTracker.Department_Overview.layoutGrid2$row1$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.TaskTracker.Department_Overview.container2",
                        $widgetId: "p.TaskTracker.Department_Overview.container2",
                        class: "mx-name-container2 background-white",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $ListView,
                            {
                              key: "p.TaskTracker.Department_Overview.listView3",
                              $widgetId: "p.TaskTracker.Department_Overview.listView3",
                              class: "mx-name-listView3 listview-lined listview-hover",
                              style: void 0,
                              listValue: DatabaseObjectListProperty({
                                "dataSourceId": "p.2",
                                "entity": "TaskTracker.Department",
                                "operationId": "OR+HVLlRPlSV7Gw/5orJAg",
                                "sort": []
                              }),
                              itemTemplate: TemplatedWidgetProperty({
                                "dataSourceId": "p.2",
                                "editable": false,
                                "children": () => [
                                  /* @__PURE__ */ React.createElement(
                                    $Div,
                                    {
                                      key: "p.TaskTracker.Department_Overview.layoutGrid1",
                                      $widgetId: "p.TaskTracker.Department_Overview.layoutGrid1",
                                      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid",
                                      style: void 0,
                                      content: [
                                        /* @__PURE__ */ React.createElement(
                                          $Div,
                                          {
                                            key: "p.TaskTracker.Department_Overview.layoutGrid1$row0",
                                            $widgetId: "p.TaskTracker.Department_Overview.layoutGrid1$row0",
                                            class: "row align-children-center",
                                            style: void 0,
                                            content: [
                                              /* @__PURE__ */ React.createElement(
                                                $Div,
                                                {
                                                  key: "p.TaskTracker.Department_Overview.layoutGrid1$row0$column0",
                                                  $widgetId: "p.TaskTracker.Department_Overview.layoutGrid1$row0$column0",
                                                  class: "col-lg col-md col",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Text,
                                                      {
                                                        key: "p.TaskTracker.Department_Overview.text10",
                                                        $widgetId: "p.TaskTracker.Department_Overview.text10",
                                                        class: "mx-name-text10 spacing-outer-bottom-none",
                                                        style: void 0,
                                                        caption: selectTranslation([
                                                          ExpressionProperty({
                                                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p.TaskTracker.Department_Overview.listView3", "source": "object" } } }
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
                                                  key: "p.TaskTracker.Department_Overview.layoutGrid1$row0$column1",
                                                  $widgetId: "p.TaskTracker.Department_Overview.layoutGrid1$row0$column1",
                                                  class: "col-lg-auto col-md-auto col-auto",
                                                  style: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $ActionButton,
                                                      {
                                                        key: "p.TaskTracker.Department_Overview.actionButton4",
                                                        $widgetId: "p.TaskTracker.Department_Overview.actionButton4",
                                                        buttonId: "p.TaskTracker.Department_Overview.actionButton4",
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
                                                          "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-chevron-right" }
                                                        }),
                                                        action: void 0
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
                        ],
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
  "Department Overview"
]);
const classes = "layout-atlas layout-atlas-responsive-topbar";
const style = {};
const content = {
  ...content$1,
  "TaskTracker.Tasks_TopBar.Main": region$Main
};

export { classes, content, style, title };
