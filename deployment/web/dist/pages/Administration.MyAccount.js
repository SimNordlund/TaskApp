import { reactExports, asPluginWidgets, selectTranslation } from '../index-CmmNAaD_.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-C-HgUb7V.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-Lvo3cUXR.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-CHQX1JXa.js';
import { AssociationProperty } from '../AssociationProperty-XJpi39f2.js';
import { FormGroup, TextBox, DerivedUniqueIdProperty, ValidationProperty } from '../TextBox-Do0-cbSY.js';
import { DatabaseObjectListProperty } from '../DatabaseObjectListProperty-BT0YTY5Y.js';
import { ListAttributeProperty } from '../ListAttributeProperty-D4skSNMF.js';
import { ComboboxWidgetModule } from '../Combobox-BRPh3CMU.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-mFTB0b_c.js';
import { DataView } from '../DataView-DHR-h_WZ.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-CaQBzvHQ.js';
import { AttributeProperty } from '../DR_P8f0l-CzNiznAJ.js';
import '../DaFVLkxr-Bkn_Z2yo.js';
import '../D4nQ98US-BSWF3v9H.js';
import '../bdxqAC6d-BxVkIcZq.js';
import '../ScrollContainer-KQJM2kpR.js';

const React = { createElement: reactExports.createElement };
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const { $DataView, $FormGroup, $TextBox, $Combobox, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ DataView, FormGroup, TextBox, Combobox, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $DataView,
    {
      key: "p.Administration.MyAccount.dataView1",
      $widgetId: "p.Administration.MyAccount.dataView1",
      class: "mx-name-dataView1 form-horizontal",
      style: void 0,
      tabIndex: void 0,
      object: AssociationObjectProperty({
        "dataSourceId": "p.9",
        "scope": "$Account",
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
            key: "p.Administration.MyAccount.textBox2$formGroup",
            $widgetId: "p.Administration.MyAccount.textBox2$formGroup",
            class: "mx-name-textBox2 mx-textbox",
            style: void 0,
            control: [
              /* @__PURE__ */ React.createElement(
                $TextBox,
                {
                  key: "p.Administration.MyAccount.textBox2",
                  $widgetId: "p.Administration.MyAccount.textBox2",
                  inputValue: AttributeProperty({
                    "scope": "p.Administration.MyAccount.dataView1",
                    "path": "",
                    "entity": "Administration.Account",
                    "attribute": "FullName",
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
                  readOnlyStyle: "text",
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
                    "widgetId": "p.Administration.MyAccount.textBox2"
                  })
                }
              )
            ],
            caption: selectTranslation([
              ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "Full name" }, "args": {} }
              })
            ]),
            labelFor: DerivedUniqueIdProperty({
              "widgetId": "p.Administration.MyAccount.textBox2"
            }),
            width: 3,
            orientation: "horizontal",
            hasError: ValidationProperty({
              "inputWidgetId": "p.Administration.MyAccount.textBox2"
            })
          }
        ),
        /* @__PURE__ */ React.createElement(
          $FormGroup,
          {
            key: "p.Administration.MyAccount.textBox5$formGroup",
            $widgetId: "p.Administration.MyAccount.textBox5$formGroup",
            class: "mx-name-textBox5 mx-textbox",
            style: void 0,
            control: [
              /* @__PURE__ */ React.createElement(
                $TextBox,
                {
                  key: "p.Administration.MyAccount.textBox5",
                  $widgetId: "p.Administration.MyAccount.textBox5",
                  inputValue: AttributeProperty({
                    "scope": "p.Administration.MyAccount.dataView1",
                    "path": "",
                    "entity": "Administration.Account",
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
                  readOnlyStyle: "text",
                  maxLength: 100,
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
                    "widgetId": "p.Administration.MyAccount.textBox5"
                  })
                }
              )
            ],
            caption: selectTranslation([
              ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "User name" }, "args": {} }
              })
            ]),
            labelFor: DerivedUniqueIdProperty({
              "widgetId": "p.Administration.MyAccount.textBox5"
            }),
            width: 3,
            orientation: "horizontal",
            hasError: ValidationProperty({
              "inputWidgetId": "p.Administration.MyAccount.textBox5"
            })
          }
        ),
        /* @__PURE__ */ React.createElement(
          $FormGroup,
          {
            key: "p.Administration.MyAccount.comboBox3$formGroup",
            $widgetId: "p.Administration.MyAccount.comboBox3$formGroup",
            class: "mx-name-comboBox3",
            style: void 0,
            control: [
              /* @__PURE__ */ React.createElement(
                $Combobox,
                {
                  key: "p.Administration.MyAccount.comboBox3",
                  $widgetId: "p.Administration.MyAccount.comboBox3",
                  optionsSourceType: "association",
                  attributeAssociation: AssociationProperty({
                    "type": "Reference",
                    "entity": "Administration.Account",
                    "path": "",
                    "attribute": "System.User_Language",
                    "endpointEntity": "System.Language",
                    "selectableObjectsId": "p.0",
                    "scope": "p.Administration.MyAccount.dataView1",
                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                  }),
                  optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                    "dataSourceId": "p.0",
                    "entity": "System.Language",
                    "scope": "p.Administration.MyAccount.dataView1",
                    "operationId": "CTMGO3LZVV2OTkBpnCW8gw",
                    "sort": []
                  }),
                  optionsSourceAssociationCaptionType: "attribute",
                  optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                    "path": "",
                    "entity": "System.Language",
                    "attribute": "Description",
                    "attributeType": "String",
                    "sortable": true,
                    "filterable": true,
                    "dataSourceId": "p.0",
                    "isList": false
                  }),
                  optionsSourceAssociationCaptionExpression: void 0,
                  emptyOptionText: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                    })
                  ]),
                  filterType: "contains",
                  noOptionsText: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                    })
                  ]),
                  clearable: true,
                  optionsSourceAssociationCustomContentType: "no",
                  optionsSourceAssociationCustomContent: void 0,
                  showFooter: false,
                  menuFooterContent: void 0,
                  selectionMethod: "checkbox",
                  selectedItemsStyle: "text",
                  selectAllButton: false,
                  selectAllButtonCaption: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                    })
                  ]),
                  onChangeEvent: void 0,
                  onEnterEvent: void 0,
                  onLeaveEvent: void 0,
                  ariaRequired: ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                  }),
                  clearButtonAriaLabel: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                    })
                  ]),
                  removeValueAriaLabel: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                    })
                  ]),
                  a11ySelectedValue: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                    })
                  ]),
                  a11yOptionsAvailable: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                    })
                  ]),
                  a11yInstructions: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                    })
                  ]),
                  source: "context",
                  optionsSourceDatabaseDataSource: void 0,
                  optionsSourceDatabaseCaptionType: "attribute",
                  optionsSourceDatabaseCustomContentType: "no",
                  optionsSourceStaticDataSource: [],
                  staticDataSourceCustomContentType: "no",
                  readOnlyStyle: "text",
                  lazyLoading: true,
                  loadingType: "spinner",
                  selectedItemsSorting: "none",
                  tabIndex: void 0,
                  id: DerivedUniqueIdProperty({
                    "widgetId": "p.Administration.MyAccount.comboBox3"
                  })
                }
              )
            ],
            caption: selectTranslation([
              ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "Language" }, "args": {} }
              })
            ]),
            labelFor: DerivedUniqueIdProperty({
              "widgetId": "p.Administration.MyAccount.comboBox3"
            }),
            width: 3,
            orientation: "horizontal",
            hasError: ValidationProperty({
              "inputWidgetId": "p.Administration.MyAccount.comboBox3"
            })
          }
        ),
        /* @__PURE__ */ React.createElement(
          $ConditionalVisibilityWrapper,
          {
            key: "p.Administration.MyAccount.microflowTrigger1$visibility",
            $widgetId: "p.Administration.MyAccount.microflowTrigger1$visibility",
            visible: ExpressionProperty({
              "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Manager" }, { "type": "literal", "value": "Member" }] }, "args": {} }
            }),
            contents: [
              /* @__PURE__ */ React.createElement(
                $ActionButton,
                {
                  key: "p.Administration.MyAccount.microflowTrigger1",
                  $widgetId: "p.Administration.MyAccount.microflowTrigger1",
                  buttonId: "p.Administration.MyAccount.microflowTrigger1",
                  class: "mx-name-microflowTrigger1",
                  style: void 0,
                  tabIndex: void 0,
                  renderType: "button",
                  role: void 0,
                  buttonClass: "btn-default",
                  caption: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Change password" }, "args": {} }
                    })
                  ]),
                  tooltip: TextProperty({
                    "value": selectTranslation([
                      ""
                    ])
                  }),
                  icon: void 0,
                  action: ActionProperty({
                    "action": { "type": "callMicroflow", "argMap": { "Account": { "widget": "$Account", "source": "object" } }, "config": { "operationId": "gjOpcHS/mleQ/3gBcmmpIg", "allowedRoles": ["Manager", "Member"] }, "disabledDuringExecution": false },
                    "abortOnServerValidation": true
                  })
                }
              )
            ]
          }
        )
      ],
      hideFooter: false,
      footer: [
        /* @__PURE__ */ React.createElement(
          $ActionButton,
          {
            key: "p.Administration.MyAccount.saveButton1",
            $widgetId: "p.Administration.MyAccount.saveButton1",
            buttonId: "p.Administration.MyAccount.saveButton1",
            class: "mx-name-saveButton1",
            style: void 0,
            tabIndex: void 0,
            renderType: "button",
            role: void 0,
            buttonClass: "btn-success",
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
              "action": { "type": "saveChanges", "argMap": { "$object": { "widget": "p.Administration.MyAccount.dataView1", "source": "object" } }, "config": { "operationId": "8pkUkNYSB1ayzgwpplQd9Q", "closePage": true }, "disabledDuringExecution": true },
              "abortOnServerValidation": true
            })
          }
        ),
        /* @__PURE__ */ React.createElement(
          $ActionButton,
          {
            key: "p.Administration.MyAccount.cancelButton1",
            $widgetId: "p.Administration.MyAccount.cancelButton1",
            buttonId: "p.Administration.MyAccount.cancelButton1",
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
              "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "+9Ur7aIZgFqeafuQF6YeBg", "closePage": true }, "disabledDuringExecution": true },
              "abortOnServerValidation": true
            })
          }
        )
      ]
    }
  )
]);
const title = selectTranslation([
  "My Account"
]);
const classes = "";
const cancelChangesOperationId = "oA3oEr2GXVGrA70dlXRjKg";
const closeButton = "p.Administration.MyAccount.cancelButton1";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
