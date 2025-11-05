import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListActionProperty } from "mendix/ListActionProperty";
import { MicroflowObjectProperty } from "mendix/MicroflowObjectProperty";
import { TemplatedWidgetProperty } from "mendix/TemplatedWidgetProperty";
import { TextProperty } from "mendix/TextProperty";
import { WebStaticImageProperty } from "mendix/WebStaticImageProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/web/Container";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { Fragment } from "mendix/widgets/web/Fragment";
import * as GalleryWidgetModule from "C:/Users/TaraR/Mendix/TaskApp/deployment/web/widgets/com/mendix/widget/web/gallery/Gallery.mjs";
const Gallery = Object.getOwnPropertyDescriptor(GalleryWidgetModule, "Gallery")?.value || Object.getOwnPropertyDescriptor(GalleryWidgetModule, "default")?.value;   
import * as ImageWidgetModule from "C:/Users/TaraR/Mendix/TaskApp/deployment/web/widgets/com/mendix/widget/web/image/Image.mjs";
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;   
import "C:/Users/TaraR/Mendix/TaskApp/deployment/web/widgets/com/mendix/widget/web/image/Image.css";
import * as ProgressBarWidgetModule from "C:/Users/TaraR/Mendix/TaskApp/deployment/web/widgets/com/mendix/widget/custom/progressbar/ProgressBar.mjs";
const ProgressBar = Object.getOwnPropertyDescriptor(ProgressBarWidgetModule, "ProgressBar")?.value || Object.getOwnPropertyDescriptor(ProgressBarWidgetModule, "default")?.value;   
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/TaskTracker.Tasks_TopBar.js";

