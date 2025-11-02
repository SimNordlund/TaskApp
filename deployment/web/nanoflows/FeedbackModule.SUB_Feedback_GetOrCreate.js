import { addEnumerations, t } from "mendix";

export const SUB_Feedback_GetOrCreate = {
  "name": "FeedbackModule.SUB_Feedback_GetOrCreate",
  "instructions": [
    {
      "type": "tryCatch",
      "label": "34bb080f-8832-40aa-ad3a-ba22d8440aca",
      "catchTarget": "8ad56c84-aca8-4355-b23e-124662eaaa1b",
      "body": [
        {
          "type": "javaScriptActionCall",
          "action": () => require("C:/Users/TaraR/Mendix/TaskApp/javascriptsource/feedbackmodule/actions/GetStorageItemObject").GetStorageItemObject,
          "outputVar": "LocalFeedback",
          "parameters": [
            {
              "kind": "primitive",
              "value": {
                "type": "constant",
                "name": "FeedbackModule.LocalStorageKey"
              }
            },
            {
              "kind": "primitive",
              "value": {
                "type": "literal",
                "value": "FeedbackModule.Feedback"
              }
            }
          ]
        },
        {
          "type": "return",
          "result": {
            "type": "literal",
            "value": true
          },
          "resultKind": "primitive"
        }
      ]
    },
    {
      "type": "switch",
      "label": "5f83120b-589c-4068-9077-3b8ed99f0949",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "LocalFeedback"
          },
          {
            "type": "literal",
            "value": null
          }
        ]
      },
      "targets": {
        "false": "a0983257-fc0e-4278-a8e1-c9b8168f6886",
        "true": "c4a47248-8e3d-4e75-ad14-a9878acd6335"
      }
    },
    {
      "type": "return",
      "label": "c4a47248-8e3d-4e75-ad14-a9878acd6335",
      "result": {
        "type": "variable",
        "variable": "LocalFeedback"
      },
      "resultKind": "object"
    },
    {
      "type": "jump",
      "label": "a0983257-fc0e-4278-a8e1-c9b8168f6886",
      "target": "9e0294c5-0784-446e-a06d-0fef9c95c827"
    },
    {
      "type": "createObject",
      "label": "9e0294c5-0784-446e-a06d-0fef9c95c827",
      "objectType": "FeedbackModule.Feedback",
      "outputVar": "NewFeedback"
    },
    {
      "type": "return",
      "label": "163e8c68-d800-4188-979a-d933cec9ad4b",
      "result": {
        "type": "variable",
        "variable": "NewFeedback"
      },
      "resultKind": "object"
    },
    {
      "type": "jump",
      "label": "8ad56c84-aca8-4355-b23e-124662eaaa1b",
      "target": "a0983257-fc0e-4278-a8e1-c9b8168f6886"
    },
    {
      "type": "jump",
      "label": "a0983257-fc0e-4278-a8e1-c9b8168f6886",
      "target": "9e0294c5-0784-446e-a06d-0fef9c95c827"
    }
  ]
};
