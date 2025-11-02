import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { AssociationProperty } from "mendix/AssociationProperty";
import { AttributeProperty } from "mendix/AttributeProperty";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListAttributeProperty } from "mendix/ListAttributeProperty";
import { TextProperty } from "mendix/TextProperty";
import { ValidationProperty } from "mendix/ValidationProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import * as ComboboxWidgetModule from "C:/Users/TaraR/Mendix/TaskApp/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.mjs";
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;   
import "C:/Users/TaraR/Mendix/TaskApp/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.css";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { Fragment } from "mendix/widgets/web/Fragment";
import * as ImageWidgetModule from "C:/Users/TaraR/Mendix/TaskApp/deployment/web/widgets/com/mendix/widget/web/image/Image.mjs";
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;   
import "C:/Users/TaraR/Mendix/TaskApp/deployment/web/widgets/com/mendix/widget/web/image/Image.css";
import { Text } from "mendix/widgets/web/Text";
import { TextBox } from "mendix/widgets/web/TextBox";
import { Title } from "mendix/widgets/web/Title";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/TaskTracker.FullScreenPopup.js";

const { $DataView, $Title, $Fragment, $Text, $Div, $FormGroup, $TextBox, $Combobox, $Image, $ActionButton } = asPluginWidgets({ DataView, Title, Fragment, Text, Div, FormGroup, TextBox, Combobox, Image, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$DataView key="p.TaskTracker.MyAccountViewEdit.dataView1"
        $widgetId="p.TaskTracker.MyAccountViewEdit.dataView1"
        class={"mx-name-dataView1 form-vertical"}
        style={undefined}
        tabIndex={undefined}
        object={AssociationObjectProperty({
            "dataSourceId": "p.7",
            "scope": "$MendixSSOUser",
            "editable": true
        })}
        emptyMessage={TextProperty({
            "value": t([
                ""
            ])
        })}
        body={[
            <$Title key="p.TaskTracker.MyAccountViewEdit.pageTitle1"
                $widgetId="p.TaskTracker.MyAccountViewEdit.pageTitle1"
                class={"mx-name-pageTitle1"}
                style={undefined}
                caption={ExpressionProperty({
                    "expression": { "expr": { "type": "variable", "variable": "pageTitle" }, "args": {} }
                })} />,
            <$Fragment key="p.TaskTracker.MyAccountViewEdit.snippetCall1"
                $widgetId="p.TaskTracker.MyAccountViewEdit.snippetCall1"
                content={[
                    <$Text key="p.TaskTracker.AccountDetailsSnippet.text3"
                        $widgetId="p.TaskTracker.AccountDetailsSnippet.text3"
                        class={"mx-name-text3 spacing-outer-bottom-medium"}
                        style={undefined}
                        caption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "SSO Details" }, "args": {} }
                            })
                        ])}
                        renderMode={"h3"} />,
                    <$Div key="p.TaskTracker.AccountDetailsSnippet.layoutGrid1"
                        $widgetId="p.TaskTracker.AccountDetailsSnippet.layoutGrid1"
                        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
                        style={undefined}
                        content={[
                            <$Div key="p.TaskTracker.MyAccountViewEdit.layoutGrid1$row0"
                                $widgetId="p.TaskTracker.MyAccountViewEdit.layoutGrid1$row0"
                                class={"row"}
                                style={undefined}
                                content={[
                                    <$Div key="p.TaskTracker.MyAccountViewEdit.layoutGrid1$row0$column0"
                                        $widgetId="p.TaskTracker.MyAccountViewEdit.layoutGrid1$row0$column0"
                                        class={"col-lg-9 col-md col"}
                                        style={undefined}
                                        content={[
                                            <$FormGroup key="p.TaskTracker.AccountDetailsSnippet.textBox1$formGroup"
                                                $widgetId="p.TaskTracker.AccountDetailsSnippet.textBox1$formGroup"
                                                class={"mx-name-textBox1 mx-textbox"}
                                                style={undefined}
                                                control={[
                                                    <$TextBox key="p.TaskTracker.AccountDetailsSnippet.textBox1"
                                                        $widgetId="p.TaskTracker.AccountDetailsSnippet.textBox1"
                                                        inputValue={AttributeProperty({
                                                            "scope": "$MendixSSOUser",
                                                            "path": "",
                                                            "entity": "MendixSSO.MendixSSOUser",
                                                            "attribute": "DisplayName",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                            "isList": false,
                                                            "isEditable": { "expr": { "type": "literal", "value": false }, "args": {} },
                                                            "validation": null,
                                                            "formatting": { }
                                                        })}
                                                        isPassword={false}
                                                        placeholder={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        mask={""}
                                                        readOnlyStyle={"text"}
                                                        maxLength={200}
                                                        onEnter={undefined}
                                                        onLeave={undefined}
                                                        onEnterKeyPress={undefined}
                                                        ariaLabel={undefined}
                                                        autocomplete={"on"}
                                                        submitWhileEditing={false}
                                                        submitDelay={300}
                                                        ariaRequired={undefined}
                                                        tabIndex={undefined}
                                                        id={DerivedUniqueIdProperty({
                                                            "widgetId": "p.TaskTracker.AccountDetailsSnippet.textBox1"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Name" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p.TaskTracker.AccountDetailsSnippet.textBox1"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p.TaskTracker.AccountDetailsSnippet.textBox1"
                                                })} />,
                                            <$FormGroup key="p.TaskTracker.AccountDetailsSnippet.textBox2$formGroup"
                                                $widgetId="p.TaskTracker.AccountDetailsSnippet.textBox2$formGroup"
                                                class={"mx-name-textBox2 mx-textbox"}
                                                style={undefined}
                                                control={[
                                                    <$TextBox key="p.TaskTracker.AccountDetailsSnippet.textBox2"
                                                        $widgetId="p.TaskTracker.AccountDetailsSnippet.textBox2"
                                                        inputValue={AttributeProperty({
                                                            "scope": "$MendixSSOUser",
                                                            "path": "",
                                                            "entity": "MendixSSO.MendixSSOUser",
                                                            "attribute": "EmailAddress",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                            "isList": false,
                                                            "isEditable": { "expr": { "type": "literal", "value": false }, "args": {} },
                                                            "validation": null,
                                                            "formatting": { }
                                                        })}
                                                        isPassword={false}
                                                        placeholder={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        mask={""}
                                                        readOnlyStyle={"text"}
                                                        maxLength={500}
                                                        onEnter={undefined}
                                                        onLeave={undefined}
                                                        onEnterKeyPress={undefined}
                                                        ariaLabel={undefined}
                                                        autocomplete={"on"}
                                                        submitWhileEditing={false}
                                                        submitDelay={300}
                                                        ariaRequired={undefined}
                                                        tabIndex={undefined}
                                                        id={DerivedUniqueIdProperty({
                                                            "widgetId": "p.TaskTracker.AccountDetailsSnippet.textBox2"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Email Address" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p.TaskTracker.AccountDetailsSnippet.textBox2"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p.TaskTracker.AccountDetailsSnippet.textBox2"
                                                })} />,
                                            <$FormGroup key="p.TaskTracker.AccountDetailsSnippet.referenceSetSelector1$formGroup"
                                                $widgetId="p.TaskTracker.AccountDetailsSnippet.referenceSetSelector1$formGroup"
                                                class={"mx-name-referenceSetSelector1"}
                                                style={undefined}
                                                control={[
                                                    <$Combobox key="p.TaskTracker.AccountDetailsSnippet.referenceSetSelector1"
                                                        $widgetId="p.TaskTracker.AccountDetailsSnippet.referenceSetSelector1"
                                                        source={"context"}
                                                        optionsSourceType={"association"}
                                                        optionsSourceDatabaseDataSource={undefined}
                                                        optionsSourceAssociationCaptionType={"attribute"}
                                                        optionsSourceDatabaseCaptionType={"attribute"}
                                                        optionsSourceAssociationCaptionAttribute={ListAttributeProperty({
                                                            "path": "",
                                                            "entity": "System.UserRole",
                                                            "attribute": "Name",
                                                            "attributeType": "String",
                                                            "sortable": true,
                                                            "filterable": true,
                                                            "dataSourceId": "p.0",
                                                            "isList": false
                                                        })}
                                                        optionsSourceAssociationCaptionExpression={undefined}
                                                        attributeAssociation={AssociationProperty({
                                                            "type": "ReferenceSet",
                                                            "entity": "MendixSSO.MendixSSOUser",
                                                            "path": "",
                                                            "attribute": "System.UserRoles",
                                                            "endpointEntity": "System.UserRole",
                                                            "selectableObjectsId": "p.0",
                                                            "scope": "$MendixSSOUser",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                        })}
                                                        optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                                            "dataSourceId": "p.0",
                                                            "entity": "System.UserRole",
                                                            "scope": "$MendixSSOUser",
                                                            "operationId": "ABuVWGY6PFuAy7MVngYmmg",
                                                            "sort": []
                                                        })}
                                                        optionsSourceStaticDataSource={[]}
                                                        emptyOptionText={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        noOptionsText={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        clearable={true}
                                                        optionsSourceAssociationCustomContentType={"no"}
                                                        optionsSourceAssociationCustomContent={undefined}
                                                        optionsSourceDatabaseCustomContentType={"no"}
                                                        staticDataSourceCustomContentType={"no"}
                                                        showFooter={false}
                                                        menuFooterContent={undefined}
                                                        selectionMethod={"checkbox"}
                                                        selectedItemsStyle={"text"}
                                                        selectAllButton={false}
                                                        selectAllButtonCaption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                                            })
                                                        ])}
                                                        readOnlyStyle={"text"}
                                                        onChangeEvent={undefined}
                                                        onEnterEvent={undefined}
                                                        onLeaveEvent={undefined}
                                                        ariaRequired={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                                                        })}
                                                        clearButtonAriaLabel={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                                            })
                                                        ])}
                                                        removeValueAriaLabel={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                                                            })
                                                        ])}
                                                        a11ySelectedValue={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                                                            })
                                                        ])}
                                                        a11yOptionsAvailable={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                                                            })
                                                        ])}
                                                        a11yInstructions={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                                                            })
                                                        ])}
                                                        lazyLoading={true}
                                                        loadingType={"spinner"}
                                                        selectedItemsSorting={"none"}
                                                        filterType={"contains"}
                                                        tabIndex={undefined}
                                                        id={DerivedUniqueIdProperty({
                                                            "widgetId": "p.TaskTracker.AccountDetailsSnippet.referenceSetSelector1"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "User Role" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p.TaskTracker.AccountDetailsSnippet.referenceSetSelector1"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p.TaskTracker.AccountDetailsSnippet.referenceSetSelector1"
                                                })} />
                                        ]} />,
                                    <$Div key="p.TaskTracker.MyAccountViewEdit.layoutGrid1$row0$column1"
                                        $widgetId="p.TaskTracker.MyAccountViewEdit.layoutGrid1$row0$column1"
                                        class={"col-lg-3 col-md col"}
                                        style={undefined}
                                        content={[
                                            <$Image key="p.TaskTracker.AccountDetailsSnippet.image1"
                                                $widgetId="p.TaskTracker.AccountDetailsSnippet.image1"
                                                datasource={"imageUrl"}
                                                imageObject={undefined}
                                                defaultImageDynamic={undefined}
                                                imageUrl={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "variable", "variable": "Account", "path": "AvatarURL" }, "args": { "Account": { "widget": "$MendixSSOUser", "source": "object" } } }
                                                    })
                                                ])}
                                                imageIcon={undefined}
                                                isBackgroundImage={false}
                                                children={undefined}
                                                onClickType={"action"}
                                                onClick={undefined}
                                                alternativeText={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                widthUnit={"auto"}
                                                width={100}
                                                heightUnit={"auto"}
                                                height={100}
                                                iconSize={14}
                                                displayAs={"fullImage"}
                                                responsive={true}
                                                class={"mx-name-image1 img-circle"}
                                                style={undefined}
                                                tabIndex={undefined} />
                                        ]} />
                                ]} />
                        ]} />,
                    <$Text key="p.TaskTracker.AccountDetailsSnippet.text2"
                        $widgetId="p.TaskTracker.AccountDetailsSnippet.text2"
                        class={"mx-name-text2 spacing-outer-bottom-medium"}
                        style={undefined}
                        caption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Local Details" }, "args": {} }
                            })
                        ])}
                        renderMode={"h3"} />,
                    <$FormGroup key="p.TaskTracker.AccountDetailsSnippet.referenceSelector1$formGroup"
                        $widgetId="p.TaskTracker.AccountDetailsSnippet.referenceSelector1$formGroup"
                        class={"mx-name-referenceSelector1"}
                        style={undefined}
                        control={[
                            <$Combobox key="p.TaskTracker.AccountDetailsSnippet.referenceSelector1"
                                $widgetId="p.TaskTracker.AccountDetailsSnippet.referenceSelector1"
                                source={"context"}
                                optionsSourceType={"association"}
                                optionsSourceDatabaseDataSource={undefined}
                                optionsSourceAssociationCaptionType={"attribute"}
                                optionsSourceDatabaseCaptionType={"attribute"}
                                optionsSourceAssociationCaptionAttribute={ListAttributeProperty({
                                    "path": "",
                                    "entity": "System.Language",
                                    "attribute": "Code",
                                    "attributeType": "String",
                                    "sortable": true,
                                    "filterable": true,
                                    "dataSourceId": "p.1",
                                    "isList": false
                                })}
                                optionsSourceAssociationCaptionExpression={undefined}
                                attributeAssociation={AssociationProperty({
                                    "type": "Reference",
                                    "entity": "MendixSSO.MendixSSOUser",
                                    "path": "",
                                    "attribute": "System.User_Language",
                                    "endpointEntity": "System.Language",
                                    "selectableObjectsId": "p.1",
                                    "scope": "$MendixSSOUser",
                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                    "isEditable": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "Account" }, { "type": "token", "name": "currentUser" } ] }, "args": { "Account": { "widget": "$MendixSSOUser", "source": "object" } } }
                                })}
                                optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                    "dataSourceId": "p.1",
                                    "entity": "System.Language",
                                    "scope": "$MendixSSOUser",
                                    "operationId": "2/qWWzXlpVmXBcSgbR60ow",
                                    "sort": []
                                })}
                                optionsSourceStaticDataSource={[]}
                                emptyOptionText={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                ])}
                                noOptionsText={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                ])}
                                clearable={true}
                                optionsSourceAssociationCustomContentType={"no"}
                                optionsSourceAssociationCustomContent={undefined}
                                optionsSourceDatabaseCustomContentType={"no"}
                                staticDataSourceCustomContentType={"no"}
                                showFooter={false}
                                menuFooterContent={undefined}
                                selectionMethod={"checkbox"}
                                selectedItemsStyle={"text"}
                                selectAllButton={false}
                                selectAllButtonCaption={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                    })
                                ])}
                                readOnlyStyle={"text"}
                                onChangeEvent={undefined}
                                onEnterEvent={undefined}
                                onLeaveEvent={undefined}
                                ariaRequired={ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                                })}
                                clearButtonAriaLabel={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                    })
                                ])}
                                removeValueAriaLabel={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                                    })
                                ])}
                                a11ySelectedValue={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                                    })
                                ])}
                                a11yOptionsAvailable={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                                    })
                                ])}
                                a11yInstructions={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                                    })
                                ])}
                                lazyLoading={true}
                                loadingType={"spinner"}
                                selectedItemsSorting={"none"}
                                filterType={"contains"}
                                tabIndex={undefined}
                                id={DerivedUniqueIdProperty({
                                    "widgetId": "p.TaskTracker.AccountDetailsSnippet.referenceSelector1"
                                })} />
                        ]}
                        caption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Language" }, "args": {} }
                            })
                        ])}
                        labelFor={DerivedUniqueIdProperty({
                            "widgetId": "p.TaskTracker.AccountDetailsSnippet.referenceSelector1"
                        })}
                        width={undefined}
                        orientation={"vertical"}
                        hasError={ValidationProperty({
                            "inputWidgetId": "p.TaskTracker.AccountDetailsSnippet.referenceSelector1"
                        })} />,
                    <$FormGroup key="p.TaskTracker.AccountDetailsSnippet.referenceSelector2$formGroup"
                        $widgetId="p.TaskTracker.AccountDetailsSnippet.referenceSelector2$formGroup"
                        class={"mx-name-referenceSelector2"}
                        style={undefined}
                        control={[
                            <$Combobox key="p.TaskTracker.AccountDetailsSnippet.referenceSelector2"
                                $widgetId="p.TaskTracker.AccountDetailsSnippet.referenceSelector2"
                                source={"context"}
                                optionsSourceType={"association"}
                                optionsSourceDatabaseDataSource={undefined}
                                optionsSourceAssociationCaptionType={"attribute"}
                                optionsSourceDatabaseCaptionType={"attribute"}
                                optionsSourceAssociationCaptionAttribute={ListAttributeProperty({
                                    "path": "",
                                    "entity": "System.TimeZone",
                                    "attribute": "Code",
                                    "attributeType": "String",
                                    "sortable": true,
                                    "filterable": true,
                                    "dataSourceId": "p.2",
                                    "isList": false
                                })}
                                optionsSourceAssociationCaptionExpression={undefined}
                                attributeAssociation={AssociationProperty({
                                    "type": "Reference",
                                    "entity": "MendixSSO.MendixSSOUser",
                                    "path": "",
                                    "attribute": "System.User_TimeZone",
                                    "endpointEntity": "System.TimeZone",
                                    "selectableObjectsId": "p.2",
                                    "scope": "$MendixSSOUser",
                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                    "isEditable": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "Account" }, { "type": "token", "name": "currentUser" } ] }, "args": { "Account": { "widget": "$MendixSSOUser", "source": "object" } } }
                                })}
                                optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                    "dataSourceId": "p.2",
                                    "entity": "System.TimeZone",
                                    "scope": "$MendixSSOUser",
                                    "operationId": "cKdheHznY1O7e5XuO/T+AA",
                                    "sort": []
                                })}
                                optionsSourceStaticDataSource={[]}
                                emptyOptionText={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                ])}
                                noOptionsText={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                ])}
                                clearable={true}
                                optionsSourceAssociationCustomContentType={"no"}
                                optionsSourceAssociationCustomContent={undefined}
                                optionsSourceDatabaseCustomContentType={"no"}
                                staticDataSourceCustomContentType={"no"}
                                showFooter={false}
                                menuFooterContent={undefined}
                                selectionMethod={"checkbox"}
                                selectedItemsStyle={"text"}
                                selectAllButton={false}
                                selectAllButtonCaption={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                    })
                                ])}
                                readOnlyStyle={"text"}
                                onChangeEvent={undefined}
                                onEnterEvent={undefined}
                                onLeaveEvent={undefined}
                                ariaRequired={ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                                })}
                                clearButtonAriaLabel={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                    })
                                ])}
                                removeValueAriaLabel={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                                    })
                                ])}
                                a11ySelectedValue={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                                    })
                                ])}
                                a11yOptionsAvailable={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                                    })
                                ])}
                                a11yInstructions={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                                    })
                                ])}
                                lazyLoading={true}
                                loadingType={"spinner"}
                                selectedItemsSorting={"none"}
                                filterType={"contains"}
                                tabIndex={undefined}
                                id={DerivedUniqueIdProperty({
                                    "widgetId": "p.TaskTracker.AccountDetailsSnippet.referenceSelector2"
                                })} />
                        ]}
                        caption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Time Zone" }, "args": {} }
                            })
                        ])}
                        labelFor={DerivedUniqueIdProperty({
                            "widgetId": "p.TaskTracker.AccountDetailsSnippet.referenceSelector2"
                        })}
                        width={undefined}
                        orientation={"vertical"}
                        hasError={ValidationProperty({
                            "inputWidgetId": "p.TaskTracker.AccountDetailsSnippet.referenceSelector2"
                        })} />
                ]} />
        ]}
        hideFooter={false}
        footer={[
            <$ActionButton key="p.TaskTracker.MyAccountViewEdit.cancelButton2"
                $widgetId="p.TaskTracker.MyAccountViewEdit.cancelButton2"
                buttonId={"p.TaskTracker.MyAccountViewEdit.cancelButton2"}
                class={"mx-name-cancelButton2 btn-lg btn-block"}
                style={undefined}
                tabIndex={undefined}
                renderType={"button"}
                role={undefined}
                buttonClass={"btn-default"}
                caption={t([
                    ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Close" }, "args": {} }
                    })
                ])}
                tooltip={TextProperty({
                    "value": t([
                        ""
                    ])
                })}
                icon={undefined}
                action={ActionProperty({
                    "action": { "type": "closePage", "argMap": {}, "config": {}, "disabledDuringExecution": true },
                    "abortOnServerValidation": true
                })} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Member"
]);

export const classes = "fullscreen mx-window-view";

export const url = "/p/user/{MendixSSOUser/Id}";
export const cancelChangesOperationId = "+5J3sh41FVquJr82TUaV4g";
export const style = {};
export const content = { ...parentContent,
    "TaskTracker.FullScreenPopup.Main": region$Main,
};
