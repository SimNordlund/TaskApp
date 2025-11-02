import { reactExports, asPluginWidgets, addEnumerations, selectTranslation } from '../index-CkReQaf8.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-mMZDhMpD.js';
import { DatabaseObjectListProperty } from '../DatabaseObjectListProperty-55NAdKPz.js';
import { ListAttributeProperty } from '../ListAttributeProperty-BLIT0poN.js';
import { ListExpressionProperty } from '../ListExpressionProperty-CLnOuGNl.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-CwX8j72o.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-BXholmiE.js';
import { Container } from '../Container-DpDHpBLi.js';
import { DatagridWidgetModule, content as content$1 } from '../Atlas_Core.Atlas_Default-DnL39ZLP.js';
import { DatagridDateFilterWidgetModule, DatagridTextFilterWidgetModule } from '../DatagridTextFilter-D7EYvdEB.js';
import { DatagridDropdownFilterWidgetModule } from '../DatagridDropdownFilter-ftxHYCW9.js';
import { Div } from '../Div-CI4jyrhB.js';
import { Text } from '../Text-FRR1byrD.js';
import '../DaFVLkxr-BxrrdlaV.js';
import '../ActionButton-_oIWOEDQ.js';
import '../D4nQ98US-rU0uAP8r.js';
import '../DR_P8f0l-BDywjFiC.js';
import '../WebIconProperty-CtnHhOeg.js';
import '../WebStaticImageProperty-C8lEL5v3.js';
import '../Fragment-B3BjuPk2.js';
import '../SidebarToggle-CfuyXm-T.js';
import '../Y8h_6YnI-BNpJt4pJ.js';
import '../ScrollContainer-BI1EaQ7R.js';
import '../InlineText-CzI_QVvb.js';

