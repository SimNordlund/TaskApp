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
import { FileUploadProperty } from "mendix/FileUploadProperty";
import { ListAttributeProperty } from "mendix/ListAttributeProperty";
import { MicroflowObjectListProperty } from "mendix/MicroflowObjectListProperty";
import { MicroflowObjectProperty } from "mendix/MicroflowObjectProperty";
import { TemplatedWidgetProperty } from "mendix/TemplatedWidgetProperty";
import { TextProperty } from "mendix/TextProperty";
import { ValidationProperty } from "mendix/ValidationProperty";
import { WebStaticImageProperty } from "mendix/WebStaticImageProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import * as ComboboxWidgetModule from "C:/Users/TaraR/Mendix/TaskApp/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.mjs";
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;   
import "C:/Users/TaraR/Mendix/TaskApp/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.css";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/web/Container";
import { DataView } from "mendix/widgets/web/DataView";
import { DatePicker } from "mendix/widgets/web/DatePicker";
import { Div } from "mendix/widgets/web/Div";
import { FileManager } from "mendix/widgets/web/FileManager";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { GroupBox } from "mendix/widgets/web/GroupBox";
import * as ImageWidgetModule from "C:/Users/TaraR/Mendix/TaskApp/deployment/web/widgets/com/mendix/widget/web/image/Image.mjs";
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;   
import "C:/Users/TaraR/Mendix/TaskApp/deployment/web/widgets/com/mendix/widget/web/image/Image.css";
import { ListView } from "mendix/widgets/web/ListView";
import { Text } from "mendix/widgets/web/Text";
import { TextArea } from "mendix/widgets/web/TextArea";
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/TaskTracker.FullScreenPopup.js";

const { $DataView, $FormGroup, $TextBox, $ConditionalVisibilityWrapper, $Combobox, $TextArea, $DatePicker, $Container, $Text, $Div, $ActionButton, $Image, $GroupBox, $ListView, $FileManager } = asPluginWidgets({ DataView, FormGroup, TextBox, ConditionalVisibilityWrapper, Combobox, TextArea, DatePicker, Container, Text, Div, ActionButton, Image, GroupBox, ListView, FileManager });

