(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{361:function(t,e,n){var content=n(555);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(93).default)("5d843dff",content,!0,{sourceMap:!1})},362:function(t,e,n){var content=n(557);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(93).default)("1ee7aeb8",content,!0,{sourceMap:!1})},452:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=452},488:function(t,e,n){"use strict";var r={layout:function(t){var e=t.redirect;return"/abc"===t.route.path&&e(301,"/contact"),"default"}},o=n(69),component=Object(o.a)(r,(function(){return(0,this._self._c)("div",{staticClass:"py-8 px-4 text-center text-red-400"},[this._v("\n  This page does not exist.\n")])}),[],!1,null,"5b22ecef",null);e.a=component.exports},489:function(t,e,n){"use strict";n(554);var r=n(69),component=Object(r.a)({},(function(){var t=this._self._c;return t("div",[t("Navbar"),this._v(" "),t("b-container",[t("nuxt")],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Navbar:n(951).default})},496:function(t,e,n){n(497),t.exports=n(498)},533:function(t,e,n){"use strict";n.r(e),e.default=function(t){var e=t.route,n=t.redirect;e.matched.length||n("/404")}},554:function(t,e,n){"use strict";n(361)},555:function(t,e,n){var r=n(92)((function(i){return i[1]}));r.push([t.i,".p-4{padding:.5rem!important}.title{color:#000}.title,.title:hover{font-size:20px;font-weight:700;-webkit-text-decoration:none;text-decoration:none}.title:hover{color:red}",""]),r.locals={},t.exports=r},556:function(t,e,n){"use strict";n(362)},557:function(t,e,n){var r=n(92)((function(i){return i[1]}));r.push([t.i,".temp[data-v-79fef920]{font-size:24px}",""]),r.locals={},t.exports=r},558:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return c})),n.d(e,"mutations",(function(){return f})),n.d(e,"actions",(function(){return l}));var r=n(24),o=(n(82),n(128)),c=function(){return{article:null,articles:[]}},f={setArticle:function(t,article){t.article=article},SET_ARTICLES:function(t,e){t.articles=e}},l={fetchArticle:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function n(){var r,article;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.commit,n.next=3,Object(o.$content)("articles").where({slug:e}).only(["layout","image","abstract","tags","body","createdAt","updatedAt"]).fetch();case 3:article=n.sent,r("setArticle",article||null);case 5:case"end":return n.stop()}}),n)})))()},fetchArticles:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,Object(o.$content)("articles").only(["layout","title","comments","permalink","github","image","path","date","slug","content","abstract"]).sortBy("date","desc").fetch();case 3:r=e.sent,n("SET_ARTICLES",r);case 5:case"end":return e.stop()}}),e)})))()}}},564:function(t,e){},566:function(t,e){},579:function(t,e){},581:function(t,e){},609:function(t,e){},610:function(t,e){},615:function(t,e){},617:function(t,e){},624:function(t,e){},643:function(t,e){},679:function(t,e){},751:function(t,e){},905:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=905},906:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return c})),n.d(e,"mutations",(function(){return f})),n.d(e,"actions",(function(){return l}));var r=n(24),o=(n(82),n(128)),c=function(){return{project:null,projects:[]}},f={SET_PROJECT:function(t,e){t.project=e},SET_PROJECTS:function(t,e){t.projects=e}},l={fetchProject:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.commit,n.next=3,Object(o.$content)("projects").where({slug:e}).only(["layout","image","abstract","tags","body","createdAt","updatedAt"]).fetch();case 3:c=n.sent,r("SET_PROJECT",c||null);case 5:case"end":return n.stop()}}),n)})))()},fetchProjects:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,Object(o.$content)("projects").only(["layout","title","image","path","date","abstract","link"]).sortBy("date","desc").fetch();case 3:r=e.sent,n("SET_PROJECTS",r);case 5:case"end":return e.stop()}}),e)})))()}}},907:function(t,e){},951:function(t,e,n){"use strict";n.r(e);var r={name:"Navbar"},o=(n(556),n(69)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center temp"},[e("b-navbar",{attrs:{toggleable:"sm",type:"dark",variant:"info"}},[e("b-navbar-brand",{attrs:{href:"/"}},[t._v("\n      Popov Roman\n    ")]),t._v(" "),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-nav-item",{attrs:{href:"/articles"}},[t._v("\n          Articles\n        ")]),t._v(" "),e("b-nav-item",{attrs:{href:"/resume.pdf"}},[t._v("\n          Resume\n        ")])],1)],1)],1)],1)}),[],!1,null,"79fef920",null);e.default=component.exports}},[[496,17,1,18]]]);