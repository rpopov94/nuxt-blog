(window.webpackJsonp=window.webpackJsonp||[]).push([[13,7],{971:function(t,e,n){"use strict";n.r(e);var r={name:"Welcome"},c=n(60),component=Object(c.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"mx-auto max-w-6xl p-3 text-center"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-body",staticStyle:{"font-size":"20px"}},[this._v("\n      Hi! I'm a Python developer with a passion for creating innovative\n      solutions. I have 5 years of experience in the technology industry,\n      which has allowed me to develop a deep understanding of technological\n      systems and successfully implement tasks related to automating\n      production processes. In addition, I am interested in reading scientific\n      articles and traveling.\n    ")])])])}],!1,null,"0ddb23e6",null);e.default=component.exports},993:function(t,e,n){"use strict";n.r(e);var r=n(24),c=(n(82),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,e.next=3,n.dispatch("articles/fetchArticles");case 3:case"end":return e.stop()}}),e)})))()},computed:{articles:function(){return this.$store.state.articles.articles}}}),l=n(60),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-5"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("welcome"),t._v(" "),t._m(2),t._v(" "),e("hr"),t._v(" "),e("b-row",t._l(t.articles,(function(article,n){return e("b-col",{key:n,attrs:{md:"4"}},[e("div",{staticClass:"mb-2"},[e("b-card",{staticClass:"h-100",staticStyle:{"min-height":"200px","max-width":"400px"},attrs:{title:article.layout,"img-src":"images/"+article.image,"img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-text",[t._v("\n            "+t._s(article.abstract)+"\n          ")]),t._v(" "),e("b-button",{attrs:{href:article.path,variant:"primary"}},[t._v("\n            Follow\n          ")])],1)],1)])})),1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center"},[t("h1",[this._v("Hi! I'm Popov Roman")])])},function(){var t=this._self._c;return t("div",{staticClass:"text-center"},[t("img",{staticClass:"img-fluid",staticStyle:{width:"500px"},attrs:{src:"images/avatar.jpg"}})])},function(){var t=this._self._c;return t("div",{staticClass:"text-center"},[t("h3",[this._v("List my projects")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Welcome:n(971).default})}}]);