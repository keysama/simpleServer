(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"6OCs":function(e,t,a){e.exports={container:"antd-pro-pages-channel-index.css-container"}},O8y0:function(e,t,a){"use strict";var n=a("tAuX"),r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("DjyN");var l=r(a("NUBc"));a("/zsF");var c=r(a("PArb"));a("14J3");var s=r(a("BMrR"));a("+L6B");var u=r(a("2/Rp"));a("jCWc");var i=r(a("kPKH")),o=r(a("d6i3")),d=r(a("1l/V")),m=r(a("2Taf")),f=r(a("vZ4D")),p=r(a("l4Ni")),h=r(a("ujKo")),g=r(a("rlhR")),v=r(a("MhPg")),y=n(a("q1tI")),E=r(a("6OCs")),P=r(a("/m66")),N=r(a("rdW9")),w=a("JCNI"),C=(a("eZh0"),a("Ueoi")),b=r(a("wY1l")),x=a("MuoO"),L=function(e){function t(){var e;return(0,m.default)(this,t),e=(0,p.default)(this,(0,h.default)(t).call(this)),e.componentDidMount=function(){e.init()},e.componentWillReceiveProps=function(){e.init()},e.init=(0,d.default)(o.default.mark(function t(){var a,n,r;return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,C.setState_promise)((0,g.default)(e),{loading:!0});case 2:return a={},Object.values(e.props.channelList).forEach(function(t){var n=t.filter(function(t){return t.id==e.props.match.params.channelName});n.length>0&&(a=n[0])}),n=a.articleNum,t.next=7,(0,w.getArticleList)(e.props.match.params.channelName,(e.props.match.params.page-1)*e.state.numPerPage,e.state.numPerPage);case 7:return r=t.sent,0==r.data.state&&alert(r.data.body),t.next=11,(0,C.setState_promise)((0,g.default)(e),{total:n,loading:!1,articleList:1==r.data.state?r.data.body:[],currentChannel:a});case 11:case"end":return t.stop()}},t)})),e.onPageChange=function(t){e.props.history.push("/".concat(e.props.match.params.communityName,"/channel/").concat(e.props.match.params.channelName,"/").concat(t))},e.renderItem=function(t){return console.log(t),y.default.createElement(b.default,{to:"/".concat(e.props.match.params.communityName,"/article/").concat(t.id)},t.title)},e.state={loading:!1,numPerPage:10,total:0,articleList:[],currentChannel:{}},e}return(0,v.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this.props.match.params.page;return y.default.createElement("div",{className:E.default.container},y.default.createElement(N.default,{spinning:this.state.loading},this.state.loading?null:y.default.createElement("div",null,y.default.createElement(s.default,{type:"flex",justify:"space-between"},y.default.createElement(i.default,null,y.default.createElement("h1",null,this.state.currentChannel.name)),y.default.createElement(i.default,{style:{display:"flex",alignItems:"center"}},y.default.createElement(b.default,{to:"/".concat(this.props.match.params.communityName,"/channel/").concat(this.props.match.params.channelName,"/create")},y.default.createElement(u.default,{type:"success"},"\u53d1\u8868\u6587\u7ae0")))),y.default.createElement(c.default,null),y.default.createElement(P.default,{showHeader:!1,data:this.state.articleList,renderItem:this.renderItem}),y.default.createElement(c.default,null),y.default.createElement(l.default,{current:Number(e),total:this.state.total,pageSize:this.state.numPerPage,onChange:this.onPageChange}))))}}]),t}(y.Component),j=function(e){return{channelList:e.navs.channels}},I=(0,x.connect)(j)(L);t.default=I}}]);