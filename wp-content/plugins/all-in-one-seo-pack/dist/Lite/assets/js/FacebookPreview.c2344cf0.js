import{d as o}from"./dannie-profile.41545edf.js";import{B as n}from"./Img.bd7f4b00.js";import{C as r}from"./index.6be33911.js";import{n as c}from"./vueComponentNormalizer.87056a83.js";var l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"aioseo-facebook-preview"},[e("div",{staticClass:"facebook-post"},[e("div",{staticClass:"facebook-header"},[e("div",{staticClass:"profile-photo"},[e("img",{attrs:{alt:"Facebook Preview Image",src:t.$getImgUrl(t.dannieProfileImg)}})]),e("div",{staticClass:"poster"},[e("div",{staticClass:"poster-name"},[t._v(" "+t._s(t.appName)+" ")]),e("div",{staticClass:"poster-date"},[t._v(" "+t._s(t.date)+" ")])]),t._m(0)]),e("div",{staticClass:"facebook-content",class:{vertical:t.images[t.image]&&t.images[t.image].vertical}},[e("base-img",{attrs:{debounce:!1,src:t.image},on:{images:function(i){return t.images=i}}}),t.loading?e("div",{staticClass:"loader"},[e("core-loader")],1):t._e(),e("div",{staticClass:"facebook-site-description"},[e("div",{staticClass:"site-domain"},[t._t("site-url",function(){return[t._v(" "+t._s(t.$aioseo.urls.domain)+" ")]})],2),e("div",{staticClass:"site-title"},[t._t("site-title")],2),e("div",{staticClass:"site-description"},[t._t("site-description")],2)])],1),e("div",{staticClass:"facebook-footer"})])])},u=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"ellipsis"},[e("div"),e("div"),e("div")])}];const _={components:{BaseImg:n,CoreLoader:r},props:{image:String,loading:{type:Boolean,default(){return!1}}},data(){return{dannieProfileImg:o,images:{}}},computed:{appName(){return"All in One SEO"},date(){const t=new Date;return t.toLocaleString("default",{month:"long"})+" "+t.getDay()}}},s={};var d=c(_,l,u,!1,m,null,null,null);function m(t){for(let a in s)this[a]=s[a]}var C=function(){return d.exports}();export{C};
