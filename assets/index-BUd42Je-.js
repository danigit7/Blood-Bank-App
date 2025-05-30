var hT=Object.defineProperty;var fT=(n,e,t)=>e in n?hT(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var jh=(n,e,t)=>fT(n,typeof e!="symbol"?e+"":e,t);function pT(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in n)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(n,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function mT(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Fh={exports:{}},Ua={},Uh={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ey;function gT(){if(ey)return Re;ey=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),I=Symbol.iterator;function R(V){return V===null||typeof V!="object"?null:(V=I&&V[I]||V["@@iterator"],typeof V=="function"?V:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,B={};function b(V,q,pe){this.props=V,this.context=q,this.refs=B,this.updater=pe||L}b.prototype.isReactComponent={},b.prototype.setState=function(V,q){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,q,"setState")},b.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function Y(){}Y.prototype=b.prototype;function ee(V,q,pe){this.props=V,this.context=q,this.refs=B,this.updater=pe||L}var te=ee.prototype=new Y;te.constructor=ee,W(te,b.prototype),te.isPureReactComponent=!0;var re=Array.isArray,ae=Object.prototype.hasOwnProperty,ce={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function S(V,q,pe){var xe,Ae={},Ne=null,Me=null;if(q!=null)for(xe in q.ref!==void 0&&(Me=q.ref),q.key!==void 0&&(Ne=""+q.key),q)ae.call(q,xe)&&!k.hasOwnProperty(xe)&&(Ae[xe]=q[xe]);var je=arguments.length-2;if(je===1)Ae.children=pe;else if(1<je){for(var $e=Array(je),yt=0;yt<je;yt++)$e[yt]=arguments[yt+2];Ae.children=$e}if(V&&V.defaultProps)for(xe in je=V.defaultProps,je)Ae[xe]===void 0&&(Ae[xe]=je[xe]);return{$$typeof:n,type:V,key:Ne,ref:Me,props:Ae,_owner:ce.current}}function x(V,q){return{$$typeof:n,type:V.type,key:q,ref:V.ref,props:V.props,_owner:V._owner}}function N(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function O(V){var q={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(pe){return q[pe]})}var M=/\/+/g;function C(V,q){return typeof V=="object"&&V!==null&&V.key!=null?O(""+V.key):q.toString(36)}function tt(V,q,pe,xe,Ae){var Ne=typeof V;(Ne==="undefined"||Ne==="boolean")&&(V=null);var Me=!1;if(V===null)Me=!0;else switch(Ne){case"string":case"number":Me=!0;break;case"object":switch(V.$$typeof){case n:case e:Me=!0}}if(Me)return Me=V,Ae=Ae(Me),V=xe===""?"."+C(Me,0):xe,re(Ae)?(pe="",V!=null&&(pe=V.replace(M,"$&/")+"/"),tt(Ae,q,pe,"",function(yt){return yt})):Ae!=null&&(N(Ae)&&(Ae=x(Ae,pe+(!Ae.key||Me&&Me.key===Ae.key?"":(""+Ae.key).replace(M,"$&/")+"/")+V)),q.push(Ae)),1;if(Me=0,xe=xe===""?".":xe+":",re(V))for(var je=0;je<V.length;je++){Ne=V[je];var $e=xe+C(Ne,je);Me+=tt(Ne,q,pe,$e,Ae)}else if($e=R(V),typeof $e=="function")for(V=$e.call(V),je=0;!(Ne=V.next()).done;)Ne=Ne.value,$e=xe+C(Ne,je++),Me+=tt(Ne,q,pe,$e,Ae);else if(Ne==="object")throw q=String(V),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return Me}function Dt(V,q,pe){if(V==null)return V;var xe=[],Ae=0;return tt(V,xe,"","",function(Ne){return q.call(pe,Ne,Ae++)}),xe}function Ot(V){if(V._status===-1){var q=V._result;q=q(),q.then(function(pe){(V._status===0||V._status===-1)&&(V._status=1,V._result=pe)},function(pe){(V._status===0||V._status===-1)&&(V._status=2,V._result=pe)}),V._status===-1&&(V._status=0,V._result=q)}if(V._status===1)return V._result.default;throw V._result}var Be={current:null},ie={transition:null},ge={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:ie,ReactCurrentOwner:ce};function oe(){throw Error("act(...) is not supported in production builds of React.")}return Re.Children={map:Dt,forEach:function(V,q,pe){Dt(V,function(){q.apply(this,arguments)},pe)},count:function(V){var q=0;return Dt(V,function(){q++}),q},toArray:function(V){return Dt(V,function(q){return q})||[]},only:function(V){if(!N(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Re.Component=b,Re.Fragment=t,Re.Profiler=o,Re.PureComponent=ee,Re.StrictMode=i,Re.Suspense=p,Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ge,Re.act=oe,Re.cloneElement=function(V,q,pe){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var xe=W({},V.props),Ae=V.key,Ne=V.ref,Me=V._owner;if(q!=null){if(q.ref!==void 0&&(Ne=q.ref,Me=ce.current),q.key!==void 0&&(Ae=""+q.key),V.type&&V.type.defaultProps)var je=V.type.defaultProps;for($e in q)ae.call(q,$e)&&!k.hasOwnProperty($e)&&(xe[$e]=q[$e]===void 0&&je!==void 0?je[$e]:q[$e])}var $e=arguments.length-2;if($e===1)xe.children=pe;else if(1<$e){je=Array($e);for(var yt=0;yt<$e;yt++)je[yt]=arguments[yt+2];xe.children=je}return{$$typeof:n,type:V.type,key:Ae,ref:Ne,props:xe,_owner:Me}},Re.createContext=function(V){return V={$$typeof:c,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},Re.createElement=S,Re.createFactory=function(V){var q=S.bind(null,V);return q.type=V,q},Re.createRef=function(){return{current:null}},Re.forwardRef=function(V){return{$$typeof:h,render:V}},Re.isValidElement=N,Re.lazy=function(V){return{$$typeof:_,_payload:{_status:-1,_result:V},_init:Ot}},Re.memo=function(V,q){return{$$typeof:y,type:V,compare:q===void 0?null:q}},Re.startTransition=function(V){var q=ie.transition;ie.transition={};try{V()}finally{ie.transition=q}},Re.unstable_act=oe,Re.useCallback=function(V,q){return Be.current.useCallback(V,q)},Re.useContext=function(V){return Be.current.useContext(V)},Re.useDebugValue=function(){},Re.useDeferredValue=function(V){return Be.current.useDeferredValue(V)},Re.useEffect=function(V,q){return Be.current.useEffect(V,q)},Re.useId=function(){return Be.current.useId()},Re.useImperativeHandle=function(V,q,pe){return Be.current.useImperativeHandle(V,q,pe)},Re.useInsertionEffect=function(V,q){return Be.current.useInsertionEffect(V,q)},Re.useLayoutEffect=function(V,q){return Be.current.useLayoutEffect(V,q)},Re.useMemo=function(V,q){return Be.current.useMemo(V,q)},Re.useReducer=function(V,q,pe){return Be.current.useReducer(V,q,pe)},Re.useRef=function(V){return Be.current.useRef(V)},Re.useState=function(V){return Be.current.useState(V)},Re.useSyncExternalStore=function(V,q,pe){return Be.current.useSyncExternalStore(V,q,pe)},Re.useTransition=function(){return Be.current.useTransition()},Re.version="18.3.1",Re}var ty;function jc(){return ty||(ty=1,Uh.exports=gT()),Uh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ny;function yT(){if(ny)return Ua;ny=1;var n=jc(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(h,p,y){var _,I={},R=null,L=null;y!==void 0&&(R=""+y),p.key!==void 0&&(R=""+p.key),p.ref!==void 0&&(L=p.ref);for(_ in p)i.call(p,_)&&!l.hasOwnProperty(_)&&(I[_]=p[_]);if(h&&h.defaultProps)for(_ in p=h.defaultProps,p)I[_]===void 0&&(I[_]=p[_]);return{$$typeof:e,type:h,key:R,ref:L,props:I,_owner:o.current}}return Ua.Fragment=t,Ua.jsx=c,Ua.jsxs=c,Ua}var ry;function vT(){return ry||(ry=1,Fh.exports=yT()),Fh.exports}var E=vT(),K=jc();const Kf=mT(K),_T=pT({__proto__:null,default:Kf},[K]);var qu={},Bh={exports:{}},en={},zh={exports:{}},$h={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iy;function wT(){return iy||(iy=1,function(n){function e(ie,ge){var oe=ie.length;ie.push(ge);e:for(;0<oe;){var V=oe-1>>>1,q=ie[V];if(0<o(q,ge))ie[V]=ge,ie[oe]=q,oe=V;else break e}}function t(ie){return ie.length===0?null:ie[0]}function i(ie){if(ie.length===0)return null;var ge=ie[0],oe=ie.pop();if(oe!==ge){ie[0]=oe;e:for(var V=0,q=ie.length,pe=q>>>1;V<pe;){var xe=2*(V+1)-1,Ae=ie[xe],Ne=xe+1,Me=ie[Ne];if(0>o(Ae,oe))Ne<q&&0>o(Me,Ae)?(ie[V]=Me,ie[Ne]=oe,V=Ne):(ie[V]=Ae,ie[xe]=oe,V=xe);else if(Ne<q&&0>o(Me,oe))ie[V]=Me,ie[Ne]=oe,V=Ne;else break e}}return ge}function o(ie,ge){var oe=ie.sortIndex-ge.sortIndex;return oe!==0?oe:ie.id-ge.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,h=c.now();n.unstable_now=function(){return c.now()-h}}var p=[],y=[],_=1,I=null,R=3,L=!1,W=!1,B=!1,b=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function te(ie){for(var ge=t(y);ge!==null;){if(ge.callback===null)i(y);else if(ge.startTime<=ie)i(y),ge.sortIndex=ge.expirationTime,e(p,ge);else break;ge=t(y)}}function re(ie){if(B=!1,te(ie),!W)if(t(p)!==null)W=!0,Ot(ae);else{var ge=t(y);ge!==null&&Be(re,ge.startTime-ie)}}function ae(ie,ge){W=!1,B&&(B=!1,Y(S),S=-1),L=!0;var oe=R;try{for(te(ge),I=t(p);I!==null&&(!(I.expirationTime>ge)||ie&&!O());){var V=I.callback;if(typeof V=="function"){I.callback=null,R=I.priorityLevel;var q=V(I.expirationTime<=ge);ge=n.unstable_now(),typeof q=="function"?I.callback=q:I===t(p)&&i(p),te(ge)}else i(p);I=t(p)}if(I!==null)var pe=!0;else{var xe=t(y);xe!==null&&Be(re,xe.startTime-ge),pe=!1}return pe}finally{I=null,R=oe,L=!1}}var ce=!1,k=null,S=-1,x=5,N=-1;function O(){return!(n.unstable_now()-N<x)}function M(){if(k!==null){var ie=n.unstable_now();N=ie;var ge=!0;try{ge=k(!0,ie)}finally{ge?C():(ce=!1,k=null)}}else ce=!1}var C;if(typeof ee=="function")C=function(){ee(M)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,Dt=tt.port2;tt.port1.onmessage=M,C=function(){Dt.postMessage(null)}}else C=function(){b(M,0)};function Ot(ie){k=ie,ce||(ce=!0,C())}function Be(ie,ge){S=b(function(){ie(n.unstable_now())},ge)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ie){ie.callback=null},n.unstable_continueExecution=function(){W||L||(W=!0,Ot(ae))},n.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<ie?Math.floor(1e3/ie):5},n.unstable_getCurrentPriorityLevel=function(){return R},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(ie){switch(R){case 1:case 2:case 3:var ge=3;break;default:ge=R}var oe=R;R=ge;try{return ie()}finally{R=oe}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ie,ge){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var oe=R;R=ie;try{return ge()}finally{R=oe}},n.unstable_scheduleCallback=function(ie,ge,oe){var V=n.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?V+oe:V):oe=V,ie){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=oe+q,ie={id:_++,callback:ge,priorityLevel:ie,startTime:oe,expirationTime:q,sortIndex:-1},oe>V?(ie.sortIndex=oe,e(y,ie),t(p)===null&&ie===t(y)&&(B?(Y(S),S=-1):B=!0,Be(re,oe-V))):(ie.sortIndex=q,e(p,ie),W||L||(W=!0,Ot(ae))),ie},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(ie){var ge=R;return function(){var oe=R;R=ge;try{return ie.apply(this,arguments)}finally{R=oe}}}}($h)),$h}var sy;function ET(){return sy||(sy=1,zh.exports=wT()),zh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oy;function TT(){if(oy)return en;oy=1;var n=jc(),e=ET();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},I={};function R(r){return p.call(I,r)?!0:p.call(_,r)?!1:y.test(r)?I[r]=!0:(_[r]=!0,!1)}function L(r,s,a,d){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return d?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function W(r,s,a,d){if(s===null||typeof s>"u"||L(r,s,a,d))return!0;if(d)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function B(r,s,a,d,f,g,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=d,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=w}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){b[r]=new B(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];b[s]=new B(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){b[r]=new B(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){b[r]=new B(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){b[r]=new B(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){b[r]=new B(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){b[r]=new B(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){b[r]=new B(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){b[r]=new B(r,5,!1,r.toLowerCase(),null,!1,!1)});var Y=/[\-:]([a-z])/g;function ee(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(Y,ee);b[s]=new B(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(Y,ee);b[s]=new B(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(Y,ee);b[s]=new B(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){b[r]=new B(r,1,!1,r.toLowerCase(),null,!1,!1)}),b.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){b[r]=new B(r,1,!1,r.toLowerCase(),null,!0,!0)});function te(r,s,a,d){var f=b.hasOwnProperty(s)?b[s]:null;(f!==null?f.type!==0:d||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(W(s,a,f,d)&&(a=null),d||f===null?R(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):f.mustUseProperty?r[f.propertyName]=a===null?f.type===3?!1:"":a:(s=f.attributeName,d=f.attributeNamespace,a===null?r.removeAttribute(s):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,d?r.setAttributeNS(d,s,a):r.setAttribute(s,a))))}var re=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ae=Symbol.for("react.element"),ce=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),O=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),tt=Symbol.for("react.suspense_list"),Dt=Symbol.for("react.memo"),Ot=Symbol.for("react.lazy"),Be=Symbol.for("react.offscreen"),ie=Symbol.iterator;function ge(r){return r===null||typeof r!="object"?null:(r=ie&&r[ie]||r["@@iterator"],typeof r=="function"?r:null)}var oe=Object.assign,V;function q(r){if(V===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||""}return`
`+V+r}var pe=!1;function xe(r,s){if(!r||pe)return"";pe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(z){var d=z}Reflect.construct(r,[],s)}else{try{s.call()}catch(z){d=z}r.call(s.prototype)}else{try{throw Error()}catch(z){d=z}r()}}catch(z){if(z&&d&&typeof z.stack=="string"){for(var f=z.stack.split(`
`),g=d.stack.split(`
`),w=f.length-1,A=g.length-1;1<=w&&0<=A&&f[w]!==g[A];)A--;for(;1<=w&&0<=A;w--,A--)if(f[w]!==g[A]){if(w!==1||A!==1)do if(w--,A--,0>A||f[w]!==g[A]){var P=`
`+f[w].replace(" at new "," at ");return r.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",r.displayName)),P}while(1<=w&&0<=A);break}}}finally{pe=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?q(r):""}function Ae(r){switch(r.tag){case 5:return q(r.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return r=xe(r.type,!1),r;case 11:return r=xe(r.type.render,!1),r;case 1:return r=xe(r.type,!0),r;default:return""}}function Ne(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case k:return"Fragment";case ce:return"Portal";case x:return"Profiler";case S:return"StrictMode";case C:return"Suspense";case tt:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case O:return(r.displayName||"Context")+".Consumer";case N:return(r._context.displayName||"Context")+".Provider";case M:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Dt:return s=r.displayName||null,s!==null?s:Ne(r.type)||"Memo";case Ot:s=r._payload,r=r._init;try{return Ne(r(s))}catch{}}return null}function Me(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function je(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function $e(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function yt(r){var s=$e(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),d=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(w){d=""+w,g.call(this,w)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return d},setValue:function(w){d=""+w},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function hr(r){r._valueTracker||(r._valueTracker=yt(r))}function Rs(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),d="";return r&&(d=$e(r)?r.checked?"true":"false":r.value),r=d,r!==a?(s.setValue(r),!0):!1}function zr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function bi(r,s){var a=s.checked;return oe({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Cs(r,s){var a=s.defaultValue==null?"":s.defaultValue,d=s.checked!=null?s.checked:s.defaultChecked;a=je(s.value!=null?s.value:a),r._wrapperState={initialChecked:d,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Ho(r,s){s=s.checked,s!=null&&te(r,"checked",s,!1)}function Ko(r,s){Ho(r,s);var a=je(s.value),d=s.type;if(a!=null)d==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(d==="submit"||d==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?ks(r,s.type,a):s.hasOwnProperty("defaultValue")&&ks(r,s.type,je(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Pl(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var d=s.type;if(!(d!=="submit"&&d!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function ks(r,s,a){(s!=="number"||zr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var fr=Array.isArray;function pr(r,s,a,d){if(r=r.options,s){s={};for(var f=0;f<a.length;f++)s["$"+a[f]]=!0;for(a=0;a<r.length;a++)f=s.hasOwnProperty("$"+r[a].value),r[a].selected!==f&&(r[a].selected=f),f&&d&&(r[a].defaultSelected=!0)}else{for(a=""+je(a),s=null,f=0;f<r.length;f++){if(r[f].value===a){r[f].selected=!0,d&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function Go(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Ps(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(fr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:je(a)}}function Ns(r,s){var a=je(s.value),d=je(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),d!=null&&(r.defaultValue=""+d)}function Qo(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function ut(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ct(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?ut(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var mr,Yo=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,d,f){MSApp.execUnsafeLocalFunction(function(){return r(s,a,d,f)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(mr=mr||document.createElement("div"),mr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=mr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function $r(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var Di={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oi=["Webkit","ms","Moz","O"];Object.keys(Di).forEach(function(r){Oi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Di[s]=Di[r]})});function Xo(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Di.hasOwnProperty(r)&&Di[r]?(""+s).trim():s+"px"}function Jo(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var d=a.indexOf("--")===0,f=Xo(a,s[a],d);a==="float"&&(a="cssFloat"),d?r.setProperty(a,f):r[a]=f}}var Zo=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ea(r,s){if(s){if(Zo[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function ta(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Li=null;function bs(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Ds=null,pn=null,Kn=null;function Os(r){if(r=xa(r)){if(typeof Ds!="function")throw Error(t(280));var s=r.stateNode;s&&(s=ou(s),Ds(r.stateNode,r.type,s))}}function Gn(r){pn?Kn?Kn.push(r):Kn=[r]:pn=r}function na(){if(pn){var r=pn,s=Kn;if(Kn=pn=null,Os(r),s)for(r=0;r<s.length;r++)Os(s[r])}}function Vi(r,s){return r(s)}function ra(){}var gr=!1;function ia(r,s,a){if(gr)return r(s,a);gr=!0;try{return Vi(r,s,a)}finally{gr=!1,(pn!==null||Kn!==null)&&(ra(),na())}}function nt(r,s){var a=r.stateNode;if(a===null)return null;var d=ou(a);if(d===null)return null;a=d[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(r=r.type,d=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!d;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Ls=!1;if(h)try{var An={};Object.defineProperty(An,"passive",{get:function(){Ls=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{Ls=!1}function Mi(r,s,a,d,f,g,w,A,P){var z=Array.prototype.slice.call(arguments,3);try{s.apply(a,z)}catch(G){this.onError(G)}}var ji=!1,Vs=null,Rn=!1,sa=null,hd={onError:function(r){ji=!0,Vs=r}};function Ms(r,s,a,d,f,g,w,A,P){ji=!1,Vs=null,Mi.apply(hd,arguments)}function Nl(r,s,a,d,f,g,w,A,P){if(Ms.apply(this,arguments),ji){if(ji){var z=Vs;ji=!1,Vs=null}else throw Error(t(198));Rn||(Rn=!0,sa=z)}}function Cn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function Fi(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function kn(r){if(Cn(r)!==r)throw Error(t(188))}function bl(r){var s=r.alternate;if(!s){if(s=Cn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,d=s;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(d=f.return,d!==null){a=d;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return kn(f),r;if(g===d)return kn(f),s;g=g.sibling}throw Error(t(188))}if(a.return!==d.return)a=f,d=g;else{for(var w=!1,A=f.child;A;){if(A===a){w=!0,a=f,d=g;break}if(A===d){w=!0,d=f,a=g;break}A=A.sibling}if(!w){for(A=g.child;A;){if(A===a){w=!0,a=g,d=f;break}if(A===d){w=!0,d=g,a=f;break}A=A.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==d)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function oa(r){return r=bl(r),r!==null?js(r):null}function js(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=js(r);if(s!==null)return s;r=r.sibling}return null}var Fs=e.unstable_scheduleCallback,aa=e.unstable_cancelCallback,Dl=e.unstable_shouldYield,fd=e.unstable_requestPaint,We=e.unstable_now,Ol=e.unstable_getCurrentPriorityLevel,Ui=e.unstable_ImmediatePriority,Wr=e.unstable_UserBlockingPriority,mn=e.unstable_NormalPriority,la=e.unstable_LowPriority,Ll=e.unstable_IdlePriority,Bi=null,rn=null;function Vl(r){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Bi,r,void 0,(r.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:jl,ua=Math.log,Ml=Math.LN2;function jl(r){return r>>>=0,r===0?32:31-(ua(r)/Ml|0)|0}var Us=64,Bs=4194304;function qr(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function zi(r,s){var a=r.pendingLanes;if(a===0)return 0;var d=0,f=r.suspendedLanes,g=r.pingedLanes,w=a&268435455;if(w!==0){var A=w&~f;A!==0?d=qr(A):(g&=w,g!==0&&(d=qr(g)))}else w=a&~f,w!==0?d=qr(w):g!==0&&(d=qr(g));if(d===0)return 0;if(s!==0&&s!==d&&(s&f)===0&&(f=d&-d,g=s&-s,f>=g||f===16&&(g&4194240)!==0))return s;if((d&4)!==0&&(d|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=d;0<s;)a=31-$t(s),f=1<<a,d|=r[a],s&=~f;return d}function pd(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yr(r,s){for(var a=r.suspendedLanes,d=r.pingedLanes,f=r.expirationTimes,g=r.pendingLanes;0<g;){var w=31-$t(g),A=1<<w,P=f[w];P===-1?((A&a)===0||(A&d)!==0)&&(f[w]=pd(A,s)):P<=s&&(r.expiredLanes|=A),g&=~A}}function sn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function $i(){var r=Us;return Us<<=1,(Us&4194240)===0&&(Us=64),r}function Hr(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function Kr(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-$t(s),r[s]=a}function ze(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var d=r.eventTimes;for(r=r.expirationTimes;0<a;){var f=31-$t(a),g=1<<f;s[f]=0,d[f]=-1,r[f]=-1,a&=~g}}function Gr(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var d=31-$t(a),f=1<<d;f&s|r[d]&s&&(r[d]|=s),a&=~f}}var ke=0;function Qr(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Fl,zs,Ul,Bl,zl,ca=!1,Qn=[],It=null,Pn=null,Nn=null,Yr=new Map,gn=new Map,Yn=[],md="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $l(r,s){switch(r){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":Yr.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":gn.delete(s.pointerId)}}function Kt(r,s,a,d,f,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:d,nativeEvent:g,targetContainers:[f]},s!==null&&(s=xa(s),s!==null&&zs(s)),r):(r.eventSystemFlags|=d,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function gd(r,s,a,d,f){switch(s){case"focusin":return It=Kt(It,r,s,a,d,f),!0;case"dragenter":return Pn=Kt(Pn,r,s,a,d,f),!0;case"mouseover":return Nn=Kt(Nn,r,s,a,d,f),!0;case"pointerover":var g=f.pointerId;return Yr.set(g,Kt(Yr.get(g)||null,r,s,a,d,f)),!0;case"gotpointercapture":return g=f.pointerId,gn.set(g,Kt(gn.get(g)||null,r,s,a,d,f)),!0}return!1}function Wl(r){var s=Gi(r.target);if(s!==null){var a=Cn(s);if(a!==null){if(s=a.tag,s===13){if(s=Fi(a),s!==null){r.blockedOn=s,zl(r.priority,function(){Ul(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function vr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=$s(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var d=new a.constructor(a.type,a);Li=d,a.target.dispatchEvent(d),Li=null}else return s=xa(a),s!==null&&zs(s),r.blockedOn=a,!1;s.shift()}return!0}function Wi(r,s,a){vr(r)&&a.delete(s)}function ql(){ca=!1,It!==null&&vr(It)&&(It=null),Pn!==null&&vr(Pn)&&(Pn=null),Nn!==null&&vr(Nn)&&(Nn=null),Yr.forEach(Wi),gn.forEach(Wi)}function bn(r,s){r.blockedOn===s&&(r.blockedOn=null,ca||(ca=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ql)))}function Dn(r){function s(f){return bn(f,r)}if(0<Qn.length){bn(Qn[0],r);for(var a=1;a<Qn.length;a++){var d=Qn[a];d.blockedOn===r&&(d.blockedOn=null)}}for(It!==null&&bn(It,r),Pn!==null&&bn(Pn,r),Nn!==null&&bn(Nn,r),Yr.forEach(s),gn.forEach(s),a=0;a<Yn.length;a++)d=Yn[a],d.blockedOn===r&&(d.blockedOn=null);for(;0<Yn.length&&(a=Yn[0],a.blockedOn===null);)Wl(a),a.blockedOn===null&&Yn.shift()}var _r=re.ReactCurrentBatchConfig,Xr=!0;function Ge(r,s,a,d){var f=ke,g=_r.transition;_r.transition=null;try{ke=1,da(r,s,a,d)}finally{ke=f,_r.transition=g}}function yd(r,s,a,d){var f=ke,g=_r.transition;_r.transition=null;try{ke=4,da(r,s,a,d)}finally{ke=f,_r.transition=g}}function da(r,s,a,d){if(Xr){var f=$s(r,s,a,d);if(f===null)Cd(r,s,d,qi,a),$l(r,d);else if(gd(f,r,s,a,d))d.stopPropagation();else if($l(r,d),s&4&&-1<md.indexOf(r)){for(;f!==null;){var g=xa(f);if(g!==null&&Fl(g),g=$s(r,s,a,d),g===null&&Cd(r,s,d,qi,a),g===f)break;f=g}f!==null&&d.stopPropagation()}else Cd(r,s,d,null,a)}}var qi=null;function $s(r,s,a,d){if(qi=null,r=bs(d),r=Gi(r),r!==null)if(s=Cn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=Fi(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return qi=r,null}function ha(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ol()){case Ui:return 1;case Wr:return 4;case mn:case la:return 16;case Ll:return 536870912;default:return 16}default:return 16}}var on=null,Ws=null,Gt=null;function fa(){if(Gt)return Gt;var r,s=Ws,a=s.length,d,f="value"in on?on.value:on.textContent,g=f.length;for(r=0;r<a&&s[r]===f[r];r++);var w=a-r;for(d=1;d<=w&&s[a-d]===f[g-d];d++);return Gt=f.slice(r,1<d?1-d:void 0)}function qs(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Xn(){return!0}function pa(){return!1}function St(r){function s(a,d,f,g,w){this._reactName=a,this._targetInst=f,this.type=d,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var A in r)r.hasOwnProperty(A)&&(a=r[A],this[A]=a?a(g):g[A]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Xn:pa,this.isPropagationStopped=pa,this}return oe(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xn)},persist:function(){},isPersistent:Xn}),s}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hs=St(On),Jn=oe({},On,{view:0,detail:0}),vd=St(Jn),Ks,wr,Jr,Hi=oe({},Jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zn,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Jr&&(Jr&&r.type==="mousemove"?(Ks=r.screenX-Jr.screenX,wr=r.screenY-Jr.screenY):wr=Ks=0,Jr=r),Ks)},movementY:function(r){return"movementY"in r?r.movementY:wr}}),Gs=St(Hi),ma=oe({},Hi,{dataTransfer:0}),Hl=St(ma),Qs=oe({},Jn,{relatedTarget:0}),Ys=St(Qs),Kl=oe({},On,{animationName:0,elapsedTime:0,pseudoElement:0}),Er=St(Kl),Gl=oe({},On,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Ql=St(Gl),Yl=oe({},On,{data:0}),ga=St(Yl),Xs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jl(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=Xl[r])?!!s[r]:!1}function Zn(){return Jl}var u=oe({},Jn,{key:function(r){if(r.key){var s=Xs[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=qs(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Wt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zn,charCode:function(r){return r.type==="keypress"?qs(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?qs(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=St(u),v=oe({},Hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),T=St(v),j=oe({},Jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zn}),$=St(j),ne=oe({},On,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fe=St(ne),dt=oe({},Hi,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),be=St(dt),vt=[9,13,27,32],ot=h&&"CompositionEvent"in window,yn=null;h&&"documentMode"in document&&(yn=document.documentMode);var an=h&&"TextEvent"in window&&!yn,Ki=h&&(!ot||yn&&8<yn&&11>=yn),Js=" ",Gp=!1;function Qp(r,s){switch(r){case"keyup":return vt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yp(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Zs=!1;function uE(r,s){switch(r){case"compositionend":return Yp(s);case"keypress":return s.which!==32?null:(Gp=!0,Js);case"textInput":return r=s.data,r===Js&&Gp?null:r;default:return null}}function cE(r,s){if(Zs)return r==="compositionend"||!ot&&Qp(r,s)?(r=fa(),Gt=Ws=on=null,Zs=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Ki&&s.locale!=="ko"?null:s.data;default:return null}}var dE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!dE[r.type]:s==="textarea"}function Jp(r,s,a,d){Gn(d),s=ru(s,"onChange"),0<s.length&&(a=new Hs("onChange","change",null,a,d),r.push({event:a,listeners:s}))}var ya=null,va=null;function hE(r){gm(r,0)}function Zl(r){var s=io(r);if(Rs(s))return r}function fE(r,s){if(r==="change")return s}var Zp=!1;if(h){var _d;if(h){var wd="oninput"in document;if(!wd){var em=document.createElement("div");em.setAttribute("oninput","return;"),wd=typeof em.oninput=="function"}_d=wd}else _d=!1;Zp=_d&&(!document.documentMode||9<document.documentMode)}function tm(){ya&&(ya.detachEvent("onpropertychange",nm),va=ya=null)}function nm(r){if(r.propertyName==="value"&&Zl(va)){var s=[];Jp(s,va,r,bs(r)),ia(hE,s)}}function pE(r,s,a){r==="focusin"?(tm(),ya=s,va=a,ya.attachEvent("onpropertychange",nm)):r==="focusout"&&tm()}function mE(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Zl(va)}function gE(r,s){if(r==="click")return Zl(s)}function yE(r,s){if(r==="input"||r==="change")return Zl(s)}function vE(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Ln=typeof Object.is=="function"?Object.is:vE;function _a(r,s){if(Ln(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),d=Object.keys(s);if(a.length!==d.length)return!1;for(d=0;d<a.length;d++){var f=a[d];if(!p.call(s,f)||!Ln(r[f],s[f]))return!1}return!0}function rm(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function im(r,s){var a=rm(r);r=0;for(var d;a;){if(a.nodeType===3){if(d=r+a.textContent.length,r<=s&&d>=s)return{node:a,offset:s-r};r=d}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=rm(a)}}function sm(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?sm(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function om(){for(var r=window,s=zr();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=zr(r.document)}return s}function Ed(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function _E(r){var s=om(),a=r.focusedElem,d=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&sm(a.ownerDocument.documentElement,a)){if(d!==null&&Ed(a)){if(s=d.start,r=d.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var f=a.textContent.length,g=Math.min(d.start,f);d=d.end===void 0?g:Math.min(d.end,f),!r.extend&&g>d&&(f=d,d=g,g=f),f=im(a,g);var w=im(a,d);f&&w&&(r.rangeCount!==1||r.anchorNode!==f.node||r.anchorOffset!==f.offset||r.focusNode!==w.node||r.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),r.removeAllRanges(),g>d?(r.addRange(s),r.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var wE=h&&"documentMode"in document&&11>=document.documentMode,eo=null,Td=null,wa=null,Id=!1;function am(r,s,a){var d=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Id||eo==null||eo!==zr(d)||(d=eo,"selectionStart"in d&&Ed(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),wa&&_a(wa,d)||(wa=d,d=ru(Td,"onSelect"),0<d.length&&(s=new Hs("onSelect","select",null,s,a),r.push({event:s,listeners:d}),s.target=eo)))}function eu(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var to={animationend:eu("Animation","AnimationEnd"),animationiteration:eu("Animation","AnimationIteration"),animationstart:eu("Animation","AnimationStart"),transitionend:eu("Transition","TransitionEnd")},Sd={},lm={};h&&(lm=document.createElement("div").style,"AnimationEvent"in window||(delete to.animationend.animation,delete to.animationiteration.animation,delete to.animationstart.animation),"TransitionEvent"in window||delete to.transitionend.transition);function tu(r){if(Sd[r])return Sd[r];if(!to[r])return r;var s=to[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in lm)return Sd[r]=s[a];return r}var um=tu("animationend"),cm=tu("animationiteration"),dm=tu("animationstart"),hm=tu("transitionend"),fm=new Map,pm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zr(r,s){fm.set(r,s),l(s,[r])}for(var xd=0;xd<pm.length;xd++){var Ad=pm[xd],EE=Ad.toLowerCase(),TE=Ad[0].toUpperCase()+Ad.slice(1);Zr(EE,"on"+TE)}Zr(um,"onAnimationEnd"),Zr(cm,"onAnimationIteration"),Zr(dm,"onAnimationStart"),Zr("dblclick","onDoubleClick"),Zr("focusin","onFocus"),Zr("focusout","onBlur"),Zr(hm,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),IE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ea));function mm(r,s,a){var d=r.type||"unknown-event";r.currentTarget=a,Nl(d,s,void 0,r),r.currentTarget=null}function gm(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var d=r[a],f=d.event;d=d.listeners;e:{var g=void 0;if(s)for(var w=d.length-1;0<=w;w--){var A=d[w],P=A.instance,z=A.currentTarget;if(A=A.listener,P!==g&&f.isPropagationStopped())break e;mm(f,A,z),g=P}else for(w=0;w<d.length;w++){if(A=d[w],P=A.instance,z=A.currentTarget,A=A.listener,P!==g&&f.isPropagationStopped())break e;mm(f,A,z),g=P}}}if(Rn)throw r=sa,Rn=!1,sa=null,r}function He(r,s){var a=s[Od];a===void 0&&(a=s[Od]=new Set);var d=r+"__bubble";a.has(d)||(ym(s,r,2,!1),a.add(d))}function Rd(r,s,a){var d=0;s&&(d|=4),ym(a,r,d,s)}var nu="_reactListening"+Math.random().toString(36).slice(2);function Ta(r){if(!r[nu]){r[nu]=!0,i.forEach(function(a){a!=="selectionchange"&&(IE.has(a)||Rd(a,!1,r),Rd(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[nu]||(s[nu]=!0,Rd("selectionchange",!1,s))}}function ym(r,s,a,d){switch(ha(s)){case 1:var f=Ge;break;case 4:f=yd;break;default:f=da}a=f.bind(null,s,a,r),f=void 0,!Ls||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),d?f!==void 0?r.addEventListener(s,a,{capture:!0,passive:f}):r.addEventListener(s,a,!0):f!==void 0?r.addEventListener(s,a,{passive:f}):r.addEventListener(s,a,!1)}function Cd(r,s,a,d,f){var g=d;if((s&1)===0&&(s&2)===0&&d!==null)e:for(;;){if(d===null)return;var w=d.tag;if(w===3||w===4){var A=d.stateNode.containerInfo;if(A===f||A.nodeType===8&&A.parentNode===f)break;if(w===4)for(w=d.return;w!==null;){var P=w.tag;if((P===3||P===4)&&(P=w.stateNode.containerInfo,P===f||P.nodeType===8&&P.parentNode===f))return;w=w.return}for(;A!==null;){if(w=Gi(A),w===null)return;if(P=w.tag,P===5||P===6){d=g=w;continue e}A=A.parentNode}}d=d.return}ia(function(){var z=g,G=bs(a),J=[];e:{var H=fm.get(r);if(H!==void 0){var se=Hs,ue=r;switch(r){case"keypress":if(qs(a)===0)break e;case"keydown":case"keyup":se=m;break;case"focusin":ue="focus",se=Ys;break;case"focusout":ue="blur",se=Ys;break;case"beforeblur":case"afterblur":se=Ys;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Gs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Hl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=$;break;case um:case cm:case dm:se=Er;break;case hm:se=Fe;break;case"scroll":se=vd;break;case"wheel":se=be;break;case"copy":case"cut":case"paste":se=Ql;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=T}var de=(s&4)!==0,rt=!de&&r==="scroll",F=de?H!==null?H+"Capture":null:H;de=[];for(var D=z,U;D!==null;){U=D;var Z=U.stateNode;if(U.tag===5&&Z!==null&&(U=Z,F!==null&&(Z=nt(D,F),Z!=null&&de.push(Ia(D,Z,U)))),rt)break;D=D.return}0<de.length&&(H=new se(H,ue,null,a,G),J.push({event:H,listeners:de}))}}if((s&7)===0){e:{if(H=r==="mouseover"||r==="pointerover",se=r==="mouseout"||r==="pointerout",H&&a!==Li&&(ue=a.relatedTarget||a.fromElement)&&(Gi(ue)||ue[Tr]))break e;if((se||H)&&(H=G.window===G?G:(H=G.ownerDocument)?H.defaultView||H.parentWindow:window,se?(ue=a.relatedTarget||a.toElement,se=z,ue=ue?Gi(ue):null,ue!==null&&(rt=Cn(ue),ue!==rt||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(se=null,ue=z),se!==ue)){if(de=Gs,Z="onMouseLeave",F="onMouseEnter",D="mouse",(r==="pointerout"||r==="pointerover")&&(de=T,Z="onPointerLeave",F="onPointerEnter",D="pointer"),rt=se==null?H:io(se),U=ue==null?H:io(ue),H=new de(Z,D+"leave",se,a,G),H.target=rt,H.relatedTarget=U,Z=null,Gi(G)===z&&(de=new de(F,D+"enter",ue,a,G),de.target=U,de.relatedTarget=rt,Z=de),rt=Z,se&&ue)t:{for(de=se,F=ue,D=0,U=de;U;U=no(U))D++;for(U=0,Z=F;Z;Z=no(Z))U++;for(;0<D-U;)de=no(de),D--;for(;0<U-D;)F=no(F),U--;for(;D--;){if(de===F||F!==null&&de===F.alternate)break t;de=no(de),F=no(F)}de=null}else de=null;se!==null&&vm(J,H,se,de,!1),ue!==null&&rt!==null&&vm(J,rt,ue,de,!0)}}e:{if(H=z?io(z):window,se=H.nodeName&&H.nodeName.toLowerCase(),se==="select"||se==="input"&&H.type==="file")var fe=fE;else if(Xp(H))if(Zp)fe=yE;else{fe=mE;var ye=pE}else(se=H.nodeName)&&se.toLowerCase()==="input"&&(H.type==="checkbox"||H.type==="radio")&&(fe=gE);if(fe&&(fe=fe(r,z))){Jp(J,fe,a,G);break e}ye&&ye(r,H,z),r==="focusout"&&(ye=H._wrapperState)&&ye.controlled&&H.type==="number"&&ks(H,"number",H.value)}switch(ye=z?io(z):window,r){case"focusin":(Xp(ye)||ye.contentEditable==="true")&&(eo=ye,Td=z,wa=null);break;case"focusout":wa=Td=eo=null;break;case"mousedown":Id=!0;break;case"contextmenu":case"mouseup":case"dragend":Id=!1,am(J,a,G);break;case"selectionchange":if(wE)break;case"keydown":case"keyup":am(J,a,G)}var ve;if(ot)e:{switch(r){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Zs?Qp(r,a)&&(Ee="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(Ki&&a.locale!=="ko"&&(Zs||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Zs&&(ve=fa()):(on=G,Ws="value"in on?on.value:on.textContent,Zs=!0)),ye=ru(z,Ee),0<ye.length&&(Ee=new ga(Ee,r,null,a,G),J.push({event:Ee,listeners:ye}),ve?Ee.data=ve:(ve=Yp(a),ve!==null&&(Ee.data=ve)))),(ve=an?uE(r,a):cE(r,a))&&(z=ru(z,"onBeforeInput"),0<z.length&&(G=new ga("onBeforeInput","beforeinput",null,a,G),J.push({event:G,listeners:z}),G.data=ve))}gm(J,s)})}function Ia(r,s,a){return{instance:r,listener:s,currentTarget:a}}function ru(r,s){for(var a=s+"Capture",d=[];r!==null;){var f=r,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=nt(r,a),g!=null&&d.unshift(Ia(r,g,f)),g=nt(r,s),g!=null&&d.push(Ia(r,g,f))),r=r.return}return d}function no(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function vm(r,s,a,d,f){for(var g=s._reactName,w=[];a!==null&&a!==d;){var A=a,P=A.alternate,z=A.stateNode;if(P!==null&&P===d)break;A.tag===5&&z!==null&&(A=z,f?(P=nt(a,g),P!=null&&w.unshift(Ia(a,P,A))):f||(P=nt(a,g),P!=null&&w.push(Ia(a,P,A)))),a=a.return}w.length!==0&&r.push({event:s,listeners:w})}var SE=/\r\n?/g,xE=/\u0000|\uFFFD/g;function _m(r){return(typeof r=="string"?r:""+r).replace(SE,`
`).replace(xE,"")}function iu(r,s,a){if(s=_m(s),_m(r)!==s&&a)throw Error(t(425))}function su(){}var kd=null,Pd=null;function Nd(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var bd=typeof setTimeout=="function"?setTimeout:void 0,AE=typeof clearTimeout=="function"?clearTimeout:void 0,wm=typeof Promise=="function"?Promise:void 0,RE=typeof queueMicrotask=="function"?queueMicrotask:typeof wm<"u"?function(r){return wm.resolve(null).then(r).catch(CE)}:bd;function CE(r){setTimeout(function(){throw r})}function Dd(r,s){var a=s,d=0;do{var f=a.nextSibling;if(r.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(d===0){r.removeChild(f),Dn(s);return}d--}else a!=="$"&&a!=="$?"&&a!=="$!"||d++;a=f}while(a);Dn(s)}function ei(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Em(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var ro=Math.random().toString(36).slice(2),er="__reactFiber$"+ro,Sa="__reactProps$"+ro,Tr="__reactContainer$"+ro,Od="__reactEvents$"+ro,kE="__reactListeners$"+ro,PE="__reactHandles$"+ro;function Gi(r){var s=r[er];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Tr]||a[er]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=Em(r);r!==null;){if(a=r[er])return a;r=Em(r)}return s}r=a,a=r.parentNode}return null}function xa(r){return r=r[er]||r[Tr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function io(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function ou(r){return r[Sa]||null}var Ld=[],so=-1;function ti(r){return{current:r}}function Ke(r){0>so||(r.current=Ld[so],Ld[so]=null,so--)}function qe(r,s){so++,Ld[so]=r.current,r.current=s}var ni={},Lt=ti(ni),Qt=ti(!1),Qi=ni;function oo(r,s){var a=r.type.contextTypes;if(!a)return ni;var d=r.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===s)return d.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=s[g];return d&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=f),f}function Yt(r){return r=r.childContextTypes,r!=null}function au(){Ke(Qt),Ke(Lt)}function Tm(r,s,a){if(Lt.current!==ni)throw Error(t(168));qe(Lt,s),qe(Qt,a)}function Im(r,s,a){var d=r.stateNode;if(s=s.childContextTypes,typeof d.getChildContext!="function")return a;d=d.getChildContext();for(var f in d)if(!(f in s))throw Error(t(108,Me(r)||"Unknown",f));return oe({},a,d)}function lu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||ni,Qi=Lt.current,qe(Lt,r),qe(Qt,Qt.current),!0}function Sm(r,s,a){var d=r.stateNode;if(!d)throw Error(t(169));a?(r=Im(r,s,Qi),d.__reactInternalMemoizedMergedChildContext=r,Ke(Qt),Ke(Lt),qe(Lt,r)):Ke(Qt),qe(Qt,a)}var Ir=null,uu=!1,Vd=!1;function xm(r){Ir===null?Ir=[r]:Ir.push(r)}function NE(r){uu=!0,xm(r)}function ri(){if(!Vd&&Ir!==null){Vd=!0;var r=0,s=ke;try{var a=Ir;for(ke=1;r<a.length;r++){var d=a[r];do d=d(!0);while(d!==null)}Ir=null,uu=!1}catch(f){throw Ir!==null&&(Ir=Ir.slice(r+1)),Fs(Ui,ri),f}finally{ke=s,Vd=!1}}return null}var ao=[],lo=0,cu=null,du=0,vn=[],_n=0,Yi=null,Sr=1,xr="";function Xi(r,s){ao[lo++]=du,ao[lo++]=cu,cu=r,du=s}function Am(r,s,a){vn[_n++]=Sr,vn[_n++]=xr,vn[_n++]=Yi,Yi=r;var d=Sr;r=xr;var f=32-$t(d)-1;d&=~(1<<f),a+=1;var g=32-$t(s)+f;if(30<g){var w=f-f%5;g=(d&(1<<w)-1).toString(32),d>>=w,f-=w,Sr=1<<32-$t(s)+f|a<<f|d,xr=g+r}else Sr=1<<g|a<<f|d,xr=r}function Md(r){r.return!==null&&(Xi(r,1),Am(r,1,0))}function jd(r){for(;r===cu;)cu=ao[--lo],ao[lo]=null,du=ao[--lo],ao[lo]=null;for(;r===Yi;)Yi=vn[--_n],vn[_n]=null,xr=vn[--_n],vn[_n]=null,Sr=vn[--_n],vn[_n]=null}var ln=null,un=null,Qe=!1,Vn=null;function Rm(r,s){var a=In(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function Cm(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,ln=r,un=ei(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,ln=r,un=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Yi!==null?{id:Sr,overflow:xr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=In(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,ln=r,un=null,!0):!1;default:return!1}}function Fd(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Ud(r){if(Qe){var s=un;if(s){var a=s;if(!Cm(r,s)){if(Fd(r))throw Error(t(418));s=ei(a.nextSibling);var d=ln;s&&Cm(r,s)?Rm(d,a):(r.flags=r.flags&-4097|2,Qe=!1,ln=r)}}else{if(Fd(r))throw Error(t(418));r.flags=r.flags&-4097|2,Qe=!1,ln=r}}}function km(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;ln=r}function hu(r){if(r!==ln)return!1;if(!Qe)return km(r),Qe=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Nd(r.type,r.memoizedProps)),s&&(s=un)){if(Fd(r))throw Pm(),Error(t(418));for(;s;)Rm(r,s),s=ei(s.nextSibling)}if(km(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){un=ei(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}un=null}}else un=ln?ei(r.stateNode.nextSibling):null;return!0}function Pm(){for(var r=un;r;)r=ei(r.nextSibling)}function uo(){un=ln=null,Qe=!1}function Bd(r){Vn===null?Vn=[r]:Vn.push(r)}var bE=re.ReactCurrentBatchConfig;function Aa(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var d=a.stateNode}if(!d)throw Error(t(147,r));var f=d,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(w){var A=f.refs;w===null?delete A[g]:A[g]=w},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function fu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Nm(r){var s=r._init;return s(r._payload)}function bm(r){function s(F,D){if(r){var U=F.deletions;U===null?(F.deletions=[D],F.flags|=16):U.push(D)}}function a(F,D){if(!r)return null;for(;D!==null;)s(F,D),D=D.sibling;return null}function d(F,D){for(F=new Map;D!==null;)D.key!==null?F.set(D.key,D):F.set(D.index,D),D=D.sibling;return F}function f(F,D){return F=di(F,D),F.index=0,F.sibling=null,F}function g(F,D,U){return F.index=U,r?(U=F.alternate,U!==null?(U=U.index,U<D?(F.flags|=2,D):U):(F.flags|=2,D)):(F.flags|=1048576,D)}function w(F){return r&&F.alternate===null&&(F.flags|=2),F}function A(F,D,U,Z){return D===null||D.tag!==6?(D=bh(U,F.mode,Z),D.return=F,D):(D=f(D,U),D.return=F,D)}function P(F,D,U,Z){var fe=U.type;return fe===k?G(F,D,U.props.children,Z,U.key):D!==null&&(D.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===Ot&&Nm(fe)===D.type)?(Z=f(D,U.props),Z.ref=Aa(F,D,U),Z.return=F,Z):(Z=Mu(U.type,U.key,U.props,null,F.mode,Z),Z.ref=Aa(F,D,U),Z.return=F,Z)}function z(F,D,U,Z){return D===null||D.tag!==4||D.stateNode.containerInfo!==U.containerInfo||D.stateNode.implementation!==U.implementation?(D=Dh(U,F.mode,Z),D.return=F,D):(D=f(D,U.children||[]),D.return=F,D)}function G(F,D,U,Z,fe){return D===null||D.tag!==7?(D=ss(U,F.mode,Z,fe),D.return=F,D):(D=f(D,U),D.return=F,D)}function J(F,D,U){if(typeof D=="string"&&D!==""||typeof D=="number")return D=bh(""+D,F.mode,U),D.return=F,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case ae:return U=Mu(D.type,D.key,D.props,null,F.mode,U),U.ref=Aa(F,null,D),U.return=F,U;case ce:return D=Dh(D,F.mode,U),D.return=F,D;case Ot:var Z=D._init;return J(F,Z(D._payload),U)}if(fr(D)||ge(D))return D=ss(D,F.mode,U,null),D.return=F,D;fu(F,D)}return null}function H(F,D,U,Z){var fe=D!==null?D.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return fe!==null?null:A(F,D,""+U,Z);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case ae:return U.key===fe?P(F,D,U,Z):null;case ce:return U.key===fe?z(F,D,U,Z):null;case Ot:return fe=U._init,H(F,D,fe(U._payload),Z)}if(fr(U)||ge(U))return fe!==null?null:G(F,D,U,Z,null);fu(F,U)}return null}function se(F,D,U,Z,fe){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return F=F.get(U)||null,A(D,F,""+Z,fe);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case ae:return F=F.get(Z.key===null?U:Z.key)||null,P(D,F,Z,fe);case ce:return F=F.get(Z.key===null?U:Z.key)||null,z(D,F,Z,fe);case Ot:var ye=Z._init;return se(F,D,U,ye(Z._payload),fe)}if(fr(Z)||ge(Z))return F=F.get(U)||null,G(D,F,Z,fe,null);fu(D,Z)}return null}function ue(F,D,U,Z){for(var fe=null,ye=null,ve=D,Ee=D=0,Et=null;ve!==null&&Ee<U.length;Ee++){ve.index>Ee?(Et=ve,ve=null):Et=ve.sibling;var Le=H(F,ve,U[Ee],Z);if(Le===null){ve===null&&(ve=Et);break}r&&ve&&Le.alternate===null&&s(F,ve),D=g(Le,D,Ee),ye===null?fe=Le:ye.sibling=Le,ye=Le,ve=Et}if(Ee===U.length)return a(F,ve),Qe&&Xi(F,Ee),fe;if(ve===null){for(;Ee<U.length;Ee++)ve=J(F,U[Ee],Z),ve!==null&&(D=g(ve,D,Ee),ye===null?fe=ve:ye.sibling=ve,ye=ve);return Qe&&Xi(F,Ee),fe}for(ve=d(F,ve);Ee<U.length;Ee++)Et=se(ve,F,Ee,U[Ee],Z),Et!==null&&(r&&Et.alternate!==null&&ve.delete(Et.key===null?Ee:Et.key),D=g(Et,D,Ee),ye===null?fe=Et:ye.sibling=Et,ye=Et);return r&&ve.forEach(function(hi){return s(F,hi)}),Qe&&Xi(F,Ee),fe}function de(F,D,U,Z){var fe=ge(U);if(typeof fe!="function")throw Error(t(150));if(U=fe.call(U),U==null)throw Error(t(151));for(var ye=fe=null,ve=D,Ee=D=0,Et=null,Le=U.next();ve!==null&&!Le.done;Ee++,Le=U.next()){ve.index>Ee?(Et=ve,ve=null):Et=ve.sibling;var hi=H(F,ve,Le.value,Z);if(hi===null){ve===null&&(ve=Et);break}r&&ve&&hi.alternate===null&&s(F,ve),D=g(hi,D,Ee),ye===null?fe=hi:ye.sibling=hi,ye=hi,ve=Et}if(Le.done)return a(F,ve),Qe&&Xi(F,Ee),fe;if(ve===null){for(;!Le.done;Ee++,Le=U.next())Le=J(F,Le.value,Z),Le!==null&&(D=g(Le,D,Ee),ye===null?fe=Le:ye.sibling=Le,ye=Le);return Qe&&Xi(F,Ee),fe}for(ve=d(F,ve);!Le.done;Ee++,Le=U.next())Le=se(ve,F,Ee,Le.value,Z),Le!==null&&(r&&Le.alternate!==null&&ve.delete(Le.key===null?Ee:Le.key),D=g(Le,D,Ee),ye===null?fe=Le:ye.sibling=Le,ye=Le);return r&&ve.forEach(function(dT){return s(F,dT)}),Qe&&Xi(F,Ee),fe}function rt(F,D,U,Z){if(typeof U=="object"&&U!==null&&U.type===k&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case ae:e:{for(var fe=U.key,ye=D;ye!==null;){if(ye.key===fe){if(fe=U.type,fe===k){if(ye.tag===7){a(F,ye.sibling),D=f(ye,U.props.children),D.return=F,F=D;break e}}else if(ye.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===Ot&&Nm(fe)===ye.type){a(F,ye.sibling),D=f(ye,U.props),D.ref=Aa(F,ye,U),D.return=F,F=D;break e}a(F,ye);break}else s(F,ye);ye=ye.sibling}U.type===k?(D=ss(U.props.children,F.mode,Z,U.key),D.return=F,F=D):(Z=Mu(U.type,U.key,U.props,null,F.mode,Z),Z.ref=Aa(F,D,U),Z.return=F,F=Z)}return w(F);case ce:e:{for(ye=U.key;D!==null;){if(D.key===ye)if(D.tag===4&&D.stateNode.containerInfo===U.containerInfo&&D.stateNode.implementation===U.implementation){a(F,D.sibling),D=f(D,U.children||[]),D.return=F,F=D;break e}else{a(F,D);break}else s(F,D);D=D.sibling}D=Dh(U,F.mode,Z),D.return=F,F=D}return w(F);case Ot:return ye=U._init,rt(F,D,ye(U._payload),Z)}if(fr(U))return ue(F,D,U,Z);if(ge(U))return de(F,D,U,Z);fu(F,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,D!==null&&D.tag===6?(a(F,D.sibling),D=f(D,U),D.return=F,F=D):(a(F,D),D=bh(U,F.mode,Z),D.return=F,F=D),w(F)):a(F,D)}return rt}var co=bm(!0),Dm=bm(!1),pu=ti(null),mu=null,ho=null,zd=null;function $d(){zd=ho=mu=null}function Wd(r){var s=pu.current;Ke(pu),r._currentValue=s}function qd(r,s,a){for(;r!==null;){var d=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,d!==null&&(d.childLanes|=s)):d!==null&&(d.childLanes&s)!==s&&(d.childLanes|=s),r===a)break;r=r.return}}function fo(r,s){mu=r,zd=ho=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(Xt=!0),r.firstContext=null)}function wn(r){var s=r._currentValue;if(zd!==r)if(r={context:r,memoizedValue:s,next:null},ho===null){if(mu===null)throw Error(t(308));ho=r,mu.dependencies={lanes:0,firstContext:r}}else ho=ho.next=r;return s}var Ji=null;function Hd(r){Ji===null?Ji=[r]:Ji.push(r)}function Om(r,s,a,d){var f=s.interleaved;return f===null?(a.next=a,Hd(s)):(a.next=f.next,f.next=a),s.interleaved=a,Ar(r,d)}function Ar(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var ii=!1;function Kd(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Rr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function si(r,s,a){var d=r.updateQueue;if(d===null)return null;if(d=d.shared,(Oe&2)!==0){var f=d.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),d.pending=s,Ar(r,a)}return f=d.interleaved,f===null?(s.next=s,Hd(d)):(s.next=f.next,f.next=s),d.interleaved=s,Ar(r,a)}function gu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var d=s.lanes;d&=r.pendingLanes,a|=d,s.lanes=a,Gr(r,a)}}function Vm(r,s){var a=r.updateQueue,d=r.alternate;if(d!==null&&(d=d.updateQueue,a===d)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=w:g=g.next=w,a=a.next}while(a!==null);g===null?f=g=s:g=g.next=s}else f=g=s;a={baseState:d.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:d.shared,effects:d.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function yu(r,s,a,d){var f=r.updateQueue;ii=!1;var g=f.firstBaseUpdate,w=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var P=A,z=P.next;P.next=null,w===null?g=z:w.next=z,w=P;var G=r.alternate;G!==null&&(G=G.updateQueue,A=G.lastBaseUpdate,A!==w&&(A===null?G.firstBaseUpdate=z:A.next=z,G.lastBaseUpdate=P))}if(g!==null){var J=f.baseState;w=0,G=z=P=null,A=g;do{var H=A.lane,se=A.eventTime;if((d&H)===H){G!==null&&(G=G.next={eventTime:se,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var ue=r,de=A;switch(H=s,se=a,de.tag){case 1:if(ue=de.payload,typeof ue=="function"){J=ue.call(se,J,H);break e}J=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=de.payload,H=typeof ue=="function"?ue.call(se,J,H):ue,H==null)break e;J=oe({},J,H);break e;case 2:ii=!0}}A.callback!==null&&A.lane!==0&&(r.flags|=64,H=f.effects,H===null?f.effects=[A]:H.push(A))}else se={eventTime:se,lane:H,tag:A.tag,payload:A.payload,callback:A.callback,next:null},G===null?(z=G=se,P=J):G=G.next=se,w|=H;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;H=A,A=H.next,H.next=null,f.lastBaseUpdate=H,f.shared.pending=null}}while(!0);if(G===null&&(P=J),f.baseState=P,f.firstBaseUpdate=z,f.lastBaseUpdate=G,s=f.shared.interleaved,s!==null){f=s;do w|=f.lane,f=f.next;while(f!==s)}else g===null&&(f.shared.lanes=0);ts|=w,r.lanes=w,r.memoizedState=J}}function Mm(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var d=r[s],f=d.callback;if(f!==null){if(d.callback=null,d=a,typeof f!="function")throw Error(t(191,f));f.call(d)}}}var Ra={},tr=ti(Ra),Ca=ti(Ra),ka=ti(Ra);function Zi(r){if(r===Ra)throw Error(t(174));return r}function Gd(r,s){switch(qe(ka,s),qe(Ca,r),qe(tr,Ra),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:ct(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=ct(s,r)}Ke(tr),qe(tr,s)}function po(){Ke(tr),Ke(Ca),Ke(ka)}function jm(r){Zi(ka.current);var s=Zi(tr.current),a=ct(s,r.type);s!==a&&(qe(Ca,r),qe(tr,a))}function Qd(r){Ca.current===r&&(Ke(tr),Ke(Ca))}var Xe=ti(0);function vu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Yd=[];function Xd(){for(var r=0;r<Yd.length;r++)Yd[r]._workInProgressVersionPrimary=null;Yd.length=0}var _u=re.ReactCurrentDispatcher,Jd=re.ReactCurrentBatchConfig,es=0,Je=null,ht=null,_t=null,wu=!1,Pa=!1,Na=0,DE=0;function Vt(){throw Error(t(321))}function Zd(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Ln(r[a],s[a]))return!1;return!0}function eh(r,s,a,d,f,g){if(es=g,Je=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,_u.current=r===null||r.memoizedState===null?ME:jE,r=a(d,f),Pa){g=0;do{if(Pa=!1,Na=0,25<=g)throw Error(t(301));g+=1,_t=ht=null,s.updateQueue=null,_u.current=FE,r=a(d,f)}while(Pa)}if(_u.current=Iu,s=ht!==null&&ht.next!==null,es=0,_t=ht=Je=null,wu=!1,s)throw Error(t(300));return r}function th(){var r=Na!==0;return Na=0,r}function nr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _t===null?Je.memoizedState=_t=r:_t=_t.next=r,_t}function En(){if(ht===null){var r=Je.alternate;r=r!==null?r.memoizedState:null}else r=ht.next;var s=_t===null?Je.memoizedState:_t.next;if(s!==null)_t=s,ht=r;else{if(r===null)throw Error(t(310));ht=r,r={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},_t===null?Je.memoizedState=_t=r:_t=_t.next=r}return _t}function ba(r,s){return typeof s=="function"?s(r):s}function nh(r){var s=En(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var d=ht,f=d.baseQueue,g=a.pending;if(g!==null){if(f!==null){var w=f.next;f.next=g.next,g.next=w}d.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,d=d.baseState;var A=w=null,P=null,z=g;do{var G=z.lane;if((es&G)===G)P!==null&&(P=P.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),d=z.hasEagerState?z.eagerState:r(d,z.action);else{var J={lane:G,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};P===null?(A=P=J,w=d):P=P.next=J,Je.lanes|=G,ts|=G}z=z.next}while(z!==null&&z!==g);P===null?w=d:P.next=A,Ln(d,s.memoizedState)||(Xt=!0),s.memoizedState=d,s.baseState=w,s.baseQueue=P,a.lastRenderedState=d}if(r=a.interleaved,r!==null){f=r;do g=f.lane,Je.lanes|=g,ts|=g,f=f.next;while(f!==r)}else f===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function rh(r){var s=En(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var d=a.dispatch,f=a.pending,g=s.memoizedState;if(f!==null){a.pending=null;var w=f=f.next;do g=r(g,w.action),w=w.next;while(w!==f);Ln(g,s.memoizedState)||(Xt=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,d]}function Fm(){}function Um(r,s){var a=Je,d=En(),f=s(),g=!Ln(d.memoizedState,f);if(g&&(d.memoizedState=f,Xt=!0),d=d.queue,ih($m.bind(null,a,d,r),[r]),d.getSnapshot!==s||g||_t!==null&&_t.memoizedState.tag&1){if(a.flags|=2048,Da(9,zm.bind(null,a,d,f,s),void 0,null),wt===null)throw Error(t(349));(es&30)!==0||Bm(a,s,f)}return f}function Bm(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=Je.updateQueue,s===null?(s={lastEffect:null,stores:null},Je.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function zm(r,s,a,d){s.value=a,s.getSnapshot=d,Wm(s)&&qm(r)}function $m(r,s,a){return a(function(){Wm(s)&&qm(r)})}function Wm(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Ln(r,a)}catch{return!0}}function qm(r){var s=Ar(r,1);s!==null&&Un(s,r,1,-1)}function Hm(r){var s=nr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:r},s.queue=r,r=r.dispatch=VE.bind(null,Je,r),[s.memoizedState,r]}function Da(r,s,a,d){return r={tag:r,create:s,destroy:a,deps:d,next:null},s=Je.updateQueue,s===null?(s={lastEffect:null,stores:null},Je.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(d=a.next,a.next=r,r.next=d,s.lastEffect=r)),r}function Km(){return En().memoizedState}function Eu(r,s,a,d){var f=nr();Je.flags|=r,f.memoizedState=Da(1|s,a,void 0,d===void 0?null:d)}function Tu(r,s,a,d){var f=En();d=d===void 0?null:d;var g=void 0;if(ht!==null){var w=ht.memoizedState;if(g=w.destroy,d!==null&&Zd(d,w.deps)){f.memoizedState=Da(s,a,g,d);return}}Je.flags|=r,f.memoizedState=Da(1|s,a,g,d)}function Gm(r,s){return Eu(8390656,8,r,s)}function ih(r,s){return Tu(2048,8,r,s)}function Qm(r,s){return Tu(4,2,r,s)}function Ym(r,s){return Tu(4,4,r,s)}function Xm(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Jm(r,s,a){return a=a!=null?a.concat([r]):null,Tu(4,4,Xm.bind(null,s,r),a)}function sh(){}function Zm(r,s){var a=En();s=s===void 0?null:s;var d=a.memoizedState;return d!==null&&s!==null&&Zd(s,d[1])?d[0]:(a.memoizedState=[r,s],r)}function eg(r,s){var a=En();s=s===void 0?null:s;var d=a.memoizedState;return d!==null&&s!==null&&Zd(s,d[1])?d[0]:(r=r(),a.memoizedState=[r,s],r)}function tg(r,s,a){return(es&21)===0?(r.baseState&&(r.baseState=!1,Xt=!0),r.memoizedState=a):(Ln(a,s)||(a=$i(),Je.lanes|=a,ts|=a,r.baseState=!0),s)}function OE(r,s){var a=ke;ke=a!==0&&4>a?a:4,r(!0);var d=Jd.transition;Jd.transition={};try{r(!1),s()}finally{ke=a,Jd.transition=d}}function ng(){return En().memoizedState}function LE(r,s,a){var d=ui(r);if(a={lane:d,action:a,hasEagerState:!1,eagerState:null,next:null},rg(r))ig(s,a);else if(a=Om(r,s,a,d),a!==null){var f=Ht();Un(a,r,d,f),sg(a,s,d)}}function VE(r,s,a){var d=ui(r),f={lane:d,action:a,hasEagerState:!1,eagerState:null,next:null};if(rg(r))ig(s,f);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var w=s.lastRenderedState,A=g(w,a);if(f.hasEagerState=!0,f.eagerState=A,Ln(A,w)){var P=s.interleaved;P===null?(f.next=f,Hd(s)):(f.next=P.next,P.next=f),s.interleaved=f;return}}catch{}finally{}a=Om(r,s,f,d),a!==null&&(f=Ht(),Un(a,r,d,f),sg(a,s,d))}}function rg(r){var s=r.alternate;return r===Je||s!==null&&s===Je}function ig(r,s){Pa=wu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function sg(r,s,a){if((a&4194240)!==0){var d=s.lanes;d&=r.pendingLanes,a|=d,s.lanes=a,Gr(r,a)}}var Iu={readContext:wn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},ME={readContext:wn,useCallback:function(r,s){return nr().memoizedState=[r,s===void 0?null:s],r},useContext:wn,useEffect:Gm,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,Eu(4194308,4,Xm.bind(null,s,r),a)},useLayoutEffect:function(r,s){return Eu(4194308,4,r,s)},useInsertionEffect:function(r,s){return Eu(4,2,r,s)},useMemo:function(r,s){var a=nr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var d=nr();return s=a!==void 0?a(s):s,d.memoizedState=d.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},d.queue=r,r=r.dispatch=LE.bind(null,Je,r),[d.memoizedState,r]},useRef:function(r){var s=nr();return r={current:r},s.memoizedState=r},useState:Hm,useDebugValue:sh,useDeferredValue:function(r){return nr().memoizedState=r},useTransition:function(){var r=Hm(!1),s=r[0];return r=OE.bind(null,r[1]),nr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var d=Je,f=nr();if(Qe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),wt===null)throw Error(t(349));(es&30)!==0||Bm(d,s,a)}f.memoizedState=a;var g={value:a,getSnapshot:s};return f.queue=g,Gm($m.bind(null,d,g,r),[r]),d.flags|=2048,Da(9,zm.bind(null,d,g,a,s),void 0,null),a},useId:function(){var r=nr(),s=wt.identifierPrefix;if(Qe){var a=xr,d=Sr;a=(d&~(1<<32-$t(d)-1)).toString(32)+a,s=":"+s+"R"+a,a=Na++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=DE++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},jE={readContext:wn,useCallback:Zm,useContext:wn,useEffect:ih,useImperativeHandle:Jm,useInsertionEffect:Qm,useLayoutEffect:Ym,useMemo:eg,useReducer:nh,useRef:Km,useState:function(){return nh(ba)},useDebugValue:sh,useDeferredValue:function(r){var s=En();return tg(s,ht.memoizedState,r)},useTransition:function(){var r=nh(ba)[0],s=En().memoizedState;return[r,s]},useMutableSource:Fm,useSyncExternalStore:Um,useId:ng,unstable_isNewReconciler:!1},FE={readContext:wn,useCallback:Zm,useContext:wn,useEffect:ih,useImperativeHandle:Jm,useInsertionEffect:Qm,useLayoutEffect:Ym,useMemo:eg,useReducer:rh,useRef:Km,useState:function(){return rh(ba)},useDebugValue:sh,useDeferredValue:function(r){var s=En();return ht===null?s.memoizedState=r:tg(s,ht.memoizedState,r)},useTransition:function(){var r=rh(ba)[0],s=En().memoizedState;return[r,s]},useMutableSource:Fm,useSyncExternalStore:Um,useId:ng,unstable_isNewReconciler:!1};function Mn(r,s){if(r&&r.defaultProps){s=oe({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function oh(r,s,a,d){s=r.memoizedState,a=a(d,s),a=a==null?s:oe({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var Su={isMounted:function(r){return(r=r._reactInternals)?Cn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var d=Ht(),f=ui(r),g=Rr(d,f);g.payload=s,a!=null&&(g.callback=a),s=si(r,g,f),s!==null&&(Un(s,r,f,d),gu(s,r,f))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var d=Ht(),f=ui(r),g=Rr(d,f);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=si(r,g,f),s!==null&&(Un(s,r,f,d),gu(s,r,f))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Ht(),d=ui(r),f=Rr(a,d);f.tag=2,s!=null&&(f.callback=s),s=si(r,f,d),s!==null&&(Un(s,r,d,a),gu(s,r,d))}};function og(r,s,a,d,f,g,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(d,g,w):s.prototype&&s.prototype.isPureReactComponent?!_a(a,d)||!_a(f,g):!0}function ag(r,s,a){var d=!1,f=ni,g=s.contextType;return typeof g=="object"&&g!==null?g=wn(g):(f=Yt(s)?Qi:Lt.current,d=s.contextTypes,g=(d=d!=null)?oo(r,f):ni),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Su,r.stateNode=s,s._reactInternals=r,d&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=f,r.__reactInternalMemoizedMaskedChildContext=g),s}function lg(r,s,a,d){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,d),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,d),s.state!==r&&Su.enqueueReplaceState(s,s.state,null)}function ah(r,s,a,d){var f=r.stateNode;f.props=a,f.state=r.memoizedState,f.refs={},Kd(r);var g=s.contextType;typeof g=="object"&&g!==null?f.context=wn(g):(g=Yt(s)?Qi:Lt.current,f.context=oo(r,g)),f.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(oh(r,s,g,a),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&Su.enqueueReplaceState(f,f.state,null),yu(r,a,f,d),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308)}function mo(r,s){try{var a="",d=s;do a+=Ae(d),d=d.return;while(d);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:f,digest:null}}function lh(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function uh(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var UE=typeof WeakMap=="function"?WeakMap:Map;function ug(r,s,a){a=Rr(-1,a),a.tag=3,a.payload={element:null};var d=s.value;return a.callback=function(){Nu||(Nu=!0,Sh=d),uh(r,s)},a}function cg(r,s,a){a=Rr(-1,a),a.tag=3;var d=r.type.getDerivedStateFromError;if(typeof d=="function"){var f=s.value;a.payload=function(){return d(f)},a.callback=function(){uh(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){uh(r,s),typeof d!="function"&&(ai===null?ai=new Set([this]):ai.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),a}function dg(r,s,a){var d=r.pingCache;if(d===null){d=r.pingCache=new UE;var f=new Set;d.set(s,f)}else f=d.get(s),f===void 0&&(f=new Set,d.set(s,f));f.has(a)||(f.add(a),r=eT.bind(null,r,s,a),s.then(r,r))}function hg(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function fg(r,s,a,d,f){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Rr(-1,1),s.tag=2,si(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=f,r)}var BE=re.ReactCurrentOwner,Xt=!1;function qt(r,s,a,d){s.child=r===null?Dm(s,null,a,d):co(s,r.child,a,d)}function pg(r,s,a,d,f){a=a.render;var g=s.ref;return fo(s,f),d=eh(r,s,a,d,g,f),a=th(),r!==null&&!Xt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Cr(r,s,f)):(Qe&&a&&Md(s),s.flags|=1,qt(r,s,d,f),s.child)}function mg(r,s,a,d,f){if(r===null){var g=a.type;return typeof g=="function"&&!Nh(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,gg(r,s,g,d,f)):(r=Mu(a.type,null,d,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,(r.lanes&f)===0){var w=g.memoizedProps;if(a=a.compare,a=a!==null?a:_a,a(w,d)&&r.ref===s.ref)return Cr(r,s,f)}return s.flags|=1,r=di(g,d),r.ref=s.ref,r.return=s,s.child=r}function gg(r,s,a,d,f){if(r!==null){var g=r.memoizedProps;if(_a(g,d)&&r.ref===s.ref)if(Xt=!1,s.pendingProps=d=g,(r.lanes&f)!==0)(r.flags&131072)!==0&&(Xt=!0);else return s.lanes=r.lanes,Cr(r,s,f)}return ch(r,s,a,d,f)}function yg(r,s,a){var d=s.pendingProps,f=d.children,g=r!==null?r.memoizedState:null;if(d.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(yo,cn),cn|=a;else{if((a&1073741824)===0)return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,qe(yo,cn),cn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=g!==null?g.baseLanes:a,qe(yo,cn),cn|=d}else g!==null?(d=g.baseLanes|a,s.memoizedState=null):d=a,qe(yo,cn),cn|=d;return qt(r,s,f,a),s.child}function vg(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function ch(r,s,a,d,f){var g=Yt(a)?Qi:Lt.current;return g=oo(s,g),fo(s,f),a=eh(r,s,a,d,g,f),d=th(),r!==null&&!Xt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Cr(r,s,f)):(Qe&&d&&Md(s),s.flags|=1,qt(r,s,a,f),s.child)}function _g(r,s,a,d,f){if(Yt(a)){var g=!0;lu(s)}else g=!1;if(fo(s,f),s.stateNode===null)Au(r,s),ag(s,a,d),ah(s,a,d,f),d=!0;else if(r===null){var w=s.stateNode,A=s.memoizedProps;w.props=A;var P=w.context,z=a.contextType;typeof z=="object"&&z!==null?z=wn(z):(z=Yt(a)?Qi:Lt.current,z=oo(s,z));var G=a.getDerivedStateFromProps,J=typeof G=="function"||typeof w.getSnapshotBeforeUpdate=="function";J||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(A!==d||P!==z)&&lg(s,w,d,z),ii=!1;var H=s.memoizedState;w.state=H,yu(s,d,w,f),P=s.memoizedState,A!==d||H!==P||Qt.current||ii?(typeof G=="function"&&(oh(s,a,G,d),P=s.memoizedState),(A=ii||og(s,a,A,d,H,P,z))?(J||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=d,s.memoizedState=P),w.props=d,w.state=P,w.context=z,d=A):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),d=!1)}else{w=s.stateNode,Lm(r,s),A=s.memoizedProps,z=s.type===s.elementType?A:Mn(s.type,A),w.props=z,J=s.pendingProps,H=w.context,P=a.contextType,typeof P=="object"&&P!==null?P=wn(P):(P=Yt(a)?Qi:Lt.current,P=oo(s,P));var se=a.getDerivedStateFromProps;(G=typeof se=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(A!==J||H!==P)&&lg(s,w,d,P),ii=!1,H=s.memoizedState,w.state=H,yu(s,d,w,f);var ue=s.memoizedState;A!==J||H!==ue||Qt.current||ii?(typeof se=="function"&&(oh(s,a,se,d),ue=s.memoizedState),(z=ii||og(s,a,z,d,H,ue,P)||!1)?(G||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(d,ue,P),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(d,ue,P)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||A===r.memoizedProps&&H===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&H===r.memoizedState||(s.flags|=1024),s.memoizedProps=d,s.memoizedState=ue),w.props=d,w.state=ue,w.context=P,d=z):(typeof w.componentDidUpdate!="function"||A===r.memoizedProps&&H===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&H===r.memoizedState||(s.flags|=1024),d=!1)}return dh(r,s,a,d,g,f)}function dh(r,s,a,d,f,g){vg(r,s);var w=(s.flags&128)!==0;if(!d&&!w)return f&&Sm(s,a,!1),Cr(r,s,g);d=s.stateNode,BE.current=s;var A=w&&typeof a.getDerivedStateFromError!="function"?null:d.render();return s.flags|=1,r!==null&&w?(s.child=co(s,r.child,null,g),s.child=co(s,null,A,g)):qt(r,s,A,g),s.memoizedState=d.state,f&&Sm(s,a,!0),s.child}function wg(r){var s=r.stateNode;s.pendingContext?Tm(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Tm(r,s.context,!1),Gd(r,s.containerInfo)}function Eg(r,s,a,d,f){return uo(),Bd(f),s.flags|=256,qt(r,s,a,d),s.child}var hh={dehydrated:null,treeContext:null,retryLane:0};function fh(r){return{baseLanes:r,cachePool:null,transitions:null}}function Tg(r,s,a){var d=s.pendingProps,f=Xe.current,g=!1,w=(s.flags&128)!==0,A;if((A=w)||(A=r!==null&&r.memoizedState===null?!1:(f&2)!==0),A?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(f|=1),qe(Xe,f&1),r===null)return Ud(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(w=d.children,r=d.fallback,g?(d=s.mode,g=s.child,w={mode:"hidden",children:w},(d&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=ju(w,d,0,null),r=ss(r,d,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=fh(a),s.memoizedState=hh,r):ph(s,w));if(f=r.memoizedState,f!==null&&(A=f.dehydrated,A!==null))return zE(r,s,w,d,A,f,a);if(g){g=d.fallback,w=s.mode,f=r.child,A=f.sibling;var P={mode:"hidden",children:d.children};return(w&1)===0&&s.child!==f?(d=s.child,d.childLanes=0,d.pendingProps=P,s.deletions=null):(d=di(f,P),d.subtreeFlags=f.subtreeFlags&14680064),A!==null?g=di(A,g):(g=ss(g,w,a,null),g.flags|=2),g.return=s,d.return=s,d.sibling=g,s.child=d,d=g,g=s.child,w=r.child.memoizedState,w=w===null?fh(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=r.childLanes&~a,s.memoizedState=hh,d}return g=r.child,r=g.sibling,d=di(g,{mode:"visible",children:d.children}),(s.mode&1)===0&&(d.lanes=a),d.return=s,d.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=d,s.memoizedState=null,d}function ph(r,s){return s=ju({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function xu(r,s,a,d){return d!==null&&Bd(d),co(s,r.child,null,a),r=ph(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function zE(r,s,a,d,f,g,w){if(a)return s.flags&256?(s.flags&=-257,d=lh(Error(t(422))),xu(r,s,w,d)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=d.fallback,f=s.mode,d=ju({mode:"visible",children:d.children},f,0,null),g=ss(g,f,w,null),g.flags|=2,d.return=s,g.return=s,d.sibling=g,s.child=d,(s.mode&1)!==0&&co(s,r.child,null,w),s.child.memoizedState=fh(w),s.memoizedState=hh,g);if((s.mode&1)===0)return xu(r,s,w,null);if(f.data==="$!"){if(d=f.nextSibling&&f.nextSibling.dataset,d)var A=d.dgst;return d=A,g=Error(t(419)),d=lh(g,d,void 0),xu(r,s,w,d)}if(A=(w&r.childLanes)!==0,Xt||A){if(d=wt,d!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(d.suspendedLanes|w))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Ar(r,f),Un(d,r,f,-1))}return Ph(),d=lh(Error(t(421))),xu(r,s,w,d)}return f.data==="$?"?(s.flags|=128,s.child=r.child,s=tT.bind(null,r),f._reactRetry=s,null):(r=g.treeContext,un=ei(f.nextSibling),ln=s,Qe=!0,Vn=null,r!==null&&(vn[_n++]=Sr,vn[_n++]=xr,vn[_n++]=Yi,Sr=r.id,xr=r.overflow,Yi=s),s=ph(s,d.children),s.flags|=4096,s)}function Ig(r,s,a){r.lanes|=s;var d=r.alternate;d!==null&&(d.lanes|=s),qd(r.return,s,a)}function mh(r,s,a,d,f){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:d,tail:a,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=a,g.tailMode=f)}function Sg(r,s,a){var d=s.pendingProps,f=d.revealOrder,g=d.tail;if(qt(r,s,d.children,a),d=Xe.current,(d&2)!==0)d=d&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Ig(r,a,s);else if(r.tag===19)Ig(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}d&=1}if(qe(Xe,d),(s.mode&1)===0)s.memoizedState=null;else switch(f){case"forwards":for(a=s.child,f=null;a!==null;)r=a.alternate,r!==null&&vu(r)===null&&(f=a),a=a.sibling;a=f,a===null?(f=s.child,s.child=null):(f=a.sibling,a.sibling=null),mh(s,!1,f,a,g);break;case"backwards":for(a=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&vu(r)===null){s.child=f;break}r=f.sibling,f.sibling=a,a=f,f=r}mh(s,!0,a,null,g);break;case"together":mh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Au(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Cr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),ts|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=di(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=di(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function $E(r,s,a){switch(s.tag){case 3:wg(s),uo();break;case 5:jm(s);break;case 1:Yt(s.type)&&lu(s);break;case 4:Gd(s,s.stateNode.containerInfo);break;case 10:var d=s.type._context,f=s.memoizedProps.value;qe(pu,d._currentValue),d._currentValue=f;break;case 13:if(d=s.memoizedState,d!==null)return d.dehydrated!==null?(qe(Xe,Xe.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Tg(r,s,a):(qe(Xe,Xe.current&1),r=Cr(r,s,a),r!==null?r.sibling:null);qe(Xe,Xe.current&1);break;case 19:if(d=(a&s.childLanes)!==0,(r.flags&128)!==0){if(d)return Sg(r,s,a);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),qe(Xe,Xe.current),d)break;return null;case 22:case 23:return s.lanes=0,yg(r,s,a)}return Cr(r,s,a)}var xg,gh,Ag,Rg;xg=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},gh=function(){},Ag=function(r,s,a,d){var f=r.memoizedProps;if(f!==d){r=s.stateNode,Zi(tr.current);var g=null;switch(a){case"input":f=bi(r,f),d=bi(r,d),g=[];break;case"select":f=oe({},f,{value:void 0}),d=oe({},d,{value:void 0}),g=[];break;case"textarea":f=Go(r,f),d=Go(r,d),g=[];break;default:typeof f.onClick!="function"&&typeof d.onClick=="function"&&(r.onclick=su)}ea(a,d);var w;a=null;for(z in f)if(!d.hasOwnProperty(z)&&f.hasOwnProperty(z)&&f[z]!=null)if(z==="style"){var A=f[z];for(w in A)A.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?g||(g=[]):(g=g||[]).push(z,null));for(z in d){var P=d[z];if(A=f!=null?f[z]:void 0,d.hasOwnProperty(z)&&P!==A&&(P!=null||A!=null))if(z==="style")if(A){for(w in A)!A.hasOwnProperty(w)||P&&P.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in P)P.hasOwnProperty(w)&&A[w]!==P[w]&&(a||(a={}),a[w]=P[w])}else a||(g||(g=[]),g.push(z,a)),a=P;else z==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,A=A?A.__html:void 0,P!=null&&A!==P&&(g=g||[]).push(z,P)):z==="children"?typeof P!="string"&&typeof P!="number"||(g=g||[]).push(z,""+P):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(P!=null&&z==="onScroll"&&He("scroll",r),g||A===P||(g=[])):(g=g||[]).push(z,P))}a&&(g=g||[]).push("style",a);var z=g;(s.updateQueue=z)&&(s.flags|=4)}},Rg=function(r,s,a,d){a!==d&&(s.flags|=4)};function Oa(r,s){if(!Qe)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var d=null;a!==null;)a.alternate!==null&&(d=a),a=a.sibling;d===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:d.sibling=null}}function Mt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,d=0;if(s)for(var f=r.child;f!==null;)a|=f.lanes|f.childLanes,d|=f.subtreeFlags&14680064,d|=f.flags&14680064,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)a|=f.lanes|f.childLanes,d|=f.subtreeFlags,d|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=d,r.childLanes=a,s}function WE(r,s,a){var d=s.pendingProps;switch(jd(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(s),null;case 1:return Yt(s.type)&&au(),Mt(s),null;case 3:return d=s.stateNode,po(),Ke(Qt),Ke(Lt),Xd(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(r===null||r.child===null)&&(hu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Vn!==null&&(Rh(Vn),Vn=null))),gh(r,s),Mt(s),null;case 5:Qd(s);var f=Zi(ka.current);if(a=s.type,r!==null&&s.stateNode!=null)Ag(r,s,a,d,f),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!d){if(s.stateNode===null)throw Error(t(166));return Mt(s),null}if(r=Zi(tr.current),hu(s)){d=s.stateNode,a=s.type;var g=s.memoizedProps;switch(d[er]=s,d[Sa]=g,r=(s.mode&1)!==0,a){case"dialog":He("cancel",d),He("close",d);break;case"iframe":case"object":case"embed":He("load",d);break;case"video":case"audio":for(f=0;f<Ea.length;f++)He(Ea[f],d);break;case"source":He("error",d);break;case"img":case"image":case"link":He("error",d),He("load",d);break;case"details":He("toggle",d);break;case"input":Cs(d,g),He("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!g.multiple},He("invalid",d);break;case"textarea":Ps(d,g),He("invalid",d)}ea(a,g),f=null;for(var w in g)if(g.hasOwnProperty(w)){var A=g[w];w==="children"?typeof A=="string"?d.textContent!==A&&(g.suppressHydrationWarning!==!0&&iu(d.textContent,A,r),f=["children",A]):typeof A=="number"&&d.textContent!==""+A&&(g.suppressHydrationWarning!==!0&&iu(d.textContent,A,r),f=["children",""+A]):o.hasOwnProperty(w)&&A!=null&&w==="onScroll"&&He("scroll",d)}switch(a){case"input":hr(d),Pl(d,g,!0);break;case"textarea":hr(d),Qo(d);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(d.onclick=su)}d=f,s.updateQueue=d,d!==null&&(s.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=ut(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=w.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof d.is=="string"?r=w.createElement(a,{is:d.is}):(r=w.createElement(a),a==="select"&&(w=r,d.multiple?w.multiple=!0:d.size&&(w.size=d.size))):r=w.createElementNS(r,a),r[er]=s,r[Sa]=d,xg(r,s,!1,!1),s.stateNode=r;e:{switch(w=ta(a,d),a){case"dialog":He("cancel",r),He("close",r),f=d;break;case"iframe":case"object":case"embed":He("load",r),f=d;break;case"video":case"audio":for(f=0;f<Ea.length;f++)He(Ea[f],r);f=d;break;case"source":He("error",r),f=d;break;case"img":case"image":case"link":He("error",r),He("load",r),f=d;break;case"details":He("toggle",r),f=d;break;case"input":Cs(r,d),f=bi(r,d),He("invalid",r);break;case"option":f=d;break;case"select":r._wrapperState={wasMultiple:!!d.multiple},f=oe({},d,{value:void 0}),He("invalid",r);break;case"textarea":Ps(r,d),f=Go(r,d),He("invalid",r);break;default:f=d}ea(a,f),A=f;for(g in A)if(A.hasOwnProperty(g)){var P=A[g];g==="style"?Jo(r,P):g==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Yo(r,P)):g==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&$r(r,P):typeof P=="number"&&$r(r,""+P):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?P!=null&&g==="onScroll"&&He("scroll",r):P!=null&&te(r,g,P,w))}switch(a){case"input":hr(r),Pl(r,d,!1);break;case"textarea":hr(r),Qo(r);break;case"option":d.value!=null&&r.setAttribute("value",""+je(d.value));break;case"select":r.multiple=!!d.multiple,g=d.value,g!=null?pr(r,!!d.multiple,g,!1):d.defaultValue!=null&&pr(r,!!d.multiple,d.defaultValue,!0);break;default:typeof f.onClick=="function"&&(r.onclick=su)}switch(a){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Mt(s),null;case 6:if(r&&s.stateNode!=null)Rg(r,s,r.memoizedProps,d);else{if(typeof d!="string"&&s.stateNode===null)throw Error(t(166));if(a=Zi(ka.current),Zi(tr.current),hu(s)){if(d=s.stateNode,a=s.memoizedProps,d[er]=s,(g=d.nodeValue!==a)&&(r=ln,r!==null))switch(r.tag){case 3:iu(d.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&iu(d.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else d=(a.nodeType===9?a:a.ownerDocument).createTextNode(d),d[er]=s,s.stateNode=d}return Mt(s),null;case 13:if(Ke(Xe),d=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Qe&&un!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Pm(),uo(),s.flags|=98560,g=!1;else if(g=hu(s),d!==null&&d.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[er]=s}else uo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Mt(s),g=!1}else Vn!==null&&(Rh(Vn),Vn=null),g=!0;if(!g)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(d=d!==null,d!==(r!==null&&r.memoizedState!==null)&&d&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(Xe.current&1)!==0?ft===0&&(ft=3):Ph())),s.updateQueue!==null&&(s.flags|=4),Mt(s),null);case 4:return po(),gh(r,s),r===null&&Ta(s.stateNode.containerInfo),Mt(s),null;case 10:return Wd(s.type._context),Mt(s),null;case 17:return Yt(s.type)&&au(),Mt(s),null;case 19:if(Ke(Xe),g=s.memoizedState,g===null)return Mt(s),null;if(d=(s.flags&128)!==0,w=g.rendering,w===null)if(d)Oa(g,!1);else{if(ft!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(w=vu(r),w!==null){for(s.flags|=128,Oa(g,!1),d=w.updateQueue,d!==null&&(s.updateQueue=d,s.flags|=4),s.subtreeFlags=0,d=a,a=s.child;a!==null;)g=a,r=d,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,r=w.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return qe(Xe,Xe.current&1|2),s.child}r=r.sibling}g.tail!==null&&We()>vo&&(s.flags|=128,d=!0,Oa(g,!1),s.lanes=4194304)}else{if(!d)if(r=vu(w),r!==null){if(s.flags|=128,d=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Oa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!Qe)return Mt(s),null}else 2*We()-g.renderingStartTime>vo&&a!==1073741824&&(s.flags|=128,d=!0,Oa(g,!1),s.lanes=4194304);g.isBackwards?(w.sibling=s.child,s.child=w):(a=g.last,a!==null?a.sibling=w:s.child=w,g.last=w)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=We(),s.sibling=null,a=Xe.current,qe(Xe,d?a&1|2:a&1),s):(Mt(s),null);case 22:case 23:return kh(),d=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==d&&(s.flags|=8192),d&&(s.mode&1)!==0?(cn&1073741824)!==0&&(Mt(s),s.subtreeFlags&6&&(s.flags|=8192)):Mt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function qE(r,s){switch(jd(s),s.tag){case 1:return Yt(s.type)&&au(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return po(),Ke(Qt),Ke(Lt),Xd(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return Qd(s),null;case 13:if(Ke(Xe),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));uo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ke(Xe),null;case 4:return po(),null;case 10:return Wd(s.type._context),null;case 22:case 23:return kh(),null;case 24:return null;default:return null}}var Ru=!1,jt=!1,HE=typeof WeakSet=="function"?WeakSet:Set,le=null;function go(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(d){et(r,s,d)}else a.current=null}function yh(r,s,a){try{a()}catch(d){et(r,s,d)}}var Cg=!1;function KE(r,s){if(kd=Xr,r=om(),Ed(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var d=a.getSelection&&a.getSelection();if(d&&d.rangeCount!==0){a=d.anchorNode;var f=d.anchorOffset,g=d.focusNode;d=d.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var w=0,A=-1,P=-1,z=0,G=0,J=r,H=null;t:for(;;){for(var se;J!==a||f!==0&&J.nodeType!==3||(A=w+f),J!==g||d!==0&&J.nodeType!==3||(P=w+d),J.nodeType===3&&(w+=J.nodeValue.length),(se=J.firstChild)!==null;)H=J,J=se;for(;;){if(J===r)break t;if(H===a&&++z===f&&(A=w),H===g&&++G===d&&(P=w),(se=J.nextSibling)!==null)break;J=H,H=J.parentNode}J=se}a=A===-1||P===-1?null:{start:A,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pd={focusedElem:r,selectionRange:a},Xr=!1,le=s;le!==null;)if(s=le,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,le=r;else for(;le!==null;){s=le;try{var ue=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var de=ue.memoizedProps,rt=ue.memoizedState,F=s.stateNode,D=F.getSnapshotBeforeUpdate(s.elementType===s.type?de:Mn(s.type,de),rt);F.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var U=s.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Z){et(s,s.return,Z)}if(r=s.sibling,r!==null){r.return=s.return,le=r;break}le=s.return}return ue=Cg,Cg=!1,ue}function La(r,s,a){var d=s.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var f=d=d.next;do{if((f.tag&r)===r){var g=f.destroy;f.destroy=void 0,g!==void 0&&yh(s,a,g)}f=f.next}while(f!==d)}}function Cu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var d=a.create;a.destroy=d()}a=a.next}while(a!==s)}}function vh(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function kg(r){var s=r.alternate;s!==null&&(r.alternate=null,kg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[er],delete s[Sa],delete s[Od],delete s[kE],delete s[PE])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Pg(r){return r.tag===5||r.tag===3||r.tag===4}function Ng(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Pg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function _h(r,s,a){var d=r.tag;if(d===5||d===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=su));else if(d!==4&&(r=r.child,r!==null))for(_h(r,s,a),r=r.sibling;r!==null;)_h(r,s,a),r=r.sibling}function wh(r,s,a){var d=r.tag;if(d===5||d===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(d!==4&&(r=r.child,r!==null))for(wh(r,s,a),r=r.sibling;r!==null;)wh(r,s,a),r=r.sibling}var xt=null,jn=!1;function oi(r,s,a){for(a=a.child;a!==null;)bg(r,s,a),a=a.sibling}function bg(r,s,a){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Bi,a)}catch{}switch(a.tag){case 5:jt||go(a,s);case 6:var d=xt,f=jn;xt=null,oi(r,s,a),xt=d,jn=f,xt!==null&&(jn?(r=xt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):xt.removeChild(a.stateNode));break;case 18:xt!==null&&(jn?(r=xt,a=a.stateNode,r.nodeType===8?Dd(r.parentNode,a):r.nodeType===1&&Dd(r,a),Dn(r)):Dd(xt,a.stateNode));break;case 4:d=xt,f=jn,xt=a.stateNode.containerInfo,jn=!0,oi(r,s,a),xt=d,jn=f;break;case 0:case 11:case 14:case 15:if(!jt&&(d=a.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){f=d=d.next;do{var g=f,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&yh(a,s,w),f=f.next}while(f!==d)}oi(r,s,a);break;case 1:if(!jt&&(go(a,s),d=a.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=a.memoizedProps,d.state=a.memoizedState,d.componentWillUnmount()}catch(A){et(a,s,A)}oi(r,s,a);break;case 21:oi(r,s,a);break;case 22:a.mode&1?(jt=(d=jt)||a.memoizedState!==null,oi(r,s,a),jt=d):oi(r,s,a);break;default:oi(r,s,a)}}function Dg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new HE),s.forEach(function(d){var f=nT.bind(null,r,d);a.has(d)||(a.add(d),d.then(f,f))})}}function Fn(r,s){var a=s.deletions;if(a!==null)for(var d=0;d<a.length;d++){var f=a[d];try{var g=r,w=s,A=w;e:for(;A!==null;){switch(A.tag){case 5:xt=A.stateNode,jn=!1;break e;case 3:xt=A.stateNode.containerInfo,jn=!0;break e;case 4:xt=A.stateNode.containerInfo,jn=!0;break e}A=A.return}if(xt===null)throw Error(t(160));bg(g,w,f),xt=null,jn=!1;var P=f.alternate;P!==null&&(P.return=null),f.return=null}catch(z){et(f,s,z)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Og(s,r),s=s.sibling}function Og(r,s){var a=r.alternate,d=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Fn(s,r),rr(r),d&4){try{La(3,r,r.return),Cu(3,r)}catch(de){et(r,r.return,de)}try{La(5,r,r.return)}catch(de){et(r,r.return,de)}}break;case 1:Fn(s,r),rr(r),d&512&&a!==null&&go(a,a.return);break;case 5:if(Fn(s,r),rr(r),d&512&&a!==null&&go(a,a.return),r.flags&32){var f=r.stateNode;try{$r(f,"")}catch(de){et(r,r.return,de)}}if(d&4&&(f=r.stateNode,f!=null)){var g=r.memoizedProps,w=a!==null?a.memoizedProps:g,A=r.type,P=r.updateQueue;if(r.updateQueue=null,P!==null)try{A==="input"&&g.type==="radio"&&g.name!=null&&Ho(f,g),ta(A,w);var z=ta(A,g);for(w=0;w<P.length;w+=2){var G=P[w],J=P[w+1];G==="style"?Jo(f,J):G==="dangerouslySetInnerHTML"?Yo(f,J):G==="children"?$r(f,J):te(f,G,J,z)}switch(A){case"input":Ko(f,g);break;case"textarea":Ns(f,g);break;case"select":var H=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var se=g.value;se!=null?pr(f,!!g.multiple,se,!1):H!==!!g.multiple&&(g.defaultValue!=null?pr(f,!!g.multiple,g.defaultValue,!0):pr(f,!!g.multiple,g.multiple?[]:"",!1))}f[Sa]=g}catch(de){et(r,r.return,de)}}break;case 6:if(Fn(s,r),rr(r),d&4){if(r.stateNode===null)throw Error(t(162));f=r.stateNode,g=r.memoizedProps;try{f.nodeValue=g}catch(de){et(r,r.return,de)}}break;case 3:if(Fn(s,r),rr(r),d&4&&a!==null&&a.memoizedState.isDehydrated)try{Dn(s.containerInfo)}catch(de){et(r,r.return,de)}break;case 4:Fn(s,r),rr(r);break;case 13:Fn(s,r),rr(r),f=r.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(Ih=We())),d&4&&Dg(r);break;case 22:if(G=a!==null&&a.memoizedState!==null,r.mode&1?(jt=(z=jt)||G,Fn(s,r),jt=z):Fn(s,r),rr(r),d&8192){if(z=r.memoizedState!==null,(r.stateNode.isHidden=z)&&!G&&(r.mode&1)!==0)for(le=r,G=r.child;G!==null;){for(J=le=G;le!==null;){switch(H=le,se=H.child,H.tag){case 0:case 11:case 14:case 15:La(4,H,H.return);break;case 1:go(H,H.return);var ue=H.stateNode;if(typeof ue.componentWillUnmount=="function"){d=H,a=H.return;try{s=d,ue.props=s.memoizedProps,ue.state=s.memoizedState,ue.componentWillUnmount()}catch(de){et(d,a,de)}}break;case 5:go(H,H.return);break;case 22:if(H.memoizedState!==null){Mg(J);continue}}se!==null?(se.return=H,le=se):Mg(J)}G=G.sibling}e:for(G=null,J=r;;){if(J.tag===5){if(G===null){G=J;try{f=J.stateNode,z?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(A=J.stateNode,P=J.memoizedProps.style,w=P!=null&&P.hasOwnProperty("display")?P.display:null,A.style.display=Xo("display",w))}catch(de){et(r,r.return,de)}}}else if(J.tag===6){if(G===null)try{J.stateNode.nodeValue=z?"":J.memoizedProps}catch(de){et(r,r.return,de)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===r)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===r)break e;for(;J.sibling===null;){if(J.return===null||J.return===r)break e;G===J&&(G=null),J=J.return}G===J&&(G=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:Fn(s,r),rr(r),d&4&&Dg(r);break;case 21:break;default:Fn(s,r),rr(r)}}function rr(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(Pg(a)){var d=a;break e}a=a.return}throw Error(t(160))}switch(d.tag){case 5:var f=d.stateNode;d.flags&32&&($r(f,""),d.flags&=-33);var g=Ng(r);wh(r,g,f);break;case 3:case 4:var w=d.stateNode.containerInfo,A=Ng(r);_h(r,A,w);break;default:throw Error(t(161))}}catch(P){et(r,r.return,P)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function GE(r,s,a){le=r,Lg(r)}function Lg(r,s,a){for(var d=(r.mode&1)!==0;le!==null;){var f=le,g=f.child;if(f.tag===22&&d){var w=f.memoizedState!==null||Ru;if(!w){var A=f.alternate,P=A!==null&&A.memoizedState!==null||jt;A=Ru;var z=jt;if(Ru=w,(jt=P)&&!z)for(le=f;le!==null;)w=le,P=w.child,w.tag===22&&w.memoizedState!==null?jg(f):P!==null?(P.return=w,le=P):jg(f);for(;g!==null;)le=g,Lg(g),g=g.sibling;le=f,Ru=A,jt=z}Vg(r)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,le=g):Vg(r)}}function Vg(r){for(;le!==null;){var s=le;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:jt||Cu(5,s);break;case 1:var d=s.stateNode;if(s.flags&4&&!jt)if(a===null)d.componentDidMount();else{var f=s.elementType===s.type?a.memoizedProps:Mn(s.type,a.memoizedProps);d.componentDidUpdate(f,a.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&Mm(s,g,d);break;case 3:var w=s.updateQueue;if(w!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Mm(s,w,a)}break;case 5:var A=s.stateNode;if(a===null&&s.flags&4){a=A;var P=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var z=s.alternate;if(z!==null){var G=z.memoizedState;if(G!==null){var J=G.dehydrated;J!==null&&Dn(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}jt||s.flags&512&&vh(s)}catch(H){et(s,s.return,H)}}if(s===r){le=null;break}if(a=s.sibling,a!==null){a.return=s.return,le=a;break}le=s.return}}function Mg(r){for(;le!==null;){var s=le;if(s===r){le=null;break}var a=s.sibling;if(a!==null){a.return=s.return,le=a;break}le=s.return}}function jg(r){for(;le!==null;){var s=le;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Cu(4,s)}catch(P){et(s,a,P)}break;case 1:var d=s.stateNode;if(typeof d.componentDidMount=="function"){var f=s.return;try{d.componentDidMount()}catch(P){et(s,f,P)}}var g=s.return;try{vh(s)}catch(P){et(s,g,P)}break;case 5:var w=s.return;try{vh(s)}catch(P){et(s,w,P)}}}catch(P){et(s,s.return,P)}if(s===r){le=null;break}var A=s.sibling;if(A!==null){A.return=s.return,le=A;break}le=s.return}}var QE=Math.ceil,ku=re.ReactCurrentDispatcher,Eh=re.ReactCurrentOwner,Tn=re.ReactCurrentBatchConfig,Oe=0,wt=null,at=null,At=0,cn=0,yo=ti(0),ft=0,Va=null,ts=0,Pu=0,Th=0,Ma=null,Jt=null,Ih=0,vo=1/0,kr=null,Nu=!1,Sh=null,ai=null,bu=!1,li=null,Du=0,ja=0,xh=null,Ou=-1,Lu=0;function Ht(){return(Oe&6)!==0?We():Ou!==-1?Ou:Ou=We()}function ui(r){return(r.mode&1)===0?1:(Oe&2)!==0&&At!==0?At&-At:bE.transition!==null?(Lu===0&&(Lu=$i()),Lu):(r=ke,r!==0||(r=window.event,r=r===void 0?16:ha(r.type)),r)}function Un(r,s,a,d){if(50<ja)throw ja=0,xh=null,Error(t(185));Kr(r,a,d),((Oe&2)===0||r!==wt)&&(r===wt&&((Oe&2)===0&&(Pu|=a),ft===4&&ci(r,At)),Zt(r,d),a===1&&Oe===0&&(s.mode&1)===0&&(vo=We()+500,uu&&ri()))}function Zt(r,s){var a=r.callbackNode;yr(r,s);var d=zi(r,r===wt?At:0);if(d===0)a!==null&&aa(a),r.callbackNode=null,r.callbackPriority=0;else if(s=d&-d,r.callbackPriority!==s){if(a!=null&&aa(a),s===1)r.tag===0?NE(Ug.bind(null,r)):xm(Ug.bind(null,r)),RE(function(){(Oe&6)===0&&ri()}),a=null;else{switch(Qr(d)){case 1:a=Ui;break;case 4:a=Wr;break;case 16:a=mn;break;case 536870912:a=Ll;break;default:a=mn}a=Gg(a,Fg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function Fg(r,s){if(Ou=-1,Lu=0,(Oe&6)!==0)throw Error(t(327));var a=r.callbackNode;if(_o()&&r.callbackNode!==a)return null;var d=zi(r,r===wt?At:0);if(d===0)return null;if((d&30)!==0||(d&r.expiredLanes)!==0||s)s=Vu(r,d);else{s=d;var f=Oe;Oe|=2;var g=zg();(wt!==r||At!==s)&&(kr=null,vo=We()+500,rs(r,s));do try{JE();break}catch(A){Bg(r,A)}while(!0);$d(),ku.current=g,Oe=f,at!==null?s=0:(wt=null,At=0,s=ft)}if(s!==0){if(s===2&&(f=sn(r),f!==0&&(d=f,s=Ah(r,f))),s===1)throw a=Va,rs(r,0),ci(r,d),Zt(r,We()),a;if(s===6)ci(r,d);else{if(f=r.current.alternate,(d&30)===0&&!YE(f)&&(s=Vu(r,d),s===2&&(g=sn(r),g!==0&&(d=g,s=Ah(r,g))),s===1))throw a=Va,rs(r,0),ci(r,d),Zt(r,We()),a;switch(r.finishedWork=f,r.finishedLanes=d,s){case 0:case 1:throw Error(t(345));case 2:is(r,Jt,kr);break;case 3:if(ci(r,d),(d&130023424)===d&&(s=Ih+500-We(),10<s)){if(zi(r,0)!==0)break;if(f=r.suspendedLanes,(f&d)!==d){Ht(),r.pingedLanes|=r.suspendedLanes&f;break}r.timeoutHandle=bd(is.bind(null,r,Jt,kr),s);break}is(r,Jt,kr);break;case 4:if(ci(r,d),(d&4194240)===d)break;for(s=r.eventTimes,f=-1;0<d;){var w=31-$t(d);g=1<<w,w=s[w],w>f&&(f=w),d&=~g}if(d=f,d=We()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*QE(d/1960))-d,10<d){r.timeoutHandle=bd(is.bind(null,r,Jt,kr),d);break}is(r,Jt,kr);break;case 5:is(r,Jt,kr);break;default:throw Error(t(329))}}}return Zt(r,We()),r.callbackNode===a?Fg.bind(null,r):null}function Ah(r,s){var a=Ma;return r.current.memoizedState.isDehydrated&&(rs(r,s).flags|=256),r=Vu(r,s),r!==2&&(s=Jt,Jt=a,s!==null&&Rh(s)),r}function Rh(r){Jt===null?Jt=r:Jt.push.apply(Jt,r)}function YE(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var d=0;d<a.length;d++){var f=a[d],g=f.getSnapshot;f=f.value;try{if(!Ln(g(),f))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function ci(r,s){for(s&=~Th,s&=~Pu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-$t(s),d=1<<a;r[a]=-1,s&=~d}}function Ug(r){if((Oe&6)!==0)throw Error(t(327));_o();var s=zi(r,0);if((s&1)===0)return Zt(r,We()),null;var a=Vu(r,s);if(r.tag!==0&&a===2){var d=sn(r);d!==0&&(s=d,a=Ah(r,d))}if(a===1)throw a=Va,rs(r,0),ci(r,s),Zt(r,We()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,is(r,Jt,kr),Zt(r,We()),null}function Ch(r,s){var a=Oe;Oe|=1;try{return r(s)}finally{Oe=a,Oe===0&&(vo=We()+500,uu&&ri())}}function ns(r){li!==null&&li.tag===0&&(Oe&6)===0&&_o();var s=Oe;Oe|=1;var a=Tn.transition,d=ke;try{if(Tn.transition=null,ke=1,r)return r()}finally{ke=d,Tn.transition=a,Oe=s,(Oe&6)===0&&ri()}}function kh(){cn=yo.current,Ke(yo)}function rs(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,AE(a)),at!==null)for(a=at.return;a!==null;){var d=a;switch(jd(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&au();break;case 3:po(),Ke(Qt),Ke(Lt),Xd();break;case 5:Qd(d);break;case 4:po();break;case 13:Ke(Xe);break;case 19:Ke(Xe);break;case 10:Wd(d.type._context);break;case 22:case 23:kh()}a=a.return}if(wt=r,at=r=di(r.current,null),At=cn=s,ft=0,Va=null,Th=Pu=ts=0,Jt=Ma=null,Ji!==null){for(s=0;s<Ji.length;s++)if(a=Ji[s],d=a.interleaved,d!==null){a.interleaved=null;var f=d.next,g=a.pending;if(g!==null){var w=g.next;g.next=f,d.next=w}a.pending=d}Ji=null}return r}function Bg(r,s){do{var a=at;try{if($d(),_u.current=Iu,wu){for(var d=Je.memoizedState;d!==null;){var f=d.queue;f!==null&&(f.pending=null),d=d.next}wu=!1}if(es=0,_t=ht=Je=null,Pa=!1,Na=0,Eh.current=null,a===null||a.return===null){ft=1,Va=s,at=null;break}e:{var g=r,w=a.return,A=a,P=s;if(s=At,A.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var z=P,G=A,J=G.tag;if((G.mode&1)===0&&(J===0||J===11||J===15)){var H=G.alternate;H?(G.updateQueue=H.updateQueue,G.memoizedState=H.memoizedState,G.lanes=H.lanes):(G.updateQueue=null,G.memoizedState=null)}var se=hg(w);if(se!==null){se.flags&=-257,fg(se,w,A,g,s),se.mode&1&&dg(g,z,s),s=se,P=z;var ue=s.updateQueue;if(ue===null){var de=new Set;de.add(P),s.updateQueue=de}else ue.add(P);break e}else{if((s&1)===0){dg(g,z,s),Ph();break e}P=Error(t(426))}}else if(Qe&&A.mode&1){var rt=hg(w);if(rt!==null){(rt.flags&65536)===0&&(rt.flags|=256),fg(rt,w,A,g,s),Bd(mo(P,A));break e}}g=P=mo(P,A),ft!==4&&(ft=2),Ma===null?Ma=[g]:Ma.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var F=ug(g,P,s);Vm(g,F);break e;case 1:A=P;var D=g.type,U=g.stateNode;if((g.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(ai===null||!ai.has(U)))){g.flags|=65536,s&=-s,g.lanes|=s;var Z=cg(g,A,s);Vm(g,Z);break e}}g=g.return}while(g!==null)}Wg(a)}catch(fe){s=fe,at===a&&a!==null&&(at=a=a.return);continue}break}while(!0)}function zg(){var r=ku.current;return ku.current=Iu,r===null?Iu:r}function Ph(){(ft===0||ft===3||ft===2)&&(ft=4),wt===null||(ts&268435455)===0&&(Pu&268435455)===0||ci(wt,At)}function Vu(r,s){var a=Oe;Oe|=2;var d=zg();(wt!==r||At!==s)&&(kr=null,rs(r,s));do try{XE();break}catch(f){Bg(r,f)}while(!0);if($d(),Oe=a,ku.current=d,at!==null)throw Error(t(261));return wt=null,At=0,ft}function XE(){for(;at!==null;)$g(at)}function JE(){for(;at!==null&&!Dl();)$g(at)}function $g(r){var s=Kg(r.alternate,r,cn);r.memoizedProps=r.pendingProps,s===null?Wg(r):at=s,Eh.current=null}function Wg(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=WE(a,s,cn),a!==null){at=a;return}}else{if(a=qE(a,s),a!==null){a.flags&=32767,at=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{ft=6,at=null;return}}if(s=s.sibling,s!==null){at=s;return}at=s=r}while(s!==null);ft===0&&(ft=5)}function is(r,s,a){var d=ke,f=Tn.transition;try{Tn.transition=null,ke=1,ZE(r,s,a,d)}finally{Tn.transition=f,ke=d}return null}function ZE(r,s,a,d){do _o();while(li!==null);if((Oe&6)!==0)throw Error(t(327));a=r.finishedWork;var f=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(ze(r,g),r===wt&&(at=wt=null,At=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||bu||(bu=!0,Gg(mn,function(){return _o(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Tn.transition,Tn.transition=null;var w=ke;ke=1;var A=Oe;Oe|=4,Eh.current=null,KE(r,a),Og(a,r),_E(Pd),Xr=!!kd,Pd=kd=null,r.current=a,GE(a),fd(),Oe=A,ke=w,Tn.transition=g}else r.current=a;if(bu&&(bu=!1,li=r,Du=f),g=r.pendingLanes,g===0&&(ai=null),Vl(a.stateNode),Zt(r,We()),s!==null)for(d=r.onRecoverableError,a=0;a<s.length;a++)f=s[a],d(f.value,{componentStack:f.stack,digest:f.digest});if(Nu)throw Nu=!1,r=Sh,Sh=null,r;return(Du&1)!==0&&r.tag!==0&&_o(),g=r.pendingLanes,(g&1)!==0?r===xh?ja++:(ja=0,xh=r):ja=0,ri(),null}function _o(){if(li!==null){var r=Qr(Du),s=Tn.transition,a=ke;try{if(Tn.transition=null,ke=16>r?16:r,li===null)var d=!1;else{if(r=li,li=null,Du=0,(Oe&6)!==0)throw Error(t(331));var f=Oe;for(Oe|=4,le=r.current;le!==null;){var g=le,w=g.child;if((le.flags&16)!==0){var A=g.deletions;if(A!==null){for(var P=0;P<A.length;P++){var z=A[P];for(le=z;le!==null;){var G=le;switch(G.tag){case 0:case 11:case 15:La(8,G,g)}var J=G.child;if(J!==null)J.return=G,le=J;else for(;le!==null;){G=le;var H=G.sibling,se=G.return;if(kg(G),G===z){le=null;break}if(H!==null){H.return=se,le=H;break}le=se}}}var ue=g.alternate;if(ue!==null){var de=ue.child;if(de!==null){ue.child=null;do{var rt=de.sibling;de.sibling=null,de=rt}while(de!==null)}}le=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,le=w;else e:for(;le!==null;){if(g=le,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:La(9,g,g.return)}var F=g.sibling;if(F!==null){F.return=g.return,le=F;break e}le=g.return}}var D=r.current;for(le=D;le!==null;){w=le;var U=w.child;if((w.subtreeFlags&2064)!==0&&U!==null)U.return=w,le=U;else e:for(w=D;le!==null;){if(A=le,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:Cu(9,A)}}catch(fe){et(A,A.return,fe)}if(A===w){le=null;break e}var Z=A.sibling;if(Z!==null){Z.return=A.return,le=Z;break e}le=A.return}}if(Oe=f,ri(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Bi,r)}catch{}d=!0}return d}finally{ke=a,Tn.transition=s}}return!1}function qg(r,s,a){s=mo(a,s),s=ug(r,s,1),r=si(r,s,1),s=Ht(),r!==null&&(Kr(r,1,s),Zt(r,s))}function et(r,s,a){if(r.tag===3)qg(r,r,a);else for(;s!==null;){if(s.tag===3){qg(s,r,a);break}else if(s.tag===1){var d=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(ai===null||!ai.has(d))){r=mo(a,r),r=cg(s,r,1),s=si(s,r,1),r=Ht(),s!==null&&(Kr(s,1,r),Zt(s,r));break}}s=s.return}}function eT(r,s,a){var d=r.pingCache;d!==null&&d.delete(s),s=Ht(),r.pingedLanes|=r.suspendedLanes&a,wt===r&&(At&a)===a&&(ft===4||ft===3&&(At&130023424)===At&&500>We()-Ih?rs(r,0):Th|=a),Zt(r,s)}function Hg(r,s){s===0&&((r.mode&1)===0?s=1:(s=Bs,Bs<<=1,(Bs&130023424)===0&&(Bs=4194304)));var a=Ht();r=Ar(r,s),r!==null&&(Kr(r,s,a),Zt(r,a))}function tT(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),Hg(r,a)}function nT(r,s){var a=0;switch(r.tag){case 13:var d=r.stateNode,f=r.memoizedState;f!==null&&(a=f.retryLane);break;case 19:d=r.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(s),Hg(r,a)}var Kg;Kg=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Qt.current)Xt=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return Xt=!1,$E(r,s,a);Xt=(r.flags&131072)!==0}else Xt=!1,Qe&&(s.flags&1048576)!==0&&Am(s,du,s.index);switch(s.lanes=0,s.tag){case 2:var d=s.type;Au(r,s),r=s.pendingProps;var f=oo(s,Lt.current);fo(s,a),f=eh(null,s,d,r,f,a);var g=th();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Yt(d)?(g=!0,lu(s)):g=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Kd(s),f.updater=Su,s.stateNode=f,f._reactInternals=s,ah(s,d,r,a),s=dh(null,s,d,!0,g,a)):(s.tag=0,Qe&&g&&Md(s),qt(null,s,f,a),s=s.child),s;case 16:d=s.elementType;e:{switch(Au(r,s),r=s.pendingProps,f=d._init,d=f(d._payload),s.type=d,f=s.tag=iT(d),r=Mn(d,r),f){case 0:s=ch(null,s,d,r,a);break e;case 1:s=_g(null,s,d,r,a);break e;case 11:s=pg(null,s,d,r,a);break e;case 14:s=mg(null,s,d,Mn(d.type,r),a);break e}throw Error(t(306,d,""))}return s;case 0:return d=s.type,f=s.pendingProps,f=s.elementType===d?f:Mn(d,f),ch(r,s,d,f,a);case 1:return d=s.type,f=s.pendingProps,f=s.elementType===d?f:Mn(d,f),_g(r,s,d,f,a);case 3:e:{if(wg(s),r===null)throw Error(t(387));d=s.pendingProps,g=s.memoizedState,f=g.element,Lm(r,s),yu(s,d,null,a);var w=s.memoizedState;if(d=w.element,g.isDehydrated)if(g={element:d,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){f=mo(Error(t(423)),s),s=Eg(r,s,d,a,f);break e}else if(d!==f){f=mo(Error(t(424)),s),s=Eg(r,s,d,a,f);break e}else for(un=ei(s.stateNode.containerInfo.firstChild),ln=s,Qe=!0,Vn=null,a=Dm(s,null,d,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(uo(),d===f){s=Cr(r,s,a);break e}qt(r,s,d,a)}s=s.child}return s;case 5:return jm(s),r===null&&Ud(s),d=s.type,f=s.pendingProps,g=r!==null?r.memoizedProps:null,w=f.children,Nd(d,f)?w=null:g!==null&&Nd(d,g)&&(s.flags|=32),vg(r,s),qt(r,s,w,a),s.child;case 6:return r===null&&Ud(s),null;case 13:return Tg(r,s,a);case 4:return Gd(s,s.stateNode.containerInfo),d=s.pendingProps,r===null?s.child=co(s,null,d,a):qt(r,s,d,a),s.child;case 11:return d=s.type,f=s.pendingProps,f=s.elementType===d?f:Mn(d,f),pg(r,s,d,f,a);case 7:return qt(r,s,s.pendingProps,a),s.child;case 8:return qt(r,s,s.pendingProps.children,a),s.child;case 12:return qt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(d=s.type._context,f=s.pendingProps,g=s.memoizedProps,w=f.value,qe(pu,d._currentValue),d._currentValue=w,g!==null)if(Ln(g.value,w)){if(g.children===f.children&&!Qt.current){s=Cr(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var A=g.dependencies;if(A!==null){w=g.child;for(var P=A.firstContext;P!==null;){if(P.context===d){if(g.tag===1){P=Rr(-1,a&-a),P.tag=2;var z=g.updateQueue;if(z!==null){z=z.shared;var G=z.pending;G===null?P.next=P:(P.next=G.next,G.next=P),z.pending=P}}g.lanes|=a,P=g.alternate,P!==null&&(P.lanes|=a),qd(g.return,a,s),A.lanes|=a;break}P=P.next}}else if(g.tag===10)w=g.type===s.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=a,A=w.alternate,A!==null&&(A.lanes|=a),qd(w,a,s),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===s){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}qt(r,s,f.children,a),s=s.child}return s;case 9:return f=s.type,d=s.pendingProps.children,fo(s,a),f=wn(f),d=d(f),s.flags|=1,qt(r,s,d,a),s.child;case 14:return d=s.type,f=Mn(d,s.pendingProps),f=Mn(d.type,f),mg(r,s,d,f,a);case 15:return gg(r,s,s.type,s.pendingProps,a);case 17:return d=s.type,f=s.pendingProps,f=s.elementType===d?f:Mn(d,f),Au(r,s),s.tag=1,Yt(d)?(r=!0,lu(s)):r=!1,fo(s,a),ag(s,d,f),ah(s,d,f,a),dh(null,s,d,!0,r,a);case 19:return Sg(r,s,a);case 22:return yg(r,s,a)}throw Error(t(156,s.tag))};function Gg(r,s){return Fs(r,s)}function rT(r,s,a,d){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(r,s,a,d){return new rT(r,s,a,d)}function Nh(r){return r=r.prototype,!(!r||!r.isReactComponent)}function iT(r){if(typeof r=="function")return Nh(r)?1:0;if(r!=null){if(r=r.$$typeof,r===M)return 11;if(r===Dt)return 14}return 2}function di(r,s){var a=r.alternate;return a===null?(a=In(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Mu(r,s,a,d,f,g){var w=2;if(d=r,typeof r=="function")Nh(r)&&(w=1);else if(typeof r=="string")w=5;else e:switch(r){case k:return ss(a.children,f,g,s);case S:w=8,f|=8;break;case x:return r=In(12,a,s,f|2),r.elementType=x,r.lanes=g,r;case C:return r=In(13,a,s,f),r.elementType=C,r.lanes=g,r;case tt:return r=In(19,a,s,f),r.elementType=tt,r.lanes=g,r;case Be:return ju(a,f,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case N:w=10;break e;case O:w=9;break e;case M:w=11;break e;case Dt:w=14;break e;case Ot:w=16,d=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=In(w,a,s,f),s.elementType=r,s.type=d,s.lanes=g,s}function ss(r,s,a,d){return r=In(7,r,d,s),r.lanes=a,r}function ju(r,s,a,d){return r=In(22,r,d,s),r.elementType=Be,r.lanes=a,r.stateNode={isHidden:!1},r}function bh(r,s,a){return r=In(6,r,null,s),r.lanes=a,r}function Dh(r,s,a){return s=In(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function sT(r,s,a,d,f){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hr(0),this.expirationTimes=Hr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hr(0),this.identifierPrefix=d,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Oh(r,s,a,d,f,g,w,A,P){return r=new sT(r,s,a,A,P),s===1?(s=1,g===!0&&(s|=8)):s=0,g=In(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:d,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kd(g),r}function oT(r,s,a){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ce,key:d==null?null:""+d,children:r,containerInfo:s,implementation:a}}function Qg(r){if(!r)return ni;r=r._reactInternals;e:{if(Cn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Yt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Yt(a))return Im(r,a,s)}return s}function Yg(r,s,a,d,f,g,w,A,P){return r=Oh(a,d,!0,r,f,g,w,A,P),r.context=Qg(null),a=r.current,d=Ht(),f=ui(a),g=Rr(d,f),g.callback=s??null,si(a,g,f),r.current.lanes=f,Kr(r,f,d),Zt(r,d),r}function Fu(r,s,a,d){var f=s.current,g=Ht(),w=ui(f);return a=Qg(a),s.context===null?s.context=a:s.pendingContext=a,s=Rr(g,w),s.payload={element:r},d=d===void 0?null:d,d!==null&&(s.callback=d),r=si(f,s,w),r!==null&&(Un(r,f,w,g),gu(r,f,w)),w}function Uu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Xg(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function Lh(r,s){Xg(r,s),(r=r.alternate)&&Xg(r,s)}function aT(){return null}var Jg=typeof reportError=="function"?reportError:function(r){console.error(r)};function Vh(r){this._internalRoot=r}Bu.prototype.render=Vh.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Fu(r,s,null,null)},Bu.prototype.unmount=Vh.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;ns(function(){Fu(null,r,null,null)}),s[Tr]=null}};function Bu(r){this._internalRoot=r}Bu.prototype.unstable_scheduleHydration=function(r){if(r){var s=Bl();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Yn.length&&s!==0&&s<Yn[a].priority;a++);Yn.splice(a,0,r),a===0&&Wl(r)}};function Mh(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function zu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Zg(){}function lT(r,s,a,d,f){if(f){if(typeof d=="function"){var g=d;d=function(){var z=Uu(w);g.call(z)}}var w=Yg(s,d,r,0,null,!1,!1,"",Zg);return r._reactRootContainer=w,r[Tr]=w.current,Ta(r.nodeType===8?r.parentNode:r),ns(),w}for(;f=r.lastChild;)r.removeChild(f);if(typeof d=="function"){var A=d;d=function(){var z=Uu(P);A.call(z)}}var P=Oh(r,0,!1,null,null,!1,!1,"",Zg);return r._reactRootContainer=P,r[Tr]=P.current,Ta(r.nodeType===8?r.parentNode:r),ns(function(){Fu(s,P,a,d)}),P}function $u(r,s,a,d,f){var g=a._reactRootContainer;if(g){var w=g;if(typeof f=="function"){var A=f;f=function(){var P=Uu(w);A.call(P)}}Fu(s,w,r,f)}else w=lT(a,s,r,f,d);return Uu(w)}Fl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=qr(s.pendingLanes);a!==0&&(Gr(s,a|1),Zt(s,We()),(Oe&6)===0&&(vo=We()+500,ri()))}break;case 13:ns(function(){var d=Ar(r,1);if(d!==null){var f=Ht();Un(d,r,1,f)}}),Lh(r,1)}},zs=function(r){if(r.tag===13){var s=Ar(r,134217728);if(s!==null){var a=Ht();Un(s,r,134217728,a)}Lh(r,134217728)}},Ul=function(r){if(r.tag===13){var s=ui(r),a=Ar(r,s);if(a!==null){var d=Ht();Un(a,r,s,d)}Lh(r,s)}},Bl=function(){return ke},zl=function(r,s){var a=ke;try{return ke=r,s()}finally{ke=a}},Ds=function(r,s,a){switch(s){case"input":if(Ko(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var d=a[s];if(d!==r&&d.form===r.form){var f=ou(d);if(!f)throw Error(t(90));Rs(d),Ko(d,f)}}}break;case"textarea":Ns(r,a);break;case"select":s=a.value,s!=null&&pr(r,!!a.multiple,s,!1)}},Vi=Ch,ra=ns;var uT={usingClientEntryPoint:!1,Events:[xa,io,ou,Gn,na,Ch]},Fa={findFiberByHostInstance:Gi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cT={bundleType:Fa.bundleType,version:Fa.version,rendererPackageName:Fa.rendererPackageName,rendererConfig:Fa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:re.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=oa(r),r===null?null:r.stateNode},findFiberByHostInstance:Fa.findFiberByHostInstance||aT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wu.isDisabled&&Wu.supportsFiber)try{Bi=Wu.inject(cT),rn=Wu}catch{}}return en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uT,en.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mh(s))throw Error(t(200));return oT(r,s,null,a)},en.createRoot=function(r,s){if(!Mh(r))throw Error(t(299));var a=!1,d="",f=Jg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=Oh(r,1,!1,null,null,a,!1,d,f),r[Tr]=s.current,Ta(r.nodeType===8?r.parentNode:r),new Vh(s)},en.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=oa(s),r=r===null?null:r.stateNode,r},en.flushSync=function(r){return ns(r)},en.hydrate=function(r,s,a){if(!zu(s))throw Error(t(200));return $u(null,r,s,!0,a)},en.hydrateRoot=function(r,s,a){if(!Mh(r))throw Error(t(405));var d=a!=null&&a.hydratedSources||null,f=!1,g="",w=Jg;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),s=Yg(s,null,r,1,a??null,f,!1,g,w),r[Tr]=s.current,Ta(r),d)for(r=0;r<d.length;r++)a=d[r],f=a._getVersion,f=f(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,f]:s.mutableSourceEagerHydrationData.push(a,f);return new Bu(s)},en.render=function(r,s,a){if(!zu(s))throw Error(t(200));return $u(null,r,s,!1,a)},en.unmountComponentAtNode=function(r){if(!zu(r))throw Error(t(40));return r._reactRootContainer?(ns(function(){$u(null,null,r,!1,function(){r._reactRootContainer=null,r[Tr]=null})}),!0):!1},en.unstable_batchedUpdates=Ch,en.unstable_renderSubtreeIntoContainer=function(r,s,a,d){if(!zu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return $u(r,s,a,!1,d)},en.version="18.3.1-next-f1338f8080-20240426",en}var ay;function Jv(){if(ay)return Bh.exports;ay=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Bh.exports=TT(),Bh.exports}var ly;function IT(){if(ly)return qu;ly=1;var n=Jv();return qu.createRoot=n.createRoot,qu.hydrateRoot=n.hydrateRoot,qu}var ST=IT(),Wh={exports:{}},qh={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uy;function xT(){if(uy)return qh;uy=1;var n=jc();function e(p,y){return p===y&&(p!==0||1/p===1/y)||p!==p&&y!==y}var t=typeof Object.is=="function"?Object.is:e,i=n.useSyncExternalStore,o=n.useRef,l=n.useEffect,c=n.useMemo,h=n.useDebugValue;return qh.useSyncExternalStoreWithSelector=function(p,y,_,I,R){var L=o(null);if(L.current===null){var W={hasValue:!1,value:null};L.current=W}else W=L.current;L=c(function(){function b(ae){if(!Y){if(Y=!0,ee=ae,ae=I(ae),R!==void 0&&W.hasValue){var ce=W.value;if(R(ce,ae))return te=ce}return te=ae}if(ce=te,t(ee,ae))return ce;var k=I(ae);return R!==void 0&&R(ce,k)?(ee=ae,ce):(ee=ae,te=k)}var Y=!1,ee,te,re=_===void 0?null:_;return[function(){return b(y())},re===null?void 0:function(){return b(re())}]},[y,_,I,R]);var B=i(p,L[0],L[1]);return l(function(){W.hasValue=!0,W.value=B},[B]),h(B),B},qh}var cy;function AT(){return cy||(cy=1,Wh.exports=xT()),Wh.exports}var RT=AT();function CT(n){n()}function kT(){let n=null,e=null;return{clear(){n=null,e=null},notify(){CT(()=>{let t=n;for(;t;)t.callback(),t=t.next})},get(){const t=[];let i=n;for(;i;)t.push(i),i=i.next;return t},subscribe(t){let i=!0;const o=e={callback:t,next:null,prev:e};return o.prev?o.prev.next=o:n=o,function(){!i||n===null||(i=!1,o.next?o.next.prev=o.prev:e=o.prev,o.prev?o.prev.next=o.next:n=o.next)}}}}var dy={notify(){},get:()=>[]};function PT(n,e){let t,i=dy,o=0,l=!1;function c(B){_();const b=i.subscribe(B);let Y=!1;return()=>{Y||(Y=!0,b(),I())}}function h(){i.notify()}function p(){W.onStateChange&&W.onStateChange()}function y(){return l}function _(){o++,t||(t=n.subscribe(p),i=kT())}function I(){o--,t&&o===0&&(t(),t=void 0,i.clear(),i=dy)}function R(){l||(l=!0,_())}function L(){l&&(l=!1,I())}const W={addNestedSub:c,notifyNestedSubs:h,handleChangeWrapper:p,isSubscribed:y,trySubscribe:R,tryUnsubscribe:L,getListeners:()=>i};return W}var NT=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",bT=NT(),DT=()=>typeof navigator<"u"&&navigator.product==="ReactNative",OT=DT(),LT=()=>bT||OT?K.useLayoutEffect:K.useEffect,VT=LT(),Hh=Symbol.for("react-redux-context"),Kh=typeof globalThis<"u"?globalThis:{};function MT(){if(!K.createContext)return{};const n=Kh[Hh]??(Kh[Hh]=new Map);let e=n.get(K.createContext);return e||(e=K.createContext(null),n.set(K.createContext,e)),e}var xi=MT();function jT(n){const{children:e,context:t,serverState:i,store:o}=n,l=K.useMemo(()=>{const p=PT(o);return{store:o,subscription:p,getServerState:i?()=>i:void 0}},[o,i]),c=K.useMemo(()=>o.getState(),[o]);VT(()=>{const{subscription:p}=l;return p.onStateChange=p.notifyNestedSubs,p.trySubscribe(),c!==o.getState()&&p.notifyNestedSubs(),()=>{p.tryUnsubscribe(),p.onStateChange=void 0}},[l,c]);const h=t||xi;return K.createElement(h.Provider,{value:l},e)}var FT=jT;function Gf(n=xi){return function(){return K.useContext(n)}}var Zv=Gf();function e_(n=xi){const e=n===xi?Zv:Gf(n),t=()=>{const{store:i}=e();return i};return Object.assign(t,{withTypes:()=>t}),t}var UT=e_();function BT(n=xi){const e=n===xi?UT:e_(n),t=()=>e().dispatch;return Object.assign(t,{withTypes:()=>t}),t}var Fc=BT(),zT=(n,e)=>n===e;function $T(n=xi){const e=n===xi?Zv:Gf(n),t=(i,o={})=>{const{equalityFn:l=zT}=typeof o=="function"?{equalityFn:o}:o,c=e(),{store:h,subscription:p,getServerState:y}=c;K.useRef(!0);const _=K.useCallback({[i.name](R){return i(R)}}[i.name],[i]),I=RT.useSyncExternalStoreWithSelector(p.addNestedSub,h.getState,y||h.getState,_,l);return K.useDebugValue(I),I};return Object.assign(t,{withTypes:()=>t}),t}var ml=$T();function Rt(n){return`Minified Redux error #${n}; visit https://redux.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `}var WT=typeof Symbol=="function"&&Symbol.observable||"@@observable",hy=WT,Gh=()=>Math.random().toString(36).substring(7).split("").join("."),qT={INIT:`@@redux/INIT${Gh()}`,REPLACE:`@@redux/REPLACE${Gh()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Gh()}`},hc=qT;function Qf(n){if(typeof n!="object"||n===null)return!1;let e=n;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(n)===e||Object.getPrototypeOf(n)===null}function t_(n,e,t){if(typeof n!="function")throw new Error(Rt(2));if(typeof e=="function"&&typeof t=="function"||typeof t=="function"&&typeof arguments[3]=="function")throw new Error(Rt(0));if(typeof e=="function"&&typeof t>"u"&&(t=e,e=void 0),typeof t<"u"){if(typeof t!="function")throw new Error(Rt(1));return t(t_)(n,e)}let i=n,o=e,l=new Map,c=l,h=0,p=!1;function y(){c===l&&(c=new Map,l.forEach((b,Y)=>{c.set(Y,b)}))}function _(){if(p)throw new Error(Rt(3));return o}function I(b){if(typeof b!="function")throw new Error(Rt(4));if(p)throw new Error(Rt(5));let Y=!0;y();const ee=h++;return c.set(ee,b),function(){if(Y){if(p)throw new Error(Rt(6));Y=!1,y(),c.delete(ee),l=null}}}function R(b){if(!Qf(b))throw new Error(Rt(7));if(typeof b.type>"u")throw new Error(Rt(8));if(typeof b.type!="string")throw new Error(Rt(17));if(p)throw new Error(Rt(9));try{p=!0,o=i(o,b)}finally{p=!1}return(l=c).forEach(ee=>{ee()}),b}function L(b){if(typeof b!="function")throw new Error(Rt(10));i=b,R({type:hc.REPLACE})}function W(){const b=I;return{subscribe(Y){if(typeof Y!="object"||Y===null)throw new Error(Rt(11));function ee(){const re=Y;re.next&&re.next(_())}return ee(),{unsubscribe:b(ee)}},[hy](){return this}}}return R({type:hc.INIT}),{dispatch:R,subscribe:I,getState:_,replaceReducer:L,[hy]:W}}function HT(n){Object.keys(n).forEach(e=>{const t=n[e];if(typeof t(void 0,{type:hc.INIT})>"u")throw new Error(Rt(12));if(typeof t(void 0,{type:hc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Rt(13))})}function KT(n){const e=Object.keys(n),t={};for(let l=0;l<e.length;l++){const c=e[l];typeof n[c]=="function"&&(t[c]=n[c])}const i=Object.keys(t);let o;try{HT(t)}catch(l){o=l}return function(c={},h){if(o)throw o;let p=!1;const y={};for(let _=0;_<i.length;_++){const I=i[_],R=t[I],L=c[I],W=R(L,h);if(typeof W>"u")throw h&&h.type,new Error(Rt(14));y[I]=W,p=p||W!==L}return p=p||i.length!==Object.keys(c).length,p?y:c}}function fc(...n){return n.length===0?e=>e:n.length===1?n[0]:n.reduce((e,t)=>(...i)=>e(t(...i)))}function GT(...n){return e=>(t,i)=>{const o=e(t,i);let l=()=>{throw new Error(Rt(15))};const c={getState:o.getState,dispatch:(p,...y)=>l(p,...y)},h=n.map(p=>p(c));return l=fc(...h)(o.dispatch),{...o,dispatch:l}}}function QT(n){return Qf(n)&&"type"in n&&typeof n.type=="string"}var n_=Symbol.for("immer-nothing"),fy=Symbol.for("immer-draftable"),hn=Symbol.for("immer-state");function Bn(n,...e){throw new Error(`[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`)}var Co=Object.getPrototypeOf;function fs(n){return!!n&&!!n[hn]}function Vr(n){var e;return n?r_(n)||Array.isArray(n)||!!n[fy]||!!((e=n.constructor)!=null&&e[fy])||Bc(n)||zc(n):!1}var YT=Object.prototype.constructor.toString();function r_(n){if(!n||typeof n!="object")return!1;const e=Co(n);if(e===null)return!0;const t=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return t===Object?!0:typeof t=="function"&&Function.toString.call(t)===YT}function pc(n,e){Uc(n)===0?Reflect.ownKeys(n).forEach(t=>{e(t,n[t],n)}):n.forEach((t,i)=>e(i,t,n))}function Uc(n){const e=n[hn];return e?e.type_:Array.isArray(n)?1:Bc(n)?2:zc(n)?3:0}function pf(n,e){return Uc(n)===2?n.has(e):Object.prototype.hasOwnProperty.call(n,e)}function i_(n,e,t){const i=Uc(n);i===2?n.set(e,t):i===3?n.add(t):n[e]=t}function XT(n,e){return n===e?n!==0||1/n===1/e:n!==n&&e!==e}function Bc(n){return n instanceof Map}function zc(n){return n instanceof Set}function os(n){return n.copy_||n.base_}function mf(n,e){if(Bc(n))return new Map(n);if(zc(n))return new Set(n);if(Array.isArray(n))return Array.prototype.slice.call(n);const t=r_(n);if(e===!0||e==="class_only"&&!t){const i=Object.getOwnPropertyDescriptors(n);delete i[hn];let o=Reflect.ownKeys(i);for(let l=0;l<o.length;l++){const c=o[l],h=i[c];h.writable===!1&&(h.writable=!0,h.configurable=!0),(h.get||h.set)&&(i[c]={configurable:!0,writable:!0,enumerable:h.enumerable,value:n[c]})}return Object.create(Co(n),i)}else{const i=Co(n);if(i!==null&&t)return{...n};const o=Object.create(i);return Object.assign(o,n)}}function Yf(n,e=!1){return $c(n)||fs(n)||!Vr(n)||(Uc(n)>1&&(n.set=n.add=n.clear=n.delete=JT),Object.freeze(n),e&&Object.entries(n).forEach(([t,i])=>Yf(i,!0))),n}function JT(){Bn(2)}function $c(n){return Object.isFrozen(n)}var ZT={};function ps(n){const e=ZT[n];return e||Bn(0,n),e}var tl;function s_(){return tl}function eI(n,e){return{drafts_:[],parent_:n,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function py(n,e){e&&(ps("Patches"),n.patches_=[],n.inversePatches_=[],n.patchListener_=e)}function gf(n){yf(n),n.drafts_.forEach(tI),n.drafts_=null}function yf(n){n===tl&&(tl=n.parent_)}function my(n){return tl=eI(tl,n)}function tI(n){const e=n[hn];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function gy(n,e){e.unfinalizedDrafts_=e.drafts_.length;const t=e.drafts_[0];return n!==void 0&&n!==t?(t[hn].modified_&&(gf(e),Bn(4)),Vr(n)&&(n=mc(e,n),e.parent_||gc(e,n)),e.patches_&&ps("Patches").generateReplacementPatches_(t[hn].base_,n,e.patches_,e.inversePatches_)):n=mc(e,t,[]),gf(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),n!==n_?n:void 0}function mc(n,e,t){if($c(e))return e;const i=e[hn];if(!i)return pc(e,(o,l)=>yy(n,i,e,o,l,t)),e;if(i.scope_!==n)return e;if(!i.modified_)return gc(n,i.base_,!0),i.base_;if(!i.finalized_){i.finalized_=!0,i.scope_.unfinalizedDrafts_--;const o=i.copy_;let l=o,c=!1;i.type_===3&&(l=new Set(o),o.clear(),c=!0),pc(l,(h,p)=>yy(n,i,o,h,p,t,c)),gc(n,o,!1),t&&n.patches_&&ps("Patches").generatePatches_(i,t,n.patches_,n.inversePatches_)}return i.copy_}function yy(n,e,t,i,o,l,c){if(fs(o)){const h=l&&e&&e.type_!==3&&!pf(e.assigned_,i)?l.concat(i):void 0,p=mc(n,o,h);if(i_(t,i,p),fs(p))n.canAutoFreeze_=!1;else return}else c&&t.add(o);if(Vr(o)&&!$c(o)){if(!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1)return;mc(n,o),(!e||!e.scope_.parent_)&&typeof i!="symbol"&&Object.prototype.propertyIsEnumerable.call(t,i)&&gc(n,o)}}function gc(n,e,t=!1){!n.parent_&&n.immer_.autoFreeze_&&n.canAutoFreeze_&&Yf(e,t)}function nI(n,e){const t=Array.isArray(n),i={type_:t?1:0,scope_:e?e.scope_:s_(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:n,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=i,l=Xf;t&&(o=[i],l=nl);const{revoke:c,proxy:h}=Proxy.revocable(o,l);return i.draft_=h,i.revoke_=c,h}var Xf={get(n,e){if(e===hn)return n;const t=os(n);if(!pf(t,e))return rI(n,t,e);const i=t[e];return n.finalized_||!Vr(i)?i:i===Qh(n.base_,e)?(Yh(n),n.copy_[e]=_f(i,n)):i},has(n,e){return e in os(n)},ownKeys(n){return Reflect.ownKeys(os(n))},set(n,e,t){const i=o_(os(n),e);if(i!=null&&i.set)return i.set.call(n.draft_,t),!0;if(!n.modified_){const o=Qh(os(n),e),l=o==null?void 0:o[hn];if(l&&l.base_===t)return n.copy_[e]=t,n.assigned_[e]=!1,!0;if(XT(t,o)&&(t!==void 0||pf(n.base_,e)))return!0;Yh(n),vf(n)}return n.copy_[e]===t&&(t!==void 0||e in n.copy_)||Number.isNaN(t)&&Number.isNaN(n.copy_[e])||(n.copy_[e]=t,n.assigned_[e]=!0),!0},deleteProperty(n,e){return Qh(n.base_,e)!==void 0||e in n.base_?(n.assigned_[e]=!1,Yh(n),vf(n)):delete n.assigned_[e],n.copy_&&delete n.copy_[e],!0},getOwnPropertyDescriptor(n,e){const t=os(n),i=Reflect.getOwnPropertyDescriptor(t,e);return i&&{writable:!0,configurable:n.type_!==1||e!=="length",enumerable:i.enumerable,value:t[e]}},defineProperty(){Bn(11)},getPrototypeOf(n){return Co(n.base_)},setPrototypeOf(){Bn(12)}},nl={};pc(Xf,(n,e)=>{nl[n]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});nl.deleteProperty=function(n,e){return nl.set.call(this,n,e,void 0)};nl.set=function(n,e,t){return Xf.set.call(this,n[0],e,t,n[0])};function Qh(n,e){const t=n[hn];return(t?os(t):n)[e]}function rI(n,e,t){var o;const i=o_(e,t);return i?"value"in i?i.value:(o=i.get)==null?void 0:o.call(n.draft_):void 0}function o_(n,e){if(!(e in n))return;let t=Co(n);for(;t;){const i=Object.getOwnPropertyDescriptor(t,e);if(i)return i;t=Co(t)}}function vf(n){n.modified_||(n.modified_=!0,n.parent_&&vf(n.parent_))}function Yh(n){n.copy_||(n.copy_=mf(n.base_,n.scope_.immer_.useStrictShallowCopy_))}var iI=class{constructor(n){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,i)=>{if(typeof e=="function"&&typeof t!="function"){const l=t;t=e;const c=this;return function(p=l,...y){return c.produce(p,_=>t.call(this,_,...y))}}typeof t!="function"&&Bn(6),i!==void 0&&typeof i!="function"&&Bn(7);let o;if(Vr(e)){const l=my(this),c=_f(e,void 0);let h=!0;try{o=t(c),h=!1}finally{h?gf(l):yf(l)}return py(l,i),gy(o,l)}else if(!e||typeof e!="object"){if(o=t(e),o===void 0&&(o=e),o===n_&&(o=void 0),this.autoFreeze_&&Yf(o,!0),i){const l=[],c=[];ps("Patches").generateReplacementPatches_(e,o,l,c),i(l,c)}return o}else Bn(1,e)},this.produceWithPatches=(e,t)=>{if(typeof e=="function")return(c,...h)=>this.produceWithPatches(c,p=>e(p,...h));let i,o;return[this.produce(e,t,(c,h)=>{i=c,o=h}),i,o]},typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze),typeof(n==null?void 0:n.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(n.useStrictShallowCopy)}createDraft(n){Vr(n)||Bn(8),fs(n)&&(n=sI(n));const e=my(this),t=_f(n,void 0);return t[hn].isManual_=!0,yf(e),t}finishDraft(n,e){const t=n&&n[hn];(!t||!t.isManual_)&&Bn(9);const{scope_:i}=t;return py(i,e),gy(void 0,i)}setAutoFreeze(n){this.autoFreeze_=n}setUseStrictShallowCopy(n){this.useStrictShallowCopy_=n}applyPatches(n,e){let t;for(t=e.length-1;t>=0;t--){const o=e[t];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}t>-1&&(e=e.slice(t+1));const i=ps("Patches").applyPatches_;return fs(n)?i(n,e):this.produce(n,o=>i(o,e))}};function _f(n,e){const t=Bc(n)?ps("MapSet").proxyMap_(n,e):zc(n)?ps("MapSet").proxySet_(n,e):nI(n,e);return(e?e.scope_:s_()).drafts_.push(t),t}function sI(n){return fs(n)||Bn(10,n),a_(n)}function a_(n){if(!Vr(n)||$c(n))return n;const e=n[hn];let t;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,t=mf(n,e.scope_.immer_.useStrictShallowCopy_)}else t=mf(n,!0);return pc(t,(i,o)=>{i_(t,i,a_(o))}),e&&(e.finalized_=!1),t}var fn=new iI,l_=fn.produce;fn.produceWithPatches.bind(fn);fn.setAutoFreeze.bind(fn);fn.setUseStrictShallowCopy.bind(fn);fn.applyPatches.bind(fn);fn.createDraft.bind(fn);fn.finishDraft.bind(fn);function u_(n){return({dispatch:t,getState:i})=>o=>l=>typeof l=="function"?l(t,i,n):o(l)}var oI=u_(),aI=u_,lI=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?fc:fc.apply(null,arguments)},uI=n=>n&&typeof n.match=="function";function Ga(n,e){function t(...i){if(e){let o=e(...i);if(!o)throw new Error(Dr(0));return{type:n,payload:o.payload,..."meta"in o&&{meta:o.meta},..."error"in o&&{error:o.error}}}return{type:n,payload:i[0]}}return t.toString=()=>`${n}`,t.type=n,t.match=i=>QT(i)&&i.type===n,t}var c_=class za extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,za.prototype)}static get[Symbol.species](){return za}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new za(...e[0].concat(this)):new za(...e.concat(this))}};function vy(n){return Vr(n)?l_(n,()=>{}):n}function Hu(n,e,t){return n.has(e)?n.get(e):n.set(e,t(e)).get(e)}function cI(n){return typeof n=="boolean"}var dI=()=>function(e){const{thunk:t=!0,immutableCheck:i=!0,serializableCheck:o=!0,actionCreatorCheck:l=!0}=e??{};let c=new c_;return t&&(cI(t)?c.push(oI):c.push(aI(t.extraArgument))),c},hI="RTK_autoBatch",_y=n=>e=>{setTimeout(e,n)},fI=(n={type:"raf"})=>e=>(...t)=>{const i=e(...t);let o=!0,l=!1,c=!1;const h=new Set,p=n.type==="tick"?queueMicrotask:n.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:_y(10):n.type==="callback"?n.queueNotification:_y(n.timeout),y=()=>{c=!1,l&&(l=!1,h.forEach(_=>_()))};return Object.assign({},i,{subscribe(_){const I=()=>o&&_(),R=i.subscribe(I);return h.add(_),()=>{R(),h.delete(_)}},dispatch(_){var I;try{return o=!((I=_==null?void 0:_.meta)!=null&&I[hI]),l=!o,l&&(c||(c=!0,p(y))),i.dispatch(_)}finally{o=!0}}})},pI=n=>function(t){const{autoBatch:i=!0}=t??{};let o=new c_(n);return i&&o.push(fI(typeof i=="object"?i:void 0)),o};function mI(n){const e=dI(),{reducer:t=void 0,middleware:i,devTools:o=!0,preloadedState:l=void 0,enhancers:c=void 0}=n||{};let h;if(typeof t=="function")h=t;else if(Qf(t))h=KT(t);else throw new Error(Dr(1));let p;typeof i=="function"?p=i(e):p=e();let y=fc;o&&(y=lI({trace:!1,...typeof o=="object"&&o}));const _=GT(...p),I=pI(_);let R=typeof c=="function"?c(I):I();const L=y(...R);return t_(h,l,L)}function d_(n){const e={},t=[];let i;const o={addCase(l,c){const h=typeof l=="string"?l:l.type;if(!h)throw new Error(Dr(28));if(h in e)throw new Error(Dr(29));return e[h]=c,o},addMatcher(l,c){return t.push({matcher:l,reducer:c}),o},addDefaultCase(l){return i=l,o}};return n(o),[e,t,i]}function gI(n){return typeof n=="function"}function yI(n,e){let[t,i,o]=d_(e),l;if(gI(n))l=()=>vy(n());else{const h=vy(n);l=()=>h}function c(h=l(),p){let y=[t[p.type],...i.filter(({matcher:_})=>_(p)).map(({reducer:_})=>_)];return y.filter(_=>!!_).length===0&&(y=[o]),y.reduce((_,I)=>{if(I)if(fs(_)){const L=I(_,p);return L===void 0?_:L}else{if(Vr(_))return l_(_,R=>I(R,p));{const R=I(_,p);if(R===void 0){if(_===null)return _;throw Error("A case reducer on a non-draftable value must not return undefined")}return R}}return _},h)}return c.getInitialState=l,c}var vI=(n,e)=>uI(n)?n.match(e):n(e);function _I(...n){return e=>n.some(t=>vI(t,e))}var wI="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",EI=(n=21)=>{let e="",t=n;for(;t--;)e+=wI[Math.random()*64|0];return e},TI=["name","message","stack","code"],Xh=class{constructor(n,e){jh(this,"_type");this.payload=n,this.meta=e}},wy=class{constructor(n,e){jh(this,"_type");this.payload=n,this.meta=e}},II=n=>{if(typeof n=="object"&&n!==null){const e={};for(const t of TI)typeof n[t]=="string"&&(e[t]=n[t]);return e}return{message:String(n)}},Ey="External signal was aborted",Jf=(()=>{function n(e,t,i){const o=Ga(e+"/fulfilled",(p,y,_,I)=>({payload:p,meta:{...I||{},arg:_,requestId:y,requestStatus:"fulfilled"}})),l=Ga(e+"/pending",(p,y,_)=>({payload:void 0,meta:{..._||{},arg:y,requestId:p,requestStatus:"pending"}})),c=Ga(e+"/rejected",(p,y,_,I,R)=>({payload:I,error:(i&&i.serializeError||II)(p||"Rejected"),meta:{...R||{},arg:_,requestId:y,rejectedWithValue:!!I,requestStatus:"rejected",aborted:(p==null?void 0:p.name)==="AbortError",condition:(p==null?void 0:p.name)==="ConditionError"}}));function h(p,{signal:y}={}){return(_,I,R)=>{const L=i!=null&&i.idGenerator?i.idGenerator(p):EI(),W=new AbortController;let B,b;function Y(te){b=te,W.abort()}y&&(y.aborted?Y(Ey):y.addEventListener("abort",()=>Y(Ey),{once:!0}));const ee=async function(){var ae,ce;let te;try{let k=(ae=i==null?void 0:i.condition)==null?void 0:ae.call(i,p,{getState:I,extra:R});if(xI(k)&&(k=await k),k===!1||W.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const S=new Promise((x,N)=>{B=()=>{N({name:"AbortError",message:b||"Aborted"})},W.signal.addEventListener("abort",B)});_(l(L,p,(ce=i==null?void 0:i.getPendingMeta)==null?void 0:ce.call(i,{requestId:L,arg:p},{getState:I,extra:R}))),te=await Promise.race([S,Promise.resolve(t(p,{dispatch:_,getState:I,extra:R,requestId:L,signal:W.signal,abort:Y,rejectWithValue:(x,N)=>new Xh(x,N),fulfillWithValue:(x,N)=>new wy(x,N)})).then(x=>{if(x instanceof Xh)throw x;return x instanceof wy?o(x.payload,L,p,x.meta):o(x,L,p)})])}catch(k){te=k instanceof Xh?c(null,L,p,k.payload,k.meta):c(k,L,p)}finally{B&&W.signal.removeEventListener("abort",B)}return i&&!i.dispatchConditionRejection&&c.match(te)&&te.meta.condition||_(te),te}();return Object.assign(ee,{abort:Y,requestId:L,arg:p,unwrap(){return ee.then(SI)}})}}return Object.assign(h,{pending:l,rejected:c,fulfilled:o,settled:_I(c,o),typePrefix:e})}return n.withTypes=()=>n,n})();function SI(n){if(n.meta&&n.meta.rejectedWithValue)throw n.payload;if(n.error)throw n.error;return n.payload}function xI(n){return n!==null&&typeof n=="object"&&typeof n.then=="function"}var AI=Symbol.for("rtk-slice-createasyncthunk");function RI(n,e){return`${n}/${e}`}function CI({creators:n}={}){var t;const e=(t=n==null?void 0:n.asyncThunk)==null?void 0:t[AI];return function(o){const{name:l,reducerPath:c=l}=o;if(!l)throw new Error(Dr(11));const h=(typeof o.reducers=="function"?o.reducers(NI()):o.reducers)||{},p=Object.keys(h),y={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},_={addCase(re,ae){const ce=typeof re=="string"?re:re.type;if(!ce)throw new Error(Dr(12));if(ce in y.sliceCaseReducersByType)throw new Error(Dr(13));return y.sliceCaseReducersByType[ce]=ae,_},addMatcher(re,ae){return y.sliceMatchers.push({matcher:re,reducer:ae}),_},exposeAction(re,ae){return y.actionCreators[re]=ae,_},exposeCaseReducer(re,ae){return y.sliceCaseReducersByName[re]=ae,_}};p.forEach(re=>{const ae=h[re],ce={reducerName:re,type:RI(l,re),createNotation:typeof o.reducers=="function"};DI(ae)?LI(ce,ae,_,e):bI(ce,ae,_)});function I(){const[re={},ae=[],ce=void 0]=typeof o.extraReducers=="function"?d_(o.extraReducers):[o.extraReducers],k={...re,...y.sliceCaseReducersByType};return yI(o.initialState,S=>{for(let x in k)S.addCase(x,k[x]);for(let x of y.sliceMatchers)S.addMatcher(x.matcher,x.reducer);for(let x of ae)S.addMatcher(x.matcher,x.reducer);ce&&S.addDefaultCase(ce)})}const R=re=>re,L=new Map,W=new WeakMap;let B;function b(re,ae){return B||(B=I()),B(re,ae)}function Y(){return B||(B=I()),B.getInitialState()}function ee(re,ae=!1){function ce(S){let x=S[re];return typeof x>"u"&&ae&&(x=Hu(W,ce,Y)),x}function k(S=R){const x=Hu(L,ae,()=>new WeakMap);return Hu(x,S,()=>{const N={};for(const[O,M]of Object.entries(o.selectors??{}))N[O]=kI(M,S,()=>Hu(W,S,Y),ae);return N})}return{reducerPath:re,getSelectors:k,get selectors(){return k(ce)},selectSlice:ce}}const te={name:l,reducer:b,actions:y.actionCreators,caseReducers:y.sliceCaseReducersByName,getInitialState:Y,...ee(c),injectInto(re,{reducerPath:ae,...ce}={}){const k=ae??c;return re.inject({reducerPath:k,reducer:b},ce),{...te,...ee(k,!0)}}};return te}}function kI(n,e,t,i){function o(l,...c){let h=e(l);return typeof h>"u"&&i&&(h=t()),n(h,...c)}return o.unwrapped=n,o}var PI=CI();function NI(){function n(e,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...t}}return n.withTypes=()=>n,{reducer(e){return Object.assign({[e.name](...t){return e(...t)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,t){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:t}},asyncThunk:n}}function bI({type:n,reducerName:e,createNotation:t},i,o){let l,c;if("reducer"in i){if(t&&!OI(i))throw new Error(Dr(17));l=i.reducer,c=i.prepare}else l=i;o.addCase(n,l).exposeCaseReducer(e,l).exposeAction(e,c?Ga(n,c):Ga(n))}function DI(n){return n._reducerDefinitionType==="asyncThunk"}function OI(n){return n._reducerDefinitionType==="reducerWithPrepare"}function LI({type:n,reducerName:e},t,i,o){if(!o)throw new Error(Dr(18));const{payloadCreator:l,fulfilled:c,pending:h,rejected:p,settled:y,options:_}=t,I=o(n,l,_);i.exposeAction(e,I),c&&i.addCase(I.fulfilled,c),h&&i.addCase(I.pending,h),p&&i.addCase(I.rejected,p),y&&i.addMatcher(I.settled,y),i.exposeCaseReducer(e,{fulfilled:c||Ku,pending:h||Ku,rejected:p||Ku,settled:y||Ku})}function Ku(){}function Dr(n){return`Minified Redux Toolkit error #${n}; visit https://redux-toolkit.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `}var Ty={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},VI=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],c=n[t++],h=n[t++],p=((o&7)<<18|(l&63)<<12|(c&63)<<6|h&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},f_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],c=o+1<n.length,h=c?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,_=l>>2,I=(l&3)<<4|h>>4;let R=(h&15)<<2|y>>6,L=y&63;p||(L=64,c||(R=64)),i.push(t[_],t[I],t[R],t[L])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(h_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):VI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],h=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const I=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||h==null||y==null||I==null)throw new MI;const R=l<<2|h>>4;if(i.push(R),y!==64){const L=h<<4&240|y>>2;if(i.push(L),I!==64){const W=y<<6&192|I;i.push(W)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class MI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jI=function(n){const e=h_(n);return f_.encodeByteArray(e,!0)},yc=function(n){return jI(n).replace(/\./g,"")},p_=function(n){try{return f_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI=()=>FI().__FIREBASE_DEFAULTS__,BI=()=>{if(typeof process>"u"||typeof Ty>"u")return;const n=Ty.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},zI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&p_(n[1]);return e&&JSON.parse(e)},Wc=()=>{try{return UI()||BI()||zI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},m_=n=>{var e,t;return(t=(e=Wc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},$I=n=>{const e=m_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},g_=()=>{var n;return(n=Wc())===null||n===void 0?void 0:n.config},y_=n=>{var e;return(e=Wc())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[yc(JSON.stringify(t)),yc(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function HI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function KI(){var n;const e=(n=Wc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function GI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function v_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function QI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function YI(){const n=zt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function XI(){return!KI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function __(){try{return typeof indexedDB=="object"}catch{return!1}}function w_(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function JI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI="FirebaseError";class Hn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=ZI,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ts.prototype.create)}}class Ts{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?eS(l,i):"Error",h=`${this.serviceName}: ${c} (${o}).`;return new Hn(o,h,i)}}function eS(n,e){return n.replace(tS,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const tS=/\{\$([^}]+)}/g;function nS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function rl(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],c=e[o];if(Iy(l)&&Iy(c)){if(!rl(l,c))return!1}else if(l!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Iy(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function $a(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Wa(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function rS(n,e){const t=new iS(n,e);return t.subscribe.bind(t)}class iS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");sS(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Jh),o.error===void 0&&(o.error=Jh),o.complete===void 0&&(o.complete=Jh);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sS(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Jh(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS=1e3,aS=2,lS=4*60*60*1e3,uS=.5;function Sy(n,e=oS,t=aS){const i=e*Math.pow(t,n),o=Math.round(uS*i*(Math.random()-.5)*2);return Math.min(lS,i+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(n){return n&&n._delegate?n._delegate:n}class Wn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new WI;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hS(e))try{this.getOrInitializeService({instanceIdentifier:as})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=as){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=as){return this.instances.has(e)}getOptions(e=as){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,c]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(l);i===h&&c.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const c=this.instances.get(o);return c&&e(c,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:dS(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=as){return this.component?this.component.multipleInstances?e:as:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dS(n){return n===as?void 0:n}function hS(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new cS(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Pe||(Pe={}));const pS={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},mS=Pe.INFO,gS={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},yS=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=gS[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qc{constructor(e){this.name=e,this._logLevel=mS,this._logHandler=yS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const vS=(n,e)=>e.some(t=>n instanceof t);let xy,Ay;function _S(){return xy||(xy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wS(){return Ay||(Ay=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const E_=new WeakMap,wf=new WeakMap,T_=new WeakMap,Zh=new WeakMap,Zf=new WeakMap;function ES(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(wi(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&E_.set(t,n)}).catch(()=>{}),Zf.set(e,n),e}function TS(n){if(wf.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});wf.set(n,e)}let Ef={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return wf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||T_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return wi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function IS(n){Ef=n(Ef)}function SS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(ef(this),e,...t);return T_.set(i,e.sort?e.sort():[e]),wi(i)}:wS().includes(n)?function(...e){return n.apply(ef(this),e),wi(E_.get(this))}:function(...e){return wi(n.apply(ef(this),e))}}function xS(n){return typeof n=="function"?SS(n):(n instanceof IDBTransaction&&TS(n),vS(n,_S())?new Proxy(n,Ef):n)}function wi(n){if(n instanceof IDBRequest)return ES(n);if(Zh.has(n))return Zh.get(n);const e=xS(n);return e!==n&&(Zh.set(n,e),Zf.set(e,n)),e}const ef=n=>Zf.get(n);function I_(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const c=indexedDB.open(n,e),h=wi(c);return i&&c.addEventListener("upgradeneeded",p=>{i(wi(c.result),p.oldVersion,p.newVersion,wi(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),h.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),h}const AS=["get","getKey","getAll","getAllKeys","count"],RS=["put","add","delete","clear"],tf=new Map;function Ry(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(tf.get(e))return tf.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=RS.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||AS.includes(t)))return;const l=async function(c,...h){const p=this.transaction(c,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(h.shift())),(await Promise.all([y[t](...h),o&&p.done]))[0]};return tf.set(e,l),l}IS(n=>({...n,get:(e,t,i)=>Ry(e,t)||n.get(e,t,i),has:(e,t)=>!!Ry(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(kS(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function kS(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Tf="@firebase/app",Cy="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new qc("@firebase/app"),PS="@firebase/app-compat",NS="@firebase/analytics-compat",bS="@firebase/analytics",DS="@firebase/app-check-compat",OS="@firebase/app-check",LS="@firebase/auth",VS="@firebase/auth-compat",MS="@firebase/database",jS="@firebase/data-connect",FS="@firebase/database-compat",US="@firebase/functions",BS="@firebase/functions-compat",zS="@firebase/installations",$S="@firebase/installations-compat",WS="@firebase/messaging",qS="@firebase/messaging-compat",HS="@firebase/performance",KS="@firebase/performance-compat",GS="@firebase/remote-config",QS="@firebase/remote-config-compat",YS="@firebase/storage",XS="@firebase/storage-compat",JS="@firebase/firestore",ZS="@firebase/vertexai-preview",ex="@firebase/firestore-compat",tx="firebase",nx="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If="[DEFAULT]",rx={[Tf]:"fire-core",[PS]:"fire-core-compat",[bS]:"fire-analytics",[NS]:"fire-analytics-compat",[OS]:"fire-app-check",[DS]:"fire-app-check-compat",[LS]:"fire-auth",[VS]:"fire-auth-compat",[MS]:"fire-rtdb",[jS]:"fire-data-connect",[FS]:"fire-rtdb-compat",[US]:"fire-fn",[BS]:"fire-fn-compat",[zS]:"fire-iid",[$S]:"fire-iid-compat",[WS]:"fire-fcm",[qS]:"fire-fcm-compat",[HS]:"fire-perf",[KS]:"fire-perf-compat",[GS]:"fire-rc",[QS]:"fire-rc-compat",[YS]:"fire-gcs",[XS]:"fire-gcs-compat",[JS]:"fire-fst",[ex]:"fire-fst-compat",[ZS]:"fire-vertex","fire-js":"fire-js",[tx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc=new Map,ix=new Map,Sf=new Map;function ky(n,e){try{n.container.addComponent(e)}catch(t){Mr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ur(n){const e=n.name;if(Sf.has(e))return Mr.debug(`There were multiple attempts to register component ${e}.`),!1;Sf.set(e,n);for(const t of vc.values())ky(t,n);for(const t of ix.values())ky(t,n);return!0}function Is(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ir(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ei=new Ts("app","Firebase",sx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ei.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=nx;function S_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:If,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw Ei.create("bad-app-name",{appName:String(o)});if(t||(t=g_()),!t)throw Ei.create("no-options");const l=vc.get(o);if(l){if(rl(t,l.options)&&rl(i,l.config))return l;throw Ei.create("duplicate-app",{appName:o})}const c=new fS(o);for(const p of Sf.values())c.addComponent(p);const h=new ox(t,i,c);return vc.set(o,h),h}function ep(n=If){const e=vc.get(n);if(!e&&n===If&&g_())return S_();if(!e)throw Ei.create("no-app",{appName:n});return e}function xn(n,e,t){var i;let o=(i=rx[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const h=[`Unable to register library "${o}" with version "${e}":`];l&&h.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&c&&h.push("and"),c&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mr.warn(h.join(" "));return}ur(new Wn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ax="firebase-heartbeat-database",lx=1,il="firebase-heartbeat-store";let nf=null;function x_(){return nf||(nf=I_(ax,lx,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(il)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ei.create("idb-open",{originalErrorMessage:n.message})})),nf}async function ux(n){try{const t=(await x_()).transaction(il),i=await t.objectStore(il).get(A_(n));return await t.done,i}catch(e){if(e instanceof Hn)Mr.warn(e.message);else{const t=Ei.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mr.warn(t.message)}}}async function Py(n,e){try{const i=(await x_()).transaction(il,"readwrite");await i.objectStore(il).put(e,A_(n)),await i.done}catch(t){if(t instanceof Hn)Mr.warn(t.message);else{const i=Ei.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Mr.warn(i.message)}}}function A_(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx=1024,dx=30*24*60*60*1e3;class hx{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new px(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Ny();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const h=new Date(c.date).valueOf();return Date.now()-h<=dx}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Mr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ny(),{heartbeatsToSend:i,unsentEntries:o}=fx(this._heartbeatsCache.heartbeats),l=yc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Mr.warn(t),""}}}function Ny(){return new Date().toISOString().substring(0,10)}function fx(n,e=cx){const t=[];let i=n.slice();for(const o of n){const l=t.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),by(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),by(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class px{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return __()?w_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ux(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Py(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Py(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function by(n){return yc(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mx(n){ur(new Wn("platform-logger",e=>new CS(e),"PRIVATE")),ur(new Wn("heartbeat",e=>new hx(e),"PRIVATE")),xn(Tf,Cy,n),xn(Tf,Cy,"esm2017"),xn("fire-js","")}mx("");var gx="firebase",yx="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xn(gx,yx,"app");function tp(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function R_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vx=R_,C_=new Ts("auth","Firebase",R_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c=new qc("@firebase/auth");function _x(n,...e){_c.logLevel<=Pe.WARN&&_c.warn(`Auth (${Mo}): ${n}`,...e)}function ec(n,...e){_c.logLevel<=Pe.ERROR&&_c.error(`Auth (${Mo}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(n,...e){throw np(n,...e)}function sr(n,...e){return np(n,...e)}function k_(n,e,t){const i=Object.assign(Object.assign({},vx()),{[e]:t});return new Ts("auth","Firebase",i).create(e,{appName:n.name})}function Or(n){return k_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function np(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return C_.create(n,...e)}function we(n,e,...t){if(!n)throw np(e,...t)}function Pr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ec(e),new Error(e)}function jr(n,e){n||Pr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function wx(){return Dy()==="http:"||Dy()==="https:"}function Dy(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ex(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wx()||v_()||"connection"in navigator)?navigator.onLine:!0}function Tx(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,t){this.shortDelay=e,this.longDelay=t,jr(t>e,"Short delay should be less than long delay!"),this.isMobile=HI()||QI()}get(){return Ex()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(n,e){jr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ix={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sx=new yl(3e4,6e4);function ki(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Br(n,e,t,i,o={}){return N_(n,o,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const h=gl(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},l);return GI()||(y.referrerPolicy="no-referrer"),P_.fetch()(b_(n,n.config.apiHost,t,h),y)})}async function N_(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Ix),e);try{const o=new Ax(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Gu(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const h=l.ok?c.errorMessage:c.error.message,[p,y]=h.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gu(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Gu(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw Gu(n,"user-disabled",c);const _=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw k_(n,_,y);qn(n,_)}}catch(o){if(o instanceof Hn)throw o;qn(n,"network-request-failed",{message:String(o)})}}async function vl(n,e,t,i,o={}){const l=await Br(n,e,t,i,o);return"mfaPendingCredential"in l&&qn(n,"multi-factor-auth-required",{_serverResponse:l}),l}function b_(n,e,t,i){const o=`${e}${t}?${i}`;return n.config.emulator?rp(n.config,o):`${n.config.apiScheme}://${o}`}function xx(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ax{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(sr(this.auth,"network-request-failed")),Sx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gu(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=sr(n,e,i);return o.customData._tokenResponse=t,o}function Oy(n){return n!==void 0&&n.enterprise!==void 0}class Rx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return xx(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Cx(n,e){return Br(n,"GET","/v2/recaptchaConfig",ki(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kx(n,e){return Br(n,"POST","/v1/accounts:delete",e)}async function D_(n,e){return Br(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Px(n,e=!1){const t=Nt(n),i=await t.getIdToken(e),o=ip(i);we(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:Qa(rf(o.auth_time)),issuedAtTime:Qa(rf(o.iat)),expirationTime:Qa(rf(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function rf(n){return Number(n)*1e3}function ip(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return ec("JWT malformed, contained fewer than 3 sections"),null;try{const o=p_(t);return o?JSON.parse(o):(ec("Failed to decode base64 JWT payload"),null)}catch(o){return ec("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Ly(n){const e=ip(n);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Hn&&Nx(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Nx({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qa(this.lastLoginAt),this.creationTime=Qa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await ko(n,D_(t,{idToken:i}));we(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?O_(l.providerUserInfo):[],h=Ox(n.providerData,c),p=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!(h!=null&&h.length),_=p?y:!1,I={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:h,metadata:new Af(l.createdAt,l.lastLoginAt),isAnonymous:_};Object.assign(n,I)}async function Dx(n){const e=Nt(n);await wc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ox(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function O_(n){return n.map(e=>{var{providerId:t}=e,i=tp(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lx(n,e){const t=await N_(n,{},async()=>{const i=gl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,c=b_(n,o,"/v1/token",`key=${l}`),h=await n._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",P_.fetch()(c,{method:"POST",headers:h,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Vx(n,e){return Br(n,"POST","/v2/accounts:revokeToken",ki(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ly(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){we(e.length!==0,"internal-error");const t=Ly(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(we(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await Lx(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,c=new So;return i&&(we(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(we(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(we(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new So,this.toJSON())}_performRefresh(){return Pr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(n,e){we(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Nr{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=tp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Af(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await ko(this,this.stsTokenManager.getToken(this.auth,e));return we(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Px(this,e)}reload(){return Dx(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Nr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await wc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ir(this.auth.app))return Promise.reject(Or(this.auth));const e=await this.getIdToken();return await ko(this,kx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,c,h,p,y,_;const I=(i=t.displayName)!==null&&i!==void 0?i:void 0,R=(o=t.email)!==null&&o!==void 0?o:void 0,L=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,W=(c=t.photoURL)!==null&&c!==void 0?c:void 0,B=(h=t.tenantId)!==null&&h!==void 0?h:void 0,b=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,Y=(y=t.createdAt)!==null&&y!==void 0?y:void 0,ee=(_=t.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:te,emailVerified:re,isAnonymous:ae,providerData:ce,stsTokenManager:k}=t;we(te&&k,e,"internal-error");const S=So.fromJSON(this.name,k);we(typeof te=="string",e,"internal-error"),fi(I,e.name),fi(R,e.name),we(typeof re=="boolean",e,"internal-error"),we(typeof ae=="boolean",e,"internal-error"),fi(L,e.name),fi(W,e.name),fi(B,e.name),fi(b,e.name),fi(Y,e.name),fi(ee,e.name);const x=new Nr({uid:te,auth:e,email:R,emailVerified:re,displayName:I,isAnonymous:ae,photoURL:W,phoneNumber:L,tenantId:B,stsTokenManager:S,createdAt:Y,lastLoginAt:ee});return ce&&Array.isArray(ce)&&(x.providerData=ce.map(N=>Object.assign({},N))),b&&(x._redirectEventId=b),x}static async _fromIdTokenResponse(e,t,i=!1){const o=new So;o.updateFromServerResponse(t);const l=new Nr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await wc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];we(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?O_(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),h=new So;h.updateFromIdToken(i);const p=new Nr({uid:o.localId,auth:e,stsTokenManager:h,isAnonymous:c}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Af(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy=new Map;function br(n){jr(n instanceof Function,"Expected a class definition");let e=Vy.get(n);return e?(jr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Vy.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}L_.type="NONE";const My=L_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(n,e,t){return`firebase:${n}:${e}:${t}`}class xo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=tc(this.userKey,o.apiKey,l),this.fullPersistenceKey=tc("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new xo(br(My),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||br(My);const c=tc(i,e.config.apiKey,e.name);let h=null;for(const y of t)try{const _=await y._get(c);if(_){const I=Nr._fromJSON(e,_);y!==l&&(h=I),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new xo(l,e,i):(l=p[0],h&&await l._set(c,h.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(c)}catch{}})),new xo(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(F_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(V_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(B_(e))return"Blackberry";if(z_(e))return"Webos";if(M_(e))return"Safari";if((e.includes("chrome/")||j_(e))&&!e.includes("edge/"))return"Chrome";if(U_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function V_(n=zt()){return/firefox\//i.test(n)}function M_(n=zt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function j_(n=zt()){return/crios\//i.test(n)}function F_(n=zt()){return/iemobile/i.test(n)}function U_(n=zt()){return/android/i.test(n)}function B_(n=zt()){return/blackberry/i.test(n)}function z_(n=zt()){return/webos/i.test(n)}function sp(n=zt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Mx(n=zt()){var e;return sp(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jx(){return YI()&&document.documentMode===10}function $_(n=zt()){return sp(n)||U_(n)||z_(n)||B_(n)||/windows phone/i.test(n)||F_(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(n,e=[]){let t;switch(n){case"Browser":t=jy(zt());break;case"Worker":t=`${jy(zt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Mo}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,h)=>{try{const p=e(l);c(p)}catch(p){h(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ux(n,e={}){return Br(n,"GET","/v2/passwordPolicy",ki(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bx=6;class zx{constructor(e){var t,i,o,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:Bx,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,c,h;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(h=p.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fy(this),this.idTokenSubscription=new Fy(this),this.beforeStateQueue=new Fx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=C_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=br(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await xo.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await D_(this,{idToken:e}),i=await Nr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ir(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,h=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===h)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await wc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Tx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ir(this.app))return Promise.reject(Or(this));const t=e?Nt(e):null;return t&&we(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ir(this.app)?Promise.reject(Or(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ir(this.app)?Promise.reject(Or(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(br(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ux(this),t=new zx(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ts("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Vx(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&br(e)||this._popupRedirectResolver;we(t,this,"argument-error"),this.redirectPersistenceManager=await xo.create(this,[br(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(we(h,this,"internal-error"),h.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=W_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&_x(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ss(n){return Nt(n)}class Fy{constructor(e){this.auth=e,this.observer=null,this.addObserver=rS(t=>this.observer=t)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Wx(n){Hc=n}function q_(n){return Hc.loadJS(n)}function qx(){return Hc.recaptchaEnterpriseScript}function Hx(){return Hc.gapiScript}function Kx(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Gx="recaptcha-enterprise",Qx="NO_RECAPTCHA";class Yx{constructor(e){this.type=Gx,this.auth=Ss(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,h)=>{Cx(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const y=new Rx(p);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,c(y.siteKey)}}).catch(p=>{h(p)})})}function o(l,c,h){const p=window.grecaptcha;Oy(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(y=>{c(y)}).catch(()=>{c(Qx)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((l,c)=>{i(this.auth).then(h=>{if(!t&&Oy(window.grecaptcha))o(h,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=qx();p.length!==0&&(p+=h),q_(p).then(()=>{o(h,l,c)}).catch(y=>{c(y)})}}).catch(h=>{c(h)})})}}async function Uy(n,e,t,i=!1){const o=new Yx(n);let l;try{l=await o.verify(t)}catch{l=await o.verify(t,!0)}const c=Object.assign({},e);return i?Object.assign(c,{captchaResp:l}):Object.assign(c,{captchaResponse:l}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Rf(n,e,t,i){var o;if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await Uy(n,e,t,t==="getOobCode");return i(n,l)}else return i(n,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Uy(n,e,t,t==="getOobCode");return i(n,c)}else return Promise.reject(l)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xx(n,e){const t=Is(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(rl(l,e??{}))return o;qn(o,"already-initialized")}return t.initialize({options:e})}function Jx(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(br);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Zx(n,e,t){const i=Ss(n);we(i._canInitEmulator,i,"emulator-config-failed"),we(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=H_(e),{host:c,port:h}=eA(e),p=h===null?"":`:${h}`;i.config.emulator={url:`${l}//${c}${p}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:c,port:h,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),tA()}function H_(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function eA(n){const e=H_(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:By(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:By(c)}}}function By(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function tA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Pr("not implemented")}_getIdTokenResponse(e){return Pr("not implemented")}_linkToIdToken(e,t){return Pr("not implemented")}_getReauthenticationResolver(e){return Pr("not implemented")}}async function nA(n,e){return Br(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rA(n,e){return vl(n,"POST","/v1/accounts:signInWithPassword",ki(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iA(n,e){return vl(n,"POST","/v1/accounts:signInWithEmailLink",ki(n,e))}async function sA(n,e){return vl(n,"POST","/v1/accounts:signInWithEmailLink",ki(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl extends op{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new sl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new sl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rf(e,t,"signInWithPassword",rA);case"emailLink":return iA(e,{email:this._email,oobCode:this._password});default:qn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rf(e,i,"signUpPassword",nA);case"emailLink":return sA(e,{idToken:t,email:this._email,oobCode:this._password});default:qn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ao(n,e){return vl(n,"POST","/v1/accounts:signInWithIdp",ki(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA="http://localhost";class ms extends op{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ms(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):qn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=tp(t,["providerId","signInMethod"]);if(!i||!o)return null;const c=new ms(i,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Ao(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Ao(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ao(e,t)}buildRequest(){const e={requestUri:oA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=gl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lA(n){const e=$a(Wa(n)).link,t=e?$a(Wa(e)).deep_link_id:null,i=$a(Wa(n)).deep_link_id;return(i?$a(Wa(i)).link:null)||i||t||e||n}class ap{constructor(e){var t,i,o,l,c,h;const p=$a(Wa(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,_=(i=p.oobCode)!==null&&i!==void 0?i:null,I=aA((o=p.mode)!==null&&o!==void 0?o:null);we(y&&_&&I,"argument-error"),this.apiKey=y,this.operation=I,this.code=_,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=p.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(h=p.tenantId)!==null&&h!==void 0?h:null}static parseLink(e){const t=lA(e);try{return new ap(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(){this.providerId=jo.PROVIDER_ID}static credential(e,t){return sl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=ap.parseLink(t);return we(i,"argument-error"),sl._fromEmailAndCode(e,i.code,i.tenantId)}}jo.PROVIDER_ID="password";jo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";jo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l extends K_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends _l{constructor(){super("facebook.com")}static credential(e){return ms._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pi.credential(e.oauthAccessToken)}catch{return null}}}pi.FACEBOOK_SIGN_IN_METHOD="facebook.com";pi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends _l{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ms._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return mi.credential(t,i)}catch{return null}}}mi.GOOGLE_SIGN_IN_METHOD="google.com";mi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends _l{constructor(){super("github.com")}static credential(e){return ms._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gi.credential(e.oauthAccessToken)}catch{return null}}}gi.GITHUB_SIGN_IN_METHOD="github.com";gi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends _l{constructor(){super("twitter.com")}static credential(e,t){return ms._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return yi.credential(t,i)}catch{return null}}}yi.TWITTER_SIGN_IN_METHOD="twitter.com";yi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uA(n,e){return vl(n,"POST","/v1/accounts:signUp",ki(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Nr._fromIdTokenResponse(e,i,o),c=zy(i);return new gs({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=zy(i);return new gs({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function zy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec extends Hn{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Ec.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Ec(e,t,i,o)}}function G_(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Ec._fromErrorAndOperation(n,l,e,i):l})}async function cA(n,e,t=!1){const i=await ko(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return gs._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dA(n,e,t=!1){const{auth:i}=n;if(ir(i.app))return Promise.reject(Or(i));const o="reauthenticate";try{const l=await ko(n,G_(i,o,e,n),t);we(l.idToken,i,"internal-error");const c=ip(l.idToken);we(c,i,"internal-error");const{sub:h}=c;return we(n.uid===h,i,"user-mismatch"),gs._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&qn(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q_(n,e,t=!1){if(ir(n.app))return Promise.reject(Or(n));const i="signIn",o=await G_(n,i,e),l=await gs._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function hA(n,e){return Q_(Ss(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y_(n){const e=Ss(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function fA(n,e,t){if(ir(n.app))return Promise.reject(Or(n));const i=Ss(n),c=await Rf(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",uA).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&Y_(n),p}),h=await gs._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(h.user),h}function pA(n,e,t){return ir(n.app)?Promise.reject(Or(n)):hA(Nt(n),jo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Y_(n),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mA(n,e){return Br(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gA(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=Nt(n),l={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=await ko(i,mA(i.auth,l));i.displayName=c.displayName||null,i.photoURL=c.photoUrl||null;const h=i.providerData.find(({providerId:p})=>p==="password");h&&(h.displayName=i.displayName,h.photoURL=i.photoURL),await i._updateTokensIfNecessary(c)}function yA(n,e,t,i){return Nt(n).onIdTokenChanged(e,t,i)}function vA(n,e,t){return Nt(n).beforeAuthStateChanged(e,t)}function _A(n,e,t,i){return Nt(n).onAuthStateChanged(e,t,i)}function wA(n){return Nt(n).signOut()}const Tc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Tc,"1"),this.storage.removeItem(Tc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA=1e3,TA=10;class J_ extends X_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=$_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,h,p)=>{this.notifyListeners(c,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);jx()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,TA):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},EA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}J_.type="LOCAL";const IA=J_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_ extends X_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Z_.type="SESSION";const e0=Z_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Kc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const h=Array.from(c).map(async y=>y(t.origin,l)),p=await SA(h);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((h,p)=>{const y=lp("",20);o.port1.start();const _=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(I){const R=I;if(R.data.eventId===y)switch(R.data.status){case"ack":clearTimeout(_),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),h(R.data.response);break;default:clearTimeout(_),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(){return window}function AA(n){or().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(){return typeof or().WorkerGlobalScope<"u"&&typeof or().importScripts=="function"}async function RA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function kA(){return t0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0="firebaseLocalStorageDb",PA=1,Ic="firebaseLocalStorage",r0="fbase_key";class wl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Gc(n,e){return n.transaction([Ic],e?"readwrite":"readonly").objectStore(Ic)}function NA(){const n=indexedDB.deleteDatabase(n0);return new wl(n).toPromise()}function Cf(){const n=indexedDB.open(n0,PA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Ic,{keyPath:r0})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Ic)?e(i):(i.close(),await NA(),e(await Cf()))})})}async function $y(n,e,t){const i=Gc(n,!0).put({[r0]:e,value:t});return new wl(i).toPromise()}async function bA(n,e){const t=Gc(n,!1).get(e),i=await new wl(t).toPromise();return i===void 0?null:i.value}function Wy(n,e){const t=Gc(n,!0).delete(e);return new wl(t).toPromise()}const DA=800,OA=3;class i0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>OA)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return t0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kc._getInstance(kA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await RA(),!this.activeServiceWorker)return;this.sender=new xA(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||CA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cf();return await $y(e,Tc,"1"),await Wy(e,Tc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>$y(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>bA(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Wy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Gc(o,!1).getAll();return new wl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}i0.type="LOCAL";const LA=i0;new yl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(n,e){return e?br(e):(we(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up extends op{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ao(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ao(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ao(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function MA(n){return Q_(n.auth,new up(n),n.bypassAuthState)}function jA(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),dA(t,new up(n),n.bypassAuthState)}async function FA(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),cA(t,new up(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:c,type:h}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return MA;case"linkViaPopup":case"linkViaRedirect":return FA;case"reauthViaPopup":case"reauthViaRedirect":return jA;default:qn(this.auth,"internal-error")}}resolve(e){jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA=new yl(2e3,1e4);class Io extends s0{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,Io.currentPopupAction&&Io.currentPopupAction.cancel(),Io.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){jr(this.filter.length===1,"Popup operations only handle one event");const e=lp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(sr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(sr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Io.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,UA.get())};e()}}Io.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA="pendingRedirect",nc=new Map;class zA extends s0{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=nc.get(this.auth._key());if(!e){try{const i=await $A(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}nc.set(this.auth._key(),e)}return this.bypassAuthState||nc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $A(n,e){const t=HA(e),i=qA(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function WA(n,e){nc.set(n._key(),e)}function qA(n){return br(n._redirectPersistence)}function HA(n){return tc(BA,n.config.apiKey,n.name)}async function KA(n,e,t=!1){if(ir(n.app))return Promise.reject(Or(n));const i=Ss(n),o=VA(i,e),c=await new zA(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA=10*60*1e3;class QA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!YA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!o0(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(sr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GA&&this.cachedEventUids.clear(),this.cachedEventUids.has(qy(e))}saveEventToCache(e){this.cachedEventUids.add(qy(e)),this.lastProcessedEventTime=Date.now()}}function qy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function o0({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function YA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return o0(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XA(n,e={}){return Br(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZA=/^https?/;async function eR(n){if(n.config.emulator)return;const{authorizedDomains:e}=await XA(n);for(const t of e)try{if(tR(t))return}catch{}qn(n,"unauthorized-domain")}function tR(n){const e=xf(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!ZA.test(t))return!1;if(JA.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR=new yl(3e4,6e4);function Hy(){const n=or().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function rR(n){return new Promise((e,t)=>{var i,o,l;function c(){Hy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hy(),t(sr(n,"network-request-failed"))},timeout:nR.get()})}if(!((o=(i=or().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=or().gapi)===null||l===void 0)&&l.load)c();else{const h=Kx("iframefcb");return or()[h]=()=>{gapi.load?c():t(sr(n,"network-request-failed"))},q_(`${Hx()}?onload=${h}`).catch(p=>t(p))}}).catch(e=>{throw rc=null,e})}let rc=null;function iR(n){return rc=rc||rR(n),rc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=new yl(5e3,15e3),oR="__/auth/iframe",aR="emulator/auth/iframe",lR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cR(n){const e=n.config;we(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?rp(e,aR):`https://${n.config.authDomain}/${oR}`,i={apiKey:e.apiKey,appName:n.name,v:Mo},o=uR.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${gl(i).slice(1)}`}async function dR(n){const e=await iR(n),t=or().gapi;return we(t,n,"internal-error"),e.open({where:document.body,url:cR(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lR,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const c=sr(n,"network-request-failed"),h=or().setTimeout(()=>{l(c)},sR.get());function p(){or().clearTimeout(h),o(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fR=500,pR=600,mR="_blank",gR="http://localhost";class Ky{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yR(n,e,t,i=fR,o=pR){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let h="";const p=Object.assign(Object.assign({},hR),{width:i.toString(),height:o.toString(),top:l,left:c}),y=zt().toLowerCase();t&&(h=j_(y)?mR:t),V_(y)&&(e=e||gR,p.scrollbars="yes");const _=Object.entries(p).reduce((R,[L,W])=>`${R}${L}=${W},`,"");if(Mx(y)&&h!=="_self")return vR(e||"",h),new Ky(null);const I=window.open(e||"",h,_);we(I,n,"popup-blocked");try{I.focus()}catch{}return new Ky(I)}function vR(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R="__/auth/handler",wR="emulator/auth/handler",ER=encodeURIComponent("fac");async function Gy(n,e,t,i,o,l){we(n.config.authDomain,n,"auth-domain-config-required"),we(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Mo,eventId:o};if(e instanceof K_){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",nS(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,I]of Object.entries({}))c[_]=I}if(e instanceof _l){const _=e.getScopes().filter(I=>I!=="");_.length>0&&(c.scopes=_.join(","))}n.tenantId&&(c.tid=n.tenantId);const h=c;for(const _ of Object.keys(h))h[_]===void 0&&delete h[_];const p=await n._getAppCheckToken(),y=p?`#${ER}=${encodeURIComponent(p)}`:"";return`${TR(n)}?${gl(h).slice(1)}${y}`}function TR({config:n}){return n.emulator?rp(n,wR):`https://${n.authDomain}/${_R}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf="webStorageSupport";class IR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=e0,this._completeRedirectFn=KA,this._overrideRedirectResult=WA}async _openPopup(e,t,i,o){var l;jr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await Gy(e,t,i,xf(),o);return yR(e,c,lp())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await Gy(e,t,i,xf(),o);return AA(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(jr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await dR(e),i=new QA(e);return t.register("authEvent",o=>(we(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(sf,{type:sf},o=>{var l;const c=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[sf];c!==void 0&&t(!!c),qn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=eR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return $_()||M_()||sp()}}const SR=IR;var Qy="@firebase/auth",Yy="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AR(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function RR(n){ur(new Wn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:h}=i.options;we(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:W_(n)},y=new $x(i,o,l,p);return Jx(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),ur(new Wn("auth-internal",e=>{const t=Ss(e.getProvider("auth").getImmediate());return(i=>new xR(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),xn(Qy,Yy,AR(n)),xn(Qy,Yy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR=5*60,kR=y_("authIdTokenMaxAge")||CR;let Xy=null;const PR=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>kR)return;const o=t==null?void 0:t.token;Xy!==o&&(Xy=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function NR(n=ep()){const e=Is(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Xx(n,{popupRedirectResolver:SR,persistence:[LA,IA,e0]}),i=y_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=PR(l.toString());vA(t,c,()=>c(t.currentUser)),yA(t,h=>c(h))}}const o=m_("auth");return o&&Zx(t,`http://${o}`),t}function bR(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Wx({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=sr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",bR().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});RR("Browser");var Jy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ds,a0;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,S){function x(){}x.prototype=S.prototype,k.D=S.prototype,k.prototype=new x,k.prototype.constructor=k,k.C=function(N,O,M){for(var C=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)C[tt-2]=arguments[tt];return S.prototype[O].apply(N,C)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,S,x){x||(x=0);var N=Array(16);if(typeof S=="string")for(var O=0;16>O;++O)N[O]=S.charCodeAt(x++)|S.charCodeAt(x++)<<8|S.charCodeAt(x++)<<16|S.charCodeAt(x++)<<24;else for(O=0;16>O;++O)N[O]=S[x++]|S[x++]<<8|S[x++]<<16|S[x++]<<24;S=k.g[0],x=k.g[1],O=k.g[2];var M=k.g[3],C=S+(M^x&(O^M))+N[0]+3614090360&4294967295;S=x+(C<<7&4294967295|C>>>25),C=M+(O^S&(x^O))+N[1]+3905402710&4294967295,M=S+(C<<12&4294967295|C>>>20),C=O+(x^M&(S^x))+N[2]+606105819&4294967295,O=M+(C<<17&4294967295|C>>>15),C=x+(S^O&(M^S))+N[3]+3250441966&4294967295,x=O+(C<<22&4294967295|C>>>10),C=S+(M^x&(O^M))+N[4]+4118548399&4294967295,S=x+(C<<7&4294967295|C>>>25),C=M+(O^S&(x^O))+N[5]+1200080426&4294967295,M=S+(C<<12&4294967295|C>>>20),C=O+(x^M&(S^x))+N[6]+2821735955&4294967295,O=M+(C<<17&4294967295|C>>>15),C=x+(S^O&(M^S))+N[7]+4249261313&4294967295,x=O+(C<<22&4294967295|C>>>10),C=S+(M^x&(O^M))+N[8]+1770035416&4294967295,S=x+(C<<7&4294967295|C>>>25),C=M+(O^S&(x^O))+N[9]+2336552879&4294967295,M=S+(C<<12&4294967295|C>>>20),C=O+(x^M&(S^x))+N[10]+4294925233&4294967295,O=M+(C<<17&4294967295|C>>>15),C=x+(S^O&(M^S))+N[11]+2304563134&4294967295,x=O+(C<<22&4294967295|C>>>10),C=S+(M^x&(O^M))+N[12]+1804603682&4294967295,S=x+(C<<7&4294967295|C>>>25),C=M+(O^S&(x^O))+N[13]+4254626195&4294967295,M=S+(C<<12&4294967295|C>>>20),C=O+(x^M&(S^x))+N[14]+2792965006&4294967295,O=M+(C<<17&4294967295|C>>>15),C=x+(S^O&(M^S))+N[15]+1236535329&4294967295,x=O+(C<<22&4294967295|C>>>10),C=S+(O^M&(x^O))+N[1]+4129170786&4294967295,S=x+(C<<5&4294967295|C>>>27),C=M+(x^O&(S^x))+N[6]+3225465664&4294967295,M=S+(C<<9&4294967295|C>>>23),C=O+(S^x&(M^S))+N[11]+643717713&4294967295,O=M+(C<<14&4294967295|C>>>18),C=x+(M^S&(O^M))+N[0]+3921069994&4294967295,x=O+(C<<20&4294967295|C>>>12),C=S+(O^M&(x^O))+N[5]+3593408605&4294967295,S=x+(C<<5&4294967295|C>>>27),C=M+(x^O&(S^x))+N[10]+38016083&4294967295,M=S+(C<<9&4294967295|C>>>23),C=O+(S^x&(M^S))+N[15]+3634488961&4294967295,O=M+(C<<14&4294967295|C>>>18),C=x+(M^S&(O^M))+N[4]+3889429448&4294967295,x=O+(C<<20&4294967295|C>>>12),C=S+(O^M&(x^O))+N[9]+568446438&4294967295,S=x+(C<<5&4294967295|C>>>27),C=M+(x^O&(S^x))+N[14]+3275163606&4294967295,M=S+(C<<9&4294967295|C>>>23),C=O+(S^x&(M^S))+N[3]+4107603335&4294967295,O=M+(C<<14&4294967295|C>>>18),C=x+(M^S&(O^M))+N[8]+1163531501&4294967295,x=O+(C<<20&4294967295|C>>>12),C=S+(O^M&(x^O))+N[13]+2850285829&4294967295,S=x+(C<<5&4294967295|C>>>27),C=M+(x^O&(S^x))+N[2]+4243563512&4294967295,M=S+(C<<9&4294967295|C>>>23),C=O+(S^x&(M^S))+N[7]+1735328473&4294967295,O=M+(C<<14&4294967295|C>>>18),C=x+(M^S&(O^M))+N[12]+2368359562&4294967295,x=O+(C<<20&4294967295|C>>>12),C=S+(x^O^M)+N[5]+4294588738&4294967295,S=x+(C<<4&4294967295|C>>>28),C=M+(S^x^O)+N[8]+2272392833&4294967295,M=S+(C<<11&4294967295|C>>>21),C=O+(M^S^x)+N[11]+1839030562&4294967295,O=M+(C<<16&4294967295|C>>>16),C=x+(O^M^S)+N[14]+4259657740&4294967295,x=O+(C<<23&4294967295|C>>>9),C=S+(x^O^M)+N[1]+2763975236&4294967295,S=x+(C<<4&4294967295|C>>>28),C=M+(S^x^O)+N[4]+1272893353&4294967295,M=S+(C<<11&4294967295|C>>>21),C=O+(M^S^x)+N[7]+4139469664&4294967295,O=M+(C<<16&4294967295|C>>>16),C=x+(O^M^S)+N[10]+3200236656&4294967295,x=O+(C<<23&4294967295|C>>>9),C=S+(x^O^M)+N[13]+681279174&4294967295,S=x+(C<<4&4294967295|C>>>28),C=M+(S^x^O)+N[0]+3936430074&4294967295,M=S+(C<<11&4294967295|C>>>21),C=O+(M^S^x)+N[3]+3572445317&4294967295,O=M+(C<<16&4294967295|C>>>16),C=x+(O^M^S)+N[6]+76029189&4294967295,x=O+(C<<23&4294967295|C>>>9),C=S+(x^O^M)+N[9]+3654602809&4294967295,S=x+(C<<4&4294967295|C>>>28),C=M+(S^x^O)+N[12]+3873151461&4294967295,M=S+(C<<11&4294967295|C>>>21),C=O+(M^S^x)+N[15]+530742520&4294967295,O=M+(C<<16&4294967295|C>>>16),C=x+(O^M^S)+N[2]+3299628645&4294967295,x=O+(C<<23&4294967295|C>>>9),C=S+(O^(x|~M))+N[0]+4096336452&4294967295,S=x+(C<<6&4294967295|C>>>26),C=M+(x^(S|~O))+N[7]+1126891415&4294967295,M=S+(C<<10&4294967295|C>>>22),C=O+(S^(M|~x))+N[14]+2878612391&4294967295,O=M+(C<<15&4294967295|C>>>17),C=x+(M^(O|~S))+N[5]+4237533241&4294967295,x=O+(C<<21&4294967295|C>>>11),C=S+(O^(x|~M))+N[12]+1700485571&4294967295,S=x+(C<<6&4294967295|C>>>26),C=M+(x^(S|~O))+N[3]+2399980690&4294967295,M=S+(C<<10&4294967295|C>>>22),C=O+(S^(M|~x))+N[10]+4293915773&4294967295,O=M+(C<<15&4294967295|C>>>17),C=x+(M^(O|~S))+N[1]+2240044497&4294967295,x=O+(C<<21&4294967295|C>>>11),C=S+(O^(x|~M))+N[8]+1873313359&4294967295,S=x+(C<<6&4294967295|C>>>26),C=M+(x^(S|~O))+N[15]+4264355552&4294967295,M=S+(C<<10&4294967295|C>>>22),C=O+(S^(M|~x))+N[6]+2734768916&4294967295,O=M+(C<<15&4294967295|C>>>17),C=x+(M^(O|~S))+N[13]+1309151649&4294967295,x=O+(C<<21&4294967295|C>>>11),C=S+(O^(x|~M))+N[4]+4149444226&4294967295,S=x+(C<<6&4294967295|C>>>26),C=M+(x^(S|~O))+N[11]+3174756917&4294967295,M=S+(C<<10&4294967295|C>>>22),C=O+(S^(M|~x))+N[2]+718787259&4294967295,O=M+(C<<15&4294967295|C>>>17),C=x+(M^(O|~S))+N[9]+3951481745&4294967295,k.g[0]=k.g[0]+S&4294967295,k.g[1]=k.g[1]+(O+(C<<21&4294967295|C>>>11))&4294967295,k.g[2]=k.g[2]+O&4294967295,k.g[3]=k.g[3]+M&4294967295}i.prototype.u=function(k,S){S===void 0&&(S=k.length);for(var x=S-this.blockSize,N=this.B,O=this.h,M=0;M<S;){if(O==0)for(;M<=x;)o(this,k,M),M+=this.blockSize;if(typeof k=="string"){for(;M<S;)if(N[O++]=k.charCodeAt(M++),O==this.blockSize){o(this,N),O=0;break}}else for(;M<S;)if(N[O++]=k[M++],O==this.blockSize){o(this,N),O=0;break}}this.h=O,this.o+=S},i.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var S=1;S<k.length-8;++S)k[S]=0;var x=8*this.o;for(S=k.length-8;S<k.length;++S)k[S]=x&255,x/=256;for(this.u(k),k=Array(16),S=x=0;4>S;++S)for(var N=0;32>N;N+=8)k[x++]=this.g[S]>>>N&255;return k};function l(k,S){var x=h;return Object.prototype.hasOwnProperty.call(x,k)?x[k]:x[k]=S(k)}function c(k,S){this.h=S;for(var x=[],N=!0,O=k.length-1;0<=O;O--){var M=k[O]|0;N&&M==S||(x[O]=M,N=!1)}this.g=x}var h={};function p(k){return-128<=k&&128>k?l(k,function(S){return new c([S|0],0>S?-1:0)}):new c([k|0],0>k?-1:0)}function y(k){if(isNaN(k)||!isFinite(k))return I;if(0>k)return b(y(-k));for(var S=[],x=1,N=0;k>=x;N++)S[N]=k/x|0,x*=4294967296;return new c(S,0)}function _(k,S){if(k.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(k.charAt(0)=="-")return b(_(k.substring(1),S));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=y(Math.pow(S,8)),N=I,O=0;O<k.length;O+=8){var M=Math.min(8,k.length-O),C=parseInt(k.substring(O,O+M),S);8>M?(M=y(Math.pow(S,M)),N=N.j(M).add(y(C))):(N=N.j(x),N=N.add(y(C)))}return N}var I=p(0),R=p(1),L=p(16777216);n=c.prototype,n.m=function(){if(B(this))return-b(this).m();for(var k=0,S=1,x=0;x<this.g.length;x++){var N=this.i(x);k+=(0<=N?N:4294967296+N)*S,S*=4294967296}return k},n.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(W(this))return"0";if(B(this))return"-"+b(this).toString(k);for(var S=y(Math.pow(k,6)),x=this,N="";;){var O=re(x,S).g;x=Y(x,O.j(S));var M=((0<x.g.length?x.g[0]:x.h)>>>0).toString(k);if(x=O,W(x))return M+N;for(;6>M.length;)M="0"+M;N=M+N}},n.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function W(k){if(k.h!=0)return!1;for(var S=0;S<k.g.length;S++)if(k.g[S]!=0)return!1;return!0}function B(k){return k.h==-1}n.l=function(k){return k=Y(this,k),B(k)?-1:W(k)?0:1};function b(k){for(var S=k.g.length,x=[],N=0;N<S;N++)x[N]=~k.g[N];return new c(x,~k.h).add(R)}n.abs=function(){return B(this)?b(this):this},n.add=function(k){for(var S=Math.max(this.g.length,k.g.length),x=[],N=0,O=0;O<=S;O++){var M=N+(this.i(O)&65535)+(k.i(O)&65535),C=(M>>>16)+(this.i(O)>>>16)+(k.i(O)>>>16);N=C>>>16,M&=65535,C&=65535,x[O]=C<<16|M}return new c(x,x[x.length-1]&-2147483648?-1:0)};function Y(k,S){return k.add(b(S))}n.j=function(k){if(W(this)||W(k))return I;if(B(this))return B(k)?b(this).j(b(k)):b(b(this).j(k));if(B(k))return b(this.j(b(k)));if(0>this.l(L)&&0>k.l(L))return y(this.m()*k.m());for(var S=this.g.length+k.g.length,x=[],N=0;N<2*S;N++)x[N]=0;for(N=0;N<this.g.length;N++)for(var O=0;O<k.g.length;O++){var M=this.i(N)>>>16,C=this.i(N)&65535,tt=k.i(O)>>>16,Dt=k.i(O)&65535;x[2*N+2*O]+=C*Dt,ee(x,2*N+2*O),x[2*N+2*O+1]+=M*Dt,ee(x,2*N+2*O+1),x[2*N+2*O+1]+=C*tt,ee(x,2*N+2*O+1),x[2*N+2*O+2]+=M*tt,ee(x,2*N+2*O+2)}for(N=0;N<S;N++)x[N]=x[2*N+1]<<16|x[2*N];for(N=S;N<2*S;N++)x[N]=0;return new c(x,0)};function ee(k,S){for(;(k[S]&65535)!=k[S];)k[S+1]+=k[S]>>>16,k[S]&=65535,S++}function te(k,S){this.g=k,this.h=S}function re(k,S){if(W(S))throw Error("division by zero");if(W(k))return new te(I,I);if(B(k))return S=re(b(k),S),new te(b(S.g),b(S.h));if(B(S))return S=re(k,b(S)),new te(b(S.g),S.h);if(30<k.g.length){if(B(k)||B(S))throw Error("slowDivide_ only works with positive integers.");for(var x=R,N=S;0>=N.l(k);)x=ae(x),N=ae(N);var O=ce(x,1),M=ce(N,1);for(N=ce(N,2),x=ce(x,2);!W(N);){var C=M.add(N);0>=C.l(k)&&(O=O.add(x),M=C),N=ce(N,1),x=ce(x,1)}return S=Y(k,O.j(S)),new te(O,S)}for(O=I;0<=k.l(S);){for(x=Math.max(1,Math.floor(k.m()/S.m())),N=Math.ceil(Math.log(x)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),M=y(x),C=M.j(S);B(C)||0<C.l(k);)x-=N,M=y(x),C=M.j(S);W(M)&&(M=R),O=O.add(M),k=Y(k,C)}return new te(O,k)}n.A=function(k){return re(this,k).h},n.and=function(k){for(var S=Math.max(this.g.length,k.g.length),x=[],N=0;N<S;N++)x[N]=this.i(N)&k.i(N);return new c(x,this.h&k.h)},n.or=function(k){for(var S=Math.max(this.g.length,k.g.length),x=[],N=0;N<S;N++)x[N]=this.i(N)|k.i(N);return new c(x,this.h|k.h)},n.xor=function(k){for(var S=Math.max(this.g.length,k.g.length),x=[],N=0;N<S;N++)x[N]=this.i(N)^k.i(N);return new c(x,this.h^k.h)};function ae(k){for(var S=k.g.length+1,x=[],N=0;N<S;N++)x[N]=k.i(N)<<1|k.i(N-1)>>>31;return new c(x,k.h)}function ce(k,S){var x=S>>5;S%=32;for(var N=k.g.length-x,O=[],M=0;M<N;M++)O[M]=0<S?k.i(M+x)>>>S|k.i(M+x+1)<<32-S:k.i(M+x);return new c(O,k.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,a0=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=y,c.fromString=_,ds=c}).apply(typeof Jy<"u"?Jy:typeof self<"u"?self:typeof window<"u"?window:{});var Qu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var l0,qa,u0,ic,kf,c0,d0,h0;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,v){return u==Array.prototype||u==Object.prototype||(u[m]=v.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qu=="object"&&Qu];for(var m=0;m<u.length;++m){var v=u[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var v=i;u=u.split(".");for(var T=0;T<u.length-1;T++){var j=u[T];if(!(j in v))break e;v=v[j]}u=u[u.length-1],T=v[u],m=m(T),m!=T&&m!=null&&e(v,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var v=0,T=!1,j={next:function(){if(!T&&v<u.length){var $=v++;return{value:m($,u[$]),done:!1}}return T=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},h=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function _(u,m,v){return u.call.apply(u.bind,arguments)}function I(u,m,v){if(!u)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,T),u.apply(m,j)}}return function(){return u.apply(m,arguments)}}function R(u,m,v){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:I,R.apply(null,arguments)}function L(u,m){var v=Array.prototype.slice.call(arguments,1);return function(){var T=v.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function W(u,m){function v(){}v.prototype=m.prototype,u.aa=m.prototype,u.prototype=new v,u.prototype.constructor=u,u.Qb=function(T,j,$){for(var ne=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)ne[Fe-2]=arguments[Fe];return m.prototype[j].apply(T,ne)}}function B(u){const m=u.length;if(0<m){const v=Array(m);for(let T=0;T<m;T++)v[T]=u[T];return v}return[]}function b(u,m){for(let v=1;v<arguments.length;v++){const T=arguments[v];if(p(T)){const j=u.length||0,$=T.length||0;u.length=j+$;for(let ne=0;ne<$;ne++)u[j+ne]=T[ne]}else u.push(T)}}class Y{constructor(m,v){this.i=m,this.j=v,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function ee(u){return/^[\s\xa0]*$/.test(u)}function te(){var u=h.navigator;return u&&(u=u.userAgent)?u:""}function re(u){return re[" "](u),u}re[" "]=function(){};var ae=te().indexOf("Gecko")!=-1&&!(te().toLowerCase().indexOf("webkit")!=-1&&te().indexOf("Edge")==-1)&&!(te().indexOf("Trident")!=-1||te().indexOf("MSIE")!=-1)&&te().indexOf("Edge")==-1;function ce(u,m,v){for(const T in u)m.call(v,u[T],T,u)}function k(u,m){for(const v in u)m.call(void 0,u[v],v,u)}function S(u){const m={};for(const v in u)m[v]=u[v];return m}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(u,m){let v,T;for(let j=1;j<arguments.length;j++){T=arguments[j];for(v in T)u[v]=T[v];for(let $=0;$<x.length;$++)v=x[$],Object.prototype.hasOwnProperty.call(T,v)&&(u[v]=T[v])}}function O(u){var m=1;u=u.split(":");const v=[];for(;0<m&&u.length;)v.push(u.shift()),m--;return u.length&&v.push(u.join(":")),v}function M(u){h.setTimeout(()=>{throw u},0)}function C(){var u=ge;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class tt{constructor(){this.h=this.g=null}add(m,v){const T=Dt.get();T.set(m,v),this.h?this.h.next=T:this.g=T,this.h=T}}var Dt=new Y(()=>new Ot,u=>u.reset());class Ot{constructor(){this.next=this.g=this.h=null}set(m,v){this.h=m,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,ie=!1,ge=new tt,oe=()=>{const u=h.Promise.resolve(void 0);Be=()=>{u.then(V)}};var V=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(v){M(v)}var m=Dt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}ie=!1};function q(){this.s=this.s,this.C=this.C}q.prototype.s=!1,q.prototype.ma=function(){this.s||(this.s=!0,this.N())},q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var xe=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};h.addEventListener("test",v,m),h.removeEventListener("test",v,m)}catch{}return u}();function Ae(u,m){if(pe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var v=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(ae){e:{try{re(m.nodeName);var j=!0;break e}catch{}j=!1}j||(m=null)}}else v=="mouseover"?m=u.fromElement:v=="mouseout"&&(m=u.toElement);this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Ne[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ae.aa.h.call(this)}}W(Ae,pe);var Ne={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),je=0;function $e(u,m,v,T,j){this.listener=u,this.proxy=null,this.src=m,this.type=v,this.capture=!!T,this.ha=j,this.key=++je,this.da=this.fa=!1}function yt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function hr(u){this.src=u,this.g={},this.h=0}hr.prototype.add=function(u,m,v,T,j){var $=u.toString();u=this.g[$],u||(u=this.g[$]=[],this.h++);var ne=zr(u,m,T,j);return-1<ne?(m=u[ne],v||(m.fa=!1)):(m=new $e(m,this.src,$,!!T,j),m.fa=v,u.push(m)),m};function Rs(u,m){var v=m.type;if(v in u.g){var T=u.g[v],j=Array.prototype.indexOf.call(T,m,void 0),$;($=0<=j)&&Array.prototype.splice.call(T,j,1),$&&(yt(m),u.g[v].length==0&&(delete u.g[v],u.h--))}}function zr(u,m,v,T){for(var j=0;j<u.length;++j){var $=u[j];if(!$.da&&$.listener==m&&$.capture==!!v&&$.ha==T)return j}return-1}var bi="closure_lm_"+(1e6*Math.random()|0),Cs={};function Ho(u,m,v,T,j){if(Array.isArray(m)){for(var $=0;$<m.length;$++)Ho(u,m[$],v,T,j);return null}return v=Qo(v),u&&u[Me]?u.K(m,v,y(T)?!!T.capture:!1,j):Ko(u,m,v,!1,T,j)}function Ko(u,m,v,T,j,$){if(!m)throw Error("Invalid event type");var ne=y(j)?!!j.capture:!!j,Fe=Ps(u);if(Fe||(u[bi]=Fe=new hr(u)),v=Fe.add(m,v,T,ne,$),v.proxy)return v;if(T=Pl(),v.proxy=T,T.src=u,T.listener=v,u.addEventListener)xe||(j=ne),j===void 0&&(j=!1),u.addEventListener(m.toString(),T,j);else if(u.attachEvent)u.attachEvent(pr(m.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Pl(){function u(v){return m.call(u.src,u.listener,v)}const m=Go;return u}function ks(u,m,v,T,j){if(Array.isArray(m))for(var $=0;$<m.length;$++)ks(u,m[$],v,T,j);else T=y(T)?!!T.capture:!!T,v=Qo(v),u&&u[Me]?(u=u.i,m=String(m).toString(),m in u.g&&($=u.g[m],v=zr($,v,T,j),-1<v&&(yt($[v]),Array.prototype.splice.call($,v,1),$.length==0&&(delete u.g[m],u.h--)))):u&&(u=Ps(u))&&(m=u.g[m.toString()],u=-1,m&&(u=zr(m,v,T,j)),(v=-1<u?m[u]:null)&&fr(v))}function fr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Me])Rs(m.i,u);else{var v=u.type,T=u.proxy;m.removeEventListener?m.removeEventListener(v,T,u.capture):m.detachEvent?m.detachEvent(pr(v),T):m.addListener&&m.removeListener&&m.removeListener(T),(v=Ps(m))?(Rs(v,u),v.h==0&&(v.src=null,m[bi]=null)):yt(u)}}}function pr(u){return u in Cs?Cs[u]:Cs[u]="on"+u}function Go(u,m){if(u.da)u=!0;else{m=new Ae(m,this);var v=u.listener,T=u.ha||u.src;u.fa&&fr(u),u=v.call(T,m)}return u}function Ps(u){return u=u[bi],u instanceof hr?u:null}var Ns="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qo(u){return typeof u=="function"?u:(u[Ns]||(u[Ns]=function(m){return u.handleEvent(m)}),u[Ns])}function ut(){q.call(this),this.i=new hr(this),this.M=this,this.F=null}W(ut,q),ut.prototype[Me]=!0,ut.prototype.removeEventListener=function(u,m,v,T){ks(this,u,m,v,T)};function ct(u,m){var v,T=u.F;if(T)for(v=[];T;T=T.F)v.push(T);if(u=u.M,T=m.type||m,typeof m=="string")m=new pe(m,u);else if(m instanceof pe)m.target=m.target||u;else{var j=m;m=new pe(T,u),N(m,j)}if(j=!0,v)for(var $=v.length-1;0<=$;$--){var ne=m.g=v[$];j=mr(ne,T,!0,m)&&j}if(ne=m.g=u,j=mr(ne,T,!0,m)&&j,j=mr(ne,T,!1,m)&&j,v)for($=0;$<v.length;$++)ne=m.g=v[$],j=mr(ne,T,!1,m)&&j}ut.prototype.N=function(){if(ut.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var v=u.g[m],T=0;T<v.length;T++)yt(v[T]);delete u.g[m],u.h--}}this.F=null},ut.prototype.K=function(u,m,v,T){return this.i.add(String(u),m,!1,v,T)},ut.prototype.L=function(u,m,v,T){return this.i.add(String(u),m,!0,v,T)};function mr(u,m,v,T){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var j=!0,$=0;$<m.length;++$){var ne=m[$];if(ne&&!ne.da&&ne.capture==v){var Fe=ne.listener,dt=ne.ha||ne.src;ne.fa&&Rs(u.i,ne),j=Fe.call(dt,T)!==!1&&j}}return j&&!T.defaultPrevented}function Yo(u,m,v){if(typeof u=="function")v&&(u=R(u,v));else if(u&&typeof u.handleEvent=="function")u=R(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:h.setTimeout(u,m||0)}function $r(u){u.g=Yo(()=>{u.g=null,u.i&&(u.i=!1,$r(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Di extends q{constructor(m,v){super(),this.m=m,this.l=v,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:$r(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Oi(u){q.call(this),this.h=u,this.g={}}W(Oi,q);var Xo=[];function Jo(u){ce(u.g,function(m,v){this.g.hasOwnProperty(v)&&fr(m)},u),u.g={}}Oi.prototype.N=function(){Oi.aa.N.call(this),Jo(this)},Oi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Zo=h.JSON.stringify,ea=h.JSON.parse,ta=class{stringify(u){return h.JSON.stringify(u,void 0)}parse(u){return h.JSON.parse(u,void 0)}};function Li(){}Li.prototype.h=null;function bs(u){return u.h||(u.h=u.i())}function Ds(){}var pn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Kn(){pe.call(this,"d")}W(Kn,pe);function Os(){pe.call(this,"c")}W(Os,pe);var Gn={},na=null;function Vi(){return na=na||new ut}Gn.La="serverreachability";function ra(u){pe.call(this,Gn.La,u)}W(ra,pe);function gr(u){const m=Vi();ct(m,new ra(m))}Gn.STAT_EVENT="statevent";function ia(u,m){pe.call(this,Gn.STAT_EVENT,u),this.stat=m}W(ia,pe);function nt(u){const m=Vi();ct(m,new ia(m,u))}Gn.Ma="timingevent";function Ls(u,m){pe.call(this,Gn.Ma,u),this.size=m}W(Ls,pe);function An(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){u()},m)}function Mi(){this.g=!0}Mi.prototype.xa=function(){this.g=!1};function ji(u,m,v,T,j,$){u.info(function(){if(u.g)if($)for(var ne="",Fe=$.split("&"),dt=0;dt<Fe.length;dt++){var be=Fe[dt].split("=");if(1<be.length){var vt=be[0];be=be[1];var ot=vt.split("_");ne=2<=ot.length&&ot[1]=="type"?ne+(vt+"="+be+"&"):ne+(vt+"=redacted&")}}else ne=null;else ne=$;return"XMLHTTP REQ ("+T+") [attempt "+j+"]: "+m+`
`+v+`
`+ne})}function Vs(u,m,v,T,j,$,ne){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+j+"]: "+m+`
`+v+`
`+$+" "+ne})}function Rn(u,m,v,T){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+hd(u,v)+(T?" "+T:"")})}function sa(u,m){u.info(function(){return"TIMEOUT: "+m})}Mi.prototype.info=function(){};function hd(u,m){if(!u.g)return m;if(!m)return null;try{var v=JSON.parse(m);if(v){for(u=0;u<v.length;u++)if(Array.isArray(v[u])){var T=v[u];if(!(2>T.length)){var j=T[1];if(Array.isArray(j)&&!(1>j.length)){var $=j[0];if($!="noop"&&$!="stop"&&$!="close")for(var ne=1;ne<j.length;ne++)j[ne]=""}}}}return Zo(v)}catch{return m}}var Ms={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Nl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cn;function Fi(){}W(Fi,Li),Fi.prototype.g=function(){return new XMLHttpRequest},Fi.prototype.i=function(){return{}},Cn=new Fi;function kn(u,m,v,T){this.j=u,this.i=m,this.l=v,this.R=T||1,this.U=new Oi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new bl}function bl(){this.i=null,this.g="",this.h=!1}var oa={},js={};function Fs(u,m,v){u.L=1,u.v=Gr(sn(m)),u.m=v,u.P=!0,aa(u,null)}function aa(u,m){u.F=Date.now(),We(u),u.A=sn(u.v);var v=u.A,T=u.R;Array.isArray(T)||(T=[String(T)]),Yr(v.i,"t",T),u.C=0,v=u.j.J,u.h=new bl,u.g=Yl(u.j,v?m:null,!u.m),0<u.O&&(u.M=new Di(R(u.Y,u,u.g),u.O)),m=u.U,v=u.g,T=u.ca;var j="readystatechange";Array.isArray(j)||(j&&(Xo[0]=j.toString()),j=Xo);for(var $=0;$<j.length;$++){var ne=Ho(v,j[$],T||m.handleEvent,!1,m.h||m);if(!ne)break;m.g[ne.key]=ne}m=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),gr(),ji(u.i,u.u,u.A,u.l,u.R,u.m)}kn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Gt(u)==3?m.j():this.Y(u)},kn.prototype.Y=function(u){try{if(u==this.g)e:{const ot=Gt(this.g);var m=this.g.Ba();const yn=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||fa(this.g)))){this.J||ot!=4||m==7||(m==8||0>=yn?gr(3):gr(2)),Ui(this);var v=this.g.Z();this.X=v;t:if(Dl(this)){var T=fa(this.g);u="";var j=T.length,$=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mn(this),Wr(this);var ne="";break t}this.h.i=new h.TextDecoder}for(m=0;m<j;m++)this.h.h=!0,u+=this.h.i.decode(T[m],{stream:!($&&m==j-1)});T.length=0,this.h.g+=u,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=v==200,Vs(this.i,this.u,this.A,this.l,this.R,ot,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,dt=this.g;if((Fe=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ee(Fe)){var be=Fe;break t}}be=null}if(v=be)Rn(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,la(this,v);else{this.o=!1,this.s=3,nt(12),mn(this),Wr(this);break e}}if(this.P){v=!0;let an;for(;!this.J&&this.C<ne.length;)if(an=fd(this,ne),an==js){ot==4&&(this.s=4,nt(14),v=!1),Rn(this.i,this.l,null,"[Incomplete Response]");break}else if(an==oa){this.s=4,nt(15),Rn(this.i,this.l,ne,"[Invalid Chunk]"),v=!1;break}else Rn(this.i,this.l,an,null),la(this,an);if(Dl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||ne.length!=0||this.h.h||(this.s=1,nt(16),v=!1),this.o=this.o&&v,!v)Rn(this.i,this.l,ne,"[Invalid Chunked Response]"),mn(this),Wr(this);else if(0<ne.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),ma(vt),vt.M=!0,nt(11))}}else Rn(this.i,this.l,ne,null),la(this,ne);ot==4&&mn(this),this.o&&!this.J&&(ot==4?Ys(this.j,this):(this.o=!1,We(this)))}else qs(this.g),v==400&&0<ne.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),mn(this),Wr(this)}}}catch{}finally{}};function Dl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function fd(u,m){var v=u.C,T=m.indexOf(`
`,v);return T==-1?js:(v=Number(m.substring(v,T)),isNaN(v)?oa:(T+=1,T+v>m.length?js:(m=m.slice(T,T+v),u.C=T+v,m)))}kn.prototype.cancel=function(){this.J=!0,mn(this)};function We(u){u.S=Date.now()+u.I,Ol(u,u.I)}function Ol(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=An(R(u.ba,u),m)}function Ui(u){u.B&&(h.clearTimeout(u.B),u.B=null)}kn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(sa(this.i,this.A),this.L!=2&&(gr(),nt(17)),mn(this),this.s=2,Wr(this)):Ol(this,this.S-u)};function Wr(u){u.j.G==0||u.J||Ys(u.j,u)}function mn(u){Ui(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,Jo(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function la(u,m){try{var v=u.j;if(v.G!=0&&(v.g==u||$t(v.h,u))){if(!u.K&&$t(v.h,u)&&v.G==3){try{var T=v.Da.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var j=T;if(j[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<u.F)Qs(v),On(v);else break e;Gs(v),nt(18)}}else v.za=j[1],0<v.za-v.T&&37500>j[2]&&v.F&&v.v==0&&!v.C&&(v.C=An(R(v.Za,v),6e3));if(1>=Vl(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Er(v,11)}else if((u.K||v.g==u)&&Qs(v),!ee(m))for(j=v.Da.g.parse(m),m=0;m<j.length;m++){let be=j[m];if(v.T=be[0],be=be[1],v.G==2)if(be[0]=="c"){v.K=be[1],v.ia=be[2];const vt=be[3];vt!=null&&(v.la=vt,v.j.info("VER="+v.la));const ot=be[4];ot!=null&&(v.Aa=ot,v.j.info("SVER="+v.Aa));const yn=be[5];yn!=null&&typeof yn=="number"&&0<yn&&(T=1.5*yn,v.L=T,v.j.info("backChannelRequestTimeoutMs_="+T)),T=v;const an=u.g;if(an){const Ki=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ki){var $=T.h;$.g||Ki.indexOf("spdy")==-1&&Ki.indexOf("quic")==-1&&Ki.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(ua($,$.h),$.h=null))}if(T.D){const Js=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;Js&&(T.ya=Js,ze(T.I,T.D,Js))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-u.F,v.j.info("Handshake RTT: "+v.R+"ms")),T=v;var ne=u;if(T.qa=Ql(T,T.J?T.ia:null,T.W),ne.K){Ml(T.h,ne);var Fe=ne,dt=T.L;dt&&(Fe.I=dt),Fe.B&&(Ui(Fe),We(Fe)),T.g=ne}else Hi(T);0<v.i.length&&Jn(v)}else be[0]!="stop"&&be[0]!="close"||Er(v,7);else v.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?Er(v,7):St(v):be[0]!="noop"&&v.l&&v.l.ta(be),v.v=0)}}gr(4)}catch{}}var Ll=class{constructor(u,m){this.g=u,this.map=m}};function Bi(u){this.l=u||10,h.PerformanceNavigationTiming?(u=h.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function rn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Vl(u){return u.h?1:u.g?u.g.size:0}function $t(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function ua(u,m){u.g?u.g.add(m):u.h=m}function Ml(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Bi.prototype.cancel=function(){if(this.i=jl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function jl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const v of u.g.values())m=m.concat(v.D);return m}return B(u.i)}function Us(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],v=u.length,T=0;T<v;T++)m.push(u[T]);return m}m=[],v=0;for(T in u)m[v++]=u[T];return m}function Bs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var v=0;v<u;v++)m.push(v);return m}m=[],v=0;for(const T in u)m[v++]=T;return m}}}function qr(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var v=Bs(u),T=Us(u),j=T.length,$=0;$<j;$++)m.call(void 0,T[$],v&&v[$],u)}var zi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pd(u,m){if(u){u=u.split("&");for(var v=0;v<u.length;v++){var T=u[v].indexOf("="),j=null;if(0<=T){var $=u[v].substring(0,T);j=u[v].substring(T+1)}else $=u[v];m($,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function yr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof yr){this.h=u.h,$i(this,u.j),this.o=u.o,this.g=u.g,Hr(this,u.s),this.l=u.l;var m=u.i,v=new Qn;v.i=m.i,m.g&&(v.g=new Map(m.g),v.h=m.h),Kr(this,v),this.m=u.m}else u&&(m=String(u).match(zi))?(this.h=!1,$i(this,m[1]||"",!0),this.o=ke(m[2]||""),this.g=ke(m[3]||"",!0),Hr(this,m[4]),this.l=ke(m[5]||"",!0),Kr(this,m[6]||"",!0),this.m=ke(m[7]||"")):(this.h=!1,this.i=new Qn(null,this.h))}yr.prototype.toString=function(){var u=[],m=this.j;m&&u.push(Qr(m,zs,!0),":");var v=this.g;return(v||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Qr(m,zs,!0),"@"),u.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&u.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(Qr(v,v.charAt(0)=="/"?Bl:Ul,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",Qr(v,ca)),u.join("")};function sn(u){return new yr(u)}function $i(u,m,v){u.j=v?ke(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Hr(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function Kr(u,m,v){m instanceof Qn?(u.i=m,Yn(u.i,u.h)):(v||(m=Qr(m,zl)),u.i=new Qn(m,u.h))}function ze(u,m,v){u.i.set(m,v)}function Gr(u){return ze(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function ke(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Qr(u,m,v){return typeof u=="string"?(u=encodeURI(u).replace(m,Fl),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Fl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var zs=/[#\/\?@]/g,Ul=/[#\?:]/g,Bl=/[#\?]/g,zl=/[#\?@]/g,ca=/#/g;function Qn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function It(u){u.g||(u.g=new Map,u.h=0,u.i&&pd(u.i,function(m,v){u.add(decodeURIComponent(m.replace(/\+/g," ")),v)}))}n=Qn.prototype,n.add=function(u,m){It(this),this.i=null,u=gn(this,u);var v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(m),this.h+=1,this};function Pn(u,m){It(u),m=gn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Nn(u,m){return It(u),m=gn(u,m),u.g.has(m)}n.forEach=function(u,m){It(this),this.g.forEach(function(v,T){v.forEach(function(j){u.call(m,j,T,this)},this)},this)},n.na=function(){It(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),v=[];for(let T=0;T<m.length;T++){const j=u[T];for(let $=0;$<j.length;$++)v.push(m[T])}return v},n.V=function(u){It(this);let m=[];if(typeof u=="string")Nn(this,u)&&(m=m.concat(this.g.get(gn(this,u))));else{u=Array.from(this.g.values());for(let v=0;v<u.length;v++)m=m.concat(u[v])}return m},n.set=function(u,m){return It(this),this.i=null,u=gn(this,u),Nn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function Yr(u,m,v){Pn(u,m),0<v.length&&(u.i=null,u.g.set(gn(u,m),B(v)),u.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var v=0;v<m.length;v++){var T=m[v];const $=encodeURIComponent(String(T)),ne=this.V(T);for(T=0;T<ne.length;T++){var j=$;ne[T]!==""&&(j+="="+encodeURIComponent(String(ne[T]))),u.push(j)}}return this.i=u.join("&")};function gn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Yn(u,m){m&&!u.j&&(It(u),u.i=null,u.g.forEach(function(v,T){var j=T.toLowerCase();T!=j&&(Pn(this,T),Yr(this,j,v))},u)),u.j=m}function md(u,m){const v=new Mi;if(h.Image){const T=new Image;T.onload=L(Kt,v,"TestLoadImage: loaded",!0,m,T),T.onerror=L(Kt,v,"TestLoadImage: error",!1,m,T),T.onabort=L(Kt,v,"TestLoadImage: abort",!1,m,T),T.ontimeout=L(Kt,v,"TestLoadImage: timeout",!1,m,T),h.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else m(!1)}function $l(u,m){const v=new Mi,T=new AbortController,j=setTimeout(()=>{T.abort(),Kt(v,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:T.signal}).then($=>{clearTimeout(j),$.ok?Kt(v,"TestPingServer: ok",!0,m):Kt(v,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(j),Kt(v,"TestPingServer: error",!1,m)})}function Kt(u,m,v,T,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),T(v)}catch{}}function gd(){this.g=new ta}function Wl(u,m,v){const T=v||"";try{qr(u,function(j,$){let ne=j;y(j)&&(ne=Zo(j)),m.push(T+$+"="+encodeURIComponent(ne))})}catch(j){throw m.push(T+"type="+encodeURIComponent("_badmap")),j}}function vr(u){this.l=u.Ub||null,this.j=u.eb||!1}W(vr,Li),vr.prototype.g=function(){return new Wi(this.l,this.j)},vr.prototype.i=function(u){return function(){return u}}({});function Wi(u,m){ut.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}W(Wi,ut),n=Wi.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Dn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||h).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ql(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function ql(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?bn(this):Dn(this),this.readyState==3&&ql(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,bn(this))},n.Qa=function(u){this.g&&(this.response=u,bn(this))},n.ga=function(){this.g&&bn(this)};function bn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Dn(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var v=m.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=m.next();return u.join(`\r
`)};function Dn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Wi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function _r(u){let m="";return ce(u,function(v,T){m+=T,m+=":",m+=v,m+=`\r
`}),m}function Xr(u,m,v){e:{for(T in v){var T=!1;break e}T=!0}T||(v=_r(v),typeof u=="string"?v!=null&&encodeURIComponent(String(v)):ze(u,m,v))}function Ge(u){ut.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}W(Ge,ut);var yd=/^https?$/i,da=["POST","PUT"];n=Ge.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,v,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cn.g(),this.v=this.o?bs(this.o):bs(Cn),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch($){qi(this,$);return}if(u=v||"",v=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var j in T)v.set(j,T[j]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const $ of T.keys())v.set($,T.get($));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(v.keys()).find($=>$.toLowerCase()=="content-type"),j=h.FormData&&u instanceof h.FormData,!(0<=Array.prototype.indexOf.call(da,m,void 0))||T||j||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,ne]of v)this.g.setRequestHeader($,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ws(this),this.u=!0,this.g.send(u),this.u=!1}catch($){qi(this,$)}};function qi(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,$s(u),on(u)}function $s(u){u.A||(u.A=!0,ct(u,"complete"),ct(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ct(this,"complete"),ct(this,"abort"),on(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),on(this,!0)),Ge.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ha(this):this.bb())},n.bb=function(){ha(this)};function ha(u){if(u.h&&typeof c<"u"&&(!u.v[1]||Gt(u)!=4||u.Z()!=2)){if(u.u&&Gt(u)==4)Yo(u.Ea,0,u);else if(ct(u,"readystatechange"),Gt(u)==4){u.h=!1;try{const ne=u.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var v;if(!(v=m)){var T;if(T=ne===0){var j=String(u.D).match(zi)[1]||null;!j&&h.self&&h.self.location&&(j=h.self.location.protocol.slice(0,-1)),T=!yd.test(j?j.toLowerCase():"")}v=T}if(v)ct(u,"complete"),ct(u,"success");else{u.m=6;try{var $=2<Gt(u)?u.g.statusText:""}catch{$=""}u.l=$+" ["+u.Z()+"]",$s(u)}}finally{on(u)}}}}function on(u,m){if(u.g){Ws(u);const v=u.g,T=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||ct(u,"ready");try{v.onreadystatechange=T}catch{}}}function Ws(u){u.I&&(h.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Gt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),ea(m)}};function fa(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function qs(u){const m={};u=(u.g&&2<=Gt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(ee(u[T]))continue;var v=O(u[T]);const j=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const $=m[j]||[];m[j]=$,$.push(v)}k(m,function(T){return T.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xn(u,m,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||m}function pa(u){this.Aa=0,this.i=[],this.j=new Mi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xn("baseRetryDelayMs",5e3,u),this.cb=Xn("retryDelaySeedMs",1e4,u),this.Wa=Xn("forwardChannelMaxRetries",2,u),this.wa=Xn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Bi(u&&u.concurrentRequestLimit),this.Da=new gd,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=pa.prototype,n.la=8,n.G=1,n.connect=function(u,m,v,T){nt(0),this.W=u,this.H=m||{},v&&T!==void 0&&(this.H.OSID=v,this.H.OAID=T),this.F=this.X,this.I=Ql(this,null,this.W),Jn(this)};function St(u){if(Hs(u),u.G==3){var m=u.U++,v=sn(u.I);if(ze(v,"SID",u.K),ze(v,"RID",m),ze(v,"TYPE","terminate"),wr(u,v),m=new kn(u,u.j,m),m.L=2,m.v=Gr(sn(v)),v=!1,h.navigator&&h.navigator.sendBeacon)try{v=h.navigator.sendBeacon(m.v.toString(),"")}catch{}!v&&h.Image&&(new Image().src=m.v,v=!0),v||(m.g=Yl(m.j,null),m.g.ea(m.v)),m.F=Date.now(),We(m)}Gl(u)}function On(u){u.g&&(ma(u),u.g.cancel(),u.g=null)}function Hs(u){On(u),u.u&&(h.clearTimeout(u.u),u.u=null),Qs(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&h.clearTimeout(u.s),u.s=null)}function Jn(u){if(!rn(u.h)&&!u.s){u.s=!0;var m=u.Ga;Be||oe(),ie||(Be(),ie=!0),ge.add(m,u),u.B=0}}function vd(u,m){return Vl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=An(R(u.Ga,u,m),Kl(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const j=new kn(this,this.j,u);let $=this.o;if(this.S&&($?($=S($),N($,this.S)):$=this.S),this.m!==null||this.O||(j.H=$,$=null),this.P)e:{for(var m=0,v=0;v<this.i.length;v++){t:{var T=this.i[v];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(m+=T,4096<m){m=v;break e}if(m===4096||v===this.i.length-1){m=v+1;break e}}m=1e3}else m=1e3;m=Jr(this,j,m),v=sn(this.I),ze(v,"RID",u),ze(v,"CVER",22),this.D&&ze(v,"X-HTTP-Session-Id",this.D),wr(this,v),$&&(this.O?m="headers="+encodeURIComponent(String(_r($)))+"&"+m:this.m&&Xr(v,this.m,$)),ua(this.h,j),this.Ua&&ze(v,"TYPE","init"),this.P?(ze(v,"$req",m),ze(v,"SID","null"),j.T=!0,Fs(j,v,null)):Fs(j,v,m),this.G=2}}else this.G==3&&(u?Ks(this,u):this.i.length==0||rn(this.h)||Ks(this))};function Ks(u,m){var v;m?v=m.l:v=u.U++;const T=sn(u.I);ze(T,"SID",u.K),ze(T,"RID",v),ze(T,"AID",u.T),wr(u,T),u.m&&u.o&&Xr(T,u.m,u.o),v=new kn(u,u.j,v,u.B+1),u.m===null&&(v.H=u.o),m&&(u.i=m.D.concat(u.i)),m=Jr(u,v,1e3),v.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ua(u.h,v),Fs(v,T,m)}function wr(u,m){u.H&&ce(u.H,function(v,T){ze(m,T,v)}),u.l&&qr({},function(v,T){ze(m,T,v)})}function Jr(u,m,v){v=Math.min(u.i.length,v);var T=u.l?R(u.l.Na,u.l,u):null;e:{var j=u.i;let $=-1;for(;;){const ne=["count="+v];$==-1?0<v?($=j[0].g,ne.push("ofs="+$)):$=0:ne.push("ofs="+$);let Fe=!0;for(let dt=0;dt<v;dt++){let be=j[dt].g;const vt=j[dt].map;if(be-=$,0>be)$=Math.max(0,j[dt].g-100),Fe=!1;else try{Wl(vt,ne,"req"+be+"_")}catch{T&&T(vt)}}if(Fe){T=ne.join("&");break e}}}return u=u.i.splice(0,v),m.D=u,T}function Hi(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;Be||oe(),ie||(Be(),ie=!0),ge.add(m,u),u.v=0}}function Gs(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=An(R(u.Fa,u),Kl(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Hl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=An(R(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,nt(10),On(this),Hl(this))};function ma(u){u.A!=null&&(h.clearTimeout(u.A),u.A=null)}function Hl(u){u.g=new kn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=sn(u.qa);ze(m,"RID","rpc"),ze(m,"SID",u.K),ze(m,"AID",u.T),ze(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&ze(m,"TO",u.ja),ze(m,"TYPE","xmlhttp"),wr(u,m),u.m&&u.o&&Xr(m,u.m,u.o),u.L&&(u.g.I=u.L);var v=u.g;u=u.ia,v.L=1,v.v=Gr(sn(m)),v.m=null,v.P=!0,aa(v,u)}n.Za=function(){this.C!=null&&(this.C=null,On(this),Gs(this),nt(19))};function Qs(u){u.C!=null&&(h.clearTimeout(u.C),u.C=null)}function Ys(u,m){var v=null;if(u.g==m){Qs(u),ma(u),u.g=null;var T=2}else if($t(u.h,m))v=m.D,Ml(u.h,m),T=1;else return;if(u.G!=0){if(m.o)if(T==1){v=m.m?m.m.length:0,m=Date.now()-m.F;var j=u.B;T=Vi(),ct(T,new Ls(T,v)),Jn(u)}else Hi(u);else if(j=m.s,j==3||j==0&&0<m.X||!(T==1&&vd(u,m)||T==2&&Gs(u)))switch(v&&0<v.length&&(m=u.h,m.i=m.i.concat(v)),j){case 1:Er(u,5);break;case 4:Er(u,10);break;case 3:Er(u,6);break;default:Er(u,2)}}}function Kl(u,m){let v=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(v*=2),v*m}function Er(u,m){if(u.j.info("Error code "+m),m==2){var v=R(u.fb,u),T=u.Xa;const j=!T;T=new yr(T||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||$i(T,"https"),Gr(T),j?md(T.toString(),v):$l(T.toString(),v)}else nt(2);u.G=0,u.l&&u.l.sa(m),Gl(u),Hs(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function Gl(u){if(u.G=0,u.ka=[],u.l){const m=jl(u.h);(m.length!=0||u.i.length!=0)&&(b(u.ka,m),b(u.ka,u.i),u.h.i.length=0,B(u.i),u.i.length=0),u.l.ra()}}function Ql(u,m,v){var T=v instanceof yr?sn(v):new yr(v);if(T.g!="")m&&(T.g=m+"."+T.g),Hr(T,T.s);else{var j=h.location;T=j.protocol,m=m?m+"."+j.hostname:j.hostname,j=+j.port;var $=new yr(null);T&&$i($,T),m&&($.g=m),j&&Hr($,j),v&&($.l=v),T=$}return v=u.D,m=u.ya,v&&m&&ze(T,v,m),ze(T,"VER",u.la),wr(u,T),T}function Yl(u,m,v){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Ge(new vr({eb:v})):new Ge(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ga(){}n=ga.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Xs(){}Xs.prototype.g=function(u,m){return new Wt(u,m)};function Wt(u,m){ut.call(this),this.g=new pa(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!ee(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!ee(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new Zn(this)}W(Wt,ut),Wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wt.prototype.close=function(){St(this.g)},Wt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.u&&(v={},v.__data__=Zo(u),u=v);m.i.push(new Ll(m.Ya++,u)),m.G==3&&Jn(m)},Wt.prototype.N=function(){this.g.l=null,delete this.j,St(this.g),delete this.g,Wt.aa.N.call(this)};function Xl(u){Kn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const v in m){u=v;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}W(Xl,Kn);function Jl(){Os.call(this),this.status=1}W(Jl,Os);function Zn(u){this.g=u}W(Zn,ga),Zn.prototype.ua=function(){ct(this.g,"a")},Zn.prototype.ta=function(u){ct(this.g,new Xl(u))},Zn.prototype.sa=function(u){ct(this.g,new Jl)},Zn.prototype.ra=function(){ct(this.g,"b")},Xs.prototype.createWebChannel=Xs.prototype.g,Wt.prototype.send=Wt.prototype.o,Wt.prototype.open=Wt.prototype.m,Wt.prototype.close=Wt.prototype.close,h0=function(){return new Xs},d0=function(){return Vi()},c0=Gn,kf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ms.NO_ERROR=0,Ms.TIMEOUT=8,Ms.HTTP_ERROR=6,ic=Ms,Nl.COMPLETE="complete",u0=Nl,Ds.EventType=pn,pn.OPEN="a",pn.CLOSE="b",pn.ERROR="c",pn.MESSAGE="d",ut.prototype.listen=ut.prototype.K,qa=Ds,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,l0=Ge}).apply(typeof Qu<"u"?Qu:typeof self<"u"?self:typeof window<"u"?window:{});const Zy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ut=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fo="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=new qc("@firebase/firestore");function Ba(){return ys.logLevel}function he(n,...e){if(ys.logLevel<=Pe.DEBUG){const t=e.map(cp);ys.debug(`Firestore (${Fo}): ${n}`,...t)}}function Fr(n,...e){if(ys.logLevel<=Pe.ERROR){const t=e.map(cp);ys.error(`Firestore (${Fo}): ${n}`,...t)}}function Po(n,...e){if(ys.logLevel<=Pe.WARN){const t=e.map(cp);ys.warn(`Firestore (${Fo}): ${n}`,...t)}}function cp(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(n="Unexpected state"){const e=`FIRESTORE (${Fo}) INTERNAL ASSERTION FAILED: `+n;throw Fr(e),new Error(e)}function Ue(n,e){n||Te()}function Se(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class me extends Hn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class DR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ut.UNAUTHENTICATED))}shutdown(){}}class OR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class LR{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ue(this.o===void 0);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new Ti;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Ti,e.enqueueRetryable(()=>o(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},h=p=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>h(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?h(p):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Ti)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ue(typeof i.accessToken=="string"),new f0(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string"),new Ut(e)}}class VR{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class MR{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new VR(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class FR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Ue(this.o===void 0);const i=l=>{l.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.R;return this.R=l.token,he("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const o=l=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ue(typeof t.token=="string"),this.R=t.token,new jR(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UR(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const o=UR(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%e.length))}return i}}function Ve(n,e){return n<e?-1:n>e?1:0}function No(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new me(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new me(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new me(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new me(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return gt.fromMillis(Date.now())}static fromDate(e){return gt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new gt(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ve(this.nanoseconds,e.nanoseconds):Ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new gt(0,0))}static max(){return new Ie(new gt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,t,i){t===void 0?t=0:t>e.length&&Te(),i===void 0?i=e.length-t:i>e.length-t&&Te(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return ol.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ol?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=e.get(o),c=t.get(o);if(l<c)return-1;if(l>c)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ye extends ol{construct(e,t,i){return new Ye(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new me(X.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new Ye(t)}static emptyPath(){return new Ye([])}}const BR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends ol{construct(e,t,i){return new kt(e,t,i)}static isValidIdentifier(e){return BR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new kt(["__name__"])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new me(X.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;o<e.length;){const h=e[o];if(h==="\\"){if(o+1===e.length)throw new me(X.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new me(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else h==="`"?(c=!c,o++):h!=="."||c?(i+=h,o++):(l(),o++)}if(l(),c)throw new me(X.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kt(t)}static emptyPath(){return new kt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.path=e}static fromPath(e){return new _e(Ye.fromString(e))}static fromName(e){return new _e(Ye.fromString(e).popFirst(5))}static empty(){return new _e(Ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ye.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _e(new Ye(e.slice()))}}function zR(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ie.fromTimestamp(i===1e9?new gt(t+1,0):new gt(t,i));return new Ai(o,_e.empty(),e)}function $R(n){return new Ai(n.readTime,n.key,-1)}class Ai{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Ai(Ie.min(),_e.empty(),-1)}static max(){return new Ai(Ie.max(),_e.empty(),-1)}}function WR(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=_e.comparator(n.documentKey,e.documentKey),t!==0?t:Ve(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class HR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function El(n){if(n.code!==X.FAILED_PRECONDITION||n.message!==qR)throw n;he("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Q((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Q?t:Q.resolve(t)}catch(t){return Q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Q.reject(t)}static resolve(e){return new Q((t,i)=>{t(e)})}static reject(e){return new Q((t,i)=>{i(e)})}static waitFor(e){return new Q((t,i)=>{let o=0,l=0,c=!1;e.forEach(h=>{++o,h.next(()=>{++l,c&&l===o&&t()},p=>i(p))}),c=!0,l===o&&t()})}static or(e){let t=Q.resolve(!1);for(const i of e)t=t.next(o=>o?Q.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,l)=>{i.push(t.call(this,o,l))}),this.waitFor(i)}static mapArray(e,t){return new Q((i,o)=>{const l=e.length,c=new Array(l);let h=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next(_=>{c[y]=_,++h,h===l&&i(c)},_=>o(_))}})}static doWhile(e,t){return new Q((i,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):i()};l()})}}function KR(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Tl(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}dp.oe=-1;function Qc(n){return n==null}function Sc(n){return n===0&&1/n==-1/0}function GR(n){return typeof n=="number"&&Number.isInteger(n)&&!Sc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Uo(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function m0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,t){this.comparator=e,this.root=t||Ct.EMPTY}insert(e,t){return new Ze(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ct.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ct.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Yu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Yu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Yu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Yu(this.root,e,this.comparator,!0)}}class Yu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ct{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Ct.RED,this.left=o??Ct.EMPTY,this.right=l??Ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Ct(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Ct.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Te();const e=this.left.check();if(e!==this.right.check())throw Te();return e+(this.isRed()?0:1)}}Ct.EMPTY=null,Ct.RED=!0,Ct.BLACK=!1;Ct.EMPTY=new class{constructor(){this.size=0}get key(){throw Te()}get value(){throw Te()}get color(){throw Te()}get left(){throw Te()}get right(){throw Te()}copy(e,t,i,o,l){return this}insert(e,t,i){return new Ct(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new tv(this.data.getIterator())}getIteratorFrom(e){return new tv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof Pt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Pt(this.comparator);return t.data=e,t}}class tv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this.fields=e,e.sort(kt.comparator)}static empty(){return new zn([])}unionWith(e){let t=new Pt(kt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new zn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return No(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new g0("Invalid base64 string: "+l):l}}(e);return new bt(t)}static fromUint8Array(e){const t=function(o){let l="";for(let c=0;c<o.length;++c)l+=String.fromCharCode(o[c]);return l}(e);return new bt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const QR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ri(n){if(Ue(!!n),typeof n=="string"){let e=0;const t=QR.exec(n);if(Ue(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:it(n.seconds),nanos:it(n.nanos)}}function it(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function vs(n){return typeof n=="string"?bt.fromBase64String(n):bt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function fp(n){const e=n.mapValue.fields.__previous_value__;return hp(e)?fp(e):e}function al(n){const e=Ri(n.mapValue.fields.__local_write_time__.timestampValue);return new gt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e,t,i,o,l,c,h,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=h,this.longPollingOptions=p,this.useFetchStreams=y}}class ll{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ll("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ll&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu={mapValue:{}};function _s(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?hp(n)?4:JR(n)?9007199254740991:XR(n)?10:11:Te()}function cr(n,e){if(n===e)return!0;const t=_s(n);if(t!==_s(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return al(n).isEqual(al(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const c=Ri(o.timestampValue),h=Ri(l.timestampValue);return c.seconds===h.seconds&&c.nanos===h.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,l){return vs(o.bytesValue).isEqual(vs(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,l){return it(o.geoPointValue.latitude)===it(l.geoPointValue.latitude)&&it(o.geoPointValue.longitude)===it(l.geoPointValue.longitude)}(n,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return it(o.integerValue)===it(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const c=it(o.doubleValue),h=it(l.doubleValue);return c===h?Sc(c)===Sc(h):isNaN(c)&&isNaN(h)}return!1}(n,e);case 9:return No(n.arrayValue.values||[],e.arrayValue.values||[],cr);case 10:case 11:return function(o,l){const c=o.mapValue.fields||{},h=l.mapValue.fields||{};if(ev(c)!==ev(h))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(h[p]===void 0||!cr(c[p],h[p])))return!1;return!0}(n,e);default:return Te()}}function ul(n,e){return(n.values||[]).find(t=>cr(t,e))!==void 0}function bo(n,e){if(n===e)return 0;const t=_s(n),i=_s(e);if(t!==i)return Ve(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ve(n.booleanValue,e.booleanValue);case 2:return function(l,c){const h=it(l.integerValue||l.doubleValue),p=it(c.integerValue||c.doubleValue);return h<p?-1:h>p?1:h===p?0:isNaN(h)?isNaN(p)?0:-1:1}(n,e);case 3:return nv(n.timestampValue,e.timestampValue);case 4:return nv(al(n),al(e));case 5:return Ve(n.stringValue,e.stringValue);case 6:return function(l,c){const h=vs(l),p=vs(c);return h.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,c){const h=l.split("/"),p=c.split("/");for(let y=0;y<h.length&&y<p.length;y++){const _=Ve(h[y],p[y]);if(_!==0)return _}return Ve(h.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,c){const h=Ve(it(l.latitude),it(c.latitude));return h!==0?h:Ve(it(l.longitude),it(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return rv(n.arrayValue,e.arrayValue);case 10:return function(l,c){var h,p,y,_;const I=l.fields||{},R=c.fields||{},L=(h=I.value)===null||h===void 0?void 0:h.arrayValue,W=(p=R.value)===null||p===void 0?void 0:p.arrayValue,B=Ve(((y=L==null?void 0:L.values)===null||y===void 0?void 0:y.length)||0,((_=W==null?void 0:W.values)===null||_===void 0?void 0:_.length)||0);return B!==0?B:rv(L,W)}(n.mapValue,e.mapValue);case 11:return function(l,c){if(l===Xu.mapValue&&c===Xu.mapValue)return 0;if(l===Xu.mapValue)return 1;if(c===Xu.mapValue)return-1;const h=l.fields||{},p=Object.keys(h),y=c.fields||{},_=Object.keys(y);p.sort(),_.sort();for(let I=0;I<p.length&&I<_.length;++I){const R=Ve(p[I],_[I]);if(R!==0)return R;const L=bo(h[p[I]],y[_[I]]);if(L!==0)return L}return Ve(p.length,_.length)}(n.mapValue,e.mapValue);default:throw Te()}}function nv(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ve(n,e);const t=Ri(n),i=Ri(e),o=Ve(t.seconds,i.seconds);return o!==0?o:Ve(t.nanos,i.nanos)}function rv(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=bo(t[o],i[o]);if(l)return l}return Ve(t.length,i.length)}function Do(n){return Pf(n)}function Pf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Ri(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return vs(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return _e.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=Pf(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const c of i)l?l=!1:o+=",",o+=`${c}:${Pf(t.fields[c])}`;return o+"}"}(n.mapValue):Te()}function Nf(n){return!!n&&"integerValue"in n}function pp(n){return!!n&&"arrayValue"in n}function iv(n){return!!n&&"nullValue"in n}function sv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function sc(n){return!!n&&"mapValue"in n}function XR(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ya(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Uo(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Ya(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ya(n.arrayValue.values[t]);return e}return Object.assign({},n)}function JR(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.value=e}static empty(){return new Sn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!sc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ya(t)}setAll(e){let t=kt.emptyPath(),i={},o=[];e.forEach((c,h)=>{if(!t.isImmediateParentOf(h)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=h.popLast()}c?i[h.lastSegment()]=Ya(c):o.push(h.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());sc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return cr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];sc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Uo(t,(o,l)=>e[o]=l);for(const o of i)delete e[o]}clone(){return new Sn(Ya(this.value))}}function y0(n){const e=[];return Uo(n.fields,(t,i)=>{const o=new kt([t]);if(sc(i)){const l=y0(i.mapValue).fields;if(l.length===0)e.push(o);else for(const c of l)e.push(o.child(c))}else e.push(o)}),new zn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t,i,o,l,c,h){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=c,this.documentState=h}static newInvalidDocument(e){return new Bt(e,0,Ie.min(),Ie.min(),Ie.min(),Sn.empty(),0)}static newFoundDocument(e,t,i,o){return new Bt(e,1,t,Ie.min(),i,o,0)}static newNoDocument(e,t){return new Bt(e,2,t,Ie.min(),Ie.min(),Sn.empty(),0)}static newUnknownDocument(e,t){return new Bt(e,3,t,Ie.min(),Ie.min(),Sn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Sn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,t){this.position=e,this.inclusive=t}}function ov(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],c=n.position[o];if(l.field.isKeyField()?i=_e.comparator(_e.fromName(c.referenceValue),t.key):i=bo(c,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function av(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!cr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,t="asc"){this.field=e,this.dir=t}}function ZR(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let v0=class{};class mt extends v0{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new tC(e,t,i):t==="array-contains"?new iC(e,i):t==="in"?new sC(e,i):t==="not-in"?new oC(e,i):t==="array-contains-any"?new aC(e,i):new mt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new nC(e,i):new rC(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(bo(t,this.value)):t!==null&&_s(this.value)===_s(t)&&this.matchesComparison(bo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dr extends v0{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new dr(e,t)}matches(e){return _0(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function _0(n){return n.op==="and"}function w0(n){return eC(n)&&_0(n)}function eC(n){for(const e of n.filters)if(e instanceof dr)return!1;return!0}function bf(n){if(n instanceof mt)return n.field.canonicalString()+n.op.toString()+Do(n.value);if(w0(n))return n.filters.map(e=>bf(e)).join(",");{const e=n.filters.map(t=>bf(t)).join(",");return`${n.op}(${e})`}}function E0(n,e){return n instanceof mt?function(i,o){return o instanceof mt&&i.op===o.op&&i.field.isEqual(o.field)&&cr(i.value,o.value)}(n,e):n instanceof dr?function(i,o){return o instanceof dr&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((l,c,h)=>l&&E0(c,o.filters[h]),!0):!1}(n,e):void Te()}function T0(n){return n instanceof mt?function(t){return`${t.field.canonicalString()} ${t.op} ${Do(t.value)}`}(n):n instanceof dr?function(t){return t.op.toString()+" {"+t.getFilters().map(T0).join(" ,")+"}"}(n):"Filter"}class tC extends mt{constructor(e,t,i){super(e,t,i),this.key=_e.fromName(i.referenceValue)}matches(e){const t=_e.comparator(e.key,this.key);return this.matchesComparison(t)}}class nC extends mt{constructor(e,t){super(e,"in",t),this.keys=I0("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class rC extends mt{constructor(e,t){super(e,"not-in",t),this.keys=I0("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function I0(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>_e.fromName(i.referenceValue))}class iC extends mt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return pp(t)&&ul(t.arrayValue,this.value)}}class sC extends mt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ul(this.value.arrayValue,t)}}class oC extends mt{constructor(e,t){super(e,"not-in",t)}matches(e){if(ul(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ul(this.value.arrayValue,t)}}class aC extends mt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!pp(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>ul(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e,t=null,i=[],o=[],l=null,c=null,h=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=c,this.endAt=h,this.ue=null}}function lv(n,e=null,t=[],i=[],o=null,l=null,c=null){return new lC(n,e,t,i,o,l,c)}function mp(n){const e=Se(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>bf(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Qc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Do(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Do(i)).join(",")),e.ue=t}return e.ue}function gp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!ZR(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!E0(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!av(n.startAt,e.startAt)&&av(n.endAt,e.endAt)}function Df(n){return _e.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,t=null,i=[],o=[],l=null,c="F",h=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=c,this.startAt=h,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function uC(n,e,t,i,o,l,c,h){return new Yc(n,e,t,i,o,l,c,h)}function S0(n){return new Yc(n)}function uv(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function cC(n){return n.collectionGroup!==null}function Xa(n){const e=Se(n);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let h=new Pt(kt.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(h=h.add(y.field))})}),h})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new Ac(l,i))}),t.has(kt.keyField().canonicalString())||e.ce.push(new Ac(kt.keyField(),i))}return e.ce}function ar(n){const e=Se(n);return e.le||(e.le=dC(e,Xa(n))),e.le}function dC(n,e){if(n.limitType==="F")return lv(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new Ac(o.field,l)});const t=n.endAt?new xc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new xc(n.startAt.position,n.startAt.inclusive):null;return lv(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Of(n,e,t){return new Yc(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Xc(n,e){return gp(ar(n),ar(e))&&n.limitType===e.limitType}function x0(n){return`${mp(ar(n))}|lt:${n.limitType}`}function wo(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>T0(o)).join(", ")}]`),Qc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>Do(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>Do(o)).join(",")),`Target(${i})`}(ar(n))}; limitType=${n.limitType})`}function Jc(n,e){return e.isFoundDocument()&&function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):_e.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,e)&&function(i,o){for(const l of Xa(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(c,h,p){const y=ov(c,h,p);return c.inclusive?y<=0:y<0}(i.startAt,Xa(i),o)||i.endAt&&!function(c,h,p){const y=ov(c,h,p);return c.inclusive?y>=0:y>0}(i.endAt,Xa(i),o))}(n,e)}function hC(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function A0(n){return(e,t)=>{let i=!1;for(const o of Xa(n)){const l=fC(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function fC(n,e,t){const i=n.field.isKeyField()?_e.comparator(e.key,t.key):function(l,c,h){const p=c.data.field(l),y=h.data.field(l);return p!==null&&y!==null?bo(p,y):Te()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Te()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Uo(this.inner,(t,i)=>{for(const[o,l]of i)e(o,l)})}isEmpty(){return m0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC=new Ze(_e.comparator);function Ur(){return pC}const R0=new Ze(_e.comparator);function Ha(...n){let e=R0;for(const t of n)e=e.insert(t.key,t);return e}function C0(n){let e=R0;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function us(){return Ja()}function k0(){return Ja()}function Ja(){return new Bo(n=>n.toString(),(n,e)=>n.isEqual(e))}const mC=new Ze(_e.comparator),gC=new Pt(_e.comparator);function Ce(...n){let e=gC;for(const t of n)e=e.add(t);return e}const yC=new Pt(Ve);function vC(){return yC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sc(e)?"-0":e}}function P0(n){return{integerValue:""+n}}function _C(n,e){return GR(e)?P0(e):yp(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(){this._=void 0}}function wC(n,e,t){return n instanceof Rc?function(o,l){const c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&hp(l)&&(l=fp(l)),l&&(c.fields.__previous_value__=l),{mapValue:c}}(t,e):n instanceof cl?b0(n,e):n instanceof dl?D0(n,e):function(o,l){const c=N0(o,l),h=cv(c)+cv(o.Pe);return Nf(c)&&Nf(o.Pe)?P0(h):yp(o.serializer,h)}(n,e)}function EC(n,e,t){return n instanceof cl?b0(n,e):n instanceof dl?D0(n,e):t}function N0(n,e){return n instanceof Cc?function(i){return Nf(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class Rc extends Zc{}class cl extends Zc{constructor(e){super(),this.elements=e}}function b0(n,e){const t=O0(e);for(const i of n.elements)t.some(o=>cr(o,i))||t.push(i);return{arrayValue:{values:t}}}class dl extends Zc{constructor(e){super(),this.elements=e}}function D0(n,e){let t=O0(e);for(const i of n.elements)t=t.filter(o=>!cr(o,i));return{arrayValue:{values:t}}}class Cc extends Zc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function cv(n){return it(n.integerValue||n.doubleValue)}function O0(n){return pp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function TC(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof cl&&o instanceof cl||i instanceof dl&&o instanceof dl?No(i.elements,o.elements,cr):i instanceof Cc&&o instanceof Cc?cr(i.Pe,o.Pe):i instanceof Rc&&o instanceof Rc}(n.transform,e.transform)}class IC{constructor(e,t){this.version=e,this.transformResults=t}}class Lr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Lr}static exists(e){return new Lr(void 0,e)}static updateTime(e){return new Lr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function oc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ed{}function L0(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new M0(n.key,Lr.none()):new Il(n.key,n.data,Lr.none());{const t=n.data,i=Sn.empty();let o=new Pt(kt.comparator);for(let l of e.fields)if(!o.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?i.delete(l):i.set(l,c),o=o.add(l)}return new xs(n.key,i,new zn(o.toArray()),Lr.none())}}function SC(n,e,t){n instanceof Il?function(o,l,c){const h=o.value.clone(),p=hv(o.fieldTransforms,l,c.transformResults);h.setAll(p),l.convertToFoundDocument(c.version,h).setHasCommittedMutations()}(n,e,t):n instanceof xs?function(o,l,c){if(!oc(o.precondition,l))return void l.convertToUnknownDocument(c.version);const h=hv(o.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(V0(o)),p.setAll(h),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(n,e,t):function(o,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function Za(n,e,t,i){return n instanceof Il?function(l,c,h,p){if(!oc(l.precondition,c))return h;const y=l.value.clone(),_=fv(l.fieldTransforms,p,c);return y.setAll(_),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),null}(n,e,t,i):n instanceof xs?function(l,c,h,p){if(!oc(l.precondition,c))return h;const y=fv(l.fieldTransforms,p,c),_=c.data;return _.setAll(V0(l)),_.setAll(y),c.convertToFoundDocument(c.version,_).setHasLocalMutations(),h===null?null:h.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(I=>I.field))}(n,e,t,i):function(l,c,h){return oc(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):h}(n,e,t)}function xC(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=N0(i.transform,o||null);l!=null&&(t===null&&(t=Sn.empty()),t.set(i.field,l))}return t||null}function dv(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&No(i,o,(l,c)=>TC(l,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Il extends ed{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class xs extends ed{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function V0(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function hv(n,e,t){const i=new Map;Ue(n.length===t.length);for(let o=0;o<t.length;o++){const l=n[o],c=l.transform,h=e.data.field(l.field);i.set(l.field,EC(c,h,t[o]))}return i}function fv(n,e,t){const i=new Map;for(const o of n){const l=o.transform,c=t.data.field(o.field);i.set(o.field,wC(l,c,e))}return i}class M0 extends ed{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class AC extends ed{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&SC(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Za(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Za(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=k0();return this.mutations.forEach(o=>{const l=e.get(o.key),c=l.overlayedDocument;let h=this.applyToLocalView(c,l.mutatedFields);h=t.has(o.key)?null:h;const p=L0(c,h);p!==null&&i.set(o.key,p),c.isValidDocument()||c.convertToNoDocument(Ie.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ce())}isEqual(e){return this.batchId===e.batchId&&No(this.mutations,e.mutations,(t,i)=>dv(t,i))&&No(this.baseMutations,e.baseMutations,(t,i)=>dv(t,i))}}class vp{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Ue(e.mutations.length===i.length);let o=function(){return mC}();const l=e.mutations;for(let c=0;c<l.length;c++)o=o.insert(l[c].key,i[c].version);return new vp(e,t,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt,De;function PC(n){switch(n){default:return Te();case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0}}function j0(n){if(n===void 0)return Fr("GRPC error has no .code"),X.UNKNOWN;switch(n){case lt.OK:return X.OK;case lt.CANCELLED:return X.CANCELLED;case lt.UNKNOWN:return X.UNKNOWN;case lt.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case lt.INTERNAL:return X.INTERNAL;case lt.UNAVAILABLE:return X.UNAVAILABLE;case lt.UNAUTHENTICATED:return X.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case lt.NOT_FOUND:return X.NOT_FOUND;case lt.ALREADY_EXISTS:return X.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return X.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case lt.ABORTED:return X.ABORTED;case lt.OUT_OF_RANGE:return X.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return X.UNIMPLEMENTED;case lt.DATA_LOSS:return X.DATA_LOSS;default:return Te()}}(De=lt||(lt={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=new ds([4294967295,4294967295],0);function pv(n){const e=NC().encode(n),t=new a0;return t.update(e),new Uint8Array(t.digest())}function mv(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new ds([t,i],0),new ds([o,l],0)]}class _p{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Ka(`Invalid padding: ${t}`);if(i<0)throw new Ka(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ka(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Ka(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=ds.fromNumber(this.Ie)}Ee(e,t,i){let o=e.add(t.multiply(ds.fromNumber(i)));return o.compare(bC)===1&&(o=new ds([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=pv(e),[i,o]=mv(t);for(let l=0;l<this.hashCount;l++){const c=this.Ee(i,o,l);if(!this.de(c))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new _p(l,o,t);return i.forEach(h=>c.insert(h)),c}insert(e){if(this.Ie===0)return;const t=pv(e),[i,o]=mv(t);for(let l=0;l<this.hashCount;l++){const c=this.Ee(i,o,l);this.Ae(c)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Ka extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Sl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new td(Ie.min(),o,new Ze(Ve),Ur(),Ce())}}class Sl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Sl(i,t,Ce(),Ce(),Ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,t,i,o){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=o}}class F0{constructor(e,t){this.targetId=e,this.me=t}}class U0{constructor(e,t,i=bt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class gv{constructor(){this.fe=0,this.ge=vv(),this.pe=bt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ce(),t=Ce(),i=Ce();return this.ge.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Te()}}),new Sl(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=vv()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class DC{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ur(),this.qe=yv(),this.Qe=new Ze(Ve)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const i=this.Ge(t);switch(e.state){case 0:this.ze(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),i.De(e.resumeToken));break;default:Te()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((i,o)=>{this.ze(o)&&t(o)})}He(e){const t=e.targetId,i=e.me.count,o=this.Je(t);if(o){const l=o.target;if(Df(l))if(i===0){const c=new _e(l.path);this.Ue(t,c,Bt.newNoDocument(c,Ie.min()))}else Ue(i===1);else{const c=this.Ye(t);if(c!==i){const h=this.Ze(e),p=h?this.Xe(h,e,c):1;if(p!==0){this.je(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,y)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let c,h;try{c=vs(i).toUint8Array()}catch(p){if(p instanceof g0)return Po("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{h=new _p(c,o,l)}catch(p){return Po(p instanceof Ka?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return h.Ie===0?null:h}Xe(e,t,i){return t.me.count===i-this.nt(e,t.targetId)?0:2}nt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let o=0;return i.forEach(l=>{const c=this.Le.tt(),h=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(h)||(this.Ue(t,l,null),o++)}),o}rt(e){const t=new Map;this.Be.forEach((l,c)=>{const h=this.Je(c);if(h){if(l.current&&Df(h.target)){const p=new _e(h.target.path);this.ke.get(p)!==null||this.it(c,p)||this.Ue(c,p,Bt.newNoDocument(p,e))}l.be&&(t.set(c,l.ve()),l.Ce())}});let i=Ce();this.qe.forEach((l,c)=>{let h=!0;c.forEachWhile(p=>{const y=this.Je(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)}),h&&(i=i.add(l))}),this.ke.forEach((l,c)=>c.setReadTime(e));const o=new td(e,t,this.Qe,this.ke,i);return this.ke=Ur(),this.qe=yv(),this.Qe=new Ze(Ve),o}$e(e,t){if(!this.ze(e))return;const i=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,i){if(!this.ze(e))return;const o=this.Ge(e);this.it(e,t)?o.Fe(t,1):o.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new gv,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Pt(Ve),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||he("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new gv),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function yv(){return new Ze(_e.comparator)}function vv(){return new Ze(_e.comparator)}const OC={asc:"ASCENDING",desc:"DESCENDING"},LC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},VC={and:"AND",or:"OR"};class MC{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Lf(n,e){return n.useProto3Json||Qc(e)?e:{value:e}}function kc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function B0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function jC(n,e){return kc(n,e.toTimestamp())}function lr(n){return Ue(!!n),Ie.fromTimestamp(function(t){const i=Ri(t);return new gt(i.seconds,i.nanos)}(n))}function wp(n,e){return Vf(n,e).canonicalString()}function Vf(n,e){const t=function(o){return new Ye(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function z0(n){const e=Ye.fromString(n);return Ue(K0(e)),e}function Mf(n,e){return wp(n.databaseId,e.path)}function of(n,e){const t=z0(e);if(t.get(1)!==n.databaseId.projectId)throw new me(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new me(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new _e(W0(t))}function $0(n,e){return wp(n.databaseId,e)}function FC(n){const e=z0(n);return e.length===4?Ye.emptyPath():W0(e)}function jf(n){return new Ye(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function W0(n){return Ue(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function _v(n,e,t){return{name:Mf(n,e),fields:t.value.mapValue.fields}}function UC(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Te()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(y,_){return y.useProto3Json?(Ue(_===void 0||typeof _=="string"),bt.fromBase64String(_||"")):(Ue(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),bt.fromUint8Array(_||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,h=c&&function(y){const _=y.code===void 0?X.UNKNOWN:j0(y.code);return new me(_,y.message||"")}(c);t=new U0(i,o,l,h||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=of(n,i.document.name),l=lr(i.document.updateTime),c=i.document.createTime?lr(i.document.createTime):Ie.min(),h=new Sn({mapValue:{fields:i.document.fields}}),p=Bt.newFoundDocument(o,l,c,h),y=i.targetIds||[],_=i.removedTargetIds||[];t=new ac(y,_,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=of(n,i.document),l=i.readTime?lr(i.readTime):Ie.min(),c=Bt.newNoDocument(o,l),h=i.removedTargetIds||[];t=new ac([],h,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=of(n,i.document),l=i.removedTargetIds||[];t=new ac([],l,o,null)}else{if(!("filter"in e))return Te();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,c=new kC(o,l),h=i.targetId;t=new F0(h,c)}}return t}function BC(n,e){let t;if(e instanceof Il)t={update:_v(n,e.key,e.value)};else if(e instanceof M0)t={delete:Mf(n,e.key)};else if(e instanceof xs)t={update:_v(n,e.key,e.data),updateMask:YC(e.fieldMask)};else{if(!(e instanceof AC))return Te();t={verify:Mf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,c){const h=c.transform;if(h instanceof Rc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof cl)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof dl)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof Cc)return{fieldPath:c.field.canonicalString(),increment:h.Pe};throw Te()}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:jC(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Te()}(n,e.precondition)),t}function zC(n,e){return n&&n.length>0?(Ue(e!==void 0),n.map(t=>function(o,l){let c=o.updateTime?lr(o.updateTime):lr(l);return c.isEqual(Ie.min())&&(c=lr(l)),new IC(c,o.transformResults||[])}(t,e))):[]}function $C(n,e){return{documents:[$0(n,e.path)]}}function WC(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=$0(n,o);const l=function(y){if(y.length!==0)return H0(dr.create(y,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(y){if(y.length!==0)return y.map(_=>function(R){return{field:Eo(R.field),direction:KC(R.dir)}}(_))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const h=Lf(n,e.limit);return h!==null&&(t.structuredQuery.limit=h),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{_t:t,parent:o}}function qC(n){let e=FC(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Ue(i===1);const _=t.from[0];_.allDescendants?o=_.collectionId:e=e.child(_.collectionId)}let l=[];t.where&&(l=function(I){const R=q0(I);return R instanceof dr&&w0(R)?R.getFilters():[R]}(t.where));let c=[];t.orderBy&&(c=function(I){return I.map(R=>function(W){return new Ac(To(W.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(W.direction))}(R))}(t.orderBy));let h=null;t.limit&&(h=function(I){let R;return R=typeof I=="object"?I.value:I,Qc(R)?null:R}(t.limit));let p=null;t.startAt&&(p=function(I){const R=!!I.before,L=I.values||[];return new xc(L,R)}(t.startAt));let y=null;return t.endAt&&(y=function(I){const R=!I.before,L=I.values||[];return new xc(L,R)}(t.endAt)),uC(e,o,c,l,h,"F",p,y)}function HC(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function q0(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=To(t.unaryFilter.field);return mt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=To(t.unaryFilter.field);return mt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=To(t.unaryFilter.field);return mt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=To(t.unaryFilter.field);return mt.create(c,"!=",{nullValue:"NULL_VALUE"});default:return Te()}}(n):n.fieldFilter!==void 0?function(t){return mt.create(To(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Te()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return dr.create(t.compositeFilter.filters.map(i=>q0(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Te()}}(t.compositeFilter.op))}(n):Te()}function KC(n){return OC[n]}function GC(n){return LC[n]}function QC(n){return VC[n]}function Eo(n){return{fieldPath:n.canonicalString()}}function To(n){return kt.fromServerFormat(n.fieldPath)}function H0(n){return n instanceof mt?function(t){if(t.op==="=="){if(sv(t.value))return{unaryFilter:{field:Eo(t.field),op:"IS_NAN"}};if(iv(t.value))return{unaryFilter:{field:Eo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(sv(t.value))return{unaryFilter:{field:Eo(t.field),op:"IS_NOT_NAN"}};if(iv(t.value))return{unaryFilter:{field:Eo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Eo(t.field),op:GC(t.op),value:t.value}}}(n):n instanceof dr?function(t){const i=t.getFilters().map(o=>H0(o));return i.length===1?i[0]:{compositeFilter:{op:QC(t.op),filters:i}}}(n):Te()}function YC(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function K0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,t,i,o,l=Ie.min(),c=Ie.min(),h=bt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=h,this.expectedCount=p}withSequenceNumber(e){return new vi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new vi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e){this.ct=e}}function JC(n){const e=qC({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Of(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(){this.un=new e1}addToCollectionParentIndex(e,t){return this.un.add(t),Q.resolve()}getCollectionParents(e,t){return Q.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return Q.resolve()}deleteFieldIndex(e,t){return Q.resolve()}deleteAllFieldIndexes(e){return Q.resolve()}createTargetIndexes(e,t){return Q.resolve()}getDocumentsMatchingTarget(e,t){return Q.resolve(null)}getIndexType(e,t){return Q.resolve(0)}getFieldIndexes(e,t){return Q.resolve([])}getNextCollectionGroupToUpdate(e){return Q.resolve(null)}getMinOffset(e,t){return Q.resolve(Ai.min())}getMinOffsetFromCollectionGroup(e,t){return Q.resolve(Ai.min())}updateCollectionGroup(e,t,i){return Q.resolve()}updateIndexEntries(e,t){return Q.resolve()}}class e1{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new Pt(Ye.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new Pt(Ye.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Oo(0)}static kn(){return new Oo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(){this.changes=new Bo(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?Q.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&Za(i.mutation,o,zn.empty(),gt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Ce()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Ce()){const o=us();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(l=>{let c=Ha();return l.forEach((h,p)=>{c=c.insert(h,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const i=us();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Ce()))}populateOverlays(e,t,i){const o=[];return i.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((c,h)=>{t.set(c,h)})})}computeViews(e,t,i,o){let l=Ur();const c=Ja(),h=function(){return Ja()}();return t.forEach((p,y)=>{const _=i.get(y.key);o.has(y.key)&&(_===void 0||_.mutation instanceof xs)?l=l.insert(y.key,y):_!==void 0?(c.set(y.key,_.mutation.getFieldMask()),Za(_.mutation,y,_.mutation.getFieldMask(),gt.now())):c.set(y.key,zn.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((y,_)=>c.set(y,_)),t.forEach((y,_)=>{var I;return h.set(y,new n1(_,(I=c.get(y))!==null&&I!==void 0?I:null))}),h))}recalculateAndSaveOverlays(e,t){const i=Ja();let o=new Ze((c,h)=>c-h),l=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const h of c)h.keys().forEach(p=>{const y=t.get(p);if(y===null)return;let _=i.get(p)||zn.empty();_=h.applyToLocalView(y,_),i.set(p,_);const I=(o.get(h.batchId)||Ce()).add(p);o=o.insert(h.batchId,I)})}).next(()=>{const c=[],h=o.getReverseIterator();for(;h.hasNext();){const p=h.getNext(),y=p.key,_=p.value,I=k0();_.forEach(R=>{if(!l.has(R)){const L=L0(t.get(R),i.get(R));L!==null&&I.set(R,L),l=l.add(R)}}),c.push(this.documentOverlayCache.saveOverlays(e,y,I))}return Q.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(c){return _e.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):cC(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(l=>{const c=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):Q.resolve(us());let h=-1,p=l;return c.next(y=>Q.forEach(y,(_,I)=>(h<I.largestBatchId&&(h=I.largestBatchId),l.get(_)?Q.resolve():this.remoteDocumentCache.getEntry(e,_).next(R=>{p=p.insert(_,R)}))).next(()=>this.populateOverlays(e,y,l)).next(()=>this.computeViews(e,p,y,Ce())).next(_=>({batchId:h,changes:C0(_)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new _e(t)).next(i=>{let o=Ha();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let c=Ha();return this.indexManager.getCollectionParents(e,l).next(h=>Q.forEach(h,p=>{const y=function(I,R){return new Yc(R,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next(_=>{_.forEach((I,R)=>{c=c.insert(I,R)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o))).next(c=>{l.forEach((p,y)=>{const _=y.getKey();c.get(_)===null&&(c=c.insert(_,Bt.newInvalidDocument(_)))});let h=Ha();return c.forEach((p,y)=>{const _=l.get(p);_!==void 0&&Za(_.mutation,y,zn.empty(),gt.now()),Jc(t,y)&&(h=h.insert(p,y))}),h})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return Q.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:lr(o.createTime)}}(t)),Q.resolve()}getNamedQuery(e,t){return Q.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(o){return{name:o.name,query:JC(o.bundledQuery),readTime:lr(o.readTime)}}(t)),Q.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(){this.overlays=new Ze(_e.comparator),this.Ir=new Map}getOverlay(e,t){return Q.resolve(this.overlays.get(t))}getOverlays(e,t){const i=us();return Q.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&i.set(o,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,l)=>{this.ht(e,t,l)}),Q.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Ir.get(i);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.Ir.delete(i)),Q.resolve()}getOverlaysForCollection(e,t,i){const o=us(),l=t.length+1,c=new _e(t.child("")),h=this.overlays.getIteratorFrom(c);for(;h.hasNext();){const p=h.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return Q.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new Ze((y,_)=>y-_);const c=this.overlays.getIterator();for(;c.hasNext();){const y=c.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let _=l.get(y.largestBatchId);_===null&&(_=us(),l=l.insert(y.largestBatchId,_)),_.set(y.getKey(),y)}}const h=us(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,_)=>h.set(y,_)),!(h.size()>=o)););return Q.resolve(h)}ht(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.Ir.get(o.largestBatchId).delete(i.key);this.Ir.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new CC(t,i));let l=this.Ir.get(t);l===void 0&&(l=Ce(),this.Ir.set(t,l)),this.Ir.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(){this.sessionToken=bt.EMPTY_BYTE_STRING}getSessionToken(e){return Q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(){this.Tr=new Pt(Tt.Er),this.dr=new Pt(Tt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const i=new Tt(e,t);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.Vr(new Tt(e,t))}mr(e,t){e.forEach(i=>this.removeReference(i,t))}gr(e){const t=new _e(new Ye([])),i=new Tt(t,e),o=new Tt(t,e+1),l=[];return this.dr.forEachInRange([i,o],c=>{this.Vr(c),l.push(c.key)}),l}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new _e(new Ye([])),i=new Tt(t,e),o=new Tt(t,e+1);let l=Ce();return this.dr.forEachInRange([i,o],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new Tt(e,0),i=this.Tr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Tt{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return _e.comparator(e.key,t.key)||Ve(e.wr,t.wr)}static Ar(e,t){return Ve(e.wr,t.wr)||_e.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Pt(Tt.Er)}checkEmpty(e){return Q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new RC(l,t,i,o);this.mutationQueue.push(c);for(const h of o)this.br=this.br.add(new Tt(h.key,l)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast());return Q.resolve(c)}lookupMutationBatch(e,t){return Q.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.vr(i),l=o<0?0:o;return Q.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Tt(t,0),o=new Tt(t,Number.POSITIVE_INFINITY),l=[];return this.br.forEachInRange([i,o],c=>{const h=this.Dr(c.wr);l.push(h)}),Q.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Pt(Ve);return t.forEach(o=>{const l=new Tt(o,0),c=new Tt(o,Number.POSITIVE_INFINITY);this.br.forEachInRange([l,c],h=>{i=i.add(h.wr)})}),Q.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;_e.isDocumentKey(l)||(l=l.child(""));const c=new Tt(new _e(l),0);let h=new Pt(Ve);return this.br.forEachWhile(p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(h=h.add(p.wr)),!0)},c),Q.resolve(this.Cr(h))}Cr(e){const t=[];return e.forEach(i=>{const o=this.Dr(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Ue(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return Q.forEach(t.mutations,o=>{const l=new Tt(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.br=i})}On(e){}containsKey(e,t){const i=new Tt(t,0),o=this.br.firstAfterOrEqual(i);return Q.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,Q.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e){this.Mr=e,this.docs=function(){return new Ze(_e.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,c=this.Mr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return Q.resolve(i?i.document.mutableCopy():Bt.newInvalidDocument(t))}getEntries(e,t){let i=Ur();return t.forEach(o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Bt.newInvalidDocument(o))}),Q.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Ur();const c=t.path,h=new _e(c.child("")),p=this.docs.getIteratorFrom(h);for(;p.hasNext();){const{key:y,value:{document:_}}=p.getNext();if(!c.isPrefixOf(y.path))break;y.path.length>c.length+1||WR($R(_),i)<=0||(o.has(_.key)||Jc(t,_))&&(l=l.insert(_.key,_.mutableCopy()))}return Q.resolve(l)}getAllFromCollectionGroup(e,t,i,o){Te()}Or(e,t){return Q.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new u1(this)}getSize(e){return Q.resolve(this.size)}}class u1 extends t1{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.cr.addEntry(e,o)):this.cr.removeEntry(i)}),Q.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e){this.persistence=e,this.Nr=new Bo(t=>mp(t),gp),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ep,this.targetCount=0,this.kr=Oo.Bn()}forEachTarget(e,t){return this.Nr.forEach((i,o)=>t(o)),Q.resolve()}getLastRemoteSnapshotVersion(e){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Q.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Lr&&(this.Lr=t),Q.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Oo(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,Q.resolve()}updateTargetData(e,t){return this.Kn(t),Q.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,Q.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.Nr.forEach((c,h)=>{h.sequenceNumber<=t&&i.get(h.targetId)===null&&(this.Nr.delete(c),l.push(this.removeMatchingKeysForTargetId(e,h.targetId)),o++)}),Q.waitFor(l).next(()=>o)}getTargetCount(e){return Q.resolve(this.targetCount)}getTargetData(e,t){const i=this.Nr.get(t)||null;return Q.resolve(i)}addMatchingKeys(e,t,i){return this.Br.Rr(t,i),Q.resolve()}removeMatchingKeys(e,t,i){this.Br.mr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(c=>{l.push(o.markPotentiallyOrphaned(e,c))}),Q.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),Q.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Br.yr(t);return Q.resolve(i)}containsKey(e,t){return Q.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e,t){this.qr={},this.overlays={},this.Qr=new dp(0),this.Kr=!1,this.Kr=!0,this.$r=new o1,this.referenceDelegate=e(this),this.Ur=new c1(this),this.indexManager=new ZC,this.remoteDocumentCache=function(o){return new l1(o)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new XC(t),this.Gr=new i1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new s1,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.qr[e.toKey()];return i||(i=new a1(t,this.referenceDelegate),this.qr[e.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,i){he("MemoryPersistence","Starting transaction:",e);const o=new h1(this.Qr.next());return this.referenceDelegate.zr(),i(o).next(l=>this.referenceDelegate.jr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Hr(e,t){return Q.or(Object.values(this.qr).map(i=>()=>i.containsKey(e,t)))}}class h1 extends HR{constructor(e){super(),this.currentSequenceNumber=e}}class Tp{constructor(e){this.persistence=e,this.Jr=new Ep,this.Yr=null}static Zr(e){return new Tp(e)}get Xr(){if(this.Yr)return this.Yr;throw Te()}addReference(e,t,i){return this.Jr.addReference(i,t),this.Xr.delete(i.toString()),Q.resolve()}removeReference(e,t,i){return this.Jr.removeReference(i,t),this.Xr.add(i.toString()),Q.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),Q.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(o=>this.Xr.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.Xr.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.Xr,i=>{const o=_e.fromPath(i);return this.ei(e,o).next(l=>{l||t.removeEntry(o,Ie.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(i=>{i?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return Q.or([()=>Q.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.$i=i,this.Ui=o}static Wi(e,t){let i=Ce(),o=Ce();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Ip(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return XI()?8:KR(zt())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.Yi(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.Zi(e,t,o,i).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new f1;return this.Xi(e,t,c).next(h=>{if(l.result=h,this.zi)return this.es(e,t,c,h.size)})}).next(()=>l.result)}es(e,t,i,o){return i.documentReadCount<this.ji?(Ba()<=Pe.DEBUG&&he("QueryEngine","SDK will not create cache indexes for query:",wo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),Q.resolve()):(Ba()<=Pe.DEBUG&&he("QueryEngine","Query:",wo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Hi*o?(Ba()<=Pe.DEBUG&&he("QueryEngine","The SDK decides to create cache indexes for query:",wo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ar(t))):Q.resolve())}Yi(e,t){if(uv(t))return Q.resolve(null);let i=ar(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Of(t,null,"F"),i=ar(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const c=Ce(...l);return this.Ji.getDocuments(e,c).next(h=>this.indexManager.getMinOffset(e,i).next(p=>{const y=this.ts(t,h);return this.ns(t,y,c,p.readTime)?this.Yi(e,Of(t,null,"F")):this.rs(e,y,t,p)}))})))}Zi(e,t,i,o){return uv(t)||o.isEqual(Ie.min())?Q.resolve(null):this.Ji.getDocuments(e,i).next(l=>{const c=this.ts(t,l);return this.ns(t,c,i,o)?Q.resolve(null):(Ba()<=Pe.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),wo(t)),this.rs(e,c,t,zR(o,-1)).next(h=>h))})}ts(e,t){let i=new Pt(A0(e));return t.forEach((o,l)=>{Jc(e,l)&&(i=i.add(l))}),i}ns(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}Xi(e,t,i){return Ba()<=Pe.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",wo(t)),this.Ji.getDocumentsMatchingQuery(e,t,Ai.min(),i)}rs(e,t,i,o){return this.Ji.getDocumentsMatchingQuery(e,i,o).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e,t,i,o){this.persistence=e,this.ss=t,this.serializer=o,this.os=new Ze(Ve),this._s=new Bo(l=>mp(l),gp),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(i)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new r1(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function g1(n,e,t,i){return new m1(n,e,t,i)}async function G0(n,e){const t=Se(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(l=>(o=l,t.ls(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const c=[],h=[];let p=Ce();for(const y of o){c.push(y.batchId);for(const _ of y.mutations)p=p.add(_.key)}for(const y of l){h.push(y.batchId);for(const _ of y.mutations)p=p.add(_.key)}return t.localDocuments.getDocuments(i,p).next(y=>({hs:y,removedBatchIds:c,addedBatchIds:h}))})})}function y1(n,e){const t=Se(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),l=t.cs.newChangeBuffer({trackRemovals:!0});return function(h,p,y,_){const I=y.batch,R=I.keys();let L=Q.resolve();return R.forEach(W=>{L=L.next(()=>_.getEntry(p,W)).next(B=>{const b=y.docVersions.get(W);Ue(b!==null),B.version.compareTo(b)<0&&(I.applyToRemoteDocument(B,y),B.isValidDocument()&&(B.setReadTime(y.commitVersion),_.addEntry(B)))})}),L.next(()=>h.mutationQueue.removeMutationBatch(p,I))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(h){let p=Ce();for(let y=0;y<h.mutationResults.length;++y)h.mutationResults[y].transformResults.length>0&&(p=p.add(h.batch.mutations[y].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function Q0(n){const e=Se(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function v1(n,e){const t=Se(n),i=e.snapshotVersion;let o=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.cs.newChangeBuffer({trackRemovals:!0});o=t.os;const h=[];e.targetChanges.forEach((_,I)=>{const R=o.get(I);if(!R)return;h.push(t.Ur.removeMatchingKeys(l,_.removedDocuments,I).next(()=>t.Ur.addMatchingKeys(l,_.addedDocuments,I)));let L=R.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(I)!==null?L=L.withResumeToken(bt.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):_.resumeToken.approximateByteSize()>0&&(L=L.withResumeToken(_.resumeToken,i)),o=o.insert(I,L),function(B,b,Y){return B.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-B.snapshotVersion.toMicroseconds()>=3e8?!0:Y.addedDocuments.size+Y.modifiedDocuments.size+Y.removedDocuments.size>0}(R,L,_)&&h.push(t.Ur.updateTargetData(l,L))});let p=Ur(),y=Ce();if(e.documentUpdates.forEach(_=>{e.resolvedLimboDocuments.has(_)&&h.push(t.persistence.referenceDelegate.updateLimboDocument(l,_))}),h.push(_1(l,c,e.documentUpdates).next(_=>{p=_.Ps,y=_.Is})),!i.isEqual(Ie.min())){const _=t.Ur.getLastRemoteSnapshotVersion(l).next(I=>t.Ur.setTargetsMetadata(l,l.currentSequenceNumber,i));h.push(_)}return Q.waitFor(h).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,y)).next(()=>p)}).then(l=>(t.os=o,l))}function _1(n,e,t){let i=Ce(),o=Ce();return t.forEach(l=>i=i.add(l)),e.getEntries(n,i).next(l=>{let c=Ur();return t.forEach((h,p)=>{const y=l.get(h);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(h)),p.isNoDocument()&&p.version.isEqual(Ie.min())?(e.removeEntry(h,p.readTime),c=c.insert(h,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),c=c.insert(h,p)):he("LocalStore","Ignoring outdated watch update for ",h,". Current version:",y.version," Watch version:",p.version)}),{Ps:c,Is:o}})}function w1(n,e){const t=Se(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function E1(n,e){const t=Se(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Ur.getTargetData(i,e).next(l=>l?(o=l,Q.resolve(o)):t.Ur.allocateTargetId(i).next(c=>(o=new vi(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.Ur.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.os.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.os=t.os.insert(i.targetId,i),t._s.set(e,i.targetId)),i})}async function Ff(n,e,t){const i=Se(n),o=i.os.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,c=>i.persistence.referenceDelegate.removeTarget(c,o))}catch(c){if(!Tl(c))throw c;he("LocalStore",`Failed to update sequence numbers for target ${e}: ${c}`)}i.os=i.os.remove(e),i._s.delete(o.target)}function wv(n,e,t){const i=Se(n);let o=Ie.min(),l=Ce();return i.persistence.runTransaction("Execute query","readwrite",c=>function(p,y,_){const I=Se(p),R=I._s.get(_);return R!==void 0?Q.resolve(I.os.get(R)):I.Ur.getTargetData(y,_)}(i,c,ar(e)).next(h=>{if(h)return o=h.lastLimboFreeSnapshotVersion,i.Ur.getMatchingKeysForTargetId(c,h.targetId).next(p=>{l=p})}).next(()=>i.ss.getDocumentsMatchingQuery(c,e,t?o:Ie.min(),t?l:Ce())).next(h=>(T1(i,hC(e),h),{documents:h,Ts:l})))}function T1(n,e,t){let i=n.us.get(e)||Ie.min();t.forEach((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.us.set(e,i)}class Ev{constructor(){this.activeTargetIds=vC()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class I1{constructor(){this.so=new Ev,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,i){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ev,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){he("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){he("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ju=null;function af(){return Ju===null?Ju=function(){return 268435456+Math.round(2147483648*Math.random())}():Ju++,"0x"+Ju.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="WebChannelConnection";class R1 extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+t.host,this.vo=`projects/${o}/databases/${l}`,this.Co=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}get Fo(){return!1}Mo(t,i,o,l,c){const h=af(),p=this.xo(t,i.toUriEncodedString());he("RestConnection",`Sending RPC '${t}' ${h}:`,p,o);const y={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(y,l,c),this.No(t,p,y,o).then(_=>(he("RestConnection",`Received RPC '${t}' ${h}: `,_),_),_=>{throw Po("RestConnection",`RPC '${t}' ${h} failed with error: `,_,"url: ",p,"request:",o),_})}Lo(t,i,o,l,c,h){return this.Mo(t,i,o,l,c)}Oo(t,i,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((l,c)=>t[c]=l),o&&o.headers.forEach((l,c)=>t[c]=l)}xo(t,i){const o=x1[t];return`${this.Do}/v1/${i}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,i,o){const l=af();return new Promise((c,h)=>{const p=new l0;p.setWithCredentials(!0),p.listenOnce(u0.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case ic.NO_ERROR:const _=p.getResponseJson();he(Ft,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(_)),c(_);break;case ic.TIMEOUT:he(Ft,`RPC '${e}' ${l} timed out`),h(new me(X.DEADLINE_EXCEEDED,"Request time out"));break;case ic.HTTP_ERROR:const I=p.getStatus();if(he(Ft,`RPC '${e}' ${l} failed with status:`,I,"response text:",p.getResponseText()),I>0){let R=p.getResponseJson();Array.isArray(R)&&(R=R[0]);const L=R==null?void 0:R.error;if(L&&L.status&&L.message){const W=function(b){const Y=b.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(Y)>=0?Y:X.UNKNOWN}(L.status);h(new me(W,L.message))}else h(new me(X.UNKNOWN,"Server responded with status "+p.getStatus()))}else h(new me(X.UNAVAILABLE,"Connection failed."));break;default:Te()}}finally{he(Ft,`RPC '${e}' ${l} completed.`)}});const y=JSON.stringify(o);he(Ft,`RPC '${e}' ${l} sending request:`,o),p.send(t,"POST",y,i,15)})}Bo(e,t,i){const o=af(),l=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=h0(),h=d0(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Oo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const _=l.join("");he(Ft,`Creating RPC '${e}' stream ${o}: ${_}`,p);const I=c.createWebChannel(_,p);let R=!1,L=!1;const W=new A1({Io:b=>{L?he(Ft,`Not sending because RPC '${e}' stream ${o} is closed:`,b):(R||(he(Ft,`Opening RPC '${e}' stream ${o} transport.`),I.open(),R=!0),he(Ft,`RPC '${e}' stream ${o} sending:`,b),I.send(b))},To:()=>I.close()}),B=(b,Y,ee)=>{b.listen(Y,te=>{try{ee(te)}catch(re){setTimeout(()=>{throw re},0)}})};return B(I,qa.EventType.OPEN,()=>{L||(he(Ft,`RPC '${e}' stream ${o} transport opened.`),W.yo())}),B(I,qa.EventType.CLOSE,()=>{L||(L=!0,he(Ft,`RPC '${e}' stream ${o} transport closed`),W.So())}),B(I,qa.EventType.ERROR,b=>{L||(L=!0,Po(Ft,`RPC '${e}' stream ${o} transport errored:`,b),W.So(new me(X.UNAVAILABLE,"The operation could not be completed")))}),B(I,qa.EventType.MESSAGE,b=>{var Y;if(!L){const ee=b.data[0];Ue(!!ee);const te=ee,re=te.error||((Y=te[0])===null||Y===void 0?void 0:Y.error);if(re){he(Ft,`RPC '${e}' stream ${o} received error:`,re);const ae=re.status;let ce=function(x){const N=lt[x];if(N!==void 0)return j0(N)}(ae),k=re.message;ce===void 0&&(ce=X.INTERNAL,k="Unknown error status: "+ae+" with message "+re.message),L=!0,W.So(new me(ce,k)),I.close()}else he(Ft,`RPC '${e}' stream ${o} received:`,ee),W.bo(ee)}}),B(h,c0.STAT_EVENT,b=>{b.stat===kf.PROXY?he(Ft,`RPC '${e}' stream ${o} detected buffering proxy`):b.stat===kf.NOPROXY&&he(Ft,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{W.wo()},0),W}}function lf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(n){return new MC(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e,t,i=1e3,o=1.5,l=6e4){this.ui=e,this.timerId=t,this.ko=i,this.qo=o,this.Qo=l,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),o=Math.max(0,t-i);o>0&&he("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,o,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e,t,i,o,l,c,h,p){this.ui=e,this.Ho=i,this.Jo=o,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=h,this.listener=p,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Y0(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===X.RESOURCE_EXHAUSTED?(Fr(t.toString()),Fr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.Yo===t&&this.P_(i,o)},i=>{e(()=>{const o=new me(X.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(o)})})}P_(e,t){const i=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(o=>{i(()=>this.I_(o))}),this.stream.onMessage(o=>{i(()=>++this.e_==1?this.E_(o):this.onNext(o))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return he("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(he("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class C1 extends X0{constructor(e,t,i,o,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=UC(this.serializer,e),i=function(l){if(!("targetChange"in l))return Ie.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Ie.min():c.readTime?lr(c.readTime):Ie.min()}(e);return this.listener.d_(t,i)}A_(e){const t={};t.database=jf(this.serializer),t.addTarget=function(l,c){let h;const p=c.target;if(h=Df(p)?{documents:$C(l,p)}:{query:WC(l,p)._t},h.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){h.resumeToken=B0(l,c.resumeToken);const y=Lf(l,c.expectedCount);y!==null&&(h.expectedCount=y)}else if(c.snapshotVersion.compareTo(Ie.min())>0){h.readTime=kc(l,c.snapshotVersion.toTimestamp());const y=Lf(l,c.expectedCount);y!==null&&(h.expectedCount=y)}return h}(this.serializer,e);const i=HC(this.serializer,e);i&&(t.labels=i),this.a_(t)}R_(e){const t={};t.database=jf(this.serializer),t.removeTarget=e,this.a_(t)}}class k1 extends X0{constructor(e,t,i,o,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=zC(e.writeResults,e.commitTime),i=lr(e.commitTime);return this.listener.g_(i,t)}p_(){const e={};e.database=jf(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>BC(this.serializer,i))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1 extends class{}{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.y_=!1}w_(){if(this.y_)throw new me(X.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Mo(e,Vf(t,i),o,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new me(X.UNKNOWN,l.toString())})}Lo(e,t,i,o,l){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,h])=>this.connection.Lo(e,Vf(t,i),o,c,h,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new me(X.UNKNOWN,c.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class N1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Fr(t),this.D_=!1):he("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=l,this.k_._o(c=>{i.enqueueAndForget(async()=>{As(this)&&(he("RemoteStore","Restarting streams for network reachability change."),await async function(p){const y=Se(p);y.L_.add(4),await xl(y),y.q_.set("Unknown"),y.L_.delete(4),await rd(y)}(this))})}),this.q_=new N1(i,o)}}async function rd(n){if(As(n))for(const e of n.B_)await e(!0)}async function xl(n){for(const e of n.B_)await e(!1)}function J0(n,e){const t=Se(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Rp(t)?Ap(t):zo(t).r_()&&xp(t,e))}function Sp(n,e){const t=Se(n),i=zo(t);t.N_.delete(e),i.r_()&&Z0(t,e),t.N_.size===0&&(i.r_()?i.o_():As(t)&&t.q_.set("Unknown"))}function xp(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}zo(n).A_(e)}function Z0(n,e){n.Q_.xe(e),zo(n).R_(e)}function Ap(n){n.Q_=new DC({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),zo(n).start(),n.q_.v_()}function Rp(n){return As(n)&&!zo(n).n_()&&n.N_.size>0}function As(n){return Se(n).L_.size===0}function ew(n){n.Q_=void 0}async function D1(n){n.q_.set("Online")}async function O1(n){n.N_.forEach((e,t)=>{xp(n,e)})}async function L1(n,e){ew(n),Rp(n)?(n.q_.M_(e),Ap(n)):n.q_.set("Unknown")}async function V1(n,e,t){if(n.q_.set("Online"),e instanceof U0&&e.state===2&&e.cause)try{await async function(o,l){const c=l.cause;for(const h of l.targetIds)o.N_.has(h)&&(await o.remoteSyncer.rejectListen(h,c),o.N_.delete(h),o.Q_.removeTarget(h))}(n,e)}catch(i){he("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Pc(n,i)}else if(e instanceof ac?n.Q_.Ke(e):e instanceof F0?n.Q_.He(e):n.Q_.We(e),!t.isEqual(Ie.min()))try{const i=await Q0(n.localStore);t.compareTo(i)>=0&&await function(l,c){const h=l.Q_.rt(c);return h.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const _=l.N_.get(y);_&&l.N_.set(y,_.withResumeToken(p.resumeToken,c))}}),h.targetMismatches.forEach((p,y)=>{const _=l.N_.get(p);if(!_)return;l.N_.set(p,_.withResumeToken(bt.EMPTY_BYTE_STRING,_.snapshotVersion)),Z0(l,p);const I=new vi(_.target,p,y,_.sequenceNumber);xp(l,I)}),l.remoteSyncer.applyRemoteEvent(h)}(n,t)}catch(i){he("RemoteStore","Failed to raise snapshot:",i),await Pc(n,i)}}async function Pc(n,e,t){if(!Tl(e))throw e;n.L_.add(1),await xl(n),n.q_.set("Offline"),t||(t=()=>Q0(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{he("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await rd(n)})}function tw(n,e){return e().catch(t=>Pc(n,t,e))}async function id(n){const e=Se(n),t=Ci(e);let i=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;M1(e);)try{const o=await w1(e.localStore,i);if(o===null){e.O_.length===0&&t.o_();break}i=o.batchId,j1(e,o)}catch(o){await Pc(e,o)}nw(e)&&rw(e)}function M1(n){return As(n)&&n.O_.length<10}function j1(n,e){n.O_.push(e);const t=Ci(n);t.r_()&&t.V_&&t.m_(e.mutations)}function nw(n){return As(n)&&!Ci(n).n_()&&n.O_.length>0}function rw(n){Ci(n).start()}async function F1(n){Ci(n).p_()}async function U1(n){const e=Ci(n);for(const t of n.O_)e.m_(t.mutations)}async function B1(n,e,t){const i=n.O_.shift(),o=vp.from(i,e,t);await tw(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await id(n)}async function z1(n,e){e&&Ci(n).V_&&await async function(i,o){if(function(c){return PC(c)&&c!==X.ABORTED}(o.code)){const l=i.O_.shift();Ci(i).s_(),await tw(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o)),await id(i)}}(n,e),nw(n)&&rw(n)}async function Iv(n,e){const t=Se(n);t.asyncQueue.verifyOperationInProgress(),he("RemoteStore","RemoteStore received new credentials");const i=As(t);t.L_.add(3),await xl(t),i&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await rd(t)}async function $1(n,e){const t=Se(n);e?(t.L_.delete(2),await rd(t)):e||(t.L_.add(2),await xl(t),t.q_.set("Unknown"))}function zo(n){return n.K_||(n.K_=function(t,i,o){const l=Se(t);return l.w_(),new C1(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Eo:D1.bind(null,n),Ro:O1.bind(null,n),mo:L1.bind(null,n),d_:V1.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Rp(n)?Ap(n):n.q_.set("Unknown")):(await n.K_.stop(),ew(n))})),n.K_}function Ci(n){return n.U_||(n.U_=function(t,i,o){const l=Se(t);return l.w_(),new k1(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:F1.bind(null,n),mo:z1.bind(null,n),f_:U1.bind(null,n),g_:B1.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await id(n)):(await n.U_.stop(),n.O_.length>0&&(he("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Ti,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const c=Date.now()+i,h=new Cp(e,t,c,o,l);return h.start(i),h}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new me(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kp(n,e){if(Fr("AsyncQueue",`${e}: ${n}`),Tl(n))return new me(X.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e){this.comparator=e?(t,i)=>e(t,i)||_e.comparator(t.key,i.key):(t,i)=>_e.comparator(t.key,i.key),this.keyedMap=Ha(),this.sortedSet=new Ze(this.comparator)}static emptySet(e){return new Ro(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ro)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Ro;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(){this.W_=new Ze(_e.comparator)}track(e){const t=e.doc.key,i=this.W_.get(t);i?e.type!==0&&i.type===3?this.W_=this.W_.insert(t,e):e.type===3&&i.type!==1?this.W_=this.W_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.W_=this.W_.remove(t):e.type===1&&i.type===2?this.W_=this.W_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):Te():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,i)=>{e.push(i)}),e}}class Lo{constructor(e,t,i,o,l,c,h,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=h,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const c=[];return t.forEach(h=>{c.push({type:0,doc:h})}),new Lo(e,t,Ro.emptySet(t),c,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class q1{constructor(){this.queries=xv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,i){const o=Se(t),l=o.queries;o.queries=xv(),l.forEach((c,h)=>{for(const p of h.j_)p.onError(i)})})(this,new me(X.ABORTED,"Firestore shutting down"))}}function xv(){return new Bo(n=>x0(n),Xc)}async function H1(n,e){const t=Se(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.H_()&&e.J_()&&(i=2):(l=new W1,i=e.J_()?0:1);try{switch(i){case 0:l.z_=await t.onListen(o,!0);break;case 1:l.z_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const h=kp(c,`Initialization of query '${wo(e.query)}' failed`);return void e.onError(h)}t.queries.set(o,l),l.j_.push(e),e.Z_(t.onlineState),l.z_&&e.X_(l.z_)&&Pp(t)}async function K1(n,e){const t=Se(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const c=l.j_.indexOf(e);c>=0&&(l.j_.splice(c,1),l.j_.length===0?o=e.J_()?0:1:!l.H_()&&e.J_()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function G1(n,e){const t=Se(n);let i=!1;for(const o of e){const l=o.query,c=t.queries.get(l);if(c){for(const h of c.j_)h.X_(o)&&(i=!0);c.z_=o}}i&&Pp(t)}function Q1(n,e,t){const i=Se(n),o=i.queries.get(e);if(o)for(const l of o.j_)l.onError(t);i.queries.delete(e)}function Pp(n){n.Y_.forEach(e=>{e.next()})}var Uf,Av;(Av=Uf||(Uf={})).ea="default",Av.Cache="cache";class Y1{constructor(e,t,i){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=i||{}}X_(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Lo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const i=t!=="Offline";return(!this.options._a||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Uf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e){this.key=e}}class sw{constructor(e){this.key=e}}class X1{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Ce(),this.mutatedKeys=Ce(),this.Aa=A0(e),this.Ra=new Ro(this.Aa)}get Va(){return this.Ta}ma(e,t){const i=t?t.fa:new Sv,o=t?t.Ra:this.Ra;let l=t?t.mutatedKeys:this.mutatedKeys,c=o,h=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((_,I)=>{const R=o.get(_),L=Jc(this.query,I)?I:null,W=!!R&&this.mutatedKeys.has(R.key),B=!!L&&(L.hasLocalMutations||this.mutatedKeys.has(L.key)&&L.hasCommittedMutations);let b=!1;R&&L?R.data.isEqual(L.data)?W!==B&&(i.track({type:3,doc:L}),b=!0):this.ga(R,L)||(i.track({type:2,doc:L}),b=!0,(p&&this.Aa(L,p)>0||y&&this.Aa(L,y)<0)&&(h=!0)):!R&&L?(i.track({type:0,doc:L}),b=!0):R&&!L&&(i.track({type:1,doc:R}),b=!0,(p||y)&&(h=!0)),b&&(L?(c=c.add(L),l=B?l.add(_):l.delete(_)):(c=c.delete(_),l=l.delete(_)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const _=this.query.limitType==="F"?c.last():c.first();c=c.delete(_.key),l=l.delete(_.key),i.track({type:1,doc:_})}return{Ra:c,fa:i,ns:h,mutatedKeys:l}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const c=e.fa.G_();c.sort((_,I)=>function(L,W){const B=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te()}};return B(L)-B(W)}(_.type,I.type)||this.Aa(_.doc,I.doc)),this.pa(i),o=o!=null&&o;const h=t&&!o?this.ya():[],p=this.da.size===0&&this.current&&!o?1:0,y=p!==this.Ea;return this.Ea=p,c.length!==0||y?{snapshot:new Lo(this.query,e.Ra,l,c,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),wa:h}:{wa:h}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Sv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Ce(),this.Ra.forEach(i=>{this.Sa(i.key)&&(this.da=this.da.add(i.key))});const t=[];return e.forEach(i=>{this.da.has(i)||t.push(new sw(i))}),this.da.forEach(i=>{e.has(i)||t.push(new iw(i))}),t}ba(e){this.Ta=e.Ts,this.da=Ce();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Lo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class J1{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class Z1{constructor(e){this.key=e,this.va=!1}}class ek{constructor(e,t,i,o,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Ca={},this.Fa=new Bo(h=>x0(h),Xc),this.Ma=new Map,this.xa=new Set,this.Oa=new Ze(_e.comparator),this.Na=new Map,this.La=new Ep,this.Ba={},this.ka=new Map,this.qa=Oo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function tk(n,e,t=!0){const i=dw(n);let o;const l=i.Fa.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Da()):o=await ow(i,e,t,!0),o}async function nk(n,e){const t=dw(n);await ow(t,e,!0,!1)}async function ow(n,e,t,i){const o=await E1(n.localStore,ar(e)),l=o.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let h;return i&&(h=await rk(n,e,l,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&J0(n.remoteStore,o),h}async function rk(n,e,t,i,o){n.Ka=(I,R,L)=>async function(B,b,Y,ee){let te=b.view.ma(Y);te.ns&&(te=await wv(B.localStore,b.query,!1).then(({documents:k})=>b.view.ma(k,te)));const re=ee&&ee.targetChanges.get(b.targetId),ae=ee&&ee.targetMismatches.get(b.targetId)!=null,ce=b.view.applyChanges(te,B.isPrimaryClient,re,ae);return Cv(B,b.targetId,ce.wa),ce.snapshot}(n,I,R,L);const l=await wv(n.localStore,e,!0),c=new X1(e,l.Ts),h=c.ma(l.documents),p=Sl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=c.applyChanges(h,n.isPrimaryClient,p);Cv(n,t,y.wa);const _=new J1(e,t,c);return n.Fa.set(e,_),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),y.snapshot}async function ik(n,e,t){const i=Se(n),o=i.Fa.get(e),l=i.Ma.get(o.targetId);if(l.length>1)return i.Ma.set(o.targetId,l.filter(c=>!Xc(c,e))),void i.Fa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Ff(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Sp(i.remoteStore,o.targetId),Bf(i,o.targetId)}).catch(El)):(Bf(i,o.targetId),await Ff(i.localStore,o.targetId,!0))}async function sk(n,e){const t=Se(n),i=t.Fa.get(e),o=t.Ma.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Sp(t.remoteStore,i.targetId))}async function ok(n,e,t){const i=fk(n);try{const o=await function(c,h){const p=Se(c),y=gt.now(),_=h.reduce((L,W)=>L.add(W.key),Ce());let I,R;return p.persistence.runTransaction("Locally write mutations","readwrite",L=>{let W=Ur(),B=Ce();return p.cs.getEntries(L,_).next(b=>{W=b,W.forEach((Y,ee)=>{ee.isValidDocument()||(B=B.add(Y))})}).next(()=>p.localDocuments.getOverlayedDocuments(L,W)).next(b=>{I=b;const Y=[];for(const ee of h){const te=xC(ee,I.get(ee.key).overlayedDocument);te!=null&&Y.push(new xs(ee.key,te,y0(te.value.mapValue),Lr.exists(!0)))}return p.mutationQueue.addMutationBatch(L,y,Y,h)}).next(b=>{R=b;const Y=b.applyToLocalDocumentSet(I,B);return p.documentOverlayCache.saveOverlays(L,b.batchId,Y)})}).then(()=>({batchId:R.batchId,changes:C0(I)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(c,h,p){let y=c.Ba[c.currentUser.toKey()];y||(y=new Ze(Ve)),y=y.insert(h,p),c.Ba[c.currentUser.toKey()]=y}(i,o.batchId,t),await Al(i,o.changes),await id(i.remoteStore)}catch(o){const l=kp(o,"Failed to persist write");t.reject(l)}}async function aw(n,e){const t=Se(n);try{const i=await v1(t.localStore,e);e.targetChanges.forEach((o,l)=>{const c=t.Na.get(l);c&&(Ue(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?c.va=!0:o.modifiedDocuments.size>0?Ue(c.va):o.removedDocuments.size>0&&(Ue(c.va),c.va=!1))}),await Al(t,i,e)}catch(i){await El(i)}}function Rv(n,e,t){const i=Se(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Fa.forEach((l,c)=>{const h=c.view.Z_(e);h.snapshot&&o.push(h.snapshot)}),function(c,h){const p=Se(c);p.onlineState=h;let y=!1;p.queries.forEach((_,I)=>{for(const R of I.j_)R.Z_(h)&&(y=!0)}),y&&Pp(p)}(i.eventManager,e),o.length&&i.Ca.d_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function ak(n,e,t){const i=Se(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Na.get(e),l=o&&o.key;if(l){let c=new Ze(_e.comparator);c=c.insert(l,Bt.newNoDocument(l,Ie.min()));const h=Ce().add(l),p=new td(Ie.min(),new Map,new Ze(Ve),c,h);await aw(i,p),i.Oa=i.Oa.remove(l),i.Na.delete(e),Np(i)}else await Ff(i.localStore,e,!1).then(()=>Bf(i,e,t)).catch(El)}async function lk(n,e){const t=Se(n),i=e.batch.batchId;try{const o=await y1(t.localStore,e);uw(t,i,null),lw(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Al(t,o)}catch(o){await El(o)}}async function uk(n,e,t){const i=Se(n);try{const o=await function(c,h){const p=Se(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let _;return p.mutationQueue.lookupMutationBatch(y,h).next(I=>(Ue(I!==null),_=I.keys(),p.mutationQueue.removeMutationBatch(y,I))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,_,h)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,_)).next(()=>p.localDocuments.getDocuments(y,_))})}(i.localStore,e);uw(i,e,t),lw(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Al(i,o)}catch(o){await El(o)}}function lw(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function uw(n,e,t){const i=Se(n);let o=i.Ba[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Ba[i.currentUser.toKey()]=o}}function Bf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Ma.get(e))n.Fa.delete(i),t&&n.Ca.$a(i,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(i=>{n.La.containsKey(i)||cw(n,i)})}function cw(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Sp(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Np(n))}function Cv(n,e,t){for(const i of t)i instanceof iw?(n.La.addReference(i.key,e),ck(n,i)):i instanceof sw?(he("SyncEngine","Document no longer in limbo: "+i.key),n.La.removeReference(i.key,e),n.La.containsKey(i.key)||cw(n,i.key)):Te()}function ck(n,e){const t=e.key,i=t.path.canonicalString();n.Oa.get(t)||n.xa.has(i)||(he("SyncEngine","New document in limbo: "+t),n.xa.add(i),Np(n))}function Np(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new _e(Ye.fromString(e)),i=n.qa.next();n.Na.set(i,new Z1(t)),n.Oa=n.Oa.insert(t,i),J0(n.remoteStore,new vi(ar(S0(t.path)),i,"TargetPurposeLimboResolution",dp.oe))}}async function Al(n,e,t){const i=Se(n),o=[],l=[],c=[];i.Fa.isEmpty()||(i.Fa.forEach((h,p)=>{c.push(i.Ka(p,e,t).then(y=>{var _;if((y||t)&&i.isPrimaryClient){const I=y?!y.fromCache:(_=t==null?void 0:t.targetChanges.get(p.targetId))===null||_===void 0?void 0:_.current;i.sharedClientState.updateQueryState(p.targetId,I?"current":"not-current")}if(y){o.push(y);const I=Ip.Wi(p.targetId,y);l.push(I)}}))}),await Promise.all(c),i.Ca.d_(o),await async function(p,y){const _=Se(p);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>Q.forEach(y,R=>Q.forEach(R.$i,L=>_.persistence.referenceDelegate.addReference(I,R.targetId,L)).next(()=>Q.forEach(R.Ui,L=>_.persistence.referenceDelegate.removeReference(I,R.targetId,L)))))}catch(I){if(!Tl(I))throw I;he("LocalStore","Failed to update sequence numbers: "+I)}for(const I of y){const R=I.targetId;if(!I.fromCache){const L=_.os.get(R),W=L.snapshotVersion,B=L.withLastLimboFreeSnapshotVersion(W);_.os=_.os.insert(R,B)}}}(i.localStore,l))}async function dk(n,e){const t=Se(n);if(!t.currentUser.isEqual(e)){he("SyncEngine","User change. New user:",e.toKey());const i=await G0(t.localStore,e);t.currentUser=e,function(l,c){l.ka.forEach(h=>{h.forEach(p=>{p.reject(new me(X.CANCELLED,c))})}),l.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Al(t,i.hs)}}function hk(n,e){const t=Se(n),i=t.Na.get(e);if(i&&i.va)return Ce().add(i.key);{let o=Ce();const l=t.Ma.get(e);if(!l)return o;for(const c of l){const h=t.Fa.get(c);o=o.unionWith(h.view.Va)}return o}}function dw(n){const e=Se(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=aw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ak.bind(null,e),e.Ca.d_=G1.bind(null,e.eventManager),e.Ca.$a=Q1.bind(null,e.eventManager),e}function fk(n){const e=Se(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=uk.bind(null,e),e}class Nc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=nd(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return g1(this.persistence,new p1,e.initialUser,this.serializer)}Ga(e){return new d1(Tp.Zr,this.serializer)}Wa(e){return new I1}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Nc.provider={build:()=>new Nc};class zf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Rv(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=dk.bind(null,this.syncEngine),await $1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new q1}()}createDatastore(e){const t=nd(e.databaseInfo.databaseId),i=function(l){return new R1(l)}(e.databaseInfo);return function(l,c,h,p){return new P1(l,c,h,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,l,c,h){return new b1(i,o,l,c,h)}(this.localStore,this.datastore,e.asyncQueue,t=>Rv(this.syncEngine,t,0),function(){return Tv.D()?new Tv:new S1}())}createSyncEngine(e,t){return function(o,l,c,h,p,y,_){const I=new ek(o,l,c,h,p,y);return _&&(I.Qa=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=Se(o);he("RemoteStore","RemoteStore shutting down."),l.L_.add(5),await xl(l),l.k_.shutdown(),l.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}zf.provider={build:()=>new zf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Fr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Ut.UNAUTHENTICATED,this.clientId=p0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async c=>{he("FirestoreClient","Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(i,c=>(he("FirestoreClient","Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ti;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=kp(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function uf(n,e){n.asyncQueue.verifyOperationInProgress(),he("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await G0(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function kv(n,e){n.asyncQueue.verifyOperationInProgress();const t=await gk(n);he("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>Iv(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>Iv(e.remoteStore,o)),n._onlineComponents=e}async function gk(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){he("FirestoreClient","Using user provided OfflineComponentProvider");try{await uf(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===X.FAILED_PRECONDITION||o.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Po("Error using user provided cache. Falling back to memory cache: "+t),await uf(n,new Nc)}}else he("FirestoreClient","Using default OfflineComponentProvider"),await uf(n,new Nc);return n._offlineComponents}async function hw(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(he("FirestoreClient","Using user provided OnlineComponentProvider"),await kv(n,n._uninitializedComponentsProvider._online)):(he("FirestoreClient","Using default OnlineComponentProvider"),await kv(n,new zf))),n._onlineComponents}function yk(n){return hw(n).then(e=>e.syncEngine)}async function vk(n){const e=await hw(n),t=e.eventManager;return t.onListen=tk.bind(null,e.syncEngine),t.onUnlisten=ik.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=nk.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=sk.bind(null,e.syncEngine),t}function _k(n,e,t={}){const i=new Ti;return n.asyncQueue.enqueueAndForget(async()=>function(l,c,h,p,y){const _=new pk({next:R=>{_.Za(),c.enqueueAndForget(()=>K1(l,I)),R.fromCache&&p.source==="server"?y.reject(new me(X.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(R)},error:R=>y.reject(R)}),I=new Y1(h,_,{includeMetadataChanges:!0,_a:!0});return H1(l,I)}(await vk(n),n.asyncQueue,e,t,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(n,e,t){if(!t)throw new me(X.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function wk(n,e,t,i){if(e===!0&&i===!0)throw new me(X.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Nv(n){if(!_e.isDocumentKey(n))throw new me(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function bv(n){if(_e.isDocumentKey(n))throw new me(X.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function bp(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Te()}function bc(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new me(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=bp(n);throw new me(X.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new me(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new me(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fw((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new me(X.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new me(X.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new me(X.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class sd{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new me(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new me(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dv(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new DR;switch(i.type){case"firstParty":return new MR(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new me(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=Pv.get(t);i&&(he("ComponentProvider","Removing Datastore"),Pv.delete(t),i.terminate())}(this),Promise.resolve()}}function Ek(n,e,t,i={}){var o;const l=(n=bc(n,sd))._getSettings(),c=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==c&&Po("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},l),{host:c,ssl:!1})),i.mockUserToken){let h,p;if(typeof i.mockUserToken=="string")h=i.mockUserToken,p=Ut.MOCK_USER;else{h=qI(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const y=i.mockUserToken.sub||i.mockUserToken.user_id;if(!y)throw new me(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ut(y)}n._authCredentials=new OR(new f0(h,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new od(this.firestore,e,this._query)}}class $n{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ii(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $n(this.firestore,e,this._key)}}class Ii extends od{constructor(e,t,i){super(e,t,S0(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $n(this.firestore,null,new _e(e))}withConverter(e){return new Ii(this.firestore,e,this._path)}}function mw(n,e,...t){if(n=Nt(n),pw("collection","path",e),n instanceof sd){const i=Ye.fromString(e,...t);return bv(i),new Ii(n,null,i)}{if(!(n instanceof $n||n instanceof Ii))throw new me(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ye.fromString(e,...t));return bv(i),new Ii(n.firestore,null,i)}}function Tk(n,e,...t){if(n=Nt(n),arguments.length===1&&(e=p0.newId()),pw("doc","path",e),n instanceof sd){const i=Ye.fromString(e,...t);return Nv(i),new $n(n,null,new _e(i))}{if(!(n instanceof $n||n instanceof Ii))throw new me(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ye.fromString(e,...t));return Nv(i),new $n(n.firestore,n instanceof Ii?n.converter:null,new _e(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Y0(this,"async_queue_retry"),this.Vu=()=>{const i=lf();i&&he("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=e;const t=lf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=lf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Ti;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Tl(e))throw e;he("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(i=>{this.Eu=i,this.du=!1;const o=function(c){let h=c.message||"";return c.stack&&(h=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),h}(i);throw Fr("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.du=!1,i))));return this.mu=t,t}enqueueAfterDelay(e,t,i){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const o=Cp.createAndSchedule(this,e,t,i,l=>this.yu(l));return this.Tu.push(o),o}fu(){this.Eu&&Te()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class Dp extends sd{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new Ov,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ov(e),this._firestoreClient=void 0,await e}}}function Ik(n,e){const t=typeof n=="object"?n:ep(),i=typeof n=="string"?n:"(default)",o=Is(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=$I("firestore");l&&Ek(o,...l)}return o}function gw(n){if(n._terminated)throw new me(X.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Sk(n),n._firestoreClient}function Sk(n){var e,t,i;const o=n._freezeSettings(),l=function(h,p,y,_){return new YR(h,p,y,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,fw(_.experimentalLongPollingOptions),_.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new mk(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(h){const p=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(p),_online:p}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vo(bt.fromBase64String(e))}catch(t){throw new me(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Vo(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new me(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new me(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new me(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ve(this._lat,e._lat)||Ve(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk=/^__.*__$/;class Ak{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new xs(e,this.data,this.fieldMask,t,this.fieldTransforms):new Il(e,this.data,t,this.fieldTransforms)}}function vw(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te()}}class Mp{constructor(e,t,i,o,l,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.vu(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Mp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:i,xu:!1});return o.Ou(e),o}Nu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:i,xu:!1});return o.vu(),o}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Dc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(vw(this.Cu)&&xk.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Rk{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||nd(e)}Qu(e,t,i,o=!1){return new Mp({Cu:e,methodName:t,qu:i,path:kt.emptyPath(),xu:!1,ku:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ck(n){const e=n._freezeSettings(),t=nd(n._databaseId);return new Rk(n._databaseId,!!e.ignoreUndefinedProperties,t)}function kk(n,e,t,i,o,l={}){const c=n.Qu(l.merge||l.mergeFields?2:0,e,t,o);Tw("Data must be an object, but it was:",c,i);const h=ww(i,c);let p,y;if(l.merge)p=new zn(c.fieldMask),y=c.fieldTransforms;else if(l.mergeFields){const _=[];for(const I of l.mergeFields){const R=Pk(e,I,t);if(!c.contains(R))throw new me(X.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);bk(_,R)||_.push(R)}p=new zn(_),y=c.fieldTransforms.filter(I=>p.covers(I.field))}else p=null,y=c.fieldTransforms;return new Ak(new Sn(h),p,y)}function _w(n,e){if(Ew(n=Nt(n)))return Tw("Unsupported field value:",e,n),ww(n,e);if(n instanceof yw)return function(i,o){if(!vw(o.Cu))throw o.Bu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Bu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(i,o){const l=[];let c=0;for(const h of i){let p=_w(h,o.Lu(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(n,e)}return function(i,o){if((i=Nt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return _C(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=gt.fromDate(i);return{timestampValue:kc(o.serializer,l)}}if(i instanceof gt){const l=new gt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:kc(o.serializer,l)}}if(i instanceof Lp)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Vo)return{bytesValue:B0(o.serializer,i._byteString)};if(i instanceof $n){const l=o.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw o.Bu(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:wp(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Vp)return function(c,h){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:c.toArray().map(p=>{if(typeof p!="number")throw h.Bu("VectorValues must only contain numeric values.");return yp(h.serializer,p)})}}}}}}(i,o);throw o.Bu(`Unsupported field value: ${bp(i)}`)}(n,e)}function ww(n,e){const t={};return m0(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Uo(n,(i,o)=>{const l=_w(o,e.Mu(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function Ew(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof gt||n instanceof Lp||n instanceof Vo||n instanceof $n||n instanceof yw||n instanceof Vp)}function Tw(n,e,t){if(!Ew(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const i=bp(t);throw i==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+i)}}function Pk(n,e,t){if((e=Nt(e))instanceof Op)return e._internalPath;if(typeof e=="string")return Iw(n,e);throw Dc("Field path arguments must be of type string or ",n,!1,void 0,t)}const Nk=new RegExp("[~\\*/\\[\\]]");function Iw(n,e,t){if(e.search(Nk)>=0)throw Dc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Op(...e.split("."))._internalPath}catch{throw Dc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Dc(n,e,t,i,o){const l=i&&!i.isEmpty(),c=o!==void 0;let h=`Function ${e}() called with invalid data`;t&&(h+=" (via `toFirestore()`)"),h+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${o}`),p+=")"),new me(X.INVALID_ARGUMENT,h+n+p)}function bk(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new $n(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Dk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(xw("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Dk extends Sw{data(){return super.data()}}function xw(n,e){return typeof e=="string"?Iw(n,e):e instanceof Op?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ok(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new me(X.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Lk{convertValue(e,t="none"){switch(_s(e)){case 0:return null;case 1:return e.booleanValue;case 2:return it(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(vs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Uo(e,(o,l)=>{i[o]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(c=>it(c.doubleValue));return new Vp(l)}convertGeoPoint(e){return new Lp(it(e.latitude),it(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=fp(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(al(e));default:return null}}convertTimestamp(e){const t=Ri(e);return new gt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Ye.fromString(e);Ue(K0(i));const o=new ll(i.get(1),i.get(3)),l=new _e(i.popFirst(5));return o.isEqual(t)||Fr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vk(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Mk extends Sw{constructor(e,t,i,o,l,c){super(e,t,i,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new lc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(xw("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class lc extends Mk{data(e={}){return super.data(e)}}class jk{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Zu(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new lc(this._firestore,this._userDataWriter,i.key,i,new Zu(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new me(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map(h=>{const p=new lc(o._firestore,o._userDataWriter,h.doc.key,h.doc,new Zu(o._snapshot.mutatedKeys.has(h.doc.key),o._snapshot.fromCache),o.query.converter);return h.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(h=>l||h.type!==3).map(h=>{const p=new lc(o._firestore,o._userDataWriter,h.doc.key,h.doc,new Zu(o._snapshot.mutatedKeys.has(h.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,_=-1;return h.type!==0&&(y=c.indexOf(h.doc.key),c=c.delete(h.doc.key)),h.type!==1&&(c=c.add(h.doc),_=c.indexOf(h.doc.key)),{type:Fk(h.type),doc:p,oldIndex:y,newIndex:_}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Fk(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te()}}class Uk extends Lk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new $n(this.firestore,null,t)}}function Bk(n){n=bc(n,od);const e=bc(n.firestore,Dp),t=gw(e),i=new Uk(e);return Ok(n._query),_k(t,n._query).then(o=>new jk(e,i,n,o))}function zk(n,e){const t=bc(n.firestore,Dp),i=Tk(n),o=Vk(n.converter,e);return $k(t,[kk(Ck(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,Lr.exists(!1))]).then(()=>i)}function $k(n,e){return function(i,o){const l=new Ti;return i.asyncQueue.enqueueAndForget(async()=>ok(await yk(i),o,l)),l.promise}(gw(n),e)}(function(e,t=!0){(function(o){Fo=o})(Mo),ur(new Wn("firestore",(i,{instanceIdentifier:o,options:l})=>{const c=i.getProvider("app").getImmediate(),h=new Dp(new LR(i.getProvider("auth-internal")),new FR(i.getProvider("app-check-internal")),function(y,_){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new me(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ll(y.options.projectId,_)}(c,o),c);return l=Object.assign({useFetchStreams:t},l),h._setSettings(l),h},"PUBLIC").setMultipleInstances(!0)),xn(Zy,"4.7.3",e),xn(Zy,"4.7.3","esm2017")})();const Aw="@firebase/installations",jp="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw=1e4,Cw=`w:${jp}`,kw="FIS_v2",Wk="https://firebaseinstallations.googleapis.com/v1",qk=60*60*1e3,Hk="installations",Kk="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ws=new Ts(Hk,Kk,Gk);function Pw(n){return n instanceof Hn&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw({projectId:n}){return`${Wk}/projects/${n}/installations`}function bw(n){return{token:n.token,requestStatus:2,expiresIn:Yk(n.expiresIn),creationTime:Date.now()}}async function Dw(n,e){const i=(await e.json()).error;return ws.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Ow({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Qk(n,{refreshToken:e}){const t=Ow(n);return t.append("Authorization",Xk(e)),t}async function Lw(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Yk(n){return Number(n.replace("s","000"))}function Xk(n){return`${kw} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jk({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=Nw(n),o=Ow(n),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const c={fid:t,authVersion:kw,appId:n.appId,sdkVersion:Cw},h={method:"POST",headers:o,body:JSON.stringify(c)},p=await Lw(()=>fetch(i,h));if(p.ok){const y=await p.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:bw(y.authToken)}}else throw await Dw("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vw(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zk(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP=/^[cdef][\w-]{21}$/,$f="";function tP(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=nP(n);return eP.test(t)?t:$f}catch{return $f}}function nP(n){return Zk(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw=new Map;function jw(n,e){const t=ad(n);Fw(t,e),rP(t,e)}function Fw(n,e){const t=Mw.get(n);if(t)for(const i of t)i(e)}function rP(n,e){const t=iP();t&&t.postMessage({key:n,fid:e}),sP()}let cs=null;function iP(){return!cs&&"BroadcastChannel"in self&&(cs=new BroadcastChannel("[Firebase] FID Change"),cs.onmessage=n=>{Fw(n.data.key,n.data.fid)}),cs}function sP(){Mw.size===0&&cs&&(cs.close(),cs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP="firebase-installations-database",aP=1,Es="firebase-installations-store";let cf=null;function Fp(){return cf||(cf=I_(oP,aP,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Es)}}})),cf}async function Oc(n,e){const t=ad(n),o=(await Fp()).transaction(Es,"readwrite"),l=o.objectStore(Es),c=await l.get(t);return await l.put(e,t),await o.done,(!c||c.fid!==e.fid)&&jw(n,e.fid),e}async function Uw(n){const e=ad(n),i=(await Fp()).transaction(Es,"readwrite");await i.objectStore(Es).delete(e),await i.done}async function ld(n,e){const t=ad(n),o=(await Fp()).transaction(Es,"readwrite"),l=o.objectStore(Es),c=await l.get(t),h=e(c);return h===void 0?await l.delete(t):await l.put(h,t),await o.done,h&&(!c||c.fid!==h.fid)&&jw(n,h.fid),h}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Up(n){let e;const t=await ld(n.appConfig,i=>{const o=lP(i),l=uP(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===$f?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function lP(n){const e=n||{fid:tP(),registrationStatus:0};return Bw(e)}function uP(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(ws.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=cP(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:dP(n)}:{installationEntry:e}}async function cP(n,e){try{const t=await Jk(n,e);return Oc(n.appConfig,t)}catch(t){throw Pw(t)&&t.customData.serverCode===409?await Uw(n.appConfig):await Oc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function dP(n){let e=await Lv(n.appConfig);for(;e.registrationStatus===1;)await Vw(100),e=await Lv(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await Up(n);return i||t}return e}function Lv(n){return ld(n,e=>{if(!e)throw ws.create("installation-not-found");return Bw(e)})}function Bw(n){return hP(n)?{fid:n.fid,registrationStatus:0}:n}function hP(n){return n.registrationStatus===1&&n.registrationTime+Rw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fP({appConfig:n,heartbeatServiceProvider:e},t){const i=pP(n,t),o=Qk(n,t),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const c={installation:{sdkVersion:Cw,appId:n.appId}},h={method:"POST",headers:o,body:JSON.stringify(c)},p=await Lw(()=>fetch(i,h));if(p.ok){const y=await p.json();return bw(y)}else throw await Dw("Generate Auth Token",p)}function pP(n,{fid:e}){return`${Nw(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bp(n,e=!1){let t;const i=await ld(n.appConfig,l=>{if(!zw(l))throw ws.create("not-registered");const c=l.authToken;if(!e&&yP(c))return l;if(c.requestStatus===1)return t=mP(n,e),l;{if(!navigator.onLine)throw ws.create("app-offline");const h=_P(l);return t=gP(n,h),h}});return t?await t:i.authToken}async function mP(n,e){let t=await Vv(n.appConfig);for(;t.authToken.requestStatus===1;)await Vw(100),t=await Vv(n.appConfig);const i=t.authToken;return i.requestStatus===0?Bp(n,e):i}function Vv(n){return ld(n,e=>{if(!zw(e))throw ws.create("not-registered");const t=e.authToken;return wP(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function gP(n,e){try{const t=await fP(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await Oc(n.appConfig,i),t}catch(t){if(Pw(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Uw(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Oc(n.appConfig,i)}throw t}}function zw(n){return n!==void 0&&n.registrationStatus===2}function yP(n){return n.requestStatus===2&&!vP(n)}function vP(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+qk}function _P(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function wP(n){return n.requestStatus===1&&n.requestTime+Rw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EP(n){const e=n,{installationEntry:t,registrationPromise:i}=await Up(e);return i?i.catch(console.error):Bp(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TP(n,e=!1){const t=n;return await IP(t),(await Bp(t,e)).token}async function IP(n){const{registrationPromise:e}=await Up(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(n){if(!n||!n.options)throw df("App Configuration");if(!n.name)throw df("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw df(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function df(n){return ws.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w="installations",xP="installations-internal",AP=n=>{const e=n.getProvider("app").getImmediate(),t=SP(e),i=Is(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},RP=n=>{const e=n.getProvider("app").getImmediate(),t=Is(e,$w).getImmediate();return{getId:()=>EP(t),getToken:o=>TP(t,o)}};function CP(){ur(new Wn($w,AP,"PUBLIC")),ur(new Wn(xP,RP,"PRIVATE"))}CP();xn(Aw,jp);xn(Aw,jp,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc="analytics",kP="firebase_id",PP="origin",NP=60*1e3,bP="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",zp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=new qc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},dn=new Ts("analytics","Analytics",DP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OP(n){if(!n.startsWith(zp)){const e=dn.create("invalid-gtag-resource",{gtagURL:n});return tn.warn(e.message),""}return n}function Ww(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function LP(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function VP(n,e){const t=LP("firebase-js-sdk-policy",{createScriptURL:OP}),i=document.createElement("script"),o=`${zp}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(o):o,i.async=!0,document.head.appendChild(i)}function MP(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function jP(n,e,t,i,o,l){const c=i[o];try{if(c)await e[c];else{const p=(await Ww(t)).find(y=>y.measurementId===o);p&&await e[p.appId]}}catch(h){tn.error(h)}n("config",o,l)}async function FP(n,e,t,i,o){try{let l=[];if(o&&o.send_to){let c=o.send_to;Array.isArray(c)||(c=[c]);const h=await Ww(t);for(const p of c){const y=h.find(I=>I.measurementId===p),_=y&&e[y.appId];if(_)l.push(_);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",i,o||{})}catch(l){tn.error(l)}}function UP(n,e,t,i){async function o(l,...c){try{if(l==="event"){const[h,p]=c;await FP(n,e,t,h,p)}else if(l==="config"){const[h,p]=c;await jP(n,e,t,i,h,p)}else if(l==="consent"){const[h,p]=c;n("consent",h,p)}else if(l==="get"){const[h,p,y]=c;n("get",h,p,y)}else if(l==="set"){const[h]=c;n("set",h)}else n(l,...c)}catch(h){tn.error(h)}}return o}function BP(n,e,t,i,o){let l=function(...c){window[i].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=UP(l,n,e,t),{gtagCore:l,wrappedGtag:window[o]}}function zP(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(zp)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P=30,WP=1e3;class qP{constructor(e={},t=WP){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const qw=new qP;function HP(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function KP(n){var e;const{appId:t,apiKey:i}=n,o={method:"GET",headers:HP(i)},l=bP.replace("{app-id}",t),c=await fetch(l,o);if(c.status!==200&&c.status!==304){let h="";try{const p=await c.json();!((e=p.error)===null||e===void 0)&&e.message&&(h=p.error.message)}catch{}throw dn.create("config-fetch-failed",{httpStatus:c.status,responseMessage:h})}return c.json()}async function GP(n,e=qw,t){const{appId:i,apiKey:o,measurementId:l}=n.options;if(!i)throw dn.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:i};throw dn.create("no-api-key")}const c=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},h=new XP;return setTimeout(async()=>{h.abort()},NP),Hw({appId:i,apiKey:o,measurementId:l},c,h,e)}async function Hw(n,{throttleEndTimeMillis:e,backoffCount:t},i,o=qw){var l;const{appId:c,measurementId:h}=n;try{await QP(i,e)}catch(p){if(h)return tn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:c,measurementId:h};throw p}try{const p=await KP(n);return o.deleteThrottleMetadata(c),p}catch(p){const y=p;if(!YP(y)){if(o.deleteThrottleMetadata(c),h)return tn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:c,measurementId:h};throw p}const _=Number((l=y==null?void 0:y.customData)===null||l===void 0?void 0:l.httpStatus)===503?Sy(t,o.intervalMillis,$P):Sy(t,o.intervalMillis),I={throttleEndTimeMillis:Date.now()+_,backoffCount:t+1};return o.setThrottleMetadata(c,I),tn.debug(`Calling attemptFetch again in ${_} millis`),Hw(n,I,i,o)}}function QP(n,e){return new Promise((t,i)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);n.addEventListener(()=>{clearTimeout(l),i(dn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function YP(n){if(!(n instanceof Hn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class XP{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function JP(n,e,t,i,o){if(o&&o.global){n("event",t,i);return}else{const l=await e,c=Object.assign(Object.assign({},i),{send_to:l});n("event",t,c)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZP(){if(__())try{await w_()}catch(n){return tn.warn(dn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return tn.warn(dn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function eN(n,e,t,i,o,l,c){var h;const p=GP(n);p.then(L=>{t[L.measurementId]=L.appId,n.options.measurementId&&L.measurementId!==n.options.measurementId&&tn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${L.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(L=>tn.error(L)),e.push(p);const y=ZP().then(L=>{if(L)return i.getId()}),[_,I]=await Promise.all([p,y]);zP(l)||VP(l,_.measurementId),o("js",new Date);const R=(h=c==null?void 0:c.config)!==null&&h!==void 0?h:{};return R[PP]="firebase",R.update=!0,I!=null&&(R[kP]=I),o("config",_.measurementId,R),_.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e){this.app=e}_delete(){return delete el[this.app.options.appId],Promise.resolve()}}let el={},Mv=[];const jv={};let hf="dataLayer",nN="gtag",Fv,Kw,Uv=!1;function rN(){const n=[];if(v_()&&n.push("This is a browser extension environment."),JI()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,o)=>`(${o+1}) ${i}`).join(" "),t=dn.create("invalid-analytics-context",{errorInfo:e});tn.warn(t.message)}}function iN(n,e,t){rN();const i=n.options.appId;if(!i)throw dn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)tn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw dn.create("no-api-key");if(el[i]!=null)throw dn.create("already-exists",{id:i});if(!Uv){MP(hf);const{wrappedGtag:l,gtagCore:c}=BP(el,Mv,jv,hf,nN);Kw=l,Fv=c,Uv=!0}return el[i]=eN(n,Mv,jv,e,Fv,hf,t),new tN(n)}function sN(n=ep()){n=Nt(n);const e=Is(n,Lc);return e.isInitialized()?e.getImmediate():oN(n)}function oN(n,e={}){const t=Is(n,Lc);if(t.isInitialized()){const o=t.getImmediate();if(rl(e,t.getOptions()))return o;throw dn.create("already-initialized")}return t.initialize({options:e})}function aN(n,e,t,i){n=Nt(n),JP(Kw,el[n.app.options.appId],e,t,i).catch(o=>tn.error(o))}const Bv="@firebase/analytics",zv="0.10.8";function lN(){ur(new Wn(Lc,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return iN(i,o,t)},"PUBLIC")),ur(new Wn("analytics-internal",n,"PRIVATE")),xn(Bv,zv),xn(Bv,zv,"esm2017");function n(e){try{const t=e.getProvider(Lc).getImmediate();return{logEvent:(i,o,l)=>aN(t,i,o,l)}}catch(t){throw dn.create("interop-component-reg-failed",{reason:t})}}}lN();const uN={apiKey:"AIzaSyBOefhJXmLQfNprfGs60ipV-sGQoVas3T8",authDomain:"bloodbankapp-81863.firebaseapp.com",projectId:"bloodbankapp-81863",storageBucket:"bloodbankapp-81863.firebasestorage.app",messagingSenderId:"971040097344",appId:"1:971040097344:web:e10c375c7f20bc0d698ba5",measurementId:"G-M9S7Y54W8D"},$p=S_(uN),hl=NR($p),Gw=Ik($p);sN($p);const uc=Jf("user/register",async({email:n,password:e,displayName:t},{rejectWithValue:i})=>{try{const o=await fA(hl,n,e);return await gA(hl.currentUser,{displayName:t}),{uid:o.user.uid,email:o.user.email,displayName:t}}catch(o){return i(o.message)}}),cc=Jf("user/login",async({email:n,password:e},{rejectWithValue:t})=>{try{const i=await pA(hl,n,e);return{uid:i.user.uid,email:i.user.email,displayName:i.user.displayName}}catch(i){return t(i.message)}}),dc=Jf("user/logout",async(n,{rejectWithValue:e})=>{try{return await wA(hl),null}catch(t){return e(t.message)}}),Qw=PI({name:"user",initialState:{currentUser:null,isLoading:!1,error:null},reducers:{setUser:(n,e)=>{n.currentUser=e.payload,n.isLoading=!1,n.error=null},clearUser:n=>{n.currentUser=null}},extraReducers:n=>{n.addCase(uc.pending,e=>{e.isLoading=!0,e.error=null}).addCase(uc.fulfilled,(e,t)=>{e.isLoading=!1,e.currentUser=t.payload}).addCase(uc.rejected,(e,t)=>{e.isLoading=!1,e.error=t.payload}).addCase(cc.pending,e=>{e.isLoading=!0,e.error=null}).addCase(cc.fulfilled,(e,t)=>{e.isLoading=!1,e.currentUser=t.payload}).addCase(cc.rejected,(e,t)=>{e.isLoading=!1,e.error=t.payload}).addCase(dc.pending,e=>{e.isLoading=!0}).addCase(dc.fulfilled,e=>{e.isLoading=!1,e.currentUser=null}).addCase(dc.rejected,(e,t)=>{e.isLoading=!1,e.error=t.payload})}}),{setUser:cN,clearUser:dN}=Qw.actions,hN=Qw.reducer,fN=mI({reducer:{user:hN}});Jv();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fl(){return fl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},fl.apply(this,arguments)}var _i;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(_i||(_i={}));const $v="popstate";function pN(n){n===void 0&&(n={});function e(i,o){let{pathname:l,search:c,hash:h}=i.location;return Wf("",{pathname:l,search:c,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:Vc(o)}return gN(e,t,null,n)}function st(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Yw(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function mN(){return Math.random().toString(36).substr(2,8)}function Wv(n,e){return{usr:n.state,key:n.key,idx:e}}function Wf(n,e,t,i){return t===void 0&&(t=null),fl({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?$o(e):e,{state:t,key:e&&e.key||i||mN()})}function Vc(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function $o(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function gN(n,e,t,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:l=!1}=i,c=o.history,h=_i.Pop,p=null,y=_();y==null&&(y=0,c.replaceState(fl({},c.state,{idx:y}),""));function _(){return(c.state||{idx:null}).idx}function I(){h=_i.Pop;let b=_(),Y=b==null?null:b-y;y=b,p&&p({action:h,location:B.location,delta:Y})}function R(b,Y){h=_i.Push;let ee=Wf(B.location,b,Y);y=_()+1;let te=Wv(ee,y),re=B.createHref(ee);try{c.pushState(te,"",re)}catch(ae){if(ae instanceof DOMException&&ae.name==="DataCloneError")throw ae;o.location.assign(re)}l&&p&&p({action:h,location:B.location,delta:1})}function L(b,Y){h=_i.Replace;let ee=Wf(B.location,b,Y);y=_();let te=Wv(ee,y),re=B.createHref(ee);c.replaceState(te,"",re),l&&p&&p({action:h,location:B.location,delta:0})}function W(b){let Y=o.location.origin!=="null"?o.location.origin:o.location.href,ee=typeof b=="string"?b:Vc(b);return ee=ee.replace(/ $/,"%20"),st(Y,"No window.location.(origin|href) available to create URL for href: "+ee),new URL(ee,Y)}let B={get action(){return h},get location(){return n(o,c)},listen(b){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener($v,I),p=b,()=>{o.removeEventListener($v,I),p=null}},createHref(b){return e(o,b)},createURL:W,encodeLocation(b){let Y=W(b);return{pathname:Y.pathname,search:Y.search,hash:Y.hash}},push:R,replace:L,go(b){return c.go(b)}};return B}var qv;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(qv||(qv={}));function yN(n,e,t){return t===void 0&&(t="/"),vN(n,e,t)}function vN(n,e,t,i){let o=typeof e=="string"?$o(e):e,l=Wp(o.pathname||"/",t);if(l==null)return null;let c=Xw(n);_N(c);let h=null;for(let p=0;h==null&&p<c.length;++p){let y=NN(l);h=CN(c[p],y)}return h}function Xw(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let o=(l,c,h)=>{let p={relativePath:h===void 0?l.path||"":h,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(st(p.relativePath.startsWith(i),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(i.length));let y=Si([i,p.relativePath]),_=t.concat(p);l.children&&l.children.length>0&&(st(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),Xw(l.children,e,_,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:AN(y,l.index),routesMeta:_})};return n.forEach((l,c)=>{var h;if(l.path===""||!((h=l.path)!=null&&h.includes("?")))o(l,c);else for(let p of Jw(l.path))o(l,c,p)}),e}function Jw(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let c=Jw(i.join("/")),h=[];return h.push(...c.map(p=>p===""?l:[l,p].join("/"))),o&&h.push(...c),h.map(p=>n.startsWith("/")&&p===""?"/":p)}function _N(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:RN(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const wN=/^:[\w-]+$/,EN=3,TN=2,IN=1,SN=10,xN=-2,Hv=n=>n==="*";function AN(n,e){let t=n.split("/"),i=t.length;return t.some(Hv)&&(i+=xN),e&&(i+=TN),t.filter(o=>!Hv(o)).reduce((o,l)=>o+(wN.test(l)?EN:l===""?IN:SN),i)}function RN(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function CN(n,e,t){let{routesMeta:i}=n,o={},l="/",c=[];for(let h=0;h<i.length;++h){let p=i[h],y=h===i.length-1,_=l==="/"?e:e.slice(l.length)||"/",I=kN({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},_),R=p.route;if(!I)return null;Object.assign(o,I.params),c.push({params:o,pathname:Si([l,I.pathname]),pathnameBase:LN(Si([l,I.pathnameBase])),route:R}),I.pathnameBase!=="/"&&(l=Si([l,I.pathnameBase]))}return c}function kN(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=PN(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:i.reduce((y,_,I)=>{let{paramName:R,isOptional:L}=_;if(R==="*"){let B=h[I]||"";c=l.slice(0,l.length-B.length).replace(/(.)\/+$/,"$1")}const W=h[I];return L&&!W?y[R]=void 0:y[R]=(W||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:c,pattern:n}}function PN(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Yw(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,h,p)=>(i.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function NN(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Yw(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Wp(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function bN(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?$o(n):n;return{pathname:t?t.startsWith("/")?t:DN(t,e):e,search:VN(i),hash:MN(o)}}function DN(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function ff(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ON(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function qp(n,e){let t=ON(n);return e?t.map((i,o)=>o===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function Hp(n,e,t,i){i===void 0&&(i=!1);let o;typeof n=="string"?o=$o(n):(o=fl({},n),st(!o.pathname||!o.pathname.includes("?"),ff("?","pathname","search",o)),st(!o.pathname||!o.pathname.includes("#"),ff("#","pathname","hash",o)),st(!o.search||!o.search.includes("#"),ff("#","search","hash",o)));let l=n===""||o.pathname==="",c=l?"/":o.pathname,h;if(c==null)h=t;else{let I=e.length-1;if(!i&&c.startsWith("..")){let R=c.split("/");for(;R[0]==="..";)R.shift(),I-=1;o.pathname=R.join("/")}h=I>=0?e[I]:"/"}let p=bN(o,h),y=c&&c!=="/"&&c.endsWith("/"),_=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||_)&&(p.pathname+="/"),p}const Si=n=>n.join("/").replace(/\/\/+/g,"/"),LN=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),VN=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,MN=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function jN(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const Zw=["post","put","patch","delete"];new Set(Zw);const FN=["get",...Zw];new Set(FN);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pl(){return pl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},pl.apply(this,arguments)}const Kp=K.createContext(null),UN=K.createContext(null),Pi=K.createContext(null),ud=K.createContext(null),Ni=K.createContext({outlet:null,matches:[],isDataRoute:!1}),eE=K.createContext(null);function BN(n,e){let{relative:t}=e===void 0?{}:e;Wo()||st(!1);let{basename:i,navigator:o}=K.useContext(Pi),{hash:l,pathname:c,search:h}=nE(n,{relative:t}),p=c;return i!=="/"&&(p=c==="/"?i:Si([i,c])),o.createHref({pathname:p,search:h,hash:l})}function Wo(){return K.useContext(ud)!=null}function Rl(){return Wo()||st(!1),K.useContext(ud).location}function tE(n){K.useContext(Pi).static||K.useLayoutEffect(n)}function qo(){let{isDataRoute:n}=K.useContext(Ni);return n?eb():zN()}function zN(){Wo()||st(!1);let n=K.useContext(Kp),{basename:e,future:t,navigator:i}=K.useContext(Pi),{matches:o}=K.useContext(Ni),{pathname:l}=Rl(),c=JSON.stringify(qp(o,t.v7_relativeSplatPath)),h=K.useRef(!1);return tE(()=>{h.current=!0}),K.useCallback(function(y,_){if(_===void 0&&(_={}),!h.current)return;if(typeof y=="number"){i.go(y);return}let I=Hp(y,JSON.parse(c),l,_.relative==="path");n==null&&e!=="/"&&(I.pathname=I.pathname==="/"?e:Si([e,I.pathname])),(_.replace?i.replace:i.push)(I,_.state,_)},[e,i,c,l,n])}function nE(n,e){let{relative:t}=e===void 0?{}:e,{future:i}=K.useContext(Pi),{matches:o}=K.useContext(Ni),{pathname:l}=Rl(),c=JSON.stringify(qp(o,i.v7_relativeSplatPath));return K.useMemo(()=>Hp(n,JSON.parse(c),l,t==="path"),[n,c,l,t])}function $N(n,e){return WN(n,e)}function WN(n,e,t,i){Wo()||st(!1);let{navigator:o}=K.useContext(Pi),{matches:l}=K.useContext(Ni),c=l[l.length-1],h=c?c.params:{};c&&c.pathname;let p=c?c.pathnameBase:"/";c&&c.route;let y=Rl(),_;if(e){var I;let b=typeof e=="string"?$o(e):e;p==="/"||(I=b.pathname)!=null&&I.startsWith(p)||st(!1),_=b}else _=y;let R=_.pathname||"/",L=R;if(p!=="/"){let b=p.replace(/^\//,"").split("/");L="/"+R.replace(/^\//,"").split("/").slice(b.length).join("/")}let W=yN(n,{pathname:L}),B=QN(W&&W.map(b=>Object.assign({},b,{params:Object.assign({},h,b.params),pathname:Si([p,o.encodeLocation?o.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?p:Si([p,o.encodeLocation?o.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),l,t,i);return e&&B?K.createElement(ud.Provider,{value:{location:pl({pathname:"/",search:"",hash:"",state:null,key:"default"},_),navigationType:_i.Pop}},B):B}function qN(){let n=ZN(),e=jN(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return K.createElement(K.Fragment,null,K.createElement("h2",null,"Unexpected Application Error!"),K.createElement("h3",{style:{fontStyle:"italic"}},e),t?K.createElement("pre",{style:o},t):null,null)}const HN=K.createElement(qN,null);class KN extends K.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?K.createElement(Ni.Provider,{value:this.props.routeContext},K.createElement(eE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function GN(n){let{routeContext:e,match:t,children:i}=n,o=K.useContext(Kp);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),K.createElement(Ni.Provider,{value:e},i)}function QN(n,e,t,i){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var l;if(!t)return null;if(t.errors)n=t.matches;else if((l=i)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let c=n,h=(o=t)==null?void 0:o.errors;if(h!=null){let _=c.findIndex(I=>I.route.id&&(h==null?void 0:h[I.route.id])!==void 0);_>=0||st(!1),c=c.slice(0,Math.min(c.length,_+1))}let p=!1,y=-1;if(t&&i&&i.v7_partialHydration)for(let _=0;_<c.length;_++){let I=c[_];if((I.route.HydrateFallback||I.route.hydrateFallbackElement)&&(y=_),I.route.id){let{loaderData:R,errors:L}=t,W=I.route.loader&&R[I.route.id]===void 0&&(!L||L[I.route.id]===void 0);if(I.route.lazy||W){p=!0,y>=0?c=c.slice(0,y+1):c=[c[0]];break}}}return c.reduceRight((_,I,R)=>{let L,W=!1,B=null,b=null;t&&(L=h&&I.route.id?h[I.route.id]:void 0,B=I.route.errorElement||HN,p&&(y<0&&R===0?(tb("route-fallback"),W=!0,b=null):y===R&&(W=!0,b=I.route.hydrateFallbackElement||null)));let Y=e.concat(c.slice(0,R+1)),ee=()=>{let te;return L?te=B:W?te=b:I.route.Component?te=K.createElement(I.route.Component,null):I.route.element?te=I.route.element:te=_,K.createElement(GN,{match:I,routeContext:{outlet:_,matches:Y,isDataRoute:t!=null},children:te})};return t&&(I.route.ErrorBoundary||I.route.errorElement||R===0)?K.createElement(KN,{location:t.location,revalidation:t.revalidation,component:B,error:L,children:ee(),routeContext:{outlet:null,matches:Y,isDataRoute:!0}}):ee()},null)}var rE=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(rE||{}),iE=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(iE||{});function YN(n){let e=K.useContext(Kp);return e||st(!1),e}function XN(n){let e=K.useContext(UN);return e||st(!1),e}function JN(n){let e=K.useContext(Ni);return e||st(!1),e}function sE(n){let e=JN(),t=e.matches[e.matches.length-1];return t.route.id||st(!1),t.route.id}function ZN(){var n;let e=K.useContext(eE),t=XN(),i=sE();return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function eb(){let{router:n}=YN(rE.UseNavigateStable),e=sE(iE.UseNavigateStable),t=K.useRef(!1);return tE(()=>{t.current=!0}),K.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?n.navigate(o):n.navigate(o,pl({fromRouteId:e},l)))},[n,e])}const Kv={};function tb(n,e,t){Kv[n]||(Kv[n]=!0)}function nb(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function rb(n){let{to:e,replace:t,state:i,relative:o}=n;Wo()||st(!1);let{future:l,static:c}=K.useContext(Pi),{matches:h}=K.useContext(Ni),{pathname:p}=Rl(),y=qo(),_=Hp(e,qp(h,l.v7_relativeSplatPath),p,o==="path"),I=JSON.stringify(_);return K.useEffect(()=>y(JSON.parse(I),{replace:t,state:i,relative:o}),[y,I,o,t,i]),null}function ls(n){st(!1)}function ib(n){let{basename:e="/",children:t=null,location:i,navigationType:o=_i.Pop,navigator:l,static:c=!1,future:h}=n;Wo()&&st(!1);let p=e.replace(/^\/*/,"/"),y=K.useMemo(()=>({basename:p,navigator:l,static:c,future:pl({v7_relativeSplatPath:!1},h)}),[p,h,l,c]);typeof i=="string"&&(i=$o(i));let{pathname:_="/",search:I="",hash:R="",state:L=null,key:W="default"}=i,B=K.useMemo(()=>{let b=Wp(_,p);return b==null?null:{location:{pathname:b,search:I,hash:R,state:L,key:W},navigationType:o}},[p,_,I,R,L,W,o]);return B==null?null:K.createElement(Pi.Provider,{value:y},K.createElement(ud.Provider,{children:t,value:B}))}function sb(n){let{children:e,location:t}=n;return $N(qf(e),t)}new Promise(()=>{});function qf(n,e){e===void 0&&(e=[]);let t=[];return K.Children.forEach(n,(i,o)=>{if(!K.isValidElement(i))return;let l=[...e,o];if(i.type===K.Fragment){t.push.apply(t,qf(i.props.children,l));return}i.type!==ls&&st(!1),!i.props.index||!i.props.children||st(!1);let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=qf(i.props.children,l)),t.push(c)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hf(){return Hf=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Hf.apply(this,arguments)}function ob(n,e){if(n==null)return{};var t={},i=Object.keys(n),o,l;for(l=0;l<i.length;l++)o=i[l],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function ab(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function lb(n,e){return n.button===0&&(!e||e==="_self")&&!ab(n)}const ub=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],cb="6";try{window.__reactRouterVersion=cb}catch{}const db="startTransition",Gv=_T[db];function hb(n){let{basename:e,children:t,future:i,window:o}=n,l=K.useRef();l.current==null&&(l.current=pN({window:o,v5Compat:!0}));let c=l.current,[h,p]=K.useState({action:c.action,location:c.location}),{v7_startTransition:y}=i||{},_=K.useCallback(I=>{y&&Gv?Gv(()=>p(I)):p(I)},[p,y]);return K.useLayoutEffect(()=>c.listen(_),[c,_]),K.useEffect(()=>nb(i),[i]),K.createElement(ib,{basename:e,children:t,location:h.location,navigationType:h.action,navigator:c,future:i})}const fb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",pb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pt=K.forwardRef(function(e,t){let{onClick:i,relative:o,reloadDocument:l,replace:c,state:h,target:p,to:y,preventScrollReset:_,viewTransition:I}=e,R=ob(e,ub),{basename:L}=K.useContext(Pi),W,B=!1;if(typeof y=="string"&&pb.test(y)&&(W=y,fb))try{let te=new URL(window.location.href),re=y.startsWith("//")?new URL(te.protocol+y):new URL(y),ae=Wp(re.pathname,L);re.origin===te.origin&&ae!=null?y=ae+re.search+re.hash:B=!0}catch{}let b=BN(y,{relative:o}),Y=mb(y,{replace:c,state:h,target:p,preventScrollReset:_,relative:o,viewTransition:I});function ee(te){i&&i(te),te.defaultPrevented||Y(te)}return K.createElement("a",Hf({},R,{href:W||b,onClick:B||l?i:ee,ref:t,target:p}))});var Qv;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Qv||(Qv={}));var Yv;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Yv||(Yv={}));function mb(n,e){let{target:t,replace:i,state:o,preventScrollReset:l,relative:c,viewTransition:h}=e===void 0?{}:e,p=qo(),y=Rl(),_=nE(n,{relative:c});return K.useCallback(I=>{if(lb(I,t)){I.preventDefault();let R=i!==void 0?i:Vc(y)===Vc(_);p(n,{replace:R,state:o,preventScrollReset:l,relative:c,viewTransition:h})}},[y,p,_,i,o,t,n,l,c,h])}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),nn=(n,e)=>{const t=K.forwardRef(({color:i="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:c,className:h="",children:p,...y},_)=>K.createElement("svg",{ref:_,...gb,width:o,height:o,stroke:i,strokeWidth:c?Number(l)*24/Number(o):l,className:["lucide",`lucide-${yb(n)}`,h].join(" "),...y},[...e.map(([I,R])=>K.createElement(I,R)),...Array.isArray(p)?p:[p]]));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=nn("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=nn("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=nn("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=nn("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=nn("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=nn("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=nn("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=nn("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=nn("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oE=nn("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aE=nn("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=nn("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=nn("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=nn("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),Cl=()=>{const{currentUser:n}=ml(o=>o.user),e=Fc(),t=qo(),i=()=>{e(dc()).unwrap().then(()=>{t("/")}).catch(o=>{console.error("Logout failed:",o)})};return E.jsxs("nav",{className:"bg-white shadow-md",children:[E.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:E.jsxs("div",{className:"flex justify-between h-16",children:[E.jsx("div",{className:"flex items-center",children:E.jsxs(pt,{to:"/",className:"flex items-center",children:[E.jsx(hs,{className:"h-8 w-8 text-red-700"}),E.jsx("span",{className:"ml-2 text-xl font-bold text-red-700",children:"BloodBank"})]})}),E.jsxs("div",{className:"flex items-center",children:[E.jsxs("div",{className:"hidden md:ml-6 md:flex md:space-x-8",children:[E.jsx(pt,{to:"/",className:"px-3 py-2 text-sm font-medium text-gray-800 hover:text-red-700",children:"Home"}),E.jsx(pt,{to:"/donors",className:"px-3 py-2 text-sm font-medium text-gray-800 hover:text-red-700",children:"Find Donors"}),n?E.jsxs(E.Fragment,{children:[E.jsx(pt,{to:"/donate",className:"px-3 py-2 text-sm font-medium text-gray-800 hover:text-red-700",children:"Become a Donor"}),E.jsx("button",{onClick:i,className:"px-3 py-2 text-sm font-medium text-gray-800 hover:text-red-700",children:"Logout"})]}):E.jsxs(E.Fragment,{children:[E.jsx(pt,{to:"/login",className:"px-3 py-2 text-sm font-medium text-gray-800 hover:text-red-700",children:"Login"}),E.jsx(pt,{to:"/register",className:"px-3 py-2 text-sm font-medium text-gray-800 hover:text-red-700",children:"Register"})]})]}),E.jsx("div",{className:"md:hidden flex items-center",children:E.jsx("button",{className:"inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-red-700 focus:outline-none",children:E.jsx("svg",{className:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})})})]})]})}),E.jsx("div",{className:"hidden md:hidden",children:E.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:[E.jsx(pt,{to:"/",className:"block px-3 py-2 text-base font-medium text-gray-800 hover:text-red-700",children:"Home"}),E.jsx(pt,{to:"/donors",className:"block px-3 py-2 text-base font-medium text-gray-800 hover:text-red-700",children:"Find Donors"}),n?E.jsxs(E.Fragment,{children:[E.jsx(pt,{to:"/donate",className:"block px-3 py-2 text-base font-medium text-gray-800 hover:text-red-700",children:"Become a Donor"}),E.jsx("button",{onClick:i,className:"block w-full text-left px-3 py-2 text-base font-medium text-gray-800 hover:text-red-700",children:"Logout"})]}):E.jsxs(E.Fragment,{children:[E.jsx(pt,{to:"/login",className:"block px-3 py-2 text-base font-medium text-gray-800 hover:text-red-700",children:"Login"}),E.jsx(pt,{to:"/register",className:"block px-3 py-2 text-base font-medium text-gray-800 hover:text-red-700",children:"Register"})]})]})})]})},kl=()=>E.jsx("footer",{className:"bg-gray-800 text-white py-8",children:E.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[E.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[E.jsxs("div",{children:[E.jsxs("h3",{className:"text-lg font-semibold mb-4 flex items-center",children:[E.jsx(Mc,{className:"h-5 w-5 mr-2 text-red-500"}),"BloodBank App"]}),E.jsx("p",{className:"text-sm text-gray-300",children:"Connecting blood donors with those in need since 2025. Every donation can save up to three lives."})]}),E.jsxs("div",{children:[E.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Quick Links"}),E.jsxs("ul",{className:"space-y-2 text-sm text-gray-300",children:[E.jsx("li",{children:E.jsx("a",{href:"/",className:"hover:text-red-400",children:"Home"})}),E.jsx("li",{children:E.jsx("a",{href:"/donors",className:"hover:text-red-400",children:"Find Donors"})}),E.jsx("li",{children:E.jsx("a",{href:"/donate",className:"hover:text-red-400",children:"Become a Donor"})}),E.jsx("li",{children:E.jsx("a",{href:"#",className:"hover:text-red-400",children:"Blood Types Guide"})}),E.jsx("li",{children:E.jsx("a",{href:"#",className:"hover:text-red-400",children:"FAQ"})})]})]}),E.jsxs("div",{children:[E.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Contact Us"}),E.jsxs("ul",{className:"space-y-2 text-sm text-gray-300",children:[E.jsxs("li",{className:"flex items-center",children:[E.jsx(aE,{className:"h-4 w-4 mr-2 text-red-400"}),E.jsx("span",{children:"+1 (555) 123-4567"})]}),E.jsxs("li",{className:"flex items-center",children:[E.jsx(Eb,{className:"h-4 w-4 mr-2 text-red-400"}),E.jsx("span",{children:"contact@bloodbankapp.com"})]}),E.jsxs("li",{className:"flex items-center",children:[E.jsx(oE,{className:"h-4 w-4 mr-2 text-red-400"}),E.jsx("span",{children:"123 Health Street, Medical District"})]})]})]})]}),E.jsx("div",{className:"mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400",children:E.jsxs("p",{children:["© ",new Date().getFullYear()," BloodBank App. All rights reserved."]})})]})}),Sb=()=>{const{currentUser:n}=ml(i=>i.user),e={"O-":{canDonateTo:["O-","O+","A-","A+","B-","B+","AB-","AB+"],universal:"donor"},"O+":{canDonateTo:["O+","A+","B+","AB+"]},"A-":{canDonateTo:["A-","A+","AB-","AB+"]},"A+":{canDonateTo:["A+","AB+"]},"B-":{canDonateTo:["B-","B+","AB-","AB+"]},"B+":{canDonateTo:["B+","AB+"]},"AB-":{canDonateTo:["AB-","AB+"]},"AB+":{canDonateTo:["AB+"],universal:"recipient"}},t=({bloodType:i,data:o})=>E.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",children:[E.jsxs("div",{className:"flex items-center justify-between mb-4",children:[E.jsxs("div",{className:"flex items-center space-x-3",children:[E.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center",children:E.jsx("span",{className:"text-white font-bold text-lg",children:i})}),E.jsxs("div",{children:[E.jsx("h3",{className:"font-bold text-xl text-gray-800",children:i}),o.universal&&E.jsxs("span",{className:"text-sm bg-gradient-to-r from-red-100 to-pink-100 text-red-700 px-2 py-1 rounded-full font-medium",children:["Universal ",o.universal]})]})]}),E.jsx(hs,{className:"h-6 w-6 text-red-500"})]}),E.jsxs("div",{className:"space-y-3",children:[E.jsxs("p",{className:"text-sm font-semibold text-gray-700 flex items-center",children:[E.jsx(vb,{className:"h-4 w-4 mr-2 text-green-500"}),"Can donate to:"]}),E.jsx("div",{className:"flex flex-wrap gap-2",children:o.canDonateTo.map(l=>E.jsx("span",{className:"bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium border border-green-200",children:l},l))})]})]});return E.jsxs("div",{className:"min-h-screen flex flex-col",children:[E.jsx(Cl,{}),E.jsxs("div",{className:"relative bg-red-700 text-white py-20",children:[E.jsx("div",{className:"absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=compress&w=1200&q=80')] bg-cover bg-center"}),E.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:E.jsxs("div",{className:"text-center md:text-left md:w-2/3",children:[E.jsx("h1",{className:"text-4xl sm:text-5xl font-bold leading-tight mb-4",children:"Donate Blood, Save Lives"}),E.jsx("p",{className:"text-xl mb-8 text-red-100",children:"Every donation can save up to three lives. Join our community of donors and make a difference today."}),E.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center md:justify-start",children:[n?E.jsx(pt,{to:"/donate",className:"bg-white text-red-700 hover:bg-red-50 px-6 py-3 rounded-md font-semibold transition-colors duration-300 text-center",children:"Become a Donor"}):E.jsx(pt,{to:"/register",className:"bg-white text-red-700 hover:bg-red-50 px-6 py-3 rounded-md font-semibold transition-colors duration-300 text-center",children:"Register Now"}),E.jsx(pt,{to:"/donors",className:"bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-700 px-6 py-3 rounded-md font-semibold transition-colors duration-300 text-center",children:"Find Donors"})]})]})})]}),E.jsx("div",{className:"py-16 bg-gray-50",children:E.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[E.jsxs("div",{className:"text-center mb-12",children:[E.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:"How It Works"}),E.jsx("p",{className:"mt-4 text-lg text-gray-600",children:"Our platform connects blood donors with those in need"})]}),E.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[E.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md text-center",children:[E.jsx("div",{className:"w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4",children:E.jsx(Ib,{className:"h-8 w-8 text-red-700"})}),E.jsx("h3",{className:"text-xl font-semibold mb-2 text-gray-800",children:"Register"}),E.jsx("p",{className:"text-gray-600",children:"Create an account to join our community of blood donors and recipients."})]}),E.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md text-center",children:[E.jsx("div",{className:"w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4",children:E.jsx(hs,{className:"h-8 w-8 text-red-700"})}),E.jsx("h3",{className:"text-xl font-semibold mb-2 text-gray-800",children:"Become a Donor"}),E.jsx("p",{className:"text-gray-600",children:"Add your blood type and contact information to be listed as an available donor."})]}),E.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md text-center",children:[E.jsx("div",{className:"w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4",children:E.jsx(lE,{className:"h-8 w-8 text-red-700"})}),E.jsx("h3",{className:"text-xl font-semibold mb-2 text-gray-800",children:"Find Donors"}),E.jsx("p",{className:"text-gray-600",children:"Search for compatible blood donors by blood type and location when needed."})]})]})]})}),E.jsx("div",{className:"py-20 bg-gradient-to-br from-red-50 via-white to-pink-50",children:E.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[E.jsxs("div",{className:"text-center mb-16",children:[E.jsxs("div",{className:"flex items-center justify-center mb-4",children:[E.jsx(Mc,{className:"h-8 w-8 text-red-500 mr-3"}),E.jsx("h2",{className:"text-4xl font-bold text-gray-900",children:"Blood Type Compatibility"})]}),E.jsx("p",{className:"text-lg text-gray-600 max-w-3xl mx-auto mb-8",children:"Understanding blood type compatibility is crucial for safe transfusions. Each blood type has specific compatibility rules based on antigens and antibodies."}),E.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8 mb-12 border border-red-100",children:[E.jsxs("div",{className:"flex items-center justify-center mb-6",children:[E.jsx(wb,{className:"h-6 w-6 text-blue-500 mr-2"}),E.jsx("h3",{className:"text-2xl font-bold text-gray-800",children:"Blood Group System"})]}),E.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left",children:[E.jsxs("div",{className:"bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200",children:[E.jsxs("div",{className:"flex items-center mb-3",children:[E.jsx("div",{className:"w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3",children:E.jsx("span",{className:"text-white font-bold text-sm",children:"A"})}),E.jsx("h4",{className:"font-bold text-lg text-gray-800",children:"Group A"})]}),E.jsx("p",{className:"text-gray-700 text-sm",children:"Has A antigen on red cells and B antibody in plasma"})]}),E.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200",children:[E.jsxs("div",{className:"flex items-center mb-3",children:[E.jsx("div",{className:"w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3",children:E.jsx("span",{className:"text-white font-bold text-sm",children:"B"})}),E.jsx("h4",{className:"font-bold text-lg text-gray-800",children:"Group B"})]}),E.jsx("p",{className:"text-gray-700 text-sm",children:"Has B antigen on red cells and A antibody in plasma"})]}),E.jsxs("div",{className:"bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200",children:[E.jsxs("div",{className:"flex items-center mb-3",children:[E.jsx("div",{className:"w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3",children:E.jsx("span",{className:"text-white font-bold text-xs",children:"AB"})}),E.jsx("h4",{className:"font-bold text-lg text-gray-800",children:"Group AB"})]}),E.jsx("p",{className:"text-gray-700 text-sm",children:"Has both A and B antigens, no A or B antibodies"})]}),E.jsxs("div",{className:"bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200",children:[E.jsxs("div",{className:"flex items-center mb-3",children:[E.jsx("div",{className:"w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3",children:E.jsx("span",{className:"text-white font-bold text-sm",children:"O"})}),E.jsx("h4",{className:"font-bold text-lg text-gray-800",children:"Group O"})]}),E.jsx("p",{className:"text-gray-700 text-sm",children:"No A or B antigens, has both A and B antibodies"})]})]})]})]}),E.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:Object.entries(e).map(([i,o])=>E.jsx(t,{bloodType:i,data:o},i))}),E.jsxs("div",{className:"mt-12 bg-white rounded-2xl shadow-xl p-8 border border-red-100",children:[E.jsx("h3",{className:"text-2xl font-bold text-gray-800 text-center mb-8",children:"Quick Reference"}),E.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[E.jsxs("div",{className:"bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl",children:[E.jsxs("div",{className:"flex items-center mb-4",children:[E.jsx("div",{className:"w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-3",children:E.jsx(hs,{className:"h-5 w-5 text-white"})}),E.jsx("h4",{className:"font-bold text-lg text-gray-800",children:"Universal Donor"})]}),E.jsxs("p",{className:"text-gray-700 mb-2",children:[E.jsx("span",{className:"font-semibold text-red-600",children:"O-"})," can donate to all blood types"]}),E.jsx("p",{className:"text-sm text-gray-600",children:"Perfect for emergency situations when blood type is unknown"})]}),E.jsxs("div",{className:"bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl",children:[E.jsxs("div",{className:"flex items-center mb-4",children:[E.jsx("div",{className:"w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3",children:E.jsx(Mc,{className:"h-5 w-5 text-white"})}),E.jsx("h4",{className:"font-bold text-lg text-gray-800",children:"Universal Recipient"})]}),E.jsxs("p",{className:"text-gray-700 mb-2",children:[E.jsx("span",{className:"font-semibold text-purple-600",children:"AB+"})," can receive from all blood types"]}),E.jsx("p",{className:"text-sm text-gray-600",children:"Can accept donations from any compatible donor"})]})]})]})]})}),E.jsx("div",{className:"py-16 bg-white",children:E.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:E.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 text-center",children:[E.jsxs("div",{children:[E.jsx("p",{className:"text-4xl font-bold text-red-700",children:"10,000+"}),E.jsx("p",{className:"mt-2 text-lg text-gray-600",children:"Registered Donors"})]}),E.jsxs("div",{children:[E.jsx("p",{className:"text-4xl font-bold text-red-700",children:"5,000+"}),E.jsx("p",{className:"mt-2 text-lg text-gray-600",children:"Lives Saved"})]}),E.jsxs("div",{children:[E.jsx("p",{className:"text-4xl font-bold text-red-700",children:"100+"}),E.jsx("p",{className:"mt-2 text-lg text-gray-600",children:"Cities Covered"})]})]})})}),E.jsx("div",{className:"py-16 bg-gray-50",children:E.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[E.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-4",children:"Ready to Make a Difference?"}),E.jsx("p",{className:"text-lg text-gray-600 mb-8 max-w-3xl mx-auto",children:"Your donation can save up to three lives. Join our community of blood donors today."}),E.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[n?E.jsx(pt,{to:"/donate",className:"bg-red-700 text-white hover:bg-red-800 px-6 py-3 rounded-md font-semibold transition-colors duration-300",children:"Become a Donor"}):E.jsx(pt,{to:"/register",className:"bg-red-700 text-white hover:bg-red-800 px-6 py-3 rounded-md font-semibold transition-colors duration-300",children:"Register Now"}),E.jsx(pt,{to:"/donors",className:"bg-white text-red-700 border border-red-700 hover:bg-red-50 px-6 py-3 rounded-md font-semibold transition-colors duration-300",children:"Find Donors"})]})]})}),E.jsx(kl,{})]})},xb=()=>{const[n,e]=K.useState(""),[t,i]=K.useState(""),[o,l]=K.useState(""),c=Fc(),h=qo(),{isLoading:p,error:y}=ml(I=>I.user),_=async I=>{if(I.preventDefault(),l(""),!n||!t){l("Please fill in all fields");return}try{await c(cc({email:n,password:t})).unwrap(),h("/")}catch(R){console.error("Login failed:",R)}};return E.jsxs("div",{className:"min-h-screen flex flex-col",children:[E.jsx(Cl,{}),E.jsx("div",{className:"flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50",children:E.jsxs("div",{className:"max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md",children:[E.jsxs("div",{className:"text-center",children:[E.jsx("div",{className:"flex justify-center",children:E.jsx(hs,{className:"h-12 w-12 text-red-700"})}),E.jsx("h2",{className:"mt-4 text-3xl font-bold text-gray-900",children:"Sign in to your account"}),E.jsxs("p",{className:"mt-2 text-sm text-gray-600",children:["Or"," ",E.jsx(pt,{to:"/register",className:"font-medium text-red-700 hover:text-red-800",children:"create a new account"})]})]}),E.jsxs("form",{className:"mt-8 space-y-6",onSubmit:_,children:[(y||o)&&E.jsxs("div",{className:"p-3 bg-red-50 border border-red-200 rounded-md flex items-center",children:[E.jsx(cd,{className:"h-5 w-5 text-red-500 mr-2"}),E.jsx("p",{className:"text-sm text-red-700",children:o||y})]}),E.jsxs("div",{className:"space-y-4",children:[E.jsxs("div",{children:[E.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email address"}),E.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,value:n,onChange:I=>e(I.target.value),className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"})]}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),E.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,value:t,onChange:I=>i(I.target.value),className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"})]})]}),E.jsx("div",{children:E.jsx("button",{type:"submit",disabled:p,className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-70 disabled:cursor-not-allowed",children:p?E.jsxs("span",{className:"flex items-center",children:[E.jsx(dd,{className:"animate-spin -ml-1 mr-2 h-4 w-4"}),"Signing in..."]}):"Sign in"})})]})]})}),E.jsx(kl,{})]})},Ab=()=>{const[n,e]=K.useState(""),[t,i]=K.useState(""),[o,l]=K.useState(""),[c,h]=K.useState(""),[p,y]=K.useState(""),_=Fc(),I=qo(),{isLoading:R,error:L}=ml(B=>B.user),W=async B=>{if(B.preventDefault(),y(""),!n||!t||!o||!c){y("Please fill in all fields");return}if(o!==c){y("Passwords do not match");return}if(o.length<6){y("Password must be at least 6 characters");return}try{await _(uc({email:t,password:o,displayName:n})).unwrap(),I("/")}catch(b){console.error("Registration failed:",b)}};return E.jsxs("div",{className:"min-h-screen flex flex-col",children:[E.jsx(Cl,{}),E.jsx("div",{className:"flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50",children:E.jsxs("div",{className:"max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md",children:[E.jsxs("div",{className:"text-center",children:[E.jsx("div",{className:"flex justify-center",children:E.jsx(hs,{className:"h-12 w-12 text-red-700"})}),E.jsx("h2",{className:"mt-4 text-3xl font-bold text-gray-900",children:"Create an account"}),E.jsxs("p",{className:"mt-2 text-sm text-gray-600",children:["Or"," ",E.jsx(pt,{to:"/login",className:"font-medium text-red-700 hover:text-red-800",children:"sign in to your existing account"})]})]}),E.jsxs("form",{className:"mt-8 space-y-6",onSubmit:W,children:[(L||p)&&E.jsxs("div",{className:"p-3 bg-red-50 border border-red-200 rounded-md flex items-center",children:[E.jsx(cd,{className:"h-5 w-5 text-red-500 mr-2"}),E.jsx("p",{className:"text-sm text-red-700",children:p||L})]}),E.jsxs("div",{className:"space-y-4",children:[E.jsxs("div",{children:[E.jsx("label",{htmlFor:"displayName",className:"block text-sm font-medium text-gray-700",children:"Full Name"}),E.jsx("input",{id:"displayName",name:"displayName",type:"text",autoComplete:"name",required:!0,value:n,onChange:B=>e(B.target.value),className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"})]}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email address"}),E.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,value:t,onChange:B=>i(B.target.value),className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"})]}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),E.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"new-password",required:!0,value:o,onChange:B=>l(B.target.value),className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"})]}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"confirmPassword",className:"block text-sm font-medium text-gray-700",children:"Confirm Password"}),E.jsx("input",{id:"confirmPassword",name:"confirmPassword",type:"password",autoComplete:"new-password",required:!0,value:c,onChange:B=>h(B.target.value),className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"})]})]}),E.jsx("div",{children:E.jsx("button",{type:"submit",disabled:R,className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-70 disabled:cursor-not-allowed",children:R?E.jsxs("span",{className:"flex items-center",children:[E.jsx(dd,{className:"animate-spin -ml-1 mr-2 h-4 w-4"}),"Creating account..."]}):"Create account"})})]})]})}),E.jsx(kl,{})]})},Rb=["A+","A-","B+","B-","AB+","AB-","O+","O-"],Cb=()=>{const{currentUser:n}=ml(R=>R.user),e=qo(),[t,i]=K.useState({name:(n==null?void 0:n.displayName)||"",gender:"",age:"",bloodGroup:"",city:"",phone:"",medicalInfo:""}),[o,l]=K.useState(!1),[c,h]=K.useState(""),[p,y]=K.useState(!1),_=R=>{const{name:L,value:W}=R.target;i(B=>({...B,[L]:W}))},I=async R=>{R.preventDefault(),h(""),y(!1);const{name:L,gender:W,age:B,bloodGroup:b,city:Y,phone:ee}=t;if(!L||!W||!B||!b||!Y||!ee){h("Please fill in all required fields");return}if(isNaN(B)||parseInt(B)<18||parseInt(B)>65){h("Age must be between 18 and 65");return}try{l(!0),await zk(mw(Gw,"donors"),{...t,userId:n.uid,createdAt:new Date().toISOString()}),y(!0),i({name:(n==null?void 0:n.displayName)||"",gender:"",age:"",bloodGroup:"",city:"",phone:"",medicalInfo:""}),setTimeout(()=>{e("/donors")},2e3)}catch(te){console.error("Error registering as donor:",te),h("Failed to register as donor. Please try again.")}finally{l(!1)}};return Kf.useEffect(()=>{n||e("/login")},[n,e]),n?E.jsxs("div",{className:"min-h-screen flex flex-col",children:[E.jsx(Cl,{}),E.jsx("div",{className:"flex-grow bg-gray-50 py-12",children:E.jsx("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8",children:E.jsx("div",{className:"bg-white rounded-lg shadow-md overflow-hidden",children:E.jsxs("div",{className:"px-6 py-8",children:[E.jsxs("div",{className:"text-center mb-8",children:[E.jsx(hs,{className:"h-12 w-12 text-red-700 mx-auto"}),E.jsx("h2",{className:"mt-4 text-3xl font-bold text-gray-900",children:"Become a Blood Donor"}),E.jsx("p",{className:"mt-2 text-gray-600",children:"Fill in your details to register as a blood donor and help save lives"})]}),c&&E.jsxs("div",{className:"mb-6 p-3 bg-red-50 border border-red-200 rounded-md flex items-center",children:[E.jsx(cd,{className:"h-5 w-5 text-red-500 mr-2 flex-shrink-0"}),E.jsx("p",{className:"text-sm text-red-700",children:c})]}),p&&E.jsxs("div",{className:"mb-6 p-3 bg-green-50 border border-green-200 rounded-md flex items-center",children:[E.jsx(Xv,{className:"h-5 w-5 text-green-500 mr-2 flex-shrink-0"}),E.jsx("p",{className:"text-sm text-green-700",children:"You have successfully registered as a donor! Redirecting..."})]}),E.jsxs("form",{onSubmit:I,className:"space-y-6",children:[E.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[E.jsxs("div",{children:[E.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Full Name *"}),E.jsx("input",{type:"text",id:"name",name:"name",value:t.name,onChange:_,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500",required:!0})]}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"gender",className:"block text-sm font-medium text-gray-700",children:"Gender *"}),E.jsxs("select",{id:"gender",name:"gender",value:t.gender,onChange:_,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500",required:!0,children:[E.jsx("option",{value:"",disabled:!0,children:"Select gender"}),E.jsx("option",{value:"Male",children:"Male"}),E.jsx("option",{value:"Female",children:"Female"}),E.jsx("option",{value:"Other",children:"Other"})]})]}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"age",className:"block text-sm font-medium text-gray-700",children:"Age * (18-65)"}),E.jsx("input",{type:"number",id:"age",name:"age",min:"18",max:"65",value:t.age,onChange:_,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500",required:!0})]}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"bloodGroup",className:"block text-sm font-medium text-gray-700",children:"Blood Group *"}),E.jsxs("select",{id:"bloodGroup",name:"bloodGroup",value:t.bloodGroup,onChange:_,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500",required:!0,children:[E.jsx("option",{value:"",disabled:!0,children:"Select blood group"}),Rb.map(R=>E.jsx("option",{value:R,children:R},R))]})]}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"city",className:"block text-sm font-medium text-gray-700",children:"City/Location *"}),E.jsx("input",{type:"text",id:"city",name:"city",value:t.city,onChange:_,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500",required:!0})]}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700",children:"Phone Number *"}),E.jsx("input",{type:"tel",id:"phone",name:"phone",value:t.phone,onChange:_,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500",required:!0})]})]}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"medicalInfo",className:"block text-sm font-medium text-gray-700",children:"Medical Information (Optional)"}),E.jsx("textarea",{id:"medicalInfo",name:"medicalInfo",rows:"3",value:t.medicalInfo,onChange:_,placeholder:"Any medical conditions, medications, or other relevant health information",className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"})]}),E.jsx("div",{className:"mt-8",children:E.jsx("button",{type:"submit",disabled:o||p,className:"w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-70 disabled:cursor-not-allowed",children:o?E.jsxs("span",{className:"flex items-center",children:[E.jsx(dd,{className:"animate-spin -ml-1 mr-2 h-4 w-4"}),"Registering..."]}):p?E.jsxs("span",{className:"flex items-center",children:[E.jsx(Xv,{className:"-ml-1 mr-2 h-4 w-4"}),"Registration Successful"]}):"Register as Donor"})})]})]})})})}),E.jsx(kl,{})]}):null},kb={"A+":"bg-red-100 text-red-800","A-":"bg-red-100 text-red-800","B+":"bg-blue-100 text-blue-800","B-":"bg-blue-100 text-blue-800","AB+":"bg-purple-100 text-purple-800","AB-":"bg-purple-100 text-purple-800","O+":"bg-green-100 text-green-800","O-":"bg-green-100 text-green-800"},Pb=({donor:n})=>{const{name:e,bloodGroup:t,gender:i,age:o,city:l,phone:c,medicalInfo:h}=n;return E.jsx("div",{className:"bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]",children:E.jsxs("div",{className:"p-6",children:[E.jsxs("div",{className:"flex justify-between items-start mb-4",children:[E.jsxs("div",{children:[E.jsx("h3",{className:"text-xl font-semibold text-gray-800",children:e}),E.jsxs("div",{className:"flex items-center text-gray-600 mt-1",children:[E.jsx(Tb,{className:"h-4 w-4 mr-1"}),E.jsxs("span",{children:[i,", ",o," years"]})]}),E.jsxs("div",{className:"flex items-center text-gray-600 mt-1",children:[E.jsx(oE,{className:"h-4 w-4 mr-1"}),E.jsx("span",{children:l})]})]}),E.jsx("div",{className:`px-3 py-1 rounded-full text-sm font-semibold ${kb[t]||"bg-gray-100 text-gray-800"}`,children:t})]}),h&&E.jsxs("div",{className:"mb-4 p-3 bg-gray-50 rounded-md flex items-start",children:[E.jsx(cd,{className:"h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5"}),E.jsx("p",{className:"text-sm text-gray-700",children:h})]}),E.jsxs("div",{className:"flex justify-between items-center mt-4 pt-4 border-t border-gray-100",children:[E.jsxs("div",{className:"flex items-center text-gray-600",children:[E.jsx(Mc,{className:"h-5 w-5 text-red-700 mr-2"}),E.jsx("span",{className:"text-sm",children:"Available to donate"})]}),E.jsxs("a",{href:`tel:${c}`,className:"inline-flex items-center px-4 py-2 bg-red-700 hover:bg-red-800 text-white text-sm font-medium rounded-md transition-colors duration-300",children:[E.jsx(aE,{className:"h-4 w-4 mr-1"}),"Contact"]})]})]})})},Nb=["A+","A-","B+","B-","AB+","AB-","O+","O-"],bb=()=>{const[n,e]=K.useState([]),[t,i]=K.useState([]),[o,l]=K.useState(!0),[c,h]=K.useState(""),[p,y]=K.useState(""),[_,I]=K.useState(""),[R,L]=K.useState(""),W=[...new Set(n.map(b=>b.city))].sort();K.useEffect(()=>{(async()=>{try{l(!0);const ee=(await Bk(mw(Gw,"donors"))).docs.map(te=>({id:te.id,...te.data()}));e(ee),i(ee)}catch(Y){console.error("Error fetching donors:",Y),h("Failed to load donors. Please try again later.")}finally{l(!1)}})()},[]),K.useEffect(()=>{let b=[...n];if(p&&(b=b.filter(Y=>Y.bloodGroup===p)),_&&(b=b.filter(Y=>Y.city===_)),R){const Y=R.toLowerCase();b=b.filter(ee=>ee.name.toLowerCase().includes(Y)||ee.city.toLowerCase().includes(Y))}i(b)},[p,_,R,n]);const B=()=>{y(""),I(""),L("")};return E.jsxs("div",{className:"min-h-screen flex flex-col",children:[E.jsx(Cl,{}),E.jsx("div",{className:"flex-grow bg-gray-50 py-12",children:E.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[E.jsxs("div",{className:"text-center mb-12",children:[E.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Available Blood Donors"}),E.jsx("p",{className:"mt-4 text-lg text-gray-600",children:"Find compatible blood donors in your area"})]}),E.jsx("div",{className:"bg-white p-6 rounded-lg shadow-md mb-8",children:E.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:space-x-4",children:[E.jsx("div",{className:"flex-1 mb-4 md:mb-0",children:E.jsxs("div",{className:"relative",children:[E.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:E.jsx(lE,{className:"h-5 w-5 text-gray-400"})}),E.jsx("input",{type:"text",placeholder:"Search by name or city...",value:R,onChange:b=>L(b.target.value),className:"block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-red-500 focus:border-red-500"})]})}),E.jsxs("div",{className:"flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4",children:[E.jsx("div",{className:"sm:w-40",children:E.jsxs("select",{value:p,onChange:b=>y(b.target.value),className:"block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 rounded-md",children:[E.jsx("option",{value:"",children:"All Blood Types"}),Nb.map(b=>E.jsx("option",{value:b,children:b},b))]})}),E.jsx("div",{className:"sm:w-40",children:E.jsxs("select",{value:_,onChange:b=>I(b.target.value),className:"block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 rounded-md",children:[E.jsx("option",{value:"",children:"All Locations"}),W.map(b=>E.jsx("option",{value:b,children:b},b))]})}),E.jsxs("button",{onClick:B,className:"inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none",children:[E.jsx(_b,{className:"h-4 w-4 mr-2"}),"Reset Filters"]})]})]})}),o?E.jsxs("div",{className:"flex justify-center items-center py-12",children:[E.jsx(dd,{className:"animate-spin h-8 w-8 text-red-700"}),E.jsx("span",{className:"ml-2 text-gray-600",children:"Loading donors..."})]}):c?E.jsx("div",{className:"bg-red-50 p-4 rounded-md text-center",children:E.jsx("p",{className:"text-red-700",children:c})}):t.length===0?E.jsxs("div",{className:"bg-gray-50 p-12 rounded-lg text-center",children:[E.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"No donors found"}),E.jsx("p",{className:"text-gray-600",children:"Try adjusting your filters or check back later."}),(p||_||R)&&E.jsx("button",{onClick:B,className:"mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",children:"Clear all filters"})]}):E.jsxs("div",{children:[E.jsxs("div",{className:"mb-4 text-gray-600",children:["Showing ",t.length," ",t.length===1?"donor":"donors",(p||_||R)&&" with current filters"]}),E.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:t.map(b=>E.jsx(Pb,{donor:b},b.id))})]})]})}),E.jsx(kl,{})]})},Db=()=>{const n=Fc();return K.useEffect(()=>{const e=_A(hl,t=>{n(t?cN({uid:t.uid,email:t.email,displayName:t.displayName}):dN())});return()=>e()},[n]),E.jsx(hb,{children:E.jsxs(sb,{children:[E.jsx(ls,{path:"/",element:E.jsx(Sb,{})}),E.jsx(ls,{path:"/login",element:E.jsx(xb,{})}),E.jsx(ls,{path:"/register",element:E.jsx(Ab,{})}),E.jsx(ls,{path:"/donate",element:E.jsx(Cb,{})}),E.jsx(ls,{path:"/donors",element:E.jsx(bb,{})}),E.jsx(ls,{path:"*",element:E.jsx(rb,{to:"/\\",replace:!0})})]})})};ST.createRoot(document.getElementById("root")).render(E.jsx(Kf.StrictMode,{children:E.jsx(FT,{store:fN,children:E.jsx(Db,{})})}));