const React = { createElement: reactExports.createElement };
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;
const DatagridDateFilter = Object.getOwnPropertyDescriptor(DatagridDateFilterWidgetModule, "DatagridDateFilter")?.value || Object.getOwnPropertyDescriptor(DatagridDateFilterWidgetModule, "default")?.value;
const DatagridDropdownFilter = Object.getOwnPropertyDescriptor(DatagridDropdownFilterWidgetModule, "DatagridDropdownFilter")?.value || Object.getOwnPropertyDescriptor(DatagridDropdownFilterWidgetModule, "default")?.value;
const DatagridTextFilter = Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "DatagridTextFilter")?.value || Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "default")?.value;
const { $Container, $Div, $Text, $Datagrid, $DatagridTextFilter, $DatagridDateFilter, $ConditionalVisibilityWrapper, $DatagridDropdownFilter } = asPluginWidgets({ Container, Div, Text, Datagrid, DatagridTextFilter, DatagridDateFilter, ConditionalVisibilityWrapper, DatagridDropdownFilter });
addEnumerations({
  "System.EventStatus": [
    [
      "Running",
      selectTranslation([
        "Running"
      ])
    ],
    [
      "Completed",
      selectTranslation([
        "Completed"
      ])
    ],
    [
      "Error",
      selectTranslation([
        "Error"
      ])
    ],
    [
      "Stopped",
      selectTranslation([
        "Stopped"
      ])
    ]
  ]
});
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Container,
    {
      key: "p.Administration.ScheduledEvents.container1",
      $widgetId: "p.Administration.ScheduledEvents.container1",
      class: "mx-name-container1 pageheader pageheader-fullwidth",
      style: void 0,
      renderMode: "div",
      onClick: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.Administration.ScheduledEvents.layoutGrid1",
            $widgetId: "p.Administration.ScheduledEvents.layoutGrid1",
            class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.Administration.ScheduledEvents.layoutGrid1$row0",
                  $widgetId: "p.Administration.ScheduledEvents.layoutGrid1$row0",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.Administration.ScheduledEvents.layoutGrid1$row0$column0",
                        $widgetId: "p.Administration.ScheduledEvents.layoutGrid1$row0$column0",
                        class: "col-lg-12 col-md-12 col-12",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.Administration.ScheduledEvents.label1",
                              $widgetId: "p.Administration.ScheduledEvents.label1",
                              class: "mx-name-label1 pageheader-title",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Scheduled Events" }, "args": {} }
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
      key: "p.Administration.ScheduledEvents.layoutGrid2",
      $widgetId: "p.Administration.ScheduledEvents.layoutGrid2",
      class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.Administration.ScheduledEvents.layoutGrid2$row0",
            $widgetId: "p.Administration.ScheduledEvents.layoutGrid2$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.Administration.ScheduledEvents.layoutGrid2$row0$column0",
                  $widgetId: "p.Administration.ScheduledEvents.layoutGrid2$row0$column0",
                  class: "col-lg-12 col-md-12 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Datagrid,
                      {
                        key: "p.Administration.ScheduledEvents.dataGrid21",
                        $widgetId: "p.Administration.ScheduledEvents.dataGrid21",
                        advanced: false,
                        datasource: DatabaseObjectListProperty({
                          "dataSourceId": "p.10",
                          "entity": "System.ScheduledEventInformation",
                          "operationId": "I5ChkPYeLF2xX9F9FhkfWQ",
                          "sort": [
                            [
                              "StartTime",
                              "desc"
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
                              "path": "",
                              "entity": "System.ScheduledEventInformation",
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
                                "expression": { "expr": { "type": "literal", "value": "Name" }, "args": {} }
                              })
                            ]),
                            "tooltip": selectTranslation([
                              void 0
                            ]),
                            "filter": [
                              /* @__PURE__ */ React.createElement(
                                $DatagridTextFilter,
                                {
                                  key: "p.Administration.ScheduledEvents.textFilter1",
                                  $widgetId: "p.Administration.ScheduledEvents.textFilter1",
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
                            "showContentAs": "attribute",
                            "attribute": ListAttributeProperty({
                              "path": "",
                              "entity": "System.ScheduledEventInformation",
                              "attribute": "Description",
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
                                "expression": { "expr": { "type": "literal", "value": "Description" }, "args": {} }
                              })
                            ]),
                            "tooltip": selectTranslation([
                              void 0
                            ]),
                            "filter": [
                              /* @__PURE__ */ React.createElement(
                                $DatagridTextFilter,
                                {
                                  key: "p.Administration.ScheduledEvents.textFilter2",
                                  $widgetId: "p.Administration.ScheduledEvents.textFilter2",
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
                                  class: "mx-name-textFilter2",
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
                              "entity": "System.ScheduledEventInformation",
                              "attribute": "StartTime",
                              "attributeType": "DateTime",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p.10",
                              "isList": false
                            }),
                            "content": void 0,
                            "dynamicText": selectTranslation([
                              ListExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "StartTime" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "currentObject": { "widget": "p.Administration.ScheduledEvents.dataGrid21", "source": "object" } } },
                                "dataSourceId": "p.10"
                              })
                            ]),
                            "header": selectTranslation([
                              ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Start time" }, "args": {} }
                              })
                            ]),
                            "tooltip": selectTranslation([
                              void 0
                            ]),
                            "filter": [
                              /* @__PURE__ */ React.createElement(
                                $DatagridDateFilter,
                                {
                                  key: "p.Administration.ScheduledEvents.dateFilter1",
                                  $widgetId: "p.Administration.ScheduledEvents.dateFilter1",
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
                              "entity": "System.ScheduledEventInformation",
                              "attribute": "Status",
                              "attributeType": "Enum",
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
                                    key: "p.Administration.ScheduledEvents.text2$visibility",
                                    $widgetId: "p.Administration.ScheduledEvents.text2$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Status" }, { "type": "literal", "value": "Running" }] }, "args": { "currentObject": { "widget": "p.Administration.ScheduledEvents.dataGrid21", "source": "object" } } }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $Text,
                                        {
                                          key: "p.Administration.ScheduledEvents.text2",
                                          $widgetId: "p.Administration.ScheduledEvents.text2",
                                          class: "mx-name-text2 badge label-primary",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Running" }, "args": {} }
                                            })
                                          ]),
                                          renderMode: "span"
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.Administration.ScheduledEvents.text1$visibility",
                                    $widgetId: "p.Administration.ScheduledEvents.text1$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Status" }, { "type": "literal", "value": "Completed" }] }, "args": { "currentObject": { "widget": "p.Administration.ScheduledEvents.dataGrid21", "source": "object" } } }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $Text,
                                        {
                                          key: "p.Administration.ScheduledEvents.text1",
                                          $widgetId: "p.Administration.ScheduledEvents.text1",
                                          class: "mx-name-text1 badge label-success",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Completed" }, "args": {} }
                                            })
                                          ]),
                                          renderMode: "span"
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.Administration.ScheduledEvents.text3$visibility",
                                    $widgetId: "p.Administration.ScheduledEvents.text3$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Status" }, { "type": "literal", "value": "Error" }] }, "args": { "currentObject": { "widget": "p.Administration.ScheduledEvents.dataGrid21", "source": "object" } } }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $Text,
                                        {
                                          key: "p.Administration.ScheduledEvents.text3",
                                          $widgetId: "p.Administration.ScheduledEvents.text3",
                                          class: "mx-name-text3 badge label-danger",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Error" }, "args": {} }
                                            })
                                          ]),
                                          renderMode: "span"
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.Administration.ScheduledEvents.text4$visibility",
                                    $widgetId: "p.Administration.ScheduledEvents.text4$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Status" }, { "type": "literal", "value": "Stopped" }] }, "args": { "currentObject": { "widget": "p.Administration.ScheduledEvents.dataGrid21", "source": "object" } } }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $Text,
                                        {
                                          key: "p.Administration.ScheduledEvents.text4",
                                          $widgetId: "p.Administration.ScheduledEvents.text4",
                                          class: "mx-name-text4 badge label-secondary",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Stopped" }, "args": {} }
                                            })
                                          ]),
                                          renderMode: "span"
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
                                "expression": { "expr": { "type": "literal", "value": "Status" }, "args": {} }
                              })
                            ]),
                            "tooltip": selectTranslation([
                              void 0
                            ]),
                            "filter": [
                              /* @__PURE__ */ React.createElement(
                                $DatagridDropdownFilter,
                                {
                                  key: "p.Administration.ScheduledEvents.drop_downFilter1",
                                  $widgetId: "p.Administration.ScheduledEvents.drop_downFilter1",
                                  auto: true,
                                  advanced: false,
                                  defaultValue: void 0,
                                  filterOptions: [],
                                  emptyOptionCaption: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                  ]),
                                  multiSelect: false,
                                  onChange: void 0,
                                  ariaLabel: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                  ]),
                                  class: "mx-name-drop_downFilter1",
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
                              "entity": "System.ScheduledEventInformation",
                              "attribute": "EndTime",
                              "attributeType": "DateTime",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p.10",
                              "isList": false
                            }),
                            "content": void 0,
                            "dynamicText": selectTranslation([
                              ListExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "EndTime" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "currentObject": { "widget": "p.Administration.ScheduledEvents.dataGrid21", "source": "object" } } },
                                "dataSourceId": "p.10"
                              })
                            ]),
                            "header": selectTranslation([
                              ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "End time" }, "args": {} }
                              })
                            ]),
                            "tooltip": selectTranslation([
                              void 0
                            ]),
                            "filter": [
                              /* @__PURE__ */ React.createElement(
                                $DatagridDateFilter,
                                {
                                  key: "p.Administration.ScheduledEvents.dateFilter2",
                                  $widgetId: "p.Administration.ScheduledEvents.dateFilter2",
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
                                  class: "mx-name-dateFilter2",
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
                        class: "mx-name-dataGrid21",
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
  "Scheduled Events"
]);
const classes = "layout-atlas layout-atlas-responsive-default";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_Default.Main": region$Main
};

export { classes, content, style, title };
