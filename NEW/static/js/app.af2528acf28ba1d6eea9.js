webpackJsonp([3],{"+ZY1":function(e,t){},"+g8z":function(e,t){},"2woq":function(e,t){},"7B+g":function(e,t,n){"use strict";var o=n("mvHQ"),i=n.n(o),r=n("mtWM"),a=n.n(r),s=n("zL8q"),u=(n.n(s),n("YaEn")),l=n("IcnI");a.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";var c=a.a.create({baseURL:"/api",timeout:3e4,paramsSerializer:function(e){return function(e){var t=[];for(var n in e){var o=e[n];null!==o&&void 0!==o&&(Array.isArray(o)&&(o=i()(o)),t.push(encodeURIComponent(n)+"="+encodeURIComponent(o)))}return t.join("&")}(e)}}),m=!1;c.interceptors.response.use(function(e){var t=e.data;return-1!=t.ret||m||(m=!0,Object(s.MessageBox)({title:"提示",message:"登录信息过期",confirmButtonText:"确定",callback:function(e){l.a.dispatch("user/remove_login_info").then(function(){m=!1,u.a.push("/login")})}})),t}),t.a=c},IcnI:function(e,t,n){"use strict";var o=n("7+uW"),i=n("NYxO"),r=n("424j"),a=n("//Fk"),s=n.n(a),u=n("lbHh"),l=n.n(u),c=n("7B+g"),m={namespaced:!0,state:{token:0,advertiser:"",advertiser_name:"",site_type:[],role:"",username:""},getters:{isLogin:function(e){return 1==e.token}},mutations:{UPDATE_TOKEN:function(e,t){e.token=t},UPDATE_ADVERTISER:function(e,t){e.advertiser=t},UPDATE_ADVERTISER_NAME:function(e,t){e.advertiser_name=t},UPDATE_SITE_TYPE:function(e,t){e.site_type=t},UPDATE_ROLE:function(e,t){e.role=t},UPDATE_USERNAME:function(e,t){e.username=t}},actions:{login:function(e,t){var n=e.commit;return new s.a(function(e,o){c.a.post("/user/login",t).then(function(t){if(0==t.ret){var i=t.data;n("UPDATE_TOKEN",1),n("UPDATE_ADVERTISER",i.advertiser),n("UPDATE_ADVERTISER_NAME",i.advertiser_name),n("UPDATE_SITE_TYPE",i.site_type),n("UPDATE_ROLE",i.role),n("UPDATE_USERNAME",i.username),e()}else o(new Error(t.msg))}).catch(function(e){o(e)})})},logout:function(e,t){e.commit;var n=e.dispatch;return new s.a(function(e,t){c.a.get("/user/logout").then(function(t){n("remove_login_info"),e()}).catch(function(e){t(e)})})},remove_login_info:function(e){var t=e.commit;return t("UPDATE_TOKEN",0),t("UPDATE_ADVERTISER",""),t("UPDATE_ADVERTISER_NAME",""),t("UPDATE_SITE_TYPE",[]),t("UPDATE_ROLE",""),t("UPDATE_USERNAME",""),l.a.remove("PHPSESSID"),s.a.resolve()}}};o.default.use(i.a);var d={user:m};t.a=new i.a.Store({state:{},getters:{},mutations:{},actions:{},modules:d,plugins:[Object(r.a)()],strict:!1})},LLo9:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("j1ja");var o=n("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},i,!1,function(e){n("zotr")},null,null).exports,a=n("YaEn"),s=n("IcnI"),u=n("9JMe"),l=n("zL8q"),c=n.n(l),m=n("Av6n"),d=(n("tvR6"),n("oPmM")),f=n.n(d),g=(n("+g8z"),function(e){l.MessageBox.alert('<img src="'+e+'" style="max-width:90vw;max-height:85vh;"/>',{dangerouslyUseHTMLString:!0,showConfirmButton:!1,closeOnClickModal:!0,showClose:!0,center:!0,customClass:"el-message-preview-box",callback:function(){console.log("")}})}),p=function e(t){if(/(iP)/g.test(navigator.userAgent))return alert("Your device does not support files downloading. Please try again in desktop browser."),!1;if(e.isChrome||e.isSafari){var n=document.createElement("a");if(n.href=t,void 0!==n.download){var o=t.substring(t.lastIndexOf("/")+1,t.length);n.download=o}if(document.createEvent){var i=document.createEvent("MouseEvents");return i.initEvent("click",!0,!0),n.dispatchEvent(i),!0}}return-1===t.indexOf("?")&&(t+="?download"),window.open(t,"_self"),!0};p.isChrome=navigator.userAgent.toLowerCase().indexOf("chrome")>-1,p.isSafari=navigator.userAgent.toLowerCase().indexOf("safari")>-1;var h=function(e,t,n,o,i){e=e||0,t=isNaN(t=Math.abs(t))?2:t,n=void 0!==n?n:"¥",o=o||",",i=i||".";var r=e<0?"-":"",a=parseInt(e=Math.abs(+e||0).toFixed(t),10)+"",s=(s=a.length)>3?s%3:0;return n+r+(s?a.substr(0,s)+o:"")+a.substr(s).replace(/(\d{3})(?=\d)/g,"$1"+o)+(t?i+Math.abs(e-a).toFixed(t).slice(2):"")},v=function(e,t){var n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var o in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("("+o+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?n[o]:("00"+n[o]).substr((""+n[o]).length)));return t},E=function(e){return"https://libbgit.github.io/person"+e};o.default.use(m.a),o.default.use(c.a),o.default.use(f.a),o.default.use(function(e,t){e.myGlobalMethod=function(){},e.directive("my-directive",{bind:function(e,t,n,o){}}),e.mixin({created:function(){}}),e.previewImage=e.prototype.$previewImage=g,e.downloadFile=e.prototype.$downloadFile=p,e.formatMoney=e.prototype.$formatMoney=h,e.formatDate=e.prototype.$formatDate=v,e.getUrl=e.prototype.$getUrl=E}),Object(u.sync)(s.a,a.a),o.default.host=o.default.prototype.$host="/",new o.default({el:"#app",router:a.a,store:s.a,watch:{$route:{handler:function(e){var t=e.meta&&e.meta.title||"";document.title="这是一个神奇的网站- "+t},immediate:!0}},components:{App:r},template:"<App/>"})},QQqn:function(e,t){},T91P:function(e,t){},VmBW:function(e,t){},WrgM:function(e,t){},YaEn:function(e,t,n){"use strict";var o=n("7+uW"),i=n("/ocq"),r=n("zL8q"),a=n.n(r),s=n("IcnI"),u=n("Dd8w"),l=n.n(u),c=n("NYxO"),m={name:"Login",data:function(){return{loading:!1,loginBtnText:"登录",loginForm:{username:"",password:"",vcode:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"change"},{min:4,max:25,message:"长度在 4 到 25 个字符",trigger:"change"}],password:[{required:!0,message:"请输入密码",trigger:"change"},{min:6,max:25,message:"长度在 6 到 25 个字符",trigger:"change"}],vcode:[{required:!0,message:"请输入验证码",trigger:"change"},{min:4,max:4,message:"长度为 4 个字符",trigger:"change"}]}}},mounted:function(){this.resetForm()},methods:l()({},Object(c.b)("user",["login"]),Object(c.c)("user",["UPDATE_TOKEN"]),{onSubmit:function(){var e=this;this.$refs.loginForm.validate(function(t){if(!t)return!1;e.triggerLogin()})},triggerLogin:function(){this.triggerLoading(!0),"admin"==this.loginForm.username&&"31415926"==this.loginForm.password?(this.UPDATE_TOKEN(1),this.$router.push({path:"/home"})):(this.triggerLoading(!1),this.$message({type:"error",message:"用户名或者密码输入错误"}))},triggerLoading:function(e){this.loading=e,this.loginBtnText=e?"正在登录":"登录"},resetForm:function(){this.loginForm={username:"",password:"",vcode:""}}})},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-wrap"},[n("div",{staticClass:"center"},[n("div",{staticClass:"form login"},[n("el-form",{ref:"loginForm",staticClass:"fix-ie",attrs:{model:e.loginForm,rules:e.rules,"label-width":"0px"}},[n("el-form-item",{attrs:{prop:"username"}},[n("el-input",{attrs:{autoComplete:"on",autofocus:!0,placeholder:"请输入用户名"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}},[n("i",{staticClass:"iconfont user",staticStyle:{"font-size":"16px"},attrs:{slot:"prefix"},slot:"prefix"})])],1),e._v(" "),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{attrs:{type:"password",autoComplete:"on",placeholder:"请输入密码"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}},[n("i",{staticClass:"iconfont lock-o",staticStyle:{"font-size":"16px"},attrs:{slot:"prefix"},slot:"prefix"})])],1),e._v(" "),n("el-form-item",[n("el-button",{staticClass:"login-btn",attrs:{type:"primary",loading:e.loading},on:{click:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.onSubmit(t):null}}},[e._v("\n                        "+e._s(e.loginBtnText)+"\n                    ")])],1)],1)],1)]),e._v(" "),n("div",{staticClass:"footer"})])},staticRenderFns:[]};var f=[{path:"/login",name:"Login",component:n("VU/8")(m,d,!1,function(e){n("VmBW")},"data-v-d8d82dda",null).exports,meta:{title:"用户登录"}},{path:"/logout",beforeEnter:function(e,t,n){}}],g=(n("M4fF"),n("7B+g"),{render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"page-header"},[n("el-carousel",{staticClass:"header-carousel",attrs:{interval:4e3,type:"card"}},e._l(e.newValue,function(t,o){return n("el-carousel-item",{key:o},[n("img",{staticClass:"image",attrs:{src:e.$getUrl(t.url)}})])}))],1)},staticRenderFns:[]});var p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-4-1",router:!0,"unique-opened":!0}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("strong",{attrs:{slot:"title"},slot:"title"},[e._v("前端技术")])]),e._v(" "),n("el-menu-item-group",{attrs:{title:"我的博客"}},[n("el-menu-item",{attrs:{index:"/home/scss-tutorial"}},[e._v("SCSS简易教程")]),e._v(" "),n("el-menu-item",{attrs:{index:"/home/deep-copy"}},[e._v("JS浅拷贝和深拷贝")]),e._v(" "),n("el-menu-item",{attrs:{index:"/home/flex"}},[e._v("flex布局")]),e._v(" "),n("el-menu-item",{attrs:{index:"/home/css-layout"}},[e._v("CSS布局方案")])],1),e._v(" "),n("el-menu-item-group",{attrs:{title:"Vue体系知识"}},[n("el-menu-item",{attrs:{index:"/home/blog-vue-issue"}},[e._v("vue常见问题及解决")]),e._v(" "),n("el-menu-item",{attrs:{index:"/home/entire-vue-component"}},[e._v("完整的vue组件格式")]),e._v(" "),n("el-menu-item",{attrs:{index:"/home/vue-form-demo"}},[e._v("Vue表单实例")])],1),e._v(" "),n("el-submenu",{attrs:{index:"1-4"}},[n("span",{attrs:{slot:"title"},slot:"title"},[e._v("选项4")]),e._v(" "),n("el-menu-item",{attrs:{index:"/home/mind-map"}},[e._v("前端脑图")])],1)],2),e._v(" "),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("strong",{attrs:{slot:"title"},slot:"title"},[e._v("书法")])]),e._v(" "),n("el-menu-item-group",{attrs:{title:"教程和碑帖"}},[n("el-menu-item",{attrs:{index:"2-3"}},[e._v("发发")])],1),e._v(" "),n("el-menu-item-group",{attrs:{title:"作品展示"}},[n("el-menu-item",{attrs:{index:"/home/jiuchenggong"}},[e._v("九成宫醴泉铭")])],1)],2),e._v(" "),n("el-menu-item",{attrs:{index:"3",disabled:""}},[n("span",{attrs:{slot:"title"},slot:"title"},[e._v("导航三")])]),e._v(" "),n("el-menu-item",{attrs:{index:"4"}},[n("span",{attrs:{slot:"title"},slot:"title"},[e._v("导航四")])])],1)},staticRenderFns:[]};var h={name:"home",data:function(){return{message:""}},computed:{},watch:{},methods:{},created:function(){},mounted:function(){},components:{layoutHeader:n("VU/8")({name:"LayoutHeader",data:function(){return{newValue:[{url:"/static/local-image/header-new/海纳百川.jpg"},{url:"/static/local-image/header-new/九成宫醴泉铭01.jpg"},{url:"/static/local-image/header-new/test01.jpg"},{url:"/static/local-image/header-new/test02.jpg"}]}},computed:{},watch:{},methods:{},created:function(){},mounted:function(){},components:{}},g,!1,function(e){n("o+ll"),n("2woq")},"data-v-95c224a8",null).exports,layoutAside:n("VU/8")({name:"LayoutAside",data:function(){return{isNeedLogin:!1}},computed:{},watch:{},methods:{},created:function(){},mounted:function(){},components:{}},p,!1,function(e){n("T91P"),n("WrgM")},"data-v-30790df4",null).exports}},v={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-container",[t("el-header",{staticStyle:{height:"auto",padding:"0"}},[t("layout-header")],1),this._v(" "),t("el-container",[t("el-aside",{staticClass:"left-aside"},[t("layout-aside")],1),this._v(" "),t("el-container",[t("el-main",[t("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var E={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"tips"},[e._v("\n        此页面需要登录后才能查看，马上去\n        "),n("el-button",{attrs:{type:"text"},nativeOn:{click:function(t){return e.goLogin(t)}}},[e._v("登录")])],1)])},staticRenderFns:[]};var _=function(){return s.a.getters["user/isLogin"]},x=[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:n("VU/8")(h,v,!1,function(e){n("QQqn"),n("iEsr")},"data-v-6a066612",null).exports,meta:{title:"用户主页"},children:[{path:"need-login",name:"NEED-LOGIN",component:n("VU/8")({name:"need-login",data:function(){return{message:""}},computed:{},watch:{},methods:{goLogin:function(){this.$router.push({path:"/login"})}},created:function(){},mounted:function(){},components:{}},E,!1,function(e){n("+ZY1"),n("LLo9")},"data-v-05cb6d34",null).exports,meta:{title:"登录受限"}},{path:"mind-map",name:"MIND-MAP",component:function(){return n.e(0).then(n.bind(null,"4YRr"))},meta:{title:"前端脑图"},beforeEnter:function(e,t,n){_()?n():n("/home/need-login")}},{path:"deep-copy",name:"DEEP-COPY",component:function(){return n.e(0).then(n.bind(null,"gqQL"))},meta:{title:"浅拷贝和深拷贝"},beforeEnter:function(e,t,n){_()?n():n("/home/need-login")}},{path:"scss-tutorial",name:"SCSS-TUTORIAL",component:function(){return n.e(0).then(n.bind(null,"qCHE"))},meta:{title:"Scss简易教程"},beforeEnter:function(e,t,n){_()?n():n("/home/need-login")}},{path:"flex",name:"Flex",component:function(){return n.e(0).then(n.bind(null,"AKQm"))},meta:{title:"flex布局"}},{path:"css-layout",name:"CssLayout",component:function(){return n.e(0).then(n.bind(null,"Z+PZ"))},meta:{title:"css布局方案"}},{path:"blog-vue-issue",name:"BLOG-VUE-ISSUE",component:function(){return n.e(0).then(n.bind(null,"PJez"))},meta:{title:"vue常见问题"},beforeEnter:function(e,t,n){_()?n():n("/home/need-login")}},{path:"entire-vue-component",name:"ENTIRE-VUE-COMPONENT",component:function(){return n.e(0).then(n.bind(null,"DyTT"))},meta:{title:"vue单文件组件"},beforeEnter:function(e,t,n){_()?n():n("/home/need-login")}},{path:"vue-form-demo",name:"VUE-FORM-DEMO",component:function(){return n.e(0).then(n.bind(null,"5s+U"))},meta:{title:"vue表单"},beforeEnter:function(e,t,n){_()?n():n("/home/need-login")}},{path:"jiuchenggong",name:"jiuchenggong",meta:{title:"书法之九成宫醴泉铭"},component:function(){return n.e(1).then(n.bind(null,"6+sA"))}}]}];o.default.use(i.a);var b=[].concat(f,x),w=new i.a({routes:b}),T=["/login","/404","/test"],A=[];w.beforeEach(function(e,t,n){if(A.indexOf(e.path)>=0)return n(!1),void a.a.Message.info("敬请期待");T.indexOf(e.path),n()});t.a=w},iEsr:function(e,t){},"o+ll":function(e,t){},oPmM:function(e,t){},tvR6:function(e,t){},zotr:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.af2528acf28ba1d6eea9.js.map