addEnumerations({
    "TaskTracker.ENUM_Priority": [
        [
            "High",
            t([
                "High"
            ])
        ],
        [
            "Medium",
            t([
                "Medium"
            ])
        ],
        [
            "Low",
            t([
                "Low"
            ])
        ]
    ],
    "TaskTracker.ENUM_Status": [
        [
            "To_Do",
            t([
                "To Do"
            ])
        ],
        [
            "Running",
            t([
                "Running"
            ])
        ],
        [
            "Review",
            t([
                "Review"
            ])
        ],
        [
            "Done",
            t([
                "Done"
            ])
        ]
    ]
});

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$DataView key="p.TaskTracker.TaskEdit.dataView1"
        $widgetId="p.TaskTracker.TaskEdit.dataView1"
        class={"mx-name-dataView1 form-vertical"}
        style={undefined}
        tabIndex={undefined}
        object={AssociationObjectProperty({
            "dataSourceId": "p.24",
            "scope": "$Task",
            "editable": true
        })}
        emptyMessage={TextProperty({
            "value": t([
                ""
            ])
        })}
        body={[
            <$FormGroup key="p.TaskTracker.TaskEdit.textBox1$formGroup"
                $widgetId="p.TaskTracker.TaskEdit.textBox1$formGroup"
                class={"mx-name-textBox1 mx-textbox"}
                style={undefined}
                control={[
                    <$TextBox key="p.TaskTracker.TaskEdit.textBox1"
                        $widgetId="p.TaskTracker.TaskEdit.textBox1"
                        inputValue={AttributeProperty({
                            "scope": "p.TaskTracker.TaskEdit.dataView1",
                            "path": "",
                            "entity": "TaskTracker.Task",
                            "attribute": "Title",
                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                            "isList": false,
                            "validation": null,
                            "formatting": { }
                        })}
                        isPassword={false}
                        placeholder={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Task title..." }, "args": {} }
                            })
                        ])}
                        mask={""}
                        readOnlyStyle={"control"}
                        maxLength={200}
                        onEnter={undefined}
                        onLeave={ActionProperty({
                            "action": { "type": "callMicroflow", "argMap": { "Task": { "widget": "$Task", "source": "object" } }, "config": { "operationId": "Ue/NU8W7cVG98NT4kSB5kw", "validate": "view", "allowedRoles": [ "Manager", "Member" ] }, "disabledDuringExecution": false }
                        })}
                        onEnterKeyPress={undefined}
                        ariaLabel={undefined}
                        autocomplete={"on"}
                        submitWhileEditing={false}
                        submitDelay={300}
                        ariaRequired={undefined}
                        tabIndex={undefined}
                        id={DerivedUniqueIdProperty({
                            "widgetId": "p.TaskTracker.TaskEdit.textBox1"
                        })} />
                ]}
                caption={t([
                    ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Title" }, "args": {} }
                    })
                ])}
                labelFor={DerivedUniqueIdProperty({
                    "widgetId": "p.TaskTracker.TaskEdit.textBox1"
                })}
                width={undefined}
                orientation={"vertical"}
                hasError={ValidationProperty({
                    "inputWidgetId": "p.TaskTracker.TaskEdit.textBox1"
                })} />,
            <$ConditionalVisibilityWrapper key="p.TaskTracker.TaskEdit.comboBox1$formGroup$visibility"
                $widgetId="p.TaskTracker.TaskEdit.comboBox1$formGroup$visibility"
                visible={ExpressionProperty({
                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Manager" }, { "type": "literal", "value": "Member" } ] }, "args": {} }
                })}
                contents={[
                    <$FormGroup key="p.TaskTracker.TaskEdit.comboBox1$formGroup"
                        $widgetId="p.TaskTracker.TaskEdit.comboBox1$formGroup"
                        class={"mx-name-comboBox1"}
                        style={undefined}
                        control={[
                            <$Combobox key="p.TaskTracker.TaskEdit.comboBox1"
                                $widgetId="p.TaskTracker.TaskEdit.comboBox1"
                                source={"context"}
                                optionsSourceType={"association"}
                                optionsSourceDatabaseDataSource={undefined}
                                optionsSourceAssociationCaptionType={"attribute"}
                                optionsSourceDatabaseCaptionType={"attribute"}
                                optionsSourceAssociationCaptionAttribute={ListAttributeProperty({
                                    "path": "",
                                    "entity": "TaskTracker.Department",
                                    "attribute": "Name",
                                    "attributeType": "String",
                                    "sortable": true,
                                    "filterable": true,
                                    "dataSourceId": "p.0",
                                    "isList": false
                                })}
                                optionsSourceAssociationCaptionExpression={undefined}
                                attributeAssociation={AssociationProperty({
                                    "type": "Reference",
                                    "entity": "TaskTracker.Task",
                                    "path": "",
                                    "attribute": "TaskTracker.Task_Department",
                                    "endpointEntity": "TaskTracker.Department",
                                    "selectableObjectsId": "p.0",
                                    "scope": "p.TaskTracker.TaskEdit.dataView1",
                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                })}
                                optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                    "dataSourceId": "p.0",
                                    "entity": "TaskTracker.Department",
                                    "scope": "p.TaskTracker.TaskEdit.dataView1",
                                    "operationId": "pn/E9ypVtl6bmnXBIVAXuQ",
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
                                    "widgetId": "p.TaskTracker.TaskEdit.comboBox1"
                                })} />
                        ]}
                        caption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Department" }, "args": {} }
                            })
                        ])}
                        labelFor={DerivedUniqueIdProperty({
                            "widgetId": "p.TaskTracker.TaskEdit.comboBox1"
                        })}
                        width={undefined}
                        orientation={"vertical"}
                        hasError={ValidationProperty({
                            "inputWidgetId": "p.TaskTracker.TaskEdit.comboBox1"
                        })} />
                ]} />,
            <$FormGroup key="p.TaskTracker.TaskEdit.textArea1$formGroup"
                $widgetId="p.TaskTracker.TaskEdit.textArea1$formGroup"
                class={"mx-name-textArea1 mx-textarea"}
                style={undefined}
                control={[
                    <$TextArea key="p.TaskTracker.TaskEdit.textArea1"
                        $widgetId="p.TaskTracker.TaskEdit.textArea1"
                        inputValue={AttributeProperty({
                            "scope": "p.TaskTracker.TaskEdit.dataView1",
                            "path": "",
                            "entity": "TaskTracker.Task",
                            "attribute": "Description",
                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                            "isList": false,
                            "validation": null
                        })}
                        counterMessage={undefined}
                        maxLength={undefined}
                        numberOfLines={5}
                        autoGrow={false}
                        placeholder={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Task description..." }, "args": {} }
                            })
                        ])}
                        readOnlyStyle={"control"}
                        textTooLongMessage={undefined}
                        onEnter={undefined}
                        onLeave={undefined}
                        ariaLabel={undefined}
                        ariaRequired={undefined}
                        submitWhileEditing={false}
                        submitDelay={300}
                        tabIndex={undefined}
                        id={DerivedUniqueIdProperty({
                            "widgetId": "p.TaskTracker.TaskEdit.textArea1"
                        })} />
                ]}
                caption={t([
                    ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Description" }, "args": {} }
                    })
                ])}
                labelFor={DerivedUniqueIdProperty({
                    "widgetId": "p.TaskTracker.TaskEdit.textArea1"
                })}
                width={undefined}
                orientation={"vertical"}
                hasError={ValidationProperty({
                    "inputWidgetId": "p.TaskTracker.TaskEdit.textArea1"
                })} />,
            <$FormGroup key="p.TaskTracker.TaskEdit.datePicker1$formGroup"
                $widgetId="p.TaskTracker.TaskEdit.datePicker1$formGroup"
                class={"mx-name-datePicker1 mx-datepicker"}
                style={undefined}
                control={[
                    <$DatePicker key="p.TaskTracker.TaskEdit.datePicker1"
                        $widgetId="p.TaskTracker.TaskEdit.datePicker1"
                        mode={"date"}
                        showCalendarButton={true}
                        inputValue={AttributeProperty({
                            "scope": "p.TaskTracker.TaskEdit.dataView1",
                            "path": "",
                            "entity": "TaskTracker.Task",
                            "attribute": "DueDate",
                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                            "isList": false,
                            "validation": null,
                            "formatting": {
                                "dateFormat": t([
                                    {
                                        "type": "date"
                                    }
                                ])
                            }
                        })}
                        placeholder={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                            })
                        ])}
                        buttonLabel={TextProperty({
                            "value": t([
                                "Show date picker"
                            ])
                        })}
                        readOnlyStyle={"control"}
                        onEnter={undefined}
                        onLeave={undefined}
                        ariaLabel={undefined}
                        ariaRequired={undefined}
                        tabIndex={undefined}
                        id={DerivedUniqueIdProperty({
                            "widgetId": "p.TaskTracker.TaskEdit.datePicker1"
                        })} />
                ]}
                caption={t([
                    ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Due date" }, "args": {} }
                    })
                ])}
                labelFor={DerivedUniqueIdProperty({
                    "widgetId": "p.TaskTracker.TaskEdit.datePicker1"
                })}
                width={undefined}
                orientation={"vertical"}
                hasError={ValidationProperty({
                    "inputWidgetId": "p.TaskTracker.TaskEdit.datePicker1"
                })} />,
            <$FormGroup key="p.TaskTracker.TaskEdit.datePicker2$formGroup"
                $widgetId="p.TaskTracker.TaskEdit.datePicker2$formGroup"
                class={"mx-name-datePicker2 mx-datepicker"}
                style={undefined}
                control={[
                    <$DatePicker key="p.TaskTracker.TaskEdit.datePicker2"
                        $widgetId="p.TaskTracker.TaskEdit.datePicker2"
                        mode={"date"}
                        showCalendarButton={true}
                        inputValue={AttributeProperty({
                            "scope": "p.TaskTracker.TaskEdit.dataView1",
                            "path": "",
                            "entity": "TaskTracker.Task",
                            "attribute": "CompletionDate",
                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                            "isList": false,
                            "validation": null,
                            "formatting": {
                                "dateFormat": t([
                                    {
                                        "type": "date"
                                    }
                                ])
                            }
                        })}
                        placeholder={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                            })
                        ])}
                        buttonLabel={TextProperty({
                            "value": t([
                                "Show date picker"
                            ])
                        })}
                        readOnlyStyle={"control"}
                        onEnter={undefined}
                        onLeave={undefined}
                        ariaLabel={undefined}
                        ariaRequired={undefined}
                        tabIndex={undefined}
                        id={DerivedUniqueIdProperty({
                            "widgetId": "p.TaskTracker.TaskEdit.datePicker2"
                        })} />
                ]}
                caption={t([
                    ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Completion date" }, "args": {} }
                    })
                ])}
                labelFor={DerivedUniqueIdProperty({
                    "widgetId": "p.TaskTracker.TaskEdit.datePicker2"
                })}
                width={undefined}
                orientation={"vertical"}
                hasError={ValidationProperty({
                    "inputWidgetId": "p.TaskTracker.TaskEdit.datePicker2"
                })} />,
            <$Container key="p.TaskTracker.TaskEdit.container47"
                $widgetId="p.TaskTracker.TaskEdit.container47"
                class={"mx-name-container47 spacing-outer-bottom-medium"}
                style={undefined}
                renderMode={"div"}
                onClick={undefined}
                content={[
                    <$Text key="p.TaskTracker.TaskEdit.text3"
                        $widgetId="p.TaskTracker.TaskEdit.text3"
                        class={"mx-name-text3 text-semibold"}
                        style={undefined}
                        caption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Assign to" }, "args": {} }
                            })
                        ])}
                        renderMode={"p"} />,
                    <$Div key="p.TaskTracker.TaskEdit.layoutGrid3"
                        $widgetId="p.TaskTracker.TaskEdit.layoutGrid3"
                        class={"mx-name-layoutGrid3 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
                        style={undefined}
                        content={[
                            <$Div key="p.TaskTracker.TaskEdit.layoutGrid3$row0"
                                $widgetId="p.TaskTracker.TaskEdit.layoutGrid3$row0"
                                class={"row align-children-center"}
                                style={undefined}
                                content={[
                                    <$Div key="p.TaskTracker.TaskEdit.layoutGrid3$row0$column0"
                                        $widgetId="p.TaskTracker.TaskEdit.layoutGrid3$row0$column0"
                                        class={"col-lg-9 col-md col"}
                                        style={undefined}
                                        content={[
                                            <$FormGroup key="p.TaskTracker.TaskEdit.referenceSelector1$formGroup"
                                                $widgetId="p.TaskTracker.TaskEdit.referenceSelector1$formGroup"
                                                class={"mx-name-referenceSelector1 spacing-outer-bottom-none"}
                                                style={undefined}
                                                control={[
                                                    <$Combobox key="p.TaskTracker.TaskEdit.referenceSelector1"
                                                        $widgetId="p.TaskTracker.TaskEdit.referenceSelector1"
                                                        source={"context"}
                                                        optionsSourceType={"association"}
                                                        optionsSourceDatabaseDataSource={undefined}
                                                        optionsSourceAssociationCaptionType={"attribute"}
                                                        optionsSourceDatabaseCaptionType={"attribute"}
                                                        optionsSourceAssociationCaptionAttribute={ListAttributeProperty({
                                                            "path": "",
                                                            "entity": "MendixSSO.MendixSSOUser",
                                                            "attribute": "DisplayName",
                                                            "attributeType": "String",
                                                            "sortable": true,
                                                            "filterable": true,
                                                            "dataSourceId": "p.1",
                                                            "isList": false
                                                        })}
                                                        optionsSourceAssociationCaptionExpression={undefined}
                                                        attributeAssociation={AssociationProperty({
                                                            "type": "Reference",
                                                            "entity": "TaskTracker.Task",
                                                            "path": "",
                                                            "attribute": "TaskTracker.Task_MendixSSOUser_Assignee",
                                                            "endpointEntity": "MendixSSO.MendixSSOUser",
                                                            "selectableObjectsId": "p.1",
                                                            "scope": "p.TaskTracker.TaskEdit.dataView1",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                        })}
                                                        optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                                            "dataSourceId": "p.1",
                                                            "entity": "MendixSSO.MendixSSOUser",
                                                            "scope": "p.TaskTracker.TaskEdit.dataView1",
                                                            "operationId": "yA9DpnZlrlqaCo0lHWf/9A",
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
                                                        readOnlyStyle={"bordered"}
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
                                                            "widgetId": "p.TaskTracker.TaskEdit.referenceSelector1"
                                                        })} />
                                                ]}
                                                caption={undefined}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p.TaskTracker.TaskEdit.referenceSelector1"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p.TaskTracker.TaskEdit.referenceSelector1"
                                                })} />
                                        ]} />,
                                    <$Div key="p.TaskTracker.TaskEdit.layoutGrid3$row0$column1"
                                        $widgetId="p.TaskTracker.TaskEdit.layoutGrid3$row0$column1"
                                        class={"col-lg-3 col-md col"}
                                        style={undefined}
                                        content={[
                                            <$ConditionalVisibilityWrapper key="p.TaskTracker.TaskEdit.actionButton8$visibility"
                                                $widgetId="p.TaskTracker.TaskEdit.actionButton8$visibility"
                                                visible={ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Manager" }, { "type": "literal", "value": "Member" } ] }, "args": {} }
                                                })}
                                                contents={[
                                                    <$ActionButton key="p.TaskTracker.TaskEdit.actionButton8"
                                                        $widgetId="p.TaskTracker.TaskEdit.actionButton8"
                                                        buttonId={"p.TaskTracker.TaskEdit.actionButton8"}
                                                        class={"mx-name-actionButton8 pull-right"}
                                                        style={undefined}
                                                        tabIndex={undefined}
                                                        renderType={"button"}
                                                        role={undefined}
                                                        buttonClass={"btn-default"}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Assign to Me" }, "args": {} }
                                                            })
                                                        ])}
                                                        tooltip={TextProperty({
                                                            "value": t([
                                                                ""
                                                            ])
                                                        })}
                                                        icon={undefined}
                                                        action={ActionProperty({
                                                            "action": { "type": "callMicroflow", "argMap": { "Task": { "widget": "$Task", "source": "object" } }, "config": { "operationId": "9Qmedk4UCliu5EaUw+kwTg", "validate": "view", "allowedRoles": [ "Manager", "Member" ] }, "disabledDuringExecution": true },
                                                            "abortOnServerValidation": true
                                                        })} />
                                                ]} />
                                        ]} />
                                ]} />
                        ]} />
                ]}
                ariaHidden={false} />,
            <$Container key="p.TaskTracker.TaskEdit.container2"
                $widgetId="p.TaskTracker.TaskEdit.container2"
                class={"mx-name-container2 spacing-outer-bottom-large"}
                style={undefined}
                renderMode={"div"}
                onClick={undefined}
                content={[
                    <$Text key="p.TaskTracker.TaskEdit.text11"
                        $widgetId="p.TaskTracker.TaskEdit.text11"
                        class={"mx-name-text11 text-semibold"}
                        style={undefined}
                        caption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Priority" }, "args": {} }
                            })
                        ])}
                        renderMode={"p"} />,
                    <$Div key="p.TaskTracker.TaskEdit.layoutGrid2"
                        $widgetId="p.TaskTracker.TaskEdit.layoutGrid2"
                        class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
                        style={undefined}
                        content={[
                            <$Div key="p.TaskTracker.TaskEdit.layoutGrid2$row0"
                                $widgetId="p.TaskTracker.TaskEdit.layoutGrid2$row0"
                                class={"row"}
                                style={undefined}
                                content={[
                                    <$Div key="p.TaskTracker.TaskEdit.layoutGrid2$row0$column0"
                                        $widgetId="p.TaskTracker.TaskEdit.layoutGrid2$row0$column0"
                                        class={"col-lg-auto col-md-auto col-auto"}
                                        style={undefined}
                                        content={[
                                            <$Container key="p.TaskTracker.TaskEdit.container23"
                                                $widgetId="p.TaskTracker.TaskEdit.container23"
                                                class={"mx-name-container23 option brand-info col-center"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$ConditionalVisibilityWrapper key="p.TaskTracker.TaskEdit.container24$visibility"
                                                        $widgetId="p.TaskTracker.TaskEdit.container24$visibility"
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Priority" }, { "type": "literal", "value": "Low" } ] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskEdit.dataView1", "source": "object" } } }
                                                        })}
                                                        contents={[
                                                            <$Container key="p.TaskTracker.TaskEdit.container24"
                                                                $widgetId="p.TaskTracker.TaskEdit.container24"
                                                                class={"mx-name-container24 option-select"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={undefined}
                                                                ariaHidden={false} />
                                                        ]} />,
                                                    <$Container key="p.TaskTracker.TaskEdit.container25"
                                                        $widgetId="p.TaskTracker.TaskEdit.container25"
                                                        class={"mx-name-container25 option-wrapper"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Image key="p.TaskTracker.TaskEdit.image1"
                                                                $widgetId="p.TaskTracker.TaskEdit.image1"
                                                                datasource={"image"}
                                                                imageObject={WebStaticImageProperty({
                                                                    "image": { "uri": "img/TaskTracker$Images$Low.png" }
                                                                })}
                                                                defaultImageDynamic={undefined}
                                                                imageUrl={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                imageIcon={undefined}
                                                                isBackgroundImage={false}
                                                                children={undefined}
                                                                onClickType={"action"}
                                                                onClick={ActionProperty({
                                                                    "action": { "type": "callMicroflow", "argMap": { "Task": { "widget": "$Task", "source": "object" } }, "config": { "operationId": "yXq80egyfl2GF9flsWSCfw", "validate": "view", "allowedRoles": [ "Manager", "Member" ] }, "disabledDuringExecution": false },
                                                                    "argumentTypes": { }
                                                                })}
                                                                alternativeText={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                widthUnit={"pixels"}
                                                                width={72}
                                                                heightUnit={"pixels"}
                                                                height={72}
                                                                iconSize={14}
                                                                displayAs={"fullImage"}
                                                                responsive={true}
                                                                class={"mx-name-image1 option-icon"}
                                                                style={undefined}
                                                                tabIndex={undefined} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]}
                                                ariaHidden={false} />,
                                            <$Text key="p.TaskTracker.TaskEdit.text1"
                                                $widgetId="p.TaskTracker.TaskEdit.text1"
                                                class={"mx-name-text1 text-center d-block"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Low" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />
                                        ]} />,
                                    <$Div key="p.TaskTracker.TaskEdit.layoutGrid2$row0$column1"
                                        $widgetId="p.TaskTracker.TaskEdit.layoutGrid2$row0$column1"
                                        class={"col-lg-auto col-md-auto col-auto"}
                                        style={undefined}
                                        content={[
                                            <$Container key="p.TaskTracker.TaskEdit.container26"
                                                $widgetId="p.TaskTracker.TaskEdit.container26"
                                                class={"mx-name-container26 option brand-warning col-center"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$ConditionalVisibilityWrapper key="p.TaskTracker.TaskEdit.container27$visibility"
                                                        $widgetId="p.TaskTracker.TaskEdit.container27$visibility"
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Priority" }, { "type": "literal", "value": "Medium" } ] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskEdit.dataView1", "source": "object" } } }
                                                        })}
                                                        contents={[
                                                            <$Container key="p.TaskTracker.TaskEdit.container27"
                                                                $widgetId="p.TaskTracker.TaskEdit.container27"
                                                                class={"mx-name-container27 option-select"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={undefined}
                                                                ariaHidden={false} />
                                                        ]} />,
                                                    <$Container key="p.TaskTracker.TaskEdit.container28"
                                                        $widgetId="p.TaskTracker.TaskEdit.container28"
                                                        class={"mx-name-container28 option-wrapper"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Image key="p.TaskTracker.TaskEdit.image2"
                                                                $widgetId="p.TaskTracker.TaskEdit.image2"
                                                                datasource={"image"}
                                                                imageObject={WebStaticImageProperty({
                                                                    "image": { "uri": "img/TaskTracker$Images$Medium.png" }
                                                                })}
                                                                defaultImageDynamic={undefined}
                                                                imageUrl={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                imageIcon={undefined}
                                                                isBackgroundImage={false}
                                                                children={undefined}
                                                                onClickType={"action"}
                                                                onClick={ActionProperty({
                                                                    "action": { "type": "callMicroflow", "argMap": { "Task": { "widget": "$Task", "source": "object" } }, "config": { "operationId": "1eXUIjCKvVWs/j/md8RA6w", "validate": "view", "allowedRoles": [ "Manager", "Member" ] }, "disabledDuringExecution": false },
                                                                    "argumentTypes": { }
                                                                })}
                                                                alternativeText={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                widthUnit={"pixels"}
                                                                width={72}
                                                                heightUnit={"pixels"}
                                                                height={72}
                                                                iconSize={14}
                                                                displayAs={"fullImage"}
                                                                responsive={true}
                                                                class={"mx-name-image2 option-icon"}
                                                                style={undefined}
                                                                tabIndex={undefined} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]}
                                                ariaHidden={false} />,
                                            <$Text key="p.TaskTracker.TaskEdit.text8"
                                                $widgetId="p.TaskTracker.TaskEdit.text8"
                                                class={"mx-name-text8 text-center d-block"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Medium" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />
                                        ]} />,
                                    <$Div key="p.TaskTracker.TaskEdit.layoutGrid2$row0$column2"
                                        $widgetId="p.TaskTracker.TaskEdit.layoutGrid2$row0$column2"
                                        class={"col-lg-auto col-md-auto col-auto"}
                                        style={undefined}
                                        content={[
                                            <$Container key="p.TaskTracker.TaskEdit.container29"
                                                $widgetId="p.TaskTracker.TaskEdit.container29"
                                                class={"mx-name-container29 option brand-danger col-center"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$ConditionalVisibilityWrapper key="p.TaskTracker.TaskEdit.container30$visibility"
                                                        $widgetId="p.TaskTracker.TaskEdit.container30$visibility"
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Priority" }, { "type": "literal", "value": "High" } ] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskEdit.dataView1", "source": "object" } } }
                                                        })}
                                                        contents={[
                                                            <$Container key="p.TaskTracker.TaskEdit.container30"
                                                                $widgetId="p.TaskTracker.TaskEdit.container30"
                                                                class={"mx-name-container30 option-select"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={undefined}
                                                                ariaHidden={false} />
                                                        ]} />,
                                                    <$Container key="p.TaskTracker.TaskEdit.container31"
                                                        $widgetId="p.TaskTracker.TaskEdit.container31"
                                                        class={"mx-name-container31 option-wrapper"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Image key="p.TaskTracker.TaskEdit.image3"
                                                                $widgetId="p.TaskTracker.TaskEdit.image3"
                                                                datasource={"image"}
                                                                imageObject={WebStaticImageProperty({
                                                                    "image": { "uri": "img/TaskTracker$Images$High.png" }
                                                                })}
                                                                defaultImageDynamic={undefined}
                                                                imageUrl={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                imageIcon={undefined}
                                                                isBackgroundImage={false}
                                                                children={undefined}
                                                                onClickType={"action"}
                                                                onClick={ActionProperty({
                                                                    "action": { "type": "callMicroflow", "argMap": { "Task": { "widget": "$Task", "source": "object" } }, "config": { "operationId": "h5ineBlgk1qEeL3qX1WGZg", "validate": "view", "allowedRoles": [ "Manager", "Member" ] }, "disabledDuringExecution": false },
                                                                    "argumentTypes": { }
                                                                })}
                                                                alternativeText={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                widthUnit={"pixels"}
                                                                width={72}
                                                                heightUnit={"pixels"}
                                                                height={72}
                                                                iconSize={14}
                                                                displayAs={"fullImage"}
                                                                responsive={true}
                                                                class={"mx-name-image3 option-icon"}
                                                                style={undefined}
                                                                tabIndex={undefined} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]}
                                                ariaHidden={false} />,
                                            <$Text key="p.TaskTracker.TaskEdit.text9"
                                                $widgetId="p.TaskTracker.TaskEdit.text9"
                                                class={"mx-name-text9 text-center d-block"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "High" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />
                                        ]} />,
                                    <$Div key="p.TaskTracker.TaskEdit.layoutGrid2$row0$column3"
                                        $widgetId="p.TaskTracker.TaskEdit.layoutGrid2$row0$column3"
                                        class={"col-lg col-md col"}
                                        style={undefined}
                                        content={undefined} />
                                ]} />
                        ]} />
                ]}
                ariaHidden={false} />,
            <$Container key="p.TaskTracker.TaskEdit.container9"
                $widgetId="p.TaskTracker.TaskEdit.container9"
                class={"mx-name-container9 spacing-outer-bottom-large"}
                style={undefined}
                renderMode={"div"}
                onClick={undefined}
                content={[
                    <$Text key="p.TaskTracker.TaskEdit.text12"
                        $widgetId="p.TaskTracker.TaskEdit.text12"
                        class={"mx-name-text12 text-semibold"}
                        style={undefined}
                        caption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Status\r\n" }, "args": {} }
                            })
                        ])}
                        renderMode={"p"} />,
                    <$Div key="p.TaskTracker.TaskEdit.layoutGrid1"
                        $widgetId="p.TaskTracker.TaskEdit.layoutGrid1"
                        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
                        style={undefined}
                        content={[
                            <$Div key="p.TaskTracker.TaskEdit.layoutGrid1$row0"
                                $widgetId="p.TaskTracker.TaskEdit.layoutGrid1$row0"
                                class={"row"}
                                style={undefined}
                                content={[
                                    <$Div key="p.TaskTracker.TaskEdit.layoutGrid1$row0$column0"
                                        $widgetId="p.TaskTracker.TaskEdit.layoutGrid1$row0$column0"
                                        class={"col-lg-auto col-md-auto col-auto"}
                                        style={undefined}
                                        content={[
                                            <$Container key="p.TaskTracker.TaskEdit.container11"
                                                $widgetId="p.TaskTracker.TaskEdit.container11"
                                                class={"mx-name-container11 option col-center"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$ConditionalVisibilityWrapper key="p.TaskTracker.TaskEdit.container12$visibility"
                                                        $widgetId="p.TaskTracker.TaskEdit.container12$visibility"
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Status" }, { "type": "literal", "value": "To_Do" } ] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskEdit.dataView1", "source": "object" } } }
                                                        })}
                                                        contents={[
                                                            <$Container key="p.TaskTracker.TaskEdit.container12"
                                                                $widgetId="p.TaskTracker.TaskEdit.container12"
                                                                class={"mx-name-container12 option-select"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={undefined}
                                                                ariaHidden={false} />
                                                        ]} />,
                                                    <$Container key="p.TaskTracker.TaskEdit.container20"
                                                        $widgetId="p.TaskTracker.TaskEdit.container20"
                                                        class={"mx-name-container20 option-wrapper"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Image key="p.TaskTracker.TaskEdit.image4"
                                                                $widgetId="p.TaskTracker.TaskEdit.image4"
                                                                datasource={"image"}
                                                                imageObject={WebStaticImageProperty({
                                                                    "image": { "uri": "img/TaskTracker$Images$ToDo.png" }
                                                                })}
                                                                defaultImageDynamic={undefined}
                                                                imageUrl={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                imageIcon={undefined}
                                                                isBackgroundImage={false}
                                                                children={undefined}
                                                                onClickType={"action"}
                                                                onClick={ActionProperty({
                                                                    "action": { "type": "callMicroflow", "argMap": { "Task": { "widget": "$Task", "source": "object" } }, "config": { "operationId": "hjd04ZVDSFu9xDX2tf65Cw", "validate": "view", "allowedRoles": [ "Manager", "Member" ] }, "disabledDuringExecution": false },
                                                                    "argumentTypes": { }
                                                                })}
                                                                alternativeText={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                widthUnit={"pixels"}
                                                                width={72}
                                                                heightUnit={"pixels"}
                                                                height={72}
                                                                iconSize={14}
                                                                displayAs={"fullImage"}
                                                                responsive={true}
                                                                class={"mx-name-image4 option-icon img-contain img-center"}
                                                                style={undefined}
                                                                tabIndex={undefined} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]}
                                                ariaHidden={false} />,
                                            <$Text key="p.TaskTracker.TaskEdit.text4"
                                                $widgetId="p.TaskTracker.TaskEdit.text4"
                                                class={"mx-name-text4 text-center d-block"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "To Do" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />
                                        ]} />,
                                    <$Div key="p.TaskTracker.TaskEdit.layoutGrid1$row0$column1"
                                        $widgetId="p.TaskTracker.TaskEdit.layoutGrid1$row0$column1"
                                        class={"col-lg-auto col-md-auto col-auto"}
                                        style={undefined}
                                        content={[
                                            <$Container key="p.TaskTracker.TaskEdit.container13"
                                                $widgetId="p.TaskTracker.TaskEdit.container13"
                                                class={"mx-name-container13 option col-center"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$ConditionalVisibilityWrapper key="p.TaskTracker.TaskEdit.container14$visibility"
                                                        $widgetId="p.TaskTracker.TaskEdit.container14$visibility"
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Status" }, { "type": "literal", "value": "Running" } ] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskEdit.dataView1", "source": "object" } } }
                                                        })}
                                                        contents={[
                                                            <$Container key="p.TaskTracker.TaskEdit.container14"
                                                                $widgetId="p.TaskTracker.TaskEdit.container14"
                                                                class={"mx-name-container14 option-select"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={undefined}
                                                                ariaHidden={false} />
                                                        ]} />,
                                                    <$Container key="p.TaskTracker.TaskEdit.container19"
                                                        $widgetId="p.TaskTracker.TaskEdit.container19"
                                                        class={"mx-name-container19 option-wrapper"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Image key="p.TaskTracker.TaskEdit.image5"
                                                                $widgetId="p.TaskTracker.TaskEdit.image5"
                                                                datasource={"image"}
                                                                imageObject={WebStaticImageProperty({
                                                                    "image": { "uri": "img/TaskTracker$Images$Running.png" }
                                                                })}
                                                                defaultImageDynamic={undefined}
                                                                imageUrl={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                imageIcon={undefined}
                                                                isBackgroundImage={false}
                                                                children={undefined}
                                                                onClickType={"action"}
                                                                onClick={ActionProperty({
                                                                    "action": { "type": "callMicroflow", "argMap": { "Task": { "widget": "$Task", "source": "object" } }, "config": { "operationId": "op7ueT2YxlW6wGQ6roALlg", "validate": "view", "allowedRoles": [ "Manager", "Member" ] }, "disabledDuringExecution": false },
                                                                    "argumentTypes": { }
                                                                })}
                                                                alternativeText={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                widthUnit={"pixels"}
                                                                width={72}
                                                                heightUnit={"pixels"}
                                                                height={72}
                                                                iconSize={14}
                                                                displayAs={"fullImage"}
                                                                responsive={true}
                                                                class={"mx-name-image5 option-icon img-center img-contain"}
                                                                style={undefined}
                                                                tabIndex={undefined} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]}
                                                ariaHidden={false} />,
                                            <$Text key="p.TaskTracker.TaskEdit.text5"
                                                $widgetId="p.TaskTracker.TaskEdit.text5"
                                                class={"mx-name-text5 text-center d-block"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "In Progress" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />
                                        ]} />,
                                    <$Div key="p.TaskTracker.TaskEdit.layoutGrid1$row0$column2"
                                        $widgetId="p.TaskTracker.TaskEdit.layoutGrid1$row0$column2"
                                        class={"col-lg-auto col-md-auto col-auto"}
                                        style={undefined}
                                        content={[
                                            <$Container key="p.TaskTracker.TaskEdit.container15"
                                                $widgetId="p.TaskTracker.TaskEdit.container15"
                                                class={"mx-name-container15 option col-center"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$ConditionalVisibilityWrapper key="p.TaskTracker.TaskEdit.container16$visibility"
                                                        $widgetId="p.TaskTracker.TaskEdit.container16$visibility"
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Status" }, { "type": "literal", "value": "Review" } ] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskEdit.dataView1", "source": "object" } } }
                                                        })}
                                                        contents={[
                                                            <$Container key="p.TaskTracker.TaskEdit.container16"
                                                                $widgetId="p.TaskTracker.TaskEdit.container16"
                                                                class={"mx-name-container16 option-select"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={undefined}
                                                                ariaHidden={false} />
                                                        ]} />,
                                                    <$Container key="p.TaskTracker.TaskEdit.container21"
                                                        $widgetId="p.TaskTracker.TaskEdit.container21"
                                                        class={"mx-name-container21 option-wrapper"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Image key="p.TaskTracker.TaskEdit.image6"
                                                                $widgetId="p.TaskTracker.TaskEdit.image6"
                                                                datasource={"image"}
                                                                imageObject={WebStaticImageProperty({
                                                                    "image": { "uri": "img/TaskTracker$Images$Review.png" }
                                                                })}
                                                                defaultImageDynamic={undefined}
                                                                imageUrl={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                imageIcon={undefined}
                                                                isBackgroundImage={false}
                                                                children={undefined}
                                                                onClickType={"action"}
                                                                onClick={ActionProperty({
                                                                    "action": { "type": "callMicroflow", "argMap": { "Task": { "widget": "$Task", "source": "object" } }, "config": { "operationId": "ymSXx+UnXlKGTxlIT7a8MQ", "validate": "view", "allowedRoles": [ "Manager", "Member" ] }, "disabledDuringExecution": false },
                                                                    "argumentTypes": { }
                                                                })}
                                                                alternativeText={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                widthUnit={"pixels"}
                                                                width={72}
                                                                heightUnit={"pixels"}
                                                                height={72}
                                                                iconSize={14}
                                                                displayAs={"fullImage"}
                                                                responsive={true}
                                                                class={"mx-name-image6 option-icon img-center img-contain"}
                                                                style={undefined}
                                                                tabIndex={undefined} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]}
                                                ariaHidden={false} />,
                                            <$Text key="p.TaskTracker.TaskEdit.text6"
                                                $widgetId="p.TaskTracker.TaskEdit.text6"
                                                class={"mx-name-text6 text-center d-block"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Review" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />
                                        ]} />,
                                    <$Div key="p.TaskTracker.TaskEdit.layoutGrid1$row0$column3"
                                        $widgetId="p.TaskTracker.TaskEdit.layoutGrid1$row0$column3"
                                        class={"col-lg-auto col-md-auto col-auto"}
                                        style={undefined}
                                        content={[
                                            <$Container key="p.TaskTracker.TaskEdit.container17"
                                                $widgetId="p.TaskTracker.TaskEdit.container17"
                                                class={"mx-name-container17 option col-center"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$ConditionalVisibilityWrapper key="p.TaskTracker.TaskEdit.container18$visibility"
                                                        $widgetId="p.TaskTracker.TaskEdit.container18$visibility"
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Status" }, { "type": "literal", "value": "Done" } ] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskEdit.dataView1", "source": "object" } } }
                                                        })}
                                                        contents={[
                                                            <$Container key="p.TaskTracker.TaskEdit.container18"
                                                                $widgetId="p.TaskTracker.TaskEdit.container18"
                                                                class={"mx-name-container18 option-select"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={undefined}
                                                                ariaHidden={false} />
                                                        ]} />,
                                                    <$Container key="p.TaskTracker.TaskEdit.container22"
                                                        $widgetId="p.TaskTracker.TaskEdit.container22"
                                                        class={"mx-name-container22 option-wrapper"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Image key="p.TaskTracker.TaskEdit.image7"
                                                                $widgetId="p.TaskTracker.TaskEdit.image7"
                                                                datasource={"image"}
                                                                imageObject={WebStaticImageProperty({
                                                                    "image": { "uri": "img/TaskTracker$Images$Done.png" }
                                                                })}
                                                                defaultImageDynamic={undefined}
                                                                imageUrl={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                imageIcon={undefined}
                                                                isBackgroundImage={false}
                                                                children={undefined}
                                                                onClickType={"action"}
                                                                onClick={ActionProperty({
                                                                    "action": { "type": "callMicroflow", "argMap": { "Task": { "widget": "$Task", "source": "object" } }, "config": { "operationId": "s3rN6mycGFWPMkLW+2tb4Q", "validate": "view", "allowedRoles": [ "Manager", "Member" ] }, "disabledDuringExecution": false },
                                                                    "argumentTypes": { }
                                                                })}
                                                                alternativeText={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                widthUnit={"pixels"}
                                                                width={72}
                                                                heightUnit={"pixels"}
                                                                height={72}
                                                                iconSize={14}
                                                                displayAs={"fullImage"}
                                                                responsive={true}
                                                                class={"mx-name-image7 option-icon img-center img-contain"}
                                                                style={undefined}
                                                                tabIndex={undefined} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]}
                                                ariaHidden={false} />,
                                            <$Text key="p.TaskTracker.TaskEdit.text7"
                                                $widgetId="p.TaskTracker.TaskEdit.text7"
                                                class={"mx-name-text7 text-center d-block"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Done" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />
                                        ]} />,
                                    <$Div key="p.TaskTracker.TaskEdit.layoutGrid1$row0$column4"
                                        $widgetId="p.TaskTracker.TaskEdit.layoutGrid1$row0$column4"
                                        class={"col-lg col-md col"}
                                        style={undefined}
                                        content={undefined} />
                                ]} />
                        ]} />
                ]}
                ariaHidden={false} />,
            <$GroupBox key="p.TaskTracker.TaskEdit.groupBox1"
                $widgetId="p.TaskTracker.TaskEdit.groupBox1"
                id={DerivedUniqueIdProperty({
                    "widgetId": "p.TaskTracker.TaskEdit.groupBox1"
                })}
                class={"mx-name-groupBox1 groupbox-transparent"}
                style={undefined}
                tabIndex={undefined}
                header={t([
                    ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Comments" }, "args": {} }
                    })
                ])}
                renderMode={"div"}
                collapsible={"notInitially"}
                content={[
                    <$Div key="p.TaskTracker.TaskEdit.layoutGrid6"
                        $widgetId="p.TaskTracker.TaskEdit.layoutGrid6"
                        class={"mx-name-layoutGrid6 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
                        style={undefined}
                        content={[
                            <$Div key="p.TaskTracker.TaskEdit.layoutGrid6$row0"
                                $widgetId="p.TaskTracker.TaskEdit.layoutGrid6$row0"
                                class={"row"}
                                style={undefined}
                                content={[
                                    <$Div key="p.TaskTracker.TaskEdit.layoutGrid6$row0$column0"
                                        $widgetId="p.TaskTracker.TaskEdit.layoutGrid6$row0$column0"
                                        class={"col-lg-1 col-md col"}
                                        style={undefined}
                                        content={[
                                            <$DataView key="p.TaskTracker.TaskEdit.dataView4"
                                                $widgetId="p.TaskTracker.TaskEdit.dataView4"
                                                class={"mx-name-dataView4 form-horizontal"}
                                                style={undefined}
                                                tabIndex={undefined}
                                                object={MicroflowObjectProperty({
                                                    "dataSourceId": "p.178",
                                                    "scope": "p.TaskTracker.TaskEdit.dataView1",
                                                    "editable": true,
                                                    "operationId": "DoUq8ANzWFW7IEwTzoRPUA",
                                                    "argMap": {}
                                                })}
                                                emptyMessage={TextProperty({
                                                    "value": t([
                                                        ""
                                                    ])
                                                })}
                                                body={[
                                                    <$Image key="p.TaskTracker.TaskEdit.image11"
                                                        $widgetId="p.TaskTracker.TaskEdit.image11"
                                                        datasource={"imageUrl"}
                                                        imageObject={undefined}
                                                        defaultImageDynamic={undefined}
                                                        imageUrl={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "variable", "variable": "dataView1", "path": "TaskTracker.Task_MendixSSOUser_Assignee/MendixSSO.MendixSSOUser/AvatarURL" }, "args": { "dataView1": { "widget": "p.TaskTracker.TaskEdit.dataView1", "source": "object" } } }
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
                                                        widthUnit={"pixels"}
                                                        width={25}
                                                        heightUnit={"pixels"}
                                                        height={25}
                                                        iconSize={14}
                                                        displayAs={"fullImage"}
                                                        responsive={true}
                                                        class={"mx-name-image11 img-circle"}
                                                        style={undefined}
                                                        tabIndex={undefined} />
                                                ]}
                                                hideFooter={true}
                                                footer={undefined} />
                                        ]} />,
                                    <$Div key="p.TaskTracker.TaskEdit.layoutGrid6$row0$column1"
                                        $widgetId="p.TaskTracker.TaskEdit.layoutGrid6$row0$column1"
                                        class={"col-lg col-md col"}
                                        style={undefined}
                                        content={[
                                            <$DataView key="p.TaskTracker.TaskEdit.dataView2"
                                                $widgetId="p.TaskTracker.TaskEdit.dataView2"
                                                class={"mx-name-dataView2 form-vertical"}
                                                style={undefined}
                                                tabIndex={undefined}
                                                object={MicroflowObjectProperty({
                                                    "dataSourceId": "p.185",
                                                    "scope": "p.TaskTracker.TaskEdit.dataView1",
                                                    "editable": true,
                                                    "operationId": "Syd+4kSnGlKSFnF8SgQNFA",
                                                    "argMap": { "Task": { "widget": "$Task", "source": "object" } }
                                                })}
                                                emptyMessage={TextProperty({
                                                    "value": t([
                                                        ""
                                                    ])
                                                })}
                                                body={[
                                                    <$FormGroup key="p.TaskTracker.TaskEdit.textArea2$formGroup"
                                                        $widgetId="p.TaskTracker.TaskEdit.textArea2$formGroup"
                                                        class={"mx-name-textArea2 spacing-outer-bottom mx-textarea"}
                                                        style={undefined}
                                                        control={[
                                                            <$TextArea key="p.TaskTracker.TaskEdit.textArea2"
                                                                $widgetId="p.TaskTracker.TaskEdit.textArea2"
                                                                inputValue={AttributeProperty({
                                                                    "scope": "p.TaskTracker.TaskEdit.dataView2",
                                                                    "path": "",
                                                                    "entity": "TaskTracker.CommentHelper",
                                                                    "attribute": "Content",
                                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                    "isList": false,
                                                                    "validation": null
                                                                })}
                                                                counterMessage={undefined}
                                                                maxLength={undefined}
                                                                numberOfLines={3}
                                                                autoGrow={false}
                                                                placeholder={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Add a comment..." }, "args": {} }
                                                                    })
                                                                ])}
                                                                readOnlyStyle={"control"}
                                                                textTooLongMessage={undefined}
                                                                onEnter={undefined}
                                                                onLeave={undefined}
                                                                ariaLabel={undefined}
                                                                ariaRequired={undefined}
                                                                submitWhileEditing={false}
                                                                submitDelay={300}
                                                                tabIndex={undefined}
                                                                id={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.TaskTracker.TaskEdit.textArea2"
                                                                })} />
                                                        ]}
                                                        caption={undefined}
                                                        labelFor={DerivedUniqueIdProperty({
                                                            "widgetId": "p.TaskTracker.TaskEdit.textArea2"
                                                        })}
                                                        width={undefined}
                                                        orientation={"vertical"}
                                                        hasError={ValidationProperty({
                                                            "inputWidgetId": "p.TaskTracker.TaskEdit.textArea2"
                                                        })} />,
                                                    <$ConditionalVisibilityWrapper key="p.TaskTracker.TaskEdit.actionButton3$visibility"
                                                        $widgetId="p.TaskTracker.TaskEdit.actionButton3$visibility"
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Manager" }, { "type": "literal", "value": "Member" } ] }, "args": {} }
                                                        })}
                                                        contents={[
                                                            <$ActionButton key="p.TaskTracker.TaskEdit.actionButton3"
                                                                $widgetId="p.TaskTracker.TaskEdit.actionButton3"
                                                                buttonId={"p.TaskTracker.TaskEdit.actionButton3"}
                                                                class={"mx-name-actionButton3 btn-sm pull-right"}
                                                                style={undefined}
                                                                tabIndex={undefined}
                                                                renderType={"button"}
                                                                role={undefined}
                                                                buttonClass={"btn-default"}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Post comment" }, "args": {} }
                                                                    })
                                                                ])}
                                                                tooltip={TextProperty({
                                                                    "value": t([
                                                                        ""
                                                                    ])
                                                                })}
                                                                icon={undefined}
                                                                action={ActionProperty({
                                                                    "action": { "type": "callMicroflow", "argMap": { "CommentHelper": { "widget": "p.TaskTracker.TaskEdit.dataView2", "source": "object" }, "Task": { "widget": "$Task", "source": "object" } }, "config": { "operationId": "LUShWNH6clutORJVYNL0uw", "validate": "view", "allowedRoles": [ "Manager", "Member" ] }, "disabledDuringExecution": true },
                                                                    "abortOnServerValidation": true
                                                                })} />
                                                        ]} />
                                                ]}
                                                hideFooter={true}
                                                footer={undefined} />
                                        ]} />
                                ]} />
                        ]} />,
                    <$ListView key="p.TaskTracker.TaskEdit.listView2"
                        $widgetId="p.TaskTracker.TaskEdit.listView2"
                        class={"mx-name-listView2 listview-empty listview-stylingless"}
                        style={undefined}
                        listValue={MicroflowObjectListProperty({
                            "argMap": { "Task": { "widget": "$Task", "source": "object" } },
                            "dataSourceId": "p.6",
                            "entity": "TaskTracker.Comment",
                            "scope": "p.TaskTracker.TaskEdit.dataView1",
                            "operationId": "kzAs7KixblugNE5FGkCv6w"
                        })}
                        itemTemplate={TemplatedWidgetProperty({
                            "dataSourceId": "p.6",
                            "editable": false,
                            "children": () => [
                                <$Div key="p.TaskTracker.TaskEdit.layoutGrid5"
                                    $widgetId="p.TaskTracker.TaskEdit.layoutGrid5"
                                    class={"mx-name-layoutGrid5 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
                                    style={undefined}
                                    content={[
                                        <$Div key="p.TaskTracker.TaskEdit.layoutGrid5$row0"
                                            $widgetId="p.TaskTracker.TaskEdit.layoutGrid5$row0"
                                            class={"row"}
                                            style={undefined}
                                            content={[
                                                <$Div key="p.TaskTracker.TaskEdit.layoutGrid5$row0$column0"
                                                    $widgetId="p.TaskTracker.TaskEdit.layoutGrid5$row0$column0"
                                                    class={"col-lg-1 col-md col"}
                                                    style={undefined}
                                                    content={[
                                                        <$Image key="p.TaskTracker.TaskEdit.image9"
                                                            $widgetId="p.TaskTracker.TaskEdit.image9"
                                                            datasource={"imageUrl"}
                                                            imageObject={undefined}
                                                            defaultImageDynamic={undefined}
                                                            imageUrl={t([
                                                                ExpressionProperty({
                                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "TaskTracker.Comment_MendixSSOUser/MendixSSO.MendixSSOUser/AvatarURL" }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskEdit.listView2", "source": "object" } } }
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
                                                            widthUnit={"pixels"}
                                                            width={25}
                                                            heightUnit={"pixels"}
                                                            height={25}
                                                            iconSize={14}
                                                            displayAs={"fullImage"}
                                                            responsive={true}
                                                            class={"mx-name-image9 img-circle"}
                                                            style={undefined}
                                                            tabIndex={undefined} />
                                                    ]} />,
                                                <$Div key="p.TaskTracker.TaskEdit.layoutGrid5$row0$column1"
                                                    $widgetId="p.TaskTracker.TaskEdit.layoutGrid5$row0$column1"
                                                    class={"col-lg col-md col"}
                                                    style={undefined}
                                                    content={[
                                                        <$Container key="p.TaskTracker.TaskEdit.container33"
                                                            $widgetId="p.TaskTracker.TaskEdit.container33"
                                                            class={"mx-name-container33"}
                                                            style={undefined}
                                                            renderMode={"div"}
                                                            onClick={undefined}
                                                            content={[
                                                                <$Text key="p.TaskTracker.TaskEdit.text10"
                                                                    $widgetId="p.TaskTracker.TaskEdit.text10"
                                                                    class={"mx-name-text10 d-block nowrap line-height-1 text-bold"}
                                                                    style={undefined}
                                                                    caption={t([
                                                                        ExpressionProperty({
                                                                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "TaskTracker.Comment_MendixSSOUser/MendixSSO.MendixSSOUser/DisplayName" }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskEdit.listView2", "source": "object" } } }
                                                                        })
                                                                    ])}
                                                                    renderMode={"span"} />,
                                                                <$Text key="p.TaskTracker.TaskEdit.text37"
                                                                    $widgetId="p.TaskTracker.TaskEdit.text37"
                                                                    class={"mx-name-text37 text-small text-detail"}
                                                                    style={undefined}
                                                                    caption={t([
                                                                        ExpressionProperty({
                                                                            "expression": { "expr": { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "createdDate" }, { "type": "literal", "value": "{\"type\":\"datetime\"}" } ] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskEdit.listView2", "source": "object" } } }
                                                                        })
                                                                    ])}
                                                                    renderMode={"span"} />
                                                            ]}
                                                            ariaHidden={false} />
                                                    ]} />,
                                                <$Div key="p.TaskTracker.TaskEdit.layoutGrid5$row0$column2"
                                                    $widgetId="p.TaskTracker.TaskEdit.layoutGrid5$row0$column2"
                                                    class={"col-lg-auto col-md col"}
                                                    style={undefined}
                                                    content={[
                                                        <$Container key="p.TaskTracker.TaskEdit.container45"
                                                            $widgetId="p.TaskTracker.TaskEdit.container45"
                                                            class={"mx-name-container45"}
                                                            style={undefined}
                                                            renderMode={"div"}
                                                            onClick={undefined}
                                                            content={[
                                                                <$ConditionalVisibilityWrapper key="p.TaskTracker.TaskEdit.actionButton7$visibility"
                                                                    $widgetId="p.TaskTracker.TaskEdit.actionButton7$visibility"
                                                                    visible={ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Manager" }, { "type": "literal", "value": "Member" } ] }, "args": {} }
                                                                    })}
                                                                    contents={[
                                                                        <$ActionButton key="p.TaskTracker.TaskEdit.actionButton7"
                                                                            $widgetId="p.TaskTracker.TaskEdit.actionButton7"
                                                                            buttonId={"p.TaskTracker.TaskEdit.actionButton7"}
                                                                            class={"mx-name-actionButton7 text-small text-danger"}
                                                                            style={undefined}
                                                                            tabIndex={undefined}
                                                                            renderType={"link"}
                                                                            role={"button"}
                                                                            buttonClass={"btn-default"}
                                                                            caption={t([
                                                                                ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "Delete" }, "args": {} }
                                                                                })
                                                                            ])}
                                                                            tooltip={TextProperty({
                                                                                "value": t([
                                                                                    ""
                                                                                ])
                                                                            })}
                                                                            icon={undefined}
                                                                            action={ActionProperty({
                                                                                "action": { "type": "deleteObject", "argMap": { "$object": { "widget": "p.TaskTracker.TaskEdit.listView2", "source": "object" } }, "config": { "closePage": false, "operationId": "tUbsYOb/TluqWNReRhOkcg" }, "disabledDuringExecution": true },
                                                                                "abortOnServerValidation": true
                                                                            })} />
                                                                    ]} />
                                                            ]}
                                                            ariaHidden={false} />
                                                    ]} />
                                            ]} />,
                                        <$Div key="p.TaskTracker.TaskEdit.layoutGrid5$row1"
                                            $widgetId="p.TaskTracker.TaskEdit.layoutGrid5$row1"
                                            class={"row align-children-center"}
                                            style={undefined}
                                            content={[
                                                <$Div key="p.TaskTracker.TaskEdit.layoutGrid5$row1$column0"
                                                    $widgetId="p.TaskTracker.TaskEdit.layoutGrid5$row1$column0"
                                                    class={"col-lg-1 col-md col"}
                                                    style={undefined}
                                                    content={undefined} />,
                                                <$Div key="p.TaskTracker.TaskEdit.layoutGrid5$row1$column1"
                                                    $widgetId="p.TaskTracker.TaskEdit.layoutGrid5$row1$column1"
                                                    class={"col-lg col-md col"}
                                                    style={undefined}
                                                    content={[
                                                        <$Container key="p.TaskTracker.TaskEdit.container46"
                                                            $widgetId="p.TaskTracker.TaskEdit.container46"
                                                            class={"mx-name-container46 shadow-small"}
                                                            style={undefined}
                                                            renderMode={"div"}
                                                            onClick={undefined}
                                                            content={[
                                                                <$Text key="p.TaskTracker.TaskEdit.text2"
                                                                    $widgetId="p.TaskTracker.TaskEdit.text2"
                                                                    class={"mx-name-text2 text-left d-block spacing-outer-left"}
                                                                    style={undefined}
                                                                    caption={t([
                                                                        ExpressionProperty({
                                                                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Content" }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskEdit.listView2", "source": "object" } } }
                                                                        })
                                                                    ])}
                                                                    renderMode={"p"} />
                                                            ]}
                                                            ariaHidden={false} />
                                                    ]} />
                                            ]} />
                                    ]} />
                            ]
                        })}
                        onClick={undefined}
                        pageSize={5} />
                ]} />,
            <$GroupBox key="p.TaskTracker.TaskEdit.groupBox2"
                $widgetId="p.TaskTracker.TaskEdit.groupBox2"
                id={DerivedUniqueIdProperty({
                    "widgetId": "p.TaskTracker.TaskEdit.groupBox2"
                })}
                class={"mx-name-groupBox2 groupbox-transparent"}
                style={undefined}
                tabIndex={undefined}
                header={t([
                    ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Files" }, "args": {} }
                    })
                ])}
                renderMode={"div"}
                collapsible={"notInitially"}
                content={[
                    <$ListView key="p.TaskTracker.TaskEdit.listView1"
                        $widgetId="p.TaskTracker.TaskEdit.listView1"
                        class={"mx-name-listView1 listview-empty listview-stylingless"}
                        style={undefined}
                        listValue={MicroflowObjectListProperty({
                            "argMap": { "Task": { "widget": "$Task", "source": "object" } },
                            "dataSourceId": "p.9",
                            "entity": "TaskTracker.FileUpload",
                            "scope": "p.TaskTracker.TaskEdit.dataView1",
                            "operationId": "9HfV8pJyS1C/zcIJJtcL6A"
                        })}
                        itemTemplate={TemplatedWidgetProperty({
                            "dataSourceId": "p.9",
                            "editable": false,
                            "children": () => [
                                <$Div key="p.TaskTracker.TaskEdit.layoutGrid4"
                                    $widgetId="p.TaskTracker.TaskEdit.layoutGrid4"
                                    class={"mx-name-layoutGrid4 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
                                    style={undefined}
                                    content={[
                                        <$Div key="p.TaskTracker.TaskEdit.layoutGrid4$row0"
                                            $widgetId="p.TaskTracker.TaskEdit.layoutGrid4$row0"
                                            class={"row align-children-center"}
                                            style={undefined}
                                            content={[
                                                <$Div key="p.TaskTracker.TaskEdit.layoutGrid4$row0$column0"
                                                    $widgetId="p.TaskTracker.TaskEdit.layoutGrid4$row0$column0"
                                                    class={"col-lg-auto col-md col"}
                                                    style={undefined}
                                                    content={[
                                                        <$Image key="p.TaskTracker.TaskEdit.image8"
                                                            $widgetId="p.TaskTracker.TaskEdit.image8"
                                                            datasource={"image"}
                                                            imageObject={WebStaticImageProperty({
                                                                "image": { "uri": "img/TaskTracker$Images$paperclip.png" }
                                                            })}
                                                            defaultImageDynamic={undefined}
                                                            imageUrl={t([
                                                                ExpressionProperty({
                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
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
                                                            widthUnit={"pixels"}
                                                            width={24}
                                                            heightUnit={"pixels"}
                                                            height={24}
                                                            iconSize={14}
                                                            displayAs={"fullImage"}
                                                            responsive={false}
                                                            class={"mx-name-image8"}
                                                            style={undefined}
                                                            tabIndex={undefined} />
                                                    ]} />,
                                                <$Div key="p.TaskTracker.TaskEdit.layoutGrid4$row0$column1"
                                                    $widgetId="p.TaskTracker.TaskEdit.layoutGrid4$row0$column1"
                                                    class={"col-lg col-md col"}
                                                    style={undefined}
                                                    content={[
                                                        <$Container key="p.TaskTracker.TaskEdit.container42"
                                                            $widgetId="p.TaskTracker.TaskEdit.container42"
                                                            class={"mx-name-container42"}
                                                            style={undefined}
                                                            renderMode={"div"}
                                                            onClick={undefined}
                                                            content={[
                                                                <$ConditionalVisibilityWrapper key="p.TaskTracker.TaskEdit.actionButton5$visibility"
                                                                    $widgetId="p.TaskTracker.TaskEdit.actionButton5$visibility"
                                                                    visible={ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Manager" }, { "type": "literal", "value": "Member" } ] }, "args": {} }
                                                                    })}
                                                                    contents={[
                                                                        <$ActionButton key="p.TaskTracker.TaskEdit.actionButton5"
                                                                            $widgetId="p.TaskTracker.TaskEdit.actionButton5"
                                                                            buttonId={"p.TaskTracker.TaskEdit.actionButton5"}
                                                                            class={"mx-name-actionButton5 d-block"}
                                                                            style={undefined}
                                                                            tabIndex={undefined}
                                                                            renderType={"link"}
                                                                            role={"button"}
                                                                            buttonClass={"btn-default"}
                                                                            caption={t([
                                                                                ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskEdit.listView1", "source": "object" } } }
                                                                                })
                                                                            ])}
                                                                            tooltip={TextProperty({
                                                                                "value": t([
                                                                                    ""
                                                                                ])
                                                                            })}
                                                                            icon={undefined}
                                                                            action={ActionProperty({
                                                                                "action": { "type": "callMicroflow", "argMap": { "FileUpload": { "widget": "p.TaskTracker.TaskEdit.listView1", "source": "object" } }, "config": { "operationId": "FopLWf8nAFWPakChMV9FZg", "validate": "view", "allowedRoles": [ "Manager", "Member" ] }, "disabledDuringExecution": true },
                                                                                "abortOnServerValidation": true
                                                                            })} />
                                                                    ]} />,
                                                                <$Text key="p.TaskTracker.TaskEdit.text39"
                                                                    $widgetId="p.TaskTracker.TaskEdit.text39"
                                                                    class={"mx-name-text39 text-bold text-small"}
                                                                    style={undefined}
                                                                    caption={t([
                                                                        ExpressionProperty({
                                                                            "expression": { "expr": { "type": "function", "name": "+", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "TaskTracker.FileUpload_MendixSSOUser_Account/MendixSSO.MendixSSOUser/DisplayName" }, { "type": "literal", "value": "\r\n" } ] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskEdit.listView1", "source": "object" } } }
                                                                        })
                                                                    ])}
                                                                    renderMode={"span"} />,
                                                                <$Text key="p.TaskTracker.TaskEdit.text38"
                                                                    $widgetId="p.TaskTracker.TaskEdit.text38"
                                                                    class={"mx-name-text38 text-detail text-small"}
                                                                    style={undefined}
                                                                    caption={t([
                                                                        ExpressionProperty({
                                                                            "expression": { "expr": { "type": "function", "name": "+", "parameters": [ { "type": "literal", "value": "| " }, { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "createdDate" }, { "type": "literal", "value": "{\"type\":\"custom\",\"pattern\":\"EEE d MMM yyyy,  H:mm\"}" } ] } ] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskEdit.listView1", "source": "object" } } }
                                                                        })
                                                                    ])}
                                                                    renderMode={"span"} />
                                                            ]}
                                                            ariaHidden={false} />
                                                    ]} />,
                                                <$Div key="p.TaskTracker.TaskEdit.layoutGrid4$row0$column2"
                                                    $widgetId="p.TaskTracker.TaskEdit.layoutGrid4$row0$column2"
                                                    class={"col-lg-auto col-md col"}
                                                    style={undefined}
                                                    content={[
                                                        <$Container key="p.TaskTracker.TaskEdit.container44"
                                                            $widgetId="p.TaskTracker.TaskEdit.container44"
                                                            class={"mx-name-container44 pull-right"}
                                                            style={undefined}
                                                            renderMode={"div"}
                                                            onClick={undefined}
                                                            content={[
                                                                <$ConditionalVisibilityWrapper key="p.TaskTracker.TaskEdit.actionButton6$visibility"
                                                                    $widgetId="p.TaskTracker.TaskEdit.actionButton6$visibility"
                                                                    visible={ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Manager" }, { "type": "literal", "value": "Member" } ] }, "args": {} }
                                                                    })}
                                                                    contents={[
                                                                        <$ActionButton key="p.TaskTracker.TaskEdit.actionButton6"
                                                                            $widgetId="p.TaskTracker.TaskEdit.actionButton6"
                                                                            buttonId={"p.TaskTracker.TaskEdit.actionButton6"}
                                                                            class={"mx-name-actionButton6 text-small text-danger pull-right"}
                                                                            style={undefined}
                                                                            tabIndex={undefined}
                                                                            renderType={"link"}
                                                                            role={"button"}
                                                                            buttonClass={"btn-default"}
                                                                            caption={t([
                                                                                ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "Delete" }, "args": {} }
                                                                                })
                                                                            ])}
                                                                            tooltip={TextProperty({
                                                                                "value": t([
                                                                                    ""
                                                                                ])
                                                                            })}
                                                                            icon={undefined}
                                                                            action={ActionProperty({
                                                                                "action": { "type": "deleteObject", "argMap": { "$object": { "widget": "p.TaskTracker.TaskEdit.listView1", "source": "object" } }, "config": { "closePage": false, "operationId": "qOhWPYGmQVCeC1pk7KUWNw" }, "disabledDuringExecution": true },
                                                                                "abortOnServerValidation": true
                                                                            })} />
                                                                    ]} />
                                                            ]}
                                                            ariaHidden={false} />
                                                    ]} />
                                            ]} />
                                    ]} />
                            ]
                        })}
                        onClick={undefined}
                        pageSize={10} />,
                    <$DataView key="p.TaskTracker.TaskEdit.dataView3"
                        $widgetId="p.TaskTracker.TaskEdit.dataView3"
                        class={"mx-name-dataView3 spacing-outer-bottom-medium form-vertical"}
                        style={undefined}
                        tabIndex={undefined}
                        object={MicroflowObjectProperty({
                            "dataSourceId": "p.251",
                            "scope": "p.TaskTracker.TaskEdit.dataView1",
                            "editable": true,
                            "operationId": "N1EaFbG20VqGNCTLw7kq5w",
                            "argMap": { "Task": { "widget": "$Task", "source": "object" } }
                        })}
                        emptyMessage={TextProperty({
                            "value": t([
                                ""
                            ])
                        })}
                        body={[
                            <$Container key="p.TaskTracker.TaskEdit.container1"
                                $widgetId="p.TaskTracker.TaskEdit.container1"
                                class={"mx-name-container1 row-left"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$FormGroup key="p.TaskTracker.TaskEdit.fileManager1$formGroup"
                                        $widgetId="p.TaskTracker.TaskEdit.fileManager1$formGroup"
                                        class={"mx-fileinput mx-name-fileManager1 file-uploader mx-filemanager"}
                                        style={undefined}
                                        control={[
                                            <$FileManager key="p.TaskTracker.TaskEdit.fileManager1"
                                                $widgetId="p.TaskTracker.TaskEdit.fileManager1"
                                                upload={FileUploadProperty({
                                                    "scope": "p.TaskTracker.TaskEdit.dataView3"
                                                })}
                                                showInBrowser={false}
                                                maxFileSize={5}
                                                extensions={""}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.TaskTracker.TaskEdit.fileManager1"
                                                })} />
                                        ]}
                                        caption={undefined}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.TaskTracker.TaskEdit.fileManager1"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.TaskTracker.TaskEdit.fileManager1"
                                        })} />,
                                    <$ConditionalVisibilityWrapper key="p.TaskTracker.TaskEdit.actionButton4$visibility"
                                        $widgetId="p.TaskTracker.TaskEdit.actionButton4$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Manager" }, { "type": "literal", "value": "Member" } ] }, "args": {} }
                                        })}
                                        contents={[
                                            <$ActionButton key="p.TaskTracker.TaskEdit.actionButton4"
                                                $widgetId="p.TaskTracker.TaskEdit.actionButton4"
                                                buttonId={"p.TaskTracker.TaskEdit.actionButton4"}
                                                class={"mx-name-actionButton4 pull-right spacing-outer-bottom-medium spacing-outer-left"}
                                                style={undefined}
                                                tabIndex={undefined}
                                                renderType={"button"}
                                                role={undefined}
                                                buttonClass={"btn-default"}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Upload file" }, "args": {} }
                                                    })
                                                ])}
                                                tooltip={TextProperty({
                                                    "value": t([
                                                        ""
                                                    ])
                                                })}
                                                icon={undefined}
                                                action={ActionProperty({
                                                    "action": { "type": "callMicroflow", "argMap": { "FileUpload": { "widget": "p.TaskTracker.TaskEdit.dataView3", "source": "object" }, "Task": { "widget": "$Task", "source": "object" } }, "config": { "operationId": "Z0oaImDuXliEq2gu6qNoOQ", "validate": "view", "allowedRoles": [ "Manager", "Member" ] }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />
                                ]}
                                ariaHidden={false} />
                        ]}
                        hideFooter={true}
                        footer={undefined} />
                ]} />
        ]}
        hideFooter={false}
        footer={[
            <$Div key="p.TaskTracker.TaskEdit.layoutGrid7"
                $widgetId="p.TaskTracker.TaskEdit.layoutGrid7"
                class={"mx-name-layoutGrid7 mx-layoutgrid mx-layoutgrid-fluid container-fluid spacing-inner-left-none spacing-inner-right-none"}
                style={undefined}
                content={[
                    <$Div key="p.TaskTracker.TaskEdit.layoutGrid7$row0"
                        $widgetId="p.TaskTracker.TaskEdit.layoutGrid7$row0"
                        class={"row"}
                        style={undefined}
                        content={[
                            <$Div key="p.TaskTracker.TaskEdit.layoutGrid7$row0$column0"
                                $widgetId="p.TaskTracker.TaskEdit.layoutGrid7$row0$column0"
                                class={"col-lg col-md col"}
                                style={undefined}
                                content={[
                                    <$ActionButton key="p.TaskTracker.TaskEdit.actionButton2"
                                        $widgetId="p.TaskTracker.TaskEdit.actionButton2"
                                        buttonId={"p.TaskTracker.TaskEdit.actionButton2"}
                                        class={"mx-name-actionButton2 btn-block pull-right spacing-outer-bottom"}
                                        style={undefined}
                                        tabIndex={undefined}
                                        renderType={"button"}
                                        role={undefined}
                                        buttonClass={"btn-default"}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Cancel changes" }, "args": {} }
                                            })
                                        ])}
                                        tooltip={TextProperty({
                                            "value": t([
                                                ""
                                            ])
                                        })}
                                        icon={undefined}
                                        action={ActionProperty({
                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "Q01jNMuagFK5vYEZvDxzlw", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />,
                    <$Div key="p.TaskTracker.TaskEdit.layoutGrid7$row1"
                        $widgetId="p.TaskTracker.TaskEdit.layoutGrid7$row1"
                        class={"row"}
                        style={undefined}
                        content={[
                            <$Div key="p.TaskTracker.TaskEdit.layoutGrid7$row1$column0"
                                $widgetId="p.TaskTracker.TaskEdit.layoutGrid7$row1$column0"
                                class={"col-lg col-md col"}
                                style={undefined}
                                content={[
                                    <$ConditionalVisibilityWrapper key="p.TaskTracker.TaskEdit.actionButton1$visibility"
                                        $widgetId="p.TaskTracker.TaskEdit.actionButton1$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Manager" }, { "type": "literal", "value": "Member" } ] }, "args": {} }
                                        })}
                                        contents={[
                                            <$ActionButton key="p.TaskTracker.TaskEdit.actionButton1"
                                                $widgetId="p.TaskTracker.TaskEdit.actionButton1"
                                                buttonId={"p.TaskTracker.TaskEdit.actionButton1"}
                                                class={"mx-name-actionButton1 btn-block spacing-outer-bottom"}
                                                style={undefined}
                                                tabIndex={undefined}
                                                renderType={"button"}
                                                role={undefined}
                                                buttonClass={"btn-primary"}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Save changes" }, "args": {} }
                                                    })
                                                ])}
                                                tooltip={TextProperty({
                                                    "value": t([
                                                        ""
                                                    ])
                                                })}
                                                icon={undefined}
                                                action={ActionProperty({
                                                    "action": { "type": "callMicroflow", "argMap": { "Task": { "widget": "$Task", "source": "object" } }, "config": { "operationId": "Gva+VP55a1GkZAZYWI8p6Q", "validate": "view", "allowedRoles": [ "Manager", "Member" ] }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />
                                ]} />
                        ]} />,
                    <$ConditionalVisibilityWrapper key="p.TaskTracker.TaskEdit.layoutGrid7$row2$visibility"
                        $widgetId="p.TaskTracker.TaskEdit.layoutGrid7$row2$visibility"
                        visible={ExpressionProperty({
                            "expression": { "expr": { "type": "function", "name": "not", "parameters": [ { "type": "function", "name": "isNew", "parameters": [ { "type": "variable", "variable": "currentObject" } ] } ] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskEdit.dataView1", "source": "object" } } }
                        })}
                        contents={[
                            <$Div key="p.TaskTracker.TaskEdit.layoutGrid7$row2"
                                $widgetId="p.TaskTracker.TaskEdit.layoutGrid7$row2"
                                class={"row"}
                                style={undefined}
                                content={[
                                    <$Div key="p.TaskTracker.TaskEdit.layoutGrid7$row2$column0"
                                        $widgetId="p.TaskTracker.TaskEdit.layoutGrid7$row2$column0"
                                        class={"col-lg col-md col"}
                                        style={undefined}
                                        content={[
                                            <$ConditionalVisibilityWrapper key="p.TaskTracker.TaskEdit.microflowTrigger1$visibility"
                                                $widgetId="p.TaskTracker.TaskEdit.microflowTrigger1$visibility"
                                                visible={ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Manager" }, { "type": "literal", "value": "Member" } ] }, "args": {} }
                                                })}
                                                contents={[
                                                    <$ActionButton key="p.TaskTracker.TaskEdit.microflowTrigger1"
                                                        $widgetId="p.TaskTracker.TaskEdit.microflowTrigger1"
                                                        buttonId={"p.TaskTracker.TaskEdit.microflowTrigger1"}
                                                        class={"mx-name-microflowTrigger1 btn-block pull-right spacing-outer-bottom"}
                                                        style={undefined}
                                                        tabIndex={undefined}
                                                        renderType={"button"}
                                                        role={undefined}
                                                        buttonClass={"btn-danger"}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Delete" }, "args": {} }
                                                            })
                                                        ])}
                                                        tooltip={TextProperty({
                                                            "value": t([
                                                                ""
                                                            ])
                                                        })}
                                                        icon={undefined}
                                                        action={ActionProperty({
                                                            "action": { "type": "deleteObject", "argMap": { "$object": { "widget": "$Task", "source": "object" } }, "config": { "closePage": true, "operationId": "1aTTEb8oNliNxTtQjJlOPg" }, "disabledDuringExecution": true },
                                                            "abortOnServerValidation": true
                                                        })} />
                                                ]} />
                                        ]} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Task"
]);

export const classes = "fullscreen mx-window-view";

export const cancelChangesOperationId = "3/Nvt5ySDVqJORyB9CgATQ";
export const style = {};
export const content = { ...parentContent,
    "TaskTracker.FullScreenPopup.Main": region$Main,
};
