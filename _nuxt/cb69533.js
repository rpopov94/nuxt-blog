(window.webpackJsonp=window.webpackJsonp||[]).push([[14,2,8],{953:function(t,e,r){var content=r(958);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(93).default)("11ec3bc4",content,!0,{sourceMap:!1})},957:function(t,e,r){"use strict";r(953)},958:function(t,e,r){var n=r(92)((function(i){return i[1]}));n.push([t.i,".list-group-item[data-v-dc40bb2c]{font-size:14px;-webkit-text-decoration:none;text-decoration:none}",""]),n.locals={},t.exports=n},967:function(t,e,r){"use strict";r.r(e);var n={name:"Welcome"},c=r(69),component=Object(c.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"mx-auto max-w-6xl p-3 text-center order-md-1"},[t("div",{staticClass:"card border-0"},[t("div",{staticClass:"card-body",staticStyle:{"font-size":"24px"}},[this._v("\n      Hi! I'm a Python developer with a passion for creating innovative\n      solutions. I have 5 years of experience in the technology industry,\n      which has allowed me to develop a deep understanding of technological\n      systems and successfully implement tasks related to automating\n      production processes. In addition, I am interested in reading scientific\n      articles and traveling.\n    ")])])])}],!1,null,"50a10833",null);e.default=component.exports},969:function(t,e,r){"use strict";r.r(e);r(957);var n=r(69),component=Object(n.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mb-5"},[e("div",{staticClass:"card border-0"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"d-flex justify-content-around"},[e("div",{staticClass:"text-center"},[e("a",{attrs:{href:"mailto:i@romanpopoff.ru"}},[e("img",{attrs:{src:"/icons/mail.svg",alt:"e-mail"}})])]),t._v(" "),e("div",{staticClass:"text-center"},[e("a",{attrs:{href:"http://t.me/rpopov94"}},[e("img",{attrs:{src:"/icons/tg.svg",alt:"tg"}})])]),t._v(" "),e("div",{staticClass:"text-center"},[e("a",{attrs:{href:"https://wa.me/79102723716"}},[e("img",{attrs:{src:"/icons/whatsapp.svg",alt:"whatsapp"}})])]),t._v(" "),e("div",{staticClass:"text-center"},[e("a",{attrs:{href:"http://github.com/rpopov94"}},[e("img",{attrs:{src:"/icons/git.svg",alt:"git"}})])])])])])])}],!1,null,"dc40bb2c",null);e.default=component.exports},989:function(t,e,r){"use strict";r.r(e);var n=r(24),c=(r(82),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,e.next=3,r.dispatch("projects/fetchProjects");case 3:case"end":return e.stop()}}),e)})))()},computed:{projects:function(){return this.$store.state.projects.projects}}}),o=r(69),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-5"},[e("b-row",[e("b-col",{attrs:{md:"6"}},[e("div",{staticClass:"text-center"},[e("img",{staticClass:"img-fluid",staticStyle:{width:"500px"},attrs:{src:"images/avatar.jpg"}})]),t._v(" "),e("contacts")],1),t._v(" "),e("b-col",{attrs:{md:"6"}},[e("welcome")],1)],1),t._v(" "),t._m(0),t._v(" "),e("hr"),t._v(" "),e("b-row",t._l(t.projects,(function(r,n){return e("b-col",{key:n,attrs:{md:"4"}},[e("div",{staticClass:"mb-2"},[e("b-card",{staticClass:"h-100",staticStyle:{"min-height":"200px","max-width":"400px"},attrs:{title:r.layout,"img-src":"images/"+r.image,"img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-text",[t._v("\n            "+t._s(r.abstract)+"\n          ")]),t._v(" "),e("b-button",{attrs:{href:r.path,variant:"primary"}},[t._v("\n            Follow\n          ")])],1)],1)])})),1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center"},[t("h3",[this._v("List my projects")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Contacts:r(969).default,Welcome:r(967).default})}}]);