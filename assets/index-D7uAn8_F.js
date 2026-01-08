(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function _M(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var _h={exports:{}},Yo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t_;function vM(){if(t_)return Yo;t_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Yo.Fragment=t,Yo.jsx=i,Yo.jsxs=i,Yo}var e_;function xM(){return e_||(e_=1,_h.exports=vM()),_h.exports}var X=xM(),vh={exports:{}},Zo={},xh={exports:{}},yh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n_;function yM(){return n_||(n_=1,(function(r){function t(I,B){var Z=I.length;I.push(B);t:for(;0<Z;){var mt=Z-1>>>1,dt=I[mt];if(0<l(dt,B))I[mt]=B,I[Z]=dt,Z=mt;else break t}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var B=I[0],Z=I.pop();if(Z!==B){I[0]=Z;t:for(var mt=0,dt=I.length,z=dt>>>1;mt<z;){var nt=2*(mt+1)-1,gt=I[nt],Et=nt+1,Nt=I[Et];if(0>l(gt,Z))Et<dt&&0>l(Nt,gt)?(I[mt]=Nt,I[Et]=Z,mt=Et):(I[mt]=gt,I[nt]=Z,mt=nt);else if(Et<dt&&0>l(Nt,Z))I[mt]=Nt,I[Et]=Z,mt=Et;else break t}}return B}function l(I,B){var Z=I.sortIndex-B.sortIndex;return Z!==0?Z:I.id-B.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],g=1,_=null,x=3,y=!1,b=!1,E=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function w(I){for(var B=i(p);B!==null;){if(B.callback===null)s(p);else if(B.startTime<=I)s(p),B.sortIndex=B.expirationTime,t(m,B);else break;B=i(p)}}function P(I){if(E=!1,w(I),!b)if(i(m)!==null)b=!0,O||(O=!0,q());else{var B=i(p);B!==null&&it(P,B.startTime-I)}}var O=!1,N=-1,H=5,A=-1;function D(){return M?!0:!(r.unstable_now()-A<H)}function G(){if(M=!1,O){var I=r.unstable_now();A=I;var B=!0;try{t:{b=!1,E&&(E=!1,C(N),N=-1),y=!0;var Z=x;try{e:{for(w(I),_=i(m);_!==null&&!(_.expirationTime>I&&D());){var mt=_.callback;if(typeof mt=="function"){_.callback=null,x=_.priorityLevel;var dt=mt(_.expirationTime<=I);if(I=r.unstable_now(),typeof dt=="function"){_.callback=dt,w(I),B=!0;break e}_===i(m)&&s(m),w(I)}else s(m);_=i(m)}if(_!==null)B=!0;else{var z=i(p);z!==null&&it(P,z.startTime-I),B=!1}}break t}finally{_=null,x=Z,y=!1}B=void 0}}finally{B?q():O=!1}}}var q;if(typeof R=="function")q=function(){R(G)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,et=Y.port2;Y.port1.onmessage=G,q=function(){et.postMessage(null)}}else q=function(){v(G,0)};function it(I,B){N=v(function(){I(r.unstable_now())},B)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(I){switch(x){case 1:case 2:case 3:var B=3;break;default:B=x}var Z=x;x=B;try{return I()}finally{x=Z}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(I,B){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Z=x;x=I;try{return B()}finally{x=Z}},r.unstable_scheduleCallback=function(I,B,Z){var mt=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?mt+Z:mt):Z=mt,I){case 1:var dt=-1;break;case 2:dt=250;break;case 5:dt=1073741823;break;case 4:dt=1e4;break;default:dt=5e3}return dt=Z+dt,I={id:g++,callback:B,priorityLevel:I,startTime:Z,expirationTime:dt,sortIndex:-1},Z>mt?(I.sortIndex=Z,t(p,I),i(m)===null&&I===i(p)&&(E?(C(N),N=-1):E=!0,it(P,Z-mt))):(I.sortIndex=dt,t(m,I),b||y||(b=!0,O||(O=!0,q()))),I},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(I){var B=x;return function(){var Z=x;x=B;try{return I.apply(this,arguments)}finally{x=Z}}}})(yh)),yh}var i_;function MM(){return i_||(i_=1,xh.exports=yM()),xh.exports}var Mh={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_;function SM(){if(a_)return ce;a_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function y(z){return z===null||typeof z!="object"?null:(z=x&&z[x]||z["@@iterator"],typeof z=="function"?z:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function v(z,nt,gt){this.props=z,this.context=nt,this.refs=M,this.updater=gt||b}v.prototype.isReactComponent={},v.prototype.setState=function(z,nt){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,nt,"setState")},v.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function C(){}C.prototype=v.prototype;function R(z,nt,gt){this.props=z,this.context=nt,this.refs=M,this.updater=gt||b}var w=R.prototype=new C;w.constructor=R,E(w,v.prototype),w.isPureReactComponent=!0;var P=Array.isArray;function O(){}var N={H:null,A:null,T:null,S:null},H=Object.prototype.hasOwnProperty;function A(z,nt,gt){var Et=gt.ref;return{$$typeof:r,type:z,key:nt,ref:Et!==void 0?Et:null,props:gt}}function D(z,nt){return A(z.type,nt,z.props)}function G(z){return typeof z=="object"&&z!==null&&z.$$typeof===r}function q(z){var nt={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(gt){return nt[gt]})}var Y=/\/+/g;function et(z,nt){return typeof z=="object"&&z!==null&&z.key!=null?q(""+z.key):nt.toString(36)}function it(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(O,O):(z.status="pending",z.then(function(nt){z.status==="pending"&&(z.status="fulfilled",z.value=nt)},function(nt){z.status==="pending"&&(z.status="rejected",z.reason=nt)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function I(z,nt,gt,Et,Nt){var at=typeof z;(at==="undefined"||at==="boolean")&&(z=null);var ft=!1;if(z===null)ft=!0;else switch(at){case"bigint":case"string":case"number":ft=!0;break;case"object":switch(z.$$typeof){case r:case t:ft=!0;break;case g:return ft=z._init,I(ft(z._payload),nt,gt,Et,Nt)}}if(ft)return Nt=Nt(z),ft=Et===""?"."+et(z,0):Et,P(Nt)?(gt="",ft!=null&&(gt=ft.replace(Y,"$&/")+"/"),I(Nt,nt,gt,"",function(Pt){return Pt})):Nt!=null&&(G(Nt)&&(Nt=D(Nt,gt+(Nt.key==null||z&&z.key===Nt.key?"":(""+Nt.key).replace(Y,"$&/")+"/")+ft)),nt.push(Nt)),1;ft=0;var Rt=Et===""?".":Et+":";if(P(z))for(var Gt=0;Gt<z.length;Gt++)Et=z[Gt],at=Rt+et(Et,Gt),ft+=I(Et,nt,gt,at,Nt);else if(Gt=y(z),typeof Gt=="function")for(z=Gt.call(z),Gt=0;!(Et=z.next()).done;)Et=Et.value,at=Rt+et(Et,Gt++),ft+=I(Et,nt,gt,at,Nt);else if(at==="object"){if(typeof z.then=="function")return I(it(z),nt,gt,Et,Nt);throw nt=String(z),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return ft}function B(z,nt,gt){if(z==null)return z;var Et=[],Nt=0;return I(z,Et,"","",function(at){return nt.call(gt,at,Nt++)}),Et}function Z(z){if(z._status===-1){var nt=z._result;nt=nt(),nt.then(function(gt){(z._status===0||z._status===-1)&&(z._status=1,z._result=gt)},function(gt){(z._status===0||z._status===-1)&&(z._status=2,z._result=gt)}),z._status===-1&&(z._status=0,z._result=nt)}if(z._status===1)return z._result.default;throw z._result}var mt=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},dt={map:B,forEach:function(z,nt,gt){B(z,function(){nt.apply(this,arguments)},gt)},count:function(z){var nt=0;return B(z,function(){nt++}),nt},toArray:function(z){return B(z,function(nt){return nt})||[]},only:function(z){if(!G(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return ce.Activity=_,ce.Children=dt,ce.Component=v,ce.Fragment=i,ce.Profiler=l,ce.PureComponent=R,ce.StrictMode=s,ce.Suspense=m,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,ce.__COMPILER_RUNTIME={__proto__:null,c:function(z){return N.H.useMemoCache(z)}},ce.cache=function(z){return function(){return z.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(z,nt,gt){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Et=E({},z.props),Nt=z.key;if(nt!=null)for(at in nt.key!==void 0&&(Nt=""+nt.key),nt)!H.call(nt,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&nt.ref===void 0||(Et[at]=nt[at]);var at=arguments.length-2;if(at===1)Et.children=gt;else if(1<at){for(var ft=Array(at),Rt=0;Rt<at;Rt++)ft[Rt]=arguments[Rt+2];Et.children=ft}return A(z.type,Nt,Et)},ce.createContext=function(z){return z={$$typeof:f,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},ce.createElement=function(z,nt,gt){var Et,Nt={},at=null;if(nt!=null)for(Et in nt.key!==void 0&&(at=""+nt.key),nt)H.call(nt,Et)&&Et!=="key"&&Et!=="__self"&&Et!=="__source"&&(Nt[Et]=nt[Et]);var ft=arguments.length-2;if(ft===1)Nt.children=gt;else if(1<ft){for(var Rt=Array(ft),Gt=0;Gt<ft;Gt++)Rt[Gt]=arguments[Gt+2];Nt.children=Rt}if(z&&z.defaultProps)for(Et in ft=z.defaultProps,ft)Nt[Et]===void 0&&(Nt[Et]=ft[Et]);return A(z,at,Nt)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(z){return{$$typeof:h,render:z}},ce.isValidElement=G,ce.lazy=function(z){return{$$typeof:g,_payload:{_status:-1,_result:z},_init:Z}},ce.memo=function(z,nt){return{$$typeof:p,type:z,compare:nt===void 0?null:nt}},ce.startTransition=function(z){var nt=N.T,gt={};N.T=gt;try{var Et=z(),Nt=N.S;Nt!==null&&Nt(gt,Et),typeof Et=="object"&&Et!==null&&typeof Et.then=="function"&&Et.then(O,mt)}catch(at){mt(at)}finally{nt!==null&&gt.types!==null&&(nt.types=gt.types),N.T=nt}},ce.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},ce.use=function(z){return N.H.use(z)},ce.useActionState=function(z,nt,gt){return N.H.useActionState(z,nt,gt)},ce.useCallback=function(z,nt){return N.H.useCallback(z,nt)},ce.useContext=function(z){return N.H.useContext(z)},ce.useDebugValue=function(){},ce.useDeferredValue=function(z,nt){return N.H.useDeferredValue(z,nt)},ce.useEffect=function(z,nt){return N.H.useEffect(z,nt)},ce.useEffectEvent=function(z){return N.H.useEffectEvent(z)},ce.useId=function(){return N.H.useId()},ce.useImperativeHandle=function(z,nt,gt){return N.H.useImperativeHandle(z,nt,gt)},ce.useInsertionEffect=function(z,nt){return N.H.useInsertionEffect(z,nt)},ce.useLayoutEffect=function(z,nt){return N.H.useLayoutEffect(z,nt)},ce.useMemo=function(z,nt){return N.H.useMemo(z,nt)},ce.useOptimistic=function(z,nt){return N.H.useOptimistic(z,nt)},ce.useReducer=function(z,nt,gt){return N.H.useReducer(z,nt,gt)},ce.useRef=function(z){return N.H.useRef(z)},ce.useState=function(z){return N.H.useState(z)},ce.useSyncExternalStore=function(z,nt,gt){return N.H.useSyncExternalStore(z,nt,gt)},ce.useTransition=function(){return N.H.useTransition()},ce.version="19.2.3",ce}var s_;function tp(){return s_||(s_=1,Mh.exports=SM()),Mh.exports}var Sh={exports:{}},Bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function bM(){if(r_)return Bn;r_=1;var r=tp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Bn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Bn.flushSync=function(m){var p=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=g,s.d.f()}},Bn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Bn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Bn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:y}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Bn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Bn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Bn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Bn.requestFormReset=function(m){s.d.r(m)},Bn.unstable_batchedUpdates=function(m,p){return m(p)},Bn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Bn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Bn.version="19.2.3",Bn}var o_;function EM(){if(o_)return Sh.exports;o_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Sh.exports=bM(),Sh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_;function TM(){if(l_)return Zo;l_=1;var r=MM(),t=tp(),i=EM();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),e;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var S=!1,U=u.child;U;){if(U===a){S=!0,a=u,o=d;break}if(U===o){S=!0,o=u,a=d;break}U=U.sibling}if(!S){for(U=d.child;U;){if(U===a){S=!0,a=d,o=u;break}if(U===o){S=!0,o=d,a=u;break}U=U.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),R=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Symbol.for("react.client.reference");function et(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Y?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case P:return"Suspense";case O:return"SuspenseList";case A:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case R:return e.displayName||"Context";case C:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case N:return n=e.displayName||null,n!==null?n:et(e.type)||"Memo";case H:n=e._payload,e=e._init;try{return et(e(n))}catch{}}return null}var it=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},mt=[],dt=-1;function z(e){return{current:e}}function nt(e){0>dt||(e.current=mt[dt],mt[dt]=null,dt--)}function gt(e,n){dt++,mt[dt]=e.current,e.current=n}var Et=z(null),Nt=z(null),at=z(null),ft=z(null);function Rt(e,n){switch(gt(at,n),gt(Nt,e),gt(Et,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?bg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=bg(n),e=Eg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nt(Et),gt(Et,e)}function Gt(){nt(Et),nt(Nt),nt(at)}function Pt(e){e.memoizedState!==null&&gt(ft,e);var n=Et.current,a=Eg(n,e.type);n!==a&&(gt(Nt,e),gt(Et,a))}function _e(e){Nt.current===e&&(nt(Et),nt(Nt)),ft.current===e&&(nt(ft),Xo._currentValue=Z)}var Ke,ue;function re(e){if(Ke===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ke=n&&n[1]||"",ue=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ke+e+ue}var ye=!1;function ne(e,n){if(!e||ye)return"";ye=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(ut){var lt=ut}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(ut){lt=ut}e.call(xt.prototype)}}else{try{throw Error()}catch(ut){lt=ut}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(ut){if(ut&&lt&&typeof ut.stack=="string")return[ut.stack,lt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),S=d[0],U=d[1];if(S&&U){var k=S.split(`
`),rt=U.split(`
`);for(u=o=0;o<k.length&&!k[o].includes("DetermineComponentFrameRoot");)o++;for(;u<rt.length&&!rt[u].includes("DetermineComponentFrameRoot");)u++;if(o===k.length||u===rt.length)for(o=k.length-1,u=rt.length-1;1<=o&&0<=u&&k[o]!==rt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(k[o]!==rt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||k[o]!==rt[u]){var pt=`
`+k[o].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=o&&0<=u);break}}}finally{ye=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?re(a):""}function Xe(e,n){switch(e.tag){case 26:case 27:case 5:return re(e.type);case 16:return re("Lazy");case 13:return e.child!==n&&n!==null?re("Suspense Fallback"):re("Suspense");case 19:return re("SuspenseList");case 0:case 15:return ne(e.type,!1);case 11:return ne(e.type.render,!1);case 1:return ne(e.type,!0);case 31:return re("Activity");default:return""}}function j(e){try{var n="",a=null;do n+=Xe(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ae=Object.prototype.hasOwnProperty,Re=r.unstable_scheduleCallback,Ie=r.unstable_cancelCallback,Yt=r.unstable_shouldYield,F=r.unstable_requestPaint,T=r.unstable_now,Q=r.unstable_getCurrentPriorityLevel,_t=r.unstable_ImmediatePriority,Mt=r.unstable_UserBlockingPriority,ht=r.unstable_NormalPriority,Kt=r.unstable_LowPriority,Ct=r.unstable_IdlePriority,jt=r.log,ie=r.unstable_setDisableYieldValue,bt=null,Tt=null;function Ht(e){if(typeof jt=="function"&&ie(e),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(bt,e)}catch{}}var Ft=Math.clz32?Math.clz32:K,Dt=Math.log,de=Math.LN2;function K(e){return e>>>=0,e===0?32:31-(Dt(e)/de|0)|0}var Lt=256,At=262144,Bt=4194304;function St(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function yt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var U=o&134217727;return U!==0?(o=U&~d,o!==0?u=St(o):(S&=U,S!==0?u=St(S):a||(a=U&~e,a!==0&&(u=St(a))))):(U=o&~d,U!==0?u=St(U):S!==0?u=St(S):a||(a=o&~e,a!==0&&(u=St(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function wt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function se(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Be(){var e=Bt;return Bt<<=1,(Bt&62914560)===0&&(Bt=4194304),e}function we(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Fn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function wi(e,n,a,o,u,d){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var U=e.entanglements,k=e.expirationTimes,rt=e.hiddenUpdates;for(a=S&~a;0<a;){var pt=31-Ft(a),xt=1<<pt;U[pt]=0,k[pt]=-1;var lt=rt[pt];if(lt!==null)for(rt[pt]=null,pt=0;pt<lt.length;pt++){var ut=lt[pt];ut!==null&&(ut.lane&=-536870913)}a&=~xt}o!==0&&pl(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(S&~n))}function pl(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ft(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function eo(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ft(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Ys(e,n){var a=n&-n;return a=(a&42)!==0?1:no(a),(a&(e.suspendedLanes|n))!==0?0:a}function no(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Zs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function io(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:qg(e.type))}function Hi(e,n){var a=B.p;try{return B.p=e,n()}finally{B.p=a}}var mi=Math.random().toString(36).slice(2),dn="__reactFiber$"+mi,An="__reactProps$"+mi,Ci="__reactContainer$"+mi,Ks="__reactEvents$"+mi,Qs="__reactListeners$"+mi,ml="__reactHandles$"+mi,ao="__reactResources$"+mi,_s="__reactMarker$"+mi;function so(e){delete e[dn],delete e[An],delete e[Ks],delete e[Qs],delete e[ml]}function Pa(e){var n=e[dn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ci]||a[dn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Ng(e);e!==null;){if(a=e[dn])return a;e=Ng(e)}return n}e=a,a=e.parentNode}return null}function Oa(e){if(e=e[dn]||e[Ci]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function vs(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function za(e){var n=e[ao];return n||(n=e[ao]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function L(e){e[_s]=!0}var J=new Set,ct={};function ot(e,n){tt(e,n),tt(e+"Capture",n)}function tt(e,n){for(ct[e]=n,e=0;e<n.length;e++)J.add(n[e])}var Ut=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vt={},Ot={};function kt(e){return Ae.call(Ot,e)?!0:Ae.call(Vt,e)?!1:Ut.test(e)?Ot[e]=!0:(Vt[e]=!0,!1)}function Wt(e,n,a){if(kt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function $t(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function qt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function te(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function nn(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,d.call(this,S)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Je(e){if(!e._valueTracker){var n=Pe(e)?"checked":"value";e._valueTracker=nn(e,n,""+e[n])}}function Fe(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Pe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Qt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Oe=/[\n"\\]/g;function oe(e){return e.replace(Oe,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Rn(e,n,a,o,u,d,S,U){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+te(n)):e.value!==""+te(n)&&(e.value=""+te(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?wn(e,S,te(n)):a!=null?wn(e,S,te(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),U!=null&&typeof U!="function"&&typeof U!="symbol"&&typeof U!="boolean"?e.name=""+te(U):e.removeAttribute("name")}function aa(e,n,a,o,u,d,S,U){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Je(e);return}a=a!=null?""+te(a):"",n=n!=null?""+te(n):a,U||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=U?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Je(e)}function wn(e,n,a){n==="number"&&Qt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function gi(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+te(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function He(e,n,a){if(n!=null&&(n=""+te(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+te(a):""}function Cn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(it(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=te(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Je(e)}function xn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Dn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Dn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Js(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Nn(e,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Nn(e,d,n[d])}function Di(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),px=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gl(e){return px.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function sa(){}var du=null;function pu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $s=null,tr=null;function Sp(e){var n=Oa(e);if(n&&(e=n.stateNode)){var a=e[An]||null;t:switch(e=n.stateNode,n.type){case"input":if(Rn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+oe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[An]||null;if(!u)throw Error(s(90));Rn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Fe(o)}break t;case"textarea":He(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&gi(e,!!a.multiple,n,!1)}}}var mu=!1;function bp(e,n,a){if(mu)return e(n,a);mu=!0;try{var o=e(n);return o}finally{if(mu=!1,($s!==null||tr!==null)&&(ic(),$s&&(n=$s,e=tr,tr=$s=null,Sp(n),e)))for(n=0;n<e.length;n++)Sp(e[n])}}function ro(e,n){var a=e.stateNode;if(a===null)return null;var o=a[An]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ra=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gu=!1;if(ra)try{var oo={};Object.defineProperty(oo,"passive",{get:function(){gu=!0}}),window.addEventListener("test",oo,oo),window.removeEventListener("test",oo,oo)}catch{gu=!1}var Ia=null,_u=null,_l=null;function Ep(){if(_l)return _l;var e,n=_u,a=n.length,o,u="value"in Ia?Ia.value:Ia.textContent,d=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[d-o];o++);return _l=u.slice(e,1<o?1-o:void 0)}function vl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function xl(){return!0}function Tp(){return!1}function qn(e){function n(a,o,u,d,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var U in e)e.hasOwnProperty(U)&&(a=e[U],this[U]=a?a(d):d[U]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?xl:Tp,this.isPropagationStopped=Tp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),n}var xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=qn(xs),lo=_({},xs,{view:0,detail:0}),mx=qn(lo),vu,xu,co,Ml=_({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==co&&(co&&e.type==="mousemove"?(vu=e.screenX-co.screenX,xu=e.screenY-co.screenY):xu=vu=0,co=e),vu)},movementY:function(e){return"movementY"in e?e.movementY:xu}}),Ap=qn(Ml),gx=_({},Ml,{dataTransfer:0}),_x=qn(gx),vx=_({},lo,{relatedTarget:0}),yu=qn(vx),xx=_({},xs,{animationName:0,elapsedTime:0,pseudoElement:0}),yx=qn(xx),Mx=_({},xs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sx=qn(Mx),bx=_({},xs,{data:0}),Rp=qn(bx),Ex={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ax={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ax[e])?!!n[e]:!1}function Mu(){return Rx}var wx=_({},lo,{key:function(e){if(e.key){var n=Ex[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=vl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mu,charCode:function(e){return e.type==="keypress"?vl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cx=qn(wx),Dx=_({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wp=qn(Dx),Nx=_({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mu}),Ux=qn(Nx),Lx=_({},xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Px=qn(Lx),Ox=_({},Ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zx=qn(Ox),Ix=_({},xs,{newState:0,oldState:0}),Fx=qn(Ix),Bx=[9,13,27,32],Su=ra&&"CompositionEvent"in window,uo=null;ra&&"documentMode"in document&&(uo=document.documentMode);var Hx=ra&&"TextEvent"in window&&!uo,Cp=ra&&(!Su||uo&&8<uo&&11>=uo),Dp=" ",Np=!1;function Up(e,n){switch(e){case"keyup":return Bx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var er=!1;function Gx(e,n){switch(e){case"compositionend":return Lp(n);case"keypress":return n.which!==32?null:(Np=!0,Dp);case"textInput":return e=n.data,e===Dp&&Np?null:e;default:return null}}function Vx(e,n){if(er)return e==="compositionend"||!Su&&Up(e,n)?(e=Ep(),_l=_u=Ia=null,er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Cp&&n.locale!=="ko"?null:n.data;default:return null}}var kx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!kx[e.type]:n==="textarea"}function Op(e,n,a,o){$s?tr?tr.push(o):tr=[o]:$s=o,n=uc(n,"onChange"),0<n.length&&(a=new yl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var fo=null,ho=null;function Xx(e){_g(e,0)}function Sl(e){var n=vs(e);if(Fe(n))return e}function zp(e,n){if(e==="change")return n}var Ip=!1;if(ra){var bu;if(ra){var Eu="oninput"in document;if(!Eu){var Fp=document.createElement("div");Fp.setAttribute("oninput","return;"),Eu=typeof Fp.oninput=="function"}bu=Eu}else bu=!1;Ip=bu&&(!document.documentMode||9<document.documentMode)}function Bp(){fo&&(fo.detachEvent("onpropertychange",Hp),ho=fo=null)}function Hp(e){if(e.propertyName==="value"&&Sl(ho)){var n=[];Op(n,ho,e,pu(e)),bp(Xx,n)}}function jx(e,n,a){e==="focusin"?(Bp(),fo=n,ho=a,fo.attachEvent("onpropertychange",Hp)):e==="focusout"&&Bp()}function Wx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sl(ho)}function qx(e,n){if(e==="click")return Sl(n)}function Yx(e,n){if(e==="input"||e==="change")return Sl(n)}function Zx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ii=typeof Object.is=="function"?Object.is:Zx;function po(e,n){if(ii(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ae.call(n,u)||!ii(e[u],n[u]))return!1}return!0}function Gp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vp(e,n){var a=Gp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Gp(a)}}function kp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?kp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Xp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Qt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Qt(e.document)}return n}function Tu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Kx=ra&&"documentMode"in document&&11>=document.documentMode,nr=null,Au=null,mo=null,Ru=!1;function jp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ru||nr==null||nr!==Qt(o)||(o=nr,"selectionStart"in o&&Tu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),mo&&po(mo,o)||(mo=o,o=uc(Au,"onSelect"),0<o.length&&(n=new yl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=nr)))}function ys(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var ir={animationend:ys("Animation","AnimationEnd"),animationiteration:ys("Animation","AnimationIteration"),animationstart:ys("Animation","AnimationStart"),transitionrun:ys("Transition","TransitionRun"),transitionstart:ys("Transition","TransitionStart"),transitioncancel:ys("Transition","TransitionCancel"),transitionend:ys("Transition","TransitionEnd")},wu={},Wp={};ra&&(Wp=document.createElement("div").style,"AnimationEvent"in window||(delete ir.animationend.animation,delete ir.animationiteration.animation,delete ir.animationstart.animation),"TransitionEvent"in window||delete ir.transitionend.transition);function Ms(e){if(wu[e])return wu[e];if(!ir[e])return e;var n=ir[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Wp)return wu[e]=n[a];return e}var qp=Ms("animationend"),Yp=Ms("animationiteration"),Zp=Ms("animationstart"),Qx=Ms("transitionrun"),Jx=Ms("transitionstart"),$x=Ms("transitioncancel"),Kp=Ms("transitionend"),Qp=new Map,Cu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cu.push("scrollEnd");function Ni(e,n){Qp.set(e,n),ot(n,[e])}var bl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},_i=[],ar=0,Du=0;function El(){for(var e=ar,n=Du=ar=0;n<e;){var a=_i[n];_i[n++]=null;var o=_i[n];_i[n++]=null;var u=_i[n];_i[n++]=null;var d=_i[n];if(_i[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}d!==0&&Jp(a,u,d)}}function Tl(e,n,a,o){_i[ar++]=e,_i[ar++]=n,_i[ar++]=a,_i[ar++]=o,Du|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Nu(e,n,a,o){return Tl(e,n,a,o),Al(e)}function Ss(e,n){return Tl(e,null,null,n),Al(e)}function Jp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-Ft(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Al(e){if(50<Io)throw Io=0,Gf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var sr={};function ty(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(e,n,a,o){return new ty(e,n,a,o)}function Uu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oa(e,n){var a=e.alternate;return a===null?(a=ai(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function $p(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Rl(e,n,a,o,u,d){var S=0;if(o=e,typeof e=="function")Uu(e)&&(S=1);else if(typeof e=="string")S=sM(e,a,Et.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case A:return e=ai(31,a,n,u),e.elementType=A,e.lanes=d,e;case E:return bs(a.children,u,d,n);case M:S=8,u|=24;break;case v:return e=ai(12,a,n,u|2),e.elementType=v,e.lanes=d,e;case P:return e=ai(13,a,n,u),e.elementType=P,e.lanes=d,e;case O:return e=ai(19,a,n,u),e.elementType=O,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case R:S=10;break t;case C:S=9;break t;case w:S=11;break t;case N:S=14;break t;case H:S=16,o=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ai(S,a,n,u),n.elementType=e,n.type=o,n.lanes=d,n}function bs(e,n,a,o){return e=ai(7,e,o,n),e.lanes=a,e}function Lu(e,n,a){return e=ai(6,e,null,n),e.lanes=a,e}function tm(e){var n=ai(18,null,null,0);return n.stateNode=e,n}function Pu(e,n,a){return n=ai(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var em=new WeakMap;function vi(e,n){if(typeof e=="object"&&e!==null){var a=em.get(e);return a!==void 0?a:(n={value:e,source:n,stack:j(n)},em.set(e,n),n)}return{value:e,source:n,stack:j(n)}}var rr=[],or=0,wl=null,go=0,xi=[],yi=0,Fa=null,Gi=1,Vi="";function la(e,n){rr[or++]=go,rr[or++]=wl,wl=e,go=n}function nm(e,n,a){xi[yi++]=Gi,xi[yi++]=Vi,xi[yi++]=Fa,Fa=e;var o=Gi;e=Vi;var u=32-Ft(o)-1;o&=~(1<<u),a+=1;var d=32-Ft(n)+u;if(30<d){var S=u-u%5;d=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Gi=1<<32-Ft(n)+u|a<<u|o,Vi=d+e}else Gi=1<<d|a<<u|o,Vi=e}function Ou(e){e.return!==null&&(la(e,1),nm(e,1,0))}function zu(e){for(;e===wl;)wl=rr[--or],rr[or]=null,go=rr[--or],rr[or]=null;for(;e===Fa;)Fa=xi[--yi],xi[yi]=null,Vi=xi[--yi],xi[yi]=null,Gi=xi[--yi],xi[yi]=null}function im(e,n){xi[yi++]=Gi,xi[yi++]=Vi,xi[yi++]=Fa,Gi=n.id,Vi=n.overflow,Fa=e}var Un=null,$e=null,Te=!1,Ba=null,Mi=!1,Iu=Error(s(519));function Ha(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw _o(vi(n,e)),Iu}function am(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[dn]=e,n[An]=o,a){case"dialog":Se("cancel",n),Se("close",n);break;case"iframe":case"object":case"embed":Se("load",n);break;case"video":case"audio":for(a=0;a<Bo.length;a++)Se(Bo[a],n);break;case"source":Se("error",n);break;case"img":case"image":case"link":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"input":Se("invalid",n),aa(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Se("invalid",n);break;case"textarea":Se("invalid",n),Cn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Mg(n.textContent,a)?(o.popover!=null&&(Se("beforetoggle",n),Se("toggle",n)),o.onScroll!=null&&Se("scroll",n),o.onScrollEnd!=null&&Se("scrollend",n),o.onClick!=null&&(n.onclick=sa),n=!0):n=!1,n||Ha(e,!0)}function sm(e){for(Un=e.return;Un;)switch(Un.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Un=Un.return}}function lr(e){if(e!==Un)return!1;if(!Te)return sm(e),Te=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||nh(e.type,e.memoizedProps)),a=!a),a&&$e&&Ha(e),sm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));$e=Dg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));$e=Dg(e)}else n===27?(n=$e,ts(e.type)?(e=oh,oh=null,$e=e):$e=n):$e=Un?bi(e.stateNode.nextSibling):null;return!0}function Es(){$e=Un=null,Te=!1}function Fu(){var e=Ba;return e!==null&&(Qn===null?Qn=e:Qn.push.apply(Qn,e),Ba=null),e}function _o(e){Ba===null?Ba=[e]:Ba.push(e)}var Bu=z(null),Ts=null,ca=null;function Ga(e,n,a){gt(Bu,n._currentValue),n._currentValue=a}function ua(e){e._currentValue=Bu.current,nt(Bu)}function Hu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Gu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var S=u.child;d=d.firstContext;t:for(;d!==null;){var U=d;d=u;for(var k=0;k<n.length;k++)if(U.context===n[k]){d.lanes|=a,U=d.alternate,U!==null&&(U.lanes|=a),Hu(d.return,a,e),o||(S=null);break t}d=U.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,d=S.alternate,d!==null&&(d.lanes|=a),Hu(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function cr(e,n,a,o){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var U=u.type;ii(u.pendingProps.value,S.value)||(e!==null?e.push(U):e=[U])}}else if(u===ft.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Xo):e=[Xo])}u=u.return}e!==null&&Gu(n,e,a,o),n.flags|=262144}function Cl(e){for(e=e.firstContext;e!==null;){if(!ii(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function As(e){Ts=e,ca=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ln(e){return rm(Ts,e)}function Dl(e,n){return Ts===null&&As(e),rm(e,n)}function rm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ca===null){if(e===null)throw Error(s(308));ca=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ca=ca.next=n;return a}var ey=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},ny=r.unstable_scheduleCallback,iy=r.unstable_NormalPriority,pn={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vu(){return{controller:new ey,data:new Map,refCount:0}}function vo(e){e.refCount--,e.refCount===0&&ny(iy,function(){e.controller.abort()})}var xo=null,ku=0,ur=0,fr=null;function ay(e,n){if(xo===null){var a=xo=[];ku=0,ur=qf(),fr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return ku++,n.then(om,om),n}function om(){if(--ku===0&&xo!==null){fr!==null&&(fr.status="fulfilled");var e=xo;xo=null,ur=0,fr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function sy(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var lm=I.S;I.S=function(e,n){j0=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ay(e,n),lm!==null&&lm(e,n)};var Rs=z(null);function Xu(){var e=Rs.current;return e!==null?e:Qe.pooledCache}function Nl(e,n){n===null?gt(Rs,Rs.current):gt(Rs,n.pool)}function cm(){var e=Xu();return e===null?null:{parent:pn._currentValue,pool:e}}var hr=Error(s(460)),ju=Error(s(474)),Ul=Error(s(542)),Ll={then:function(){}};function um(e){return e=e.status,e==="fulfilled"||e==="rejected"}function fm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(sa,sa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,dm(e),e;default:if(typeof n.status=="string")n.then(sa,sa);else{if(e=Qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,dm(e),e}throw Cs=n,hr}}function ws(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Cs=a,hr):a}}var Cs=null;function hm(){if(Cs===null)throw Error(s(459));var e=Cs;return Cs=null,e}function dm(e){if(e===hr||e===Ul)throw Error(s(483))}var dr=null,yo=0;function Pl(e){var n=yo;return yo+=1,dr===null&&(dr=[]),fm(dr,e,n)}function Mo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ol(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function pm(e){function n($,W){if(e){var st=$.deletions;st===null?($.deletions=[W],$.flags|=16):st.push(W)}}function a($,W){if(!e)return null;for(;W!==null;)n($,W),W=W.sibling;return null}function o($){for(var W=new Map;$!==null;)$.key!==null?W.set($.key,$):W.set($.index,$),$=$.sibling;return W}function u($,W){return $=oa($,W),$.index=0,$.sibling=null,$}function d($,W,st){return $.index=st,e?(st=$.alternate,st!==null?(st=st.index,st<W?($.flags|=67108866,W):st):($.flags|=67108866,W)):($.flags|=1048576,W)}function S($){return e&&$.alternate===null&&($.flags|=67108866),$}function U($,W,st,vt){return W===null||W.tag!==6?(W=Lu(st,$.mode,vt),W.return=$,W):(W=u(W,st),W.return=$,W)}function k($,W,st,vt){var Jt=st.type;return Jt===E?pt($,W,st.props.children,vt,st.key):W!==null&&(W.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===H&&ws(Jt)===W.type)?(W=u(W,st.props),Mo(W,st),W.return=$,W):(W=Rl(st.type,st.key,st.props,null,$.mode,vt),Mo(W,st),W.return=$,W)}function rt($,W,st,vt){return W===null||W.tag!==4||W.stateNode.containerInfo!==st.containerInfo||W.stateNode.implementation!==st.implementation?(W=Pu(st,$.mode,vt),W.return=$,W):(W=u(W,st.children||[]),W.return=$,W)}function pt($,W,st,vt,Jt){return W===null||W.tag!==7?(W=bs(st,$.mode,vt,Jt),W.return=$,W):(W=u(W,st),W.return=$,W)}function xt($,W,st){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Lu(""+W,$.mode,st),W.return=$,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case y:return st=Rl(W.type,W.key,W.props,null,$.mode,st),Mo(st,W),st.return=$,st;case b:return W=Pu(W,$.mode,st),W.return=$,W;case H:return W=ws(W),xt($,W,st)}if(it(W)||q(W))return W=bs(W,$.mode,st,null),W.return=$,W;if(typeof W.then=="function")return xt($,Pl(W),st);if(W.$$typeof===R)return xt($,Dl($,W),st);Ol($,W)}return null}function lt($,W,st,vt){var Jt=W!==null?W.key:null;if(typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint")return Jt!==null?null:U($,W,""+st,vt);if(typeof st=="object"&&st!==null){switch(st.$$typeof){case y:return st.key===Jt?k($,W,st,vt):null;case b:return st.key===Jt?rt($,W,st,vt):null;case H:return st=ws(st),lt($,W,st,vt)}if(it(st)||q(st))return Jt!==null?null:pt($,W,st,vt,null);if(typeof st.then=="function")return lt($,W,Pl(st),vt);if(st.$$typeof===R)return lt($,W,Dl($,st),vt);Ol($,st)}return null}function ut($,W,st,vt,Jt){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return $=$.get(st)||null,U(W,$,""+vt,Jt);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case y:return $=$.get(vt.key===null?st:vt.key)||null,k(W,$,vt,Jt);case b:return $=$.get(vt.key===null?st:vt.key)||null,rt(W,$,vt,Jt);case H:return vt=ws(vt),ut($,W,st,vt,Jt)}if(it(vt)||q(vt))return $=$.get(st)||null,pt(W,$,vt,Jt,null);if(typeof vt.then=="function")return ut($,W,st,Pl(vt),Jt);if(vt.$$typeof===R)return ut($,W,st,Dl(W,vt),Jt);Ol(W,vt)}return null}function Xt($,W,st,vt){for(var Jt=null,Ne=null,Zt=W,pe=W=0,Ee=null;Zt!==null&&pe<st.length;pe++){Zt.index>pe?(Ee=Zt,Zt=null):Ee=Zt.sibling;var Ue=lt($,Zt,st[pe],vt);if(Ue===null){Zt===null&&(Zt=Ee);break}e&&Zt&&Ue.alternate===null&&n($,Zt),W=d(Ue,W,pe),Ne===null?Jt=Ue:Ne.sibling=Ue,Ne=Ue,Zt=Ee}if(pe===st.length)return a($,Zt),Te&&la($,pe),Jt;if(Zt===null){for(;pe<st.length;pe++)Zt=xt($,st[pe],vt),Zt!==null&&(W=d(Zt,W,pe),Ne===null?Jt=Zt:Ne.sibling=Zt,Ne=Zt);return Te&&la($,pe),Jt}for(Zt=o(Zt);pe<st.length;pe++)Ee=ut(Zt,$,pe,st[pe],vt),Ee!==null&&(e&&Ee.alternate!==null&&Zt.delete(Ee.key===null?pe:Ee.key),W=d(Ee,W,pe),Ne===null?Jt=Ee:Ne.sibling=Ee,Ne=Ee);return e&&Zt.forEach(function(ss){return n($,ss)}),Te&&la($,pe),Jt}function ee($,W,st,vt){if(st==null)throw Error(s(151));for(var Jt=null,Ne=null,Zt=W,pe=W=0,Ee=null,Ue=st.next();Zt!==null&&!Ue.done;pe++,Ue=st.next()){Zt.index>pe?(Ee=Zt,Zt=null):Ee=Zt.sibling;var ss=lt($,Zt,Ue.value,vt);if(ss===null){Zt===null&&(Zt=Ee);break}e&&Zt&&ss.alternate===null&&n($,Zt),W=d(ss,W,pe),Ne===null?Jt=ss:Ne.sibling=ss,Ne=ss,Zt=Ee}if(Ue.done)return a($,Zt),Te&&la($,pe),Jt;if(Zt===null){for(;!Ue.done;pe++,Ue=st.next())Ue=xt($,Ue.value,vt),Ue!==null&&(W=d(Ue,W,pe),Ne===null?Jt=Ue:Ne.sibling=Ue,Ne=Ue);return Te&&la($,pe),Jt}for(Zt=o(Zt);!Ue.done;pe++,Ue=st.next())Ue=ut(Zt,$,pe,Ue.value,vt),Ue!==null&&(e&&Ue.alternate!==null&&Zt.delete(Ue.key===null?pe:Ue.key),W=d(Ue,W,pe),Ne===null?Jt=Ue:Ne.sibling=Ue,Ne=Ue);return e&&Zt.forEach(function(gM){return n($,gM)}),Te&&la($,pe),Jt}function qe($,W,st,vt){if(typeof st=="object"&&st!==null&&st.type===E&&st.key===null&&(st=st.props.children),typeof st=="object"&&st!==null){switch(st.$$typeof){case y:t:{for(var Jt=st.key;W!==null;){if(W.key===Jt){if(Jt=st.type,Jt===E){if(W.tag===7){a($,W.sibling),vt=u(W,st.props.children),vt.return=$,$=vt;break t}}else if(W.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===H&&ws(Jt)===W.type){a($,W.sibling),vt=u(W,st.props),Mo(vt,st),vt.return=$,$=vt;break t}a($,W);break}else n($,W);W=W.sibling}st.type===E?(vt=bs(st.props.children,$.mode,vt,st.key),vt.return=$,$=vt):(vt=Rl(st.type,st.key,st.props,null,$.mode,vt),Mo(vt,st),vt.return=$,$=vt)}return S($);case b:t:{for(Jt=st.key;W!==null;){if(W.key===Jt)if(W.tag===4&&W.stateNode.containerInfo===st.containerInfo&&W.stateNode.implementation===st.implementation){a($,W.sibling),vt=u(W,st.children||[]),vt.return=$,$=vt;break t}else{a($,W);break}else n($,W);W=W.sibling}vt=Pu(st,$.mode,vt),vt.return=$,$=vt}return S($);case H:return st=ws(st),qe($,W,st,vt)}if(it(st))return Xt($,W,st,vt);if(q(st)){if(Jt=q(st),typeof Jt!="function")throw Error(s(150));return st=Jt.call(st),ee($,W,st,vt)}if(typeof st.then=="function")return qe($,W,Pl(st),vt);if(st.$$typeof===R)return qe($,W,Dl($,st),vt);Ol($,st)}return typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint"?(st=""+st,W!==null&&W.tag===6?(a($,W.sibling),vt=u(W,st),vt.return=$,$=vt):(a($,W),vt=Lu(st,$.mode,vt),vt.return=$,$=vt),S($)):a($,W)}return function($,W,st,vt){try{yo=0;var Jt=qe($,W,st,vt);return dr=null,Jt}catch(Zt){if(Zt===hr||Zt===Ul)throw Zt;var Ne=ai(29,Zt,null,$.mode);return Ne.lanes=vt,Ne.return=$,Ne}finally{}}}var Ds=pm(!0),mm=pm(!1),Va=!1;function Wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ka(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ze&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Al(e),Jp(e,null,a),n}return Tl(e,o,n,a),Al(e)}function So(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,eo(e,a)}}function Yu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=S:d=d.next=S,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Zu=!1;function bo(){if(Zu){var e=fr;if(e!==null)throw e}}function Eo(e,n,a,o){Zu=!1;var u=e.updateQueue;Va=!1;var d=u.firstBaseUpdate,S=u.lastBaseUpdate,U=u.shared.pending;if(U!==null){u.shared.pending=null;var k=U,rt=k.next;k.next=null,S===null?d=rt:S.next=rt,S=k;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,U=pt.lastBaseUpdate,U!==S&&(U===null?pt.firstBaseUpdate=rt:U.next=rt,pt.lastBaseUpdate=k))}if(d!==null){var xt=u.baseState;S=0,pt=rt=k=null,U=d;do{var lt=U.lane&-536870913,ut=lt!==U.lane;if(ut?(be&lt)===lt:(o&lt)===lt){lt!==0&&lt===ur&&(Zu=!0),pt!==null&&(pt=pt.next={lane:0,tag:U.tag,payload:U.payload,callback:null,next:null});t:{var Xt=e,ee=U;lt=n;var qe=a;switch(ee.tag){case 1:if(Xt=ee.payload,typeof Xt=="function"){xt=Xt.call(qe,xt,lt);break t}xt=Xt;break t;case 3:Xt.flags=Xt.flags&-65537|128;case 0:if(Xt=ee.payload,lt=typeof Xt=="function"?Xt.call(qe,xt,lt):Xt,lt==null)break t;xt=_({},xt,lt);break t;case 2:Va=!0}}lt=U.callback,lt!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=u.callbacks,ut===null?u.callbacks=[lt]:ut.push(lt))}else ut={lane:lt,tag:U.tag,payload:U.payload,callback:U.callback,next:null},pt===null?(rt=pt=ut,k=xt):pt=pt.next=ut,S|=lt;if(U=U.next,U===null){if(U=u.shared.pending,U===null)break;ut=U,U=ut.next,ut.next=null,u.lastBaseUpdate=ut,u.shared.pending=null}}while(!0);pt===null&&(k=xt),u.baseState=k,u.firstBaseUpdate=rt,u.lastBaseUpdate=pt,d===null&&(u.shared.lanes=0),Za|=S,e.lanes=S,e.memoizedState=xt}}function gm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function _m(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)gm(a[e],n)}var pr=z(null),zl=z(0);function vm(e,n){e=xa,gt(zl,e),gt(pr,n),xa=e|n.baseLanes}function Ku(){gt(zl,xa),gt(pr,pr.current)}function Qu(){xa=zl.current,nt(pr),nt(zl)}var si=z(null),Si=null;function ja(e){var n=e.alternate;gt(fn,fn.current&1),gt(si,e),Si===null&&(n===null||pr.current!==null||n.memoizedState!==null)&&(Si=e)}function Ju(e){gt(fn,fn.current),gt(si,e),Si===null&&(Si=e)}function xm(e){e.tag===22?(gt(fn,fn.current),gt(si,e),Si===null&&(Si=e)):Wa()}function Wa(){gt(fn,fn.current),gt(si,si.current)}function ri(e){nt(si),Si===e&&(Si=null),nt(fn)}var fn=z(0);function Il(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||sh(a)||rh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var fa=0,fe=null,je=null,mn=null,Fl=!1,mr=!1,Ns=!1,Bl=0,To=0,gr=null,ry=0;function on(){throw Error(s(321))}function $u(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ii(e[a],n[a]))return!1;return!0}function tf(e,n,a,o,u,d){return fa=d,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=e===null||e.memoizedState===null?n0:gf,Ns=!1,d=a(o,u),Ns=!1,mr&&(d=Mm(n,a,o,u)),ym(e),d}function ym(e){I.H=wo;var n=je!==null&&je.next!==null;if(fa=0,mn=je=fe=null,Fl=!1,To=0,gr=null,n)throw Error(s(300));e===null||gn||(e=e.dependencies,e!==null&&Cl(e)&&(gn=!0))}function Mm(e,n,a,o){fe=e;var u=0;do{if(mr&&(gr=null),To=0,mr=!1,25<=u)throw Error(s(301));if(u+=1,mn=je=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}I.H=i0,d=n(a,o)}while(mr);return d}function oy(){var e=I.H,n=e.useState()[0];return n=typeof n.then=="function"?Ao(n):n,e=e.useState()[0],(je!==null?je.memoizedState:null)!==e&&(fe.flags|=1024),n}function ef(){var e=Bl!==0;return Bl=0,e}function nf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function af(e){if(Fl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Fl=!1}fa=0,mn=je=fe=null,mr=!1,To=Bl=0,gr=null}function kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?fe.memoizedState=mn=e:mn=mn.next=e,mn}function hn(){if(je===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var n=mn===null?fe.memoizedState:mn.next;if(n!==null)mn=n,je=e;else{if(e===null)throw fe.alternate===null?Error(s(467)):Error(s(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},mn===null?fe.memoizedState=mn=e:mn=mn.next=e}return mn}function Hl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ao(e){var n=To;return To+=1,gr===null&&(gr=[]),e=fm(gr,e,n),n=fe,(mn===null?n.memoizedState:mn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?n0:gf),e}function Gl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ao(e);if(e.$$typeof===R)return Ln(e)}throw Error(s(438,String(e)))}function sf(e){var n=null,a=fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=fe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Hl(),fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=D;return n.index++,a}function ha(e,n){return typeof n=="function"?n(e):n}function Vl(e){var n=hn();return rf(n,je,e)}function rf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var S=u.next;u.next=d.next,d.next=S}n.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var U=S=null,k=null,rt=n,pt=!1;do{var xt=rt.lane&-536870913;if(xt!==rt.lane?(be&xt)===xt:(fa&xt)===xt){var lt=rt.revertLane;if(lt===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null}),xt===ur&&(pt=!0);else if((fa&lt)===lt){rt=rt.next,lt===ur&&(pt=!0);continue}else xt={lane:0,revertLane:rt.revertLane,gesture:null,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null},k===null?(U=k=xt,S=d):k=k.next=xt,fe.lanes|=lt,Za|=lt;xt=rt.action,Ns&&a(d,xt),d=rt.hasEagerState?rt.eagerState:a(d,xt)}else lt={lane:xt,revertLane:rt.revertLane,gesture:rt.gesture,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null},k===null?(U=k=lt,S=d):k=k.next=lt,fe.lanes|=xt,Za|=xt;rt=rt.next}while(rt!==null&&rt!==n);if(k===null?S=d:k.next=U,!ii(d,e.memoizedState)&&(gn=!0,pt&&(a=fr,a!==null)))throw a;e.memoizedState=d,e.baseState=S,e.baseQueue=k,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function of(e){var n=hn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do d=e(d,S.action),S=S.next;while(S!==u);ii(d,n.memoizedState)||(gn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Sm(e,n,a){var o=fe,u=hn(),d=Te;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!ii((je||u).memoizedState,a);if(S&&(u.memoizedState=a,gn=!0),u=u.queue,uf(Tm.bind(null,o,u,e),[e]),u.getSnapshot!==n||S||mn!==null&&mn.memoizedState.tag&1){if(o.flags|=2048,_r(9,{destroy:void 0},Em.bind(null,o,u,a,n),null),Qe===null)throw Error(s(349));d||(fa&127)!==0||bm(o,n,a)}return a}function bm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=fe.updateQueue,n===null?(n=Hl(),fe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Em(e,n,a,o){n.value=a,n.getSnapshot=o,Am(n)&&Rm(e)}function Tm(e,n,a){return a(function(){Am(n)&&Rm(e)})}function Am(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ii(e,a)}catch{return!0}}function Rm(e){var n=Ss(e,2);n!==null&&Jn(n,e,2)}function lf(e){var n=kn();if(typeof e=="function"){var a=e;if(e=a(),Ns){Ht(!0);try{a()}finally{Ht(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:e},n}function wm(e,n,a,o){return e.baseState=a,rf(e,je,typeof o=="function"?o:ha)}function ly(e,n,a,o,u){if(jl(e))throw Error(s(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};I.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Cm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Cm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var d=I.T,S={};I.T=S;try{var U=a(u,o),k=I.S;k!==null&&k(S,U),Dm(e,n,U)}catch(rt){cf(e,n,rt)}finally{d!==null&&S.types!==null&&(d.types=S.types),I.T=d}}else try{d=a(u,o),Dm(e,n,d)}catch(rt){cf(e,n,rt)}}function Dm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Nm(e,n,o)},function(o){return cf(e,n,o)}):Nm(e,n,a)}function Nm(e,n,a){n.status="fulfilled",n.value=a,Um(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Cm(e,a)))}function cf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Um(n),n=n.next;while(n!==o)}e.action=null}function Um(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Lm(e,n){return n}function Pm(e,n){if(Te){var a=Qe.formState;if(a!==null){t:{var o=fe;if(Te){if($e){e:{for(var u=$e,d=Mi;u.nodeType!==8;){if(!d){u=null;break e}if(u=bi(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){$e=bi(u.nextSibling),o=u.data==="F!";break t}}Ha(o)}o=!1}o&&(n=a[0])}}return a=kn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lm,lastRenderedState:n},a.queue=o,a=$m.bind(null,fe,o),o.dispatch=a,o=lf(!1),d=mf.bind(null,fe,!1,o.queue),o=kn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=ly.bind(null,fe,u,d,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Om(e){var n=hn();return zm(n,je,e)}function zm(e,n,a){if(n=rf(e,n,Lm)[0],e=Vl(ha)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Ao(n)}catch(S){throw S===hr?Ul:S}else o=n;n=hn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(fe.flags|=2048,_r(9,{destroy:void 0},cy.bind(null,u,a),null)),[o,d,e]}function cy(e,n){e.action=n}function Im(e){var n=hn(),a=je;if(a!==null)return zm(n,a,e);hn(),n=n.memoizedState,a=hn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function _r(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=fe.updateQueue,n===null&&(n=Hl(),fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Fm(){return hn().memoizedState}function kl(e,n,a,o){var u=kn();fe.flags|=e,u.memoizedState=_r(1|n,{destroy:void 0},a,o===void 0?null:o)}function Xl(e,n,a,o){var u=hn();o=o===void 0?null:o;var d=u.memoizedState.inst;je!==null&&o!==null&&$u(o,je.memoizedState.deps)?u.memoizedState=_r(n,d,a,o):(fe.flags|=e,u.memoizedState=_r(1|n,d,a,o))}function Bm(e,n){kl(8390656,8,e,n)}function uf(e,n){Xl(2048,8,e,n)}function uy(e){fe.flags|=4;var n=fe.updateQueue;if(n===null)n=Hl(),fe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Hm(e){var n=hn().memoizedState;return uy({ref:n,nextImpl:e}),function(){if((ze&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Gm(e,n){return Xl(4,2,e,n)}function Vm(e,n){return Xl(4,4,e,n)}function km(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Xm(e,n,a){a=a!=null?a.concat([e]):null,Xl(4,4,km.bind(null,n,e),a)}function ff(){}function jm(e,n){var a=hn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&$u(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Wm(e,n){var a=hn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&$u(n,o[1]))return o[0];if(o=e(),Ns){Ht(!0);try{e()}finally{Ht(!1)}}return a.memoizedState=[o,n],o}function hf(e,n,a){return a===void 0||(fa&1073741824)!==0&&(be&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=q0(),fe.lanes|=e,Za|=e,a)}function qm(e,n,a,o){return ii(a,n)?a:pr.current!==null?(e=hf(e,a,o),ii(e,n)||(gn=!0),e):(fa&42)===0||(fa&1073741824)!==0&&(be&261930)===0?(gn=!0,e.memoizedState=a):(e=q0(),fe.lanes|=e,Za|=e,n)}function Ym(e,n,a,o,u){var d=B.p;B.p=d!==0&&8>d?d:8;var S=I.T,U={};I.T=U,mf(e,!1,n,a);try{var k=u(),rt=I.S;if(rt!==null&&rt(U,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var pt=sy(k,o);Ro(e,n,pt,ci(e))}else Ro(e,n,o,ci(e))}catch(xt){Ro(e,n,{then:function(){},status:"rejected",reason:xt},ci())}finally{B.p=d,S!==null&&U.types!==null&&(S.types=U.types),I.T=S}}function fy(){}function df(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Zm(e).queue;Ym(e,u,n,Z,a===null?fy:function(){return Km(e),a(o)})}function Zm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Km(e){var n=Zm(e);n.next===null&&(n=e.alternate.memoizedState),Ro(e,n.next.queue,{},ci())}function pf(){return Ln(Xo)}function Qm(){return hn().memoizedState}function Jm(){return hn().memoizedState}function hy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ci();e=ka(a);var o=Xa(n,e,a);o!==null&&(Jn(o,n,a),So(o,n,a)),n={cache:Vu()},e.payload=n;return}n=n.return}}function dy(e,n,a){var o=ci();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},jl(e)?t0(n,a):(a=Nu(e,n,a,o),a!==null&&(Jn(a,e,o),e0(a,n,o)))}function $m(e,n,a){var o=ci();Ro(e,n,a,o)}function Ro(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(jl(e))t0(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var S=n.lastRenderedState,U=d(S,a);if(u.hasEagerState=!0,u.eagerState=U,ii(U,S))return Tl(e,n,u,0),Qe===null&&El(),!1}catch{}finally{}if(a=Nu(e,n,u,o),a!==null)return Jn(a,e,o),e0(a,n,o),!0}return!1}function mf(e,n,a,o){if(o={lane:2,revertLane:qf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},jl(e)){if(n)throw Error(s(479))}else n=Nu(e,a,o,2),n!==null&&Jn(n,e,2)}function jl(e){var n=e.alternate;return e===fe||n!==null&&n===fe}function t0(e,n){mr=Fl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function e0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,eo(e,a)}}var wo={readContext:Ln,use:Gl,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on};wo.useEffectEvent=on;var n0={readContext:Ln,use:Gl,useCallback:function(e,n){return kn().memoizedState=[e,n===void 0?null:n],e},useContext:Ln,useEffect:Bm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,kl(4194308,4,km.bind(null,n,e),a)},useLayoutEffect:function(e,n){return kl(4194308,4,e,n)},useInsertionEffect:function(e,n){kl(4,2,e,n)},useMemo:function(e,n){var a=kn();n=n===void 0?null:n;var o=e();if(Ns){Ht(!0);try{e()}finally{Ht(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=kn();if(a!==void 0){var u=a(n);if(Ns){Ht(!0);try{a(n)}finally{Ht(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=dy.bind(null,fe,e),[o.memoizedState,e]},useRef:function(e){var n=kn();return e={current:e},n.memoizedState=e},useState:function(e){e=lf(e);var n=e.queue,a=$m.bind(null,fe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ff,useDeferredValue:function(e,n){var a=kn();return hf(a,e,n)},useTransition:function(){var e=lf(!1);return e=Ym.bind(null,fe,e.queue,!0,!1),kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=fe,u=kn();if(Te){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Qe===null)throw Error(s(349));(be&127)!==0||bm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Bm(Tm.bind(null,o,d,e),[e]),o.flags|=2048,_r(9,{destroy:void 0},Em.bind(null,o,d,a,n),null),a},useId:function(){var e=kn(),n=Qe.identifierPrefix;if(Te){var a=Vi,o=Gi;a=(o&~(1<<32-Ft(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Bl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=ry++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:pf,useFormState:Pm,useActionState:Pm,useOptimistic:function(e){var n=kn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=mf.bind(null,fe,!0,a),a.dispatch=n,[e,n]},useMemoCache:sf,useCacheRefresh:function(){return kn().memoizedState=hy.bind(null,fe)},useEffectEvent:function(e){var n=kn(),a={impl:e};return n.memoizedState=a,function(){if((ze&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},gf={readContext:Ln,use:Gl,useCallback:jm,useContext:Ln,useEffect:uf,useImperativeHandle:Xm,useInsertionEffect:Gm,useLayoutEffect:Vm,useMemo:Wm,useReducer:Vl,useRef:Fm,useState:function(){return Vl(ha)},useDebugValue:ff,useDeferredValue:function(e,n){var a=hn();return qm(a,je.memoizedState,e,n)},useTransition:function(){var e=Vl(ha)[0],n=hn().memoizedState;return[typeof e=="boolean"?e:Ao(e),n]},useSyncExternalStore:Sm,useId:Qm,useHostTransitionStatus:pf,useFormState:Om,useActionState:Om,useOptimistic:function(e,n){var a=hn();return wm(a,je,e,n)},useMemoCache:sf,useCacheRefresh:Jm};gf.useEffectEvent=Hm;var i0={readContext:Ln,use:Gl,useCallback:jm,useContext:Ln,useEffect:uf,useImperativeHandle:Xm,useInsertionEffect:Gm,useLayoutEffect:Vm,useMemo:Wm,useReducer:of,useRef:Fm,useState:function(){return of(ha)},useDebugValue:ff,useDeferredValue:function(e,n){var a=hn();return je===null?hf(a,e,n):qm(a,je.memoizedState,e,n)},useTransition:function(){var e=of(ha)[0],n=hn().memoizedState;return[typeof e=="boolean"?e:Ao(e),n]},useSyncExternalStore:Sm,useId:Qm,useHostTransitionStatus:pf,useFormState:Im,useActionState:Im,useOptimistic:function(e,n){var a=hn();return je!==null?wm(a,je,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:sf,useCacheRefresh:Jm};i0.useEffectEvent=Hm;function _f(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var vf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ci(),u=ka(o);u.payload=n,a!=null&&(u.callback=a),n=Xa(e,u,o),n!==null&&(Jn(n,e,o),So(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ci(),u=ka(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Xa(e,u,o),n!==null&&(Jn(n,e,o),So(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ci(),o=ka(a);o.tag=2,n!=null&&(o.callback=n),n=Xa(e,o,a),n!==null&&(Jn(n,e,a),So(n,e,a))}};function a0(e,n,a,o,u,d,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,S):n.prototype&&n.prototype.isPureReactComponent?!po(a,o)||!po(u,d):!0}function s0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&vf.enqueueReplaceState(n,n.state,null)}function Us(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function r0(e){bl(e)}function o0(e){console.error(e)}function l0(e){bl(e)}function Wl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function c0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function xf(e,n,a){return a=ka(a),a.tag=3,a.payload={element:null},a.callback=function(){Wl(e,n)},a}function u0(e){return e=ka(e),e.tag=3,e}function f0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){c0(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){c0(n,a,o),typeof u!="function"&&(Ka===null?Ka=new Set([this]):Ka.add(this));var U=o.stack;this.componentDidCatch(o.value,{componentStack:U!==null?U:""})})}function py(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&cr(n,a,u,!0),a=si.current,a!==null){switch(a.tag){case 31:case 13:return Si===null?ac():a.alternate===null&&ln===0&&(ln=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ll?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Xf(e,o,u)),!1;case 22:return a.flags|=65536,o===Ll?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Xf(e,o,u)),!1}throw Error(s(435,a.tag))}return Xf(e,o,u),ac(),!1}if(Te)return n=si.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Iu&&(e=Error(s(422),{cause:o}),_o(vi(e,a)))):(o!==Iu&&(n=Error(s(423),{cause:o}),_o(vi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=vi(o,a),u=xf(e.stateNode,o,u),Yu(e,u),ln!==4&&(ln=2)),!1;var d=Error(s(520),{cause:o});if(d=vi(d,a),zo===null?zo=[d]:zo.push(d),ln!==4&&(ln=2),n===null)return!0;o=vi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=xf(a.stateNode,o,e),Yu(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ka===null||!Ka.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=u0(u),f0(u,e,a,o),Yu(a,u),!1}a=a.return}while(a!==null);return!1}var yf=Error(s(461)),gn=!1;function Pn(e,n,a,o){n.child=e===null?mm(n,null,a,o):Ds(n,e.child,a,o)}function h0(e,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var S={};for(var U in o)U!=="ref"&&(S[U]=o[U])}else S=o;return As(n),o=tf(e,n,a,S,d,u),U=ef(),e!==null&&!gn?(nf(e,n,u),da(e,n,u)):(Te&&U&&Ou(n),n.flags|=1,Pn(e,n,o,u),n.child)}function d0(e,n,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!Uu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,p0(e,n,d,o,u)):(e=Rl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!wf(e,u)){var S=d.memoizedProps;if(a=a.compare,a=a!==null?a:po,a(S,o)&&e.ref===n.ref)return da(e,n,u)}return n.flags|=1,e=oa(d,o),e.ref=n.ref,e.return=n,n.child=e}function p0(e,n,a,o,u){if(e!==null){var d=e.memoizedProps;if(po(d,o)&&e.ref===n.ref)if(gn=!1,n.pendingProps=o=d,wf(e,u))(e.flags&131072)!==0&&(gn=!0);else return n.lanes=e.lanes,da(e,n,u)}return Mf(e,n,a,o,u)}function m0(e,n,a,o){var u=o.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return g0(e,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Nl(n,d!==null?d.cachePool:null),d!==null?vm(n,d):Ku(),xm(n);else return o=n.lanes=536870912,g0(e,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Nl(n,d.cachePool),vm(n,d),Wa(),n.memoizedState=null):(e!==null&&Nl(n,null),Ku(),Wa());return Pn(e,n,u,a),n.child}function Co(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function g0(e,n,a,o,u){var d=Xu();return d=d===null?null:{parent:pn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},e!==null&&Nl(n,null),Ku(),xm(n),e!==null&&cr(e,n,o,!0),n.childLanes=u,null}function ql(e,n){return n=Zl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function _0(e,n,a){return Ds(n,e.child,null,a),e=ql(n,n.pendingProps),e.flags|=2,ri(n),n.memoizedState=null,e}function my(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Te){if(o.mode==="hidden")return e=ql(n,o),n.lanes=536870912,Co(null,e);if(Ju(n),(e=$e)?(e=Cg(e,Mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},a=tm(e),a.return=n,n.child=a,Un=n,$e=null)):e=null,e===null)throw Ha(n);return n.lanes=536870912,null}return ql(n,o)}var d=e.memoizedState;if(d!==null){var S=d.dehydrated;if(Ju(n),u)if(n.flags&256)n.flags&=-257,n=_0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(gn||cr(e,n,a,!1),u=(a&e.childLanes)!==0,gn||u){if(o=Qe,o!==null&&(S=Ys(o,a),S!==0&&S!==d.retryLane))throw d.retryLane=S,Ss(e,S),Jn(o,e,S),yf;ac(),n=_0(e,n,a)}else e=d.treeContext,$e=bi(S.nextSibling),Un=n,Te=!0,Ba=null,Mi=!1,e!==null&&im(n,e),n=ql(n,o),n.flags|=4096;return n}return e=oa(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Yl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Mf(e,n,a,o,u){return As(n),a=tf(e,n,a,o,void 0,u),o=ef(),e!==null&&!gn?(nf(e,n,u),da(e,n,u)):(Te&&o&&Ou(n),n.flags|=1,Pn(e,n,a,u),n.child)}function v0(e,n,a,o,u,d){return As(n),n.updateQueue=null,a=Mm(n,o,a,u),ym(e),o=ef(),e!==null&&!gn?(nf(e,n,d),da(e,n,d)):(Te&&o&&Ou(n),n.flags|=1,Pn(e,n,a,d),n.child)}function x0(e,n,a,o,u){if(As(n),n.stateNode===null){var d=sr,S=a.contextType;typeof S=="object"&&S!==null&&(d=Ln(S)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=vf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Wu(n),S=a.contextType,d.context=typeof S=="object"&&S!==null?Ln(S):sr,d.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(_f(n,a,S,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&vf.enqueueReplaceState(d,d.state,null),Eo(n,o,d,u),bo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var U=n.memoizedProps,k=Us(a,U);d.props=k;var rt=d.context,pt=a.contextType;S=sr,typeof pt=="object"&&pt!==null&&(S=Ln(pt));var xt=a.getDerivedStateFromProps;pt=typeof xt=="function"||typeof d.getSnapshotBeforeUpdate=="function",U=n.pendingProps!==U,pt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(U||rt!==S)&&s0(n,d,o,S),Va=!1;var lt=n.memoizedState;d.state=lt,Eo(n,o,d,u),bo(),rt=n.memoizedState,U||lt!==rt||Va?(typeof xt=="function"&&(_f(n,a,xt,o),rt=n.memoizedState),(k=Va||a0(n,a,k,o,lt,rt,S))?(pt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=rt),d.props=o,d.state=rt,d.context=S,o=k):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,qu(e,n),S=n.memoizedProps,pt=Us(a,S),d.props=pt,xt=n.pendingProps,lt=d.context,rt=a.contextType,k=sr,typeof rt=="object"&&rt!==null&&(k=Ln(rt)),U=a.getDerivedStateFromProps,(rt=typeof U=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==xt||lt!==k)&&s0(n,d,o,k),Va=!1,lt=n.memoizedState,d.state=lt,Eo(n,o,d,u),bo();var ut=n.memoizedState;S!==xt||lt!==ut||Va||e!==null&&e.dependencies!==null&&Cl(e.dependencies)?(typeof U=="function"&&(_f(n,a,U,o),ut=n.memoizedState),(pt=Va||a0(n,a,pt,o,lt,ut,k)||e!==null&&e.dependencies!==null&&Cl(e.dependencies))?(rt||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ut,k),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ut,k)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ut),d.props=o,d.state=ut,d.context=k,o=pt):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,Yl(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=Ds(n,e.child,null,u),n.child=Ds(n,null,a,u)):Pn(e,n,a,u),n.memoizedState=d.state,e=n.child):e=da(e,n,u),e}function y0(e,n,a,o){return Es(),n.flags|=256,Pn(e,n,a,o),n.child}var Sf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bf(e){return{baseLanes:e,cachePool:cm()}}function Ef(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=li),e}function M0(e,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,S;if((S=d)||(S=e!==null&&e.memoizedState===null?!1:(fn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Te){if(u?ja(n):Wa(),(e=$e)?(e=Cg(e,Mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},a=tm(e),a.return=n,n.child=a,Un=n,$e=null)):e=null,e===null)throw Ha(n);return rh(e)?n.lanes=32:n.lanes=536870912,null}var U=o.children;return o=o.fallback,u?(Wa(),u=n.mode,U=Zl({mode:"hidden",children:U},u),o=bs(o,u,a,null),U.return=n,o.return=n,U.sibling=o,n.child=U,o=n.child,o.memoizedState=bf(a),o.childLanes=Ef(e,S,a),n.memoizedState=Sf,Co(null,o)):(ja(n),Tf(n,U))}var k=e.memoizedState;if(k!==null&&(U=k.dehydrated,U!==null)){if(d)n.flags&256?(ja(n),n.flags&=-257,n=Af(e,n,a)):n.memoizedState!==null?(Wa(),n.child=e.child,n.flags|=128,n=null):(Wa(),U=o.fallback,u=n.mode,o=Zl({mode:"visible",children:o.children},u),U=bs(U,u,a,null),U.flags|=2,o.return=n,U.return=n,o.sibling=U,n.child=o,Ds(n,e.child,null,a),o=n.child,o.memoizedState=bf(a),o.childLanes=Ef(e,S,a),n.memoizedState=Sf,n=Co(null,o));else if(ja(n),rh(U)){if(S=U.nextSibling&&U.nextSibling.dataset,S)var rt=S.dgst;S=rt,o=Error(s(419)),o.stack="",o.digest=S,_o({value:o,source:null,stack:null}),n=Af(e,n,a)}else if(gn||cr(e,n,a,!1),S=(a&e.childLanes)!==0,gn||S){if(S=Qe,S!==null&&(o=Ys(S,a),o!==0&&o!==k.retryLane))throw k.retryLane=o,Ss(e,o),Jn(S,e,o),yf;sh(U)||ac(),n=Af(e,n,a)}else sh(U)?(n.flags|=192,n.child=e.child,n=null):(e=k.treeContext,$e=bi(U.nextSibling),Un=n,Te=!0,Ba=null,Mi=!1,e!==null&&im(n,e),n=Tf(n,o.children),n.flags|=4096);return n}return u?(Wa(),U=o.fallback,u=n.mode,k=e.child,rt=k.sibling,o=oa(k,{mode:"hidden",children:o.children}),o.subtreeFlags=k.subtreeFlags&65011712,rt!==null?U=oa(rt,U):(U=bs(U,u,a,null),U.flags|=2),U.return=n,o.return=n,o.sibling=U,n.child=o,Co(null,o),o=n.child,U=e.child.memoizedState,U===null?U=bf(a):(u=U.cachePool,u!==null?(k=pn._currentValue,u=u.parent!==k?{parent:k,pool:k}:u):u=cm(),U={baseLanes:U.baseLanes|a,cachePool:u}),o.memoizedState=U,o.childLanes=Ef(e,S,a),n.memoizedState=Sf,Co(e.child,o)):(ja(n),a=e.child,e=a.sibling,a=oa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Tf(e,n){return n=Zl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Zl(e,n){return e=ai(22,e,null,n),e.lanes=0,e}function Af(e,n,a){return Ds(n,e.child,null,a),e=Tf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function S0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Hu(e.return,n,a)}function Rf(e,n,a,o,u,d){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=d)}function b0(e,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var S=fn.current,U=(S&2)!==0;if(U?(S=S&1|2,n.flags|=128):S&=1,gt(fn,S),Pn(e,n,o,a),o=Te?go:0,!U&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&S0(e,a,n);else if(e.tag===19)S0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Il(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Rf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Il(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Rf(n,!0,a,null,d,o);break;case"together":Rf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function da(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Za|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(cr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=oa(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=oa(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function wf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Cl(e)))}function gy(e,n,a){switch(n.tag){case 3:Rt(n,n.stateNode.containerInfo),Ga(n,pn,e.memoizedState.cache),Es();break;case 27:case 5:Pt(n);break;case 4:Rt(n,n.stateNode.containerInfo);break;case 10:Ga(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ju(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ja(n),n.flags|=128,null):(a&n.child.childLanes)!==0?M0(e,n,a):(ja(n),e=da(e,n,a),e!==null?e.sibling:null);ja(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(cr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return b0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),gt(fn,fn.current),o)break;return null;case 22:return n.lanes=0,m0(e,n,a,n.pendingProps);case 24:Ga(n,pn,e.memoizedState.cache)}return da(e,n,a)}function E0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)gn=!0;else{if(!wf(e,a)&&(n.flags&128)===0)return gn=!1,gy(e,n,a);gn=(e.flags&131072)!==0}else gn=!1,Te&&(n.flags&1048576)!==0&&nm(n,go,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=ws(n.elementType),n.type=e,typeof e=="function")Uu(e)?(o=Us(e,o),n.tag=1,n=x0(null,n,e,o,a)):(n.tag=0,n=Mf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===w){n.tag=11,n=h0(null,n,e,o,a);break t}else if(u===N){n.tag=14,n=d0(null,n,e,o,a);break t}}throw n=et(e)||e,Error(s(306,n,""))}}return n;case 0:return Mf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Us(o,n.pendingProps),x0(e,n,o,u,a);case 3:t:{if(Rt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,qu(e,n),Eo(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Ga(n,pn,o),o!==d.cache&&Gu(n,[pn],a,!0),bo(),o=S.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=y0(e,n,o,a);break t}else if(o!==u){u=vi(Error(s(424)),n),_o(u),n=y0(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for($e=bi(e.firstChild),Un=n,Te=!0,Ba=null,Mi=!0,a=mm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Es(),o===u){n=da(e,n,a);break t}Pn(e,n,o,a)}n=n.child}return n;case 26:return Yl(e,n),e===null?(a=Og(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(a=n.type,e=n.pendingProps,o=fc(at.current).createElement(a),o[dn]=n,o[An]=e,On(o,a,e),L(o),n.stateNode=o):n.memoizedState=Og(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Pt(n),e===null&&Te&&(o=n.stateNode=Ug(n.type,n.pendingProps,at.current),Un=n,Mi=!0,u=$e,ts(n.type)?(oh=u,$e=bi(o.firstChild)):$e=u),Pn(e,n,n.pendingProps.children,a),Yl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Te&&((u=o=$e)&&(o=Wy(o,n.type,n.pendingProps,Mi),o!==null?(n.stateNode=o,Un=n,$e=bi(o.firstChild),Mi=!1,u=!0):u=!1),u||Ha(n)),Pt(n),u=n.type,d=n.pendingProps,S=e!==null?e.memoizedProps:null,o=d.children,nh(u,d)?o=null:S!==null&&nh(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=tf(e,n,oy,null,null,a),Xo._currentValue=u),Yl(e,n),Pn(e,n,o,a),n.child;case 6:return e===null&&Te&&((e=a=$e)&&(a=qy(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,Un=n,$e=null,e=!0):e=!1),e||Ha(n)),null;case 13:return M0(e,n,a);case 4:return Rt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ds(n,null,o,a):Pn(e,n,o,a),n.child;case 11:return h0(e,n,n.type,n.pendingProps,a);case 7:return Pn(e,n,n.pendingProps,a),n.child;case 8:return Pn(e,n,n.pendingProps.children,a),n.child;case 12:return Pn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ga(n,n.type,o.value),Pn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,As(n),u=Ln(u),o=o(u),n.flags|=1,Pn(e,n,o,a),n.child;case 14:return d0(e,n,n.type,n.pendingProps,a);case 15:return p0(e,n,n.type,n.pendingProps,a);case 19:return b0(e,n,a);case 31:return my(e,n,a);case 22:return m0(e,n,a,n.pendingProps);case 24:return As(n),o=Ln(pn),e===null?(u=Xu(),u===null&&(u=Qe,d=Vu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Wu(n),Ga(n,pn,u)):((e.lanes&a)!==0&&(qu(e,n),Eo(n,null,null,a),bo()),u=e.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ga(n,pn,o)):(o=d.cache,Ga(n,pn,o),o!==u.cache&&Gu(n,[pn],a,!0))),Pn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function pa(e){e.flags|=4}function Cf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Q0())e.flags|=8192;else throw Cs=Ll,ju}else e.flags&=-16777217}function T0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Hg(n))if(Q0())e.flags|=8192;else throw Cs=Ll,ju}function Kl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Be():536870912,e.lanes|=n,Mr|=n)}function Do(e,n){if(!Te)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function tn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function _y(e,n,a){var o=n.pendingProps;switch(zu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(n),null;case 1:return tn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ua(pn),Gt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(lr(n)?pa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Fu())),tn(n),null;case 26:var u=n.type,d=n.memoizedState;return e===null?(pa(n),d!==null?(tn(n),T0(n,d)):(tn(n),Cf(n,u,null,o,a))):d?d!==e.memoizedState?(pa(n),tn(n),T0(n,d)):(tn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&pa(n),tn(n),Cf(n,u,e,o,a)),null;case 27:if(_e(n),a=at.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&pa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return tn(n),null}e=Et.current,lr(n)?am(n):(e=Ug(u,o,a),n.stateNode=e,pa(n))}return tn(n),null;case 5:if(_e(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&pa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return tn(n),null}if(d=Et.current,lr(n))am(n);else{var S=fc(at.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}d[dn]=n,d[An]=o;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=d;t:switch(On(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&pa(n)}}return tn(n),Cf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&pa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=at.current,lr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Un,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[dn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Mg(e.nodeValue,a)),e||Ha(n,!0)}else e=fc(e).createTextNode(o),e[dn]=n,n.stateNode=e}return tn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=lr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[dn]=n}else Es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),e=!1}else a=Fu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ri(n),n):(ri(n),null);if((n.flags&128)!==0)throw Error(s(558))}return tn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=lr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[dn]=n}else Es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),u=!1}else u=Fu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ri(n),n):(ri(n),null)}return ri(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Kl(n,n.updateQueue),tn(n),null);case 4:return Gt(),e===null&&Qf(n.stateNode.containerInfo),tn(n),null;case 10:return ua(n.type),tn(n),null;case 19:if(nt(fn),o=n.memoizedState,o===null)return tn(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)Do(o,!1);else{if(ln!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Il(e),d!==null){for(n.flags|=128,Do(o,!1),e=d.updateQueue,n.updateQueue=e,Kl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)$p(a,e),a=a.sibling;return gt(fn,fn.current&1|2),Te&&la(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&T()>ec&&(n.flags|=128,u=!0,Do(o,!1),n.lanes=4194304)}else{if(!u)if(e=Il(d),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Kl(n,e),Do(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Te)return tn(n),null}else 2*T()-o.renderingStartTime>ec&&a!==536870912&&(n.flags|=128,u=!0,Do(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(e=o.last,e!==null?e.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=T(),e.sibling=null,a=fn.current,gt(fn,u?a&1|2:a&1),Te&&la(n,o.treeForkCount),e):(tn(n),null);case 22:case 23:return ri(n),Qu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(tn(n),n.subtreeFlags&6&&(n.flags|=8192)):tn(n),a=n.updateQueue,a!==null&&Kl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&nt(Rs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ua(pn),tn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function vy(e,n){switch(zu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ua(pn),Gt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return _e(n),null;case 31:if(n.memoizedState!==null){if(ri(n),n.alternate===null)throw Error(s(340));Es()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ri(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Es()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return nt(fn),null;case 4:return Gt(),null;case 10:return ua(n.type),null;case 22:case 23:return ri(n),Qu(),e!==null&&nt(Rs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ua(pn),null;case 25:return null;default:return null}}function A0(e,n){switch(zu(n),n.tag){case 3:ua(pn),Gt();break;case 26:case 27:case 5:_e(n);break;case 4:Gt();break;case 31:n.memoizedState!==null&&ri(n);break;case 13:ri(n);break;case 19:nt(fn);break;case 10:ua(n.type);break;case 22:case 23:ri(n),Qu(),e!==null&&nt(Rs);break;case 24:ua(pn)}}function No(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,S=a.inst;o=d(),S.destroy=o}a=a.next}while(a!==u)}}catch(U){Ve(n,n.return,U)}}function qa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var S=o.inst,U=S.destroy;if(U!==void 0){S.destroy=void 0,u=n;var k=a,rt=U;try{rt()}catch(pt){Ve(u,k,pt)}}}o=o.next}while(o!==d)}}catch(pt){Ve(n,n.return,pt)}}function R0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{_m(n,a)}catch(o){Ve(e,e.return,o)}}}function w0(e,n,a){a.props=Us(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ve(e,n,o)}}function Uo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ve(e,n,u)}}function ki(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ve(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ve(e,n,u)}else a.current=null}function C0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ve(e,e.return,u)}}function Df(e,n,a){try{var o=e.stateNode;Hy(o,e.type,a,n),o[An]=n}catch(u){Ve(e,e.return,u)}}function D0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ts(e.type)||e.tag===4}function Nf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||D0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ts(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Uf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=sa));else if(o!==4&&(o===27&&ts(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Uf(e,n,a),e=e.sibling;e!==null;)Uf(e,n,a),e=e.sibling}function Ql(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&ts(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ql(e,n,a),e=e.sibling;e!==null;)Ql(e,n,a),e=e.sibling}function N0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);On(n,o,a),n[dn]=e,n[An]=a}catch(d){Ve(e,e.return,d)}}var ma=!1,_n=!1,Lf=!1,U0=typeof WeakSet=="function"?WeakSet:Set,En=null;function xy(e,n){if(e=e.containerInfo,th=vc,e=Xp(e),Tu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var S=0,U=-1,k=-1,rt=0,pt=0,xt=e,lt=null;e:for(;;){for(var ut;xt!==a||u!==0&&xt.nodeType!==3||(U=S+u),xt!==d||o!==0&&xt.nodeType!==3||(k=S+o),xt.nodeType===3&&(S+=xt.nodeValue.length),(ut=xt.firstChild)!==null;)lt=xt,xt=ut;for(;;){if(xt===e)break e;if(lt===a&&++rt===u&&(U=S),lt===d&&++pt===o&&(k=S),(ut=xt.nextSibling)!==null)break;xt=lt,lt=xt.parentNode}xt=ut}a=U===-1||k===-1?null:{start:U,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(eh={focusedElem:e,selectionRange:a},vc=!1,En=n;En!==null;)if(n=En,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,En=e;else for(;En!==null;){switch(n=En,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var Xt=Us(a.type,u);e=o.getSnapshotBeforeUpdate(Xt,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Ve(a,a.return,ee)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)ah(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ah(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,En=e;break}En=n.return}}function L0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:_a(e,a),o&4&&No(5,a);break;case 1:if(_a(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Ve(a,a.return,S)}else{var u=Us(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Ve(a,a.return,S)}}o&64&&R0(a),o&512&&Uo(a,a.return);break;case 3:if(_a(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{_m(e,n)}catch(S){Ve(a,a.return,S)}}break;case 27:n===null&&o&4&&N0(a);case 26:case 5:_a(e,a),n===null&&o&4&&C0(a),o&512&&Uo(a,a.return);break;case 12:_a(e,a);break;case 31:_a(e,a),o&4&&z0(e,a);break;case 13:_a(e,a),o&4&&I0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=wy.bind(null,a),Yy(e,a))));break;case 22:if(o=a.memoizedState!==null||ma,!o){n=n!==null&&n.memoizedState!==null||_n,u=ma;var d=_n;ma=o,(_n=n)&&!d?va(e,a,(a.subtreeFlags&8772)!==0):_a(e,a),ma=u,_n=d}break;case 30:break;default:_a(e,a)}}function P0(e){var n=e.alternate;n!==null&&(e.alternate=null,P0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&so(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var an=null,Yn=!1;function ga(e,n,a){for(a=a.child;a!==null;)O0(e,n,a),a=a.sibling}function O0(e,n,a){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(bt,a)}catch{}switch(a.tag){case 26:_n||ki(a,n),ga(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:_n||ki(a,n);var o=an,u=Yn;ts(a.type)&&(an=a.stateNode,Yn=!1),ga(e,n,a),Go(a.stateNode),an=o,Yn=u;break;case 5:_n||ki(a,n);case 6:if(o=an,u=Yn,an=null,ga(e,n,a),an=o,Yn=u,an!==null)if(Yn)try{(an.nodeType===9?an.body:an.nodeName==="HTML"?an.ownerDocument.body:an).removeChild(a.stateNode)}catch(d){Ve(a,n,d)}else try{an.removeChild(a.stateNode)}catch(d){Ve(a,n,d)}break;case 18:an!==null&&(Yn?(e=an,Rg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Cr(e)):Rg(an,a.stateNode));break;case 4:o=an,u=Yn,an=a.stateNode.containerInfo,Yn=!0,ga(e,n,a),an=o,Yn=u;break;case 0:case 11:case 14:case 15:qa(2,a,n),_n||qa(4,a,n),ga(e,n,a);break;case 1:_n||(ki(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&w0(a,n,o)),ga(e,n,a);break;case 21:ga(e,n,a);break;case 22:_n=(o=_n)||a.memoizedState!==null,ga(e,n,a),_n=o;break;default:ga(e,n,a)}}function z0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Cr(e)}catch(a){Ve(n,n.return,a)}}}function I0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Cr(e)}catch(a){Ve(n,n.return,a)}}function yy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new U0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new U0),n;default:throw Error(s(435,e.tag))}}function Jl(e,n){var a=yy(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Cy.bind(null,e,o);o.then(u,u)}})}function Zn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,S=n,U=S;t:for(;U!==null;){switch(U.tag){case 27:if(ts(U.type)){an=U.stateNode,Yn=!1;break t}break;case 5:an=U.stateNode,Yn=!1;break t;case 3:case 4:an=U.stateNode.containerInfo,Yn=!0;break t}U=U.return}if(an===null)throw Error(s(160));O0(d,S,u),an=null,Yn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)F0(n,e),n=n.sibling}var Ui=null;function F0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Zn(n,e),Kn(e),o&4&&(qa(3,e,e.return),No(3,e),qa(5,e,e.return));break;case 1:Zn(n,e),Kn(e),o&512&&(_n||a===null||ki(a,a.return)),o&64&&ma&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ui;if(Zn(n,e),Kn(e),o&512&&(_n||a===null||ki(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[_s]||d[dn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),On(d,o,a),d[dn]=e,L(d),o=d;break t;case"link":var S=Fg("link","href",u).get(o+(a.href||""));if(S){for(var U=0;U<S.length;U++)if(d=S[U],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(U,1);break e}}d=u.createElement(o),On(d,o,a),u.head.appendChild(d);break;case"meta":if(S=Fg("meta","content",u).get(o+(a.content||""))){for(U=0;U<S.length;U++)if(d=S[U],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(U,1);break e}}d=u.createElement(o),On(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[dn]=e,L(d),o=d}e.stateNode=o}else Bg(u,e.type,e.stateNode);else e.stateNode=Ig(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?Bg(u,e.type,e.stateNode):Ig(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Df(e,e.memoizedProps,a.memoizedProps)}break;case 27:Zn(n,e),Kn(e),o&512&&(_n||a===null||ki(a,a.return)),a!==null&&o&4&&Df(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Zn(n,e),Kn(e),o&512&&(_n||a===null||ki(a,a.return)),e.flags&32){u=e.stateNode;try{xn(u,"")}catch(Xt){Ve(e,e.return,Xt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Df(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Lf=!0);break;case 6:if(Zn(n,e),Kn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Xt){Ve(e,e.return,Xt)}}break;case 3:if(pc=null,u=Ui,Ui=hc(n.containerInfo),Zn(n,e),Ui=u,Kn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Cr(n.containerInfo)}catch(Xt){Ve(e,e.return,Xt)}Lf&&(Lf=!1,B0(e));break;case 4:o=Ui,Ui=hc(e.stateNode.containerInfo),Zn(n,e),Kn(e),Ui=o;break;case 12:Zn(n,e),Kn(e);break;case 31:Zn(n,e),Kn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Jl(e,o)));break;case 13:Zn(n,e),Kn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(tc=T()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Jl(e,o)));break;case 22:u=e.memoizedState!==null;var k=a!==null&&a.memoizedState!==null,rt=ma,pt=_n;if(ma=rt||u,_n=pt||k,Zn(n,e),_n=pt,ma=rt,Kn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||k||ma||_n||Ls(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){k=a=n;try{if(d=k.stateNode,u)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{U=k.stateNode;var xt=k.memoizedProps.style,lt=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;U.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(Xt){Ve(k,k.return,Xt)}}}else if(n.tag===6){if(a===null){k=n;try{k.stateNode.nodeValue=u?"":k.memoizedProps}catch(Xt){Ve(k,k.return,Xt)}}}else if(n.tag===18){if(a===null){k=n;try{var ut=k.stateNode;u?wg(ut,!0):wg(k.stateNode,!1)}catch(Xt){Ve(k,k.return,Xt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Jl(e,a))));break;case 19:Zn(n,e),Kn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Jl(e,o)));break;case 30:break;case 21:break;default:Zn(n,e),Kn(e)}}function Kn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(D0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=Nf(e);Ql(e,d,u);break;case 5:var S=a.stateNode;a.flags&32&&(xn(S,""),a.flags&=-33);var U=Nf(e);Ql(e,U,S);break;case 3:case 4:var k=a.stateNode.containerInfo,rt=Nf(e);Uf(e,rt,k);break;default:throw Error(s(161))}}catch(pt){Ve(e,e.return,pt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function B0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;B0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function _a(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)L0(e,n.alternate,n),n=n.sibling}function Ls(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:qa(4,n,n.return),Ls(n);break;case 1:ki(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&w0(n,n.return,a),Ls(n);break;case 27:Go(n.stateNode);case 26:case 5:ki(n,n.return),Ls(n);break;case 22:n.memoizedState===null&&Ls(n);break;case 30:Ls(n);break;default:Ls(n)}e=e.sibling}}function va(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,d=n,S=d.flags;switch(d.tag){case 0:case 11:case 15:va(u,d,a),No(4,d);break;case 1:if(va(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(rt){Ve(o,o.return,rt)}if(o=d,u=o.updateQueue,u!==null){var U=o.stateNode;try{var k=u.shared.hiddenCallbacks;if(k!==null)for(u.shared.hiddenCallbacks=null,u=0;u<k.length;u++)gm(k[u],U)}catch(rt){Ve(o,o.return,rt)}}a&&S&64&&R0(d),Uo(d,d.return);break;case 27:N0(d);case 26:case 5:va(u,d,a),a&&o===null&&S&4&&C0(d),Uo(d,d.return);break;case 12:va(u,d,a);break;case 31:va(u,d,a),a&&S&4&&z0(u,d);break;case 13:va(u,d,a),a&&S&4&&I0(u,d);break;case 22:d.memoizedState===null&&va(u,d,a),Uo(d,d.return);break;case 30:break;default:va(u,d,a)}n=n.sibling}}function Pf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&vo(a))}function Of(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&vo(e))}function Li(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)H0(e,n,a,o),n=n.sibling}function H0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Li(e,n,a,o),u&2048&&No(9,n);break;case 1:Li(e,n,a,o);break;case 3:Li(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&vo(e)));break;case 12:if(u&2048){Li(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,S=d.id,U=d.onPostCommit;typeof U=="function"&&U(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){Ve(n,n.return,k)}}else Li(e,n,a,o);break;case 31:Li(e,n,a,o);break;case 13:Li(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,S=n.alternate,n.memoizedState!==null?d._visibility&2?Li(e,n,a,o):Lo(e,n):d._visibility&2?Li(e,n,a,o):(d._visibility|=2,vr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Pf(S,n);break;case 24:Li(e,n,a,o),u&2048&&Of(n.alternate,n);break;default:Li(e,n,a,o)}}function vr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,S=n,U=a,k=o,rt=S.flags;switch(S.tag){case 0:case 11:case 15:vr(d,S,U,k,u),No(8,S);break;case 23:break;case 22:var pt=S.stateNode;S.memoizedState!==null?pt._visibility&2?vr(d,S,U,k,u):Lo(d,S):(pt._visibility|=2,vr(d,S,U,k,u)),u&&rt&2048&&Pf(S.alternate,S);break;case 24:vr(d,S,U,k,u),u&&rt&2048&&Of(S.alternate,S);break;default:vr(d,S,U,k,u)}n=n.sibling}}function Lo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Lo(a,o),u&2048&&Pf(o.alternate,o);break;case 24:Lo(a,o),u&2048&&Of(o.alternate,o);break;default:Lo(a,o)}n=n.sibling}}var Po=8192;function xr(e,n,a){if(e.subtreeFlags&Po)for(e=e.child;e!==null;)G0(e,n,a),e=e.sibling}function G0(e,n,a){switch(e.tag){case 26:xr(e,n,a),e.flags&Po&&e.memoizedState!==null&&rM(a,Ui,e.memoizedState,e.memoizedProps);break;case 5:xr(e,n,a);break;case 3:case 4:var o=Ui;Ui=hc(e.stateNode.containerInfo),xr(e,n,a),Ui=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Po,Po=16777216,xr(e,n,a),Po=o):xr(e,n,a));break;default:xr(e,n,a)}}function V0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Oo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,X0(o,e)}V0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)k0(e),e=e.sibling}function k0(e){switch(e.tag){case 0:case 11:case 15:Oo(e),e.flags&2048&&qa(9,e,e.return);break;case 3:Oo(e);break;case 12:Oo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,$l(e)):Oo(e);break;default:Oo(e)}}function $l(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,X0(o,e)}V0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:qa(8,n,n.return),$l(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,$l(n));break;default:$l(n)}e=e.sibling}}function X0(e,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:qa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:vo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,En=o;else t:for(a=e;En!==null;){o=En;var u=o.sibling,d=o.return;if(P0(o),o===a){En=null;break t}if(u!==null){u.return=d,En=u;break t}En=d}}}var My={getCacheForType:function(e){var n=Ln(pn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Ln(pn).controller.signal}},Sy=typeof WeakMap=="function"?WeakMap:Map,ze=0,Qe=null,Me=null,be=0,Ge=0,oi=null,Ya=!1,yr=!1,zf=!1,xa=0,ln=0,Za=0,Ps=0,If=0,li=0,Mr=0,zo=null,Qn=null,Ff=!1,tc=0,j0=0,ec=1/0,nc=null,Ka=null,yn=0,Qa=null,Sr=null,ya=0,Bf=0,Hf=null,W0=null,Io=0,Gf=null;function ci(){return(ze&2)!==0&&be!==0?be&-be:I.T!==null?qf():io()}function q0(){if(li===0)if((be&536870912)===0||Te){var e=At;At<<=1,(At&3932160)===0&&(At=262144),li=e}else li=536870912;return e=si.current,e!==null&&(e.flags|=32),li}function Jn(e,n,a){(e===Qe&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)&&(br(e,0),Ja(e,be,li,!1)),Fn(e,a),((ze&2)===0||e!==Qe)&&(e===Qe&&((ze&2)===0&&(Ps|=a),ln===4&&Ja(e,be,li,!1)),Xi(e))}function Y0(e,n,a){if((ze&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||wt(e,n),u=o?Ty(e,n):kf(e,n,!0),d=o;do{if(u===0){yr&&!o&&Ja(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!by(a)){u=kf(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var U=e;u=zo;var k=U.current.memoizedState.isDehydrated;if(k&&(br(U,S).flags|=256),S=kf(U,S,!1),S!==2){if(zf&&!k){U.errorRecoveryDisabledLanes|=d,Ps|=d,u=4;break t}d=Qn,Qn=u,d!==null&&(Qn===null?Qn=d:Qn.push.apply(Qn,d))}u=S}if(d=!1,u!==2)continue}}if(u===1){br(e,0),Ja(e,n,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ja(o,n,li,!Ya);break t;case 2:Qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=tc+300-T(),10<u)){if(Ja(o,n,li,!Ya),yt(o,0,!0)!==0)break t;ya=n,o.timeoutHandle=Tg(Z0.bind(null,o,a,Qn,nc,Ff,n,li,Ps,Mr,Ya,d,"Throttled",-0,0),u);break t}Z0(o,a,Qn,nc,Ff,n,li,Ps,Mr,Ya,d,null,-0,0)}}break}while(!0);Xi(e)}function Z0(e,n,a,o,u,d,S,U,k,rt,pt,xt,lt,ut){if(e.timeoutHandle=-1,xt=n.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sa},G0(n,d,xt);var Xt=(d&62914560)===d?tc-T():(d&4194048)===d?j0-T():0;if(Xt=oM(xt,Xt),Xt!==null){ya=d,e.cancelPendingCommit=Xt(ig.bind(null,e,n,d,a,o,u,S,U,k,pt,xt,null,lt,ut)),Ja(e,d,S,!rt);return}}ig(e,n,d,a,o,u,S,U,k)}function by(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!ii(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ja(e,n,a,o){n&=~If,n&=~Ps,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var d=31-Ft(u),S=1<<d;o[d]=-1,u&=~S}a!==0&&pl(e,a,n)}function ic(){return(ze&6)===0?(Fo(0),!1):!0}function Vf(){if(Me!==null){if(Ge===0)var e=Me.return;else e=Me,ca=Ts=null,af(e),dr=null,yo=0,e=Me;for(;e!==null;)A0(e.alternate,e),e=e.return;Me=null}}function br(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ky(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ya=0,Vf(),Qe=e,Me=a=oa(e.current,null),be=n,Ge=0,oi=null,Ya=!1,yr=wt(e,n),zf=!1,Mr=li=If=Ps=Za=ln=0,Qn=zo=null,Ff=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Ft(o),d=1<<u;n|=e[u],o&=~d}return xa=n,El(),a}function K0(e,n){fe=null,I.H=wo,n===hr||n===Ul?(n=hm(),Ge=3):n===ju?(n=hm(),Ge=4):Ge=n===yf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,oi=n,Me===null&&(ln=1,Wl(e,vi(n,e.current)))}function Q0(){var e=si.current;return e===null?!0:(be&4194048)===be?Si===null:(be&62914560)===be||(be&536870912)!==0?e===Si:!1}function J0(){var e=I.H;return I.H=wo,e===null?wo:e}function $0(){var e=I.A;return I.A=My,e}function ac(){ln=4,Ya||(be&4194048)!==be&&si.current!==null||(yr=!0),(Za&134217727)===0&&(Ps&134217727)===0||Qe===null||Ja(Qe,be,li,!1)}function kf(e,n,a){var o=ze;ze|=2;var u=J0(),d=$0();(Qe!==e||be!==n)&&(nc=null,br(e,n)),n=!1;var S=ln;t:do try{if(Ge!==0&&Me!==null){var U=Me,k=oi;switch(Ge){case 8:Vf(),S=6;break t;case 3:case 2:case 9:case 6:si.current===null&&(n=!0);var rt=Ge;if(Ge=0,oi=null,Er(e,U,k,rt),a&&yr){S=0;break t}break;default:rt=Ge,Ge=0,oi=null,Er(e,U,k,rt)}}Ey(),S=ln;break}catch(pt){K0(e,pt)}while(!0);return n&&e.shellSuspendCounter++,ca=Ts=null,ze=o,I.H=u,I.A=d,Me===null&&(Qe=null,be=0,El()),S}function Ey(){for(;Me!==null;)tg(Me)}function Ty(e,n){var a=ze;ze|=2;var o=J0(),u=$0();Qe!==e||be!==n?(nc=null,ec=T()+500,br(e,n)):yr=wt(e,n);t:do try{if(Ge!==0&&Me!==null){n=Me;var d=oi;e:switch(Ge){case 1:Ge=0,oi=null,Er(e,n,d,1);break;case 2:case 9:if(um(d)){Ge=0,oi=null,eg(n);break}n=function(){Ge!==2&&Ge!==9||Qe!==e||(Ge=7),Xi(e)},d.then(n,n);break t;case 3:Ge=7;break t;case 4:Ge=5;break t;case 7:um(d)?(Ge=0,oi=null,eg(n)):(Ge=0,oi=null,Er(e,n,d,7));break;case 5:var S=null;switch(Me.tag){case 26:S=Me.memoizedState;case 5:case 27:var U=Me;if(S?Hg(S):U.stateNode.complete){Ge=0,oi=null;var k=U.sibling;if(k!==null)Me=k;else{var rt=U.return;rt!==null?(Me=rt,sc(rt)):Me=null}break e}}Ge=0,oi=null,Er(e,n,d,5);break;case 6:Ge=0,oi=null,Er(e,n,d,6);break;case 8:Vf(),ln=6;break t;default:throw Error(s(462))}}Ay();break}catch(pt){K0(e,pt)}while(!0);return ca=Ts=null,I.H=o,I.A=u,ze=a,Me!==null?0:(Qe=null,be=0,El(),ln)}function Ay(){for(;Me!==null&&!Yt();)tg(Me)}function tg(e){var n=E0(e.alternate,e,xa);e.memoizedProps=e.pendingProps,n===null?sc(e):Me=n}function eg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=v0(a,n,n.pendingProps,n.type,void 0,be);break;case 11:n=v0(a,n,n.pendingProps,n.type.render,n.ref,be);break;case 5:af(n);default:A0(a,n),n=Me=$p(n,xa),n=E0(a,n,xa)}e.memoizedProps=e.pendingProps,n===null?sc(e):Me=n}function Er(e,n,a,o){ca=Ts=null,af(n),dr=null,yo=0;var u=n.return;try{if(py(e,u,n,a,be)){ln=1,Wl(e,vi(a,e.current)),Me=null;return}}catch(d){if(u!==null)throw Me=u,d;ln=1,Wl(e,vi(a,e.current)),Me=null;return}n.flags&32768?(Te||o===1?e=!0:yr||(be&536870912)!==0?e=!1:(Ya=e=!0,(o===2||o===9||o===3||o===6)&&(o=si.current,o!==null&&o.tag===13&&(o.flags|=16384))),ng(n,e)):sc(n)}function sc(e){var n=e;do{if((n.flags&32768)!==0){ng(n,Ya);return}e=n.return;var a=_y(n.alternate,n,xa);if(a!==null){Me=a;return}if(n=n.sibling,n!==null){Me=n;return}Me=n=e}while(n!==null);ln===0&&(ln=5)}function ng(e,n){do{var a=vy(e.alternate,e);if(a!==null){a.flags&=32767,Me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Me=e;return}Me=e=a}while(e!==null);ln=6,Me=null}function ig(e,n,a,o,u,d,S,U,k){e.cancelPendingCommit=null;do rc();while(yn!==0);if((ze&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Du,wi(e,a,d,S,U,k),e===Qe&&(Me=Qe=null,be=0),Sr=n,Qa=e,ya=a,Bf=d,Hf=u,W0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Dy(ht,function(){return lg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=B.p,B.p=2,S=ze,ze|=4;try{xy(e,n,a)}finally{ze=S,B.p=u,I.T=o}}yn=1,ag(),sg(),rg()}}function ag(){if(yn===1){yn=0;var e=Qa,n=Sr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=B.p;B.p=2;var u=ze;ze|=4;try{F0(n,e);var d=eh,S=Xp(e.containerInfo),U=d.focusedElem,k=d.selectionRange;if(S!==U&&U&&U.ownerDocument&&kp(U.ownerDocument.documentElement,U)){if(k!==null&&Tu(U)){var rt=k.start,pt=k.end;if(pt===void 0&&(pt=rt),"selectionStart"in U)U.selectionStart=rt,U.selectionEnd=Math.min(pt,U.value.length);else{var xt=U.ownerDocument||document,lt=xt&&xt.defaultView||window;if(lt.getSelection){var ut=lt.getSelection(),Xt=U.textContent.length,ee=Math.min(k.start,Xt),qe=k.end===void 0?ee:Math.min(k.end,Xt);!ut.extend&&ee>qe&&(S=qe,qe=ee,ee=S);var $=Vp(U,ee),W=Vp(U,qe);if($&&W&&(ut.rangeCount!==1||ut.anchorNode!==$.node||ut.anchorOffset!==$.offset||ut.focusNode!==W.node||ut.focusOffset!==W.offset)){var st=xt.createRange();st.setStart($.node,$.offset),ut.removeAllRanges(),ee>qe?(ut.addRange(st),ut.extend(W.node,W.offset)):(st.setEnd(W.node,W.offset),ut.addRange(st))}}}}for(xt=[],ut=U;ut=ut.parentNode;)ut.nodeType===1&&xt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof U.focus=="function"&&U.focus(),U=0;U<xt.length;U++){var vt=xt[U];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}vc=!!th,eh=th=null}finally{ze=u,B.p=o,I.T=a}}e.current=n,yn=2}}function sg(){if(yn===2){yn=0;var e=Qa,n=Sr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=B.p;B.p=2;var u=ze;ze|=4;try{L0(e,n.alternate,n)}finally{ze=u,B.p=o,I.T=a}}yn=3}}function rg(){if(yn===4||yn===3){yn=0,F();var e=Qa,n=Sr,a=ya,o=W0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?yn=5:(yn=0,Sr=Qa=null,og(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ka=null),Zs(a),n=n.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(bt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=B.p,B.p=2,I.T=null;try{for(var d=e.onRecoverableError,S=0;S<o.length;S++){var U=o[S];d(U.value,{componentStack:U.stack})}}finally{I.T=n,B.p=u}}(ya&3)!==0&&rc(),Xi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Gf?Io++:(Io=0,Gf=e):Io=0,Fo(0)}}function og(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,vo(n)))}function rc(){return ag(),sg(),rg(),lg()}function lg(){if(yn!==5)return!1;var e=Qa,n=Bf;Bf=0;var a=Zs(ya),o=I.T,u=B.p;try{B.p=32>a?32:a,I.T=null,a=Hf,Hf=null;var d=Qa,S=ya;if(yn=0,Sr=Qa=null,ya=0,(ze&6)!==0)throw Error(s(331));var U=ze;if(ze|=4,k0(d.current),H0(d,d.current,S,a),ze=U,Fo(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(bt,d)}catch{}return!0}finally{B.p=u,I.T=o,og(e,n)}}function cg(e,n,a){n=vi(a,n),n=xf(e.stateNode,n,2),e=Xa(e,n,2),e!==null&&(Fn(e,2),Xi(e))}function Ve(e,n,a){if(e.tag===3)cg(e,e,a);else for(;n!==null;){if(n.tag===3){cg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ka===null||!Ka.has(o))){e=vi(a,e),a=u0(2),o=Xa(n,a,2),o!==null&&(f0(a,o,n,e),Fn(o,2),Xi(o));break}}n=n.return}}function Xf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Sy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(zf=!0,u.add(a),e=Ry.bind(null,e,n,a),n.then(e,e))}function Ry(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Qe===e&&(be&a)===a&&(ln===4||ln===3&&(be&62914560)===be&&300>T()-tc?(ze&2)===0&&br(e,0):If|=a,Mr===be&&(Mr=0)),Xi(e)}function ug(e,n){n===0&&(n=Be()),e=Ss(e,n),e!==null&&(Fn(e,n),Xi(e))}function wy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),ug(e,a)}function Cy(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),ug(e,a)}function Dy(e,n){return Re(e,n)}var oc=null,Tr=null,jf=!1,lc=!1,Wf=!1,$a=0;function Xi(e){e!==Tr&&e.next===null&&(Tr===null?oc=Tr=e:Tr=Tr.next=e),lc=!0,jf||(jf=!0,Uy())}function Fo(e,n){if(!Wf&&lc){Wf=!0;do for(var a=!1,o=oc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var S=o.suspendedLanes,U=o.pingedLanes;d=(1<<31-Ft(42|e)+1)-1,d&=u&~(S&~U),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,pg(o,d))}else d=be,d=yt(o,o===Qe?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||wt(o,d)||(a=!0,pg(o,d));o=o.next}while(a);Wf=!1}}function Ny(){fg()}function fg(){lc=jf=!1;var e=0;$a!==0&&Vy()&&(e=$a);for(var n=T(),a=null,o=oc;o!==null;){var u=o.next,d=hg(o,n);d===0?(o.next=null,a===null?oc=u:a.next=u,u===null&&(Tr=a)):(a=o,(e!==0||(d&3)!==0)&&(lc=!0)),o=u}yn!==0&&yn!==5||Fo(e),$a!==0&&($a=0)}function hg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var S=31-Ft(d),U=1<<S,k=u[S];k===-1?((U&a)===0||(U&o)!==0)&&(u[S]=se(U,n)):k<=n&&(e.expiredLanes|=U),d&=~U}if(n=Qe,a=be,a=yt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ie(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||wt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ie(o),Zs(a)){case 2:case 8:a=Mt;break;case 32:a=ht;break;case 268435456:a=Ct;break;default:a=ht}return o=dg.bind(null,e),a=Re(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ie(o),e.callbackPriority=2,e.callbackNode=null,2}function dg(e,n){if(yn!==0&&yn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(rc()&&e.callbackNode!==a)return null;var o=be;return o=yt(e,e===Qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Y0(e,o,n),hg(e,T()),e.callbackNode!=null&&e.callbackNode===a?dg.bind(null,e):null)}function pg(e,n){if(rc())return null;Y0(e,n,!0)}function Uy(){Xy(function(){(ze&6)!==0?Re(_t,Ny):fg()})}function qf(){if($a===0){var e=ur;e===0&&(e=Lt,Lt<<=1,(Lt&261888)===0&&(Lt=256)),$a=e}return $a}function mg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:gl(""+e)}function gg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Ly(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=mg((u[An]||null).action),S=o.submitter;S&&(n=(n=S[An]||null)?mg(n.formAction):S.getAttribute("formAction"),n!==null&&(d=n,S=null));var U=new yl("action","action",null,o,u);e.push({event:U,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if($a!==0){var k=S?gg(u,S):new FormData(u);df(a,{pending:!0,data:k,method:u.method,action:d},null,k)}}else typeof d=="function"&&(U.preventDefault(),k=S?gg(u,S):new FormData(u),df(a,{pending:!0,data:k,method:u.method,action:d},d,k))},currentTarget:u}]})}}for(var Yf=0;Yf<Cu.length;Yf++){var Zf=Cu[Yf],Py=Zf.toLowerCase(),Oy=Zf[0].toUpperCase()+Zf.slice(1);Ni(Py,"on"+Oy)}Ni(qp,"onAnimationEnd"),Ni(Yp,"onAnimationIteration"),Ni(Zp,"onAnimationStart"),Ni("dblclick","onDoubleClick"),Ni("focusin","onFocus"),Ni("focusout","onBlur"),Ni(Qx,"onTransitionRun"),Ni(Jx,"onTransitionStart"),Ni($x,"onTransitionCancel"),Ni(Kp,"onTransitionEnd"),tt("onMouseEnter",["mouseout","mouseover"]),tt("onMouseLeave",["mouseout","mouseover"]),tt("onPointerEnter",["pointerout","pointerover"]),tt("onPointerLeave",["pointerout","pointerover"]),ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ot("onBeforeInput",["compositionend","keypress","textInput","paste"]),ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bo));function _g(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var S=o.length-1;0<=S;S--){var U=o[S],k=U.instance,rt=U.currentTarget;if(U=U.listener,k!==d&&u.isPropagationStopped())break t;d=U,u.currentTarget=rt;try{d(u)}catch(pt){bl(pt)}u.currentTarget=null,d=k}else for(S=0;S<o.length;S++){if(U=o[S],k=U.instance,rt=U.currentTarget,U=U.listener,k!==d&&u.isPropagationStopped())break t;d=U,u.currentTarget=rt;try{d(u)}catch(pt){bl(pt)}u.currentTarget=null,d=k}}}}function Se(e,n){var a=n[Ks];a===void 0&&(a=n[Ks]=new Set);var o=e+"__bubble";a.has(o)||(vg(n,e,2,!1),a.add(o))}function Kf(e,n,a){var o=0;n&&(o|=4),vg(a,e,o,n)}var cc="_reactListening"+Math.random().toString(36).slice(2);function Qf(e){if(!e[cc]){e[cc]=!0,J.forEach(function(a){a!=="selectionchange"&&(zy.has(a)||Kf(a,!1,e),Kf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[cc]||(n[cc]=!0,Kf("selectionchange",!1,n))}}function vg(e,n,a,o){switch(qg(n)){case 2:var u=uM;break;case 8:u=fM;break;default:u=hh}a=u.bind(null,n,a,e),u=void 0,!gu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Jf(e,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var U=o.stateNode.containerInfo;if(U===u)break;if(S===4)for(S=o.return;S!==null;){var k=S.tag;if((k===3||k===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;U!==null;){if(S=Pa(U),S===null)return;if(k=S.tag,k===5||k===6||k===26||k===27){o=d=S;continue t}U=U.parentNode}}o=o.return}bp(function(){var rt=d,pt=pu(a),xt=[];t:{var lt=Qp.get(e);if(lt!==void 0){var ut=yl,Xt=e;switch(e){case"keypress":if(vl(a)===0)break t;case"keydown":case"keyup":ut=Cx;break;case"focusin":Xt="focus",ut=yu;break;case"focusout":Xt="blur",ut=yu;break;case"beforeblur":case"afterblur":ut=yu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=Ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=_x;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=Ux;break;case qp:case Yp:case Zp:ut=yx;break;case Kp:ut=Px;break;case"scroll":case"scrollend":ut=mx;break;case"wheel":ut=zx;break;case"copy":case"cut":case"paste":ut=Sx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=wp;break;case"toggle":case"beforetoggle":ut=Fx}var ee=(n&4)!==0,qe=!ee&&(e==="scroll"||e==="scrollend"),$=ee?lt!==null?lt+"Capture":null:lt;ee=[];for(var W=rt,st;W!==null;){var vt=W;if(st=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||st===null||$===null||(vt=ro(W,$),vt!=null&&ee.push(Ho(W,vt,st))),qe)break;W=W.return}0<ee.length&&(lt=new ut(lt,Xt,null,a,pt),xt.push({event:lt,listeners:ee}))}}if((n&7)===0){t:{if(lt=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",lt&&a!==du&&(Xt=a.relatedTarget||a.fromElement)&&(Pa(Xt)||Xt[Ci]))break t;if((ut||lt)&&(lt=pt.window===pt?pt:(lt=pt.ownerDocument)?lt.defaultView||lt.parentWindow:window,ut?(Xt=a.relatedTarget||a.toElement,ut=rt,Xt=Xt?Pa(Xt):null,Xt!==null&&(qe=c(Xt),ee=Xt.tag,Xt!==qe||ee!==5&&ee!==27&&ee!==6)&&(Xt=null)):(ut=null,Xt=rt),ut!==Xt)){if(ee=Ap,vt="onMouseLeave",$="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(ee=wp,vt="onPointerLeave",$="onPointerEnter",W="pointer"),qe=ut==null?lt:vs(ut),st=Xt==null?lt:vs(Xt),lt=new ee(vt,W+"leave",ut,a,pt),lt.target=qe,lt.relatedTarget=st,vt=null,Pa(pt)===rt&&(ee=new ee($,W+"enter",Xt,a,pt),ee.target=st,ee.relatedTarget=qe,vt=ee),qe=vt,ut&&Xt)e:{for(ee=Iy,$=ut,W=Xt,st=0,vt=$;vt;vt=ee(vt))st++;vt=0;for(var Jt=W;Jt;Jt=ee(Jt))vt++;for(;0<st-vt;)$=ee($),st--;for(;0<vt-st;)W=ee(W),vt--;for(;st--;){if($===W||W!==null&&$===W.alternate){ee=$;break e}$=ee($),W=ee(W)}ee=null}else ee=null;ut!==null&&xg(xt,lt,ut,ee,!1),Xt!==null&&qe!==null&&xg(xt,qe,Xt,ee,!0)}}t:{if(lt=rt?vs(rt):window,ut=lt.nodeName&&lt.nodeName.toLowerCase(),ut==="select"||ut==="input"&&lt.type==="file")var Ne=zp;else if(Pp(lt))if(Ip)Ne=Yx;else{Ne=Wx;var Zt=jx}else ut=lt.nodeName,!ut||ut.toLowerCase()!=="input"||lt.type!=="checkbox"&&lt.type!=="radio"?rt&&Di(rt.elementType)&&(Ne=zp):Ne=qx;if(Ne&&(Ne=Ne(e,rt))){Op(xt,Ne,a,pt);break t}Zt&&Zt(e,lt,rt),e==="focusout"&&rt&&lt.type==="number"&&rt.memoizedProps.value!=null&&wn(lt,"number",lt.value)}switch(Zt=rt?vs(rt):window,e){case"focusin":(Pp(Zt)||Zt.contentEditable==="true")&&(nr=Zt,Au=rt,mo=null);break;case"focusout":mo=Au=nr=null;break;case"mousedown":Ru=!0;break;case"contextmenu":case"mouseup":case"dragend":Ru=!1,jp(xt,a,pt);break;case"selectionchange":if(Kx)break;case"keydown":case"keyup":jp(xt,a,pt)}var pe;if(Su)t:{switch(e){case"compositionstart":var Ee="onCompositionStart";break t;case"compositionend":Ee="onCompositionEnd";break t;case"compositionupdate":Ee="onCompositionUpdate";break t}Ee=void 0}else er?Up(e,a)&&(Ee="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(Cp&&a.locale!=="ko"&&(er||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&er&&(pe=Ep()):(Ia=pt,_u="value"in Ia?Ia.value:Ia.textContent,er=!0)),Zt=uc(rt,Ee),0<Zt.length&&(Ee=new Rp(Ee,e,null,a,pt),xt.push({event:Ee,listeners:Zt}),pe?Ee.data=pe:(pe=Lp(a),pe!==null&&(Ee.data=pe)))),(pe=Hx?Gx(e,a):Vx(e,a))&&(Ee=uc(rt,"onBeforeInput"),0<Ee.length&&(Zt=new Rp("onBeforeInput","beforeinput",null,a,pt),xt.push({event:Zt,listeners:Ee}),Zt.data=pe)),Ly(xt,e,rt,a,pt)}_g(xt,n)})}function Ho(e,n,a){return{instance:e,listener:n,currentTarget:a}}function uc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=ro(e,a),u!=null&&o.unshift(Ho(e,u,d)),u=ro(e,n),u!=null&&o.push(Ho(e,u,d))),e.tag===3)return o;e=e.return}return[]}function Iy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function xg(e,n,a,o,u){for(var d=n._reactName,S=[];a!==null&&a!==o;){var U=a,k=U.alternate,rt=U.stateNode;if(U=U.tag,k!==null&&k===o)break;U!==5&&U!==26&&U!==27||rt===null||(k=rt,u?(rt=ro(a,d),rt!=null&&S.unshift(Ho(a,rt,k))):u||(rt=ro(a,d),rt!=null&&S.push(Ho(a,rt,k)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var Fy=/\r\n?/g,By=/\u0000|\uFFFD/g;function yg(e){return(typeof e=="string"?e:""+e).replace(Fy,`
`).replace(By,"")}function Mg(e,n){return n=yg(n),yg(e)===n}function We(e,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||xn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&xn(e,""+o);break;case"className":$t(e,"class",o);break;case"tabIndex":$t(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":$t(e,a,o);break;case"style":Js(e,o,d);break;case"data":if(n!=="object"){$t(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=gl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&We(e,n,"name",u.name,u,null),We(e,n,"formEncType",u.formEncType,u,null),We(e,n,"formMethod",u.formMethod,u,null),We(e,n,"formTarget",u.formTarget,u,null)):(We(e,n,"encType",u.encType,u,null),We(e,n,"method",u.method,u,null),We(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=gl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=sa);break;case"onScroll":o!=null&&Se("scroll",e);break;case"onScrollEnd":o!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=gl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Se("beforetoggle",e),Se("toggle",e),Wt(e,"popover",o);break;case"xlinkActuate":qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":qt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":qt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":qt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":qt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Wt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=dx.get(a)||a,Wt(e,a,o))}}function $f(e,n,a,o,u,d){switch(a){case"style":Js(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?xn(e,o):(typeof o=="number"||typeof o=="bigint")&&xn(e,""+o);break;case"onScroll":o!=null&&Se("scroll",e);break;case"onScrollEnd":o!=null&&Se("scrollend",e);break;case"onClick":o!=null&&(e.onclick=sa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ct.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=e[An]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Wt(e,a,o)}}}function On(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var S=a[d];if(S!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:We(e,n,d,S,a,null)}}u&&We(e,n,"srcSet",a.srcSet,a,null),o&&We(e,n,"src",a.src,a,null);return;case"input":Se("invalid",e);var U=d=S=u=null,k=null,rt=null;for(o in a)if(a.hasOwnProperty(o)){var pt=a[o];if(pt!=null)switch(o){case"name":u=pt;break;case"type":S=pt;break;case"checked":k=pt;break;case"defaultChecked":rt=pt;break;case"value":d=pt;break;case"defaultValue":U=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,n));break;default:We(e,n,o,pt,a,null)}}aa(e,d,U,k,rt,S,u,!1);return;case"select":Se("invalid",e),o=S=d=null;for(u in a)if(a.hasOwnProperty(u)&&(U=a[u],U!=null))switch(u){case"value":d=U;break;case"defaultValue":S=U;break;case"multiple":o=U;default:We(e,n,u,U,a,null)}n=d,a=S,e.multiple=!!o,n!=null?gi(e,!!o,n,!1):a!=null&&gi(e,!!o,a,!0);return;case"textarea":Se("invalid",e),d=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(U=a[S],U!=null))switch(S){case"value":o=U;break;case"defaultValue":u=U;break;case"children":d=U;break;case"dangerouslySetInnerHTML":if(U!=null)throw Error(s(91));break;default:We(e,n,S,U,a,null)}Cn(e,o,u,d);return;case"option":for(k in a)if(a.hasOwnProperty(k)&&(o=a[k],o!=null))switch(k){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:We(e,n,k,o,a,null)}return;case"dialog":Se("beforetoggle",e),Se("toggle",e),Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(o=0;o<Bo.length;o++)Se(Bo[o],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(rt in a)if(a.hasOwnProperty(rt)&&(o=a[rt],o!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:We(e,n,rt,o,a,null)}return;default:if(Di(n)){for(pt in a)a.hasOwnProperty(pt)&&(o=a[pt],o!==void 0&&$f(e,n,pt,o,a,void 0));return}}for(U in a)a.hasOwnProperty(U)&&(o=a[U],o!=null&&We(e,n,U,o,a,null))}function Hy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,S=null,U=null,k=null,rt=null,pt=null;for(ut in a){var xt=a[ut];if(a.hasOwnProperty(ut)&&xt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":k=xt;default:o.hasOwnProperty(ut)||We(e,n,ut,null,o,xt)}}for(var lt in o){var ut=o[lt];if(xt=a[lt],o.hasOwnProperty(lt)&&(ut!=null||xt!=null))switch(lt){case"type":d=ut;break;case"name":u=ut;break;case"checked":rt=ut;break;case"defaultChecked":pt=ut;break;case"value":S=ut;break;case"defaultValue":U=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ut!==xt&&We(e,n,lt,ut,o,xt)}}Rn(e,S,U,k,rt,pt,d,u);return;case"select":ut=S=U=lt=null;for(d in a)if(k=a[d],a.hasOwnProperty(d)&&k!=null)switch(d){case"value":break;case"multiple":ut=k;default:o.hasOwnProperty(d)||We(e,n,d,null,o,k)}for(u in o)if(d=o[u],k=a[u],o.hasOwnProperty(u)&&(d!=null||k!=null))switch(u){case"value":lt=d;break;case"defaultValue":U=d;break;case"multiple":S=d;default:d!==k&&We(e,n,u,d,o,k)}n=U,a=S,o=ut,lt!=null?gi(e,!!a,lt,!1):!!o!=!!a&&(n!=null?gi(e,!!a,n,!0):gi(e,!!a,a?[]:"",!1));return;case"textarea":ut=lt=null;for(U in a)if(u=a[U],a.hasOwnProperty(U)&&u!=null&&!o.hasOwnProperty(U))switch(U){case"value":break;case"children":break;default:We(e,n,U,null,o,u)}for(S in o)if(u=o[S],d=a[S],o.hasOwnProperty(S)&&(u!=null||d!=null))switch(S){case"value":lt=u;break;case"defaultValue":ut=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&We(e,n,S,u,o,d)}He(e,lt,ut);return;case"option":for(var Xt in a)if(lt=a[Xt],a.hasOwnProperty(Xt)&&lt!=null&&!o.hasOwnProperty(Xt))switch(Xt){case"selected":e.selected=!1;break;default:We(e,n,Xt,null,o,lt)}for(k in o)if(lt=o[k],ut=a[k],o.hasOwnProperty(k)&&lt!==ut&&(lt!=null||ut!=null))switch(k){case"selected":e.selected=lt&&typeof lt!="function"&&typeof lt!="symbol";break;default:We(e,n,k,lt,o,ut)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)lt=a[ee],a.hasOwnProperty(ee)&&lt!=null&&!o.hasOwnProperty(ee)&&We(e,n,ee,null,o,lt);for(rt in o)if(lt=o[rt],ut=a[rt],o.hasOwnProperty(rt)&&lt!==ut&&(lt!=null||ut!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:We(e,n,rt,lt,o,ut)}return;default:if(Di(n)){for(var qe in a)lt=a[qe],a.hasOwnProperty(qe)&&lt!==void 0&&!o.hasOwnProperty(qe)&&$f(e,n,qe,void 0,o,lt);for(pt in o)lt=o[pt],ut=a[pt],!o.hasOwnProperty(pt)||lt===ut||lt===void 0&&ut===void 0||$f(e,n,pt,lt,o,ut);return}}for(var $ in a)lt=a[$],a.hasOwnProperty($)&&lt!=null&&!o.hasOwnProperty($)&&We(e,n,$,null,o,lt);for(xt in o)lt=o[xt],ut=a[xt],!o.hasOwnProperty(xt)||lt===ut||lt==null&&ut==null||We(e,n,xt,lt,o,ut)}function Sg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Gy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,S=u.initiatorType,U=u.duration;if(d&&U&&Sg(S)){for(S=0,U=u.responseEnd,o+=1;o<a.length;o++){var k=a[o],rt=k.startTime;if(rt>U)break;var pt=k.transferSize,xt=k.initiatorType;pt&&Sg(xt)&&(k=k.responseEnd,S+=pt*(k<U?1:(U-rt)/(k-rt)))}if(--o,n+=8*(d+S)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var th=null,eh=null;function fc(e){return e.nodeType===9?e:e.ownerDocument}function bg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Eg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function nh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ih=null;function Vy(){var e=window.event;return e&&e.type==="popstate"?e===ih?!1:(ih=e,!0):(ih=null,!1)}var Tg=typeof setTimeout=="function"?setTimeout:void 0,ky=typeof clearTimeout=="function"?clearTimeout:void 0,Ag=typeof Promise=="function"?Promise:void 0,Xy=typeof queueMicrotask=="function"?queueMicrotask:typeof Ag<"u"?function(e){return Ag.resolve(null).then(e).catch(jy)}:Tg;function jy(e){setTimeout(function(){throw e})}function ts(e){return e==="head"}function Rg(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Cr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Go(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Go(a);for(var d=a.firstChild;d;){var S=d.nextSibling,U=d.nodeName;d[_s]||U==="SCRIPT"||U==="STYLE"||U==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=S}}else a==="body"&&Go(e.ownerDocument.body);a=u}while(a);Cr(n)}function wg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function ah(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ah(a),so(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Wy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[_s])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=bi(e.nextSibling),e===null)break}return null}function qy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=bi(e.nextSibling),e===null))return null;return e}function Cg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=bi(e.nextSibling),e===null))return null;return e}function sh(e){return e.data==="$?"||e.data==="$~"}function rh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Yy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function bi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var oh=null;function Dg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return bi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Ng(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Ug(e,n,a){switch(n=fc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Go(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);so(e)}var Ei=new Map,Lg=new Set;function hc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ma=B.d;B.d={f:Zy,r:Ky,D:Qy,C:Jy,L:$y,m:tM,X:nM,S:eM,M:iM};function Zy(){var e=Ma.f(),n=ic();return e||n}function Ky(e){var n=Oa(e);n!==null&&n.tag===5&&n.type==="form"?Km(n):Ma.r(e)}var Ar=typeof document>"u"?null:document;function Pg(e,n,a){var o=Ar;if(o&&typeof n=="string"&&n){var u=oe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Lg.has(u)||(Lg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),On(n,"link",e),L(n),o.head.appendChild(n)))}}function Qy(e){Ma.D(e),Pg("dns-prefetch",e,null)}function Jy(e,n){Ma.C(e,n),Pg("preconnect",e,n)}function $y(e,n,a){Ma.L(e,n,a);var o=Ar;if(o&&e&&n){var u='link[rel="preload"][as="'+oe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+oe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+oe(a.imageSizes)+'"]')):u+='[href="'+oe(e)+'"]';var d=u;switch(n){case"style":d=Rr(e);break;case"script":d=wr(e)}Ei.has(d)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ei.set(d,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Vo(d))||n==="script"&&o.querySelector(ko(d))||(n=o.createElement("link"),On(n,"link",e),L(n),o.head.appendChild(n)))}}function tM(e,n){Ma.m(e,n);var a=Ar;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+oe(o)+'"][href="'+oe(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=wr(e)}if(!Ei.has(d)&&(e=_({rel:"modulepreload",href:e},n),Ei.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ko(d)))return}o=a.createElement("link"),On(o,"link",e),L(o),a.head.appendChild(o)}}}function eM(e,n,a){Ma.S(e,n,a);var o=Ar;if(o&&e){var u=za(o).hoistableStyles,d=Rr(e);n=n||"default";var S=u.get(d);if(!S){var U={loading:0,preload:null};if(S=o.querySelector(Vo(d)))U.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ei.get(d))&&lh(e,a);var k=S=o.createElement("link");L(k),On(k,"link",e),k._p=new Promise(function(rt,pt){k.onload=rt,k.onerror=pt}),k.addEventListener("load",function(){U.loading|=1}),k.addEventListener("error",function(){U.loading|=2}),U.loading|=4,dc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:U},u.set(d,S)}}}function nM(e,n){Ma.X(e,n);var a=Ar;if(a&&e){var o=za(a).hoistableScripts,u=wr(e),d=o.get(u);d||(d=a.querySelector(ko(u)),d||(e=_({src:e,async:!0},n),(n=Ei.get(u))&&ch(e,n),d=a.createElement("script"),L(d),On(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function iM(e,n){Ma.M(e,n);var a=Ar;if(a&&e){var o=za(a).hoistableScripts,u=wr(e),d=o.get(u);d||(d=a.querySelector(ko(u)),d||(e=_({src:e,async:!0,type:"module"},n),(n=Ei.get(u))&&ch(e,n),d=a.createElement("script"),L(d),On(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Og(e,n,a,o){var u=(u=at.current)?hc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Rr(a.href),a=za(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Rr(a.href);var d=za(u).hoistableStyles,S=d.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,S),(d=u.querySelector(Vo(e)))&&!d._p&&(S.instance=d,S.state.loading=5),Ei.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ei.set(e,a),d||aM(u,e,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=wr(a),a=za(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Rr(e){return'href="'+oe(e)+'"'}function Vo(e){return'link[rel="stylesheet"]['+e+"]"}function zg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function aM(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),On(n,"link",a),L(n),e.head.appendChild(n))}function wr(e){return'[src="'+oe(e)+'"]'}function ko(e){return"script[async]"+e}function Ig(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+oe(a.href)+'"]');if(o)return n.instance=o,L(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),L(o),On(o,"style",u),dc(o,a.precedence,e),n.instance=o;case"stylesheet":u=Rr(a.href);var d=e.querySelector(Vo(u));if(d)return n.state.loading|=4,n.instance=d,L(d),d;o=zg(a),(u=Ei.get(u))&&lh(o,u),d=(e.ownerDocument||e).createElement("link"),L(d);var S=d;return S._p=new Promise(function(U,k){S.onload=U,S.onerror=k}),On(d,"link",o),n.state.loading|=4,dc(d,a.precedence,e),n.instance=d;case"script":return d=wr(a.src),(u=e.querySelector(ko(d)))?(n.instance=u,L(u),u):(o=a,(u=Ei.get(d))&&(o=_({},a),ch(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),L(u),On(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,dc(o,a.precedence,e));return n.instance}function dc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,S=0;S<o.length;S++){var U=o[S];if(U.dataset.precedence===n)d=U;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function lh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function ch(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var pc=null;function Fg(e,n,a){if(pc===null){var o=new Map,u=pc=new Map;u.set(a,o)}else u=pc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[_s]||d[dn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(n)||"";S=e+S;var U=o.get(S);U?U.push(d):o.set(S,[d])}}return o}function Bg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function sM(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Hg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function rM(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Rr(o.href),d=n.querySelector(Vo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=mc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=d,L(d);return}d=n.ownerDocument||n,o=zg(o),(u=Ei.get(u))&&lh(o,u),d=d.createElement("link"),L(d);var S=d;S._p=new Promise(function(U,k){S.onload=U,S.onerror=k}),On(d,"link",o),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=mc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var uh=0;function oM(e,n){return e.stylesheets&&e.count===0&&_c(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&_c(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&uh===0&&(uh=62500*Gy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&_c(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>uh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function mc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_c(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var gc=null;function _c(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,gc=new Map,n.forEach(lM,e),gc=null,mc.call(e))}function lM(e,n){if(!(n.state.loading&4)){var a=gc.get(e);if(a)var o=a.get(null);else{a=new Map,gc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var S=u[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),d=a.get(S)||o,d===o&&a.set(null,u),a.set(S,u),this.count++,o=mc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Xo={$$typeof:R,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function cM(e,n,a,o,u,d,S,U,k){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=we(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=we(0),this.hiddenUpdates=we(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function Gg(e,n,a,o,u,d,S,U,k,rt,pt,xt){return e=new cM(e,n,a,S,k,rt,pt,xt,U),n=1,d===!0&&(n|=24),d=ai(3,null,null,n),e.current=d,d.stateNode=e,n=Vu(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Wu(d),e}function Vg(e){return e?(e=sr,e):sr}function kg(e,n,a,o,u,d){u=Vg(u),o.context===null?o.context=u:o.pendingContext=u,o=ka(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Xa(e,o,n),a!==null&&(Jn(a,e,n),So(a,e,n))}function Xg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function fh(e,n){Xg(e,n),(e=e.alternate)&&Xg(e,n)}function jg(e){if(e.tag===13||e.tag===31){var n=Ss(e,67108864);n!==null&&Jn(n,e,67108864),fh(e,67108864)}}function Wg(e){if(e.tag===13||e.tag===31){var n=ci();n=no(n);var a=Ss(e,n);a!==null&&Jn(a,e,n),fh(e,n)}}var vc=!0;function uM(e,n,a,o){var u=I.T;I.T=null;var d=B.p;try{B.p=2,hh(e,n,a,o)}finally{B.p=d,I.T=u}}function fM(e,n,a,o){var u=I.T;I.T=null;var d=B.p;try{B.p=8,hh(e,n,a,o)}finally{B.p=d,I.T=u}}function hh(e,n,a,o){if(vc){var u=dh(o);if(u===null)Jf(e,n,o,xc,a),Yg(e,o);else if(dM(u,e,n,a,o))o.stopPropagation();else if(Yg(e,o),n&4&&-1<hM.indexOf(e)){for(;u!==null;){var d=Oa(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=St(d.pendingLanes);if(S!==0){var U=d;for(U.pendingLanes|=2,U.entangledLanes|=2;S;){var k=1<<31-Ft(S);U.entanglements[1]|=k,S&=~k}Xi(d),(ze&6)===0&&(ec=T()+500,Fo(0))}}break;case 31:case 13:U=Ss(d,2),U!==null&&Jn(U,d,2),ic(),fh(d,2)}if(d=dh(o),d===null&&Jf(e,n,o,xc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else Jf(e,n,o,null,a)}}function dh(e){return e=pu(e),ph(e)}var xc=null;function ph(e){if(xc=null,e=Pa(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return xc=e,null}function qg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Q()){case _t:return 2;case Mt:return 8;case ht:case Kt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var mh=!1,es=null,ns=null,is=null,jo=new Map,Wo=new Map,as=[],hM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Yg(e,n){switch(e){case"focusin":case"focusout":es=null;break;case"dragenter":case"dragleave":ns=null;break;case"mouseover":case"mouseout":is=null;break;case"pointerover":case"pointerout":jo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wo.delete(n.pointerId)}}function qo(e,n,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Oa(n),n!==null&&jg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function dM(e,n,a,o,u){switch(n){case"focusin":return es=qo(es,e,n,a,o,u),!0;case"dragenter":return ns=qo(ns,e,n,a,o,u),!0;case"mouseover":return is=qo(is,e,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return jo.set(d,qo(jo.get(d)||null,e,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Wo.set(d,qo(Wo.get(d)||null,e,n,a,o,u)),!0}return!1}function Zg(e){var n=Pa(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Hi(e.priority,function(){Wg(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Hi(e.priority,function(){Wg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=dh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);du=o,a.target.dispatchEvent(o),du=null}else return n=Oa(a),n!==null&&jg(n),e.blockedOn=a,!1;n.shift()}return!0}function Kg(e,n,a){yc(e)&&a.delete(n)}function pM(){mh=!1,es!==null&&yc(es)&&(es=null),ns!==null&&yc(ns)&&(ns=null),is!==null&&yc(is)&&(is=null),jo.forEach(Kg),Wo.forEach(Kg)}function Mc(e,n){e.blockedOn===n&&(e.blockedOn=null,mh||(mh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,pM)))}var Sc=null;function Qg(e){Sc!==e&&(Sc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Sc===e&&(Sc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(ph(o||a)===null)continue;break}var d=Oa(a);d!==null&&(e.splice(n,3),n-=3,df(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Cr(e){function n(k){return Mc(k,e)}es!==null&&Mc(es,e),ns!==null&&Mc(ns,e),is!==null&&Mc(is,e),jo.forEach(n),Wo.forEach(n);for(var a=0;a<as.length;a++){var o=as[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<as.length&&(a=as[0],a.blockedOn===null);)Zg(a),a.blockedOn===null&&as.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],S=u[An]||null;if(typeof d=="function")S||Qg(a);else if(S){var U=null;if(d&&d.hasAttribute("formAction")){if(u=d,S=d[An]||null)U=S.formAction;else if(ph(u)!==null)continue}else U=S.action;typeof U=="function"?a[o+1]=U:(a.splice(o,3),o-=3),Qg(a)}}}function Jg(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function gh(e){this._internalRoot=e}bc.prototype.render=gh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ci();kg(a,o,e,n,null,null)},bc.prototype.unmount=gh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;kg(e.current,2,null,e,null,null),ic(),n[Ci]=null}};function bc(e){this._internalRoot=e}bc.prototype.unstable_scheduleHydration=function(e){if(e){var n=io();e={blockedOn:null,target:e,priority:n};for(var a=0;a<as.length&&n!==0&&n<as[a].priority;a++);as.splice(a,0,e),a===0&&Zg(e)}};var $g=t.version;if($g!=="19.2.3")throw Error(s(527,$g,"19.2.3"));B.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var mM={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ec.isDisabled&&Ec.supportsFiber)try{bt=Ec.inject(mM),Tt=Ec}catch{}}return Zo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=r0,d=o0,S=l0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=Gg(e,1,!1,null,null,a,o,null,u,d,S,Jg),e[Ci]=n.current,Qf(e),new gh(n)},Zo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",d=r0,S=o0,U=l0,k=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(U=a.onRecoverableError),a.formState!==void 0&&(k=a.formState)),n=Gg(e,1,!0,n,a??null,o,u,k,d,S,U,Jg),n.context=Vg(null),a=n.current,o=ci(),o=no(o),u=ka(o),u.callback=null,Xa(a,u,o),a=o,n.current.lanes=a,Fn(n,a),Xi(n),e[Ci]=n.current,Qf(e),new bc(n)},Zo.version="19.2.3",Zo}var c_;function AM(){if(c_)return vh.exports;c_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),vh.exports=TM(),vh.exports}var RM=AM();const wM=_M(RM);var It=tp(),jn=(r=>(r.Solid="SOLID",r.Gradient="GRADIENT",r.Rainbow="RAINBOW",r))(jn||{}),Fi=(r=>(r.Hypotrochoid="INSIDE",r.Epitrochoid="OUTSIDE",r))(Fi||{}),Ra=(r=>(r.TwoD="2D",r.ThreeD="3D",r))(Ra||{}),ge=(r=>(r.Spirograph="SPIROGRAPH",r.Fourier="FOURIER",r.Text="TEXT",r))(ge||{}),sn=(r=>(r.Circle="CIRCLE",r.Square="SQUARE",r.Triangle="TRIANGLE",r.Stadium="STADIUM",r.Star="STAR",r.Hexagon="HEXAGON",r.Flower="FLOWER",r.Line="LINE",r.Cross="CROSS",r.Figure8="FIGURE8",r.Spiral="SPIRAL",r))(sn||{}),en=(r=>(r.None="NONE",r.Sine="SINE",r.Fourier="FOURIER",r))(en||{});const CM={renderMode:"2D",generatorMode:"SPIROGRAPH",type:"INSIDE",statorShape:"CIRCLE",rotorShape:"CIRCLE",outerRadius:100,innerRadius:35,penOffset:45,resolution:2,rotations:15,color:"#00ffcc",colorMode:"RAINBOW",lineWidth:2,opacity:.9,drawSpeed:5,zAmplitude:40,zFrequency:5,zModulationType:"SINE",zAmplitude2:0,zFrequency2:1,zModulationType2:"NONE",perspective:!0,showProjection:!0,showTrace:!0,fourierCount:10,textPhrase:"Spiro",videoFormat:"webm-vp9"},ep=(r,t=1)=>{if(!r||r.trim()==="")return[];const i=document.createElement("canvas"),s=i.getContext("2d",{willReadFrequently:!0});if(!s)return[];const l=120,c=`bold ${l}px Arial, Helvetica, sans-serif`;s.font=c;const f=s.measureText(r),h=r.length*l*.7,m=Math.max(f.width,h),p=Math.ceil(m+200),g=Math.ceil(l+150);i.width=p,i.height=g,s.font=c,s.textAlign="center",s.textBaseline="middle",s.fillStyle="black",s.fillRect(0,0,p,g),s.fillStyle="white",s.fillText(r,p/2,g/2);const x=s.getImageData(0,0,p,g).data,y=[],b=2,E=t*1.5;for(let R=0;R<g;R+=b)for(let w=0;w<p;w+=b){const P=(R*p+w)*4;x[P]>50&&y.push({x:(w-p/2)*E,y:(R-g/2)*E})}if(y.length===0)return[{x:-50,y:-50},{x:-50/2,y:-50,penUp:!0},{x:0,y:-50},{x:50/2,y:-50,penUp:!0},{x:50,y:-50},{x:50,y:50}];const M=8e3;let v=y;if(y.length>M){const R=Math.floor(y.length/M);if(R>1){v=[];for(let w=0;w<y.length;w+=R)v.push(y[w])}}const C=[];if(v.length>0){let R=v[0];for(R.penUp=!0,v[0]=v[v.length-1],v.pop(),C.push(R);v.length>0;){let w=-1,P=1/0;const O=Math.min(v.length,1e3);for(let N=0;N<O;N++){const H=v[N],A=H.x-R.x,D=H.y-R.y,G=A*A+D*D;if(G<P&&(P=G,w=N,G<(b*E*3)**2))break}if(w!==-1){R=v[w];const N=(b*E*1.5)**2;P>N&&(R.penUp=!0),v[w]=v[v.length-1],v.pop(),C.push(R)}else R=v[0],R.penUp=!0,v[0]=v[v.length-1],v.pop(),C.push(R)}}return C},DM=(r,t)=>{for(r=Math.abs(Math.round(r)),t=Math.abs(Math.round(t));t;)r%=t,[r,t]=[t,r];return r},vv=(r,t)=>{const i=DM(r,t);return Math.min(Math.max(t/i,1),100)},xv=r=>{const t=[],i=r.length;for(let s=0;s<i;s++){let l=0,c=0;for(let p=0;p<i;p++){const g=2*Math.PI*s*p/i,_=Math.cos(g),x=Math.sin(g);l+=r[p].x*_+r[p].y*x,c+=r[p].y*_-r[p].x*x}l=l/i,c=c/i;let f=s;s>i/2&&(f=s-i);const h=Math.sqrt(l*l+c*c),m=Math.atan2(c,l);t.push({re:l,im:c,freq:f,amp:h,phase:m})}return t.sort((s,l)=>l.amp-s.amp)},NM=()=>{const[r,t]=It.useState(CM),[i,s]=It.useState(window.innerWidth>768),[l,c]=It.useState(0),[f,h]=It.useState(0),[m,p]=It.useState(!1),[g,_]=It.useState(!0),[x,y]=It.useState([]),[b,E]=It.useState(!1);It.useEffect(()=>{if(r.generatorMode===ge.Text&&r.textPhrase){const H=setTimeout(()=>{const A=ep(r.textPhrase,1);if(A.length===0){y([]);return}const D=600;let G=A;if(A.length>D){const Y=Math.ceil(A.length/D);G=A.filter((et,it)=>it%Y===0)}const q=xv(G);y(q),t(Y=>({...Y,fourierCount:q.length}))},300);return()=>clearTimeout(H)}},[r.textPhrase,r.generatorMode]);const M=It.useCallback(()=>{c(H=>H+1),_(!0),window.innerWidth<=768&&s(!1)},[]),v=It.useCallback(()=>{_(H=>!H)},[]),C=It.useCallback(()=>{_(!1)},[]),R=It.useCallback(()=>{t(H=>({...H,showProjection:!H.showProjection}))},[]),w=It.useCallback(()=>{t(H=>({...H,showTrace:!H.showTrace}))},[]),P=It.useCallback(()=>{h(H=>H+1)},[]),O=It.useCallback(()=>{m?p(!1):E(!0)},[m]),N=It.useCallback(H=>{t(A=>({...A,videoFormat:H})),p(!0),c(A=>A+1),_(!0),E(!1)},[]);return{config:r,setConfig:t,isSidebarOpen:i,setSidebarOpen:s,redrawTrigger:l,downloadTrigger:f,isPlaying:g,stop:C,isRecording:m,isRecordingModalOpen:b,setIsRecordingModalOpen:E,handlePlay:M,togglePause:v,toggleProjection:R,toggleTrace:w,handleDownload:P,handleOpenRecordingModal:O,handleStartRecording:N,fourierData:x,setFourierData:y}};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),LM=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase()),u_=r=>{const t=LM(r);return t.charAt(0).toUpperCase()+t.slice(1)},yv=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim(),PM=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var OM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=It.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:f,...h},m)=>It.createElement("svg",{ref:m,...OM,width:t,height:t,stroke:r,strokeWidth:s?Number(i)*24/Number(t):i,className:yv("lucide",l),...!c&&!PM(h)&&{"aria-hidden":"true"},...h},[...f.map(([p,g])=>It.createElement(p,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=(r,t)=>{const i=It.forwardRef(({className:s,...l},c)=>It.createElement(zM,{ref:c,iconNode:t,className:yv(`lucide-${UM(u_(r))}`,`lucide-${r}`,s),...l}));return i.displayName=u_(r),i};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],FM=De("activity",IM);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=[["path",{d:"M4.929 4.929 19.07 19.071",key:"196cmz"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],HM=De("ban",BM);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],VM=De("box",GM);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],XM=De("chevron-right",kM);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],WM=De("circle-alert",jM);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]],YM=De("circle-dot",qM);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZM=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],KM=De("circle",ZM);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Mv=De("download",QM);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JM=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Sv=De("eye-off",JM);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $M=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],np=De("eye",$M);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=[["path",{d:"M9 10h.01",key:"qbtxuw"}],["path",{d:"M15 10h.01",key:"1qmjsl"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",key:"uwwb07"}]],bv=De("ghost",tS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],nS=De("menu",eS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],aS=De("monitor",iS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],rS=De("palette",sS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]],lS=De("panel-left-close",oS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]],uS=De("panel-left-open",cS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],Ev=De("pause",fS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]],dS=De("pen-tool",hS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],mS=De("pencil",pS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Tv=De("play",gS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Av=De("rotate-ccw",_S);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],xS=De("rotate-cw",vS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]],MS=De("scan-line",yS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]],bS=De("shapes",SS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]],TS=De("shuffle",ES);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],f_=De("sliders-vertical",AS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}]],wS=De("square-dashed",RS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],DS=De("square",CS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],US=De("type",NS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],Rv=De("video",LS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]],OS=De("waves",PS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ou=De("x",zS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],FS=De("zap",IS),wv=({className:r="w-8 h-8"})=>{const i=`icon-gradient-${It.useId().replace(/:/g,"")}`;return X.jsxs("svg",{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",className:r,fill:"none",children:[X.jsx("defs",{children:X.jsxs("linearGradient",{id:i,x1:"0",y1:"0",x2:"512",y2:"512",gradientUnits:"userSpaceOnUse",children:[X.jsx("stop",{offset:"0%",stopColor:"#60a5fa"}),X.jsx("stop",{offset:"100%",stopColor:"#c084fc"})]})}),X.jsxs("g",{transform:"translate(256, 256)",children:[X.jsx("ellipse",{cx:"0",cy:"0",rx:"200",ry:"80",stroke:`url(#${i})`,strokeWidth:"40",transform:"rotate(0)"}),X.jsx("ellipse",{cx:"0",cy:"0",rx:"200",ry:"80",stroke:`url(#${i})`,strokeWidth:"40",transform:"rotate(60)"}),X.jsx("ellipse",{cx:"0",cy:"0",rx:"200",ry:"80",stroke:`url(#${i})`,strokeWidth:"40",transform:"rotate(120)"}),X.jsx("circle",{cx:"0",cy:"0",r:"40",fill:`url(#${i})`})]})]})},BS=({isSidebarOpen:r,isPlaying:t,onToggleSidebar:i,onTogglePause:s,onPlay:l})=>X.jsxs("div",{className:"md:hidden flex items-center justify-between p-4 bg-slate-900 border-b border-slate-800 shrink-0 z-50",children:[X.jsxs("div",{className:"flex items-center gap-3",children:[X.jsx(wv,{className:"w-8 h-8"}),X.jsx("h1",{className:"text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400",children:"SpiroVerse"})]}),X.jsxs("div",{className:"flex gap-4 items-center",children:[X.jsx("button",{onClick:s,className:t?"text-amber-400":"text-emerald-400",title:t?"Pause":"Resume",children:t?X.jsx(Ev,{size:20,fill:"currentColor"}):X.jsx(Tv,{size:20,fill:"currentColor"})}),X.jsx("button",{onClick:l,className:"text-slate-300",title:"Restart Pattern",children:X.jsx(Av,{size:20})}),X.jsx("button",{onClick:i,className:"text-white p-1",children:r?X.jsx(ou,{size:24}):X.jsx(nS,{size:24})})]})]}),qi=({label:r,value:t,min:i,max:s,onChange:l,step:c=1,compact:f=!1})=>X.jsxs("div",{className:`flex flex-col gap-1 group ${f?"gap-0.5":"gap-1"}`,children:[X.jsxs("div",{className:`flex justify-between ${f?"text-[10px]":"text-[11px]"} text-slate-400 group-hover:text-slate-200 transition-colors`,children:[X.jsx("span",{children:r}),X.jsx("span",{className:"text-slate-200 font-mono font-bold",children:Math.round(t*100)/100})]}),X.jsx("input",{type:"range",min:i,max:s,step:c,value:t,onChange:h=>l(parseFloat(h.target.value)),className:`w-full ${f?"h-1":"h-1.5"} bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400 transition-all`})]}),HS=({amplitude:r,frequency:t,type:i,fourierData:s=[]})=>{const m=It.useMemo(()=>{if(i===en.None)return"M 0 20 L 300 20";let p="M 0 20 ";const g=300;if(i===en.Sine)for(let _=0;_<=g;_++){const x=_/g,y=x*300,b=x*t*Math.PI*2,E=Math.sin(b)*(r*.064);p+=`L ${y} ${20-E} `}else{if(!s||s.length===0)return"M 0 20 L 300 20";let _=0;const x=200,y=Math.min(s.length,150);for(let b=0;b<=x;b++){const E=b/x*Math.PI*2;let M=0;for(let v=0;v<y;v++){const{freq:C,amp:R,phase:w}=s[v];M+=R*Math.sin(C*E+w)}Math.abs(M)>_&&(_=Math.abs(M))}for(let b=0;b<=g;b++){const E=b/g*300,M=b/g*Math.PI*2*t;let v=0;for(let w=0;w<y;w++){const{freq:P,amp:O,phase:N}=s[w];v+=O*Math.sin(P*M+N)}const R=(_>1e-4?v/_:0)*(r*.064);p+=`L ${E} ${20-R} `}}return p},[r,t,20,.064,i,s]);return X.jsxs("div",{className:"w-full bg-slate-950/50 rounded border border-slate-700/50 h-[40px] relative overflow-hidden mb-2",children:[X.jsx("div",{className:"absolute top-1/2 left-0 right-0 h-px bg-slate-800"}),X.jsx("svg",{width:"100%",height:"100%",viewBox:"0 0 300 40",preserveAspectRatio:"none",className:"absolute inset-0",children:X.jsx("path",{d:m,fill:"none",stroke:i===en.Sine?"#818cf8":i===en.Fourier?"#f472b6":"#334155",strokeWidth:"2",vectorEffect:"non-scaling-stroke"})})]})},h_=[{type:sn.Circle,label:"Circle"},{type:sn.Line,label:"Line"},{type:sn.Square,label:"Square"},{type:sn.Triangle,label:"Triangle"},{type:sn.Stadium,label:"Stadium"},{type:sn.Hexagon,label:"Hexagon"},{type:sn.Cross,label:"Cross"},{type:sn.Figure8,label:"Figure 8"},{type:sn.Star,label:"Star"},{type:sn.Flower,label:"Flower"},{type:sn.Spiral,label:"Snail"}],GS=({config:r,setConfig:t})=>{const i=(l,c)=>{t(f=>({...f,[l]:c}))},s=()=>{const l=vv(r.outerRadius,r.innerRadius);i("rotations",l)};return r.generatorMode!==ge.Spirograph?r.generatorMode===ge.Fourier||r.generatorMode===ge.Text?X.jsxs("div",{className:"space-y-4",children:[X.jsx("div",{className:"flex items-center justify-between border-b border-slate-700 pb-2",children:X.jsxs("div",{className:"flex items-center gap-2 text-blue-400 font-semibold",children:[X.jsx(f_,{size:16})," Geometry"]})}),X.jsx(qi,{label:"Epicycles",value:r.fourierCount,min:1,max:1e3,step:1,onChange:l=>i("fourierCount",Math.floor(l))})]}):null:X.jsxs(X.Fragment,{children:[X.jsxs("div",{className:"space-y-3",children:[X.jsxs("div",{className:"flex items-center gap-2 text-orange-400 font-semibold border-b border-slate-700 pb-2",children:[X.jsx(bS,{size:16})," Shapes"]}),X.jsxs("div",{className:"space-y-2",children:[X.jsx("label",{className:"text-xs text-slate-400 font-medium italic",children:"Fixed Outer Ring"}),X.jsx("div",{className:"grid grid-cols-3 gap-1",children:h_.map(l=>X.jsx("button",{onClick:()=>i("statorShape",l.type),className:`text-[10px] py-1 px-2 rounded border transition-all ${r.statorShape===l.type?"bg-orange-500 border-orange-500 text-white shadow-md":"border-slate-700 text-slate-400 hover:bg-slate-700"}`,children:l.label},`stator-${l.type}`))})]}),X.jsxs("div",{className:"space-y-2",children:[X.jsx("label",{className:"text-xs text-slate-400 font-medium italic",children:"Moving Inner Wheel"}),X.jsx("div",{className:"grid grid-cols-3 gap-1",children:h_.map(l=>X.jsx("button",{onClick:()=>i("rotorShape",l.type),className:`text-[10px] py-1 px-2 rounded border transition-all ${r.rotorShape===l.type?"bg-orange-500 border-orange-500 text-white shadow-md":"border-slate-700 text-slate-400 hover:bg-slate-700"}`,children:l.label},`rotor-${l.type}`))})]})]}),X.jsxs("div",{className:"space-y-4",children:[X.jsxs("div",{className:"flex items-center justify-between border-b border-slate-700 pb-2",children:[X.jsxs("div",{className:"flex items-center gap-2 text-blue-400 font-semibold",children:[X.jsx(f_,{size:16})," Geometry"]}),X.jsxs("button",{onClick:s,className:"text-[10px] bg-slate-700 hover:bg-slate-600 text-white px-2 py-1 rounded flex items-center gap-1 border border-slate-600",title:"Calculate minimum rotations for perfect closure",children:[X.jsx(xS,{size:10})," Auto-Loop"]})]}),X.jsxs("div",{className:"flex gap-2 mb-2",children:[X.jsxs("button",{onClick:()=>i("type",Fi.Hypotrochoid),className:`flex-1 py-2 px-2 rounded-md text-xs flex items-center justify-center gap-2 border transition-all ${r.type===Fi.Hypotrochoid?"bg-blue-500/20 border-blue-500 text-blue-200":"border-slate-700 hover:bg-slate-700"}`,children:[X.jsx(YM,{size:14})," Inside"]}),X.jsxs("button",{onClick:()=>i("type",Fi.Epitrochoid),className:`flex-1 py-2 px-2 rounded-md text-xs flex items-center justify-center gap-2 border transition-all ${r.type===Fi.Epitrochoid?"bg-purple-500/20 border-purple-500 text-purple-200":"border-slate-700 hover:bg-slate-700"}`,children:[X.jsx(KM,{size:14})," Outside"]})]}),X.jsx(qi,{label:"Fixed Ring Size",value:r.outerRadius,min:10,max:300,onChange:l=>i("outerRadius",l)}),X.jsx(qi,{label:"Wheel Size",value:r.innerRadius,min:2,max:200,onChange:l=>i("innerRadius",l)}),X.jsx(qi,{label:"Pen Placement",value:r.penOffset,min:0,max:300,onChange:l=>i("penOffset",l)}),X.jsx(qi,{label:"Complexity (Rotations)",value:r.rotations,min:1,max:100,onChange:l=>i("rotations",l)})]})]})},VS=({config:r,setConfig:t,fourierData:i})=>{if(r.renderMode!==Ra.ThreeD||r.generatorMode===ge.Fourier)return null;const s=(c,f)=>{t(h=>({...h,[c]:f}))},l=({label:c,colorClass:f,type:h,freq:m,amp:p,onChangeType:g,onChangeFreq:_,onChangeAmp:x})=>X.jsxs("div",{className:"bg-slate-900/50 rounded-lg p-2 border border-slate-800",children:[X.jsx("div",{className:`text-[11px] font-bold mb-2 ${f}`,children:c}),X.jsxs("div",{className:"flex gap-1 mb-2",children:[X.jsxs("button",{onClick:()=>g(en.None),className:`flex-1 py-1 rounded text-[10px] flex items-center justify-center gap-1 border transition-all ${h===en.None?"bg-slate-700 border-slate-500 text-slate-200":"bg-slate-900 border-slate-800 text-slate-500"}`,children:[X.jsx(HM,{size:10})," None"]}),X.jsxs("button",{onClick:()=>g(en.Sine),className:`flex-1 py-1 rounded text-[10px] flex items-center justify-center gap-1 border transition-all ${h===en.Sine?"bg-indigo-500/30 border-indigo-400 text-indigo-200":"bg-slate-900 border-slate-800 text-slate-500"}`,children:[X.jsx(OS,{size:10})," Sine"]}),X.jsxs("button",{onClick:()=>g(en.Fourier),className:`flex-1 py-1 rounded text-[10px] flex items-center justify-center gap-1 border transition-all ${h===en.Fourier?"bg-pink-500/30 border-pink-400 text-pink-200":"bg-slate-900 border-slate-800 text-slate-500"}`,children:[X.jsx(dS,{size:10})," Path"]})]}),X.jsx(HS,{amplitude:p,frequency:m,type:h,fourierData:i}),h!==en.None&&X.jsxs("div",{className:"space-y-2",children:[X.jsx(qi,{label:"Amplitude",value:p,min:0,max:250,onChange:x,compact:!0}),X.jsx(qi,{label:"Frequency",value:m,min:0,max:30,onChange:_,compact:!0})]})]});return X.jsxs("div",{className:"border-2 border-dashed border-indigo-500/30 bg-indigo-500/5 rounded-xl p-3 space-y-3 animate-in fade-in slide-in-from-left-4 duration-300",children:[X.jsxs("div",{className:"flex items-center justify-between border-b border-indigo-500/20 pb-2",children:[X.jsxs("div",{className:"flex items-center gap-2 text-indigo-400 font-semibold",children:[X.jsx(VM,{size:16})," 3D Modulation"]}),X.jsxs("button",{onClick:()=>s("showProjection",!r.showProjection),className:`text-[10px] px-2 py-1 rounded flex items-center gap-1 border transition-colors ${r.showProjection?"bg-blue-600/20 border-blue-500 text-blue-200":"bg-slate-900 border-slate-600 text-slate-400"}`,title:"Toggle 2D Ground Projection",children:[r.showProjection?X.jsx(np,{size:12}):X.jsx(Sv,{size:12})," Projection"]})]}),X.jsx(l,{label:"Wave A (Back Wall)",colorClass:"text-indigo-300",type:r.zModulationType,freq:r.zFrequency,amp:r.zAmplitude,onChangeType:c=>s("zModulationType",c),onChangeFreq:c=>s("zFrequency",c),onChangeAmp:c=>s("zAmplitude",c)}),X.jsx("div",{className:"flex items-center justify-center text-slate-600 text-xs font-bold",children:"+"}),X.jsx(l,{label:"Wave B (Side Wall)",colorClass:"text-emerald-300",type:r.zModulationType2,freq:r.zFrequency2,amp:r.zAmplitude2,onChangeType:c=>s("zModulationType2",c),onChangeFreq:c=>s("zFrequency2",c),onChangeAmp:c=>s("zAmplitude2",c)})]})},kS=({config:r,setConfig:t,fourierData:i})=>{const s=(c,f)=>{t(h=>({...h,[c]:f}))},l=()=>{const c=Math.floor(Math.random()*80)+10,f=Math.floor(Math.random()*120)+40,h=Math.floor(Math.random()*80)+10,m=Math.random()>.5?Fi.Hypotrochoid:Fi.Epitrochoid,p=jn.Rainbow,g=`#${Math.floor(Math.random()*16777215).toString(16)}`,_=Object.values(sn),x=_[Math.floor(Math.random()*_.length)],y=_[Math.floor(Math.random()*_.length)];t(b=>({...b,type:m,rotorShape:x,statorShape:y,innerRadius:c,outerRadius:f,penOffset:h,colorMode:p,color:g,rotations:vv(f,c),zAmplitude:Math.random()*80+20,zFrequency:Math.floor(Math.random()*8)+1,zModulationType:en.Sine,zAmplitude2:Math.random()>.5?Math.random()*60+10:0,zFrequency2:Math.floor(Math.random()*4)+1,zModulationType2:Math.random()>.5?en.Sine:en.None,showProjection:!0}))};return X.jsxs("div",{className:"p-6 flex flex-col gap-6 text-sm",children:[(r.generatorMode===ge.Spirograph||r.generatorMode===ge.Text)&&X.jsxs("div",{className:"space-y-4",children:[X.jsxs("div",{className:"flex items-center gap-2 text-green-400 font-semibold border-b border-slate-700 pb-2",children:[X.jsx(FS,{size:16})," Performance"]}),X.jsx(qi,{label:"Draw Speed",value:r.drawSpeed,min:.1,max:50,step:.1,onChange:c=>s("drawSpeed",c)})]}),X.jsxs("div",{className:"flex flex-col gap-4",children:[r.generatorMode!==ge.Fourier&&X.jsxs("div",{className:"flex bg-slate-800 p-1 rounded-lg",children:[X.jsxs("button",{onClick:()=>s("renderMode",Ra.TwoD),className:`flex-1 flex items-center justify-center gap-2 py-2 rounded-md transition-all ${r.renderMode===Ra.TwoD?"bg-blue-600 text-white shadow-lg":"text-slate-400 hover:text-white"}`,children:[X.jsx(aS,{size:16})," 2D Flat"]}),X.jsxs("button",{onClick:()=>s("renderMode",Ra.ThreeD),className:`flex-1 flex items-center justify-center gap-2 py-2 rounded-md transition-all ${r.renderMode===Ra.ThreeD?"bg-indigo-600 text-white shadow-lg":"text-slate-400 hover:text-white"}`,children:[X.jsx(wS,{size:16})," 3D Space"]})]}),X.jsxs("div",{className:"flex bg-slate-800 p-1 rounded-lg",children:[X.jsxs("button",{onClick:()=>s("generatorMode",ge.Spirograph),className:`flex-1 flex items-center justify-center gap-2 py-2 rounded-md transition-all ${r.generatorMode===ge.Spirograph?"bg-emerald-600 text-white shadow-lg":"text-slate-400 hover:text-white"}`,children:[X.jsx(FM,{size:16})," Spiro"]}),X.jsxs("button",{onClick:()=>{s("generatorMode",ge.Fourier),s("renderMode",Ra.TwoD)},className:`flex-1 flex items-center justify-center gap-2 py-2 rounded-md transition-all ${r.generatorMode===ge.Fourier?"bg-pink-600 text-white shadow-lg":"text-slate-400 hover:text-white"}`,children:[X.jsx(mS,{size:16})," Path"]}),X.jsxs("button",{onClick:()=>{s("generatorMode",ge.Text),s("showProjection",!1)},className:`flex-1 flex items-center justify-center gap-2 py-2 rounded-md transition-all ${r.generatorMode===ge.Text?"bg-amber-600 text-white shadow-lg":"text-slate-400 hover:text-white"}`,children:[X.jsx(US,{size:16})," Text"]})]}),r.generatorMode===ge.Text&&X.jsxs("div",{className:"bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 space-y-2",children:[X.jsx("label",{className:"text-amber-200 text-xs font-semibold",children:"Phrase to Draw"}),X.jsx("input",{type:"text",value:r.textPhrase,onChange:c=>s("textPhrase",c.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-white focus:ring-2 focus:ring-amber-500 outline-none",placeholder:"Enter text...",maxLength:20})]}),r.generatorMode===ge.Spirograph&&X.jsxs("button",{onClick:l,className:"w-full bg-slate-800 hover:bg-slate-700 text-white py-2 rounded-md font-semibold transition-all flex items-center justify-center gap-2 border border-slate-700",children:[X.jsx(TS,{size:16})," Randomize Params"]})]}),r.generatorMode===ge.Fourier&&X.jsxs("div",{className:"bg-pink-500/10 border border-pink-500/30 rounded-lg p-4 text-center",children:[X.jsx("p",{className:"text-pink-200 text-xs font-semibold mb-1",children:"Interactive Mode"}),X.jsx("p",{className:"text-slate-400 text-[11px]",children:"Draw a continuous loop on the canvas to see the Fourier Transform reconstruct it with epicycles."})]}),X.jsx(VS,{config:r,setConfig:t,fourierData:i}),X.jsx(GS,{config:r,setConfig:t}),X.jsxs("div",{className:"space-y-4 pb-4",children:[X.jsxs("div",{className:"flex items-center justify-between border-b border-slate-700 pb-2",children:[X.jsxs("div",{className:"flex items-center gap-2 text-pink-400 font-semibold",children:[X.jsx(rS,{size:16})," Style"]}),X.jsxs("button",{onClick:()=>s("showTrace",!r.showTrace),className:`text-[10px] px-2 py-1 rounded flex items-center gap-1 border transition-colors ${r.showTrace?"bg-pink-600/20 border-pink-500 text-pink-200":"bg-slate-800 border-slate-600 text-slate-400"}`,title:"Toggle Drawing Trace",children:[r.showTrace?X.jsx(np,{size:12}):X.jsx(bv,{size:12})," Trace"]})]}),X.jsxs("div",{className:"flex gap-2 mb-2",children:[X.jsx("button",{onClick:()=>s("colorMode",jn.Solid),className:`flex-1 py-1 px-2 rounded text-xs border ${r.colorMode===jn.Solid?"bg-slate-600 border-white text-white":"border-slate-600 text-slate-400"}`,children:"Solid"}),X.jsx("button",{onClick:()=>s("colorMode",jn.Rainbow),className:`flex-1 py-1 px-2 rounded text-xs border ${r.colorMode===jn.Rainbow?"bg-gradient-to-r from-red-500 via-green-500 to-blue-500 text-white border-transparent":"border-slate-600 text-slate-400"}`,children:"Rainbow"})]}),r.colorMode===jn.Solid&&X.jsxs("div",{className:"flex justify-between items-center px-1",children:[X.jsx("span",{children:"Color"}),X.jsx("input",{type:"color",value:r.color,onChange:c=>s("color",c.target.value),className:"w-8 h-8 rounded cursor-pointer bg-transparent border-none"})]}),X.jsx(qi,{label:"Line Thickness",value:r.lineWidth,min:1,max:30,step:.5,onChange:c=>s("lineWidth",c)}),X.jsx(qi,{label:"Glow Opacity",value:r.opacity,min:.1,max:1,step:.1,onChange:c=>s("opacity",c)})]})]})},XS=({isOpen:r,setIsOpen:t,config:i,setConfig:s,fourierData:l,setFourierData:c})=>X.jsxs(X.Fragment,{children:[r&&X.jsx("div",{className:"md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30",onClick:()=>t(!1)}),X.jsxs("aside",{className:`
        fixed inset-y-0 left-0 z-40 bg-slate-900 border-r border-slate-800
        transition-all duration-300 ease-in-out
        md:relative overflow-hidden
        ${r?"translate-x-0 w-96":"-translate-x-full w-96 md:w-0 md:translate-x-0"}
        flex flex-col flex-shrink-0 shadow-2xl md:shadow-none
      `,children:[X.jsxs("div",{className:"p-5 flex items-center justify-between border-b border-slate-800 shrink-0",children:[X.jsxs("div",{className:"flex items-center gap-3",children:[X.jsx(wv,{className:"w-8 h-8"}),X.jsx("h1",{className:"text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 whitespace-nowrap",children:"SpiroVerse"})]}),X.jsx("button",{className:"md:hidden text-slate-400 hover:text-white",onClick:()=>t(!1),children:X.jsx(ou,{size:20})})]}),X.jsx("div",{className:"flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar",children:X.jsxs("div",{className:"w-96",children:[" ",X.jsx(kS,{config:i,setConfig:s,fourierData:l,setFourierData:c})]})}),X.jsx("div",{className:"md:hidden p-4 border-t border-slate-800 bg-slate-900",children:X.jsxs("button",{onClick:()=>t(!1),className:"w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2",children:["View Drawing ",X.jsx(XM,{size:18})]})})]})]});function jS(){const[r,t]=It.useState(null),[i,s]=It.useState(!1);It.useEffect(()=>{const c=f=>{f.preventDefault(),t(f),s(!0)};return window.addEventListener("beforeinstallprompt",c),()=>{window.removeEventListener("beforeinstallprompt",c)}},[]);const l=async()=>{if(!r)return;await r.prompt();const{outcome:c}=await r.userChoice;c==="accepted"&&(t(null),s(!1))};return i?X.jsxs("div",{className:"fixed bottom-4 left-4 right-4 md:left-auto md:right-4 z-50 bg-slate-800 border border-slate-700 p-4 rounded-lg shadow-xl flex items-center justify-between gap-4 animate-in slide-in-from-bottom-2",children:[X.jsxs("div",{className:"flex items-center gap-3",children:[X.jsx("div",{className:"p-2 bg-blue-600 rounded-lg",children:X.jsx(Mv,{className:"w-6 h-6 text-white"})}),X.jsxs("div",{children:[X.jsx("h3",{className:"font-semibold text-white",children:"Install App"}),X.jsx("p",{className:"text-sm text-slate-300",children:"Add to home screen for better experience"})]})]}),X.jsxs("div",{className:"flex items-center gap-2",children:[X.jsx("button",{onClick:()=>s(!1),className:"p-2 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition-colors",children:X.jsx(ou,{className:"w-5 h-5"})}),X.jsx("button",{onClick:l,className:"px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors",children:"Install"})]})]}):null}const WS=({showProjection:r,showTrace:t,isPlaying:i,isRecording:s=!1,onToggleProjection:l,onToggleTrace:c,onTogglePause:f,onPlay:h,onDownload:m,onToggleRecording:p})=>X.jsxs("div",{className:"absolute top-4 right-4 z-10 flex gap-2",children:[X.jsxs("button",{onClick:c,className:`backdrop-blur p-3 rounded-full border shadow-lg transition-all flex items-center gap-2 px-4 ${t?"bg-pink-600/80 text-white border-pink-400":"bg-slate-800/80 text-slate-300 border-slate-600"}`,title:"Toggle Drawing Trace",children:[t?X.jsx(bv,{size:20}):X.jsx(MS,{size:20}),X.jsx("span",{className:"text-xs font-bold hidden lg:inline",children:t?"Trace On":"Trace Off"})]}),X.jsxs("button",{onClick:l,className:`backdrop-blur p-3 rounded-full border shadow-lg transition-all flex items-center gap-2 px-4 ${r?"bg-blue-600/80 text-white border-blue-400":"bg-slate-800/80 text-slate-300 border-slate-600"}`,title:"Toggle 2D Projection",children:[r?X.jsx(np,{size:20}):X.jsx(Sv,{size:20}),X.jsx("span",{className:"text-xs font-bold hidden lg:inline",children:"Projection"})]}),X.jsx("button",{onClick:f,className:`p-3 rounded-full border shadow-lg transition-transform active:scale-95 hidden md:block ${i?"bg-amber-500/90 text-white border-amber-400 hover:bg-amber-500":"bg-emerald-600/90 text-white border-emerald-500 hover:bg-emerald-500"}`,title:i?"Pause Animation":"Resume Animation",children:i?X.jsx(Ev,{size:20,fill:"currentColor"}):X.jsx(Tv,{size:20,fill:"currentColor"})}),X.jsx("button",{onClick:h,className:"bg-slate-800/80 backdrop-blur text-white p-3 rounded-full hover:bg-slate-700 border border-slate-600 shadow-lg hidden md:block",title:"Restart Pattern",children:X.jsx(Av,{size:20})}),X.jsx("button",{onClick:p,className:`backdrop-blur p-3 rounded-full border shadow-lg transition-all ${s?"bg-red-600 text-white border-red-500 animate-pulse":"bg-slate-800/80 text-white border-slate-600 hover:bg-slate-700"}`,title:s?"Stop Recording":"Record Video",children:s?X.jsx(DS,{size:20,fill:"currentColor"}):X.jsx(Rv,{size:20})}),X.jsx("button",{onClick:m,className:"bg-slate-800/80 backdrop-blur text-white p-3 rounded-full hover:bg-slate-700 border border-slate-600 shadow-lg",title:"Download Snapshot",children:X.jsx(Mv,{size:20})})]});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ip="182",jr={ROTATE:0,DOLLY:1,PAN:2},Xr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qS=0,d_=1,YS=2,Yc=1,ZS=2,al=3,ms=0,ni=1,Yi=2,Ca=0,Wr=1,p_=2,m_=3,g_=4,KS=5,Gs=100,QS=101,JS=102,$S=103,tb=104,eb=200,nb=201,ib=202,ab=203,rd=204,od=205,sb=206,rb=207,ob=208,lb=209,cb=210,ub=211,fb=212,hb=213,db=214,ld=0,cd=1,ud=2,Yr=3,fd=4,hd=5,dd=6,pd=7,Cv=0,pb=1,mb=2,Ji=0,Dv=1,Nv=2,Uv=3,Lv=4,Pv=5,Ov=6,zv=7,Iv=300,js=301,Zr=302,md=303,gd=304,lu=306,_d=1e3,wa=1001,vd=1002,zn=1003,gb=1004,Tc=1005,Vn=1006,bh=1007,ks=1008,pi=1009,Fv=1010,Bv=1011,rl=1012,ap=1013,ea=1014,Ki=1015,Na=1016,sp=1017,rp=1018,ol=1020,Hv=35902,Gv=35899,Vv=1021,kv=1022,Bi=1023,Ua=1026,Xs=1027,Xv=1028,op=1029,Kr=1030,lp=1031,cp=1033,Zc=33776,Kc=33777,Qc=33778,Jc=33779,xd=35840,yd=35841,Md=35842,Sd=35843,bd=36196,Ed=37492,Td=37496,Ad=37488,Rd=37489,wd=37490,Cd=37491,Dd=37808,Nd=37809,Ud=37810,Ld=37811,Pd=37812,Od=37813,zd=37814,Id=37815,Fd=37816,Bd=37817,Hd=37818,Gd=37819,Vd=37820,kd=37821,Xd=36492,jd=36494,Wd=36495,qd=36283,Yd=36284,Zd=36285,Kd=36286,_b=3200,jv=0,vb=1,ds="",Ai="srgb",Qr="srgb-linear",eu="linear",ke="srgb",Dr=7680,__=519,xb=512,yb=513,Mb=514,up=515,Sb=516,bb=517,fp=518,Eb=519,v_=35044,x_="300 es",Qi=2e3,nu=2001;function Wv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function iu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Tb(){const r=iu("canvas");return r.style.display="block",r}const y_={};function M_(...r){const t="THREE."+r.shift();console.log(t,...r)}function ae(...r){const t="THREE."+r.shift();console.warn(t,...r)}function Le(...r){const t="THREE."+r.shift();console.error(t,...r)}function ll(...r){const t=r.join(" ");t in y_||(y_[t]=!0,ae(...r))}function Ab(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class qs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$c=Math.PI/180,Qd=180/Math.PI;function fl(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Hn[r&255]+Hn[r>>8&255]+Hn[r>>16&255]+Hn[r>>24&255]+"-"+Hn[t&255]+Hn[t>>8&255]+"-"+Hn[t>>16&15|64]+Hn[t>>24&255]+"-"+Hn[i&63|128]+Hn[i>>8&255]+"-"+Hn[i>>16&255]+Hn[i>>24&255]+Hn[s&255]+Hn[s>>8&255]+Hn[s>>16&255]+Hn[s>>24&255]).toLowerCase()}function xe(r,t,i){return Math.max(t,Math.min(i,r))}function Rb(r,t){return(r%t+t)%t}function Eh(r,t,i){return(1-i)*r+i*t}function Ko(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function $n(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const wb={DEG2RAD:$c};class le{constructor(t=0,i=0){le.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(xe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ws{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,h){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3],x=c[f+0],y=c[f+1],b=c[f+2],E=c[f+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(h>=1){t[i+0]=x,t[i+1]=y,t[i+2]=b,t[i+3]=E;return}if(_!==E||m!==x||p!==y||g!==b){let M=m*x+p*y+g*b+_*E;M<0&&(x=-x,y=-y,b=-b,E=-E,M=-M);let v=1-h;if(M<.9995){const C=Math.acos(M),R=Math.sin(C);v=Math.sin(v*C)/R,h=Math.sin(h*C)/R,m=m*v+x*h,p=p*v+y*h,g=g*v+b*h,_=_*v+E*h}else{m=m*v+x*h,p=p*v+y*h,g=g*v+b*h,_=_*v+E*h;const C=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=C,p*=C,g*=C,_*=C}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,f){const h=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=c[f],x=c[f+1],y=c[f+2],b=c[f+3];return t[i]=h*b+g*_+m*y-p*x,t[i+1]=m*b+g*x+p*_-h*y,t[i+2]=p*b+g*y+h*x-m*_,t[i+3]=g*b-h*_-m*x-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,m=Math.sin,p=h(s/2),g=h(l/2),_=h(c/2),x=m(s/2),y=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=x*g*_+p*y*b,this._y=p*y*_-x*g*b,this._z=p*g*b+x*y*_,this._w=p*g*_-x*y*b;break;case"YXZ":this._x=x*g*_+p*y*b,this._y=p*y*_-x*g*b,this._z=p*g*b-x*y*_,this._w=p*g*_+x*y*b;break;case"ZXY":this._x=x*g*_-p*y*b,this._y=p*y*_+x*g*b,this._z=p*g*b+x*y*_,this._w=p*g*_-x*y*b;break;case"ZYX":this._x=x*g*_-p*y*b,this._y=p*y*_+x*g*b,this._z=p*g*b-x*y*_,this._w=p*g*_+x*y*b;break;case"YZX":this._x=x*g*_+p*y*b,this._y=p*y*_+x*g*b,this._z=p*g*b-x*y*_,this._w=p*g*_-x*y*b;break;case"XZY":this._x=x*g*_-p*y*b,this._y=p*y*_-x*g*b,this._z=p*g*b+x*y*_,this._w=p*g*_+x*y*b;break;default:ae("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],g=i[6],_=i[10],x=s+h+_;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(f-l)*y}else if(s>h&&s>_){const y=2*Math.sqrt(1+s-h-_);this._w=(g-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+p)/y}else if(h>_){const y=2*Math.sqrt(1+h-s-_);this._w=(c-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+_-s-h);this._w=(f-l)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+f*h+l*p-c*m,this._y=l*g+f*m+c*h-s*p,this._z=c*g+f*p+s*m-l*h,this._w=f*g-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,f=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,i=0,s=0){V.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(S_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(S_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,h=t.z,m=t.w,p=2*(f*l-h*s),g=2*(h*i-c*l),_=2*(c*s-f*i);return this.x=i+m*p+f*_-h*g,this.y=s+m*g+h*p-c*_,this.z=l+m*_+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-s*m,this.z=s*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Th.copy(this).projectOnVector(t),this.sub(Th)}reflect(t){return this.sub(Th.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(xe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Th=new V,S_=new Ws;class me{constructor(t,i,s,l,c,f,h,m,p){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,m,p)}set(t,i,s,l,c,f,h,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],m=s[6],p=s[1],g=s[4],_=s[7],x=s[2],y=s[5],b=s[8],E=l[0],M=l[3],v=l[6],C=l[1],R=l[4],w=l[7],P=l[2],O=l[5],N=l[8];return c[0]=f*E+h*C+m*P,c[3]=f*M+h*R+m*O,c[6]=f*v+h*w+m*N,c[1]=p*E+g*C+_*P,c[4]=p*M+g*R+_*O,c[7]=p*v+g*w+_*N,c[2]=x*E+y*C+b*P,c[5]=x*M+y*R+b*O,c[8]=x*v+y*w+b*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8];return i*f*g-i*h*p-s*c*g+s*h*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],_=g*f-h*p,x=h*m-g*c,y=p*c-f*m,b=i*_+s*x+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/b;return t[0]=_*E,t[1]=(l*p-g*s)*E,t[2]=(h*s-l*f)*E,t[3]=x*E,t[4]=(g*i-l*m)*E,t[5]=(l*c-h*i)*E,t[6]=y*E,t[7]=(s*m-p*i)*E,t[8]=(f*i-s*c)*E,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*h)+f+t,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(Ah.makeScale(t,i)),this}rotate(t){return this.premultiply(Ah.makeRotation(-t)),this}translate(t,i){return this.premultiply(Ah.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ah=new me,b_=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),E_=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cb(){const r={enabled:!0,workingColorSpace:Qr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===ke&&(l.r=Da(l.r),l.g=Da(l.g),l.b=Da(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===ke&&(l.r=qr(l.r),l.g=qr(l.g),l.b=qr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ds?eu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ll("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ll("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Qr]:{primaries:t,whitePoint:s,transfer:eu,toXYZ:b_,fromXYZ:E_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ai},outputColorSpaceConfig:{drawingBufferColorSpace:Ai}},[Ai]:{primaries:t,whitePoint:s,transfer:ke,toXYZ:b_,fromXYZ:E_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ai}}}),r}const Ce=Cb();function Da(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function qr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Nr;class Db{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Nr===void 0&&(Nr=iu("canvas")),Nr.width=t.width,Nr.height=t.height;const l=Nr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Nr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=iu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Da(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Da(i[s]/255)*255):i[s]=Da(i[s]);return{data:i,width:t.width,height:t.height}}else return ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Nb=0;class hp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nb++}),this.uuid=fl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Rh(l[f].image)):c.push(Rh(l[f]))}else c=Rh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Rh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Db.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ae("Texture: Unable to serialize Texture."),{})}let Ub=0;const wh=new V;class Wn extends qs{constructor(t=Wn.DEFAULT_IMAGE,i=Wn.DEFAULT_MAPPING,s=wa,l=wa,c=Vn,f=ks,h=Bi,m=pi,p=Wn.DEFAULT_ANISOTROPY,g=ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ub++}),this.uuid=fl(),this.name="",this.source=new hp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wh).x}get height(){return this.source.getSize(wh).y}get depth(){return this.source.getSize(wh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ae(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ae(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Iv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _d:t.x=t.x-Math.floor(t.x);break;case wa:t.x=t.x<0?0:1;break;case vd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _d:t.y=t.y-Math.floor(t.y);break;case wa:t.y=t.y<0?0:1;break;case vd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=Iv;Wn.DEFAULT_ANISOTROPY=1;class cn{constructor(t=0,i=0,s=0,l=1){cn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],x=m[1],y=m[5],b=m[9],E=m[2],M=m[6],v=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-E)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+E)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const R=(p+1)/2,w=(y+1)/2,P=(v+1)/2,O=(g+x)/4,N=(_+E)/4,H=(b+M)/4;return R>w&&R>P?R<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(R),l=O/s,c=N/s):w>P?w<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),s=O/l,c=H/l):P<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(P),s=N/c,l=H/c),this.set(s,l,c,i),this}let C=Math.sqrt((M-b)*(M-b)+(_-E)*(_-E)+(x-g)*(x-g));return Math.abs(C)<.001&&(C=1),this.x=(M-b)/C,this.y=(_-E)/C,this.z=(x-g)/C,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this.w=xe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this.w=xe(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lb extends qs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new cn(0,0,t,i),this.scissorTest=!1,this.viewport=new cn(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Wn(l);this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new hp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $i extends Lb{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class qv extends Wn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=zn,this.minFilter=zn,this.wrapR=wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pb extends Wn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=zn,this.minFilter=zn,this.wrapR=wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hl{constructor(t=new V(1/0,1/0,1/0),i=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Pi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Pi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Pi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,Pi):Pi.fromBufferAttribute(c,f),Pi.applyMatrix4(t.matrixWorld),this.expandByPoint(Pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ac.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ac.copy(s.boundingBox)),Ac.applyMatrix4(t.matrixWorld),this.union(Ac)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pi),Pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qo),Rc.subVectors(this.max,Qo),Ur.subVectors(t.a,Qo),Lr.subVectors(t.b,Qo),Pr.subVectors(t.c,Qo),rs.subVectors(Lr,Ur),os.subVectors(Pr,Lr),Os.subVectors(Ur,Pr);let i=[0,-rs.z,rs.y,0,-os.z,os.y,0,-Os.z,Os.y,rs.z,0,-rs.x,os.z,0,-os.x,Os.z,0,-Os.x,-rs.y,rs.x,0,-os.y,os.x,0,-Os.y,Os.x,0];return!Ch(i,Ur,Lr,Pr,Rc)||(i=[1,0,0,0,1,0,0,0,1],!Ch(i,Ur,Lr,Pr,Rc))?!1:(wc.crossVectors(rs,os),i=[wc.x,wc.y,wc.z],Ch(i,Ur,Lr,Pr,Rc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Sa=[new V,new V,new V,new V,new V,new V,new V,new V],Pi=new V,Ac=new hl,Ur=new V,Lr=new V,Pr=new V,rs=new V,os=new V,Os=new V,Qo=new V,Rc=new V,wc=new V,zs=new V;function Ch(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){zs.fromArray(r,c);const h=l.x*Math.abs(zs.x)+l.y*Math.abs(zs.y)+l.z*Math.abs(zs.z),m=t.dot(zs),p=i.dot(zs),g=s.dot(zs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const Ob=new hl,Jo=new V,Dh=new V;class cu{constructor(t=new V,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):Ob.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Jo.subVectors(t,this.center);const i=Jo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Jo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Jo.copy(t.center).add(Dh)),this.expandByPoint(Jo.copy(t.center).sub(Dh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ba=new V,Nh=new V,Cc=new V,ls=new V,Uh=new V,Dc=new V,Lh=new V;class dp{constructor(t=new V,i=new V(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ba)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ba.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ba.copy(this.origin).addScaledVector(this.direction,i),ba.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Nh.copy(t).add(i).multiplyScalar(.5),Cc.copy(i).sub(t).normalize(),ls.copy(this.origin).sub(Nh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Cc),h=ls.dot(this.direction),m=-ls.dot(Cc),p=ls.lengthSq(),g=Math.abs(1-f*f);let _,x,y,b;if(g>0)if(_=f*m-h,x=f*h-m,b=c*g,_>=0)if(x>=-b)if(x<=b){const E=1/g;_*=E,x*=E,y=_*(_+f*x+2*h)+x*(f*_+x+2*m)+p}else x=c,_=Math.max(0,-(f*x+h)),y=-_*_+x*(x+2*m)+p;else x=-c,_=Math.max(0,-(f*x+h)),y=-_*_+x*(x+2*m)+p;else x<=-b?(_=Math.max(0,-(-f*c+h)),x=_>0?-c:Math.min(Math.max(-c,-m),c),y=-_*_+x*(x+2*m)+p):x<=b?(_=0,x=Math.min(Math.max(-c,-m),c),y=x*(x+2*m)+p):(_=Math.max(0,-(f*c+h)),x=_>0?c:Math.min(Math.max(-c,-m),c),y=-_*_+x*(x+2*m)+p);else x=f>0?-c:c,_=Math.max(0,-(f*x+h)),y=-_*_+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Nh).addScaledVector(Cc,x),y}intersectSphere(t,i){ba.subVectors(t.center,this.origin);const s=ba.dot(this.direction),l=ba.dot(ba)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,h,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(c=(t.min.y-x.y)*g,f=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,f=(t.min.y-x.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(h=(t.min.z-x.z)*_,m=(t.max.z-x.z)*_):(h=(t.max.z-x.z)*_,m=(t.min.z-x.z)*_),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ba)!==null}intersectTriangle(t,i,s,l,c){Uh.subVectors(i,t),Dc.subVectors(s,t),Lh.crossVectors(Uh,Dc);let f=this.direction.dot(Lh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;ls.subVectors(this.origin,t);const m=h*this.direction.dot(Dc.crossVectors(ls,Dc));if(m<0)return null;const p=h*this.direction.dot(Uh.cross(ls));if(p<0||m+p>f)return null;const g=-h*ls.dot(Lh);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(t,i,s,l,c,f,h,m,p,g,_,x,y,b,E,M){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,m,p,g,_,x,y,b,E,M)}set(t,i,s,l,c,f,h,m,p,g,_,x,y,b,E,M){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=f,v[9]=h,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=x,v[3]=y,v[7]=b,v[11]=E,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Or.setFromMatrixColumn(t,0).length(),c=1/Or.setFromMatrixColumn(t,1).length(),f=1/Or.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const x=f*g,y=f*_,b=h*g,E=h*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=y+b*p,i[5]=x-E*p,i[9]=-h*m,i[2]=E-x*p,i[6]=b+y*p,i[10]=f*m}else if(t.order==="YXZ"){const x=m*g,y=m*_,b=p*g,E=p*_;i[0]=x+E*h,i[4]=b*h-y,i[8]=f*p,i[1]=f*_,i[5]=f*g,i[9]=-h,i[2]=y*h-b,i[6]=E+x*h,i[10]=f*m}else if(t.order==="ZXY"){const x=m*g,y=m*_,b=p*g,E=p*_;i[0]=x-E*h,i[4]=-f*_,i[8]=b+y*h,i[1]=y+b*h,i[5]=f*g,i[9]=E-x*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(t.order==="ZYX"){const x=f*g,y=f*_,b=h*g,E=h*_;i[0]=m*g,i[4]=b*p-y,i[8]=x*p+E,i[1]=m*_,i[5]=E*p+x,i[9]=y*p-b,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(t.order==="YZX"){const x=f*m,y=f*p,b=h*m,E=h*p;i[0]=m*g,i[4]=E-x*_,i[8]=b*_+y,i[1]=_,i[5]=f*g,i[9]=-h*g,i[2]=-p*g,i[6]=y*_+b,i[10]=x-E*_}else if(t.order==="XZY"){const x=f*m,y=f*p,b=h*m,E=h*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=x*_+E,i[5]=f*g,i[9]=y*_-b,i[2]=b*_-y,i[6]=h*g,i[10]=E*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zb,t,Ib)}lookAt(t,i,s){const l=this.elements;return ui.subVectors(t,i),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),cs.crossVectors(s,ui),cs.lengthSq()===0&&(Math.abs(s.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),cs.crossVectors(s,ui)),cs.normalize(),Nc.crossVectors(ui,cs),l[0]=cs.x,l[4]=Nc.x,l[8]=ui.x,l[1]=cs.y,l[5]=Nc.y,l[9]=ui.y,l[2]=cs.z,l[6]=Nc.z,l[10]=ui.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],m=s[8],p=s[12],g=s[1],_=s[5],x=s[9],y=s[13],b=s[2],E=s[6],M=s[10],v=s[14],C=s[3],R=s[7],w=s[11],P=s[15],O=l[0],N=l[4],H=l[8],A=l[12],D=l[1],G=l[5],q=l[9],Y=l[13],et=l[2],it=l[6],I=l[10],B=l[14],Z=l[3],mt=l[7],dt=l[11],z=l[15];return c[0]=f*O+h*D+m*et+p*Z,c[4]=f*N+h*G+m*it+p*mt,c[8]=f*H+h*q+m*I+p*dt,c[12]=f*A+h*Y+m*B+p*z,c[1]=g*O+_*D+x*et+y*Z,c[5]=g*N+_*G+x*it+y*mt,c[9]=g*H+_*q+x*I+y*dt,c[13]=g*A+_*Y+x*B+y*z,c[2]=b*O+E*D+M*et+v*Z,c[6]=b*N+E*G+M*it+v*mt,c[10]=b*H+E*q+M*I+v*dt,c[14]=b*A+E*Y+M*B+v*z,c[3]=C*O+R*D+w*et+P*Z,c[7]=C*N+R*G+w*it+P*mt,c[11]=C*H+R*q+w*I+P*dt,c[15]=C*A+R*Y+w*B+P*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],h=t[5],m=t[9],p=t[13],g=t[2],_=t[6],x=t[10],y=t[14],b=t[3],E=t[7],M=t[11],v=t[15],C=m*y-p*x,R=h*y-p*_,w=h*x-m*_,P=f*y-p*g,O=f*x-m*g,N=f*_-h*g;return i*(E*C-M*R+v*w)-s*(b*C-M*P+v*O)+l*(b*R-E*P+v*N)-c*(b*w-E*O+M*N)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],_=t[9],x=t[10],y=t[11],b=t[12],E=t[13],M=t[14],v=t[15],C=_*M*p-E*x*p+E*m*y-h*M*y-_*m*v+h*x*v,R=b*x*p-g*M*p-b*m*y+f*M*y+g*m*v-f*x*v,w=g*E*p-b*_*p+b*h*y-f*E*y-g*h*v+f*_*v,P=b*_*m-g*E*m-b*h*x+f*E*x+g*h*M-f*_*M,O=i*C+s*R+l*w+c*P;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/O;return t[0]=C*N,t[1]=(E*x*c-_*M*c-E*l*y+s*M*y+_*l*v-s*x*v)*N,t[2]=(h*M*c-E*m*c+E*l*p-s*M*p-h*l*v+s*m*v)*N,t[3]=(_*m*c-h*x*c-_*l*p+s*x*p+h*l*y-s*m*y)*N,t[4]=R*N,t[5]=(g*M*c-b*x*c+b*l*y-i*M*y-g*l*v+i*x*v)*N,t[6]=(b*m*c-f*M*c-b*l*p+i*M*p+f*l*v-i*m*v)*N,t[7]=(f*x*c-g*m*c+g*l*p-i*x*p-f*l*y+i*m*y)*N,t[8]=w*N,t[9]=(b*_*c-g*E*c-b*s*y+i*E*y+g*s*v-i*_*v)*N,t[10]=(f*E*c-b*h*c+b*s*p-i*E*p-f*s*v+i*h*v)*N,t[11]=(g*h*c-f*_*c-g*s*p+i*_*p+f*s*y-i*h*y)*N,t[12]=P*N,t[13]=(g*E*l-b*_*l+b*s*x-i*E*x-g*s*M+i*_*M)*N,t[14]=(b*h*l-f*E*l-b*s*m+i*E*m+f*s*M-i*h*M)*N,t[15]=(f*_*l-g*h*l+g*s*m-i*_*m-f*s*x+i*h*x)*N,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,h=t.y,m=t.z,p=c*f,g=c*h;return this.set(p*f+s,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+s,g*m-l*f,0,p*m-l*h,g*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,g=f+f,_=h+h,x=c*p,y=c*g,b=c*_,E=f*g,M=f*_,v=h*_,C=m*p,R=m*g,w=m*_,P=s.x,O=s.y,N=s.z;return l[0]=(1-(E+v))*P,l[1]=(y+w)*P,l[2]=(b-R)*P,l[3]=0,l[4]=(y-w)*O,l[5]=(1-(x+v))*O,l[6]=(M+C)*O,l[7]=0,l[8]=(b+R)*N,l[9]=(M-C)*N,l[10]=(1-(x+E))*N,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Or.set(l[0],l[1],l[2]).length();const f=Or.set(l[4],l[5],l[6]).length(),h=Or.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Oi.copy(this);const p=1/c,g=1/f,_=1/h;return Oi.elements[0]*=p,Oi.elements[1]*=p,Oi.elements[2]*=p,Oi.elements[4]*=g,Oi.elements[5]*=g,Oi.elements[6]*=g,Oi.elements[8]*=_,Oi.elements[9]*=_,Oi.elements[10]*=_,i.setFromRotationMatrix(Oi),s.x=c,s.y=f,s.z=h,this}makePerspective(t,i,s,l,c,f,h=Qi,m=!1){const p=this.elements,g=2*c/(i-t),_=2*c/(s-l),x=(i+t)/(i-t),y=(s+l)/(s-l);let b,E;if(m)b=c/(f-c),E=f*c/(f-c);else if(h===Qi)b=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(h===nu)b=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,h=Qi,m=!1){const p=this.elements,g=2/(i-t),_=2/(s-l),x=-(i+t)/(i-t),y=-(s+l)/(s-l);let b,E;if(m)b=1/(f-c),E=f/(f-c);else if(h===Qi)b=-2/(f-c),E=-(f+c)/(f-c);else if(h===nu)b=-1/(f-c),E=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Or=new V,Oi=new rn,zb=new V(0,0,0),Ib=new V(1,1,1),cs=new V,Nc=new V,ui=new V,T_=new rn,A_=new Ws;class na{constructor(t=0,i=0,s=0,l=na.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],g=l[9],_=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(xe(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-xe(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return T_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(T_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return A_.setFromEuler(this),this.setFromQuaternion(A_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}na.DEFAULT_ORDER="XYZ";class Yv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Fb=0;const R_=new V,zr=new Ws,Ea=new rn,Uc=new V,$o=new V,Bb=new V,Hb=new Ws,w_=new V(1,0,0),C_=new V(0,1,0),D_=new V(0,0,1),N_={type:"added"},Gb={type:"removed"},Ir={type:"childadded",child:null},Ph={type:"childremoved",child:null};class In extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fb++}),this.uuid=fl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const t=new V,i=new na,s=new Ws,l=new V(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new rn},normalMatrix:{value:new me}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return zr.setFromAxisAngle(t,i),this.quaternion.multiply(zr),this}rotateOnWorldAxis(t,i){return zr.setFromAxisAngle(t,i),this.quaternion.premultiply(zr),this}rotateX(t){return this.rotateOnAxis(w_,t)}rotateY(t){return this.rotateOnAxis(C_,t)}rotateZ(t){return this.rotateOnAxis(D_,t)}translateOnAxis(t,i){return R_.copy(t).applyQuaternion(this.quaternion),this.position.add(R_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(w_,t)}translateY(t){return this.translateOnAxis(C_,t)}translateZ(t){return this.translateOnAxis(D_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ea.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Uc.copy(t):Uc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ea.lookAt($o,Uc,this.up):Ea.lookAt(Uc,$o,this.up),this.quaternion.setFromRotationMatrix(Ea),l&&(Ea.extractRotation(l.matrixWorld),zr.setFromRotationMatrix(Ea),this.quaternion.premultiply(zr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(N_),Ir.child=t,this.dispatchEvent(Ir),Ir.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Gb),Ph.child=t,this.dispatchEvent(Ph),Ph.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ea),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(N_),Ir.child=t,this.dispatchEvent(Ir),Ir.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,t,Bb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,Hb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),_=f(t.shapes),x=f(t.skeletons),y=f(t.animations),b=f(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=l,s;function f(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}In.DEFAULT_UP=new V(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zi=new V,Ta=new V,Oh=new V,Aa=new V,Fr=new V,Br=new V,U_=new V,zh=new V,Ih=new V,Fh=new V,Bh=new cn,Hh=new cn,Gh=new cn;class Ii{constructor(t=new V,i=new V,s=new V){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),zi.subVectors(t,i),l.cross(zi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){zi.subVectors(l,i),Ta.subVectors(s,i),Oh.subVectors(t,i);const f=zi.dot(zi),h=zi.dot(Ta),m=zi.dot(Oh),p=Ta.dot(Ta),g=Ta.dot(Oh),_=f*p-h*h;if(_===0)return c.set(0,0,0),null;const x=1/_,y=(p*m-h*g)*x,b=(f*g-h*m)*x;return c.set(1-y-b,b,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Aa)===null?!1:Aa.x>=0&&Aa.y>=0&&Aa.x+Aa.y<=1}static getInterpolation(t,i,s,l,c,f,h,m){return this.getBarycoord(t,i,s,l,Aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Aa.x),m.addScaledVector(f,Aa.y),m.addScaledVector(h,Aa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return Bh.setScalar(0),Hh.setScalar(0),Gh.setScalar(0),Bh.fromBufferAttribute(t,i),Hh.fromBufferAttribute(t,s),Gh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Bh,c.x),f.addScaledVector(Hh,c.y),f.addScaledVector(Gh,c.z),f}static isFrontFacing(t,i,s,l){return zi.subVectors(s,i),Ta.subVectors(t,i),zi.cross(Ta).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zi.subVectors(this.c,this.b),Ta.subVectors(this.a,this.b),zi.cross(Ta).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ii.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ii.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ii.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ii.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ii.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,h;Fr.subVectors(l,s),Br.subVectors(c,s),zh.subVectors(t,s);const m=Fr.dot(zh),p=Br.dot(zh);if(m<=0&&p<=0)return i.copy(s);Ih.subVectors(t,l);const g=Fr.dot(Ih),_=Br.dot(Ih);if(g>=0&&_<=g)return i.copy(l);const x=m*_-g*p;if(x<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(s).addScaledVector(Fr,f);Fh.subVectors(t,c);const y=Fr.dot(Fh),b=Br.dot(Fh);if(b>=0&&y<=b)return i.copy(c);const E=y*p-m*b;if(E<=0&&p>=0&&b<=0)return h=p/(p-b),i.copy(s).addScaledVector(Br,h);const M=g*b-y*_;if(M<=0&&_-g>=0&&y-b>=0)return U_.subVectors(c,l),h=(_-g)/(_-g+(y-b)),i.copy(l).addScaledVector(U_,h);const v=1/(M+E+x);return f=E*v,h=x*v,i.copy(s).addScaledVector(Fr,f).addScaledVector(Br,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Zv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},Lc={h:0,s:0,l:0};function Vh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class he{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Ai){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ce.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ce.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ce.workingColorSpace){if(t=Rb(t,1),i=xe(i,0,1),s=xe(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Vh(f,c,t+1/3),this.g=Vh(f,c,t),this.b=Vh(f,c,t-1/3)}return Ce.colorSpaceToWorking(this,l),this}setStyle(t,i=Ai){function s(c){c!==void 0&&parseFloat(c)<1&&ae("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ae("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ae("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Ai){const s=Zv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ae("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Da(t.r),this.g=Da(t.g),this.b=Da(t.b),this}copyLinearToSRGB(t){return this.r=qr(t.r),this.g=qr(t.g),this.b=qr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ai){return Ce.workingToColorSpace(Gn.copy(this),t),Math.round(xe(Gn.r*255,0,255))*65536+Math.round(xe(Gn.g*255,0,255))*256+Math.round(xe(Gn.b*255,0,255))}getHexString(t=Ai){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ce.workingColorSpace){Ce.workingToColorSpace(Gn.copy(this),i);const s=Gn.r,l=Gn.g,c=Gn.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const g=(h+f)/2;if(h===f)m=0,p=0;else{const _=f-h;switch(p=g<=.5?_/(f+h):_/(2-f-h),f){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ce.workingColorSpace){return Ce.workingToColorSpace(Gn.copy(this),i),t.r=Gn.r,t.g=Gn.g,t.b=Gn.b,t}getStyle(t=Ai){Ce.workingToColorSpace(Gn.copy(this),t);const i=Gn.r,s=Gn.g,l=Gn.b;return t!==Ai?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(us),this.setHSL(us.h+t,us.s+i,us.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(us),t.getHSL(Lc);const s=Eh(us.h,Lc.h,i),l=Eh(us.s,Lc.s,i),c=Eh(us.l,Lc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new he;he.NAMES=Zv;let Vb=0;class $r extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vb++}),this.uuid=fl(),this.name="",this.type="Material",this.blending=Wr,this.side=ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rd,this.blendDst=od,this.blendEquation=Gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=__,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ae(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ae(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(s.blending=this.blending),this.side!==ms&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==rd&&(s.blendSrc=this.blendSrc),this.blendDst!==od&&(s.blendDst=this.blendDst),this.blendEquation!==Gs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==__&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Dr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Dr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class au extends $r{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new na,this.combine=Cv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const vn=new V,Pc=new le;let kb=0;class ta{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kb++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=v_,this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Pc.fromBufferAttribute(this,i),Pc.applyMatrix3(t),this.setXY(i,Pc.x,Pc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix3(t),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix4(t),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyNormalMatrix(t),this.setXYZ(i,vn.x,vn.y,vn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.transformDirection(t),this.setXYZ(i,vn.x,vn.y,vn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ko(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=$n(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ko(i,this.array)),i}setX(t,i){return this.normalized&&(i=$n(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ko(i,this.array)),i}setY(t,i){return this.normalized&&(i=$n(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ko(i,this.array)),i}setZ(t,i){return this.normalized&&(i=$n(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ko(i,this.array)),i}setW(t,i){return this.normalized&&(i=$n(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=$n(i,this.array),s=$n(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=$n(i,this.array),s=$n(s,this.array),l=$n(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=$n(i,this.array),s=$n(s,this.array),l=$n(l,this.array),c=$n(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==v_&&(t.usage=this.usage),t}}class Kv extends ta{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Qv extends ta{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class un extends ta{constructor(t,i,s){super(new Float32Array(t),i,s)}}let Xb=0;const Ti=new rn,kh=new In,Hr=new V,fi=new hl,tl=new hl,Tn=new V;class Ye extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xb++}),this.uuid=fl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wv(t)?Qv:Kv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new me().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ti.makeRotationFromQuaternion(t),this.applyMatrix4(Ti),this}rotateX(t){return Ti.makeRotationX(t),this.applyMatrix4(Ti),this}rotateY(t){return Ti.makeRotationY(t),this.applyMatrix4(Ti),this}rotateZ(t){return Ti.makeRotationZ(t),this.applyMatrix4(Ti),this}translate(t,i,s){return Ti.makeTranslation(t,i,s),this.applyMatrix4(Ti),this}scale(t,i,s){return Ti.makeScale(t,i,s),this.applyMatrix4(Ti),this}lookAt(t){return kh.lookAt(t),kh.updateMatrix(),this.applyMatrix4(kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new un(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];fi.setFromBufferAttribute(c),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const s=this.boundingSphere.center;if(fi.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];tl.setFromBufferAttribute(h),this.morphTargetsRelative?(Tn.addVectors(fi.min,tl.min),fi.expandByPoint(Tn),Tn.addVectors(fi.max,tl.max),fi.expandByPoint(Tn)):(fi.expandByPoint(tl.min),fi.expandByPoint(tl.max))}fi.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)Tn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Tn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Tn.fromBufferAttribute(h,p),m&&(Hr.fromBufferAttribute(t,p),Tn.add(Hr)),l=Math.max(l,s.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ta(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let H=0;H<s.count;H++)h[H]=new V,m[H]=new V;const p=new V,g=new V,_=new V,x=new le,y=new le,b=new le,E=new V,M=new V;function v(H,A,D){p.fromBufferAttribute(s,H),g.fromBufferAttribute(s,A),_.fromBufferAttribute(s,D),x.fromBufferAttribute(c,H),y.fromBufferAttribute(c,A),b.fromBufferAttribute(c,D),g.sub(p),_.sub(p),y.sub(x),b.sub(x);const G=1/(y.x*b.y-b.x*y.y);isFinite(G)&&(E.copy(g).multiplyScalar(b.y).addScaledVector(_,-y.y).multiplyScalar(G),M.copy(_).multiplyScalar(y.x).addScaledVector(g,-b.x).multiplyScalar(G),h[H].add(E),h[A].add(E),h[D].add(E),m[H].add(M),m[A].add(M),m[D].add(M))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let H=0,A=C.length;H<A;++H){const D=C[H],G=D.start,q=D.count;for(let Y=G,et=G+q;Y<et;Y+=3)v(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const R=new V,w=new V,P=new V,O=new V;function N(H){P.fromBufferAttribute(l,H),O.copy(P);const A=h[H];R.copy(A),R.sub(P.multiplyScalar(P.dot(A))).normalize(),w.crossVectors(O,A);const G=w.dot(m[H])<0?-1:1;f.setXYZW(H,R.x,R.y,R.z,G)}for(let H=0,A=C.length;H<A;++H){const D=C[H],G=D.start,q=D.count;for(let Y=G,et=G+q;Y<et;Y+=3)N(t.getX(Y+0)),N(t.getX(Y+1)),N(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ta(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,y=s.count;x<y;x++)s.setXYZ(x,0,0,0);const l=new V,c=new V,f=new V,h=new V,m=new V,p=new V,g=new V,_=new V;if(t)for(let x=0,y=t.count;x<y;x+=3){const b=t.getX(x+0),E=t.getX(x+1),M=t.getX(x+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,E),f.fromBufferAttribute(i,M),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),h.fromBufferAttribute(s,b),m.fromBufferAttribute(s,E),p.fromBufferAttribute(s,M),h.add(g),m.add(g),p.add(g),s.setXYZ(b,h.x,h.y,h.z),s.setXYZ(E,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Tn.fromBufferAttribute(t,i),Tn.normalize(),t.setXYZ(i,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function t(h,m){const p=h.array,g=h.itemSize,_=h.normalized,x=new p.constructor(m.length*g);let y=0,b=0;for(let E=0,M=m.length;E<M;E++){h.isInterleavedBufferAttribute?y=m[E]*h.data.stride+h.offset:y=m[E]*g;for(let v=0;v<g;v++)x[b++]=p[y++]}return new ta(x,g,_)}if(this.index===null)return ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ye,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,_=p.length;g<_;g++){const x=p[g],y=t(x,s);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,x=p.length;_<x;_++){const y=p[_];g.push(y.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let x=0,y=_.length;x<y;x++)g.push(_[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const L_=new rn,Is=new dp,Oc=new cu,P_=new V,zc=new V,Ic=new V,Fc=new V,Xh=new V,Bc=new V,O_=new V,Hc=new V;class Ri extends In{constructor(t=new Ye,i=new au){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Bc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],_=c[m];g!==0&&(Xh.fromBufferAttribute(_,t),f?Bc.addScaledVector(Xh,g):Bc.addScaledVector(Xh.sub(i),g))}i.add(Bc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Oc.copy(s.boundingSphere),Oc.applyMatrix4(c),Is.copy(t.ray).recast(t.near),!(Oc.containsPoint(Is.origin)===!1&&(Is.intersectSphere(Oc,P_)===null||Is.origin.distanceToSquared(P_)>(t.far-t.near)**2))&&(L_.copy(c).invert(),Is.copy(t.ray).applyMatrix4(L_),!(s.boundingBox!==null&&Is.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Is)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(f))for(let b=0,E=x.length;b<E;b++){const M=x[b],v=f[M.materialIndex],C=Math.max(M.start,y.start),R=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let w=C,P=R;w<P;w+=3){const O=h.getX(w),N=h.getX(w+1),H=h.getX(w+2);l=Gc(this,v,t,s,p,g,_,O,N,H),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),E=Math.min(h.count,y.start+y.count);for(let M=b,v=E;M<v;M+=3){const C=h.getX(M),R=h.getX(M+1),w=h.getX(M+2);l=Gc(this,f,t,s,p,g,_,C,R,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,E=x.length;b<E;b++){const M=x[b],v=f[M.materialIndex],C=Math.max(M.start,y.start),R=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let w=C,P=R;w<P;w+=3){const O=w,N=w+1,H=w+2;l=Gc(this,v,t,s,p,g,_,O,N,H),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),E=Math.min(m.count,y.start+y.count);for(let M=b,v=E;M<v;M+=3){const C=M,R=M+1,w=M+2;l=Gc(this,f,t,s,p,g,_,C,R,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function jb(r,t,i,s,l,c,f,h){let m;if(t.side===ni?m=s.intersectTriangle(f,c,l,!0,h):m=s.intersectTriangle(l,c,f,t.side===ms,h),m===null)return null;Hc.copy(h),Hc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Hc);return p<i.near||p>i.far?null:{distance:p,point:Hc.clone(),object:r}}function Gc(r,t,i,s,l,c,f,h,m,p){r.getVertexPosition(h,zc),r.getVertexPosition(m,Ic),r.getVertexPosition(p,Fc);const g=jb(r,t,i,s,zc,Ic,Fc,O_);if(g){const _=new V;Ii.getBarycoord(O_,zc,Ic,Fc,_),l&&(g.uv=Ii.getInterpolatedAttribute(l,h,m,p,_,new le)),c&&(g.uv1=Ii.getInterpolatedAttribute(c,h,m,p,_,new le)),f&&(g.normal=Ii.getInterpolatedAttribute(f,h,m,p,_,new V),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new V,materialIndex:0};Ii.getNormal(zc,Ic,Fc,x.normal),g.face=x,g.barycoord=_}return g}class dl extends Ye{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],_=[];let x=0,y=0;b("z","y","x",-1,-1,s,i,t,f,c,0),b("z","y","x",1,-1,s,i,-t,f,c,1),b("x","z","y",1,1,t,s,i,l,f,2),b("x","z","y",1,-1,t,s,-i,l,f,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new un(p,3)),this.setAttribute("normal",new un(g,3)),this.setAttribute("uv",new un(_,2));function b(E,M,v,C,R,w,P,O,N,H,A){const D=w/N,G=P/H,q=w/2,Y=P/2,et=O/2,it=N+1,I=H+1;let B=0,Z=0;const mt=new V;for(let dt=0;dt<I;dt++){const z=dt*G-Y;for(let nt=0;nt<it;nt++){const gt=nt*D-q;mt[E]=gt*C,mt[M]=z*R,mt[v]=et,p.push(mt.x,mt.y,mt.z),mt[E]=0,mt[M]=0,mt[v]=O>0?1:-1,g.push(mt.x,mt.y,mt.z),_.push(nt/N),_.push(1-dt/H),B+=1}}for(let dt=0;dt<H;dt++)for(let z=0;z<N;z++){const nt=x+z+it*dt,gt=x+z+it*(dt+1),Et=x+(z+1)+it*(dt+1),Nt=x+(z+1)+it*dt;m.push(nt,gt,Nt),m.push(gt,Et,Nt),Z+=6}h.addGroup(y,Z,A),y+=Z,x+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Jr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Xn(r){const t={};for(let i=0;i<r.length;i++){const s=Jr(r[i]);for(const l in s)t[l]=s[l]}return t}function Wb(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Jv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const qb={clone:Jr,merge:Xn};var Yb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ia extends $r{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yb,this.fragmentShader=Zb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Jr(t.uniforms),this.uniformsGroups=Wb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class $v extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fs=new V,z_=new le,I_=new le;class di extends $v{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Qd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($c*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qd*2*Math.atan(Math.tan($c*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fs.x,fs.y).multiplyScalar(-t/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(fs.x,fs.y).multiplyScalar(-t/fs.z)}getViewSize(t,i){return this.getViewBounds(t,z_,I_),i.subVectors(I_,z_)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan($c*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Gr=-90,Vr=1;class Kb extends In{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new di(Gr,Vr,t,i);l.layers=this.layers,this.add(l);const c=new di(Gr,Vr,t,i);c.layers=this.layers,this.add(c);const f=new di(Gr,Vr,t,i);f.layers=this.layers,this.add(f);const h=new di(Gr,Vr,t,i);h.layers=this.layers,this.add(h);const m=new di(Gr,Vr,t,i);m.layers=this.layers,this.add(m);const p=new di(Gr,Vr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(t===Qi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===nu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,g]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const E=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,h),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=E,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(_,x,y),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class tx extends Wn{constructor(t=[],i=js,s,l,c,f,h,m,p,g){super(t,i,s,l,c,f,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ex extends $i{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new tx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new dl(5,5,5),c=new ia({name:"CubemapFromEquirect",uniforms:Jr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ni,blending:Ca});c.uniforms.tEquirect.value=i;const f=new Ri(l,c),h=i.minFilter;return i.minFilter===ks&&(i.minFilter=Vn),new Kb(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}class Zi extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qb={type:"move"};class jh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const E of t.hand.values()){const M=i.getJointPose(E,s),v=this._getHandJoint(p,E);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),y=.02,b=.005;p.inputState.pinching&&x>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Qb)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Zi;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class pp{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new he(t),this.density=i}clone(){return new pp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Jb extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new na,this.environmentIntensity=1,this.environmentRotation=new na,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class $b extends Wn{constructor(t=null,i=1,s=1,l,c,f,h,m,p=zn,g=zn,_,x){super(null,f,h,m,p,g,l,c,_,x),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wh=new V,t1=new V,e1=new me;class hs{constructor(t=new V(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Wh.subVectors(s,i).cross(t1.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Wh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||e1.getNormalMatrix(t),l=this.coplanarPoint(Wh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fs=new cu,n1=new le(.5,.5),Vc=new V;class mp{constructor(t=new hs,i=new hs,s=new hs,l=new hs,c=new hs,f=new hs){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Qi,s=!1){const l=this.planes,c=t.elements,f=c[0],h=c[1],m=c[2],p=c[3],g=c[4],_=c[5],x=c[6],y=c[7],b=c[8],E=c[9],M=c[10],v=c[11],C=c[12],R=c[13],w=c[14],P=c[15];if(l[0].setComponents(p-f,y-g,v-b,P-C).normalize(),l[1].setComponents(p+f,y+g,v+b,P+C).normalize(),l[2].setComponents(p+h,y+_,v+E,P+R).normalize(),l[3].setComponents(p-h,y-_,v-E,P-R).normalize(),s)l[4].setComponents(m,x,M,w).normalize(),l[5].setComponents(p-m,y-x,v-M,P-w).normalize();else if(l[4].setComponents(p-m,y-x,v-M,P-w).normalize(),i===Qi)l[5].setComponents(p+m,y+x,v+M,P+w).normalize();else if(i===nu)l[5].setComponents(m,x,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Fs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(t){Fs.center.set(0,0,0);const i=n1.distanceTo(t.center);return Fs.radius=.7071067811865476+i,Fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Vc.x=l.normal.x>0?t.max.x:t.min.x,Vc.y=l.normal.y>0?t.max.y:t.min.y,Vc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Vc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hi extends $r{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new he(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const su=new V,ru=new V,F_=new rn,el=new dp,kc=new cu,qh=new V,B_=new V;class ei extends In{constructor(t=new Ye,i=new hi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)su.fromBufferAttribute(i,l-1),ru.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=su.distanceTo(ru);t.setAttribute("lineDistance",new un(s,1))}else ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),kc.copy(s.boundingSphere),kc.applyMatrix4(l),kc.radius+=c,t.ray.intersectsSphere(kc)===!1)return;F_.copy(l).invert(),el.copy(t.ray).applyMatrix4(F_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,g=s.index,x=s.attributes.position;if(g!==null){const y=Math.max(0,f.start),b=Math.min(g.count,f.start+f.count);for(let E=y,M=b-1;E<M;E+=p){const v=g.getX(E),C=g.getX(E+1),R=Xc(this,t,el,m,v,C,E);R&&i.push(R)}if(this.isLineLoop){const E=g.getX(b-1),M=g.getX(y),v=Xc(this,t,el,m,E,M,b-1);v&&i.push(v)}}else{const y=Math.max(0,f.start),b=Math.min(x.count,f.start+f.count);for(let E=y,M=b-1;E<M;E+=p){const v=Xc(this,t,el,m,E,E+1,E);v&&i.push(v)}if(this.isLineLoop){const E=Xc(this,t,el,m,b-1,y,b-1);E&&i.push(E)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Xc(r,t,i,s,l,c,f){const h=r.geometry.attributes.position;if(su.fromBufferAttribute(h,l),ru.fromBufferAttribute(h,c),i.distanceSqToSegment(su,ru,qh,B_)>s)return;qh.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(qh);if(!(p<t.near||p>t.far))return{distance:p,point:B_.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const H_=new V,G_=new V;class nx extends ei{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)H_.fromBufferAttribute(i,l),G_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+H_.distanceTo(G_);t.setAttribute("lineDistance",new un(s,1))}else ae("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cl extends Wn{constructor(t,i,s=ea,l,c,f,h=zn,m=zn,p,g=Ua,_=1){if(g!==Ua&&g!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:_};super(x,l,c,f,h,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new hp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class i1 extends cl{constructor(t,i=ea,s=js,l,c,f=zn,h=zn,m,p=Ua){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,i,s,l,c,f,h,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ix extends Wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class gp extends Ye{constructor(t=1,i=1,s=1,l=32,c=1,f=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const g=[],_=[],x=[],y=[];let b=0;const E=[],M=s/2;let v=0;C(),f===!1&&(t>0&&R(!0),i>0&&R(!1)),this.setIndex(g),this.setAttribute("position",new un(_,3)),this.setAttribute("normal",new un(x,3)),this.setAttribute("uv",new un(y,2));function C(){const w=new V,P=new V;let O=0;const N=(i-t)/s;for(let H=0;H<=c;H++){const A=[],D=H/c,G=D*(i-t)+t;for(let q=0;q<=l;q++){const Y=q/l,et=Y*m+h,it=Math.sin(et),I=Math.cos(et);P.x=G*it,P.y=-D*s+M,P.z=G*I,_.push(P.x,P.y,P.z),w.set(it,N,I).normalize(),x.push(w.x,w.y,w.z),y.push(Y,1-D),A.push(b++)}E.push(A)}for(let H=0;H<l;H++)for(let A=0;A<c;A++){const D=E[A][H],G=E[A+1][H],q=E[A+1][H+1],Y=E[A][H+1];(t>0||A!==0)&&(g.push(D,G,Y),O+=3),(i>0||A!==c-1)&&(g.push(G,q,Y),O+=3)}p.addGroup(v,O,0),v+=O}function R(w){const P=b,O=new le,N=new V;let H=0;const A=w===!0?t:i,D=w===!0?1:-1;for(let q=1;q<=l;q++)_.push(0,M*D,0),x.push(0,D,0),y.push(.5,.5),b++;const G=b;for(let q=0;q<=l;q++){const et=q/l*m+h,it=Math.cos(et),I=Math.sin(et);N.x=A*I,N.y=M*D,N.z=A*it,_.push(N.x,N.y,N.z),x.push(0,D,0),O.x=it*.5+.5,O.y=I*.5*D+.5,y.push(O.x,O.y),b++}for(let q=0;q<l;q++){const Y=P+q,et=G+q;w===!0?g.push(et,et+1,Y):g.push(et+1,et,Y),H+=3}p.addGroup(v,H,w===!0?1:2),v+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gp(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _p extends gp{constructor(t=1,i=1,s=32,l=1,c=!1,f=0,h=Math.PI*2){super(0,t,i,s,l,c,f,h),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:h}}static fromJSON(t){return new _p(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class a1{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ae("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let f;i?f=i:f=t*s[c-1];let h=0,m=c-1,p;for(;h<=m;)if(l=Math.floor(h+(m-h)/2),p=s[l]-f,p<0)h=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===f)return l/(c-1);const g=s[l],x=s[l+1]-g,y=(f-g)/x;return(l+y)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),h=this.getPoint(c),m=i||(f.isVector2?new le:new V);return m.copy(h).sub(f).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new V,l=[],c=[],f=[],h=new V,m=new rn;for(let y=0;y<=t;y++){const b=y/t;l[y]=this.getTangentAt(b,new V)}c[0]=new V,f[0]=new V;let p=Number.MAX_VALUE;const g=Math.abs(l[0].x),_=Math.abs(l[0].y),x=Math.abs(l[0].z);g<=p&&(p=g,s.set(1,0,0)),_<=p&&(p=_,s.set(0,1,0)),x<=p&&s.set(0,0,1),h.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],h),f[0].crossVectors(l[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),f[y]=f[y-1].clone(),h.crossVectors(l[y-1],l[y]),h.length()>Number.EPSILON){h.normalize();const b=Math.acos(xe(l[y-1].dot(l[y]),-1,1));c[y].applyMatrix4(m.makeRotationAxis(h,b))}f[y].crossVectors(l[y],c[y])}if(i===!0){let y=Math.acos(xe(c[0].dot(c[t]),-1,1));y/=t,l[0].dot(h.crossVectors(c[0],c[t]))>0&&(y=-y);for(let b=1;b<=t;b++)c[b].applyMatrix4(m.makeRotationAxis(l[b],y*b)),f[b].crossVectors(l[b],c[b])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class V_ extends a1{constructor(t=0,i=0,s=1,l=1,c=0,f=Math.PI*2,h=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=h,this.aRotation=m}getPoint(t,i=new le){const s=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const h=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(h),p=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),x=m-this.aX,y=p-this.aY;m=x*g-y*_+this.aX,p=x*_+y*g+this.aY}return s.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class uu extends Ye{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,g=m+1,_=t/h,x=i/m,y=[],b=[],E=[],M=[];for(let v=0;v<g;v++){const C=v*x-f;for(let R=0;R<p;R++){const w=R*_-c;b.push(w,-C,0),E.push(0,0,1),M.push(R/h),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let C=0;C<h;C++){const R=C+p*v,w=C+p*(v+1),P=C+1+p*(v+1),O=C+1+p*v;y.push(R,w,O),y.push(w,P,O)}this.setIndex(y),this.setAttribute("position",new un(b,3)),this.setAttribute("normal",new un(E,3)),this.setAttribute("uv",new un(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uu(t.width,t.height,t.widthSegments,t.heightSegments)}}class vp extends Ye{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+h,Math.PI);let p=0;const g=[],_=new V,x=new V,y=[],b=[],E=[],M=[];for(let v=0;v<=s;v++){const C=[],R=v/s;let w=0;v===0&&f===0?w=.5/i:v===s&&m===Math.PI&&(w=-.5/i);for(let P=0;P<=i;P++){const O=P/i;_.x=-t*Math.cos(l+O*c)*Math.sin(f+R*h),_.y=t*Math.cos(f+R*h),_.z=t*Math.sin(l+O*c)*Math.sin(f+R*h),b.push(_.x,_.y,_.z),x.copy(_).normalize(),E.push(x.x,x.y,x.z),M.push(O+w,1-R),C.push(p++)}g.push(C)}for(let v=0;v<s;v++)for(let C=0;C<i;C++){const R=g[v][C+1],w=g[v][C],P=g[v+1][C],O=g[v+1][C+1];(v!==0||f>0)&&y.push(R,w,O),(v!==s-1||m<Math.PI)&&y.push(w,P,O)}this.setIndex(y),this.setAttribute("position",new un(b,3)),this.setAttribute("normal",new un(E,3)),this.setAttribute("uv",new un(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class s1 extends ia{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class r1 extends $r{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jv,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new na,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class o1 extends $r{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_b,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class l1 extends $r{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Yh extends hi{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class xp extends In{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new he(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Zh=new rn,k_=new V,X_=new V;class ax{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=pi,this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mp,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;k_.setFromMatrixPosition(t.matrixWorld),i.position.copy(k_),X_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(X_),i.updateMatrixWorld(),Zh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Zh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class c1 extends ax{constructor(){super(new di(90,1,.5,500)),this.isPointLightShadow=!0}}class u1 extends xp{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new c1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class yp extends $v{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class f1 extends ax{constructor(){super(new yp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kh extends xp{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.target=new In,this.shadow=new f1}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class h1 extends xp{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class d1 extends di{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class p1{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}class j_{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(xe(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Qh extends nx{constructor(t=10,i=10,s=4473924,l=8947848){s=new he(s),l=new he(l);const c=i/2,f=t/i,h=t/2,m=[],p=[];for(let x=0,y=0,b=-h;x<=i;x++,b+=f){m.push(-h,0,b,h,0,b),m.push(b,0,-h,b,0,h);const E=x===c?s:l;E.toArray(p,y),y+=3,E.toArray(p,y),y+=3,E.toArray(p,y),y+=3,E.toArray(p,y),y+=3}const g=new Ye;g.setAttribute("position",new un(m,3)),g.setAttribute("color",new un(p,3));const _=new hi({vertexColors:!0,toneMapped:!1});super(g,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class m1 extends qs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){ae("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function W_(r,t,i,s){const l=g1(s);switch(i){case Vv:return r*t;case Xv:return r*t/l.components*l.byteLength;case op:return r*t/l.components*l.byteLength;case Kr:return r*t*2/l.components*l.byteLength;case lp:return r*t*2/l.components*l.byteLength;case kv:return r*t*3/l.components*l.byteLength;case Bi:return r*t*4/l.components*l.byteLength;case cp:return r*t*4/l.components*l.byteLength;case Zc:case Kc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Qc:case Jc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case yd:case Sd:return Math.max(r,16)*Math.max(t,8)/4;case xd:case Md:return Math.max(r,8)*Math.max(t,8)/2;case bd:case Ed:case Ad:case Rd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Td:case wd:case Cd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Dd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Nd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Ud:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ld:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Pd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Od:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case zd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Id:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Fd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Bd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Hd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Gd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Vd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case kd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Xd:case jd:case Wd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case qd:case Yd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Zd:case Kd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function g1(r){switch(r){case pi:case Fv:return{byteLength:1,components:1};case rl:case Bv:case Na:return{byteLength:2,components:1};case sp:case rp:return{byteLength:2,components:4};case ea:case ap:case Ki:return{byteLength:4,components:1};case Hv:case Gv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ip}}));typeof window<"u"&&(window.__THREE__?ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ip);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sx(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function _1(r){const t=new WeakMap;function i(h,m){const p=h.array,g=h.usage,_=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,g),h.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,h),_.length===0)r.bufferSubData(p,0,g);else{_.sort((y,b)=>y.start-b.start);let x=0;for(let y=1;y<_.length;y++){const b=_[x],E=_[y];E.start<=b.start+b.count+1?b.count=Math.max(b.count,E.start+E.count-b.start):(++x,_[x]=E)}_.length=x+1;for(let y=0,b=_.length;y<b;y++){const E=_[y];r.bufferSubData(p,E.start*g.BYTES_PER_ELEMENT,g,E.start,E.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var v1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,x1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,y1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,M1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,b1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,E1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,T1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,A1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,R1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,w1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,C1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,N1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,U1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,L1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,P1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,O1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,I1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,F1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,B1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,H1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,G1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,V1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,k1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,X1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,W1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,q1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y1="gl_FragColor = linearToOutputTexel( gl_FragColor );",Z1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,K1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Q1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,J1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,eE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,uE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_E=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ME=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,EE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,RE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,NE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,PE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,IE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,GE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,JE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$E=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,tT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,oT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _T=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ST=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ET=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,TT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,AT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,RT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,UT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,FT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,BT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,VT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,WT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ZT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ve={alphahash_fragment:v1,alphahash_pars_fragment:x1,alphamap_fragment:y1,alphamap_pars_fragment:M1,alphatest_fragment:S1,alphatest_pars_fragment:b1,aomap_fragment:E1,aomap_pars_fragment:T1,batching_pars_vertex:A1,batching_vertex:R1,begin_vertex:w1,beginnormal_vertex:C1,bsdfs:D1,iridescence_fragment:N1,bumpmap_pars_fragment:U1,clipping_planes_fragment:L1,clipping_planes_pars_fragment:P1,clipping_planes_pars_vertex:O1,clipping_planes_vertex:z1,color_fragment:I1,color_pars_fragment:F1,color_pars_vertex:B1,color_vertex:H1,common:G1,cube_uv_reflection_fragment:V1,defaultnormal_vertex:k1,displacementmap_pars_vertex:X1,displacementmap_vertex:j1,emissivemap_fragment:W1,emissivemap_pars_fragment:q1,colorspace_fragment:Y1,colorspace_pars_fragment:Z1,envmap_fragment:K1,envmap_common_pars_fragment:Q1,envmap_pars_fragment:J1,envmap_pars_vertex:$1,envmap_physical_pars_fragment:uE,envmap_vertex:tE,fog_vertex:eE,fog_pars_vertex:nE,fog_fragment:iE,fog_pars_fragment:aE,gradientmap_pars_fragment:sE,lightmap_pars_fragment:rE,lights_lambert_fragment:oE,lights_lambert_pars_fragment:lE,lights_pars_begin:cE,lights_toon_fragment:fE,lights_toon_pars_fragment:hE,lights_phong_fragment:dE,lights_phong_pars_fragment:pE,lights_physical_fragment:mE,lights_physical_pars_fragment:gE,lights_fragment_begin:_E,lights_fragment_maps:vE,lights_fragment_end:xE,logdepthbuf_fragment:yE,logdepthbuf_pars_fragment:ME,logdepthbuf_pars_vertex:SE,logdepthbuf_vertex:bE,map_fragment:EE,map_pars_fragment:TE,map_particle_fragment:AE,map_particle_pars_fragment:RE,metalnessmap_fragment:wE,metalnessmap_pars_fragment:CE,morphinstance_vertex:DE,morphcolor_vertex:NE,morphnormal_vertex:UE,morphtarget_pars_vertex:LE,morphtarget_vertex:PE,normal_fragment_begin:OE,normal_fragment_maps:zE,normal_pars_fragment:IE,normal_pars_vertex:FE,normal_vertex:BE,normalmap_pars_fragment:HE,clearcoat_normal_fragment_begin:GE,clearcoat_normal_fragment_maps:VE,clearcoat_pars_fragment:kE,iridescence_pars_fragment:XE,opaque_fragment:jE,packing:WE,premultiplied_alpha_fragment:qE,project_vertex:YE,dithering_fragment:ZE,dithering_pars_fragment:KE,roughnessmap_fragment:QE,roughnessmap_pars_fragment:JE,shadowmap_pars_fragment:$E,shadowmap_pars_vertex:tT,shadowmap_vertex:eT,shadowmask_pars_fragment:nT,skinbase_vertex:iT,skinning_pars_vertex:aT,skinning_vertex:sT,skinnormal_vertex:rT,specularmap_fragment:oT,specularmap_pars_fragment:lT,tonemapping_fragment:cT,tonemapping_pars_fragment:uT,transmission_fragment:fT,transmission_pars_fragment:hT,uv_pars_fragment:dT,uv_pars_vertex:pT,uv_vertex:mT,worldpos_vertex:gT,background_vert:_T,background_frag:vT,backgroundCube_vert:xT,backgroundCube_frag:yT,cube_vert:MT,cube_frag:ST,depth_vert:bT,depth_frag:ET,distance_vert:TT,distance_frag:AT,equirect_vert:RT,equirect_frag:wT,linedashed_vert:CT,linedashed_frag:DT,meshbasic_vert:NT,meshbasic_frag:UT,meshlambert_vert:LT,meshlambert_frag:PT,meshmatcap_vert:OT,meshmatcap_frag:zT,meshnormal_vert:IT,meshnormal_frag:FT,meshphong_vert:BT,meshphong_frag:HT,meshphysical_vert:GT,meshphysical_frag:VT,meshtoon_vert:kT,meshtoon_frag:XT,points_vert:jT,points_frag:WT,shadow_vert:qT,shadow_frag:YT,sprite_vert:ZT,sprite_frag:KT},zt={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},Wi={basic:{uniforms:Xn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Xn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new he(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Xn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Xn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Xn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new he(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Xn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Xn([zt.points,zt.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Xn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Xn([zt.common,zt.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Xn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Xn([zt.sprite,zt.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distance:{uniforms:Xn([zt.common,zt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distance_vert,fragmentShader:ve.distance_frag},shadow:{uniforms:Xn([zt.lights,zt.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Wi.physical={uniforms:Xn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const jc={r:0,b:0,g:0},Bs=new na,QT=new rn;function JT(r,t,i,s,l,c,f){const h=new he(0);let m=c===!0?0:1,p,g,_=null,x=0,y=null;function b(R){let w=R.isScene===!0?R.background:null;return w&&w.isTexture&&(w=(R.backgroundBlurriness>0?i:t).get(w)),w}function E(R){let w=!1;const P=b(R);P===null?v(h,m):P&&P.isColor&&(v(P,1),w=!0);const O=r.xr.getEnvironmentBlendMode();O==="additive"?s.buffers.color.setClear(0,0,0,1,f):O==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||w)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(R,w){const P=b(w);P&&(P.isCubeTexture||P.mapping===lu)?(g===void 0&&(g=new Ri(new dl(1,1,1),new ia({name:"BackgroundCubeMaterial",uniforms:Jr(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(O,N,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Bs.copy(w.backgroundRotation),Bs.x*=-1,Bs.y*=-1,Bs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Bs.y*=-1,Bs.z*=-1),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(QT.makeRotationFromEuler(Bs)),g.material.toneMapped=Ce.getTransfer(P.colorSpace)!==ke,(_!==P||x!==P.version||y!==r.toneMapping)&&(g.material.needsUpdate=!0,_=P,x=P.version,y=r.toneMapping),g.layers.enableAll(),R.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new Ri(new uu(2,2),new ia({name:"BackgroundMaterial",uniforms:Jr(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=Ce.getTransfer(P.colorSpace)!==ke,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(_!==P||x!==P.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,_=P,x=P.version,y=r.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null))}function v(R,w){R.getRGB(jc,Jv(r)),s.buffers.color.setClear(jc.r,jc.g,jc.b,w,f)}function C(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(R,w=1){h.set(R),m=w,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(R){m=R,v(h,m)},render:E,addToRenderList:M,dispose:C}}function $T(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function h(D,G,q,Y,et){let it=!1;const I=_(Y,q,G);c!==I&&(c=I,p(c.object)),it=y(D,Y,q,et),it&&b(D,Y,q,et),et!==null&&t.update(et,r.ELEMENT_ARRAY_BUFFER),(it||f)&&(f=!1,w(D,G,q,Y),et!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function m(){return r.createVertexArray()}function p(D){return r.bindVertexArray(D)}function g(D){return r.deleteVertexArray(D)}function _(D,G,q){const Y=q.wireframe===!0;let et=s[D.id];et===void 0&&(et={},s[D.id]=et);let it=et[G.id];it===void 0&&(it={},et[G.id]=it);let I=it[Y];return I===void 0&&(I=x(m()),it[Y]=I),I}function x(D){const G=[],q=[],Y=[];for(let et=0;et<i;et++)G[et]=0,q[et]=0,Y[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:q,attributeDivisors:Y,object:D,attributes:{},index:null}}function y(D,G,q,Y){const et=c.attributes,it=G.attributes;let I=0;const B=q.getAttributes();for(const Z in B)if(B[Z].location>=0){const dt=et[Z];let z=it[Z];if(z===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(z=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(z=D.instanceColor)),dt===void 0||dt.attribute!==z||z&&dt.data!==z.data)return!0;I++}return c.attributesNum!==I||c.index!==Y}function b(D,G,q,Y){const et={},it=G.attributes;let I=0;const B=q.getAttributes();for(const Z in B)if(B[Z].location>=0){let dt=it[Z];dt===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(dt=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(dt=D.instanceColor));const z={};z.attribute=dt,dt&&dt.data&&(z.data=dt.data),et[Z]=z,I++}c.attributes=et,c.attributesNum=I,c.index=Y}function E(){const D=c.newAttributes;for(let G=0,q=D.length;G<q;G++)D[G]=0}function M(D){v(D,0)}function v(D,G){const q=c.newAttributes,Y=c.enabledAttributes,et=c.attributeDivisors;q[D]=1,Y[D]===0&&(r.enableVertexAttribArray(D),Y[D]=1),et[D]!==G&&(r.vertexAttribDivisor(D,G),et[D]=G)}function C(){const D=c.newAttributes,G=c.enabledAttributes;for(let q=0,Y=G.length;q<Y;q++)G[q]!==D[q]&&(r.disableVertexAttribArray(q),G[q]=0)}function R(D,G,q,Y,et,it,I){I===!0?r.vertexAttribIPointer(D,G,q,et,it):r.vertexAttribPointer(D,G,q,Y,et,it)}function w(D,G,q,Y){E();const et=Y.attributes,it=q.getAttributes(),I=G.defaultAttributeValues;for(const B in it){const Z=it[B];if(Z.location>=0){let mt=et[B];if(mt===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(mt=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(mt=D.instanceColor)),mt!==void 0){const dt=mt.normalized,z=mt.itemSize,nt=t.get(mt);if(nt===void 0)continue;const gt=nt.buffer,Et=nt.type,Nt=nt.bytesPerElement,at=Et===r.INT||Et===r.UNSIGNED_INT||mt.gpuType===ap;if(mt.isInterleavedBufferAttribute){const ft=mt.data,Rt=ft.stride,Gt=mt.offset;if(ft.isInstancedInterleavedBuffer){for(let Pt=0;Pt<Z.locationSize;Pt++)v(Z.location+Pt,ft.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Pt=0;Pt<Z.locationSize;Pt++)M(Z.location+Pt);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let Pt=0;Pt<Z.locationSize;Pt++)R(Z.location+Pt,z/Z.locationSize,Et,dt,Rt*Nt,(Gt+z/Z.locationSize*Pt)*Nt,at)}else{if(mt.isInstancedBufferAttribute){for(let ft=0;ft<Z.locationSize;ft++)v(Z.location+ft,mt.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let ft=0;ft<Z.locationSize;ft++)M(Z.location+ft);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let ft=0;ft<Z.locationSize;ft++)R(Z.location+ft,z/Z.locationSize,Et,dt,z*Nt,z/Z.locationSize*ft*Nt,at)}}else if(I!==void 0){const dt=I[B];if(dt!==void 0)switch(dt.length){case 2:r.vertexAttrib2fv(Z.location,dt);break;case 3:r.vertexAttrib3fv(Z.location,dt);break;case 4:r.vertexAttrib4fv(Z.location,dt);break;default:r.vertexAttrib1fv(Z.location,dt)}}}}C()}function P(){H();for(const D in s){const G=s[D];for(const q in G){const Y=G[q];for(const et in Y)g(Y[et].object),delete Y[et];delete G[q]}delete s[D]}}function O(D){if(s[D.id]===void 0)return;const G=s[D.id];for(const q in G){const Y=G[q];for(const et in Y)g(Y[et].object),delete Y[et];delete G[q]}delete s[D.id]}function N(D){for(const G in s){const q=s[G];if(q[D.id]===void 0)continue;const Y=q[D.id];for(const et in Y)g(Y[et].object),delete Y[et];delete q[D.id]}}function H(){A(),f=!0,c!==l&&(c=l,p(c.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:H,resetDefaultState:A,dispose:P,releaseStatesOfGeometry:O,releaseStatesOfProgram:N,initAttributes:E,enableAttribute:M,disableUnusedAttributes:C}}function tA(r,t,i){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function f(p,g,_){_!==0&&(r.drawArraysInstanced(s,p,g,_),i.update(g,s,_))}function h(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let y=0;for(let b=0;b<_;b++)y+=g[b];i.update(y,s,1)}function m(p,g,_,x){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)f(p[b],g[b],x[b]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,g,0,x,0,_);let b=0;for(let E=0;E<_;E++)b+=g[E]*x[E];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function eA(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(N){return!(N!==Bi&&s.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(N){const H=N===Na&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==pi&&s.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Ki&&!H)}function m(N){if(N==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(ae("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),R=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=r.getParameter(r.MAX_SAMPLES),O=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:b,maxTextureSize:E,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:C,maxVaryings:R,maxFragmentUniforms:w,maxSamples:P,samples:O}}function nA(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new hs,h=new me,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const y=_.length!==0||x||s!==0||l;return l=x,s=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,y){const b=_.clippingPlanes,E=_.clipIntersection,M=_.clipShadows,v=r.get(_);if(!l||b===null||b.length===0||c&&!M)c?g(null):p();else{const C=c?0:s,R=C*4;let w=v.clippingState||null;m.value=w,w=g(b,x,R,y);for(let P=0;P!==R;++P)w[P]=i[P];v.clippingState=w,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=C}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,x,y,b){const E=_!==null?_.length:0;let M=null;if(E!==0){if(M=m.value,b!==!0||M===null){const v=y+E*4,C=x.matrixWorldInverse;h.getNormalMatrix(C),(M===null||M.length<v)&&(M=new Float32Array(v));for(let R=0,w=y;R!==E;++R,w+=4)f.copy(_[R]).applyMatrix4(C,h),f.normal.toArray(M,w),M[w+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,M}}function iA(r){let t=new WeakMap;function i(f,h){return h===md?f.mapping=js:h===gd&&(f.mapping=Zr),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===md||h===gd)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new ex(m.height);return p.fromEquirectangularTexture(r,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const ps=4,q_=[.125,.215,.35,.446,.526,.582],Vs=20,aA=256,nl=new yp,Y_=new he;let Jh=null,$h=0,td=0,ed=!1;const sA=new V;class Z_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=sA}=c;Jh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=J_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Q_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Jh,$h,td),this._renderer.xr.enabled=ed,t.scissorTest=!1,kr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===js||t.mapping===Zr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:Na,format:Bi,colorSpace:Qr,depthBuffer:!1},l=K_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=K_(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=rA(c)),this._blurMaterial=lA(c,t,i),this._ggxMaterial=oA(c,t,i)}return l}_compileMaterial(t){const i=new Ri(new Ye,t);this._renderer.compile(i,nl)}_sceneToCubeUV(t,i,s,l,c){const m=new di(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,y=_.toneMapping;_.getClearColor(Y_),_.toneMapping=Ji,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ri(new dl,new au({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,M=E.material;let v=!1;const C=t.background;C?C.isColor&&(M.color.copy(C),t.background=null,v=!0):(M.color.copy(Y_),v=!0);for(let R=0;R<6;R++){const w=R%3;w===0?(m.up.set(0,p[R],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[R],c.y,c.z)):w===1?(m.up.set(0,0,p[R]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[R],c.z)):(m.up.set(0,p[R],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[R]));const P=this._cubeSize;kr(l,w*P,R>2?P:0,P,P),_.setRenderTarget(l),v&&_.render(E,m),_.render(t,m)}_.toneMapping=y,_.autoClear=x,t.background=C}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===js||t.mapping===Zr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=J_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Q_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;kr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,nl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[s];h.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),x=0+p*1.25,y=_*x,{_lodMax:b}=this,E=this._sizeLods[s],M=3*E*(s>b-ps?s-b+ps:0),v=4*(this._cubeSize-E);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=b-i,kr(c,M,v,3*E,2*E),l.setRenderTarget(c),l.render(h,nl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,kr(t,M,v,3*E,2*E),l.setRenderTarget(t),l.render(h,nl)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Le("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=p;const x=p.uniforms,y=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Vs-1),E=c/b,M=isFinite(c)?1+Math.floor(g*E):Vs;M>Vs&&ae(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Vs}`);const v=[];let C=0;for(let N=0;N<Vs;++N){const H=N/E,A=Math.exp(-H*H/2);v.push(A),N===0?C+=A:N<M&&(C+=2*A)}for(let N=0;N<v.length;N++)v[N]=v[N]/C;x.envMap.value=t.texture,x.samples.value=M,x.weights.value=v,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:R}=this;x.dTheta.value=b,x.mipInt.value=R-s;const w=this._sizeLods[l],P=3*w*(l>R-ps?l-R+ps:0),O=4*(this._cubeSize-w);kr(i,P,O,3*w,2*w),m.setRenderTarget(i),m.render(_,nl)}}function rA(r){const t=[],i=[],s=[];let l=r;const c=r-ps+1+q_.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);t.push(h);let m=1/h;f>r-ps?m=q_[f-r+ps-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,b=6,E=3,M=2,v=1,C=new Float32Array(E*b*y),R=new Float32Array(M*b*y),w=new Float32Array(v*b*y);for(let O=0;O<y;O++){const N=O%3*2/3-1,H=O>2?0:-1,A=[N,H,0,N+2/3,H,0,N+2/3,H+1,0,N,H,0,N+2/3,H+1,0,N,H+1,0];C.set(A,E*b*O),R.set(x,M*b*O);const D=[O,O,O,O,O,O];w.set(D,v*b*O)}const P=new Ye;P.setAttribute("position",new ta(C,E)),P.setAttribute("uv",new ta(R,M)),P.setAttribute("faceIndex",new ta(w,v)),s.push(new Ri(P,null)),l>ps&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function K_(r,t,i){const s=new $i(r,t,i);return s.texture.mapping=lu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function kr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function oA(r,t,i){return new ia({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:aA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function lA(r,t,i){const s=new Float32Array(Vs),l=new V(0,1,0);return new ia({name:"SphericalGaussianBlur",defines:{n:Vs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function Q_(){return new ia({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function J_(){return new ia({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function fu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function cA(r){let t=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===md||m===gd,g=m===js||m===Zr;if(p||g){let _=t.get(h);const x=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new Z_(r)),_=p?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const y=h.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new Z_(r)),_=p?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function uA(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ll("WebGLRenderer: "+s+" extension not supported."),l}}}function fA(r,t,i,s){const l={},c=new WeakMap;function f(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const b in x.attributes)t.remove(x.attributes[b]);x.removeEventListener("dispose",f),delete l[x.id];const y=c.get(x);y&&(t.remove(y),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(_,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const y in x)t.update(x[y],r.ARRAY_BUFFER)}function p(_){const x=[],y=_.index,b=_.attributes.position;let E=0;if(y!==null){const C=y.array;E=y.version;for(let R=0,w=C.length;R<w;R+=3){const P=C[R+0],O=C[R+1],N=C[R+2];x.push(P,O,O,N,N,P)}}else if(b!==void 0){const C=b.array;E=b.version;for(let R=0,w=C.length/3-1;R<w;R+=3){const P=R+0,O=R+1,N=R+2;x.push(P,O,O,N,N,P)}}else return;const M=new(Wv(x)?Qv:Kv)(x,1);M.version=E;const v=c.get(_);v&&t.remove(v),c.set(_,M)}function g(_){const x=c.get(_);if(x){const y=_.index;y!==null&&x.version<y.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function hA(r,t,i){let s;function l(x){s=x}let c,f;function h(x){c=x.type,f=x.bytesPerElement}function m(x,y){r.drawElements(s,y,c,x*f),i.update(y,s,1)}function p(x,y,b){b!==0&&(r.drawElementsInstanced(s,y,c,x*f,b),i.update(y,s,b))}function g(x,y,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,x,0,b);let M=0;for(let v=0;v<b;v++)M+=y[v];i.update(M,s,1)}function _(x,y,b,E){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<x.length;v++)p(x[v]/f,y[v],E[v]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,x,0,E,0,b);let v=0;for(let C=0;C<b;C++)v+=y[C]*E[C];i.update(v,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function dA(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:Le("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function pA(r,t,i){const s=new WeakMap,l=new cn;function c(f,h,m){const p=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let x=s.get(h);if(x===void 0||x.count!==_){let D=function(){H.dispose(),s.delete(h),h.removeEventListener("dispose",D)};var y=D;x!==void 0&&x.texture.dispose();const b=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],R=h.morphAttributes.color||[];let w=0;b===!0&&(w=1),E===!0&&(w=2),M===!0&&(w=3);let P=h.attributes.position.count*w,O=1;P>t.maxTextureSize&&(O=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const N=new Float32Array(P*O*4*_),H=new qv(N,P,O,_);H.type=Ki,H.needsUpdate=!0;const A=w*4;for(let G=0;G<_;G++){const q=v[G],Y=C[G],et=R[G],it=P*O*4*G;for(let I=0;I<q.count;I++){const B=I*A;b===!0&&(l.fromBufferAttribute(q,I),N[it+B+0]=l.x,N[it+B+1]=l.y,N[it+B+2]=l.z,N[it+B+3]=0),E===!0&&(l.fromBufferAttribute(Y,I),N[it+B+4]=l.x,N[it+B+5]=l.y,N[it+B+6]=l.z,N[it+B+7]=0),M===!0&&(l.fromBufferAttribute(et,I),N[it+B+8]=l.x,N[it+B+9]=l.y,N[it+B+10]=l.z,N[it+B+11]=et.itemSize===4?l.w:1)}}x={count:_,texture:H,size:new le(P,O)},s.set(h,x),h.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const E=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",E),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function mA(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return _}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const gA={[Dv]:"LINEAR_TONE_MAPPING",[Nv]:"REINHARD_TONE_MAPPING",[Uv]:"CINEON_TONE_MAPPING",[Lv]:"ACES_FILMIC_TONE_MAPPING",[Ov]:"AGX_TONE_MAPPING",[zv]:"NEUTRAL_TONE_MAPPING",[Pv]:"CUSTOM_TONE_MAPPING"};function _A(r,t,i,s,l){const c=new $i(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new $i(t,i,{type:Na,depthBuffer:!1,stencilBuffer:!1}),h=new Ye;h.setAttribute("position",new un([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new un([0,2,0,0,2,0],2));const m=new s1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Ri(h,m),g=new yp(-1,1,1,-1,0,1);let _=null,x=null,y=!1,b,E=null,M=[],v=!1;this.setSize=function(C,R){c.setSize(C,R),f.setSize(C,R);for(let w=0;w<M.length;w++){const P=M[w];P.setSize&&P.setSize(C,R)}},this.setEffects=function(C){M=C,v=M.length>0&&M[0].isRenderPass===!0;const R=c.width,w=c.height;for(let P=0;P<M.length;P++){const O=M[P];O.setSize&&O.setSize(R,w)}},this.begin=function(C,R){if(y||C.toneMapping===Ji&&M.length===0)return!1;if(E=R,R!==null){const w=R.width,P=R.height;(c.width!==w||c.height!==P)&&this.setSize(w,P)}return v===!1&&C.setRenderTarget(c),b=C.toneMapping,C.toneMapping=Ji,!0},this.hasRenderPass=function(){return v},this.end=function(C,R){C.toneMapping=b,y=!0;let w=c,P=f;for(let O=0;O<M.length;O++){const N=M[O];if(N.enabled!==!1&&(N.render(C,P,w,R),N.needsSwap!==!1)){const H=w;w=P,P=H}}if(_!==C.outputColorSpace||x!==C.toneMapping){_=C.outputColorSpace,x=C.toneMapping,m.defines={},Ce.getTransfer(_)===ke&&(m.defines.SRGB_TRANSFER="");const O=gA[x];O&&(m.defines[O]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=w.texture,C.setRenderTarget(E),C.render(p,g),E=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const rx=new Wn,Jd=new cl(1,1),ox=new qv,lx=new Pb,cx=new tx,$_=[],tv=[],ev=new Float32Array(16),nv=new Float32Array(9),iv=new Float32Array(4);function to(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=$_[l];if(c===void 0&&(c=new Float32Array(l),$_[l]=c),t!==0){s.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=i,r[f].toArray(c,h)}return c}function Sn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function bn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function hu(r,t){let i=tv[t];i===void 0&&(i=new Int32Array(t),tv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function vA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function xA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;r.uniform2fv(this.addr,t),bn(i,t)}}function yA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Sn(i,t))return;r.uniform3fv(this.addr,t),bn(i,t)}}function MA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;r.uniform4fv(this.addr,t),bn(i,t)}}function SA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),bn(i,t)}else{if(Sn(i,s))return;iv.set(s),r.uniformMatrix2fv(this.addr,!1,iv),bn(i,s)}}function bA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),bn(i,t)}else{if(Sn(i,s))return;nv.set(s),r.uniformMatrix3fv(this.addr,!1,nv),bn(i,s)}}function EA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),bn(i,t)}else{if(Sn(i,s))return;ev.set(s),r.uniformMatrix4fv(this.addr,!1,ev),bn(i,s)}}function TA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function AA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;r.uniform2iv(this.addr,t),bn(i,t)}}function RA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Sn(i,t))return;r.uniform3iv(this.addr,t),bn(i,t)}}function wA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;r.uniform4iv(this.addr,t),bn(i,t)}}function CA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function DA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;r.uniform2uiv(this.addr,t),bn(i,t)}}function NA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Sn(i,t))return;r.uniform3uiv(this.addr,t),bn(i,t)}}function UA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;r.uniform4uiv(this.addr,t),bn(i,t)}}function LA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Jd.compareFunction=i.isReversedDepthBuffer()?fp:up,c=Jd):c=rx,i.setTexture2D(t||c,l)}function PA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||lx,l)}function OA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||cx,l)}function zA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||ox,l)}function IA(r){switch(r){case 5126:return vA;case 35664:return xA;case 35665:return yA;case 35666:return MA;case 35674:return SA;case 35675:return bA;case 35676:return EA;case 5124:case 35670:return TA;case 35667:case 35671:return AA;case 35668:case 35672:return RA;case 35669:case 35673:return wA;case 5125:return CA;case 36294:return DA;case 36295:return NA;case 36296:return UA;case 35678:case 36198:case 36298:case 36306:case 35682:return LA;case 35679:case 36299:case 36307:return PA;case 35680:case 36300:case 36308:case 36293:return OA;case 36289:case 36303:case 36311:case 36292:return zA}}function FA(r,t){r.uniform1fv(this.addr,t)}function BA(r,t){const i=to(t,this.size,2);r.uniform2fv(this.addr,i)}function HA(r,t){const i=to(t,this.size,3);r.uniform3fv(this.addr,i)}function GA(r,t){const i=to(t,this.size,4);r.uniform4fv(this.addr,i)}function VA(r,t){const i=to(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function kA(r,t){const i=to(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function XA(r,t){const i=to(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function jA(r,t){r.uniform1iv(this.addr,t)}function WA(r,t){r.uniform2iv(this.addr,t)}function qA(r,t){r.uniform3iv(this.addr,t)}function YA(r,t){r.uniform4iv(this.addr,t)}function ZA(r,t){r.uniform1uiv(this.addr,t)}function KA(r,t){r.uniform2uiv(this.addr,t)}function QA(r,t){r.uniform3uiv(this.addr,t)}function JA(r,t){r.uniform4uiv(this.addr,t)}function $A(r,t,i){const s=this.cache,l=t.length,c=hu(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),bn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=Jd:f=rx;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||f,c[h])}function t2(r,t,i){const s=this.cache,l=t.length,c=hu(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),bn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||lx,c[f])}function e2(r,t,i){const s=this.cache,l=t.length,c=hu(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),bn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||cx,c[f])}function n2(r,t,i){const s=this.cache,l=t.length,c=hu(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),bn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||ox,c[f])}function i2(r){switch(r){case 5126:return FA;case 35664:return BA;case 35665:return HA;case 35666:return GA;case 35674:return VA;case 35675:return kA;case 35676:return XA;case 5124:case 35670:return jA;case 35667:case 35671:return WA;case 35668:case 35672:return qA;case 35669:case 35673:return YA;case 5125:return ZA;case 36294:return KA;case 36295:return QA;case 36296:return JA;case 35678:case 36198:case 36298:case 36306:case 35682:return $A;case 35679:case 36299:case 36307:return t2;case 35680:case 36300:case 36308:case 36293:return e2;case 36289:case 36303:case 36311:case 36292:return n2}}class a2{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=IA(i.type)}}class s2{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=i2(i.type)}}class r2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const nd=/(\w+)(\])?(\[|\.)?/g;function av(r,t){r.seq.push(t),r.map[t.id]=t}function o2(r,t,i){const s=r.name,l=s.length;for(nd.lastIndex=0;;){const c=nd.exec(s),f=nd.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){av(i,p===void 0?new a2(h,r,t):new s2(h,r,t));break}else{let _=i.map[h];_===void 0&&(_=new r2(h),av(i,_)),i=_}}}class tu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const h=t.getActiveUniform(i,f),m=t.getUniformLocation(i,h.name);o2(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function sv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const l2=37297;let c2=0;function u2(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const rv=new me;function f2(r){Ce._getMatrix(rv,Ce.workingColorSpace,r);const t=`mat3( ${rv.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(r)){case eu:return[t,"LinearTransferOETF"];case ke:return[t,"sRGBTransferOETF"];default:return ae("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function ov(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+u2(r.getShaderSource(t),h)}else return c}function h2(r,t){const i=f2(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const d2={[Dv]:"Linear",[Nv]:"Reinhard",[Uv]:"Cineon",[Lv]:"ACESFilmic",[Ov]:"AgX",[zv]:"Neutral",[Pv]:"Custom"};function p2(r,t){const i=d2[t];return i===void 0?(ae("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Wc=new V;function m2(){Ce.getLuminanceCoefficients(Wc);const r=Wc.x.toFixed(4),t=Wc.y.toFixed(4),i=Wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function g2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sl).join(`
`)}function _2(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function v2(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return i}function sl(r){return r!==""}function lv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const x2=/^[ \t]*#include +<([\w\d./]+)>/gm;function $d(r){return r.replace(x2,M2)}const y2=new Map;function M2(r,t){let i=ve[t];if(i===void 0){const s=y2.get(t);if(s!==void 0)i=ve[s],ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return $d(i)}const S2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uv(r){return r.replace(S2,b2)}function b2(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function fv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const E2={[Yc]:"SHADOWMAP_TYPE_PCF",[al]:"SHADOWMAP_TYPE_VSM"};function T2(r){return E2[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const A2={[js]:"ENVMAP_TYPE_CUBE",[Zr]:"ENVMAP_TYPE_CUBE",[lu]:"ENVMAP_TYPE_CUBE_UV"};function R2(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":A2[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const w2={[Zr]:"ENVMAP_MODE_REFRACTION"};function C2(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":w2[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const D2={[Cv]:"ENVMAP_BLENDING_MULTIPLY",[pb]:"ENVMAP_BLENDING_MIX",[mb]:"ENVMAP_BLENDING_ADD"};function N2(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":D2[r.combine]||"ENVMAP_BLENDING_NONE"}function U2(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function L2(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=T2(i),p=R2(i),g=C2(i),_=N2(i),x=U2(i),y=g2(i),b=_2(c),E=l.createProgram();let M,v,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(sl).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(sl).join(`
`),v.length>0&&(v+=`
`)):(M=[fv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sl).join(`
`),v=[fv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ji?"#define TONE_MAPPING":"",i.toneMapping!==Ji?ve.tonemapping_pars_fragment:"",i.toneMapping!==Ji?p2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,h2("linearToOutputTexel",i.outputColorSpace),m2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(sl).join(`
`)),f=$d(f),f=lv(f,i),f=cv(f,i),h=$d(h),h=lv(h,i),h=cv(h,i),f=uv(f),h=uv(h),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===x_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===x_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const R=C+M+f,w=C+v+h,P=sv(l,l.VERTEX_SHADER,R),O=sv(l,l.FRAGMENT_SHADER,w);l.attachShader(E,P),l.attachShader(E,O),i.index0AttributeName!==void 0?l.bindAttribLocation(E,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(E,0,"position"),l.linkProgram(E);function N(G){if(r.debug.checkShaderErrors){const q=l.getProgramInfoLog(E)||"",Y=l.getShaderInfoLog(P)||"",et=l.getShaderInfoLog(O)||"",it=q.trim(),I=Y.trim(),B=et.trim();let Z=!0,mt=!0;if(l.getProgramParameter(E,l.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,E,P,O);else{const dt=ov(l,P,"vertex"),z=ov(l,O,"fragment");Le("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(E,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+it+`
`+dt+`
`+z)}else it!==""?ae("WebGLProgram: Program Info Log:",it):(I===""||B==="")&&(mt=!1);mt&&(G.diagnostics={runnable:Z,programLog:it,vertexShader:{log:I,prefix:M},fragmentShader:{log:B,prefix:v}})}l.deleteShader(P),l.deleteShader(O),H=new tu(l,E),A=v2(l,E)}let H;this.getUniforms=function(){return H===void 0&&N(this),H};let A;this.getAttributes=function(){return A===void 0&&N(this),A};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(E,l2)),D},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(E),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=c2++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=P,this.fragmentShader=O,this}let P2=0;class O2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new z2(t),i.set(t,s)),s}}class z2{constructor(t){this.id=P2++,this.code=t,this.usedTimes=0}}function I2(r,t,i,s,l,c,f){const h=new Yv,m=new O2,p=new Set,g=[],_=new Map,x=l.logarithmicDepthBuffer;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(A){return p.add(A),A===0?"uv":`uv${A}`}function M(A,D,G,q,Y){const et=q.fog,it=Y.geometry,I=A.isMeshStandardMaterial?q.environment:null,B=(A.isMeshStandardMaterial?i:t).get(A.envMap||I),Z=B&&B.mapping===lu?B.image.height:null,mt=b[A.type];A.precision!==null&&(y=l.getMaxPrecision(A.precision),y!==A.precision&&ae("WebGLProgram.getParameters:",A.precision,"not supported, using",y,"instead."));const dt=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,z=dt!==void 0?dt.length:0;let nt=0;it.morphAttributes.position!==void 0&&(nt=1),it.morphAttributes.normal!==void 0&&(nt=2),it.morphAttributes.color!==void 0&&(nt=3);let gt,Et,Nt,at;if(mt){const we=Wi[mt];gt=we.vertexShader,Et=we.fragmentShader}else gt=A.vertexShader,Et=A.fragmentShader,m.update(A),Nt=m.getVertexShaderID(A),at=m.getFragmentShaderID(A);const ft=r.getRenderTarget(),Rt=r.state.buffers.depth.getReversed(),Gt=Y.isInstancedMesh===!0,Pt=Y.isBatchedMesh===!0,_e=!!A.map,Ke=!!A.matcap,ue=!!B,re=!!A.aoMap,ye=!!A.lightMap,ne=!!A.bumpMap,Xe=!!A.normalMap,j=!!A.displacementMap,Ae=!!A.emissiveMap,Re=!!A.metalnessMap,Ie=!!A.roughnessMap,Yt=A.anisotropy>0,F=A.clearcoat>0,T=A.dispersion>0,Q=A.iridescence>0,_t=A.sheen>0,Mt=A.transmission>0,ht=Yt&&!!A.anisotropyMap,Kt=F&&!!A.clearcoatMap,Ct=F&&!!A.clearcoatNormalMap,jt=F&&!!A.clearcoatRoughnessMap,ie=Q&&!!A.iridescenceMap,bt=Q&&!!A.iridescenceThicknessMap,Tt=_t&&!!A.sheenColorMap,Ht=_t&&!!A.sheenRoughnessMap,Ft=!!A.specularMap,Dt=!!A.specularColorMap,de=!!A.specularIntensityMap,K=Mt&&!!A.transmissionMap,Lt=Mt&&!!A.thicknessMap,At=!!A.gradientMap,Bt=!!A.alphaMap,St=A.alphaTest>0,yt=!!A.alphaHash,wt=!!A.extensions;let se=Ji;A.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(se=r.toneMapping);const Be={shaderID:mt,shaderType:A.type,shaderName:A.name,vertexShader:gt,fragmentShader:Et,defines:A.defines,customVertexShaderID:Nt,customFragmentShaderID:at,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:y,batching:Pt,batchingColor:Pt&&Y._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&Y.instanceColor!==null,instancingMorph:Gt&&Y.morphTexture!==null,outputColorSpace:ft===null?r.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Qr,alphaToCoverage:!!A.alphaToCoverage,map:_e,matcap:Ke,envMap:ue,envMapMode:ue&&B.mapping,envMapCubeUVHeight:Z,aoMap:re,lightMap:ye,bumpMap:ne,normalMap:Xe,displacementMap:j,emissiveMap:Ae,normalMapObjectSpace:Xe&&A.normalMapType===vb,normalMapTangentSpace:Xe&&A.normalMapType===jv,metalnessMap:Re,roughnessMap:Ie,anisotropy:Yt,anisotropyMap:ht,clearcoat:F,clearcoatMap:Kt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:jt,dispersion:T,iridescence:Q,iridescenceMap:ie,iridescenceThicknessMap:bt,sheen:_t,sheenColorMap:Tt,sheenRoughnessMap:Ht,specularMap:Ft,specularColorMap:Dt,specularIntensityMap:de,transmission:Mt,transmissionMap:K,thicknessMap:Lt,gradientMap:At,opaque:A.transparent===!1&&A.blending===Wr&&A.alphaToCoverage===!1,alphaMap:Bt,alphaTest:St,alphaHash:yt,combine:A.combine,mapUv:_e&&E(A.map.channel),aoMapUv:re&&E(A.aoMap.channel),lightMapUv:ye&&E(A.lightMap.channel),bumpMapUv:ne&&E(A.bumpMap.channel),normalMapUv:Xe&&E(A.normalMap.channel),displacementMapUv:j&&E(A.displacementMap.channel),emissiveMapUv:Ae&&E(A.emissiveMap.channel),metalnessMapUv:Re&&E(A.metalnessMap.channel),roughnessMapUv:Ie&&E(A.roughnessMap.channel),anisotropyMapUv:ht&&E(A.anisotropyMap.channel),clearcoatMapUv:Kt&&E(A.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&E(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:jt&&E(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&E(A.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&E(A.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&E(A.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&E(A.sheenRoughnessMap.channel),specularMapUv:Ft&&E(A.specularMap.channel),specularColorMapUv:Dt&&E(A.specularColorMap.channel),specularIntensityMapUv:de&&E(A.specularIntensityMap.channel),transmissionMapUv:K&&E(A.transmissionMap.channel),thicknessMapUv:Lt&&E(A.thicknessMap.channel),alphaMapUv:Bt&&E(A.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&(Xe||Yt),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!it.attributes.uv&&(_e||Bt),fog:!!et,useFog:A.fog===!0,fogExp2:!!et&&et.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Rt,skinning:Y.isSkinnedMesh===!0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:nt,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:se,decodeVideoTexture:_e&&A.map.isVideoTexture===!0&&Ce.getTransfer(A.map.colorSpace)===ke,decodeVideoTextureEmissive:Ae&&A.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(A.emissiveMap.colorSpace)===ke,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Yi,flipSided:A.side===ni,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:wt&&A.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&A.extensions.multiDraw===!0||Pt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Be.vertexUv1s=p.has(1),Be.vertexUv2s=p.has(2),Be.vertexUv3s=p.has(3),p.clear(),Be}function v(A){const D=[];if(A.shaderID?D.push(A.shaderID):(D.push(A.customVertexShaderID),D.push(A.customFragmentShaderID)),A.defines!==void 0)for(const G in A.defines)D.push(G),D.push(A.defines[G]);return A.isRawShaderMaterial===!1&&(C(D,A),R(D,A),D.push(r.outputColorSpace)),D.push(A.customProgramCacheKey),D.join()}function C(A,D){A.push(D.precision),A.push(D.outputColorSpace),A.push(D.envMapMode),A.push(D.envMapCubeUVHeight),A.push(D.mapUv),A.push(D.alphaMapUv),A.push(D.lightMapUv),A.push(D.aoMapUv),A.push(D.bumpMapUv),A.push(D.normalMapUv),A.push(D.displacementMapUv),A.push(D.emissiveMapUv),A.push(D.metalnessMapUv),A.push(D.roughnessMapUv),A.push(D.anisotropyMapUv),A.push(D.clearcoatMapUv),A.push(D.clearcoatNormalMapUv),A.push(D.clearcoatRoughnessMapUv),A.push(D.iridescenceMapUv),A.push(D.iridescenceThicknessMapUv),A.push(D.sheenColorMapUv),A.push(D.sheenRoughnessMapUv),A.push(D.specularMapUv),A.push(D.specularColorMapUv),A.push(D.specularIntensityMapUv),A.push(D.transmissionMapUv),A.push(D.thicknessMapUv),A.push(D.combine),A.push(D.fogExp2),A.push(D.sizeAttenuation),A.push(D.morphTargetsCount),A.push(D.morphAttributeCount),A.push(D.numDirLights),A.push(D.numPointLights),A.push(D.numSpotLights),A.push(D.numSpotLightMaps),A.push(D.numHemiLights),A.push(D.numRectAreaLights),A.push(D.numDirLightShadows),A.push(D.numPointLightShadows),A.push(D.numSpotLightShadows),A.push(D.numSpotLightShadowsWithMaps),A.push(D.numLightProbes),A.push(D.shadowMapType),A.push(D.toneMapping),A.push(D.numClippingPlanes),A.push(D.numClipIntersection),A.push(D.depthPacking)}function R(A,D){h.disableAll(),D.instancing&&h.enable(0),D.instancingColor&&h.enable(1),D.instancingMorph&&h.enable(2),D.matcap&&h.enable(3),D.envMap&&h.enable(4),D.normalMapObjectSpace&&h.enable(5),D.normalMapTangentSpace&&h.enable(6),D.clearcoat&&h.enable(7),D.iridescence&&h.enable(8),D.alphaTest&&h.enable(9),D.vertexColors&&h.enable(10),D.vertexAlphas&&h.enable(11),D.vertexUv1s&&h.enable(12),D.vertexUv2s&&h.enable(13),D.vertexUv3s&&h.enable(14),D.vertexTangents&&h.enable(15),D.anisotropy&&h.enable(16),D.alphaHash&&h.enable(17),D.batching&&h.enable(18),D.dispersion&&h.enable(19),D.batchingColor&&h.enable(20),D.gradientMap&&h.enable(21),A.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),A.push(h.mask)}function w(A){const D=b[A.type];let G;if(D){const q=Wi[D];G=qb.clone(q.uniforms)}else G=A.uniforms;return G}function P(A,D){let G=_.get(D);return G!==void 0?++G.usedTimes:(G=new L2(r,D,A,c),g.push(G),_.set(D,G)),G}function O(A){if(--A.usedTimes===0){const D=g.indexOf(A);g[D]=g[g.length-1],g.pop(),_.delete(A.cacheKey),A.destroy()}}function N(A){m.remove(A)}function H(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:w,acquireProgram:P,releaseProgram:O,releaseShaderCache:N,programs:g,dispose:H}}function F2(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function B2(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function hv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function dv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(_,x,y,b,E,M){let v=r[t];return v===void 0?(v={id:_.id,object:_,geometry:x,material:y,groupOrder:b,renderOrder:_.renderOrder,z:E,group:M},r[t]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=y,v.groupOrder=b,v.renderOrder=_.renderOrder,v.z=E,v.group=M),t++,v}function h(_,x,y,b,E,M){const v=f(_,x,y,b,E,M);y.transmission>0?s.push(v):y.transparent===!0?l.push(v):i.push(v)}function m(_,x,y,b,E,M){const v=f(_,x,y,b,E,M);y.transmission>0?s.unshift(v):y.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,x){i.length>1&&i.sort(_||B2),s.length>1&&s.sort(x||hv),l.length>1&&l.sort(x||hv)}function g(){for(let _=t,x=r.length;_<x;_++){const y=r[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:g,sort:p}}function H2(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new dv,r.set(s,[f])):l>=c.length?(f=new dv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function G2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new V,color:new he};break;case"SpotLight":i={position:new V,direction:new V,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new V,color:new he,distance:0,decay:0};break;case"HemisphereLight":i={direction:new V,skyColor:new he,groundColor:new he};break;case"RectAreaLight":i={color:new he,position:new V,halfWidth:new V,halfHeight:new V};break}return r[t.id]=i,i}}}function V2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let k2=0;function X2(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function j2(r){const t=new G2,i=V2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new V);const l=new V,c=new rn,f=new rn;function h(p){let g=0,_=0,x=0;for(let A=0;A<9;A++)s.probe[A].set(0,0,0);let y=0,b=0,E=0,M=0,v=0,C=0,R=0,w=0,P=0,O=0,N=0;p.sort(X2);for(let A=0,D=p.length;A<D;A++){const G=p[A],q=G.color,Y=G.intensity,et=G.distance;let it=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Kr?it=G.shadow.map.texture:it=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)g+=q.r*Y,_+=q.g*Y,x+=q.b*Y;else if(G.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(G.sh.coefficients[I],Y);N++}else if(G.isDirectionalLight){const I=t.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const B=G.shadow,Z=i.get(G);Z.shadowIntensity=B.intensity,Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,s.directionalShadow[y]=Z,s.directionalShadowMap[y]=it,s.directionalShadowMatrix[y]=G.shadow.matrix,C++}s.directional[y]=I,y++}else if(G.isSpotLight){const I=t.get(G);I.position.setFromMatrixPosition(G.matrixWorld),I.color.copy(q).multiplyScalar(Y),I.distance=et,I.coneCos=Math.cos(G.angle),I.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),I.decay=G.decay,s.spot[E]=I;const B=G.shadow;if(G.map&&(s.spotLightMap[P]=G.map,P++,B.updateMatrices(G),G.castShadow&&O++),s.spotLightMatrix[E]=B.matrix,G.castShadow){const Z=i.get(G);Z.shadowIntensity=B.intensity,Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,s.spotShadow[E]=Z,s.spotShadowMap[E]=it,w++}E++}else if(G.isRectAreaLight){const I=t.get(G);I.color.copy(q).multiplyScalar(Y),I.halfWidth.set(G.width*.5,0,0),I.halfHeight.set(0,G.height*.5,0),s.rectArea[M]=I,M++}else if(G.isPointLight){const I=t.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),I.distance=G.distance,I.decay=G.decay,G.castShadow){const B=G.shadow,Z=i.get(G);Z.shadowIntensity=B.intensity,Z.shadowBias=B.bias,Z.shadowNormalBias=B.normalBias,Z.shadowRadius=B.radius,Z.shadowMapSize=B.mapSize,Z.shadowCameraNear=B.camera.near,Z.shadowCameraFar=B.camera.far,s.pointShadow[b]=Z,s.pointShadowMap[b]=it,s.pointShadowMatrix[b]=G.shadow.matrix,R++}s.point[b]=I,b++}else if(G.isHemisphereLight){const I=t.get(G);I.skyColor.copy(G.color).multiplyScalar(Y),I.groundColor.copy(G.groundColor).multiplyScalar(Y),s.hemi[v]=I,v++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=zt.LTC_FLOAT_1,s.rectAreaLTC2=zt.LTC_FLOAT_2):(s.rectAreaLTC1=zt.LTC_HALF_1,s.rectAreaLTC2=zt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=x;const H=s.hash;(H.directionalLength!==y||H.pointLength!==b||H.spotLength!==E||H.rectAreaLength!==M||H.hemiLength!==v||H.numDirectionalShadows!==C||H.numPointShadows!==R||H.numSpotShadows!==w||H.numSpotMaps!==P||H.numLightProbes!==N)&&(s.directional.length=y,s.spot.length=E,s.rectArea.length=M,s.point.length=b,s.hemi.length=v,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=w+P-O,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=N,H.directionalLength=y,H.pointLength=b,H.spotLength=E,H.rectAreaLength=M,H.hemiLength=v,H.numDirectionalShadows=C,H.numPointShadows=R,H.numSpotShadows=w,H.numSpotMaps=P,H.numLightProbes=N,s.version=k2++)}function m(p,g){let _=0,x=0,y=0,b=0,E=0;const M=g.matrixWorldInverse;for(let v=0,C=p.length;v<C;v++){const R=p[v];if(R.isDirectionalLight){const w=s.directional[_];w.direction.setFromMatrixPosition(R.matrixWorld),l.setFromMatrixPosition(R.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),_++}else if(R.isSpotLight){const w=s.spot[y];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(R.matrixWorld),l.setFromMatrixPosition(R.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),y++}else if(R.isRectAreaLight){const w=s.rectArea[b];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(M),f.identity(),c.copy(R.matrixWorld),c.premultiply(M),f.extractRotation(c),w.halfWidth.set(R.width*.5,0,0),w.halfHeight.set(0,R.height*.5,0),w.halfWidth.applyMatrix4(f),w.halfHeight.applyMatrix4(f),b++}else if(R.isPointLight){const w=s.point[x];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(M),x++}else if(R.isHemisphereLight){const w=s.hemi[E];w.direction.setFromMatrixPosition(R.matrixWorld),w.direction.transformDirection(M),E++}}}return{setup:h,setupView:m,state:s}}function pv(r){const t=new j2(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function f(g){s.push(g)}function h(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function W2(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new pv(r),t.set(l,[h])):c>=f.length?(h=new pv(r),f.push(h)):h=f[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const q2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Z2=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],K2=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],mv=new rn,il=new V,id=new V;function Q2(r,t,i){let s=new mp;const l=new le,c=new le,f=new cn,h=new o1,m=new l1,p={},g=i.maxTextureSize,_={[ms]:ni,[ni]:ms,[Yi]:Yi},x=new ia({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:q2,fragmentShader:Y2}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const b=new Ye;b.setAttribute("position",new ta(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Ri(b,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yc;let v=this.type;this.render=function(O,N,H){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||O.length===0)return;O.type===ZS&&(ae("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),O.type=Yc);const A=r.getRenderTarget(),D=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),q=r.state;q.setBlending(Ca),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const Y=v!==this.type;Y&&N.traverse(function(et){et.material&&(Array.isArray(et.material)?et.material.forEach(it=>it.needsUpdate=!0):et.material.needsUpdate=!0)});for(let et=0,it=O.length;et<it;et++){const I=O[et],B=I.shadow;if(B===void 0){ae("WebGLShadowMap:",I,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const Z=B.getFrameExtents();if(l.multiply(Z),c.copy(B.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/Z.x),l.x=c.x*Z.x,B.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/Z.y),l.y=c.y*Z.y,B.mapSize.y=c.y)),B.map===null||Y===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===al){if(I.isPointLight){ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new $i(l.x,l.y,{format:Kr,type:Na,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),B.map.texture.name=I.name+".shadowMap",B.map.depthTexture=new cl(l.x,l.y,Ki),B.map.depthTexture.name=I.name+".shadowMapDepth",B.map.depthTexture.format=Ua,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=zn,B.map.depthTexture.magFilter=zn}else{I.isPointLight?(B.map=new ex(l.x),B.map.depthTexture=new i1(l.x,ea)):(B.map=new $i(l.x,l.y),B.map.depthTexture=new cl(l.x,l.y,ea)),B.map.depthTexture.name=I.name+".shadowMap",B.map.depthTexture.format=Ua;const dt=r.state.buffers.depth.getReversed();this.type===Yc?(B.map.depthTexture.compareFunction=dt?fp:up,B.map.depthTexture.minFilter=Vn,B.map.depthTexture.magFilter=Vn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=zn,B.map.depthTexture.magFilter=zn)}B.camera.updateProjectionMatrix()}const mt=B.map.isWebGLCubeRenderTarget?6:1;for(let dt=0;dt<mt;dt++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,dt),r.clear();else{dt===0&&(r.setRenderTarget(B.map),r.clear());const z=B.getViewport(dt);f.set(c.x*z.x,c.y*z.y,c.x*z.z,c.y*z.w),q.viewport(f)}if(I.isPointLight){const z=B.camera,nt=B.matrix,gt=I.distance||z.far;gt!==z.far&&(z.far=gt,z.updateProjectionMatrix()),il.setFromMatrixPosition(I.matrixWorld),z.position.copy(il),id.copy(z.position),id.add(Z2[dt]),z.up.copy(K2[dt]),z.lookAt(id),z.updateMatrixWorld(),nt.makeTranslation(-il.x,-il.y,-il.z),mv.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),B._frustum.setFromProjectionMatrix(mv,z.coordinateSystem,z.reversedDepth)}else B.updateMatrices(I);s=B.getFrustum(),w(N,H,B.camera,I,this.type)}B.isPointLightShadow!==!0&&this.type===al&&C(B,H),B.needsUpdate=!1}v=this.type,M.needsUpdate=!1,r.setRenderTarget(A,D,G)};function C(O,N){const H=t.update(E);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new $i(l.x,l.y,{format:Kr,type:Na})),x.uniforms.shadow_pass.value=O.map.depthTexture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,r.setRenderTarget(O.mapPass),r.clear(),r.renderBufferDirect(N,null,H,x,E,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,r.setRenderTarget(O.map),r.clear(),r.renderBufferDirect(N,null,H,y,E,null)}function R(O,N,H,A){let D=null;const G=H.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(G!==void 0)D=G;else if(D=H.isPointLight===!0?m:h,r.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const q=D.uuid,Y=N.uuid;let et=p[q];et===void 0&&(et={},p[q]=et);let it=et[Y];it===void 0&&(it=D.clone(),et[Y]=it,N.addEventListener("dispose",P)),D=it}if(D.visible=N.visible,D.wireframe=N.wireframe,A===al?D.side=N.shadowSide!==null?N.shadowSide:N.side:D.side=N.shadowSide!==null?N.shadowSide:_[N.side],D.alphaMap=N.alphaMap,D.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,D.map=N.map,D.clipShadows=N.clipShadows,D.clippingPlanes=N.clippingPlanes,D.clipIntersection=N.clipIntersection,D.displacementMap=N.displacementMap,D.displacementScale=N.displacementScale,D.displacementBias=N.displacementBias,D.wireframeLinewidth=N.wireframeLinewidth,D.linewidth=N.linewidth,H.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const q=r.properties.get(D);q.light=H}return D}function w(O,N,H,A,D){if(O.visible===!1)return;if(O.layers.test(N.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&D===al)&&(!O.frustumCulled||s.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,O.matrixWorld);const Y=t.update(O),et=O.material;if(Array.isArray(et)){const it=Y.groups;for(let I=0,B=it.length;I<B;I++){const Z=it[I],mt=et[Z.materialIndex];if(mt&&mt.visible){const dt=R(O,mt,A,D);O.onBeforeShadow(r,O,N,H,Y,dt,Z),r.renderBufferDirect(H,null,Y,dt,O,Z),O.onAfterShadow(r,O,N,H,Y,dt,Z)}}}else if(et.visible){const it=R(O,et,A,D);O.onBeforeShadow(r,O,N,H,Y,it,null),r.renderBufferDirect(H,null,Y,it,O,null),O.onAfterShadow(r,O,N,H,Y,it,null)}}const q=O.children;for(let Y=0,et=q.length;Y<et;Y++)w(q[Y],N,H,A,D)}function P(O){O.target.removeEventListener("dispose",P);for(const H in p){const A=p[H],D=O.target.uuid;D in A&&(A[D].dispose(),delete A[D])}}}const J2={[ld]:cd,[ud]:dd,[fd]:pd,[Yr]:hd,[cd]:ld,[dd]:ud,[pd]:fd,[hd]:Yr};function $2(r,t){function i(){let K=!1;const Lt=new cn;let At=null;const Bt=new cn(0,0,0,0);return{setMask:function(St){At!==St&&!K&&(r.colorMask(St,St,St,St),At=St)},setLocked:function(St){K=St},setClear:function(St,yt,wt,se,Be){Be===!0&&(St*=se,yt*=se,wt*=se),Lt.set(St,yt,wt,se),Bt.equals(Lt)===!1&&(r.clearColor(St,yt,wt,se),Bt.copy(Lt))},reset:function(){K=!1,At=null,Bt.set(-1,0,0,0)}}}function s(){let K=!1,Lt=!1,At=null,Bt=null,St=null;return{setReversed:function(yt){if(Lt!==yt){const wt=t.get("EXT_clip_control");yt?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),Lt=yt;const se=St;St=null,this.setClear(se)}},getReversed:function(){return Lt},setTest:function(yt){yt?ft(r.DEPTH_TEST):Rt(r.DEPTH_TEST)},setMask:function(yt){At!==yt&&!K&&(r.depthMask(yt),At=yt)},setFunc:function(yt){if(Lt&&(yt=J2[yt]),Bt!==yt){switch(yt){case ld:r.depthFunc(r.NEVER);break;case cd:r.depthFunc(r.ALWAYS);break;case ud:r.depthFunc(r.LESS);break;case Yr:r.depthFunc(r.LEQUAL);break;case fd:r.depthFunc(r.EQUAL);break;case hd:r.depthFunc(r.GEQUAL);break;case dd:r.depthFunc(r.GREATER);break;case pd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Bt=yt}},setLocked:function(yt){K=yt},setClear:function(yt){St!==yt&&(Lt&&(yt=1-yt),r.clearDepth(yt),St=yt)},reset:function(){K=!1,At=null,Bt=null,St=null,Lt=!1}}}function l(){let K=!1,Lt=null,At=null,Bt=null,St=null,yt=null,wt=null,se=null,Be=null;return{setTest:function(we){K||(we?ft(r.STENCIL_TEST):Rt(r.STENCIL_TEST))},setMask:function(we){Lt!==we&&!K&&(r.stencilMask(we),Lt=we)},setFunc:function(we,Fn,wi){(At!==we||Bt!==Fn||St!==wi)&&(r.stencilFunc(we,Fn,wi),At=we,Bt=Fn,St=wi)},setOp:function(we,Fn,wi){(yt!==we||wt!==Fn||se!==wi)&&(r.stencilOp(we,Fn,wi),yt=we,wt=Fn,se=wi)},setLocked:function(we){K=we},setClear:function(we){Be!==we&&(r.clearStencil(we),Be=we)},reset:function(){K=!1,Lt=null,At=null,Bt=null,St=null,yt=null,wt=null,se=null,Be=null}}}const c=new i,f=new s,h=new l,m=new WeakMap,p=new WeakMap;let g={},_={},x=new WeakMap,y=[],b=null,E=!1,M=null,v=null,C=null,R=null,w=null,P=null,O=null,N=new he(0,0,0),H=0,A=!1,D=null,G=null,q=null,Y=null,et=null;const it=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,B=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Z)[1]),I=B>=1):Z.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),I=B>=2);let mt=null,dt={};const z=r.getParameter(r.SCISSOR_BOX),nt=r.getParameter(r.VIEWPORT),gt=new cn().fromArray(z),Et=new cn().fromArray(nt);function Nt(K,Lt,At,Bt){const St=new Uint8Array(4),yt=r.createTexture();r.bindTexture(K,yt),r.texParameteri(K,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(K,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let wt=0;wt<At;wt++)K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?r.texImage3D(Lt,0,r.RGBA,1,1,Bt,0,r.RGBA,r.UNSIGNED_BYTE,St):r.texImage2D(Lt+wt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,St);return yt}const at={};at[r.TEXTURE_2D]=Nt(r.TEXTURE_2D,r.TEXTURE_2D,1),at[r.TEXTURE_CUBE_MAP]=Nt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[r.TEXTURE_2D_ARRAY]=Nt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),at[r.TEXTURE_3D]=Nt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),ft(r.DEPTH_TEST),f.setFunc(Yr),ne(!1),Xe(d_),ft(r.CULL_FACE),re(Ca);function ft(K){g[K]!==!0&&(r.enable(K),g[K]=!0)}function Rt(K){g[K]!==!1&&(r.disable(K),g[K]=!1)}function Gt(K,Lt){return _[K]!==Lt?(r.bindFramebuffer(K,Lt),_[K]=Lt,K===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Lt),K===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Pt(K,Lt){let At=y,Bt=!1;if(K){At=x.get(Lt),At===void 0&&(At=[],x.set(Lt,At));const St=K.textures;if(At.length!==St.length||At[0]!==r.COLOR_ATTACHMENT0){for(let yt=0,wt=St.length;yt<wt;yt++)At[yt]=r.COLOR_ATTACHMENT0+yt;At.length=St.length,Bt=!0}}else At[0]!==r.BACK&&(At[0]=r.BACK,Bt=!0);Bt&&r.drawBuffers(At)}function _e(K){return b!==K?(r.useProgram(K),b=K,!0):!1}const Ke={[Gs]:r.FUNC_ADD,[QS]:r.FUNC_SUBTRACT,[JS]:r.FUNC_REVERSE_SUBTRACT};Ke[$S]=r.MIN,Ke[tb]=r.MAX;const ue={[eb]:r.ZERO,[nb]:r.ONE,[ib]:r.SRC_COLOR,[rd]:r.SRC_ALPHA,[cb]:r.SRC_ALPHA_SATURATE,[ob]:r.DST_COLOR,[sb]:r.DST_ALPHA,[ab]:r.ONE_MINUS_SRC_COLOR,[od]:r.ONE_MINUS_SRC_ALPHA,[lb]:r.ONE_MINUS_DST_COLOR,[rb]:r.ONE_MINUS_DST_ALPHA,[ub]:r.CONSTANT_COLOR,[fb]:r.ONE_MINUS_CONSTANT_COLOR,[hb]:r.CONSTANT_ALPHA,[db]:r.ONE_MINUS_CONSTANT_ALPHA};function re(K,Lt,At,Bt,St,yt,wt,se,Be,we){if(K===Ca){E===!0&&(Rt(r.BLEND),E=!1);return}if(E===!1&&(ft(r.BLEND),E=!0),K!==KS){if(K!==M||we!==A){if((v!==Gs||w!==Gs)&&(r.blendEquation(r.FUNC_ADD),v=Gs,w=Gs),we)switch(K){case Wr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case p_:r.blendFunc(r.ONE,r.ONE);break;case m_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case g_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Le("WebGLState: Invalid blending: ",K);break}else switch(K){case Wr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case p_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case m_:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case g_:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",K);break}C=null,R=null,P=null,O=null,N.set(0,0,0),H=0,M=K,A=we}return}St=St||Lt,yt=yt||At,wt=wt||Bt,(Lt!==v||St!==w)&&(r.blendEquationSeparate(Ke[Lt],Ke[St]),v=Lt,w=St),(At!==C||Bt!==R||yt!==P||wt!==O)&&(r.blendFuncSeparate(ue[At],ue[Bt],ue[yt],ue[wt]),C=At,R=Bt,P=yt,O=wt),(se.equals(N)===!1||Be!==H)&&(r.blendColor(se.r,se.g,se.b,Be),N.copy(se),H=Be),M=K,A=!1}function ye(K,Lt){K.side===Yi?Rt(r.CULL_FACE):ft(r.CULL_FACE);let At=K.side===ni;Lt&&(At=!At),ne(At),K.blending===Wr&&K.transparent===!1?re(Ca):re(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),f.setFunc(K.depthFunc),f.setTest(K.depthTest),f.setMask(K.depthWrite),c.setMask(K.colorWrite);const Bt=K.stencilWrite;h.setTest(Bt),Bt&&(h.setMask(K.stencilWriteMask),h.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),h.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),Ae(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?ft(r.SAMPLE_ALPHA_TO_COVERAGE):Rt(r.SAMPLE_ALPHA_TO_COVERAGE)}function ne(K){D!==K&&(K?r.frontFace(r.CW):r.frontFace(r.CCW),D=K)}function Xe(K){K!==qS?(ft(r.CULL_FACE),K!==G&&(K===d_?r.cullFace(r.BACK):K===YS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Rt(r.CULL_FACE),G=K}function j(K){K!==q&&(I&&r.lineWidth(K),q=K)}function Ae(K,Lt,At){K?(ft(r.POLYGON_OFFSET_FILL),(Y!==Lt||et!==At)&&(r.polygonOffset(Lt,At),Y=Lt,et=At)):Rt(r.POLYGON_OFFSET_FILL)}function Re(K){K?ft(r.SCISSOR_TEST):Rt(r.SCISSOR_TEST)}function Ie(K){K===void 0&&(K=r.TEXTURE0+it-1),mt!==K&&(r.activeTexture(K),mt=K)}function Yt(K,Lt,At){At===void 0&&(mt===null?At=r.TEXTURE0+it-1:At=mt);let Bt=dt[At];Bt===void 0&&(Bt={type:void 0,texture:void 0},dt[At]=Bt),(Bt.type!==K||Bt.texture!==Lt)&&(mt!==At&&(r.activeTexture(At),mt=At),r.bindTexture(K,Lt||at[K]),Bt.type=K,Bt.texture=Lt)}function F(){const K=dt[mt];K!==void 0&&K.type!==void 0&&(r.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(K){Le("WebGLState:",K)}}function Q(){try{r.compressedTexImage3D(...arguments)}catch(K){Le("WebGLState:",K)}}function _t(){try{r.texSubImage2D(...arguments)}catch(K){Le("WebGLState:",K)}}function Mt(){try{r.texSubImage3D(...arguments)}catch(K){Le("WebGLState:",K)}}function ht(){try{r.compressedTexSubImage2D(...arguments)}catch(K){Le("WebGLState:",K)}}function Kt(){try{r.compressedTexSubImage3D(...arguments)}catch(K){Le("WebGLState:",K)}}function Ct(){try{r.texStorage2D(...arguments)}catch(K){Le("WebGLState:",K)}}function jt(){try{r.texStorage3D(...arguments)}catch(K){Le("WebGLState:",K)}}function ie(){try{r.texImage2D(...arguments)}catch(K){Le("WebGLState:",K)}}function bt(){try{r.texImage3D(...arguments)}catch(K){Le("WebGLState:",K)}}function Tt(K){gt.equals(K)===!1&&(r.scissor(K.x,K.y,K.z,K.w),gt.copy(K))}function Ht(K){Et.equals(K)===!1&&(r.viewport(K.x,K.y,K.z,K.w),Et.copy(K))}function Ft(K,Lt){let At=p.get(Lt);At===void 0&&(At=new WeakMap,p.set(Lt,At));let Bt=At.get(K);Bt===void 0&&(Bt=r.getUniformBlockIndex(Lt,K.name),At.set(K,Bt))}function Dt(K,Lt){const Bt=p.get(Lt).get(K);m.get(Lt)!==Bt&&(r.uniformBlockBinding(Lt,Bt,K.__bindingPointIndex),m.set(Lt,Bt))}function de(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},mt=null,dt={},_={},x=new WeakMap,y=[],b=null,E=!1,M=null,v=null,C=null,R=null,w=null,P=null,O=null,N=new he(0,0,0),H=0,A=!1,D=null,G=null,q=null,Y=null,et=null,gt.set(0,0,r.canvas.width,r.canvas.height),Et.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:ft,disable:Rt,bindFramebuffer:Gt,drawBuffers:Pt,useProgram:_e,setBlending:re,setMaterial:ye,setFlipSided:ne,setCullFace:Xe,setLineWidth:j,setPolygonOffset:Ae,setScissorTest:Re,activeTexture:Ie,bindTexture:Yt,unbindTexture:F,compressedTexImage2D:T,compressedTexImage3D:Q,texImage2D:ie,texImage3D:bt,updateUBOMapping:Ft,uniformBlockBinding:Dt,texStorage2D:Ct,texStorage3D:jt,texSubImage2D:_t,texSubImage3D:Mt,compressedTexSubImage2D:ht,compressedTexSubImage3D:Kt,scissor:Tt,viewport:Ht,reset:de}}function tR(r,t,i,s,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new le,g=new WeakMap;let _;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(F,T){return y?new OffscreenCanvas(F,T):iu("canvas")}function E(F,T,Q){let _t=1;const Mt=Yt(F);if((Mt.width>Q||Mt.height>Q)&&(_t=Q/Math.max(Mt.width,Mt.height)),_t<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const ht=Math.floor(_t*Mt.width),Kt=Math.floor(_t*Mt.height);_===void 0&&(_=b(ht,Kt));const Ct=T?b(ht,Kt):_;return Ct.width=ht,Ct.height=Kt,Ct.getContext("2d").drawImage(F,0,0,ht,Kt),ae("WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+ht+"x"+Kt+")."),Ct}else return"data"in F&&ae("WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),F;return F}function M(F){return F.generateMipmaps}function v(F){r.generateMipmap(F)}function C(F){return F.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?r.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function R(F,T,Q,_t,Mt=!1){if(F!==null){if(r[F]!==void 0)return r[F];ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ht=T;if(T===r.RED&&(Q===r.FLOAT&&(ht=r.R32F),Q===r.HALF_FLOAT&&(ht=r.R16F),Q===r.UNSIGNED_BYTE&&(ht=r.R8)),T===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ht=r.R8UI),Q===r.UNSIGNED_SHORT&&(ht=r.R16UI),Q===r.UNSIGNED_INT&&(ht=r.R32UI),Q===r.BYTE&&(ht=r.R8I),Q===r.SHORT&&(ht=r.R16I),Q===r.INT&&(ht=r.R32I)),T===r.RG&&(Q===r.FLOAT&&(ht=r.RG32F),Q===r.HALF_FLOAT&&(ht=r.RG16F),Q===r.UNSIGNED_BYTE&&(ht=r.RG8)),T===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ht=r.RG8UI),Q===r.UNSIGNED_SHORT&&(ht=r.RG16UI),Q===r.UNSIGNED_INT&&(ht=r.RG32UI),Q===r.BYTE&&(ht=r.RG8I),Q===r.SHORT&&(ht=r.RG16I),Q===r.INT&&(ht=r.RG32I)),T===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ht=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(ht=r.RGB16UI),Q===r.UNSIGNED_INT&&(ht=r.RGB32UI),Q===r.BYTE&&(ht=r.RGB8I),Q===r.SHORT&&(ht=r.RGB16I),Q===r.INT&&(ht=r.RGB32I)),T===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ht=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(ht=r.RGBA16UI),Q===r.UNSIGNED_INT&&(ht=r.RGBA32UI),Q===r.BYTE&&(ht=r.RGBA8I),Q===r.SHORT&&(ht=r.RGBA16I),Q===r.INT&&(ht=r.RGBA32I)),T===r.RGB&&(Q===r.UNSIGNED_INT_5_9_9_9_REV&&(ht=r.RGB9_E5),Q===r.UNSIGNED_INT_10F_11F_11F_REV&&(ht=r.R11F_G11F_B10F)),T===r.RGBA){const Kt=Mt?eu:Ce.getTransfer(_t);Q===r.FLOAT&&(ht=r.RGBA32F),Q===r.HALF_FLOAT&&(ht=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(ht=Kt===ke?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT_4_4_4_4&&(ht=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(ht=r.RGB5_A1)}return(ht===r.R16F||ht===r.R32F||ht===r.RG16F||ht===r.RG32F||ht===r.RGBA16F||ht===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function w(F,T){let Q;return F?T===null||T===ea||T===ol?Q=r.DEPTH24_STENCIL8:T===Ki?Q=r.DEPTH32F_STENCIL8:T===rl&&(Q=r.DEPTH24_STENCIL8,ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ea||T===ol?Q=r.DEPTH_COMPONENT24:T===Ki?Q=r.DEPTH_COMPONENT32F:T===rl&&(Q=r.DEPTH_COMPONENT16),Q}function P(F,T){return M(F)===!0||F.isFramebufferTexture&&F.minFilter!==zn&&F.minFilter!==Vn?Math.log2(Math.max(T.width,T.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?T.mipmaps.length:1}function O(F){const T=F.target;T.removeEventListener("dispose",O),H(T),T.isVideoTexture&&g.delete(T)}function N(F){const T=F.target;T.removeEventListener("dispose",N),D(T)}function H(F){const T=s.get(F);if(T.__webglInit===void 0)return;const Q=F.source,_t=x.get(Q);if(_t){const Mt=_t[T.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&A(F),Object.keys(_t).length===0&&x.delete(Q)}s.remove(F)}function A(F){const T=s.get(F);r.deleteTexture(T.__webglTexture);const Q=F.source,_t=x.get(Q);delete _t[T.__cacheKey],f.memory.textures--}function D(F){const T=s.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),s.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(T.__webglFramebuffer[_t]))for(let Mt=0;Mt<T.__webglFramebuffer[_t].length;Mt++)r.deleteFramebuffer(T.__webglFramebuffer[_t][Mt]);else r.deleteFramebuffer(T.__webglFramebuffer[_t]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[_t])}else{if(Array.isArray(T.__webglFramebuffer))for(let _t=0;_t<T.__webglFramebuffer.length;_t++)r.deleteFramebuffer(T.__webglFramebuffer[_t]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let _t=0;_t<T.__webglColorRenderbuffer.length;_t++)T.__webglColorRenderbuffer[_t]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[_t]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Q=F.textures;for(let _t=0,Mt=Q.length;_t<Mt;_t++){const ht=s.get(Q[_t]);ht.__webglTexture&&(r.deleteTexture(ht.__webglTexture),f.memory.textures--),s.remove(Q[_t])}s.remove(F)}let G=0;function q(){G=0}function Y(){const F=G;return F>=l.maxTextures&&ae("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+l.maxTextures),G+=1,F}function et(F){const T=[];return T.push(F.wrapS),T.push(F.wrapT),T.push(F.wrapR||0),T.push(F.magFilter),T.push(F.minFilter),T.push(F.anisotropy),T.push(F.internalFormat),T.push(F.format),T.push(F.type),T.push(F.generateMipmaps),T.push(F.premultiplyAlpha),T.push(F.flipY),T.push(F.unpackAlignment),T.push(F.colorSpace),T.join()}function it(F,T){const Q=s.get(F);if(F.isVideoTexture&&Re(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&Q.__version!==F.version){const _t=F.image;if(_t===null)ae("WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)ae("WebGLRenderer: Texture marked for update but image is incomplete");else{at(Q,F,T);return}}else F.isExternalTexture&&(Q.__webglTexture=F.sourceTexture?F.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+T)}function I(F,T){const Q=s.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Q.__version!==F.version){at(Q,F,T);return}else F.isExternalTexture&&(Q.__webglTexture=F.sourceTexture?F.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+T)}function B(F,T){const Q=s.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Q.__version!==F.version){at(Q,F,T);return}i.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+T)}function Z(F,T){const Q=s.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&Q.__version!==F.version){ft(Q,F,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+T)}const mt={[_d]:r.REPEAT,[wa]:r.CLAMP_TO_EDGE,[vd]:r.MIRRORED_REPEAT},dt={[zn]:r.NEAREST,[gb]:r.NEAREST_MIPMAP_NEAREST,[Tc]:r.NEAREST_MIPMAP_LINEAR,[Vn]:r.LINEAR,[bh]:r.LINEAR_MIPMAP_NEAREST,[ks]:r.LINEAR_MIPMAP_LINEAR},z={[xb]:r.NEVER,[Eb]:r.ALWAYS,[yb]:r.LESS,[up]:r.LEQUAL,[Mb]:r.EQUAL,[fp]:r.GEQUAL,[Sb]:r.GREATER,[bb]:r.NOTEQUAL};function nt(F,T){if(T.type===Ki&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Vn||T.magFilter===bh||T.magFilter===Tc||T.magFilter===ks||T.minFilter===Vn||T.minFilter===bh||T.minFilter===Tc||T.minFilter===ks)&&ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(F,r.TEXTURE_WRAP_S,mt[T.wrapS]),r.texParameteri(F,r.TEXTURE_WRAP_T,mt[T.wrapT]),(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)&&r.texParameteri(F,r.TEXTURE_WRAP_R,mt[T.wrapR]),r.texParameteri(F,r.TEXTURE_MAG_FILTER,dt[T.magFilter]),r.texParameteri(F,r.TEXTURE_MIN_FILTER,dt[T.minFilter]),T.compareFunction&&(r.texParameteri(F,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(F,r.TEXTURE_COMPARE_FUNC,z[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===zn||T.minFilter!==Tc&&T.minFilter!==ks||T.type===Ki&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(F,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function gt(F,T){let Q=!1;F.__webglInit===void 0&&(F.__webglInit=!0,T.addEventListener("dispose",O));const _t=T.source;let Mt=x.get(_t);Mt===void 0&&(Mt={},x.set(_t,Mt));const ht=et(T);if(ht!==F.__cacheKey){Mt[ht]===void 0&&(Mt[ht]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,Q=!0),Mt[ht].usedTimes++;const Kt=Mt[F.__cacheKey];Kt!==void 0&&(Mt[F.__cacheKey].usedTimes--,Kt.usedTimes===0&&A(T)),F.__cacheKey=ht,F.__webglTexture=Mt[ht].texture}return Q}function Et(F,T,Q){return Math.floor(Math.floor(F/Q)/T)}function Nt(F,T,Q,_t){const ht=F.updateRanges;if(ht.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,Q,_t,T.data);else{ht.sort((bt,Tt)=>bt.start-Tt.start);let Kt=0;for(let bt=1;bt<ht.length;bt++){const Tt=ht[Kt],Ht=ht[bt],Ft=Tt.start+Tt.count,Dt=Et(Ht.start,T.width,4),de=Et(Tt.start,T.width,4);Ht.start<=Ft+1&&Dt===de&&Et(Ht.start+Ht.count-1,T.width,4)===Dt?Tt.count=Math.max(Tt.count,Ht.start+Ht.count-Tt.start):(++Kt,ht[Kt]=Ht)}ht.length=Kt+1;const Ct=r.getParameter(r.UNPACK_ROW_LENGTH),jt=r.getParameter(r.UNPACK_SKIP_PIXELS),ie=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let bt=0,Tt=ht.length;bt<Tt;bt++){const Ht=ht[bt],Ft=Math.floor(Ht.start/4),Dt=Math.ceil(Ht.count/4),de=Ft%T.width,K=Math.floor(Ft/T.width),Lt=Dt,At=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,de),r.pixelStorei(r.UNPACK_SKIP_ROWS,K),i.texSubImage2D(r.TEXTURE_2D,0,de,K,Lt,At,Q,_t,T.data)}F.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ct),r.pixelStorei(r.UNPACK_SKIP_PIXELS,jt),r.pixelStorei(r.UNPACK_SKIP_ROWS,ie)}}function at(F,T,Q){let _t=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(_t=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(_t=r.TEXTURE_3D);const Mt=gt(F,T),ht=T.source;i.bindTexture(_t,F.__webglTexture,r.TEXTURE0+Q);const Kt=s.get(ht);if(ht.version!==Kt.__version||Mt===!0){i.activeTexture(r.TEXTURE0+Q);const Ct=Ce.getPrimaries(Ce.workingColorSpace),jt=T.colorSpace===ds?null:Ce.getPrimaries(T.colorSpace),ie=T.colorSpace===ds||Ct===jt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let bt=E(T.image,!1,l.maxTextureSize);bt=Ie(T,bt);const Tt=c.convert(T.format,T.colorSpace),Ht=c.convert(T.type);let Ft=R(T.internalFormat,Tt,Ht,T.colorSpace,T.isVideoTexture);nt(_t,T);let Dt;const de=T.mipmaps,K=T.isVideoTexture!==!0,Lt=Kt.__version===void 0||Mt===!0,At=ht.dataReady,Bt=P(T,bt);if(T.isDepthTexture)Ft=w(T.format===Xs,T.type),Lt&&(K?i.texStorage2D(r.TEXTURE_2D,1,Ft,bt.width,bt.height):i.texImage2D(r.TEXTURE_2D,0,Ft,bt.width,bt.height,0,Tt,Ht,null));else if(T.isDataTexture)if(de.length>0){K&&Lt&&i.texStorage2D(r.TEXTURE_2D,Bt,Ft,de[0].width,de[0].height);for(let St=0,yt=de.length;St<yt;St++)Dt=de[St],K?At&&i.texSubImage2D(r.TEXTURE_2D,St,0,0,Dt.width,Dt.height,Tt,Ht,Dt.data):i.texImage2D(r.TEXTURE_2D,St,Ft,Dt.width,Dt.height,0,Tt,Ht,Dt.data);T.generateMipmaps=!1}else K?(Lt&&i.texStorage2D(r.TEXTURE_2D,Bt,Ft,bt.width,bt.height),At&&Nt(T,bt,Tt,Ht)):i.texImage2D(r.TEXTURE_2D,0,Ft,bt.width,bt.height,0,Tt,Ht,bt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){K&&Lt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,Ft,de[0].width,de[0].height,bt.depth);for(let St=0,yt=de.length;St<yt;St++)if(Dt=de[St],T.format!==Bi)if(Tt!==null)if(K){if(At)if(T.layerUpdates.size>0){const wt=W_(Dt.width,Dt.height,T.format,T.type);for(const se of T.layerUpdates){const Be=Dt.data.subarray(se*wt/Dt.data.BYTES_PER_ELEMENT,(se+1)*wt/Dt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,St,0,0,se,Dt.width,Dt.height,1,Tt,Be)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,St,0,0,0,Dt.width,Dt.height,bt.depth,Tt,Dt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,St,Ft,Dt.width,Dt.height,bt.depth,0,Dt.data,0,0);else ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else K?At&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,St,0,0,0,Dt.width,Dt.height,bt.depth,Tt,Ht,Dt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,St,Ft,Dt.width,Dt.height,bt.depth,0,Tt,Ht,Dt.data)}else{K&&Lt&&i.texStorage2D(r.TEXTURE_2D,Bt,Ft,de[0].width,de[0].height);for(let St=0,yt=de.length;St<yt;St++)Dt=de[St],T.format!==Bi?Tt!==null?K?At&&i.compressedTexSubImage2D(r.TEXTURE_2D,St,0,0,Dt.width,Dt.height,Tt,Dt.data):i.compressedTexImage2D(r.TEXTURE_2D,St,Ft,Dt.width,Dt.height,0,Dt.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):K?At&&i.texSubImage2D(r.TEXTURE_2D,St,0,0,Dt.width,Dt.height,Tt,Ht,Dt.data):i.texImage2D(r.TEXTURE_2D,St,Ft,Dt.width,Dt.height,0,Tt,Ht,Dt.data)}else if(T.isDataArrayTexture)if(K){if(Lt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,Ft,bt.width,bt.height,bt.depth),At)if(T.layerUpdates.size>0){const St=W_(bt.width,bt.height,T.format,T.type);for(const yt of T.layerUpdates){const wt=bt.data.subarray(yt*St/bt.data.BYTES_PER_ELEMENT,(yt+1)*St/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,yt,bt.width,bt.height,1,Tt,Ht,wt)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Tt,Ht,bt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ft,bt.width,bt.height,bt.depth,0,Tt,Ht,bt.data);else if(T.isData3DTexture)K?(Lt&&i.texStorage3D(r.TEXTURE_3D,Bt,Ft,bt.width,bt.height,bt.depth),At&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Tt,Ht,bt.data)):i.texImage3D(r.TEXTURE_3D,0,Ft,bt.width,bt.height,bt.depth,0,Tt,Ht,bt.data);else if(T.isFramebufferTexture){if(Lt)if(K)i.texStorage2D(r.TEXTURE_2D,Bt,Ft,bt.width,bt.height);else{let St=bt.width,yt=bt.height;for(let wt=0;wt<Bt;wt++)i.texImage2D(r.TEXTURE_2D,wt,Ft,St,yt,0,Tt,Ht,null),St>>=1,yt>>=1}}else if(de.length>0){if(K&&Lt){const St=Yt(de[0]);i.texStorage2D(r.TEXTURE_2D,Bt,Ft,St.width,St.height)}for(let St=0,yt=de.length;St<yt;St++)Dt=de[St],K?At&&i.texSubImage2D(r.TEXTURE_2D,St,0,0,Tt,Ht,Dt):i.texImage2D(r.TEXTURE_2D,St,Ft,Tt,Ht,Dt);T.generateMipmaps=!1}else if(K){if(Lt){const St=Yt(bt);i.texStorage2D(r.TEXTURE_2D,Bt,Ft,St.width,St.height)}At&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Tt,Ht,bt)}else i.texImage2D(r.TEXTURE_2D,0,Ft,Tt,Ht,bt);M(T)&&v(_t),Kt.__version=ht.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function ft(F,T,Q){if(T.image.length!==6)return;const _t=gt(F,T),Mt=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+Q);const ht=s.get(Mt);if(Mt.version!==ht.__version||_t===!0){i.activeTexture(r.TEXTURE0+Q);const Kt=Ce.getPrimaries(Ce.workingColorSpace),Ct=T.colorSpace===ds?null:Ce.getPrimaries(T.colorSpace),jt=T.colorSpace===ds||Kt===Ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);const ie=T.isCompressedTexture||T.image[0].isCompressedTexture,bt=T.image[0]&&T.image[0].isDataTexture,Tt=[];for(let yt=0;yt<6;yt++)!ie&&!bt?Tt[yt]=E(T.image[yt],!0,l.maxCubemapSize):Tt[yt]=bt?T.image[yt].image:T.image[yt],Tt[yt]=Ie(T,Tt[yt]);const Ht=Tt[0],Ft=c.convert(T.format,T.colorSpace),Dt=c.convert(T.type),de=R(T.internalFormat,Ft,Dt,T.colorSpace),K=T.isVideoTexture!==!0,Lt=ht.__version===void 0||_t===!0,At=Mt.dataReady;let Bt=P(T,Ht);nt(r.TEXTURE_CUBE_MAP,T);let St;if(ie){K&&Lt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,de,Ht.width,Ht.height);for(let yt=0;yt<6;yt++){St=Tt[yt].mipmaps;for(let wt=0;wt<St.length;wt++){const se=St[wt];T.format!==Bi?Ft!==null?K?At&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,wt,0,0,se.width,se.height,Ft,se.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,wt,de,se.width,se.height,0,se.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,wt,0,0,se.width,se.height,Ft,Dt,se.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,wt,de,se.width,se.height,0,Ft,Dt,se.data)}}}else{if(St=T.mipmaps,K&&Lt){St.length>0&&Bt++;const yt=Yt(Tt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,de,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(bt){K?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Tt[yt].width,Tt[yt].height,Ft,Dt,Tt[yt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,de,Tt[yt].width,Tt[yt].height,0,Ft,Dt,Tt[yt].data);for(let wt=0;wt<St.length;wt++){const Be=St[wt].image[yt].image;K?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,wt+1,0,0,Be.width,Be.height,Ft,Dt,Be.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,wt+1,de,Be.width,Be.height,0,Ft,Dt,Be.data)}}else{K?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Ft,Dt,Tt[yt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,de,Ft,Dt,Tt[yt]);for(let wt=0;wt<St.length;wt++){const se=St[wt];K?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,wt+1,0,0,Ft,Dt,se.image[yt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,wt+1,de,Ft,Dt,se.image[yt])}}}M(T)&&v(r.TEXTURE_CUBE_MAP),ht.__version=Mt.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function Rt(F,T,Q,_t,Mt,ht){const Kt=c.convert(Q.format,Q.colorSpace),Ct=c.convert(Q.type),jt=R(Q.internalFormat,Kt,Ct,Q.colorSpace),ie=s.get(T),bt=s.get(Q);if(bt.__renderTarget=T,!ie.__hasExternalTextures){const Tt=Math.max(1,T.width>>ht),Ht=Math.max(1,T.height>>ht);Mt===r.TEXTURE_3D||Mt===r.TEXTURE_2D_ARRAY?i.texImage3D(Mt,ht,jt,Tt,Ht,T.depth,0,Kt,Ct,null):i.texImage2D(Mt,ht,jt,Tt,Ht,0,Kt,Ct,null)}i.bindFramebuffer(r.FRAMEBUFFER,F),Ae(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_t,Mt,bt.__webglTexture,0,j(T)):(Mt===r.TEXTURE_2D||Mt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,_t,Mt,bt.__webglTexture,ht),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Gt(F,T,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,F),T.depthBuffer){const _t=T.depthTexture,Mt=_t&&_t.isDepthTexture?_t.type:null,ht=w(T.stencilBuffer,Mt),Kt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ae(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j(T),ht,T.width,T.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,j(T),ht,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ht,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Kt,r.RENDERBUFFER,F)}else{const _t=T.textures;for(let Mt=0;Mt<_t.length;Mt++){const ht=_t[Mt],Kt=c.convert(ht.format,ht.colorSpace),Ct=c.convert(ht.type),jt=R(ht.internalFormat,Kt,Ct,ht.colorSpace);Ae(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j(T),jt,T.width,T.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,j(T),jt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,jt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Pt(F,T,Q){const _t=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,F),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Mt=s.get(T.depthTexture);if(Mt.__renderTarget=T,(!Mt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),_t){if(Mt.__webglInit===void 0&&(Mt.__webglInit=!0,T.depthTexture.addEventListener("dispose",O)),Mt.__webglTexture===void 0){Mt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Mt.__webglTexture),nt(r.TEXTURE_CUBE_MAP,T.depthTexture);const ie=c.convert(T.depthTexture.format),bt=c.convert(T.depthTexture.type);let Tt;T.depthTexture.format===Ua?Tt=r.DEPTH_COMPONENT24:T.depthTexture.format===Xs&&(Tt=r.DEPTH24_STENCIL8);for(let Ht=0;Ht<6;Ht++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,Tt,T.width,T.height,0,ie,bt,null)}}else it(T.depthTexture,0);const ht=Mt.__webglTexture,Kt=j(T),Ct=_t?r.TEXTURE_CUBE_MAP_POSITIVE_X+Q:r.TEXTURE_2D,jt=T.depthTexture.format===Xs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ua)Ae(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,jt,Ct,ht,0,Kt):r.framebufferTexture2D(r.FRAMEBUFFER,jt,Ct,ht,0);else if(T.depthTexture.format===Xs)Ae(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,jt,Ct,ht,0,Kt):r.framebufferTexture2D(r.FRAMEBUFFER,jt,Ct,ht,0);else throw new Error("Unknown depthTexture format")}function _e(F){const T=s.get(F),Q=F.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==F.depthTexture){const _t=F.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),_t){const Mt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,_t.removeEventListener("dispose",Mt)};_t.addEventListener("dispose",Mt),T.__depthDisposeCallback=Mt}T.__boundDepthTexture=_t}if(F.depthTexture&&!T.__autoAllocateDepthBuffer)if(Q)for(let _t=0;_t<6;_t++)Pt(T.__webglFramebuffer[_t],F,_t);else{const _t=F.texture.mipmaps;_t&&_t.length>0?Pt(T.__webglFramebuffer[0],F,0):Pt(T.__webglFramebuffer,F,0)}else if(Q){T.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[_t]),T.__webglDepthbuffer[_t]===void 0)T.__webglDepthbuffer[_t]=r.createRenderbuffer(),Gt(T.__webglDepthbuffer[_t],F,!1);else{const Mt=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=T.__webglDepthbuffer[_t];r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,ht)}}else{const _t=F.texture.mipmaps;if(_t&&_t.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Gt(T.__webglDepthbuffer,F,!1);else{const Mt=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,ht)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ke(F,T,Q){const _t=s.get(F);T!==void 0&&Rt(_t.__webglFramebuffer,F,F.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&_e(F)}function ue(F){const T=F.texture,Q=s.get(F),_t=s.get(T);F.addEventListener("dispose",N);const Mt=F.textures,ht=F.isWebGLCubeRenderTarget===!0,Kt=Mt.length>1;if(Kt||(_t.__webglTexture===void 0&&(_t.__webglTexture=r.createTexture()),_t.__version=T.version,f.memory.textures++),ht){Q.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer[Ct]=[];for(let jt=0;jt<T.mipmaps.length;jt++)Q.__webglFramebuffer[Ct][jt]=r.createFramebuffer()}else Q.__webglFramebuffer[Ct]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ct=0;Ct<T.mipmaps.length;Ct++)Q.__webglFramebuffer[Ct]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(Kt)for(let Ct=0,jt=Mt.length;Ct<jt;Ct++){const ie=s.get(Mt[Ct]);ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture(),f.memory.textures++)}if(F.samples>0&&Ae(F)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ct=0;Ct<Mt.length;Ct++){const jt=Mt[Ct];Q.__webglColorRenderbuffer[Ct]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[Ct]);const ie=c.convert(jt.format,jt.colorSpace),bt=c.convert(jt.type),Tt=R(jt.internalFormat,ie,bt,jt.colorSpace,F.isXRRenderTarget===!0),Ht=j(F);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ht,Tt,F.width,F.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.RENDERBUFFER,Q.__webglColorRenderbuffer[Ct])}r.bindRenderbuffer(r.RENDERBUFFER,null),F.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),Gt(Q.__webglDepthRenderbuffer,F,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ht){i.bindTexture(r.TEXTURE_CUBE_MAP,_t.__webglTexture),nt(r.TEXTURE_CUBE_MAP,T);for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0)for(let jt=0;jt<T.mipmaps.length;jt++)Rt(Q.__webglFramebuffer[Ct][jt],F,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,jt);else Rt(Q.__webglFramebuffer[Ct],F,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);M(T)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Kt){for(let Ct=0,jt=Mt.length;Ct<jt;Ct++){const ie=Mt[Ct],bt=s.get(ie);let Tt=r.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Tt=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Tt,bt.__webglTexture),nt(Tt,ie),Rt(Q.__webglFramebuffer,F,ie,r.COLOR_ATTACHMENT0+Ct,Tt,0),M(ie)&&v(Tt)}i.unbindTexture()}else{let Ct=r.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ct=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ct,_t.__webglTexture),nt(Ct,T),T.mipmaps&&T.mipmaps.length>0)for(let jt=0;jt<T.mipmaps.length;jt++)Rt(Q.__webglFramebuffer[jt],F,T,r.COLOR_ATTACHMENT0,Ct,jt);else Rt(Q.__webglFramebuffer,F,T,r.COLOR_ATTACHMENT0,Ct,0);M(T)&&v(Ct),i.unbindTexture()}F.depthBuffer&&_e(F)}function re(F){const T=F.textures;for(let Q=0,_t=T.length;Q<_t;Q++){const Mt=T[Q];if(M(Mt)){const ht=C(F),Kt=s.get(Mt).__webglTexture;i.bindTexture(ht,Kt),v(ht),i.unbindTexture()}}}const ye=[],ne=[];function Xe(F){if(F.samples>0){if(Ae(F)===!1){const T=F.textures,Q=F.width,_t=F.height;let Mt=r.COLOR_BUFFER_BIT;const ht=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Kt=s.get(F),Ct=T.length>1;if(Ct)for(let ie=0;ie<T.length;ie++)i.bindFramebuffer(r.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Kt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer);const jt=F.texture.mipmaps;jt&&jt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let ie=0;ie<T.length;ie++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(Mt|=r.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(Mt|=r.STENCIL_BUFFER_BIT)),Ct){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Kt.__webglColorRenderbuffer[ie]);const bt=s.get(T[ie]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,bt,0)}r.blitFramebuffer(0,0,Q,_t,0,0,Q,_t,Mt,r.NEAREST),m===!0&&(ye.length=0,ne.length=0,ye.push(r.COLOR_ATTACHMENT0+ie),F.depthBuffer&&F.resolveDepthBuffer===!1&&(ye.push(ht),ne.push(ht),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ne)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ye))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ct)for(let ie=0;ie<T.length;ie++){i.bindFramebuffer(r.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,Kt.__webglColorRenderbuffer[ie]);const bt=s.get(T[ie]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Kt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.TEXTURE_2D,bt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&m){const T=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function j(F){return Math.min(l.maxSamples,F.samples)}function Ae(F){const T=s.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Re(F){const T=f.render.frame;g.get(F)!==T&&(g.set(F,T),F.update())}function Ie(F,T){const Q=F.colorSpace,_t=F.format,Mt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||Q!==Qr&&Q!==ds&&(Ce.getTransfer(Q)===ke?(_t!==Bi||Mt!==pi)&&ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",Q)),T}function Yt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(p.width=F.naturalWidth||F.width,p.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(p.width=F.displayWidth,p.height=F.displayHeight):(p.width=F.width,p.height=F.height),p}this.allocateTextureUnit=Y,this.resetTextureUnits=q,this.setTexture2D=it,this.setTexture2DArray=I,this.setTexture3D=B,this.setTextureCube=Z,this.rebindTextures=Ke,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function eR(r,t){function i(s,l=ds){let c;const f=Ce.getTransfer(l);if(s===pi)return r.UNSIGNED_BYTE;if(s===sp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===rp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Hv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Gv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Fv)return r.BYTE;if(s===Bv)return r.SHORT;if(s===rl)return r.UNSIGNED_SHORT;if(s===ap)return r.INT;if(s===ea)return r.UNSIGNED_INT;if(s===Ki)return r.FLOAT;if(s===Na)return r.HALF_FLOAT;if(s===Vv)return r.ALPHA;if(s===kv)return r.RGB;if(s===Bi)return r.RGBA;if(s===Ua)return r.DEPTH_COMPONENT;if(s===Xs)return r.DEPTH_STENCIL;if(s===Xv)return r.RED;if(s===op)return r.RED_INTEGER;if(s===Kr)return r.RG;if(s===lp)return r.RG_INTEGER;if(s===cp)return r.RGBA_INTEGER;if(s===Zc||s===Kc||s===Qc||s===Jc)if(f===ke)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Zc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Zc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Kc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Qc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Jc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===xd||s===yd||s===Md||s===Sd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===xd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===yd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Md)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Sd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===bd||s===Ed||s===Td||s===Ad||s===Rd||s===wd||s===Cd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===bd||s===Ed)return f===ke?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Td)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Ad)return c.COMPRESSED_R11_EAC;if(s===Rd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===wd)return c.COMPRESSED_RG11_EAC;if(s===Cd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Dd||s===Nd||s===Ud||s===Ld||s===Pd||s===Od||s===zd||s===Id||s===Fd||s===Bd||s===Hd||s===Gd||s===Vd||s===kd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Dd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Nd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ud)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ld)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Pd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Od)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===zd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Id)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Fd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Bd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Hd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Gd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Vd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===kd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Xd||s===jd||s===Wd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Xd)return f===ke?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===jd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Wd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===qd||s===Yd||s===Zd||s===Kd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===qd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Yd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Zd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Kd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ol?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const nR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class aR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new ix(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ia({vertexShader:nR,fragmentShader:iR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ri(new uu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sR extends qs{constructor(t,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,g=null,_=null,x=null,y=null,b=null;const E=typeof XRWebGLBinding<"u",M=new aR,v={},C=i.getContextAttributes();let R=null,w=null;const P=[],O=[],N=new le;let H=null;const A=new di;A.viewport=new cn;const D=new di;D.viewport=new cn;const G=[A,D],q=new d1;let Y=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let ft=P[at];return ft===void 0&&(ft=new jh,P[at]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(at){let ft=P[at];return ft===void 0&&(ft=new jh,P[at]=ft),ft.getGripSpace()},this.getHand=function(at){let ft=P[at];return ft===void 0&&(ft=new jh,P[at]=ft),ft.getHandSpace()};function it(at){const ft=O.indexOf(at.inputSource);if(ft===-1)return;const Rt=P[ft];Rt!==void 0&&(Rt.update(at.inputSource,at.frame,p||f),Rt.dispatchEvent({type:at.type,data:at.inputSource}))}function I(){l.removeEventListener("select",it),l.removeEventListener("selectstart",it),l.removeEventListener("selectend",it),l.removeEventListener("squeeze",it),l.removeEventListener("squeezestart",it),l.removeEventListener("squeezeend",it),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",B);for(let at=0;at<P.length;at++){const ft=O[at];ft!==null&&(O[at]=null,P[at].disconnect(ft))}Y=null,et=null,M.reset();for(const at in v)delete v[at];t.setRenderTarget(R),y=null,x=null,_=null,l=null,w=null,Nt.stop(),s.isPresenting=!1,t.setPixelRatio(H),t.setSize(N.width,N.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){c=at,s.isPresenting===!0&&ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){h=at,s.isPresenting===!0&&ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(at){p=at},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return _===null&&E&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(at){if(l=at,l!==null){if(R=t.getRenderTarget(),l.addEventListener("select",it),l.addEventListener("selectstart",it),l.addEventListener("selectend",it),l.addEventListener("squeeze",it),l.addEventListener("squeezestart",it),l.addEventListener("squeezeend",it),l.addEventListener("end",I),l.addEventListener("inputsourceschange",B),C.xrCompatible!==!0&&await i.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(N),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,Gt=null,Pt=null;C.depth&&(Pt=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Rt=C.stencil?Xs:Ua,Gt=C.stencil?ol:ea);const _e={colorFormat:i.RGBA8,depthFormat:Pt,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(_e),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),w=new $i(x.textureWidth,x.textureHeight,{format:Bi,type:pi,depthTexture:new cl(x.textureWidth,x.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Rt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Rt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),w=new $i(y.framebufferWidth,y.framebufferHeight,{format:Bi,type:pi,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Nt.setContext(l),Nt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function B(at){for(let ft=0;ft<at.removed.length;ft++){const Rt=at.removed[ft],Gt=O.indexOf(Rt);Gt>=0&&(O[Gt]=null,P[Gt].disconnect(Rt))}for(let ft=0;ft<at.added.length;ft++){const Rt=at.added[ft];let Gt=O.indexOf(Rt);if(Gt===-1){for(let _e=0;_e<P.length;_e++)if(_e>=O.length){O.push(Rt),Gt=_e;break}else if(O[_e]===null){O[_e]=Rt,Gt=_e;break}if(Gt===-1)break}const Pt=P[Gt];Pt&&Pt.connect(Rt)}}const Z=new V,mt=new V;function dt(at,ft,Rt){Z.setFromMatrixPosition(ft.matrixWorld),mt.setFromMatrixPosition(Rt.matrixWorld);const Gt=Z.distanceTo(mt),Pt=ft.projectionMatrix.elements,_e=Rt.projectionMatrix.elements,Ke=Pt[14]/(Pt[10]-1),ue=Pt[14]/(Pt[10]+1),re=(Pt[9]+1)/Pt[5],ye=(Pt[9]-1)/Pt[5],ne=(Pt[8]-1)/Pt[0],Xe=(_e[8]+1)/_e[0],j=Ke*ne,Ae=Ke*Xe,Re=Gt/(-ne+Xe),Ie=Re*-ne;if(ft.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(Ie),at.translateZ(Re),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Pt[10]===-1)at.projectionMatrix.copy(ft.projectionMatrix),at.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Yt=Ke+Re,F=ue+Re,T=j-Ie,Q=Ae+(Gt-Ie),_t=re*ue/F*Yt,Mt=ye*ue/F*Yt;at.projectionMatrix.makePerspective(T,Q,_t,Mt,Yt,F),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function z(at,ft){ft===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(ft.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(l===null)return;let ft=at.near,Rt=at.far;M.texture!==null&&(M.depthNear>0&&(ft=M.depthNear),M.depthFar>0&&(Rt=M.depthFar)),q.near=D.near=A.near=ft,q.far=D.far=A.far=Rt,(Y!==q.near||et!==q.far)&&(l.updateRenderState({depthNear:q.near,depthFar:q.far}),Y=q.near,et=q.far),q.layers.mask=at.layers.mask|6,A.layers.mask=q.layers.mask&3,D.layers.mask=q.layers.mask&5;const Gt=at.parent,Pt=q.cameras;z(q,Gt);for(let _e=0;_e<Pt.length;_e++)z(Pt[_e],Gt);Pt.length===2?dt(q,A,D):q.projectionMatrix.copy(A.projectionMatrix),nt(at,q,Gt)};function nt(at,ft,Rt){Rt===null?at.matrix.copy(ft.matrixWorld):(at.matrix.copy(Rt.matrixWorld),at.matrix.invert(),at.matrix.multiply(ft.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(ft.projectionMatrix),at.projectionMatrixInverse.copy(ft.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=Qd*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(at){m=at,x!==null&&(x.fixedFoveation=at),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=at)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(q)},this.getCameraTexture=function(at){return v[at]};let gt=null;function Et(at,ft){if(g=ft.getViewerPose(p||f),b=ft,g!==null){const Rt=g.views;y!==null&&(t.setRenderTargetFramebuffer(w,y.framebuffer),t.setRenderTarget(w));let Gt=!1;Rt.length!==q.cameras.length&&(q.cameras.length=0,Gt=!0);for(let ue=0;ue<Rt.length;ue++){const re=Rt[ue];let ye=null;if(y!==null)ye=y.getViewport(re);else{const Xe=_.getViewSubImage(x,re);ye=Xe.viewport,ue===0&&(t.setRenderTargetTextures(w,Xe.colorTexture,Xe.depthStencilTexture),t.setRenderTarget(w))}let ne=G[ue];ne===void 0&&(ne=new di,ne.layers.enable(ue),ne.viewport=new cn,G[ue]=ne),ne.matrix.fromArray(re.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(re.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(ye.x,ye.y,ye.width,ye.height),ue===0&&(q.matrix.copy(ne.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Gt===!0&&q.cameras.push(ne)}const Pt=l.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&E){_=s.getBinding();const ue=_.getDepthInformation(Rt[0]);ue&&ue.isValid&&ue.texture&&M.init(ue,l.renderState)}if(Pt&&Pt.includes("camera-access")&&E){t.state.unbindTexture(),_=s.getBinding();for(let ue=0;ue<Rt.length;ue++){const re=Rt[ue].camera;if(re){let ye=v[re];ye||(ye=new ix,v[re]=ye);const ne=_.getCameraImage(re);ye.sourceTexture=ne}}}}for(let Rt=0;Rt<P.length;Rt++){const Gt=O[Rt],Pt=P[Rt];Gt!==null&&Pt!==void 0&&Pt.update(Gt,ft,p||f)}gt&&gt(at,ft),ft.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ft}),b=null}const Nt=new sx;Nt.setAnimationLoop(Et),this.setAnimationLoop=function(at){gt=at},this.dispose=function(){}}}const Hs=new na,rR=new rn;function oR(r,t){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function s(M,v){v.color.getRGB(M.fogColor.value,Jv(r)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,C,R,w){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),_(M,v)):v.isMeshPhongMaterial?(c(M,v),g(M,v)):v.isMeshStandardMaterial?(c(M,v),x(M,v),v.isMeshPhysicalMaterial&&y(M,v,w)):v.isMeshMatcapMaterial?(c(M,v),b(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),E(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(f(M,v),v.isLineDashedMaterial&&h(M,v)):v.isPointsMaterial?m(M,v,C,R):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===ni&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===ni&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const C=t.get(v),R=C.envMap,w=C.envMapRotation;R&&(M.envMap.value=R,Hs.copy(w),Hs.x*=-1,Hs.y*=-1,Hs.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Hs.y*=-1,Hs.z*=-1),M.envMapRotation.value.setFromMatrix4(rR.makeRotationFromEuler(Hs)),M.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function f(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function h(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,C,R){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*C,M.scale.value=R*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function g(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function _(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function x(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function y(M,v,C){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===ni&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=C.texture,M.transmissionSamplerSize.value.set(C.width,C.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,v){v.matcap&&(M.matcap.value=v.matcap)}function E(M,v){const C=t.get(v).light;M.referencePosition.value.setFromMatrixPosition(C.matrixWorld),M.nearDistance.value=C.shadow.camera.near,M.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function lR(r,t,i,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,R){const w=R.program;s.uniformBlockBinding(C,w)}function p(C,R){let w=l[C.id];w===void 0&&(b(C),w=g(C),l[C.id]=w,C.addEventListener("dispose",M));const P=R.program;s.updateUBOMapping(C,P);const O=t.render.frame;c[C.id]!==O&&(x(C),c[C.id]=O)}function g(C){const R=_();C.__bindingPointIndex=R;const w=r.createBuffer(),P=C.__size,O=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,P,O),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,R,w),w}function _(){for(let C=0;C<h;C++)if(f.indexOf(C)===-1)return f.push(C),C;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(C){const R=l[C.id],w=C.uniforms,P=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,R);for(let O=0,N=w.length;O<N;O++){const H=Array.isArray(w[O])?w[O]:[w[O]];for(let A=0,D=H.length;A<D;A++){const G=H[A];if(y(G,O,A,P)===!0){const q=G.__offset,Y=Array.isArray(G.value)?G.value:[G.value];let et=0;for(let it=0;it<Y.length;it++){const I=Y[it],B=E(I);typeof I=="number"||typeof I=="boolean"?(G.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,q+et,G.__data)):I.isMatrix3?(G.__data[0]=I.elements[0],G.__data[1]=I.elements[1],G.__data[2]=I.elements[2],G.__data[3]=0,G.__data[4]=I.elements[3],G.__data[5]=I.elements[4],G.__data[6]=I.elements[5],G.__data[7]=0,G.__data[8]=I.elements[6],G.__data[9]=I.elements[7],G.__data[10]=I.elements[8],G.__data[11]=0):(I.toArray(G.__data,et),et+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,q,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(C,R,w,P){const O=C.value,N=R+"_"+w;if(P[N]===void 0)return typeof O=="number"||typeof O=="boolean"?P[N]=O:P[N]=O.clone(),!0;{const H=P[N];if(typeof O=="number"||typeof O=="boolean"){if(H!==O)return P[N]=O,!0}else if(H.equals(O)===!1)return H.copy(O),!0}return!1}function b(C){const R=C.uniforms;let w=0;const P=16;for(let N=0,H=R.length;N<H;N++){const A=Array.isArray(R[N])?R[N]:[R[N]];for(let D=0,G=A.length;D<G;D++){const q=A[D],Y=Array.isArray(q.value)?q.value:[q.value];for(let et=0,it=Y.length;et<it;et++){const I=Y[et],B=E(I),Z=w%P,mt=Z%B.boundary,dt=Z+mt;w+=mt,dt!==0&&P-dt<B.storage&&(w+=P-dt),q.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=w,w+=B.storage}}}const O=w%P;return O>0&&(w+=P-O),C.__size=w,C.__cache={},this}function E(C){const R={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(R.boundary=4,R.storage=4):C.isVector2?(R.boundary=8,R.storage=8):C.isVector3||C.isColor?(R.boundary=16,R.storage=12):C.isVector4?(R.boundary=16,R.storage=16):C.isMatrix3?(R.boundary=48,R.storage=48):C.isMatrix4?(R.boundary=64,R.storage=64):C.isTexture?ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ae("WebGLRenderer: Unsupported uniform value type.",C),R}function M(C){const R=C.target;R.removeEventListener("dispose",M);const w=f.indexOf(R.__bindingPointIndex);f.splice(w,1),r.deleteBuffer(l[R.id]),delete l[R.id],delete c[R.id]}function v(){for(const C in l)r.deleteBuffer(l[C]);f=[],l={},c={}}return{bind:m,update:p,dispose:v}}const cR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ji=null;function uR(){return ji===null&&(ji=new $b(cR,16,16,Kr,Na),ji.name="DFG_LUT",ji.minFilter=Vn,ji.magFilter=Vn,ji.wrapS=wa,ji.wrapT=wa,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}class fR{constructor(t={}){const{canvas:i=Tb(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:y=pi}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=f;const E=y,M=new Set([cp,lp,op]),v=new Set([pi,ea,rl,ol,sp,rp]),C=new Uint32Array(4),R=new Int32Array(4);let w=null,P=null;const O=[],N=[];let H=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let D=!1;this._outputColorSpace=Ai;let G=0,q=0,Y=null,et=-1,it=null;const I=new cn,B=new cn;let Z=null;const mt=new he(0);let dt=0,z=i.width,nt=i.height,gt=1,Et=null,Nt=null;const at=new cn(0,0,z,nt),ft=new cn(0,0,z,nt);let Rt=!1;const Gt=new mp;let Pt=!1,_e=!1;const Ke=new rn,ue=new V,re=new cn,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function Xe(){return Y===null?gt:1}let j=s;function Ae(L,J){return i.getContext(L,J)}try{const L={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ip}`),i.addEventListener("webglcontextlost",se,!1),i.addEventListener("webglcontextrestored",Be,!1),i.addEventListener("webglcontextcreationerror",we,!1),j===null){const J="webgl2";if(j=Ae(J,L),j===null)throw Ae(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw Le("WebGLRenderer: "+L.message),L}let Re,Ie,Yt,F,T,Q,_t,Mt,ht,Kt,Ct,jt,ie,bt,Tt,Ht,Ft,Dt,de,K,Lt,At,Bt,St;function yt(){Re=new uA(j),Re.init(),At=new eR(j,Re),Ie=new eA(j,Re,t,At),Yt=new $2(j,Re),Ie.reversedDepthBuffer&&x&&Yt.buffers.depth.setReversed(!0),F=new dA(j),T=new F2,Q=new tR(j,Re,Yt,T,Ie,At,F),_t=new iA(A),Mt=new cA(A),ht=new _1(j),Bt=new $T(j,ht),Kt=new fA(j,ht,F,Bt),Ct=new mA(j,Kt,ht,F),de=new pA(j,Ie,Q),Ht=new nA(T),jt=new I2(A,_t,Mt,Re,Ie,Bt,Ht),ie=new oR(A,T),bt=new H2,Tt=new W2(Re),Dt=new JT(A,_t,Mt,Yt,Ct,b,m),Ft=new Q2(A,Ct,Ie),St=new lR(j,F,Ie,Yt),K=new tA(j,Re,F),Lt=new hA(j,Re,F),F.programs=jt.programs,A.capabilities=Ie,A.extensions=Re,A.properties=T,A.renderLists=bt,A.shadowMap=Ft,A.state=Yt,A.info=F}yt(),E!==pi&&(H=new _A(E,i.width,i.height,l,c));const wt=new sR(A,j);this.xr=wt,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const L=Re.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Re.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(L){L!==void 0&&(gt=L,this.setSize(z,nt,!1))},this.getSize=function(L){return L.set(z,nt)},this.setSize=function(L,J,ct=!0){if(wt.isPresenting){ae("WebGLRenderer: Can't change size while VR device is presenting.");return}z=L,nt=J,i.width=Math.floor(L*gt),i.height=Math.floor(J*gt),ct===!0&&(i.style.width=L+"px",i.style.height=J+"px"),H!==null&&H.setSize(i.width,i.height),this.setViewport(0,0,L,J)},this.getDrawingBufferSize=function(L){return L.set(z*gt,nt*gt).floor()},this.setDrawingBufferSize=function(L,J,ct){z=L,nt=J,gt=ct,i.width=Math.floor(L*ct),i.height=Math.floor(J*ct),this.setViewport(0,0,L,J)},this.setEffects=function(L){if(E===pi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let J=0;J<L.length;J++)if(L[J].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}H.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(I)},this.getViewport=function(L){return L.copy(at)},this.setViewport=function(L,J,ct,ot){L.isVector4?at.set(L.x,L.y,L.z,L.w):at.set(L,J,ct,ot),Yt.viewport(I.copy(at).multiplyScalar(gt).round())},this.getScissor=function(L){return L.copy(ft)},this.setScissor=function(L,J,ct,ot){L.isVector4?ft.set(L.x,L.y,L.z,L.w):ft.set(L,J,ct,ot),Yt.scissor(B.copy(ft).multiplyScalar(gt).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(L){Yt.setScissorTest(Rt=L)},this.setOpaqueSort=function(L){Et=L},this.setTransparentSort=function(L){Nt=L},this.getClearColor=function(L){return L.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(L=!0,J=!0,ct=!0){let ot=0;if(L){let tt=!1;if(Y!==null){const Ut=Y.texture.format;tt=M.has(Ut)}if(tt){const Ut=Y.texture.type,Vt=v.has(Ut),Ot=Dt.getClearColor(),kt=Dt.getClearAlpha(),Wt=Ot.r,$t=Ot.g,qt=Ot.b;Vt?(C[0]=Wt,C[1]=$t,C[2]=qt,C[3]=kt,j.clearBufferuiv(j.COLOR,0,C)):(R[0]=Wt,R[1]=$t,R[2]=qt,R[3]=kt,j.clearBufferiv(j.COLOR,0,R))}else ot|=j.COLOR_BUFFER_BIT}J&&(ot|=j.DEPTH_BUFFER_BIT),ct&&(ot|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",se,!1),i.removeEventListener("webglcontextrestored",Be,!1),i.removeEventListener("webglcontextcreationerror",we,!1),Dt.dispose(),bt.dispose(),Tt.dispose(),T.dispose(),_t.dispose(),Mt.dispose(),Ct.dispose(),Bt.dispose(),St.dispose(),jt.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",Zs),wt.removeEventListener("sessionend",io),Hi.stop()};function se(L){L.preventDefault(),M_("WebGLRenderer: Context Lost."),D=!0}function Be(){M_("WebGLRenderer: Context Restored."),D=!1;const L=F.autoReset,J=Ft.enabled,ct=Ft.autoUpdate,ot=Ft.needsUpdate,tt=Ft.type;yt(),F.autoReset=L,Ft.enabled=J,Ft.autoUpdate=ct,Ft.needsUpdate=ot,Ft.type=tt}function we(L){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Fn(L){const J=L.target;J.removeEventListener("dispose",Fn),wi(J)}function wi(L){pl(L),T.remove(L)}function pl(L){const J=T.get(L).programs;J!==void 0&&(J.forEach(function(ct){jt.releaseProgram(ct)}),L.isShaderMaterial&&jt.releaseShaderCache(L))}this.renderBufferDirect=function(L,J,ct,ot,tt,Ut){J===null&&(J=ye);const Vt=tt.isMesh&&tt.matrixWorld.determinant()<0,Ot=_s(L,J,ct,ot,tt);Yt.setMaterial(ot,Vt);let kt=ct.index,Wt=1;if(ot.wireframe===!0){if(kt=Kt.getWireframeAttribute(ct),kt===void 0)return;Wt=2}const $t=ct.drawRange,qt=ct.attributes.position;let te=$t.start*Wt,Pe=($t.start+$t.count)*Wt;Ut!==null&&(te=Math.max(te,Ut.start*Wt),Pe=Math.min(Pe,(Ut.start+Ut.count)*Wt)),kt!==null?(te=Math.max(te,0),Pe=Math.min(Pe,kt.count)):qt!=null&&(te=Math.max(te,0),Pe=Math.min(Pe,qt.count));const nn=Pe-te;if(nn<0||nn===1/0)return;Bt.setup(tt,ot,Ot,ct,kt);let Je,Fe=K;if(kt!==null&&(Je=ht.get(kt),Fe=Lt,Fe.setIndex(Je)),tt.isMesh)ot.wireframe===!0?(Yt.setLineWidth(ot.wireframeLinewidth*Xe()),Fe.setMode(j.LINES)):Fe.setMode(j.TRIANGLES);else if(tt.isLine){let Qt=ot.linewidth;Qt===void 0&&(Qt=1),Yt.setLineWidth(Qt*Xe()),tt.isLineSegments?Fe.setMode(j.LINES):tt.isLineLoop?Fe.setMode(j.LINE_LOOP):Fe.setMode(j.LINE_STRIP)}else tt.isPoints?Fe.setMode(j.POINTS):tt.isSprite&&Fe.setMode(j.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)ll("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Fe.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(Re.get("WEBGL_multi_draw"))Fe.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const Qt=tt._multiDrawStarts,Oe=tt._multiDrawCounts,oe=tt._multiDrawCount,Rn=kt?ht.get(kt).bytesPerElement:1,aa=T.get(ot).currentProgram.getUniforms();for(let wn=0;wn<oe;wn++)aa.setValue(j,"_gl_DrawID",wn),Fe.render(Qt[wn]/Rn,Oe[wn])}else if(tt.isInstancedMesh)Fe.renderInstances(te,nn,tt.count);else if(ct.isInstancedBufferGeometry){const Qt=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Oe=Math.min(ct.instanceCount,Qt);Fe.renderInstances(te,nn,Oe)}else Fe.render(te,nn)};function eo(L,J,ct){L.transparent===!0&&L.side===Yi&&L.forceSinglePass===!1?(L.side=ni,L.needsUpdate=!0,Qs(L,J,ct),L.side=ms,L.needsUpdate=!0,Qs(L,J,ct),L.side=Yi):Qs(L,J,ct)}this.compile=function(L,J,ct=null){ct===null&&(ct=L),P=Tt.get(ct),P.init(J),N.push(P),ct.traverseVisible(function(tt){tt.isLight&&tt.layers.test(J.layers)&&(P.pushLight(tt),tt.castShadow&&P.pushShadow(tt))}),L!==ct&&L.traverseVisible(function(tt){tt.isLight&&tt.layers.test(J.layers)&&(P.pushLight(tt),tt.castShadow&&P.pushShadow(tt))}),P.setupLights();const ot=new Set;return L.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const Ut=tt.material;if(Ut)if(Array.isArray(Ut))for(let Vt=0;Vt<Ut.length;Vt++){const Ot=Ut[Vt];eo(Ot,ct,tt),ot.add(Ot)}else eo(Ut,ct,tt),ot.add(Ut)}),P=N.pop(),ot},this.compileAsync=function(L,J,ct=null){const ot=this.compile(L,J,ct);return new Promise(tt=>{function Ut(){if(ot.forEach(function(Vt){T.get(Vt).currentProgram.isReady()&&ot.delete(Vt)}),ot.size===0){tt(L);return}setTimeout(Ut,10)}Re.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let Ys=null;function no(L){Ys&&Ys(L)}function Zs(){Hi.stop()}function io(){Hi.start()}const Hi=new sx;Hi.setAnimationLoop(no),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(L){Ys=L,wt.setAnimationLoop(L),L===null?Hi.stop():Hi.start()},wt.addEventListener("sessionstart",Zs),wt.addEventListener("sessionend",io),this.render=function(L,J){if(J!==void 0&&J.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const ct=wt.enabled===!0&&wt.isPresenting===!0,ot=H!==null&&(Y===null||ct)&&H.begin(A,Y);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(H===null||H.isCompositing()===!1)&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(J),J=wt.getCamera()),L.isScene===!0&&L.onBeforeRender(A,L,J,Y),P=Tt.get(L,N.length),P.init(J),N.push(P),Ke.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Gt.setFromProjectionMatrix(Ke,Qi,J.reversedDepth),_e=this.localClippingEnabled,Pt=Ht.init(this.clippingPlanes,_e),w=bt.get(L,O.length),w.init(),O.push(w),wt.enabled===!0&&wt.isPresenting===!0){const Vt=A.xr.getDepthSensingMesh();Vt!==null&&mi(Vt,J,-1/0,A.sortObjects)}mi(L,J,0,A.sortObjects),w.finish(),A.sortObjects===!0&&w.sort(Et,Nt),ne=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,ne&&Dt.addToRenderList(w,L),this.info.render.frame++,Pt===!0&&Ht.beginShadows();const tt=P.state.shadowsArray;if(Ft.render(tt,L,J),Pt===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ot&&H.hasRenderPass())===!1){const Vt=w.opaque,Ot=w.transmissive;if(P.setupLights(),J.isArrayCamera){const kt=J.cameras;if(Ot.length>0)for(let Wt=0,$t=kt.length;Wt<$t;Wt++){const qt=kt[Wt];An(Vt,Ot,L,qt)}ne&&Dt.render(L);for(let Wt=0,$t=kt.length;Wt<$t;Wt++){const qt=kt[Wt];dn(w,L,qt,qt.viewport)}}else Ot.length>0&&An(Vt,Ot,L,J),ne&&Dt.render(L),dn(w,L,J)}Y!==null&&q===0&&(Q.updateMultisampleRenderTarget(Y),Q.updateRenderTargetMipmap(Y)),ot&&H.end(A),L.isScene===!0&&L.onAfterRender(A,L,J),Bt.resetDefaultState(),et=-1,it=null,N.pop(),N.length>0?(P=N[N.length-1],Pt===!0&&Ht.setGlobalState(A.clippingPlanes,P.state.camera)):P=null,O.pop(),O.length>0?w=O[O.length-1]:w=null};function mi(L,J,ct,ot){if(L.visible===!1)return;if(L.layers.test(J.layers)){if(L.isGroup)ct=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(J);else if(L.isLight)P.pushLight(L),L.castShadow&&P.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Gt.intersectsSprite(L)){ot&&re.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Ke);const Vt=Ct.update(L),Ot=L.material;Ot.visible&&w.push(L,Vt,Ot,ct,re.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Gt.intersectsObject(L))){const Vt=Ct.update(L),Ot=L.material;if(ot&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),re.copy(L.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),re.copy(Vt.boundingSphere.center)),re.applyMatrix4(L.matrixWorld).applyMatrix4(Ke)),Array.isArray(Ot)){const kt=Vt.groups;for(let Wt=0,$t=kt.length;Wt<$t;Wt++){const qt=kt[Wt],te=Ot[qt.materialIndex];te&&te.visible&&w.push(L,Vt,te,ct,re.z,qt)}}else Ot.visible&&w.push(L,Vt,Ot,ct,re.z,null)}}const Ut=L.children;for(let Vt=0,Ot=Ut.length;Vt<Ot;Vt++)mi(Ut[Vt],J,ct,ot)}function dn(L,J,ct,ot){const{opaque:tt,transmissive:Ut,transparent:Vt}=L;P.setupLightsView(ct),Pt===!0&&Ht.setGlobalState(A.clippingPlanes,ct),ot&&Yt.viewport(I.copy(ot)),tt.length>0&&Ci(tt,J,ct),Ut.length>0&&Ci(Ut,J,ct),Vt.length>0&&Ci(Vt,J,ct),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function An(L,J,ct,ot){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ot.id]===void 0){const te=Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ot.id]=new $i(1,1,{generateMipmaps:!0,type:te?Na:pi,minFilter:ks,samples:Ie.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace})}const Ut=P.state.transmissionRenderTarget[ot.id],Vt=ot.viewport||I;Ut.setSize(Vt.z*A.transmissionResolutionScale,Vt.w*A.transmissionResolutionScale);const Ot=A.getRenderTarget(),kt=A.getActiveCubeFace(),Wt=A.getActiveMipmapLevel();A.setRenderTarget(Ut),A.getClearColor(mt),dt=A.getClearAlpha(),dt<1&&A.setClearColor(16777215,.5),A.clear(),ne&&Dt.render(ct);const $t=A.toneMapping;A.toneMapping=Ji;const qt=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),P.setupLightsView(ot),Pt===!0&&Ht.setGlobalState(A.clippingPlanes,ot),Ci(L,ct,ot),Q.updateMultisampleRenderTarget(Ut),Q.updateRenderTargetMipmap(Ut),Re.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let Pe=0,nn=J.length;Pe<nn;Pe++){const Je=J[Pe],{object:Fe,geometry:Qt,material:Oe,group:oe}=Je;if(Oe.side===Yi&&Fe.layers.test(ot.layers)){const Rn=Oe.side;Oe.side=ni,Oe.needsUpdate=!0,Ks(Fe,ct,ot,Qt,Oe,oe),Oe.side=Rn,Oe.needsUpdate=!0,te=!0}}te===!0&&(Q.updateMultisampleRenderTarget(Ut),Q.updateRenderTargetMipmap(Ut))}A.setRenderTarget(Ot,kt,Wt),A.setClearColor(mt,dt),qt!==void 0&&(ot.viewport=qt),A.toneMapping=$t}function Ci(L,J,ct){const ot=J.isScene===!0?J.overrideMaterial:null;for(let tt=0,Ut=L.length;tt<Ut;tt++){const Vt=L[tt],{object:Ot,geometry:kt,group:Wt}=Vt;let $t=Vt.material;$t.allowOverride===!0&&ot!==null&&($t=ot),Ot.layers.test(ct.layers)&&Ks(Ot,J,ct,kt,$t,Wt)}}function Ks(L,J,ct,ot,tt,Ut){L.onBeforeRender(A,J,ct,ot,tt,Ut),L.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),tt.onBeforeRender(A,J,ct,ot,L,Ut),tt.transparent===!0&&tt.side===Yi&&tt.forceSinglePass===!1?(tt.side=ni,tt.needsUpdate=!0,A.renderBufferDirect(ct,J,ot,tt,L,Ut),tt.side=ms,tt.needsUpdate=!0,A.renderBufferDirect(ct,J,ot,tt,L,Ut),tt.side=Yi):A.renderBufferDirect(ct,J,ot,tt,L,Ut),L.onAfterRender(A,J,ct,ot,tt,Ut)}function Qs(L,J,ct){J.isScene!==!0&&(J=ye);const ot=T.get(L),tt=P.state.lights,Ut=P.state.shadowsArray,Vt=tt.state.version,Ot=jt.getParameters(L,tt.state,Ut,J,ct),kt=jt.getProgramCacheKey(Ot);let Wt=ot.programs;ot.environment=L.isMeshStandardMaterial?J.environment:null,ot.fog=J.fog,ot.envMap=(L.isMeshStandardMaterial?Mt:_t).get(L.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&L.envMap===null?J.environmentRotation:L.envMapRotation,Wt===void 0&&(L.addEventListener("dispose",Fn),Wt=new Map,ot.programs=Wt);let $t=Wt.get(kt);if($t!==void 0){if(ot.currentProgram===$t&&ot.lightsStateVersion===Vt)return ao(L,Ot),$t}else Ot.uniforms=jt.getUniforms(L),L.onBeforeCompile(Ot,A),$t=jt.acquireProgram(Ot,kt),Wt.set(kt,$t),ot.uniforms=Ot.uniforms;const qt=ot.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(qt.clippingPlanes=Ht.uniform),ao(L,Ot),ot.needsLights=Pa(L),ot.lightsStateVersion=Vt,ot.needsLights&&(qt.ambientLightColor.value=tt.state.ambient,qt.lightProbe.value=tt.state.probe,qt.directionalLights.value=tt.state.directional,qt.directionalLightShadows.value=tt.state.directionalShadow,qt.spotLights.value=tt.state.spot,qt.spotLightShadows.value=tt.state.spotShadow,qt.rectAreaLights.value=tt.state.rectArea,qt.ltc_1.value=tt.state.rectAreaLTC1,qt.ltc_2.value=tt.state.rectAreaLTC2,qt.pointLights.value=tt.state.point,qt.pointLightShadows.value=tt.state.pointShadow,qt.hemisphereLights.value=tt.state.hemi,qt.directionalShadowMap.value=tt.state.directionalShadowMap,qt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,qt.spotShadowMap.value=tt.state.spotShadowMap,qt.spotLightMatrix.value=tt.state.spotLightMatrix,qt.spotLightMap.value=tt.state.spotLightMap,qt.pointShadowMap.value=tt.state.pointShadowMap,qt.pointShadowMatrix.value=tt.state.pointShadowMatrix),ot.currentProgram=$t,ot.uniformsList=null,$t}function ml(L){if(L.uniformsList===null){const J=L.currentProgram.getUniforms();L.uniformsList=tu.seqWithValue(J.seq,L.uniforms)}return L.uniformsList}function ao(L,J){const ct=T.get(L);ct.outputColorSpace=J.outputColorSpace,ct.batching=J.batching,ct.batchingColor=J.batchingColor,ct.instancing=J.instancing,ct.instancingColor=J.instancingColor,ct.instancingMorph=J.instancingMorph,ct.skinning=J.skinning,ct.morphTargets=J.morphTargets,ct.morphNormals=J.morphNormals,ct.morphColors=J.morphColors,ct.morphTargetsCount=J.morphTargetsCount,ct.numClippingPlanes=J.numClippingPlanes,ct.numIntersection=J.numClipIntersection,ct.vertexAlphas=J.vertexAlphas,ct.vertexTangents=J.vertexTangents,ct.toneMapping=J.toneMapping}function _s(L,J,ct,ot,tt){J.isScene!==!0&&(J=ye),Q.resetTextureUnits();const Ut=J.fog,Vt=ot.isMeshStandardMaterial?J.environment:null,Ot=Y===null?A.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Qr,kt=(ot.isMeshStandardMaterial?Mt:_t).get(ot.envMap||Vt),Wt=ot.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,$t=!!ct.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),qt=!!ct.morphAttributes.position,te=!!ct.morphAttributes.normal,Pe=!!ct.morphAttributes.color;let nn=Ji;ot.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(nn=A.toneMapping);const Je=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,Fe=Je!==void 0?Je.length:0,Qt=T.get(ot),Oe=P.state.lights;if(Pt===!0&&(_e===!0||L!==it)){const Dn=L===it&&ot.id===et;Ht.setState(ot,L,Dn)}let oe=!1;ot.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Oe.state.version||Qt.outputColorSpace!==Ot||tt.isBatchedMesh&&Qt.batching===!1||!tt.isBatchedMesh&&Qt.batching===!0||tt.isBatchedMesh&&Qt.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&Qt.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&Qt.instancing===!1||!tt.isInstancedMesh&&Qt.instancing===!0||tt.isSkinnedMesh&&Qt.skinning===!1||!tt.isSkinnedMesh&&Qt.skinning===!0||tt.isInstancedMesh&&Qt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Qt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Qt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Qt.instancingMorph===!1&&tt.morphTexture!==null||Qt.envMap!==kt||ot.fog===!0&&Qt.fog!==Ut||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Ht.numPlanes||Qt.numIntersection!==Ht.numIntersection)||Qt.vertexAlphas!==Wt||Qt.vertexTangents!==$t||Qt.morphTargets!==qt||Qt.morphNormals!==te||Qt.morphColors!==Pe||Qt.toneMapping!==nn||Qt.morphTargetsCount!==Fe)&&(oe=!0):(oe=!0,Qt.__version=ot.version);let Rn=Qt.currentProgram;oe===!0&&(Rn=Qs(ot,J,tt));let aa=!1,wn=!1,gi=!1;const He=Rn.getUniforms(),Cn=Qt.uniforms;if(Yt.useProgram(Rn.program)&&(aa=!0,wn=!0,gi=!0),ot.id!==et&&(et=ot.id,wn=!0),aa||it!==L){Yt.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),He.setValue(j,"projectionMatrix",L.projectionMatrix),He.setValue(j,"viewMatrix",L.matrixWorldInverse);const Nn=He.map.cameraPosition;Nn!==void 0&&Nn.setValue(j,ue.setFromMatrixPosition(L.matrixWorld)),Ie.logarithmicDepthBuffer&&He.setValue(j,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&He.setValue(j,"isOrthographic",L.isOrthographicCamera===!0),it!==L&&(it=L,wn=!0,gi=!0)}if(Qt.needsLights&&(Oe.state.directionalShadowMap.length>0&&He.setValue(j,"directionalShadowMap",Oe.state.directionalShadowMap,Q),Oe.state.spotShadowMap.length>0&&He.setValue(j,"spotShadowMap",Oe.state.spotShadowMap,Q),Oe.state.pointShadowMap.length>0&&He.setValue(j,"pointShadowMap",Oe.state.pointShadowMap,Q)),tt.isSkinnedMesh){He.setOptional(j,tt,"bindMatrix"),He.setOptional(j,tt,"bindMatrixInverse");const Dn=tt.skeleton;Dn&&(Dn.boneTexture===null&&Dn.computeBoneTexture(),He.setValue(j,"boneTexture",Dn.boneTexture,Q))}tt.isBatchedMesh&&(He.setOptional(j,tt,"batchingTexture"),He.setValue(j,"batchingTexture",tt._matricesTexture,Q),He.setOptional(j,tt,"batchingIdTexture"),He.setValue(j,"batchingIdTexture",tt._indirectTexture,Q),He.setOptional(j,tt,"batchingColorTexture"),tt._colorsTexture!==null&&He.setValue(j,"batchingColorTexture",tt._colorsTexture,Q));const xn=ct.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&de.update(tt,ct,Rn),(wn||Qt.receiveShadow!==tt.receiveShadow)&&(Qt.receiveShadow=tt.receiveShadow,He.setValue(j,"receiveShadow",tt.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Cn.envMap.value=kt,Cn.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&J.environment!==null&&(Cn.envMapIntensity.value=J.environmentIntensity),Cn.dfgLUT!==void 0&&(Cn.dfgLUT.value=uR()),wn&&(He.setValue(j,"toneMappingExposure",A.toneMappingExposure),Qt.needsLights&&so(Cn,gi),Ut&&ot.fog===!0&&ie.refreshFogUniforms(Cn,Ut),ie.refreshMaterialUniforms(Cn,ot,gt,nt,P.state.transmissionRenderTarget[L.id]),tu.upload(j,ml(Qt),Cn,Q)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(tu.upload(j,ml(Qt),Cn,Q),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&He.setValue(j,"center",tt.center),He.setValue(j,"modelViewMatrix",tt.modelViewMatrix),He.setValue(j,"normalMatrix",tt.normalMatrix),He.setValue(j,"modelMatrix",tt.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const Dn=ot.uniformsGroups;for(let Nn=0,Js=Dn.length;Nn<Js;Nn++){const Di=Dn[Nn];St.update(Di,Rn),St.bind(Di,Rn)}}return Rn}function so(L,J){L.ambientLightColor.needsUpdate=J,L.lightProbe.needsUpdate=J,L.directionalLights.needsUpdate=J,L.directionalLightShadows.needsUpdate=J,L.pointLights.needsUpdate=J,L.pointLightShadows.needsUpdate=J,L.spotLights.needsUpdate=J,L.spotLightShadows.needsUpdate=J,L.rectAreaLights.needsUpdate=J,L.hemisphereLights.needsUpdate=J}function Pa(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(L,J,ct){const ot=T.get(L);ot.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),T.get(L.texture).__webglTexture=J,T.get(L.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:ct,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,J){const ct=T.get(L);ct.__webglFramebuffer=J,ct.__useDefaultFramebuffer=J===void 0};const Oa=j.createFramebuffer();this.setRenderTarget=function(L,J=0,ct=0){Y=L,G=J,q=ct;let ot=null,tt=!1,Ut=!1;if(L){const Ot=T.get(L);if(Ot.__useDefaultFramebuffer!==void 0){Yt.bindFramebuffer(j.FRAMEBUFFER,Ot.__webglFramebuffer),I.copy(L.viewport),B.copy(L.scissor),Z=L.scissorTest,Yt.viewport(I),Yt.scissor(B),Yt.setScissorTest(Z),et=-1;return}else if(Ot.__webglFramebuffer===void 0)Q.setupRenderTarget(L);else if(Ot.__hasExternalTextures)Q.rebindTextures(L,T.get(L.texture).__webglTexture,T.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const $t=L.depthTexture;if(Ot.__boundDepthTexture!==$t){if($t!==null&&T.has($t)&&(L.width!==$t.image.width||L.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(L)}}const kt=L.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Ut=!0);const Wt=T.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Wt[J])?ot=Wt[J][ct]:ot=Wt[J],tt=!0):L.samples>0&&Q.useMultisampledRTT(L)===!1?ot=T.get(L).__webglMultisampledFramebuffer:Array.isArray(Wt)?ot=Wt[ct]:ot=Wt,I.copy(L.viewport),B.copy(L.scissor),Z=L.scissorTest}else I.copy(at).multiplyScalar(gt).floor(),B.copy(ft).multiplyScalar(gt).floor(),Z=Rt;if(ct!==0&&(ot=Oa),Yt.bindFramebuffer(j.FRAMEBUFFER,ot)&&Yt.drawBuffers(L,ot),Yt.viewport(I),Yt.scissor(B),Yt.setScissorTest(Z),tt){const Ot=T.get(L.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ot.__webglTexture,ct)}else if(Ut){const Ot=J;for(let kt=0;kt<L.textures.length;kt++){const Wt=T.get(L.textures[kt]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+kt,Wt.__webglTexture,ct,Ot)}}else if(L!==null&&ct!==0){const Ot=T.get(L.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ot.__webglTexture,ct)}et=-1},this.readRenderTargetPixels=function(L,J,ct,ot,tt,Ut,Vt,Ot=0){if(!(L&&L.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=T.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Vt!==void 0&&(kt=kt[Vt]),kt){Yt.bindFramebuffer(j.FRAMEBUFFER,kt);try{const Wt=L.textures[Ot],$t=Wt.format,qt=Wt.type;if(!Ie.textureFormatReadable($t)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(qt)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=L.width-ot&&ct>=0&&ct<=L.height-tt&&(L.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ot),j.readPixels(J,ct,ot,tt,At.convert($t),At.convert(qt),Ut))}finally{const Wt=Y!==null?T.get(Y).__webglFramebuffer:null;Yt.bindFramebuffer(j.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(L,J,ct,ot,tt,Ut,Vt,Ot=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=T.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Vt!==void 0&&(kt=kt[Vt]),kt)if(J>=0&&J<=L.width-ot&&ct>=0&&ct<=L.height-tt){Yt.bindFramebuffer(j.FRAMEBUFFER,kt);const Wt=L.textures[Ot],$t=Wt.format,qt=Wt.type;if(!Ie.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const te=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,te),j.bufferData(j.PIXEL_PACK_BUFFER,Ut.byteLength,j.STREAM_READ),L.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ot),j.readPixels(J,ct,ot,tt,At.convert($t),At.convert(qt),0);const Pe=Y!==null?T.get(Y).__webglFramebuffer:null;Yt.bindFramebuffer(j.FRAMEBUFFER,Pe);const nn=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await Ab(j,nn,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,te),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Ut),j.deleteBuffer(te),j.deleteSync(nn),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,J=null,ct=0){const ot=Math.pow(2,-ct),tt=Math.floor(L.image.width*ot),Ut=Math.floor(L.image.height*ot),Vt=J!==null?J.x:0,Ot=J!==null?J.y:0;Q.setTexture2D(L,0),j.copyTexSubImage2D(j.TEXTURE_2D,ct,0,0,Vt,Ot,tt,Ut),Yt.unbindTexture()};const vs=j.createFramebuffer(),za=j.createFramebuffer();this.copyTextureToTexture=function(L,J,ct=null,ot=null,tt=0,Ut=null){Ut===null&&(tt!==0?(ll("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ut=tt,tt=0):Ut=0);let Vt,Ot,kt,Wt,$t,qt,te,Pe,nn;const Je=L.isCompressedTexture?L.mipmaps[Ut]:L.image;if(ct!==null)Vt=ct.max.x-ct.min.x,Ot=ct.max.y-ct.min.y,kt=ct.isBox3?ct.max.z-ct.min.z:1,Wt=ct.min.x,$t=ct.min.y,qt=ct.isBox3?ct.min.z:0;else{const xn=Math.pow(2,-tt);Vt=Math.floor(Je.width*xn),Ot=Math.floor(Je.height*xn),L.isDataArrayTexture?kt=Je.depth:L.isData3DTexture?kt=Math.floor(Je.depth*xn):kt=1,Wt=0,$t=0,qt=0}ot!==null?(te=ot.x,Pe=ot.y,nn=ot.z):(te=0,Pe=0,nn=0);const Fe=At.convert(J.format),Qt=At.convert(J.type);let Oe;J.isData3DTexture?(Q.setTexture3D(J,0),Oe=j.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(Q.setTexture2DArray(J,0),Oe=j.TEXTURE_2D_ARRAY):(Q.setTexture2D(J,0),Oe=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,J.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,J.unpackAlignment);const oe=j.getParameter(j.UNPACK_ROW_LENGTH),Rn=j.getParameter(j.UNPACK_IMAGE_HEIGHT),aa=j.getParameter(j.UNPACK_SKIP_PIXELS),wn=j.getParameter(j.UNPACK_SKIP_ROWS),gi=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,Je.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Je.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Wt),j.pixelStorei(j.UNPACK_SKIP_ROWS,$t),j.pixelStorei(j.UNPACK_SKIP_IMAGES,qt);const He=L.isDataArrayTexture||L.isData3DTexture,Cn=J.isDataArrayTexture||J.isData3DTexture;if(L.isDepthTexture){const xn=T.get(L),Dn=T.get(J),Nn=T.get(xn.__renderTarget),Js=T.get(Dn.__renderTarget);Yt.bindFramebuffer(j.READ_FRAMEBUFFER,Nn.__webglFramebuffer),Yt.bindFramebuffer(j.DRAW_FRAMEBUFFER,Js.__webglFramebuffer);for(let Di=0;Di<kt;Di++)He&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,T.get(L).__webglTexture,tt,qt+Di),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,T.get(J).__webglTexture,Ut,nn+Di)),j.blitFramebuffer(Wt,$t,Vt,Ot,te,Pe,Vt,Ot,j.DEPTH_BUFFER_BIT,j.NEAREST);Yt.bindFramebuffer(j.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(tt!==0||L.isRenderTargetTexture||T.has(L)){const xn=T.get(L),Dn=T.get(J);Yt.bindFramebuffer(j.READ_FRAMEBUFFER,vs),Yt.bindFramebuffer(j.DRAW_FRAMEBUFFER,za);for(let Nn=0;Nn<kt;Nn++)He?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,xn.__webglTexture,tt,qt+Nn):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,xn.__webglTexture,tt),Cn?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Dn.__webglTexture,Ut,nn+Nn):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Dn.__webglTexture,Ut),tt!==0?j.blitFramebuffer(Wt,$t,Vt,Ot,te,Pe,Vt,Ot,j.COLOR_BUFFER_BIT,j.NEAREST):Cn?j.copyTexSubImage3D(Oe,Ut,te,Pe,nn+Nn,Wt,$t,Vt,Ot):j.copyTexSubImage2D(Oe,Ut,te,Pe,Wt,$t,Vt,Ot);Yt.bindFramebuffer(j.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Cn?L.isDataTexture||L.isData3DTexture?j.texSubImage3D(Oe,Ut,te,Pe,nn,Vt,Ot,kt,Fe,Qt,Je.data):J.isCompressedArrayTexture?j.compressedTexSubImage3D(Oe,Ut,te,Pe,nn,Vt,Ot,kt,Fe,Je.data):j.texSubImage3D(Oe,Ut,te,Pe,nn,Vt,Ot,kt,Fe,Qt,Je):L.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Ut,te,Pe,Vt,Ot,Fe,Qt,Je.data):L.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Ut,te,Pe,Je.width,Je.height,Fe,Je.data):j.texSubImage2D(j.TEXTURE_2D,Ut,te,Pe,Vt,Ot,Fe,Qt,Je);j.pixelStorei(j.UNPACK_ROW_LENGTH,oe),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Rn),j.pixelStorei(j.UNPACK_SKIP_PIXELS,aa),j.pixelStorei(j.UNPACK_SKIP_ROWS,wn),j.pixelStorei(j.UNPACK_SKIP_IMAGES,gi),Ut===0&&J.generateMipmaps&&j.generateMipmap(Oe),Yt.unbindTexture()},this.initRenderTarget=function(L){T.get(L).__webglFramebuffer===void 0&&Q.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?Q.setTextureCube(L,0):L.isData3DTexture?Q.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Q.setTexture2DArray(L,0):Q.setTexture2D(L,0),Yt.unbindTexture()},this.resetState=function(){G=0,q=0,Y=null,Yt.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ce._getUnpackColorSpace()}}const ad=r=>{const t=[];for(let i=0;i<=360;i+=2){const s=i*Math.PI/180;t.push({x:Math.cos(s)*r,y:Math.sin(s)*r})}return t},hR=r=>{const t=[],i=r,s=r*.3,l=i-s;for(let c=0;c<=90;c+=5)t.push({x:l+s*Math.cos(c*Math.PI/180),y:l+s*Math.sin(c*Math.PI/180)});for(let c=90;c<=180;c+=5)t.push({x:-l+s*Math.cos(c*Math.PI/180),y:l+s*Math.sin(c*Math.PI/180)});for(let c=180;c<=270;c+=5)t.push({x:-l+s*Math.cos(c*Math.PI/180),y:-l+s*Math.sin(c*Math.PI/180)});for(let c=270;c<=360;c+=5)t.push({x:l+s*Math.cos(c*Math.PI/180),y:-l+s*Math.sin(c*Math.PI/180)});return t},dR=r=>{const t=[],i=r,s=r*.5;for(let l=-90;l<=90;l+=5)t.push({x:i*.5+s*Math.cos(l*Math.PI/180),y:s*Math.sin(l*Math.PI/180)});for(let l=90;l<=270;l+=5)t.push({x:-i*.5+s*Math.cos(l*Math.PI/180),y:s*Math.sin(l*Math.PI/180)});return t.push(t[0]),t},pR=r=>{const t=[];for(let i=0;i<=360;i+=2){const s=i*Math.PI/180,l=r*(1+.3*Math.sin(3*s-Math.PI/2));t.push({x:l*Math.cos(s),y:l*Math.sin(s)})}return t},mR=r=>{const t=[];for(let i=0;i<=360;i+=2){const s=i*Math.PI/180,l=r*(1+.4*Math.sin(5*s-Math.PI/2));t.push({x:l*Math.cos(s),y:l*Math.sin(s)})}return t},gR=r=>{const t=[];for(let i=0;i<6;i++){const s=i*60*Math.PI/180;t.push({x:r*Math.cos(s),y:r*Math.sin(s)});const l=(i+1)*60*Math.PI/180,c=r*Math.cos(s),f=r*Math.sin(s),h=r*Math.cos(l),m=r*Math.sin(l);for(let p=1;p<=5;p++){const g=p/6;t.push({x:c+(h-c)*g,y:f+(m-f)*g})}}return t.push(t[0]),t},_R=r=>{const t=[];for(let i=0;i<=360;i+=2){const s=i*Math.PI/180,l=r*(.8+.2*Math.cos(8*s));t.push({x:l*Math.cos(s),y:l*Math.sin(s)})}return t},vR=r=>{const t=[],i=r,s=2;for(let l=-90;l<=90;l+=5)t.push({x:i+s*Math.cos(l*Math.PI/180),y:s*Math.sin(l*Math.PI/180)});for(let l=90;l<=270;l+=5)t.push({x:-i+s*Math.cos(l*Math.PI/180),y:s*Math.sin(l*Math.PI/180)});return t.push(t[0]),t},xR=r=>{const t=[];for(let i=0;i<=360;i+=2){const s=i*Math.PI/180,l=r,c=1+Math.sin(s)*Math.sin(s),f=l*Math.cos(s)/c,h=l*Math.cos(s)*Math.sin(s)/c;t.push({x:f,y:h})}return t},yR=r=>{const t=[];for(let i=0;i<=360;i+=2){const s=i*Math.PI/180,l=r*(.5+.5*Math.cos(s));t.push({x:l*Math.cos(s),y:l*Math.sin(s)})}return t},MR=r=>{const t=[];for(let i=0;i<=360;i+=2){const s=i*Math.PI/180,l=4,c=.5,f=1,h=1,m=1,p=1,g=Math.abs(Math.cos(l*s/4)/m),_=Math.abs(Math.sin(l*s/4)/p),x=r*Math.pow(Math.pow(g,f)+Math.pow(_,h),-1/c);isFinite(x)&&t.push({x:x*Math.cos(s),y:x*Math.sin(s)})}return t},La=(r,t,i=1)=>{let s=[];switch(r){case sn.Circle:s=ad(t);break;case sn.Square:s=hR(t);break;case sn.Stadium:s=dR(t);break;case sn.Triangle:s=pR(t);break;case sn.Star:s=mR(t);break;case sn.Hexagon:s=gR(t);break;case sn.Flower:s=_R(t);break;case sn.Line:s=vR(t);break;case sn.Figure8:s=xR(t);break;case sn.Spiral:s=yR(t);break;case sn.Cross:s=MR(t);break;default:s=ad(t);break}const l=[];let c=0;s.length===0&&(s=ad(t));for(let f=0;f<s.length;f++){const h=s[f],m=s[(f+1)%s.length],p=m.x-h.x,g=m.y-h.y,_=Math.sqrt(p*p+g*g);if(_===0)continue;const x=Math.atan2(g,p)+Math.PI/2;l.push({x:h.x,y:h.y,angle:x,dist:c}),c+=_}return l.push({...l[0],dist:c}),l},gs=(r,t)=>{const i=r[r.length-1].dist||1,s=(t%i+i)%i;for(let l=0;l<r.length-1;l++)if(s>=(r[l].dist||0)&&s<(r[l+1].dist||0)){const c=r[l],f=r[l+1],h=c.dist||0,m=f.dist||0,p=(s-h)/(m-h),g=c.x+(f.x-c.x)*p,_=c.y+(f.y-c.y)*p;let x=c.angle||0,y=f.angle||0;y-x>Math.PI&&(y-=2*Math.PI),x-y>Math.PI&&(x-=2*Math.PI);const b=x+(y-x)*p;return{x:g,y:_,angle:b}}return r[0]},ul=(r,t,i)=>{let s=0,l=0;if(t.zModulationType!==en.None){const c=r*t.zFrequency;if(t.zModulationType===en.Fourier&&i.length>0){let f=0;const h=Math.min(t.fourierCount,i.length);for(let m=0;m<h;m++){const{freq:p,amp:g,phase:_}=i[m];f+=g*Math.sin(p*c+_)}s=f*(t.zAmplitude/100)}else s=t.zAmplitude*Math.sin(c)}if(t.zModulationType2!==en.None){const c=r*t.zFrequency2;if(t.zModulationType2===en.Fourier&&i.length>0){let f=0;const h=Math.min(t.fourierCount,i.length);for(let m=0;m<h;m++){const{freq:p,amp:g,phase:_}=i[m];f+=g*Math.sin(p*c+_)}l=f*(t.zAmplitude2/100)}else l=t.zAmplitude2*Math.sin(c)}return{val1:s,val2:l}},SR=(r,t,i,s)=>{const l=[];let c=1;if(r===en.None)return{zModData:[],zScale:0};if(r===en.Fourier&&i.length>0){c=t/100;const f=Math.min(s,i.length);for(let h=0;h<f;h++)l.push(i[h])}else l.push({freq:1,amp:t,phase:0,re:0,im:0}),c=1;return{zModData:l,zScale:c}},bR=(r,t,i)=>{const s=[],l=[],c=[],f=[],h=ep(r.textPhrase,1);if(h.length===0)return{positions:s,colors:l,points2D:c,paths:f};const m=[];let p=[];h.forEach(y=>{y.penUp&&p.length>0&&(m.push(p),p=[]),p.push(y)}),p.length>0&&m.push(p);let g=1/0,_=-1/0;h.forEach(y=>{y.x<g&&(g=y.x),y.x>_&&(_=y.x)});const x=Math.max(1,_-g);return m.forEach(y=>{const b=[];y.forEach(E=>{const M=(E.x-g)/x,v=M*Math.PI*2;let C=0,R=0;if(r.zModulationType!==en.None){const{val1:N}=ul(v,r,t);C=N}if(r.zModulationType2===en.Sine&&r.zModulationType===en.Sine){const N=v*r.zFrequency;R=r.zAmplitude2*Math.sin(N+Math.PI/2)}else if(r.zModulationType2!==en.None){const{val2:N}=ul(v,r,t);R=N}const w=E.x,P=C,O=E.y+R;if(s.push(w,P,O),c.push(new V(w,i,O)),b.push(new V(w,P,O)),r.colorMode===jn.Rainbow){const N=M*360%360,H=new he(`hsl(${N}, 100%, 60%)`);l.push(H.r,H.g,H.b)}else{const N=new he(r.color);l.push(N.r,N.g,N.b)}}),b.length>0&&f.push(b)}),{positions:s,colors:l,points2D:c,paths:f}},ER=(r,t,i)=>{const s=[],l=[],c=[],f=[],h=Math.min(r.fourierCount,t.length),m=Math.max(2e3,t.length*2);let p=[];for(let g=0;g<=m;g++){const _=g/m*Math.PI*2;let x=0,y=0;for(let C=0;C<h;C++){const{freq:R,amp:w,phase:P}=t[C];x+=w*Math.cos(R*_+P),y+=w*Math.sin(R*_+P)}const{val1:b,val2:E}=ul(_,r,t),M=b+E;s.push(x,M,y);const v=new V(x,M,y);if(p.push(v),c.push(new V(x,i,y)),r.colorMode===jn.Rainbow){const C=_*180/Math.PI%360,R=new he(`hsl(${C}, 100%, 60%)`);l.push(R.r,R.g,R.b)}else{const C=new he(r.color);l.push(C.r,C.g,C.b)}}return p.length>0&&f.push(p),{positions:s,colors:l,points2D:c,paths:f}},TR=(r,t,i,s)=>{const l=[],c=[],f=[],h=[],m=La(r.statorShape,r.outerRadius),p=La(r.rotorShape,r.innerRadius),g=s*r.rotations,_=r.resolution;let x=[];const y=Math.ceil(g/_);for(let b=0;b<=y;b++){const E=b*_,M=gs(m,E),v=gs(p,E),R=r.type===Fi.Hypotrochoid?M.angle-v.angle:M.angle+Math.PI-v.angle,w=Math.cos(R),P=Math.sin(R),O=v.x*w-v.y*P,N=v.x*P+v.y*w,H=M.x-O,A=M.y-N,D=H+r.penOffset*Math.cos(R),G=A+r.penOffset*Math.sin(R),q=E/s*Math.PI*2,{val1:Y,val2:et}=ul(q,r,t),it=Y+et;l.push(D,it,G);const I=new V(D,it,G);if(x.push(I),f.push(new V(D,i,G)),r.colorMode===jn.Rainbow){const B=R*180/Math.PI%360,Z=new he(`hsl(${B}, 100%, 60%)`);c.push(Z.r,Z.g,Z.b)}else{const B=new he(r.color);c.push(B.r,B.g,B.b)}}return x.length>0&&h.push(x),{positions:l,colors:c,points2D:f,paths:h}},AR=(r,t=[])=>{const i=r.generatorMode===ge.Text,s=r.generatorMode===ge.Fourier,l=r.generatorMode===ge.Spirograph,c=i?r.zAmplitude:r.zAmplitude+r.zAmplitude2,f=-c-60;let h=100,m={positions:[],colors:[],points2D:[],paths:[]};if(i)m=bR(r,t,f);else if(s&&t.length>0)m=ER(r,t,f);else if(l){const O=La(r.statorShape,r.outerRadius);h=O[O.length-1].dist||100,m=TR(r,t,f,h)}const{positions:p,colors:g,points2D:_,paths:x}=m;let y=1/0,b=-1/0,E=1/0,M=-1/0;for(let O=0;O<p.length;O+=3){const N=p[O],H=p[O+2];N<y&&(y=N),N>b&&(b=N),H<E&&(E=H),H>M&&(M=H)}y===1/0&&(y=-100,b=100,E=-100,M=100);const v=Math.max(Math.hypot(y,E),Math.hypot(b,M),Math.hypot(y,M),Math.hypot(b,E),80),C=v*1.5,R=[],w=[];for(let O=0;O<p.length;O+=3){const N=p[O],H=p[O+1],A=p[O+2];R.push(new V(-C,H,A)),w.push(new V(N,H,-C))}const P=O=>{const N=O?r.zModulationType2:r.zModulationType,H=O?r.zAmplitude2:r.zAmplitude,{zModData:A,zScale:D}=SR(N,H,t,r.fourierCount);return A.map(G=>({amp:G.amp*D,freq:G.freq,phase:G.phase}))};return{positions:p,paths:x,colors:g,points2D:_,pointsSide:R,pointsBack:w,floorY:f,totalMaxAmp:c,calculatedStatorLength:h,globalRadius:v,wallOffset:C,zModMeshesBackData:P(!1),zModMeshesSideData:P(!0)}},gv={type:"change"},Mp={type:"start"},ux={type:"end"},qc=new dp,_v=new hs,RR=Math.cos(70*wb.DEG2RAD),Mn=new V,ti=2*Math.PI,Ze={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},sd=1e-6;class wR extends m1{constructor(t,i=null){super(t,i),this.state=Ze.NONE,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:jr.ROTATE,MIDDLE:jr.DOLLY,RIGHT:jr.PAN},this.touches={ONE:Xr.ROTATE,TWO:Xr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new Ws,this._lastTargetPosition=new V,this._quat=new Ws().setFromUnitVectors(t.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new j_,this._sphericalDelta=new j_,this._scale=1,this._panOffset=new V,this._rotateStart=new le,this._rotateEnd=new le,this._rotateDelta=new le,this._panStart=new le,this._panEnd=new le,this._panDelta=new le,this._dollyStart=new le,this._dollyEnd=new le,this._dollyDelta=new le,this._dollyDirection=new V,this._mouse=new le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=DR.bind(this),this._onPointerDown=CR.bind(this),this._onPointerUp=NR.bind(this),this._onContextMenu=FR.bind(this),this._onMouseWheel=PR.bind(this),this._onKeyDown=OR.bind(this),this._onTouchStart=zR.bind(this),this._onTouchMove=IR.bind(this),this._onMouseDown=UR.bind(this),this._onMouseMove=LR.bind(this),this._interceptControlDown=BR.bind(this),this._interceptControlUp=HR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(gv),this.update(),this.state=Ze.NONE}update(t=null){const i=this.object.position;Mn.copy(i).sub(this.target),Mn.applyQuaternion(this._quat),this._spherical.setFromVector3(Mn),this.autoRotate&&this.state===Ze.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=ti:s>Math.PI&&(s-=ti),l<-Math.PI?l+=ti:l>Math.PI&&(l-=ti),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(Mn.setFromSpherical(this._spherical),Mn.applyQuaternion(this._quatInverse),i.copy(this.target).add(Mn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const h=Mn.length();f=this._clampDistance(h*this._scale);const m=h-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const h=new V(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new V(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),f=Mn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(qc.origin.copy(this.object.position),qc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qc.direction))<RR?this.object.lookAt(this.target):(_v.setFromNormalAndCoplanarPoint(this.object.up,this.target),qc.intersectPlane(_v,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>sd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>sd||this._lastTargetPosition.distanceToSquared(this.target)>sd?(this.dispatchEvent(gv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ti/60*this.autoRotateSpeed*t:ti/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){Mn.setFromMatrixColumn(i,0),Mn.multiplyScalar(-t),this._panOffset.add(Mn)}_panUp(t,i){this.screenSpacePanning===!0?Mn.setFromMatrixColumn(i,1):(Mn.setFromMatrixColumn(i,0),Mn.crossVectors(this.object.up,Mn)),Mn.multiplyScalar(t),this._panOffset.add(Mn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Mn.copy(l).sub(this.target);let c=Mn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,f=s.width,h=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ti*this._rotateDelta.x/i.clientHeight),this._rotateUp(ti*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ti*this._rotateDelta.x/i.clientHeight),this._rotateUp(ti*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,h=(t.pageY+i.y)*.5;this._updateZoomParameters(f,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new le,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function CR(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function DR(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function NR(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ux),this.state=Ze.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function UR(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case jr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ze.DOLLY;break;case jr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ze.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ze.ROTATE}break;case jr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ze.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ze.PAN}break;default:this.state=Ze.NONE}this.state!==Ze.NONE&&this.dispatchEvent(Mp)}function LR(r){switch(this.state){case Ze.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ze.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ze.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function PR(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ze.NONE||(r.preventDefault(),this.dispatchEvent(Mp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(ux))}function OR(r){this.enabled!==!1&&this._handleKeyDown(r)}function zR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Xr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ze.TOUCH_ROTATE;break;case Xr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ze.TOUCH_PAN;break;default:this.state=Ze.NONE}break;case 2:switch(this.touches.TWO){case Xr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ze.TOUCH_DOLLY_PAN;break;case Xr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ze.TOUCH_DOLLY_ROTATE;break;default:this.state=Ze.NONE}break;default:this.state=Ze.NONE}this.state!==Ze.NONE&&this.dispatchEvent(Mp)}function IR(r){switch(this._trackPointer(r),this.state){case Ze.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ze.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ze.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ze.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ze.NONE}}function FR(r){this.enabled!==!1&&r.preventDefault()}function BR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function HR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const GR=(r,t,i)=>{const s=new Jb;s.background=new he(132631),s.fog=new pp(132631,25e-5);const l=new h1(16777215,1.2);s.add(l);const c=new Kh(16777215,1.5);c.position.set(50,100,100),s.add(c);const f=new Kh(6583435,.8);f.position.set(-50,50,-100),s.add(f);const h=45,m=r/t,p=new di(h,m,1,1e5),g=new Kh(16777215,.6);g.position.set(0,0,1),p.add(g),s.add(p);const _=new fR({antialias:!0,powerPreference:"high-performance"});_.setSize(r,t),_.setPixelRatio(Math.min(window.devicePixelRatio,2)),_.shadowMap.enabled=!0,i.appendChild(_.domElement);const x=new wR(p,_.domElement);return x.enableDamping=!0,x.dampingFactor=.05,x.maxPolarAngle=Math.PI/2+.1,{scene:s,camera:p,renderer:_,controls:x}},VR=(r,t,i,s)=>{const f=t*3.5,h=new Qh(t*4,40,6583435,988970);h.position.y=i-5,r.add(h);const m=new Qh(f,20,6583435,4674921);m.rotation.z=Math.PI/2,m.position.set(-s-1,0,0);const p=new Qh(f,20,6583435,4674921);return p.rotation.x=Math.PI/2,p.position.set(0,0,-s-1),{sideGrid:m,backGrid:p}},kR=(r,t,i,s,l,c)=>{const f=new Zi;r.add(f);const h=new Zi;r.add(h);const m=new _p(2.5,9,16);m.rotateX(Math.PI/2);const p=new Ri(m,new au({color:16777215}));h.add(p),h.add(new u1(16777215,2,300));const g=new Zi,_=new Zi;f.add(g),f.add(_);const x=(B,Z,mt)=>{const dt=[];for(const z of Z){const nt=z.amp,Et=new V_(0,0,nt,nt,0,2*Math.PI).getPoints(32),Nt=new Ye().setFromPoints(Et.map(Pt=>new V(Pt.x,Pt.y,0))),at=mt?7268279:8490232,ft=new ei(Nt,new hi({color:at,transparent:!0,opacity:.9,linewidth:2}));B.add(ft);const Rt=new Ye().setFromPoints([new V(0,0,0),new V(nt,0,0)]),Gt=new ei(Rt,new hi({color:14412542,transparent:!0,opacity:1,linewidth:3}));B.add(Gt),dt.push({circle:ft,radius:Gt,amp:nt,freq:z.freq,phase:z.phase})}return mt&&(B.rotation.y=Math.PI/2),dt},y=x(g,l,!1),b=x(_,c,!0),E=B=>new ei(new Ye().setFromPoints([new V,new V]),new Yh({color:B,dashSize:4,gapSize:4,opacity:.8,transparent:!0})),M=E(8490232),v=E(7268279);g.add(M),_.add(v);let C;const R=[];let w,P,O;if(t.generatorMode===ge.Fourier&&i.length>0){C=new Zi,C.position.y=s,f.add(C);const B=Math.min(t.fourierCount,i.length);for(let Z=0;Z<B;Z++){const mt=i[Z].amp,z=new V_(0,0,mt,mt,0,2*Math.PI,!1,0).getPoints(64),nt=new Ye().setFromPoints(z.map(at=>new V(at.x,0,at.y))),gt=new ei(nt,new hi({color:2282478,transparent:!0,opacity:.5}));C.add(gt);const Et=new Ye().setFromPoints([new V(0,0,0),new V(mt,0,0)]),Nt=new ei(Et,new hi({color:16777215,opacity:.8,transparent:!0}));C.add(Nt),R.push({circle:gt,radius:Nt})}}else if(t.generatorMode===ge.Spirograph){const B=La(t.statorShape,t.outerRadius),Z=La(t.rotorShape,t.innerRadius),mt=B.map(z=>new V(z.x,s,z.y));mt.length>0&&mt.push(mt[0]),w=new ei(new Ye().setFromPoints(mt),new hi({color:2282478,opacity:1})),f.add(w);const dt=Z.map(z=>new V(z.x,0,z.y));dt.length>0&&dt.push(dt[0]),P=new ei(new Ye().setFromPoints(dt),new hi({color:16007006,opacity:1})),f.add(P),O=new ei(new Ye().setFromPoints([new V,new V]),new hi({color:16777215,opacity:1})),f.add(O)}const N=new ei(new Ye().setFromPoints([new V,new V]),new Yh({color:13358561,dashSize:4,gapSize:4,transparent:!0,opacity:.8}));f.add(N);const H=new ei(new Ye().setFromPoints([new V,new V]),new hi({color:16777215,linewidth:2,transparent:!0,opacity:.9}));f.add(H);const A=()=>new Ri(new vp(3,8,8),new au({color:6333946})),D=A(),G=A();f.add(D),f.add(G);const q=new Yh({color:6333946,dashSize:4,gapSize:4,opacity:.7,transparent:!0}),Y=new hi({color:16020150,opacity:.8,transparent:!0}),et=new ei(new Ye().setFromPoints([new V,new V]),q),it=new ei(new Ye().setFromPoints([new V,new V]),q),I=new ei(new Ye().setFromPoints([new V,new V]),Y);return f.add(et),f.add(it),f.add(I),{mechanicsGroup:f,penGroup:h,backWallGroup:g,sideWallGroup:_,floorEpicyclesGroup:C,floorEpicycleMeshes:R,zModMeshesBack:y,zModMeshesSide:b,backConnector:M,sideConnector:v,connectorLine:N,statorLine:w,rotorLine:P,armLine:O,xProjector:et,zProjector:it,heightLine:I,sideDot:D,backDot:G,tipLine:H}},XR=r=>{const t=[],i=[],s=[];if(r.length<2)return{tangents:t,normals:i,binormals:s};for(let m=0;m<r.length;m++){const p=new V;if(m===0)p.subVectors(r[1],r[0]);else if(m===r.length-1)p.subVectors(r[m],r[m-1]);else{const g=new V().subVectors(r[m],r[m-1]),_=new V().subVectors(r[m+1],r[m]);p.addVectors(g,_)}p.normalize(),t.push(p)}let l=new V(1,0,0);Math.abs(t[0].dot(l))>.9&&l.set(0,1,0);const c=new V().crossVectors(t[0],l).normalize(),f=new V().crossVectors(t[0],c).normalize();i.push(c),s.push(f);let h=c;for(let m=1;m<r.length;m++){const p=t[m-1],g=t[m],_=new V().crossVectors(p,g),x=p.dot(g);if(_.lengthSq()>1e-4){_.normalize();const E=Math.acos(Math.max(-1,Math.min(1,x)));h.applyAxisAngle(_,E)}const y=new V().crossVectors(g,h).normalize(),b=new V().crossVectors(y,g).normalize();i.push(b),s.push(y),h=b}return{tangents:t,normals:i,binormals:s}},jR=(r,t,i,s,l)=>{if(t.length===0)return{line:null,ranges:[]};const c=Math.max(.1,s.lineWidth*.3),f=6,h=[],m=[],p=[];let g=0,_=0,x=0;const y=[];t.forEach(E=>{if(E.length<2){_+=E.length,x+=E.length;return}const M=E.length,{normals:v,binormals:C}=XR(E),R=p.length;for(let w=0;w<M;w++){const P=E[w],O=v[w],N=C[w],H=(x+w)*3,A=H<i.length?i[H]:1,D=H+1<i.length?i[H+1]:1,G=H+2<i.length?i[H+2]:1;for(let q=0;q<f;q++){const Y=q/f*Math.PI*2,et=Math.sin(Y),it=Math.cos(Y),I=P.x+c*(O.x*it+N.x*et),B=P.y+c*(O.y*it+N.y*et),Z=P.z+c*(O.z*it+N.z*et);h.push(I,B,Z),m.push(A,D,G)}}for(let w=0;w<M-1;w++){const P=g+w*f,O=g+(w+1)*f;for(let N=0;N<f;N++){const H=(N+1)%f;p.push(P+N,O+N,P+H),p.push(O+N,O+H,P+H)}}y.push({pStart:_,pEnd:_+M-1,gStart:R,gEnd:p.length}),g+=M*f,_+=M,x+=M});let b=null;if(h.length>0){const E=new Ye;E.setAttribute("position",new un(h,3)),E.setAttribute("color",new un(m,3)),E.setIndex(p);const M=new r1({vertexColors:!0,roughness:.2,metalness:0,emissive:0,emissiveIntensity:0,flatShading:!1,side:Yi,fog:!1});b=new Ri(E,M),b.geometry.setDrawRange(0,0),r.add(b)}return{line:b,ranges:y}},WR=(r,t,i,s,l)=>{const c=[],f=[],h=[],m=[];let p=0,g=0;t.forEach(M=>{if(M.length<2){p+=M.length;return}const v=p,C=g;for(let R=0;R<M.length-1;R++){const w=M[R],P=M[R+1];c.push(w.x,s,w.z),c.push(P.x,s,P.z),f.push(-l,w.y,w.z),f.push(-l,P.y,P.z),h.push(w.x,w.y,-l),h.push(P.x,P.y,-l),g+=2}m.push({start:v,end:v+M.length-1,vStart:C,vEnd:g}),p+=M.length});const _=(M,v)=>{const C=new Ye;C.setAttribute("position",new un(M,3));const R=new nx(C,new hi({color:v,opacity:.2,transparent:!0}));return r.add(R),{line:R,geo:C}},{line:x,geo:y}=_(c,2282478),{line:b}=_(f,7268279),{line:E}=_(h,8490232);return y.setDrawRange(0,0),b.geometry.setDrawRange(0,0),E.geometry.setDrawRange(0,0),{geo2D:y,sideShadowLine:b,backShadowLine:E,projectionRanges:m}},fx=({canvasRef:r,isRecording:t,format:i,onStop:s})=>{const l=It.useRef(null),c=It.useRef([]);It.useEffect(()=>{const f=r.current;if(f){if(t)try{const h=f.captureStream(30);let m="",p="webm";const _={mp4:"video/mp4","webm-vp9":"video/webm;codecs=vp9","webm-vp8":"video/webm;codecs=vp8"}[i];if(_&&MediaRecorder.isTypeSupported(_))m=_,i==="mp4"&&(p="mp4");else{const y=["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"];for(const b of y)if(MediaRecorder.isTypeSupported(b)){m=b,b.includes("mp4")&&(p="mp4");break}}if(!m){console.error("No supported video mime type found.");return}const x=new MediaRecorder(h,{mimeType:m,videoBitsPerSecond:5e6});c.current=[],x.ondataavailable=y=>{y.data&&y.data.size>0&&c.current.push(y.data)},x.onstop=()=>{if(c.current.length===0){console.warn("No video data recorded");return}const y=new Blob(c.current,{type:m.split(";")[0]}),b=URL.createObjectURL(y),E=document.createElement("a");E.style.display="none",E.href=b,E.download=`spiroverse-video-${Date.now()}.${p}`,document.body.appendChild(E),E.click(),setTimeout(()=>{document.body.removeChild(E),window.URL.revokeObjectURL(b),s&&s()},100),c.current=[]},x.start(100),l.current=x,console.log("Recording started",m)}catch(h){console.error("Recording Failed",h)}else l.current&&l.current.state!=="inactive"&&(l.current.stop(),console.log("Recording stopped"));return()=>{l.current&&l.current.state!=="inactive"&&l.current.stop()}}},[t,i,r])},qR=({camera:r,controls:t,smoothedCamPos:i,isTextMode:s,isPlaying:l,drawingProgress:c,totalPoints:f,delta:h,travelTimeRef:m,phaseRef:p,transitionSnapshotRef:g,bounds:_,distToFitGlobal:x,distToFitAction:y,currentPenPos:b,animationTime:E})=>{if(s&&c>=f-1){l&&(m.current+=h);const M=m.current,v=5,C=4,R=1,w=2,P=8,O=2.5,N=v,H=N+C,A=H+R,D=A+w,G=D+P,q=G+O,Y=new V(0,x,1),et=new V(0,0,0),it=x*.8,I=it*.3;if(M<N){const B=Math.min(1,M/v),Z=B*B*(3-2*B),{minX:mt,maxX:dt}=_,z=dt-mt,nt=Math.max(30,z*.15),gt=mt-nt,Et=dt+nt,Nt=gt+(Et-gt)*Z,at=y*.6,ft=10,Rt=new V(Nt,ft,at),Gt=new V(Nt,0,0);i.lerp(Rt,.1),r.position.copy(i);const Pt=t.target.clone();Pt.lerp(Gt,.1),r.lookAt(Pt),t.target.copy(Pt),p.current=1,g.current={pos:r.position.clone(),target:t.target.clone()}}else if(M<H){const B=(M-N)/C,Z=B*B,mt=g.current||{pos:r.position.clone(),target:t.target.clone()},dt=new V().lerpVectors(mt.pos,Y,Z),z=new V().lerpVectors(mt.target,et,Z);r.position.copy(dt),t.target.copy(z),r.lookAt(z),p.current=2}else if(M<A)r.position.copy(Y),t.target.copy(et),r.lookAt(et),g.current={pos:Y.clone(),target:et.clone()},p.current=3;else if(M<D){const B=(M-A)/w,Z=B<.5?2*B*B:-1+(4-2*B)*B,mt=g.current,dt=new V(0,I,it),z=new V().lerpVectors(mt.pos,dt,Z);r.position.copy(z),t.target.copy(et),r.lookAt(et),p.current=4}else if(M<G){const B=(M-D)/P,Z=Math.PI/2+Math.PI*2*B,mt=it*Math.cos(Z),dt=it*Math.sin(Z),z=I;r.position.set(mt,z,dt),r.lookAt(et),t.target.copy(et),g.current={pos:r.position.clone(),target:et.clone()},p.current=5}else if(M<q){const B=(M-G)/O,Z=B<.5?2*B*B:-1+(4-2*B)*B,mt=g.current,dt=new V().lerpVectors(mt.pos,Y,Z);r.position.copy(dt),r.lookAt(et),t.target.copy(et)}else{r.position.copy(Y),t.target.copy(et),r.lookAt(et),t.enabled=!0;return}t.enabled=!1}else{if(!l){t.enabled=!0,i.copy(r.position);return}const M=Math.sin(E*.3),v=new V().lerpVectors(new V(0,0,0),b,Math.max(0,M*.6)),C=y*(.9-M*.3),R=Math.max(5,C*Math.cos(1+M*.45)),w=Math.sqrt(Math.max(0,C*C-R*R)),P=E*.2+Math.min(c/f,1)*Math.PI/6,O=new V(w*Math.cos(P),R,w*Math.sin(P)).add(v);i.lerp(O,.03),r.position.copy(i);const N=t.target.clone();N.lerp(v,.05),r.lookAt(N),t.target.copy(N),t.enabled=!1}},YR=(r,t,i,s,l)=>{if(!r)return;let c=0;if(t.length>0){for(let f=0;f<t.length;f++){const h=t[f];if(i>=h.pStart&&i<=h.pEnd){const m=i-h.pStart,p=Math.floor(m);c=h.gStart+p*36,s.tipLine&&(s.tipLine.visible=!0);break}else if(f<t.length-1&&i>h.pEnd&&i<t[f+1].pStart){c=h.gEnd,s.tipLine&&(s.tipLine.visible=!1);break}}i>t[t.length-1].pEnd&&(c=t[t.length-1].gEnd,s.tipLine&&(s.tipLine.visible=!1))}r.geometry.setDrawRange(0,Math.floor(c))},ZR=(r,t,i)=>{if(!t.length)return;let s=0;if(i>=t[t.length-1].end)s=t[t.length-1].vEnd;else{const l=t.find(c=>i>=c.start&&i<=c.end+.001);if(l){const c=i-l.start,f=l.end-l.start;if(f>0){const h=Math.max(0,Math.min(1,c/f)),m=Math.floor(h*(l.vEnd-l.vStart));s=l.vStart+(m-m%2)}else s=l.vStart}else for(let c=t.length-1;c>=0;c--)if(i>t[c].end){s=t[c].vEnd;break}}r.forEach(l=>{l&&l.setDrawRange(0,s)})},KR=(r,t,i,s,l,c,f,h,m,p)=>{const g=t.generatorMode===ge.Text;r.penGroup&&r.penGroup.position.copy(i),t.showProjection&&(r.sideDot&&r.sideDot.position.set(-l,i.y,i.z),r.backDot&&r.backDot.position.set(i.x,i.y,-l),r.xProjector&&(r.xProjector.geometry.setFromPoints([new V(-l,i.y,i.z),i]),r.xProjector.computeLineDistances()),r.zProjector&&(r.zProjector.geometry.setFromPoints([new V(i.x,i.y,-l),i]),r.zProjector.computeLineDistances()),r.heightLine&&r.heightLine.geometry.setFromPoints([new V(i.x,s,i.z),i]),r.connectorLine&&(r.connectorLine.geometry.setFromPoints([new V(i.x,s,i.z),i]),r.connectorLine.computeLineDistances()));const _=c;let x=0,y=0;if(t.generatorMode===ge.Fourier&&f.length>0){let C=0,R=0;const w=Math.min(t.fourierCount,f.length);for(let P=0;P<w;P++){const O=C,N=R,{freq:H,amp:A,phase:D}=f[P];if(C+=A*Math.cos(H*_+D),R+=A*Math.sin(H*_+D),r.floorEpicycleMeshes&&r.floorEpicycleMeshes[P]){const G=r.floorEpicycleMeshes[P];G.circle.position.set(O,0,N),G.radius.position.set(O,0,N),G.radius.rotation.set(0,-Math.atan2(R-N,C-O),0)}}x=C,y=R}else if(t.generatorMode===ge.Spirograph&&r.rotorLine){const C=_/(Math.PI*2)*p,R=gs(h,C),w=gs(m,C),P=t.type==="INSIDE"?R.angle-w.angle:R.angle+Math.PI-w.angle,O=R.x-(w.x*Math.cos(P)-w.y*Math.sin(P)),N=R.y-(w.x*Math.sin(P)+w.y*Math.cos(P));x=O+t.penOffset*Math.cos(P),y=N+t.penOffset*Math.sin(P),r.rotorLine.position.set(O,s,N),r.rotorLine.rotation.y=-P,r.armLine&&r.armLine.geometry.setFromPoints([new V(O,s,N),new V(x,s,y)]),r.rotorLine.visible=t.showProjection,r.armLine&&(r.armLine.visible=t.showProjection),r.statorLine&&(r.statorLine.visible=!0)}else x=i.x,y=i.z;r.connectorLine&&(r.connectorLine.geometry.setFromPoints([new V(x,s,y),i]),r.connectorLine.computeLineDistances());let b=_;g&&(b=i.x/200*Math.PI*2);const{val1:E,val2:M}=ul(b,t,f),v=(C,R,w,P,O)=>{let N=0,H=0;P?C.position.set(-l,O,i.z):C.position.set(i.x,O,-l);const A=P?t.zFrequency2:t.zFrequency;for(const D of R){const G=N,q=H,Y=b*A;N+=D.amp*Math.cos(D.freq*Y+D.phase),H+=D.amp*Math.sin(D.freq*Y+D.phase),D.circle.position.set(G,q,0),D.radius.position.set(G,q,0),D.radius.rotation.z=Math.atan2(H-q,N-G)}P?C.position.set(-l,O,i.z+N):C.position.set(i.x-N,O,-l),w.geometry.setFromPoints([new V(N,H,0),new V(0,H,0)]),w.computeLineDistances()};r.backWallGroup&&v(r.backWallGroup,r.zModMeshesBack,r.backConnector,!1,M),r.sideWallGroup&&v(r.sideWallGroup,r.zModMeshesSide,r.sideConnector,!0,E)},QR=({scene:r,camera:t,renderer:i,controls:s,config:l,isPlaying:c,positions:f,mechanics:h,line:m,geo2D:p,sideShadowLine:g,backShadowLine:_,ranges:x,projectionRanges:y,floorY:b,wallOffset:E,globalRadius:M,fourierData:v,calculatedStatorLength:C,statorPath:R,rotorPath:w,onProgress:P,onStop:O,bounds:N,redrawTrigger:H})=>{const A=It.useRef(0),D=It.useRef(0),G=It.useRef(0),q=It.useRef(0),Y=It.useRef(0),et=It.useRef(null),it=It.useRef(-1),I=It.useRef(!1),B=It.useRef(H);It.useEffect(()=>{const Z=f.length/3;H!==B.current?(B.current=H,A.current=0,D.current=0,q.current=0,Y.current=0,et.current=null,I.current=!1):I.current?(D.current=Z+1,A.current=0):(A.current=0,D.current=0,q.current=0,Y.current=0,et.current=null)},[f,H]),It.useEffect(()=>{if(!r||!t||!i||!h)return;const Z=f.length/3,dt=Math.max(1,Math.floor(Z/600))*l.drawSpeed*.2,z=l.generatorMode===ge.Text,nt=new V().copy(t.position),gt=45*Math.PI/180,Et=window.innerWidth/window.innerHeight,Nt=M*1.2/(Math.min(Et,1)*Math.tan(gt/2)),ft=(z?Math.max(80,M*.4):M*.9)*1.2/(Math.min(Et,1)*Math.tan(gt/2)),Rt=Ke=>{if(Z===0)return new V;const ue=Ke%Z,re=Math.floor(ue),ye=ue-re,ne=re*3,Xe=(re+1)%Z*3,j=new V(f[ne],f[ne+1],f[ne+2]),Ae=new V(f[Xe],f[Xe+1],f[Xe+2]);return new V().lerpVectors(j,Ae,ye)},Gt=new p1;let Pt=0;const _e=()=>{G.current=requestAnimationFrame(_e);const Ke=Gt.getDelta();if(Z===0){i.render(r,t);return}c&&(Pt+=Ke,A.current=(A.current+dt)%Z,D.current=Math.min(D.current+dt,Z));const ue=D.current>=Z;if(I.current=ue,P){const j=Z>0?Math.min(D.current,Z)/Z*100:0,Ae=Math.floor(j);Ae!==it.current&&(it.current=Ae,P(Math.min(100,Math.max(0,Ae))))}h.mechanicsGroup&&(h.mechanicsGroup.visible=l.showProjection&&!ue),h.penGroup&&(h.penGroup.visible=!ue),m&&(m.visible=l.showTrace);const re=A.current,ye=Rt(re);if(l.showTrace&&m?YR(m,x,D.current,h):h.tipLine&&(h.tipLine.visible=!1),y&&y.length>0)ZR([p,g==null?void 0:g.geometry,_==null?void 0:_.geometry],y,D.current);else{const j=Z>1?Math.min(1,D.current/(Z-1)):0,Ae=Math.floor(j*((p==null?void 0:p.attributes.position.count)||0));p&&p.setDrawRange(0,Ae),g&&g.geometry.setDrawRange(0,Ae),_&&_.geometry.setDrawRange(0,Ae)}const ne=re/Z,Xe=l.generatorMode===ge.Spirograph?ne*l.rotations*Math.PI*2:ne*Math.PI*2;if(KR(h,l,ye,b,E,Xe,v,R,w,C),h.penGroup){const j=Rt(re+1);j.distanceToSquared(ye)>.001&&h.penGroup.lookAt(j)}qR({camera:t,controls:s,smoothedCamPos:nt,isTextMode:z,isPlaying:c,drawingProgress:D.current,totalPoints:Z,delta:Ke,travelTimeRef:q,phaseRef:Y,transitionSnapshotRef:et,bounds:N,distToFitGlobal:Nt,distToFitAction:ft,currentPenPos:ye,animationTime:Pt}),s.update(),i.render(r,t)};return _e(),()=>cancelAnimationFrame(G.current)},[f,c,l,r,t,i,h,m,p,g,_])},JR=({config:r,width:t,height:i,isPlaying:s,fourierData:l=[],redrawTrigger:c,downloadTrigger:f=0,isRecording:h=!1,onStop:m,onProgress:p})=>{var C,R,w,P;const g=It.useRef(null),_=It.useRef(null),[x,y]=It.useState(null),b=It.useRef(null);fx({canvasRef:b,isRecording:h,format:r.videoFormat,onStop:m}),It.useEffect(()=>{if(f>0&&_.current){const O=document.createElement("a");O.download=`spiroverse-3d-${Date.now()}.png`,O.href=_.current.renderer.domElement.toDataURL("image/png"),O.click()}},[f]);const E=It.useMemo(()=>AR(r,l),[r,l,c]),M=It.useMemo(()=>La(r.statorShape,r.outerRadius),[r.statorShape,r.outerRadius]),v=It.useMemo(()=>La(r.rotorShape,r.innerRadius),[r.rotorShape,r.innerRadius]);return It.useEffect(()=>{if(!g.current)return;const{scene:O,camera:N,renderer:H,controls:A}=GR(t,i,g.current),D=new Zi;return O.add(D),_.current={scene:O,camera:N,renderer:H,controls:A,dynamicGroup:D},b.current=H.domElement,()=>{g.current&&g.current.removeChild(H.domElement),H.dispose(),_.current=null}},[]),It.useEffect(()=>{if(_.current){const{camera:O,renderer:N}=_.current;O.aspect=t/i,O.updateProjectionMatrix(),N.setSize(t,i)}},[t,i]),It.useEffect(()=>{if(!_.current)return;const{dynamicGroup:O}=_.current;O.traverse(B=>{B.geometry&&B.geometry.dispose(),B.material&&(Array.isArray(B.material)?B.material.forEach(Z=>Z.dispose()):B.material.dispose())}),O.clear();const N=O,{sideGrid:H,backGrid:A}=VR(N,E.globalRadius,E.floorY,E.wallOffset),D=kR(N,r,l,E.floorY,E.zModMeshesBackData,E.zModMeshesSideData);D.mechanicsGroup.add(H),D.mechanicsGroup.add(A);const{line:G,ranges:q}=jR(N,E.paths,E.colors,r),{geo2D:Y,sideShadowLine:et,backShadowLine:it,projectionRanges:I}=WR(D.mechanicsGroup,E.paths,E.points2D,E.floorY,E.wallOffset);y({mechanics:D,line:G,geo2D:Y,sideShadowLine:et,backShadowLine:it,ranges:q,projectionRanges:I})},[E,r]),QR({scene:(C=_.current)==null?void 0:C.scene,camera:(R=_.current)==null?void 0:R.camera,renderer:(w=_.current)==null?void 0:w.renderer,controls:(P=_.current)==null?void 0:P.controls,mechanics:(x==null?void 0:x.mechanics)||{},line:(x==null?void 0:x.line)||null,geo2D:(x==null?void 0:x.geo2D)||null,sideShadowLine:(x==null?void 0:x.sideShadowLine)||null,backShadowLine:(x==null?void 0:x.backShadowLine)||null,ranges:(x==null?void 0:x.ranges)||[],projectionRanges:(x==null?void 0:x.projectionRanges)||[],config:r,isPlaying:s,positions:E.positions,floorY:E.floorY,wallOffset:E.wallOffset,globalRadius:E.globalRadius,fourierData:l,calculatedStatorLength:E.calculatedStatorLength,statorPath:M,rotorPath:v,onProgress:p,onStop:m,bounds:{minX:-100,maxX:100},redrawTrigger:c}),X.jsx("div",{ref:g,className:"w-full h-full rounded-lg overflow-hidden bg-slate-950"})},$R=(r,t,i,s,l)=>{const[c,f]=It.useState(!1),[h,m]=It.useState([]),[p,g]=It.useState([]);It.useEffect(()=>{r.generatorMode===ge.Spirograph?(m([]),g([])):r.generatorMode===ge.Text&&g([])},[r.generatorMode,r.textPhrase]),It.useEffect(()=>{if(r.generatorMode===ge.Fourier&&h.length>0&&!c){const E=h.filter((v,C)=>C%1===0),M=xv(E);l(M),g([])}},[h,c,r.generatorMode,l]);const _=b=>{var C;if(r.generatorMode!==ge.Fourier)return;f(!0),m([]),l([]);const E=(C=s.current)==null?void 0:C.getBoundingClientRect();if(!E)return;const M=b.clientX-E.left-t/2,v=b.clientY-E.top-i/2;m([{x:M,y:v}])},x=b=>{var C;if(!c||r.generatorMode!==ge.Fourier)return;const E=(C=s.current)==null?void 0:C.getBoundingClientRect();if(!E)return;const M=b.clientX-E.left-t/2,v=b.clientY-E.top-i/2;m(R=>[...R,{x:M,y:v}])},y=()=>{c&&f(!1)};return{drawing:c,userPath:h,fourierPath:p,setFourierPath:g,handlers:{onPointerDown:_,onPointerMove:x,onPointerUp:y,onPointerLeave:y}}},tw=(r,t,i,s,l,c)=>{const f=2.5/c;r.beginPath(),s.forEach((h,m)=>{m===0?r.moveTo(h.x,h.y):r.lineTo(h.x,h.y)}),r.closePath(),r.strokeStyle="rgba(34, 211, 238, 0.8)",r.lineWidth=f,r.setLineDash([6/c,4/c]),r.stroke(),r.save(),r.translate(i.cx,i.cy),r.rotate(i.rot),r.beginPath(),l.forEach((h,m)=>{m===0?r.moveTo(h.x,h.y):r.lineTo(h.x,h.y)}),r.closePath(),r.fillStyle="rgba(244, 63, 94, 0.2)",r.fill(),r.strokeStyle="rgba(244, 63, 94, 1.0)",r.lineWidth=f,r.setLineDash([]),r.stroke(),r.restore()},hx=(r,t,i,s)=>{r.beginPath(),r.arc(t,i,5/s,0,Math.PI*2),r.fillStyle="#fff",r.fill(),r.stroke()},ew=(r,t)=>{if(r.strokeStyle="#f472b6",r.lineWidth=2,r.beginPath(),t.length>0){r.moveTo(t[0].x,t[0].y);for(let i of t)r.lineTo(i.x,i.y)}r.stroke()},nw=(r,t,i,s)=>{let l=0,c=0;r.strokeStyle="rgba(255, 255, 255, 0.2)",r.lineWidth=1;for(let f=0;f<s;f++){const h=l,m=c,{freq:p,amp:g,phase:_}=t[f];l+=g*Math.cos(p*i+_),c+=g*Math.sin(p*i+_),r.beginPath(),r.strokeStyle="rgba(255, 255, 255, 0.1)",r.arc(h,m,g,0,Math.PI*2),r.stroke(),r.beginPath(),r.strokeStyle="rgba(255, 255, 255, 0.3)",r.moveTo(h,m),r.lineTo(l,c),r.stroke()}return{x:l,y:c}},iw=(r,t,i,s,l,c,f,h,m)=>{const{ctx:p,overlayCtx:g,width:_,height:x,dpr:y,zoomScale:b}=r;if(g.save(),g.setTransform(y,0,0,y,0,0),g.clearRect(0,0,_,x),g.restore(),c)return p.save(),p.setTransform(y,0,0,y,_*y/2,x*y/2),ew(p,f),p.restore(),g.fillStyle="#fff",g.font="12px monospace",g.fillText("Release to Transform",_/2-60,x-50),!0;if(s.length>0){const E=Math.min(t.fourierCount,s.length),{x:M,y:v}=nw(g,s,i.time,E);if(p.strokeStyle=t.colorMode===jn.Rainbow?`hsl(${i.time*180/Math.PI%360}, 100%, 60%)`:t.color,p.lineWidth=t.lineWidth/b,p.globalAlpha=t.opacity,l.length>0){const R=l[l.length-1];p.beginPath(),p.moveTo(R.x,R.y),p.lineTo(M,v),p.stroke()}l.push({x:M,y:v}),h(i.time/(Math.PI*2)*100);const C=Math.PI*2/Math.max(1,s.length);if(i.time+=C,i.time>=Math.PI*2)return i.time=Math.PI*2,h(100),m(),!1}else g.fillStyle="#64748b",g.font="14px sans-serif",g.textAlign="center",g.fillText("Draw a shape here",0,0);return!0},aw=(r,t,i,s,l,c)=>{const{ctx:f,overlayCtx:h,width:m,height:p,dpr:g,zoomScale:_}=r;if(s.length===0)return h.save(),h.setTransform(g,0,0,g,0,0),h.clearRect(0,0,m,p),h.fillStyle="#64748b",h.font="14px sans-serif",h.textAlign="center",h.fillText("Processing Text...",m/2,p/2),h.restore(),!0;i.pointsAccumulator+=t.drawSpeed*(s.length/300);let x=Math.floor(i.pointsAccumulator);if(x<1)return!0;i.pointsAccumulator-=x,x=Math.min(x,500),f.globalAlpha=t.opacity;let y=0;for(f.beginPath(),f.moveTo(i.lastX,i.lastY);y<x;){if(i.textPathIndex>=s.length-1)return l(100),f.stroke(),c(),!1;i.textPathIndex++;const b=s[i.textPathIndex];if(b.penUp)f.stroke(),f.beginPath(),f.moveTo(b.x,b.y);else{if(t.colorMode===jn.Rainbow){f.stroke(),f.beginPath(),f.moveTo(i.lastX,i.lastY);const E=i.textPathIndex/s.length*360%360;f.strokeStyle=`hsl(${E}, 100%, 60%)`}f.lineTo(b.x,b.y)}i.lastX=b.x,i.lastY=b.y,y++}return t.colorMode!==jn.Rainbow&&(f.strokeStyle=t.color),f.stroke(),l(i.textPathIndex/s.length*100),h.save(),h.setTransform(g,0,0,g,0,0),h.clearRect(0,0,m,p),h.restore(),hx(h,i.lastX,i.lastY,_),!0},sw=(r,t,i,s,l,c,f,h)=>{const{ctx:m,overlayCtx:p,width:g,height:_,dpr:x,zoomScale:y}=r;m.globalAlpha=t.opacity,i.pointsAccumulator+=t.drawSpeed;let b=Math.floor(i.pointsAccumulator);if(b<1&&i.currentDist<c)return!0;i.pointsAccumulator-=b,b=Math.min(b,2e3);let E=0;m.beginPath(),m.moveTo(i.lastX,i.lastY);let M=0,v=0,C=0;for(;E<b&&i.currentDist<c;){i.currentDist+=t.resolution;const R=gs(s,i.currentDist),w=gs(l,i.currentDist);C=t.type===Fi.Hypotrochoid?R.angle-w.angle:R.angle+Math.PI-w.angle,M=R.x-(w.x*Math.cos(C)-w.y*Math.sin(C)),v=R.y-(w.x*Math.sin(C)+w.y*Math.cos(C));const P=M+t.penOffset*Math.cos(C),O=v+t.penOffset*Math.sin(C);t.colorMode===jn.Rainbow?(m.strokeStyle=`hsl(${C*180/Math.PI%360}, 100%, 60%)`,m.lineTo(P,O),m.stroke(),m.beginPath(),m.moveTo(P,O)):m.lineTo(P,O),i.lastX=P,i.lastY=O,E++}return t.colorMode!==jn.Rainbow&&(m.strokeStyle=t.color,m.stroke()),f(i.currentDist/c*100),p.save(),p.setTransform(x,0,0,x,0,0),p.clearRect(0,0,g,_),p.restore(),tw(p,t,{cx:M,cy:v,rot:C},s,l,y),hx(p,i.lastX,i.lastY,y),i.currentDist>=c?(h(),!1):!0},rw=({traceRef:r,overlayRef:t,config:i,width:s,height:l,isPlaying:c,fourierData:f,textPath:h,statorPath:m,rotorPath:p,maxSpiroRadius:g,drawing:_,userPath:x,fourierPath:y,onProgress:b,onStop:E})=>{const M=It.useRef(0),v=It.useRef(-1),C=It.useRef({lastX:0,lastY:0,currentDist:0,pointsAccumulator:0,textPathIndex:0,time:0});It.useEffect(()=>{var w;if(C.current={lastX:0,lastY:0,currentDist:0,pointsAccumulator:0,textPathIndex:0,time:0},i.generatorMode===ge.Spirograph&&m.length>0){const P=gs(m,0),O=gs(p,0),N=i.type===Fi.Hypotrochoid?P.angle-O.angle:P.angle+Math.PI-O.angle,H=P.x-(O.x*Math.cos(N)-O.y*Math.sin(N)),A=P.y-(O.x*Math.sin(N)+O.y*Math.cos(N));C.current.lastX=H+i.penOffset*Math.cos(N),C.current.lastY=A+i.penOffset*Math.sin(N)}else i.generatorMode===ge.Text&&h.length>0&&(C.current.lastX=h[0].x,C.current.lastY=h[0].y);const R=(w=r.current)==null?void 0:w.getContext("2d");if(R&&s>0){const P=window.devicePixelRatio||1;R.save(),R.setTransform(P,0,0,P,0,0),R.fillStyle="#0f172a",R.fillRect(0,0,s,l),R.restore()}b&&b(0)},[i.generatorMode,i.type,i.textPhrase,i.statorShape,i.rotorShape,i.rotations,i.penOffset,m,p,h,s,l]),It.useEffect(()=>{const R=r.current,w=t.current;if(!R||!w||s<=0||l<=0)return;const P=R.getContext("2d"),O=w.getContext("2d");if(!P||!O)return;const N=window.devicePixelRatio||1;R.width=s*N,R.height=l*N,w.width=s*N,w.height=l*N;const H=Math.min(s,l)/2/g;(()=>{const q=s*N/2,Y=l*N/2;P.setTransform(N,0,0,N,q,Y),P.scale(H,H),O.setTransform(N,0,0,N,q,Y),O.scale(H,H),P.save(),P.setTransform(N,0,0,N,0,0),P.fillStyle="#0f172a",P.fillRect(0,0,s,l),P.restore(),P.lineWidth=i.lineWidth/H,P.lineCap="round",P.lineJoin="round",O.lineWidth=1})();const D=q=>{if(b){const Y=Math.floor(q);Y!==v.current&&(v.current=Y,b(Math.min(100,Math.max(0,Y))))}},G=()=>{var et;if(!c&&!_){M.current=requestAnimationFrame(G);return}const q={ctx:P,overlayCtx:O,width:s,height:l,dpr:N,zoomScale:H};let Y=!0;if(i.generatorMode===ge.Fourier)Y=iw(q,i,C.current,f,y,_,x,D,()=>E==null?void 0:E());else if(i.generatorMode===ge.Text)Y=aw(q,i,C.current,h,D,()=>E==null?void 0:E());else{const I=(((et=m[m.length-1])==null?void 0:et.dist)||1)*i.rotations;Y=sw(q,i,C.current,m,p,I,D,()=>E==null?void 0:E())}Y&&(M.current=requestAnimationFrame(G))};return M.current=requestAnimationFrame(G),()=>cancelAnimationFrame(M.current)},[i,s,l,c,_,x,f,h,m,p,g])},ow=({config:r,width:t,height:i,isPlaying:s,isRecording:l=!1,onStop:c,fourierData:f,setFourierData:h,downloadTrigger:m=0,onProgress:p})=>{const g=It.useRef(null),_=It.useRef(null);fx({canvasRef:g,isRecording:l,format:r.videoFormat,onStop:c});const{drawing:x,userPath:y,fourierPath:b,handlers:E}=$R(r,t,i,_,h),M=It.useMemo(()=>La(r.statorShape,r.outerRadius),[r.statorShape,r.outerRadius]),v=It.useMemo(()=>La(r.rotorShape,r.innerRadius),[r.rotorShape,r.innerRadius]),C=It.useMemo(()=>r.generatorMode===ge.Text?ep(r.textPhrase,1):[],[r.generatorMode,r.textPhrase]),R=It.useMemo(()=>{if(r.generatorMode===ge.Text){if(C.length===0)return 100;let O=0;for(const N of C){const H=Math.hypot(N.x,N.y);H>O&&(O=H)}return O*1.1||100}if(r.generatorMode===ge.Fourier){if(f.length>0){let O=0;const N=200,H=Math.min(r.fourierCount,f.length);for(let A=0;A<N;A++){const D=A/N*Math.PI*2;let G=0,q=0;for(let Y=0;Y<H;Y++){const{freq:et,amp:it,phase:I}=f[Y];G+=it*Math.cos(et*D+I),q+=it*Math.sin(et*D+I)}O=Math.max(O,Math.sqrt(G*G+q*q))}return O*1.1||100}return 150}const w=Math.max(0,...M.map(O=>Math.hypot(O.x,O.y))),P=Math.max(0,...v.map(O=>Math.hypot(O.x,O.y)));return r.type===Fi.Hypotrochoid?Math.max(w,Math.abs(w-P)+r.penOffset):w+P+r.penOffset},[M,v,r.type,r.penOffset,r.generatorMode,f,r.fourierCount,C]);return rw({traceRef:g,overlayRef:_,config:r,width:t,height:i,isPlaying:s,fourierData:f,textPath:C,statorPath:M,rotorPath:v,maxSpiroRadius:R,drawing:x,userPath:y,fourierPath:b,onProgress:p,onStop:c}),X.jsxs("div",{className:"relative w-full h-full touch-none",children:[X.jsx("canvas",{ref:g,className:"absolute inset-0 block rounded-lg shadow-2xl bg-slate-900",style:{width:"100%",height:"100%"}}),X.jsx("canvas",{ref:_,className:`absolute inset-0 block rounded-lg ${r.generatorMode===ge.Fourier?"cursor-crosshair":"pointer-events-none"}`,style:{width:"100%",height:"100%"},...E})]})},lw=({config:r,redrawTrigger:t,downloadTrigger:i,isRecording:s,isPlaying:l,onStop:c,isSidebarOpen:f,onOpenSidebar:h,fourierData:m,setFourierData:p})=>{const g=It.useRef(null),[_,x]=It.useState({width:0,height:0}),[y,b]=It.useState(0);return It.useEffect(()=>{if(!g.current)return;const E=new ResizeObserver(M=>{for(const v of M){const{width:C,height:R}=v.contentRect;x(w=>Math.abs(w.width-C)<1&&Math.abs(w.height-R)<1?w:{width:C,height:R})}});return E.observe(g.current),()=>E.disconnect()},[]),X.jsxs("div",{className:"flex-1 relative bg-slate-950 flex flex-col min-h-0 w-full",children:[X.jsx("div",{className:"flex-1 overflow-hidden p-0 relative",ref:g,children:_.width>0&&_.height>0&&X.jsx(X.Fragment,{children:r.renderMode===Ra.ThreeD?X.jsx(JR,{config:r,width:_.width,height:_.height,isPlaying:l,isRecording:s,onStop:c,fourierData:m,redrawTrigger:t,downloadTrigger:i,onProgress:b},"canvas-3d-view"):X.jsx(ow,{config:r,width:_.width,height:_.height,isPlaying:l,isRecording:s,onStop:c,fourierData:m,setFourierData:p,downloadTrigger:i,onProgress:b},`${t}-2d`)})}),X.jsx("div",{className:"h-8 bg-slate-900/50 text-slate-500 text-[10px] md:text-xs flex items-center justify-center border-t border-slate-800/50 shrink-0 z-10 select-none",children:s?X.jsx("span",{className:"text-red-400 font-bold animate-pulse",children:"● Recording Video..."}):r.renderMode===Ra.ThreeD?X.jsxs("span",{children:["Drag to Rotate • Scroll to Zoom • ",l?`Drawing... ${Math.round(y)}%`:"Paused"]}):X.jsxs("span",{children:["2D View Mode • ",l?`Drawing... ${Math.round(y)}%`:"Paused"]})})]})},cw=({isOpen:r,onClose:t,onStartRecording:i})=>{const[s,l]=It.useState("webm-vp9"),[c,f]=It.useState({});if(It.useEffect(()=>{typeof MediaRecorder>"u"||f({"webm-vp9":MediaRecorder.isTypeSupported("video/webm;codecs=vp9"),"webm-vp8":MediaRecorder.isTypeSupported("video/webm;codecs=vp8"),mp4:MediaRecorder.isTypeSupported("video/mp4")})},[]),!r)return null;const h=()=>{i(s)};return X.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200",children:X.jsxs("div",{className:"bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200",children:[X.jsxs("div",{className:"p-5 border-b border-slate-800 flex justify-between items-center bg-slate-800/50",children:[X.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[X.jsx(Rv,{size:20,className:"text-red-500"}),"Start Recording"]}),X.jsx("button",{onClick:t,className:"text-slate-400 hover:text-white transition-colors",children:X.jsx(ou,{size:20})})]}),X.jsxs("div",{className:"p-6 space-y-6",children:[X.jsxs("div",{className:"space-y-3",children:[X.jsx("label",{className:"text-sm font-semibold text-slate-300 block",children:"Select Video Format"}),X.jsx("div",{className:"grid gap-2",children:[{id:"webm-vp9",label:"WebM (VP9)",desc:"Best quality, smaller size. Good for Chrome/Firefox."},{id:"mp4",label:"MP4 (H.264)",desc:"Best compatibility. Works everywhere (Safari/Mobile)."},{id:"webm-vp8",label:"WebM (VP8)",desc:"Legacy support for older browsers."}].map(m=>X.jsxs("button",{onClick:()=>l(m.id),className:`relative p-3 rounded-xl border text-left transition-all group ${s===m.id?"bg-red-500/10 border-red-500 ring-1 ring-red-500":"bg-slate-800 border-slate-700 hover:border-slate-500"}`,children:[X.jsxs("div",{className:"flex justify-between items-center mb-1",children:[X.jsx("span",{className:`font-semibold ${s===m.id?"text-red-400":"text-slate-200"}`,children:m.label}),!c[m.id]&&X.jsxs("span",{className:"text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full flex items-center gap-1",children:[X.jsx(WM,{size:10})," Unsupported"]})]}),X.jsx("div",{className:"text-xs text-slate-400 group-hover:text-slate-300",children:m.desc})]},m.id))})]}),X.jsxs("div",{className:"bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 text-xs text-blue-200",children:[X.jsx("strong",{children:"Note:"})," Recording will restart the animation from the beginning to capture the full loop."]})]}),X.jsxs("div",{className:"p-5 border-t border-slate-800 bg-slate-800/30 flex justify-end gap-3",children:[X.jsx("button",{onClick:t,className:"px-4 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors",children:"Cancel"}),X.jsxs("button",{onClick:h,className:"px-6 py-2 rounded-lg text-sm font-bold text-white bg-red-600 hover:bg-red-500 shadow-lg shadow-red-900/20 transition-all active:scale-95 flex items-center gap-2",children:[X.jsx("div",{className:"w-2 h-2 bg-white rounded-full animate-pulse"}),"Launch & Record"]})]})]})})},uw=()=>{const{config:r,setConfig:t,isSidebarOpen:i,setSidebarOpen:s,redrawTrigger:l,downloadTrigger:c,isPlaying:f,stop:h,isRecording:m,isRecordingModalOpen:p,setIsRecordingModalOpen:g,handlePlay:_,togglePause:x,toggleProjection:y,toggleTrace:b,handleDownload:E,handleOpenRecordingModal:M,handleStartRecording:v,fourierData:C,setFourierData:R}=NM();return X.jsxs("div",{className:"h-screen w-screen flex flex-col md:flex-row bg-slate-950 overflow-hidden font-sans",children:[X.jsx(cw,{isOpen:p,onClose:()=>g(!1),onStartRecording:v}),X.jsx(BS,{isSidebarOpen:i,isPlaying:f,onToggleSidebar:()=>s(!i),onTogglePause:x,onPlay:_}),X.jsx(XS,{isOpen:i,setIsOpen:s,config:r,setConfig:t,fourierData:C,setFourierData:R}),X.jsxs("div",{className:"flex-1 relative flex flex-col min-h-0 w-full transition-all duration-300",children:[X.jsx("button",{onClick:()=>s(!i),className:"absolute top-4 left-4 z-20 p-2 bg-slate-800/80 backdrop-blur text-white rounded-lg shadow-lg border border-slate-700 hover:bg-slate-700 transition-all hidden md:flex items-center justify-center group",title:i?"Close Sidebar":"Open Sidebar",children:i?X.jsx(lS,{size:20,className:"text-slate-400 group-hover:text-white"}):X.jsx(uS,{size:20})}),X.jsx(WS,{showProjection:r.showProjection,showTrace:r.showTrace,isPlaying:f,isRecording:m,onToggleProjection:y,onToggleTrace:b,onTogglePause:x,onPlay:_,onDownload:E,onToggleRecording:M}),X.jsx(lw,{config:r,redrawTrigger:l,downloadTrigger:c,isRecording:m,isPlaying:f,onStop:h,isSidebarOpen:i,onOpenSidebar:()=>s(!0),fourierData:C,setFourierData:R})]}),X.jsx(jS,{})]})},fw=document.getElementById("root"),hw=wM.createRoot(fw);hw.render(X.jsx(uw,{}));
