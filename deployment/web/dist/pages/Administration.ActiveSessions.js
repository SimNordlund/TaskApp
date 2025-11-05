import { reactExports, asPluginWidgets, selectTranslation } from '../index-4mfddfkU.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-Ouf8FsgU.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-B2qOJ4td.js';
import { DatabaseObjectListProperty } from '../DatabaseObjectListProperty-bv83QC9Y.js';
import { ListAttributeProperty } from '../ListAttributeProperty-B0JILsy2.js';
import { ListExpressionProperty } from '../ListExpressionProperty-nIrHdxaK.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-CAuzrF8_.js';
import { WebIconProperty } from '../WebIconProperty-D31g4FWT.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-51nXt5AX.js';
import { Container } from '../Container-Dx2M9vEg.js';
import { DatagridWidgetModule, content as content$1 } from '../Atlas_Core.Atlas_Default-CvfShMyM.js';
import { DatagridDateFilterWidgetModule, DatagridTextFilterWidgetModule } from '../DatagridTextFilter-BLWOhNYy.js';
import { Div } from '../Div-DARk7tBI.js';
import { Text } from '../Text-BEd6XRh9.js';
import '../DaFVLkxr-BwbOhnke.js';
import '../D4nQ98US-DIL-lu1k.js';
import '../DR_P8f0l-DCAAJywf.js';
import '../WebStaticImageProperty-_lIkqA-b.js';
import '../Fragment-DrLk0xpL.js';
import '../SidebarToggle-fh3TqfUx.js';
import '../Y8h_6YnI-C02bM5Tk.js';
import '../ScrollContainer-C-B529-s.js';
import '../InlineText-C-RvyD35.js';

