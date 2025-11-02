import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListAttributeProperty } from "mendix/ListAttributeProperty";
import { ListExpressionProperty } from "mendix/ListExpressionProperty";

import { Container } from "mendix/widgets/web/Container";
import * as DatagridWidgetModule from "C:/Users/TaraR/Mendix/TaskApp/deployment/web/widgets/com/mendix/widget/web/datagrid/Datagrid.mjs";
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;   
import "C:/Users/TaraR/Mendix/TaskApp/deployment/web/widgets/com/mendix/widget/web/datagrid/Datagrid.css";
import { Div } from "mendix/widgets/web/Div";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.Atlas_Default.js";

const { $Container, $Div, $Text, $Datagrid } = asPluginWidgets({ Container, Div, Text, Datagrid });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Container key="p.Administration.RuntimeInstances.container1"
        $widgetId="p.Administration.RuntimeInstances.container1"
        class={"mx-name-container1 pageheader pageheader-fullwidth"}
        style={undefined}
        renderMode={"div"}
        onClick={undefined}
        content={[
            <$Div key="p.Administration.RuntimeInstances.layoutGrid1"
                $widgetId="p.Administration.RuntimeInstances.layoutGrid1"
                class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
                style={undefined}
                content={[
                    <$Div key="p.Administration.RuntimeInstances.layoutGrid1$row0"
                        $widgetId="p.Administration.RuntimeInstances.layoutGrid1$row0"
                        class={"row"}
                        style={undefined}
                        content={[
                            <$Div key="p.Administration.RuntimeInstances.layoutGrid1$row0$column0"
                                $widgetId="p.Administration.RuntimeInstances.layoutGrid1$row0$column0"
                                class={"col-lg-12 col-md-12 col-12"}
                                style={undefined}
                                content={[
                                    <$Text key="p.Administration.RuntimeInstances.label1"
                                        $widgetId="p.Administration.RuntimeInstances.label1"
                                        class={"mx-name-label1 pageheader-title"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Runtime Instances" }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"h2"} />
                                ]} />
                        ]} />
                ]} />
        ]}
        ariaHidden={false} />,
    <$Div key="p.Administration.RuntimeInstances.layoutGrid2"
        $widgetId="p.Administration.RuntimeInstances.layoutGrid2"
        class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.Administration.RuntimeInstances.layoutGrid2$row0"
                $widgetId="p.Administration.RuntimeInstances.layoutGrid2$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.Administration.RuntimeInstances.layoutGrid2$row0$column0"
                        $widgetId="p.Administration.RuntimeInstances.layoutGrid2$row0$column0"
                        class={"col-lg-12 col-md-12 col-12"}
                        style={undefined}
                        content={[
                            <$Datagrid key="p.Administration.RuntimeInstances.dataGrid21"
                                $widgetId="p.Administration.RuntimeInstances.dataGrid21"
                                advanced={false}
                                datasource={DatabaseObjectListProperty({
                                    "dataSourceId": "p.10",
                                    "entity": "System.XASInstance",
                                    "operationId": "DBbndcVKYVqgPTqkwQ2q2A",
                                    "sort": [
                                        [
                                            "XASId",
                                            "asc"
                                        ]
                                    ]
                                })}
                                refreshInterval={0}
                                itemSelectionMethod={"checkbox"}
                                showSelectAllToggle={true}
                                columns={[
                                    {
                                        "showContentAs": "attribute",
                                        "attribute": ListAttributeProperty({
                                            "path": "",
                                            "entity": "System.XASInstance",
                                            "attribute": "XASId",
                                            "attributeType": "String",
                                            "sortable": true,
                                            "filterable": true,
                                            "dataSourceId": "p.10",
                                            "isList": false
                                        }),
                                        "content": undefined,
                                        "dynamicText": t([
                                            undefined
                                        ]),
                                        "header": t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Runtime ID" }, "args": {} }
                                            })
                                        ]),
                                        "tooltip": t([
                                            undefined
                                        ]),
                                        "filter": undefined,
                                        "sortable": true,
                                        "resizable": true,
                                        "draggable": true,
                                        "hidable": "yes",
                                        "width": "autoFill",
                                        "size": 1,
                                        "alignment": "left",
                                        "wrapText": false,
                                        "visible": ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                        }),
                                        "minWidth": "auto",
                                        "minWidthLimit": 100
                                    },
                                    {
                                        "showContentAs": "dynamicText",
                                        "attribute": ListAttributeProperty({
                                            "path": "",
                                            "entity": "System.XASInstance",
                                            "attribute": "createdDate",
                                            "attributeType": "DateTime",
                                            "sortable": true,
                                            "filterable": true,
                                            "dataSourceId": "p.10",
                                            "isList": false
                                        }),
                                        "content": undefined,
                                        "dynamicText": t([
                                            ListExpressionProperty({
                                                "expression": { "expr": { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "createdDate" }, { "type": "literal", "value": "{\"type\":\"datetime\"}" } ] }, "args": { "currentObject": { "widget": "p.Administration.RuntimeInstances.dataGrid21", "source": "object" } } },
                                                "dataSourceId": "p.10"
                                            })
                                        ]),
                                        "header": t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Created" }, "args": {} }
                                            })
                                        ]),
                                        "tooltip": t([
                                            undefined
                                        ]),
                                        "filter": undefined,
                                        "sortable": true,
                                        "resizable": true,
                                        "draggable": true,
                                        "hidable": "yes",
                                        "width": "autoFill",
                                        "size": 1,
                                        "alignment": "left",
                                        "wrapText": false,
                                        "visible": ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                        }),
                                        "minWidth": "auto",
                                        "minWidthLimit": 100
                                    },
                                    {
                                        "showContentAs": "attribute",
                                        "attribute": ListAttributeProperty({
                                            "path": "",
                                            "entity": "System.XASInstance",
                                            "attribute": "AllowedNumberOfConcurrentUsers",
                                            "attributeType": "Integer",
                                            "sortable": true,
                                            "filterable": true,
                                            "dataSourceId": "p.10",
                                            "isList": false
                                        }),
                                        "content": undefined,
                                        "dynamicText": t([
                                            undefined
                                        ]),
                                        "header": t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Allowed concurrent users" }, "args": {} }
                                            })
                                        ]),
                                        "tooltip": t([
                                            undefined
                                        ]),
                                        "filter": undefined,
                                        "sortable": true,
                                        "resizable": true,
                                        "draggable": true,
                                        "hidable": "yes",
                                        "width": "autoFill",
                                        "size": 1,
                                        "alignment": "left",
                                        "wrapText": false,
                                        "visible": ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                        }),
                                        "minWidth": "auto",
                                        "minWidthLimit": 100
                                    },
                                    {
                                        "showContentAs": "attribute",
                                        "attribute": ListAttributeProperty({
                                            "path": "",
                                            "entity": "System.XASInstance",
                                            "attribute": "PartnerName",
                                            "attributeType": "String",
                                            "sortable": true,
                                            "filterable": true,
                                            "dataSourceId": "p.10",
                                            "isList": false
                                        }),
                                        "content": undefined,
                                        "dynamicText": t([
                                            undefined
                                        ]),
                                        "header": t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Partner" }, "args": {} }
                                            })
                                        ]),
                                        "tooltip": t([
                                            undefined
                                        ]),
                                        "filter": undefined,
                                        "sortable": true,
                                        "resizable": true,
                                        "draggable": true,
                                        "hidable": "yes",
                                        "width": "autoFill",
                                        "size": 1,
                                        "alignment": "left",
                                        "wrapText": false,
                                        "visible": ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                        }),
                                        "minWidth": "auto",
                                        "minWidthLimit": 100
                                    },
                                    {
                                        "showContentAs": "attribute",
                                        "attribute": ListAttributeProperty({
                                            "path": "",
                                            "entity": "System.XASInstance",
                                            "attribute": "CustomerName",
                                            "attributeType": "String",
                                            "sortable": true,
                                            "filterable": true,
                                            "dataSourceId": "p.10",
                                            "isList": false
                                        }),
                                        "content": undefined,
                                        "dynamicText": t([
                                            undefined
                                        ]),
                                        "header": t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Customer" }, "args": {} }
                                            })
                                        ]),
                                        "tooltip": t([
                                            undefined
                                        ]),
                                        "filter": undefined,
                                        "sortable": true,
                                        "resizable": true,
                                        "draggable": true,
                                        "hidable": "yes",
                                        "width": "autoFill",
                                        "size": 1,
                                        "alignment": "left",
                                        "wrapText": false,
                                        "visible": ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                        }),
                                        "minWidth": "auto",
                                        "minWidthLimit": 100
                                    }
                                ]}
                                columnsFilterable={true}
                                pageSize={20}
                                pagination={"buttons"}
                                pagingPosition={"bottom"}
                                showEmptyPlaceholder={"none"}
                                emptyPlaceholder={undefined}
                                rowClass={undefined}
                                onClick={undefined}
                                onSelectionChange={undefined}
                                columnsSortable={true}
                                columnsResizable={true}
                                columnsDraggable={true}
                                columnsHidable={true}
                                filterList={[]}
                                filtersPlaceholder={undefined}
                                filterSectionTitle={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                ])}
                                exportDialogLabel={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Export progress" }, "args": {} }
                                    })
                                ])}
                                cancelExportLabel={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Cancel data export" }, "args": {} }
                                    })
                                ])}
                                showPagingButtons={"always"}
                                onClickTrigger={"single"}
                                selectRowLabel={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Select row" }, "args": {} }
                                    })
                                ])}
                                class={"mx-name-dataGrid21"}
                                style={undefined}
                                tabIndex={undefined} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Runtime Instances"
]);

export const classes = "layout-atlas layout-atlas-responsive-default";

export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.Atlas_Default.Main": region$Main,
};
