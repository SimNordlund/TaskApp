import { addEnumerations, t } from "mendix";

export const ACT_Feedback_TriggerScreenshotMode = {
  "name": "FeedbackModule.ACT_Feedback_TriggerScreenshotMode",
  "instructions": [
    {
      "type": "closeForm",
      "label": "663960a6-acd7-4929-b377-ec819b7440b1"
    },
    {
      "type": "javaScriptActionCall",
      "label": "f7f97f03-4247-4ec7-80b6-0e2832f0f56c",
      "action": () => require("C:/Users/TaraR/Mendix/TaskApp/javascriptsource/feedbackmodule/actions/JS_ToggleFeedbackScreenshotWidget").JS_ToggleFeedbackScreenshotWidget,
      "outputVar": "base64FromWidget",
      "parameters": []
    },
    {
      "type": "switch",
      "label": "7b41b521-8c82-4745-8aca-3b62e7ac00f2",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "base64FromWidget"
          },
          {
            "type": "literal",
            "value": "uploadCancelled"
          }
        ]
      },
      "targets": {
        "true": "54d2d0a4-0f3e-4dcf-871a-a5649564ca82",
        "false": "2677f88a-d475-41a9-9cae-2d2802b6c8f0"
      }
    },
    {
      "type": "jump",
      "label": "2677f88a-d475-41a9-9cae-2d2802b6c8f0",
      "target": "d09e5951-f639-4c1b-a9f8-86ef2eeb1448"
    },
    {
      "type": "jump",
      "label": "d09e5951-f639-4c1b-a9f8-86ef2eeb1448",
      "target": "df3d219a-6302-4b36-809b-73f32a234c20"
    },
    {
      "type": "jump",
      "label": "df3d219a-6302-4b36-809b-73f32a234c20",
      "target": "32004362-f060-4c87-afb4-c7ce7ac0e1fa"
    },
    {
      "type": "openForm",
      "label": "32004362-f060-4c87-afb4-c7ce7ac0e1fa",
      "path": "FeedbackModule/ShareFeedback.page.xml",
      "params": {
        "name": "FeedbackModule/ShareFeedback.page.xml",
        "location": "modal",
        "resizable": true
      }
    },
    {
      "type": "return",
      "label": "46b5d714-fe8f-46a8-adc5-2c3d3a4d6c8c",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "switch",
      "label": "54d2d0a4-0f3e-4dcf-871a-a5649564ca82",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "base64FromWidget"
          },
          {
            "type": "literal",
            "value": null
          }
        ]
      },
      "targets": {
        "true": "033213b1-0034-401e-bd98-ad37e5959b22",
        "false": "da49b2b0-d73b-497d-94f8-d840a15a824e"
      }
    },
    {
      "type": "return",
      "label": "da49b2b0-d73b-497d-94f8-d840a15a824e",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "changeObject",
      "label": "033213b1-0034-401e-bd98-ad37e5959b22",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "variable",
        "variable": "base64FromWidget"
      }
    },
    {
      "type": "commitObjects",
      "operationId": "ZaSZqxiKmVK/HXTzMjyAaw",
      "inputVar": "Feedback"
    },
    {
      "type": "jump",
      "label": "df3d219a-6302-4b36-809b-73f32a234c20",
      "target": "32004362-f060-4c87-afb4-c7ce7ac0e1fa"
    }
  ]
};
