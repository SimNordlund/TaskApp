import { createElement } from "react";
const React = { createElement };

import { ActionProperty } from "mendix/ActionProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { MicroflowObjectProperty } from "mendix/MicroflowObjectProperty";
import { PlaceholderProperty } from "mendix/PlaceholderProperty";
import { TextProperty } from "mendix/TextProperty";
import { WebIconProperty } from "mendix/WebIconProperty";
import { WebStaticImageProperty } from "mendix/WebStaticImageProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import * as AppSwitcherWidgetModule from "C:/Users/TaraR/Mendix/TaskApp/deployment/web/widgets/mendix/appswitcher/AppSwitcher.mjs";
const AppSwitcher = Object.getOwnPropertyDescriptor(AppSwitcherWidgetModule, "AppSwitcher")?.value || Object.getOwnPropertyDescriptor(AppSwitcherWidgetModule, "default")?.value;   
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/web/Container";
import { DataView } from "mendix/widgets/web/DataView";
import { Fragment } from "mendix/widgets/web/Fragment";
import { Image } from "mendix/widgets/web/Image";
import * as Image$1WidgetModule from "C:/Users/TaraR/Mendix/TaskApp/deployment/web/widgets/com/mendix/widget/web/image/Image.mjs";
const Image$1 = Object.getOwnPropertyDescriptor(Image$1WidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(Image$1WidgetModule, "default")?.value;   
import "C:/Users/TaraR/Mendix/TaskApp/deployment/web/widgets/com/mendix/widget/web/image/Image.css";
import { MenuBar } from "mendix/widgets/web/MenuBar";
import { NavigationTree } from "mendix/widgets/web/NavigationTree";
import { Placeholder } from "mendix/widgets/web/Placeholder";
import { ScrollContainer } from "mendix/widgets/web/ScrollContainer";
import { SidebarToggle } from "mendix/widgets/web/SidebarToggle";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";


const { $ScrollContainer, $Container, $SidebarToggle, $AppSwitcher, $Image, $Text, $MenuBar, $Fragment, $DataView, $ConditionalVisibilityWrapper, $Image$1, $ActionButton, $NavigationTree, $Placeholder } = asPluginWidgets({ ScrollContainer, Container, SidebarToggle, AppSwitcher, Image, Text, MenuBar, Fragment, DataView, ConditionalVisibilityWrapper, Image$1, ActionButton, NavigationTree, Placeholder });

const region$Main = [
    <$ScrollContainer key="l.TaskTracker.Tasks_TopBar.layoutContainer"
        $widgetId="l.TaskTracker.Tasks_TopBar.layoutContainer"
        class={"mx-name-layoutContainer"}
        style={undefined}
        scrollPerRegion={false}
        layoutMode={"headline"}
        top={{
            "enabled": true,
            "content": [
                <$Container key="l.TaskTracker.Tasks_TopBar.container1"
                    $widgetId="l.TaskTracker.Tasks_TopBar.container1"
                    class={"mx-name-container1 region-topbar shadow row-left"}
                    style={undefined}
                    renderMode={"div"}
                    onClick={undefined}
                    content={[
                        <$SidebarToggle key="l.TaskTracker.Tasks_TopBar.sidebarToggle3"
                            $widgetId="l.TaskTracker.Tasks_TopBar.sidebarToggle3"
                            buttonId={"l.TaskTracker.Tasks_TopBar.sidebarToggle3"}
                            renderType={"link"}
                            buttonClass={"btn-default"}
                            caption={t([
                                ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                })
                            ])}
                            tooltip={TextProperty({
                                "value": t([
                                    "Toggle Menu"
                                ])
                            })}
                            icon={WebIconProperty({
                                "icon": { "type": "image", "iconUrl": "img/Atlas_Core$Layout$hamburger.svg" }
                            })}
                            class={"mx-name-sidebarToggle3 toggle-btn hide-tablet hide-desktop spacing-outer-left"}
                            style={undefined}
                            tabIndex={-1} />,
                        <$Container key="l.TaskTracker.Tasks_TopBar.container3"
                            $widgetId="l.TaskTracker.Tasks_TopBar.container3"
                            class={"mx-name-container3 row-center hide-phone"}
                            style={undefined}
                            renderMode={"div"}
                            onClick={undefined}
                            content={[
                                <$AppSwitcher key="l.TaskTracker.Tasks_TopBar.appSwitcher1"
                                    $widgetId="l.TaskTracker.Tasks_TopBar.appSwitcher1"
                                    baseUrl={"https://appswitcher.mendix.com/rest/v1"}
                                    positioning={"contextMenu"}
                                    class={"mx-name-appSwitcher1"}
                                    style={undefined}
                                    tabIndex={undefined} />
                            ]}
                            ariaHidden={false} />,
                        <$Container key="l.TaskTracker.Tasks_TopBar.container5"
                            $widgetId="l.TaskTracker.Tasks_TopBar.container5"
                            class={"mx-name-container5 navbar-brand"}
                            style={undefined}
                            renderMode={"div"}
                            onClick={undefined}
                            content={[
                                <$Image key="l.TaskTracker.Tasks_TopBar.image2"
                                    $widgetId="l.TaskTracker.Tasks_TopBar.image2"
                                    class={"mx-name-image2"}
                                    style={undefined}
                                    tabIndex={undefined}
                                    alternativeText={t([
                                        ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                        })
                                    ])}
                                    height={undefined}
                                    width={undefined}
                                    responsive={false}
                                    source={WebStaticImageProperty({
                                        "image": { "uri": "img/Atlas_Core$Layout$logo.svg" }
                                    })}
                                    onClick={undefined} />
                            ]}
                            ariaHidden={false} />,
                        <$Container key="l.TaskTracker.Tasks_TopBar.container4"
                            $widgetId="l.TaskTracker.Tasks_TopBar.container4"
                            class={"mx-name-container4"}
                            style={undefined}
                            tabIndex={undefined}
                            renderMode={"div"}
                            onClick={ActionProperty({
                                "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "W+yt2ObPlFqdotl4+ssTJw", "validate": "view", "allowedRoles": [ "Manager", "Member" ] }, "disabledDuringExecution": true }
                            })}
                            content={[
                                <$Text key="l.TaskTracker.Tasks_TopBar.text1"
                                    $widgetId="l.TaskTracker.Tasks_TopBar.text1"
                                    class={"mx-name-text1 text-white text-bold spacing-outer-bottom-none"}
                                    style={undefined}
                                    caption={t([
                                        ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "Task Tracker" }, "args": {} }
                                        })
                                    ])}
                                    renderMode={"h4"} />
                            ]}
                            ariaHidden={false} />,
                        <$Container key="l.TaskTracker.Tasks_TopBar.container2"
                            $widgetId="l.TaskTracker.Tasks_TopBar.container2"
                            class={"mx-name-container2 flexitem-1 justify-content-start"}
                            style={undefined}
                            renderMode={"div"}
                            onClick={undefined}
                            content={[
                                <$MenuBar key="l.TaskTracker.Tasks_TopBar.menuBar1"
                                    $widgetId="l.TaskTracker.Tasks_TopBar.menuBar1"
                                    class={"mx-name-menuBar1 hide-icons hide-phone"}
                                    style={undefined}
                                    menu={[
                                        {
                                            "caption": TextProperty({
                                                "value": t([
                                                    "Home"
                                                ])
                                            }),
                                            "action": ActionProperty({
                                                "action": { "type": "openPage", "argMap": {}, "config": { "name": "TaskTracker/TaskOverview.page.xml", "location": "content", "allowedRoles": [ "Manager", "Member" ] }, "disabledDuringExecution": false },
                                                "skipClientValidation": true
                                            })
                                        },
                                        {
                                            "caption": TextProperty({
                                                "value": t([
                                                    "Team"
                                                ])
                                            }),
                                            "action": ActionProperty({
                                                "action": { "type": "openPage", "argMap": {}, "config": { "name": "TaskTracker/TeamOverview.page.xml", "location": "content", "allowedRoles": [ "Manager", "Member" ] }, "disabledDuringExecution": false },
                                                "skipClientValidation": true
                                            })
                                        },
                                        {
                                            "caption": TextProperty({
                                                "value": t([
                                                    "SLA Dashboard"
                                                ])
                                            }),
                                            "action": ActionProperty({
                                                "action": { "type": "openPage", "argMap": {}, "config": { "name": "TaskTracker/SLA_Dashboard.page.xml", "location": "content", "allowedRoles": [ "Manager", "Member" ] }, "disabledDuringExecution": false },
                                                "skipClientValidation": true
                                            })
                                        },
                                        {
                                            "caption": TextProperty({
                                                "value": t([
                                                    "Manage Department"
                                                ])
                                            }),
                                            "action": ActionProperty({
                                                "action": { "type": "openPage", "argMap": {}, "config": { "name": "TaskTracker/Department_Overview.page.xml", "location": "content", "allowedRoles": [ "Manager", "Member" ] }, "disabledDuringExecution": false },
                                                "skipClientValidation": true
                                            })
                                        },
                                        {
                                            "caption": TextProperty({
                                                "value": t([
                                                    "My Profile"
                                                ])
                                            }),
                                            "action": ActionProperty({
                                                "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "sjCPlcPXU1OMQweOjVTe/A", "validate": "view", "allowedRoles": [ "Manager", "Member" ] }, "disabledDuringExecution": true },
                                                "skipClientValidation": true
                                            })
                                        }
                                    ]} />
                            ]}
                            ariaHidden={false} />,
                        <$Fragment key="l.TaskTracker.Tasks_TopBar.snippetCall2"
                            $widgetId="l.TaskTracker.Tasks_TopBar.snippetCall2"
                            content={[
                                <$DataView key="l.TaskTracker.ProfilePicture.dataView10"
                                    $widgetId="l.TaskTracker.ProfilePicture.dataView10"
                                    class={"mx-name-dataView10 spacing-outer-right form-vertical"}
                                    style={undefined}
                                    tabIndex={undefined}
                                    object={MicroflowObjectProperty({
                                        "dataSourceId": "l.28",
                                        "editable": true,
                                        "operationId": "Bi84m7QUrlO6Q08ccZyO0Q",
                                        "argMap": {}
                                    })}
                                    emptyMessage={TextProperty({
                                        "value": t([
                                            ""
                                        ])
                                    })}
                                    body={[
                                        <$ConditionalVisibilityWrapper key="l.TaskTracker.ProfilePicture.container21$visibility"
                                            $widgetId="l.TaskTracker.ProfilePicture.container21$visibility"
                                            visible={ExpressionProperty({
                                                "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "AvatarURL" }, { "type": "literal", "value": "" } ] }, "args": { "currentObject": { "widget": "l.TaskTracker.ProfilePicture.dataView10", "source": "object" } } }
                                            })}
                                            contents={[
                                                <$Container key="l.TaskTracker.ProfilePicture.container21"
                                                    $widgetId="l.TaskTracker.ProfilePicture.container21"
                                                    class={"mx-name-container21 spacing-outer-top-none"}
                                                    style={undefined}
                                                    renderMode={"div"}
                                                    onClick={undefined}
                                                    content={[
                                                        <$Image$1 key="l.TaskTracker.ProfilePicture.image1"
                                                            $widgetId="l.TaskTracker.ProfilePicture.image1"
                                                            datasource={"imageUrl"}
                                                            imageObject={undefined}
                                                            defaultImageDynamic={undefined}
                                                            imageUrl={t([
                                                                ExpressionProperty({
                                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "AvatarURL" }, "args": { "currentObject": { "widget": "l.TaskTracker.ProfilePicture.dataView10", "source": "object" } } }
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
                                                            responsive={true}
                                                            class={"mx-name-image1 img-circle"}
                                                            style={undefined}
                                                            tabIndex={undefined} />
                                                    ]}
                                                    ariaHidden={false} />
                                            ]} />,
                                        <$ConditionalVisibilityWrapper key="l.TaskTracker.ProfilePicture.image12$visibility"
                                            $widgetId="l.TaskTracker.ProfilePicture.image12$visibility"
                                            visible={ExpressionProperty({
                                                "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "AvatarURL" }, { "type": "literal", "value": "" } ] }, "args": { "currentObject": { "widget": "l.TaskTracker.ProfilePicture.dataView10", "source": "object" } } }
                                            })}
                                            contents={[
                                                <$Image$1 key="l.TaskTracker.ProfilePicture.image12"
                                                    $widgetId="l.TaskTracker.ProfilePicture.image12"
                                                    datasource={"image"}
                                                    imageObject={WebStaticImageProperty({
                                                        "image": { "uri": "img/Atlas_NativeMobile_Content$Native_Content$Avatar.png" }
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
                                                    responsive={true}
                                                    class={"mx-name-image12 img-circle"}
                                                    style={undefined}
                                                    tabIndex={undefined} />
                                            ]} />
                                    ]}
                                    hideFooter={true}
                                    footer={undefined} />
                            ]} />,
                        <$ConditionalVisibilityWrapper key="l.TaskTracker.Tasks_TopBar.actionButton1$visibility"
                            $widgetId="l.TaskTracker.Tasks_TopBar.actionButton1$visibility"
                            visible={ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_isNamedUser", "parameters": [] }, "args": {} }
                            })}
                            contents={[
                                <$ActionButton key="l.TaskTracker.Tasks_TopBar.actionButton1"
                                    $widgetId="l.TaskTracker.Tasks_TopBar.actionButton1"
                                    buttonId={"l.TaskTracker.Tasks_TopBar.actionButton1"}
                                    class={"mx-name-actionButton1 btn-sm pull-right spacing-outer-left"}
                                    style={undefined}
                                    tabIndex={undefined}
                                    renderType={"button"}
                                    role={undefined}
                                    buttonClass={"btn-inverse"}
                                    caption={t([
                                        ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "Sign Out" }, "args": {} }
                                        })
                                    ])}
                                    tooltip={TextProperty({
                                        "value": t([
                                            ""
                                        ])
                                    })}
                                    icon={undefined}
                                    action={ActionProperty({
                                        "action": { "type": "signOut", "argMap": {}, "config": { "namedUser": true }, "disabledDuringExecution": true },
                                        "abortOnServerValidation": true
                                    })} />
                            ]} />
                    ]}
                    ariaHidden={false} />
            ],
            "sizeMode": "auto",
            "class": ""
        }}
        bottom={{
            "enabled": false
        }}
        left={{
            "enabled": true,
            "content": [
                <$NavigationTree key="l.TaskTracker.Tasks_TopBar.navigationTree1"
                    $widgetId="l.TaskTracker.Tasks_TopBar.navigationTree1"
                    class={"mx-name-navigationTree1"}
                    style={undefined}
                    menu={[
                        {
                            "caption": TextProperty({
                                "value": t([
                                    "Home"
                                ])
                            }),
                            "action": ActionProperty({
                                "action": { "type": "openPage", "argMap": {}, "config": { "name": "TaskTracker/TaskOverview.page.xml", "location": "content", "allowedRoles": [ "Manager", "Member" ] }, "disabledDuringExecution": false },
                                "skipClientValidation": true
                            })
                        },
                        {
                            "caption": TextProperty({
                                "value": t([
                                    "Team"
                                ])
                            }),
                            "action": ActionProperty({
                                "action": { "type": "openPage", "argMap": {}, "config": { "name": "TaskTracker/TeamOverview.page.xml", "location": "content", "allowedRoles": [ "Manager", "Member" ] }, "disabledDuringExecution": false },
                                "skipClientValidation": true
                            })
                        },
                        {
                            "caption": TextProperty({
                                "value": t([
                                    "SLA Dashboard"
                                ])
                            }),
                            "action": ActionProperty({
                                "action": { "type": "openPage", "argMap": {}, "config": { "name": "TaskTracker/SLA_Dashboard.page.xml", "location": "content", "allowedRoles": [ "Manager", "Member" ] }, "disabledDuringExecution": false },
                                "skipClientValidation": true
                            })
                        },
                        {
                            "caption": TextProperty({
                                "value": t([
                                    "Manage Department"
                                ])
                            }),
                            "action": ActionProperty({
                                "action": { "type": "openPage", "argMap": {}, "config": { "name": "TaskTracker/Department_Overview.page.xml", "location": "content", "allowedRoles": [ "Manager", "Member" ] }, "disabledDuringExecution": false },
                                "skipClientValidation": true
                            })
                        },
                        {
                            "caption": TextProperty({
                                "value": t([
                                    "My Profile"
                                ])
                            }),
                            "action": ActionProperty({
                                "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "sjCPlcPXU1OMQweOjVTe/A", "validate": "view", "allowedRoles": [ "Manager", "Member" ] }, "disabledDuringExecution": true },
                                "skipClientValidation": true
                            })
                        }
                    ]} />
            ],
            "sizeMode": "percentage",
            "sizeValue": 80,
            "class": "background-inverse",
            "toggleMode": "push",
            "initiallyOpen": false
        }}
        right={{
            "enabled": false
        }}
        center={{
            "content": [
                <$Placeholder key="l.TaskTracker.Tasks_TopBar.Main"
                    $widgetId="l.TaskTracker.Tasks_TopBar.Main"
                    content={PlaceholderProperty({
                        "id": "TaskTracker.Tasks_TopBar.Main"
                    })} />,
                <$Fragment key="l.TaskTracker.Tasks_TopBar.snippetCall1"
                    $widgetId="l.TaskTracker.Tasks_TopBar.snippetCall1"
                    content={undefined} />
            ],
            "class": "region-content"
        }} />
];

export const content = {
    "Main": region$Main,
};
