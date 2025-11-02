import { addEnumerations, t } from "mendix";

export const ACT_Feedback_ClearForm = {
  "name": "FeedbackModule.ACT_Feedback_ClearForm",
  "instructions": [
    {
      "type": "changeObject",
      "label": "871c7d2e-d169-45c5-8aaa-5ea438553a20",
      "inputVar": "Feedback",
      "member": "Subject",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "Description",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "SubmitterEmail",
      "value": {
        "type": "conditional",
        "condition": {
          "type": "function",
          "name": "=",
          "parameters": [
            {
              "type": "variable",
              "variable": "Feedback",
              "path": "_showEmail"
            },
            {
              "type": "literal",
              "value": false
            }
          ]
        },
        "then": {
          "type": "variable",
          "variable": "Feedback",
          "path": "SubmitterEmail"
        },
        "else": {
          "type": "literal",
          "value": null
        }
      }
    },
    {
      "type": "changeObject",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "fbb55021-e5db-4594-86d8-26d420a1d742",
      "action": () => require("C:/Users/TaraR/Mendix/TaskApp/javascriptsource/feedbackmodule/actions/SetStorageItemObject").SetStorageItemObject,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "constant",
            "name": "FeedbackModule.LocalStorageKey"
          }
        },
        {
          "kind": "object",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          }
        }
      ]
    },
    {
      "type": "return",
      "label": "9ea72a30-2224-41e2-a6c9-19d899aa8a17",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
