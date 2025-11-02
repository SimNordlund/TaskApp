import { reactExports, asPluginWidgets, selectTranslation } from '../index-CkReQaf8.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-mMZDhMpD.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-_oIWOEDQ.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-Dh6rLDXa.js';
import { FormGroup, TextBox, DerivedUniqueIdProperty, ValidationProperty } from '../TextBox-Db4S7Smn.js';
import { DataView } from '../DataView-cArw-CzT.js';
import { Div } from '../Div-CI4jyrhB.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-Q6y7OkvB.js';
import { AttributeProperty } from '../DR_P8f0l-BDywjFiC.js';
import '../DaFVLkxr-BxrrdlaV.js';
import '../bdxqAC6d-CG8RDE5Y.js';
import '../ScrollContainer-BI1EaQ7R.js';

const React = { createElement: reactExports.createElement };
const { $Div, $DataView, $FormGroup, $TextBox, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.TaskTracker.Department_NewEdit.layoutGrid1",
      $widgetId: "p.TaskTracker.Department_NewEdit.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.TaskTracker.Department_NewEdit.layoutGrid1$row0",
            $widgetId: "p.TaskTracker.Department_NewEdit.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.TaskTracker.Department_NewEdit.layoutGrid1$row0$column0",
                  $widgetId: "p.TaskTracker.Department_NewEdit.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.TaskTracker.Department_NewEdit.dataView6",
                        $widgetId: "p.TaskTracker.Department_NewEdit.dataView6",
                        class: "mx-name-dataView6 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.12",
                          "scope": "$Department",
                          "editable": true
                        }),
                        emptyMessage: TextProperty({
                          "value": selectTranslation([
                            ""
                          ])
                        }),
                        body: [
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.TaskTracker.Department_NewEdit.textBox1$formGroup",
                              $widgetId: "p.TaskTracker.Department_NewEdit.textBox1$formGroup",
                              class: "mx-name-textBox1 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.TaskTracker.Department_NewEdit.textBox1",
                                    $widgetId: "p.TaskTracker.Department_NewEdit.textBox1",
                                    inputValue: AttributeProperty({
                                      "scope": "p.TaskTracker.Department_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "TaskTracker.Department",
                                      "attribute": "Name",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null,
                                      "formatting": {}
                                    }),
                                    isPassword: false,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    mask: "",
                                    readOnlyStyle: "control",
                                    maxLength: 200,
                                    onEnter: void 0,
                                    onLeave: void 0,
                                    onEnterKeyPress: void 0,
                                    ariaLabel: void 0,
                                    autocomplete: "on",
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    ariaRequired: void 0,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.TaskTracker.Department_NewEdit.textBox1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Name" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.TaskTracker.Department_NewEdit.textBox1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.TaskTracker.Department_NewEdit.textBox1"
                              })
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.TaskTracker.Department_NewEdit.actionButton1",
                              $widgetId: "p.TaskTracker.Department_NewEdit.actionButton1",
                              buttonId: "p.TaskTracker.Department_NewEdit.actionButton1",
                              class: "mx-name-actionButton1",
                              style: void 0,
                              tabIndex: void 0,
                              renderType: "button",
                              role: void 0,
                              buttonClass: "btn-primary",
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Save" }, "args": {} }
                                })
                              ]),
                              tooltip: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              icon: void 0,
                              action: ActionProperty({
                                "action": { "type": "saveChanges", "argMap": { "$object": { "widget": "p.TaskTracker.Department_NewEdit.dataView6", "source": "object" } }, "config": { "operationId": "Io/uDRx2C1y9yrGmM9iBSw", "closePage": true }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.TaskTracker.Department_NewEdit.actionButton2",
                              $widgetId: "p.TaskTracker.Department_NewEdit.actionButton2",
                              buttonId: "p.TaskTracker.Department_NewEdit.actionButton2",
                              class: "mx-name-actionButton2",
                              style: void 0,
                              tabIndex: void 0,
                              renderType: "button",
                              role: void 0,
                              buttonClass: "btn-default",
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Cancel" }, "args": {} }
                                })
                              ]),
                              tooltip: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              icon: void 0,
                              action: ActionProperty({
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "CHQKtpTdsVax4PhJDbfkiA", "closePage": true }, "disabledDuringExecution": true },
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
]);
const title = selectTranslation([
  "Edit Department"
]);
const classes = "";
const cancelChangesOperationId = "azLo8uBReVGqPutyTKuDtw";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
