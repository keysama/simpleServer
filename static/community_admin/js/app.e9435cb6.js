(function(e){function t(t){for(var a,l,i=t[0],s=t[1],c=t[2],d=0,p=[];d<i.length;d++)l=i[d],o[l]&&p.push(o[l][0]),o[l]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(a=!1)}a&&(r.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},o={app:0},r=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/community_admin/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),o=n.n(a);o.a},"22ff":function(e,t,n){"use strict";var a=n("3863"),o=n.n(a);o.a},3514:function(e,t,n){"use strict";var a=n("fb9a"),o=n.n(a);o.a},3863:function(e,t,n){},"46ac":function(e,t,n){},4805:function(e,t,n){"use strict";var a=n("897e"),o=n.n(a);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=n("8c4f"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},l=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,"),n("br"),e._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],c={name:"HelloWorld",props:{msg:String}},u=c,d=(n("4805"),n("2877")),p=Object(d["a"])(u,i,s,!1,null,"b9167eee",null),m=p.exports,f={name:"app",components:{HelloWorld:m},mounted:function(){var e=localStorage.getItem("time");Date.now()-e>=72e6&&(console.log("App Need Login "+(Date.now()-e)/1e3),this.$router.push("/login"))}},v=f,h=(n("034f"),Object(d["a"])(v,r,l,!1,null,null,null)),b=h.exports,g=n("5c96"),_=n.n(g);n("c69f");a["default"].use(_.a);var x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{staticClass:"container"},[n("el-header",[n("HeaderNav")],1),n("router-view",{staticClass:"view"})],1)},y=[],w=(n("7f7f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":this.$route.path,mode:"horizontal",router:!0},on:{select:e.handleSelect}},[n("el-menu-item",{attrs:{index:"/dashboard",disabled:""}},[e._v("主页")]),n("el-menu-item",{staticClass:"logout",attrs:{index:"5"},on:{click:e.logout}},[e._v("退出登陆")])],1)}),k=[],C=function(e,t){return"string"==typeof e&&"string"==typeof t&&(localStorage.setItem(e,t),!0)},j=function(e){return"string"!=typeof e?"need string":localStorage.getItem(e)},N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-container",[n("el-aside",{attrs:{width:"200px"}},[n("SideNav")],1),n("el-container",[n("el-main",[n("el-table",{attrs:{data:e.bbs}},[n("el-table-column",{attrs:{prop:"id",label:"ID"}}),n("el-table-column",{attrs:{prop:"name",label:"名称"}}),n("el-table-column",{attrs:{prop:"createTime",label:"创建时间"}}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return e.handleClick(t.row)}}},[e._v("查看")]),n("el-button",{attrs:{type:"text",size:"small"}},[e._v("编辑")])]}}])})],1)],1),n("el-footer",[e._v("Footer")])],1)],1)],1)},I=[],$=(n("c5f6"),n("ac6a"),n("bc3a")),S=n.n($),O="",z=!1;S.a.defaults.baseURL=O,S.a.defaults.withCredentials=z;var E=S.a,D=function(e){return E.post("authority/login",e)},T=function(e){return E.get("community/list/"+e)},L=function(e){return E.get("community/nameExist/"+e)},H=function(e){return E.get("channel/list/"+e)},M=function(e,t){return E.post("channel/info/"+e,t,{headers:{Authorization:j("token")}})},P=function(e){return E.delete("channel/delete/"+e,{headers:{Authorization:j("token")}})},A=function(e){return E.put("channel/new",e,{headers:{Authorization:j("token")}})},V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"2",router:!0},on:{open:e.handleOpen,close:e.handleClose}},[n("el-menu-item",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),n("span",[e._v("板块")])])],2),n("el-menu-item",{attrs:{index:":name/channel"}},[n("i",{staticClass:"el-icon-menu"}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("频道")])]),n("el-menu-item",{attrs:{index:"3"}},[n("i",{staticClass:"el-icon-document"}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("文章")])]),n("el-menu-item",{attrs:{index:"4"}},[n("i",{staticClass:"el-icon-setting"}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("设置")])])],1)},F=[],J={methods:{handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)}}},W=J,Y=(n("3514"),Object(d["a"])(W,V,F,!1,null,"cec7d308",null)),B=Y.exports,R={components:{SideNav:B},data:function(){return{bbs:[]}},mounted:function(){var e=this;T(1).then(function(t){e.bbs=t.data.body,e.bbs.forEach(function(e){var t=new Date(Number(e.createTime));e.createTime=t.getFullYear()+"-"+t.getMonth()+"-"+t.getDay()+" "+t.getHours()+":"+t.getMinutes(),console.log(e.createTime)})})}},U=R,q=Object(d["a"])(U,N,I,!1,null,"da9a38ee",null),G=q.exports,K={data:function(){return{activeIndex:"1",activeIndex2:"1",bbs:{path:"/dashboard/bbs",component:G}}},methods:{handleSelect:function(e,t){console.log("HNav",e,t)},logout:function(){C("token",""),C("time",""),this.$router.push("login")}}},Q=K,X=(n("22ff"),Object(d["a"])(Q,w,k,!1,null,"7c60e395",null)),Z=X.exports,ee={components:{HeaderNav:Z},mounted:function(){console.log("Dashboard 路由",this.$route.params.name)}},te=ee,ne=(n("9a1b"),Object(d["a"])(te,x,y,!1,null,"13818be0",null)),ae=ne.exports,oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-card",{staticClass:"card"},[n("el-input",{staticStyle:{"margin-bottom":"10px"},attrs:{placeholder:"请输入用户名"},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}}),n("el-input",{attrs:{placeholder:"请输入密码","show-password":""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("el-button",{staticStyle:{"margin-top":"10px"},attrs:{type:"primary"},on:{click:e.commit}},[e._v("登陆")])],1)},re=[],le=(n("6b54"),n("386d"),{data:function(){return{userName:"",password:""}},methods:{commit:function(){var e=this;console.log("Login Post"),D({username:this.userName,password:this.password}).then(function(t){t.data.body.search("用户名或密码错误")>=0?alert("用户名或密码错误！"):(C("token","Bearer "+t.data.body),C("time",Date.now().toString()),console.log("Login "+j("token")),console.log("Login "+j("time")),e.$router.push("dashboard"))})}},mounted:function(){var e=localStorage.getItem("time");Date.now()-e<72e6&&(console.log("App Already Login"),this.$router.push("/dashboard"))}}),ie=le,se=(n("e79b"),Object(d["a"])(ie,oe,re,!1,null,"1ce55fb5",null)),ce=se.exports,ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"channel"},[n("SideNav",{staticClass:"side"}),n("div",{staticClass:"rest"},[e._v("\n    "+e._s(e.Text)+"\n    "),e._l(e.channelList,function(t){return n("ChannelCard",e._b({key:t.id},"ChannelCard",t,!1))})],2),n("div",{staticClass:"create",on:{click:function(t){e.centerDialogVisible=!0}}}),n("el-dialog",{attrs:{title:"新建频道",visible:e.centerDialogVisible,width:"30%",center:""},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[n("div",{staticClass:"dialog"},[n("div",[n("span",[e._v("板块Id")]),n("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.newItem.id,callback:function(t){e.$set(e.newItem,"id",t)},expression:"newItem.id"}})],1),n("div",[n("span",[e._v("频道名")]),n("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.newItem.name,callback:function(t){e.$set(e.newItem,"name",t)},expression:"newItem.name"}})],1),n("div",[n("span",[e._v("排序")]),n("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.newItem.zindex,callback:function(t){e.$set(e.newItem,"zindex",t)},expression:"newItem.zindex"}})],1)]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.centerDialogVisible=!1}}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("确 定")])],1)])],1)},de=[],pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[e._v(e._s(e.name))]),n("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:e.del}},[e._v("删除")]),n("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:e.modify}},[e._v("修改")])],1),n("div",{staticClass:"box-content"},[n("div",[n("p",[e._v("Id")]),n("el-input",{attrs:{disabled:""},model:{value:e.id,callback:function(t){e.id=t},expression:"id"}})],1),n("div",[n("p",[e._v("所属板块")]),n("el-input",{attrs:{disabled:""},model:{value:e.sectionId,callback:function(t){e.sectionId=t},expression:"sectionId"}})],1),n("div",[n("p",[e._v("名称")]),n("el-input",{model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),n("div",[n("p",[e._v("排序")]),n("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.zindex,callback:function(t){e.zindex=t},expression:"zindex"}})],1),n("div",[n("p",[e._v("创建者")]),n("el-input",{attrs:{placeholder:"请输入内容",disabled:""},model:{value:e.creator,callback:function(t){e.creator=t},expression:"creator"}})],1),n("div",[n("p",[e._v("创建时间")]),n("el-input",{attrs:{placeholder:"请输入内容",disabled:""},model:{value:e.createTime,callback:function(t){e.createTime=t},expression:"createTime"}})],1),n("div",[n("p",[e._v("类型")]),n("el-select",{staticClass:"select",attrs:{placeholder:"请选择"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},e._l(e.options,function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),n("div",[n("p",[e._v("文章数")]),n("el-input",{attrs:{placeholder:"请输入内容",disabled:""},model:{value:e.articleNum,callback:function(t){e.articleNum=t},expression:"articleNum"}})],1)])])},me=[],fe={props:{id:Number,name:String,sectionId:Number,zindex:Number,creator:Number,createTime:String,type:Number,articleNum:Number},data:function(){return{input:"",options:[{value:0,label:"默认"},{value:1,label:"New"},{value:2,label:"Hot"}]}},computed:{},methods:{modify:function(){M(this.id,{name:this.name,zindex:Number(this.zindex),type:Number(this.type)}).then(function(e){"success"==e.data.body&&alert("修改已提交到服务器！"),console.log("ChannelCard after modify",e)})},del:function(){confirm("确定要删除吗？")&&P(this.id).then(function(e){console.log("ChannelCard after del",e),location.reload()})}}},ve=fe,he=(n("b3aa"),Object(d["a"])(ve,pe,me,!1,null,"235e6695",null)),be=he.exports,ge=function(e){var t=new Date(Number(e));return t.getFullYear()+"-"+t.getMonth()+"-"+t.getDay()+" "+t.getHours()+":"+t.getMinutes()},_e={components:{SideNav:B,ChannelCard:be},mounted:function(){var e,t=this;L(this.$route.params.name).then(function(n){e=n.data.body,e?H(e).then(function(e){t.channelList=e.data.body,t.channelList.forEach(function(e){e.createTime=ge(e.createTime)}),console.log("Channel 成功获取信息",e.data.body)}):t.Text="404"}),console.log("Channel 路由",this.$route.params.name)},data:function(){return{Text:"",channelList:[],centerDialogVisible:!1,newItem:{id:"",name:"",zindex:""}}},methods:{submit:function(){this.centerDialogVisible=!1,A({sectionId:Number(this.newItem.id),name:this.newItem.name,zindex:Number(this.newItem.zindex)}).then(function(e){console.log("Channel ",e),"err"!=e.data.body?location.reload():alert("提交失败！请检查输入")})}}},xe=_e,ye=(n("f75a"),Object(d["a"])(xe,ue,de,!1,null,"978876a6",null)),we=ye.exports,ke=new o["a"]({mode:"history",base:"/community_admin/",routes:[{path:"/dashboard",component:ae,children:[{path:"/bbs"},{path:"/"}]},{path:"/login",component:ce},{path:"/:name",component:ae,children:[{path:"/:name",component:we}]}]}),Ce=ke;a["default"].use(o["a"]),a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e(b)},router:Ce}).$mount("#app")},"64a9":function(e,t,n){},"7bea":function(e,t,n){},"897e":function(e,t,n){},9826:function(e,t,n){},"9a1b":function(e,t,n){"use strict";var a=n("9826"),o=n.n(a);o.a},b3aa:function(e,t,n){"use strict";var a=n("46ac"),o=n.n(a);o.a},b739:function(e,t,n){},c69f:function(e,t,n){},e79b:function(e,t,n){"use strict";var a=n("b739"),o=n.n(a);o.a},f75a:function(e,t,n){"use strict";var a=n("7bea"),o=n.n(a);o.a},fb9a:function(e,t,n){}});
//# sourceMappingURL=app.e9435cb6.js.map