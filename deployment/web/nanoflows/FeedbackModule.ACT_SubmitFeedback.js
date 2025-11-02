import { addEnumerations, t } from "mendix";
import { SUB_Feedback_ResetLocalStorage } from "./FeedbackModule.SUB_Feedback_ResetLocalStorage.js";

export const ACT_SubmitFeedback = {
  "name": "FeedbackModule.ACT_SubmitFeedback",
  "instructions": [
    {
      "type": "microflowCall",
      "label": "1ed2bf55-cace-4f7c-bc21-af690551174d",
      "operationId": "8MQpdIlCz1O05ydBksC2tg",
      "parameters": [
        {
          "name": "Feedback",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          },
          "kind": "object"
        }
      ],
      "outputVar": "isValid"
    },
    {
      "type": "switch",
      "label": "940b48d9-9010-4c12-b5fa-96424fbe16f4",
      "condition": {
        "type": "variable",
        "variable": "isValid"
      },
      "targets": {
        "true": "764117d5-9e10-4c22-8ffd-afac85a43fa6",
        "false": "14a664aa-057b-4717-a33f-9942ba35b0ac"
      }
    },
    {
      "type": "return",
      "label": "14a664aa-057b-4717-a33f-9942ba35b0ac",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "microflowCall",
      "label": "764117d5-9e10-4c22-8ffd-afac85a43fa6",
      "operationId": "91ZFrPPjBlGl8yjVXLiM8A",
      "parameters": [
        {
          "name": "Feedback",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          },
          "kind": "object"
        }
      ],
      "outputVar": "ResponseHelper"
    },
    {
      "type": "closeForm",
      "label": "04c72c1e-8766-47d3-8236-407b8f309cf9",
      "numberOfPagesToClose": {
        "type": "literalNumeric",
        "value": "1"
      }
    },
    {
      "type": "switch",
      "label": "86df54d0-8b30-45fd-b75c-538468c3a801",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "ResponseHelper"
          },
          {
            "type": "literal",
            "value": null
          }
        ]
      },
      "targets": {
        "true": "d5fc5060-4a98-40a9-a747-6a6be7e5fd19",
        "false": "4d6daf8a-a8f5-42b1-82e8-fca9a45aa439"
      }
    },
    {
      "type": "jump",
      "label": "4d6daf8a-a8f5-42b1-82e8-fca9a45aa439",
      "target": "efead7a7-95e5-4a30-b1a3-e35ee907242f"
    },
    {
      "type": "openForm",
      "label": "efead7a7-95e5-4a30-b1a3-e35ee907242f",
      "path": "FeedbackModule/PopupFailure.page.xml",
      "params": {
        "name": "FeedbackModule/PopupFailure.page.xml",
        "location": "modal",
        "resizable": false
      }
    },
    {
      "type": "return",
      "label": "0e6c445b-5d31-4eef-86f5-5bf2b128137b",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "openForm",
      "label": "d5fc5060-4a98-40a9-a747-6a6be7e5fd19",
      "path": "FeedbackModule/PopupSuccess.page.xml",
      "params": {
        "name": "FeedbackModule/PopupSuccess.page.xml",
        "location": "modal",
        "resizable": false
      },
      "inputArgs": {
        "$Response": {
          "type": "variable",
          "variable": "ResponseHelper"
        }
      }
    },
    {
      "type": "nanoflowCall",
      "label": "c55db26a-dac2-478e-bc77-8a302667d799",
      "flow": () => SUB_Feedback_ResetLocalStorage,
      "parameters": [
        {
          "name": "Feedback",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          },
          "kind": "object"
        }
      ]
    },
    {
      "type": "return",
      "label": "935f7abe-dc78-4958-94a7-583de3fe7bda",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
