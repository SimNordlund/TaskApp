import { reactExports, asPluginWidgets, selectTranslation } from '../index-4mfddfkU.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-Ouf8FsgU.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-B2qOJ4td.js';
import { DatabaseObjectListProperty } from '../DatabaseObjectListProperty-bv83QC9Y.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-CAuzrF8_.js';
import { WebIconProperty } from '../WebIconProperty-D31g4FWT.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-51nXt5AX.js';
import { Container } from '../Container-Dx2M9vEg.js';
import { Div } from '../Div-DARk7tBI.js';
import { ListView } from '../ListView-D-gr4tYK.js';
import { Text } from '../Text-BEd6XRh9.js';
import { content as content$1 } from '../TaskTracker.Tasks_TopBar-CgXkLda9.js';
import '../DaFVLkxr-BwbOhnke.js';
import '../InlineText-C-RvyD35.js';
import '../MicroflowObjectProperty-DSOqr-FG.js';
import '../DGnMnCeA-CZ4oDNF6.js';
import '../WebStaticImageProperty-_lIkqA-b.js';
import '../DataView-BR45rEOj.js';
import '../bdxqAC6d-DAEMpsZ9.js';
import '../Fragment-DrLk0xpL.js';
import '../SidebarToggle-fh3TqfUx.js';
import '../Y8h_6YnI-C02bM5Tk.js';
import '../ScrollContainer-C-B529-s.js';

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
