import { jsxRuntimeExports, classNames, reactExports, asPluginWidgets, Fragment, selectTranslation } from '../index-CmmNAaD_.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-C-HgUb7V.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-Lvo3cUXR.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-CHQX1JXa.js';
import { AssociationProperty } from '../AssociationProperty-XJpi39f2.js';
import { FormGroup, TextBox, DerivedUniqueIdProperty, ValidationProperty } from '../TextBox-Do0-cbSY.js';
import { DatabaseObjectListProperty } from '../DatabaseObjectListProperty-BT0YTY5Y.js';
import { ListAttributeProperty } from '../ListAttributeProperty-D4skSNMF.js';
import { ComboboxWidgetModule } from '../Combobox-BRPh3CMU.js';
import { DataView } from '../DataView-DHR-h_WZ.js';
import { Div } from '../Div-bo4CfIge.js';
import '../Fragment-CnCEolc0.js';
import { ImageWidgetModule, Text } from '../Text-2bw0AGlh.js';
import { InlineText } from '../InlineText-BNtoJ06u.js';
import { content as content$1 } from '../TaskTracker.FullScreenPopup-CuMN2z_A.js';
import { AttributeProperty } from '../DR_P8f0l-CzNiznAJ.js';
import '../DaFVLkxr-Bkn_Z2yo.js';
import '../D4nQ98US-BSWF3v9H.js';
import '../bdxqAC6d-BxVkIcZq.js';

const Title = (props) => jsxRuntimeExports.jsx("h1", { className: classNames("mx-title", props.class), style: props.style, children: jsxRuntimeExports.jsx(InlineText, { caption: props.caption }) });

