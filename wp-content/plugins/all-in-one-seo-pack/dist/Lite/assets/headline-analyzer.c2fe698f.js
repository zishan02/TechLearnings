var Je=Object.defineProperty,Ke=Object.defineProperties;var Qe=Object.getOwnPropertyDescriptors;var te=Object.getOwnPropertySymbols;var Xe=Object.prototype.hasOwnProperty,en=Object.prototype.propertyIsEnumerable;var re=(e,n,r)=>n in e?Je(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,C=(e,n)=>{for(var r in n||(n={}))Xe.call(n,r)&&re(e,r,n[r]);if(te)for(var r of te(n))en.call(n,r)&&re(e,r,n[r]);return e},oe=(e,n)=>Ke(e,Qe(n));import{s as nn}from"./js/client.94d919c5.js";import"./js/_commonjsHelpers.f40d732e.js";var I={exports:{}},W={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var le=Object.getOwnPropertySymbols,an=Object.prototype.hasOwnProperty,tn=Object.prototype.propertyIsEnumerable;function rn(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function on(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var n={},r=0;r<10;r++)n["_"+String.fromCharCode(r)]=r;var o=Object.getOwnPropertyNames(n).map(function(l){return n[l]});if(o.join("")!=="0123456789")return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach(function(l){t[l]=l}),Object.keys(Object.assign({},t)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var ln=on()?Object.assign:function(e,n){for(var r,o=rn(e),t,l=1;l<arguments.length;l++){r=Object(arguments[l]);for(var i in r)an.call(r,i)&&(o[i]=r[i]);if(le){t=le(r);for(var s=0;s<t.length;s++)tn.call(r,t[s])&&(o[t[s]]=r[t[s]])}}return o},me={exports:{}},u={};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q=ln,F=60103,ye=60106;u.Fragment=60107;u.StrictMode=60108;u.Profiler=60114;var pe=60109,ge=60110,ve=60112;u.Suspense=60113;var be=60115,Ce=60116;if(typeof Symbol=="function"&&Symbol.for){var b=Symbol.for;F=b("react.element"),ye=b("react.portal"),u.Fragment=b("react.fragment"),u.StrictMode=b("react.strict_mode"),u.Profiler=b("react.profiler"),pe=b("react.provider"),ge=b("react.context"),ve=b("react.forward_ref"),u.Suspense=b("react.suspense"),be=b("react.memo"),Ce=b("react.lazy")}var se=typeof Symbol=="function"&&Symbol.iterator;function sn(e){return e===null||typeof e!="object"?null:(e=se&&e[se]||e["@@iterator"],typeof e=="function"?e:null)}function L(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _e={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ze={};function T(e,n,r){this.props=e,this.context=n,this.refs=ze,this.updater=r||_e}T.prototype.isReactComponent={};T.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(L(85));this.updater.enqueueSetState(this,e,n,"setState")};T.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Se(){}Se.prototype=T.prototype;function X(e,n,r){this.props=e,this.context=n,this.refs=ze,this.updater=r||_e}var ee=X.prototype=new Se;ee.constructor=X;Q(ee,T.prototype);ee.isPureReactComponent=!0;var ne={current:null},ke=Object.prototype.hasOwnProperty,Pe={key:!0,ref:!0,__self:!0,__source:!0};function Ne(e,n,r){var o,t={},l=null,i=null;if(n!=null)for(o in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(l=""+n.key),n)ke.call(n,o)&&!Pe.hasOwnProperty(o)&&(t[o]=n[o]);var s=arguments.length-2;if(s===1)t.children=r;else if(1<s){for(var c=Array(s),w=0;w<s;w++)c[w]=arguments[w+2];t.children=c}if(e&&e.defaultProps)for(o in s=e.defaultProps,s)t[o]===void 0&&(t[o]=s[o]);return{$$typeof:F,type:e,key:l,ref:i,props:t,_owner:ne.current}}function cn(e,n){return{$$typeof:F,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ae(e){return typeof e=="object"&&e!==null&&e.$$typeof===F}function dn(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return n[r]})}var ie=/\/+/g;function U(e,n){return typeof e=="object"&&e!==null&&e.key!=null?dn(""+e.key):n.toString(36)}function V(e,n,r,o,t){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case F:case ye:i=!0}}if(i)return i=e,t=t(i),e=o===""?"."+U(i,0):o,Array.isArray(t)?(r="",e!=null&&(r=e.replace(ie,"$&/")+"/"),V(t,n,r,"",function(w){return w})):t!=null&&(ae(t)&&(t=cn(t,r+(!t.key||i&&i.key===t.key?"":(""+t.key).replace(ie,"$&/")+"/")+e)),n.push(t)),1;if(i=0,o=o===""?".":o+":",Array.isArray(e))for(var s=0;s<e.length;s++){l=e[s];var c=o+U(l,s);i+=V(l,n,r,c,t)}else if(c=sn(e),typeof c=="function")for(e=c.call(e),s=0;!(l=e.next()).done;)l=l.value,c=o+U(l,s++),i+=V(l,n,r,c,t);else if(l==="object")throw n=""+e,Error(L(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n));return i}function A(e,n,r){if(e==null)return e;var o=[],t=0;return V(e,o,"","",function(l){return n.call(r,l,t++)}),o}function un(e){if(e._status===-1){var n=e._result;n=n(),e._status=0,e._result=n,n.then(function(r){e._status===0&&(r=r.default,e._status=1,e._result=r)},function(r){e._status===0&&(e._status=2,e._result=r)})}if(e._status===1)return e._result;throw e._result}var $e={current:null};function S(){var e=$e.current;if(e===null)throw Error(L(321));return e}var hn={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:ne,IsSomeRendererActing:{current:!1},assign:Q};u.Children={map:A,forEach:function(e,n,r){A(e,function(){n.apply(this,arguments)},r)},count:function(e){var n=0;return A(e,function(){n++}),n},toArray:function(e){return A(e,function(n){return n})||[]},only:function(e){if(!ae(e))throw Error(L(143));return e}};u.Component=T;u.PureComponent=X;u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hn;u.cloneElement=function(e,n,r){if(e==null)throw Error(L(267,e));var o=Q({},e.props),t=e.key,l=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,i=ne.current),n.key!==void 0&&(t=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in n)ke.call(n,c)&&!Pe.hasOwnProperty(c)&&(o[c]=n[c]===void 0&&s!==void 0?s[c]:n[c])}var c=arguments.length-2;if(c===1)o.children=r;else if(1<c){s=Array(c);for(var w=0;w<c;w++)s[w]=arguments[w+2];o.children=s}return{$$typeof:F,type:e.type,key:t,ref:l,props:o,_owner:i}};u.createContext=function(e,n){return n===void 0&&(n=null),e={$$typeof:ge,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:pe,_context:e},e.Consumer=e};u.createElement=Ne;u.createFactory=function(e){var n=Ne.bind(null,e);return n.type=e,n};u.createRef=function(){return{current:null}};u.forwardRef=function(e){return{$$typeof:ve,render:e}};u.isValidElement=ae;u.lazy=function(e){return{$$typeof:Ce,_payload:{_status:-1,_result:e},_init:un}};u.memo=function(e,n){return{$$typeof:be,type:e,compare:n===void 0?null:n}};u.useCallback=function(e,n){return S().useCallback(e,n)};u.useContext=function(e,n){return S().useContext(e,n)};u.useDebugValue=function(){};u.useEffect=function(e,n){return S().useEffect(e,n)};u.useImperativeHandle=function(e,n,r){return S().useImperativeHandle(e,n,r)};u.useLayoutEffect=function(e,n){return S().useLayoutEffect(e,n)};u.useMemo=function(e,n){return S().useMemo(e,n)};u.useReducer=function(e,n,r){return S().useReducer(e,n,r)};u.useRef=function(e){return S().useRef(e)};u.useState=function(e){return S().useState(e)};u.version="17.0.2";me.exports=u;/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fn=me.exports,xe=60103;W.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var ce=Symbol.for;xe=ce("react.element"),W.Fragment=ce("react.fragment")}var wn=fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mn=Object.prototype.hasOwnProperty,yn={key:!0,ref:!0,__self:!0,__source:!0};function He(e,n,r){var o,t={},l=null,i=null;r!==void 0&&(l=""+r),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(i=n.ref);for(o in n)mn.call(n,o)&&!yn.hasOwnProperty(o)&&(t[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps,n)t[o]===void 0&&(t[o]=n[o]);return{$$typeof:xe,type:e,key:l,ref:i,props:t,_owner:wn.current}}W.jsx=He;W.jsxs=He;I.exports=W;const a=I.exports.jsx,d=I.exports.jsxs,K=I.exports.Fragment,g={};g.headline=d("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.817 2H22v.038l-6.183 4.226V2.001zm-7.62 9.473V2H2.016v4.683-.267l6.126 5.094.057-.038zm-6.182 5.061l6.183 4.213v1.252H2.015v-5.465zm13.802-.857L22 11.559v10.437h-6.183v-6.32z",fill:"#F18200"}),a("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.198 11.435l-.057.039L2.016 6.38v.265-4.644h6.182v9.434zm0 9.226L2.015 16.45v5.55h6.183v-1.337zm7.62-5.07L22 11.474v10.522h-6.183v-6.405zM22 2.001l-6.183 4.226V2H22z",fill:"#F18200"}),a("path",{d:"M8.141 13.537L22 4.064v5.432l-13.8 9.19L2 14.46l.016-6.018 6.125 5.094z",fill:"#F18200"})]});g.headlineBlack=a("svg",{width:"15",height:"14",viewBox:"0 0 15 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{d:"M13.5 2V12H14.5C14.6458 12 14.7604 12.0521 14.8438 12.1562C14.9479 12.2396 15 12.3542 15 12.5V13.5C15 13.6458 14.9479 13.7604 14.8438 13.8438C14.7604 13.9479 14.6458 14 14.5 14H9.5C9.35417 14 9.22917 13.9479 9.125 13.8438C9.04167 13.7604 9 13.6458 9 13.5V12.5C9 12.3542 9.04167 12.2396 9.125 12.1562C9.22917 12.0521 9.35417 12 9.5 12H10.5V8H4.5V12H5.5C5.64583 12 5.76042 12.0521 5.84375 12.1562C5.94792 12.2396 6 12.3542 6 12.5V13.5C6 13.6458 5.94792 13.7604 5.84375 13.8438C5.76042 13.9479 5.64583 14 5.5 14H0.5C0.354167 14 0.229167 13.9479 0.125 13.8438C0.0416667 13.7604 0 13.6458 0 13.5V12.5C0 12.3542 0.0416667 12.2396 0.125 12.1562C0.229167 12.0521 0.354167 12 0.5 12H1.5V2H0.5C0.354167 2 0.229167 1.95833 0.125 1.875C0.0416667 1.77083 0 1.64583 0 1.5V0.5C0 0.354167 0.0416667 0.239583 0.125 0.15625C0.229167 0.0520833 0.354167 0 0.5 0H5.5C5.64583 0 5.76042 0.0520833 5.84375 0.15625C5.94792 0.239583 6 0.354167 6 0.5V1.5C6 1.64583 5.94792 1.77083 5.84375 1.875C5.76042 1.95833 5.64583 2 5.5 2H4.5V6H10.5V2H9.5C9.35417 2 9.22917 1.95833 9.125 1.875C9.04167 1.77083 9 1.64583 9 1.5V0.5C9 0.354167 9.04167 0.239583 9.125 0.15625C9.22917 0.0520833 9.35417 0 9.5 0H14.5C14.6458 0 14.7604 0.0520833 14.8438 0.15625C14.9479 0.239583 15 0.354167 15 0.5V1.5C15 1.64583 14.9479 1.77083 14.8438 1.875C14.7604 1.95833 14.6458 2 14.5 2H13.5Z",fill:"#000"})});g.warning=a("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM11 5.00002H9V11H11V5.00002ZM11 13H9V15H11V13ZM2.00002 10C2.00002 14.42 5.58002 18 10 18C14.42 18 18 14.42 18 10C18 5.58002 14.42 2.00002 10 2.00002C5.58002 2.00002 2.00002 5.58002 2.00002 10Z",fill:"#005AE0"})});g.smile=a("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM6.5 6C5.67157 6 5 6.67157 5 7.5C5 8.32843 5.67157 9 6.5 9C7.32843 9 8 8.32843 8 7.5C8 6.67157 7.32843 6 6.5 6ZM13.5 6C12.6716 6 12 6.67157 12 7.5C12 8.32843 12.6716 9 13.5 9C14.3284 9 15 8.32843 15 7.5C15 6.67157 14.3284 6 13.5 6ZM6.55 12C7.25 13.19 8.52 14 10 14C11.48 14 12.75 13.19 13.45 12H15.12C14.32 14.05 12.33 15.5 10 15.5C7.67 15.5 5.68 14.05 4.88 12H6.55ZM2 10C2 14.42 5.58 18 10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2C5.58 2 2 5.58 2 10Z",fill:"#00AA63"})});g.neutral=a("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM5 7.5C5 6.67157 5.67157 6 6.5 6C7.32843 6 8 6.67157 8 7.5C8 8.32843 7.32843 9 6.5 9C5.67157 9 5 8.32843 5 7.5ZM13.5 6C12.6716 6 12 6.67157 12 7.5C12 8.32843 12.6716 9 13.5 9C14.3284 9 15 8.32843 15 7.5C15 6.67157 14.3284 6 13.5 6ZM7 13.5V12H13V13.5H7ZM2 10C2 14.42 5.58 18 10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2C5.58 2 2 5.58 2 10Z",fill:"#005AE0"})});g.negative=a("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM6.5 6C5.67157 6 5 6.67157 5 7.5C5 8.32843 5.67157 9 6.5 9C7.32843 9 8 8.32843 8 7.5C8 6.67157 7.32843 6 6.5 6ZM13.5 6C12.6716 6 12 6.67157 12 7.5C12 8.32843 12.6716 9 13.5 9C14.3284 9 15 8.32843 15 7.5C15 6.67157 14.3284 6 13.5 6ZM4.88 15.5C5.68 13.45 7.67 12 10 12C12.33 12 14.32 13.45 15.12 15.5H13.45C12.75 14.31 11.48 13.5 10 13.5C8.52 13.5 7.24 14.31 6.55 15.5H4.88ZM2 10C2 14.42 5.58 18 10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2C5.58 2 2 5.58 2 10Z",fill:"#DF2A4A"})});g.check=a("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM8 12.17L14.59 5.58L16 7L8 15L4 11L5.41 9.59L8 12.17Z",fill:"#00AA63"})});const Oe=e=>nn.agent().set("X-WP-Nonce",e).use(n=>{n.on("response",r=>{(r.status===401||r.status===403)&&console.error(r)})}),pn=e=>e.replace(/^\//,""),De=e=>e.replace(/\/$/,""),G=e=>De(e)+"/",Ee=e=>(e=window.aioseo.data.hasUrlTrailingSlash?G(e):De(e),G(window.aioseo.urls.restUrl)+G("aioseo/v1")+pn(e));var Fe={exports:{}};/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(e){(function(){var n={}.hasOwnProperty;function r(){for(var o=[],t=0;t<arguments.length;t++){var l=arguments[t];if(!!l){var i=typeof l;if(i==="string"||i==="number")o.push(l);else if(Array.isArray(l)){if(l.length){var s=r.apply(null,l);s&&o.push(s)}}else if(i==="object")if(l.toString===Object.prototype.toString)for(var c in l)n.call(l,c)&&l[c]&&o.push(c);else o.push(l.toString())}}return o.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(Fe);var p=Fe.exports;const{Fragment:gn}=window.wp.element,Te=e=>{const n=e.barScore,r=e.color;return a(gn,{children:a("div",{className:"aioseo-donut-container",style:{flexDirection:"column"},children:d("svg",{className:"aioseo-donut-score-svg",viewBox:"0 0 33.83098862 33.83098862",xmlns:"http://www.w3.org/2000/svg",children:[a("circle",{className:"aioseo-seo-headline-analyzer-score__background",stroke:"#e8e8eb",strokeWidth:"2",fill:"none",cx:"16.91549431",cy:"16.91549431",r:"15.91549431"}),a("circle",{className:"aioseo-seo-headline-analyzer-score__circle",stroke:r,strokeWidth:"2",strokeDasharray:`${n}, 100`,strokeLinecap:"round",fill:"none",cx:"16.91549431",cy:"16.91549431",r:"15.91549431"})]})})})},{__:Z,sprintf:R}=window.wp.i18n,vn=R(Z("Headlines that are lists and how-to get more engagement on average than other types of headlines. %1$s%2$sLearn More%3$s \u2192","all-in-one-seo-pack"),"<br /><br />",'<a href="https://optinmonster.com/why-these-21-headlines-went-viral-and-how-you-can-copy-their-success/" target="_blank" className="aioseo-headline-analyzer-link"><span>',"</span></a>"),Re=R(Z("A very good score is between %1$d and %2$d.","all-in-one-seo-pack"),70,90),We=R(Z("For best results, you should strive for %1$d and above.","all-in-one-seo-pack"),70),bn=R(Z("This headline analyzer is part of AIOSEO to help you increase your traffic. %1$sAnalyze your site further here%2$s \u2192%3$s","all-in-one-seo-pack"),R('<a href���UV  ���UV                  @�WUV          ��UV  ��UV          Р�UV   @      Р�UV          ysis),"</span>","</a>"),{__:D}=window.wp.i18n,{Fragment:Cn}=window.wp.element,{PanelBody:_n,PanelRow:zn}=window.wp.components,E="all-in-one-seo-pack",Sn=e=>{const n=e.analyzer.currentHeadlineData.sentence,r=D("Score",E),o=e.analyzer.currentHeadlineData.score,t=40>o?"red":70>=o?"orange":"green",l=t==="red"?"#df2a4a":t==="orange"?"#F2994A":"#00aa63";let i;switch(!0){case 25>o:i=a("span",{children:D("Not Looking Great",E)});break;case 50>o:i=a("span",{children:D("Could Be Better",E)});break;case 60>o:i=a("span",{children:D("Getting There",E)});break;case 75>o:i=a("span",{children:D("Looks Good! \u{1F44D}\u{1F44D}",E)});break;case 75<o:i=a("span",{children:D("Super! \u{1F525}\u{1F525}\u{1F525}",E)});break;default:i=!1}return a(Cn,{children:a(_n,{className:"aioseo-headline-analyzer-panel-score",title:r,children:a(zn,{children:d("div",{className:"aioseo-headline-analyzer-current-score-tab aioseo-headline-analyzer-panel-first-block",children:[d("h4",{className:"aioseo-headline-analyzer-current-title",children:["\u201C",n,"\u201D"]}),d("div",{className:"aioseo-headline-analyzer-pie-chart-container",children:[d("div",{className:p("aioseo-headline-analyzer-current-score",t),children:[o,a("span",{className:"aioseo-headline-analyzer-total-out-of-score",children:"/ 100"})]}),i&&a("div",{className:p("aioseo-headline-analyzer-score-status",t),children:i}),a(Te,{barScore:o,color:l})]}),d("p",{children:[Re," ",We]})]})})})})},{__:q}=window.wp.i18n,{Fragment:kn}=window.wp.element,{PanelBody:Pn,PanelRow:Nn,TextControl:$n,Button:xn}=window.wp.components,Y="all-in-one-seo-pack",Hn=e=>{const n=q("Try New Headline",Y),r=q("Enter a different headline than your post title to see how it compares.",Y),o=q("Analyze Headline",Y),t=typeof e.analyzer.newHeadline!="undefined"?e.analyzer.newHeadline:"",l=typeof e.analyzer.previousHeadlinesData!="undefined"?e.analyzer.previousHeadlinesData:[],i=!t,s=c=>{const w=c.trim();!w||Oe(window.aioseo.nonce).post(Ee("analyze_headline")).send({headline:w,shouldStoreHeadline:!1}).then(f=>{const h=JSON.parse(f.body[Object.keys(f.body)[0]]);e.setAnalyzer({newHeadlineData:h,headlineData:h,previousHeadlinesData:[e.analyzer.headlineData,...l],isNewData:!0})}).catch(f=>{e.setAnalyzer({isNewData:!1}),console.log(f)})};return a(kn,{children:a(Pn,{title:n,className:p("aioseo-headline-analyzer-panel-tab-new-score-form"),children:a(Nn,{children:a("div",{className:"aioseo-headline-analyzer-new-tab",children:a("div",{className:"aioseo-headline-analyzer-new-score-form-block",children:d("form",{onSubmit:c=>{c.preventDefault(),s(t)},children:[a($n,{label:r,value:t,onChange:c=>{c!==" "&&e.setAnalyzer({newHeadline:c})},className:"aioseo-headline-analyzer-input-field"}),a(xn,{className:p("aioseo-headline-analyzer-button"),onClick:()=>{s(t)},disabled:i,children:o})]})})})})})})},{__:$}=window.wp.i18n,{Fragment:On}=window.wp.element,{PanelBody:Dn,PanelRow:En}=window.wp.components,x="all-in-one-seo-pack",Fn=e=>{const n=e.analyzer.currentHeadlineData.sentence,r=$("New Score",x),o=$("Current Score",x),t=typeof e.analyzer.newHeadlineData!="undefined"?e.analyzer.newHeadlineData.sentence:"",l=typeof e.analyzer.newHeadlineData!="undefined"?e.analyzer.newHeadlineData.score:"",i=typeof e.analyzer.currentHeadlineData.score!="undefined"?e.analyzer.currentHeadlineData.score:"",s=40>l?"red":60>=l?"orange":"green",c=s==="red"?"#df2a4a":s==="orange"?"#F2994A":"#00aa63",w=40>i?"red-bg":60>=i?"orange-bg":"green-bg",f=Math.abs(l-i);let h;switch(!0){case 25>l:h=a("span",{children:$("Not Looking Great",x)});break;case 50>l:h=a("span",{children:$("Could Be Better",x)});break;case 60>l:h=a("span",{children:$("Getting There",x)});break;case 75>l:h=a("span",{children:$("Looks Good! \u{1F44D}\u{1F44D}",x)});break;case 75<l:h=a("span",{children:$("Super! \u{1F525}\u{1F525}\u{1F525}",x)});break;default:h=!1}return a(On,{children:a(Dn,{title:r,className:"aioseo-headline-analyzer-panel-tab-new-score",children:a(En,{children:a("div",{className:"aioseo-headline-analyzer-panel-first-block",children:d("div",{className:"aioseo-headline-analyzer-new-score-panel",children:[d("p",{children:[Re," ",We]}),d("h4",{children:["\u201C",t,"\u201D"]}),d("div",{className:"aioseo-headline-analyzer-pie-chart-container",children:[a("span",{className:p("aioseo-headline-analyzer-new-score",s),children:l}),a(Te,{barScore:l,color:c}),d("span",{className:p("aioseo-headline-analyzer-score-difference",s),children:[l>i?"+ ":l===i?"":"- ",f]}),h&&a("div",{className:p("aioseo-headline-analyzer-score-status",s),children:h})]}),d("div",{className:"current-score",children:[a("span",{className:p("aioseo-headline-analyzer-score",w),children:i}),d("div",{className:"aioseo-headline-analyzer-current-score-content",children:[a("h5",{children:o}),a("p",{children:n})]})]})]})})})})})},{__:de}=window.wp.i18n,{Fragment:Tn,useState:Rn,useEffect:Wn}=window.wp.element,Ln=e=>{const n=de("Current Score","all-in-one-seo-pack"),r=de("Try New Headline","all-in-one-seo-pack"),[o,t]=Rn("current-score"),l=()=>t("current-score"),i=()=>t("new-headline"),s=typeof e.analyzer.isNewData!="undefined"?e.analyzer.isNewData:!1;return Wn(()=>{e.setAnalyzer({activeTab:o})},[o]),d(Tn,{children:[d("div",{className:"aioseo-inline-buttons",children:[a("button",{onClick:l,className:p("aioseo-switcher-button",{active:o==="current-score"}),children:n}),a("button",{onClick:i,className:p("aioseo-switcher-button",{active:o==="new-headline"}),children:r})]}),o==="new-headline"?a(K,{children:a(Hn,{analyzer:e.analyzer,setAnalyzer:e.setAnalyzer})}):a(Sn,{analyzer:e.analyzer}),s?a(Fn,{analyzer:e.analyzer}):""]})},{__:An}=window.wp.i18n,{Fragment:Bn}=window.wp.element,{PanelBody:Mn,PanelRow:jn}=window.wp.components,Vn=e=>{const n=An("Previous Scores","all-in-one-seo-pack"),r=e.analyzer.previousHeadlinesData!=="undefined"?e.analyzer.previousHeadlinesData:[],o=document.querySelector(".edit-post-sidebar"),l=(e.analyzer.activeTab!=="undefined"?e.analyzer.activeTab:"current-score")==="current-score"?390:300,i=s=>{e.setAnalyzer({newHeadlineData:r[s],headlineData:r[s],newHeadline:r[s].sentence,isNewData:!0}),o&&(o.scrollTop=l)};return a(Bn,{children:a(Mn,{title:n,className:"aioseo-headline-analyzer-panel-previous-scores",children:a(jn,{children:a("div",{className:"aioseo-headline-analyzer-panel-first-block",children:a("ul",{className:"aioseo-headline-analyzer-previous-scores",children:r.map((s,c)=>{if(10>c&&(typeof s.sentence!="undefined"||typeof s.score!="undefined")){const w=40>s.score?"red-bg":60>=s.score?"orange-bg":"green-bg";return d("li",{onClick:()=>i(c),children:[a("span",{className:p("aioseo-headline-analyzer-score",w),children:s.score}),a("span",{className:"aioseo-headline-analyzer-score-text",children:s.sentence})]},c)}return null})})})})})})},{__:In}=window.wp.i18n,B=e=>{const n=In("Goal: ","all-in-one-seo-pack"),r={width:e.value+"%"};return d("div",{className:"aioseo-headline-analyzer-words-block",children:[a("h5",{children:e.title}),d("div",{className:"aioseo-headline-analyzer-words-block-data",children:[d("span",{className:p("aioseo-headline-analyzer-words-block-percentage",e.classOnScore),children:[e.value,"%"]}),d("span",{className:p("aioseo-headline-analyzer-words-block-percentage-right-column",e.classOnScore),children:[d("span",{className:"aioseo-headline-analyzer-words-block-goal",children:[n," ",e.goalValue]}),d("span",{className:"aioseo-headline-analyzer-words-block-progressbar",children:[a("span",{className:"aioseo-headline-analyzer-progressbar-bg"}),a("span",{className:p("aioseo-headline-analyzer-progressbar-part",e.classOnScoreBg),style:r})]})]})]}),a("ul",{className:"aioseo-headline-analyzer-words-tag-list",children:0<e.words.length?e.words.map((o,t)=>a("li",{children:o},t)):""}),a("p",{className:"aioseo-headline-analyzer-words-guideline",children:e.guideLine})]})},{__:m}=window.wp.i18n,{Fragment:Zn}=window.wp.element,{PanelBody:Un,PanelRow:Gn}=window.wp.components,y="all-in-one-seo-pack",qn=e=>{const n=m("Word Balance",y),r=m("Compare the percentages of your results to the goal for each category and adjust as necessary.",y),o=e.data.score,t=40>e.data.score?"red":60>=e.data.score?"orange":"green",l=e.data.result.commonWordsPercentage===0?"red":.2>e.data.result.commonWordsPercentage?"orange":"green",i=e.data.result.commonWordsPercentage===0?"red-bg":.2>e.data.result.commonWordsPercentage?"orange-bg":"green-bg",s=.2>e.data.result.commonWordsPercentage?m("Your headline would be more likely to get clicks if it had more common words.",y):m("Headlines with 20-30% common words are more likely to get clicks.",y),c=e.data.result.uncommonWordsPercentage===0?"red":.1>e.data.result.uncommonWordsPercentage?"orange":"green",w=e.data.result.uncommonWordsPercentage===0?"red-bg":.1>e.data.result.uncommonWordsPercentage?"orange-bg":"green-bg",f=.1>e.data.result.uncommonWordsPercentage?m("Your headline would be more likely to get clicks if it had more uncommon words.",y):m("Headlines with uncommon words are more likely to get clicks.",y),h=e.data.result.emotionalWordsPercentage===0?"red":.1>e.data.result.emotionalWordsPercentage?"orange":"green",v=e.data.result.emotionalWordsPercentage===0?"red-bg":.1>e.data.result.emotionalWordsPercentage?"orange-bg":"green-bg",Le=m("Emotionally triggered headlines are likely to drive more clicks.",y),Ae=e.data.result.powerWords.length===0?"orange":"green",Be=e.data.result.powerWords.length===0?"orange":"green-bg",Me=m("Headlines with power words are more likely to get clicks.",y),je=m("Common Words",y),Ve=m("20-30%",y),Ie=m("Uncommon Words",y),Ze=m("10-20%",y),Ue=m("Emotional Words",y),Ge=m("10-15%",y),qe=m("Power Words",y),Ye=m("At least one",y);let N;switch(!0){case 25>o:N=a("span",{children:m("Not Looking Great",y)});break;case 50>o:N=a("span",{children:m("Could Be Better",y)});break;case 60>o:N=a("span",{children:m("Getting There",y)});break;case 75>o:N=a("span",{children:m("Looks Good! \u{1F44D}\u{1F44D}",y)});break;case 75<o:N=a("span",{children:m("Super! \u{1F525}\u{1F525}\u{1F525}",y)});break;default:N=!1}return a(Zn,{children:a(Un,{title:n,className:p("aioseo-headline-analyzer-panel-word-balance","aioseo-headline-analyzer-panel-has-icon",t),icon:t==="green"?g.check:g.warning,children:d(Gn,{children:[d("div",{className:"aioseo-headline-analyzer-words-block",children:[a("h4",{children:N}),a("p",{children:r})]}),a(B,{title:je,value:Math.round(e.data.result.commonWordsPercentage*100),goalValue:Ve,words:e.data.result.commonWords,guideLine:s,classOnScore:l,classOnScoreBg:i}),a(B,{title:Ie,value:Math.round(e.data.result.uncommonWordsPercentage*100),goalValue:Ze,words:e.data.result.uncommonWords,guideLine:f,classOnScore:c,classOnScoreBg:w}),a(B,{title:Ue,value:Math.round(e.data.result.emotionalWordsPercentage*100),goalValue:Ge,words:e.data.result.emotionWords,guideLine:Le,classOnScore:h,classOnScoreBg:v}),a(B,{title:qe,value:Math.round(e.data.result.powerWordsPercentage*100),goalValue:Ye,words:e.data.result.powerWords,guideLine:Me,classOnScore:Ae,classOnScoreBg:Be})]})})})},{__:_}=window.wp.i18n,{Fragment:Yn}=window.wp.element,{PanelBody:Jn,PanelRow:Kn}=window.wp.components,z="all-in-one-seo-pack",Qn=e=>{const n=_("Your headline has a neutral sentiment.",z),r=_("Headlines that are strongly positive or negative tend to get more engagement then neutral ones.",z),o=_("Your headline has a positive sentiment.",z),t=_("Positive headlines tend to get better engagement than neutral or negative ones.",z),l=_("Your headline has a negative sentiment.",z),i=_("Negative headlines are attention-grabbing and tend to perform better than neutral ones.",z),s=_("Sentiment",z),c=e.data.result.sentiment==="neu"?_("Neutral",z):e.data.result.sentiment==="pos"?_("Positive",z):_("Negative",z),w=e.data.result.sentiment==="neu"?g.neutral:e.data.result.sentiment==="pos"?g.smile:g.negative,f=e.data.result.sentiment==="neu"?"orange":e.data.result.sentiment==="pos"?"green":"red";return a(Yn,{children:a(Jn,{title:s,className:p("aioseo-headline-analyzer-panel-sentiment","aioseo-headline-analyzer-panel-has-icon",f),icon:w,children:a(Kn,{children:d("div",{className:"aioseo-headline-analyzer-panel-first-block",children:[a("h4",{children:c}),e.data.result.sentiment==="neu"?d("p",{children:[a("strong",{children:n}),a("br",{}),r]}):"",e.data.result.sentiment==="pos"?d("p",{children:[a("strong",{children:o}),a("br",{}),t]}):"",e.data.result.sentiment==="neg"?d("p",{children:[a("strong",{children:l}),a("br",{})," ",i]}):""]})})})})},{__:Xn}=window.wp.i18n,{Fragment:ea}=window.wp.element,{PanelBody:na,PanelRow:aa}=window.wp.components,ta=e=>{const n=e.data.result.headlineTypes.join(", "),r=Xn("Headline Type","all-in-one-seo-pack");return a(ea,{children:a(na,{title:d("span",{className:"aioseo-headline-analyzer-panel-types-title",children:[r,a("span",{children:n})]}),className:"aioseo-headline-analyzer-panel-types",children:a(aa,{children:d("div",{className:"aioseo-headline-analyzer-panel-first-block",children:[a("h4",{children:n}),a("p",{dangerouslySetInnerHTML:{__html:vn}})]})})})})},{__:H}=window.wp.i18n,{Fragment:ra}=window.wp.element,{PanelBody:oa,PanelRow:la}=window.wp.components,O="all-in-one-seo-pack",sa=e=>{const n=H("Character Count",O),r=e.data.result.length,o=r.toString();let t="",l="",i="",s="";if(o.length===1&&(s=`<span class="character-zero">0</span><span class="character-zero">0</span><span>${r}</span>`),o.length===2){s='<span class="character-zero">0</span>';for(const c of o)s+=`<span>${c}</span>`}if(r.toString().length===3)for(const c of o)s+=`<span>${c}</span>`;return 19>=r?t="red":20<=r&&34>=r?t="orange":35<=r&&66>=r?t="green":67<=r&&79>=r?t="orange":80<=r&&(t="red"),34>=r?(l=H("Too Short \u{1F643}",O),i=H("You have space to add more keywords and power words to boost your rankings and click-through rate.",O)):35<=r&&66>=r?(l=H("Good \u{1F642}",O),i=H("Headlines that are about 55 characters long will display fully in search results and tend to get more clicks.",O)):67<=r&&(l=H("Too Long \u{1F611}",O),i=H("At this length, it will get cut off in search results. Try reducing it to about 55 characters.",O)),a(ra,{children:a(oa,{title:n,className:p("aioseo-headline-analyzer-panel-character-count","aioseo-headline-analyzer-panel-has-icon",t),icon:t==="green"?g.check:g.warning,children:a(la,{children:d("div",{className:"aioseo-headline-analyzer-panel-first-block",children:[d("div",{className:"aioseo-headline-analyzer-character-count-container",children:[a("span",{className:"aioseo-headline-analyzer-status-on-character-length",children:l}),a("span",{className:p("aioseo-headline-analyzer-character-length",t),dangerouslySetInnerHTML:{__html:s}})]}),a("p",{children:i})]})})})})},{__:k}=window.wp.i18n,{Fragment:ia}=window.wp.element,{PanelBody:ca,PanelRow:da}=window.wp.components,P="all-in-one-seo-pack",ua=e=>{const n=k("Word Count",P),r=e.data.result.wordCount,o=r.toString();let t="",l="",i="",s="";if(o.length===1&&(s=`<span class="character-zero">0</span><span class="character-zero">0</span><span>${r}</span>`),o.length===2){s='<span class="character-zero">0</span>';for(const c of o)s+=`<span>${c}</span>`}if(o.length===3)for(const c of o)s+=`<span>${c}</span>`;return 4>=r?(t="red",l=k("Not Enough Words \u{1F643}",P),i=k("Your headline doesn\u2019t use enough words. You have more space to add keywords and power words to improve your SEO and get more engagement.",P)):5<=r&&9>=r?(t="green",l=k("Good \u{1F642}",P),i=k("Your headline has the right amount of words. Headlines are more likely to be clicked on in search results if they have about 6 words.",P)):10<=r&&11>=r?(t="orange",l=k("Reduce Word Count \u{1F642}",P)):(t="red",l=k("Too Many Words \u{1F611}",P),i=k("Your headline has too many words. Long headlines will get cut off in search results and won\u2019t get as many clicks.",P)),a(ia,{children:a(ca,{title:n,className:p("aioseo-headline-analyzer-panel-word-count","aioseo-headline-analyzer-panel-has-icon",t),icon:t==="green"?g.check:g.warning,children:a(da,{children:d("div",{className:"aioseo-headline-analyzer-panel-first-block",children:[d("div",{className:"aioseo-headline-analyzer-word-counter",children:[a("span",{className:"aioseo-headline-analyzer-status-on-word-length",children:l}),a("span",{className:p("aioseo-headline-analyzer-word-length",t),dangerouslySetInnerHTML:{__html:s}})]}),a("p",{children:i})]})})})})},{__:M}=window.wp.i18n,{Fragment:ha}=window.wp.element,{PanelBody:fa,PanelRow:wa}=window.wp.components,j="all-in-one-seo-pack",ma=e=>{const n=M("Beginning & Ending Words",j),r=e.data.result.originalExplodedHeadline,o=M("Most readers only look at the first and last 3 words of a headline before deciding whether to click.",j);let t="",l="";return 6<=r.length?(t=r.slice(0,3).join(" "),l=r.slice(-3).join(" ")):3<r.length&&5>=r.length?(t=r.slice(0,3).join(" "),l=r.slice(3).join(" ")):t=r.slice(0,3).join(" "),a(ha,{children:a(fa,{title:n,className:"aioseo-headline-analyzer-panel-beginning-ending-words",children:a(wa,{children:d("div",{className:"aioseo-headline-analyzer-panel-first-block",children:[t?d(K,{children:[a("ul",{className:"aioseo-headline-analyzer-word-begining-title",children:a("li",{children:M("Beginning Words",j)})}),a("div",{className:"aioseo-headline-analyzer-words beginning",children:a("span",{children:t})})]}):"",l?d(K,{children:[a("ul",{className:"aioseo-headline-analyzer-word-ending-title",children:a("li",{children:M("Ending Words",j)})}),a("div",{className:"aioseo-headline-analyzer-words ending",children:a("span",{children:l})})]}):"",a("p",{className:"aioseo-headline-analyzer-words-guideline",children:o})]})})})})},{__:ue}=window.wp.i18n,{Fragment:ya}=window.wp.element,{PanelBody:pa,PanelRow:ga}=window.wp.components,{select:va}=window.wp.data,ba=e=>{const n=ue("Search Preview","all-in-one-seo-pack"),r=ue("Here is how your headline will look like in Google search results page.","all-in-one-seo-pack"),o=va("core/editor").getPermalink();return a(ya,{children:a(pa,{title:n,className:"aioseo-headline-analyzer-panel-search-preview",children:a(ga,{children:a("div",{className:"aioseo-headline-analyzer-panel-first-block",children:d("div",{className:"aioseo-headline-analyzer-search-prevew-wrap",children:[a("p",{className:"aioseo-headline-analyzer-post-url",children:a("a",oe(C({},{href:o}),{target:"_blank",children:o}))}),a("h4",{children:e.data.sentence}),a("p",{children:r})]})})})})})};const{__:he}=window.wp.i18n,{Fragment:Ca,useState:_a,useEffect:za}=window.wp.element,{registerPlugin:Sa}=window.wp.plugins,{PluginSidebar:ka,PluginSidebarMoreMenuItem:Pa}=window.wp.editPost,{select:J}=window.wp.data,fe="all-in-one-seo-pack";let we;const Na=(e,n)=>((...r)=>{const o=()=>e(...r);clearTimeout(we),we=setTimeout(o,n)}).call(),$a=()=>{let e=J("core/editor").getEditedPostAttribute("title");const n=()=>{if(!e){const f={dataExist:!1};l(C(C({},t),f));return}Oe(window.aioseo.nonce).post(Ee("analyze_headline")).send({headline:e,shouldStoreHeadline:!1}).then(f=>{const h={dataExist:!1},v=JSON.parse(f.body[Object.keys(f.body)[0]]);v.analysed&&(h.currentHeadlineData=v,h.headlineData=v,h.dataExist=!0,typeof t.headlineData!="undefined"&&(h.previousHeadlinesData=[t.headlineData,...i])),l(C(C({},t),h))}).catch(f=>{const h={dataExist:!1};l(C(C({},t),h)),console.log("Couldn't fetch score for headline:",f)})};za(()=>n(),[]),window.wp.data.subscribe(()=>{e!==J("core/editor").getEditedPostAttribute("title")&&(e=J("core/editor").getEditedPostAttribute("title"),Na(()=>n(),2e3))});const r=he("SEO Headline Analyzer",fe),o=he("Write your post title to see the analyzer data. This Headline Analyzer tool enables you to write irresistible SEO headlines that drive traffic, shares, and rank better in search results.",fe),[t,l]=_a({}),i=typeof t.previousHeadlinesData!="undefined"?t.previousHeadlinesData:[],s=document.querySelector(`.components-button[aria-label='${r}'] svg`);if(s){const f=document.createElement("span");if(t.dataExist&&typeof t.currentHeadlineData.score!="undefined"){const h=t.currentHeadlineData.score,v=40>h?"red":60>=h?"orange":"green";s.parentNode.setAttribute("aioseo-button-color",v),s.nextElementSibling?s.nextElementSibling.innerHTML=`${h}/100`:(f.innerHTML=`${h}/100`,s.parentNode.insertBefore(f,s.nextSibling))}else s.parentNode.setAttribute("aioseo-button-color","red"),s.nextElementSibling?s.nextElementSibling.innerHTML="00/100":(f.innerHTML="00/100",s.parentNode.insertBefore(f,s.nextSibling))}const c=document.querySelector(".aioseo-headline-analyzer-wrapper");if(c){const f=c.parentNode.querySelectorAll(".components-panel__header");f&&f.forEach(function(h){const v=h.querySelector(".interface-complementary-area__pin-unpin-item");v&&v!==null&&(v.style.display="none")})}const w=f=>{l(C(C({},t),f))};return d(Ca,{children:[a(Pa,{target:"aioseo-headline-analyzer",children:r}),d(ka,{name:"aioseo-headline-analyzer",title:r,className:"aioseo-headline-analyzer-wrapper",children:[typeof t.headlineData!="undefined"&&t.dataExist&&t.headlineData.analysed?a(Ln,{analyzer:t,setAnalyzer:w}):a("p",{className:"aioseo-headline-analyzer-empty-title-warning",children:o}),typeof t.headlineData!="undefined"&&t.dataExist&&t.headlineData.analysed&&0<i.length?a(Vn,{analyzer:t,setAnalyzer:w}):"",typeof t.headlineData!="undefined"&&t.dataExist&&t.headlineData.analysed?a(qn,{data:t.headlineData}):"",typeof t.headlineData!="undefined"&&t.dataExist&&t.headlineData.analysed?a(Qn,{data:t.headlineData}):"",typeof t.headlineData!="undefined"&&t.dataExist&&t.headlineData.analysed?a(ta,{data:t.headlineData}):"",typeof t.headlineData!="undefined"&&t.dataExist&&t.headlineData.analysed?a(sa,{data:t.headlineData}):"",typeof t.headlineData!="undefined"&&t.dataExist&&t.headlineData.analysed?a(ua,{data:t.headlineData}):"",typeof t.headlineData!="undefined"&&t.dataExist&&t.headlineData.analysed?a(ma,{data:t.headlineData}):"",typeof t.headlineData!="undefined"&&t.dataExist&&t.headlineData.analysed?a(ba,{data:t.headlineData}):"",a("div",{className:"aioseo-headline-analyzer-bottom-notice",children:a("p",{dangerouslySetInnerHTML:{__html:bn}})})]})]})};Sa("aioseo-headline-analyzer",{icon:g.headline,render:$a});
