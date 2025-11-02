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
import { TabContainer } from "mendix/widgets/web/TabContainer";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/TaskTracker.Tasks_TopBar.js";

const { $TabContainer, $ListView, $Div, $Text, $ConditionalVisibilityWrapper, $ActionButton, $Container } = asPluginWidgets({ TabContainer, ListView, Div, Text, ConditionalVisibilityWrapper, ActionButton, Container });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$TabContainer key="p.TaskTracker.SLA_Dashboard.tabContainer1"
        $widgetId="p.TaskTracker.SLA_Dashboard.tabContainer1"
        class={"mx-name-tabContainer1"}
        style={undefined}
        tabIndex={undefined}
        widgetId={"p.TaskTracker.SLA_Dashboard.tabContainer1"}
        defaultTab={0}
        tabs={[
            {
                "name": "tabPage1",
                "caption": TextProperty({
                    "value": t([
                        "Missed"
                    ])
                }),
                "isDelayed": false,
                "refreshOnShow": false,
                "content": [
                    <$ListView key="p.TaskTracker.SLA_Dashboard.listView4"
                        $widgetId="p.TaskTracker.SLA_Dashboard.listView4"
                        class={"mx-name-listView4 listview-lined listview-hover"}
                        style={undefined}
                        listValue={DatabaseObjectListProperty({
                            "dataSourceId": "p.2",
                            "entity": "TaskTracker.Task",
                            "operationId": "Kv73I5mcxVmHEU/BThZnSA",
                            "sort": [
                                [
                                    "CompletionDate",
                                    "desc"
                                ]
                            ],
                            "constraints": { "type": "function", "name": "=", "parameters": [ { "type": "attribute", "attribute": "SLADashboardStatus", "context": "TaskTracker.Task", "attributeType": "#TaskTracker.Enumeration" }, { "type": "literal", "value": "SLA_Missed" } ] }
                        })}
                        itemTemplate={TemplatedWidgetProperty({
                            "dataSourceId": "p.2",
                            "editable": false,
                            "children": () => [
                                <$Div key="p.TaskTracker.SLA_Dashboard.layoutGrid3"
                                    $widgetId="p.TaskTracker.SLA_Dashboard.layoutGrid3"
                                    class={"mx-name-layoutGrid3 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
                                    style={undefined}
                                    content={[
                                        <$Div key="p.TaskTracker.SLA_Dashboard.layoutGrid3$row0"
                                            $widgetId="p.TaskTracker.SLA_Dashboard.layoutGrid3$row0"
                                            class={"row align-children-center"}
                                            style={undefined}
                                            content={[
                                                <$Div key="p.TaskTracker.SLA_Dashboard.layoutGrid3$row0$column0"
                                                    $widgetId="p.TaskTracker.SLA_Dashboard.layoutGrid3$row0$column0"
                                                    class={"col-lg col-md col"}
                                                    style={undefined}
                                                    content={[
                                                        <$Text key="p.TaskTracker.SLA_Dashboard.text11"
                                                            $widgetId="p.TaskTracker.SLA_Dashboard.text11"
                                                            class={"mx-name-text11 spacing-outer-bottom-none"}
                                                            style={undefined}
                                                            caption={t([
                                                                ExpressionProperty({
                                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Title" }, "args": { "currentObject": { "widget": "p.TaskTracker.SLA_Dashboard.listView4", "source": "object" } } }
                                                                })
                                                            ])}
                                                            renderMode={"h4"} />,
                                                        <$Text key="p.TaskTracker.SLA_Dashboard.text44"
                                                            $widgetId="p.TaskTracker.SLA_Dashboard.text44"
                                                            class={"mx-name-text44 spacing-outer-bottom-none"}
                                                            style={undefined}
                                                            caption={t([
                                                                ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "+", "parameters": [ { "type": "literal", "value": " " }, { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "CompletionDate" }, { "type": "literal", "value": "{\"type\":\"date\"}" } ] } ] }, "args": { "currentObject": { "widget": "p.TaskTracker.SLA_Dashboard.listView4", "source": "object" } } }
                                                                })
                                                            ])}
                                                            renderMode={"p"} />,
                                                        <$Text key="p.TaskTracker.SLA_Dashboard.text45"
                                                            $widgetId="p.TaskTracker.SLA_Dashboard.text45"
                                                            class={"mx-name-text45 spacing-outer-bottom-none"}
                                                            style={undefined}
                                                            caption={t([
                                                                ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "SLADashboardStatus" }, { "type": "literal", "value": "TaskTracker.Enumeration" } ] }, "args": { "currentObject": { "widget": "p.TaskTracker.SLA_Dashboard.listView4", "source": "object" } } }
                                                                })
                                                            ])}
                                                            renderMode={"p"} />,
                                                        <$Text key="p.TaskTracker.SLA_Dashboard.text46"
                                                            $widgetId="p.TaskTracker.SLA_Dashboard.text46"
                                                            class={"mx-name-text46 spacing-outer-bottom-none"}
                                                            style={undefined}
                                                            caption={t([
                                                                ExpressionProperty({
                                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "TaskTracker.Task_Department/TaskTracker.Department/Name" }, "args": { "currentObject": { "widget": "p.TaskTracker.SLA_Dashboard.listView4", "source": "object" } } }
                                                                })
                                                            ])}
                                                            renderMode={"p"} />
                                                    ]} />,
                                                <$Div key="p.TaskTracker.SLA_Dashboard.layoutGrid3$row0$column1"
                                                    $widgetId="p.TaskTracker.SLA_Dashboard.layoutGrid3$row0$column1"
                                                    class={"col-lg-auto col-md-auto col-auto"}
                                                    style={undefined}
                                                    content={[
                                                        <$ConditionalVisibilityWrapper key="p.TaskTracker.SLA_Dashboard.actionButton5$visibility"
                                                            $widgetId="p.TaskTracker.SLA_Dashboard.actionButton5$visibility"
                                                            visible={ExpressionProperty({
                                                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Manager" }, { "type": "literal", "value": "Member" } ] }, "args": {} }
                                                            })}
                                                            contents={[
                                                                <$ActionButton key="p.TaskTracker.SLA_Dashboard.actionButton5"
                                                                    $widgetId="p.TaskTracker.SLA_Dashboard.actionButton5"
                                                                    buttonId={"p.TaskTracker.SLA_Dashboard.actionButton5"}
                                                                    class={"mx-name-actionButton5"}
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
                                                                        "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-trash-can" }
                                                                    })}
                                                                    action={ActionProperty({
                                                                        "action": { "type": "deleteObject", "argMap": { "$object": { "widget": "p.TaskTracker.SLA_Dashboard.listView4", "source": "object" } }, "config": { "closePage": false, "operationId": "uGDkfw4is1GmeCjWciHzBA" }, "disabledDuringExecution": true },
                                                                        "abortOnServerValidation": true
                                                                    })} />
                                                            ]} />
                                                    ]} />
                                            ]} />
                                    ]} />
                            ]
                        })}
                        onClick={undefined}
                        pageSize={5} />
                ]
            },
            {
                "name": "tabPage2",
                "caption": TextProperty({
                    "value": t([
                        "All"
                    ])
                }),
                "isDelayed": true,
                "refreshOnShow": false,
                "content": [
                    <$ListView key="p.TaskTracker.SLA_Dashboard.listView3"
                        $widgetId="p.TaskTracker.SLA_Dashboard.listView3"
                        class={"mx-name-listView3 listview-lined listview-hover"}
                        style={undefined}
                        listValue={DatabaseObjectListProperty({
                            "dataSourceId": "p.5",
                            "entity": "TaskTracker.Task",
                            "operationId": "e/D++F+dFFaH7qP7PqiPkA",
                            "sort": []
                        })}
                        itemTemplate={TemplatedWidgetProperty({
                            "dataSourceId": "p.5",
                            "editable": false,
                            "children": () => [
                                <$Div key="p.TaskTracker.SLA_Dashboard.layoutGrid1"
                                    $widgetId="p.TaskTracker.SLA_Dashboard.layoutGrid1"
                                    class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
                                    style={undefined}
                                    content={[
                                        <$Div key="p.TaskTracker.SLA_Dashboard.layoutGrid1$row0"
                                            $widgetId="p.TaskTracker.SLA_Dashboard.layoutGrid1$row0"
                                            class={"row align-children-center"}
                                            style={undefined}
                                            content={[
                                                <$Div key="p.TaskTracker.SLA_Dashboard.layoutGrid1$row0$column0"
                                                    $widgetId="p.TaskTracker.SLA_Dashboard.layoutGrid1$row0$column0"
                                                    class={"col-lg col-md col"}
                                                    style={undefined}
                                                    content={[
                                                        <$Text key="p.TaskTracker.SLA_Dashboard.text10"
                                                            $widgetId="p.TaskTracker.SLA_Dashboard.text10"
                                                            class={"mx-name-text10 spacing-outer-bottom-none"}
                                                            style={undefined}
                                                            caption={t([
                                                                ExpressionProperty({
                                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Title" }, "args": { "currentObject": { "widget": "p.TaskTracker.SLA_Dashboard.listView3", "source": "object" } } }
                                                                })
                                                            ])}
                                                            renderMode={"h4"} />,
                                                        <$Text key="p.TaskTracker.SLA_Dashboard.text41"
                                                            $widgetId="p.TaskTracker.SLA_Dashboard.text41"
                                                            class={"mx-name-text41 spacing-outer-bottom-none"}
                                                            style={undefined}
                                                            caption={t([
                                                                ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "+", "parameters": [ { "type": "literal", "value": " " }, { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "CompletionDate" }, { "type": "literal", "value": "{\"type\":\"date\"}" } ] } ] }, "args": { "currentObject": { "widget": "p.TaskTracker.SLA_Dashboard.listView3", "source": "object" } } }
                                                                })
                                                            ])}
                                                            renderMode={"p"} />,
                                                        <$Text key="p.TaskTracker.SLA_Dashboard.text42"
                                                            $widgetId="p.TaskTracker.SLA_Dashboard.text42"
                                                            class={"mx-name-text42 spacing-outer-bottom-none"}
                                                            style={undefined}
                                                            caption={t([
                                                                ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "SLADashboardStatus" }, { "type": "literal", "value": "TaskTracker.Enumeration" } ] }, "args": { "currentObject": { "widget": "p.TaskTracker.SLA_Dashboard.listView3", "source": "object" } } }
                                                                })
                                                            ])}
                                                            renderMode={"p"} />,
                                                        <$Text key="p.TaskTracker.SLA_Dashboard.text43"
                                                            $widgetId="p.TaskTracker.SLA_Dashboard.text43"
                                                            class={"mx-name-text43 spacing-outer-bottom-none"}
                                                            style={undefined}
                                                            caption={t([
                                                                ExpressionProperty({
                                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "TaskTracker.Task_Department/TaskTracker.Department/Name" }, "args": { "currentObject": { "widget": "p.TaskTracker.SLA_Dashboard.listView3", "source": "object" } } }
                                                                })
                                                            ])}
                                                            renderMode={"p"} />
                                                    ]} />,
                                                <$Div key="p.TaskTracker.SLA_Dashboard.layoutGrid1$row0$column1"
                                                    $widgetId="p.TaskTracker.SLA_Dashboard.layoutGrid1$row0$column1"
                                                    class={"col-lg-auto col-md-auto col-auto"}
                                                    style={undefined}
                                                    content={[
                                                        <$ConditionalVisibilityWrapper key="p.TaskTracker.SLA_Dashboard.actionButton4$visibility"
                                                            $widgetId="p.TaskTracker.SLA_Dashboard.actionButton4$visibility"
                                                            visible={ExpressionProperty({
                                                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Manager" }, { "type": "literal", "value": "Member" } ] }, "args": {} }
                                                            })}
                                                            contents={[
                                                                <$ActionButton key="p.TaskTracker.SLA_Dashboard.actionButton4"
                                                                    $widgetId="p.TaskTracker.SLA_Dashboard.actionButton4"
                                                                    buttonId={"p.TaskTracker.SLA_Dashboard.actionButton4"}
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
                                                                        "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-trash-can" }
                                                                    })}
                                                                    action={ActionProperty({
                                                                        "action": { "type": "deleteObject", "argMap": { "$object": { "widget": "p.TaskTracker.SLA_Dashboard.listView3", "source": "object" } }, "config": { "closePage": false, "operationId": "Oiph7n2/WliNq2ltTchimQ" }, "disabledDuringExecution": true },
                                                                        "abortOnServerValidation": true
                                                                    })} />
                                                            ]} />
                                                    ]} />
                                            ]} />
                                    ]} />
                            ]
                        })}
                        onClick={undefined}
                        pageSize={5} />
                ]
            }
        ]} />,
    <$Div key="p.TaskTracker.SLA_Dashboard.layoutGrid2"
        $widgetId="p.TaskTracker.SLA_Dashboard.layoutGrid2"
        class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.TaskTracker.SLA_Dashboard.layoutGrid2$row0"
                $widgetId="p.TaskTracker.SLA_Dashboard.layoutGrid2$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.TaskTracker.SLA_Dashboard.layoutGrid2$row0$column0"
                        $widgetId="p.TaskTracker.SLA_Dashboard.layoutGrid2$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$Container key="p.TaskTracker.SLA_Dashboard.container2"
                                $widgetId="p.TaskTracker.SLA_Dashboard.container2"
                                class={"mx-name-container2 background-white"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={undefined}
                                ariaHidden={false} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "SLA Dashboard"
]);

export const classes = "layout-atlas layout-atlas-responsive-topbar";

export const style = {};
export const content = { ...parentContent,
    "TaskTracker.Tasks_TopBar.Main": region$Main,
};
