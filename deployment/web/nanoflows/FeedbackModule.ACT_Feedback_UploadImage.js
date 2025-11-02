import { addEnumerations, t } from "mendix";

export const ACT_Feedback_UploadImage = {
  "name": "FeedbackModule.ACT_Feedback_UploadImage",
  "instructions": [
    {
      "type": "setVariable",
      "label": "7fee6340-ca11-4b9d-8f1d-30dc3ad8c462",
      "value": {
        "type": "literal",
        "value": ".gif,.png,.jpg,.jpeg"
      },
      "outputVar": "mimeTypes",
      "outputKind": "primitive"
    },
    {
      "type": "setVariable",
      "label": "d0c236b1-cc6b-42c0-baac-e20cd9f2585b",
      "value": {
        "type": "literalNumeric",
        "value": "5"
      },
      "outputVar": "fileUploadSize",
      "outputKind": "primitive"
    },
    {
      "type": "javaScriptActionCall",
      "label": "0e518915-7b9b-4695-bd92-5f6fa0e46997",
      "action": () => require("C:/Users/TaraR/Mendix/TaskApp/javascriptsource/feedbackmodule/actions/JS_UploadAndConvertToFileBlobURL").JS_UploadAndConvertToFileBlobURL,
      "outputVar": "fileBlobURL",
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "mimeTypes"
          }
        },
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "fileUploadSize"
          }
        }
      ]
    },
    {
      "type": "switch",
      "label": "f0a0b7e1-a111-4b18-9e51-2e7af13e20d6",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "fileBlobURL"
          },
          {
            "type": "literal",
            "value": "uploadCancelled"
          }
        ]
      },
      "targets": {
        "true": "e12bdd33-f004-49a1-a5cd-c2dfaf0c1df2",
        "false": "c501f291-0d3a-4e6d-be5f-9916f6ed77d5"
      }
    },
    {
      "type": "return",
      "label": "c501f291-0d3a-4e6d-be5f-9916f6ed77d5",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "switch",
      "label": "e12bdd33-f004-49a1-a5cd-c2dfaf0c1df2",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "fileBlobURL"
          },
          {
            "type": "literal",
            "value": null
          }
        ]
      },
      "targets": {
        "false": "61204ef1-62a6-49c2-bed2-1506de4e959d",
        "true": "a905d61b-e5fe-4ae7-8e13-fcd3263e25ce"
      }
    },
    {
      "type": "switch",
      "label": "a905d61b-e5fe-4ae7-8e13-fcd3263e25ce",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "fileBlobURL"
          },
          {
            "type": "literal",
            "value": "fileSizeNotAccepted"
          }
        ]
      },
      "targets": {
        "true": "84003e5b-3b20-4b9f-ae2a-f90cbf93f5cd",
        "false": "a1b623b8-1305-46e6-a6b2-aa02acd1d799"
      }
    },
    {
      "type": "showMessage",
      "label": "a1b623b8-1305-46e6-a6b2-aa02acd1d799",
      "messageType": "error",
      "message": t([
        {
          "type": "literal",
          "value": "Maximum image size allowed is 5MB."
        }
      ]),
      "blocking": true
    },
    {
      "type": "return",
      "label": "52278df3-cd58-4a2e-947b-23557b26b29b",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "switch",
      "label": "84003e5b-3b20-4b9f-ae2a-f90cbf93f5cd",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "fileBlobURL"
          },
          {
            "type": "literal",
            "value": "fileTypeNotAccepted"
          }
        ]
      },
      "targets": {
        "false": "f63a1472-f15c-490d-a252-cc124287954a",
        "true": "236028e9-c77f-4af1-9be2-1ce4dc9e3302"
      }
    },
    {
      "type": "closeForm",
      "label": "236028e9-c77f-4af1-9be2-1ce4dc9e3302"
    },
    {
      "type": "javaScriptActionCall",
      "label": "74073dfe-de62-462d-b2b3-2e0714b23459",
      "action": () => require("C:/Users/TaraR/Mendix/TaskApp/javascriptsource/feedbackmodule/actions/JS_ToggleFeedbackAnnotateWidget").JS_ToggleFeedbackAnnotateWidget,
      "outputVar": "base64ImageFromWidget",
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "fileBlobURL"
          }
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "338694c9-0fda-43fa-9408-1188318327c7",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "variable",
        "variable": "base64ImageFromWidget"
      }
    },
    {
      "type": "commitObjects",
      "operationId": "mY1DU/zVyFCot1JVxPfzdA",
      "inputVar": "Feedback"
    },
    {
      "type": "openForm",
      "label": "aa4f9bd4-babb-48f4-89b7-0bcea7b4f998",
      "path": "FeedbackModule/ShareFeedback.page.xml",
      "params": {
        "name": "FeedbackModule/ShareFeedback.page.xml",
        "location": "modal",
        "resizable": true
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "ce107346-8e2b-4466-a72c-8c1d3899acf6",
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
      "type": "javaScriptActionCall",
      "label": "d4a40c07-7d23-4b73-b89b-da76bd31245d",
      "action": () => require("C:/Users/TaraR/Mendix/TaskApp/javascriptsource/feedbackmodule/actions/JS_RevokeUploadedFileFromMemory").JS_RevokeUploadedFileFromMemory,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "fileBlobURL"
          }
        }
      ]
    },
    {
      "type": "return",
      "label": "ad292b4a-c589-4985-9db4-f651f782bd7d",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "showMessage",
      "label": "f63a1472-f15c-490d-a252-cc124287954a",
      "messageType": "error",
      "message": t([
        {
          "type": "literal",
          "value": "Only images with format of .gif .jpg .jpeg .png are allowed"
        }
      ]),
      "blocking": true
    },
    {
      "type": "return",
      "label": "a0a7c111-1aef-4ae6-bdcd-362e869caace",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "showMessage",
      "label": "61204ef1-62a6-49c2-bed2-1506de4e959d",
      "messageType": "error",
      "message": t([
        {
          "type": "literal",
          "value": "Upload failed, please try again."
        }
      ]),
      "blocking": true
    },
    {
      "type": "return",
      "label": "4f29f8f3-60bd-4f5b-9aec-ea715a110bc3",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
