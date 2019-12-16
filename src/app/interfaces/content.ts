export interface Content {

    "contentType": {"name":"COMMITMENT"},
    "owner": {
        "username": "string",
        "password": "string",
        "enabled": true,
        "email": "string",
        "firstName": "string",
        "lastName": "string",
        "accountExpired": true,
        "accountLocked": true,
        "passwordExpired": true,
        "id": 0,
        "authorities": [
            {
                "authority": "string",
                "id": 0
            }
            ]
    },
    "privacyLevel": {"name":"PUBLIC"},
    "topic": {
        "name": "string",
        "description": "string",
        "id": 0
    },
    "content": "string",
    "contentFile": {
        "originalFilename": "string",
        "contentType": "string",
        "filePath": "string",
        "id": 0
    },
    "contentUrl": "string",
    "contentPage": {
        "name": "string",
        "description": "string",
        "id": 0,
        "contents": [
            null
            ]
    },
    "priority": 0,
    "startDate": "2019-07-29T08:23:40.192Z",
    "endDate": "2019-07-29T08:23:40.192Z",
    "active": true,
    "id": 0,
    "readers": [
        {
            "username": "string",
            "password": "string",
            "enabled": true,
            "email": "string",
            "firstName": "string",
            "lastName": "string",
            "accountExpired": true,
            "accountLocked": true,
            "passwordExpired": true,
            "id": 0,
            "authorities": [
                {
                    "authority": "string",
                    "id": 0
                }
                ]
        }
        ],
    "likes": [
        {
            "user": {
                "username": "string",
                "password": "string",
                "enabled": true,
                "email": "string",
                "firstName": "string",
                "lastName": "string",
                "accountExpired": true,
                "accountLocked": true,
                "passwordExpired": true,
                "id": 0,
                "authorities": [
                    {
                        "authority": "string",
                        "id": 0
                    }
                    ]
            },
            "deviceId": "string",
            "id": 0,
            "userId": {},
            "contentId": {}
        }
        ],
    "contentTypeId": {},
    "privacyLevelId": {},
    "topicId": {},
    "contentPageId": {},
    "contentFileId": {},
    "ownerId": {}

}
