export interface NewPost {

    "contentType":{
        "name": string
    },
    "ownerId": number,
    "privacyLevel": {
        "name":string
    },
    "topicId": number,
    "readers"?: number[],
    "content": string,
    "active": boolean,
    "errors"?: {
        "nestedPath": "string",
        "allErrors": [
            {
                "codes": [
                    "string"
                    ],
                "arguments": [
                    {}
                    ],
                "defaultMessage": "string",
                "objectName": "string",
                "code": "string"
            }
            ],
        "globalErrorCount": 0,
        "globalErrors": [
            {
                "codes": [
                    "string"
                    ],
                "arguments": [
                    {}
                    ],
                "defaultMessage": "string",
                "objectName": "string",
                "code": "string"
            }
            ],
        "globalError": {
            "codes": [
                "string"
                ],
            "arguments": [
                {}
                ],
            "defaultMessage": "string",
            "objectName": "string",
            "code": "string"
        },
        "fieldErrorCount": 0,
        "fieldErrors": [
            {
                "codes": [
                    "string"
                    ],
                "arguments": [
                    {}
                    ],
                "defaultMessage": "string",
                "objectName": "string",
                "field": "string",
                "rejectedValue": {},
                "bindingFailure": true,
                "code": "string"
            }
            ],
        "fieldError": {
            "codes": [
                "string"
                ],
            "arguments": [
                {}
                ],
            "defaultMessage": "string",
            "objectName": "string",
            "field": "string",
            "rejectedValue": {},
            "bindingFailure": true,
            "code": "string"
        },
        "errorCount": 0,
        "objectName": "string"
    }
}

