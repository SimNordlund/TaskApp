import { reactExports, asPluginWidgets, selectTranslation } from '../index-CmmNAaD_.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-C-HgUb7V.js';
import { WebStaticImageProperty } from '../WebStaticImageProperty-wM04NpCa.js';
import { Container } from '../Container-C4PtBaC3.js';
import { Div } from '../Div-bo4CfIge.js';
import { ImageWidgetModule, Text } from '../Text-2bw0AGlh.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-CaQBzvHQ.js';
import '../InlineText-BNtoJ06u.js';
import '../ScrollContainer-KQJM2kpR.js';

const React = { createElement: reactExports.createElement };
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const { $Div, $Container, $Image, $Text } = asPluginWidgets({ Div, Container, Image, Text });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.FeedbackModule.PopupFailure.layoutGrid1",
      $widgetId: "p.FeedbackModule.PopupFailure.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.FeedbackModule.PopupFailure.layoutGrid1$row0",
            $widgetId: "p.FeedbackModule.PopupFailure.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.FeedbackModule.PopupFailure.layoutGrid1$row0$column0",
                  $widgetId: "p.FeedbackModule.PopupFailure.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.FeedbackModule.PopupFailure.container1",
                        $widgetId: "p.FeedbackModule.PopupFailure.container1",
                        class: "mx-name-container1",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Image,
                            {
                              key: "p.FeedbackModule.PopupFailure.image1",
                              $widgetId: "p.FeedbackModule.PopupFailure.image1",
                              datasource: "image",
                              imageObject: WebStaticImageProperty({
                                "image": { "uri": "img/FeedbackModule$Images$Failure.png" }
                              }),
                              defaultImageDynamic: void 0,
                              imageUrl: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
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
                              heightUnit: "pixels",
                              height: 240,
                              iconSize: 14,
                              displayAs: "fullImage",
                              responsive: true,
                              class: "mx-name-image1 img-center",
                              style: void 0,
                              tabIndex: void 0
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.FeedbackModule.PopupFailure.text1",
                              $widgetId: "p.FeedbackModule.PopupFailure.text1",
                              class: "mx-name-text1 text-center d-block spacing-outer-top-large spacing-outer-bottom",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Oops, it seems your feedback wasn't sent!" }, "args": {} }
                                })
                              ]),
                              renderMode: "h3"
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.FeedbackModule.PopupFailure.text2",
                              $widgetId: "p.FeedbackModule.PopupFailure.text2",
                              class: "mx-name-text2 text-center d-block",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Please try again later, or contact support if the issue persists." }, "args": {} }
                                })
                              ]),
                              renderMode: "p"
                            }
                          )
                        ],
                        ariaHidden: false
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
  "Something went wrong"
]);
const classes = "";
const cancelChangesOperationId = "romPocDMv12rLT+cE4lSAg";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
