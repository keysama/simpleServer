define({ "api": [
  {
    "type": "delete",
    "url": "/api/article/delete/:articleId",
    "title": "删除文章",
    "description": "<p>删除文章</p>",
    "group": "article",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>&quot;Bearer&quot;[space]token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "articleId",
            "description": "<p>文章Id</p>"
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
            "description": "<p>结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : 'success'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/article.js",
    "groupTitle": "article",
    "name": "DeleteApiArticleDeleteArticleid",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/article/delete/:articleId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/article/info/:articleId",
    "title": "获取文章内容",
    "description": "<p>获取文章内容</p>",
    "group": "article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "articleId",
            "description": "<p>文章id</p>"
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
            "description": "<p>文章内容</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : {...articleInfo}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/article.js",
    "groupTitle": "article",
    "name": "GetApiArticleInfoArticleid",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/article/info/:articleId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/article/list/:channelId/:start/:num",
    "title": "获取文章列表",
    "description": "<p>获取文章列表</p>",
    "group": "article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "channelId",
            "description": "<p>频道id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "start",
            "description": "<p>获取的起始索引（从0开始）</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "num",
            "description": "<p>获取的数量</p>"
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
            "description": "<p>文章列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : [...articleList]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/article.js",
    "groupTitle": "article",
    "name": "GetApiArticleListChannelidStartNum",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/article/list/:channelId/:start/:num"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/article/info/:articleId",
    "title": "修改文章",
    "description": "<p>修改文章</p>",
    "group": "article",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>&quot;Bearer&quot;[space]token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "articleId",
            "description": "<p>文章Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>文章标题</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "type",
            "description": "<p>文章类型，0：普通，1：活动</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "zindex",
            "description": "<p>排序</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>文章内容</p>"
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
            "description": "<p>结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : 'success'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/article.js",
    "groupTitle": "article",
    "name": "PostApiArticleInfoArticleid",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/article/info/:articleId"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/article/new",
    "title": "添加文章",
    "description": "<p>添加文章</p>",
    "group": "article",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>&quot;Bearer&quot;[space]token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "channelId",
            "description": "<p>频道id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>文章标题</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "type",
            "description": "<p>文章类型</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "zindex",
            "description": "<p>文章排序</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>文章内容</p>"
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
            "description": "<p>结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : 'success'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/article.js",
    "groupTitle": "article",
    "name": "PutApiArticleNew",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/article/new"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/authority/login",
    "title": "登录",
    "description": "<p>普通用户/管理员登录</p>",
    "name": "login",
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
            "description": "<p>用于验证用户的token，有效期24小时</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : [token]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/authority.js",
    "groupTitle": "authority",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/authority/login"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/authority/registe",
    "title": "注册用户",
    "description": "<p>注册普通用户</p>",
    "name": "registe",
    "group": "authority",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称</p>"
          },
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
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "type",
            "description": "<p>0:普通用户，1：论坛管理员</p>"
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
            "description": "<p>注册结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/authority.js",
    "groupTitle": "authority",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/authority/registe"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/authority/userInfo/:type",
    "title": "获取用户信息",
    "description": "<p>使用token令牌，获取用户信息</p>",
    "name": "userInfo",
    "group": "authority",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>&quot;Bearer&quot;[space]token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "type",
            "description": "<p>0:普通用户，1：论坛管理员，2：超级管理员</p>"
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
            "description": "<p>用户存在token中的信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : {...userinfo}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/authority.js",
    "groupTitle": "authority",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/authority/userInfo/:type"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/api/channel/delete/:channelId",
    "title": "删除频道",
    "description": "<p>删除频道</p>",
    "group": "channel",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>&quot;Bearer&quot;[space]token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "channelId",
            "description": "<p>频道Id</p>"
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
            "description": "<p>结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : 'success'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/channel.js",
    "groupTitle": "channel",
    "name": "DeleteApiChannelDeleteChannelid",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/channel/delete/:channelId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/channel/info/:channelId",
    "title": "获取频道信息",
    "description": "<p>获取频道信息</p>",
    "group": "channel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "channelId",
            "description": "<p>频道Id</p>"
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
            "description": "<p>频道信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : {...channelInfo}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/channel.js",
    "groupTitle": "channel",
    "name": "GetApiChannelInfoChannelid",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/channel/info/:channelId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/channel/list/:sectionId",
    "title": "获取频道列表",
    "description": "<p>获取频道列表</p>",
    "group": "channel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "sectionId",
            "description": "<p>板块id</p>"
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
            "description": "<p>频道列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : [...channelList]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/channel.js",
    "groupTitle": "channel",
    "name": "GetApiChannelListSectionid",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/channel/list/:sectionId"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/channel/info/:channelId",
    "title": "修改频道",
    "description": "<p>修改频道</p>",
    "group": "channel",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>&quot;Bearer&quot;[space]token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "channelId",
            "description": "<p>频道Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>频道名</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "zindex",
            "description": "<p>排序</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "type",
            "description": "<p>类型 默认0：普通频道</p>"
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
            "description": "<p>结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : 'success'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/channel.js",
    "groupTitle": "channel",
    "name": "PostApiChannelInfoChannelid",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/channel/info/:channelId"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/channel/new",
    "title": "添加频道",
    "description": "<p>添加频道</p>",
    "group": "channel",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>&quot;Bearer&quot;[space]token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "sectionId",
            "description": "<p>板块id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>频道名</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "zindex",
            "description": "<p>排序</p>"
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
            "description": "<p>结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : 'success'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/channel.js",
    "groupTitle": "channel",
    "name": "PutApiChannelNew",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/channel/new"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/api/comment/delete/:commentId",
    "title": "删除评论",
    "description": "<p>删除评论</p>",
    "group": "comment",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>&quot;Bearer&quot;[space]token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "commentId",
            "description": "<p>评论Id</p>"
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
            "description": "<p>结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : 'success'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/comment.js",
    "groupTitle": "comment",
    "name": "DeleteApiCommentDeleteCommentid",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/comment/delete/:commentId"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/api/comment/deleteReply/:replyId",
    "title": "删除回复",
    "description": "<p>删除回复</p>",
    "group": "comment",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>&quot;Bearer&quot;[space]token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "replyId",
            "description": "<p>回复Id</p>"
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
            "description": "<p>结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : 'success'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/comment.js",
    "groupTitle": "comment",
    "name": "DeleteApiCommentDeletereplyReplyid",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/comment/deleteReply/:replyId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/comment/list/:articleId/:start/:num",
    "title": "获取评论列表",
    "description": "<p>获取评论列表</p>",
    "group": "comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "articleId",
            "description": "<p>文章Id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "start",
            "description": "<p>获取的起始索引（从0开始）</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "num",
            "description": "<p>获取的数量</p>"
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
            "description": "<p>评论列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : [...{           \n     \"id\": 0,\n    \"articleId\": 0,\n     \"creator\": 0,\n    \"content\": \"\",\n    \"createTime\": \"\",\n    \"creator_niackname\": \"\",\n    \"creator_head\": null,\n    \"reply_num\": 0}\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/comment.js",
    "groupTitle": "comment",
    "name": "GetApiCommentListArticleidStartNum",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/comment/list/:articleId/:start/:num"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/comment/reply/:commentId/:start/:num",
    "title": "获取回复列表",
    "description": "<p>获取回复列表</p>",
    "group": "comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "commentId",
            "description": "<p>评论Id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "start",
            "description": "<p>获取的起始索引（从0开始）</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "num",
            "description": "<p>获取的数量</p>"
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
            "description": "<p>回复列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : [...replyList]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/comment.js",
    "groupTitle": "comment",
    "name": "GetApiCommentReplyCommentidStartNum",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/comment/reply/:commentId/:start/:num"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/comment/new",
    "title": "添加评论",
    "description": "<p>添加评论</p>",
    "group": "comment",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>&quot;Bearer&quot;[space]token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "articleId",
            "description": "<p>文章Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
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
            "description": "<p>结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : 'success'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/comment.js",
    "groupTitle": "comment",
    "name": "PutApiCommentNew",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/comment/new"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/comment/reply",
    "title": "回复评论",
    "description": "<p>回复评论</p>",
    "group": "comment",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>&quot;Bearer&quot;[space]token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "commentId",
            "description": "<p>评论Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
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
            "description": "<p>结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : 'success'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/comment.js",
    "groupTitle": "comment",
    "name": "PutApiCommentReply",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/comment/reply"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/community/config/:communityId",
    "title": "获取论坛配置信息",
    "description": "<p>获取论坛配置信息</p>",
    "group": "community",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "communityId",
            "description": "<p>论坛id</p>"
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
            "description": "<p>配置信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : {...config}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/community.js",
    "groupTitle": "community",
    "name": "GetApiCommunityConfigCommunityid",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/community/config/:communityId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/community/customerList/:communityId",
    "title": "获取论坛用户列表",
    "description": "<p>获取论坛用户列表</p>",
    "group": "community",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "communityId",
            "description": "<p>论坛id</p>"
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
            "description": "<p>用户列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : [...customerList]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/community.js",
    "groupTitle": "community",
    "name": "GetApiCommunityCustomerlistCommunityid",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/community/customerList/:communityId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/community/info/:communityId",
    "title": "获取论坛信息",
    "description": "<p>获取论坛信息</p>",
    "group": "community",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "communityId",
            "description": "<p>论坛id</p>"
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
            "description": "<p>论坛信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : {...info}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/community.js",
    "groupTitle": "community",
    "name": "GetApiCommunityInfoCommunityid",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/community/info/:communityId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/community/list/:creatorId",
    "title": "获取用户创建的论坛列表",
    "description": "<p>获取用户创建的论坛列表</p>",
    "group": "community",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "creatorId",
            "description": "<p>创建者Id</p>"
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
            "description": "<p>论坛列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : [...list]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/community.js",
    "groupTitle": "community",
    "name": "GetApiCommunityListCreatorid",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/community/list/:creatorId"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/community/config/:communityId",
    "title": "修改论坛配置信息",
    "description": "<p>修改论坛配置信息</p>",
    "group": "community",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>&quot;Bearer&quot;[space]token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "communityId",
            "description": "<p>论坛id</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>修改内容,ep.{a:b,d:c}</p>"
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
            "description": "<p>修改结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : 'success'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/community.js",
    "groupTitle": "community",
    "name": "PostApiCommunityConfigCommunityid",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/community/config/:communityId"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/community/info/:communityId",
    "title": "修改论坛信息",
    "description": "<p>修改论坛信息</p>",
    "group": "community",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>&quot;Bearer&quot;[space]token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "communityId",
            "description": "<p>论坛id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>论坛名</p>"
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
            "description": "<p>修改结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : 'success'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/community.js",
    "groupTitle": "community",
    "name": "PostApiCommunityInfoCommunityid",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/community/info/:communityId"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/community/config/:communityId",
    "title": "添加论坛配置信息",
    "description": "<p>添加论坛配置信息</p>",
    "group": "community",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>&quot;Bearer&quot;[space]token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "communityId",
            "description": "<p>论坛id</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>配置内容,ep.{a:b,d:c}</p>"
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
            "description": "<p>结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : 'success'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/community.js",
    "groupTitle": "community",
    "name": "PutApiCommunityConfigCommunityid",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/community/config/:communityId"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/community/create",
    "title": "创建论坛",
    "description": "<p>管理员创建论坛</p>",
    "name": "create",
    "group": "community",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>&quot;Bearer&quot;[space]token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>论坛名/代号</p>"
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
            "description": "<p>创建结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/community.js",
    "groupTitle": "community",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/community/create"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/community/nameExist/:name",
    "title": "查看论坛名是否存在",
    "description": "<p>查看论坛名是否存在</p>",
    "name": "nameExist",
    "group": "community",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>论坛名/代号</p>"
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
            "description": "<p>创建结果,存在返回ID，不存在返回null</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : id || null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/community.js",
    "groupTitle": "community",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/community/nameExist/:name"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/api/message/delete/:messageId",
    "title": "删除消息",
    "description": "<p>删除消息</p>",
    "group": "message",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>&quot;Bearer&quot;[space]token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "messageId",
            "description": "<p>消息Id</p>"
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
            "description": "<p>结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : 'success'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/message.js",
    "groupTitle": "message",
    "name": "DeleteApiMessageDeleteMessageid",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/message/delete/:messageId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/message/list/:type",
    "title": "消息列表",
    "description": "<p>消息列表</p>",
    "group": "message",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>&quot;Bearer&quot;[space]token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "type",
            "description": "<p>0:所有消息，1:未读消息</p>"
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
            "description": "<p>originId:-1:系统消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : [...messageList]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/message.js",
    "groupTitle": "message",
    "name": "GetApiMessageListType",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/message/list/:type"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/message/state",
    "title": "修改状态",
    "description": "<p>修改状态</p>",
    "group": "message",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>&quot;Bearer&quot;[space]token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "messageId",
            "description": "<p>消息Id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "state",
            "description": "<p>0:已读，1:未读</p>"
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
            "description": "<p>结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : 'success'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/message.js",
    "groupTitle": "message",
    "name": "PostApiMessageState",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/message/state"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/message/new",
    "title": "添加消息",
    "description": "<p>添加消息</p>",
    "group": "message",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>&quot;Bearer&quot;[space]token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "targetId",
            "description": "<p>接收者Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>消息内容</p>"
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
            "description": "<p>结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : 'success'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/message.js",
    "groupTitle": "message",
    "name": "PutApiMessageNew",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/message/new"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/api/section/delete/:sectionId",
    "title": "删除板块",
    "description": "<p>删除板块</p>",
    "group": "section",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>&quot;Bearer&quot;[space]token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "sectionId",
            "description": "<p>板块Id</p>"
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
            "description": "<p>结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : 'success'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/section.js",
    "groupTitle": "section",
    "name": "DeleteApiSectionDeleteSectionid",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/section/delete/:sectionId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/section/list/:communityId",
    "title": "获取板块列表",
    "description": "<p>获取板块列表</p>",
    "group": "section",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "communityId",
            "description": "<p>论坛id</p>"
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
            "description": "<p>板块列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : [...sectionList]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/section.js",
    "groupTitle": "section",
    "name": "GetApiSectionListCommunityid",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/section/list/:communityId"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/file/new/:communityId/:filePath",
    "title": "上传文件",
    "description": "<p>上传文件</p>",
    "group": "section",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "communityId",
            "description": "<p>论坛id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "filePath",
            "description": "<p>位置,banner/user/article/others</p>"
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
            "description": "<p>文件路径</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : '/--/--.jpg/png/mp4/..'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/file.js",
    "groupTitle": "section",
    "name": "PostApiFileNewCommunityidFilepath",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/file/new/:communityId/:filePath"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/section/info/:sectionId",
    "title": "修改板块",
    "description": "<p>修改板块</p>",
    "group": "section",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>&quot;Bearer&quot;[space]token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "sectionId",
            "description": "<p>板块Id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>板块名</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "zindex",
            "description": "<p>排序</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "type",
            "description": "<p>类型，默认0：普通板块</p>"
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
            "description": "<p>结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : 'success'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/section.js",
    "groupTitle": "section",
    "name": "PostApiSectionInfoSectionid",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/section/info/:sectionId"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/section/new",
    "title": "添加板块",
    "description": "<p>添加板块</p>",
    "group": "section",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>&quot;Bearer&quot;[space]token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "communityId",
            "description": "<p>论坛id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>板块名</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "zindex",
            "description": "<p>排序</p>"
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
            "description": "<p>结果</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"state\" : 1,\n    \"body\" : 'success'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "router/api/section.js",
    "groupTitle": "section",
    "name": "PutApiSectionNew",
    "sampleRequest": [
      {
        "url": "http://192.168.1.63:8083/api/section/new"
      }
    ]
  }
] });
