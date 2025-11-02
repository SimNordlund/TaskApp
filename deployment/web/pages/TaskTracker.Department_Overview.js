import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { TemplatedWidgetProperty } from "mendix/TemplatedWidgetProperty";
import { TextProperty } from "mendix/TextProperty";
import { WebIconProperty } from "mendix/WebIconProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/web/Container";
import { Div } from "mendix/widgets/web/Div";
import { ListView } from "mendix/widgets/web/ListView";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/TaskTracker.Tasks_TopBar.js";

const { $Div, $ConditionalVisibilityWrapper, $ActionButton, $Container, $ListView, $Text } = asPluginWidgets({ Div, ConditionalVisibilityWrapper, ActionButton, Container, ListView, Text });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.TaskTracker.Department_Overview.layoutGrid2"
        $widgetId="p.TaskTracker.Department_Overview.layoutGrid2"
        class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.TaskTracker.Department_Overview.layoutGrid2$row0"
                $widgetId="p.TaskTracker.Department_Overview.layoutGrid2$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.TaskTracker.Department_Overview.layoutGrid2$row0$column0"
                        $widgetId="p.TaskTracker.Department_Overview.layoutGrid2$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$ConditionalVisibilityWrapper key="p.TaskTracker.Department_Overview.actionButton1$visibility"
                                $widgetId="p.TaskTracker.Department_Overview.actionButton1$visibility"
                                visible={ExpressionProperty({
                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Manager" }, { "type": "literal", "value": "Member" } ] }, "args": {} }
                                })}
                                contents={[
                                    <$ActionButton key="p.TaskTracker.Department_Overview.actionButton1"
                                        $widgetId="p.TaskTracker.Department_Overview.actionButton1"
                                        buttonId={"p.TaskTracker.Department_Overview.actionButton1"}
                                        class={"mx-name-actionButton1"}
                                        style={undefined}
                                        tabIndex={undefined}
                                        renderType={"button"}
                                        role={undefined}
                                        buttonClass={"btn-default"}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Add" }, "args": {} }
                                            })
                                        ])}
                                        tooltip={TextProperty({
                                            "value": t([
                                                ""
                                            ])
                                        })}
                                        icon={undefined}
                                        action={ActionProperty({
                                            "action": { "type": "createObject", "argMap": {}, "config": { "entity": "TaskTracker.Department", "operationId": "klcm3x+5lVOamEPOjMSc4A", "pageSettings": { "name": "TaskTracker/Department_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": [ "Manager", "Member" ] }, "allowedRoles": [ "Manager", "Member" ], "objectParameter": "param$Department" }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />
                ]} />,
            <$Div key="p.TaskTracker.Department_Overview.layoutGrid2$row1"
                $widgetId="p.TaskTracker.Department_Overview.layoutGrid2$row1"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.TaskTracker.Department_Overview.layoutGrid2$row1$column0"
                        $widgetId="p.TaskTracker.Department_Overview.layoutGrid2$row1$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$Container key="p.TaskTracker.Department_Overview.container2"
                                $widgetId="p.TaskTracker.Department_Overview.container2"
                                class={"mx-name-container2 background-white"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$ListView key="p.TaskTracker.Department_Overview.listView3"
                                        $widgetId="p.TaskTracker.Department_Overview.listView3"
                                        class={"mx-name-listView3 listview-lined listview-hover"}
                                        style={undefined}
                                        listValue={DatabaseObjectListProperty({
                                            "dataSourceId": "p.2",
                                            "entity": "TaskTracker.Department",
                                            "operationId": "OR+HVLlRPlSV7Gw/5orJAg",
                                            "sort": []
                                        })}
                                        itemTemplate={TemplatedWidgetProperty({
                                            "dataSourceId": "p.2",
                                            "editable": false,
                                            "children": () => [
                                                <$Div key="p.TaskTracker.Department_Overview.layoutGrid1"
                                                    $widgetId="p.TaskTracker.Department_Overview.layoutGrid1"
                                                    class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid"}
                                                    style={undefined}
                                                    content={[
                                                        <$Div key="p.TaskTracker.Department_Overview.layoutGrid1$row0"
                                                            $widgetId="p.TaskTracker.Department_Overview.layoutGrid1$row0"
                                                            class={"row align-children-center"}
                                                            style={undefined}
                                                            content={[
                                                                <$Div key="p.TaskTracker.Department_Overview.layoutGrid1$row0$column0"
                                                                    $widgetId="p.TaskTracker.Department_Overview.layoutGrid1$row0$column0"
                                                                    class={"col-lg col-md col"}
                                                                    style={undefined}
                                                                    content={[
                                                                        <$Text key="p.TaskTracker.Department_Overview.text10"
                                                                            $widgetId="p.TaskTracker.Department_Overview.text10"
                                                                            class={"mx-name-text10 spacing-outer-bottom-none"}
                                                                            style={undefined}
                                                                            caption={t([
                                                                                ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p.TaskTracker.Department_Overview.listView3", "source": "object" } } }
                                                                                })
                                                                            ])}
                                                                            renderMode={"h4"} />
                                                                    ]} />,
                                                                <$Div key="p.TaskTracker.Department_Overview.layoutGrid1$row0$column1"
                                                                    $widgetId="p.TaskTracker.Department_Overview.layoutGrid1$row0$column1"
                                                                    class={"col-lg-auto col-md-auto col-auto"}
                                                                    style={undefined}
                                                                    content={[
                                                                        <$ActionButton key="p.TaskTracker.Department_Overview.actionButton4"
                                                                            $widgetId="p.TaskTracker.Department_Overview.actionButton4"
                                                                            buttonId={"p.TaskTracker.Department_Overview.actionButton4"}
                                                                            class={"mx-name-actionButton4"}
                                                                            style={undefined}
                                                                            tabIndex={undefined}
                                                                            renderType={"link"}
                                                                            role={"button"}
                                                                            buttonClass={"btn-default"}
                                                                            caption={t([
                                                                                ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                })
                                                                            ])}
                                                                            tooltip={TextProperty({
                                                                                "value": t([
                                                                                    "Menu Right Icon"
                                                                                ])
                                                                            })}
                                                                            icon={WebIconProperty({
                                                                                "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-chevron-right" }
                                                                            })}
                                                                            action={undefined} />
                                                                    ]} />
                                                            ]} />
                                                    ]} />
                                            ]
                                        })}
                                        onClick={undefined}
                                        pageSize={5} />
                                ]}
                                ariaHidden={false} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Department Overview"
]);

export const classes = "layout-atlas layout-atlas-responsive-topbar";

export const style = {};
export const content = { ...parentContent,
    "TaskTracker.Tasks_TopBar.Main": region$Main,
};
