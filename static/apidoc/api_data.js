define({ "api": [
  {
    "type": "post",
    "url": "/api/authority/login",
    "title": "登录",
    "description": "<p>普通用户/管理员登录</p>",
    "name": "submit_login",
    "group": "authority",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : token\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8083/api/authority/login"
      }
    ],
    "version": "1.0.0",
    "filename": "router/api/authority.js",
    "groupTitle": "authority"
  }
] });