const { $Fragment, $Container, $Image, $Text, $DataView, $Div, $ProgressBar, $ConditionalVisibilityWrapper, $ActionButton, $Gallery } = asPluginWidgets({ Fragment, Container, Image, Text, DataView, Div, ProgressBar, ConditionalVisibilityWrapper, ActionButton, Gallery });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Fragment key="p.TaskTracker.TeamOverview.snippetCall1"
        $widgetId="p.TaskTracker.TeamOverview.snippetCall1"
        content={[
            <$Container key="p.TaskTracker.Header.container5"
                $widgetId="p.TaskTracker.Header.container5"
                class={"mx-name-container5 pageheader spacing-outer-bottom-large"}
                style={undefined}
                renderMode={"div"}
                onClick={undefined}
                content={[
                    <$Image key="p.TaskTracker.Header.image1"
                        $widgetId="p.TaskTracker.Header.image1"
                        datasource={"image"}
                        imageObject={WebStaticImageProperty({
                            "image": { "uri": "img/TaskTracker$Images$aerospace.jpg" }
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
                        widthUnit={"auto"}
                        width={100}
                        heightUnit={"auto"}
                        height={100}
                        iconSize={14}
                        displayAs={"fullImage"}
                        responsive={false}
                        class={"mx-name-image1 pageheader-img"}
                        style={undefined}
                        tabIndex={undefined} />,
                    <$Container key="p.TaskTracker.Header.container101"
                        $widgetId="p.TaskTracker.Header.container101"
                        class={"mx-name-container101 pageheader-title-container"}
                        style={undefined}
                        renderMode={"div"}
                        onClick={undefined}
                        content={[
                            <$Text key="p.TaskTracker.Header.text5"
                                $widgetId="p.TaskTracker.Header.text5"
                                class={"mx-name-text5 text-bold text-white spacing-outer-bottom"}
                                style={undefined}
                                caption={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Mendix Aerospace " }, "args": {} }
                                    })
                                ])}
                                renderMode={"h1"} />,
                            <$DataView key="p.TaskTracker.Header.dataView2"
                                $widgetId="p.TaskTracker.Header.dataView2"
                                class={"mx-name-dataView2 form-vertical"}
                                style={undefined}
                                tabIndex={undefined}
                                object={MicroflowObjectProperty({
                                    "dataSourceId": "p.15",
                                    "editable": false,
                                    "operationId": "Uec7Z7nWl1agFO5WbxIUFw",
                                    "argMap": {}
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$Text key="p.TaskTracker.Header.text20"
                                        $widgetId="p.TaskTracker.Header.text20"
                                        class={"mx-name-text20 text-semibold text-white"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "function", "name": "+", "parameters": [ { "type": "literal", "value": "Welcome, " }, { "type": "variable", "variable": "currentObject", "path": "DisplayName" } ] }, "args": { "currentObject": { "widget": "p.TaskTracker.Header.dataView2", "source": "object" } } }
                                            })
                                        ])}
                                        renderMode={"h3"} />
                                ]}
                                hideFooter={true}
                                footer={undefined} />
                        ]}
                        ariaHidden={false} />,
                    <$Div key="p.TaskTracker.Header.layoutGrid1"
                        $widgetId="p.TaskTracker.Header.layoutGrid1"
                        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid progress-container header-card shadow"}
                        style={undefined}
                        content={[
                            <$Div key="p.TaskTracker.TeamOverview.layoutGrid1$row0"
                                $widgetId="p.TaskTracker.TeamOverview.layoutGrid1$row0"
                                class={"row"}
                                style={undefined}
                                content={[
                                    <$Div key="p.TaskTracker.TeamOverview.layoutGrid1$row0$column0"
                                        $widgetId="p.TaskTracker.TeamOverview.layoutGrid1$row0$column0"
                                        class={"col-lg col-md col"}
                                        style={undefined}
                                        content={[
                                            <$DataView key="p.TaskTracker.Header.dataView1"
                                                $widgetId="p.TaskTracker.Header.dataView1"
                                                class={"mx-name-dataView1 form-vertical"}
                                                style={undefined}
                                                tabIndex={undefined}
                                                object={MicroflowObjectProperty({
                                                    "dataSourceId": "p.26",
                                                    "editable": false,
                                                    "operationId": "7dC18atRAVWAiEy5uuhLoA",
                                                    "argMap": {}
                                                })}
                                                emptyMessage={TextProperty({
                                                    "value": t([
                                                        ""
                                                    ])
                                                })}
                                                body={[
                                                    <$Container key="p.TaskTracker.Header.container24"
                                                        $widgetId="p.TaskTracker.Header.container24"
                                                        class={"mx-name-container24"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Text key="p.TaskTracker.Header.text48"
                                                                $widgetId="p.TaskTracker.Header.text48"
                                                                class={"mx-name-text48 text-white"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Team Progress" }, "args": {} }
                                                                    })
                                                                ])}
                                                                renderMode={"h4"} />,
                                                            <$Text key="p.TaskTracker.Header.text18"
                                                                $widgetId="p.TaskTracker.Header.text18"
                                                                class={"mx-name-text18 text-white"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "TeamProgress" }, { "type": "literal", "value": "{\"decimalPrecision\":0}" } ] }, { "type": "literal", "value": "%" } ] }, "args": { "currentObject": { "widget": "p.TaskTracker.Header.dataView1", "source": "object" } } }
                                                                    })
                                                                ])}
                                                                renderMode={"h3"} />,
                                                            <$ProgressBar key="p.TaskTracker.Header.progressBar2"
                                                                $widgetId="p.TaskTracker.Header.progressBar2"
                                                                type={"expression"}
                                                                staticCurrentValue={50}
                                                                expressionCurrentValue={ExpressionProperty({
                                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "TeamProgress" }, "args": { "currentObject": { "widget": "p.TaskTracker.Header.dataView1", "source": "object" } } }
                                                                })}
                                                                staticMinValue={0}
                                                                expressionMinValue={ExpressionProperty({
                                                                    "expression": { "expr": { "type": "literalNumeric", "value": "0" }, "args": {} }
                                                                })}
                                                                staticMaxValue={100}
                                                                expressionMaxValue={ExpressionProperty({
                                                                    "expression": { "expr": { "type": "literalNumeric", "value": "100" }, "args": {} }
                                                                })}
                                                                onClick={undefined}
                                                                showLabel={false}
                                                                labelType={"text"}
                                                                labelText={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                customLabel={undefined}
                                                                class={"mx-name-progressBar2"}
                                                                style={undefined}
                                                                tabIndex={undefined} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]}
                                                hideFooter={true}
                                                footer={undefined} />
                                        ]} />,
                                    <$Div key="p.TaskTracker.TeamOverview.layoutGrid1$row0$column1"
                                        $widgetId="p.TaskTracker.TeamOverview.layoutGrid1$row0$column1"
                                        class={"col-lg col-md col hide-tablet hide-phone"}
                                        style={undefined}
                                        content={[
                                            <$Div key="p.TaskTracker.Header.layoutGrid2"
                                                $widgetId="p.TaskTracker.Header.layoutGrid2"
                                                class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid"}
                                                style={undefined}
                                                content={[
                                                    <$Div key="p.TaskTracker.TeamOverview.layoutGrid2$row0"
                                                        $widgetId="p.TaskTracker.TeamOverview.layoutGrid2$row0"
                                                        class={"row"}
                                                        style={undefined}
                                                        content={[
                                                            <$Div key="p.TaskTracker.TeamOverview.layoutGrid2$row0$column0"
                                                                $widgetId="p.TaskTracker.TeamOverview.layoutGrid2$row0$column0"
                                                                class={"col-lg col-md col"}
                                                                style={undefined}
                                                                content={[
                                                                    <$Text key="p.TaskTracker.Header.text17"
                                                                        $widgetId="p.TaskTracker.Header.text17"
                                                                        class={"mx-name-text17 text-white"}
                                                                        style={undefined}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Team members" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        renderMode={"h4"} />
                                                                ]} />,
                                                            <$Div key="p.TaskTracker.TeamOverview.layoutGrid2$row0$column1"
                                                                $widgetId="p.TaskTracker.TeamOverview.layoutGrid2$row0$column1"
                                                                class={"col-lg col-md col"}
                                                                style={undefined}
                                                                content={[
                                                                    <$ConditionalVisibilityWrapper key="p.TaskTracker.Header.actionButton2$visibility"
                                                                        $widgetId="p.TaskTracker.Header.actionButton2$visibility"
                                                                        visible={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Manager" }, { "type": "literal", "value": "Member" } ] }, "args": {} }
                                                                        })}
                                                                        contents={[
                                                                            <$ActionButton key="p.TaskTracker.Header.actionButton2"
                                                                                $widgetId="p.TaskTracker.Header.actionButton2"
                                                                                buttonId={"p.TaskTracker.Header.actionButton2"}
                                                                                class={"mx-name-actionButton2 text-white pull-right"}
                                                                                style={undefined}
                                                                                tabIndex={undefined}
                                                                                renderType={"link"}
                                                                                role={"button"}
                                                                                buttonClass={"btn-default"}
                                                                                caption={t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Visa teamet" }, "args": {} }
                                                                                    })
                                                                                ])}
                                                                                tooltip={TextProperty({
                                                                                    "value": t([
                                                                                        ""
                                                                                    ])
                                                                                })}
                                                                                icon={undefined}
                                                                                action={ActionProperty({
                                                                                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "TaskTracker/TeamOverview.page.xml", "location": "content", "allowedRoles": [ "Manager", "Member" ] }, "disabledDuringExecution": true },
                                                                                    "abortOnServerValidation": true
                                                                                })} />
                                                                        ]} />
                                                                ]} />
                                                        ]} />
                                                ]} />,
                                            <$Gallery key="p.TaskTracker.Header.gallery1"
                                                $widgetId="p.TaskTracker.Header.gallery1"
                                                advanced={false}
                                                datasource={DatabaseObjectListProperty({
                                                    "dataSourceId": "p.2",
                                                    "entity": "MendixSSO.MendixSSOUser",
                                                    "operationId": "9wk1xj3d6lygBlSHOynECg",
                                                    "sort": [
                                                        [
                                                            "DisplayName",
                                                            "asc"
                                                        ]
                                                    ]
                                                })}
                                                content={TemplatedWidgetProperty({
                                                    "dataSourceId": "p.2",
                                                    "editable": false,
                                                    "children": () => [
                                                        <$Container key="p.TaskTracker.Header.container4"
                                                            $widgetId="p.TaskTracker.Header.container4"
                                                            class={"mx-name-container4 col-center"}
                                                            style={undefined}
                                                            renderMode={"div"}
                                                            onClick={undefined}
                                                            content={[
                                                                <$Text key="p.TaskTracker.Header.text22"
                                                                    $widgetId="p.TaskTracker.Header.text22"
                                                                    class={"mx-name-text22 text-white"}
                                                                    style={undefined}
                                                                    caption={t([
                                                                        ExpressionProperty({
                                                                            "expression": { "expr": { "type": "function", "name": "+", "parameters": [ { "type": "literal", "value": "Medlemmar: " }, { "type": "variable", "variable": "currentObject", "path": "DisplayName" } ] }, "args": { "currentObject": { "widget": "p.TaskTracker.Header.gallery1", "source": "object" } } }
                                                                        })
                                                                    ])}
                                                                    renderMode={"span"} />
                                                            ]}
                                                            ariaHidden={false} />
                                                    ]
                                                })}
                                                desktopItems={5}
                                                tabletItems={1}
                                                phoneItems={1}
                                                pageSize={20}
                                                pagination={"virtualScrolling"}
                                                pagingPosition={"below"}
                                                showEmptyPlaceholder={"none"}
                                                emptyPlaceholder={undefined}
                                                itemClass={undefined}
                                                onClick={undefined}
                                                filterList={[]}
                                                filtersPlaceholder={undefined}
                                                sortList={[]}
                                                filterSectionTitle={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                emptyMessageTitle={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                onSelectionChange={undefined}
                                                ariaLabelListBox={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                class={"mx-name-gallery1"}
                                                style={undefined}
                                                tabIndex={undefined} />
                                        ]} />
                                ]} />
                        ]} />
                ]}
                ariaHidden={false} />
        ]} />,
    <$Container key="p.TaskTracker.TeamOverview.container9"
        $widgetId="p.TaskTracker.TeamOverview.container9"
        class={"mx-name-container9 spacing-inner-left-large spacing-inner-right-large"}
        style={undefined}
        renderMode={"div"}
        onClick={undefined}
        content={[
            <$Div key="p.TaskTracker.TeamOverview.layoutGrid3"
                $widgetId="p.TaskTracker.TeamOverview.layoutGrid3"
                class={"mx-name-layoutGrid3 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
                style={undefined}
                content={[
                    <$Div key="p.TaskTracker.TeamOverview.layoutGrid3$row0"
                        $widgetId="p.TaskTracker.TeamOverview.layoutGrid3$row0"
                        class={"row"}
                        style={undefined}
                        content={[
                            <$Div key="p.TaskTracker.TeamOverview.layoutGrid3$row0$column0"
                                $widgetId="p.TaskTracker.TeamOverview.layoutGrid3$row0$column0"
                                class={"col-lg col-md col"}
                                style={undefined}
                                content={[
                                    <$Text key="p.TaskTracker.TeamOverview.text3"
                                        $widgetId="p.TaskTracker.TeamOverview.text3"
                                        class={"mx-name-text3"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "The Team" }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"h2"} />
                                ]} />
                        ]} />,
                    <$Div key="p.TaskTracker.TeamOverview.layoutGrid3$row1"
                        $widgetId="p.TaskTracker.TeamOverview.layoutGrid3$row1"
                        class={"row"}
                        style={undefined}
                        content={[
                            <$Div key="p.TaskTracker.TeamOverview.layoutGrid3$row1$column0"
                                $widgetId="p.TaskTracker.TeamOverview.layoutGrid3$row1$column0"
                                class={"col-lg col-md col"}
                                style={undefined}
                                content={[
                                    <$Gallery key="p.TaskTracker.TeamOverview.gallery2"
                                        $widgetId="p.TaskTracker.TeamOverview.gallery2"
                                        advanced={false}
                                        datasource={DatabaseObjectListProperty({
                                            "dataSourceId": "p.54",
                                            "entity": "MendixSSO.MendixSSOUser",
                                            "operationId": "Q0c4MfGaHVyyDO2lkx4IxQ",
                                            "sort": [
                                                [
                                                    "DisplayName",
                                                    "asc"
                                                ]
                                            ]
                                        })}
                                        content={TemplatedWidgetProperty({
                                            "dataSourceId": "p.54",
                                            "editable": false,
                                            "children": () => [
                                                <$Container key="p.TaskTracker.TeamOverview.container3"
                                                    $widgetId="p.TaskTracker.TeamOverview.container3"
                                                    class={"mx-name-container3 card shadow-medium"}
                                                    style={undefined}
                                                    renderMode={"div"}
                                                    onClick={undefined}
                                                    content={[
                                                        <$Div key="p.TaskTracker.TeamOverview.layoutGrid4"
                                                            $widgetId="p.TaskTracker.TeamOverview.layoutGrid4"
                                                            class={"mx-name-layoutGrid4 mx-layoutgrid mx-layoutgrid-fluid spacing-inner-left-none spacing-inner-right-none spacing-inner-top-none"}
                                                            style={undefined}
                                                            content={[
                                                                <$Div key="p.TaskTracker.TeamOverview.layoutGrid4$row0"
                                                                    $widgetId="p.TaskTracker.TeamOverview.layoutGrid4$row0"
                                                                    class={"row"}
                                                                    style={undefined}
                                                                    content={[
                                                                        <$Div key="p.TaskTracker.TeamOverview.layoutGrid4$row0$column0"
                                                                            $widgetId="p.TaskTracker.TeamOverview.layoutGrid4$row0$column0"
                                                                            class={"col-lg col-md col"}
                                                                            style={undefined}
                                                                            content={[
                                                                                <$Text key="p.TaskTracker.TeamOverview.text7"
                                                                                    $widgetId="p.TaskTracker.TeamOverview.text7"
                                                                                    class={"mx-name-text7 spacing-outer-bottom-none"}
                                                                                    style={undefined}
                                                                                    caption={t([
                                                                                        ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "DisplayName" }, "args": { "currentObject": { "widget": "p.TaskTracker.TeamOverview.gallery2", "source": "object" } } }
                                                                                        })
                                                                                    ])}
                                                                                    renderMode={"h3"} />,
                                                                                <$Text key="p.TaskTracker.TeamOverview.text8"
                                                                                    $widgetId="p.TaskTracker.TeamOverview.text8"
                                                                                    class={"mx-name-text8"}
                                                                                    style={undefined}
                                                                                    caption={t([
                                                                                        ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "EmailAddress" }, "args": { "currentObject": { "widget": "p.TaskTracker.TeamOverview.gallery2", "source": "object" } } }
                                                                                        })
                                                                                    ])}
                                                                                    renderMode={"p"} />,
                                                                                <$DataView key="p.TaskTracker.TeamOverview.dataView3"
                                                                                    $widgetId="p.TaskTracker.TeamOverview.dataView3"
                                                                                    class={"mx-name-dataView3 form-horizontal"}
                                                                                    style={undefined}
                                                                                    tabIndex={undefined}
                                                                                    object={MicroflowObjectProperty({
                                                                                        "dataSourceId": "p.85",
                                                                                        "scope": "p.TaskTracker.TeamOverview.gallery2",
                                                                                        "editable": true,
                                                                                        "operationId": "9Ci4R0ARFV2gAkEl+XhXjA",
                                                                                        "argMap": { "MendixSSOUser": { "widget": "p.TaskTracker.TeamOverview.gallery2", "source": "object" } }
                                                                                    })}
                                                                                    emptyMessage={TextProperty({
                                                                                        "value": t([
                                                                                            ""
                                                                                        ])
                                                                                    })}
                                                                                    body={[
                                                                                        <$Text key="p.TaskTracker.TeamOverview.text9"
                                                                                            $widgetId="p.TaskTracker.TeamOverview.text9"
                                                                                            class={"mx-name-text9 text-nowrap"}
                                                                                            style={undefined}
                                                                                            caption={t([
                                                                                                ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "function", "name": "+", "parameters": [ { "type": "literal", "value": "Assigned open tasks: " }, { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "AssignedTasks" }, { "type": "literal", "value": "{}" } ] } ] }, "args": { "currentObject": { "widget": "p.TaskTracker.TeamOverview.dataView3", "source": "object" } } }
                                                                                                })
                                                                                            ])}
                                                                                            renderMode={"p"} />
                                                                                    ]}
                                                                                    hideFooter={true}
                                                                                    footer={undefined} />
                                                                            ]} />,
                                                                        <$Div key="p.TaskTracker.TeamOverview.layoutGrid4$row0$column1"
                                                                            $widgetId="p.TaskTracker.TeamOverview.layoutGrid4$row0$column1"
                                                                            class={"col-lg-auto col-md-auto col-auto"}
                                                                            style={undefined}
                                                                            content={[
                                                                                <$Image key="p.TaskTracker.TeamOverview.image3"
                                                                                    $widgetId="p.TaskTracker.TeamOverview.image3"
                                                                                    datasource={"imageUrl"}
                                                                                    imageObject={undefined}
                                                                                    defaultImageDynamic={undefined}
                                                                                    imageUrl={t([
                                                                                        ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "AvatarURL" }, "args": { "currentObject": { "widget": "p.TaskTracker.TeamOverview.gallery2", "source": "object" } } }
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
                                                                                    width={40}
                                                                                    heightUnit={"auto"}
                                                                                    height={100}
                                                                                    iconSize={14}
                                                                                    displayAs={"fullImage"}
                                                                                    responsive={false}
                                                                                    class={"mx-name-image3 img-circle"}
                                                                                    style={undefined}
                                                                                    tabIndex={undefined} />
                                                                            ]} />
                                                                    ]} />
                                                            ]} />
                                                    ]}
                                                    ariaHidden={false} />
                                            ]
                                        })}
                                        desktopItems={4}
                                        tabletItems={4}
                                        phoneItems={2}
                                        pageSize={20}
                                        pagination={"virtualScrolling"}
                                        pagingPosition={"below"}
                                        showEmptyPlaceholder={"none"}
                                        emptyPlaceholder={undefined}
                                        itemClass={undefined}
                                        onClick={ListActionProperty({
                                            "action": { "type": "openPage", "argMap": { "param$MendixSSOUser": { "widget": "p.TaskTracker.TeamOverview.gallery2", "source": "object" } }, "config": { "name": "TaskTracker/MyAccountViewEdit.page.xml", "location": "modal", "resizable": false, "allowedRoles": [ "Manager", "Member" ] }, "disabledDuringExecution": false },
                                            "abortOnServerValidation": false,
                                            "dataSourceId": "p.54",
                                            "argumentTypes": { }
                                        })}
                                        filterList={[]}
                                        filtersPlaceholder={undefined}
                                        sortList={[]}
                                        filterSectionTitle={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                        ])}
                                        emptyMessageTitle={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                        ])}
                                        onSelectionChange={undefined}
                                        ariaLabelListBox={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                        ])}
                                        class={"mx-name-gallery2"}
                                        style={undefined}
                                        tabIndex={undefined} />
                                ]} />
                        ]} />
                ]} />
        ]}
        ariaHidden={false} />
]}</PageFragment>);

export const title = t([
    "Team Overview"
]);

export const classes = "layout-atlas layout-atlas-responsive-topbar";

export const url = "/p/team";
export const style = {};
export const content = { ...parentContent,
    "TaskTracker.Tasks_TopBar.Main": region$Main,
};
