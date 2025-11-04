import { reactExports, asPluginWidgets, selectTranslation } from '../index-CmmNAaD_.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-C-HgUb7V.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-Lvo3cUXR.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-CHQX1JXa.js';
import { FormGroup, TextBox, DerivedUniqueIdProperty, ValidationProperty } from '../TextBox-Do0-cbSY.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-mFTB0b_c.js';
import { DataView } from '../DataView-DHR-h_WZ.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-CaQBzvHQ.js';
import { AttributeProperty } from '../DR_P8f0l-CzNiznAJ.js';
import '../DaFVLkxr-Bkn_Z2yo.js';
import '../bdxqAC6d-BxVkIcZq.js';
import '../ScrollContainer-KQJM2kpR.js';

const React = { createElement: reactExports.createElement };
const { $DataView, $FormGroup, $TextBox, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ DataView, FormGroup, TextBox, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $DataView,
    {
      key: "p.Administration.ChangePasswordForm.dataView2",
      $widgetId: "p.Administration.ChangePasswordForm.dataView2",
      class: "mx-name-dataView2 form-horizontal",
      style: void 0,
      tabIndex: void 0,
      object: AssociationObjectProperty({
        "dataSourceId": "p.6",
        "scope": "$AccountPasswordData",
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
            key: "p.Administration.ChangePasswordForm.textBox3$formGroup",
            $widgetId: "p.Administration.ChangePasswordForm.textBox3$formGroup",
            class: "mx-name-textBox3 mx-textbox",
            style: void 0,
            control: [
              /* @__PURE__ */ React.createElement(
                $TextBox,
                {
                  key: "p.Administration.ChangePasswordForm.textBox3",
                  $widgetId: "p.Administration.ChangePasswordForm.textBox3",
                  inputValue: AttributeProperty({
                    "scope": "p.Administration.ChangePasswordForm.dataView2",
                    "path": "",
                    "entity": "Administration.AccountPasswordData",
                    "attribute": "NewPassword",
                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                    "isList": false,
                    "validation": { "message": selectTranslation(["The password cannot be empty."]), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "value" }, { "type": "literal", "value": null }] }, "args": {} } },
                    "formatting": {}
                  }),
                  isPassword: true,
                  placeholder: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                    })
                  ]),
                  mask: "",
                  readOnlyStyle: "text",
                  maxLength: 200,
                  onEnter: void 0,
                  onLeave: void 0,
                  onEnterKeyPress: void 0,
                  ariaLabel: void 0,
                  autocomplete: "on",
                  submitWhileEditing: false,
                  submitDelay: 300,
                  ariaRequired: true,
                  tabIndex: void 0,
                  id: DerivedUniqueIdProperty({
                    "widgetId": "p.Administration.ChangePasswordForm.textBox3"
                  })
                }
              )
            ],
            caption: selectTranslation([
              ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "New password" }, "args": {} }
              })
            ]),
            labelFor: DerivedUniqueIdProperty({
              "widgetId": "p.Administration.ChangePasswordForm.textBox3"
            }),
            width: 3,
            orientation: "horizontal",
            hasError: ValidationProperty({
              "inputWidgetId": "p.Administration.ChangePasswordForm.textBox3"
            })
          }
        ),
        /* @__PURE__ */ React.createElement(
          $FormGroup,
          {
            key: "p.Administration.ChangePasswordForm.textBox1$formGroup",
            $widgetId: "p.Administration.ChangePasswordForm.textBox1$formGroup",
            class: "mx-name-textBox1 mx-textbox",
            style: void 0,
            control: [
              /* @__PURE__ */ React.createElement(
                $TextBox,
                {
                  key: "p.Administration.ChangePasswordForm.textBox1",
                  $widgetId: "p.Administration.ChangePasswordForm.textBox1",
                  inputValue: AttributeProperty({
                    "scope": "p.Administration.ChangePasswordForm.dataView2",
                    "path": "",
                    "entity": "Administration.AccountPasswordData",
                    "attribute": "ConfirmPassword",
                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                    "isList": false,
                    "validation": { "message": selectTranslation(["The password cannot be empty."]), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "value" }, { "type": "literal", "value": null }] }, "args": {} } },
                    "formatting": {}
                  }),
                  isPassword: true,
                  placeholder: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                    })
                  ]),
                  mask: "",
                  readOnlyStyle: "text",
                  maxLength: 200,
                  onEnter: void 0,
                  onLeave: void 0,
                  onEnterKeyPress: void 0,
                  ariaLabel: void 0,
                  autocomplete: "on",
                  submitWhileEditing: false,
                  submitDelay: 300,
                  ariaRequired: true,
                  tabIndex: void 0,
                  id: DerivedUniqueIdProperty({
                    "widgetId": "p.Administration.ChangePasswordForm.textBox1"
                  })
                }
              )
            ],
            caption: selectTranslation([
              ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "Confirm password" }, "args": {} }
              })
            ]),
            labelFor: DerivedUniqueIdProperty({
              "widgetId": "p.Administration.ChangePasswordForm.textBox1"
            }),
            width: 3,
            orientation: "horizontal",
            hasError: ValidationProperty({
              "inputWidgetId": "p.Administration.ChangePasswordForm.textBox1"
            })
          }
        )
      ],
      hideFooter: false,
      footer: [
        /* @__PURE__ */ React.createElement(
          $ConditionalVisibilityWrapper,
          {
            key: "p.Administration.ChangePasswordForm.microflowButton1$visibility",
            $widgetId: "p.Administration.ChangePasswordForm.microflowButton1$visibility",
            visible: ExpressionProperty({
              "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Manager" }] }, "args": {} }
            }),
            contents: [
              /* @__PURE__ */ React.createElement(
                $ActionButton,
                {
                  key: "p.Administration.ChangePasswordForm.microflowButton1",
                  $widgetId: "p.Administration.ChangePasswordForm.microflowButton1",
                  buttonId: "p.Administration.ChangePasswordForm.microflowButton1",
                  class: "mx-name-microflowButton1",
                  style: void 0,
                  tabIndex: void 0,
                  renderType: "button",
                  role: void 0,
                  buttonClass: "btn-success",
                  caption: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Change" }, "args": {} }
                    })
                  ]),
                  tooltip: TextProperty({
                    "value": selectTranslation([
                      ""
                    ])
                  }),
                  icon: void 0,
                  action: ActionProperty({
                    "action": { "type": "callMicroflow", "argMap": { "AccountPasswordData": { "widget": "$AccountPasswordData", "source": "object" } }, "config": { "operationId": "Cw6fZ88CBFOWUtZQhB2HMg", "validate": "view", "allowedRoles": ["Manager"] }, "disabledDuringExecution": false },
                    "abortOnServerValidation": true
                  })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ React.createElement(
          $ActionButton,
          {
            key: "p.Administration.ChangePasswordForm.cancelButton1",
            $widgetId: "p.Administration.ChangePasswordForm.cancelButton1",
            buttonId: "p.Administration.ChangePasswordForm.cancelButton1",
            class: "mx-name-cancelButton1",
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
              "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "6KHr/dbPD1KvrEC9yuzvtg", "closePage": true }, "disabledDuringExecution": true },
              "abortOnServerValidation": true
            })
          }
        )
      ]
    }
  )
]);
const title = selectTranslation([
  "Change Password"
]);
const classes = "";
const cancelChangesOperationId = "+5QCPGPkRlSpTw1HWetU0w";
const closeButton = "p.Administration.ChangePasswordForm.cancelButton1";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
