webpackJsonp([1],{"7zck":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",{attrs:{id:"app"}},[e("v-content",[e("v-container",{attrs:{fluid:""}},[e("router-view")],1)],1)],1)},staticRenderFns:[]};var c=n("VU/8")({name:"App"},s,!1,function(t){n("p8be")},null,null).exports,r=n("/ocq"),o=n("mtWM"),i=n.n(o).a.create({baseURL:"https://distimegps.herokuapp.com"});i.interceptors.response.use(function(t){return console.log("Response Interceptor",t),t});var u=i,l={name:"welcome",created:function(){this.getStatus(),this.timer=setInterval(this.getStatus,12e4)},data:function(){return{msg:"Bienvenue sur Distime!",headers:[{text:"Numéro de batch",value:"batchName",align:"center",sortable:!0},{text:"Status",value:"status",align:"center",sortable:!0},{text:"Action",value:"action",align:"center"}],batchs:[],id:"",timer:""}},methods:{getStatus:function(){var t=this;u.get("/").then(function(e){return console.log("calling backend"),t.batchs=e.data.data}).then(function(e){return t.batchs=e.map(function(t){return"to be launched"===t.status||"ToDo"===t.status?(t.action="Lancer",t.show=!0,t.class="otherstatus"):"Done"===t.status?(t.show=!1,t.class="otherstatus"):"InProcess"===t.status&&(t.show=!1,t.class="statusinprocess"),t})}).catch(function(t){return alert("probleme:"+t),t})},launchBatch:function(t){var e=this,n=t.batchName;u.get("/"+n).then(function(t){console.log(t),e.getStatus()})},cancelAutoUpdate:function(){clearInterval(this.timer)}},beforeDestroy:function(){clearInterval(this.timer)}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("v-data-table",{attrs:{headers:t.headers,items:t.batchs},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",[t._v(t._s(e.item.batchName))]),t._v(" "),n("td",[n("p",{class:e.item.class},[t._v(t._s(e.item.status))])]),t._v(" "),n("td",[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.item.show,expression:"row.item.show"}],on:{click:function(n){t.launchBatch(e.item)}}},[t._v(t._s(e.item.action))])],1)]}}])})],1)},staticRenderFns:[]};var p=n("VU/8")(l,h,!1,function(t){n("q8y8")},"data-v-1c44f65c",null).exports;a.default.use(r.a);var m=new r.a({routes:[{path:"/",name:"welcome",component:p}]}),d=n("3EgV"),f=n.n(d);n("7zck"),n("gJtD");a.default.config.productionTip=!1,a.default.use(f.a),new a.default({el:"#app",router:m,components:{App:c},template:"<App/>"})},gJtD:function(t,e){},p8be:function(t,e){},q8y8:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.fa5e01da3dd2d40853dc.js.map