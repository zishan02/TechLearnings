var u=Object.defineProperty,m=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var i=(t,e,n)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,r=(t,e)=>{for(var n in e||(e={}))_.call(e,n)&&i(t,n,e[n]);if(o)for(var n of o(e))d.call(e,n)&&i(t,n,e[n]);return t},s=(t,e)=>m(t,h(e));import{a as f,d as g}from"./index.24bc83f1.js";import{A as v,T as b}from"./TitleDescription.7a667b19.js";import{C as A}from"./Card.af43a02b.js";import{C as y}from"./Tabs.8b88fa19.js";import{n as T}from"./vueComponentNormalizer.87056a83.js";import"./default-i18n.abde8d59.js";import"./isArrayLikeObject.26ec157b.js";import"./ToolsSettings.c7becacb.js";import"./helpers.55800a79.js";import"./index.6be33911.js";import"./client.94d919c5.js";import"./_commonjsHelpers.f40d732e.js";import"./constants.50303a5f.js";import"./cleanForSlug.d874125b.js";import"./Modal.f47c8aa2.js";import"./JsonValues.08065e69.js";import"./MaxCounts.5a7ca2fd.js";import"./RadioToggle.98e1e7ec.js";import"./RobotsMeta.e1063949.js";import"./Checkbox.5873a8d2.js";import"./Checkmark.e7547654.js";import"./Row.13b6f3f1.js";import"./SettingsRow.eb71f07b.js";import"./Index.6b49ef32.js";import"./GoogleSearchPreview.ef6c485b.js";import"./HtmlTagsEditor.eb54485e.js";import"./Editor.5ff17c83.js";import"./UnfilteredHtml.9781b78c.js";import"./Tooltip.3ec20ff5.js";import"./QuestionMark.83ebd18e.js";import"./Slide.f5d21606.js";import"./TruSeoScore.98a47fd6.js";import"./Information.f4b75b56.js";var x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"aioseo-search-appearance-archives"},t._l(t.getArchives,function(a,p){return n("core-card",{key:p,attrs:{slug:a.name+"Archives"},scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"icon dashicons",class:""+(a.icon||"dashicons-admin-post")}),n("div",[t._v(" "+t._s(a.label)+" ")])]},proxy:!0},{key:"tabs",fn:function(){return[n("core-main-tabs",{attrs:{tabs:t.tabs,showSaveButton:!1,active:t.settings.internalTabs[a.name+"Archives"],internal:""},on:{changed:function(l){return t.processChangeTab(a.name,l)}}})]},proxy:!0}],null,!0)},[n("transition",{attrs:{name:"route-fade",mode:"out-in"}},[n(t.settings.internalTabs[a.name+"Archives"],{tag:"component",attrs:{object:a,separator:t.options.searchAppearance.global.separator,options:t.getOptions(a),type:"archives","show-bulk":!1,"no-meta-box":"","include-keywords":""}})],1)],1)}),1)},C=[];const D={components:{Advanced:v,CoreCard:A,CoreMainTabs:y,TitleDescription:b},data(){return{internalDebounce:null,tabs:[{slug:"title-description",name:this.$t.__("Title & Description",this.$td),access:"aioseo_search_appearance_settings",pro:!1},{slug:"advanced",name:this.$t.__("Advanced",this.$td),access:"aioseo_search_appearance_settings",pro:!1}],archives:[{label:"Author Archives",name:"author",singular:"Author",icon:"dashicons-admin-users"},{label:"Date Archives",name:"date",singular:"Date",icon:"dashicons-calendar-alt"},{label:"Search Page",name:"search",singular:"Search Page",icon:"dashicons-search"}]}},computed:s(r({},f(["options","dynamicOptions","settings"])),{getArchives(){return this.archives.concat(this.$aioseo.postData.archives.map(t=>({label:`${t.label} Archives`,name:`${t.name}Archive`,icon:"dashicons-category",singular:t.singular,dynamic:!0})))}}),methods:s(r({},g(["changeTab"])),{processChangeTab(t,e){this.internalDebounce||(this.internalDebounce=!0,this.changeTab({slug:`${t}Archives`,value:e}),setTimeout(()=>{this.internalDebounce=!1},50))},getOptions(t){return t.dynamic?this.dynamicOptions.searchAppearance.archives[t.name.replace("Archive","")]:this.options.searchAppearance.archives[t.name]}})},c={};var $=T(D,x,C,!1,S,null,null,null);function S(t){for(let e in c)this[e]=c[e]}var ct=function(){return $.exports}();export{ct as default};