const React = { createElement: reactExports.createElement };
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const { $DataView, $Title, $Fragment, $Text, $Div, $FormGroup, $TextBox, $Combobox, $Image, $ActionButton } = asPluginWidgets({ DataView, Title, Fragment, Text, Div, FormGroup, TextBox, Combobox, Image, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $DataView,
    {
      key: "p.TaskTracker.MyAccountViewEdit.dataView1",
      $widgetId: "p.TaskTracker.MyAccountViewEdit.dataView1",
      class: "mx-name-dataView1 form-vertical",
      style: void 0,
      tabIndex: void 0,
      object: AssociationObjectProperty({
        "dataSourceId": "p.7",
        "scope": "$MendixSSOUser",
        "editable": true
      }),
      emptyMessage: TextProperty({
        "value": selectTranslation([
          ""
        ])
      }),
      body: [
        /* @__PURE__ */ React.createElement(
          $Title,
          {
            key: "p.TaskTracker.MyAccountViewEdit.pageTitle1",
            $widgetId: "p.TaskTracker.MyAccountViewEdit.pageTitle1",
            class: "mx-name-pageTitle1",
            style: void 0,
            caption: ExpressionProperty({
              "expression": { "expr": { "type": "variable", "variable": "pageTitle" }, "args": {} }
            })
          }
        ),
        /* @__PURE__ */ React.createElement(
          $Fragment,
          {
            key: "p.TaskTracker.MyAccountViewEdit.snippetCall1",
            $widgetId: "p.TaskTracker.MyAccountViewEdit.snippetCall1",
            content: [
              /* @__PURE__ */ React.createElement(
                $Text,
                {
                  key: "p.TaskTracker.AccountDetailsSnippet.text3",
                  $widgetId: "p.TaskTracker.AccountDetailsSnippet.text3",
                  class: "mx-name-text3 spacing-outer-bottom-medium",
                  style: void 0,
                  caption: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "SSO Details" }, "args": {} }
                    })
                  ]),
                  renderMode: "h3"
                }
              ),
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.TaskTracker.AccountDetailsSnippet.layoutGrid1",
                  $widgetId: "p.TaskTracker.AccountDetailsSnippet.layoutGrid1",
                  class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.TaskTracker.MyAccountViewEdit.layoutGrid1$row0",
                        $widgetId: "p.TaskTracker.MyAccountViewEdit.layoutGrid1$row0",
                        class: "row",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Div,
                            {
                              key: "p.TaskTracker.MyAccountViewEdit.layoutGrid1$row0$column0",
                              $widgetId: "p.TaskTracker.MyAccountViewEdit.layoutGrid1$row0$column0",
                              class: "col-lg-9 col-md col",
                              style: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p.TaskTracker.AccountDetailsSnippet.textBox1$formGroup",
                                    $widgetId: "p.TaskTracker.AccountDetailsSnippet.textBox1$formGroup",
                                    class: "mx-name-textBox1 mx-textbox",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $TextBox,
                                        {
                                          key: "p.TaskTracker.AccountDetailsSnippet.textBox1",
                                          $widgetId: "p.TaskTracker.AccountDetailsSnippet.textBox1",
                                          inputValue: AttributeProperty({
                                            "scope": "$MendixSSOUser",
                                            "path": "",
                                            "entity": "MendixSSO.MendixSSOUser",
                                            "attribute": "DisplayName",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                            "isList": false,
                                            "isEditable": { "expr": { "type": "literal", "value": false }, "args": {} },
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
                                            "widgetId": "p.TaskTracker.AccountDetailsSnippet.textBox1"
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
                                      "widgetId": "p.TaskTracker.AccountDetailsSnippet.textBox1"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.TaskTracker.AccountDetailsSnippet.textBox1"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p.TaskTracker.AccountDetailsSnippet.textBox2$formGroup",
                                    $widgetId: "p.TaskTracker.AccountDetailsSnippet.textBox2$formGroup",
                                    class: "mx-name-textBox2 mx-textbox",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $TextBox,
                                        {
                                          key: "p.TaskTracker.AccountDetailsSnippet.textBox2",
                                          $widgetId: "p.TaskTracker.AccountDetailsSnippet.textBox2",
                                          inputValue: AttributeProperty({
                                            "scope": "$MendixSSOUser",
                                            "path": "",
                                            "entity": "MendixSSO.MendixSSOUser",
                                            "attribute": "EmailAddress",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                            "isList": false,
                                            "isEditable": { "expr": { "type": "literal", "value": false }, "args": {} },
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
                                          maxLength: 500,
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
                                            "widgetId": "p.TaskTracker.AccountDetailsSnippet.textBox2"
                                          })
                                        }
                                      )
                                    ],
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Email Address" }, "args": {} }
                                      })
                                    ]),
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.TaskTracker.AccountDetailsSnippet.textBox2"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.TaskTracker.AccountDetailsSnippet.textBox2"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p.TaskTracker.AccountDetailsSnippet.referenceSetSelector1$formGroup",
                                    $widgetId: "p.TaskTracker.AccountDetailsSnippet.referenceSetSelector1$formGroup",
                                    class: "mx-name-referenceSetSelector1",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $Combobox,
                                        {
                                          key: "p.TaskTracker.AccountDetailsSnippet.referenceSetSelector1",
                                          $widgetId: "p.TaskTracker.AccountDetailsSnippet.referenceSetSelector1",
                                          source: "context",
                                          optionsSourceType: "association",
                                          optionsSourceDatabaseDataSource: void 0,
                                          optionsSourceAssociationCaptionType: "attribute",
                                          optionsSourceDatabaseCaptionType: "attribute",
                                          optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                                            "path": "",
                                            "entity": "System.UserRole",
                                            "attribute": "Name",
                                            "attributeType": "String",
                                            "sortable": true,
                                            "filterable": true,
                                            "dataSourceId": "p.0",
                                            "isList": false
                                          }),
                                          optionsSourceAssociationCaptionExpression: void 0,
                                          attributeAssociation: AssociationProperty({
                                            "type": "ReferenceSet",
                                            "entity": "MendixSSO.MendixSSOUser",
                                            "path": "",
                                            "attribute": "System.UserRoles",
                                            "endpointEntity": "System.UserRole",
                                            "selectableObjectsId": "p.0",
                                            "scope": "$MendixSSOUser",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                          }),
                                          optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                            "dataSourceId": "p.0",
                                            "entity": "System.UserRole",
                                            "scope": "$MendixSSOUser",
                                            "operationId": "ABuVWGY6PFuAy7MVngYmmg",
                                            "sort": []
                                          }),
                                          optionsSourceStaticDataSource: [],
                                          emptyOptionText: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          noOptionsText: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          clearable: true,
                                          optionsSourceAssociationCustomContentType: "no",
                                          optionsSourceAssociationCustomContent: void 0,
                                          optionsSourceDatabaseCustomContentType: "no",
                                          staticDataSourceCustomContentType: "no",
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
                                          readOnlyStyle: "text",
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
                                          lazyLoading: true,
                                          loadingType: "spinner",
                                          selectedItemsSorting: "none",
                                          filterType: "contains",
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p.TaskTracker.AccountDetailsSnippet.referenceSetSelector1"
                                          })
                                        }
                                      )
                                    ],
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "User Role" }, "args": {} }
                                      })
                                    ]),
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.TaskTracker.AccountDetailsSnippet.referenceSetSelector1"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.TaskTracker.AccountDetailsSnippet.referenceSetSelector1"
                                    })
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Div,
                            {
                              key: "p.TaskTracker.MyAccountViewEdit.layoutGrid1$row0$column1",
                              $widgetId: "p.TaskTracker.MyAccountViewEdit.layoutGrid1$row0$column1",
                              class: "col-lg-3 col-md col",
                              style: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Image,
                                  {
                                    key: "p.TaskTracker.AccountDetailsSnippet.image1",
                                    $widgetId: "p.TaskTracker.AccountDetailsSnippet.image1",
                                    datasource: "imageUrl",
                                    imageObject: void 0,
                                    defaultImageDynamic: void 0,
                                    imageUrl: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "variable", "variable": "Account", "path": "AvatarURL" }, "args": { "Account": { "widget": "$MendixSSOUser", "source": "object" } } }
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
                                    responsive: true,
                                    class: "mx-name-image1 img-circle",
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
              ),
              /* @__PURE__ */ React.createElement(
                $Text,
                {
                  key: "p.TaskTracker.AccountDetailsSnippet.text2",
                  $widgetId: "p.TaskTracker.AccountDetailsSnippet.text2",
                  class: "mx-name-text2 spacing-outer-bottom-medium",
                  style: void 0,
                  caption: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Local Details" }, "args": {} }
                    })
                  ]),
                  renderMode: "h3"
                }
              ),
              /* @__PURE__ */ React.createElement(
                $FormGroup,
                {
                  key: "p.TaskTracker.AccountDetailsSnippet.referenceSelector1$formGroup",
                  $widgetId: "p.TaskTracker.AccountDetailsSnippet.referenceSelector1$formGroup",
                  class: "mx-name-referenceSelector1",
                  style: void 0,
                  control: [
                    /* @__PURE__ */ React.createElement(
                      $Combobox,
                      {
                        key: "p.TaskTracker.AccountDetailsSnippet.referenceSelector1",
                        $widgetId: "p.TaskTracker.AccountDetailsSnippet.referenceSelector1",
                        source: "context",
                        optionsSourceType: "association",
                        optionsSourceDatabaseDataSource: void 0,
                        optionsSourceAssociationCaptionType: "attribute",
                        optionsSourceDatabaseCaptionType: "attribute",
                        optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                          "path": "",
                          "entity": "System.Language",
                          "attribute": "Code",
                          "attributeType": "String",
                          "sortable": true,
                          "filterable": true,
                          "dataSourceId": "p.1",
                          "isList": false
                        }),
                        optionsSourceAssociationCaptionExpression: void 0,
                        attributeAssociation: AssociationProperty({
                          "type": "Reference",
                          "entity": "MendixSSO.MendixSSOUser",
                          "path": "",
                          "attribute": "System.User_Language",
                          "endpointEntity": "System.Language",
                          "selectableObjectsId": "p.1",
                          "scope": "$MendixSSOUser",
                          "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                          "isEditable": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Account" }, { "type": "token", "name": "currentUser" }] }, "args": { "Account": { "widget": "$MendixSSOUser", "source": "object" } } }
                        }),
                        optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                          "dataSourceId": "p.1",
                          "entity": "System.Language",
                          "scope": "$MendixSSOUser",
                          "operationId": "2/qWWzXlpVmXBcSgbR60ow",
                          "sort": []
                        }),
                        optionsSourceStaticDataSource: [],
                        emptyOptionText: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                          })
                        ]),
                        noOptionsText: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                          })
                        ]),
                        clearable: true,
                        optionsSourceAssociationCustomContentType: "no",
                        optionsSourceAssociationCustomContent: void 0,
                        optionsSourceDatabaseCustomContentType: "no",
                        staticDataSourceCustomContentType: "no",
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
                        readOnlyStyle: "text",
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
                        lazyLoading: true,
                        loadingType: "spinner",
                        selectedItemsSorting: "none",
                        filterType: "contains",
                        tabIndex: void 0,
                        id: DerivedUniqueIdProperty({
                          "widgetId": "p.TaskTracker.AccountDetailsSnippet.referenceSelector1"
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
                    "widgetId": "p.TaskTracker.AccountDetailsSnippet.referenceSelector1"
                  }),
                  width: void 0,
                  orientation: "vertical",
                  hasError: ValidationProperty({
                    "inputWidgetId": "p.TaskTracker.AccountDetailsSnippet.referenceSelector1"
                  })
                }
              ),
              /* @__PURE__ */ React.createElement(
                $FormGroup,
                {
                  key: "p.TaskTracker.AccountDetailsSnippet.referenceSelector2$formGroup",
                  $widgetId: "p.TaskTracker.AccountDetailsSnippet.referenceSelector2$formGroup",
                  class: "mx-name-referenceSelector2",
                  style: void 0,
                  control: [
                    /* @__PURE__ */ React.createElement(
                      $Combobox,
                      {
                        key: "p.TaskTracker.AccountDetailsSnippet.referenceSelector2",
                        $widgetId: "p.TaskTracker.AccountDetailsSnippet.referenceSelector2",
                        source: "context",
                        optionsSourceType: "association",
                        optionsSourceDatabaseDataSource: void 0,
                        optionsSourceAssociationCaptionType: "attribute",
                        optionsSourceDatabaseCaptionType: "attribute",
                        optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                          "path": "",
                          "entity": "System.TimeZone",
                          "attribute": "Code",
                          "attributeType": "String",
                          "sortable": true,
                          "filterable": true,
                          "dataSourceId": "p.2",
                          "isList": false
                        }),
                        optionsSourceAssociationCaptionExpression: void 0,
                        attributeAssociation: AssociationProperty({
                          "type": "Reference",
                          "entity": "MendixSSO.MendixSSOUser",
                          "path": "",
                          "attribute": "System.User_TimeZone",
                          "endpointEntity": "System.TimeZone",
                          "selectableObjectsId": "p.2",
                          "scope": "$MendixSSOUser",
                          "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                          "isEditable": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Account" }, { "type": "token", "name": "currentUser" }] }, "args": { "Account": { "widget": "$MendixSSOUser", "source": "object" } } }
                        }),
                        optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                          "dataSourceId": "p.2",
                          "entity": "System.TimeZone",
                          "scope": "$MendixSSOUser",
                          "operationId": "cKdheHznY1O7e5XuO/T+AA",
                          "sort": []
                        }),
                        optionsSourceStaticDataSource: [],
                        emptyOptionText: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                          })
                        ]),
                        noOptionsText: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                          })
                        ]),
                        clearable: true,
                        optionsSourceAssociationCustomContentType: "no",
                        optionsSourceAssociationCustomContent: void 0,
                        optionsSourceDatabaseCustomContentType: "no",
                        staticDataSourceCustomContentType: "no",
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
                        readOnlyStyle: "text",
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
                        lazyLoading: true,
                        loadingType: "spinner",
                        selectedItemsSorting: "none",
                        filterType: "contains",
                        tabIndex: void 0,
                        id: DerivedUniqueIdProperty({
                          "widgetId": "p.TaskTracker.AccountDetailsSnippet.referenceSelector2"
                        })
                      }
                    )
                  ],
                  caption: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Time Zone" }, "args": {} }
                    })
                  ]),
                  labelFor: DerivedUniqueIdProperty({
                    "widgetId": "p.TaskTracker.AccountDetailsSnippet.referenceSelector2"
                  }),
                  width: void 0,
                  orientation: "vertical",
                  hasError: ValidationProperty({
                    "inputWidgetId": "p.TaskTracker.AccountDetailsSnippet.referenceSelector2"
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
            key: "p.TaskTracker.MyAccountViewEdit.cancelButton2",
            $widgetId: "p.TaskTracker.MyAccountViewEdit.cancelButton2",
            buttonId: "p.TaskTracker.MyAccountViewEdit.cancelButton2",
            class: "mx-name-cancelButton2 btn-lg btn-block",
            style: void 0,
            tabIndex: void 0,
            renderType: "button",
            role: void 0,
            buttonClass: "btn-default",
            caption: selectTranslation([
              ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "Close" }, "args": {} }
              })
            ]),
            tooltip: TextProperty({
              "value": selectTranslation([
                ""
              ])
            }),
            icon: void 0,
            action: ActionProperty({
              "action": { "type": "closePage", "argMap": {}, "config": {}, "disabledDuringExecution": true },
              "abortOnServerValidation": true
            })
          }
        )
      ]
    }
  )
]);
const title = selectTranslation([
  "Member"
]);
const classes = "fullscreen mx-window-view";
const url = "/p/user/{MendixSSOUser/Id}";
const cancelChangesOperationId = "+5J3sh41FVquJr82TUaV4g";
const style = {};
const content = {
  ...content$1,
  "TaskTracker.FullScreenPopup.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title, url };