const React = { createElement: reactExports.createElement };
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;
const DatagridDateFilter = Object.getOwnPropertyDescriptor(DatagridDateFilterWidgetModule, "DatagridDateFilter")?.value || Object.getOwnPropertyDescriptor(DatagridDateFilterWidgetModule, "default")?.value;
const DatagridTextFilter = Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "DatagridTextFilter")?.value || Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "default")?.value;
const { $Container, $Div, $Text, $Datagrid, $DatagridTextFilter, $DatagridDateFilter, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Container, Div, Text, Datagrid, DatagridTextFilter, DatagridDateFilter, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Container,
    {
      key: "p.Administration.ActiveSessions.container1",
      $widgetId: "p.Administration.ActiveSessions.container1",
      class: "mx-name-container1 pageheader pageheader-fullwidth",
      style: void 0,
      renderMode: "div",
      onClick: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.Administration.ActiveSessions.layoutGrid1",
            $widgetId: "p.Administration.ActiveSessions.layoutGrid1",
            class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.Administration.ActiveSessions.layoutGrid1$row0",
                  $widgetId: "p.Administration.ActiveSessions.layoutGrid1$row0",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.Administration.ActiveSessions.layoutGrid1$row0$column0",
                        $widgetId: "p.Administration.ActiveSessions.layoutGrid1$row0$column0",
                        class: "col-lg-12 col-md-12 col-12",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.Administration.ActiveSessions.label1",
                              $widgetId: "p.Administration.ActiveSessions.label1",
                              class: "mx-name-label1 pageheader-title",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Active Sessions" }, "args": {} }
                                })
                              ]),
                              renderMode: "h2"
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
        )
      ],
      ariaHidden: false
    }
  ),
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.Administration.ActiveSessions.layoutGrid2",
      $widgetId: "p.Administration.ActiveSessions.layoutGrid2",
      class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.Administration.ActiveSessions.layoutGrid2$row0",
            $widgetId: "p.Administration.ActiveSessions.layoutGrid2$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.Administration.ActiveSessions.layoutGrid2$row0$column0",
                  $widgetId: "p.Administration.ActiveSessions.layoutGrid2$row0$column0",
                  class: "col-lg-12 col-md-12 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Datagrid,
                      {
                        key: "p.Administration.ActiveSessions.dataGrid21",
                        $widgetId: "p.Administration.ActiveSessions.dataGrid21",
                        advanced: false,
                        datasource: DatabaseObjectListProperty({
                          "dataSourceId": "p.10",
                          "entity": "System.Session",
                          "operationId": "ltvrtc2ePVaS53wczj+ACQ",
                          "sort": [
                            [
                              "System.Session_User/System.User/Name",
                              "asc"
                            ]
                          ]
                        }),
                        refreshInterval: 0,
                        itemSelectionMethod: "checkbox",
                        showSelectAllToggle: true,
                        columns: [
                          {
                            "showContentAs": "attribute",
                            "attribute": ListAttributeProperty({
                              "path": "System.Session_User/System.User",
                              "entity": "System.User",
                              "attribute": "Name",
                              "attributeType": "String",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p.10",
                              "isList": false
                            }),
                            "content": void 0,
                            "dynamicText": selectTranslation([
                              void 0
                            ]),
                            "header": selectTranslation([
                              ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "User name" }, "args": {} }
                              })
                            ]),
                            "tooltip": selectTranslation([
                              void 0
                            ]),
                            "filter": [
                              /* @__PURE__ */ React.createElement(
                                $DatagridTextFilter,
                                {
                                  key: "p.Administration.ActiveSessions.textFilter1",
                                  $widgetId: "p.Administration.ActiveSessions.textFilter1",
                                  advanced: false,
                                  defaultValue: void 0,
                                  defaultFilter: "contains",
                                  placeholder: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                  ]),
                                  adjustable: true,
                                  delay: 500,
                                  onChange: void 0,
                                  screenReaderButtonCaption: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                  ]),
                                  screenReaderInputCaption: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                  ]),
                                  class: "mx-name-textFilter1",
                                  style: void 0,
                                  tabIndex: void 0
                                }
                              )
                            ],
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
                              "entity": "System.Session",
                              "attribute": "LastActive",
                              "attributeType": "DateTime",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p.10",
                              "isList": false
                            }),
                            "content": void 0,
                            "dynamicText": selectTranslation([
                              ListExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "LastActive" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "currentObject": { "widget": "p.Administration.ActiveSessions.dataGrid21", "source": "object" } } },
                                "dataSourceId": "p.10"
                              })
                            ]),
                            "header": selectTranslation([
                              ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Last active" }, "args": {} }
                              })
                            ]),
                            "tooltip": selectTranslation([
                              void 0
                            ]),
                            "filter": [
                              /* @__PURE__ */ React.createElement(
                                $DatagridDateFilter,
                                {
                                  key: "p.Administration.ActiveSessions.dateFilter1",
                                  $widgetId: "p.Administration.ActiveSessions.dateFilter1",
                                  advanced: false,
                                  defaultValue: void 0,
                                  defaultStartDate: void 0,
                                  defaultEndDate: void 0,
                                  defaultFilter: "equal",
                                  placeholder: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                  ]),
                                  adjustable: true,
                                  onChange: void 0,
                                  screenReaderButtonCaption: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                  ]),
                                  screenReaderCalendarCaption: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                  ]),
                                  screenReaderInputCaption: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                  ]),
                                  class: "mx-name-dateFilter1",
                                  style: void 0,
                                  tabIndex: void 0
                                }
                              )
                            ],
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
                            "showContentAs": "customContent",
                            "attribute": ListAttributeProperty({
                              "path": "",
                              "entity": "System.Session",
                              "attribute": "LastActive",
                              "attributeType": "DateTime",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p.10",
                              "isList": false
                            }),
                            "content": TemplatedWidgetProperty({
                              "dataSourceId": "p.10",
                              "editable": false,
                              "children": () => [
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.Administration.ActiveSessions.actionButton1$visibility",
                                    $widgetId: "p.Administration.ActiveSessions.actionButton1$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Manager" }] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p.Administration.ActiveSessions.actionButton1",
                                          $widgetId: "p.Administration.ActiveSessions.actionButton1",
                                          buttonId: "p.Administration.ActiveSessions.actionButton1",
                                          class: "mx-name-actionButton1 btn-lg",
                                          style: void 0,
                                          tabIndex: void 0,
                                          renderType: "link",
                                          role: "button",
                                          buttonClass: "btn-default",
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          tooltip: TextProperty({
                                            "value": selectTranslation([
                                              ""
                                            ])
                                          }),
                                          icon: WebIconProperty({
                                            "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-logout" }
                                          }),
                                          action: ActionProperty({
                                            "action": { "type": "deleteObject", "argMap": { "$object": { "widget": "p.Administration.ActiveSessions.dataGrid21", "source": "object" } }, "config": { "closePage": false, "operationId": "qkaKzK9thFmzWU3S7ojA6g" }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                          })
                                        }
                                      )
                                    ]
                                  }
                                )
                              ]
                            }),
                            "dynamicText": selectTranslation([
                              void 0
                            ]),
                            "header": selectTranslation([
                              ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                              })
                            ]),
                            "tooltip": selectTranslation([
                              void 0
                            ]),
                            "filter": void 0,
                            "sortable": false,
                            "resizable": true,
                            "draggable": true,
                            "hidable": "no",
                            "width": "autoFit",
                            "size": 1,
                            "alignment": "left",
                            "wrapText": false,
                            "visible": ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                            }),
                            "minWidth": "auto",
                            "minWidthLimit": 100
                          }
                        ],
                        columnsFilterable: true,
                        pageSize: 20,
                        pagination: "buttons",
                        pagingPosition: "bottom",
                        showEmptyPlaceholder: "none",
                        emptyPlaceholder: void 0,
                        rowClass: void 0,
                        onClick: void 0,
                        onSelectionChange: void 0,
                        columnsSortable: true,
                        columnsResizable: true,
                        columnsDraggable: true,
                        columnsHidable: true,
                        filterList: [],
                        filtersPlaceholder: void 0,
                        filterSectionTitle: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                          })
                        ]),
                        exportDialogLabel: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Export progress" }, "args": {} }
                          })
                        ]),
                        cancelExportLabel: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Cancel data export" }, "args": {} }
                          })
                        ]),
                        showPagingButtons: "always",
                        onClickTrigger: "single",
                        selectRowLabel: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Select row" }, "args": {} }
                          })
                        ]),
                        class: "mx-name-dataGrid21 table-hover",
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
  )
]);
const title = selectTranslation([
  "Active Sessions"
]);
const classes = "layout-atlas layout-atlas-responsive-default";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_Default.Main": region$Main
};

export { classes, content, style, title };
