/*!
 * modernizr v3.5.0
 * Build https://modernizr.com/download?-csspointerevents-csspositionsticky-cssremunit-csstransforms-csstransforms3d-cssvwunit-flexbox-inlinesvg-svg-touchevents-mq-setclasses-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */
!function(e,t,n){function r(e,t){return typeof e===t}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):x?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function o(){var e=t.body;return e||(e=s(x?"svg":"body"),e.fake=!0),e}function i(e,n,r,i){var a,l,u,f,c="modernizr",d=s("div"),p=o();if(parseInt(r,10))for(;r--;)u=s("div"),u.id=i?i[r]:c+(r+1),d.appendChild(u);return a=s("style"),a.type="text/css",a.id="s"+c,(p.fake?p:d).appendChild(a),p.appendChild(d),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),d.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",f=C.style.overflow,C.style.overflow="hidden",C.appendChild(p)),l=n(d,e),p.fake?(p.parentNode.removeChild(p),C.style.overflow=f,C.offsetHeight):d.parentNode.removeChild(d),!!l}function a(e,t){return!!~(""+e).indexOf(t)}function l(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function u(t,n,r){var s;if("getComputedStyle"in e){s=getComputedStyle.call(e,t,n);var o=e.console;if(null!==s)r&&(s=s.getPropertyValue(r));else if(o){var i=o.error?"error":"log";o[i].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else s=!n&&t.currentStyle&&t.currentStyle[r];return s}function f(t,r){var s=t.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(l(t[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];s--;)o.push("("+l(t[s])+":"+r+")");return o=o.join(" or "),i("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==u(e,null,"position")})}return n}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function d(e,t,o,i){function l(){d&&(delete E.style,delete E.modElem)}if(i=!r(i,"undefined")&&i,!r(o,"undefined")){var u=f(e,o);if(!r(u,"undefined"))return u}for(var d,p,m,v,h,g=["modernizr","tspan","samp"];!E.style&&g.length;)d=!0,E.modElem=s(g.shift()),E.style=E.modElem.style;for(m=e.length,p=0;p<m;p++)if(v=e[p],h=E.style[v],a(v,"-")&&(v=c(v)),E.style[v]!==n){if(i||r(o,"undefined"))return l(),"pfx"!=t||v;try{E.style[v]=o}catch(e){}if(E.style[v]!=h)return l(),"pfx"!=t||v}return l(),!1}function p(e,t){return function(){return e.apply(t,arguments)}}function m(e,t,n){var s;for(var o in e)if(e[o]in t)return!1===n?e[o]:(s=t[e[o]],r(s,"function")?p(s,n||t):s);return!1}function v(e,t,n,s,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+P.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?d(a,t,s,o):(a=(e+" "+j.join(i+" ")+i).split(" "),m(a,t,n))}function h(e,t,r){return v(e,n,n,t,r)}var g=[],y={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){g.push({name:e,fn:t,options:n})},addAsyncTest:function(e){g.push({name:null,fn:e})}},w=function(){};w.prototype=y,w=new w;var S=[],C=t.documentElement,x="svg"===C.nodeName.toLowerCase(),T=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return i("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();y.mq=T,w.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var b=y._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];y._prefixes=b;var z=y.testStyles=i;w.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",b.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");z(r,function(e){n=9===e.offsetTop})}return n});var _="Moz O ms Webkit",P=y._config.usePrefixes?_.split(" "):[];y._cssomPrefixes=P;var k={elem:s("modernizr")};w._q.push(function(){delete k.elem});var E={style:k.elem.style};w._q.unshift(function(){delete E.style});var j=y._config.usePrefixes?_.toLowerCase().split(" "):[];y._domPrefixes=j,y.testAllProps=v,y.testAllProps=h,w.addTest("flexbox",h("flexBasis","1px",!0)),w.addTest("csspointerevents",function(){var e=s("a").style;return e.cssText="pointer-events:auto","auto"===e.pointerEvents}),w.addTest("csspositionsticky",function(){var e="position:",t=s("a"),n=t.style;return n.cssText=e+b.join("sticky;"+e).slice(0,-e.length),-1!==n.position.indexOf("sticky")}),w.addTest("cssremunit",function(){var e=s("a").style;try{e.fontSize="3rem"}catch(e){}return/rem/.test(e.fontSize)}),w.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&h("transform","scale(1)",!0)});var N="CSS"in e&&"supports"in e.CSS,A="supportsCSS"in e;w.addTest("supports",N||A),w.addTest("csstransforms3d",function(){var e=!!h("perspective","1px",!0),t=w._config.usePrefixes;if(e&&(!t||"webkitPerspective"in C.style)){var n;w.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",z("#modernizr{width:0;height:0}"+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),z("#modernizr { width: 50vw; }",function(t){var n=parseInt(e.innerWidth/2,10),r=parseInt(u(t,null,"width"),10);w.addTest("cssvwunit",r==n)}),w.addTest("inlinesvg",function(){var e=s("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)}),function(){var e,t,n,s,o,i,a;for(var l in g)if(g.hasOwnProperty(l)){if(e=[],t=g[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(s=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)i=e[o],a=i.split("."),1===a.length?w[a[0]]=s:(!w[a[0]]||w[a[0]]instanceof Boolean||(w[a[0]]=new Boolean(w[a[0]])),w[a[0]][a[1]]=s),S.push((s?"":"no-")+a.join("-"))}}(),function(e){var t=C.className,n=w._config.classPrefix||"";if(x&&(t=t.baseVal),w._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}w._config.enableClasses&&(t+=" "+n+e.join(" "+n),x?C.className.baseVal=t:C.className=t)}(S),delete y.addTest,delete y.addAsyncTest;for(var q=0;q<w._q.length;q++)w._q[q]();e.Modernizr=w}(window,document);
/*
 * This combined file was created by the DataTables downloader builder:
 *   https://datatables.net/download
 *
 * To rebuild or modify this file with the latest versions of the included
 * software please visit:
 *   https://datatables.net/download/#bs/jq-2.2.4/dt-1.10.15
 *
 * Included libraries:
 *   jQuery 2.2.4, DataTables 1.10.15
 */

/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});


/*!
 DataTables 1.10.15
 ©2008-2017 SpryMedia Ltd - datatables.net/license
*/
(function(h){"function"===typeof define&&define.amd?define(["jquery"],function(E){return h(E,window,document)}):"object"===typeof exports?module.exports=function(E,H){E||(E=window);H||(H="undefined"!==typeof window?require("jquery"):require("jquery")(E));return h(H,E,E.document)}:h(jQuery,window,document)})(function(h,E,H,k){function Y(a){var b,c,d={};h.each(a,function(e){if((b=e.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(b[1]+" "))c=e.replace(b[0],b[2].toLowerCase()),
d[c]=e,"o"===b[1]&&Y(a[e])});a._hungarianMap=d}function J(a,b,c){a._hungarianMap||Y(a);var d;h.each(b,function(e){d=a._hungarianMap[e];if(d!==k&&(c||b[d]===k))"o"===d.charAt(0)?(b[d]||(b[d]={}),h.extend(!0,b[d],b[e]),J(a[d],b[d],c)):b[d]=b[e]})}function Fa(a){var b=m.defaults.oLanguage,c=a.sZeroRecords;!a.sEmptyTable&&(c&&"No data available in table"===b.sEmptyTable)&&F(a,a,"sZeroRecords","sEmptyTable");!a.sLoadingRecords&&(c&&"Loading..."===b.sLoadingRecords)&&F(a,a,"sZeroRecords","sLoadingRecords");
a.sInfoThousands&&(a.sThousands=a.sInfoThousands);(a=a.sDecimal)&&fb(a)}function gb(a){A(a,"ordering","bSort");A(a,"orderMulti","bSortMulti");A(a,"orderClasses","bSortClasses");A(a,"orderCellsTop","bSortCellsTop");A(a,"order","aaSorting");A(a,"orderFixed","aaSortingFixed");A(a,"paging","bPaginate");A(a,"pagingType","sPaginationType");A(a,"pageLength","iDisplayLength");A(a,"searching","bFilter");"boolean"===typeof a.sScrollX&&(a.sScrollX=a.sScrollX?"100%":"");"boolean"===typeof a.scrollX&&(a.scrollX=
a.scrollX?"100%":"");if(a=a.aoSearchCols)for(var b=0,c=a.length;b<c;b++)a[b]&&J(m.models.oSearch,a[b])}function hb(a){A(a,"orderable","bSortable");A(a,"orderData","aDataSort");A(a,"orderSequence","asSorting");A(a,"orderDataType","sortDataType");var b=a.aDataSort;"number"===typeof b&&!h.isArray(b)&&(a.aDataSort=[b])}function ib(a){if(!m.__browser){var b={};m.__browser=b;var c=h("<div/>").css({position:"fixed",top:0,left:-1*h(E).scrollLeft(),height:1,width:1,overflow:"hidden"}).append(h("<div/>").css({position:"absolute",
top:1,left:1,width:100,overflow:"scroll"}).append(h("<div/>").css({width:"100%",height:10}))).appendTo("body"),d=c.children(),e=d.children();b.barWidth=d[0].offsetWidth-d[0].clientWidth;b.bScrollOversize=100===e[0].offsetWidth&&100!==d[0].clientWidth;b.bScrollbarLeft=1!==Math.round(e.offset().left);b.bBounding=c[0].getBoundingClientRect().width?!0:!1;c.remove()}h.extend(a.oBrowser,m.__browser);a.oScroll.iBarWidth=m.__browser.barWidth}function jb(a,b,c,d,e,f){var g,j=!1;c!==k&&(g=c,j=!0);for(;d!==
e;)a.hasOwnProperty(d)&&(g=j?b(g,a[d],d,a):a[d],j=!0,d+=f);return g}function Ga(a,b){var c=m.defaults.column,d=a.aoColumns.length,c=h.extend({},m.models.oColumn,c,{nTh:b?b:H.createElement("th"),sTitle:c.sTitle?c.sTitle:b?b.innerHTML:"",aDataSort:c.aDataSort?c.aDataSort:[d],mData:c.mData?c.mData:d,idx:d});a.aoColumns.push(c);c=a.aoPreSearchCols;c[d]=h.extend({},m.models.oSearch,c[d]);la(a,d,h(b).data())}function la(a,b,c){var b=a.aoColumns[b],d=a.oClasses,e=h(b.nTh);if(!b.sWidthOrig){b.sWidthOrig=
e.attr("width")||null;var f=(e.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);f&&(b.sWidthOrig=f[1])}c!==k&&null!==c&&(hb(c),J(m.defaults.column,c),c.mDataProp!==k&&!c.mData&&(c.mData=c.mDataProp),c.sType&&(b._sManualType=c.sType),c.className&&!c.sClass&&(c.sClass=c.className),h.extend(b,c),F(b,c,"sWidth","sWidthOrig"),c.iDataSort!==k&&(b.aDataSort=[c.iDataSort]),F(b,c,"aDataSort"));var g=b.mData,j=R(g),i=b.mRender?R(b.mRender):null,c=function(a){return"string"===typeof a&&-1!==a.indexOf("@")};
b._bAttrSrc=h.isPlainObject(g)&&(c(g.sort)||c(g.type)||c(g.filter));b._setter=null;b.fnGetData=function(a,b,c){var d=j(a,b,k,c);return i&&b?i(d,b,a,c):d};b.fnSetData=function(a,b,c){return S(g)(a,b,c)};"number"!==typeof g&&(a._rowReadObject=!0);a.oFeatures.bSort||(b.bSortable=!1,e.addClass(d.sSortableNone));a=-1!==h.inArray("asc",b.asSorting);c=-1!==h.inArray("desc",b.asSorting);!b.bSortable||!a&&!c?(b.sSortingClass=d.sSortableNone,b.sSortingClassJUI=""):a&&!c?(b.sSortingClass=d.sSortableAsc,b.sSortingClassJUI=
d.sSortJUIAscAllowed):!a&&c?(b.sSortingClass=d.sSortableDesc,b.sSortingClassJUI=d.sSortJUIDescAllowed):(b.sSortingClass=d.sSortable,b.sSortingClassJUI=d.sSortJUI)}function Z(a){if(!1!==a.oFeatures.bAutoWidth){var b=a.aoColumns;Ha(a);for(var c=0,d=b.length;c<d;c++)b[c].nTh.style.width=b[c].sWidth}b=a.oScroll;(""!==b.sY||""!==b.sX)&&ma(a);s(a,null,"column-sizing",[a])}function $(a,b){var c=na(a,"bVisible");return"number"===typeof c[b]?c[b]:null}function aa(a,b){var c=na(a,"bVisible"),c=h.inArray(b,
c);return-1!==c?c:null}function ba(a){var b=0;h.each(a.aoColumns,function(a,d){d.bVisible&&"none"!==h(d.nTh).css("display")&&b++});return b}function na(a,b){var c=[];h.map(a.aoColumns,function(a,e){a[b]&&c.push(e)});return c}function Ia(a){var b=a.aoColumns,c=a.aoData,d=m.ext.type.detect,e,f,g,j,i,h,l,q,r;e=0;for(f=b.length;e<f;e++)if(l=b[e],r=[],!l.sType&&l._sManualType)l.sType=l._sManualType;else if(!l.sType){g=0;for(j=d.length;g<j;g++){i=0;for(h=c.length;i<h;i++){r[i]===k&&(r[i]=B(a,i,e,"type"));
q=d[g](r[i],a);if(!q&&g!==d.length-1)break;if("html"===q)break}if(q){l.sType=q;break}}l.sType||(l.sType="string")}}function kb(a,b,c,d){var e,f,g,j,i,n,l=a.aoColumns;if(b)for(e=b.length-1;0<=e;e--){n=b[e];var q=n.targets!==k?n.targets:n.aTargets;h.isArray(q)||(q=[q]);f=0;for(g=q.length;f<g;f++)if("number"===typeof q[f]&&0<=q[f]){for(;l.length<=q[f];)Ga(a);d(q[f],n)}else if("number"===typeof q[f]&&0>q[f])d(l.length+q[f],n);else if("string"===typeof q[f]){j=0;for(i=l.length;j<i;j++)("_all"==q[f]||h(l[j].nTh).hasClass(q[f]))&&
d(j,n)}}if(c){e=0;for(a=c.length;e<a;e++)d(e,c[e])}}function N(a,b,c,d){var e=a.aoData.length,f=h.extend(!0,{},m.models.oRow,{src:c?"dom":"data",idx:e});f._aData=b;a.aoData.push(f);for(var g=a.aoColumns,j=0,i=g.length;j<i;j++)g[j].sType=null;a.aiDisplayMaster.push(e);b=a.rowIdFn(b);b!==k&&(a.aIds[b]=f);(c||!a.oFeatures.bDeferRender)&&Ja(a,e,c,d);return e}function oa(a,b){var c;b instanceof h||(b=h(b));return b.map(function(b,e){c=Ka(a,e);return N(a,c.data,e,c.cells)})}function B(a,b,c,d){var e=a.iDraw,
f=a.aoColumns[c],g=a.aoData[b]._aData,j=f.sDefaultContent,i=f.fnGetData(g,d,{settings:a,row:b,col:c});if(i===k)return a.iDrawError!=e&&null===j&&(K(a,0,"Requested unknown parameter "+("function"==typeof f.mData?"{function}":"'"+f.mData+"'")+" for row "+b+", column "+c,4),a.iDrawError=e),j;if((i===g||null===i)&&null!==j&&d!==k)i=j;else if("function"===typeof i)return i.call(g);return null===i&&"display"==d?"":i}function lb(a,b,c,d){a.aoColumns[c].fnSetData(a.aoData[b]._aData,d,{settings:a,row:b,col:c})}
function La(a){return h.map(a.match(/(\\.|[^\.])+/g)||[""],function(a){return a.replace(/\\\./g,".")})}function R(a){if(h.isPlainObject(a)){var b={};h.each(a,function(a,c){c&&(b[a]=R(c))});return function(a,c,f,g){var j=b[c]||b._;return j!==k?j(a,c,f,g):a}}if(null===a)return function(a){return a};if("function"===typeof a)return function(b,c,f,g){return a(b,c,f,g)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var c=function(a,b,f){var g,j;if(""!==f){j=La(f);
for(var i=0,n=j.length;i<n;i++){f=j[i].match(ca);g=j[i].match(V);if(f){j[i]=j[i].replace(ca,"");""!==j[i]&&(a=a[j[i]]);g=[];j.splice(0,i+1);j=j.join(".");if(h.isArray(a)){i=0;for(n=a.length;i<n;i++)g.push(c(a[i],b,j))}a=f[0].substring(1,f[0].length-1);a=""===a?g:g.join(a);break}else if(g){j[i]=j[i].replace(V,"");a=a[j[i]]();continue}if(null===a||a[j[i]]===k)return k;a=a[j[i]]}}return a};return function(b,e){return c(b,e,a)}}return function(b){return b[a]}}function S(a){if(h.isPlainObject(a))return S(a._);
if(null===a)return function(){};if("function"===typeof a)return function(b,d,e){a(b,"set",d,e)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var b=function(a,d,e){var e=La(e),f;f=e[e.length-1];for(var g,j,i=0,n=e.length-1;i<n;i++){g=e[i].match(ca);j=e[i].match(V);if(g){e[i]=e[i].replace(ca,"");a[e[i]]=[];f=e.slice();f.splice(0,i+1);g=f.join(".");if(h.isArray(d)){j=0;for(n=d.length;j<n;j++)f={},b(f,d[j],g),a[e[i]].push(f)}else a[e[i]]=d;return}j&&(e[i]=e[i].replace(V,
""),a=a[e[i]](d));if(null===a[e[i]]||a[e[i]]===k)a[e[i]]={};a=a[e[i]]}if(f.match(V))a[f.replace(V,"")](d);else a[f.replace(ca,"")]=d};return function(c,d){return b(c,d,a)}}return function(b,d){b[a]=d}}function Ma(a){return D(a.aoData,"_aData")}function pa(a){a.aoData.length=0;a.aiDisplayMaster.length=0;a.aiDisplay.length=0;a.aIds={}}function qa(a,b,c){for(var d=-1,e=0,f=a.length;e<f;e++)a[e]==b?d=e:a[e]>b&&a[e]--; -1!=d&&c===k&&a.splice(d,1)}function da(a,b,c,d){var e=a.aoData[b],f,g=function(c,d){for(;c.childNodes.length;)c.removeChild(c.firstChild);
c.innerHTML=B(a,b,d,"display")};if("dom"===c||(!c||"auto"===c)&&"dom"===e.src)e._aData=Ka(a,e,d,d===k?k:e._aData).data;else{var j=e.anCells;if(j)if(d!==k)g(j[d],d);else{c=0;for(f=j.length;c<f;c++)g(j[c],c)}}e._aSortData=null;e._aFilterData=null;g=a.aoColumns;if(d!==k)g[d].sType=null;else{c=0;for(f=g.length;c<f;c++)g[c].sType=null;Na(a,e)}}function Ka(a,b,c,d){var e=[],f=b.firstChild,g,j,i=0,n,l=a.aoColumns,q=a._rowReadObject,d=d!==k?d:q?{}:[],r=function(a,b){if("string"===typeof a){var c=a.indexOf("@");
-1!==c&&(c=a.substring(c+1),S(a)(d,b.getAttribute(c)))}},m=function(a){if(c===k||c===i)j=l[i],n=h.trim(a.innerHTML),j&&j._bAttrSrc?(S(j.mData._)(d,n),r(j.mData.sort,a),r(j.mData.type,a),r(j.mData.filter,a)):q?(j._setter||(j._setter=S(j.mData)),j._setter(d,n)):d[i]=n;i++};if(f)for(;f;){g=f.nodeName.toUpperCase();if("TD"==g||"TH"==g)m(f),e.push(f);f=f.nextSibling}else{e=b.anCells;f=0;for(g=e.length;f<g;f++)m(e[f])}if(b=b.firstChild?b:b.nTr)(b=b.getAttribute("id"))&&S(a.rowId)(d,b);return{data:d,cells:e}}
function Ja(a,b,c,d){var e=a.aoData[b],f=e._aData,g=[],j,i,n,l,q;if(null===e.nTr){j=c||H.createElement("tr");e.nTr=j;e.anCells=g;j._DT_RowIndex=b;Na(a,e);l=0;for(q=a.aoColumns.length;l<q;l++){n=a.aoColumns[l];i=c?d[l]:H.createElement(n.sCellType);i._DT_CellIndex={row:b,column:l};g.push(i);if((!c||n.mRender||n.mData!==l)&&(!h.isPlainObject(n.mData)||n.mData._!==l+".display"))i.innerHTML=B(a,b,l,"display");n.sClass&&(i.className+=" "+n.sClass);n.bVisible&&!c?j.appendChild(i):!n.bVisible&&c&&i.parentNode.removeChild(i);
n.fnCreatedCell&&n.fnCreatedCell.call(a.oInstance,i,B(a,b,l),f,b,l)}s(a,"aoRowCreatedCallback",null,[j,f,b])}e.nTr.setAttribute("role","row")}function Na(a,b){var c=b.nTr,d=b._aData;if(c){var e=a.rowIdFn(d);e&&(c.id=e);d.DT_RowClass&&(e=d.DT_RowClass.split(" "),b.__rowc=b.__rowc?sa(b.__rowc.concat(e)):e,h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));d.DT_RowAttr&&h(c).attr(d.DT_RowAttr);d.DT_RowData&&h(c).data(d.DT_RowData)}}function mb(a){var b,c,d,e,f,g=a.nTHead,j=a.nTFoot,i=0===
h("th, td",g).length,n=a.oClasses,l=a.aoColumns;i&&(e=h("<tr/>").appendTo(g));b=0;for(c=l.length;b<c;b++)f=l[b],d=h(f.nTh).addClass(f.sClass),i&&d.appendTo(e),a.oFeatures.bSort&&(d.addClass(f.sSortingClass),!1!==f.bSortable&&(d.attr("tabindex",a.iTabIndex).attr("aria-controls",a.sTableId),Oa(a,f.nTh,b))),f.sTitle!=d[0].innerHTML&&d.html(f.sTitle),Pa(a,"header")(a,d,f,n);i&&ea(a.aoHeader,g);h(g).find(">tr").attr("role","row");h(g).find(">tr>th, >tr>td").addClass(n.sHeaderTH);h(j).find(">tr>th, >tr>td").addClass(n.sFooterTH);
if(null!==j){a=a.aoFooter[0];b=0;for(c=a.length;b<c;b++)f=l[b],f.nTf=a[b].cell,f.sClass&&h(f.nTf).addClass(f.sClass)}}function fa(a,b,c){var d,e,f,g=[],j=[],i=a.aoColumns.length,n;if(b){c===k&&(c=!1);d=0;for(e=b.length;d<e;d++){g[d]=b[d].slice();g[d].nTr=b[d].nTr;for(f=i-1;0<=f;f--)!a.aoColumns[f].bVisible&&!c&&g[d].splice(f,1);j.push([])}d=0;for(e=g.length;d<e;d++){if(a=g[d].nTr)for(;f=a.firstChild;)a.removeChild(f);f=0;for(b=g[d].length;f<b;f++)if(n=i=1,j[d][f]===k){a.appendChild(g[d][f].cell);
for(j[d][f]=1;g[d+i]!==k&&g[d][f].cell==g[d+i][f].cell;)j[d+i][f]=1,i++;for(;g[d][f+n]!==k&&g[d][f].cell==g[d][f+n].cell;){for(c=0;c<i;c++)j[d+c][f+n]=1;n++}h(g[d][f].cell).attr("rowspan",i).attr("colspan",n)}}}}function O(a){var b=s(a,"aoPreDrawCallback","preDraw",[a]);if(-1!==h.inArray(!1,b))C(a,!1);else{var b=[],c=0,d=a.asStripeClasses,e=d.length,f=a.oLanguage,g=a.iInitDisplayStart,j="ssp"==y(a),i=a.aiDisplay;a.bDrawing=!0;g!==k&&-1!==g&&(a._iDisplayStart=j?g:g>=a.fnRecordsDisplay()?0:g,a.iInitDisplayStart=
-1);var g=a._iDisplayStart,n=a.fnDisplayEnd();if(a.bDeferLoading)a.bDeferLoading=!1,a.iDraw++,C(a,!1);else if(j){if(!a.bDestroying&&!nb(a))return}else a.iDraw++;if(0!==i.length){f=j?a.aoData.length:n;for(j=j?0:g;j<f;j++){var l=i[j],q=a.aoData[l];null===q.nTr&&Ja(a,l);l=q.nTr;if(0!==e){var r=d[c%e];q._sRowStripe!=r&&(h(l).removeClass(q._sRowStripe).addClass(r),q._sRowStripe=r)}s(a,"aoRowCallback",null,[l,q._aData,c,j]);b.push(l);c++}}else c=f.sZeroRecords,1==a.iDraw&&"ajax"==y(a)?c=f.sLoadingRecords:
f.sEmptyTable&&0===a.fnRecordsTotal()&&(c=f.sEmptyTable),b[0]=h("<tr/>",{"class":e?d[0]:""}).append(h("<td />",{valign:"top",colSpan:ba(a),"class":a.oClasses.sRowEmpty}).html(c))[0];s(a,"aoHeaderCallback","header",[h(a.nTHead).children("tr")[0],Ma(a),g,n,i]);s(a,"aoFooterCallback","footer",[h(a.nTFoot).children("tr")[0],Ma(a),g,n,i]);d=h(a.nTBody);d.children().detach();d.append(h(b));s(a,"aoDrawCallback","draw",[a]);a.bSorted=!1;a.bFiltered=!1;a.bDrawing=!1}}function T(a,b){var c=a.oFeatures,d=c.bFilter;
c.bSort&&ob(a);d?ga(a,a.oPreviousSearch):a.aiDisplay=a.aiDisplayMaster.slice();!0!==b&&(a._iDisplayStart=0);a._drawHold=b;O(a);a._drawHold=!1}function pb(a){var b=a.oClasses,c=h(a.nTable),c=h("<div/>").insertBefore(c),d=a.oFeatures,e=h("<div/>",{id:a.sTableId+"_wrapper","class":b.sWrapper+(a.nTFoot?"":" "+b.sNoFooter)});a.nHolding=c[0];a.nTableWrapper=e[0];a.nTableReinsertBefore=a.nTable.nextSibling;for(var f=a.sDom.split(""),g,j,i,n,l,q,k=0;k<f.length;k++){g=null;j=f[k];if("<"==j){i=h("<div/>")[0];
n=f[k+1];if("'"==n||'"'==n){l="";for(q=2;f[k+q]!=n;)l+=f[k+q],q++;"H"==l?l=b.sJUIHeader:"F"==l&&(l=b.sJUIFooter);-1!=l.indexOf(".")?(n=l.split("."),i.id=n[0].substr(1,n[0].length-1),i.className=n[1]):"#"==l.charAt(0)?i.id=l.substr(1,l.length-1):i.className=l;k+=q}e.append(i);e=h(i)}else if(">"==j)e=e.parent();else if("l"==j&&d.bPaginate&&d.bLengthChange)g=qb(a);else if("f"==j&&d.bFilter)g=rb(a);else if("r"==j&&d.bProcessing)g=sb(a);else if("t"==j)g=tb(a);else if("i"==j&&d.bInfo)g=ub(a);else if("p"==
j&&d.bPaginate)g=vb(a);else if(0!==m.ext.feature.length){i=m.ext.feature;q=0;for(n=i.length;q<n;q++)if(j==i[q].cFeature){g=i[q].fnInit(a);break}}g&&(i=a.aanFeatures,i[j]||(i[j]=[]),i[j].push(g),e.append(g))}c.replaceWith(e);a.nHolding=null}function ea(a,b){var c=h(b).children("tr"),d,e,f,g,j,i,n,l,q,k;a.splice(0,a.length);f=0;for(i=c.length;f<i;f++)a.push([]);f=0;for(i=c.length;f<i;f++){d=c[f];for(e=d.firstChild;e;){if("TD"==e.nodeName.toUpperCase()||"TH"==e.nodeName.toUpperCase()){l=1*e.getAttribute("colspan");
q=1*e.getAttribute("rowspan");l=!l||0===l||1===l?1:l;q=!q||0===q||1===q?1:q;g=0;for(j=a[f];j[g];)g++;n=g;k=1===l?!0:!1;for(j=0;j<l;j++)for(g=0;g<q;g++)a[f+g][n+j]={cell:e,unique:k},a[f+g].nTr=d}e=e.nextSibling}}}function ta(a,b,c){var d=[];c||(c=a.aoHeader,b&&(c=[],ea(c,b)));for(var b=0,e=c.length;b<e;b++)for(var f=0,g=c[b].length;f<g;f++)if(c[b][f].unique&&(!d[f]||!a.bSortCellsTop))d[f]=c[b][f].cell;return d}function ua(a,b,c){s(a,"aoServerParams","serverParams",[b]);if(b&&h.isArray(b)){var d={},
e=/(.*?)\[\]$/;h.each(b,function(a,b){var c=b.name.match(e);c?(c=c[0],d[c]||(d[c]=[]),d[c].push(b.value)):d[b.name]=b.value});b=d}var f,g=a.ajax,j=a.oInstance,i=function(b){s(a,null,"xhr",[a,b,a.jqXHR]);c(b)};if(h.isPlainObject(g)&&g.data){f=g.data;var n=h.isFunction(f)?f(b,a):f,b=h.isFunction(f)&&n?n:h.extend(!0,b,n);delete g.data}n={data:b,success:function(b){var c=b.error||b.sError;c&&K(a,0,c);a.json=b;i(b)},dataType:"json",cache:!1,type:a.sServerMethod,error:function(b,c){var d=s(a,null,"xhr",
[a,null,a.jqXHR]);-1===h.inArray(!0,d)&&("parsererror"==c?K(a,0,"Invalid JSON response",1):4===b.readyState&&K(a,0,"Ajax error",7));C(a,!1)}};a.oAjaxData=b;s(a,null,"preXhr",[a,b]);a.fnServerData?a.fnServerData.call(j,a.sAjaxSource,h.map(b,function(a,b){return{name:b,value:a}}),i,a):a.sAjaxSource||"string"===typeof g?a.jqXHR=h.ajax(h.extend(n,{url:g||a.sAjaxSource})):h.isFunction(g)?a.jqXHR=g.call(j,b,i,a):(a.jqXHR=h.ajax(h.extend(n,g)),g.data=f)}function nb(a){return a.bAjaxDataGet?(a.iDraw++,C(a,
!0),ua(a,wb(a),function(b){xb(a,b)}),!1):!0}function wb(a){var b=a.aoColumns,c=b.length,d=a.oFeatures,e=a.oPreviousSearch,f=a.aoPreSearchCols,g,j=[],i,n,l,k=W(a);g=a._iDisplayStart;i=!1!==d.bPaginate?a._iDisplayLength:-1;var r=function(a,b){j.push({name:a,value:b})};r("sEcho",a.iDraw);r("iColumns",c);r("sColumns",D(b,"sName").join(","));r("iDisplayStart",g);r("iDisplayLength",i);var ra={draw:a.iDraw,columns:[],order:[],start:g,length:i,search:{value:e.sSearch,regex:e.bRegex}};for(g=0;g<c;g++)n=b[g],
l=f[g],i="function"==typeof n.mData?"function":n.mData,ra.columns.push({data:i,name:n.sName,searchable:n.bSearchable,orderable:n.bSortable,search:{value:l.sSearch,regex:l.bRegex}}),r("mDataProp_"+g,i),d.bFilter&&(r("sSearch_"+g,l.sSearch),r("bRegex_"+g,l.bRegex),r("bSearchable_"+g,n.bSearchable)),d.bSort&&r("bSortable_"+g,n.bSortable);d.bFilter&&(r("sSearch",e.sSearch),r("bRegex",e.bRegex));d.bSort&&(h.each(k,function(a,b){ra.order.push({column:b.col,dir:b.dir});r("iSortCol_"+a,b.col);r("sSortDir_"+
a,b.dir)}),r("iSortingCols",k.length));b=m.ext.legacy.ajax;return null===b?a.sAjaxSource?j:ra:b?j:ra}function xb(a,b){var c=va(a,b),d=b.sEcho!==k?b.sEcho:b.draw,e=b.iTotalRecords!==k?b.iTotalRecords:b.recordsTotal,f=b.iTotalDisplayRecords!==k?b.iTotalDisplayRecords:b.recordsFiltered;if(d){if(1*d<a.iDraw)return;a.iDraw=1*d}pa(a);a._iRecordsTotal=parseInt(e,10);a._iRecordsDisplay=parseInt(f,10);d=0;for(e=c.length;d<e;d++)N(a,c[d]);a.aiDisplay=a.aiDisplayMaster.slice();a.bAjaxDataGet=!1;O(a);a._bInitComplete||
wa(a,b);a.bAjaxDataGet=!0;C(a,!1)}function va(a,b){var c=h.isPlainObject(a.ajax)&&a.ajax.dataSrc!==k?a.ajax.dataSrc:a.sAjaxDataProp;return"data"===c?b.aaData||b[c]:""!==c?R(c)(b):b}function rb(a){var b=a.oClasses,c=a.sTableId,d=a.oLanguage,e=a.oPreviousSearch,f=a.aanFeatures,g='<input type="search" class="'+b.sFilterInput+'"/>',j=d.sSearch,j=j.match(/_INPUT_/)?j.replace("_INPUT_",g):j+g,b=h("<div/>",{id:!f.f?c+"_filter":null,"class":b.sFilter}).append(h("<label/>").append(j)),f=function(){var b=!this.value?
"":this.value;b!=e.sSearch&&(ga(a,{sSearch:b,bRegex:e.bRegex,bSmart:e.bSmart,bCaseInsensitive:e.bCaseInsensitive}),a._iDisplayStart=0,O(a))},g=null!==a.searchDelay?a.searchDelay:"ssp"===y(a)?400:0,i=h("input",b).val(e.sSearch).attr("placeholder",d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT",g?Qa(f,g):f).on("keypress.DT",function(a){if(13==a.keyCode)return!1}).attr("aria-controls",c);h(a.nTable).on("search.dt.DT",function(b,c){if(a===c)try{i[0]!==H.activeElement&&i.val(e.sSearch)}catch(d){}});
return b[0]}function ga(a,b,c){var d=a.oPreviousSearch,e=a.aoPreSearchCols,f=function(a){d.sSearch=a.sSearch;d.bRegex=a.bRegex;d.bSmart=a.bSmart;d.bCaseInsensitive=a.bCaseInsensitive};Ia(a);if("ssp"!=y(a)){yb(a,b.sSearch,c,b.bEscapeRegex!==k?!b.bEscapeRegex:b.bRegex,b.bSmart,b.bCaseInsensitive);f(b);for(b=0;b<e.length;b++)zb(a,e[b].sSearch,b,e[b].bEscapeRegex!==k?!e[b].bEscapeRegex:e[b].bRegex,e[b].bSmart,e[b].bCaseInsensitive);Ab(a)}else f(b);a.bFiltered=!0;s(a,null,"search",[a])}function Ab(a){for(var b=
m.ext.search,c=a.aiDisplay,d,e,f=0,g=b.length;f<g;f++){for(var j=[],i=0,n=c.length;i<n;i++)e=c[i],d=a.aoData[e],b[f](a,d._aFilterData,e,d._aData,i)&&j.push(e);c.length=0;h.merge(c,j)}}function zb(a,b,c,d,e,f){if(""!==b){for(var g=[],j=a.aiDisplay,d=Ra(b,d,e,f),e=0;e<j.length;e++)b=a.aoData[j[e]]._aFilterData[c],d.test(b)&&g.push(j[e]);a.aiDisplay=g}}function yb(a,b,c,d,e,f){var d=Ra(b,d,e,f),f=a.oPreviousSearch.sSearch,g=a.aiDisplayMaster,j,e=[];0!==m.ext.search.length&&(c=!0);j=Bb(a);if(0>=b.length)a.aiDisplay=
g.slice();else{if(j||c||f.length>b.length||0!==b.indexOf(f)||a.bSorted)a.aiDisplay=g.slice();b=a.aiDisplay;for(c=0;c<b.length;c++)d.test(a.aoData[b[c]]._sFilterRow)&&e.push(b[c]);a.aiDisplay=e}}function Ra(a,b,c,d){a=b?a:Sa(a);c&&(a="^(?=.*?"+h.map(a.match(/"[^"]+"|[^ ]+/g)||[""],function(a){if('"'===a.charAt(0))var b=a.match(/^"(.*)"$/),a=b?b[1]:a;return a.replace('"',"")}).join(")(?=.*?")+").*$");return RegExp(a,d?"i":"")}function Bb(a){var b=a.aoColumns,c,d,e,f,g,j,i,h,l=m.ext.type.search;c=!1;
d=0;for(f=a.aoData.length;d<f;d++)if(h=a.aoData[d],!h._aFilterData){j=[];e=0;for(g=b.length;e<g;e++)c=b[e],c.bSearchable?(i=B(a,d,e,"filter"),l[c.sType]&&(i=l[c.sType](i)),null===i&&(i=""),"string"!==typeof i&&i.toString&&(i=i.toString())):i="",i.indexOf&&-1!==i.indexOf("&")&&(xa.innerHTML=i,i=$b?xa.textContent:xa.innerText),i.replace&&(i=i.replace(/[\r\n]/g,"")),j.push(i);h._aFilterData=j;h._sFilterRow=j.join("  ");c=!0}return c}function Cb(a){return{search:a.sSearch,smart:a.bSmart,regex:a.bRegex,
caseInsensitive:a.bCaseInsensitive}}function Db(a){return{sSearch:a.search,bSmart:a.smart,bRegex:a.regex,bCaseInsensitive:a.caseInsensitive}}function ub(a){var b=a.sTableId,c=a.aanFeatures.i,d=h("<div/>",{"class":a.oClasses.sInfo,id:!c?b+"_info":null});c||(a.aoDrawCallback.push({fn:Eb,sName:"information"}),d.attr("role","status").attr("aria-live","polite"),h(a.nTable).attr("aria-describedby",b+"_info"));return d[0]}function Eb(a){var b=a.aanFeatures.i;if(0!==b.length){var c=a.oLanguage,d=a._iDisplayStart+
1,e=a.fnDisplayEnd(),f=a.fnRecordsTotal(),g=a.fnRecordsDisplay(),j=g?c.sInfo:c.sInfoEmpty;g!==f&&(j+=" "+c.sInfoFiltered);j+=c.sInfoPostFix;j=Fb(a,j);c=c.fnInfoCallback;null!==c&&(j=c.call(a.oInstance,a,d,e,f,g,j));h(b).html(j)}}function Fb(a,b){var c=a.fnFormatNumber,d=a._iDisplayStart+1,e=a._iDisplayLength,f=a.fnRecordsDisplay(),g=-1===e;return b.replace(/_START_/g,c.call(a,d)).replace(/_END_/g,c.call(a,a.fnDisplayEnd())).replace(/_MAX_/g,c.call(a,a.fnRecordsTotal())).replace(/_TOTAL_/g,c.call(a,
f)).replace(/_PAGE_/g,c.call(a,g?1:Math.ceil(d/e))).replace(/_PAGES_/g,c.call(a,g?1:Math.ceil(f/e)))}function ha(a){var b,c,d=a.iInitDisplayStart,e=a.aoColumns,f;c=a.oFeatures;var g=a.bDeferLoading;if(a.bInitialised){pb(a);mb(a);fa(a,a.aoHeader);fa(a,a.aoFooter);C(a,!0);c.bAutoWidth&&Ha(a);b=0;for(c=e.length;b<c;b++)f=e[b],f.sWidth&&(f.nTh.style.width=v(f.sWidth));s(a,null,"preInit",[a]);T(a);e=y(a);if("ssp"!=e||g)"ajax"==e?ua(a,[],function(c){var f=va(a,c);for(b=0;b<f.length;b++)N(a,f[b]);a.iInitDisplayStart=
d;T(a);C(a,!1);wa(a,c)},a):(C(a,!1),wa(a))}else setTimeout(function(){ha(a)},200)}function wa(a,b){a._bInitComplete=!0;(b||a.oInit.aaData)&&Z(a);s(a,null,"plugin-init",[a,b]);s(a,"aoInitComplete","init",[a,b])}function Ta(a,b){var c=parseInt(b,10);a._iDisplayLength=c;Ua(a);s(a,null,"length",[a,c])}function qb(a){for(var b=a.oClasses,c=a.sTableId,d=a.aLengthMenu,e=h.isArray(d[0]),f=e?d[0]:d,d=e?d[1]:d,e=h("<select/>",{name:c+"_length","aria-controls":c,"class":b.sLengthSelect}),g=0,j=f.length;g<j;g++)e[0][g]=
new Option(d[g],f[g]);var i=h("<div><label/></div>").addClass(b.sLength);a.aanFeatures.l||(i[0].id=c+"_length");i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_",e[0].outerHTML));h("select",i).val(a._iDisplayLength).on("change.DT",function(){Ta(a,h(this).val());O(a)});h(a.nTable).on("length.dt.DT",function(b,c,d){a===c&&h("select",i).val(d)});return i[0]}function vb(a){var b=a.sPaginationType,c=m.ext.pager[b],d="function"===typeof c,e=function(a){O(a)},b=h("<div/>").addClass(a.oClasses.sPaging+
b)[0],f=a.aanFeatures;d||c.fnInit(a,b,e);f.p||(b.id=a.sTableId+"_paginate",a.aoDrawCallback.push({fn:function(a){if(d){var b=a._iDisplayStart,i=a._iDisplayLength,h=a.fnRecordsDisplay(),l=-1===i,b=l?0:Math.ceil(b/i),i=l?1:Math.ceil(h/i),h=c(b,i),k,l=0;for(k=f.p.length;l<k;l++)Pa(a,"pageButton")(a,f.p[l],l,h,b,i)}else c.fnUpdate(a,e)},sName:"pagination"}));return b}function Va(a,b,c){var d=a._iDisplayStart,e=a._iDisplayLength,f=a.fnRecordsDisplay();0===f||-1===e?d=0:"number"===typeof b?(d=b*e,d>f&&
(d=0)):"first"==b?d=0:"previous"==b?(d=0<=e?d-e:0,0>d&&(d=0)):"next"==b?d+e<f&&(d+=e):"last"==b?d=Math.floor((f-1)/e)*e:K(a,0,"Unknown paging action: "+b,5);b=a._iDisplayStart!==d;a._iDisplayStart=d;b&&(s(a,null,"page",[a]),c&&O(a));return b}function sb(a){return h("<div/>",{id:!a.aanFeatures.r?a.sTableId+"_processing":null,"class":a.oClasses.sProcessing}).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]}function C(a,b){a.oFeatures.bProcessing&&h(a.aanFeatures.r).css("display",b?"block":"none");
s(a,null,"processing",[a,b])}function tb(a){var b=h(a.nTable);b.attr("role","grid");var c=a.oScroll;if(""===c.sX&&""===c.sY)return a.nTable;var d=c.sX,e=c.sY,f=a.oClasses,g=b.children("caption"),j=g.length?g[0]._captionSide:null,i=h(b[0].cloneNode(!1)),n=h(b[0].cloneNode(!1)),l=b.children("tfoot");l.length||(l=null);i=h("<div/>",{"class":f.sScrollWrapper}).append(h("<div/>",{"class":f.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:d?!d?null:v(d):"100%"}).append(h("<div/>",
{"class":f.sScrollHeadInner}).css({"box-sizing":"content-box",width:c.sXInner||"100%"}).append(i.removeAttr("id").css("margin-left",0).append("top"===j?g:null).append(b.children("thead"))))).append(h("<div/>",{"class":f.sScrollBody}).css({position:"relative",overflow:"auto",width:!d?null:v(d)}).append(b));l&&i.append(h("<div/>",{"class":f.sScrollFoot}).css({overflow:"hidden",border:0,width:d?!d?null:v(d):"100%"}).append(h("<div/>",{"class":f.sScrollFootInner}).append(n.removeAttr("id").css("margin-left",
0).append("bottom"===j?g:null).append(b.children("tfoot")))));var b=i.children(),k=b[0],f=b[1],r=l?b[2]:null;if(d)h(f).on("scroll.DT",function(){var a=this.scrollLeft;k.scrollLeft=a;l&&(r.scrollLeft=a)});h(f).css(e&&c.bCollapse?"max-height":"height",e);a.nScrollHead=k;a.nScrollBody=f;a.nScrollFoot=r;a.aoDrawCallback.push({fn:ma,sName:"scrolling"});return i[0]}function ma(a){var b=a.oScroll,c=b.sX,d=b.sXInner,e=b.sY,b=b.iBarWidth,f=h(a.nScrollHead),g=f[0].style,j=f.children("div"),i=j[0].style,n=j.children("table"),
j=a.nScrollBody,l=h(j),q=j.style,r=h(a.nScrollFoot).children("div"),m=r.children("table"),p=h(a.nTHead),o=h(a.nTable),t=o[0],s=t.style,u=a.nTFoot?h(a.nTFoot):null,x=a.oBrowser,U=x.bScrollOversize,ac=D(a.aoColumns,"nTh"),P,L,Q,w,Wa=[],y=[],z=[],A=[],B,C=function(a){a=a.style;a.paddingTop="0";a.paddingBottom="0";a.borderTopWidth="0";a.borderBottomWidth="0";a.height=0};L=j.scrollHeight>j.clientHeight;if(a.scrollBarVis!==L&&a.scrollBarVis!==k)a.scrollBarVis=L,Z(a);else{a.scrollBarVis=L;o.children("thead, tfoot").remove();
u&&(Q=u.clone().prependTo(o),P=u.find("tr"),Q=Q.find("tr"));w=p.clone().prependTo(o);p=p.find("tr");L=w.find("tr");w.find("th, td").removeAttr("tabindex");c||(q.width="100%",f[0].style.width="100%");h.each(ta(a,w),function(b,c){B=$(a,b);c.style.width=a.aoColumns[B].sWidth});u&&I(function(a){a.style.width=""},Q);f=o.outerWidth();if(""===c){s.width="100%";if(U&&(o.find("tbody").height()>j.offsetHeight||"scroll"==l.css("overflow-y")))s.width=v(o.outerWidth()-b);f=o.outerWidth()}else""!==d&&(s.width=
v(d),f=o.outerWidth());I(C,L);I(function(a){z.push(a.innerHTML);Wa.push(v(h(a).css("width")))},L);I(function(a,b){if(h.inArray(a,ac)!==-1)a.style.width=Wa[b]},p);h(L).height(0);u&&(I(C,Q),I(function(a){A.push(a.innerHTML);y.push(v(h(a).css("width")))},Q),I(function(a,b){a.style.width=y[b]},P),h(Q).height(0));I(function(a,b){a.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+z[b]+"</div>";a.style.width=Wa[b]},L);u&&I(function(a,b){a.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+
A[b]+"</div>";a.style.width=y[b]},Q);if(o.outerWidth()<f){P=j.scrollHeight>j.offsetHeight||"scroll"==l.css("overflow-y")?f+b:f;if(U&&(j.scrollHeight>j.offsetHeight||"scroll"==l.css("overflow-y")))s.width=v(P-b);(""===c||""!==d)&&K(a,1,"Possible column misalignment",6)}else P="100%";q.width=v(P);g.width=v(P);u&&(a.nScrollFoot.style.width=v(P));!e&&U&&(q.height=v(t.offsetHeight+b));c=o.outerWidth();n[0].style.width=v(c);i.width=v(c);d=o.height()>j.clientHeight||"scroll"==l.css("overflow-y");e="padding"+
(x.bScrollbarLeft?"Left":"Right");i[e]=d?b+"px":"0px";u&&(m[0].style.width=v(c),r[0].style.width=v(c),r[0].style[e]=d?b+"px":"0px");o.children("colgroup").insertBefore(o.children("thead"));l.scroll();if((a.bSorted||a.bFiltered)&&!a._drawHold)j.scrollTop=0}}function I(a,b,c){for(var d=0,e=0,f=b.length,g,j;e<f;){g=b[e].firstChild;for(j=c?c[e].firstChild:null;g;)1===g.nodeType&&(c?a(g,j,d):a(g,d),d++),g=g.nextSibling,j=c?j.nextSibling:null;e++}}function Ha(a){var b=a.nTable,c=a.aoColumns,d=a.oScroll,
e=d.sY,f=d.sX,g=d.sXInner,j=c.length,i=na(a,"bVisible"),n=h("th",a.nTHead),l=b.getAttribute("width"),k=b.parentNode,r=!1,m,p,o=a.oBrowser,d=o.bScrollOversize;(m=b.style.width)&&-1!==m.indexOf("%")&&(l=m);for(m=0;m<i.length;m++)p=c[i[m]],null!==p.sWidth&&(p.sWidth=Gb(p.sWidthOrig,k),r=!0);if(d||!r&&!f&&!e&&j==ba(a)&&j==n.length)for(m=0;m<j;m++)i=$(a,m),null!==i&&(c[i].sWidth=v(n.eq(m).width()));else{j=h(b).clone().css("visibility","hidden").removeAttr("id");j.find("tbody tr").remove();var t=h("<tr/>").appendTo(j.find("tbody"));
j.find("thead, tfoot").remove();j.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone());j.find("tfoot th, tfoot td").css("width","");n=ta(a,j.find("thead")[0]);for(m=0;m<i.length;m++)p=c[i[m]],n[m].style.width=null!==p.sWidthOrig&&""!==p.sWidthOrig?v(p.sWidthOrig):"",p.sWidthOrig&&f&&h(n[m]).append(h("<div/>").css({width:p.sWidthOrig,margin:0,padding:0,border:0,height:1}));if(a.aoData.length)for(m=0;m<i.length;m++)r=i[m],p=c[r],h(Hb(a,r)).clone(!1).append(p.sContentPadding).appendTo(t);h("[name]",
j).removeAttr("name");p=h("<div/>").css(f||e?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(j).appendTo(k);f&&g?j.width(g):f?(j.css("width","auto"),j.removeAttr("width"),j.width()<k.clientWidth&&l&&j.width(k.clientWidth)):e?j.width(k.clientWidth):l&&j.width(l);for(m=e=0;m<i.length;m++)k=h(n[m]),g=k.outerWidth()-k.width(),k=o.bBounding?Math.ceil(n[m].getBoundingClientRect().width):k.outerWidth(),e+=k,c[i[m]].sWidth=v(k-g);b.style.width=v(e);p.remove()}l&&(b.style.width=
v(l));if((l||f)&&!a._reszEvt)b=function(){h(E).on("resize.DT-"+a.sInstance,Qa(function(){Z(a)}))},d?setTimeout(b,1E3):b(),a._reszEvt=!0}function Gb(a,b){if(!a)return 0;var c=h("<div/>").css("width",v(a)).appendTo(b||H.body),d=c[0].offsetWidth;c.remove();return d}function Hb(a,b){var c=Ib(a,b);if(0>c)return null;var d=a.aoData[c];return!d.nTr?h("<td/>").html(B(a,c,b,"display"))[0]:d.anCells[b]}function Ib(a,b){for(var c,d=-1,e=-1,f=0,g=a.aoData.length;f<g;f++)c=B(a,f,b,"display")+"",c=c.replace(bc,
""),c=c.replace(/&nbsp;/g," "),c.length>d&&(d=c.length,e=f);return e}function v(a){return null===a?"0px":"number"==typeof a?0>a?"0px":a+"px":a.match(/\d$/)?a+"px":a}function W(a){var b,c,d=[],e=a.aoColumns,f,g,j,i;b=a.aaSortingFixed;c=h.isPlainObject(b);var n=[];f=function(a){a.length&&!h.isArray(a[0])?n.push(a):h.merge(n,a)};h.isArray(b)&&f(b);c&&b.pre&&f(b.pre);f(a.aaSorting);c&&b.post&&f(b.post);for(a=0;a<n.length;a++){i=n[a][0];f=e[i].aDataSort;b=0;for(c=f.length;b<c;b++)g=f[b],j=e[g].sType||
"string",n[a]._idx===k&&(n[a]._idx=h.inArray(n[a][1],e[g].asSorting)),d.push({src:i,col:g,dir:n[a][1],index:n[a]._idx,type:j,formatter:m.ext.type.order[j+"-pre"]})}return d}function ob(a){var b,c,d=[],e=m.ext.type.order,f=a.aoData,g=0,j,i=a.aiDisplayMaster,h;Ia(a);h=W(a);b=0;for(c=h.length;b<c;b++)j=h[b],j.formatter&&g++,Jb(a,j.col);if("ssp"!=y(a)&&0!==h.length){b=0;for(c=i.length;b<c;b++)d[i[b]]=b;g===h.length?i.sort(function(a,b){var c,e,g,j,i=h.length,k=f[a]._aSortData,m=f[b]._aSortData;for(g=
0;g<i;g++)if(j=h[g],c=k[j.col],e=m[j.col],c=c<e?-1:c>e?1:0,0!==c)return"asc"===j.dir?c:-c;c=d[a];e=d[b];return c<e?-1:c>e?1:0}):i.sort(function(a,b){var c,g,j,i,k=h.length,m=f[a]._aSortData,p=f[b]._aSortData;for(j=0;j<k;j++)if(i=h[j],c=m[i.col],g=p[i.col],i=e[i.type+"-"+i.dir]||e["string-"+i.dir],c=i(c,g),0!==c)return c;c=d[a];g=d[b];return c<g?-1:c>g?1:0})}a.bSorted=!0}function Kb(a){for(var b,c,d=a.aoColumns,e=W(a),a=a.oLanguage.oAria,f=0,g=d.length;f<g;f++){c=d[f];var j=c.asSorting;b=c.sTitle.replace(/<.*?>/g,
"");var i=c.nTh;i.removeAttribute("aria-sort");c.bSortable&&(0<e.length&&e[0].col==f?(i.setAttribute("aria-sort","asc"==e[0].dir?"ascending":"descending"),c=j[e[0].index+1]||j[0]):c=j[0],b+="asc"===c?a.sSortAscending:a.sSortDescending);i.setAttribute("aria-label",b)}}function Xa(a,b,c,d){var e=a.aaSorting,f=a.aoColumns[b].asSorting,g=function(a,b){var c=a._idx;c===k&&(c=h.inArray(a[1],f));return c+1<f.length?c+1:b?null:0};"number"===typeof e[0]&&(e=a.aaSorting=[e]);c&&a.oFeatures.bSortMulti?(c=h.inArray(b,
D(e,"0")),-1!==c?(b=g(e[c],!0),null===b&&1===e.length&&(b=0),null===b?e.splice(c,1):(e[c][1]=f[b],e[c]._idx=b)):(e.push([b,f[0],0]),e[e.length-1]._idx=0)):e.length&&e[0][0]==b?(b=g(e[0]),e.length=1,e[0][1]=f[b],e[0]._idx=b):(e.length=0,e.push([b,f[0]]),e[0]._idx=0);T(a);"function"==typeof d&&d(a)}function Oa(a,b,c,d){var e=a.aoColumns[c];Ya(b,{},function(b){!1!==e.bSortable&&(a.oFeatures.bProcessing?(C(a,!0),setTimeout(function(){Xa(a,c,b.shiftKey,d);"ssp"!==y(a)&&C(a,!1)},0)):Xa(a,c,b.shiftKey,d))})}
function ya(a){var b=a.aLastSort,c=a.oClasses.sSortColumn,d=W(a),e=a.oFeatures,f,g;if(e.bSort&&e.bSortClasses){e=0;for(f=b.length;e<f;e++)g=b[e].src,h(D(a.aoData,"anCells",g)).removeClass(c+(2>e?e+1:3));e=0;for(f=d.length;e<f;e++)g=d[e].src,h(D(a.aoData,"anCells",g)).addClass(c+(2>e?e+1:3))}a.aLastSort=d}function Jb(a,b){var c=a.aoColumns[b],d=m.ext.order[c.sSortDataType],e;d&&(e=d.call(a.oInstance,a,b,aa(a,b)));for(var f,g=m.ext.type.order[c.sType+"-pre"],j=0,i=a.aoData.length;j<i;j++)if(c=a.aoData[j],
c._aSortData||(c._aSortData=[]),!c._aSortData[b]||d)f=d?e[j]:B(a,j,b,"sort"),c._aSortData[b]=g?g(f):f}function za(a){if(a.oFeatures.bStateSave&&!a.bDestroying){var b={time:+new Date,start:a._iDisplayStart,length:a._iDisplayLength,order:h.extend(!0,[],a.aaSorting),search:Cb(a.oPreviousSearch),columns:h.map(a.aoColumns,function(b,d){return{visible:b.bVisible,search:Cb(a.aoPreSearchCols[d])}})};s(a,"aoStateSaveParams","stateSaveParams",[a,b]);a.oSavedState=b;a.fnStateSaveCallback.call(a.oInstance,a,
b)}}function Lb(a,b,c){var d,e,f=a.aoColumns,b=function(b){if(b&&b.time){var g=s(a,"aoStateLoadParams","stateLoadParams",[a,b]);if(-1===h.inArray(!1,g)&&(g=a.iStateDuration,!(0<g&&b.time<+new Date-1E3*g)&&!(b.columns&&f.length!==b.columns.length))){a.oLoadedState=h.extend(!0,{},b);b.start!==k&&(a._iDisplayStart=b.start,a.iInitDisplayStart=b.start);b.length!==k&&(a._iDisplayLength=b.length);b.order!==k&&(a.aaSorting=[],h.each(b.order,function(b,c){a.aaSorting.push(c[0]>=f.length?[0,c[1]]:c)}));b.search!==
k&&h.extend(a.oPreviousSearch,Db(b.search));if(b.columns){d=0;for(e=b.columns.length;d<e;d++)g=b.columns[d],g.visible!==k&&(f[d].bVisible=g.visible),g.search!==k&&h.extend(a.aoPreSearchCols[d],Db(g.search))}s(a,"aoStateLoaded","stateLoaded",[a,b])}}c()};if(a.oFeatures.bStateSave){var g=a.fnStateLoadCallback.call(a.oInstance,a,b);g!==k&&b(g)}else c()}function Aa(a){var b=m.settings,a=h.inArray(a,D(b,"nTable"));return-1!==a?b[a]:null}function K(a,b,c,d){c="DataTables warning: "+(a?"table id="+a.sTableId+
" - ":"")+c;d&&(c+=". For more information about this error, please see http://datatables.net/tn/"+d);if(b)E.console&&console.log&&console.log(c);else if(b=m.ext,b=b.sErrMode||b.errMode,a&&s(a,null,"error",[a,d,c]),"alert"==b)alert(c);else{if("throw"==b)throw Error(c);"function"==typeof b&&b(a,d,c)}}function F(a,b,c,d){h.isArray(c)?h.each(c,function(c,d){h.isArray(d)?F(a,b,d[0],d[1]):F(a,b,d)}):(d===k&&(d=c),b[c]!==k&&(a[d]=b[c]))}function Mb(a,b,c){var d,e;for(e in b)b.hasOwnProperty(e)&&(d=b[e],
h.isPlainObject(d)?(h.isPlainObject(a[e])||(a[e]={}),h.extend(!0,a[e],d)):a[e]=c&&"data"!==e&&"aaData"!==e&&h.isArray(d)?d.slice():d);return a}function Ya(a,b,c){h(a).on("click.DT",b,function(b){a.blur();c(b)}).on("keypress.DT",b,function(a){13===a.which&&(a.preventDefault(),c(a))}).on("selectstart.DT",function(){return!1})}function z(a,b,c,d){c&&a[b].push({fn:c,sName:d})}function s(a,b,c,d){var e=[];b&&(e=h.map(a[b].slice().reverse(),function(b){return b.fn.apply(a.oInstance,d)}));null!==c&&(b=h.Event(c+
".dt"),h(a.nTable).trigger(b,d),e.push(b.result));return e}function Ua(a){var b=a._iDisplayStart,c=a.fnDisplayEnd(),d=a._iDisplayLength;b>=c&&(b=c-d);b-=b%d;if(-1===d||0>b)b=0;a._iDisplayStart=b}function Pa(a,b){var c=a.renderer,d=m.ext.renderer[b];return h.isPlainObject(c)&&c[b]?d[c[b]]||d._:"string"===typeof c?d[c]||d._:d._}function y(a){return a.oFeatures.bServerSide?"ssp":a.ajax||a.sAjaxSource?"ajax":"dom"}function ia(a,b){var c=[],c=Nb.numbers_length,d=Math.floor(c/2);b<=c?c=X(0,b):a<=d?(c=X(0,
c-2),c.push("ellipsis"),c.push(b-1)):(a>=b-1-d?c=X(b-(c-2),b):(c=X(a-d+2,a+d-1),c.push("ellipsis"),c.push(b-1)),c.splice(0,0,"ellipsis"),c.splice(0,0,0));c.DT_el="span";return c}function fb(a){h.each({num:function(b){return Ba(b,a)},"num-fmt":function(b){return Ba(b,a,Za)},"html-num":function(b){return Ba(b,a,Ca)},"html-num-fmt":function(b){return Ba(b,a,Ca,Za)}},function(b,c){x.type.order[b+a+"-pre"]=c;b.match(/^html\-/)&&(x.type.search[b+a]=x.type.search.html)})}function Ob(a){return function(){var b=
[Aa(this[m.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return m.ext.internal[a].apply(this,b)}}var m=function(a){this.$=function(a,b){return this.api(!0).$(a,b)};this._=function(a,b){return this.api(!0).rows(a,b).data()};this.api=function(a){return a?new t(Aa(this[x.iApiIndex])):new t(this)};this.fnAddData=function(a,b){var c=this.api(!0),d=h.isArray(a)&&(h.isArray(a[0])||h.isPlainObject(a[0]))?c.rows.add(a):c.row.add(a);(b===k||b)&&c.draw();return d.flatten().toArray()};this.fnAdjustColumnSizing=
function(a){var b=this.api(!0).columns.adjust(),c=b.settings()[0],d=c.oScroll;a===k||a?b.draw(!1):(""!==d.sX||""!==d.sY)&&ma(c)};this.fnClearTable=function(a){var b=this.api(!0).clear();(a===k||a)&&b.draw()};this.fnClose=function(a){this.api(!0).row(a).child.hide()};this.fnDeleteRow=function(a,b,c){var d=this.api(!0),a=d.rows(a),e=a.settings()[0],h=e.aoData[a[0][0]];a.remove();b&&b.call(this,e,h);(c===k||c)&&d.draw();return h};this.fnDestroy=function(a){this.api(!0).destroy(a)};this.fnDraw=function(a){this.api(!0).draw(a)};
this.fnFilter=function(a,b,c,d,e,h){e=this.api(!0);null===b||b===k?e.search(a,c,d,h):e.column(b).search(a,c,d,h);e.draw()};this.fnGetData=function(a,b){var c=this.api(!0);if(a!==k){var d=a.nodeName?a.nodeName.toLowerCase():"";return b!==k||"td"==d||"th"==d?c.cell(a,b).data():c.row(a).data()||null}return c.data().toArray()};this.fnGetNodes=function(a){var b=this.api(!0);return a!==k?b.row(a).node():b.rows().nodes().flatten().toArray()};this.fnGetPosition=function(a){var b=this.api(!0),c=a.nodeName.toUpperCase();
return"TR"==c?b.row(a).index():"TD"==c||"TH"==c?(a=b.cell(a).index(),[a.row,a.columnVisible,a.column]):null};this.fnIsOpen=function(a){return this.api(!0).row(a).child.isShown()};this.fnOpen=function(a,b,c){return this.api(!0).row(a).child(b,c).show().child()[0]};this.fnPageChange=function(a,b){var c=this.api(!0).page(a);(b===k||b)&&c.draw(!1)};this.fnSetColumnVis=function(a,b,c){a=this.api(!0).column(a).visible(b);(c===k||c)&&a.columns.adjust().draw()};this.fnSettings=function(){return Aa(this[x.iApiIndex])};
this.fnSort=function(a){this.api(!0).order(a).draw()};this.fnSortListener=function(a,b,c){this.api(!0).order.listener(a,b,c)};this.fnUpdate=function(a,b,c,d,e){var h=this.api(!0);c===k||null===c?h.row(b).data(a):h.cell(b,c).data(a);(e===k||e)&&h.columns.adjust();(d===k||d)&&h.draw();return 0};this.fnVersionCheck=x.fnVersionCheck;var b=this,c=a===k,d=this.length;c&&(a={});this.oApi=this.internal=x.internal;for(var e in m.ext.internal)e&&(this[e]=Ob(e));this.each(function(){var e={},g=1<d?Mb(e,a,!0):
a,j=0,i,e=this.getAttribute("id"),n=!1,l=m.defaults,q=h(this);if("table"!=this.nodeName.toLowerCase())K(null,0,"Non-table node initialisation ("+this.nodeName+")",2);else{gb(l);hb(l.column);J(l,l,!0);J(l.column,l.column,!0);J(l,h.extend(g,q.data()));var r=m.settings,j=0;for(i=r.length;j<i;j++){var p=r[j];if(p.nTable==this||p.nTHead.parentNode==this||p.nTFoot&&p.nTFoot.parentNode==this){var t=g.bRetrieve!==k?g.bRetrieve:l.bRetrieve;if(c||t)return p.oInstance;if(g.bDestroy!==k?g.bDestroy:l.bDestroy){p.oInstance.fnDestroy();
break}else{K(p,0,"Cannot reinitialise DataTable",3);return}}if(p.sTableId==this.id){r.splice(j,1);break}}if(null===e||""===e)this.id=e="DataTables_Table_"+m.ext._unique++;var o=h.extend(!0,{},m.models.oSettings,{sDestroyWidth:q[0].style.width,sInstance:e,sTableId:e});o.nTable=this;o.oApi=b.internal;o.oInit=g;r.push(o);o.oInstance=1===b.length?b:q.dataTable();gb(g);g.oLanguage&&Fa(g.oLanguage);g.aLengthMenu&&!g.iDisplayLength&&(g.iDisplayLength=h.isArray(g.aLengthMenu[0])?g.aLengthMenu[0][0]:g.aLengthMenu[0]);
g=Mb(h.extend(!0,{},l),g);F(o.oFeatures,g,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));F(o,g,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],
["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"],["bJQueryUI","bJUI"]]);F(o.oScroll,g,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);F(o.oLanguage,g,"fnInfoCallback");z(o,"aoDrawCallback",g.fnDrawCallback,"user");z(o,"aoServerParams",g.fnServerParams,"user");z(o,"aoStateSaveParams",g.fnStateSaveParams,"user");z(o,"aoStateLoadParams",g.fnStateLoadParams,"user");z(o,"aoStateLoaded",g.fnStateLoaded,
"user");z(o,"aoRowCallback",g.fnRowCallback,"user");z(o,"aoRowCreatedCallback",g.fnCreatedRow,"user");z(o,"aoHeaderCallback",g.fnHeaderCallback,"user");z(o,"aoFooterCallback",g.fnFooterCallback,"user");z(o,"aoInitComplete",g.fnInitComplete,"user");z(o,"aoPreDrawCallback",g.fnPreDrawCallback,"user");o.rowIdFn=R(g.rowId);ib(o);var u=o.oClasses;g.bJQueryUI?(h.extend(u,m.ext.oJUIClasses,g.oClasses),g.sDom===l.sDom&&"lfrtip"===l.sDom&&(o.sDom='<"H"lfr>t<"F"ip>'),o.renderer)?h.isPlainObject(o.renderer)&&
!o.renderer.header&&(o.renderer.header="jqueryui"):o.renderer="jqueryui":h.extend(u,m.ext.classes,g.oClasses);q.addClass(u.sTable);o.iInitDisplayStart===k&&(o.iInitDisplayStart=g.iDisplayStart,o._iDisplayStart=g.iDisplayStart);null!==g.iDeferLoading&&(o.bDeferLoading=!0,e=h.isArray(g.iDeferLoading),o._iRecordsDisplay=e?g.iDeferLoading[0]:g.iDeferLoading,o._iRecordsTotal=e?g.iDeferLoading[1]:g.iDeferLoading);var v=o.oLanguage;h.extend(!0,v,g.oLanguage);v.sUrl&&(h.ajax({dataType:"json",url:v.sUrl,success:function(a){Fa(a);
J(l.oLanguage,a);h.extend(true,v,a);ha(o)},error:function(){ha(o)}}),n=!0);null===g.asStripeClasses&&(o.asStripeClasses=[u.sStripeOdd,u.sStripeEven]);var e=o.asStripeClasses,x=q.children("tbody").find("tr").eq(0);-1!==h.inArray(!0,h.map(e,function(a){return x.hasClass(a)}))&&(h("tbody tr",this).removeClass(e.join(" ")),o.asDestroyStripes=e.slice());e=[];r=this.getElementsByTagName("thead");0!==r.length&&(ea(o.aoHeader,r[0]),e=ta(o));if(null===g.aoColumns){r=[];j=0;for(i=e.length;j<i;j++)r.push(null)}else r=
g.aoColumns;j=0;for(i=r.length;j<i;j++)Ga(o,e?e[j]:null);kb(o,g.aoColumnDefs,r,function(a,b){la(o,a,b)});if(x.length){var w=function(a,b){return a.getAttribute("data-"+b)!==null?b:null};h(x[0]).children("th, td").each(function(a,b){var c=o.aoColumns[a];if(c.mData===a){var d=w(b,"sort")||w(b,"order"),e=w(b,"filter")||w(b,"search");if(d!==null||e!==null){c.mData={_:a+".display",sort:d!==null?a+".@data-"+d:k,type:d!==null?a+".@data-"+d:k,filter:e!==null?a+".@data-"+e:k};la(o,a)}}})}var U=o.oFeatures,
e=function(){if(g.aaSorting===k){var a=o.aaSorting;j=0;for(i=a.length;j<i;j++)a[j][1]=o.aoColumns[j].asSorting[0]}ya(o);U.bSort&&z(o,"aoDrawCallback",function(){if(o.bSorted){var a=W(o),b={};h.each(a,function(a,c){b[c.src]=c.dir});s(o,null,"order",[o,a,b]);Kb(o)}});z(o,"aoDrawCallback",function(){(o.bSorted||y(o)==="ssp"||U.bDeferRender)&&ya(o)},"sc");var a=q.children("caption").each(function(){this._captionSide=h(this).css("caption-side")}),b=q.children("thead");b.length===0&&(b=h("<thead/>").appendTo(q));
o.nTHead=b[0];b=q.children("tbody");b.length===0&&(b=h("<tbody/>").appendTo(q));o.nTBody=b[0];b=q.children("tfoot");if(b.length===0&&a.length>0&&(o.oScroll.sX!==""||o.oScroll.sY!==""))b=h("<tfoot/>").appendTo(q);if(b.length===0||b.children().length===0)q.addClass(u.sNoFooter);else if(b.length>0){o.nTFoot=b[0];ea(o.aoFooter,o.nTFoot)}if(g.aaData)for(j=0;j<g.aaData.length;j++)N(o,g.aaData[j]);else(o.bDeferLoading||y(o)=="dom")&&oa(o,h(o.nTBody).children("tr"));o.aiDisplay=o.aiDisplayMaster.slice();
o.bInitialised=true;n===false&&ha(o)};g.bStateSave?(U.bStateSave=!0,z(o,"aoDrawCallback",za,"state_save"),Lb(o,g,e)):e()}});b=null;return this},x,t,p,u,$a={},Pb=/[\r\n]/g,Ca=/<.*?>/g,cc=/^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,dc=RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)","g"),Za=/[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,M=function(a){return!a||!0===a||"-"===a?!0:!1},Qb=function(a){var b=parseInt(a,10);return!isNaN(b)&&
isFinite(a)?b:null},Rb=function(a,b){$a[b]||($a[b]=RegExp(Sa(b),"g"));return"string"===typeof a&&"."!==b?a.replace(/\./g,"").replace($a[b],"."):a},ab=function(a,b,c){var d="string"===typeof a;if(M(a))return!0;b&&d&&(a=Rb(a,b));c&&d&&(a=a.replace(Za,""));return!isNaN(parseFloat(a))&&isFinite(a)},Sb=function(a,b,c){return M(a)?!0:!(M(a)||"string"===typeof a)?null:ab(a.replace(Ca,""),b,c)?!0:null},D=function(a,b,c){var d=[],e=0,f=a.length;if(c!==k)for(;e<f;e++)a[e]&&a[e][b]&&d.push(a[e][b][c]);else for(;e<
f;e++)a[e]&&d.push(a[e][b]);return d},ja=function(a,b,c,d){var e=[],f=0,g=b.length;if(d!==k)for(;f<g;f++)a[b[f]][c]&&e.push(a[b[f]][c][d]);else for(;f<g;f++)e.push(a[b[f]][c]);return e},X=function(a,b){var c=[],d;b===k?(b=0,d=a):(d=b,b=a);for(var e=b;e<d;e++)c.push(e);return c},Tb=function(a){for(var b=[],c=0,d=a.length;c<d;c++)a[c]&&b.push(a[c]);return b},sa=function(a){var b;a:{if(!(2>a.length)){b=a.slice().sort();for(var c=b[0],d=1,e=b.length;d<e;d++){if(b[d]===c){b=!1;break a}c=b[d]}}b=!0}if(b)return a.slice();
b=[];var e=a.length,f,g=0,d=0;a:for(;d<e;d++){c=a[d];for(f=0;f<g;f++)if(b[f]===c)continue a;b.push(c);g++}return b};m.util={throttle:function(a,b){var c=b!==k?b:200,d,e;return function(){var b=this,g=+new Date,h=arguments;d&&g<d+c?(clearTimeout(e),e=setTimeout(function(){d=k;a.apply(b,h)},c)):(d=g,a.apply(b,h))}},escapeRegex:function(a){return a.replace(dc,"\\$1")}};var A=function(a,b,c){a[b]!==k&&(a[c]=a[b])},ca=/\[.*?\]$/,V=/\(\)$/,Sa=m.util.escapeRegex,xa=h("<div>")[0],$b=xa.textContent!==k,bc=
/<.*?>/g,Qa=m.util.throttle,Ub=[],w=Array.prototype,ec=function(a){var b,c,d=m.settings,e=h.map(d,function(a){return a.nTable});if(a){if(a.nTable&&a.oApi)return[a];if(a.nodeName&&"table"===a.nodeName.toLowerCase())return b=h.inArray(a,e),-1!==b?[d[b]]:null;if(a&&"function"===typeof a.settings)return a.settings().toArray();"string"===typeof a?c=h(a):a instanceof h&&(c=a)}else return[];if(c)return c.map(function(){b=h.inArray(this,e);return-1!==b?d[b]:null}).toArray()};t=function(a,b){if(!(this instanceof
t))return new t(a,b);var c=[],d=function(a){(a=ec(a))&&(c=c.concat(a))};if(h.isArray(a))for(var e=0,f=a.length;e<f;e++)d(a[e]);else d(a);this.context=sa(c);b&&h.merge(this,b);this.selector={rows:null,cols:null,opts:null};t.extend(this,this,Ub)};m.Api=t;h.extend(t.prototype,{any:function(){return 0!==this.count()},concat:w.concat,context:[],count:function(){return this.flatten().length},each:function(a){for(var b=0,c=this.length;b<c;b++)a.call(this,this[b],b,this);return this},eq:function(a){var b=
this.context;return b.length>a?new t(b[a],this[a]):null},filter:function(a){var b=[];if(w.filter)b=w.filter.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)a.call(this,this[c],c,this)&&b.push(this[c]);return new t(this.context,b)},flatten:function(){var a=[];return new t(this.context,a.concat.apply(a,this.toArray()))},join:w.join,indexOf:w.indexOf||function(a,b){for(var c=b||0,d=this.length;c<d;c++)if(this[c]===a)return c;return-1},iterator:function(a,b,c,d){var e=[],f,g,h,i,n,l=this.context,
m,p,u=this.selector;"string"===typeof a&&(d=c,c=b,b=a,a=!1);g=0;for(h=l.length;g<h;g++){var s=new t(l[g]);if("table"===b)f=c.call(s,l[g],g),f!==k&&e.push(f);else if("columns"===b||"rows"===b)f=c.call(s,l[g],this[g],g),f!==k&&e.push(f);else if("column"===b||"column-rows"===b||"row"===b||"cell"===b){p=this[g];"column-rows"===b&&(m=Da(l[g],u.opts));i=0;for(n=p.length;i<n;i++)f=p[i],f="cell"===b?c.call(s,l[g],f.row,f.column,g,i):c.call(s,l[g],f,g,i,m),f!==k&&e.push(f)}}return e.length||d?(a=new t(l,a?
e.concat.apply([],e):e),b=a.selector,b.rows=u.rows,b.cols=u.cols,b.opts=u.opts,a):this},lastIndexOf:w.lastIndexOf||function(a,b){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(a){var b=[];if(w.map)b=w.map.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)b.push(a.call(this,this[c],c));return new t(this.context,b)},pluck:function(a){return this.map(function(b){return b[a]})},pop:w.pop,push:w.push,reduce:w.reduce||function(a,b){return jb(this,a,b,0,this.length,
1)},reduceRight:w.reduceRight||function(a,b){return jb(this,a,b,this.length-1,-1,-1)},reverse:w.reverse,selector:null,shift:w.shift,slice:function(){return new t(this.context,this)},sort:w.sort,splice:w.splice,toArray:function(){return w.slice.call(this)},to$:function(){return h(this)},toJQuery:function(){return h(this)},unique:function(){return new t(this.context,sa(this))},unshift:w.unshift});t.extend=function(a,b,c){if(c.length&&b&&(b instanceof t||b.__dt_wrapper)){var d,e,f,g=function(a,b,c){return function(){var d=
b.apply(a,arguments);t.extend(d,d,c.methodExt);return d}};d=0;for(e=c.length;d<e;d++)f=c[d],b[f.name]="function"===typeof f.val?g(a,f.val,f):h.isPlainObject(f.val)?{}:f.val,b[f.name].__dt_wrapper=!0,t.extend(a,b[f.name],f.propExt)}};t.register=p=function(a,b){if(h.isArray(a))for(var c=0,d=a.length;c<d;c++)t.register(a[c],b);else for(var e=a.split("."),f=Ub,g,j,c=0,d=e.length;c<d;c++){g=(j=-1!==e[c].indexOf("()"))?e[c].replace("()",""):e[c];var i;a:{i=0;for(var n=f.length;i<n;i++)if(f[i].name===g){i=
f[i];break a}i=null}i||(i={name:g,val:{},methodExt:[],propExt:[]},f.push(i));c===d-1?i.val=b:f=j?i.methodExt:i.propExt}};t.registerPlural=u=function(a,b,c){t.register(a,c);t.register(b,function(){var a=c.apply(this,arguments);return a===this?this:a instanceof t?a.length?h.isArray(a[0])?new t(a.context,a[0]):a[0]:k:a})};p("tables()",function(a){var b;if(a){b=t;var c=this.context;if("number"===typeof a)a=[c[a]];else var d=h.map(c,function(a){return a.nTable}),a=h(d).filter(a).map(function(){var a=h.inArray(this,
d);return c[a]}).toArray();b=new b(a)}else b=this;return b});p("table()",function(a){var a=this.tables(a),b=a.context;return b.length?new t(b[0]):a});u("tables().nodes()","table().node()",function(){return this.iterator("table",function(a){return a.nTable},1)});u("tables().body()","table().body()",function(){return this.iterator("table",function(a){return a.nTBody},1)});u("tables().header()","table().header()",function(){return this.iterator("table",function(a){return a.nTHead},1)});u("tables().footer()",
"table().footer()",function(){return this.iterator("table",function(a){return a.nTFoot},1)});u("tables().containers()","table().container()",function(){return this.iterator("table",function(a){return a.nTableWrapper},1)});p("draw()",function(a){return this.iterator("table",function(b){"page"===a?O(b):("string"===typeof a&&(a="full-hold"===a?!1:!0),T(b,!1===a))})});p("page()",function(a){return a===k?this.page.info().page:this.iterator("table",function(b){Va(b,a)})});p("page.info()",function(){if(0===
this.context.length)return k;var a=this.context[0],b=a._iDisplayStart,c=a.oFeatures.bPaginate?a._iDisplayLength:-1,d=a.fnRecordsDisplay(),e=-1===c;return{page:e?0:Math.floor(b/c),pages:e?1:Math.ceil(d/c),start:b,end:a.fnDisplayEnd(),length:c,recordsTotal:a.fnRecordsTotal(),recordsDisplay:d,serverSide:"ssp"===y(a)}});p("page.len()",function(a){return a===k?0!==this.context.length?this.context[0]._iDisplayLength:k:this.iterator("table",function(b){Ta(b,a)})});var Vb=function(a,b,c){if(c){var d=new t(a);
d.one("draw",function(){c(d.ajax.json())})}if("ssp"==y(a))T(a,b);else{C(a,!0);var e=a.jqXHR;e&&4!==e.readyState&&e.abort();ua(a,[],function(c){pa(a);for(var c=va(a,c),d=0,e=c.length;d<e;d++)N(a,c[d]);T(a,b);C(a,!1)})}};p("ajax.json()",function(){var a=this.context;if(0<a.length)return a[0].json});p("ajax.params()",function(){var a=this.context;if(0<a.length)return a[0].oAjaxData});p("ajax.reload()",function(a,b){return this.iterator("table",function(c){Vb(c,!1===b,a)})});p("ajax.url()",function(a){var b=
this.context;if(a===k){if(0===b.length)return k;b=b[0];return b.ajax?h.isPlainObject(b.ajax)?b.ajax.url:b.ajax:b.sAjaxSource}return this.iterator("table",function(b){h.isPlainObject(b.ajax)?b.ajax.url=a:b.ajax=a})});p("ajax.url().load()",function(a,b){return this.iterator("table",function(c){Vb(c,!1===b,a)})});var bb=function(a,b,c,d,e){var f=[],g,j,i,n,l,m;i=typeof b;if(!b||"string"===i||"function"===i||b.length===k)b=[b];i=0;for(n=b.length;i<n;i++){j=b[i]&&b[i].split&&!b[i].match(/[\[\(:]/)?b[i].split(","):
[b[i]];l=0;for(m=j.length;l<m;l++)(g=c("string"===typeof j[l]?h.trim(j[l]):j[l]))&&g.length&&(f=f.concat(g))}a=x.selector[a];if(a.length){i=0;for(n=a.length;i<n;i++)f=a[i](d,e,f)}return sa(f)},cb=function(a){a||(a={});a.filter&&a.search===k&&(a.search=a.filter);return h.extend({search:"none",order:"current",page:"all"},a)},db=function(a){for(var b=0,c=a.length;b<c;b++)if(0<a[b].length)return a[0]=a[b],a[0].length=1,a.length=1,a.context=[a.context[b]],a;a.length=0;return a},Da=function(a,b){var c,
d,e,f=[],g=a.aiDisplay;c=a.aiDisplayMaster;var j=b.search;d=b.order;e=b.page;if("ssp"==y(a))return"removed"===j?[]:X(0,c.length);if("current"==e){c=a._iDisplayStart;for(d=a.fnDisplayEnd();c<d;c++)f.push(g[c])}else if("current"==d||"applied"==d)f="none"==j?c.slice():"applied"==j?g.slice():h.map(c,function(a){return-1===h.inArray(a,g)?a:null});else if("index"==d||"original"==d){c=0;for(d=a.aoData.length;c<d;c++)"none"==j?f.push(c):(e=h.inArray(c,g),(-1===e&&"removed"==j||0<=e&&"applied"==j)&&f.push(c))}return f};
p("rows()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=cb(b),c=this.iterator("table",function(c){var e=b,f;return bb("row",a,function(a){var b=Qb(a);if(b!==null&&!e)return[b];f||(f=Da(c,e));if(b!==null&&h.inArray(b,f)!==-1)return[b];if(a===null||a===k||a==="")return f;if(typeof a==="function")return h.map(f,function(b){var e=c.aoData[b];return a(b,e._aData,e.nTr)?b:null});b=Tb(ja(c.aoData,f,"nTr"));if(a.nodeName){if(a._DT_RowIndex!==k)return[a._DT_RowIndex];if(a._DT_CellIndex)return[a._DT_CellIndex.row];
b=h(a).closest("*[data-dt-row]");return b.length?[b.data("dt-row")]:[]}if(typeof a==="string"&&a.charAt(0)==="#"){var i=c.aIds[a.replace(/^#/,"")];if(i!==k)return[i.idx]}return h(b).filter(a).map(function(){return this._DT_RowIndex}).toArray()},c,e)},1);c.selector.rows=a;c.selector.opts=b;return c});p("rows().nodes()",function(){return this.iterator("row",function(a,b){return a.aoData[b].nTr||k},1)});p("rows().data()",function(){return this.iterator(!0,"rows",function(a,b){return ja(a.aoData,b,"_aData")},
1)});u("rows().cache()","row().cache()",function(a){return this.iterator("row",function(b,c){var d=b.aoData[c];return"search"===a?d._aFilterData:d._aSortData},1)});u("rows().invalidate()","row().invalidate()",function(a){return this.iterator("row",function(b,c){da(b,c,a)})});u("rows().indexes()","row().index()",function(){return this.iterator("row",function(a,b){return b},1)});u("rows().ids()","row().id()",function(a){for(var b=[],c=this.context,d=0,e=c.length;d<e;d++)for(var f=0,g=this[d].length;f<
g;f++){var h=c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);b.push((!0===a?"#":"")+h)}return new t(c,b)});u("rows().remove()","row().remove()",function(){var a=this;this.iterator("row",function(b,c,d){var e=b.aoData,f=e[c],g,h,i,n,l;e.splice(c,1);g=0;for(h=e.length;g<h;g++)if(i=e[g],l=i.anCells,null!==i.nTr&&(i.nTr._DT_RowIndex=g),null!==l){i=0;for(n=l.length;i<n;i++)l[i]._DT_CellIndex.row=g}qa(b.aiDisplayMaster,c);qa(b.aiDisplay,c);qa(a[d],c,!1);Ua(b);c=b.rowIdFn(f._aData);c!==k&&delete b.aIds[c]});
this.iterator("table",function(a){for(var c=0,d=a.aoData.length;c<d;c++)a.aoData[c].idx=c});return this});p("rows.add()",function(a){var b=this.iterator("table",function(b){var c,f,g,h=[];f=0;for(g=a.length;f<g;f++)c=a[f],c.nodeName&&"TR"===c.nodeName.toUpperCase()?h.push(oa(b,c)[0]):h.push(N(b,c));return h},1),c=this.rows(-1);c.pop();h.merge(c,b);return c});p("row()",function(a,b){return db(this.rows(a,b))});p("row().data()",function(a){var b=this.context;if(a===k)return b.length&&this.length?b[0].aoData[this[0]]._aData:
k;b[0].aoData[this[0]]._aData=a;da(b[0],this[0],"data");return this});p("row().node()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]].nTr||null:null});p("row.add()",function(a){a instanceof h&&a.length&&(a=a[0]);var b=this.iterator("table",function(b){return a.nodeName&&"TR"===a.nodeName.toUpperCase()?oa(b,a)[0]:N(b,a)});return this.row(b[0])});var eb=function(a,b){var c=a.context;if(c.length&&(c=c[0].aoData[b!==k?b:a[0]])&&c._details)c._details.remove(),c._detailsShow=
k,c._details=k},Wb=function(a,b){var c=a.context;if(c.length&&a.length){var d=c[0].aoData[a[0]];if(d._details){(d._detailsShow=b)?d._details.insertAfter(d.nTr):d._details.detach();var e=c[0],f=new t(e),g=e.aoData;f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");0<D(g,"_details").length&&(f.on("draw.dt.DT_details",function(a,b){e===b&&f.rows({page:"current"}).eq(0).each(function(a){a=g[a];a._detailsShow&&a._details.insertAfter(a.nTr)})}),f.on("column-visibility.dt.DT_details",
function(a,b){if(e===b)for(var c,d=ba(b),f=0,h=g.length;f<h;f++)c=g[f],c._details&&c._details.children("td[colspan]").attr("colspan",d)}),f.on("destroy.dt.DT_details",function(a,b){if(e===b)for(var c=0,d=g.length;c<d;c++)g[c]._details&&eb(f,c)}))}}};p("row().child()",function(a,b){var c=this.context;if(a===k)return c.length&&this.length?c[0].aoData[this[0]]._details:k;if(!0===a)this.child.show();else if(!1===a)eb(this);else if(c.length&&this.length){var d=c[0],c=c[0].aoData[this[0]],e=[],f=function(a,
b){if(h.isArray(a)||a instanceof h)for(var c=0,k=a.length;c<k;c++)f(a[c],b);else a.nodeName&&"tr"===a.nodeName.toLowerCase()?e.push(a):(c=h("<tr><td/></tr>").addClass(b),h("td",c).addClass(b).html(a)[0].colSpan=ba(d),e.push(c[0]))};f(a,b);c._details&&c._details.detach();c._details=h(e);c._detailsShow&&c._details.insertAfter(c.nTr)}return this});p(["row().child.show()","row().child().show()"],function(){Wb(this,!0);return this});p(["row().child.hide()","row().child().hide()"],function(){Wb(this,!1);
return this});p(["row().child.remove()","row().child().remove()"],function(){eb(this);return this});p("row().child.isShown()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]]._detailsShow||!1:!1});var fc=/^([^:]+):(name|visIdx|visible)$/,Xb=function(a,b,c,d,e){for(var c=[],d=0,f=e.length;d<f;d++)c.push(B(a,e[d],b));return c};p("columns()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=cb(b),c=this.iterator("table",function(c){var e=a,f=b,g=c.aoColumns,
j=D(g,"sName"),i=D(g,"nTh");return bb("column",e,function(a){var b=Qb(a);if(a==="")return X(g.length);if(b!==null)return[b>=0?b:g.length+b];if(typeof a==="function"){var e=Da(c,f);return h.map(g,function(b,f){return a(f,Xb(c,f,0,0,e),i[f])?f:null})}var k=typeof a==="string"?a.match(fc):"";if(k)switch(k[2]){case "visIdx":case "visible":b=parseInt(k[1],10);if(b<0){var m=h.map(g,function(a,b){return a.bVisible?b:null});return[m[m.length+b]]}return[$(c,b)];case "name":return h.map(j,function(a,b){return a===
k[1]?b:null});default:return[]}if(a.nodeName&&a._DT_CellIndex)return[a._DT_CellIndex.column];b=h(i).filter(a).map(function(){return h.inArray(this,i)}).toArray();if(b.length||!a.nodeName)return b;b=h(a).closest("*[data-dt-column]");return b.length?[b.data("dt-column")]:[]},c,f)},1);c.selector.cols=a;c.selector.opts=b;return c});u("columns().header()","column().header()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTh},1)});u("columns().footer()","column().footer()",
function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTf},1)});u("columns().data()","column().data()",function(){return this.iterator("column-rows",Xb,1)});u("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].mData},1)});u("columns().cache()","column().cache()",function(a){return this.iterator("column-rows",function(b,c,d,e,f){return ja(b.aoData,f,"search"===a?"_aFilterData":"_aSortData",c)},1)});u("columns().nodes()",
"column().nodes()",function(){return this.iterator("column-rows",function(a,b,c,d,e){return ja(a.aoData,e,"anCells",b)},1)});u("columns().visible()","column().visible()",function(a,b){var c=this.iterator("column",function(b,c){if(a===k)return b.aoColumns[c].bVisible;var f=b.aoColumns,g=f[c],j=b.aoData,i,n,l;if(a!==k&&g.bVisible!==a){if(a){var m=h.inArray(!0,D(f,"bVisible"),c+1);i=0;for(n=j.length;i<n;i++)l=j[i].nTr,f=j[i].anCells,l&&l.insertBefore(f[c],f[m]||null)}else h(D(b.aoData,"anCells",c)).detach();
g.bVisible=a;fa(b,b.aoHeader);fa(b,b.aoFooter);za(b)}});a!==k&&(this.iterator("column",function(c,e){s(c,null,"column-visibility",[c,e,a,b])}),(b===k||b)&&this.columns.adjust());return c});u("columns().indexes()","column().index()",function(a){return this.iterator("column",function(b,c){return"visible"===a?aa(b,c):c},1)});p("columns.adjust()",function(){return this.iterator("table",function(a){Z(a)},1)});p("column.index()",function(a,b){if(0!==this.context.length){var c=this.context[0];if("fromVisible"===
a||"toData"===a)return $(c,b);if("fromData"===a||"toVisible"===a)return aa(c,b)}});p("column()",function(a,b){return db(this.columns(a,b))});p("cells()",function(a,b,c){h.isPlainObject(a)&&(a.row===k?(c=a,a=null):(c=b,b=null));h.isPlainObject(b)&&(c=b,b=null);if(null===b||b===k)return this.iterator("table",function(b){var d=a,e=cb(c),f=b.aoData,g=Da(b,e),j=Tb(ja(f,g,"anCells")),i=h([].concat.apply([],j)),l,n=b.aoColumns.length,m,p,u,t,s,v;return bb("cell",d,function(a){var c=typeof a==="function";
if(a===null||a===k||c){m=[];p=0;for(u=g.length;p<u;p++){l=g[p];for(t=0;t<n;t++){s={row:l,column:t};if(c){v=f[l];a(s,B(b,l,t),v.anCells?v.anCells[t]:null)&&m.push(s)}else m.push(s)}}return m}if(h.isPlainObject(a))return[a];c=i.filter(a).map(function(a,b){return{row:b._DT_CellIndex.row,column:b._DT_CellIndex.column}}).toArray();if(c.length||!a.nodeName)return c;v=h(a).closest("*[data-dt-row]");return v.length?[{row:v.data("dt-row"),column:v.data("dt-column")}]:[]},b,e)});var d=this.columns(b,c),e=this.rows(a,
c),f,g,j,i,n,l=this.iterator("table",function(a,b){f=[];g=0;for(j=e[b].length;g<j;g++){i=0;for(n=d[b].length;i<n;i++)f.push({row:e[b][g],column:d[b][i]})}return f},1);h.extend(l.selector,{cols:b,rows:a,opts:c});return l});u("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(a,b,c){return(a=a.aoData[b])&&a.anCells?a.anCells[c]:k},1)});p("cells().data()",function(){return this.iterator("cell",function(a,b,c){return B(a,b,c)},1)});u("cells().cache()","cell().cache()",function(a){a=
"search"===a?"_aFilterData":"_aSortData";return this.iterator("cell",function(b,c,d){return b.aoData[c][a][d]},1)});u("cells().render()","cell().render()",function(a){return this.iterator("cell",function(b,c,d){return B(b,c,d,a)},1)});u("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(a,b,c){return{row:b,column:c,columnVisible:aa(a,c)}},1)});u("cells().invalidate()","cell().invalidate()",function(a){return this.iterator("cell",function(b,c,d){da(b,c,a,d)})});p("cell()",
function(a,b,c){return db(this.cells(a,b,c))});p("cell().data()",function(a){var b=this.context,c=this[0];if(a===k)return b.length&&c.length?B(b[0],c[0].row,c[0].column):k;lb(b[0],c[0].row,c[0].column,a);da(b[0],c[0].row,"data",c[0].column);return this});p("order()",function(a,b){var c=this.context;if(a===k)return 0!==c.length?c[0].aaSorting:k;"number"===typeof a?a=[[a,b]]:a.length&&!h.isArray(a[0])&&(a=Array.prototype.slice.call(arguments));return this.iterator("table",function(b){b.aaSorting=a.slice()})});
p("order.listener()",function(a,b,c){return this.iterator("table",function(d){Oa(d,a,b,c)})});p("order.fixed()",function(a){if(!a){var b=this.context,b=b.length?b[0].aaSortingFixed:k;return h.isArray(b)?{pre:b}:b}return this.iterator("table",function(b){b.aaSortingFixed=h.extend(!0,{},a)})});p(["columns().order()","column().order()"],function(a){var b=this;return this.iterator("table",function(c,d){var e=[];h.each(b[d],function(b,c){e.push([c,a])});c.aaSorting=e})});p("search()",function(a,b,c,d){var e=
this.context;return a===k?0!==e.length?e[0].oPreviousSearch.sSearch:k:this.iterator("table",function(e){e.oFeatures.bFilter&&ga(e,h.extend({},e.oPreviousSearch,{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),1)})});u("columns().search()","column().search()",function(a,b,c,d){return this.iterator("column",function(e,f){var g=e.aoPreSearchCols;if(a===k)return g[f].sSearch;e.oFeatures.bFilter&&(h.extend(g[f],{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?
!0:c,bCaseInsensitive:null===d?!0:d}),ga(e,e.oPreviousSearch,1))})});p("state()",function(){return this.context.length?this.context[0].oSavedState:null});p("state.clear()",function(){return this.iterator("table",function(a){a.fnStateSaveCallback.call(a.oInstance,a,{})})});p("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null});p("state.save()",function(){return this.iterator("table",function(a){za(a)})});m.versionCheck=m.fnVersionCheck=function(a){for(var b=m.version.split("."),
a=a.split("."),c,d,e=0,f=a.length;e<f;e++)if(c=parseInt(b[e],10)||0,d=parseInt(a[e],10)||0,c!==d)return c>d;return!0};m.isDataTable=m.fnIsDataTable=function(a){var b=h(a).get(0),c=!1;if(a instanceof m.Api)return!0;h.each(m.settings,function(a,e){var f=e.nScrollHead?h("table",e.nScrollHead)[0]:null,g=e.nScrollFoot?h("table",e.nScrollFoot)[0]:null;if(e.nTable===b||f===b||g===b)c=!0});return c};m.tables=m.fnTables=function(a){var b=!1;h.isPlainObject(a)&&(b=a.api,a=a.visible);var c=h.map(m.settings,
function(b){if(!a||a&&h(b.nTable).is(":visible"))return b.nTable});return b?new t(c):c};m.camelToHungarian=J;p("$()",function(a,b){var c=this.rows(b).nodes(),c=h(c);return h([].concat(c.filter(a).toArray(),c.find(a).toArray()))});h.each(["on","one","off"],function(a,b){p(b+"()",function(){var a=Array.prototype.slice.call(arguments);a[0]=h.map(a[0].split(/\s/),function(a){return!a.match(/\.dt\b/)?a+".dt":a}).join(" ");var d=h(this.tables().nodes());d[b].apply(d,a);return this})});p("clear()",function(){return this.iterator("table",
function(a){pa(a)})});p("settings()",function(){return new t(this.context,this.context)});p("init()",function(){var a=this.context;return a.length?a[0].oInit:null});p("data()",function(){return this.iterator("table",function(a){return D(a.aoData,"_aData")}).flatten()});p("destroy()",function(a){a=a||!1;return this.iterator("table",function(b){var c=b.nTableWrapper.parentNode,d=b.oClasses,e=b.nTable,f=b.nTBody,g=b.nTHead,j=b.nTFoot,i=h(e),f=h(f),k=h(b.nTableWrapper),l=h.map(b.aoData,function(a){return a.nTr}),
p;b.bDestroying=!0;s(b,"aoDestroyCallback","destroy",[b]);a||(new t(b)).columns().visible(!0);k.off(".DT").find(":not(tbody *)").off(".DT");h(E).off(".DT-"+b.sInstance);e!=g.parentNode&&(i.children("thead").detach(),i.append(g));j&&e!=j.parentNode&&(i.children("tfoot").detach(),i.append(j));b.aaSorting=[];b.aaSortingFixed=[];ya(b);h(l).removeClass(b.asStripeClasses.join(" "));h("th, td",g).removeClass(d.sSortable+" "+d.sSortableAsc+" "+d.sSortableDesc+" "+d.sSortableNone);b.bJUI&&(h("th span."+d.sSortIcon+
", td span."+d.sSortIcon,g).detach(),h("th, td",g).each(function(){var a=h("div."+d.sSortJUIWrapper,this);h(this).append(a.contents());a.detach()}));f.children().detach();f.append(l);g=a?"remove":"detach";i[g]();k[g]();!a&&c&&(c.insertBefore(e,b.nTableReinsertBefore),i.css("width",b.sDestroyWidth).removeClass(d.sTable),(p=b.asDestroyStripes.length)&&f.children().each(function(a){h(this).addClass(b.asDestroyStripes[a%p])}));c=h.inArray(b,m.settings);-1!==c&&m.settings.splice(c,1)})});h.each(["column",
"row","cell"],function(a,b){p(b+"s().every()",function(a){var d=this.selector.opts,e=this;return this.iterator(b,function(f,g,h,i,m){a.call(e[b](g,"cell"===b?h:d,"cell"===b?d:k),g,h,i,m)})})});p("i18n()",function(a,b,c){var d=this.context[0],a=R(a)(d.oLanguage);a===k&&(a=b);c!==k&&h.isPlainObject(a)&&(a=a[c]!==k?a[c]:a._);return a.replace("%d",c)});m.version="1.10.15";m.settings=[];m.models={};m.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0};m.models.oRow={nTr:null,anCells:null,
_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,idx:-1};m.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null};m.defaults=
{aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bJQueryUI:!1,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(a){try{return JSON.parse((-1===a.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+a.sInstance+"_"+location.pathname))}catch(b){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(a,b){try{(-1===a.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+a.sInstance+
"_"+location.pathname,JSON.stringify(b))}catch(c){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",
sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:h.extend({},m.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"};
Y(m.defaults);m.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null};Y(m.defaults.column);m.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,
bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],
aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:k,oAjaxData:k,fnServerData:null,
aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,bJUI:null,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==y(this)?1*this._iRecordsTotal:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==y(this)?1*this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var a=
this._iDisplayLength,b=this._iDisplayStart,c=b+a,d=this.aiDisplay.length,e=this.oFeatures,f=e.bPaginate;return e.bServerSide?!1===f||-1===a?b+d:Math.min(b+a,this._iRecordsDisplay):!f||c>d||-1===a?d:c},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null};m.ext=x={buttons:{},classes:{},build:"bs/jq-2.2.4/dt-1.10.15",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},
header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:m.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:m.version};h.extend(x,{afnFiltering:x.search,aTypes:x.type.detect,ofnSearch:x.type.search,oSort:x.type.order,afnSortData:x.order,aoFeatures:x.feature,oApi:x.internal,oStdClasses:x.classes,oPagination:x.pager});h.extend(m.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",
sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",
sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""});var Ea="",Ea="",G=Ea+"ui-state-default",ka=Ea+"css_right ui-icon ui-icon-",Yb=Ea+"fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";h.extend(m.ext.oJUIClasses,
m.ext.classes,{sPageButton:"fg-button ui-button "+G,sPageButtonActive:"ui-state-disabled",sPageButtonDisabled:"ui-state-disabled",sPaging:"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",sSortAsc:G+" sorting_asc",sSortDesc:G+" sorting_desc",sSortable:G+" sorting",sSortableAsc:G+" sorting_asc_disabled",sSortableDesc:G+" sorting_desc_disabled",sSortableNone:G+" sorting_disabled",sSortJUIAsc:ka+"triangle-1-n",sSortJUIDesc:ka+"triangle-1-s",sSortJUI:ka+"carat-2-n-s",
sSortJUIAscAllowed:ka+"carat-1-n",sSortJUIDescAllowed:ka+"carat-1-s",sSortJUIWrapper:"DataTables_sort_wrapper",sSortIcon:"DataTables_sort_icon",sScrollHead:"dataTables_scrollHead "+G,sScrollFoot:"dataTables_scrollFoot "+G,sHeaderTH:G,sFooterTH:G,sJUIHeader:Yb+" ui-corner-tl ui-corner-tr",sJUIFooter:Yb+" ui-corner-bl ui-corner-br"});var Nb=m.ext.pager;h.extend(Nb,{simple:function(){return["previous","next"]},full:function(){return["first","previous","next","last"]},numbers:function(a,b){return[ia(a,
b)]},simple_numbers:function(a,b){return["previous",ia(a,b),"next"]},full_numbers:function(a,b){return["first","previous",ia(a,b),"next","last"]},first_last_numbers:function(a,b){return["first",ia(a,b),"last"]},_numbers:ia,numbers_length:7});h.extend(!0,m.ext.renderer,{pageButton:{_:function(a,b,c,d,e,f){var g=a.oClasses,j=a.oLanguage.oPaginate,i=a.oLanguage.oAria.paginate||{},m,l,p=0,r=function(b,d){var k,t,u,s,v=function(b){Va(a,b.data.action,true)};k=0;for(t=d.length;k<t;k++){s=d[k];if(h.isArray(s)){u=
h("<"+(s.DT_el||"div")+"/>").appendTo(b);r(u,s)}else{m=null;l="";switch(s){case "ellipsis":b.append('<span class="ellipsis">&#x2026;</span>');break;case "first":m=j.sFirst;l=s+(e>0?"":" "+g.sPageButtonDisabled);break;case "previous":m=j.sPrevious;l=s+(e>0?"":" "+g.sPageButtonDisabled);break;case "next":m=j.sNext;l=s+(e<f-1?"":" "+g.sPageButtonDisabled);break;case "last":m=j.sLast;l=s+(e<f-1?"":" "+g.sPageButtonDisabled);break;default:m=s+1;l=e===s?g.sPageButtonActive:""}if(m!==null){u=h("<a>",{"class":g.sPageButton+
" "+l,"aria-controls":a.sTableId,"aria-label":i[s],"data-dt-idx":p,tabindex:a.iTabIndex,id:c===0&&typeof s==="string"?a.sTableId+"_"+s:null}).html(m).appendTo(b);Ya(u,{action:s},v);p++}}}},t;try{t=h(b).find(H.activeElement).data("dt-idx")}catch(u){}r(h(b).empty(),d);t!==k&&h(b).find("[data-dt-idx="+t+"]").focus()}}});h.extend(m.ext.type.detect,[function(a,b){var c=b.oLanguage.sDecimal;return ab(a,c)?"num"+c:null},function(a){if(a&&!(a instanceof Date)&&!cc.test(a))return null;var b=Date.parse(a);
return null!==b&&!isNaN(b)||M(a)?"date":null},function(a,b){var c=b.oLanguage.sDecimal;return ab(a,c,!0)?"num-fmt"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Sb(a,c)?"html-num"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Sb(a,c,!0)?"html-num-fmt"+c:null},function(a){return M(a)||"string"===typeof a&&-1!==a.indexOf("<")?"html":null}]);h.extend(m.ext.type.search,{html:function(a){return M(a)?a:"string"===typeof a?a.replace(Pb," ").replace(Ca,""):""},string:function(a){return M(a)?
a:"string"===typeof a?a.replace(Pb," "):a}});var Ba=function(a,b,c,d){if(0!==a&&(!a||"-"===a))return-Infinity;b&&(a=Rb(a,b));a.replace&&(c&&(a=a.replace(c,"")),d&&(a=a.replace(d,"")));return 1*a};h.extend(x.type.order,{"date-pre":function(a){return Date.parse(a)||-Infinity},"html-pre":function(a){return M(a)?"":a.replace?a.replace(/<.*?>/g,"").toLowerCase():a+""},"string-pre":function(a){return M(a)?"":"string"===typeof a?a.toLowerCase():!a.toString?"":a.toString()},"string-asc":function(a,b){return a<
b?-1:a>b?1:0},"string-desc":function(a,b){return a<b?1:a>b?-1:0}});fb("");h.extend(!0,m.ext.renderer,{header:{_:function(a,b,c,d){h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(c.sSortingClass+" "+d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass)}})},jqueryui:function(a,b,c,d){h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon+" "+c.sSortingClassJUI)).appendTo(b);
h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass);b.find("span."+d.sSortIcon).removeClass(d.sSortJUIAsc+" "+d.sSortJUIDesc+" "+d.sSortJUI+" "+d.sSortJUIAscAllowed+" "+d.sSortJUIDescAllowed).addClass(h[e]=="asc"?d.sSortJUIAsc:h[e]=="desc"?d.sSortJUIDesc:c.sSortingClassJUI)}})}}});var Zb=function(a){return"string"===typeof a?a.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,
"&quot;"):a};m.render={number:function(a,b,c,d,e){return{display:function(f){if("number"!==typeof f&&"string"!==typeof f)return f;var g=0>f?"-":"",h=parseFloat(f);if(isNaN(h))return Zb(f);h=h.toFixed(c);f=Math.abs(h);h=parseInt(f,10);f=c?b+(f-h).toFixed(c).substring(2):"";return g+(d||"")+h.toString().replace(/\B(?=(\d{3})+(?!\d))/g,a)+f+(e||"")}}},text:function(){return{display:Zb}}};h.extend(m.ext.internal,{_fnExternApiFunc:Ob,_fnBuildAjax:ua,_fnAjaxUpdate:nb,_fnAjaxParameters:wb,_fnAjaxUpdateDraw:xb,
_fnAjaxDataSrc:va,_fnAddColumn:Ga,_fnColumnOptions:la,_fnAdjustColumnSizing:Z,_fnVisibleToColumnIndex:$,_fnColumnIndexToVisible:aa,_fnVisbleColumns:ba,_fnGetColumns:na,_fnColumnTypes:Ia,_fnApplyColumnDefs:kb,_fnHungarianMap:Y,_fnCamelToHungarian:J,_fnLanguageCompat:Fa,_fnBrowserDetect:ib,_fnAddData:N,_fnAddTr:oa,_fnNodeToDataIndex:function(a,b){return b._DT_RowIndex!==k?b._DT_RowIndex:null},_fnNodeToColumnIndex:function(a,b,c){return h.inArray(c,a.aoData[b].anCells)},_fnGetCellData:B,_fnSetCellData:lb,
_fnSplitObjNotation:La,_fnGetObjectDataFn:R,_fnSetObjectDataFn:S,_fnGetDataMaster:Ma,_fnClearTable:pa,_fnDeleteIndex:qa,_fnInvalidate:da,_fnGetRowElements:Ka,_fnCreateTr:Ja,_fnBuildHead:mb,_fnDrawHead:fa,_fnDraw:O,_fnReDraw:T,_fnAddOptionsHtml:pb,_fnDetectHeader:ea,_fnGetUniqueThs:ta,_fnFeatureHtmlFilter:rb,_fnFilterComplete:ga,_fnFilterCustom:Ab,_fnFilterColumn:zb,_fnFilter:yb,_fnFilterCreateSearch:Ra,_fnEscapeRegex:Sa,_fnFilterData:Bb,_fnFeatureHtmlInfo:ub,_fnUpdateInfo:Eb,_fnInfoMacros:Fb,_fnInitialise:ha,
_fnInitComplete:wa,_fnLengthChange:Ta,_fnFeatureHtmlLength:qb,_fnFeatureHtmlPaginate:vb,_fnPageChange:Va,_fnFeatureHtmlProcessing:sb,_fnProcessingDisplay:C,_fnFeatureHtmlTable:tb,_fnScrollDraw:ma,_fnApplyToChildren:I,_fnCalculateColumnWidths:Ha,_fnThrottle:Qa,_fnConvertToWidth:Gb,_fnGetWidestNode:Hb,_fnGetMaxLenString:Ib,_fnStringToCss:v,_fnSortFlatten:W,_fnSort:ob,_fnSortAria:Kb,_fnSortListener:Xa,_fnSortAttachListener:Oa,_fnSortingClasses:ya,_fnSortData:Jb,_fnSaveState:za,_fnLoadState:Lb,_fnSettingsFromNode:Aa,
_fnLog:K,_fnMap:F,_fnBindAction:Ya,_fnCallbackReg:z,_fnCallbackFire:s,_fnLengthOverflow:Ua,_fnRenderer:Pa,_fnDataSource:y,_fnRowAttributes:Na,_fnCalculateEnd:function(){}});h.fn.dataTable=m;m.$=h;h.fn.dataTableSettings=m.settings;h.fn.dataTableExt=m.ext;h.fn.DataTable=function(a){return h(this).dataTable(a).api()};h.each(m,function(a,b){h.fn.DataTable[a]=b});return h.fn.dataTable});


/*!
 DataTables Bootstrap 3 integration
 ©2011-2015 SpryMedia Ltd - datatables.net/license
*/
(function(b){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(a){return b(a,window,document)}):"object"===typeof exports?module.exports=function(a,d){a||(a=window);if(!d||!d.fn.dataTable)d=require("datatables.net")(a,d).$;return b(d,a,a.document)}:b(jQuery,window,document)})(function(b,a,d,m){var f=b.fn.dataTable;b.extend(!0,f.defaults,{dom:"<'row'<'col-sm-6'l><'col-sm-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-5'i><'col-sm-7'p>>",renderer:"bootstrap"});b.extend(f.ext.classes,
{sWrapper:"dataTables_wrapper form-inline dt-bootstrap",sFilterInput:"form-control input-sm",sLengthSelect:"form-control input-sm",sProcessing:"dataTables_processing panel panel-default"});f.ext.renderer.pageButton.bootstrap=function(a,h,r,s,j,n){var o=new f.Api(a),t=a.oClasses,k=a.oLanguage.oPaginate,u=a.oLanguage.oAria.paginate||{},e,g,p=0,q=function(d,f){var l,h,i,c,m=function(a){a.preventDefault();!b(a.currentTarget).hasClass("disabled")&&o.page()!=a.data.action&&o.page(a.data.action).draw("page")};
l=0;for(h=f.length;l<h;l++)if(c=f[l],b.isArray(c))q(d,c);else{g=e="";switch(c){case "ellipsis":e="&#x2026;";g="disabled";break;case "first":e=k.sFirst;g=c+(0<j?"":" disabled");break;case "previous":e=k.sPrevious;g=c+(0<j?"":" disabled");break;case "next":e=k.sNext;g=c+(j<n-1?"":" disabled");break;case "last":e=k.sLast;g=c+(j<n-1?"":" disabled");break;default:e=c+1,g=j===c?"active":""}e&&(i=b("<li>",{"class":t.sPageButton+" "+g,id:0===r&&"string"===typeof c?a.sTableId+"_"+c:null}).append(b("<a>",{href:"#",
"aria-controls":a.sTableId,"aria-label":u[c],"data-dt-idx":p,tabindex:a.iTabIndex}).html(e)).appendTo(d),a.oApi._fnBindAction(i,{action:c},m),p++)}},i;try{i=b(h).find(d.activeElement).data("dt-idx")}catch(v){}q(b(h).empty().html('<ul class="pagination"/>').children("ul"),s);i!==m&&b(h).find("[data-dt-idx="+i+"]").focus()};return f});



/*! DataTables Bootstrap 3 integration
 * ©2011-2015 SpryMedia Ltd - datatables.net/license
 */

/**
 * DataTables integration for Bootstrap 3. This requires Bootstrap 3 and
 * DataTables 1.10 or newer.
 *
 * This file sets the defaults and adds options to DataTables to style its
 * controls using Bootstrap. See http://datatables.net/manual/styling/bootstrap
 * for further information.
 */
(function( factory ){
  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( ['jquery', 'datatables.net'], function ( $ ) {
      return factory( $, window, document );
    } );
  }
  else if ( typeof exports === 'object' ) {
    // CommonJS
    module.exports = function (root, $) {
      if ( ! root ) {
        root = window;
      }

      if ( ! $ || ! $.fn.dataTable ) {
        // Require DataTables, which attaches to jQuery, including
        // jQuery if needed and have a $ property so we can access the
        // jQuery object that is used
        $ = require('datatables.net')(root, $).$;
      }

      return factory( $, root, root.document );
    };
  }
  else {
    // Browser
    factory( jQuery, window, document );
  }
}(function( $, window, document, undefined ) {
'use strict';
var DataTable = $.fn.dataTable;


/* Set the defaults for DataTables initialisation */
$.extend( true, DataTable.defaults, {
  dom:
    "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
    "<'row'<'col-sm-12'tr>>" +
    // "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
    "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
  renderer: 'bootstrap'
} );


/* Default class modification */
$.extend( DataTable.ext.classes, {
  sWrapper:      "dataTables_wrapper container-fluid dt-bootstrap4",
  sFilterInput:  "form-control form-control-sm",
  sLengthSelect: "form-control form-control-sm",
  sProcessing:   "dataTables_processing card",
  sPageButton:   "paginate_button page-item"
} );


/* Bootstrap paging button renderer */
DataTable.ext.renderer.pageButton.bootstrap = function ( settings, host, idx, buttons, page, pages ) {
  var api     = new DataTable.Api( settings );
  var classes = settings.oClasses;
  var lang    = settings.oLanguage.oPaginate;
  var aria = settings.oLanguage.oAria.paginate || {};
  var btnDisplay, btnClass, counter=0;

  var attach = function( container, buttons ) {
    var i, ien, node, button;
    var clickHandler = function ( e ) {
      e.preventDefault();
      if ( !$(e.currentTarget).hasClass('disabled') && api.page() != e.data.action ) {
        api.page( e.data.action ).draw( 'page' );
      }
    };

    for ( i=0, ien=buttons.length ; i<ien ; i++ ) {
      button = buttons[i];

      if ( $.isArray( button ) ) {
        attach( container, button );
      }
      else {
        btnDisplay = '';
        btnClass = '';

        switch ( button ) {
          case 'ellipsis':
            btnDisplay = '&#x2026;';
            btnClass = 'disabled';
            break;

          case 'first':
            btnDisplay = lang.sFirst;
            btnClass = button + (page > 0 ?
              '' : ' disabled');
            break;

          case 'previous':
            // <a class="page-link" href="#" aria-label="Previous">
            //   <span aria-hidden="true">&#10094;</span>
            //   <span class="sr-only">Previous</span>
            // </a>
            btnDisplay = '&#10094;'; // @@custom
            // lang.sPrevious;
            btnClass = button + (page > 0 ?
              '' : ' disabled');
            break;

          case 'next':
            // <a class="page-link" href="/mijn-biedingen.html" aria-label="Next">
            //   <span aria-hidden="true">&#10095;</span>
            //   <span class="sr-only">Next</span>
            // </a>
            btnDisplay = '&#10095;'; // @@custom
            // btnDisplay = lang.sNext;
            btnClass = button + (page < pages-1 ?
              '' : ' disabled');
            break;

          case 'last':
            btnDisplay = lang.sLast;
            btnClass = button + (page < pages-1 ?
              '' : ' disabled');
            break;

          default:
            btnDisplay = button + 1;
            btnClass = page === button ?
              'active' : '';
            break;
        }

        if ( btnDisplay ) {
          node = $('<li>', {
              'class': classes.sPageButton+' '+btnClass,
              'id': idx === 0 && typeof button === 'string' ?
                settings.sTableId +'_'+ button :
                null
            } )
            .append( $('<a>', {
                'href': '#',
                'aria-controls': settings.sTableId,
                'aria-label': aria[ button ],
                'data-dt-idx': counter,
                'tabindex': settings.iTabIndex,
                'class': 'page-link'
              } )
              .html( btnDisplay )
            )
            .appendTo( container );

          settings.oApi._fnBindAction(
            node, {action: button}, clickHandler
          );

          counter++;
        }
      }
    }
  };

  // IE9 throws an 'unknown error' if document.activeElement is used
  // inside an iframe or frame.
  var activeEl;

  try {
    // Because this approach is destroying and recreating the paging
    // elements, focus is lost on the select button which is bad for
    // accessibility. So we want to restore focus once the draw has
    // completed
    activeEl = $(host).find(document.activeElement).data('dt-idx');
  }
  catch (e) {}

  attach(
    $(host).empty().html('<ul class="pagination"/>').children('ul'),
    buttons
  );

  if ( activeEl !== undefined ) {
    $(host).find( '[data-dt-idx='+activeEl+']' ).focus();
  }
};


return DataTable;
}));
/*
 * jQuery Highlight plugin
 *
 * Based on highlight v3 by Johann Burkard
 * http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html
 *
 * Code a little bit refactored and cleaned (in my humble opinion).
 * Most important changes:
 *  - has an option to highlight only entire words (wordsOnly - false by default),
 *  - has an option to be case sensitive (caseSensitive - false by default)
 *  - highlight element tag and class names can be specified in options
 *
 * Usage:
 *   // wrap every occurrance of text 'lorem' in content
 *   // with <span class='highlight'> (default options)
 *   $('#content').highlight('lorem');
 *
 *   // search for and highlight more terms at once
 *   // so you can save some time on traversing DOM
 *   $('#content').highlight(['lorem', 'ipsum']);
 *   $('#content').highlight('lorem ipsum');
 *
 *   // search only for entire word 'lorem'
 *   $('#content').highlight('lorem', { wordsOnly: true });
 *
 *   // don't ignore case during search of term 'lorem'
 *   $('#content').highlight('lorem', { caseSensitive: true });
 *
 *   // wrap every occurrance of term 'ipsum' in content
 *   // with <em class='important'>
 *   $('#content').highlight('ipsum', { element: 'em', className: 'important' });
 *
 *   // remove default highlight
 *   $('#content').unhighlight();
 *
 *   // remove custom highlight
 *   $('#content').unhighlight({ element: 'em', className: 'important' });
 *
 *
 * Copyright (c) 2009 Bartek Szopka
 *
 * Licensed under MIT license.
 *
 */

jQuery.extend({
    highlight: function (node, re, nodeName, className) {
        if (node.nodeType === 3) {
            var match = node.data.match(re);
            if (match) {
                var highlight = document.createElement(nodeName || 'span');
                highlight.className = className || 'highlight';
                var wordNode = node.splitText(match.index);
                wordNode.splitText(match[0].length);
                var wordClone = wordNode.cloneNode(true);
                highlight.appendChild(wordClone);
                wordNode.parentNode.replaceChild(highlight, wordNode);
                return 1; //skip added node in parent
            }
        } else if ((node.nodeType === 1 && node.childNodes) && // only element nodes that have children
                !/(script|style)/i.test(node.tagName) && // ignore script and style nodes
                !(node.tagName === nodeName.toUpperCase() && node.className === className)) { // skip if already highlighted
            for (var i = 0; i < node.childNodes.length; i++) {
                i += jQuery.highlight(node.childNodes[i], re, nodeName, className);
            }
        }
        return 0;
    }
});

jQuery.fn.unhighlight = function (options) {
    var settings = { className: 'highlight', element: 'span' };
    jQuery.extend(settings, options);

    return this.find(settings.element + "." + settings.className).each(function () {
        var parent = this.parentNode;
        parent.replaceChild(this.firstChild, this);
        parent.normalize();
    }).end();
};

jQuery.fn.highlight = function (words, options) {
    var settings = { className: 'highlight', element: 'span', caseSensitive: false, wordsOnly: false };
    jQuery.extend(settings, options);

    if (words.constructor === String) {
        words = [words];
    }
    words = jQuery.grep(words, function(word, i){
      return word != '';
    });
    words = jQuery.map(words, function(word, i) {
      return word.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    });
    if (words.length == 0) { return this; };

    var flag = settings.caseSensitive ? "" : "i";
    var pattern = "(" + words.join("|") + ")";
    if (settings.wordsOnly) {
        pattern = "\\b" + pattern + "\\b";
    }
    var re = new RegExp(pattern, flag);

    return this.each(function () {
        jQuery.highlight(this, re, settings.element, settings.className);
    });
};
/*
 * jQuery.liveFilter
 *
 * Copyright (c) 2009 Mike Merritt
 *
 * Forked by Lim Chee Aun (cheeaun.com)
 *
 */

(function($){
  $.fn.liveFilter = function(inputEl, filterEl, options){
    var defaults = {
      filterChildSelector: null,
      filter: function(el, val){
        return $(el).text().toUpperCase().indexOf(val.toUpperCase()) >= 0;
      },
      before: function(){},
      after: function(){}
    };
    var options = $.extend(defaults, options);

    var el = $(this).find(filterEl);
    if (options.filterChildSelector) el = el.find(options.filterChildSelector);

    var filter = options.filter;
    $(inputEl).keyup(function(){
      var val = $(this).val();
      var contains = el.filter(function(){
        return filter(this, val);
      });
      var containsNot = el.not(contains);
      if (options.filterChildSelector){
        contains = contains.parents(filterEl);
        containsNot = containsNot.parents(filterEl).hide();
      }

      options.before.call(this, contains, containsNot);

      contains.show();
      containsNot.hide();

      if (val === '') {
        contains.show();
        containsNot.show();
      }

      options.after.call(this, contains, containsNot);
    });
  }
})(jQuery);

/**
* jquery-match-height 0.7.2 by @liabru
* http://brm.io/jquery-match-height/
* License: MIT
*/

;(function(factory) { // eslint-disable-line no-extra-semi
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof module !== 'undefined' && module.exports) {
        // CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Global
        factory(jQuery);
    }
})(function($) {
    /*
    *  internal
    */

    var _previousResizeWidth = -1,
        _updateTimeout = -1;

    /*
    *  _parse
    *  value parse utility function
    */

    var _parse = function(value) {
        // parse value and convert NaN to 0
        return parseFloat(value) || 0;
    };

    /*
    *  _rows
    *  utility function returns array of jQuery selections representing each row
    *  (as displayed after float wrapping applied by browser)
    */

    var _rows = function(elements) {
        var tolerance = 1,
            $elements = $(elements),
            lastTop = null,
            rows = [];

        // group elements by their top position
        $elements.each(function(){
            var $that = $(this),
                top = $that.offset().top - _parse($that.css('margin-top')),
                lastRow = rows.length > 0 ? rows[rows.length - 1] : null;

            if (lastRow === null) {
                // first item on the row, so just push it
                rows.push($that);
            } else {
                // if the row top is the same, add to the row group
                if (Math.floor(Math.abs(lastTop - top)) <= tolerance) {
                    rows[rows.length - 1] = lastRow.add($that);
                } else {
                    // otherwise start a new row group
                    rows.push($that);
                }
            }

            // keep track of the last row top
            lastTop = top;
        });

        return rows;
    };

    /*
    *  _parseOptions
    *  handle plugin options
    */

    var _parseOptions = function(options) {
        var opts = {
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        };

        if (typeof options === 'object') {
            return $.extend(opts, options);
        }

        if (typeof options === 'boolean') {
            opts.byRow = options;
        } else if (options === 'remove') {
            opts.remove = true;
        }

        return opts;
    };

    /*
    *  matchHeight
    *  plugin definition
    */

    var matchHeight = $.fn.matchHeight = function(options) {
        var opts = _parseOptions(options);

        // handle remove
        if (opts.remove) {
            var that = this;

            // remove fixed height from all selected elements
            this.css(opts.property, '');

            // remove selected elements from all groups
            $.each(matchHeight._groups, function(key, group) {
                group.elements = group.elements.not(that);
            });

            // TODO: cleanup empty groups

            return this;
        }

        if (this.length <= 1 && !opts.target) {
            return this;
        }

        // keep track of this group so we can re-apply later on load and resize events
        matchHeight._groups.push({
            elements: this,
            options: opts
        });

        // match each element's height to the tallest element in the selection
        matchHeight._apply(this, opts);

        return this;
    };

    /*
    *  plugin global options
    */

    matchHeight.version = '0.7.2';
    matchHeight._groups = [];
    matchHeight._throttle = 80;
    matchHeight._maintainScroll = false;
    matchHeight._beforeUpdate = null;
    matchHeight._afterUpdate = null;
    matchHeight._rows = _rows;
    matchHeight._parse = _parse;
    matchHeight._parseOptions = _parseOptions;

    /*
    *  matchHeight._apply
    *  apply matchHeight to given elements
    */

    matchHeight._apply = function(elements, options) {
        var opts = _parseOptions(options),
            $elements = $(elements),
            rows = [$elements];

        // take note of scroll position
        var scrollTop = $(window).scrollTop(),
            htmlHeight = $('html').outerHeight(true);

        // get hidden parents
        var $hiddenParents = $elements.parents().filter(':hidden');

        // cache the original inline style
        $hiddenParents.each(function() {
            var $that = $(this);
            $that.data('style-cache', $that.attr('style'));
        });

        // temporarily must force hidden parents visible
        $hiddenParents.css('display', 'block');

        // get rows if using byRow, otherwise assume one row
        if (opts.byRow && !opts.target) {

            // must first force an arbitrary equal height so floating elements break evenly
            $elements.each(function() {
                var $that = $(this),
                    display = $that.css('display');

                // temporarily force a usable display value
                if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
                    display = 'block';
                }

                // cache the original inline style
                $that.data('style-cache', $that.attr('style'));

                $that.css({
                    'display': display,
                    'padding-top': '0',
                    'padding-bottom': '0',
                    'margin-top': '0',
                    'margin-bottom': '0',
                    'border-top-width': '0',
                    'border-bottom-width': '0',
                    'height': '100px',
                    'overflow': 'hidden'
                });
            });

            // get the array of rows (based on element top position)
            rows = _rows($elements);

            // revert original inline styles
            $elements.each(function() {
                var $that = $(this);
                $that.attr('style', $that.data('style-cache') || '');
            });
        }

        $.each(rows, function(key, row) {
            var $row = $(row),
                targetHeight = 0;

            if (!opts.target) {
                // skip apply to rows with only one item
                if (opts.byRow && $row.length <= 1) {
                    $row.css(opts.property, '');
                    return;
                }

                // iterate the row and find the max height
                $row.each(function(){
                    var $that = $(this),
                        style = $that.attr('style'),
                        display = $that.css('display');

                    // temporarily force a usable display value
                    if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
                        display = 'block';
                    }

                    // ensure we get the correct actual height (and not a previously set height value)
                    var css = { 'display': display };
                    css[opts.property] = '';
                    $that.css(css);

                    // find the max height (including padding, but not margin)
                    if ($that.outerHeight(false) > targetHeight) {
                        targetHeight = $that.outerHeight(false);
                    }

                    // revert styles
                    if (style) {
                        $that.attr('style', style);
                    } else {
                        $that.css('display', '');
                    }
                });
            } else {
                // if target set, use the height of the target element
                targetHeight = opts.target.outerHeight(false);
            }

            // iterate the row and apply the height to all elements
            $row.each(function(){
                var $that = $(this),
                    verticalPadding = 0;

                // don't apply to a target
                if (opts.target && $that.is(opts.target)) {
                    return;
                }

                // handle padding and border correctly (required when not using border-box)
                if ($that.css('box-sizing') !== 'border-box') {
                    verticalPadding += _parse($that.css('border-top-width')) + _parse($that.css('border-bottom-width'));
                    verticalPadding += _parse($that.css('padding-top')) + _parse($that.css('padding-bottom'));
                }

                // set the height (accounting for padding and border)
                $that.css(opts.property, (targetHeight - verticalPadding) + 'px');
            });
        });

        // revert hidden parents
        $hiddenParents.each(function() {
            var $that = $(this);
            $that.attr('style', $that.data('style-cache') || null);
        });

        // restore scroll position if enabled
        if (matchHeight._maintainScroll) {
            $(window).scrollTop((scrollTop / htmlHeight) * $('html').outerHeight(true));
        }

        return this;
    };

    /*
    *  matchHeight._applyDataApi
    *  applies matchHeight to all elements with a data-match-height attribute
    */

    matchHeight._applyDataApi = function() {
        var groups = {};

        // generate groups by their groupId set by elements using data-match-height
        $('[data-match-height], [data-mh]').each(function() {
            var $this = $(this),
                groupId = $this.attr('data-mh') || $this.attr('data-match-height');

            if (groupId in groups) {
                groups[groupId] = groups[groupId].add($this);
            } else {
                groups[groupId] = $this;
            }
        });

        // apply matchHeight to each group
        $.each(groups, function() {
            this.matchHeight(true);
        });
    };

    /*
    *  matchHeight._update
    *  updates matchHeight on all current groups with their correct options
    */

    var _update = function(event) {
        if (matchHeight._beforeUpdate) {
            matchHeight._beforeUpdate(event, matchHeight._groups);
        }

        $.each(matchHeight._groups, function() {
            matchHeight._apply(this.elements, this.options);
        });

        if (matchHeight._afterUpdate) {
            matchHeight._afterUpdate(event, matchHeight._groups);
        }
    };

    matchHeight._update = function(throttle, event) {
        // prevent update if fired from a resize event
        // where the viewport width hasn't actually changed
        // fixes an event looping bug in IE8
        if (event && event.type === 'resize') {
            var windowWidth = $(window).width();
            if (windowWidth === _previousResizeWidth) {
                return;
            }
            _previousResizeWidth = windowWidth;
        }

        // throttle updates
        if (!throttle) {
            _update(event);
        } else if (_updateTimeout === -1) {
            _updateTimeout = setTimeout(function() {
                _update(event);
                _updateTimeout = -1;
            }, matchHeight._throttle);
        }
    };

    /*
    *  bind events
    */

    // apply on DOM ready event
    $(matchHeight._applyDataApi);

    // use on or bind where supported
    var on = $.fn.on ? 'on' : 'bind';

    // update heights on load and resize events
    $(window)[on]('load', function(event) {
        matchHeight._update(false, event);
    });

    // throttled update heights on resize events
    $(window)[on]('resize orientationchange', function(event) {
        matchHeight._update(true, event);
    });

});

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                   var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                   if ($('#' + ariaButtonControl).length) {
                     $(this).attr({
                         'aria-describedby': ariaButtonControl
                     });
                   }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
          if (_.options.focusOnChange) {
            _.$slides.eq(i).attr({'tabindex': '0'});
          } else {
            _.$slides.eq(i).removeAttr('tabindex');
          }
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));

// Sticky Plugin v1.0.4 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 02/14/2011
// Date: 07/20/2015
// Website: http://stickyjs.com/
// Description: Makes an element on the page stick on the screen as you scroll
//              It will only set the 'top' and 'position' of your element, you
//              might need to adjust the width in some cases.

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    var slice = Array.prototype.slice; // save ref to original slice()
    var splice = Array.prototype.splice; // save ref to original slice()

  var defaults = {
      topSpacing: 0,
      bottomSpacing: 0,
      className: 'is-sticky',
      wrapperClassName: 'sticky-wrapper',
      center: false,
      getWidthFrom: '',
      widthFromWrapper: true, // works only when .getWidthFrom is empty
      responsiveWidth: false,
      zIndex: 'inherit'
    },
    $window = $(window),
    $document = $(document),
    sticked = [],
    windowHeight = $window.height(),
    scroller = function() {
      var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

      for (var i = 0, l = sticked.length; i < l; i++) {
        var s = sticked[i],
          elementTop = s.stickyWrapper.offset().top,
          etse = elementTop - s.topSpacing - extra;

        //update height in case of dynamic content
        s.stickyWrapper.css('height', s.stickyElement.outerHeight());

        if (scrollTop <= etse) {
          if (s.currentTop !== null) {
            s.stickyElement
              .css({
                'width': '',
                'position': '',
                'top': '',
                'z-index': ''
              });
            s.stickyElement.parent().removeClass(s.className);
            s.stickyElement.trigger('sticky-end', [s]);
            s.currentTop = null;
          }
        }
        else {
          var newTop = documentHeight - s.stickyElement.outerHeight()
            - s.topSpacing - s.bottomSpacing - scrollTop - extra;
          if (newTop < 0) {
            newTop = newTop + s.topSpacing;
          } else {
            newTop = s.topSpacing;
          }
          if (s.currentTop !== newTop) {
            var newWidth;
            if (s.getWidthFrom) {
                padding =  s.stickyElement.innerWidth() - s.stickyElement.width();
                newWidth = $(s.getWidthFrom).width() - padding || null;
            } else if (s.widthFromWrapper) {
                newWidth = s.stickyWrapper.width();
            }
            if (newWidth == null) {
                newWidth = s.stickyElement.width();
            }
            s.stickyElement
              .css('width', newWidth)
              .css('position', 'fixed')
              .css('top', newTop)
              .css('z-index', s.zIndex);

            s.stickyElement.parent().addClass(s.className);

            if (s.currentTop === null) {
              s.stickyElement.trigger('sticky-start', [s]);
            } else {
              // sticky is started but it have to be repositioned
              s.stickyElement.trigger('sticky-update', [s]);
            }

            if (s.currentTop === s.topSpacing && s.currentTop > newTop || s.currentTop === null && newTop < s.topSpacing) {
              // just reached bottom || just started to stick but bottom is already reached
              s.stickyElement.trigger('sticky-bottom-reached', [s]);
            } else if(s.currentTop !== null && newTop === s.topSpacing && s.currentTop < newTop) {
              // sticky is started && sticked at topSpacing && overflowing from top just finished
              s.stickyElement.trigger('sticky-bottom-unreached', [s]);
            }

            s.currentTop = newTop;
          }

          // Check if sticky has reached end of container and stop sticking
          var stickyWrapperContainer = s.stickyWrapper.parent();
          var unstick = (s.stickyElement.offset().top + s.stickyElement.outerHeight() >= stickyWrapperContainer.offset().top + stickyWrapperContainer.outerHeight()) && (s.stickyElement.offset().top <= s.topSpacing);

          if( unstick ) {
            s.stickyElement
              .css('position', 'absolute')
              .css('top', '')
              .css('bottom', 0)
              .css('z-index', '');
          } else {
            s.stickyElement
              .css('position', 'fixed')
              .css('top', newTop)
              .css('bottom', '')
              .css('z-index', s.zIndex);
          }
        }
      }
    },
    resizer = function() {
      windowHeight = $window.height();

      for (var i = 0, l = sticked.length; i < l; i++) {
        var s = sticked[i];
        var newWidth = null;
        if (s.getWidthFrom) {
            if (s.responsiveWidth) {
                newWidth = $(s.getWidthFrom).width();
            }
        } else if(s.widthFromWrapper) {
            newWidth = s.stickyWrapper.width();
        }
        if (newWidth != null) {
            s.stickyElement.css('width', newWidth);
        }
      }
    },
    methods = {
      init: function(options) {
        return this.each(function() {
          var o = $.extend({}, defaults, options);
          var stickyElement = $(this);

          var stickyId = stickyElement.attr('id');
          var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName;
          var wrapper = $('<div></div>')
            .attr('id', wrapperId)
            .addClass(o.wrapperClassName);

          stickyElement.wrapAll(function() {
            if ($(this).parent("#" + wrapperId).length == 0) {
                    return wrapper;
            }
});

          var stickyWrapper = stickyElement.parent();

          if (o.center) {
            stickyWrapper.css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});
          }

          if (stickyElement.css("float") === "right") {
            stickyElement.css({"float":"none"}).parent().css({"float":"right"});
          }

          o.stickyElement = stickyElement;
          o.stickyWrapper = stickyWrapper;
          o.currentTop    = null;

          sticked.push(o);

          methods.setWrapperHeight(this);
          methods.setupChangeListeners(this);
        });
      },

      setWrapperHeight: function(stickyElement) {
        var element = $(stickyElement);
        var stickyWrapper = element.parent();
        if (stickyWrapper) {
          stickyWrapper.css('height', element.outerHeight());
        }
      },

      setupChangeListeners: function(stickyElement) {
        if (window.MutationObserver) {
          var mutationObserver = new window.MutationObserver(function(mutations) {
            if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {
              methods.setWrapperHeight(stickyElement);
            }
          });
          mutationObserver.observe(stickyElement, {subtree: true, childList: true});
        } else {
          if (window.addEventListener) {
            stickyElement.addEventListener('DOMNodeInserted', function() {
              methods.setWrapperHeight(stickyElement);
            }, false);
            stickyElement.addEventListener('DOMNodeRemoved', function() {
              methods.setWrapperHeight(stickyElement);
            }, false);
          } else if (window.attachEvent) {
            stickyElement.attachEvent('onDOMNodeInserted', function() {
              methods.setWrapperHeight(stickyElement);
            });
            stickyElement.attachEvent('onDOMNodeRemoved', function() {
              methods.setWrapperHeight(stickyElement);
            });
          }
        }
      },
      update: scroller,
      unstick: function(options) {
        return this.each(function() {
          var that = this;
          var unstickyElement = $(that);

          var removeIdx = -1;
          var i = sticked.length;
          while (i-- > 0) {
            if (sticked[i].stickyElement.get(0) === that) {
                splice.call(sticked,i,1);
                removeIdx = i;
            }
          }
          if(removeIdx !== -1) {
            unstickyElement.unwrap();
            unstickyElement
              .css({
                'width': '',
                'position': '',
                'top': '',
                'float': '',
                'z-index': ''
              })
            ;
          }
        });
      }
    };

  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
  if (window.addEventListener) {
    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', resizer, false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', scroller);
    window.attachEvent('onresize', resizer);
  }

  $.fn.sticky = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };

  $.fn.unstick = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.unstick.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };
  $(function() {
    setTimeout(scroller, 0);
  });
}));
/*!
 * jQuery Validation Plugin v1.16.0
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2016 Jörn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
  if ( typeof define === "function" && define.amd ) {
    define( ["jquery"], factory );
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory( require( "jquery" ) );
  } else {
    factory( jQuery );
  }
}(function( $ ) {

$.extend( $.fn, {

  // http://jqueryvalidation.org/validate/
  validate: function( options ) {

    // If nothing is selected, return nothing; can't chain anyway
    if ( !this.length ) {
      if ( options && options.debug && window.console ) {
        console.warn( "Nothing selected, can't validate, returning nothing." );
      }
      return;
    }

    // Check if a validator for this form was already created
    var validator = $.data( this[ 0 ], "validator" );
    if ( validator ) {
      return validator;
    }

    // Add novalidate tag if HTML5.
    this.attr( "novalidate", "novalidate" );

    validator = new $.validator( options, this[ 0 ] );
    $.data( this[ 0 ], "validator", validator );

    if ( validator.settings.onsubmit ) {

      this.on( "click.validate", ":submit", function( event ) {
        if ( validator.settings.submitHandler ) {
          validator.submitButton = event.target;
        }

        // Allow suppressing validation by adding a cancel class to the submit button
        if ( $( this ).hasClass( "cancel" ) ) {
          validator.cancelSubmit = true;
        }

        // Allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
        if ( $( this ).attr( "formnovalidate" ) !== undefined ) {
          validator.cancelSubmit = true;
        }
      } );

      // Validate the form on submit
      this.on( "submit.validate", function( event ) {
        if ( validator.settings.debug ) {

          // Prevent form submit to be able to see console output
          event.preventDefault();
        }
        function handle() {
          var hidden, result;
          if ( validator.settings.submitHandler ) {
            if ( validator.submitButton ) {

              // Insert a hidden input as a replacement for the missing submit button
              hidden = $( "<input type='hidden'/>" )
                .attr( "name", validator.submitButton.name )
                .val( $( validator.submitButton ).val() )
                .appendTo( validator.currentForm );
            }
            result = validator.settings.submitHandler.call( validator, validator.currentForm, event );
            if ( validator.submitButton ) {

              // And clean up afterwards; thanks to no-block-scope, hidden can be referenced
              hidden.remove();
            }
            if ( result !== undefined ) {
              return result;
            }
            return false;
          }
          return true;
        }

        // Prevent submit for invalid forms or custom submit handlers
        if ( validator.cancelSubmit ) {
          validator.cancelSubmit = false;
          return handle();
        }
        if ( validator.form() ) {
          if ( validator.pendingRequest ) {
            validator.formSubmitted = true;
            return false;
          }
          return handle();
        } else {
          validator.focusInvalid();
          return false;
        }
      } );
    }

    return validator;
  },

  // http://jqueryvalidation.org/valid/
  valid: function() {
    var valid, validator, errorList;

    if ( $( this[ 0 ] ).is( "form" ) ) {
      valid = this.validate().form();
    } else {
      errorList = [];
      valid = true;
      validator = $( this[ 0 ].form ).validate();
      this.each( function() {
        valid = validator.element( this ) && valid;
        if ( !valid ) {
          errorList = errorList.concat( validator.errorList );
        }
      } );
      validator.errorList = errorList;
    }
    return valid;
  },

  // http://jqueryvalidation.org/rules/
  rules: function( command, argument ) {
    var element = this[ 0 ],
      settings, staticRules, existingRules, data, param, filtered;

    // If nothing is selected, return empty object; can't chain anyway
    if ( element == null || element.form == null ) {
      return;
    }

    if ( command ) {
      settings = $.data( element.form, "validator" ).settings;
      staticRules = settings.rules;
      existingRules = $.validator.staticRules( element );
      switch ( command ) {
      case "add":
        $.extend( existingRules, $.validator.normalizeRule( argument ) );

        // Remove messages from rules, but allow them to be set separately
        delete existingRules.messages;
        staticRules[ element.name ] = existingRules;
        if ( argument.messages ) {
          settings.messages[ element.name ] = $.extend( settings.messages[ element.name ], argument.messages );
        }
        break;
      case "remove":
        if ( !argument ) {
          delete staticRules[ element.name ];
          return existingRules;
        }
        filtered = {};
        $.each( argument.split( /\s/ ), function( index, method ) {
          filtered[ method ] = existingRules[ method ];
          delete existingRules[ method ];
          if ( method === "required" ) {
            $( element ).removeAttr( "aria-required" );
          }
        } );
        return filtered;
      }
    }

    data = $.validator.normalizeRules(
    $.extend(
      {},
      $.validator.classRules( element ),
      $.validator.attributeRules( element ),
      $.validator.dataRules( element ),
      $.validator.staticRules( element )
    ), element );

    // Make sure required is at front
    if ( data.required ) {
      param = data.required;
      delete data.required;
      data = $.extend( { required: param }, data );
      $( element ).attr( "aria-required", "true" );
    }

    // Make sure remote is at back
    if ( data.remote ) {
      param = data.remote;
      delete data.remote;
      data = $.extend( data, { remote: param } );
    }

    return data;
  }
} );

// Custom selectors
$.extend( $.expr.pseudos || $.expr[ ":" ], {    // '|| $.expr[ ":" ]' here enables backwards compatibility to jQuery 1.7. Can be removed when dropping jQ 1.7.x support

  // http://jqueryvalidation.org/blank-selector/
  blank: function( a ) {
    return !$.trim( "" + $( a ).val() );
  },

  // http://jqueryvalidation.org/filled-selector/
  filled: function( a ) {
    var val = $( a ).val();
    return val !== null && !!$.trim( "" + val );
  },

  // http://jqueryvalidation.org/unchecked-selector/
  unchecked: function( a ) {
    return !$( a ).prop( "checked" );
  }
} );

// Constructor for validator
$.validator = function( options, form ) {
  this.settings = $.extend( true, {}, $.validator.defaults, options );
  this.currentForm = form;
  this.init();
};

// http://jqueryvalidation.org/jQuery.validator.format/
$.validator.format = function( source, params ) {
  if ( arguments.length === 1 ) {
    return function() {
      var args = $.makeArray( arguments );
      args.unshift( source );
      return $.validator.format.apply( this, args );
    };
  }
  if ( params === undefined ) {
    return source;
  }
  if ( arguments.length > 2 && params.constructor !== Array  ) {
    params = $.makeArray( arguments ).slice( 1 );
  }
  if ( params.constructor !== Array ) {
    params = [ params ];
  }
  $.each( params, function( i, n ) {
    source = source.replace( new RegExp( "\\{" + i + "\\}", "g" ), function() {
      return n;
    } );
  } );
  return source;
};

$.extend( $.validator, {

  defaults: {
    messages: {},
    groups: {},
    rules: {},
    errorClass: "error",
    pendingClass: "pending",
    validClass: "valid",
    errorElement: "label",
    focusCleanup: false,
    focusInvalid: true,
    errorContainer: $( [] ),
    errorLabelContainer: $( [] ),
    onsubmit: true,
    ignore: ":hidden",
    ignoreTitle: false,
    onfocusin: function( element ) {
      this.lastActive = element;

      // Hide error label and remove error class on focus if enabled
      if ( this.settings.focusCleanup ) {
        if ( this.settings.unhighlight ) {
          this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
        }
        this.hideThese( this.errorsFor( element ) );
      }
    },
    onfocusout: function( element ) {
      if ( !this.checkable( element ) && ( element.name in this.submitted || !this.optional( element ) ) ) {
        this.element( element );
      }
    },
    onkeyup: function( element, event ) {

      // Avoid revalidate the field when pressing one of the following keys
      // Shift       => 16
      // Ctrl        => 17
      // Alt         => 18
      // Caps lock   => 20
      // End         => 35
      // Home        => 36
      // Left arrow  => 37
      // Up arrow    => 38
      // Right arrow => 39
      // Down arrow  => 40
      // Insert      => 45
      // Num lock    => 144
      // AltGr key   => 225
      var excludedKeys = [
        16, 17, 18, 20, 35, 36, 37,
        38, 39, 40, 45, 144, 225
      ];

      if ( event.which === 9 && this.elementValue( element ) === "" || $.inArray( event.keyCode, excludedKeys ) !== -1 ) {
        return;
      } else if ( element.name in this.submitted || element.name in this.invalid ) {
        this.element( element );
      }
    },
    onclick: function( element ) {

      // Click on selects, radiobuttons and checkboxes
      if ( element.name in this.submitted ) {
        this.element( element );

      // Or option elements, check parent select in that case
      } else if ( element.parentNode.name in this.submitted ) {
        this.element( element.parentNode );
      }
    },
    highlight: function( element, errorClass, validClass ) {
      if ( element.type === "radio" ) {
        this.findByName( element.name ).addClass( errorClass ).removeClass( validClass );
      } else {
        $( element ).addClass( errorClass ).removeClass( validClass );
      }
    },
    unhighlight: function( element, errorClass, validClass ) {
      if ( element.type === "radio" ) {
        this.findByName( element.name ).removeClass( errorClass ).addClass( validClass );
      } else {
        $( element ).removeClass( errorClass ).addClass( validClass );
      }
    }
  },

  // http://jqueryvalidation.org/jQuery.validator.setDefaults/
  setDefaults: function( settings ) {
    $.extend( $.validator.defaults, settings );
  },

  messages: {
    required: "This field is required.",
    remote: "Please fix this field.",
    email: "Please enter a valid email address.",
    url: "Please enter a valid URL.",
    date: "Please enter a valid date.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Please enter a valid number.",
    digits: "Please enter only digits.",
    equalTo: "Please enter the same value again.",
    maxlength: $.validator.format( "Please enter no more than {0} characters." ),
    minlength: $.validator.format( "Please enter at least {0} characters." ),
    rangelength: $.validator.format( "Please enter a value between {0} and {1} characters long." ),
    range: $.validator.format( "Please enter a value between {0} and {1}." ),
    max: $.validator.format( "Please enter a value less than or equal to {0}." ),
    min: $.validator.format( "Please enter a value greater than or equal to {0}." ),
    step: $.validator.format( "Please enter a multiple of {0}." )
  },

  autoCreateRanges: false,

  prototype: {

    init: function() {
      this.labelContainer = $( this.settings.errorLabelContainer );
      this.errorContext = this.labelContainer.length && this.labelContainer || $( this.currentForm );
      this.containers = $( this.settings.errorContainer ).add( this.settings.errorLabelContainer );
      this.submitted = {};
      this.valueCache = {};
      this.pendingRequest = 0;
      this.pending = {};
      this.invalid = {};
      this.reset();

      var groups = ( this.groups = {} ),
        rules;
      $.each( this.settings.groups, function( key, value ) {
        if ( typeof value === "string" ) {
          value = value.split( /\s/ );
        }
        $.each( value, function( index, name ) {
          groups[ name ] = key;
        } );
      } );
      rules = this.settings.rules;
      $.each( rules, function( key, value ) {
        rules[ key ] = $.validator.normalizeRule( value );
      } );

      function delegate( event ) {

        // Set form expando on contenteditable
        if ( !this.form && this.hasAttribute( "contenteditable" ) ) {
          this.form = $( this ).closest( "form" )[ 0 ];
        }

        var validator = $.data( this.form, "validator" ),
          eventType = "on" + event.type.replace( /^validate/, "" ),
          settings = validator.settings;
        if ( settings[ eventType ] && !$( this ).is( settings.ignore ) ) {
          settings[ eventType ].call( validator, this, event );
        }
      }

      $( this.currentForm )
        .on( "focusin.validate focusout.validate keyup.validate",
          ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " +
          "[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " +
          "[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " +
          "[type='radio'], [type='checkbox'], [contenteditable], [type='button']", delegate )

        // Support: Chrome, oldIE
        // "select" is provided as event.target when clicking a option
        .on( "click.validate", "select, option, [type='radio'], [type='checkbox']", delegate );

      if ( this.settings.invalidHandler ) {
        $( this.currentForm ).on( "invalid-form.validate", this.settings.invalidHandler );
      }

      // Add aria-required to any Static/Data/Class required fields before first validation
      // Screen readers require this attribute to be present before the initial submission http://www.w3.org/TR/WCAG-TECHS/ARIA2.html
      $( this.currentForm ).find( "[required], [data-rule-required], .required" ).attr( "aria-required", "true" );
    },

    // http://jqueryvalidation.org/Validator.form/
    form: function() {
      this.checkForm();
      $.extend( this.submitted, this.errorMap );
      this.invalid = $.extend( {}, this.errorMap );
      if ( !this.valid() ) {
        $( this.currentForm ).triggerHandler( "invalid-form", [ this ] );
      }
      this.showErrors();
      return this.valid();
    },

    checkForm: function() {
      this.prepareForm();
      for ( var i = 0, elements = ( this.currentElements = this.elements() ); elements[ i ]; i++ ) {
        this.check( elements[ i ] );
      }
      return this.valid();
    },

    // http://jqueryvalidation.org/Validator.element/
    element: function( element ) {
      var cleanElement = this.clean( element ),
        checkElement = this.validationTargetFor( cleanElement ),
        v = this,
        result = true,
        rs, group;

      if ( checkElement === undefined ) {
        delete this.invalid[ cleanElement.name ];
      } else {
        this.prepareElement( checkElement );
        this.currentElements = $( checkElement );

        // If this element is grouped, then validate all group elements already
        // containing a value
        group = this.groups[ checkElement.name ];
        if ( group ) {
          $.each( this.groups, function( name, testgroup ) {
            if ( testgroup === group && name !== checkElement.name ) {
              cleanElement = v.validationTargetFor( v.clean( v.findByName( name ) ) );
              if ( cleanElement && cleanElement.name in v.invalid ) {
                v.currentElements.push( cleanElement );
                result = v.check( cleanElement ) && result;
              }
            }
          } );
        }

        rs = this.check( checkElement ) !== false;
        result = result && rs;
        if ( rs ) {
          this.invalid[ checkElement.name ] = false;
        } else {
          this.invalid[ checkElement.name ] = true;
        }

        if ( !this.numberOfInvalids() ) {

          // Hide error containers on last error
          this.toHide = this.toHide.add( this.containers );
        }
        this.showErrors();

        // Add aria-invalid status for screen readers
        $( element ).attr( "aria-invalid", !rs );
      }

      return result;
    },

    // http://jqueryvalidation.org/Validator.showErrors/
    showErrors: function( errors ) {
      if ( errors ) {
        var validator = this;

        // Add items to error list and map
        $.extend( this.errorMap, errors );
        this.errorList = $.map( this.errorMap, function( message, name ) {
          return {
            message: message,
            element: validator.findByName( name )[ 0 ]
          };
        } );

        // Remove items from success list
        this.successList = $.grep( this.successList, function( element ) {
          return !( element.name in errors );
        } );
      }
      if ( this.settings.showErrors ) {
        this.settings.showErrors.call( this, this.errorMap, this.errorList );
      } else {
        this.defaultShowErrors();
      }
    },

    // http://jqueryvalidation.org/Validator.resetForm/
    resetForm: function() {
      if ( $.fn.resetForm ) {
        $( this.currentForm ).resetForm();
      }
      this.invalid = {};
      this.submitted = {};
      this.prepareForm();
      this.hideErrors();
      var elements = this.elements()
        .removeData( "previousValue" )
        .removeAttr( "aria-invalid" );

      this.resetElements( elements );
    },

    resetElements: function( elements ) {
      var i;

      if ( this.settings.unhighlight ) {
        for ( i = 0; elements[ i ]; i++ ) {
          this.settings.unhighlight.call( this, elements[ i ],
            this.settings.errorClass, "" );
          this.findByName( elements[ i ].name ).removeClass( this.settings.validClass );
        }
      } else {
        elements
          .removeClass( this.settings.errorClass )
          .removeClass( this.settings.validClass );
      }
    },

    numberOfInvalids: function() {
      return this.objectLength( this.invalid );
    },

    objectLength: function( obj ) {
      /* jshint unused: false */
      var count = 0,
        i;
      for ( i in obj ) {
        if ( obj[ i ] ) {
          count++;
        }
      }
      return count;
    },

    hideErrors: function() {
      this.hideThese( this.toHide );
    },

    hideThese: function( errors ) {
      errors.not( this.containers ).text( "" );
      this.addWrapper( errors ).hide();
    },

    valid: function() {
      return this.size() === 0;
    },

    size: function() {
      return this.errorList.length;
    },

    focusInvalid: function() {
      if ( this.settings.focusInvalid ) {
        try {
          $( this.findLastActive() || this.errorList.length && this.errorList[ 0 ].element || [] )
          .filter( ":visible" )
          .focus()

          // Manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
          .trigger( "focusin" );
        } catch ( e ) {

          // Ignore IE throwing errors when focusing hidden elements
        }
      }
    },

    findLastActive: function() {
      var lastActive = this.lastActive;
      return lastActive && $.grep( this.errorList, function( n ) {
        return n.element.name === lastActive.name;
      } ).length === 1 && lastActive;
    },

    elements: function() {
      var validator = this,
        rulesCache = {};

      // Select all valid inputs inside the form (no submit or reset buttons)
      return $( this.currentForm )
      .find( "input, select, textarea, [contenteditable]" )
      .not( ":submit, :reset, :image, :disabled" )
      .not( this.settings.ignore )
      .filter( function() {
        var name = this.name || $( this ).attr( "name" ); // For contenteditable
        if ( !name && validator.settings.debug && window.console ) {
          console.error( "%o has no name assigned", this );
        }

        // Set form expando on contenteditable
        if ( this.hasAttribute( "contenteditable" ) ) {
          this.form = $( this ).closest( "form" )[ 0 ];
        }

        // Select only the first element for each name, and only those with rules specified
        if ( name in rulesCache || !validator.objectLength( $( this ).rules() ) ) {
          return false;
        }

        rulesCache[ name ] = true;
        return true;
      } );
    },

    clean: function( selector ) {
      return $( selector )[ 0 ];
    },

    errors: function() {
      var errorClass = this.settings.errorClass.split( " " ).join( "." );
      return $( this.settings.errorElement + "." + errorClass, this.errorContext );
    },

    resetInternals: function() {
      this.successList = [];
      this.errorList = [];
      this.errorMap = {};
      this.toShow = $( [] );
      this.toHide = $( [] );
    },

    reset: function() {
      this.resetInternals();
      this.currentElements = $( [] );
    },

    prepareForm: function() {
      this.reset();
      this.toHide = this.errors().add( this.containers );
    },

    prepareElement: function( element ) {
      this.reset();
      this.toHide = this.errorsFor( element );
    },

    elementValue: function( element ) {
      var $element = $( element ),
        type = element.type,
        val, idx;

      if ( type === "radio" || type === "checkbox" ) {
        return this.findByName( element.name ).filter( ":checked" ).val();
      } else if ( type === "number" && typeof element.validity !== "undefined" ) {
        return element.validity.badInput ? "NaN" : $element.val();
      }

      if ( element.hasAttribute( "contenteditable" ) ) {
        val = $element.text();
      } else {
        val = $element.val();
      }

      if ( type === "file" ) {

        // Modern browser (chrome & safari)
        if ( val.substr( 0, 12 ) === "C:\\fakepath\\" ) {
          return val.substr( 12 );
        }

        // Legacy browsers
        // Unix-based path
        idx = val.lastIndexOf( "/" );
        if ( idx >= 0 ) {
          return val.substr( idx + 1 );
        }

        // Windows-based path
        idx = val.lastIndexOf( "\\" );
        if ( idx >= 0 ) {
          return val.substr( idx + 1 );
        }

        // Just the file name
        return val;
      }

      if ( typeof val === "string" ) {
        return val.replace( /\r/g, "" );
      }
      return val;
    },

    check: function( element ) {
      element = this.validationTargetFor( this.clean( element ) );

      var rules = $( element ).rules(),
        rulesCount = $.map( rules, function( n, i ) {
          return i;
        } ).length,
        dependencyMismatch = false,
        val = this.elementValue( element ),
        result, method, rule;

      // If a normalizer is defined for this element, then
      // call it to retreive the changed value instead
      // of using the real one.
      // Note that `this` in the normalizer is `element`.
      if ( typeof rules.normalizer === "function" ) {
        val = rules.normalizer.call( element, val );

        if ( typeof val !== "string" ) {
          throw new TypeError( "The normalizer should return a string value." );
        }

        // Delete the normalizer from rules to avoid treating
        // it as a pre-defined method.
        delete rules.normalizer;
      }

      for ( method in rules ) {
        rule = { method: method, parameters: rules[ method ] };
        try {
          result = $.validator.methods[ method ].call( this, val, element, rule.parameters );

          // If a method indicates that the field is optional and therefore valid,
          // don't mark it as valid when there are no other rules
          if ( result === "dependency-mismatch" && rulesCount === 1 ) {
            dependencyMismatch = true;
            continue;
          }
          dependencyMismatch = false;

          if ( result === "pending" ) {
            this.toHide = this.toHide.not( this.errorsFor( element ) );
            return;
          }

          if ( !result ) {
            this.formatAndAdd( element, rule );
            return false;
          }
        } catch ( e ) {
          if ( this.settings.debug && window.console ) {
            console.log( "Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e );
          }
          if ( e instanceof TypeError ) {
            e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
          }

          throw e;
        }
      }
      if ( dependencyMismatch ) {
        return;
      }
      if ( this.objectLength( rules ) ) {
        this.successList.push( element );
      }
      return true;
    },

    // Return the custom message for the given element and validation method
    // specified in the element's HTML5 data attribute
    // return the generic message if present and no method specific message is present
    customDataMessage: function( element, method ) {
      return $( element ).data( "msg" + method.charAt( 0 ).toUpperCase() +
        method.substring( 1 ).toLowerCase() ) || $( element ).data( "msg" );
    },

    // Return the custom message for the given element name and validation method
    customMessage: function( name, method ) {
      var m = this.settings.messages[ name ];
      return m && ( m.constructor === String ? m : m[ method ] );
    },

    // Return the first defined argument, allowing empty strings
    findDefined: function() {
      for ( var i = 0; i < arguments.length; i++ ) {
        if ( arguments[ i ] !== undefined ) {
          return arguments[ i ];
        }
      }
      return undefined;
    },

    // The second parameter 'rule' used to be a string, and extended to an object literal
    // of the following form:
    // rule = {
    //     method: "method name",
    //     parameters: "the given method parameters"
    // }
    //
    // The old behavior still supported, kept to maintain backward compatibility with
    // old code, and will be removed in the next major release.
    defaultMessage: function( element, rule ) {
      if ( typeof rule === "string" ) {
        rule = { method: rule };
      }

      var message = this.findDefined(
          this.customMessage( element.name, rule.method ),
          this.customDataMessage( element, rule.method ),

          // 'title' is never undefined, so handle empty string as undefined
          !this.settings.ignoreTitle && element.title || undefined,
          $.validator.messages[ rule.method ],
          "<strong>Warning: No message defined for " + element.name + "</strong>"
        ),
        theregex = /\$?\{(\d+)\}/g;
      if ( typeof message === "function" ) {
        message = message.call( this, rule.parameters, element );
      } else if ( theregex.test( message ) ) {
        message = $.validator.format( message.replace( theregex, "{$1}" ), rule.parameters );
      }

      return message;
    },

    formatAndAdd: function( element, rule ) {
      var message = this.defaultMessage( element, rule );

      this.errorList.push( {
        message: message,
        element: element,
        method: rule.method
      } );

      this.errorMap[ element.name ] = message;
      this.submitted[ element.name ] = message;
    },

    addWrapper: function( toToggle ) {
      if ( this.settings.wrapper ) {
        toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
      }
      return toToggle;
    },

    defaultShowErrors: function() {
      var i, elements, error;
      for ( i = 0; this.errorList[ i ]; i++ ) {
        error = this.errorList[ i ];
        if ( this.settings.highlight ) {
          this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
        }
        this.showLabel( error.element, error.message );
      }
      if ( this.errorList.length ) {
        this.toShow = this.toShow.add( this.containers );
      }
      if ( this.settings.success ) {
        for ( i = 0; this.successList[ i ]; i++ ) {
          this.showLabel( this.successList[ i ] );
        }
      }
      if ( this.settings.unhighlight ) {
        for ( i = 0, elements = this.validElements(); elements[ i ]; i++ ) {
          this.settings.unhighlight.call( this, elements[ i ], this.settings.errorClass, this.settings.validClass );
        }
      }
      this.toHide = this.toHide.not( this.toShow );
      this.hideErrors();
      this.addWrapper( this.toShow ).show();
    },

    validElements: function() {
      return this.currentElements.not( this.invalidElements() );
    },

    invalidElements: function() {
      return $( this.errorList ).map( function() {
        return this.element;
      } );
    },

    showLabel: function( element, message ) {
      var place, group, errorID, v,
        error = this.errorsFor( element ),
        elementID = this.idOrName( element ),
        describedBy = $( element ).attr( "aria-describedby" );

      if ( error.length ) {

        // Refresh error/success class
        error.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );

        // Replace message on existing label
        error.html( message );
      } else {

        // Create error element
        error = $( "<" + this.settings.errorElement + ">" )
          .attr( "id", elementID + "-error" )
          .addClass( this.settings.errorClass )
          .html( message || "" );

        // Maintain reference to the element to be placed into the DOM
        place = error;
        if ( this.settings.wrapper ) {

          // Make sure the element is visible, even in IE
          // actually showing the wrapped element is handled elsewhere
          place = error.hide().show().wrap( "<" + this.settings.wrapper + "/>" ).parent();
        }
        if ( this.labelContainer.length ) {
          this.labelContainer.append( place );
        } else if ( this.settings.errorPlacement ) {
          this.settings.errorPlacement.call( this, place, $( element ) );
        } else {
          place.insertAfter( element );
        }

        // Link error back to the element
        if ( error.is( "label" ) ) {

          // If the error is a label, then associate using 'for'
          error.attr( "for", elementID );

          // If the element is not a child of an associated label, then it's necessary
          // to explicitly apply aria-describedby
        } else if ( error.parents( "label[for='" + this.escapeCssMeta( elementID ) + "']" ).length === 0 ) {
          errorID = error.attr( "id" );

          // Respect existing non-error aria-describedby
          if ( !describedBy ) {
            describedBy = errorID;
          } else if ( !describedBy.match( new RegExp( "\\b" + this.escapeCssMeta( errorID ) + "\\b" ) ) ) {

            // Add to end of list if not already present
            describedBy += " " + errorID;
          }
          $( element ).attr( "aria-describedby", describedBy );

          // If this element is grouped, then assign to all elements in the same group
          group = this.groups[ element.name ];
          if ( group ) {
            v = this;
            $.each( v.groups, function( name, testgroup ) {
              if ( testgroup === group ) {
                $( "[name='" + v.escapeCssMeta( name ) + "']", v.currentForm )
                  .attr( "aria-describedby", error.attr( "id" ) );
              }
            } );
          }
        }
      }
      if ( !message && this.settings.success ) {
        error.text( "" );
        if ( typeof this.settings.success === "string" ) {
          error.addClass( this.settings.success );
        } else {
          this.settings.success( error, element );
        }
      }
      this.toShow = this.toShow.add( error );
    },

    errorsFor: function( element ) {
      var name = this.escapeCssMeta( this.idOrName( element ) ),
        describer = $( element ).attr( "aria-describedby" ),
        selector = "label[for='" + name + "'], label[for='" + name + "'] *";

      // 'aria-describedby' should directly reference the error element
      if ( describer ) {
        selector = selector + ", #" + this.escapeCssMeta( describer )
          .replace( /\s+/g, ", #" );
      }

      return this
        .errors()
        .filter( selector );
    },

    // See https://api.jquery.com/category/selectors/, for CSS
    // meta-characters that should be escaped in order to be used with JQuery
    // as a literal part of a name/id or any selector.
    escapeCssMeta: function( string ) {
      return string.replace( /([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1" );
    },

    idOrName: function( element ) {
      return this.groups[ element.name ] || ( this.checkable( element ) ? element.name : element.id || element.name );
    },

    validationTargetFor: function( element ) {

      // If radio/checkbox, validate first element in group instead
      if ( this.checkable( element ) ) {
        element = this.findByName( element.name );
      }

      // Always apply ignore filter
      return $( element ).not( this.settings.ignore )[ 0 ];
    },

    checkable: function( element ) {
      return ( /radio|checkbox/i ).test( element.type );
    },

    findByName: function( name ) {
      return $( this.currentForm ).find( "[name='" + this.escapeCssMeta( name ) + "']" );
    },

    getLength: function( value, element ) {
      switch ( element.nodeName.toLowerCase() ) {
      case "select":
        return $( "option:selected", element ).length;
      case "input":
        if ( this.checkable( element ) ) {
          return this.findByName( element.name ).filter( ":checked" ).length;
        }
      }
      return value.length;
    },

    depend: function( param, element ) {
      return this.dependTypes[ typeof param ] ? this.dependTypes[ typeof param ]( param, element ) : true;
    },

    dependTypes: {
      "boolean": function( param ) {
        return param;
      },
      "string": function( param, element ) {
        return !!$( param, element.form ).length;
      },
      "function": function( param, element ) {
        return param( element );
      }
    },

    optional: function( element ) {
      var val = this.elementValue( element );
      return !$.validator.methods.required.call( this, val, element ) && "dependency-mismatch";
    },

    startRequest: function( element ) {
      if ( !this.pending[ element.name ] ) {
        this.pendingRequest++;
        $( element ).addClass( this.settings.pendingClass );
        this.pending[ element.name ] = true;
      }
    },

    stopRequest: function( element, valid ) {
      this.pendingRequest--;

      // Sometimes synchronization fails, make sure pendingRequest is never < 0
      if ( this.pendingRequest < 0 ) {
        this.pendingRequest = 0;
      }
      delete this.pending[ element.name ];
      $( element ).removeClass( this.settings.pendingClass );
      if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() ) {
        $( this.currentForm ).submit();
        this.formSubmitted = false;
      } else if ( !valid && this.pendingRequest === 0 && this.formSubmitted ) {
        $( this.currentForm ).triggerHandler( "invalid-form", [ this ] );
        this.formSubmitted = false;
      }
    },

    previousValue: function( element, method ) {
      method = typeof method === "string" && method || "remote";

      return $.data( element, "previousValue" ) || $.data( element, "previousValue", {
        old: null,
        valid: true,
        message: this.defaultMessage( element, { method: method } )
      } );
    },

    // Cleans up all forms and elements, removes validator-specific events
    destroy: function() {
      this.resetForm();

      $( this.currentForm )
        .off( ".validate" )
        .removeData( "validator" )
        .find( ".validate-equalTo-blur" )
          .off( ".validate-equalTo" )
          .removeClass( "validate-equalTo-blur" );
    }

  },

  classRuleSettings: {
    required: { required: true },
    email: { email: true },
    url: { url: true },
    date: { date: true },
    dateISO: { dateISO: true },
    number: { number: true },
    digits: { digits: true },
    creditcard: { creditcard: true }
  },

  addClassRules: function( className, rules ) {
    if ( className.constructor === String ) {
      this.classRuleSettings[ className ] = rules;
    } else {
      $.extend( this.classRuleSettings, className );
    }
  },

  classRules: function( element ) {
    var rules = {},
      classes = $( element ).attr( "class" );

    if ( classes ) {
      $.each( classes.split( " " ), function() {
        if ( this in $.validator.classRuleSettings ) {
          $.extend( rules, $.validator.classRuleSettings[ this ] );
        }
      } );
    }
    return rules;
  },

  normalizeAttributeRule: function( rules, type, method, value ) {

    // Convert the value to a number for number inputs, and for text for backwards compability
    // allows type="date" and others to be compared as strings
    if ( /min|max|step/.test( method ) && ( type === null || /number|range|text/.test( type ) ) ) {
      value = Number( value );

      // Support Opera Mini, which returns NaN for undefined minlength
      if ( isNaN( value ) ) {
        value = undefined;
      }
    }

    if ( value || value === 0 ) {
      rules[ method ] = value;
    } else if ( type === method && type !== "range" ) {

      // Exception: the jquery validate 'range' method
      // does not test for the html5 'range' type
      rules[ method ] = true;
    }
  },

  attributeRules: function( element ) {
    var rules = {},
      $element = $( element ),
      type = element.getAttribute( "type" ),
      method, value;

    for ( method in $.validator.methods ) {

      // Support for <input required> in both html5 and older browsers
      if ( method === "required" ) {
        value = element.getAttribute( method );

        // Some browsers return an empty string for the required attribute
        // and non-HTML5 browsers might have required="" markup
        if ( value === "" ) {
          value = true;
        }

        // Force non-HTML5 browsers to return bool
        value = !!value;
      } else {
        value = $element.attr( method );
      }

      this.normalizeAttributeRule( rules, type, method, value );
    }

    // 'maxlength' may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
    if ( rules.maxlength && /-1|2147483647|524288/.test( rules.maxlength ) ) {
      delete rules.maxlength;
    }

    return rules;
  },

  dataRules: function( element ) {
    var rules = {},
      $element = $( element ),
      type = element.getAttribute( "type" ),
      method, value;

    for ( method in $.validator.methods ) {
      value = $element.data( "rule" + method.charAt( 0 ).toUpperCase() + method.substring( 1 ).toLowerCase() );
      this.normalizeAttributeRule( rules, type, method, value );
    }
    return rules;
  },

  staticRules: function( element ) {
    var rules = {},
      validator = $.data( element.form, "validator" );

    if ( validator.settings.rules ) {
      rules = $.validator.normalizeRule( validator.settings.rules[ element.name ] ) || {};
    }
    return rules;
  },

  normalizeRules: function( rules, element ) {

    // Handle dependency check
    $.each( rules, function( prop, val ) {

      // Ignore rule when param is explicitly false, eg. required:false
      if ( val === false ) {
        delete rules[ prop ];
        return;
      }
      if ( val.param || val.depends ) {
        var keepRule = true;
        switch ( typeof val.depends ) {
        case "string":
          keepRule = !!$( val.depends, element.form ).length;
          break;
        case "function":
          keepRule = val.depends.call( element, element );
          break;
        }
        if ( keepRule ) {
          rules[ prop ] = val.param !== undefined ? val.param : true;
        } else {
          $.data( element.form, "validator" ).resetElements( $( element ) );
          delete rules[ prop ];
        }
      }
    } );

    // Evaluate parameters
    $.each( rules, function( rule, parameter ) {
      rules[ rule ] = $.isFunction( parameter ) && rule !== "normalizer" ? parameter( element ) : parameter;
    } );

    // Clean number parameters
    $.each( [ "minlength", "maxlength" ], function() {
      if ( rules[ this ] ) {
        rules[ this ] = Number( rules[ this ] );
      }
    } );
    $.each( [ "rangelength", "range" ], function() {
      var parts;
      if ( rules[ this ] ) {
        if ( $.isArray( rules[ this ] ) ) {
          rules[ this ] = [ Number( rules[ this ][ 0 ] ), Number( rules[ this ][ 1 ] ) ];
        } else if ( typeof rules[ this ] === "string" ) {
          parts = rules[ this ].replace( /[\[\]]/g, "" ).split( /[\s,]+/ );
          rules[ this ] = [ Number( parts[ 0 ] ), Number( parts[ 1 ] ) ];
        }
      }
    } );

    if ( $.validator.autoCreateRanges ) {

      // Auto-create ranges
      if ( rules.min != null && rules.max != null ) {
        rules.range = [ rules.min, rules.max ];
        delete rules.min;
        delete rules.max;
      }
      if ( rules.minlength != null && rules.maxlength != null ) {
        rules.rangelength = [ rules.minlength, rules.maxlength ];
        delete rules.minlength;
        delete rules.maxlength;
      }
    }

    return rules;
  },

  // Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
  normalizeRule: function( data ) {
    if ( typeof data === "string" ) {
      var transformed = {};
      $.each( data.split( /\s/ ), function() {
        transformed[ this ] = true;
      } );
      data = transformed;
    }
    return data;
  },

  // http://jqueryvalidation.org/jQuery.validator.addMethod/
  addMethod: function( name, method, message ) {
    $.validator.methods[ name ] = method;
    $.validator.messages[ name ] = message !== undefined ? message : $.validator.messages[ name ];
    if ( method.length < 3 ) {
      $.validator.addClassRules( name, $.validator.normalizeRule( name ) );
    }
  },

  // http://jqueryvalidation.org/jQuery.validator.methods/
  methods: {

    // http://jqueryvalidation.org/required-method/
    required: function( value, element, param ) {

      // Check if dependency is met
      if ( !this.depend( param, element ) ) {
        return "dependency-mismatch";
      }
      if ( element.nodeName.toLowerCase() === "select" ) {

        // Could be an array for select-multiple or a string, both are fine this way
        var val = $( element ).val();
        return val && val.length > 0;
      }
      if ( this.checkable( element ) ) {
        return this.getLength( value, element ) > 0;
      }
      return value.length > 0;
    },

    // http://jqueryvalidation.org/email-method/
    email: function( value, element ) {

      // From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
      // Retrieved 2014-01-14
      // If you have a problem with this implementation, report a bug against the above spec
      // Or use custom methods to implement your own email validation
      return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( value );
    },

    // http://jqueryvalidation.org/url-method/
    url: function( value, element ) {

      // Copyright (c) 2010-2013 Diego Perini, MIT licensed
      // https://gist.github.com/dperini/729294
      // see also https://mathiasbynens.be/demo/url-regex
      // modified to allow protocol-relative URLs
      return this.optional( element ) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test( value );
    },

    // http://jqueryvalidation.org/date-method/
    date: function( value, element ) {
      return this.optional( element ) || !/Invalid|NaN/.test( new Date( value ).toString() );
    },

    // http://jqueryvalidation.org/dateISO-method/
    dateISO: function( value, element ) {
      return this.optional( element ) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test( value );
    },

    // http://jqueryvalidation.org/number-method/
    number: function( value, element ) {
      return this.optional( element ) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test( value );
    },

    // http://jqueryvalidation.org/digits-method/
    digits: function( value, element ) {
      return this.optional( element ) || /^\d+$/.test( value );
    },

    // http://jqueryvalidation.org/minlength-method/
    minlength: function( value, element, param ) {
      var length = $.isArray( value ) ? value.length : this.getLength( value, element );
      return this.optional( element ) || length >= param;
    },

    // http://jqueryvalidation.org/maxlength-method/
    maxlength: function( value, element, param ) {
      var length = $.isArray( value ) ? value.length : this.getLength( value, element );
      return this.optional( element ) || length <= param;
    },

    // http://jqueryvalidation.org/rangelength-method/
    rangelength: function( value, element, param ) {
      var length = $.isArray( value ) ? value.length : this.getLength( value, element );
      return this.optional( element ) || ( length >= param[ 0 ] && length <= param[ 1 ] );
    },

    // http://jqueryvalidation.org/min-method/
    min: function( value, element, param ) {
      return this.optional( element ) || value >= param;
    },

    // http://jqueryvalidation.org/max-method/
    max: function( value, element, param ) {
      return this.optional( element ) || value <= param;
    },

    // http://jqueryvalidation.org/range-method/
    range: function( value, element, param ) {
      return this.optional( element ) || ( value >= param[ 0 ] && value <= param[ 1 ] );
    },

    // http://jqueryvalidation.org/step-method/
    step: function( value, element, param ) {
      var type = $( element ).attr( "type" ),
        errorMessage = "Step attribute on input type " + type + " is not supported.",
        supportedTypes = [ "text", "number", "range" ],
        re = new RegExp( "\\b" + type + "\\b" ),
        notSupported = type && !re.test( supportedTypes.join() ),
        decimalPlaces = function( num ) {
          var match = ( "" + num ).match( /(?:\.(\d+))?$/ );
          if ( !match ) {
            return 0;
          }

          // Number of digits right of decimal point.
          return match[ 1 ] ? match[ 1 ].length : 0;
        },
        toInt = function( num ) {
          return Math.round( num * Math.pow( 10, decimals ) );
        },
        valid = true,
        decimals;

      // Works only for text, number and range input types
      // TODO find a way to support input types date, datetime, datetime-local, month, time and week
      if ( notSupported ) {
        throw new Error( errorMessage );
      }

      decimals = decimalPlaces( param );

      // Value can't have too many decimals
      if ( decimalPlaces( value ) > decimals || toInt( value ) % toInt( param ) !== 0 ) {
        valid = false;
      }

      return this.optional( element ) || valid;
    },

    // http://jqueryvalidation.org/equalTo-method/
    equalTo: function( value, element, param ) {

      // Bind to the blur event of the target in order to revalidate whenever the target field is updated
      var target = $( param );
      if ( this.settings.onfocusout && target.not( ".validate-equalTo-blur" ).length ) {
        target.addClass( "validate-equalTo-blur" ).on( "blur.validate-equalTo", function() {
          $( element ).valid();
        } );
      }
      return value === target.val();
    },

    // http://jqueryvalidation.org/remote-method/
    remote: function( value, element, param, method ) {
      if ( this.optional( element ) ) {
        return "dependency-mismatch";
      }

      method = typeof method === "string" && method || "remote";

      var previous = this.previousValue( element, method ),
        validator, data, optionDataString;

      if ( !this.settings.messages[ element.name ] ) {
        this.settings.messages[ element.name ] = {};
      }
      previous.originalMessage = previous.originalMessage || this.settings.messages[ element.name ][ method ];
      this.settings.messages[ element.name ][ method ] = previous.message;

      param = typeof param === "string" && { url: param } || param;
      optionDataString = $.param( $.extend( { data: value }, param.data ) );
      if ( previous.old === optionDataString ) {
        return previous.valid;
      }

      previous.old = optionDataString;
      validator = this;
      this.startRequest( element );
      data = {};
      data[ element.name ] = value;
      $.ajax( $.extend( true, {
        mode: "abort",
        port: "validate" + element.name,
        dataType: "json",
        data: data,
        context: validator.currentForm,
        success: function( response ) {
          var valid = response === true || response === "true",
            errors, message, submitted;

          validator.settings.messages[ element.name ][ method ] = previous.originalMessage;
          if ( valid ) {
            submitted = validator.formSubmitted;
            validator.resetInternals();
            validator.toHide = validator.errorsFor( element );
            validator.formSubmitted = submitted;
            validator.successList.push( element );
            validator.invalid[ element.name ] = false;
            validator.showErrors();
          } else {
            errors = {};
            message = response || validator.defaultMessage( element, { method: method, parameters: value } );
            errors[ element.name ] = previous.message = message;
            validator.invalid[ element.name ] = true;
            validator.showErrors( errors );
          }
          previous.valid = valid;
          validator.stopRequest( element, valid );
        }
      }, param ) );
      return "pending";
    }
  }

} );

// Ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

var pendingRequests = {},
  ajax;

// Use a prefilter if available (1.5+)
if ( $.ajaxPrefilter ) {
  $.ajaxPrefilter( function( settings, _, xhr ) {
    var port = settings.port;
    if ( settings.mode === "abort" ) {
      if ( pendingRequests[ port ] ) {
        pendingRequests[ port ].abort();
      }
      pendingRequests[ port ] = xhr;
    }
  } );
} else {

  // Proxy ajax
  ajax = $.ajax;
  $.ajax = function( settings ) {
    var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
      port = ( "port" in settings ? settings : $.ajaxSettings ).port;
    if ( mode === "abort" ) {
      if ( pendingRequests[ port ] ) {
        pendingRequests[ port ].abort();
      }
      pendingRequests[ port ] = ajax.apply( this, arguments );
      return pendingRequests[ port ];
    }
    return ajax.apply( this, arguments );
  };
}
return $;
}));
/*!
 * jQuery Validation Plugin v1.16.0
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2016 Jörn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "./jquery.validate"], factory );
	} else if (typeof module === "object" && module.exports) {
		module.exports = factory( require( "jquery" ) );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

( function() {

	function stripHtml( value ) {

		// Remove html tags and space chars
		return value.replace( /<.[^<>]*?>/g, " " ).replace( /&nbsp;|&#160;/gi, " " )

		// Remove punctuation
		.replace( /[.(),;:!?%#$'\"_+=\/\-“”’]*/g, "" );
	}

	$.validator.addMethod( "maxWords", function( value, element, params ) {
		return this.optional( element ) || stripHtml( value ).match( /\b\w+\b/g ).length <= params;
	}, $.validator.format( "Please enter {0} words or less." ) );

	$.validator.addMethod( "minWords", function( value, element, params ) {
		return this.optional( element ) || stripHtml( value ).match( /\b\w+\b/g ).length >= params;
	}, $.validator.format( "Please enter at least {0} words." ) );

	$.validator.addMethod( "rangeWords", function( value, element, params ) {
		var valueStripped = stripHtml( value ),
			regex = /\b\w+\b/g;
		return this.optional( element ) || valueStripped.match( regex ).length >= params[ 0 ] && valueStripped.match( regex ).length <= params[ 1 ];
	}, $.validator.format( "Please enter between {0} and {1} words." ) );

}() );

// Accept a value from a file input based on a required mimetype
$.validator.addMethod( "accept", function( value, element, param ) {

	// Split mime on commas in case we have multiple types we can accept
	var typeParam = typeof param === "string" ? param.replace( /\s/g, "" ) : "image/*",
		optionalValue = this.optional( element ),
		i, file, regex;

	// Element is optional
	if ( optionalValue ) {
		return optionalValue;
	}

	if ( $( element ).attr( "type" ) === "file" ) {

		// Escape string to be used in the regex
		// see: http://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
		// Escape also "/*" as "/.*" as a wildcard
		typeParam = typeParam
				.replace( /[\-\[\]\/\{\}\(\)\+\?\.\\\^\$\|]/g, "\\$&" )
				.replace( /,/g, "|" )
				.replace( /\/\*/g, "/.*" );

		// Check if the element has a FileList before checking each file
		if ( element.files && element.files.length ) {
			regex = new RegExp( ".?(" + typeParam + ")$", "i" );
			for ( i = 0; i < element.files.length; i++ ) {
				file = element.files[ i ];

				// Grab the mimetype from the loaded file, verify it matches
				if ( !file.type.match( regex ) ) {
					return false;
				}
			}
		}
	}

	// Either return true because we've validated each file, or because the
	// browser does not support element.files and the FileList feature
	return true;
}, $.validator.format( "Please enter a value with a valid mimetype." ) );

$.validator.addMethod( "alphanumeric", function( value, element ) {
	return this.optional( element ) || /^\w+$/i.test( value );
}, "Letters, numbers, and underscores only please" );

/*
 * Dutch bank account numbers (not 'giro' numbers) have 9 digits
 * and pass the '11 check'.
 * We accept the notation with spaces, as that is common.
 * acceptable: 123456789 or 12 34 56 789
 */
$.validator.addMethod( "bankaccountNL", function( value, element ) {
	if ( this.optional( element ) ) {
		return true;
	}
	if ( !( /^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test( value ) ) ) {
		return false;
	}

	// Now '11 check'
	var account = value.replace( / /g, "" ), // Remove spaces
		sum = 0,
		len = account.length,
		pos, factor, digit;
	for ( pos = 0; pos < len; pos++ ) {
		factor = len - pos;
		digit = account.substring( pos, pos + 1 );
		sum = sum + factor * digit;
	}
	return sum % 11 === 0;
}, "Please specify a valid bank account number" );

$.validator.addMethod( "bankorgiroaccountNL", function( value, element ) {
	return this.optional( element ) ||
			( $.validator.methods.bankaccountNL.call( this, value, element ) ) ||
			( $.validator.methods.giroaccountNL.call( this, value, element ) );
}, "Please specify a valid bank or giro account number" );

/**
 * BIC is the business identifier code (ISO 9362). This BIC check is not a guarantee for authenticity.
 *
 * BIC pattern: BBBBCCLLbbb (8 or 11 characters long; bbb is optional)
 *
 * Validation is case-insensitive. Please make sure to normalize input yourself.
 *
 * BIC definition in detail:
 * - First 4 characters - bank code (only letters)
 * - Next 2 characters - ISO 3166-1 alpha-2 country code (only letters)
 * - Next 2 characters - location code (letters and digits)
 *   a. shall not start with '0' or '1'
 *   b. second character must be a letter ('O' is not allowed) or digit ('0' for test (therefore not allowed), '1' denoting passive participant, '2' typically reverse-billing)
 * - Last 3 characters - branch code, optional (shall not start with 'X' except in case of 'XXX' for primary office) (letters and digits)
 */
$.validator.addMethod( "bic", function( value, element ) {
    return this.optional( element ) || /^([A-Z]{6}[A-Z2-9][A-NP-Z1-9])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test( value.toUpperCase() );
}, "Please specify a valid BIC code" );

/*
 * Código de identificación fiscal ( CIF ) is the tax identification code for Spanish legal entities
 * Further rules can be found in Spanish on http://es.wikipedia.org/wiki/C%C3%B3digo_de_identificaci%C3%B3n_fiscal
 *
 * Spanish CIF structure:
 *
 * [ T ][ P ][ P ][ N ][ N ][ N ][ N ][ N ][ C ]
 *
 * Where:
 *
 * T: 1 character. Kind of Organization Letter: [ABCDEFGHJKLMNPQRSUVW]
 * P: 2 characters. Province.
 * N: 5 characters. Secuencial Number within the province.
 * C: 1 character. Control Digit: [0-9A-J].
 *
 * [ T ]: Kind of Organizations. Possible values:
 *
 *   A. Corporations
 *   B. LLCs
 *   C. General partnerships
 *   D. Companies limited partnerships
 *   E. Communities of goods
 *   F. Cooperative Societies
 *   G. Associations
 *   H. Communities of homeowners in horizontal property regime
 *   J. Civil Societies
 *   K. Old format
 *   L. Old format
 *   M. Old format
 *   N. Nonresident entities
 *   P. Local authorities
 *   Q. Autonomous bodies, state or not, and the like, and congregations and religious institutions
 *   R. Congregations and religious institutions (since 2008 ORDER EHA/451/2008)
 *   S. Organs of State Administration and regions
 *   V. Agrarian Transformation
 *   W. Permanent establishments of non-resident in Spain
 *
 * [ C ]: Control Digit. It can be a number or a letter depending on T value:
 * [ T ]  -->  [ C ]
 * ------    ----------
 *   A         Number
 *   B         Number
 *   E         Number
 *   H         Number
 *   K         Letter
 *   P         Letter
 *   Q         Letter
 *   S         Letter
 *
 */
$.validator.addMethod( "cifES", function( value ) {
	"use strict";

	var cifRegEx = new RegExp( /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/gi );
	var letter  = value.substring( 0, 1 ), // [ T ]
		number  = value.substring( 1, 8 ), // [ P ][ P ][ N ][ N ][ N ][ N ][ N ]
		control = value.substring( 8, 9 ), // [ C ]
		all_sum = 0,
		even_sum = 0,
		odd_sum = 0,
		i, n,
		control_digit,
		control_letter;

	function isOdd( n ) {
		return n % 2 === 0;
	}

	// Quick format test
	if ( value.length !== 9 || !cifRegEx.test( value ) ) {
		return false;
	}

	for ( i = 0; i < number.length; i++ ) {
		n = parseInt( number[ i ], 10 );

		// Odd positions
		if ( isOdd( i ) ) {

			// Odd positions are multiplied first.
			n *= 2;

			// If the multiplication is bigger than 10 we need to adjust
			odd_sum += n < 10 ? n : n - 9;

		// Even positions
		// Just sum them
		} else {
			even_sum += n;
		}
	}

	all_sum = even_sum + odd_sum;
	control_digit = ( 10 - ( all_sum ).toString().substr( -1 ) ).toString();
	control_digit = parseInt( control_digit, 10 ) > 9 ? "0" : control_digit;
	control_letter = "JABCDEFGHI".substr( control_digit, 1 ).toString();

	// Control must be a digit
	if ( letter.match( /[ABEH]/ ) ) {
		return control === control_digit;

	// Control must be a letter
	} else if ( letter.match( /[KPQS]/ ) ) {
		return control === control_letter;

	// Can be either
	} else {
		return control === control_digit || control === control_letter;
	}

	return false;

}, "Please specify a valid CIF number." );

/*
 * Brazillian CPF number (Cadastrado de Pessoas Físicas) is the equivalent of a Brazilian tax registration number.
 * CPF numbers have 11 digits in total: 9 numbers followed by 2 check numbers that are being used for validation.
 */
$.validator.addMethod( "cpfBR", function( value ) {

	// Removing special characters from value
	value = value.replace( /([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, "" );

	// Checking value to have 11 digits only
	if ( value.length !== 11 ) {
		return false;
	}

	var sum = 0,
		firstCN, secondCN, checkResult, i;

	firstCN = parseInt( value.substring( 9, 10 ), 10 );
	secondCN = parseInt( value.substring( 10, 11 ), 10 );

	checkResult = function( sum, cn ) {
		var result = ( sum * 10 ) % 11;
		if ( ( result === 10 ) || ( result === 11 ) ) {
			result = 0;
		}
		return ( result === cn );
	};

	// Checking for dump data
	if ( value === "" ||
		value === "00000000000" ||
		value === "11111111111" ||
		value === "22222222222" ||
		value === "33333333333" ||
		value === "44444444444" ||
		value === "55555555555" ||
		value === "66666666666" ||
		value === "77777777777" ||
		value === "88888888888" ||
		value === "99999999999"
	) {
		return false;
	}

	// Step 1 - using first Check Number:
	for ( i = 1; i <= 9; i++ ) {
		sum = sum + parseInt( value.substring( i - 1, i ), 10 ) * ( 11 - i );
	}

	// If first Check Number (CN) is valid, move to Step 2 - using second Check Number:
	if ( checkResult( sum, firstCN ) ) {
		sum = 0;
		for ( i = 1; i <= 10; i++ ) {
			sum = sum + parseInt( value.substring( i - 1, i ), 10 ) * ( 12 - i );
		}
		return checkResult( sum, secondCN );
	}
	return false;

}, "Please specify a valid CPF number" );

// http://jqueryvalidation.org/creditcard-method/
// based on http://en.wikipedia.org/wiki/Luhn_algorithm
$.validator.addMethod( "creditcard", function( value, element ) {
	if ( this.optional( element ) ) {
		return "dependency-mismatch";
	}

	// Accept only spaces, digits and dashes
	if ( /[^0-9 \-]+/.test( value ) ) {
		return false;
	}

	var nCheck = 0,
		nDigit = 0,
		bEven = false,
		n, cDigit;

	value = value.replace( /\D/g, "" );

	// Basing min and max length on
	// http://developer.ean.com/general_info/Valid_Credit_Card_Types
	if ( value.length < 13 || value.length > 19 ) {
		return false;
	}

	for ( n = value.length - 1; n >= 0; n-- ) {
		cDigit = value.charAt( n );
		nDigit = parseInt( cDigit, 10 );
		if ( bEven ) {
			if ( ( nDigit *= 2 ) > 9 ) {
				nDigit -= 9;
			}
		}

		nCheck += nDigit;
		bEven = !bEven;
	}

	return ( nCheck % 10 ) === 0;
}, "Please enter a valid credit card number." );

/* NOTICE: Modified version of Castle.Components.Validator.CreditCardValidator
 * Redistributed under the the Apache License 2.0 at http://www.apache.org/licenses/LICENSE-2.0
 * Valid Types: mastercard, visa, amex, dinersclub, enroute, discover, jcb, unknown, all (overrides all other settings)
 */
$.validator.addMethod( "creditcardtypes", function( value, element, param ) {
	if ( /[^0-9\-]+/.test( value ) ) {
		return false;
	}

	value = value.replace( /\D/g, "" );

	var validTypes = 0x0000;

	if ( param.mastercard ) {
		validTypes |= 0x0001;
	}
	if ( param.visa ) {
		validTypes |= 0x0002;
	}
	if ( param.amex ) {
		validTypes |= 0x0004;
	}
	if ( param.dinersclub ) {
		validTypes |= 0x0008;
	}
	if ( param.enroute ) {
		validTypes |= 0x0010;
	}
	if ( param.discover ) {
		validTypes |= 0x0020;
	}
	if ( param.jcb ) {
		validTypes |= 0x0040;
	}
	if ( param.unknown ) {
		validTypes |= 0x0080;
	}
	if ( param.all ) {
		validTypes = 0x0001 | 0x0002 | 0x0004 | 0x0008 | 0x0010 | 0x0020 | 0x0040 | 0x0080;
	}
	if ( validTypes & 0x0001 && /^(5[12345])/.test( value ) ) { // Mastercard
		return value.length === 16;
	}
	if ( validTypes & 0x0002 && /^(4)/.test( value ) ) { // Visa
		return value.length === 16;
	}
	if ( validTypes & 0x0004 && /^(3[47])/.test( value ) ) { // Amex
		return value.length === 15;
	}
	if ( validTypes & 0x0008 && /^(3(0[012345]|[68]))/.test( value ) ) { // Dinersclub
		return value.length === 14;
	}
	if ( validTypes & 0x0010 && /^(2(014|149))/.test( value ) ) { // Enroute
		return value.length === 15;
	}
	if ( validTypes & 0x0020 && /^(6011)/.test( value ) ) { // Discover
		return value.length === 16;
	}
	if ( validTypes & 0x0040 && /^(3)/.test( value ) ) { // Jcb
		return value.length === 16;
	}
	if ( validTypes & 0x0040 && /^(2131|1800)/.test( value ) ) { // Jcb
		return value.length === 15;
	}
	if ( validTypes & 0x0080 ) { // Unknown
		return true;
	}
	return false;
}, "Please enter a valid credit card number." );

/**
 * Validates currencies with any given symbols by @jameslouiz
 * Symbols can be optional or required. Symbols required by default
 *
 * Usage examples:
 *  currency: ["£", false] - Use false for soft currency validation
 *  currency: ["$", false]
 *  currency: ["RM", false] - also works with text based symbols such as "RM" - Malaysia Ringgit etc
 *
 *  <input class="currencyInput" name="currencyInput">
 *
 * Soft symbol checking
 *  currencyInput: {
 *     currency: ["$", false]
 *  }
 *
 * Strict symbol checking (default)
 *  currencyInput: {
 *     currency: "$"
 *     //OR
 *     currency: ["$", true]
 *  }
 *
 * Multiple Symbols
 *  currencyInput: {
 *     currency: "$,£,¢"
 *  }
 */
$.validator.addMethod( "currency", function( value, element, param ) {
    var isParamString = typeof param === "string",
        symbol = isParamString ? param : param[ 0 ],
        soft = isParamString ? true : param[ 1 ],
        regex;

    symbol = symbol.replace( /,/g, "" );
    symbol = soft ? symbol + "]" : symbol + "]?";
    regex = "^[" + symbol + "([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$";
    regex = new RegExp( regex );
    return this.optional( element ) || regex.test( value );

}, "Please specify a valid currency" );

$.validator.addMethod( "dateFA", function( value, element ) {
	return this.optional( element ) || /^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test( value );
}, $.validator.messages.date );

/**
 * Return true, if the value is a valid date, also making this formal check dd/mm/yyyy.
 *
 * @example $.validator.methods.date("01/01/1900")
 * @result true
 *
 * @example $.validator.methods.date("01/13/1990")
 * @result false
 *
 * @example $.validator.methods.date("01.01.1900")
 * @result false
 *
 * @example <input name="pippo" class="{dateITA:true}" />
 * @desc Declares an optional input element whose value must be a valid date.
 *
 * @name $.validator.methods.dateITA
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
$.validator.addMethod( "dateITA", function( value, element ) {
	var check = false,
		re = /^\d{1,2}\/\d{1,2}\/\d{4}$/,
		adata, gg, mm, aaaa, xdata;
	if ( re.test( value ) ) {
		adata = value.split( "/" );
		gg = parseInt( adata[ 0 ], 10 );
		mm = parseInt( adata[ 1 ], 10 );
		aaaa = parseInt( adata[ 2 ], 10 );
		xdata = new Date( Date.UTC( aaaa, mm - 1, gg, 12, 0, 0, 0 ) );
		if ( ( xdata.getUTCFullYear() === aaaa ) && ( xdata.getUTCMonth() === mm - 1 ) && ( xdata.getUTCDate() === gg ) ) {
			check = true;
		} else {
			check = false;
		}
	} else {
		check = false;
	}
	return this.optional( element ) || check;
}, $.validator.messages.date );

$.validator.addMethod( "dateNL", function( value, element ) {
	return this.optional( element ) || /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test( value );
}, $.validator.messages.date );

// Older "accept" file extension method. Old docs: http://docs.jquery.com/Plugins/Validation/Methods/accept
$.validator.addMethod( "extension", function( value, element, param ) {
	param = typeof param === "string" ? param.replace( /,/g, "|" ) : "png|jpe?g|gif";
	return this.optional( element ) || value.match( new RegExp( "\\.(" + param + ")$", "i" ) );
}, $.validator.format( "Please enter a value with a valid extension." ) );

/**
 * Dutch giro account numbers (not bank numbers) have max 7 digits
 */
$.validator.addMethod( "giroaccountNL", function( value, element ) {
	return this.optional( element ) || /^[0-9]{1,7}$/.test( value );
}, "Please specify a valid giro account number" );

/**
 * IBAN is the international bank account number.
 * It has a country - specific format, that is checked here too
 *
 * Validation is case-insensitive. Please make sure to normalize input yourself.
 */
$.validator.addMethod( "iban", function( value, element ) {

	// Some quick simple tests to prevent needless work
	if ( this.optional( element ) ) {
		return true;
	}

	// Remove spaces and to upper case
	var iban = value.replace( / /g, "" ).toUpperCase(),
		ibancheckdigits = "",
		leadingZeroes = true,
		cRest = "",
		cOperator = "",
		countrycode, ibancheck, charAt, cChar, bbanpattern, bbancountrypatterns, ibanregexp, i, p;

	// Check for IBAN code length.
	// It contains:
	// country code ISO 3166-1 - two letters,
	// two check digits,
	// Basic Bank Account Number (BBAN) - up to 30 chars
	var minimalIBANlength = 5;
	if ( iban.length < minimalIBANlength ) {
		return false;
	}

	// Check the country code and find the country specific format
	countrycode = iban.substring( 0, 2 );
	bbancountrypatterns = {
		"AL": "\\d{8}[\\dA-Z]{16}",
		"AD": "\\d{8}[\\dA-Z]{12}",
		"AT": "\\d{16}",
		"AZ": "[\\dA-Z]{4}\\d{20}",
		"BE": "\\d{12}",
		"BH": "[A-Z]{4}[\\dA-Z]{14}",
		"BA": "\\d{16}",
		"BR": "\\d{23}[A-Z][\\dA-Z]",
		"BG": "[A-Z]{4}\\d{6}[\\dA-Z]{8}",
		"CR": "\\d{17}",
		"HR": "\\d{17}",
		"CY": "\\d{8}[\\dA-Z]{16}",
		"CZ": "\\d{20}",
		"DK": "\\d{14}",
		"DO": "[A-Z]{4}\\d{20}",
		"EE": "\\d{16}",
		"FO": "\\d{14}",
		"FI": "\\d{14}",
		"FR": "\\d{10}[\\dA-Z]{11}\\d{2}",
		"GE": "[\\dA-Z]{2}\\d{16}",
		"DE": "\\d{18}",
		"GI": "[A-Z]{4}[\\dA-Z]{15}",
		"GR": "\\d{7}[\\dA-Z]{16}",
		"GL": "\\d{14}",
		"GT": "[\\dA-Z]{4}[\\dA-Z]{20}",
		"HU": "\\d{24}",
		"IS": "\\d{22}",
		"IE": "[\\dA-Z]{4}\\d{14}",
		"IL": "\\d{19}",
		"IT": "[A-Z]\\d{10}[\\dA-Z]{12}",
		"KZ": "\\d{3}[\\dA-Z]{13}",
		"KW": "[A-Z]{4}[\\dA-Z]{22}",
		"LV": "[A-Z]{4}[\\dA-Z]{13}",
		"LB": "\\d{4}[\\dA-Z]{20}",
		"LI": "\\d{5}[\\dA-Z]{12}",
		"LT": "\\d{16}",
		"LU": "\\d{3}[\\dA-Z]{13}",
		"MK": "\\d{3}[\\dA-Z]{10}\\d{2}",
		"MT": "[A-Z]{4}\\d{5}[\\dA-Z]{18}",
		"MR": "\\d{23}",
		"MU": "[A-Z]{4}\\d{19}[A-Z]{3}",
		"MC": "\\d{10}[\\dA-Z]{11}\\d{2}",
		"MD": "[\\dA-Z]{2}\\d{18}",
		"ME": "\\d{18}",
		"NL": "[A-Z]{4}\\d{10}",
		"NO": "\\d{11}",
		"PK": "[\\dA-Z]{4}\\d{16}",
		"PS": "[\\dA-Z]{4}\\d{21}",
		"PL": "\\d{24}",
		"PT": "\\d{21}",
		"RO": "[A-Z]{4}[\\dA-Z]{16}",
		"SM": "[A-Z]\\d{10}[\\dA-Z]{12}",
		"SA": "\\d{2}[\\dA-Z]{18}",
		"RS": "\\d{18}",
		"SK": "\\d{20}",
		"SI": "\\d{15}",
		"ES": "\\d{20}",
		"SE": "\\d{20}",
		"CH": "\\d{5}[\\dA-Z]{12}",
		"TN": "\\d{20}",
		"TR": "\\d{5}[\\dA-Z]{17}",
		"AE": "\\d{3}\\d{16}",
		"GB": "[A-Z]{4}\\d{14}",
		"VG": "[\\dA-Z]{4}\\d{16}"
	};

	bbanpattern = bbancountrypatterns[ countrycode ];

	// As new countries will start using IBAN in the
	// future, we only check if the countrycode is known.
	// This prevents false negatives, while almost all
	// false positives introduced by this, will be caught
	// by the checksum validation below anyway.
	// Strict checking should return FALSE for unknown
	// countries.
	if ( typeof bbanpattern !== "undefined" ) {
		ibanregexp = new RegExp( "^[A-Z]{2}\\d{2}" + bbanpattern + "$", "" );
		if ( !( ibanregexp.test( iban ) ) ) {
			return false; // Invalid country specific format
		}
	}

	// Now check the checksum, first convert to digits
	ibancheck = iban.substring( 4, iban.length ) + iban.substring( 0, 4 );
	for ( i = 0; i < ibancheck.length; i++ ) {
		charAt = ibancheck.charAt( i );
		if ( charAt !== "0" ) {
			leadingZeroes = false;
		}
		if ( !leadingZeroes ) {
			ibancheckdigits += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf( charAt );
		}
	}

	// Calculate the result of: ibancheckdigits % 97
	for ( p = 0; p < ibancheckdigits.length; p++ ) {
		cChar = ibancheckdigits.charAt( p );
		cOperator = "" + cRest + "" + cChar;
		cRest = cOperator % 97;
	}
	return cRest === 1;
}, "Please specify a valid IBAN" );

$.validator.addMethod( "integer", function( value, element ) {
	return this.optional( element ) || /^-?\d+$/.test( value );
}, "A positive or negative non-decimal number please" );

$.validator.addMethod( "ipv4", function( value, element ) {
	return this.optional( element ) || /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test( value );
}, "Please enter a valid IP v4 address." );

$.validator.addMethod( "ipv6", function( value, element ) {
	return this.optional( element ) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test( value );
}, "Please enter a valid IP v6 address." );

$.validator.addMethod( "lettersonly", function( value, element ) {
	return this.optional( element ) || /^[a-z]+$/i.test( value );
}, "Letters only please" );

$.validator.addMethod( "letterswithbasicpunc", function( value, element ) {
	return this.optional( element ) || /^[a-z\-.,()'"\s]+$/i.test( value );
}, "Letters or punctuation only please" );

$.validator.addMethod( "mobileNL", function( value, element ) {
	return this.optional( element ) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test( value );
}, "Please specify a valid mobile number" );

/* For UK phone functions, do the following server side processing:
 * Compare original input with this RegEx pattern:
 * ^\(?(?:(?:00\)?[\s\-]?\(?|\+)(44)\)?[\s\-]?\(?(?:0\)?[\s\-]?\(?)?|0)([1-9]\d{1,4}\)?[\s\d\-]+)$
 * Extract $1 and set $prefix to '+44<space>' if $1 is '44', otherwise set $prefix to '0'
 * Extract $2 and remove hyphens, spaces and parentheses. Phone number is combined $prefix and $2.
 * A number of very detailed GB telephone number RegEx patterns can also be found at:
 * http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers
 */
$.validator.addMethod( "mobileUK", function( phone_number, element ) {
	phone_number = phone_number.replace( /\(|\)|\s+|-/g, "" );
	return this.optional( element ) || phone_number.length > 9 &&
		phone_number.match( /^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/ );
}, "Please specify a valid mobile number" );

/*
 * The NIE (Número de Identificación de Extranjero) is a Spanish tax identification number assigned by the Spanish
 * authorities to any foreigner.
 *
 * The NIE is the equivalent of a Spaniards Número de Identificación Fiscal (NIF) which serves as a fiscal
 * identification number. The CIF number (Certificado de Identificación Fiscal) is equivalent to the NIF, but applies to
 * companies rather than individuals. The NIE consists of an 'X' or 'Y' followed by 7 or 8 digits then another letter.
 */
$.validator.addMethod( "nieES", function( value ) {
	"use strict";

	var nieRegEx = new RegExp( /^[MXYZ]{1}[0-9]{7,8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/gi );
	var validChars = "TRWAGMYFPDXBNJZSQVHLCKET",
		letter = value.substr( value.length - 1 ).toUpperCase(),
		number;

	value = value.toString().toUpperCase();

	// Quick format test
	if ( value.length > 10 || value.length < 9 || !nieRegEx.test( value ) ) {
		return false;
	}

	// X means same number
	// Y means number + 10000000
	// Z means number + 20000000
	value = value.replace( /^[X]/, "0" )
		.replace( /^[Y]/, "1" )
		.replace( /^[Z]/, "2" );

	number = value.length === 9 ? value.substr( 0, 8 ) : value.substr( 0, 9 );

	return validChars.charAt( parseInt( number, 10 ) % 23 ) === letter;

}, "Please specify a valid NIE number." );

/*
 * The Número de Identificación Fiscal ( NIF ) is the way tax identification used in Spain for individuals
 */
$.validator.addMethod( "nifES", function( value ) {
	"use strict";

	value = value.toUpperCase();

	// Basic format test
	if ( !value.match( "((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)" ) ) {
		return false;
	}

	// Test NIF
	if ( /^[0-9]{8}[A-Z]{1}$/.test( value ) ) {
		return ( "TRWAGMYFPDXBNJZSQVHLCKE".charAt( value.substring( 8, 0 ) % 23 ) === value.charAt( 8 ) );
	}

	// Test specials NIF (starts with K, L or M)
	if ( /^[KLM]{1}/.test( value ) ) {
		return ( value[ 8 ] === String.fromCharCode( 64 ) );
	}

	return false;

}, "Please specify a valid NIF number." );

$.validator.addMethod( "notEqualTo", function( value, element, param ) {
	return this.optional( element ) || !$.validator.methods.equalTo.call( this, value, element, param );
}, "Please enter a different value, values must not be the same." );

$.validator.addMethod( "nowhitespace", function( value, element ) {
	return this.optional( element ) || /^\S+$/i.test( value );
}, "No white space please" );

/**
* Return true if the field value matches the given format RegExp
*
* @example $.validator.methods.pattern("AR1004",element,/^AR\d{4}$/)
* @result true
*
* @example $.validator.methods.pattern("BR1004",element,/^AR\d{4}$/)
* @result false
*
* @name $.validator.methods.pattern
* @type Boolean
* @cat Plugins/Validate/Methods
*/
$.validator.addMethod( "pattern", function( value, element, param ) {
	if ( this.optional( element ) ) {
		return true;
	}
	if ( typeof param === "string" ) {
		param = new RegExp( "^(?:" + param + ")$" );
	}
	return param.test( value );
}, "Invalid format." );

/**
 * Dutch phone numbers have 10 digits (or 11 and start with +31).
 */
$.validator.addMethod( "phoneNL", function( value, element ) {
	return this.optional( element ) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test( value );
}, "Please specify a valid phone number." );

/* For UK phone functions, do the following server side processing:
 * Compare original input with this RegEx pattern:
 * ^\(?(?:(?:00\)?[\s\-]?\(?|\+)(44)\)?[\s\-]?\(?(?:0\)?[\s\-]?\(?)?|0)([1-9]\d{1,4}\)?[\s\d\-]+)$
 * Extract $1 and set $prefix to '+44<space>' if $1 is '44', otherwise set $prefix to '0'
 * Extract $2 and remove hyphens, spaces and parentheses. Phone number is combined $prefix and $2.
 * A number of very detailed GB telephone number RegEx patterns can also be found at:
 * http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers
 */

// Matches UK landline + mobile, accepting only 01-3 for landline or 07 for mobile to exclude many premium numbers
$.validator.addMethod( "phonesUK", function( phone_number, element ) {
	phone_number = phone_number.replace( /\(|\)|\s+|-/g, "" );
	return this.optional( element ) || phone_number.length > 9 &&
		phone_number.match( /^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/ );
}, "Please specify a valid uk phone number" );

/* For UK phone functions, do the following server side processing:
 * Compare original input with this RegEx pattern:
 * ^\(?(?:(?:00\)?[\s\-]?\(?|\+)(44)\)?[\s\-]?\(?(?:0\)?[\s\-]?\(?)?|0)([1-9]\d{1,4}\)?[\s\d\-]+)$
 * Extract $1 and set $prefix to '+44<space>' if $1 is '44', otherwise set $prefix to '0'
 * Extract $2 and remove hyphens, spaces and parentheses. Phone number is combined $prefix and $2.
 * A number of very detailed GB telephone number RegEx patterns can also be found at:
 * http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers
 */
$.validator.addMethod( "phoneUK", function( phone_number, element ) {
	phone_number = phone_number.replace( /\(|\)|\s+|-/g, "" );
	return this.optional( element ) || phone_number.length > 9 &&
		phone_number.match( /^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/ );
}, "Please specify a valid phone number" );

/**
 * Matches US phone number format
 *
 * where the area code may not start with 1 and the prefix may not start with 1
 * allows '-' or ' ' as a separator and allows parens around area code
 * some people may want to put a '1' in front of their number
 *
 * 1(212)-999-2345 or
 * 212 999 2344 or
 * 212-999-0983
 *
 * but not
 * 111-123-5434
 * and not
 * 212 123 4567
 */
$.validator.addMethod( "phoneUS", function( phone_number, element ) {
	phone_number = phone_number.replace( /\s+/g, "" );
	return this.optional( element ) || phone_number.length > 9 &&
		phone_number.match( /^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/ );
}, "Please specify a valid phone number" );

/*
* Valida CEPs do brasileiros:
*
* Formatos aceitos:
* 99999-999
* 99.999-999
* 99999999
*/
$.validator.addMethod( "postalcodeBR", function( cep_value, element ) {
	return this.optional( element ) || /^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test( cep_value );
}, "Informe um CEP válido." );

/**
 * Matches a valid Canadian Postal Code
 *
 * @example jQuery.validator.methods.postalCodeCA( "H0H 0H0", element )
 * @result true
 *
 * @example jQuery.validator.methods.postalCodeCA( "H0H0H0", element )
 * @result false
 *
 * @name jQuery.validator.methods.postalCodeCA
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
$.validator.addMethod( "postalCodeCA", function( value, element ) {
	return this.optional( element ) || /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ] *\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i.test( value );
}, "Please specify a valid postal code" );

/* Matches Italian postcode (CAP) */
$.validator.addMethod( "postalcodeIT", function( value, element ) {
	return this.optional( element ) || /^\d{5}$/.test( value );
}, "Please specify a valid postal code" );

$.validator.addMethod( "postalcodeNL", function( value, element ) {
	return this.optional( element ) || /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test( value );
}, "Please specify a valid postal code" );

// Matches UK postcode. Does not match to UK Channel Islands that have their own postcodes (non standard UK)
$.validator.addMethod( "postcodeUK", function( value, element ) {
	return this.optional( element ) || /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test( value );
}, "Please specify a valid UK postcode" );

/*
 * Lets you say "at least X inputs that match selector Y must be filled."
 *
 * The end result is that neither of these inputs:
 *
 *	<input class="productinfo" name="partnumber">
 *	<input class="productinfo" name="description">
 *
 *	...will validate unless at least one of them is filled.
 *
 * partnumber:	{require_from_group: [1,".productinfo"]},
 * description: {require_from_group: [1,".productinfo"]}
 *
 * options[0]: number of fields that must be filled in the group
 * options[1]: CSS selector that defines the group of conditionally required fields
 */
$.validator.addMethod( "require_from_group", function( value, element, options ) {
	var $fields = $( options[ 1 ], element.form ),
		$fieldsFirst = $fields.eq( 0 ),
		validator = $fieldsFirst.data( "valid_req_grp" ) ? $fieldsFirst.data( "valid_req_grp" ) : $.extend( {}, this ),
		isValid = $fields.filter( function() {
			return validator.elementValue( this );
		} ).length >= options[ 0 ];

	// Store the cloned validator for future validation
	$fieldsFirst.data( "valid_req_grp", validator );

	// If element isn't being validated, run each require_from_group field's validation rules
	if ( !$( element ).data( "being_validated" ) ) {
		$fields.data( "being_validated", true );
		$fields.each( function() {
			validator.element( this );
		} );
		$fields.data( "being_validated", false );
	}
	return isValid;
}, $.validator.format( "Please fill at least {0} of these fields." ) );

/*
 * Lets you say "either at least X inputs that match selector Y must be filled,
 * OR they must all be skipped (left blank)."
 *
 * The end result, is that none of these inputs:
 *
 *	<input class="productinfo" name="partnumber">
 *	<input class="productinfo" name="description">
 *	<input class="productinfo" name="color">
 *
 *	...will validate unless either at least two of them are filled,
 *	OR none of them are.
 *
 * partnumber:	{skip_or_fill_minimum: [2,".productinfo"]},
 * description: {skip_or_fill_minimum: [2,".productinfo"]},
 * color:		{skip_or_fill_minimum: [2,".productinfo"]}
 *
 * options[0]: number of fields that must be filled in the group
 * options[1]: CSS selector that defines the group of conditionally required fields
 *
 */
$.validator.addMethod( "skip_or_fill_minimum", function( value, element, options ) {
	var $fields = $( options[ 1 ], element.form ),
		$fieldsFirst = $fields.eq( 0 ),
		validator = $fieldsFirst.data( "valid_skip" ) ? $fieldsFirst.data( "valid_skip" ) : $.extend( {}, this ),
		numberFilled = $fields.filter( function() {
			return validator.elementValue( this );
		} ).length,
		isValid = numberFilled === 0 || numberFilled >= options[ 0 ];

	// Store the cloned validator for future validation
	$fieldsFirst.data( "valid_skip", validator );

	// If element isn't being validated, run each skip_or_fill_minimum field's validation rules
	if ( !$( element ).data( "being_validated" ) ) {
		$fields.data( "being_validated", true );
		$fields.each( function() {
			validator.element( this );
		} );
		$fields.data( "being_validated", false );
	}
	return isValid;
}, $.validator.format( "Please either skip these fields or fill at least {0} of them." ) );

/* Validates US States and/or Territories by @jdforsythe
 * Can be case insensitive or require capitalization - default is case insensitive
 * Can include US Territories or not - default does not
 * Can include US Military postal abbreviations (AA, AE, AP) - default does not
 *
 * Note: "States" always includes DC (District of Colombia)
 *
 * Usage examples:
 *
 *  This is the default - case insensitive, no territories, no military zones
 *  stateInput: {
 *     caseSensitive: false,
 *     includeTerritories: false,
 *     includeMilitary: false
 *  }
 *
 *  Only allow capital letters, no territories, no military zones
 *  stateInput: {
 *     caseSensitive: false
 *  }
 *
 *  Case insensitive, include territories but not military zones
 *  stateInput: {
 *     includeTerritories: true
 *  }
 *
 *  Only allow capital letters, include territories and military zones
 *  stateInput: {
 *     caseSensitive: true,
 *     includeTerritories: true,
 *     includeMilitary: true
 *  }
 *
 */
$.validator.addMethod( "stateUS", function( value, element, options ) {
	var isDefault = typeof options === "undefined",
		caseSensitive = ( isDefault || typeof options.caseSensitive === "undefined" ) ? false : options.caseSensitive,
		includeTerritories = ( isDefault || typeof options.includeTerritories === "undefined" ) ? false : options.includeTerritories,
		includeMilitary = ( isDefault || typeof options.includeMilitary === "undefined" ) ? false : options.includeMilitary,
		regex;

	if ( !includeTerritories && !includeMilitary ) {
		regex = "^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$";
	} else if ( includeTerritories && includeMilitary ) {
		regex = "^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$";
	} else if ( includeTerritories ) {
		regex = "^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$";
	} else {
		regex = "^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$";
	}

	regex = caseSensitive ? new RegExp( regex ) : new RegExp( regex, "i" );
	return this.optional( element ) || regex.test( value );
}, "Please specify a valid state" );

// TODO check if value starts with <, otherwise don't try stripping anything
$.validator.addMethod( "strippedminlength", function( value, element, param ) {
	return $( value ).text().length >= param;
}, $.validator.format( "Please enter at least {0} characters" ) );

$.validator.addMethod( "time", function( value, element ) {
	return this.optional( element ) || /^([01]\d|2[0-3]|[0-9])(:[0-5]\d){1,2}$/.test( value );
}, "Please enter a valid time, between 00:00 and 23:59" );

$.validator.addMethod( "time12h", function( value, element ) {
	return this.optional( element ) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test( value );
}, "Please enter a valid time in 12-hour am/pm format" );

// Same as url, but TLD is optional
$.validator.addMethod( "url2", function( value, element ) {
	return this.optional( element ) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test( value );
}, $.validator.messages.url );

/**
 * Return true, if the value is a valid vehicle identification number (VIN).
 *
 * Works with all kind of text inputs.
 *
 * @example <input type="text" size="20" name="VehicleID" class="{required:true,vinUS:true}" />
 * @desc Declares a required input element whose value must be a valid vehicle identification number.
 *
 * @name $.validator.methods.vinUS
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
$.validator.addMethod( "vinUS", function( v ) {
	if ( v.length !== 17 ) {
		return false;
	}

	var LL = [ "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ],
		VL = [ 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9 ],
		FL = [ 8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2 ],
		rs = 0,
		i, n, d, f, cd, cdv;

	for ( i = 0; i < 17; i++ ) {
		f = FL[ i ];
		d = v.slice( i, i + 1 );
		if ( i === 8 ) {
			cdv = d;
		}
		if ( !isNaN( d ) ) {
			d *= f;
		} else {
			for ( n = 0; n < LL.length; n++ ) {
				if ( d.toUpperCase() === LL[ n ] ) {
					d = VL[ n ];
					d *= f;
					if ( isNaN( cdv ) && n === 8 ) {
						cdv = LL[ n ];
					}
					break;
				}
			}
		}
		rs += d;
	}
	cd = rs % 11;
	if ( cd === 10 ) {
		cd = "X";
	}
	if ( cd === cdv ) {
		return true;
	}
	return false;
}, "The specified vehicle identification number (VIN) is invalid." );

$.validator.addMethod( "zipcodeUS", function( value, element ) {
	return this.optional( element ) || /^\d{5}(-\d{4})?$/.test( value );
}, "The specified US ZIP Code is invalid" );

$.validator.addMethod( "ziprange", function( value, element ) {
	return this.optional( element ) || /^90[2-5]\d\{2\}-\d{4}$/.test( value );
}, "Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx" );
return $;
}));
/*! @preserve This js file is bundled through automated tasks, view the repo for the real source */
(function ($$1) {
  'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-alpha.6): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Util = (function ($) {


    /**
     * ------------------------------------------------------------------------
     * Private TransitionEnd Helpers
     * ------------------------------------------------------------------------
     */

    var transition = false;

    var MAX_UID = 1000000;

    var TransitionEndEvent = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    };

    // shoutout AngusCroll (https://goo.gl/pxwQGp)
    function toType(obj) {
      return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
    }

    function isElement(obj) {
      return (obj[0] || obj).nodeType
    }

    function getSpecialTransitionEndEvent() {
      return {
        bindType: transition.end,
        delegateType: transition.end,
        handle: function handle(event) {
          if ($(event.target).is(this)) {
            return event.handleObj.handler.apply(this, arguments) // eslint-disable-line prefer-rest-params
          }
          return undefined
        }
      }
    }

    function transitionEndTest() {
      if (window.QUnit) {
        return false
      }

      var el = document.createElement('bootstrap');

      for (var name in TransitionEndEvent) {
        if (el.style[name] !== undefined) {
          return {
            end: TransitionEndEvent[name]
          }
        }
      }

      return false
    }

    function transitionEndEmulator(duration) {
      var this$1 = this;

      var called = false;

      $(this).one(Util.TRANSITION_END, function () {
        called = true;
      });

      setTimeout(function () {
        if (!called) {
          Util.triggerTransitionEnd(this$1);
        }
      }, duration);

      return this
    }

    function setTransitionEndSupport() {
      transition = transitionEndTest();

      $.fn.emulateTransitionEnd = transitionEndEmulator;

      if (Util.supportsTransitionEnd()) {
        $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
      }
    }


    /**
     * --------------------------------------------------------------------------
     * Public Util Api
     * --------------------------------------------------------------------------
     */

    var Util = {

      TRANSITION_END: 'bsTransitionEnd',

      getUID: function getUID(prefix) {
        do {
          // eslint-disable-next-line no-bitwise
          prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
        } while (document.getElementById(prefix))
        return prefix
      },

      getSelectorFromElement: function getSelectorFromElement(element) {
        var selector = element.getAttribute('data-target');

        if (!selector) {
          selector = element.getAttribute('href') || '';
          selector = /^#[a-z]/i.test(selector) ? selector : null;
        }

        return selector
      },

      reflow: function reflow(element) {
        return element.offsetHeight
      },

      triggerTransitionEnd: function triggerTransitionEnd(element) {
        $(element).trigger(transition.end);
      },

      supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(transition)
      },

      typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
        for (var property in configTypes) {
          if (configTypes.hasOwnProperty(property)) {
            var expectedTypes = configTypes[property];
            var value         = config[property];
            var valueType     = value && isElement(value) ?
                                  'element' : toType(value);

            if (!new RegExp(expectedTypes).test(valueType)) {
              throw new Error(
                (componentName.toUpperCase()) + ": " +
                "Option \"" + property + "\" provided type \"" + valueType + "\" " +
                "but expected type \"" + expectedTypes + "\".")
            }
          }
        }
      }
    };

    setTransitionEndSupport();

    return Util

  })(jQuery);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-alpha.6): collapse.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Collapse = (function ($) {


    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME                = 'collapse';
    var VERSION             = '4.0.0-alpha.6';
    var DATA_KEY            = 'bs.collapse';
    var EVENT_KEY           = "." + DATA_KEY;
    var DATA_API_KEY        = '.data-api';
    var JQUERY_NO_CONFLICT  = $.fn[NAME];
    var TRANSITION_DURATION = 600;

    var Default = {
      toggle : true,
      parent : ''
    };

    var DefaultType = {
      toggle : 'boolean',
      parent : 'string'
    };

    var Event = {
      SHOW           : ("show" + EVENT_KEY),
      SHOWN          : ("shown" + EVENT_KEY),
      HIDE           : ("hide" + EVENT_KEY),
      HIDDEN         : ("hidden" + EVENT_KEY),
      CLICK_DATA_API : ("click" + EVENT_KEY + DATA_API_KEY)
    };

    var ClassName = {
      SHOW       : 'show',
      COLLAPSE   : 'collapse',
      COLLAPSING : 'collapsing',
      COLLAPSED  : 'collapsed'
    };

    var Dimension = {
      WIDTH  : 'width',
      HEIGHT : 'height'
    };

    var Selector = {
      ACTIVES     : '.card > .show, .card > .collapsing',
      DATA_TOGGLE : '[data-toggle="collapse"]'
    };


    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Collapse = function Collapse(element, config) {
      this._isTransitioning = false;
      this._element       = element;
      this._config        = this._getConfig(config);
      this._triggerArray  = $.makeArray($(
        "[data-toggle=\"collapse\"][href=\"#" + (element.id) + "\"]," +
        "[data-toggle=\"collapse\"][data-target=\"#" + (element.id) + "\"]"
      ));

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    };

    var staticAccessors = { VERSION: { configurable: true },Default: { configurable: true } };


    // getters

    staticAccessors.VERSION.get = function () {
      return VERSION
    };

    staticAccessors.Default.get = function () {
      return Default
    };


    // public

    Collapse.prototype.toggle = function toggle () {
      if ($(this._element).hasClass(ClassName.SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    };

    Collapse.prototype.show = function show () {
        var this$1 = this;

      if (this._isTransitioning) {
        throw new Error('Collapse is transitioning')
      }

      if ($(this._element).hasClass(ClassName.SHOW)) {
        return
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = $.makeArray($(this._parent).find(Selector.ACTIVES));
        if (!actives.length) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $(actives).data(DATA_KEY);
        if (activesData && activesData._isTransitioning) {
          return
        }
      }

      var startEvent = $.Event(Event.SHOW);
      $(this._element).trigger(startEvent);
      if (startEvent.isDefaultPrevented()) {
        return
      }

      if (actives) {
        Collapse._jQueryInterface.call($(actives), 'hide');
        if (!activesData) {
          $(actives).data(DATA_KEY, null);
        }
      }

      var dimension = this._getDimension();

      $(this._element)
        .removeClass(ClassName.COLLAPSE)
        .addClass(ClassName.COLLAPSING);

      this._element.style[dimension] = 0;
      this._element.setAttribute('aria-expanded', true);

      if (this._triggerArray.length) {
        $(this._triggerArray)
          .removeClass(ClassName.COLLAPSED)
          .attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function () {
        $(this$1._element)
          .removeClass(ClassName.COLLAPSING)
          .addClass(ClassName.COLLAPSE)
          .addClass(ClassName.SHOW);

        this$1._element.style[dimension] = '';

        this$1.setTransitioning(false);

        $(this$1._element).trigger(Event.SHOWN);
      };

      if (!Util.supportsTransitionEnd()) {
        complete();
        return
      }

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize         = "scroll" + capitalizedDimension;

      $(this._element)
        .one(Util.TRANSITION_END, complete)
        .emulateTransitionEnd(TRANSITION_DURATION);

      this._element.style[dimension] = (this._element[scrollSize]) + "px";
    };

    Collapse.prototype.hide = function hide () {
        var this$1 = this;

      if (this._isTransitioning) {
        throw new Error('Collapse is transitioning')
      }

      if (!$(this._element).hasClass(ClassName.SHOW)) {
        return
      }

      var startEvent = $.Event(Event.HIDE);
      $(this._element).trigger(startEvent);
      if (startEvent.isDefaultPrevented()) {
        return
      }

      var dimension     = this._getDimension();
      var offsetDimension = dimension === Dimension.WIDTH ?
        'offsetWidth' : 'offsetHeight';

      this._element.style[dimension] = (this._element[offsetDimension]) + "px";

      Util.reflow(this._element);

      $(this._element)
        .addClass(ClassName.COLLAPSING)
        .removeClass(ClassName.COLLAPSE)
        .removeClass(ClassName.SHOW);

      this._element.setAttribute('aria-expanded', false);

      if (this._triggerArray.length) {
        $(this._triggerArray)
          .addClass(ClassName.COLLAPSED)
          .attr('aria-expanded', false);
      }

      this.setTransitioning(true);

      var complete = function () {
        this$1.setTransitioning(false);
        $(this$1._element)
          .removeClass(ClassName.COLLAPSING)
          .addClass(ClassName.COLLAPSE)
          .trigger(Event.HIDDEN);
      };

      this._element.style[dimension] = '';

      if (!Util.supportsTransitionEnd()) {
        complete();
        return
      }

      $(this._element)
        .one(Util.TRANSITION_END, complete)
        .emulateTransitionEnd(TRANSITION_DURATION);
    };

    Collapse.prototype.setTransitioning = function setTransitioning (isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    Collapse.prototype.dispose = function dispose () {
      $.removeData(this._element, DATA_KEY);

      this._config        = null;
      this._parent        = null;
      this._element       = null;
      this._triggerArray  = null;
      this._isTransitioning = null;
    };


    // private

    Collapse.prototype._getConfig = function _getConfig (config) {
      config = $.extend({}, Default, config);
      config.toggle = Boolean(config.toggle); // coerce string values
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config
    };

    Collapse.prototype._getDimension = function _getDimension () {
      var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT
    };

    Collapse.prototype._getParent = function _getParent () {
        var this$1 = this;

      var parent = $(this._config.parent)[0];
      var selector =
        "[data-toggle=\"collapse\"][data-parent=\"" + (this._config.parent) + "\"]";

      $(parent).find(selector).each(function (i, element) {
        this$1._addAriaAndCollapsedClass(
          Collapse._getTargetFromElement(element),
          [element]
        );
      });

      return parent
    };

    Collapse.prototype._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass (element, triggerArray) {
      if (element) {
        var isOpen = $(element).hasClass(ClassName.SHOW);
        element.setAttribute('aria-expanded', isOpen);

        if (triggerArray.length) {
          $(triggerArray)
            .toggleClass(ClassName.COLLAPSED, !isOpen)
            .attr('aria-expanded', isOpen);
        }
      }
    };


    // static

    Collapse._getTargetFromElement = function _getTargetFromElement (element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? $(selector)[0] : null
    };

    Collapse._jQueryInterface = function _jQueryInterface (config) {
      return this.each(function () {
        var $this = $(this);
        var data    = $this.data(DATA_KEY);
        var _config = $.extend(
          {},
          Default,
          $this.data(),
          typeof config === 'object' && config
        );

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error(("No method named \"" + config + "\""))
          }
          data[config]();
        }
      })
    };

    Object.defineProperties( Collapse, staticAccessors );


    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      event.preventDefault();

      var target = Collapse._getTargetFromElement(this);
      var data   = $(target).data(DATA_KEY);
      var config = data ? 'toggle' : $(this).data();

      Collapse._jQueryInterface.call($(target), config);
    });


    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME]             = Collapse._jQueryInterface;
    $.fn[NAME].Constructor = Collapse;
    $.fn[NAME].noConflict  = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Collapse._jQueryInterface
    };

    return Collapse

  })(jQuery);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-alpha.6): alert.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Alert = (function ($) {


    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME                = 'alert';
    var VERSION             = '4.0.0-alpha.6';
    var DATA_KEY            = 'bs.alert';
    var EVENT_KEY           = "." + DATA_KEY;
    var DATA_API_KEY        = '.data-api';
    var JQUERY_NO_CONFLICT  = $.fn[NAME];
    var TRANSITION_DURATION = 150;

    var Selector = {
      DISMISS : '[data-dismiss="alert"]'
    };

    var Event = {
      CLOSE          : ("close" + EVENT_KEY),
      CLOSED         : ("closed" + EVENT_KEY),
      CLICK_DATA_API : ("click" + EVENT_KEY + DATA_API_KEY)
    };

    var ClassName = {
      ALERT : 'alert',
      FADE  : 'fade',
      SHOW  : 'show'
    };


    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Alert = function Alert(element) {
      this._element = element;
    };

    var staticAccessors = { VERSION: { configurable: true } };


    // getters

    staticAccessors.VERSION.get = function () {
      return VERSION
    };


    // public

    Alert.prototype.close = function close (element) {
      element = element || this._element;

      var rootElement = this._getRootElement(element);
      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return
      }

      this._removeElement(rootElement);
    };

    Alert.prototype.dispose = function dispose () {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    };


    // private

    Alert.prototype._getRootElement = function _getRootElement (element) {
      var selector = Util.getSelectorFromElement(element);
      var parent   = false;

      if (selector) {
        parent = $(selector)[0];
      }

      if (!parent) {
        parent = $(element).closest(("." + (ClassName.ALERT)))[0];
      }

      return parent
    };

    Alert.prototype._triggerCloseEvent = function _triggerCloseEvent (element) {
      var closeEvent = $.Event(Event.CLOSE);

      $(element).trigger(closeEvent);
      return closeEvent
    };

    Alert.prototype._removeElement = function _removeElement (element) {
        var this$1 = this;

      $(element).removeClass(ClassName.SHOW);

      if (!Util.supportsTransitionEnd() ||
          !$(element).hasClass(ClassName.FADE)) {
        this._destroyElement(element);
        return
      }

      $(element)
        .one(Util.TRANSITION_END, function (event) { return this$1._destroyElement(element, event); })
        .emulateTransitionEnd(TRANSITION_DURATION);
    };

    Alert.prototype._destroyElement = function _destroyElement (element) {
      $(element)
        .detach()
        .trigger(Event.CLOSED)
        .remove();
    };


    // static

    Alert._jQueryInterface = function _jQueryInterface (config) {
      return this.each(function () {
        var $element = $(this);
        var data     = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      })
    };

    Alert._handleDismiss = function _handleDismiss (alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      }
    };

    Object.defineProperties( Alert, staticAccessors );


    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(document).on(
      Event.CLICK_DATA_API,
      Selector.DISMISS,
      Alert._handleDismiss(new Alert())
    );


    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME]             = Alert._jQueryInterface;
    $.fn[NAME].Constructor = Alert;
    $.fn[NAME].noConflict  = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Alert._jQueryInterface
    };

    return Alert

  })(jQuery);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-alpha.6): modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Modal = (function ($) {


    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME                         = 'modal';
    var VERSION                      = '4.0.0-alpha.6';
    var DATA_KEY                     = 'bs.modal';
    var EVENT_KEY                    = "." + DATA_KEY;
    var DATA_API_KEY                 = '.data-api';
    var JQUERY_NO_CONFLICT           = $.fn[NAME];
    var TRANSITION_DURATION          = 300;
    var BACKDROP_TRANSITION_DURATION = 150;
    var ESCAPE_KEYCODE               = 27; // KeyboardEvent.which value for Escape (Esc) key

    var Default = {
      backdrop : true,
      keyboard : true,
      focus    : true,
      show     : true
    };

    var DefaultType = {
      backdrop : '(boolean|string)',
      keyboard : 'boolean',
      focus    : 'boolean',
      show     : 'boolean'
    };

    var Event = {
      HIDE              : ("hide" + EVENT_KEY),
      HIDDEN            : ("hidden" + EVENT_KEY),
      SHOW              : ("show" + EVENT_KEY),
      SHOWN             : ("shown" + EVENT_KEY),
      FOCUSIN           : ("focusin" + EVENT_KEY),
      RESIZE            : ("resize" + EVENT_KEY),
      CLICK_DISMISS     : ("click.dismiss" + EVENT_KEY),
      KEYDOWN_DISMISS   : ("keydown.dismiss" + EVENT_KEY),
      MOUSEUP_DISMISS   : ("mouseup.dismiss" + EVENT_KEY),
      MOUSEDOWN_DISMISS : ("mousedown.dismiss" + EVENT_KEY),
      CLICK_DATA_API    : ("click" + EVENT_KEY + DATA_API_KEY)
    };

    var ClassName = {
      SCROLLBAR_MEASURER : 'modal-scrollbar-measure',
      BACKDROP           : 'modal-backdrop',
      OPEN               : 'modal-open',
      FADE               : 'fade',
      SHOW               : 'show'
    };

    var Selector = {
      DIALOG             : '.modal-dialog',
      DATA_TOGGLE        : '[data-toggle="modal"]',
      DATA_DISMISS       : '[data-dismiss="modal"]',
      FIXED_CONTENT      : '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top'
    };


    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Modal = function Modal(element, config) {
      this._config            = this._getConfig(config);
      this._element           = element;
      this._dialog            = $(element).find(Selector.DIALOG)[0];
      this._backdrop          = null;
      this._isShown           = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning   = false;
      this._originalBodyPadding = 0;
      this._scrollbarWidth    = 0;
    };

    var staticAccessors = { VERSION: { configurable: true },Default: { configurable: true } };


    // getters

    staticAccessors.VERSION.get = function () {
      return VERSION
    };

    staticAccessors.Default.get = function () {
      return Default
    };


    // public

    Modal.prototype.toggle = function toggle (relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget)
    };

    Modal.prototype.show = function show (relatedTarget) {
        var this$1 = this;

      if (this._isTransitioning) {
        throw new Error('Modal is transitioning')
      }

      if (Util.supportsTransitionEnd() &&
        $(this._element).hasClass(ClassName.FADE)) {
        this._isTransitioning = true;
      }
      var showEvent = $.Event(Event.SHOW, {
        relatedTarget: relatedTarget
      });

      $(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return
      }

      this._isShown = true;

      this._checkScrollbar();
      this._setScrollbar();

      $(document.body).addClass(ClassName.OPEN);

      this._setEscapeEvent();
      this._setResizeEvent();

      $(this._element).on(
        Event.CLICK_DISMISS,
        Selector.DATA_DISMISS,
        function (event) { return this$1.hide(event); }
      );

      $(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
        $(this$1._element).one(Event.MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(this$1._element)) {
            this$1._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () { return this$1._showElement(relatedTarget); });
    };

    Modal.prototype.hide = function hide (event) {
        var this$1 = this;

      if (event) {
        event.preventDefault();
      }

      if (this._isTransitioning) {
        throw new Error('Modal is transitioning')
      }

      var transition = Util.supportsTransitionEnd() &&
        $(this._element).hasClass(ClassName.FADE);
      if (transition) {
        this._isTransitioning = true;
      }

      var hideEvent = $.Event(Event.HIDE);
      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return
      }

      this._isShown = false;

      this._setEscapeEvent();
      this._setResizeEvent();

      $(document).off(Event.FOCUSIN);

      $(this._element).removeClass(ClassName.SHOW);

      $(this._element).off(Event.CLICK_DISMISS);
      $(this._dialog).off(Event.MOUSEDOWN_DISMISS);

      if (transition) {
        $(this._element)
          .one(Util.TRANSITION_END, function (event) { return this$1._hideModal(event); })
          .emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        this._hideModal();
      }
    };

    Modal.prototype.dispose = function dispose () {
      $.removeData(this._element, DATA_KEY);

      $(window, document, this._element, this._backdrop).off(EVENT_KEY);

      this._config            = null;
      this._element           = null;
      this._dialog            = null;
      this._backdrop          = null;
      this._isShown           = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._originalBodyPadding = null;
      this._scrollbarWidth    = null;
    };


    // private

    Modal.prototype._getConfig = function _getConfig (config) {
      config = $.extend({}, Default, config);
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config
    };

    Modal.prototype._showElement = function _showElement (relatedTarget) {
        var this$1 = this;

      var transition = Util.supportsTransitionEnd() &&
        $(this._element).hasClass(ClassName.FADE);

      if (!this._element.parentNode ||
         this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // don't move modals dom position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';
      this._element.removeAttribute('aria-hidden');
      this._element.scrollTop = 0;

      if (transition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(ClassName.SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $.Event(Event.SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function () {
        if (this$1._config.focus) {
          this$1._element.focus();
        }
        this$1._isTransitioning = false;
        $(this$1._element).trigger(shownEvent);
      };

      if (transition) {
        $(this._dialog)
          .one(Util.TRANSITION_END, transitionComplete)
          .emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        transitionComplete();
      }
    };

    Modal.prototype._enforceFocus = function _enforceFocus () {
        var this$1 = this;

      $(document)
        .off(Event.FOCUSIN) // guard against infinite focus loop
        .on(Event.FOCUSIN, function (event) {
          if (document !== event.target &&
              this$1._element !== event.target &&
              !$(this$1._element).has(event.target).length) {
            this$1._element.focus();
          }
        });
    };

    Modal.prototype._setEscapeEvent = function _setEscapeEvent () {
        var this$1 = this;

      if (this._isShown && this._config.keyboard) {
        $(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
          if (event.which === ESCAPE_KEYCODE) {
            this$1.hide();
          }
        });

      } else if (!this._isShown) {
        $(this._element).off(Event.KEYDOWN_DISMISS);
      }
    };

    Modal.prototype._setResizeEvent = function _setResizeEvent () {
        var this$1 = this;

      if (this._isShown) {
        $(window).on(Event.RESIZE, function (event) { return this$1._handleUpdate(event); });
      } else {
        $(window).off(Event.RESIZE);
      }
    };

    Modal.prototype._hideModal = function _hideModal () {
        var this$1 = this;

      this._element.style.display = 'none';
      this._element.setAttribute('aria-hidden', 'true');
      this._isTransitioning = false;
      this._showBackdrop(function () {
        $(document.body).removeClass(ClassName.OPEN);
        this$1._resetAdjustments();
        this$1._resetScrollbar();
        $(this$1._element).trigger(Event.HIDDEN);
      });
    };

    Modal.prototype._removeBackdrop = function _removeBackdrop () {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    Modal.prototype._showBackdrop = function _showBackdrop (callback) {
        var this$1 = this;

      var animate = $(this._element).hasClass(ClassName.FADE) ?
        ClassName.FADE : '';

      if (this._isShown && this._config.backdrop) {
        var doAnimate = Util.supportsTransitionEnd() && animate;

        this._backdrop = document.createElement('div');
        this._backdrop.className = ClassName.BACKDROP;

        if (animate) {
          $(this._backdrop).addClass(animate);
        }

        $(this._backdrop).appendTo(document.body);

        $(this._element).on(Event.CLICK_DISMISS, function (event) {
          if (this$1._ignoreBackdropClick) {
            this$1._ignoreBackdropClick = false;
            return
          }
          if (event.target !== event.currentTarget) {
            return
          }
          if (this$1._config.backdrop === 'static') {
            this$1._element.focus();
          } else {
            this$1.hide();
          }
        });

        if (doAnimate) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(ClassName.SHOW);

        if (!callback) {
          return
        }

        if (!doAnimate) {
          callback();
          return
        }

        $(this._backdrop)
          .one(Util.TRANSITION_END, callback)
          .emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);

      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(ClassName.SHOW);

        var callbackRemove = function () {
          this$1._removeBackdrop();
          if (callback) {
            callback();
          }
        };

        if (Util.supportsTransitionEnd() &&
           $(this._element).hasClass(ClassName.FADE)) {
          $(this._backdrop)
            .one(Util.TRANSITION_END, callbackRemove)
            .emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
        } else {
          callbackRemove();
        }

      } else if (callback) {
        callback();
      }
    };


    // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------

    Modal.prototype._handleUpdate = function _handleUpdate () {
      this._adjustDialog();
    };

    Modal.prototype._adjustDialog = function _adjustDialog () {
      var isModalOverflowing =
        this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = (this._scrollbarWidth) + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = (this._scrollbarWidth) + "px";
      }
    };

    Modal.prototype._resetAdjustments = function _resetAdjustments () {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    Modal.prototype._checkScrollbar = function _checkScrollbar () {
      this._isBodyOverflowing = document.body.clientWidth < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    Modal.prototype._setScrollbar = function _setScrollbar () {
      var bodyPadding = parseInt(
        $(Selector.FIXED_CONTENT).css('padding-right') || 0,
        10
      );

      this._originalBodyPadding = document.body.style.paddingRight || '';

      if (this._isBodyOverflowing) {
        document.body.style.paddingRight =
          (bodyPadding + this._scrollbarWidth) + "px";
      }
    };

    Modal.prototype._resetScrollbar = function _resetScrollbar () {
      document.body.style.paddingRight = this._originalBodyPadding;
    };

    Modal.prototype._getScrollbarWidth = function _getScrollbarWidth () { // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth
    };


    // static

    Modal._jQueryInterface = function _jQueryInterface (config, relatedTarget) {
      return this.each(function () {
        var data    = $(this).data(DATA_KEY);
        var _config = $.extend(
          {},
          Modal.Default,
          $(this).data(),
          typeof config === 'object' && config
        );

        if (!data) {
          data = new Modal(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error(("No method named \"" + config + "\""))
          }
          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      })
    };

    Object.defineProperties( Modal, staticAccessors );


    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      var this$1 = this;

      var target;
      var selector = Util.getSelectorFromElement(this);

      if (selector) {
        target = $(selector)[0];
      }

      var config = $(target).data(DATA_KEY) ?
        'toggle' : $.extend({}, $(target).data(), $(this).data());

      if (this.tagName === 'A' || this.tagName === 'AREA') {
        event.preventDefault();
      }

      var $target = $(target).one(Event.SHOW, function (showEvent) {
        if (showEvent.isDefaultPrevented()) {
          // only register focus restorer if modal will actually get shown
          return
        }

        $target.one(Event.HIDDEN, function () {
          if ($(this$1).is(':visible')) {
            this$1.focus();
          }
        });
      });

      Modal._jQueryInterface.call($(target), config, this);
    });


    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME]             = Modal._jQueryInterface;
    $.fn[NAME].Constructor = Modal;
    $.fn[NAME].noConflict  = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Modal._jQueryInterface
    };

    return Modal

  })(jQuery);

  /* global Tether */

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-alpha.6): tooltip.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Tooltip = (function ($) {

    /**
     * Check for Tether dependency
     * Tether - http://tether.io/
     */
    if (typeof Tether === 'undefined') {
      throw new Error('Bootstrap tooltips require Tether (http://tether.io/)')
    }


    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME                = 'tooltip';
    var VERSION             = '4.0.0-alpha.6';
    var DATA_KEY            = 'bs.tooltip';
    var EVENT_KEY           = "." + DATA_KEY;
    var JQUERY_NO_CONFLICT  = $.fn[NAME];
    var TRANSITION_DURATION = 150;
    var CLASS_PREFIX        = 'bs-tether';

    var Default = {
      animation   : true,
      template    : '<div class="tooltip" role="tooltip">'
                  + '<div class="tooltip-inner"></div></div>',
      trigger     : 'hover focus',
      title       : '',
      delay       : 0,
      html        : false,
      selector    : false,
      placement   : 'top',
      offset      : '0 0',
      constraints : [],
      container   : false
    };

    var DefaultType = {
      animation   : 'boolean',
      template    : 'string',
      title       : '(string|element|function)',
      trigger     : 'string',
      delay       : '(number|object)',
      html        : 'boolean',
      selector    : '(string|boolean)',
      placement   : '(string|function)',
      offset      : 'string',
      constraints : 'array',
      container   : '(string|element|boolean)'
    };

    var AttachmentMap = {
      TOP    : 'bottom center',
      RIGHT  : 'middle left',
      BOTTOM : 'top center',
      LEFT   : 'middle right'
    };

    var HoverState = {
      SHOW : 'show',
      OUT  : 'out'
    };

    var Event = {
      HIDE       : ("hide" + EVENT_KEY),
      HIDDEN     : ("hidden" + EVENT_KEY),
      SHOW       : ("show" + EVENT_KEY),
      SHOWN      : ("shown" + EVENT_KEY),
      INSERTED   : ("inserted" + EVENT_KEY),
      CLICK      : ("click" + EVENT_KEY),
      FOCUSIN    : ("focusin" + EVENT_KEY),
      FOCUSOUT   : ("focusout" + EVENT_KEY),
      MOUSEENTER : ("mouseenter" + EVENT_KEY),
      MOUSELEAVE : ("mouseleave" + EVENT_KEY)
    };

    var ClassName = {
      FADE : 'fade',
      SHOW : 'show'
    };

    var Selector = {
      TOOLTIP       : '.tooltip',
      TOOLTIP_INNER : '.tooltip-inner'
    };

    var TetherClass = {
      element : false,
      enabled : false
    };

    var Trigger = {
      HOVER  : 'hover',
      FOCUS  : 'focus',
      CLICK  : 'click',
      MANUAL : 'manual'
    };


    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Tooltip = function Tooltip(element, config) {

      // private
      this._isEnabled      = true;
      this._timeout        = 0;
      this._hoverState     = '';
      this._activeTrigger  = {};
      this._isTransitioning= false;
      this._tether         = null;

      // protected
      this.element = element;
      this.config= this._getConfig(config);
      this.tip   = null;

      this._setListeners();

    };

    var staticAccessors = { VERSION: { configurable: true },Default: { configurable: true },NAME: { configurable: true },DATA_KEY: { configurable: true },Event: { configurable: true },EVENT_KEY: { configurable: true },DefaultType: { configurable: true } };


    // getters

    staticAccessors.VERSION.get = function () {
      return VERSION
    };

    staticAccessors.Default.get = function () {
      return Default
    };

    staticAccessors.NAME.get = function () {
      return NAME
    };

    staticAccessors.DATA_KEY.get = function () {
      return DATA_KEY
    };

    staticAccessors.Event.get = function () {
      return Event
    };

    staticAccessors.EVENT_KEY.get = function () {
      return EVENT_KEY
    };

    staticAccessors.DefaultType.get = function () {
      return DefaultType
    };


    // public

    Tooltip.prototype.enable = function enable () {
      this._isEnabled = true;
    };

    Tooltip.prototype.disable = function disable () {
      this._isEnabled = false;
    };

    Tooltip.prototype.toggleEnabled = function toggleEnabled () {
      this._isEnabled = !this._isEnabled;
    };

    Tooltip.prototype.toggle = function toggle (event) {
      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(
            event.currentTarget,
            this._getDelegateConfig()
          );
          $(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }

      } else {

        if ($(this.getTipElement()).hasClass(ClassName.SHOW)) {
          this._leave(null, this);
          return
        }

        this._enter(null, this);
      }
    };

    Tooltip.prototype.dispose = function dispose () {
      clearTimeout(this._timeout);

      this.cleanupTether();

      $.removeData(this.element, this.constructor.DATA_KEY);

      $(this.element).off(this.constructor.EVENT_KEY);
      $(this.element).closest('.modal').off('hide.bs.modal');

      if (this.tip) {
        $(this.tip).remove();
      }

      this._isEnabled   = null;
      this._timeout     = null;
      this._hoverState  = null;
      this._activeTrigger = null;
      this._tether      = null;

      this.element = null;
      this.config= null;
      this.tip   = null;
    };

    Tooltip.prototype.show = function show () {
        var this$1 = this;

      if ($(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements')
      }

      var showEvent = $.Event(this.constructor.Event.SHOW);
      if (this.isWithContent() && this._isEnabled) {
        if (this._isTransitioning) {
          throw new Error('Tooltip is transitioning')
        }
        $(this.element).trigger(showEvent);

        var isInTheDom = $.contains(
          this.element.ownerDocument.documentElement,
          this.element
        );

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);

        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);

        this.setContent();

        if (this.config.animation) {
          $(tip).addClass(ClassName.FADE);
        }

        var placement= typeof this.config.placement === 'function' ?
          this.config.placement.call(this, tip, this.element) :
          this.config.placement;

        var attachment = this._getAttachment(placement);

        var container = this.config.container === false ? document.body : $(this.config.container);

        $(tip)
          .data(this.constructor.DATA_KEY, this)
          .appendTo(container);

        $(this.element).trigger(this.constructor.Event.INSERTED);

        this._tether = new Tether({
          attachment: attachment,
          element       : tip,
          target        : this.element,
          classes       : TetherClass,
          classPrefix   : CLASS_PREFIX,
          offset        : this.config.offset,
          constraints   : this.config.constraints,
          addTargetClasses: false
        });

        Util.reflow(tip);
        this._tether.position();

        $(tip).addClass(ClassName.SHOW);

        var complete = function () {
          var prevHoverState = this$1._hoverState;
          this$1._hoverState = null;
          this$1._isTransitioning = false;

          $(this$1.element).trigger(this$1.constructor.Event.SHOWN);

          if (prevHoverState === HoverState.OUT) {
            this$1._leave(null, this$1);
          }
        };

        if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
          this._isTransitioning = true;
          $(this.tip)
            .one(Util.TRANSITION_END, complete)
            .emulateTransitionEnd(Tooltip._TRANSITION_DURATION);
          return
        }

        complete();
      }
    };

    Tooltip.prototype.hide = function hide (callback) {
        var this$1 = this;

      var tip     = this.getTipElement();
      var hideEvent = $.Event(this.constructor.Event.HIDE);
      if (this._isTransitioning) {
        throw new Error('Tooltip is transitioning')
      }
      var complete= function () {
        if (this$1._hoverState !== HoverState.SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        this$1.element.removeAttribute('aria-describedby');
        $(this$1.element).trigger(this$1.constructor.Event.HIDDEN);
        this$1._isTransitioning = false;
        this$1.cleanupTether();

        if (callback) {
          callback();
        }
      };

      $(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return
      }

      $(tip).removeClass(ClassName.SHOW);

      this._activeTrigger[Trigger.CLICK] = false;
      this._activeTrigger[Trigger.FOCUS] = false;
      this._activeTrigger[Trigger.HOVER] = false;

      if (Util.supportsTransitionEnd() &&
          $(this.tip).hasClass(ClassName.FADE)) {
        this._isTransitioning = true;
        $(tip)
          .one(Util.TRANSITION_END, complete)
          .emulateTransitionEnd(TRANSITION_DURATION);

      } else {
        complete();
      }

      this._hoverState = '';
    };


    // protected

    Tooltip.prototype.isWithContent = function isWithContent () {
      return Boolean(this.getTitle())
    };

    Tooltip.prototype.getTipElement = function getTipElement () {
      return this.tip = this.tip || $(this.config.template)[0]
    };

    Tooltip.prototype.setContent = function setContent () {
      var $tip = $(this.getTipElement());

      this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle());

      $tip.removeClass(((ClassName.FADE) + " " + (ClassName.SHOW)));

      this.cleanupTether();
    };

    Tooltip.prototype.setElementContent = function setElementContent ($element, content) {
      var html = this.config.html;
      if (typeof content === 'object' && (content.nodeType || content.jquery)) {
        // content is a DOM node or a jQuery
        if (html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($(content).text());
        }
      } else {
        $element[html ? 'html' : 'text'](content);
      }
    };

    Tooltip.prototype.getTitle = function getTitle () {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ?
          this.config.title.call(this.element) :
          this.config.title;
      }

      return title
    };

    Tooltip.prototype.cleanupTether = function cleanupTether () {
      if (this._tether) {
        this._tether.destroy();
      }
    };


    // private

    Tooltip.prototype._getAttachment = function _getAttachment (placement) {
      return AttachmentMap[placement.toUpperCase()]
    };

    Tooltip.prototype._setListeners = function _setListeners () {
        var this$1 = this;

      var triggers = this.config.trigger.split(' ');

      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $(this$1.element).on(
            this$1.constructor.Event.CLICK,
            this$1.config.selector,
            function (event) { return this$1.toggle(event); }
          );

        } else if (trigger !== Trigger.MANUAL) {
          var eventIn= trigger === Trigger.HOVER ?
            this$1.constructor.Event.MOUSEENTER :
            this$1.constructor.Event.FOCUSIN;
          var eventOut = trigger === Trigger.HOVER ?
            this$1.constructor.Event.MOUSELEAVE :
            this$1.constructor.Event.FOCUSOUT;

          $(this$1.element)
            .on(
              eventIn,
              this$1.config.selector,
              function (event) { return this$1._enter(event); }
            )
            .on(
              eventOut,
              this$1.config.selector,
              function (event) { return this$1._leave(event); }
            );
        }

        $(this$1.element).closest('.modal').on(
          'hide.bs.modal',
          function () { return this$1.hide(); }
        );
      });

      if (this.config.selector) {
        this.config = $.extend({}, this.config, {
          trigger: 'manual',
          selector : ''
        });
      } else {
        this._fixTitle();
      }
    };

    Tooltip.prototype._fixTitle = function _fixTitle () {
      var titleType = typeof this.element.getAttribute('data-original-title');
      if (this.element.getAttribute('title') ||
         titleType !== 'string') {
        this.element.setAttribute(
          'data-original-title',
          this.element.getAttribute('title') || ''
        );
        this.element.setAttribute('title', '');
      }
    };

    Tooltip.prototype._enter = function _enter (event, context) {
      var dataKey = this.constructor.DATA_KEY;

      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(
          event.currentTarget,
          this._getDelegateConfig()
        );
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[
          event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER
        ] = true;
      }

      if ($(context.getTipElement()).hasClass(ClassName.SHOW) ||
         context._hoverState === HoverState.SHOW) {
        context._hoverState = HoverState.SHOW;
        return
      }

      clearTimeout(context._timeout);

      context._hoverState = HoverState.SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    Tooltip.prototype._leave = function _leave (event, context) {
      var dataKey = this.constructor.DATA_KEY;

      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(
          event.currentTarget,
          this._getDelegateConfig()
        );
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[
          event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER
        ] = false;
      }

      if (context._isWithActiveTrigger()) {
        return
      }

      clearTimeout(context._timeout);

      context._hoverState = HoverState.OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    Tooltip.prototype._isWithActiveTrigger = function _isWithActiveTrigger () {
        var this$1 = this;

      for (var trigger in this$1._activeTrigger) {
        if (this$1._activeTrigger[trigger]) {
          return true
        }
      }

      return false
    };

    Tooltip.prototype._getConfig = function _getConfig (config) {
      config = $.extend(
        {},
        this.constructor.Default,
        $(this.element).data(),
        config
      );

      if (config.delay && typeof config.delay === 'number') {
        config.delay = {
          show : config.delay,
          hide : config.delay
        };
      }

      Util.typeCheckConfig(
        NAME,
        config,
        this.constructor.DefaultType
      );

      return config
    };

    Tooltip.prototype._getDelegateConfig = function _getDelegateConfig () {
        var this$1 = this;

      var config = {};

      if (this.config) {
        for (var key in this$1.config) {
          if (this$1.constructor.Default[key] !== this$1.config[key]) {
            config[key] = this$1.config[key];
          }
        }
      }

      return config
    };


    // static

    Tooltip._jQueryInterface = function _jQueryInterface (config) {
      return this.each(function () {
        var data    = $(this).data(DATA_KEY);
        var _config = typeof config === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error(("No method named \"" + config + "\""))
          }
          data[config]();
        }
      })
    };

    Object.defineProperties( Tooltip, staticAccessors );


    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME]             = Tooltip._jQueryInterface;
    $.fn[NAME].Constructor = Tooltip;
    $.fn[NAME].noConflict  = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Tooltip._jQueryInterface
    };

    return Tooltip

  })(jQuery);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-alpha.6): dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Dropdown = (function ($) {


    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME                     = 'dropdown';
    var VERSION                  = '4.0.0-alpha.6';
    var DATA_KEY                 = 'bs.dropdown';
    var EVENT_KEY                = "." + DATA_KEY;
    var DATA_API_KEY             = '.data-api';
    var JQUERY_NO_CONFLICT       = $.fn[NAME];
    var ESCAPE_KEYCODE           = 27; // KeyboardEvent.which value for Escape (Esc) key
    var ARROW_UP_KEYCODE         = 38; // KeyboardEvent.which value for up arrow key
    var ARROW_DOWN_KEYCODE       = 40; // KeyboardEvent.which value for down arrow key
    var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

    var Event = {
      HIDE             : ("hide" + EVENT_KEY),
      HIDDEN           : ("hidden" + EVENT_KEY),
      SHOW             : ("show" + EVENT_KEY),
      SHOWN            : ("shown" + EVENT_KEY),
      CLICK            : ("click" + EVENT_KEY),
      CLICK_DATA_API   : ("click" + EVENT_KEY + DATA_API_KEY),
      FOCUSIN_DATA_API : ("focusin" + EVENT_KEY + DATA_API_KEY),
      KEYDOWN_DATA_API : ("keydown" + EVENT_KEY + DATA_API_KEY)
    };

    var ClassName = {
      BACKDROP : 'dropdown-backdrop',
      DISABLED : 'disabled',
      SHOW     : 'show'
    };

    var Selector = {
      BACKDROP      : '.dropdown-backdrop',
      DATA_TOGGLE   : '[data-toggle="dropdown"]',
      FORM_CHILD    : '.dropdown form',
      ROLE_MENU     : '[role="menu"]',
      ROLE_LISTBOX  : '[role="listbox"]',
      NAVBAR_NAV    : '.navbar-nav',
      VISIBLE_ITEMS : '[role="menu"] li:not(.disabled) a, '
                    + '[role="listbox"] li:not(.disabled) a'
    };


    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Dropdown = function Dropdown(element) {
      this._element = element;

      this._addEventListeners();
    };

    var staticAccessors = { VERSION: { configurable: true } };


    // getters

    staticAccessors.VERSION.get = function () {
      return VERSION
    };


    // public

    Dropdown.prototype.toggle = function toggle () {
      if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
        return false
      }

      var parent = Dropdown._getParentFromElement(this);
      var isActive = $(parent).hasClass(ClassName.SHOW);

      Dropdown._clearMenus();

      if (isActive) {
        return false
      }

      if ('ontouchstart' in document.documentElement &&
         !$(parent).closest(Selector.NAVBAR_NAV).length) {

        // if mobile we use a backdrop because click events don't delegate
        var dropdown   = document.createElement('div');
        dropdown.className = ClassName.BACKDROP;
        $(dropdown).insertBefore(this);
        $(dropdown).on('click', Dropdown._clearMenus);
      }

      var relatedTarget = {
        relatedTarget : this
      };
      var showEvent   = $.Event(Event.SHOW, relatedTarget);

      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return false
      }

      this.focus();
      this.setAttribute('aria-expanded', true);

      $(parent).toggleClass(ClassName.SHOW);
      $(parent).trigger($.Event(Event.SHOWN, relatedTarget));

      return false
    };

    Dropdown.prototype.dispose = function dispose () {
      $.removeData(this._element, DATA_KEY);
      $(this._element).off(EVENT_KEY);
      this._element = null;
    };


    // private

    Dropdown.prototype._addEventListeners = function _addEventListeners () {
      $(this._element).on(Event.CLICK, this.toggle);
    };


    // static

    Dropdown._jQueryInterface = function _jQueryInterface (config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);

        if (!data) {
          data = new Dropdown(this);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error(("No method named \"" + config + "\""))
          }
          data[config].call(this);
        }
      })
    };

    Dropdown._clearMenus = function _clearMenus (event) {
      if (event && event.which === RIGHT_MOUSE_BUTTON_WHICH) {
        return
      }

      var backdrop = $(Selector.BACKDROP)[0];
      if (backdrop) {
        backdrop.parentNode.removeChild(backdrop);
      }

      var toggles = $.makeArray($(Selector.DATA_TOGGLE));

      for (var i = 0; i < toggles.length; i++) {
        var parent      = Dropdown._getParentFromElement(toggles[i]);
        var relatedTarget = {
          relatedTarget : toggles[i]
        };

        if (!$(parent).hasClass(ClassName.SHOW)) {
          continue
        }

        if (event && (event.type === 'click' &&
            /input|textarea/i.test(event.target.tagName) || event.type === 'focusin')
            && $.contains(parent, event.target)) {
          continue
        }

        var hideEvent = $.Event(Event.HIDE, relatedTarget);
        $(parent).trigger(hideEvent);
        if (hideEvent.isDefaultPrevented()) {
          continue
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        $(parent)
          .removeClass(ClassName.SHOW)
          .trigger($.Event(Event.HIDDEN, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement (element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = $(selector)[0];
      }

      return parent || element.parentNode
    };

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler (event) {
      if (!/(38|40|27|32)/.test(event.which) ||
         /input|textarea/i.test(event.target.tagName)) {
        return
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
        return
      }

      var parent = Dropdown._getParentFromElement(this);
      var isActive = $(parent).hasClass(ClassName.SHOW);

      if (!isActive && event.which !== ESCAPE_KEYCODE ||
           isActive && event.which === ESCAPE_KEYCODE) {

        if (event.which === ESCAPE_KEYCODE) {
          var toggle = $(parent).find(Selector.DATA_TOGGLE)[0];
          $(toggle).trigger('focus');
        }

        $(this).trigger('click');
        return
      }

      var items = $(parent).find(Selector.VISIBLE_ITEMS).get();

      if (!items.length) {
        return
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) { // up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) { // down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    Object.defineProperties( Dropdown, staticAccessors );


    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(document)
      .on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE,  Dropdown._dataApiKeydownHandler)
      .on(Event.KEYDOWN_DATA_API, Selector.ROLE_MENU,    Dropdown._dataApiKeydownHandler)
      .on(Event.KEYDOWN_DATA_API, Selector.ROLE_LISTBOX, Dropdown._dataApiKeydownHandler)
      .on(((Event.CLICK_DATA_API) + " " + (Event.FOCUSIN_DATA_API)), Dropdown._clearMenus)
      .on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, Dropdown.prototype.toggle)
      .on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
        e.stopPropagation();
      });


    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME]             = Dropdown._jQueryInterface;
    $.fn[NAME].Constructor = Dropdown;
    $.fn[NAME].noConflict  = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Dropdown._jQueryInterface
    };

    return Dropdown

  })(jQuery);

  // allow this to be set from outside of this script, e.g. from the backend
  var api = window['hellospecial'] || {
    'opts': {
      'demo': false
    }
  };

  var api$1 = window['hellospecial'] = api;

  var ABtest = function ABtest () {
    // bootstrap
    this.$onInit();
    $$1(document).ready(this.$onReady.bind(this));
  };

  /**
   * Init
   */
  ABtest.prototype.$onInit = function $onInit () {
    // console.log('app.js initialized');
    this.tests = {
      'Standoutregistration': {},
    };
  };

  /**
   * On document ready
   */
  ABtest.prototype.$onReady = function $onReady () {
    // this.ABtest01();
  };

  /**
   * Run test
   * @param{String} id
   */
  ABtest.prototype.run = function run (id) {
    if (this.tests[id]) {
      this['test' + id]();
    } else {
      console.error(("ABtest with id " + id + " does not exists"));
    }
  };

  /**
   * Test 01: ABtest--standoutregistration
   */
  ABtest.prototype.testStandoutregistration = function testStandoutregistration () {
    var $homepageCard = $$1('#homepageRegisterCard');
    var $body = $$1('body');
    if (!$homepageCard.length) {
      return;
    }
    $body.addClass('ABtest--standoutregistration');
    // on click anywhere remove the class
    document.body.addEventListener('click', function () {
      $body.removeClass('ABtest--standoutregistration');
    }, true);
  };

  // export to public API
  api$1['ABtest'] = new ABtest();

  var CookieAnnouncement = function CookieAnnouncement () {
    // bootstrap
    this.$onInit();
    $$1(document).ready(this.$onReady.bind(this));
  };

  /**
   * Init
   */
  CookieAnnouncement.prototype.$onInit = function $onInit () {
    // console.log('app.js initialized');
  };

  /**
   * On document ready
   */
  CookieAnnouncement.prototype.$onReady = function $onReady () {
      var this$1 = this;

    var $container = $$1('#js-cookieannouncement');
    var $dismissTriggers = $$1('.js-cookieannouncement-dismiss');

    if (!$container.length) {
      return;
    }

    var cookieValue = this._readCookie('cookieannouncement');

    if (cookieValue !== 'shown') {
      setTimeout(function () {
        $container.addClass('in');
      }, 500);

      $dismissTriggers.on('click', function () {
        $container.removeClass('in');
        this$1._createCookie('cookieannouncement', 'shown', 365);
      });
    }
  };

  /**
   * Create cookie
   * @see https://stackoverflow.com/a/24103596/1938970
   *
   * @param{String} name
   * @param{Mixed}value
   * @param{Number} days
   */
  CookieAnnouncement.prototype._createCookie = function _createCookie (name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  };

  /**
   * Read cookie
   * @see https://stackoverflow.com/a/24103596/1938970
   *
   * @param{String} name
   * @return {?String}
   */
  CookieAnnouncement.prototype._readCookie = function _readCookie (name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') { c = c.substring(1,c.length); }
        if (c.indexOf(nameEQ) == 0) { return c.substring(nameEQ.length,c.length); }
    }
    return null;
  };

  CookieAnnouncement.prototype._eraseCookie = function _eraseCookie (name) {
    this._createCookie(name,"",-1);
  };

  new CookieAnnouncement();

  var Nask = function Nask () {
    this.$onInit();

    // bootstrap
    $$1(document).ready(this.$onReady.bind(this));
  };

  /**
   * Init
   */
  Nask.prototype.$onInit = function $onInit () {
    // try to immediately hide the container to don't cause a flash of "unstyled" content
    try {
      var containers = document.getElementsByClassName('nask');
      for (var i = 0; i < containers.length; i++) {
        containers[i].style.opacity = 0;
      }
    } catch(e) {}

    this._browser = this._getBrowser();
    this._mobileOS = this._getMobileOS();
    this._permission = this._getPermission();

    // console.log(`Nask->$onInit: mobile os is ${this._mobileOS} browser detected is ${this._browser}, permission is ${this._permission}`);
  };

  /**
   * On document ready
   */
  Nask.prototype.$onReady = function $onReady () {
    var $container = $$1('.nask');

    if (!$container.length) {
      return;
    }

    this.__$container = $container;

    var view = this._getViewName();
    this.setView(view);

    if (view === 'request' || view === 'request-mobile') {
      this.ask();
    }

    this.setEnv(this._getEnvName());

    this.__$container.addClass('nask--ready').css('opacity', 1);

    // @@disabled for now, because it wouldn't work anyway...
    // @see https://stackoverflow.com/a/31868708/1938970
    // $container.find('.nask__askbutton').click(() => {
    // this.ask()
    // });
  };

  /**
   * Get browser
   *
   * based on @link https://stackoverflow.com/a/9851769/1938970
   *
   * @return {String}
   */
  Nask.prototype._getBrowser = function _getBrowser () {
    // Opera 8.0+
    if ((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
      return 'opera';
    }

    // Firefox 1.0+
    if (typeof InstallTrigger !== 'undefined') {
      return 'firefox';
    }

    // Safari 3.0+ "[object HTMLElementConstructor]"
    if (/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification))) {
      return 'safari';
    }

    // Internet Explorer 6-11
    if (/*@cc_on!@*/false || !!document.documentMode) {
      return 'ie';
    }

    // Edge 20+
    if (!!window.StyleMedia) {
      return 'edge';
    }

    // Chrome 1+
    if (!!window.chrome && !!window.chrome.webstore) {
      return 'chrome';
    }
  };

  /**
   * Determine the mobile operating system.
   * This function returns one of 'ios', 'Android', 'Windows Phone', or false.
   *
   * @link https://stackoverflow.com/a/21742107/1938970
   *
   * @returns {String|boolean} 'windows|android|ios|false'
   */
  Nask.prototype._getMobileOS = function _getMobileOS () {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
      return 'windows';
    }

    if (/android/i.test(userAgent)) {
      return 'android';
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return 'ios';
    }

    return false;
  };

  /**
   * Get notifications permissions
   *
   * @return {String} 'denied|granted|default|unsupported'
   */
  Nask.prototype._getPermission = function _getPermission () {
    if (Notification && Notification.permission) {
      return Notification.permission;
    }
    return 'unsupported';
  };

  /**
   * Get view name
   *
   * Views:
   * 'granted': Notification are granted already, we don't ask anything
   * 'request': On Android notifications are denied by the user, we ask to enable them
   * 'request-mobile': On Android notifications are denied by the user, we ask to enable them
   * 'allowing': On desktop notifications are denied by the user, the allow box is opened
   * 'allowing-mobile': On Android notifications are denied by the user, the allow box is opened
   * 'thanks': On desktop notification permission has just been granted by the user
   * 'thanks-mobile': On Android notification permission has just been granted by the user
   * 'other': Desktop browser other than Chrome. Firefox, Opera, no notifications system
   * 'other-mobile': Mobile browser other than Android, no notifications system
   *
   * @param{?String} viewFamily
   * @return {String}
   */
   Nask.prototype._getViewName = function _getViewName (viewFamily) {
    if (viewFamily === 'allowing') {
      return this._mobileOS ? 'allowing-mobile' : 'allowing';
    }
    else if (viewFamily === 'thanks') {
      return this._mobileOS ? 'thanks-mobile' : 'thanks';
    }

    // if (['chrome', 'firefox', 'opera'].indexOf(this._browser) === -1) {
    // }

    if (this._permission === 'unsupported') {
      return this._mobileOS ? 'other-mobile' : 'other';
    }
    else if (this._permission === 'default') {
      return this._mobileOS ? 'allowing-mobile' : 'allow';
    }
    else if (this._permission === 'denied') {
      return this._mobileOS ? 'request-mobile' : 'request';
    }
    else if (this._permission === 'granted') {
      return 'granted';
    }

    return 'none';
  };

  /**
   * Get env name
   *
   * @return {String}
   */
  Nask.prototype._getEnvName = function _getEnvName () {
    return this._mobileOS === 'android' ? 'android' : this._browser;
  };

  /**
   * Set view on the UI
   *
   * @public
   * @param {String} view
   */
  Nask.prototype.setView = function setView (view) {
    this.__$container.attr('data-nask-view-is', view);
    console.log(("Nask: set view name to \"" + view + "\""));
    return this;
  };

  /**
   * Set environment on the UI
   *
   * @public
   * @param {String} env
   */
  Nask.prototype.setEnv = function setEnv (env) {
    this.__$container.attr('data-nask-env-is', env);
    console.log(("Nask: set env to \"" + env + "\""));
    return this;
  };

  /**
   * Ask for permission
   *
   * @param {?Function} callback
   * @public
   *
   * @return {this}
   */
  Nask.prototype.ask = function ask (callback) {
      var this$1 = this;

    if (this._permission === 'unsupported') {
      console.log("Nask: Notification are not supported");
      return;
    }
    console.log("Nask: asking for permission");

    this.setView(this._getViewName('allowing'));

    Notification.requestPermission(function (permission) {
      if (callback) {
        callback(permission);
      }

      if (permission === 'granted') {
        // const notification = new Notification('Thanks');
        this$1.setView(this$1._getViewName('thanks'));
      }
      else if (permission === 'denied') {
        this$1.setView(this$1._getViewName('request'));
      }
    });

    return this;
  };

  // export to public API
  api$1['nask'] = new Nask();

  var Faq = function Faq () {

    // bootstrap
    this.$onInit();
    $(document).ready(this.$onReady.bind(this));
  };

  /**
   * Init
   */
  Faq.prototype.$onInit = function $onInit () {
  };

  /**
   * On document ready
   */
  Faq.prototype.$onReady = function $onReady () {
    if (!$('#hsFaq').length) {
      return;
    }

    var $expandables = $('.expandable__body');
    var $noResults = $('.hsFaq__noresults');
    var highlightOpts = { className: 'hsFaq__mark' };

    $expandables.collapse({
      toggle: false
    });

    $('#hsFaq_filterList').liveFilter('#hsFaq_filterInput', '.expandable', {
      after: function (contains, containsNot) {
        var query = this.value;

        if (!contains.length) {
          $expandables.parent().parent().prev().hide();
          $noResults.show();
        } else {
          $noResults.hide();
          $expandables.parent().parent().prev().show();
        }

        if (!query) {
          // contains.collapse('hide').unhighlight(highlightOpts);
          // containsNot.collapse('hide').unhighlight(highlightOpts);
          $expandables.collapse('hide').unhighlight(highlightOpts);
        } else {
          try {
            contains.find('.expandable__body').collapse('show')
              .unhighlight(highlightOpts)
              .highlight(query, highlightOpts);

            containsNot.find('.expandable__body').collapse('hide')
              .unhighlight(highlightOpts);
          } catch (e) {}
        }
      }
    });

    $('.hsFaq__search').on('submit', this._onSearchSubmit);
    $('#hsFaq_filterSubmit').on('click', this._onSearchSubmit);
  };

  /**
   * On search submit
   *
   * @param{Object} e Event
   */
  Faq.prototype._onSearchSubmit = function _onSearchSubmit (e) {
    e.preventDefault();
    if ($(window).width() < 600) {
      // $('html, body').animate({
      // scrollTop: $('.hsFaq__mark').first().offset().top - 70
      // }, 300);
      $('html, body').scrollTop($('.hsFaq__mark').first().offset().top - 70);
    }
  };

  new Faq();

  /**
   * Get lang code from url
   *
   * @return {String}
   */
  function getLangFromUrl () {
    var urlParts = location.href.split('/');
    var langMap = window.i18n;

    for (var i = 0; i < urlParts.length; i++) {
      var urlPart = urlParts[i];
      if (langMap[urlPart] && urlPart !== 'current') {
        return urlPart;
      }
    }
    return 'en'; // default language
  }

  /**
   * Get i18n string by its id
   *
   * @param  {String}  id
   * @param  {?String} givenLang
   * @param  {?String} fallback
   * @return {String}
   */
  function getI18n (id, givenLang, fallback) {
    var i18n = window.i18n;
    var lang = givenLang || i18n['current'] || getLangFromUrl();
    var langStrings = i18n[lang];
    return langStrings[id] || fallback || '';
  }

  api$1['getI18n'] = getI18n;

  /**
   * Anatomy of a state object
   *
   * (values preceded by a question mark are optional)
  ```
  {
    id: {string},            // All lowercase, no whitespaces. This is used in the css as well. e.g. ''eenmaal'',
    idx: {Number},           // The index of the state in the states succession. e.g. `1`
    text: {string},          // The displayed text for the state. E.g. `'Eenmaal...'`,
    duration: {?Number},     // Dynamically set by the Item class, it can have a default value though
    isLast: {?boolean},      // Set it to true if you want to indicate that this state is the last. Otherwise
                             // the last is always considered `'verkocht'`
    expirations: {Array<
        Object<
          percent: {Number}, // Number that indicates at which point in time
                             // (expressed in percentage) this expiration breakpoint is triggered
          name: {string}     // All lowercase, no whitespaces. This is used in the css as well. e.g. `'blink'`,
          >
      >}
    [{
      percent: 70,
      name: 'blink'
    }]
  }
  ```
  */

  /**
   * The `text` is displayed in the status bar.
   *
   * The `duration` is set dynamically, it's here just for reference.
   *
   * The `expirations` values available are for now:
   * 'blink, close, hurry, final'; to each of them correspond
   * some variations and animation applied through css. Each expiration must
   * declare a `percent` property that indicates the percentage at which point
   * in time trigger the expiration animation (or whatever),
   * e.g. a `percent` value of `50` would trigger at the 14th second for a
   * state that lasts 28s
   */
  var defaultStates = [
    {
      id: 'eenmaal',
      idx: 0,
      text: getI18n('eenmaal'),
      duration: null,
      expirations: [{
        percent: 70,
        name: 'blink'
      }]
    }, {
      id: 'andermaal',
      idx: 1,
      text: getI18n('andermaal'),
      duration: null,
      expirations: [{
        percent: 50,
        name: 'hurry'
      }, {
        percent: 70,
        name: 'blink'
      }, {
        percent: 90,
        name: 'final'
      }]
    }, {
      id: 'geboden',
      idx: 2,
      text: getI18n('geboden'),
      duration: null,
      expirations: [{
        percent: 50,
        name: 'hurry'
      }, {
        percent: 70,
        name: 'blink'
      }, {
        percent: 90,
        name: 'final'
      }]
    }, {
      id: 'geboden-timeless',
      idx: 3,
      text: getI18n('geboden-timeless'),
      duration: null
    }, {
      id: 'verkocht',
      idx: 4,
      text: getI18n('verkocht'),
      duration: null
    }, {
      id: 'bieden',
      idx: 5,
      text: getI18n('bieden'),
      duration: null,
      expirations: [{
        percent: 70,
        name: 'blink'
      }]
    }, {
      id: 'winnen',
      idx: 6,
      text: getI18n('winnen'),
      duration: null,
      expirations: [{
        percent: 50,
        name: 'hurry'
      }, {
        percent: 70,
        name: 'blink'
      }]
    }, {
      id: 'geladen',
      idx: 7,
      text: getI18n('geladen'),
      duration: null,
      expirations: [{
        percent: 70,
        name: 'blink'
      }]
    }, {
      id: 'gesloten',
      idx: 8,
      text: getI18n('gesloten'),
      duration: null,
      expirations: [{
        percent: 70,
        name: 'blink'
      }]
    }, {
      id: 'controleren',
      idx: 9,
      text: getI18n('controleren'),
      duration: null
    }, {
      id: 'uitverkocht',
      idx: 10,
      text: getI18n('uitverkocht'),
      duration: null
    } ];

  // export to public API
  api$1['defaultStates'] = defaultStates;

  var defaultColors = {
    'eenmaal': ['#6DBF52', '#BCD53A'],
    'andermaal': ['#EC282E', '#F58639'],
    'geboden': ['#8756A3', '#BC91C0'],
    'geboden-timeless': ['#6b4482', '#a871ad'],
    'verkocht': ['#B2B2B2', '#E6E7E6'],
    'bieden': ['#0B72BA', '#4A9DD6'],
    'winnen': ['#ad005d', 'deeppink'],
    'geladen': ['#a38d8d', '#e2bab7'],
    'gesloten': ['#9d8f8f', '#d7bfbd'],
    'controleren': ['#979090', '#cec4c1']
  };

  // export to public API
  api$1['defaultColors'] = defaultColors;

  /*!
   * Heavily inspired by
   *
   * SVG Pie Timer 0.9.1 | Anders Grimsrud, grint.no | MIT License | github.com/agrimsrud/svgPieTimer.js
   */
  var SvgPieTimer = function SvgPieTimer (props) {
    var self = this;
    this._element = props.element;
    this._size = 40;
    this._startFrom = props.startFrom ? props.startFrom * 1000: 0; // startFrom is given in seconds
    this._duration = props.duration ? props.duration * 1000 : 1000; // duration is given in seconds
    this._actualDuration = this._duration - this._startFrom;
    var n = props.loops;

    if (this.req) {
      this.stop();
    }

    // This part might be confusing:
    // If n==0, do infinite loops
    // In other cases where n is set, do n loops
    // If n is not set, do 1 loop
    // Do it this way to prevent mixing n==0 and !n
    n = (n === 0) ? 0 : n ? n : 1;

    var end = Date.now() + this._actualDuration * n;
    var totaldur = this._actualDuration * n;

    // Date.now fix by Ari Fuchs, afuchs.tumblr.com/post/23550124774/date-now-in-ie8
    Date.now = Date.now || function() { return +new Date(); };

    // Animate frame by frame
    (function frame() {
      var current = Date.now();
      var remaining = end - current;

      // Now set rotation rate
      // E.g. 50% of first loop returns 1.5
      // E.g. 75% of sixth loop returns 6.75
      // Has to return >0 for SVG to be drawn correctly
      // If you need the current loop, use Math.floor(rate)
      var rate = n + 1 - remaining / self._duration;
      // total rate for a full cycle is 0 to 2
      rate = rate;// + ((self._startFrom * 2) / self._duration);

      // As requestAnimationFrame will draw whenever capable,
      // the animation might end before it reaches 100%.
      // Let's simulate completeness on the last visual
      // frame of the loop, regardless of actual progress
      // console.log(current)
      if (remaining < 60) {
        // 1.0 might break, set to slightly lower than 1
        // Update: Set to slightly lower than n instead
        self._draw(n - 0.0001);
        // Stop animating when we reach n loops (if n is set)
        if(remaining < totaldur && n) {
          return;
        }
      }
      // To reverse, uncomment this line
      // rate = 360 - rate;

      // draw
      self._draw(rate);
      // request next frame
      self.req = requestAnimationFrame(frame);
    }());
  };

  /**
   * Draw SVG path
   *
   * x on the right side is positive, y on the bottom side is positive,
   * on the other sides they are negative
   * @param{Number} rate
   */
  SvgPieTimer.prototype._draw = function _draw (rate) {
    var angle = 360 * rate;
    angle %= 360;
    // if (angle >= 359.9) {
    // console.log(angle)
    // }

    var rad = (angle * Math.PI / 180);
    var mid = (angle > 180) ? 1 : 0;
    var x = Math.sin(rad) * this._size;
    var y = Math.cos(rad) * -this._size;
    var shape = "M 0 0 v -" + (this._size) + " A " + (this._size) + " " + (this._size) + " 1 " + mid + " 1 " + x + " " + y + " z";

    this._element.setAttribute('d', shape);
  };

  /**
   * Stop the animation cancel the request animation frame
   */
  SvgPieTimer.prototype.stop = function stop () {
    window.cancelAnimationFrame(this._req);
  };

  /**
   * Destroy the animation
   * @return {[type]} [description]
   */
  SvgPieTimer.prototype.destroy = function destroy () {
    this.stop();
  };

  // Example use of the API
  // (function (window, document, $, api) {
  //   var myDOMorJquery = $('.hsItem')[0];

  //   var myItem = new api.Item({
  //     id: 10,
  //     elem: myDOMorJquery,
  //     // state: 3,
  //     onState: function (item) {
  //       console.log('onState ' + item.state.id, item);
  //     },
  //     onEnd: function (item) {
  //       console.log('Auction ends! onEnd', item);
  //     },
  //     onBid: function (item) {
  //       console.log('Bid! on item', item);
  //     }
  //   });
  //   myItem.setState(0, 15);
  //   // myItem.destroy();
  // })(window, document, jQuery, window.hellospecial);

  // (function(window, document, $, api) {
  //   // calling the contructor or the setState method return the item instance
  //   var myItem = new hellospecial.Item({
  //     id: 12,
  //     elem: $('.hsItem')[0] // the item element in the category page
  //   }).setState('geboden', 11);
  //   // grab the state in a variable to use closure
  //   var myState = myItem.state;

  //   // fake async loading of ajax content
  //   setTimeout(function () {
  //     var myItemPopup = new hellospecial.Item({
  //       id: 12,
  //       elem: $('.hsItem')[1] // the item element in the popup
  //     });
  //     myItemPopup.resumeState(myState);
  //   }, 3000);

  //   // fake async something elese
  //   setTimeout(function () {
  //     var myAsyncItem = new hellospecial.Item({
  //       id: 12,
  //       elem: $('.hsItem')[2] // another item element
  //     });
  //     myAsyncItem.resumeState(myState);
  //   }, 5000);
  // })(window, document, jQuery, window['hellospecial']);

  /**
   * The Item class default options
   * @type {Object}
   */
  var defaultOpts = {
    /** @type {Array} Default states */
    states: defaultStates,
    /** @type {string} attribute name */
    attrState: 'data-state',
    /** @type {string} attribute name */
    attrExpiration: 'data-expiration',
    /** @type {function(Item)} Callback at the end of each state */
    onState: function () {},
    /** @type {function(Item, Number)} Callback each second of a state progression */
    // onSecond: function () {},
    /** @type {function(Item)} Callback at the end of the last state */
    onEnd: function () {},
    /** @type {function(Item)} Callback at bid click */
    onBid: function () {},
  };

  /**
   * The Item class needs to be initialized on document ready with an id and a
   * container element
   */
  var Item = function Item (opts) {
    if (typeof opts.id === undefined) {
      throw new Error('`elem` property is required when instantiate a new Item');
      return;
    }
    if (typeof opts.id === undefined) {
      throw new Error('`id` property is required when instantiate a new Item');
      return;
    }

    /** @type {Object} Item given opts */
    this.opts = $.extend({}, defaultOpts, opts);

    /** @type {HTMLelement} Basic DOM container for the item */
    this.container = opts.elem.jquery ? opts.elem[0] : opts.elem;

    /** @type {jQuery} Basic DOM container for the item (jQuery wrap) */
    this.$container = opts.elem.jquery ? opts.elem : $(opts.elem);

    /** @type {string} Item id */
    this.id = opts.id || this.container.id;

    /** @type {Array} Contains the possible states for the item, as an array */
    this.states = this.opts.states;

    /** @type {Object} Contains the possible states for the item, as an object (indexed by id) */
    this.statesMap = this._getObjFromArray(this.opts.states, 'id');

    /** @type {function()} Holds the intervalled reference for one cycle */
    this._cycle = null;

    /** @type {Number} ID of one of the four states */
    this._initialStateId = opts.state || this.container.getAttribute(this.opts.attrState);

    /** @type {Array<SvgPieTimer>} One animation per svg element */
    this._animations = [];

    // set DOM related stuff
    this._bindUI();

    // if (this._initialStateId) {
    // this.setState(this._initialStateId);
    // }

    // console.log('Item->constructor()', this);

    return this;
  };

  /**
   * Init
   */
  Item.prototype._bindUI = function _bindUI () {

    /** @type {jQuery} The 'Bied' buttons */
    this.__$bid = this.$container.find('[data-bid]');

    /** @type {jQuery} */
    this.__$price = this.$container.find('[data-price]');

    /** @type {jQuery} */
    this.__$bidder = this.$container.find('[data-bidder]');

    /** @type {Array<HTMLelement>} */
    this.__stateSvgs = this.container.querySelectorAll('[data-state-svg]');

    /** @type {Array<HTMLelement>} */
    this.__stateMsgs = this.container.querySelectorAll('[data-state-msg]');

    /** @type {Array<HTMLelement>} */
    this.__stops1 = this.container.querySelectorAll('.stop1');

    /** @type {Array<HTMLelement>} */
    this.__stops2 = this.container.querySelectorAll('.stop2');

    // bind click button
    this.__$bid.on('click', this.onBid.bind(this));
  };

  /**
   * Add new state
   * @param {State} stateObject
   */
  Item.prototype.addState = function addState (stateObject) {
    var stateId = stateObject.id;
    this.statesMap[stateId] = stateObject;

    // here we could or should or push the new state
    // at the specified index in the array but I don't really
    // see the point of this at this stage. We use state ids
    // now anyway to change the item style through css
    this.states.push(stateObject);

    return stateObject;
  };

  /**
   * Set state updating UI and running the animation
   *
   * It just updates the state animation/color and text msg,
   * e.g. 'bidding, going once, going twice, sold', it also adds an attr
   * on the item container so that we can tweak the style of item
   * differently for each state.
   *
   * @param {?Number|String|State} givenState The state index `0,1,2,3`,
   *                                        or id (e.g. 'verkocht') or
   *                                        new custom object (see the
   *                                        state.defaults.js to see the
   *                                        anatomy of a state object)
   * @param {?Number}             durationThe duration in seconds
   * @param {?Number}             startFrom The resuming point in seconds
   * @return {Item}                         The item instance
   */
  Item.prototype.setState = function setState (givenState, duration, startFrom) {
      var this$1 = this;

    // set current state
    if ($.isPlainObject(givenState)) {
      // if we are resuming just assign the given state
      if ((givenState.second && givenState.second > 0) || startFrom) {
        this.state = givenState;
      } else {
        // either by using the given object
        this.state = this.addState(givenState);
      }
    }
    else if (this.states[givenState]) {
      // or by grabbing the state with its idx value
      this.state = this.states[givenState];
    }
    else if (this.statesMap[givenState]) {
      // or by grabbing the state with its idx value
      this.state = this.statesMap[givenState];
    }
    else {
      // or by grabbing the state with the initial state id value
      this.state = this.statesMap[this._initialStateId];
    }
    if (!this.state) {
      return;
    }
    // set current state second
    this.state.second = startFrom || 0;

    // set current state duration
    if (duration) {
      this.state.duration = duration;
    }
    // set cycle duration
    this._cycleDuration = this.state.duration - this.state.second;

    // display state message
    if (this.__stateMsgs && this.__stateMsgs.length) {
      for (var i = 0; i < this.__stateMsgs.length; i++) {
        this$1.__stateMsgs[i].textContent = this$1.state.text;
      }
    }

    // display state style through css
    this.container.setAttribute(this.opts.attrState, this.state.id);

    var palette = defaultColors[this.state.id];
    if (palette) {
      if (this.__stops1 && this.__stops1.length) {
        for (var j = 0; j < this.__stops1.length; j++) {
          this$1.__stops1[j].setAttribute('stop-color', palette[0]);
        }
      }
      if (this.__stops2 && this.__stops2.length) {
        for (var k = 0; k < this.__stops2.length; k++) {
          this$1.__stops2[k].setAttribute('stop-color', palette[1]);
        }
      }
    }

    // ... and fires the animation
    this._runAnimation();
    // start the timer...
    this._startCycle();

    // callback
    this.opts.onState(this);
    // callback on last state ('verkocht')
    if (this.state.id === 'verkocht' || this.state.isLast) {
      this.opts.onEnd(this);
    }

    return this;
  };

  /**
   * Resume state
   * @param{State} state The state object
   * @return {Item}      The item instance
   */
  Item.prototype.resumeState = function resumeState (state) {
    // create a new state object to don't interfere with other items
    // states
    var newState = $.extend({}, state);
    this.setState(newState, null, state.second);
    return this;
  };

  /**
   * Set data
   *
   * @param{Object} data Data from server that need to update the UI
   */
  Item.prototype.setData = function setData (data) {
    if (data['current_price']) {
      this.__$price.text(data['current_price']);
    }
    if (data['highest_bidder']) {
      this.__$bidder.text(data['highest_bidder']);
    }
  };

  /**
   * User has clicked bid
   */
  Item.prototype.onBid = function onBid () {
    this.opts.onBid(this.item);
    // console.log('bid! newSeconds:', newSeconds);
  };

  /**
   * Destroy item instance
   */
  Item.prototype.destroy = function destroy () {
      var this$1 = this;

    if (this._animations && this._animations.length) {
      for (var i = 0; i < this._animations.length; i++) {
        this$1._animations[i].destroy();
      }
    }
    this._clearCycle();
  };

  /**
   * Start single cycle timer
   */
  Item.prototype._clearCycle = function _clearCycle () {
    if (this._cycle) {
      window.clearInterval(this._cycle);
      this._cycle = null;
    }
  };

  /**
   * Start single cycle timer
   */
  Item.prototype._startCycle = function _startCycle () {
    this._clearCycle();
    this._cycle = window.setInterval(this._onCycleTick.bind(this), 1000);
  };

  /**
   * On second tick, it runs every second using `setInterval`, it
   * coordinates the animation states.
   */
  Item.prototype._onCycleTick = function _onCycleTick () {
    // maybe trigger expiration behaviour
    this._maybeTriggerExpiration();

    // increment second
    this.state.second++;

    // api callback
    // this.opts.onSecond(this.state.second, this.state, this);

    if (this.state.second >= this.state.duration) {
      this._clearCycle();
    }
  };

  /**
   * Set expiration attribute to trigger further animations through css
   *
   * @param {string} The expiration name to set on the attribute
   */
  Item.prototype._updateUiExpiration = function _updateUiExpiration (name) {
    this.container.setAttribute(this.opts.attrExpiration, name);
  };

  /**
   * Loop through the expiration breakpoints of the given state
   * and check if the current second has past the expiration breakpoint
   * (which is defined in percentage because the state duration is dynamic,
   * so we need to calculate the breakpoint in seconds).
   */
  Item.prototype._maybeTriggerExpiration = function _maybeTriggerExpiration () {
      var this$1 = this;

    var expirations = this.state.expirations;
    if (!expirations) {
      return;
    }

    // expirations array must be set in order from lower to higher percentage
    for (var i = expirations.length; i--;) {
      var expiration = expirations[i];
      var secondBreakpoint = (this$1.state.duration / 100) * expiration.percent;

      if (this$1.state.second > secondBreakpoint) {
        this$1._updateUiExpiration(expiration.name);
        return;
      }
    }
    // otherwise reset the expiration attribute
    this._updateUiExpiration('');
  };

  /**
   * It makes one full loop with the given duration or by reading the current
   * state duration
   */
  Item.prototype._runAnimation = function _runAnimation () {
      var this$1 = this;

    if (this._animations && this._animations.length) {
      for (var i = 0; i < this._animations.length; i++) {
        this$1._animations[i].destroy();
      }
    }

    // init animations
    this._animations = [];
    if (this.__stateSvgs && this.__stateSvgs.length) {
      for (var j = 0; j < this.__stateSvgs.length; j++) {
        // console.log('run for ', this.__stateSvgs[i])
        this$1._animations.push(new SvgPieTimer({
          element: this$1.__stateSvgs[j],
          duration: this$1.state.duration, // seconds
          startFrom: this$1.state.second // seconds
        }));
      }
    }
  };

  /**
   * Get object from array
   *
   * @param{Array} array
   * @param{string} value
   * @return {Object}     The lookup object
   */
  Item.prototype._getObjFromArray = function _getObjFromArray (array, value) {
    var lookupObject = {};
    for (var i = 0, l = array.length; i < l; i++) {
      lookupObject[array[i][value]] = array[i];
    }
    return lookupObject;
  };

  // export to public API
  api$1['Item'] = Item;

  // import 'slick-carousel/slick/slick.js';
  // import 'sticky-kit/dist/sticky-kit';
  // import 'sticky-js/dist/sticky.min';

  var ItemDetail = function ItemDetail () {
    this.$onInit();
    $$1(document).ready(this.$onReady.bind(this));
  };

  /**
   * Init
   */
  ItemDetail.prototype.$onInit = function $onInit () {
  };

  /**
   * On document ready
   */
  ItemDetail.prototype.$onReady = function $onReady () {
    this.__$thumbs = $$1('#appItemDetail__thumbs');
    this.__$slider = $$1('#appItemDetail__slider');
    this.__$sticky = $$1('#appItemDetail__main-sticky');

    if (this.__$slider.length && this.__$thumbs.length) {
      this._initSliderThumbs();
      this._initSlider();
      $$1(window).on('resize', this._onResizeSliders.bind(this));
    }

    if (this.__$sticky.length) {
      // this.__$sticky.stick_in_parent();
      this._initSticky();
      $$1(window).on('resize', this._onResizeSticky.bind(this));
    }
  };

  /**
   * On resize slides behaviours
   */
  ItemDetail.prototype._onResizeSliders = function _onResizeSliders () {
    // no slider if there is only one image
    if (this.__$slider.find('img').length === 1) {
      this.__$slider.slick('unslick');
      this.__$thumbs.slick('unslick');
    } else {

    }
  };

  /**
   * On resize sticky behavious
   */
  ItemDetail.prototype._onResizeSticky = function _onResizeSticky () {
    var screenLgVersion = $$1(window).width() >= 992; // @@ref $grid-breakpoints: lg,

    if (this._stickyInitialised && screenLgVersion) {
      this.__$sticky.unstick();
      this._stickyInitialised = false;
    } else {
      this._initSticky();
    }
  };

  /**
   * Init sticky
   */
  ItemDetail.prototype._initSticky = function _initSticky () {
    if (this._stickyInitialised) {
      return;
    }
    this.__$sticky.sticky({
      responsiveWidth: true,
      className: 'is-sticky'
    });
    // this._sticky = new Sticky('#appItemDetail__main-sticky');
    this._stickyInitialised = true;
  };

  /**
   * Init slider thumbnails
   */
  ItemDetail.prototype._initSliderThumbs = function _initSliderThumbs () {
    if (!this.__$thumbs.length || this._sliderThumbsInitialised) {
      return;
    }

    this.__$thumbs.slick({
      vertical: true,
      // verticalSwiping: true,
      // centerMode: screenLgVersion,
      slidesToShow: 8,
      slidesToScroll: 1,
      asNavFor: this.__$slider,
      focusOnSelect: true,
      arrows: false,
      // infinite: false,
      responsive: [{
        breakpoint: 992, // @@ref $grid-breakpoints: lg
        settings: {
          vertical: false,
          slidesToShow: 5,
        }
      }]
    });

    this._sliderThumbsInitialised = true;

    // remove active class from all thumbnail slides
    this.__$thumbs.find('.slick-slide').removeClass('slick-active');

    // set active class to first thumbnail slides
    this.__$thumbs.find('.slick-slide').eq(0).addClass('slick-active');
  };

  /**
   * Init slider
   */
  ItemDetail.prototype._initSlider = function _initSlider () {
      var this$1 = this;

    if (!this.__$slider.length || !this.__$thumbs.length || this._sliderInitialised) {
      return;
    }

    this.__$slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      asNavFor: this.__$thumbs
    });

    this._sliderInitialised = true;

    // on before slide change match active thumbnail to current slide
    this.__$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      this$1.__$thumbs.find('.slick-slide').removeClass('slick-active');
      this$1.__$thumbs.find('.slick-slide').eq(nextSlide).addClass('slick-active');
    });
  };

  /**
   * Reinit UI
   */
  ItemDetail.prototype.reinitUI = function reinitUI () {
    this._initSlider();
    this._initSliderThumbs();
    this._initSticky();
  };

  var itemDetail = new ItemDetail();

  var p = navigator.platform;

  var browsers = {
    'safari': Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0,
    // 'chrome': !!window.chrome && !opera,
    'ie': /*@cc_on!@*/false || !!document.documentMode,
    // 'mac': p.toUpperCase().indexOf('MAC') >= 0,
    // 'macLike': p.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false,
    'ios': p.match(/(iPhone|iPod|iPad)/i) ? true : false,
    // 'windows': p.toUpperCase().indexOf('WIN')!==-1,
    // 'linux': p.toUpperCase().indexOf('LINUX')!==-1,
    // 'android': /Android/i.test(a),
    // 'blackBerry': /BlackBerry/i.test(a),
    // 'ios': /iPhone|iPad|iPod/i.test(a),
  };

  $$1(document).ready(function () {
    var $html = $$1('html');
    for (name in browsers) {
      var isIt = !!browsers[name];
      // browsers[browser];
      $html.toggleClass(name, isIt);
    }
  });

  var Checkout = function Checkout () {
    // bootstrap
    this.$onInit();
    $$1(document).ready(this.$onReady.bind(this));
  };

  /**
   * Init
   */
  Checkout.prototype.$onInit = function $onInit () {
    this._breakpointMobile = 600;
  };

  /**
   * On document ready
   */
  Checkout.prototype.$onReady = function $onReady () {
    // console.log('app.js document is ready');
    this.__$wrapper = $$1('#hsCheckout');

    // bail if we are not on the checkout page
    if (!this.__$wrapper.length) {
      return;
    }

    this.__$form = $$1('#hsCheckout__form');
    this.__$wrapperLeft = $$1('.hsCheckout__main-left');
    this.__$breadcrumbs = $$1('.hsCheckout__breadcrumb');

    this.__$couponArea = $$1('.hsCheckout__coupon-area');
    this.__$couponTrigger = $$1('.hsCheckout__coupon-trigger');
    this.__$couponInput = $$1('.hsCheckout__coupon-input');
    this.__$couponSubmit = $$1('.hsCheckout__coupon-submit');
    this.__$couponFeedback = $$1('.hsCheckout__coupon-feedback');

    this.__$addressPrefilled = $$1('#hsAddress__prefilled');
    this.__$inputVoornam = $$1('#voornaam');
    this.__$inputAchternaam = $$1('#achternaam');
    this.__$inputStraat = $$1('#straat');
    this.__$inputHuisnummer = $$1('#huisnummer');
    this.__$inputPostcode = $$1('#postcode');
    this.__$inputWoonplaats = $$1('#woonplaats');
    this.__$inputLand = $$1('#land');
    this.__$addressDisplay = $$1('#hsAddress__display');

    this.__$costWinbedrag = $$1('.hsCheckout__cost-winbedrag');
    this.__$costWinbedragDel = $$1('.hsCheckout__cost-winbedrag--del');
    this.__$costVerzendkosten = $$1('.hsCheckout__cost-verzendkosten');
    this.__$costVeilingkosten = $$1('.hsCheckout__cost-veilingkosten');
    this.__$costTotaal = $$1('.hsCheckout__cost-totaal');

    this.__$expander = $$1('.hsCheckout__expander');
    this.__$step0 = $$1('#hsCheckout__step-0');
    this.__$step1 = $$1('#hsCheckout__step-1');
    this.__$btnToStep1 = $$1('.hsCheckout__tostep1');
    this.__$btnToStep2 = $$1('.hsCheckout__tostep2');
    this.__$summary = $$1('.hsCheckout__main-summary');

    this.__$paymentMethods = $$1('input[name="pay-method"]');
    this.__$paymentBanks = $$1('input[name="pay-bank"]');
    this.__$methodIdeal = $$1('.hsCheckout__method--ideal');
    this.__$bankSelector = $$1('.hsCheckout__banks');
    this.__$btnSubmit = $$1('.hsCheckout__submit');

    this.__$details = $$1('.hsCheckout__details');

    // animate steps @@disabled
    // const minHeight = this.__$step0.outerHeight() * 1.5;
    // this.__$wrapper.css('min-height', minHeight);
    // this.__$wrapperLeft.css('min-height', minHeight);

    this.manageValidation();

    this._bindUI();

    // start by step 0 on load
    this.goToStep(0);
  };

  /**
   * Manage form validation
   *
   * @see options here https://jqueryvalidation.org/validate/
   * @@todo perhaps use this to style the validator on the all
   * website: `$.validator.setDefaults({})`
   */
  Checkout.prototype.manageValidation = function manageValidation () {
    this._validation = this.__$form.validate({
      // submitHandler: () => {
      // this.goToStep(1);
      // },
      errorClass: 'has-danger',
      validClass: 'has-success',
      // errorElement: '<div class="form-control-feedback">',
      // highlight: function(element, errorClass, validClass) {
      // $(element).parent().addClass(errorClass).removeClass(validClass);
      // },
      // unhighlight: function(element, errorClass, validClass) {
      // $(element).parent().removeClass(errorClass).addClass(validClass);
      // }
    });
    console.log(this._validation);
  };

  /**
   * Bind UI
   */
  Checkout.prototype._bindUI = function _bindUI () {
    var self = this;

    // breaadcrumbs
    self.__$breadcrumbs.on('click', function (e) {
      var el = e.target.parentNode;
      if (el) {
        var step = $$1(el).index();
        if (step === 1) {
          if (self.__$form.valid()) {
            self.goToStep(step);
          }
        } else {
          self.goToStep(step);
        }
        e.stopPropagation();
        return false;
      }
    });

    // coupon area
    self.__$couponArea.hide();
    self.__$couponFeedback.hide();
    self.__$couponSubmit.attr('disabled', true);
    self.__$couponTrigger.on('click', function () {
      self.__$couponTrigger.slideUp(100, function () {
        self.__$couponArea.slideDown();
      });
    });
    self.__$couponInput.on('input', function () {
      if (this.value) {
        self.__$couponSubmit.attr('disabled', false);
      } else {
        self.__$couponSubmit.attr('disabled', true);
      }
    });
    self.__$couponSubmit.on('click', function () {
      self.__$couponFeedback.slideDown();
      self.applyCoupon(self.__$couponFeedback.data('discount'));
      self.__$couponSubmit.attr('disabled', true);
      self.__$couponInput.off('input');
    });

    // mobile expander
    if (window.innerWidth < self._breakpointMobile) {
      self.__$summary.hide();
      self.__$expander.removeClass('expanded').show();
    }
    self.__$expander.on('click', function () {
      self.__$summary.slideToggle();
      self.__$expander.toggleClass('expanded');
    });

    // address choice
    self.__$details.hide();
    if (!!$$1('input[name="addresschoice"]:checked').val()) {
      self.__$details.slideDown();
    }
    $$1('input[name="addresschoice"]').on('change', function () {
      self.__$details.slideToggle(!!this.value);
    });

    // to step1
    self.__$btnToStep1.on('click', function (e) {
      e.preventDefault();
      self.goToStep(0);
    });

    // to step2
    self.__$btnToStep2.on('click', function (e) {
      e.preventDefault();
      if (self.__$form.valid()) {
        self.goToStep(1);
      }
    });

    // payment method
    self.__$bankSelector.hide();
    self.__$btnSubmit.hide();
    self.__$paymentMethods.on('change', function () {
      if (this.value === 'ideal') {
        self._maybeShowSubmitBtn(self._isBankSelected);
        self.__$bankSelector.slideDown();
      } else {
        self.__$btnSubmit.slideDown();
        self.__$bankSelector.slideUp();
      }
    });

    // bank selection
    self.__$paymentBanks.on('change', function () {
      self._isBankSelected = !!this.value; // make it a boolean
      self._maybeShowSubmitBtn(!!this.value);
    });
  };

  /**
   * Maybe show the submit button
   * @param{boolean} showIt
   */
  Checkout.prototype._maybeShowSubmitBtn = function _maybeShowSubmitBtn (showIt) {
    if (showIt) {
      this.__$btnSubmit.slideDown();
    } else {
      this.__$btnSubmit.slideUp();
    }
  };

  /**
   * Go to step
   *
   * @param{Number} step e.g. 0, 1, 2, etc.
   */
  Checkout.prototype.goToStep = function goToStep (step) {
      var this$1 = this;

    // first remove class from all breadcrumbs
    this.__$breadcrumbs.removeClass('active');

    // add the active class
    this.__$breadcrumbs.filter(function (index, elem) {
      if (index === step) {
        // highlight current breadcrumb
        $$1(elem).addClass('active');

        // useful for global styling and hiding/showing based on current step
        this$1.__$wrapper.attr('data-step', step);
      }
    });

    if (step === 1) {
      this.manageAddress();
    }
  };

  /**
   * Apply coupon
   * @param{Number} discount The amount of discount in cash
   */
  Checkout.prototype.applyCoupon = function applyCoupon (discount) {
    var currentPrice = this.__$costWinbedrag.data('val');
    var newPrice = parseFloat(currentPrice) - parseFloat(discount);

    // fill deleted price
    this.__$costWinbedragDel.html(this.formatPrice(currentPrice));

    // update winbedrag price (also it's data raw number value)
    this.__$costWinbedrag.html(this.formatPrice(newPrice)).data('val', newPrice);

    // update totaal price
    this.__$costTotaal.html(this.formatPrice(this.getTotalPrice()));
  };

  /**
   * Get total price by summing values on the DOM
   * @return {Number}
   */
  Checkout.prototype.getTotalPrice = function getTotalPrice () {
    var a = this.getPriceFrom(this.__$costWinbedrag);
    var b = this.getPriceFrom(this.__$costVerzendkosten);
    var c = this.getPriceFrom(this.__$costVeilingkosten);
    return a + b + c;
  };

  /**
   * Get price from jQuery DOM element
   * @param{jQuery} $elem
   * @return {Number}
   */
  Checkout.prototype.getPriceFrom = function getPriceFrom ($elem) {
    var asString;
    var val = $elem.data('val').toString();

    if (val) {
      asString = val.replace(',', '.');
    } else {
      asString = '0';
    }
    return parseFloat(asString);
  };

  /**
   * Add zeroes
   * @see http://stackoverflow.com/a/24039448/1938970
   * @param {Number} value
   * @return {String}
   */
  Checkout.prototype.formatPrice = function formatPrice (value) {
    var asNumber = parseFloat(value);
    // replace dot with comma as in design
    var price = asNumber.toFixed(2).replace('.', ',');
    return this.getCurrency() + ' ' + price;
  };

  /**
   * Get currency
   * @return {String}
   */
  Checkout.prototype.getCurrency = function getCurrency () {
    return '€';
  };

  /**
   * Manage address
   */
  Checkout.prototype.manageAddress = function manageAddress () {
    var prefilledAddress;

    if (!$$1('input[name=addresschoice]:checked').val() && this.__$addressPrefilled.html()) {
      prefilledAddress = this.__$addressPrefilled.html();
    }
    else {
      var voornam = this.__$inputVoornam.val();
      var achternaam = this.__$inputAchternaam.val();
      var straat = this.__$inputStraat.val();
      var huisnummer = this.__$inputHuisnummer.val();
      var postcode = this.__$inputPostcode.val();
      var woonplaats = this.__$inputWoonplaats.val();
      var land = this.__$inputLand.find(':selected').text();

      prefilledAddress = voornam + " " + achternaam + ", " + straat + " " + huisnummer + ",\n        <br>" + postcode + ", " + woonplaats + ", " + land;
    }

    this.__$addressDisplay.html(prefilledAddress);
  };

  // export to public API
  api$1['checkout'] = new Checkout();

  var Seller = function Seller () {
    // bootstrap
    $$1(document).ready(this.$onReady.bind(this));
  };

  /**
   * On document ready
   */
  Seller.prototype.$onReady = function $onReady () {
    // console.log('app.js document is ready');
    this.__$wrapper = $$1('#hsSellercontact');

    // bail if we are not on the right page
    if (!this.__$wrapper.length) {
      return;
    }

    this.__$countrySelector = $$1('.hsLeverenCountry');

    this._bindUI();
  };

  /**
   * Bind UI
   */
  Seller.prototype._bindUI = function _bindUI () {
    var self = this;

    self.__$countrySelector.hide();
    // if (!!$('input[name="leveren"]:checked').val()) {
    // self.__$countrySelector.slideDown();
    // }

    $$1('input[name="leveren"]').on('change', function () {
      var isYes = this.value === 'ja';
      if (isYes) {
        self.__$countrySelector.slideDown();
      } else {
        self.__$countrySelector.slideUp();
      }
    });
  };

  // export to public API
  api$1['seller'] = new Seller();

  var Account = function Account () {
    // bootstrap
    this.$onInit();
    $$1(document).ready(this.$onReady.bind(this));
  };

  /**
   * Init
   */
  Account.prototype.$onInit = function $onInit () {
    this._breakpointMobile = 600;
  };

  /**
   * On document ready
   */
  Account.prototype.$onReady = function $onReady () {
    // console.log('app.js document is ready');
    this.__$wrapper = $$1('.hsAccount');

    // bail if we are not on the account page
    if (!this.__$wrapper.length) {
      return;
    }

    this._ttModal();
    this._gegevens();
  };

  /**
   * Track and trace modal
   */
  Account.prototype._ttModal = function _ttModal () {
    var $ttModal = $$1('#hsTtModal');
    if (!$ttModal.length) {
      return;
    }
    $$1(document).on('click', '.hsAccount__table-tt', function (e) {
      e.preventDefault();
      $ttModal.modal();
      $ttModal.find('.tt__verzendpartij').text(this.getAttribute('data-verzendpartij'));
      $ttModal.find('.tt__code').text(this.getAttribute('data-code'));
      // $ttModal.on('show.bs.modal', function (e) {
      // // do something...
      // })
    });
  };

  /**
   * Gegevens views switch
   */
  Account.prototype._gegevens = function _gegevens () {
      var this$1 = this;

    var $btnToEdit = $$1('#gegevens_switchedit');
    var $viewShow = $$1('#gegevens_show');
    var $viewEdit = $$1('#gegevens_edit');

    if (!$btnToEdit.length) {
      return;
    }

    var _switchView = function (event, name) {
      var newView = name;
      var currentView = this$1._currentView;
      if (event) {
        event.preventDefault();
      }
      if (!newView) {
        newView = location.hash.replace('#', '');
      }
      if (!newView) {
        return;
      }
      if (newView === 'show' && currentView !== 'show') {
        $viewEdit.slideUp();
        $viewShow.slideDown();
        location.hash = this$1._currentView = 'show';
      } else if (newView === 'edit' && currentView !== 'edit') {
        $viewShow.slideUp();
        $viewEdit.slideDown();
        location.hash = this$1._currentView = 'edit';
      }
    };

    window.addEventListener('hashchange', _switchView, false);

    _switchView(null, 'show');

    $btnToEdit.click(function (e) { _switchView(e, 'edit' );});
  };

  // export to public API
  api$1['account'] = new Account();

  var Countdown = function Countdown () {
    this.$onInit();
    $$1(document).ready(this.$onReady.bind(this));
  };

  /**
   * Init
   */
  Countdown.prototype.$onInit = function $onInit () {
  };

  /**
   * On document ready
   */
  Countdown.prototype.$onReady = function $onReady () {
    this.__$wrapper = $$1('.countdown');

    if (!this.__$wrapper.length) {
      return;
    }

    this.__$days = this.__$wrapper.find('[data-countdown="days"]');
    this.__$hours = this.__$wrapper.find('[data-countdown="hours"]');
    this.__$minutes = this.__$wrapper.find('[data-countdown="minutes"]');
    this.__$seconds = this.__$wrapper.find('[data-countdown="seconds"]');

    this._startCounter();
  };

  /**
   * Manually init
   */
  Countdown.prototype.init = function init () {
    this.$onReady();
  };

  /**
   * Start counter;
   * @return {[type]} [description]
   */
  Countdown.prototype._startCounter = function _startCounter () {
      var this$1 = this;

    this._seconds = 0;
    if (this._interval) {
      clearInterval(this._interval);
    }
    this._interval = setInterval(function () {
      this$1._seconds = this$1._seconds + 1;
      this$1._update();
    }, 1000);
  };

  /**
   * Update UI every second
   */
  Countdown.prototype._update = function _update () {
    var currentSeconds = parseInt(this.__$seconds.html(), 10);
    var currentMinutes = parseInt(this.__$minutes.html(), 10);
    var currentHours = parseInt(this.__$hours.html(), 10);
    var currentDays = parseInt(this.__$days.html(), 10);

    var newSeconds = Math.max(-1, Math.min(currentSeconds - 1, 60));
    var newMinutes = currentMinutes;
    var newHours = currentHours;
    var newDays = currentDays;

    if (newSeconds === -1) {
      newSeconds = 59;
      newMinutes = Math.max(-1, Math.min(currentMinutes - 1, 59));

      if (newMinutes === -1) {
        newMinutes = 59;
        newHours = Math.max(-1, Math.min(currentHours - 1, 23));

        if (newHours === -1) {
          newHours = 23;
          newDays = Math.max(-1, Math.min(newDays - 1, 364));
        }
      }
    }

    this.__$seconds.html(this._pad(newSeconds));
    this.__$minutes.html(this._pad(newMinutes));
    this.__$hours.html(this._pad(newHours));
    this.__$days.html(this._pad(newDays));
  };

  /**
   * Pad numbers (add leading zero)
   *
   * @param{Number} num
   * @param{Number} size
   * @return {String}
   */
  Countdown.prototype._pad = function _pad (num, size) {
      if ( size === void 0 ) size=2;

    var s = num + '';
    while (s.length < size) { s = '0' + s; }
    return s;
  };

  // export to public API
  api$1['countdown'] = new Countdown();

  // import tether from 'tether';
  // import './bootstrap-4-dev/collapse'; // 'bootstrap/js/src/collapse';
  // import './bootstrap-4-dev/alert'; // 'bootstrap/js/src/alert';
  // import './bootstrap-4-dev/modal'; // 'bootstrap/js/src/modal';
  // import './bootstrap-4-dev/tooltip'; // 'bootstrap/js/src/tooltip';
  // import './bootstrap-4-dev/dropdown'; // 'bootstrap/js/src/dropdown';

  // import 'jquery-match-height/dist/jquery.matchHeight';
  // import 'datatables.net';
  // import 'slick-carousel/slick/slick.js';

  // import './demo';
  var App = function App () {
    // bootstrap
    this.$onInit();
    $$1(document).ready(this.$onReady.bind(this));
  };

  /**
   * Init
   */
  App.prototype.$onInit = function $onInit () {
    // console.log('app.js initialized');
    this._updateCopyrightYear();
    this._accountMenu();
  };

  /**
   * On document ready
   */
  App.prototype.$onReady = function $onReady () {
    // console.log('app.js document is ready');
    this.__$itemCols = $$1('.hsItem__col');

    this._$win = $$1(window);

    // this._mobileImages();
    this._matchColsHeight();
    this._manageCatsSlider();
    this._initModals();
    this._initForms();
    this._initTables();
    this._initDropdowns();
    this._initAuthModal();
    this._$win.resize(this._matchColsHeight.bind(this));
    this._$win.resize(this._manageCatsSlider.bind(this));
    // this._$win.resize(this._mobileImages.bind(this));
  };

  /**
   * Init tooltips
   *
   */
  App.prototype._initTooltips = function _initTooltips () {
    // bootstrap tooltips
    // $('.js-tooltip').tooltip({});
    $$1('.shippingtime-tooltip').tooltip({
      animation: false,
      offset: '-10px 0',
      // delay: { hide: 1000000 }, // for debugging
      template: '<div class="tooltip tooltip-top tooltip--light shippingtime__tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
    });
    // $('.shippingtime').each(function () {
    // $(this).tooltip({
    //   template: '<div class="tooltip tooltip--light" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
    //   container: this,
    //   offset: '0 -80%',
    //   delay: { hide: 1000000 } // for debugging
    // });
    // });
  };

  /**
   * Manage item card's mobile images
   */
  App.prototype._mobileImages = function _mobileImages () {
    if ($$1(window).width() < 992) {
      var mobileProductImages = document.getElementsByClassName('hsItemCard__bottom-img');
      if (mobileProductImages) {
        var loop = function ( i ) {
          var tmpImg = new Image();
          var img = mobileProductImages[i];
          tmpImg.src = img.src;

          var $wrapper = $$1(img.parentNode);

          var imgCssString = '';

          tmpImg.onload = function () {
            var wrapperWidth = $wrapper.outerWidth(true);//.offsetWidth;
            var wrapperHeight = $wrapper.outerHeight(true);// .offsetHeight;
            var imgWidth = tmpImg.naturalWidth;
            var imgHeight = tmpImg.naturalHeight;
            console.log('wrapperHeight', wrapperHeight, 'wrapperHeight', wrapperHeight);
            if (imgHeight > imgWidth) {
              imgCssString += "max-width:" + wrapperWidth + "px;height:auto;left:0;top:50%;margin-top:-" + (img.height / 2) + "px;";
            } else {
              imgCssString += "max-height:" + wrapperHeight + "px;width:auto;left:50%;top:0;margin-left:-" + (img.width / 2) + "px;";
            }

            img.style.cssText = imgCssString + 'opacity:1;';
          };
        };

          for (var i = 0; i < mobileProductImages.length; i++) loop( i );
      }
    }
  };

  /**
   * Match the height of the item cards' columns
   */
  App.prototype._matchColsHeight = function _matchColsHeight () {
    if (this.__$itemCols.length) {
      if ($$1(window).width() >= 992) {
        this.__$itemCols.matchHeight({});
      } else {
        this.__$itemCols.matchHeight({ remove: true });
      }
    }
  };

  /**
   * Manage categories slider
   */
  App.prototype._manageCatsSlider = function _manageCatsSlider () {
    var $subheaderList = $$1('.appSubheader__list');
    var $subheaderLinks = $$1('.appSubheader__link');
    var subheaderListFullWidth = 0;
    var currentLinkIdx;

    var _maybeShowHintScrolls = function (e, slick, current, nextIdx) {
      if (nextIdx < $subheaderLinks.length - 3) {
        $subheaderList.addClass('slick-hint-next');
      } else {
        $subheaderList.removeClass('slick-hint-next');
      }

      if (nextIdx > 1) {
        $subheaderList.addClass('slick-hint-prev');
      } else {
        $subheaderList.removeClass('slick-hint-prev');
      }
    };

    if (!$subheaderList.length) {
      return;
    }
    $subheaderLinks.each(function (idx, item) {
      var $item = $$1(item);
      subheaderListFullWidth = subheaderListFullWidth + $item.width();
      if ($item.hasClass('active')) {
        currentLinkIdx = idx;
      }
    });

    // if we have a slider
    if ($subheaderList.width() < subheaderListFullWidth) {
      // just update the current slide
      if (this._catsSlider) {
        if (currentLinkIdx || currentLinkIdx === 0) {
          this._catsSlider.trigger('slickGoTo', currentLinkIdx);
        }
      // or init the slider
      } else {
        this._catsSliderHtmlPreSlick = $subheaderList.html();

        this._catsSlider = $subheaderList.slick({
          // slidesToShow: 4, // $subheaderLinks.length,
          dots: false,
          arrows: false,
          variableWidth: true,
          slidesToScroll: 1,
          centerMode: true,
          // centerPadding: 0,
          infinite: false,
          initialSlide: currentLinkIdx
        });

        _maybeShowHintScrolls(null, null, null, currentLinkIdx);

        this._catsSlider.on('beforeChange', _maybeShowHintScrolls);
      }
    // if we don't want to have a slider
    } else {
      if (this._catsSlider) {
        this._catsSlider.slick('unslick')
          .removeClass('slick-hint-prev')
          .removeClass('slick-hint-next');
        $subheaderList.html(this._catsSliderHtmlPreSlick);
        this._catsSlider = null;
      }
    }
  };

  /**
   * For centered modal
   *
   * @seehttps://stackoverflow.com/a/41377502/1938970
   */
  App.prototype._initModals = function _initModals () {
    $$1('.modal-dialog').on('click tap', function(e) {
      var __$modalDialog = $$1(this);
      if ($$1(e.target).hasClass('modal-dialog')) {
        __$modalDialog.parent().modal('hide');
      }
    });
  };

  /**
   * Init forms (validation)
   */
  App.prototype._initForms = function _initForms () {
    $$1('.form-validate').validate({
      errorClass: 'has-danger',
      validClass: 'has-success',
    });
  };

  /**
   * Init tables
   */
  App.prototype._initTables = function _initTables () {
    // datable on 'my account' pages
    $$1('.datatable').DataTable({
      searching: false,
      ordering: false,
      drawCallback: this._initTooltips.bind(this)
    });
  };

  /**
   * Init dropdowns
   */
  App.prototype._initDropdowns = function _initDropdowns () {
    // dropdown
    $$1('#hsLang__header')
      .on('show.bs.dropdown', function () {
        $$1('#hsHeader').addClass('last-dropdown-open');
      })
      .on('hide.bs.dropdown', function () {
        $$1('#hsHeader').removeClass('last-dropdown-open');
      });

    // $('.navselector') // 991 change to <option>
    $$1('.JSnavsel__select').on('change', function () {
      window.location.href = this.value;
      // getAttribute('data-href');
    });
  };

  /**
   * Update copyright year
   */
  App.prototype._updateCopyrightYear = function _updateCopyrightYear () {
    var el = document.getElementById('js-copyyear');
    if (el) {
      el.innerHTML = new Date().getFullYear();
    }
  };

  /**
   * Account menu
   */
  App.prototype._accountMenu = function _accountMenu () {
    var el = document.getElementById('js-myaccount_btn');
    if (el) {
      el.onclick = function () {
        document.body.classList.add('hsAccount--menu-open');
      };
    }
  };

  /**
   * Init authentication modals
   */
  App.prototype._initAuthModal = function _initAuthModal () {
    var $authModal = $$1('#hsAuthModal');
    this.__$authModal = $authModal;
    if (!$authModal.length) {
      return;
    }

    $authModal.on('show.bs.modal', function (e) {
      $$1('body').addClass('appAuthModal--open');
    });
    $authModal.on('hidden.bs.modal', function (e) {
      $$1('body').removeClass('appAuthModal--open');
    });
    $authModal.modal('hide');
    // $authModal.modal('hide');

    $$1(document).on('click', '[data-authmodal]', function (e) {
      e.preventDefault();
      var $btn = $$1(this);
      var view = this.getAttribute('data-authmodal');
      if (!view) {
        throw new Error('`data-authmodal` must have a value (e.g. `login` or `register`)');
        return;
      }
      $authModal.attr('data-view', view);
      try {
        $authModal.modal('show');
      } catch (e) {
        console.log(e);
      }
    });
  };

  /**
   * Prompt login modal
   *
   * @public
   */
  App.prototype.promptLogin = function promptLogin () {
    if (this.__$authModal) {
      this.__$authModal.attr('data-view', 'login');
      this.__$authModal.modal();
    }
  };

  /**
   * Prompt register modal
   *
   * @public
   */
  App.prototype.promptRegister = function promptRegister () {
    if (this.__$authModal) {
      this.__$authModal.attr('data-view', 'register');
      this.__$authModal.modal();
    }
  };

  /**
   * Update UI (Erwin call's this when opening the item modal)
   *
   * @public
   */
  App.prototype.updateUI = function updateUI () {
    itemDetail.$onReady();
  };

  // export to public API
  api$1['app'] = new App();

}(jQuery));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy9oZWxsb3NwZWNpYWwvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvdXRpbC5qcyIsIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy9oZWxsb3NwZWNpYWwvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvY29sbGFwc2UuanMiLCIvbWVkaWEvYmxhbmtpL3dlYi93ZWItcHJvamVjdHMvaGVsbG9zcGVjaWFsL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL2FsZXJ0LmpzIiwiL21lZGlhL2JsYW5raS93ZWIvd2ViLXByb2plY3RzL2hlbGxvc3BlY2lhbC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2pzL3NyYy9tb2RhbC5qcyIsIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy9oZWxsb3NwZWNpYWwvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvdG9vbHRpcC5qcyIsIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy9oZWxsb3NwZWNpYWwvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvZHJvcGRvd24uanMiLCIvbWVkaWEvYmxhbmtpL3dlYi93ZWItcHJvamVjdHMvaGVsbG9zcGVjaWFsL3NyYy9hcHAvc2NyaXB0cy9hcGkuanMiLCIvbWVkaWEvYmxhbmtpL3dlYi93ZWItcHJvamVjdHMvaGVsbG9zcGVjaWFsL3NyYy9hcHAvc2NyaXB0cy9hYnRlc3RpbmcuanMiLCIvbWVkaWEvYmxhbmtpL3dlYi93ZWItcHJvamVjdHMvaGVsbG9zcGVjaWFsL3NyYy9hcHAvc2NyaXB0cy9jb29raWVhbm5vdW5jZW1lbnQuanMiLCIvbWVkaWEvYmxhbmtpL3dlYi93ZWItcHJvamVjdHMvaGVsbG9zcGVjaWFsL3NyYy9hcHAvc2NyaXB0cy9uYXNrLmpzIiwiL21lZGlhL2JsYW5raS93ZWIvd2ViLXByb2plY3RzL2hlbGxvc3BlY2lhbC9zcmMvYXBwL3NjcmlwdHMvZmFxLmpzIiwiL21lZGlhL2JsYW5raS93ZWIvd2ViLXByb2plY3RzL2hlbGxvc3BlY2lhbC9zcmMvYXBwL3NjcmlwdHMvaTE4bi5qcyIsIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy9oZWxsb3NwZWNpYWwvc3JjL2FwcC9zY3JpcHRzL3N0YXRlcy5kZWZhdWx0cy5qcyIsIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy9oZWxsb3NwZWNpYWwvc3JjL2FwcC9zY3JpcHRzL2NvbG9ycy5kZWZhdWx0cy5qcyIsIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy9oZWxsb3NwZWNpYWwvc3JjL2FwcC9zY3JpcHRzL3N2Z1BpZVRpbWVyLmpzIiwiL21lZGlhL2JsYW5raS93ZWIvd2ViLXByb2plY3RzL2hlbGxvc3BlY2lhbC9zcmMvYXBwL3NjcmlwdHMvaXRlbS5qcyIsIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy9oZWxsb3NwZWNpYWwvc3JjL2FwcC9zY3JpcHRzL2l0ZW1EZXRhaWwuanMiLCIvbWVkaWEvYmxhbmtpL3dlYi93ZWItcHJvamVjdHMvaGVsbG9zcGVjaWFsL3NyYy9hcHAvc2NyaXB0cy9icm93c2Vycy5qcyIsIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy9oZWxsb3NwZWNpYWwvc3JjL2FwcC9zY3JpcHRzL2NoZWNrb3V0LmpzIiwiL21lZGlhL2JsYW5raS93ZWIvd2ViLXByb2plY3RzL2hlbGxvc3BlY2lhbC9zcmMvYXBwL3NjcmlwdHMvc2VsbGVyLmpzIiwiL21lZGlhL2JsYW5raS93ZWIvd2ViLXByb2plY3RzL2hlbGxvc3BlY2lhbC9zcmMvYXBwL3NjcmlwdHMvYWNjb3VudC5qcyIsIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy9oZWxsb3NwZWNpYWwvc3JjL2FwcC9zY3JpcHRzL2NvdW50ZG93bi5qcyIsIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy9oZWxsb3NwZWNpYWwvc3JjL2FwcC9zY3JpcHRzL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjAuMC1hbHBoYS42KTogdXRpbC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgVXRpbCA9ICgoJCkgPT4ge1xuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBQcml2YXRlIFRyYW5zaXRpb25FbmQgSGVscGVyc1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgbGV0IHRyYW5zaXRpb24gPSBmYWxzZVxuXG4gIGNvbnN0IE1BWF9VSUQgPSAxMDAwMDAwXG5cbiAgY29uc3QgVHJhbnNpdGlvbkVuZEV2ZW50ID0ge1xuICAgIFdlYmtpdFRyYW5zaXRpb24gOiAnd2Via2l0VHJhbnNpdGlvbkVuZCcsXG4gICAgTW96VHJhbnNpdGlvbiAgICA6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICBPVHJhbnNpdGlvbiAgICAgIDogJ29UcmFuc2l0aW9uRW5kIG90cmFuc2l0aW9uZW5kJyxcbiAgICB0cmFuc2l0aW9uICAgICAgIDogJ3RyYW5zaXRpb25lbmQnXG4gIH1cblxuICAvLyBzaG91dG91dCBBbmd1c0Nyb2xsIChodHRwczovL2dvby5nbC9weHdRR3ApXG4gIGZ1bmN0aW9uIHRvVHlwZShvYmopIHtcbiAgICByZXR1cm4ge30udG9TdHJpbmcuY2FsbChvYmopLm1hdGNoKC9cXHMoW2EtekEtWl0rKS8pWzFdLnRvTG93ZXJDYXNlKClcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRWxlbWVudChvYmopIHtcbiAgICByZXR1cm4gKG9ialswXSB8fCBvYmopLm5vZGVUeXBlXG4gIH1cblxuICBmdW5jdGlvbiBnZXRTcGVjaWFsVHJhbnNpdGlvbkVuZEV2ZW50KCkge1xuICAgIHJldHVybiB7XG4gICAgICBiaW5kVHlwZTogdHJhbnNpdGlvbi5lbmQsXG4gICAgICBkZWxlZ2F0ZVR5cGU6IHRyYW5zaXRpb24uZW5kLFxuICAgICAgaGFuZGxlKGV2ZW50KSB7XG4gICAgICAgIGlmICgkKGV2ZW50LnRhcmdldCkuaXModGhpcykpIHtcbiAgICAgICAgICByZXR1cm4gZXZlbnQuaGFuZGxlT2JqLmhhbmRsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0cmFuc2l0aW9uRW5kVGVzdCgpIHtcbiAgICBpZiAod2luZG93LlFVbml0KSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Jvb3RzdHJhcCcpXG5cbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gVHJhbnNpdGlvbkVuZEV2ZW50KSB7XG4gICAgICBpZiAoZWwuc3R5bGVbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVuZDogVHJhbnNpdGlvbkVuZEV2ZW50W25hbWVdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYW5zaXRpb25FbmRFbXVsYXRvcihkdXJhdGlvbikge1xuICAgIGxldCBjYWxsZWQgPSBmYWxzZVxuXG4gICAgJCh0aGlzKS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgKCkgPT4ge1xuICAgICAgY2FsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghY2FsbGVkKSB7XG4gICAgICAgIFV0aWwudHJpZ2dlclRyYW5zaXRpb25FbmQodGhpcylcbiAgICAgIH1cbiAgICB9LCBkdXJhdGlvbilcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uRW5kU3VwcG9ydCgpIHtcbiAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbkVuZFRlc3QoKVxuXG4gICAgJC5mbi5lbXVsYXRlVHJhbnNpdGlvbkVuZCA9IHRyYW5zaXRpb25FbmRFbXVsYXRvclxuXG4gICAgaWYgKFV0aWwuc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkpIHtcbiAgICAgICQuZXZlbnQuc3BlY2lhbFtVdGlsLlRSQU5TSVRJT05fRU5EXSA9IGdldFNwZWNpYWxUcmFuc2l0aW9uRW5kRXZlbnQoKVxuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIFB1YmxpYyBVdGlsIEFwaVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjb25zdCBVdGlsID0ge1xuXG4gICAgVFJBTlNJVElPTl9FTkQ6ICdic1RyYW5zaXRpb25FbmQnLFxuXG4gICAgZ2V0VUlEKHByZWZpeCkge1xuICAgICAgZG8ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICAgICAgICBwcmVmaXggKz0gfn4oTWF0aC5yYW5kb20oKSAqIE1BWF9VSUQpIC8vIFwifn5cIiBhY3RzIGxpa2UgYSBmYXN0ZXIgTWF0aC5mbG9vcigpIGhlcmVcbiAgICAgIH0gd2hpbGUgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCkpXG4gICAgICByZXR1cm4gcHJlZml4XG4gICAgfSxcblxuICAgIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgbGV0IHNlbGVjdG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JylcblxuICAgICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgICBzZWxlY3RvciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJykgfHwgJydcbiAgICAgICAgc2VsZWN0b3IgPSAvXiNbYS16XS9pLnRlc3Qoc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBudWxsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxlY3RvclxuICAgIH0sXG5cbiAgICByZWZsb3coZWxlbWVudCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gICAgfSxcblxuICAgIHRyaWdnZXJUcmFuc2l0aW9uRW5kKGVsZW1lbnQpIHtcbiAgICAgICQoZWxlbWVudCkudHJpZ2dlcih0cmFuc2l0aW9uLmVuZClcbiAgICB9LFxuXG4gICAgc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4odHJhbnNpdGlvbilcbiAgICB9LFxuXG4gICAgdHlwZUNoZWNrQ29uZmlnKGNvbXBvbmVudE5hbWUsIGNvbmZpZywgY29uZmlnVHlwZXMpIHtcbiAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gY29uZmlnVHlwZXMpIHtcbiAgICAgICAgaWYgKGNvbmZpZ1R5cGVzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgIGNvbnN0IGV4cGVjdGVkVHlwZXMgPSBjb25maWdUeXBlc1twcm9wZXJ0eV1cbiAgICAgICAgICBjb25zdCB2YWx1ZSAgICAgICAgID0gY29uZmlnW3Byb3BlcnR5XVxuICAgICAgICAgIGNvbnN0IHZhbHVlVHlwZSAgICAgPSB2YWx1ZSAmJiBpc0VsZW1lbnQodmFsdWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnQnIDogdG9UeXBlKHZhbHVlKVxuXG4gICAgICAgICAgaWYgKCFuZXcgUmVnRXhwKGV4cGVjdGVkVHlwZXMpLnRlc3QodmFsdWVUeXBlKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBgJHtjb21wb25lbnROYW1lLnRvVXBwZXJDYXNlKCl9OiBgICtcbiAgICAgICAgICAgICAgYE9wdGlvbiBcIiR7cHJvcGVydHl9XCIgcHJvdmlkZWQgdHlwZSBcIiR7dmFsdWVUeXBlfVwiIGAgK1xuICAgICAgICAgICAgICBgYnV0IGV4cGVjdGVkIHR5cGUgXCIke2V4cGVjdGVkVHlwZXN9XCIuYClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRUcmFuc2l0aW9uRW5kU3VwcG9ydCgpXG5cbiAgcmV0dXJuIFV0aWxcblxufSkoalF1ZXJ5KVxuXG5leHBvcnQgZGVmYXVsdCBVdGlsXG4iLCJpbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC4wLjAtYWxwaGEuNik6IGNvbGxhcHNlLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBDb2xsYXBzZSA9ICgoJCkgPT4ge1xuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDb25zdGFudHNcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUgICAgICAgICAgICAgICAgPSAnY29sbGFwc2UnXG4gIGNvbnN0IFZFUlNJT04gICAgICAgICAgICAgPSAnNC4wLjAtYWxwaGEuNidcbiAgY29uc3QgREFUQV9LRVkgICAgICAgICAgICA9ICdicy5jb2xsYXBzZSdcbiAgY29uc3QgRVZFTlRfS0VZICAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG4gIGNvbnN0IERBVEFfQVBJX0tFWSAgICAgICAgPSAnLmRhdGEtYXBpJ1xuICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgID0gJC5mbltOQU1FXVxuICBjb25zdCBUUkFOU0lUSU9OX0RVUkFUSU9OID0gNjAwXG5cbiAgY29uc3QgRGVmYXVsdCA9IHtcbiAgICB0b2dnbGUgOiB0cnVlLFxuICAgIHBhcmVudCA6ICcnXG4gIH1cblxuICBjb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgICB0b2dnbGUgOiAnYm9vbGVhbicsXG4gICAgcGFyZW50IDogJ3N0cmluZydcbiAgfVxuXG4gIGNvbnN0IEV2ZW50ID0ge1xuICAgIFNIT1cgICAgICAgICAgIDogYHNob3cke0VWRU5UX0tFWX1gLFxuICAgIFNIT1dOICAgICAgICAgIDogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgICBISURFICAgICAgICAgICA6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgICBISURERU4gICAgICAgICA6IGBoaWRkZW4ke0VWRU5UX0tFWX1gLFxuICAgIENMSUNLX0RBVEFfQVBJIDogYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuICB9XG5cbiAgY29uc3QgQ2xhc3NOYW1lID0ge1xuICAgIFNIT1cgICAgICAgOiAnc2hvdycsXG4gICAgQ09MTEFQU0UgICA6ICdjb2xsYXBzZScsXG4gICAgQ09MTEFQU0lORyA6ICdjb2xsYXBzaW5nJyxcbiAgICBDT0xMQVBTRUQgIDogJ2NvbGxhcHNlZCdcbiAgfVxuXG4gIGNvbnN0IERpbWVuc2lvbiA9IHtcbiAgICBXSURUSCAgOiAnd2lkdGgnLFxuICAgIEhFSUdIVCA6ICdoZWlnaHQnXG4gIH1cblxuICBjb25zdCBTZWxlY3RvciA9IHtcbiAgICBBQ1RJVkVTICAgICA6ICcuY2FyZCA+IC5zaG93LCAuY2FyZCA+IC5jb2xsYXBzaW5nJyxcbiAgICBEQVRBX1RPR0dMRSA6ICdbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSdcbiAgfVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjbGFzcyBDb2xsYXBzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgICB0aGlzLl9lbGVtZW50ICAgICAgICAgPSBlbGVtZW50XG4gICAgICB0aGlzLl9jb25maWcgICAgICAgICAgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgICAgdGhpcy5fdHJpZ2dlckFycmF5ICAgID0gJC5tYWtlQXJyYXkoJChcbiAgICAgICAgYFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2hyZWY9XCIjJHtlbGVtZW50LmlkfVwiXSxgICtcbiAgICAgICAgYFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2RhdGEtdGFyZ2V0PVwiIyR7ZWxlbWVudC5pZH1cIl1gXG4gICAgICApKVxuXG4gICAgICB0aGlzLl9wYXJlbnQgPSB0aGlzLl9jb25maWcucGFyZW50ID8gdGhpcy5fZ2V0UGFyZW50KCkgOiBudWxsXG5cbiAgICAgIGlmICghdGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModGhpcy5fZWxlbWVudCwgdGhpcy5fdHJpZ2dlckFycmF5KVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnRvZ2dsZSkge1xuICAgICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyBnZXR0ZXJzXG5cbiAgICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgICByZXR1cm4gVkVSU0lPTlxuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0XG4gICAgfVxuXG5cbiAgICAvLyBwdWJsaWNcblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgIGlmICgkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSkge1xuICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zaG93KClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbGxhcHNlIGlzIHRyYW5zaXRpb25pbmcnKVxuICAgICAgfVxuXG4gICAgICBpZiAoJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxldCBhY3RpdmVzXG4gICAgICBsZXQgYWN0aXZlc0RhdGFcblxuICAgICAgaWYgKHRoaXMuX3BhcmVudCkge1xuICAgICAgICBhY3RpdmVzID0gJC5tYWtlQXJyYXkoJCh0aGlzLl9wYXJlbnQpLmZpbmQoU2VsZWN0b3IuQUNUSVZFUykpXG4gICAgICAgIGlmICghYWN0aXZlcy5sZW5ndGgpIHtcbiAgICAgICAgICBhY3RpdmVzID0gbnVsbFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChhY3RpdmVzKSB7XG4gICAgICAgIGFjdGl2ZXNEYXRhID0gJChhY3RpdmVzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgICBpZiAoYWN0aXZlc0RhdGEgJiYgYWN0aXZlc0RhdGEuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1cpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc3RhcnRFdmVudClcbiAgICAgIGlmIChzdGFydEV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aXZlcykge1xuICAgICAgICBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJChhY3RpdmVzKSwgJ2hpZGUnKVxuICAgICAgICBpZiAoIWFjdGl2ZXNEYXRhKSB7XG4gICAgICAgICAgJChhY3RpdmVzKS5kYXRhKERBVEFfS0VZLCBudWxsKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTRSlcbiAgICAgICAgLmFkZENsYXNzKENsYXNzTmFtZS5DT0xMQVBTSU5HKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAwXG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG5cbiAgICAgIGlmICh0aGlzLl90cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICQodGhpcy5fdHJpZ2dlckFycmF5KVxuICAgICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VEKVxuICAgICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKHRydWUpXG5cbiAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTSU5HKVxuICAgICAgICAgIC5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0UpXG4gICAgICAgICAgLmFkZENsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnXG5cbiAgICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKGZhbHNlKVxuXG4gICAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihFdmVudC5TSE9XTilcbiAgICAgIH1cblxuICAgICAgaWYgKCFVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpKSB7XG4gICAgICAgIGNvbXBsZXRlKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhcGl0YWxpemVkRGltZW5zaW9uID0gZGltZW5zaW9uWzBdLnRvVXBwZXJDYXNlKCkgKyBkaW1lbnNpb24uc2xpY2UoMSlcbiAgICAgIGNvbnN0IHNjcm9sbFNpemUgICAgICAgICAgID0gYHNjcm9sbCR7Y2FwaXRhbGl6ZWREaW1lbnNpb259YFxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZChUUkFOU0lUSU9OX0RVUkFUSU9OKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSBgJHt0aGlzLl9lbGVtZW50W3Njcm9sbFNpemVdfXB4YFxuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ29sbGFwc2UgaXMgdHJhbnNpdGlvbmluZycpXG4gICAgICB9XG5cbiAgICAgIGlmICghJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSAkLkV2ZW50KEV2ZW50LkhJREUpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc3RhcnRFdmVudClcbiAgICAgIGlmIChzdGFydEV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBkaW1lbnNpb24gICAgICAgPSB0aGlzLl9nZXREaW1lbnNpb24oKVxuICAgICAgY29uc3Qgb2Zmc2V0RGltZW5zaW9uID0gZGltZW5zaW9uID09PSBEaW1lbnNpb24uV0lEVEggP1xuICAgICAgICAnb2Zmc2V0V2lkdGgnIDogJ29mZnNldEhlaWdodCdcblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudFtvZmZzZXREaW1lbnNpb25dfXB4YFxuXG4gICAgICBVdGlsLnJlZmxvdyh0aGlzLl9lbGVtZW50KVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0lORylcbiAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTRSlcbiAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxuXG4gICAgICBpZiAodGhpcy5fdHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgICAkKHRoaXMuX3RyaWdnZXJBcnJheSlcbiAgICAgICAgICAuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFRClcbiAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcodHJ1ZSlcblxuICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyhmYWxzZSlcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0lORylcbiAgICAgICAgICAuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFKVxuICAgICAgICAgIC50cmlnZ2VyKEV2ZW50LkhJRERFTilcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJydcblxuICAgICAgaWYgKCFVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpKSB7XG4gICAgICAgIGNvbXBsZXRlKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKFRSQU5TSVRJT05fRFVSQVRJT04pXG4gICAgfVxuXG4gICAgc2V0VHJhbnNpdGlvbmluZyhpc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGlzVHJhbnNpdGlvbmluZ1xuICAgIH1cblxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG5cbiAgICAgIHRoaXMuX2NvbmZpZyAgICAgICAgICA9IG51bGxcbiAgICAgIHRoaXMuX3BhcmVudCAgICAgICAgICA9IG51bGxcbiAgICAgIHRoaXMuX2VsZW1lbnQgICAgICAgICA9IG51bGxcbiAgICAgIHRoaXMuX3RyaWdnZXJBcnJheSAgICA9IG51bGxcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IG51bGxcbiAgICB9XG5cblxuICAgIC8vIHByaXZhdGVcblxuICAgIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBjb25maWcgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgY29uZmlnKVxuICAgICAgY29uZmlnLnRvZ2dsZSA9IEJvb2xlYW4oY29uZmlnLnRvZ2dsZSkgLy8gY29lcmNlIHN0cmluZyB2YWx1ZXNcbiAgICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgICByZXR1cm4gY29uZmlnXG4gICAgfVxuXG4gICAgX2dldERpbWVuc2lvbigpIHtcbiAgICAgIGNvbnN0IGhhc1dpZHRoID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhEaW1lbnNpb24uV0lEVEgpXG4gICAgICByZXR1cm4gaGFzV2lkdGggPyBEaW1lbnNpb24uV0lEVEggOiBEaW1lbnNpb24uSEVJR0hUXG4gICAgfVxuXG4gICAgX2dldFBhcmVudCgpIHtcbiAgICAgIGNvbnN0IHBhcmVudCAgID0gJCh0aGlzLl9jb25maWcucGFyZW50KVswXVxuICAgICAgY29uc3Qgc2VsZWN0b3IgPVxuICAgICAgICBgW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1bZGF0YS1wYXJlbnQ9XCIke3RoaXMuX2NvbmZpZy5wYXJlbnR9XCJdYFxuXG4gICAgICAkKHBhcmVudCkuZmluZChzZWxlY3RvcikuZWFjaCgoaSwgZWxlbWVudCkgPT4ge1xuICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoXG4gICAgICAgICAgQ29sbGFwc2UuX2dldFRhcmdldEZyb21FbGVtZW50KGVsZW1lbnQpLFxuICAgICAgICAgIFtlbGVtZW50XVxuICAgICAgICApXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gcGFyZW50XG4gICAgfVxuXG4gICAgX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhlbGVtZW50LCB0cmlnZ2VyQXJyYXkpIHtcbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGlzT3BlbiA9ICQoZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKVxuXG4gICAgICAgIGlmICh0cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgJCh0cmlnZ2VyQXJyYXkpXG4gICAgICAgICAgICAudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFRCwgIWlzT3BlbilcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyBzdGF0aWNcblxuICAgIHN0YXRpYyBfZ2V0VGFyZ2V0RnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudClcbiAgICAgIHJldHVybiBzZWxlY3RvciA/ICQoc2VsZWN0b3IpWzBdIDogbnVsbFxuICAgIH1cblxuICAgIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0ICR0aGlzICAgPSAkKHRoaXMpXG4gICAgICAgIGxldCBkYXRhICAgICAgPSAkdGhpcy5kYXRhKERBVEFfS0VZKVxuICAgICAgICBjb25zdCBfY29uZmlnID0gJC5leHRlbmQoXG4gICAgICAgICAge30sXG4gICAgICAgICAgRGVmYXVsdCxcbiAgICAgICAgICAkdGhpcy5kYXRhKCksXG4gICAgICAgICAgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnXG4gICAgICAgIClcblxuICAgICAgICBpZiAoIWRhdGEgJiYgX2NvbmZpZy50b2dnbGUgJiYgL3Nob3d8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgICAgX2NvbmZpZy50b2dnbGUgPSBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBDb2xsYXBzZSh0aGlzLCBfY29uZmlnKVxuICAgICAgICAgICR0aGlzLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICAgIH1cbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICB9XG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkKGRvY3VtZW50KS5vbihFdmVudC5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIGNvbnN0IHRhcmdldCA9IENvbGxhcHNlLl9nZXRUYXJnZXRGcm9tRWxlbWVudCh0aGlzKVxuICAgIGNvbnN0IGRhdGEgICA9ICQodGFyZ2V0KS5kYXRhKERBVEFfS0VZKVxuICAgIGNvbnN0IGNvbmZpZyA9IGRhdGEgPyAndG9nZ2xlJyA6ICQodGhpcykuZGF0YSgpXG5cbiAgICBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0YXJnZXQpLCBjb25maWcpXG4gIH0pXG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJC5mbltOQU1FXSAgICAgICAgICAgICA9IENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2VcbiAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IENvbGxhcHNlXG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCAgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICAgIHJldHVybiBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlXG4gIH1cblxuICByZXR1cm4gQ29sbGFwc2VcblxufSkoalF1ZXJ5KVxuXG5leHBvcnQgZGVmYXVsdCBDb2xsYXBzZVxuIiwiaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuMC4wLWFscGhhLjYpOiBhbGVydC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgQWxlcnQgPSAoKCQpID0+IHtcblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29uc3RhbnRzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjb25zdCBOQU1FICAgICAgICAgICAgICAgID0gJ2FsZXJ0J1xuICBjb25zdCBWRVJTSU9OICAgICAgICAgICAgID0gJzQuMC4wLWFscGhhLjYnXG4gIGNvbnN0IERBVEFfS0VZICAgICAgICAgICAgPSAnYnMuYWxlcnQnXG4gIGNvbnN0IEVWRU5UX0tFWSAgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuICBjb25zdCBEQVRBX0FQSV9LRVkgICAgICAgID0gJy5kYXRhLWFwaSdcbiAgY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUICA9ICQuZm5bTkFNRV1cbiAgY29uc3QgVFJBTlNJVElPTl9EVVJBVElPTiA9IDE1MFxuXG4gIGNvbnN0IFNlbGVjdG9yID0ge1xuICAgIERJU01JU1MgOiAnW2RhdGEtZGlzbWlzcz1cImFsZXJ0XCJdJ1xuICB9XG5cbiAgY29uc3QgRXZlbnQgPSB7XG4gICAgQ0xPU0UgICAgICAgICAgOiBgY2xvc2Uke0VWRU5UX0tFWX1gLFxuICAgIENMT1NFRCAgICAgICAgIDogYGNsb3NlZCR7RVZFTlRfS0VZfWAsXG4gICAgQ0xJQ0tfREFUQV9BUEkgOiBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG4gIH1cblxuICBjb25zdCBDbGFzc05hbWUgPSB7XG4gICAgQUxFUlQgOiAnYWxlcnQnLFxuICAgIEZBREUgIDogJ2ZhZGUnLFxuICAgIFNIT1cgIDogJ3Nob3cnXG4gIH1cblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgY2xhc3MgQWxlcnQge1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgICB9XG5cblxuICAgIC8vIGdldHRlcnNcblxuICAgIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICAgIHJldHVybiBWRVJTSU9OXG4gICAgfVxuXG5cbiAgICAvLyBwdWJsaWNcblxuICAgIGNsb3NlKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50IHx8IHRoaXMuX2VsZW1lbnRcblxuICAgICAgY29uc3Qgcm9vdEVsZW1lbnQgPSB0aGlzLl9nZXRSb290RWxlbWVudChlbGVtZW50KVxuICAgICAgY29uc3QgY3VzdG9tRXZlbnQgPSB0aGlzLl90cmlnZ2VyQ2xvc2VFdmVudChyb290RWxlbWVudClcblxuICAgICAgaWYgKGN1c3RvbUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLl9yZW1vdmVFbGVtZW50KHJvb3RFbGVtZW50KVxuICAgIH1cblxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG4gICAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICAgIH1cblxuXG4gICAgLy8gcHJpdmF0ZVxuXG4gICAgX2dldFJvb3RFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpXG4gICAgICBsZXQgcGFyZW50ICAgICA9IGZhbHNlXG5cbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICBwYXJlbnQgPSAkKHNlbGVjdG9yKVswXVxuICAgICAgfVxuXG4gICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICBwYXJlbnQgPSAkKGVsZW1lbnQpLmNsb3Nlc3QoYC4ke0NsYXNzTmFtZS5BTEVSVH1gKVswXVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyZW50XG4gICAgfVxuXG4gICAgX3RyaWdnZXJDbG9zZUV2ZW50KGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGNsb3NlRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkNMT1NFKVxuXG4gICAgICAkKGVsZW1lbnQpLnRyaWdnZXIoY2xvc2VFdmVudClcbiAgICAgIHJldHVybiBjbG9zZUV2ZW50XG4gICAgfVxuXG4gICAgX3JlbW92ZUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgJChlbGVtZW50KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgICAgaWYgKCFVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpIHx8XG4gICAgICAgICAgISQoZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSB7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lFbGVtZW50KGVsZW1lbnQpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAkKGVsZW1lbnQpXG4gICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgKGV2ZW50KSA9PiB0aGlzLl9kZXN0cm95RWxlbWVudChlbGVtZW50LCBldmVudCkpXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZChUUkFOU0lUSU9OX0RVUkFUSU9OKVxuICAgIH1cblxuICAgIF9kZXN0cm95RWxlbWVudChlbGVtZW50KSB7XG4gICAgICAkKGVsZW1lbnQpXG4gICAgICAgIC5kZXRhY2goKVxuICAgICAgICAudHJpZ2dlcihFdmVudC5DTE9TRUQpXG4gICAgICAgIC5yZW1vdmUoKVxuICAgIH1cblxuXG4gICAgLy8gc3RhdGljXG5cbiAgICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCAkZWxlbWVudCA9ICQodGhpcylcbiAgICAgICAgbGV0IGRhdGEgICAgICAgPSAkZWxlbWVudC5kYXRhKERBVEFfS0VZKVxuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBuZXcgQWxlcnQodGhpcylcbiAgICAgICAgICAkZWxlbWVudC5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gJ2Nsb3NlJykge1xuICAgICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHN0YXRpYyBfaGFuZGxlRGlzbWlzcyhhbGVydEluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgfVxuXG4gICAgICAgIGFsZXJ0SW5zdGFuY2UuY2xvc2UodGhpcylcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJChkb2N1bWVudCkub24oXG4gICAgRXZlbnQuQ0xJQ0tfREFUQV9BUEksXG4gICAgU2VsZWN0b3IuRElTTUlTUyxcbiAgICBBbGVydC5faGFuZGxlRGlzbWlzcyhuZXcgQWxlcnQoKSlcbiAgKVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBqUXVlcnlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQuZm5bTkFNRV0gICAgICAgICAgICAgPSBBbGVydC5falF1ZXJ5SW50ZXJmYWNlXG4gICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBBbGVydFxuICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgICByZXR1cm4gQWxlcnQuX2pRdWVyeUludGVyZmFjZVxuICB9XG5cbiAgcmV0dXJuIEFsZXJ0XG5cbn0pKGpRdWVyeSlcblxuZXhwb3J0IGRlZmF1bHQgQWxlcnRcbiIsImltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjAuMC1hbHBoYS42KTogbW9kYWwuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE1vZGFsID0gKCgkKSA9PiB7XG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgY29uc3QgTkFNRSAgICAgICAgICAgICAgICAgICAgICAgICA9ICdtb2RhbCdcbiAgY29uc3QgVkVSU0lPTiAgICAgICAgICAgICAgICAgICAgICA9ICc0LjAuMC1hbHBoYS42J1xuICBjb25zdCBEQVRBX0tFWSAgICAgICAgICAgICAgICAgICAgID0gJ2JzLm1vZGFsJ1xuICBjb25zdCBFVkVOVF9LRVkgICAgICAgICAgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbiAgY29uc3QgREFUQV9BUElfS0VZICAgICAgICAgICAgICAgICA9ICcuZGF0YS1hcGknXG4gIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCAgICAgICAgICAgPSAkLmZuW05BTUVdXG4gIGNvbnN0IFRSQU5TSVRJT05fRFVSQVRJT04gICAgICAgICAgPSAzMDBcbiAgY29uc3QgQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTiA9IDE1MFxuICBjb25zdCBFU0NBUEVfS0VZQ09ERSAgICAgICAgICAgICAgID0gMjcgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgRXNjYXBlIChFc2MpIGtleVxuXG4gIGNvbnN0IERlZmF1bHQgPSB7XG4gICAgYmFja2Ryb3AgOiB0cnVlLFxuICAgIGtleWJvYXJkIDogdHJ1ZSxcbiAgICBmb2N1cyAgICA6IHRydWUsXG4gICAgc2hvdyAgICAgOiB0cnVlXG4gIH1cblxuICBjb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgICBiYWNrZHJvcCA6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgICBrZXlib2FyZCA6ICdib29sZWFuJyxcbiAgICBmb2N1cyAgICA6ICdib29sZWFuJyxcbiAgICBzaG93ICAgICA6ICdib29sZWFuJ1xuICB9XG5cbiAgY29uc3QgRXZlbnQgPSB7XG4gICAgSElERSAgICAgICAgICAgICAgOiBgaGlkZSR7RVZFTlRfS0VZfWAsXG4gICAgSElEREVOICAgICAgICAgICAgOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgICBTSE9XICAgICAgICAgICAgICA6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgICBTSE9XTiAgICAgICAgICAgICA6IGBzaG93biR7RVZFTlRfS0VZfWAsXG4gICAgRk9DVVNJTiAgICAgICAgICAgOiBgZm9jdXNpbiR7RVZFTlRfS0VZfWAsXG4gICAgUkVTSVpFICAgICAgICAgICAgOiBgcmVzaXplJHtFVkVOVF9LRVl9YCxcbiAgICBDTElDS19ESVNNSVNTICAgICA6IGBjbGljay5kaXNtaXNzJHtFVkVOVF9LRVl9YCxcbiAgICBLRVlET1dOX0RJU01JU1MgICA6IGBrZXlkb3duLmRpc21pc3Mke0VWRU5UX0tFWX1gLFxuICAgIE1PVVNFVVBfRElTTUlTUyAgIDogYG1vdXNldXAuZGlzbWlzcyR7RVZFTlRfS0VZfWAsXG4gICAgTU9VU0VET1dOX0RJU01JU1MgOiBgbW91c2Vkb3duLmRpc21pc3Mke0VWRU5UX0tFWX1gLFxuICAgIENMSUNLX0RBVEFfQVBJICAgIDogYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuICB9XG5cbiAgY29uc3QgQ2xhc3NOYW1lID0ge1xuICAgIFNDUk9MTEJBUl9NRUFTVVJFUiA6ICdtb2RhbC1zY3JvbGxiYXItbWVhc3VyZScsXG4gICAgQkFDS0RST1AgICAgICAgICAgIDogJ21vZGFsLWJhY2tkcm9wJyxcbiAgICBPUEVOICAgICAgICAgICAgICAgOiAnbW9kYWwtb3BlbicsXG4gICAgRkFERSAgICAgICAgICAgICAgIDogJ2ZhZGUnLFxuICAgIFNIT1cgICAgICAgICAgICAgICA6ICdzaG93J1xuICB9XG5cbiAgY29uc3QgU2VsZWN0b3IgPSB7XG4gICAgRElBTE9HICAgICAgICAgICAgIDogJy5tb2RhbC1kaWFsb2cnLFxuICAgIERBVEFfVE9HR0xFICAgICAgICA6ICdbZGF0YS10b2dnbGU9XCJtb2RhbFwiXScsXG4gICAgREFUQV9ESVNNSVNTICAgICAgIDogJ1tkYXRhLWRpc21pc3M9XCJtb2RhbFwiXScsXG4gICAgRklYRURfQ09OVEVOVCAgICAgIDogJy5maXhlZC10b3AsIC5maXhlZC1ib3R0b20sIC5pcy1maXhlZCwgLnN0aWNreS10b3AnXG4gIH1cblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgY2xhc3MgTW9kYWwge1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICB0aGlzLl9jb25maWcgICAgICAgICAgICAgID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICAgIHRoaXMuX2VsZW1lbnQgICAgICAgICAgICAgPSBlbGVtZW50XG4gICAgICB0aGlzLl9kaWFsb2cgICAgICAgICAgICAgID0gJChlbGVtZW50KS5maW5kKFNlbGVjdG9yLkRJQUxPRylbMF1cbiAgICAgIHRoaXMuX2JhY2tkcm9wICAgICAgICAgICAgPSBudWxsXG4gICAgICB0aGlzLl9pc1Nob3duICAgICAgICAgICAgID0gZmFsc2VcbiAgICAgIHRoaXMuX2lzQm9keU92ZXJmbG93aW5nICAgPSBmYWxzZVxuICAgICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IGZhbHNlXG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgICAgID0gZmFsc2VcbiAgICAgIHRoaXMuX29yaWdpbmFsQm9keVBhZGRpbmcgPSAwXG4gICAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCAgICAgID0gMFxuICAgIH1cblxuXG4gICAgLy8gZ2V0dGVyc1xuXG4gICAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgICAgcmV0dXJuIFZFUlNJT05cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFxuICAgIH1cblxuXG4gICAgLy8gcHVibGljXG5cbiAgICB0b2dnbGUocmVsYXRlZFRhcmdldCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2lzU2hvd24gPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdyhyZWxhdGVkVGFyZ2V0KVxuICAgIH1cblxuICAgIHNob3cocmVsYXRlZFRhcmdldCkge1xuICAgICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01vZGFsIGlzIHRyYW5zaXRpb25pbmcnKVxuICAgICAgfVxuXG4gICAgICBpZiAoVXRpbC5zdXBwb3J0c1RyYW5zaXRpb25FbmQoKSAmJlxuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKSkge1xuICAgICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG4gICAgICB9XG4gICAgICBjb25zdCBzaG93RXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1csIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldFxuICAgICAgfSlcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNob3dFdmVudClcblxuICAgICAgaWYgKHRoaXMuX2lzU2hvd24gfHwgc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLl9pc1Nob3duID0gdHJ1ZVxuXG4gICAgICB0aGlzLl9jaGVja1Njcm9sbGJhcigpXG4gICAgICB0aGlzLl9zZXRTY3JvbGxiYXIoKVxuXG4gICAgICAkKGRvY3VtZW50LmJvZHkpLmFkZENsYXNzKENsYXNzTmFtZS5PUEVOKVxuXG4gICAgICB0aGlzLl9zZXRFc2NhcGVFdmVudCgpXG4gICAgICB0aGlzLl9zZXRSZXNpemVFdmVudCgpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkub24oXG4gICAgICAgIEV2ZW50LkNMSUNLX0RJU01JU1MsXG4gICAgICAgIFNlbGVjdG9yLkRBVEFfRElTTUlTUyxcbiAgICAgICAgKGV2ZW50KSA9PiB0aGlzLmhpZGUoZXZlbnQpXG4gICAgICApXG5cbiAgICAgICQodGhpcy5fZGlhbG9nKS5vbihFdmVudC5NT1VTRURPV05fRElTTUlTUywgKCkgPT4ge1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uZShFdmVudC5NT1VTRVVQX0RJU01JU1MsIChldmVudCkgPT4ge1xuICAgICAgICAgIGlmICgkKGV2ZW50LnRhcmdldCkuaXModGhpcy5fZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5fc2hvd0JhY2tkcm9wKCgpID0+IHRoaXMuX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpKVxuICAgIH1cblxuICAgIGhpZGUoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNb2RhbCBpcyB0cmFuc2l0aW9uaW5nJylcbiAgICAgIH1cblxuICAgICAgY29uc3QgdHJhbnNpdGlvbiA9IFV0aWwuc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkgJiZcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSlcbiAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgaGlkZUV2ZW50ID0gJC5FdmVudChFdmVudC5ISURFKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKGhpZGVFdmVudClcblxuICAgICAgaWYgKCF0aGlzLl9pc1Nob3duIHx8IGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG5cbiAgICAgIHRoaXMuX3NldEVzY2FwZUV2ZW50KClcbiAgICAgIHRoaXMuX3NldFJlc2l6ZUV2ZW50KClcblxuICAgICAgJChkb2N1bWVudCkub2ZmKEV2ZW50LkZPQ1VTSU4pXG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkub2ZmKEV2ZW50LkNMSUNLX0RJU01JU1MpXG4gICAgICAkKHRoaXMuX2RpYWxvZykub2ZmKEV2ZW50Lk1PVVNFRE9XTl9ESVNNSVNTKVxuXG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCAoZXZlbnQpID0+IHRoaXMuX2hpZGVNb2RhbChldmVudCkpXG4gICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKFRSQU5TSVRJT05fRFVSQVRJT04pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9oaWRlTW9kYWwoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG5cbiAgICAgICQod2luZG93LCBkb2N1bWVudCwgdGhpcy5fZWxlbWVudCwgdGhpcy5fYmFja2Ryb3ApLm9mZihFVkVOVF9LRVkpXG5cbiAgICAgIHRoaXMuX2NvbmZpZyAgICAgICAgICAgICAgPSBudWxsXG4gICAgICB0aGlzLl9lbGVtZW50ICAgICAgICAgICAgID0gbnVsbFxuICAgICAgdGhpcy5fZGlhbG9nICAgICAgICAgICAgICA9IG51bGxcbiAgICAgIHRoaXMuX2JhY2tkcm9wICAgICAgICAgICAgPSBudWxsXG4gICAgICB0aGlzLl9pc1Nob3duICAgICAgICAgICAgID0gbnVsbFxuICAgICAgdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgICA9IG51bGxcbiAgICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBudWxsXG4gICAgICB0aGlzLl9vcmlnaW5hbEJvZHlQYWRkaW5nID0gbnVsbFxuICAgICAgdGhpcy5fc2Nyb2xsYmFyV2lkdGggICAgICA9IG51bGxcbiAgICB9XG5cblxuICAgIC8vIHByaXZhdGVcblxuICAgIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBjb25maWcgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgY29uZmlnKVxuICAgICAgVXRpbC50eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcbiAgICAgIHJldHVybiBjb25maWdcbiAgICB9XG5cbiAgICBfc2hvd0VsZW1lbnQocmVsYXRlZFRhcmdldCkge1xuICAgICAgY29uc3QgdHJhbnNpdGlvbiA9IFV0aWwuc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkgJiZcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSlcblxuICAgICAgaWYgKCF0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUgfHxcbiAgICAgICAgIHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgLy8gZG9uJ3QgbW92ZSBtb2RhbHMgZG9tIHBvc2l0aW9uXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fZWxlbWVudClcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJylcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2Nyb2xsVG9wID0gMFxuXG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICBVdGlsLnJlZmxvdyh0aGlzLl9lbGVtZW50KVxuICAgICAgfVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLmFkZENsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmZvY3VzKSB7XG4gICAgICAgIHRoaXMuX2VuZm9yY2VGb2N1cygpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNob3duRXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1dOLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IHRyYW5zaXRpb25Db21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5mb2N1cykge1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93bkV2ZW50KVxuICAgICAgfVxuXG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICAkKHRoaXMuX2RpYWxvZylcbiAgICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIHRyYW5zaXRpb25Db21wbGV0ZSlcbiAgICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoVFJBTlNJVElPTl9EVVJBVElPTilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zaXRpb25Db21wbGV0ZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgX2VuZm9yY2VGb2N1cygpIHtcbiAgICAgICQoZG9jdW1lbnQpXG4gICAgICAgIC5vZmYoRXZlbnQuRk9DVVNJTikgLy8gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBmb2N1cyBsb29wXG4gICAgICAgIC5vbihFdmVudC5GT0NVU0lOLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoZG9jdW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJlxuICAgICAgICAgICAgICB0aGlzLl9lbGVtZW50ICE9PSBldmVudC50YXJnZXQgJiZcbiAgICAgICAgICAgICAgISQodGhpcy5fZWxlbWVudCkuaGFzKGV2ZW50LnRhcmdldCkubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgX3NldEVzY2FwZUV2ZW50KCkge1xuICAgICAgaWYgKHRoaXMuX2lzU2hvd24gJiYgdGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuS0VZRE9XTl9ESVNNSVNTLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEVTQ0FQRV9LRVlDT0RFKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgfSBlbHNlIGlmICghdGhpcy5faXNTaG93bikge1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLm9mZihFdmVudC5LRVlET1dOX0RJU01JU1MpXG4gICAgICB9XG4gICAgfVxuXG4gICAgX3NldFJlc2l6ZUV2ZW50KCkge1xuICAgICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcbiAgICAgICAgJCh3aW5kb3cpLm9uKEV2ZW50LlJFU0laRSwgKGV2ZW50KSA9PiB0aGlzLl9oYW5kbGVVcGRhdGUoZXZlbnQpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCh3aW5kb3cpLm9mZihFdmVudC5SRVNJWkUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgX2hpZGVNb2RhbCgpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICAgIHRoaXMuX3Nob3dCYWNrZHJvcCgoKSA9PiB7XG4gICAgICAgICQoZG9jdW1lbnQuYm9keSkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pXG4gICAgICAgIHRoaXMuX3Jlc2V0QWRqdXN0bWVudHMoKVxuICAgICAgICB0aGlzLl9yZXNldFNjcm9sbGJhcigpXG4gICAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihFdmVudC5ISURERU4pXG4gICAgICB9KVxuICAgIH1cblxuICAgIF9yZW1vdmVCYWNrZHJvcCgpIHtcbiAgICAgIGlmICh0aGlzLl9iYWNrZHJvcCkge1xuICAgICAgICAkKHRoaXMuX2JhY2tkcm9wKS5yZW1vdmUoKVxuICAgICAgICB0aGlzLl9iYWNrZHJvcCA9IG51bGxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfc2hvd0JhY2tkcm9wKGNhbGxiYWNrKSB7XG4gICAgICBjb25zdCBhbmltYXRlID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSkgP1xuICAgICAgICBDbGFzc05hbWUuRkFERSA6ICcnXG5cbiAgICAgIGlmICh0aGlzLl9pc1Nob3duICYmIHRoaXMuX2NvbmZpZy5iYWNrZHJvcCkge1xuICAgICAgICBjb25zdCBkb0FuaW1hdGUgPSBVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpICYmIGFuaW1hdGVcblxuICAgICAgICB0aGlzLl9iYWNrZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRoaXMuX2JhY2tkcm9wLmNsYXNzTmFtZSA9IENsYXNzTmFtZS5CQUNLRFJPUFxuXG4gICAgICAgIGlmIChhbmltYXRlKSB7XG4gICAgICAgICAgJCh0aGlzLl9iYWNrZHJvcCkuYWRkQ2xhc3MoYW5pbWF0ZSlcbiAgICAgICAgfVxuXG4gICAgICAgICQodGhpcy5fYmFja2Ryb3ApLmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpXG5cbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudC5DTElDS19ESVNNSVNTLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5faWdub3JlQmFja2Ryb3BDbGljaykge1xuICAgICAgICAgICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IGZhbHNlXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLl9jb25maWcuYmFja2Ryb3AgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKGRvQW5pbWF0ZSkge1xuICAgICAgICAgIFV0aWwucmVmbG93KHRoaXMuX2JhY2tkcm9wKVxuICAgICAgICB9XG5cbiAgICAgICAgJCh0aGlzLl9iYWNrZHJvcCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkb0FuaW1hdGUpIHtcbiAgICAgICAgICBjYWxsYmFjaygpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAkKHRoaXMuX2JhY2tkcm9wKVxuICAgICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY2FsbGJhY2spXG4gICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKEJBQ0tEUk9QX1RSQU5TSVRJT05fRFVSQVRJT04pXG5cbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX2lzU2hvd24gJiYgdGhpcy5fYmFja2Ryb3ApIHtcbiAgICAgICAgJCh0aGlzLl9iYWNrZHJvcCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICAgICAgY29uc3QgY2FsbGJhY2tSZW1vdmUgPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fcmVtb3ZlQmFja2Ryb3AoKVxuICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpICYmXG4gICAgICAgICAgICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSB7XG4gICAgICAgICAgJCh0aGlzLl9iYWNrZHJvcClcbiAgICAgICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY2FsbGJhY2tSZW1vdmUpXG4gICAgICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWxsYmFja1JlbW92ZSgpXG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjaygpXG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gdGhlIGZvbGxvd2luZyBtZXRob2RzIGFyZSB1c2VkIHRvIGhhbmRsZSBvdmVyZmxvd2luZyBtb2RhbHNcbiAgICAvLyB0b2RvIChmYXQpOiB0aGVzZSBzaG91bGQgcHJvYmFibHkgYmUgcmVmYWN0b3JlZCBvdXQgb2YgbW9kYWwuanNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBfaGFuZGxlVXBkYXRlKCkge1xuICAgICAgdGhpcy5fYWRqdXN0RGlhbG9nKClcbiAgICB9XG5cbiAgICBfYWRqdXN0RGlhbG9nKCkge1xuICAgICAgY29uc3QgaXNNb2RhbE92ZXJmbG93aW5nID1cbiAgICAgICAgdGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG5cbiAgICAgIGlmICghdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgJiYgaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSBgJHt0aGlzLl9zY3JvbGxiYXJXaWR0aH1weGBcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2lzQm9keU92ZXJmbG93aW5nICYmICFpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHt0aGlzLl9zY3JvbGxiYXJXaWR0aH1weGBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfcmVzZXRBZGp1c3RtZW50cygpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSAnJ1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJ1xuICAgIH1cblxuICAgIF9jaGVja1Njcm9sbGJhcigpIHtcbiAgICAgIHRoaXMuX2lzQm9keU92ZXJmbG93aW5nID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA8IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCA9IHRoaXMuX2dldFNjcm9sbGJhcldpZHRoKClcbiAgICB9XG5cbiAgICBfc2V0U2Nyb2xsYmFyKCkge1xuICAgICAgY29uc3QgYm9keVBhZGRpbmcgPSBwYXJzZUludChcbiAgICAgICAgJChTZWxlY3Rvci5GSVhFRF9DT05URU5UKS5jc3MoJ3BhZGRpbmctcmlnaHQnKSB8fCAwLFxuICAgICAgICAxMFxuICAgICAgKVxuXG4gICAgICB0aGlzLl9vcmlnaW5hbEJvZHlQYWRkaW5nID0gZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgfHwgJydcblxuICAgICAgaWYgKHRoaXMuX2lzQm9keU92ZXJmbG93aW5nKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID1cbiAgICAgICAgICBgJHtib2R5UGFkZGluZyArIHRoaXMuX3Njcm9sbGJhcldpZHRofXB4YFxuICAgICAgfVxuICAgIH1cblxuICAgIF9yZXNldFNjcm9sbGJhcigpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gdGhpcy5fb3JpZ2luYWxCb2R5UGFkZGluZ1xuICAgIH1cblxuICAgIF9nZXRTY3JvbGxiYXJXaWR0aCgpIHsgLy8gdGh4IGQud2Fsc2hcbiAgICAgIGNvbnN0IHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBzY3JvbGxEaXYuY2xhc3NOYW1lID0gQ2xhc3NOYW1lLlNDUk9MTEJBUl9NRUFTVVJFUlxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpXG4gICAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aFxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JvbGxEaXYpXG4gICAgICByZXR1cm4gc2Nyb2xsYmFyV2lkdGhcbiAgICB9XG5cblxuICAgIC8vIHN0YXRpY1xuXG4gICAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnLCByZWxhdGVkVGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGRhdGEgICAgICA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgICAgY29uc3QgX2NvbmZpZyA9ICQuZXh0ZW5kKFxuICAgICAgICAgIHt9LFxuICAgICAgICAgIE1vZGFsLkRlZmF1bHQsXG4gICAgICAgICAgJCh0aGlzKS5kYXRhKCksXG4gICAgICAgICAgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnXG4gICAgICAgIClcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IE1vZGFsKHRoaXMsIF9jb25maWcpXG4gICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgICB9XG4gICAgICAgICAgZGF0YVtjb25maWddKHJlbGF0ZWRUYXJnZXQpXG4gICAgICAgIH0gZWxzZSBpZiAoX2NvbmZpZy5zaG93KSB7XG4gICAgICAgICAgZGF0YS5zaG93KHJlbGF0ZWRUYXJnZXQpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gIH1cblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQoZG9jdW1lbnQpLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgbGV0IHRhcmdldFxuICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KHRoaXMpXG5cbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIHRhcmdldCA9ICQoc2VsZWN0b3IpWzBdXG4gICAgfVxuXG4gICAgY29uc3QgY29uZmlnID0gJCh0YXJnZXQpLmRhdGEoREFUQV9LRVkpID9cbiAgICAgICd0b2dnbGUnIDogJC5leHRlbmQoe30sICQodGFyZ2V0KS5kYXRhKCksICQodGhpcykuZGF0YSgpKVxuXG4gICAgaWYgKHRoaXMudGFnTmFtZSA9PT0gJ0EnIHx8IHRoaXMudGFnTmFtZSA9PT0gJ0FSRUEnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgY29uc3QgJHRhcmdldCA9ICQodGFyZ2V0KS5vbmUoRXZlbnQuU0hPVywgKHNob3dFdmVudCkgPT4ge1xuICAgICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICAvLyBvbmx5IHJlZ2lzdGVyIGZvY3VzIHJlc3RvcmVyIGlmIG1vZGFsIHdpbGwgYWN0dWFsbHkgZ2V0IHNob3duXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAkdGFyZ2V0Lm9uZShFdmVudC5ISURERU4sICgpID0+IHtcbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAgICAgICB0aGlzLmZvY3VzKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgTW9kYWwuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGFyZ2V0KSwgY29uZmlnLCB0aGlzKVxuICB9KVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBqUXVlcnlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQuZm5bTkFNRV0gICAgICAgICAgICAgPSBNb2RhbC5falF1ZXJ5SW50ZXJmYWNlXG4gICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBNb2RhbFxuICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgICByZXR1cm4gTW9kYWwuX2pRdWVyeUludGVyZmFjZVxuICB9XG5cbiAgcmV0dXJuIE1vZGFsXG5cbn0pKGpRdWVyeSlcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxcbiIsIi8qIGdsb2JhbCBUZXRoZXIgKi9cblxuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuMC4wLWFscGhhLjYpOiB0b29sdGlwLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBUb29sdGlwID0gKCgkKSA9PiB7XG5cbiAgLyoqXG4gICAqIENoZWNrIGZvciBUZXRoZXIgZGVwZW5kZW5jeVxuICAgKiBUZXRoZXIgLSBodHRwOi8vdGV0aGVyLmlvL1xuICAgKi9cbiAgaWYgKHR5cGVvZiBUZXRoZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdCb290c3RyYXAgdG9vbHRpcHMgcmVxdWlyZSBUZXRoZXIgKGh0dHA6Ly90ZXRoZXIuaW8vKScpXG4gIH1cblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29uc3RhbnRzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjb25zdCBOQU1FICAgICAgICAgICAgICAgID0gJ3Rvb2x0aXAnXG4gIGNvbnN0IFZFUlNJT04gICAgICAgICAgICAgPSAnNC4wLjAtYWxwaGEuNidcbiAgY29uc3QgREFUQV9LRVkgICAgICAgICAgICA9ICdicy50b29sdGlwJ1xuICBjb25zdCBFVkVOVF9LRVkgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbiAgY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUICA9ICQuZm5bTkFNRV1cbiAgY29uc3QgVFJBTlNJVElPTl9EVVJBVElPTiA9IDE1MFxuICBjb25zdCBDTEFTU19QUkVGSVggICAgICAgID0gJ2JzLXRldGhlcidcblxuICBjb25zdCBEZWZhdWx0ID0ge1xuICAgIGFuaW1hdGlvbiAgIDogdHJ1ZSxcbiAgICB0ZW1wbGF0ZSAgICA6ICc8ZGl2IGNsYXNzPVwidG9vbHRpcFwiIHJvbGU9XCJ0b29sdGlwXCI+J1xuICAgICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+PC9kaXY+JyxcbiAgICB0cmlnZ2VyICAgICA6ICdob3ZlciBmb2N1cycsXG4gICAgdGl0bGUgICAgICAgOiAnJyxcbiAgICBkZWxheSAgICAgICA6IDAsXG4gICAgaHRtbCAgICAgICAgOiBmYWxzZSxcbiAgICBzZWxlY3RvciAgICA6IGZhbHNlLFxuICAgIHBsYWNlbWVudCAgIDogJ3RvcCcsXG4gICAgb2Zmc2V0ICAgICAgOiAnMCAwJyxcbiAgICBjb25zdHJhaW50cyA6IFtdLFxuICAgIGNvbnRhaW5lciAgIDogZmFsc2VcbiAgfVxuXG4gIGNvbnN0IERlZmF1bHRUeXBlID0ge1xuICAgIGFuaW1hdGlvbiAgIDogJ2Jvb2xlYW4nLFxuICAgIHRlbXBsYXRlICAgIDogJ3N0cmluZycsXG4gICAgdGl0bGUgICAgICAgOiAnKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKScsXG4gICAgdHJpZ2dlciAgICAgOiAnc3RyaW5nJyxcbiAgICBkZWxheSAgICAgICA6ICcobnVtYmVyfG9iamVjdCknLFxuICAgIGh0bWwgICAgICAgIDogJ2Jvb2xlYW4nLFxuICAgIHNlbGVjdG9yICAgIDogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICAgIHBsYWNlbWVudCAgIDogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgICBvZmZzZXQgICAgICA6ICdzdHJpbmcnLFxuICAgIGNvbnN0cmFpbnRzIDogJ2FycmF5JyxcbiAgICBjb250YWluZXIgICA6ICcoc3RyaW5nfGVsZW1lbnR8Ym9vbGVhbiknXG4gIH1cblxuICBjb25zdCBBdHRhY2htZW50TWFwID0ge1xuICAgIFRPUCAgICA6ICdib3R0b20gY2VudGVyJyxcbiAgICBSSUdIVCAgOiAnbWlkZGxlIGxlZnQnLFxuICAgIEJPVFRPTSA6ICd0b3AgY2VudGVyJyxcbiAgICBMRUZUICAgOiAnbWlkZGxlIHJpZ2h0J1xuICB9XG5cbiAgY29uc3QgSG92ZXJTdGF0ZSA9IHtcbiAgICBTSE9XIDogJ3Nob3cnLFxuICAgIE9VVCAgOiAnb3V0J1xuICB9XG5cbiAgY29uc3QgRXZlbnQgPSB7XG4gICAgSElERSAgICAgICA6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgICBISURERU4gICAgIDogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gICAgU0hPVyAgICAgICA6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgICBTSE9XTiAgICAgIDogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgICBJTlNFUlRFRCAgIDogYGluc2VydGVkJHtFVkVOVF9LRVl9YCxcbiAgICBDTElDSyAgICAgIDogYGNsaWNrJHtFVkVOVF9LRVl9YCxcbiAgICBGT0NVU0lOICAgIDogYGZvY3VzaW4ke0VWRU5UX0tFWX1gLFxuICAgIEZPQ1VTT1VUICAgOiBgZm9jdXNvdXQke0VWRU5UX0tFWX1gLFxuICAgIE1PVVNFRU5URVIgOiBgbW91c2VlbnRlciR7RVZFTlRfS0VZfWAsXG4gICAgTU9VU0VMRUFWRSA6IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YFxuICB9XG5cbiAgY29uc3QgQ2xhc3NOYW1lID0ge1xuICAgIEZBREUgOiAnZmFkZScsXG4gICAgU0hPVyA6ICdzaG93J1xuICB9XG5cbiAgY29uc3QgU2VsZWN0b3IgPSB7XG4gICAgVE9PTFRJUCAgICAgICA6ICcudG9vbHRpcCcsXG4gICAgVE9PTFRJUF9JTk5FUiA6ICcudG9vbHRpcC1pbm5lcidcbiAgfVxuXG4gIGNvbnN0IFRldGhlckNsYXNzID0ge1xuICAgIGVsZW1lbnQgOiBmYWxzZSxcbiAgICBlbmFibGVkIDogZmFsc2VcbiAgfVxuXG4gIGNvbnN0IFRyaWdnZXIgPSB7XG4gICAgSE9WRVIgIDogJ2hvdmVyJyxcbiAgICBGT0NVUyAgOiAnZm9jdXMnLFxuICAgIENMSUNLICA6ICdjbGljaycsXG4gICAgTUFOVUFMIDogJ21hbnVhbCdcbiAgfVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjbGFzcyBUb29sdGlwIHtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuXG4gICAgICAvLyBwcml2YXRlXG4gICAgICB0aGlzLl9pc0VuYWJsZWQgICAgICAgID0gdHJ1ZVxuICAgICAgdGhpcy5fdGltZW91dCAgICAgICAgICA9IDBcbiAgICAgIHRoaXMuX2hvdmVyU3RhdGUgICAgICAgPSAnJ1xuICAgICAgdGhpcy5fYWN0aXZlVHJpZ2dlciAgICA9IHt9XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgID0gZmFsc2VcbiAgICAgIHRoaXMuX3RldGhlciAgICAgICAgICAgPSBudWxsXG5cbiAgICAgIC8vIHByb3RlY3RlZFxuICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgICAgdGhpcy5jb25maWcgID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICAgIHRoaXMudGlwICAgICA9IG51bGxcblxuICAgICAgdGhpcy5fc2V0TGlzdGVuZXJzKClcblxuICAgIH1cblxuXG4gICAgLy8gZ2V0dGVyc1xuXG4gICAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgICAgcmV0dXJuIFZFUlNJT05cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFxuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FXG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBEQVRBX0tFWSgpIHtcbiAgICAgIHJldHVybiBEQVRBX0tFWVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgRXZlbnQoKSB7XG4gICAgICByZXR1cm4gRXZlbnRcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IEVWRU5UX0tFWSgpIHtcbiAgICAgIHJldHVybiBFVkVOVF9LRVlcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gICAgfVxuXG5cbiAgICAvLyBwdWJsaWNcblxuICAgIGVuYWJsZSgpIHtcbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9IHRydWVcbiAgICB9XG5cbiAgICBkaXNhYmxlKCkge1xuICAgICAgdGhpcy5faXNFbmFibGVkID0gZmFsc2VcbiAgICB9XG5cbiAgICB0b2dnbGVFbmFibGVkKCkge1xuICAgICAgdGhpcy5faXNFbmFibGVkID0gIXRoaXMuX2lzRW5hYmxlZFxuICAgIH1cblxuICAgIHRvZ2dsZShldmVudCkge1xuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGRhdGFLZXkgPSB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZXG4gICAgICAgIGxldCBjb250ZXh0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXkpXG5cbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgY29udGV4dCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKFxuICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldCxcbiAgICAgICAgICAgIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKClcbiAgICAgICAgICApXG4gICAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXksIGNvbnRleHQpXG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyLmNsaWNrID0gIWNvbnRleHQuX2FjdGl2ZVRyaWdnZXIuY2xpY2tcblxuICAgICAgICBpZiAoY29udGV4dC5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICAgICAgY29udGV4dC5fZW50ZXIobnVsbCwgY29udGV4dClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250ZXh0Ll9sZWF2ZShudWxsLCBjb250ZXh0KVxuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgaWYgKCQodGhpcy5nZXRUaXBFbGVtZW50KCkpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSkge1xuICAgICAgICAgIHRoaXMuX2xlYXZlKG51bGwsIHRoaXMpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9lbnRlcihudWxsLCB0aGlzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcblxuICAgICAgdGhpcy5jbGVhbnVwVGV0aGVyKClcblxuICAgICAgJC5yZW1vdmVEYXRhKHRoaXMuZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSlcblxuICAgICAgJCh0aGlzLmVsZW1lbnQpLm9mZih0aGlzLmNvbnN0cnVjdG9yLkVWRU5UX0tFWSlcbiAgICAgICQodGhpcy5lbGVtZW50KS5jbG9zZXN0KCcubW9kYWwnKS5vZmYoJ2hpZGUuYnMubW9kYWwnKVxuXG4gICAgICBpZiAodGhpcy50aXApIHtcbiAgICAgICAgJCh0aGlzLnRpcCkucmVtb3ZlKClcbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNFbmFibGVkICAgICA9IG51bGxcbiAgICAgIHRoaXMuX3RpbWVvdXQgICAgICAgPSBudWxsXG4gICAgICB0aGlzLl9ob3ZlclN0YXRlICAgID0gbnVsbFxuICAgICAgdGhpcy5fYWN0aXZlVHJpZ2dlciA9IG51bGxcbiAgICAgIHRoaXMuX3RldGhlciAgICAgICAgPSBudWxsXG5cbiAgICAgIHRoaXMuZWxlbWVudCA9IG51bGxcbiAgICAgIHRoaXMuY29uZmlnICA9IG51bGxcbiAgICAgIHRoaXMudGlwICAgICA9IG51bGxcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgaWYgKCQodGhpcy5lbGVtZW50KS5jc3MoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHVzZSBzaG93IG9uIHZpc2libGUgZWxlbWVudHMnKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBzaG93RXZlbnQgPSAkLkV2ZW50KHRoaXMuY29uc3RydWN0b3IuRXZlbnQuU0hPVylcbiAgICAgIGlmICh0aGlzLmlzV2l0aENvbnRlbnQoKSAmJiB0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVG9vbHRpcCBpcyB0cmFuc2l0aW9uaW5nJylcbiAgICAgICAgfVxuICAgICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcihzaG93RXZlbnQpXG5cbiAgICAgICAgY29uc3QgaXNJblRoZURvbSA9ICQuY29udGFpbnMoXG4gICAgICAgICAgdGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgICAgIHRoaXMuZWxlbWVudFxuICAgICAgICApXG5cbiAgICAgICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCAhaXNJblRoZURvbSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGlwICAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgICAgICBjb25zdCB0aXBJZCA9IFV0aWwuZ2V0VUlEKHRoaXMuY29uc3RydWN0b3IuTkFNRSlcblxuICAgICAgICB0aXAuc2V0QXR0cmlidXRlKCdpZCcsIHRpcElkKVxuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgdGlwSWQpXG5cbiAgICAgICAgdGhpcy5zZXRDb250ZW50KClcblxuICAgICAgICBpZiAodGhpcy5jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgJCh0aXApLmFkZENsYXNzKENsYXNzTmFtZS5GQURFKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGxhY2VtZW50ICA9IHR5cGVvZiB0aGlzLmNvbmZpZy5wbGFjZW1lbnQgPT09ICdmdW5jdGlvbicgP1xuICAgICAgICAgIHRoaXMuY29uZmlnLnBsYWNlbWVudC5jYWxsKHRoaXMsIHRpcCwgdGhpcy5lbGVtZW50KSA6XG4gICAgICAgICAgdGhpcy5jb25maWcucGxhY2VtZW50XG5cbiAgICAgICAgY29uc3QgYXR0YWNobWVudCA9IHRoaXMuX2dldEF0dGFjaG1lbnQocGxhY2VtZW50KVxuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29uZmlnLmNvbnRhaW5lciA9PT0gZmFsc2UgPyBkb2N1bWVudC5ib2R5IDogJCh0aGlzLmNvbmZpZy5jb250YWluZXIpXG5cbiAgICAgICAgJCh0aXApXG4gICAgICAgICAgLmRhdGEodGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSwgdGhpcylcbiAgICAgICAgICAuYXBwZW5kVG8oY29udGFpbmVyKVxuXG4gICAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKHRoaXMuY29uc3RydWN0b3IuRXZlbnQuSU5TRVJURUQpXG5cbiAgICAgICAgdGhpcy5fdGV0aGVyID0gbmV3IFRldGhlcih7XG4gICAgICAgICAgYXR0YWNobWVudCxcbiAgICAgICAgICBlbGVtZW50ICAgICAgICAgOiB0aXAsXG4gICAgICAgICAgdGFyZ2V0ICAgICAgICAgIDogdGhpcy5lbGVtZW50LFxuICAgICAgICAgIGNsYXNzZXMgICAgICAgICA6IFRldGhlckNsYXNzLFxuICAgICAgICAgIGNsYXNzUHJlZml4ICAgICA6IENMQVNTX1BSRUZJWCxcbiAgICAgICAgICBvZmZzZXQgICAgICAgICAgOiB0aGlzLmNvbmZpZy5vZmZzZXQsXG4gICAgICAgICAgY29uc3RyYWludHMgICAgIDogdGhpcy5jb25maWcuY29uc3RyYWludHMsXG4gICAgICAgICAgYWRkVGFyZ2V0Q2xhc3NlczogZmFsc2VcbiAgICAgICAgfSlcblxuICAgICAgICBVdGlsLnJlZmxvdyh0aXApXG4gICAgICAgIHRoaXMuX3RldGhlci5wb3NpdGlvbigpXG5cbiAgICAgICAgJCh0aXApLmFkZENsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHByZXZIb3ZlclN0YXRlID0gdGhpcy5faG92ZXJTdGF0ZVxuICAgICAgICAgIHRoaXMuX2hvdmVyU3RhdGUgICA9IG51bGxcbiAgICAgICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuXG4gICAgICAgICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5TSE9XTilcblxuICAgICAgICAgIGlmIChwcmV2SG92ZXJTdGF0ZSA9PT0gSG92ZXJTdGF0ZS5PVVQpIHtcbiAgICAgICAgICAgIHRoaXMuX2xlYXZlKG51bGwsIHRoaXMpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFV0aWwuc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkgJiYgJCh0aGlzLnRpcCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSB7XG4gICAgICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZVxuICAgICAgICAgICQodGhpcy50aXApXG4gICAgICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKFRvb2x0aXAuX1RSQU5TSVRJT05fRFVSQVRJT04pXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb21wbGV0ZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaGlkZShjYWxsYmFjaykge1xuICAgICAgY29uc3QgdGlwICAgICAgID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICAgIGNvbnN0IGhpZGVFdmVudCA9ICQuRXZlbnQodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5ISURFKVxuICAgICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Rvb2x0aXAgaXMgdHJhbnNpdGlvbmluZycpXG4gICAgICB9XG4gICAgICBjb25zdCBjb21wbGV0ZSAgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9ob3ZlclN0YXRlICE9PSBIb3ZlclN0YXRlLlNIT1cgJiYgdGlwLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICB0aXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aXApXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JylcbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5ISURERU4pXG4gICAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgICAgIHRoaXMuY2xlYW51cFRldGhlcigpXG5cbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKGhpZGVFdmVudClcblxuICAgICAgaWYgKGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgJCh0aXApLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RyaWdnZXIuQ0xJQ0tdID0gZmFsc2VcbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVHJpZ2dlci5GT0NVU10gPSBmYWxzZVxuICAgICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUcmlnZ2VyLkhPVkVSXSA9IGZhbHNlXG5cbiAgICAgIGlmIChVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpICYmXG4gICAgICAgICAgJCh0aGlzLnRpcCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSB7XG4gICAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcbiAgICAgICAgJCh0aXApXG4gICAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSlcbiAgICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoVFJBTlNJVElPTl9EVVJBVElPTilcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcGxldGUoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9ob3ZlclN0YXRlID0gJydcbiAgICB9XG5cblxuICAgIC8vIHByb3RlY3RlZFxuXG4gICAgaXNXaXRoQ29udGVudCgpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuZ2V0VGl0bGUoKSlcbiAgICB9XG5cbiAgICBnZXRUaXBFbGVtZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMudGlwID0gdGhpcy50aXAgfHwgJCh0aGlzLmNvbmZpZy50ZW1wbGF0ZSlbMF1cbiAgICB9XG5cbiAgICBzZXRDb250ZW50KCkge1xuICAgICAgY29uc3QgJHRpcCA9ICQodGhpcy5nZXRUaXBFbGVtZW50KCkpXG5cbiAgICAgIHRoaXMuc2V0RWxlbWVudENvbnRlbnQoJHRpcC5maW5kKFNlbGVjdG9yLlRPT0xUSVBfSU5ORVIpLCB0aGlzLmdldFRpdGxlKCkpXG5cbiAgICAgICR0aXAucmVtb3ZlQ2xhc3MoYCR7Q2xhc3NOYW1lLkZBREV9ICR7Q2xhc3NOYW1lLlNIT1d9YClcblxuICAgICAgdGhpcy5jbGVhbnVwVGV0aGVyKClcbiAgICB9XG5cbiAgICBzZXRFbGVtZW50Q29udGVudCgkZWxlbWVudCwgY29udGVudCkge1xuICAgICAgY29uc3QgaHRtbCA9IHRoaXMuY29uZmlnLmh0bWxcbiAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ29iamVjdCcgJiYgKGNvbnRlbnQubm9kZVR5cGUgfHwgY29udGVudC5qcXVlcnkpKSB7XG4gICAgICAgIC8vIGNvbnRlbnQgaXMgYSBET00gbm9kZSBvciBhIGpRdWVyeVxuICAgICAgICBpZiAoaHRtbCkge1xuICAgICAgICAgIGlmICghJChjb250ZW50KS5wYXJlbnQoKS5pcygkZWxlbWVudCkpIHtcbiAgICAgICAgICAgICRlbGVtZW50LmVtcHR5KCkuYXBwZW5kKGNvbnRlbnQpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRlbGVtZW50LnRleHQoJChjb250ZW50KS50ZXh0KCkpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRlbGVtZW50W2h0bWwgPyAnaHRtbCcgOiAndGV4dCddKGNvbnRlbnQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VGl0bGUoKSB7XG4gICAgICBsZXQgdGl0bGUgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9yaWdpbmFsLXRpdGxlJylcblxuICAgICAgaWYgKCF0aXRsZSkge1xuICAgICAgICB0aXRsZSA9IHR5cGVvZiB0aGlzLmNvbmZpZy50aXRsZSA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgICAgICAgdGhpcy5jb25maWcudGl0bGUuY2FsbCh0aGlzLmVsZW1lbnQpIDpcbiAgICAgICAgICB0aGlzLmNvbmZpZy50aXRsZVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGl0bGVcbiAgICB9XG5cbiAgICBjbGVhbnVwVGV0aGVyKCkge1xuICAgICAgaWYgKHRoaXMuX3RldGhlcikge1xuICAgICAgICB0aGlzLl90ZXRoZXIuZGVzdHJveSgpXG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyBwcml2YXRlXG5cbiAgICBfZ2V0QXR0YWNobWVudChwbGFjZW1lbnQpIHtcbiAgICAgIHJldHVybiBBdHRhY2htZW50TWFwW3BsYWNlbWVudC50b1VwcGVyQ2FzZSgpXVxuICAgIH1cblxuICAgIF9zZXRMaXN0ZW5lcnMoKSB7XG4gICAgICBjb25zdCB0cmlnZ2VycyA9IHRoaXMuY29uZmlnLnRyaWdnZXIuc3BsaXQoJyAnKVxuXG4gICAgICB0cmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyKSA9PiB7XG4gICAgICAgIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgJCh0aGlzLmVsZW1lbnQpLm9uKFxuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5DTElDSyxcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnNlbGVjdG9yLFxuICAgICAgICAgICAgKGV2ZW50KSA9PiB0aGlzLnRvZ2dsZShldmVudClcbiAgICAgICAgICApXG5cbiAgICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyICE9PSBUcmlnZ2VyLk1BTlVBTCkge1xuICAgICAgICAgIGNvbnN0IGV2ZW50SW4gID0gdHJpZ2dlciA9PT0gVHJpZ2dlci5IT1ZFUiA/XG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50Lk1PVVNFRU5URVIgOlxuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5GT0NVU0lOXG4gICAgICAgICAgY29uc3QgZXZlbnRPdXQgPSB0cmlnZ2VyID09PSBUcmlnZ2VyLkhPVkVSID9cbiAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuTU9VU0VMRUFWRSA6XG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkZPQ1VTT1VUXG5cbiAgICAgICAgICAkKHRoaXMuZWxlbWVudClcbiAgICAgICAgICAgIC5vbihcbiAgICAgICAgICAgICAgZXZlbnRJbixcbiAgICAgICAgICAgICAgdGhpcy5jb25maWcuc2VsZWN0b3IsXG4gICAgICAgICAgICAgIChldmVudCkgPT4gdGhpcy5fZW50ZXIoZXZlbnQpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAub24oXG4gICAgICAgICAgICAgIGV2ZW50T3V0LFxuICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5zZWxlY3RvcixcbiAgICAgICAgICAgICAgKGV2ZW50KSA9PiB0aGlzLl9sZWF2ZShldmVudClcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgICQodGhpcy5lbGVtZW50KS5jbG9zZXN0KCcubW9kYWwnKS5vbihcbiAgICAgICAgICAnaGlkZS5icy5tb2RhbCcsXG4gICAgICAgICAgKCkgPT4gdGhpcy5oaWRlKClcbiAgICAgICAgKVxuICAgICAgfSlcblxuICAgICAgaWYgKHRoaXMuY29uZmlnLnNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gJC5leHRlbmQoe30sIHRoaXMuY29uZmlnLCB7XG4gICAgICAgICAgdHJpZ2dlciAgOiAnbWFudWFsJyxcbiAgICAgICAgICBzZWxlY3RvciA6ICcnXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9maXhUaXRsZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgX2ZpeFRpdGxlKCkge1xuICAgICAgY29uc3QgdGl0bGVUeXBlID0gdHlwZW9mIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnKVxuICAgICAgaWYgKHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJykgfHxcbiAgICAgICAgIHRpdGxlVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAnZGF0YS1vcmlnaW5hbC10aXRsZScsXG4gICAgICAgICAgdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgndGl0bGUnKSB8fCAnJ1xuICAgICAgICApXG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJycpXG4gICAgICB9XG4gICAgfVxuXG4gICAgX2VudGVyKGV2ZW50LCBjb250ZXh0KSB7XG4gICAgICBjb25zdCBkYXRhS2V5ID0gdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWVxuXG4gICAgICBjb250ZXh0ID0gY29udGV4dCB8fCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSlcblxuICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihcbiAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICAgIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKClcbiAgICAgICAgKVxuICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSwgY29udGV4dClcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbXG4gICAgICAgICAgZXZlbnQudHlwZSA9PT0gJ2ZvY3VzaW4nID8gVHJpZ2dlci5GT0NVUyA6IFRyaWdnZXIuSE9WRVJcbiAgICAgICAgXSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKCQoY29udGV4dC5nZXRUaXBFbGVtZW50KCkpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSB8fFxuICAgICAgICAgY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSG92ZXJTdGF0ZS5TSE9XKSB7XG4gICAgICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIb3ZlclN0YXRlLlNIT1dcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNsZWFyVGltZW91dChjb250ZXh0Ll90aW1lb3V0KVxuXG4gICAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSG92ZXJTdGF0ZS5TSE9XXG5cbiAgICAgIGlmICghY29udGV4dC5jb25maWcuZGVsYXkgfHwgIWNvbnRleHQuY29uZmlnLmRlbGF5LnNob3cpIHtcbiAgICAgICAgY29udGV4dC5zaG93KClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhvdmVyU3RhdGUuU0hPVykge1xuICAgICAgICAgIGNvbnRleHQuc2hvdygpXG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQuY29uZmlnLmRlbGF5LnNob3cpXG4gICAgfVxuXG4gICAgX2xlYXZlKGV2ZW50LCBjb250ZXh0KSB7XG4gICAgICBjb25zdCBkYXRhS2V5ID0gdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWVxuXG4gICAgICBjb250ZXh0ID0gY29udGV4dCB8fCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSlcblxuICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihcbiAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICAgIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKClcbiAgICAgICAgKVxuICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSwgY29udGV4dClcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbXG4gICAgICAgICAgZXZlbnQudHlwZSA9PT0gJ2ZvY3Vzb3V0JyA/IFRyaWdnZXIuRk9DVVMgOiBUcmlnZ2VyLkhPVkVSXG4gICAgICAgIF0gPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY29udGV4dC5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjbGVhclRpbWVvdXQoY29udGV4dC5fdGltZW91dClcblxuICAgICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhvdmVyU3RhdGUuT1VUXG5cbiAgICAgIGlmICghY29udGV4dC5jb25maWcuZGVsYXkgfHwgIWNvbnRleHQuY29uZmlnLmRlbGF5LmhpZGUpIHtcbiAgICAgICAgY29udGV4dC5oaWRlKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhvdmVyU3RhdGUuT1VUKSB7XG4gICAgICAgICAgY29udGV4dC5oaWRlKClcbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dC5jb25maWcuZGVsYXkuaGlkZSlcbiAgICB9XG5cbiAgICBfaXNXaXRoQWN0aXZlVHJpZ2dlcigpIHtcbiAgICAgIGZvciAoY29uc3QgdHJpZ2dlciBpbiB0aGlzLl9hY3RpdmVUcmlnZ2VyKSB7XG4gICAgICAgIGlmICh0aGlzLl9hY3RpdmVUcmlnZ2VyW3RyaWdnZXJdKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgY29uZmlnID0gJC5leHRlbmQoXG4gICAgICAgIHt9LFxuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHQsXG4gICAgICAgICQodGhpcy5lbGVtZW50KS5kYXRhKCksXG4gICAgICAgIGNvbmZpZ1xuICAgICAgKVxuXG4gICAgICBpZiAoY29uZmlnLmRlbGF5ICYmIHR5cGVvZiBjb25maWcuZGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGNvbmZpZy5kZWxheSA9IHtcbiAgICAgICAgICBzaG93IDogY29uZmlnLmRlbGF5LFxuICAgICAgICAgIGhpZGUgOiBjb25maWcuZGVsYXlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhcbiAgICAgICAgTkFNRSxcbiAgICAgICAgY29uZmlnLFxuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlXG4gICAgICApXG5cbiAgICAgIHJldHVybiBjb25maWdcbiAgICB9XG5cbiAgICBfZ2V0RGVsZWdhdGVDb25maWcoKSB7XG4gICAgICBjb25zdCBjb25maWcgPSB7fVxuXG4gICAgICBpZiAodGhpcy5jb25maWcpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5jb25maWcpIHtcbiAgICAgICAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0W2tleV0gIT09IHRoaXMuY29uZmlnW2tleV0pIHtcbiAgICAgICAgICAgIGNvbmZpZ1trZXldID0gdGhpcy5jb25maWdba2V5XVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29uZmlnXG4gICAgfVxuXG5cbiAgICAvLyBzdGF0aWNcblxuICAgIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBkYXRhICAgICAgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICAgIGNvbnN0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWdcblxuICAgICAgICBpZiAoIWRhdGEgJiYgL2Rpc3Bvc2V8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IFRvb2x0aXAodGhpcywgX2NvbmZpZylcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICAgIH1cbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICB9XG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJC5mbltOQU1FXSAgICAgICAgICAgICA9IFRvb2x0aXAuX2pRdWVyeUludGVyZmFjZVxuICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gVG9vbHRpcFxuICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgICByZXR1cm4gVG9vbHRpcC5falF1ZXJ5SW50ZXJmYWNlXG4gIH1cblxuICByZXR1cm4gVG9vbHRpcFxuXG59KShqUXVlcnkpXG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXBcbiIsImltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjAuMC1hbHBoYS42KTogZHJvcGRvd24uanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IERyb3Bkb3duID0gKCgkKSA9PiB7XG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgY29uc3QgTkFNRSAgICAgICAgICAgICAgICAgICAgID0gJ2Ryb3Bkb3duJ1xuICBjb25zdCBWRVJTSU9OICAgICAgICAgICAgICAgICAgPSAnNC4wLjAtYWxwaGEuNidcbiAgY29uc3QgREFUQV9LRVkgICAgICAgICAgICAgICAgID0gJ2JzLmRyb3Bkb3duJ1xuICBjb25zdCBFVkVOVF9LRVkgICAgICAgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuICBjb25zdCBEQVRBX0FQSV9LRVkgICAgICAgICAgICAgPSAnLmRhdGEtYXBpJ1xuICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgICAgICAgPSAkLmZuW05BTUVdXG4gIGNvbnN0IEVTQ0FQRV9LRVlDT0RFICAgICAgICAgICA9IDI3IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIEVzY2FwZSAoRXNjKSBrZXlcbiAgY29uc3QgQVJST1dfVVBfS0VZQ09ERSAgICAgICAgID0gMzggLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgdXAgYXJyb3cga2V5XG4gIGNvbnN0IEFSUk9XX0RPV05fS0VZQ09ERSAgICAgICA9IDQwIC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIGRvd24gYXJyb3cga2V5XG4gIGNvbnN0IFJJR0hUX01PVVNFX0JVVFRPTl9XSElDSCA9IDMgLy8gTW91c2VFdmVudC53aGljaCB2YWx1ZSBmb3IgdGhlIHJpZ2h0IGJ1dHRvbiAoYXNzdW1pbmcgYSByaWdodC1oYW5kZWQgbW91c2UpXG5cbiAgY29uc3QgRXZlbnQgPSB7XG4gICAgSElERSAgICAgICAgICAgICA6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgICBISURERU4gICAgICAgICAgIDogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gICAgU0hPVyAgICAgICAgICAgICA6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgICBTSE9XTiAgICAgICAgICAgIDogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgICBDTElDSyAgICAgICAgICAgIDogYGNsaWNrJHtFVkVOVF9LRVl9YCxcbiAgICBDTElDS19EQVRBX0FQSSAgIDogYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YCxcbiAgICBGT0NVU0lOX0RBVEFfQVBJIDogYGZvY3VzaW4ke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gLFxuICAgIEtFWURPV05fREFUQV9BUEkgOiBga2V5ZG93biR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbiAgfVxuXG4gIGNvbnN0IENsYXNzTmFtZSA9IHtcbiAgICBCQUNLRFJPUCA6ICdkcm9wZG93bi1iYWNrZHJvcCcsXG4gICAgRElTQUJMRUQgOiAnZGlzYWJsZWQnLFxuICAgIFNIT1cgICAgIDogJ3Nob3cnXG4gIH1cblxuICBjb25zdCBTZWxlY3RvciA9IHtcbiAgICBCQUNLRFJPUCAgICAgIDogJy5kcm9wZG93bi1iYWNrZHJvcCcsXG4gICAgREFUQV9UT0dHTEUgICA6ICdbZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXScsXG4gICAgRk9STV9DSElMRCAgICA6ICcuZHJvcGRvd24gZm9ybScsXG4gICAgUk9MRV9NRU5VICAgICA6ICdbcm9sZT1cIm1lbnVcIl0nLFxuICAgIFJPTEVfTElTVEJPWCAgOiAnW3JvbGU9XCJsaXN0Ym94XCJdJyxcbiAgICBOQVZCQVJfTkFWICAgIDogJy5uYXZiYXItbmF2JyxcbiAgICBWSVNJQkxFX0lURU1TIDogJ1tyb2xlPVwibWVudVwiXSBsaTpub3QoLmRpc2FibGVkKSBhLCAnXG4gICAgICAgICAgICAgICAgICArICdbcm9sZT1cImxpc3Rib3hcIl0gbGk6bm90KC5kaXNhYmxlZCkgYSdcbiAgfVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjbGFzcyBEcm9wZG93biB7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuXG4gICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG4gICAgfVxuXG5cbiAgICAvLyBnZXR0ZXJzXG5cbiAgICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgICByZXR1cm4gVkVSU0lPTlxuICAgIH1cblxuXG4gICAgLy8gcHVibGljXG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCAkKHRoaXMpLmhhc0NsYXNzKENsYXNzTmFtZS5ESVNBQkxFRCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcmVudCAgID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRoaXMpXG4gICAgICBjb25zdCBpc0FjdGl2ZSA9ICQocGFyZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgICAgRHJvcGRvd24uX2NsZWFyTWVudXMoKVxuXG4gICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiZcbiAgICAgICAgICEkKHBhcmVudCkuY2xvc2VzdChTZWxlY3Rvci5OQVZCQVJfTkFWKS5sZW5ndGgpIHtcblxuICAgICAgICAvLyBpZiBtb2JpbGUgd2UgdXNlIGEgYmFja2Ryb3AgYmVjYXVzZSBjbGljayBldmVudHMgZG9uJ3QgZGVsZWdhdGVcbiAgICAgICAgY29uc3QgZHJvcGRvd24gICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZHJvcGRvd24uY2xhc3NOYW1lID0gQ2xhc3NOYW1lLkJBQ0tEUk9QXG4gICAgICAgICQoZHJvcGRvd24pLmluc2VydEJlZm9yZSh0aGlzKVxuICAgICAgICAkKGRyb3Bkb3duKS5vbignY2xpY2snLCBEcm9wZG93bi5fY2xlYXJNZW51cylcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgICAgcmVsYXRlZFRhcmdldCA6IHRoaXNcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNob3dFdmVudCAgICAgPSAkLkV2ZW50KEV2ZW50LlNIT1csIHJlbGF0ZWRUYXJnZXQpXG5cbiAgICAgICQocGFyZW50KS50cmlnZ2VyKHNob3dFdmVudClcblxuICAgICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgdGhpcy5mb2N1cygpXG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG5cbiAgICAgICQocGFyZW50KS50b2dnbGVDbGFzcyhDbGFzc05hbWUuU0hPVylcbiAgICAgICQocGFyZW50KS50cmlnZ2VyKCQuRXZlbnQoRXZlbnQuU0hPV04sIHJlbGF0ZWRUYXJnZXQpKVxuXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBkaXNwb3NlKCkge1xuICAgICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRVZFTlRfS0VZKVxuICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgICB9XG5cblxuICAgIC8vIHByaXZhdGVcblxuICAgIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuQ0xJQ0ssIHRoaXMudG9nZ2xlKVxuICAgIH1cblxuXG4gICAgLy8gc3RhdGljXG5cbiAgICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IERyb3Bkb3duKHRoaXMpXG4gICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgICB9XG4gICAgICAgICAgZGF0YVtjb25maWddLmNhbGwodGhpcylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBzdGF0aWMgX2NsZWFyTWVudXMoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudCAmJiBldmVudC53aGljaCA9PT0gUklHSFRfTU9VU0VfQlVUVE9OX1dISUNIKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBiYWNrZHJvcCA9ICQoU2VsZWN0b3IuQkFDS0RST1ApWzBdXG4gICAgICBpZiAoYmFja2Ryb3ApIHtcbiAgICAgICAgYmFja2Ryb3AucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiYWNrZHJvcClcbiAgICAgIH1cblxuICAgICAgY29uc3QgdG9nZ2xlcyA9ICQubWFrZUFycmF5KCQoU2VsZWN0b3IuREFUQV9UT0dHTEUpKVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZ2dsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcGFyZW50ICAgICAgICA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0b2dnbGVzW2ldKVxuICAgICAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgICAgIHJlbGF0ZWRUYXJnZXQgOiB0b2dnbGVzW2ldXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoISQocGFyZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50ICYmIChldmVudC50eXBlID09PSAnY2xpY2snICYmXG4gICAgICAgICAgICAvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSB8fCBldmVudC50eXBlID09PSAnZm9jdXNpbicpXG4gICAgICAgICAgICAmJiAkLmNvbnRhaW5zKHBhcmVudCwgZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoaWRlRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkhJREUsIHJlbGF0ZWRUYXJnZXQpXG4gICAgICAgICQocGFyZW50KS50cmlnZ2VyKGhpZGVFdmVudClcbiAgICAgICAgaWYgKGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICB0b2dnbGVzW2ldLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXG5cbiAgICAgICAgJChwYXJlbnQpXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuICAgICAgICAgIC50cmlnZ2VyKCQuRXZlbnQoRXZlbnQuSElEREVOLCByZWxhdGVkVGFyZ2V0KSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgX2dldFBhcmVudEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIGxldCBwYXJlbnRcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpXG5cbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICBwYXJlbnQgPSAkKHNlbGVjdG9yKVswXVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyZW50IHx8IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgIH1cblxuICAgIHN0YXRpYyBfZGF0YUFwaUtleWRvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgICBpZiAoIS8oMzh8NDB8Mjd8MzIpLy50ZXN0KGV2ZW50LndoaWNoKSB8fFxuICAgICAgICAgL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8ICQodGhpcykuaGFzQ2xhc3MoQ2xhc3NOYW1lLkRJU0FCTEVEKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyZW50ICAgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodGhpcylcbiAgICAgIGNvbnN0IGlzQWN0aXZlID0gJChwYXJlbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgICBpZiAoIWlzQWN0aXZlICYmIGV2ZW50LndoaWNoICE9PSBFU0NBUEVfS0VZQ09ERSB8fFxuICAgICAgICAgICBpc0FjdGl2ZSAmJiBldmVudC53aGljaCA9PT0gRVNDQVBFX0tFWUNPREUpIHtcblxuICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEVTQ0FQRV9LRVlDT0RFKSB7XG4gICAgICAgICAgY29uc3QgdG9nZ2xlID0gJChwYXJlbnQpLmZpbmQoU2VsZWN0b3IuREFUQV9UT0dHTEUpWzBdXG4gICAgICAgICAgJCh0b2dnbGUpLnRyaWdnZXIoJ2ZvY3VzJylcbiAgICAgICAgfVxuXG4gICAgICAgICQodGhpcykudHJpZ2dlcignY2xpY2snKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgaXRlbXMgPSAkKHBhcmVudCkuZmluZChTZWxlY3Rvci5WSVNJQkxFX0lURU1TKS5nZXQoKVxuXG4gICAgICBpZiAoIWl0ZW1zLmxlbmd0aCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgbGV0IGluZGV4ID0gaXRlbXMuaW5kZXhPZihldmVudC50YXJnZXQpXG5cbiAgICAgIGlmIChldmVudC53aGljaCA9PT0gQVJST1dfVVBfS0VZQ09ERSAmJiBpbmRleCA+IDApIHsgLy8gdXBcbiAgICAgICAgaW5kZXgtLVxuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEFSUk9XX0RPV05fS0VZQ09ERSAmJiBpbmRleCA8IGl0ZW1zLmxlbmd0aCAtIDEpIHsgLy8gZG93blxuICAgICAgICBpbmRleCsrXG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgaW5kZXggPSAwXG4gICAgICB9XG5cbiAgICAgIGl0ZW1zW2luZGV4XS5mb2N1cygpXG4gICAgfVxuXG4gIH1cblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQoZG9jdW1lbnQpXG4gICAgLm9uKEV2ZW50LktFWURPV05fREFUQV9BUEksIFNlbGVjdG9yLkRBVEFfVE9HR0xFLCAgRHJvcGRvd24uX2RhdGFBcGlLZXlkb3duSGFuZGxlcilcbiAgICAub24oRXZlbnQuS0VZRE9XTl9EQVRBX0FQSSwgU2VsZWN0b3IuUk9MRV9NRU5VLCAgICBEcm9wZG93bi5fZGF0YUFwaUtleWRvd25IYW5kbGVyKVxuICAgIC5vbihFdmVudC5LRVlET1dOX0RBVEFfQVBJLCBTZWxlY3Rvci5ST0xFX0xJU1RCT1gsIERyb3Bkb3duLl9kYXRhQXBpS2V5ZG93bkhhbmRsZXIpXG4gICAgLm9uKGAke0V2ZW50LkNMSUNLX0RBVEFfQVBJfSAke0V2ZW50LkZPQ1VTSU5fREFUQV9BUEl9YCwgRHJvcGRvd24uX2NsZWFyTWVudXMpXG4gICAgLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1RPR0dMRSwgRHJvcGRvd24ucHJvdG90eXBlLnRvZ2dsZSlcbiAgICAub24oRXZlbnQuQ0xJQ0tfREFUQV9BUEksIFNlbGVjdG9yLkZPUk1fQ0hJTEQsIChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgfSlcblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogalF1ZXJ5XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkLmZuW05BTUVdICAgICAgICAgICAgID0gRHJvcGRvd24uX2pRdWVyeUludGVyZmFjZVxuICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gRHJvcGRvd25cbiAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ICA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgcmV0dXJuIERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2VcbiAgfVxuXG4gIHJldHVybiBEcm9wZG93blxuXG59KShqUXVlcnkpXG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duXG4iLCIvLyBhbGxvdyB0aGlzIHRvIGJlIHNldCBmcm9tIG91dHNpZGUgb2YgdGhpcyBzY3JpcHQsIGUuZy4gZnJvbSB0aGUgYmFja2VuZFxuY29uc3QgYXBpID0gd2luZG93WydoZWxsb3NwZWNpYWwnXSB8fCB7XG4gICdvcHRzJzoge1xuICAgICdkZW1vJzogZmFsc2VcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2luZG93WydoZWxsb3NwZWNpYWwnXSA9IGFwaTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgYXBpIGZyb20gJy4vYXBpJztcblxuY2xhc3MgQUJ0ZXN0IHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgLy8gYm9vdHN0cmFwXG4gICAgdGhpcy4kb25Jbml0KCk7XG4gICAgJChkb2N1bWVudCkucmVhZHkodGhpcy4kb25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0XG4gICAqL1xuICAkb25Jbml0ICgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnYXBwLmpzIGluaXRpYWxpemVkJyk7XG4gICAgdGhpcy50ZXN0cyA9IHtcbiAgICAgICdTdGFuZG91dHJlZ2lzdHJhdGlvbic6IHt9LFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogT24gZG9jdW1lbnQgcmVhZHlcbiAgICovXG4gICRvblJlYWR5ICgpIHtcbiAgICAvLyB0aGlzLkFCdGVzdDAxKCk7XG4gIH1cblxuICAvKipcbiAgICogUnVuIHRlc3RcbiAgICogQHBhcmFtICB7U3RyaW5nfSBpZFxuICAgKi9cbiAgcnVuIChpZCkge1xuICAgIGlmICh0aGlzLnRlc3RzW2lkXSkge1xuICAgICAgdGhpc1sndGVzdCcgKyBpZF0oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihgQUJ0ZXN0IHdpdGggaWQgJHtpZH0gZG9lcyBub3QgZXhpc3RzYCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRlc3QgMDE6IEFCdGVzdC0tc3RhbmRvdXRyZWdpc3RyYXRpb25cbiAgICovXG4gIHRlc3RTdGFuZG91dHJlZ2lzdHJhdGlvbiAoKSB7XG4gICAgY29uc3QgJGhvbWVwYWdlQ2FyZCA9ICQoJyNob21lcGFnZVJlZ2lzdGVyQ2FyZCcpO1xuICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuICAgIGlmICghJGhvbWVwYWdlQ2FyZC5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgJGJvZHkuYWRkQ2xhc3MoJ0FCdGVzdC0tc3RhbmRvdXRyZWdpc3RyYXRpb24nKTtcbiAgICAvLyBvbiBjbGljayBhbnl3aGVyZSByZW1vdmUgdGhlIGNsYXNzXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICRib2R5LnJlbW92ZUNsYXNzKCdBQnRlc3QtLXN0YW5kb3V0cmVnaXN0cmF0aW9uJyk7XG4gICAgfSwgdHJ1ZSk7XG4gIH1cbn1cblxuLy8gZXhwb3J0IHRvIHB1YmxpYyBBUElcbmFwaVsnQUJ0ZXN0J10gPSBuZXcgQUJ0ZXN0KCk7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IGFwaSBmcm9tICcuL2FwaSc7XG5cbmNsYXNzIENvb2tpZUFubm91bmNlbWVudCB7XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIC8vIGJvb3RzdHJhcFxuICAgIHRoaXMuJG9uSW5pdCgpO1xuICAgICQoZG9jdW1lbnQpLnJlYWR5KHRoaXMuJG9uUmVhZHkuYmluZCh0aGlzKSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdFxuICAgKi9cbiAgJG9uSW5pdCAoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2FwcC5qcyBpbml0aWFsaXplZCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIGRvY3VtZW50IHJlYWR5XG4gICAqL1xuICAkb25SZWFkeSAoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICBjb25zdCAkY29udGFpbmVyID0gJCgnI2pzLWNvb2tpZWFubm91bmNlbWVudCcpO1xuICAgIGNvbnN0ICRkaXNtaXNzVHJpZ2dlcnMgPSAkKCcuanMtY29va2llYW5ub3VuY2VtZW50LWRpc21pc3MnKTtcblxuICAgIGlmICghJGNvbnRhaW5lci5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjb29raWVWYWx1ZSA9IHRoaXMuX3JlYWRDb29raWUoJ2Nvb2tpZWFubm91bmNlbWVudCcpO1xuXG4gICAgaWYgKGNvb2tpZVZhbHVlICE9PSAnc2hvd24nKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGNvbnRhaW5lci5hZGRDbGFzcygnaW4nKTtcbiAgICAgIH0sIDUwMCk7XG5cbiAgICAgICRkaXNtaXNzVHJpZ2dlcnMub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAkY29udGFpbmVyLnJlbW92ZUNsYXNzKCdpbicpO1xuICAgICAgICB0aGlzLl9jcmVhdGVDb29raWUoJ2Nvb2tpZWFubm91bmNlbWVudCcsICdzaG93bicsIDM2NSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBjb29raWVcbiAgICogQHNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjQxMDM1OTYvMTkzODk3MFxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtICB7TWl4ZWR9ICB2YWx1ZVxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGRheXNcbiAgICovXG4gIF9jcmVhdGVDb29raWUgKG5hbWUsIHZhbHVlLCBkYXlzKSB7XG4gICAgdmFyIGV4cGlyZXMgPSBcIlwiO1xuICAgIGlmIChkYXlzKSB7XG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXMqMjQqNjAqNjAqMTAwMCkpO1xuICAgICAgICBleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyBkYXRlLnRvVVRDU3RyaW5nKCk7XG4gICAgfVxuICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArIHZhbHVlICsgZXhwaXJlcyArIFwiOyBwYXRoPS9cIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkIGNvb2tpZVxuICAgKiBAc2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNDEwMzU5Ni8xOTM4OTcwXG4gICAqXG4gICAqIEBwYXJhbSAge1N0cmluZ30gbmFtZVxuICAgKiBAcmV0dXJuIHs/U3RyaW5nfVxuICAgKi9cbiAgX3JlYWRDb29raWUgKG5hbWUpIHtcbiAgICB2YXIgbmFtZUVRID0gbmFtZSArIFwiPVwiO1xuICAgIHZhciBjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xuICAgIGZvcih2YXIgaT0wO2kgPCBjYS5sZW5ndGg7aSsrKSB7XG4gICAgICAgIHZhciBjID0gY2FbaV07XG4gICAgICAgIHdoaWxlIChjLmNoYXJBdCgwKT09JyAnKSBjID0gYy5zdWJzdHJpbmcoMSxjLmxlbmd0aCk7XG4gICAgICAgIGlmIChjLmluZGV4T2YobmFtZUVRKSA9PSAwKSByZXR1cm4gYy5zdWJzdHJpbmcobmFtZUVRLmxlbmd0aCxjLmxlbmd0aCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgX2VyYXNlQ29va2llIChuYW1lKSB7XG4gICAgdGhpcy5fY3JlYXRlQ29va2llKG5hbWUsXCJcIiwtMSk7XG4gIH1cbn1cblxubmV3IENvb2tpZUFubm91bmNlbWVudCgpO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBhcGkgZnJvbSAnLi9hcGknO1xuXG5jbGFzcyBOYXNrIHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy4kb25Jbml0KCk7XG5cbiAgICAvLyBib290c3RyYXBcbiAgICAkKGRvY3VtZW50KS5yZWFkeSh0aGlzLiRvblJlYWR5LmJpbmQodGhpcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRcbiAgICovXG4gICRvbkluaXQgKCkge1xuICAgIC8vIHRyeSB0byBpbW1lZGlhdGVseSBoaWRlIHRoZSBjb250YWluZXIgdG8gZG9uJ3QgY2F1c2UgYSBmbGFzaCBvZiBcInVuc3R5bGVkXCIgY29udGVudFxuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb250YWluZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmFzaycpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250YWluZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnRhaW5lcnNbaV0uc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICB9XG4gICAgfSBjYXRjaChlKSB7fVxuXG4gICAgdGhpcy5fYnJvd3NlciA9IHRoaXMuX2dldEJyb3dzZXIoKTtcbiAgICB0aGlzLl9tb2JpbGVPUyA9IHRoaXMuX2dldE1vYmlsZU9TKCk7XG4gICAgdGhpcy5fcGVybWlzc2lvbiA9IHRoaXMuX2dldFBlcm1pc3Npb24oKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGBOYXNrLT4kb25Jbml0OiBtb2JpbGUgb3MgaXMgJHt0aGlzLl9tb2JpbGVPU30gYnJvd3NlciBkZXRlY3RlZCBpcyAke3RoaXMuX2Jyb3dzZXJ9LCBwZXJtaXNzaW9uIGlzICR7dGhpcy5fcGVybWlzc2lvbn1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBkb2N1bWVudCByZWFkeVxuICAgKi9cbiAgJG9uUmVhZHkgKCkge1xuICAgIGNvbnN0ICRjb250YWluZXIgPSAkKCcubmFzaycpO1xuXG4gICAgaWYgKCEkY29udGFpbmVyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX18kY29udGFpbmVyID0gJGNvbnRhaW5lcjtcblxuICAgIGNvbnN0IHZpZXcgPSB0aGlzLl9nZXRWaWV3TmFtZSgpO1xuICAgIHRoaXMuc2V0Vmlldyh2aWV3KTtcblxuICAgIGlmICh2aWV3ID09PSAncmVxdWVzdCcgfHwgdmlldyA9PT0gJ3JlcXVlc3QtbW9iaWxlJykge1xuICAgICAgdGhpcy5hc2soKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldEVudih0aGlzLl9nZXRFbnZOYW1lKCkpO1xuXG4gICAgdGhpcy5fXyRjb250YWluZXIuYWRkQ2xhc3MoJ25hc2stLXJlYWR5JykuY3NzKCdvcGFjaXR5JywgMSk7XG5cbiAgICAvLyBAQGRpc2FibGVkIGZvciBub3csIGJlY2F1c2UgaXQgd291bGRuJ3Qgd29yayBhbnl3YXkuLi5cbiAgICAvLyBAc2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zMTg2ODcwOC8xOTM4OTcwXG4gICAgLy8gJGNvbnRhaW5lci5maW5kKCcubmFza19fYXNrYnV0dG9uJykuY2xpY2soKCkgPT4ge1xuICAgIC8vICAgdGhpcy5hc2soKVxuICAgIC8vIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBicm93c2VyXG4gICAqXG4gICAqIGJhc2VkIG9uIEBsaW5rIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS85ODUxNzY5LzE5Mzg5NzBcbiAgICpcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgX2dldEJyb3dzZXIgKCkge1xuICAgIC8vIE9wZXJhIDguMCtcbiAgICBpZiAoKCEhd2luZG93Lm9wciAmJiAhIW9wci5hZGRvbnMpIHx8ICEhd2luZG93Lm9wZXJhIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignIE9QUi8nKSA+PSAwKSB7XG4gICAgICByZXR1cm4gJ29wZXJhJztcbiAgICB9XG5cbiAgICAvLyBGaXJlZm94IDEuMCtcbiAgICBpZiAodHlwZW9mIEluc3RhbGxUcmlnZ2VyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuICdmaXJlZm94JztcbiAgICB9XG5cbiAgICAvLyBTYWZhcmkgMy4wKyBcIltvYmplY3QgSFRNTEVsZW1lbnRDb25zdHJ1Y3Rvcl1cIlxuICAgIGlmICgvY29uc3RydWN0b3IvaS50ZXN0KHdpbmRvdy5IVE1MRWxlbWVudCkgfHwgKGZ1bmN0aW9uIChwKSB7IHJldHVybiBwLnRvU3RyaW5nKCkgPT09IFwiW29iamVjdCBTYWZhcmlSZW1vdGVOb3RpZmljYXRpb25dXCI7IH0pKCF3aW5kb3dbJ3NhZmFyaSddIHx8ICh0eXBlb2Ygc2FmYXJpICE9PSAndW5kZWZpbmVkJyAmJiBzYWZhcmkucHVzaE5vdGlmaWNhdGlvbikpKSB7XG4gICAgICByZXR1cm4gJ3NhZmFyaSc7XG4gICAgfVxuXG4gICAgLy8gSW50ZXJuZXQgRXhwbG9yZXIgNi0xMVxuICAgIGlmICgvKkBjY19vbiFAKi9mYWxzZSB8fCAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSkge1xuICAgICAgcmV0dXJuICdpZSc7XG4gICAgfVxuXG4gICAgLy8gRWRnZSAyMCtcbiAgICBpZiAoISF3aW5kb3cuU3R5bGVNZWRpYSkge1xuICAgICAgcmV0dXJuICdlZGdlJztcbiAgICB9XG5cbiAgICAvLyBDaHJvbWUgMStcbiAgICBpZiAoISF3aW5kb3cuY2hyb21lICYmICEhd2luZG93LmNocm9tZS53ZWJzdG9yZSkge1xuICAgICAgcmV0dXJuICdjaHJvbWUnO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgdGhlIG1vYmlsZSBvcGVyYXRpbmcgc3lzdGVtLlxuICAgKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgb25lIG9mICdpb3MnLCAnQW5kcm9pZCcsICdXaW5kb3dzIFBob25lJywgb3IgZmFsc2UuXG4gICAqXG4gICAqIEBsaW5rIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMTc0MjEwNy8xOTM4OTcwXG4gICAqXG4gICAqIEByZXR1cm5zIHtTdHJpbmd8Ym9vbGVhbn0gJ3dpbmRvd3N8YW5kcm9pZHxpb3N8ZmFsc2UnXG4gICAqL1xuICBfZ2V0TW9iaWxlT1MgKCkge1xuICAgIHZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93Lm9wZXJhO1xuXG4gICAgLy8gV2luZG93cyBQaG9uZSBtdXN0IGNvbWUgZmlyc3QgYmVjYXVzZSBpdHMgVUEgYWxzbyBjb250YWlucyBcIkFuZHJvaWRcIlxuICAgIGlmICgvd2luZG93cyBwaG9uZS9pLnRlc3QodXNlckFnZW50KSkge1xuICAgICAgcmV0dXJuICd3aW5kb3dzJztcbiAgICB9XG5cbiAgICBpZiAoL2FuZHJvaWQvaS50ZXN0KHVzZXJBZ2VudCkpIHtcbiAgICAgIHJldHVybiAnYW5kcm9pZCc7XG4gICAgfVxuXG4gICAgLy8gaU9TIGRldGVjdGlvbiBmcm9tOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS85MDM5ODg1LzE3NzcxMFxuICAgIGlmICgvaVBhZHxpUGhvbmV8aVBvZC8udGVzdCh1c2VyQWdlbnQpICYmICF3aW5kb3cuTVNTdHJlYW0pIHtcbiAgICAgIHJldHVybiAnaW9zJztcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG5vdGlmaWNhdGlvbnMgcGVybWlzc2lvbnNcbiAgICpcbiAgICogQHJldHVybiB7U3RyaW5nfSAnZGVuaWVkfGdyYW50ZWR8ZGVmYXVsdHx1bnN1cHBvcnRlZCdcbiAgICovXG4gIF9nZXRQZXJtaXNzaW9uICgpIHtcbiAgICBpZiAoTm90aWZpY2F0aW9uICYmIE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uKSB7XG4gICAgICByZXR1cm4gTm90aWZpY2F0aW9uLnBlcm1pc3Npb247XG4gICAgfVxuICAgIHJldHVybiAndW5zdXBwb3J0ZWQnO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB2aWV3IG5hbWVcbiAgICpcbiAgICogVmlld3M6XG4gICAqICdncmFudGVkJzogTm90aWZpY2F0aW9uIGFyZSBncmFudGVkIGFscmVhZHksIHdlIGRvbid0IGFzayBhbnl0aGluZ1xuICAgKiAncmVxdWVzdCc6IE9uIEFuZHJvaWQgbm90aWZpY2F0aW9ucyBhcmUgZGVuaWVkIGJ5IHRoZSB1c2VyLCB3ZSBhc2sgdG8gZW5hYmxlIHRoZW1cbiAgICogJ3JlcXVlc3QtbW9iaWxlJzogT24gQW5kcm9pZCBub3RpZmljYXRpb25zIGFyZSBkZW5pZWQgYnkgdGhlIHVzZXIsIHdlIGFzayB0byBlbmFibGUgdGhlbVxuICAgKiAnYWxsb3dpbmcnOiBPbiBkZXNrdG9wIG5vdGlmaWNhdGlvbnMgYXJlIGRlbmllZCBieSB0aGUgdXNlciwgdGhlIGFsbG93IGJveCBpcyBvcGVuZWRcbiAgICogJ2FsbG93aW5nLW1vYmlsZSc6IE9uIEFuZHJvaWQgbm90aWZpY2F0aW9ucyBhcmUgZGVuaWVkIGJ5IHRoZSB1c2VyLCB0aGUgYWxsb3cgYm94IGlzIG9wZW5lZFxuICAgKiAndGhhbmtzJzogT24gZGVza3RvcCBub3RpZmljYXRpb24gcGVybWlzc2lvbiBoYXMganVzdCBiZWVuIGdyYW50ZWQgYnkgdGhlIHVzZXJcbiAgICogJ3RoYW5rcy1tb2JpbGUnOiBPbiBBbmRyb2lkIG5vdGlmaWNhdGlvbiBwZXJtaXNzaW9uIGhhcyBqdXN0IGJlZW4gZ3JhbnRlZCBieSB0aGUgdXNlclxuICAgKiAnb3RoZXInOiBEZXNrdG9wIGJyb3dzZXIgb3RoZXIgdGhhbiBDaHJvbWUuIEZpcmVmb3gsIE9wZXJhLCBubyBub3RpZmljYXRpb25zIHN5c3RlbVxuICAgKiAnb3RoZXItbW9iaWxlJzogTW9iaWxlIGJyb3dzZXIgb3RoZXIgdGhhbiBBbmRyb2lkLCBubyBub3RpZmljYXRpb25zIHN5c3RlbVxuICAgKlxuICAgKiBAcGFyYW0gIHs/U3RyaW5nfSB2aWV3RmFtaWx5XG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gICBfZ2V0Vmlld05hbWUgKHZpZXdGYW1pbHkpIHtcbiAgICBpZiAodmlld0ZhbWlseSA9PT0gJ2FsbG93aW5nJykge1xuICAgICAgcmV0dXJuIHRoaXMuX21vYmlsZU9TID8gJ2FsbG93aW5nLW1vYmlsZScgOiAnYWxsb3dpbmcnO1xuICAgIH1cbiAgICBlbHNlIGlmICh2aWV3RmFtaWx5ID09PSAndGhhbmtzJykge1xuICAgICAgcmV0dXJuIHRoaXMuX21vYmlsZU9TID8gJ3RoYW5rcy1tb2JpbGUnIDogJ3RoYW5rcyc7XG4gICAgfVxuXG4gICAgLy8gaWYgKFsnY2hyb21lJywgJ2ZpcmVmb3gnLCAnb3BlcmEnXS5pbmRleE9mKHRoaXMuX2Jyb3dzZXIpID09PSAtMSkge1xuICAgIC8vIH1cblxuICAgIGlmICh0aGlzLl9wZXJtaXNzaW9uID09PSAndW5zdXBwb3J0ZWQnKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbW9iaWxlT1MgPyAnb3RoZXItbW9iaWxlJyA6ICdvdGhlcic7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuX3Blcm1pc3Npb24gPT09ICdkZWZhdWx0Jykge1xuICAgICAgcmV0dXJuIHRoaXMuX21vYmlsZU9TID8gJ2FsbG93aW5nLW1vYmlsZScgOiAnYWxsb3cnO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLl9wZXJtaXNzaW9uID09PSAnZGVuaWVkJykge1xuICAgICAgcmV0dXJuIHRoaXMuX21vYmlsZU9TID8gJ3JlcXVlc3QtbW9iaWxlJyA6ICdyZXF1ZXN0JztcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5fcGVybWlzc2lvbiA9PT0gJ2dyYW50ZWQnKSB7XG4gICAgICByZXR1cm4gJ2dyYW50ZWQnO1xuICAgIH1cblxuICAgIHJldHVybiAnbm9uZSc7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGVudiBuYW1lXG4gICAqXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIF9nZXRFbnZOYW1lICgpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9iaWxlT1MgPT09ICdhbmRyb2lkJyA/ICdhbmRyb2lkJyA6IHRoaXMuX2Jyb3dzZXI7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHZpZXcgb24gdGhlIFVJXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQHBhcmFtIHtTdHJpbmd9IHZpZXdcbiAgICovXG4gIHNldFZpZXcgKHZpZXcpIHtcbiAgICB0aGlzLl9fJGNvbnRhaW5lci5hdHRyKCdkYXRhLW5hc2stdmlldy1pcycsIHZpZXcpO1xuICAgIGNvbnNvbGUubG9nKGBOYXNrOiBzZXQgdmlldyBuYW1lIHRvIFwiJHt2aWV3fVwiYCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGVudmlyb25tZW50IG9uIHRoZSBVSVxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBlbnZcbiAgICovXG4gIHNldEVudiAoZW52KSB7XG4gICAgdGhpcy5fXyRjb250YWluZXIuYXR0cignZGF0YS1uYXNrLWVudi1pcycsIGVudik7XG4gICAgY29uc29sZS5sb2coYE5hc2s6IHNldCBlbnYgdG8gXCIke2Vudn1cImApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEFzayBmb3IgcGVybWlzc2lvblxuICAgKlxuICAgKiBAcGFyYW0gez9GdW5jdGlvbn0gY2FsbGJhY2tcbiAgICogQHB1YmxpY1xuICAgKlxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKi9cbiAgYXNrIChjYWxsYmFjaykge1xuICAgIGlmICh0aGlzLl9wZXJtaXNzaW9uID09PSAndW5zdXBwb3J0ZWQnKSB7XG4gICAgICBjb25zb2xlLmxvZyhgTmFzazogTm90aWZpY2F0aW9uIGFyZSBub3Qgc3VwcG9ydGVkYCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGBOYXNrOiBhc2tpbmcgZm9yIHBlcm1pc3Npb25gKTtcblxuICAgIHRoaXMuc2V0Vmlldyh0aGlzLl9nZXRWaWV3TmFtZSgnYWxsb3dpbmcnKSk7XG5cbiAgICBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKHBlcm1pc3Npb24pID0+IHtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayhwZXJtaXNzaW9uKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBlcm1pc3Npb24gPT09ICdncmFudGVkJykge1xuICAgICAgICAvLyBjb25zdCBub3RpZmljYXRpb24gPSBuZXcgTm90aWZpY2F0aW9uKCdUaGFua3MnKTtcbiAgICAgICAgdGhpcy5zZXRWaWV3KHRoaXMuX2dldFZpZXdOYW1lKCd0aGFua3MnKSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChwZXJtaXNzaW9uID09PSAnZGVuaWVkJykge1xuICAgICAgICB0aGlzLnNldFZpZXcodGhpcy5fZ2V0Vmlld05hbWUoJ3JlcXVlc3QnKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG4vLyBleHBvcnQgdG8gcHVibGljIEFQSVxuYXBpWyduYXNrJ10gPSBuZXcgTmFzaygpO1xuXG5leHBvcnQgZGVmYXVsdCBOYXNrO1xuIiwiY2xhc3MgRmFxIHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICAvLyBib290c3RyYXBcbiAgICB0aGlzLiRvbkluaXQoKTtcbiAgICAkKGRvY3VtZW50KS5yZWFkeSh0aGlzLiRvblJlYWR5LmJpbmQodGhpcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRcbiAgICovXG4gICRvbkluaXQgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIGRvY3VtZW50IHJlYWR5XG4gICAqL1xuICAkb25SZWFkeSAoKSB7XG4gICAgaWYgKCEkKCcjaHNGYXEnKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCAkZXhwYW5kYWJsZXMgPSAkKCcuZXhwYW5kYWJsZV9fYm9keScpO1xuICAgIGNvbnN0ICRub1Jlc3VsdHMgPSAkKCcuaHNGYXFfX25vcmVzdWx0cycpO1xuICAgIGNvbnN0IGhpZ2hsaWdodE9wdHMgPSB7IGNsYXNzTmFtZTogJ2hzRmFxX19tYXJrJyB9O1xuXG4gICAgJGV4cGFuZGFibGVzLmNvbGxhcHNlKHtcbiAgICAgIHRvZ2dsZTogZmFsc2VcbiAgICB9KTtcblxuICAgICQoJyNoc0ZhcV9maWx0ZXJMaXN0JykubGl2ZUZpbHRlcignI2hzRmFxX2ZpbHRlcklucHV0JywgJy5leHBhbmRhYmxlJywge1xuICAgICAgYWZ0ZXI6IGZ1bmN0aW9uIChjb250YWlucywgY29udGFpbnNOb3QpIHtcbiAgICAgICAgY29uc3QgcXVlcnkgPSB0aGlzLnZhbHVlO1xuXG4gICAgICAgIGlmICghY29udGFpbnMubGVuZ3RoKSB7XG4gICAgICAgICAgJGV4cGFuZGFibGVzLnBhcmVudCgpLnBhcmVudCgpLnByZXYoKS5oaWRlKCk7XG4gICAgICAgICAgJG5vUmVzdWx0cy5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJG5vUmVzdWx0cy5oaWRlKCk7XG4gICAgICAgICAgJGV4cGFuZGFibGVzLnBhcmVudCgpLnBhcmVudCgpLnByZXYoKS5zaG93KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXF1ZXJ5KSB7XG4gICAgICAgICAgLy8gY29udGFpbnMuY29sbGFwc2UoJ2hpZGUnKS51bmhpZ2hsaWdodChoaWdobGlnaHRPcHRzKTtcbiAgICAgICAgICAvLyBjb250YWluc05vdC5jb2xsYXBzZSgnaGlkZScpLnVuaGlnaGxpZ2h0KGhpZ2hsaWdodE9wdHMpO1xuICAgICAgICAgICRleHBhbmRhYmxlcy5jb2xsYXBzZSgnaGlkZScpLnVuaGlnaGxpZ2h0KGhpZ2hsaWdodE9wdHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb250YWlucy5maW5kKCcuZXhwYW5kYWJsZV9fYm9keScpLmNvbGxhcHNlKCdzaG93JylcbiAgICAgICAgICAgICAgLnVuaGlnaGxpZ2h0KGhpZ2hsaWdodE9wdHMpXG4gICAgICAgICAgICAgIC5oaWdobGlnaHQocXVlcnksIGhpZ2hsaWdodE9wdHMpO1xuXG4gICAgICAgICAgICBjb250YWluc05vdC5maW5kKCcuZXhwYW5kYWJsZV9fYm9keScpLmNvbGxhcHNlKCdoaWRlJylcbiAgICAgICAgICAgICAgLnVuaGlnaGxpZ2h0KGhpZ2hsaWdodE9wdHMpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJy5oc0ZhcV9fc2VhcmNoJykub24oJ3N1Ym1pdCcsIHRoaXMuX29uU2VhcmNoU3VibWl0KTtcbiAgICAkKCcjaHNGYXFfZmlsdGVyU3VibWl0Jykub24oJ2NsaWNrJywgdGhpcy5fb25TZWFyY2hTdWJtaXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIHNlYXJjaCBzdWJtaXRcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBlIEV2ZW50XG4gICAqL1xuICBfb25TZWFyY2hTdWJtaXQgKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgNjAwKSB7XG4gICAgICAvLyAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAvLyAgIHNjcm9sbFRvcDogJCgnLmhzRmFxX19tYXJrJykuZmlyc3QoKS5vZmZzZXQoKS50b3AgLSA3MFxuICAgICAgLy8gfSwgMzAwKTtcbiAgICAgICQoJ2h0bWwsIGJvZHknKS5zY3JvbGxUb3AoJCgnLmhzRmFxX19tYXJrJykuZmlyc3QoKS5vZmZzZXQoKS50b3AgLSA3MCk7XG4gICAgfVxuICB9XG59XG5cbm5ldyBGYXEoKTtcbiIsImltcG9ydCBhcGkgZnJvbSAnLi9hcGknO1xuXG4vKipcbiAqIEdldCBsYW5nIGNvZGUgZnJvbSB1cmxcbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldExhbmdGcm9tVXJsICgpIHtcbiAgY29uc3QgdXJsUGFydHMgPSBsb2NhdGlvbi5ocmVmLnNwbGl0KCcvJyk7XG4gIGNvbnN0IGxhbmdNYXAgPSB3aW5kb3cuaTE4bjtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHVybFBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHVybFBhcnQgPSB1cmxQYXJ0c1tpXTtcbiAgICBpZiAobGFuZ01hcFt1cmxQYXJ0XSAmJiB1cmxQYXJ0ICE9PSAnY3VycmVudCcpIHtcbiAgICAgIHJldHVybiB1cmxQYXJ0O1xuICAgIH1cbiAgfVxuICByZXR1cm4gJ2VuJzsgLy8gZGVmYXVsdCBsYW5ndWFnZVxufVxuXG4vKipcbiAqIEdldCBpMThuIHN0cmluZyBieSBpdHMgaWRcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICBpZFxuICogQHBhcmFtICB7P1N0cmluZ30gZ2l2ZW5MYW5nXG4gKiBAcGFyYW0gIHs/U3RyaW5nfSBmYWxsYmFja1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0STE4biAoaWQsIGdpdmVuTGFuZywgZmFsbGJhY2spIHtcbiAgY29uc3QgaTE4biA9IHdpbmRvdy5pMThuO1xuICBjb25zdCBsYW5nID0gZ2l2ZW5MYW5nIHx8IGkxOG5bJ2N1cnJlbnQnXSB8fCBnZXRMYW5nRnJvbVVybCgpO1xuICBjb25zdCBsYW5nU3RyaW5ncyA9IGkxOG5bbGFuZ107XG4gIHJldHVybiBsYW5nU3RyaW5nc1tpZF0gfHwgZmFsbGJhY2sgfHwgJyc7XG59XG5cbmFwaVsnZ2V0STE4biddID0gZ2V0STE4bjtcbiIsImltcG9ydCBhcGkgZnJvbSAnLi9hcGknO1xuaW1wb3J0IHsgZ2V0STE4biB9IGZyb20gJy4vaTE4bic7XG5cbi8qKlxuICogQW5hdG9teSBvZiBhIHN0YXRlIG9iamVjdFxuICpcbiAqICh2YWx1ZXMgcHJlY2VkZWQgYnkgYSBxdWVzdGlvbiBtYXJrIGFyZSBvcHRpb25hbClcbmBgYFxue1xuICBpZDoge3N0cmluZ30sICAgICAgICAgICAgLy8gQWxsIGxvd2VyY2FzZSwgbm8gd2hpdGVzcGFjZXMuIFRoaXMgaXMgdXNlZCBpbiB0aGUgY3NzIGFzIHdlbGwuIGUuZy4gJydlZW5tYWFsJycsXG4gIGlkeDoge051bWJlcn0sICAgICAgICAgICAvLyBUaGUgaW5kZXggb2YgdGhlIHN0YXRlIGluIHRoZSBzdGF0ZXMgc3VjY2Vzc2lvbi4gZS5nLiBgMWBcbiAgdGV4dDoge3N0cmluZ30sICAgICAgICAgIC8vIFRoZSBkaXNwbGF5ZWQgdGV4dCBmb3IgdGhlIHN0YXRlLiBFLmcuIGAnRWVubWFhbC4uLidgLFxuICBkdXJhdGlvbjogez9OdW1iZXJ9LCAgICAgLy8gRHluYW1pY2FsbHkgc2V0IGJ5IHRoZSBJdGVtIGNsYXNzLCBpdCBjYW4gaGF2ZSBhIGRlZmF1bHQgdmFsdWUgdGhvdWdoXG4gIGlzTGFzdDogez9ib29sZWFufSwgICAgICAvLyBTZXQgaXQgdG8gdHJ1ZSBpZiB5b3Ugd2FudCB0byBpbmRpY2F0ZSB0aGF0IHRoaXMgc3RhdGUgaXMgdGhlIGxhc3QuIE90aGVyd2lzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGxhc3QgaXMgYWx3YXlzIGNvbnNpZGVyZWQgYCd2ZXJrb2NodCdgXG4gIGV4cGlyYXRpb25zOiB7QXJyYXk8XG4gICAgICBPYmplY3Q8XG4gICAgICAgIHBlcmNlbnQ6IHtOdW1iZXJ9LCAvLyBOdW1iZXIgdGhhdCBpbmRpY2F0ZXMgYXQgd2hpY2ggcG9pbnQgaW4gdGltZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKGV4cHJlc3NlZCBpbiBwZXJjZW50YWdlKSB0aGlzIGV4cGlyYXRpb24gYnJlYWtwb2ludCBpcyB0cmlnZ2VyZWRcbiAgICAgICAgbmFtZToge3N0cmluZ30gICAgIC8vIEFsbCBsb3dlcmNhc2UsIG5vIHdoaXRlc3BhY2VzLiBUaGlzIGlzIHVzZWQgaW4gdGhlIGNzcyBhcyB3ZWxsLiBlLmcuIGAnYmxpbmsnYCxcbiAgICAgICAgPlxuICAgID59XG4gIFt7XG4gICAgcGVyY2VudDogNzAsXG4gICAgbmFtZTogJ2JsaW5rJ1xuICB9XVxufVxuYGBgXG4qL1xuXG4vKipcbiAqIFRoZSBgdGV4dGAgaXMgZGlzcGxheWVkIGluIHRoZSBzdGF0dXMgYmFyLlxuICpcbiAqIFRoZSBgZHVyYXRpb25gIGlzIHNldCBkeW5hbWljYWxseSwgaXQncyBoZXJlIGp1c3QgZm9yIHJlZmVyZW5jZS5cbiAqXG4gKiBUaGUgYGV4cGlyYXRpb25zYCB2YWx1ZXMgYXZhaWxhYmxlIGFyZSBmb3Igbm93OlxuICogJ2JsaW5rLCBjbG9zZSwgaHVycnksIGZpbmFsJzsgdG8gZWFjaCBvZiB0aGVtIGNvcnJlc3BvbmRcbiAqIHNvbWUgdmFyaWF0aW9ucyBhbmQgYW5pbWF0aW9uIGFwcGxpZWQgdGhyb3VnaCBjc3MuIEVhY2ggZXhwaXJhdGlvbiBtdXN0XG4gKiBkZWNsYXJlIGEgYHBlcmNlbnRgIHByb3BlcnR5IHRoYXQgaW5kaWNhdGVzIHRoZSBwZXJjZW50YWdlIGF0IHdoaWNoIHBvaW50XG4gKiBpbiB0aW1lIHRyaWdnZXIgdGhlIGV4cGlyYXRpb24gYW5pbWF0aW9uIChvciB3aGF0ZXZlciksXG4gKiBlLmcuIGEgYHBlcmNlbnRgIHZhbHVlIG9mIGA1MGAgd291bGQgdHJpZ2dlciBhdCB0aGUgMTR0aCBzZWNvbmQgZm9yIGFcbiAqIHN0YXRlIHRoYXQgbGFzdHMgMjhzXG4gKi9cbmNvbnN0IGRlZmF1bHRTdGF0ZXMgPSBbXG4gIHtcbiAgICBpZDogJ2Vlbm1hYWwnLFxuICAgIGlkeDogMCxcbiAgICB0ZXh0OiBnZXRJMThuKCdlZW5tYWFsJyksXG4gICAgZHVyYXRpb246IG51bGwsXG4gICAgZXhwaXJhdGlvbnM6IFt7XG4gICAgICBwZXJjZW50OiA3MCxcbiAgICAgIG5hbWU6ICdibGluaydcbiAgICB9XVxuICB9LCB7XG4gICAgaWQ6ICdhbmRlcm1hYWwnLFxuICAgIGlkeDogMSxcbiAgICB0ZXh0OiBnZXRJMThuKCdhbmRlcm1hYWwnKSxcbiAgICBkdXJhdGlvbjogbnVsbCxcbiAgICBleHBpcmF0aW9uczogW3tcbiAgICAgIHBlcmNlbnQ6IDUwLFxuICAgICAgbmFtZTogJ2h1cnJ5J1xuICAgIH0sIHtcbiAgICAgIHBlcmNlbnQ6IDcwLFxuICAgICAgbmFtZTogJ2JsaW5rJ1xuICAgIH0sIHtcbiAgICAgIHBlcmNlbnQ6IDkwLFxuICAgICAgbmFtZTogJ2ZpbmFsJ1xuICAgIH1dXG4gIH0sIHtcbiAgICBpZDogJ2dlYm9kZW4nLFxuICAgIGlkeDogMixcbiAgICB0ZXh0OiBnZXRJMThuKCdnZWJvZGVuJyksXG4gICAgZHVyYXRpb246IG51bGwsXG4gICAgZXhwaXJhdGlvbnM6IFt7XG4gICAgICBwZXJjZW50OiA1MCxcbiAgICAgIG5hbWU6ICdodXJyeSdcbiAgICB9LCB7XG4gICAgICBwZXJjZW50OiA3MCxcbiAgICAgIG5hbWU6ICdibGluaydcbiAgICB9LCB7XG4gICAgICBwZXJjZW50OiA5MCxcbiAgICAgIG5hbWU6ICdmaW5hbCdcbiAgICB9XVxuICB9LCB7XG4gICAgaWQ6ICdnZWJvZGVuLXRpbWVsZXNzJyxcbiAgICBpZHg6IDMsXG4gICAgdGV4dDogZ2V0STE4bignZ2Vib2Rlbi10aW1lbGVzcycpLFxuICAgIGR1cmF0aW9uOiBudWxsXG4gIH0sIHtcbiAgICBpZDogJ3ZlcmtvY2h0JyxcbiAgICBpZHg6IDQsXG4gICAgdGV4dDogZ2V0STE4bigndmVya29jaHQnKSxcbiAgICBkdXJhdGlvbjogbnVsbFxuICB9LCB7XG4gICAgaWQ6ICdiaWVkZW4nLFxuICAgIGlkeDogNSxcbiAgICB0ZXh0OiBnZXRJMThuKCdiaWVkZW4nKSxcbiAgICBkdXJhdGlvbjogbnVsbCxcbiAgICBleHBpcmF0aW9uczogW3tcbiAgICAgIHBlcmNlbnQ6IDcwLFxuICAgICAgbmFtZTogJ2JsaW5rJ1xuICAgIH1dXG4gIH0sIHtcbiAgICBpZDogJ3dpbm5lbicsXG4gICAgaWR4OiA2LFxuICAgIHRleHQ6IGdldEkxOG4oJ3dpbm5lbicpLFxuICAgIGR1cmF0aW9uOiBudWxsLFxuICAgIGV4cGlyYXRpb25zOiBbe1xuICAgICAgcGVyY2VudDogNTAsXG4gICAgICBuYW1lOiAnaHVycnknXG4gICAgfSwge1xuICAgICAgcGVyY2VudDogNzAsXG4gICAgICBuYW1lOiAnYmxpbmsnXG4gICAgfV1cbiAgfSwge1xuICAgIGlkOiAnZ2VsYWRlbicsXG4gICAgaWR4OiA3LFxuICAgIHRleHQ6IGdldEkxOG4oJ2dlbGFkZW4nKSxcbiAgICBkdXJhdGlvbjogbnVsbCxcbiAgICBleHBpcmF0aW9uczogW3tcbiAgICAgIHBlcmNlbnQ6IDcwLFxuICAgICAgbmFtZTogJ2JsaW5rJ1xuICAgIH1dXG4gIH0sIHtcbiAgICBpZDogJ2dlc2xvdGVuJyxcbiAgICBpZHg6IDgsXG4gICAgdGV4dDogZ2V0STE4bignZ2VzbG90ZW4nKSxcbiAgICBkdXJhdGlvbjogbnVsbCxcbiAgICBleHBpcmF0aW9uczogW3tcbiAgICAgIHBlcmNlbnQ6IDcwLFxuICAgICAgbmFtZTogJ2JsaW5rJ1xuICAgIH1dXG4gIH0sIHtcbiAgICBpZDogJ2NvbnRyb2xlcmVuJyxcbiAgICBpZHg6IDksXG4gICAgdGV4dDogZ2V0STE4bignY29udHJvbGVyZW4nKSxcbiAgICBkdXJhdGlvbjogbnVsbFxuICB9LCB7XG4gICAgaWQ6ICd1aXR2ZXJrb2NodCcsXG4gICAgaWR4OiAxMCxcbiAgICB0ZXh0OiBnZXRJMThuKCd1aXR2ZXJrb2NodCcpLFxuICAgIGR1cmF0aW9uOiBudWxsXG4gIH0sXG5dO1xuXG4vLyBleHBvcnQgdG8gcHVibGljIEFQSVxuYXBpWydkZWZhdWx0U3RhdGVzJ10gPSBkZWZhdWx0U3RhdGVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0U3RhdGVzO1xuIiwiaW1wb3J0IGFwaSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGRlZmF1bHRDb2xvcnMgPSB7XG4gICdlZW5tYWFsJzogWycjNkRCRjUyJywgJyNCQ0Q1M0EnXSxcbiAgJ2FuZGVybWFhbCc6IFsnI0VDMjgyRScsICcjRjU4NjM5J10sXG4gICdnZWJvZGVuJzogWycjODc1NkEzJywgJyNCQzkxQzAnXSxcbiAgJ2dlYm9kZW4tdGltZWxlc3MnOiBbJyM2YjQ0ODInLCAnI2E4NzFhZCddLFxuICAndmVya29jaHQnOiBbJyNCMkIyQjInLCAnI0U2RTdFNiddLFxuICAnYmllZGVuJzogWycjMEI3MkJBJywgJyM0QTlERDYnXSxcbiAgJ3dpbm5lbic6IFsnI2FkMDA1ZCcsICdkZWVwcGluayddLFxuICAnZ2VsYWRlbic6IFsnI2EzOGQ4ZCcsICcjZTJiYWI3J10sXG4gICdnZXNsb3Rlbic6IFsnIzlkOGY4ZicsICcjZDdiZmJkJ10sXG4gICdjb250cm9sZXJlbic6IFsnIzk3OTA5MCcsICcjY2VjNGMxJ11cbn07XG5cbi8vIGV4cG9ydCB0byBwdWJsaWMgQVBJXG5hcGlbJ2RlZmF1bHRDb2xvcnMnXSA9IGRlZmF1bHRDb2xvcnM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRDb2xvcnM7XG4iLCIvKiFcbiAqIEhlYXZpbHkgaW5zcGlyZWQgYnlcbiAqXG4gKiBTVkcgUGllIFRpbWVyIDAuOS4xIHwgQW5kZXJzIEdyaW1zcnVkLCBncmludC5ubyB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9hZ3JpbXNydWQvc3ZnUGllVGltZXIuanNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ZnUGllVGltZXIge1xuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB0aGlzLl9lbGVtZW50ID0gcHJvcHMuZWxlbWVudDtcbiAgICB0aGlzLl9zaXplID0gNDA7XG4gICAgdGhpcy5fc3RhcnRGcm9tID0gcHJvcHMuc3RhcnRGcm9tID8gcHJvcHMuc3RhcnRGcm9tICogMTAwMDogMDsgLy8gc3RhcnRGcm9tIGlzIGdpdmVuIGluIHNlY29uZHNcbiAgICB0aGlzLl9kdXJhdGlvbiA9IHByb3BzLmR1cmF0aW9uID8gcHJvcHMuZHVyYXRpb24gKiAxMDAwIDogMTAwMDsgLy8gZHVyYXRpb24gaXMgZ2l2ZW4gaW4gc2Vjb25kc1xuICAgIHRoaXMuX2FjdHVhbER1cmF0aW9uID0gdGhpcy5fZHVyYXRpb24gLSB0aGlzLl9zdGFydEZyb207XG4gICAgdmFyIG4gPSBwcm9wcy5sb29wcztcblxuICAgIGlmICh0aGlzLnJlcSkge1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgfVxuXG4gICAgLy8gVGhpcyBwYXJ0IG1pZ2h0IGJlIGNvbmZ1c2luZzpcbiAgICAvLyBJZiBuPT0wLCBkbyBpbmZpbml0ZSBsb29wc1xuICAgIC8vIEluIG90aGVyIGNhc2VzIHdoZXJlIG4gaXMgc2V0LCBkbyBuIGxvb3BzXG4gICAgLy8gSWYgbiBpcyBub3Qgc2V0LCBkbyAxIGxvb3BcbiAgICAvLyBEbyBpdCB0aGlzIHdheSB0byBwcmV2ZW50IG1peGluZyBuPT0wIGFuZCAhblxuICAgIG4gPSAobiA9PT0gMCkgPyAwIDogbiA/IG4gOiAxO1xuXG4gICAgdmFyIGVuZCA9IERhdGUubm93KCkgKyB0aGlzLl9hY3R1YWxEdXJhdGlvbiAqIG47XG4gICAgdmFyIHRvdGFsZHVyID0gdGhpcy5fYWN0dWFsRHVyYXRpb24gKiBuO1xuXG4gICAgLy8gRGF0ZS5ub3cgZml4IGJ5IEFyaSBGdWNocywgYWZ1Y2hzLnR1bWJsci5jb20vcG9zdC8yMzU1MDEyNDc3NC9kYXRlLW5vdy1pbi1pZThcbiAgICBEYXRlLm5vdyA9IERhdGUubm93IHx8IGZ1bmN0aW9uKCkgeyByZXR1cm4gK25ldyBEYXRlKCk7IH07XG5cbiAgICAvLyBBbmltYXRlIGZyYW1lIGJ5IGZyYW1lXG4gICAgKGZ1bmN0aW9uIGZyYW1lKCkge1xuICAgICAgdmFyIGN1cnJlbnQgPSBEYXRlLm5vdygpO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IGVuZCAtIGN1cnJlbnQ7XG5cbiAgICAgIC8vIE5vdyBzZXQgcm90YXRpb24gcmF0ZVxuICAgICAgLy8gRS5nLiA1MCUgb2YgZmlyc3QgbG9vcCByZXR1cm5zIDEuNVxuICAgICAgLy8gRS5nLiA3NSUgb2Ygc2l4dGggbG9vcCByZXR1cm5zIDYuNzVcbiAgICAgIC8vIEhhcyB0byByZXR1cm4gPjAgZm9yIFNWRyB0byBiZSBkcmF3biBjb3JyZWN0bHlcbiAgICAgIC8vIElmIHlvdSBuZWVkIHRoZSBjdXJyZW50IGxvb3AsIHVzZSBNYXRoLmZsb29yKHJhdGUpXG4gICAgICB2YXIgcmF0ZSA9IG4gKyAxIC0gcmVtYWluaW5nIC8gc2VsZi5fZHVyYXRpb247XG4gICAgICAvLyB0b3RhbCByYXRlIGZvciBhIGZ1bGwgY3ljbGUgaXMgMCB0byAyXG4gICAgICByYXRlID0gcmF0ZTsvLyArICgoc2VsZi5fc3RhcnRGcm9tICogMikgLyBzZWxmLl9kdXJhdGlvbik7XG5cbiAgICAgIC8vIEFzIHJlcXVlc3RBbmltYXRpb25GcmFtZSB3aWxsIGRyYXcgd2hlbmV2ZXIgY2FwYWJsZSxcbiAgICAgIC8vIHRoZSBhbmltYXRpb24gbWlnaHQgZW5kIGJlZm9yZSBpdCByZWFjaGVzIDEwMCUuXG4gICAgICAvLyBMZXQncyBzaW11bGF0ZSBjb21wbGV0ZW5lc3Mgb24gdGhlIGxhc3QgdmlzdWFsXG4gICAgICAvLyBmcmFtZSBvZiB0aGUgbG9vcCwgcmVnYXJkbGVzcyBvZiBhY3R1YWwgcHJvZ3Jlc3NcbiAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnQpXG4gICAgICBpZiAocmVtYWluaW5nIDwgNjApIHtcbiAgICAgICAgLy8gMS4wIG1pZ2h0IGJyZWFrLCBzZXQgdG8gc2xpZ2h0bHkgbG93ZXIgdGhhbiAxXG4gICAgICAgIC8vIFVwZGF0ZTogU2V0IHRvIHNsaWdodGx5IGxvd2VyIHRoYW4gbiBpbnN0ZWFkXG4gICAgICAgIHNlbGYuX2RyYXcobiAtIDAuMDAwMSk7XG4gICAgICAgIC8vIFN0b3AgYW5pbWF0aW5nIHdoZW4gd2UgcmVhY2ggbiBsb29wcyAoaWYgbiBpcyBzZXQpXG4gICAgICAgIGlmKHJlbWFpbmluZyA8IHRvdGFsZHVyICYmIG4pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIFRvIHJldmVyc2UsIHVuY29tbWVudCB0aGlzIGxpbmVcbiAgICAgIC8vIHJhdGUgPSAzNjAgLSByYXRlO1xuXG4gICAgICAvLyBkcmF3XG4gICAgICBzZWxmLl9kcmF3KHJhdGUpO1xuICAgICAgLy8gcmVxdWVzdCBuZXh0IGZyYW1lXG4gICAgICBzZWxmLnJlcSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmcmFtZSk7XG4gICAgfSgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IFNWRyBwYXRoXG4gICAqXG4gICAqIHggb24gdGhlIHJpZ2h0IHNpZGUgaXMgcG9zaXRpdmUsIHkgb24gdGhlIGJvdHRvbSBzaWRlIGlzIHBvc2l0aXZlLFxuICAgKiBvbiB0aGUgb3RoZXIgc2lkZXMgdGhleSBhcmUgbmVnYXRpdmVcbiAgICogQHBhcmFtICB7TnVtYmVyfSByYXRlXG4gICAqL1xuICBfZHJhdyAocmF0ZSkge1xuICAgIGxldCBhbmdsZSA9IDM2MCAqIHJhdGU7XG4gICAgYW5nbGUgJT0gMzYwO1xuICAgIC8vIGlmIChhbmdsZSA+PSAzNTkuOSkge1xuICAgIC8vICAgY29uc29sZS5sb2coYW5nbGUpXG4gICAgLy8gfVxuXG4gICAgbGV0IHJhZCA9IChhbmdsZSAqIE1hdGguUEkgLyAxODApO1xuICAgIGxldCBtaWQgPSAoYW5nbGUgPiAxODApID8gMSA6IDA7XG4gICAgbGV0IHggPSBNYXRoLnNpbihyYWQpICogdGhpcy5fc2l6ZTtcbiAgICBsZXQgeSA9IE1hdGguY29zKHJhZCkgKiAtdGhpcy5fc2l6ZTtcbiAgICBsZXQgc2hhcGUgPSBgTSAwIDAgdiAtJHt0aGlzLl9zaXplfSBBICR7dGhpcy5fc2l6ZX0gJHt0aGlzLl9zaXplfSAxICR7bWlkfSAxICR7eH0gJHt5fSB6YDtcblxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdkJywgc2hhcGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgdGhlIGFuaW1hdGlvbiBjYW5jZWwgdGhlIHJlcXVlc3QgYW5pbWF0aW9uIGZyYW1lXG4gICAqL1xuICBzdG9wICgpIHtcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5fcmVxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBhbmltYXRpb25cbiAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLnN0b3AoKTtcbiAgfVxufVxuIiwiaW1wb3J0IGFwaSBmcm9tICcuL2FwaSc7XG5pbXBvcnQgZGVmYXVsdFN0YXRlcyBmcm9tICcuL3N0YXRlcy5kZWZhdWx0cyc7XG5pbXBvcnQgZGVmYXVsdENvbG9ycyBmcm9tICcuL2NvbG9ycy5kZWZhdWx0cyc7XG5pbXBvcnQgU3ZnUGllVGltZXIgZnJvbSAnLi9zdmdQaWVUaW1lcic7XG5cbi8vIEV4YW1wbGUgdXNlIG9mIHRoZSBBUElcbi8vIChmdW5jdGlvbiAod2luZG93LCBkb2N1bWVudCwgJCwgYXBpKSB7XG4vLyAgIHZhciBteURPTW9ySnF1ZXJ5ID0gJCgnLmhzSXRlbScpWzBdO1xuXG4vLyAgIHZhciBteUl0ZW0gPSBuZXcgYXBpLkl0ZW0oe1xuLy8gICAgIGlkOiAxMCxcbi8vICAgICBlbGVtOiBteURPTW9ySnF1ZXJ5LFxuLy8gICAgIC8vIHN0YXRlOiAzLFxuLy8gICAgIG9uU3RhdGU6IGZ1bmN0aW9uIChpdGVtKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZygnb25TdGF0ZSAnICsgaXRlbS5zdGF0ZS5pZCwgaXRlbSk7XG4vLyAgICAgfSxcbi8vICAgICBvbkVuZDogZnVuY3Rpb24gKGl0ZW0pIHtcbi8vICAgICAgIGNvbnNvbGUubG9nKCdBdWN0aW9uIGVuZHMhIG9uRW5kJywgaXRlbSk7XG4vLyAgICAgfSxcbi8vICAgICBvbkJpZDogZnVuY3Rpb24gKGl0ZW0pIHtcbi8vICAgICAgIGNvbnNvbGUubG9nKCdCaWQhIG9uIGl0ZW0nLCBpdGVtKTtcbi8vICAgICB9XG4vLyAgIH0pO1xuLy8gICBteUl0ZW0uc2V0U3RhdGUoMCwgMTUpO1xuLy8gICAvLyBteUl0ZW0uZGVzdHJveSgpO1xuLy8gfSkod2luZG93LCBkb2N1bWVudCwgalF1ZXJ5LCB3aW5kb3cuaGVsbG9zcGVjaWFsKTtcblxuLy8gKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIGFwaSkge1xuLy8gICAvLyBjYWxsaW5nIHRoZSBjb250cnVjdG9yIG9yIHRoZSBzZXRTdGF0ZSBtZXRob2QgcmV0dXJuIHRoZSBpdGVtIGluc3RhbmNlXG4vLyAgIHZhciBteUl0ZW0gPSBuZXcgaGVsbG9zcGVjaWFsLkl0ZW0oe1xuLy8gICAgIGlkOiAxMixcbi8vICAgICBlbGVtOiAkKCcuaHNJdGVtJylbMF0gLy8gdGhlIGl0ZW0gZWxlbWVudCBpbiB0aGUgY2F0ZWdvcnkgcGFnZVxuLy8gICB9KS5zZXRTdGF0ZSgnZ2Vib2RlbicsIDExKTtcbi8vICAgLy8gZ3JhYiB0aGUgc3RhdGUgaW4gYSB2YXJpYWJsZSB0byB1c2UgY2xvc3VyZVxuLy8gICB2YXIgbXlTdGF0ZSA9IG15SXRlbS5zdGF0ZTtcblxuLy8gICAvLyBmYWtlIGFzeW5jIGxvYWRpbmcgb2YgYWpheCBjb250ZW50XG4vLyAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuLy8gICAgIHZhciBteUl0ZW1Qb3B1cCA9IG5ldyBoZWxsb3NwZWNpYWwuSXRlbSh7XG4vLyAgICAgICBpZDogMTIsXG4vLyAgICAgICBlbGVtOiAkKCcuaHNJdGVtJylbMV0gLy8gdGhlIGl0ZW0gZWxlbWVudCBpbiB0aGUgcG9wdXBcbi8vICAgICB9KTtcbi8vICAgICBteUl0ZW1Qb3B1cC5yZXN1bWVTdGF0ZShteVN0YXRlKTtcbi8vICAgfSwgMzAwMCk7XG5cbi8vICAgLy8gZmFrZSBhc3luYyBzb21ldGhpbmcgZWxlc2Vcbi8vICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4vLyAgICAgdmFyIG15QXN5bmNJdGVtID0gbmV3IGhlbGxvc3BlY2lhbC5JdGVtKHtcbi8vICAgICAgIGlkOiAxMixcbi8vICAgICAgIGVsZW06ICQoJy5oc0l0ZW0nKVsyXSAvLyBhbm90aGVyIGl0ZW0gZWxlbWVudFxuLy8gICAgIH0pO1xuLy8gICAgIG15QXN5bmNJdGVtLnJlc3VtZVN0YXRlKG15U3RhdGUpO1xuLy8gICB9LCA1MDAwKTtcbi8vIH0pKHdpbmRvdywgZG9jdW1lbnQsIGpRdWVyeSwgd2luZG93WydoZWxsb3NwZWNpYWwnXSk7XG5cbi8qKlxuICogVGhlIEl0ZW0gY2xhc3MgZGVmYXVsdCBvcHRpb25zXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5jb25zdCBkZWZhdWx0T3B0cyA9IHtcbiAgLyoqIEB0eXBlIHtBcnJheX0gRGVmYXVsdCBzdGF0ZXMgKi9cbiAgc3RhdGVzOiBkZWZhdWx0U3RhdGVzLFxuICAvKiogQHR5cGUge3N0cmluZ30gYXR0cmlidXRlIG5hbWUgKi9cbiAgYXR0clN0YXRlOiAnZGF0YS1zdGF0ZScsXG4gIC8qKiBAdHlwZSB7c3RyaW5nfSBhdHRyaWJ1dGUgbmFtZSAqL1xuICBhdHRyRXhwaXJhdGlvbjogJ2RhdGEtZXhwaXJhdGlvbicsXG4gIC8qKiBAdHlwZSB7ZnVuY3Rpb24oSXRlbSl9IENhbGxiYWNrIGF0IHRoZSBlbmQgb2YgZWFjaCBzdGF0ZSAqL1xuICBvblN0YXRlOiBmdW5jdGlvbiAoKSB7fSxcbiAgLyoqIEB0eXBlIHtmdW5jdGlvbihJdGVtLCBOdW1iZXIpfSBDYWxsYmFjayBlYWNoIHNlY29uZCBvZiBhIHN0YXRlIHByb2dyZXNzaW9uICovXG4gIC8vIG9uU2Vjb25kOiBmdW5jdGlvbiAoKSB7fSxcbiAgLyoqIEB0eXBlIHtmdW5jdGlvbihJdGVtKX0gQ2FsbGJhY2sgYXQgdGhlIGVuZCBvZiB0aGUgbGFzdCBzdGF0ZSAqL1xuICBvbkVuZDogZnVuY3Rpb24gKCkge30sXG4gIC8qKiBAdHlwZSB7ZnVuY3Rpb24oSXRlbSl9IENhbGxiYWNrIGF0IGJpZCBjbGljayAqL1xuICBvbkJpZDogZnVuY3Rpb24gKCkge30sXG59XG5cbi8qKlxuICogVGhlIEl0ZW0gY2xhc3MgbmVlZHMgdG8gYmUgaW5pdGlhbGl6ZWQgb24gZG9jdW1lbnQgcmVhZHkgd2l0aCBhbiBpZCBhbmQgYVxuICogY29udGFpbmVyIGVsZW1lbnRcbiAqL1xuY2xhc3MgSXRlbSB7XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSAge09iamVjdH0gb3B0cyBDb250YWlucyBwcm9wZXJ0aWVzOlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzoge3N0cmluZ30sXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAnZWxlbSc6IHtIVE1MZWxlbWVudH0sXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAnc3RhdGUnOiB7P051bWJlcn1cbiAgICogQHJldHVybiB7SXRlbX0gICAgICAgIFRoZSBpdGVtIGluc3RhbmNlXG4gICAqL1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIGlmICh0eXBlb2Ygb3B0cy5pZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2BlbGVtYCBwcm9wZXJ0eSBpcyByZXF1aXJlZCB3aGVuIGluc3RhbnRpYXRlIGEgbmV3IEl0ZW0nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRzLmlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYGlkYCBwcm9wZXJ0eSBpcyByZXF1aXJlZCB3aGVuIGluc3RhbnRpYXRlIGEgbmV3IEl0ZW0nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKiogQHR5cGUge09iamVjdH0gSXRlbSBnaXZlbiBvcHRzICovXG4gICAgdGhpcy5vcHRzID0gJC5leHRlbmQoe30sIGRlZmF1bHRPcHRzLCBvcHRzKTtcblxuICAgIC8qKiBAdHlwZSB7SFRNTGVsZW1lbnR9IEJhc2ljIERPTSBjb250YWluZXIgZm9yIHRoZSBpdGVtICovXG4gICAgdGhpcy5jb250YWluZXIgPSBvcHRzLmVsZW0uanF1ZXJ5ID8gb3B0cy5lbGVtWzBdIDogb3B0cy5lbGVtO1xuXG4gICAgLyoqIEB0eXBlIHtqUXVlcnl9IEJhc2ljIERPTSBjb250YWluZXIgZm9yIHRoZSBpdGVtIChqUXVlcnkgd3JhcCkgKi9cbiAgICB0aGlzLiRjb250YWluZXIgPSBvcHRzLmVsZW0uanF1ZXJ5ID8gb3B0cy5lbGVtIDogJChvcHRzLmVsZW0pO1xuXG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9IEl0ZW0gaWQgKi9cbiAgICB0aGlzLmlkID0gb3B0cy5pZCB8fCB0aGlzLmNvbnRhaW5lci5pZDtcblxuICAgIC8qKiBAdHlwZSB7QXJyYXl9IENvbnRhaW5zIHRoZSBwb3NzaWJsZSBzdGF0ZXMgZm9yIHRoZSBpdGVtLCBhcyBhbiBhcnJheSAqL1xuICAgIHRoaXMuc3RhdGVzID0gdGhpcy5vcHRzLnN0YXRlcztcblxuICAgIC8qKiBAdHlwZSB7T2JqZWN0fSBDb250YWlucyB0aGUgcG9zc2libGUgc3RhdGVzIGZvciB0aGUgaXRlbSwgYXMgYW4gb2JqZWN0IChpbmRleGVkIGJ5IGlkKSAqL1xuICAgIHRoaXMuc3RhdGVzTWFwID0gdGhpcy5fZ2V0T2JqRnJvbUFycmF5KHRoaXMub3B0cy5zdGF0ZXMsICdpZCcpO1xuXG4gICAgLyoqIEB0eXBlIHtmdW5jdGlvbigpfSBIb2xkcyB0aGUgaW50ZXJ2YWxsZWQgcmVmZXJlbmNlIGZvciBvbmUgY3ljbGUgKi9cbiAgICB0aGlzLl9jeWNsZSA9IG51bGw7XG5cbiAgICAvKiogQHR5cGUge051bWJlcn0gSUQgb2Ygb25lIG9mIHRoZSBmb3VyIHN0YXRlcyAqL1xuICAgIHRoaXMuX2luaXRpYWxTdGF0ZUlkID0gb3B0cy5zdGF0ZSB8fCB0aGlzLmNvbnRhaW5lci5nZXRBdHRyaWJ1dGUodGhpcy5vcHRzLmF0dHJTdGF0ZSk7XG5cbiAgICAvKiogQHR5cGUge0FycmF5PFN2Z1BpZVRpbWVyPn0gT25lIGFuaW1hdGlvbiBwZXIgc3ZnIGVsZW1lbnQgKi9cbiAgICB0aGlzLl9hbmltYXRpb25zID0gW107XG5cbiAgICAvLyBzZXQgRE9NIHJlbGF0ZWQgc3R1ZmZcbiAgICB0aGlzLl9iaW5kVUkoKTtcblxuICAgIC8vIGlmICh0aGlzLl9pbml0aWFsU3RhdGVJZCkge1xuICAgIC8vICAgdGhpcy5zZXRTdGF0ZSh0aGlzLl9pbml0aWFsU3RhdGVJZCk7XG4gICAgLy8gfVxuXG4gICAgLy8gY29uc29sZS5sb2coJ0l0ZW0tPmNvbnN0cnVjdG9yKCknLCB0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRcbiAgICovXG4gIF9iaW5kVUkgKCkge1xuXG4gICAgLyoqIEB0eXBlIHtqUXVlcnl9IFRoZSAnQmllZCcgYnV0dG9ucyAqL1xuICAgIHRoaXMuX18kYmlkID0gdGhpcy4kY29udGFpbmVyLmZpbmQoJ1tkYXRhLWJpZF0nKTtcblxuICAgIC8qKiBAdHlwZSB7alF1ZXJ5fSAqL1xuICAgIHRoaXMuX18kcHJpY2UgPSB0aGlzLiRjb250YWluZXIuZmluZCgnW2RhdGEtcHJpY2VdJyk7XG5cbiAgICAvKiogQHR5cGUge2pRdWVyeX0gKi9cbiAgICB0aGlzLl9fJGJpZGRlciA9IHRoaXMuJGNvbnRhaW5lci5maW5kKCdbZGF0YS1iaWRkZXJdJyk7XG5cbiAgICAvKiogQHR5cGUge0FycmF5PEhUTUxlbGVtZW50Pn0gKi9cbiAgICB0aGlzLl9fc3RhdGVTdmdzID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc3RhdGUtc3ZnXScpO1xuXG4gICAgLyoqIEB0eXBlIHtBcnJheTxIVE1MZWxlbWVudD59ICovXG4gICAgdGhpcy5fX3N0YXRlTXNncyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXN0YXRlLW1zZ10nKTtcblxuICAgIC8qKiBAdHlwZSB7QXJyYXk8SFRNTGVsZW1lbnQ+fSAqL1xuICAgIHRoaXMuX19zdG9wczEgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuc3RvcDEnKTtcblxuICAgIC8qKiBAdHlwZSB7QXJyYXk8SFRNTGVsZW1lbnQ+fSAqL1xuICAgIHRoaXMuX19zdG9wczIgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuc3RvcDInKTtcblxuICAgIC8vIGJpbmQgY2xpY2sgYnV0dG9uXG4gICAgdGhpcy5fXyRiaWQub24oJ2NsaWNrJywgdGhpcy5vbkJpZC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgbmV3IHN0YXRlXG4gICAqIEBwYXJhbSB7U3RhdGV9IHN0YXRlT2JqZWN0XG4gICAqL1xuICBhZGRTdGF0ZSAoc3RhdGVPYmplY3QpIHtcbiAgICBsZXQgc3RhdGVJZCA9IHN0YXRlT2JqZWN0LmlkO1xuICAgIHRoaXMuc3RhdGVzTWFwW3N0YXRlSWRdID0gc3RhdGVPYmplY3Q7XG5cbiAgICAvLyBoZXJlIHdlIGNvdWxkIG9yIHNob3VsZCBvciBwdXNoIHRoZSBuZXcgc3RhdGVcbiAgICAvLyBhdCB0aGUgc3BlY2lmaWVkIGluZGV4IGluIHRoZSBhcnJheSBidXQgSSBkb24ndCByZWFsbHlcbiAgICAvLyBzZWUgdGhlIHBvaW50IG9mIHRoaXMgYXQgdGhpcyBzdGFnZS4gV2UgdXNlIHN0YXRlIGlkc1xuICAgIC8vIG5vdyBhbnl3YXkgdG8gY2hhbmdlIHRoZSBpdGVtIHN0eWxlIHRocm91Z2ggY3NzXG4gICAgdGhpcy5zdGF0ZXMucHVzaChzdGF0ZU9iamVjdCk7XG5cbiAgICByZXR1cm4gc3RhdGVPYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHN0YXRlIHVwZGF0aW5nIFVJIGFuZCBydW5uaW5nIHRoZSBhbmltYXRpb25cbiAgICpcbiAgICogSXQganVzdCB1cGRhdGVzIHRoZSBzdGF0ZSBhbmltYXRpb24vY29sb3IgYW5kIHRleHQgbXNnLFxuICAgKiBlLmcuICdiaWRkaW5nLCBnb2luZyBvbmNlLCBnb2luZyB0d2ljZSwgc29sZCcsIGl0IGFsc28gYWRkcyBhbiBhdHRyXG4gICAqIG9uIHRoZSBpdGVtIGNvbnRhaW5lciBzbyB0aGF0IHdlIGNhbiB0d2VhayB0aGUgc3R5bGUgb2YgaXRlbVxuICAgKiBkaWZmZXJlbnRseSBmb3IgZWFjaCBzdGF0ZS5cbiAgICpcbiAgICogQHBhcmFtIHs/TnVtYmVyfFN0cmluZ3xTdGF0ZX0gZ2l2ZW5TdGF0ZSBUaGUgc3RhdGUgaW5kZXggYDAsMSwyLDNgLFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yIGlkIChlLmcuICd2ZXJrb2NodCcpIG9yXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IGN1c3RvbSBvYmplY3QgKHNlZSB0aGVcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5kZWZhdWx0cy5qcyB0byBzZWUgdGhlXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5hdG9teSBvZiBhIHN0YXRlIG9iamVjdClcbiAgICogQHBhcmFtIHs/TnVtYmVyfSAgICAgICAgICAgICAgIGR1cmF0aW9uICBUaGUgZHVyYXRpb24gaW4gc2Vjb25kc1xuICAgKiBAcGFyYW0gez9OdW1iZXJ9ICAgICAgICAgICAgICAgc3RhcnRGcm9tIFRoZSByZXN1bWluZyBwb2ludCBpbiBzZWNvbmRzXG4gICAqIEByZXR1cm4ge0l0ZW19ICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGl0ZW0gaW5zdGFuY2VcbiAgICovXG4gIHNldFN0YXRlIChnaXZlblN0YXRlLCBkdXJhdGlvbiwgc3RhcnRGcm9tKSB7XG4gICAgLy8gc2V0IGN1cnJlbnQgc3RhdGVcbiAgICBpZiAoJC5pc1BsYWluT2JqZWN0KGdpdmVuU3RhdGUpKSB7XG4gICAgICAvLyBpZiB3ZSBhcmUgcmVzdW1pbmcganVzdCBhc3NpZ24gdGhlIGdpdmVuIHN0YXRlXG4gICAgICBpZiAoKGdpdmVuU3RhdGUuc2Vjb25kICYmIGdpdmVuU3RhdGUuc2Vjb25kID4gMCkgfHwgc3RhcnRGcm9tKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBnaXZlblN0YXRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZWl0aGVyIGJ5IHVzaW5nIHRoZSBnaXZlbiBvYmplY3RcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuYWRkU3RhdGUoZ2l2ZW5TdGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuc3RhdGVzW2dpdmVuU3RhdGVdKSB7XG4gICAgICAvLyBvciBieSBncmFiYmluZyB0aGUgc3RhdGUgd2l0aCBpdHMgaWR4IHZhbHVlXG4gICAgICB0aGlzLnN0YXRlID0gdGhpcy5zdGF0ZXNbZ2l2ZW5TdGF0ZV07XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuc3RhdGVzTWFwW2dpdmVuU3RhdGVdKSB7XG4gICAgICAvLyBvciBieSBncmFiYmluZyB0aGUgc3RhdGUgd2l0aCBpdHMgaWR4IHZhbHVlXG4gICAgICB0aGlzLnN0YXRlID0gdGhpcy5zdGF0ZXNNYXBbZ2l2ZW5TdGF0ZV07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gb3IgYnkgZ3JhYmJpbmcgdGhlIHN0YXRlIHdpdGggdGhlIGluaXRpYWwgc3RhdGUgaWQgdmFsdWVcbiAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLnN0YXRlc01hcFt0aGlzLl9pbml0aWFsU3RhdGVJZF07XG4gICAgfVxuICAgIGlmICghdGhpcy5zdGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBzZXQgY3VycmVudCBzdGF0ZSBzZWNvbmRcbiAgICB0aGlzLnN0YXRlLnNlY29uZCA9IHN0YXJ0RnJvbSB8fCAwO1xuXG4gICAgLy8gc2V0IGN1cnJlbnQgc3RhdGUgZHVyYXRpb25cbiAgICBpZiAoZHVyYXRpb24pIHtcbiAgICAgIHRoaXMuc3RhdGUuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICB9XG4gICAgLy8gc2V0IGN5Y2xlIGR1cmF0aW9uXG4gICAgdGhpcy5fY3ljbGVEdXJhdGlvbiA9IHRoaXMuc3RhdGUuZHVyYXRpb24gLSB0aGlzLnN0YXRlLnNlY29uZDtcblxuICAgIC8vIGRpc3BsYXkgc3RhdGUgbWVzc2FnZVxuICAgIGlmICh0aGlzLl9fc3RhdGVNc2dzICYmIHRoaXMuX19zdGF0ZU1zZ3MubGVuZ3RoKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX19zdGF0ZU1zZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5fX3N0YXRlTXNnc1tpXS50ZXh0Q29udGVudCA9IHRoaXMuc3RhdGUudGV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBkaXNwbGF5IHN0YXRlIHN0eWxlIHRocm91Z2ggY3NzXG4gICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKHRoaXMub3B0cy5hdHRyU3RhdGUsIHRoaXMuc3RhdGUuaWQpO1xuXG4gICAgbGV0IHBhbGV0dGUgPSBkZWZhdWx0Q29sb3JzW3RoaXMuc3RhdGUuaWRdO1xuICAgIGlmIChwYWxldHRlKSB7XG4gICAgICBpZiAodGhpcy5fX3N0b3BzMSAmJiB0aGlzLl9fc3RvcHMxLmxlbmd0aCkge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuX19zdG9wczEubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICB0aGlzLl9fc3RvcHMxW2pdLnNldEF0dHJpYnV0ZSgnc3RvcC1jb2xvcicsIHBhbGV0dGVbMF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fX3N0b3BzMiAmJiB0aGlzLl9fc3RvcHMyLmxlbmd0aCkge1xuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHRoaXMuX19zdG9wczIubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICB0aGlzLl9fc3RvcHMyW2tdLnNldEF0dHJpYnV0ZSgnc3RvcC1jb2xvcicsIHBhbGV0dGVbMV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gLi4uIGFuZCBmaXJlcyB0aGUgYW5pbWF0aW9uXG4gICAgdGhpcy5fcnVuQW5pbWF0aW9uKCk7XG4gICAgLy8gc3RhcnQgdGhlIHRpbWVyLi4uXG4gICAgdGhpcy5fc3RhcnRDeWNsZSgpO1xuXG4gICAgLy8gY2FsbGJhY2tcbiAgICB0aGlzLm9wdHMub25TdGF0ZSh0aGlzKTtcbiAgICAvLyBjYWxsYmFjayBvbiBsYXN0IHN0YXRlICgndmVya29jaHQnKVxuICAgIGlmICh0aGlzLnN0YXRlLmlkID09PSAndmVya29jaHQnIHx8IHRoaXMuc3RhdGUuaXNMYXN0KSB7XG4gICAgICB0aGlzLm9wdHMub25FbmQodGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmVzdW1lIHN0YXRlXG4gICAqIEBwYXJhbSAge1N0YXRlfSBzdGF0ZSBUaGUgc3RhdGUgb2JqZWN0XG4gICAqIEByZXR1cm4ge0l0ZW19ICAgICAgICBUaGUgaXRlbSBpbnN0YW5jZVxuICAgKi9cbiAgcmVzdW1lU3RhdGUgKHN0YXRlKSB7XG4gICAgLy8gY3JlYXRlIGEgbmV3IHN0YXRlIG9iamVjdCB0byBkb24ndCBpbnRlcmZlcmUgd2l0aCBvdGhlciBpdGVtc1xuICAgIC8vIHN0YXRlc1xuICAgIGxldCBuZXdTdGF0ZSA9ICQuZXh0ZW5kKHt9LCBzdGF0ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSwgbnVsbCwgc3RhdGUuc2Vjb25kKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZGF0YVxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgRGF0YSBmcm9tIHNlcnZlciB0aGF0IG5lZWQgdG8gdXBkYXRlIHRoZSBVSVxuICAgKi9cbiAgc2V0RGF0YSAoZGF0YSkge1xuICAgIGlmIChkYXRhWydjdXJyZW50X3ByaWNlJ10pIHtcbiAgICAgIHRoaXMuX18kcHJpY2UudGV4dChkYXRhWydjdXJyZW50X3ByaWNlJ10pO1xuICAgIH1cbiAgICBpZiAoZGF0YVsnaGlnaGVzdF9iaWRkZXInXSkge1xuICAgICAgdGhpcy5fXyRiaWRkZXIudGV4dChkYXRhWydoaWdoZXN0X2JpZGRlciddKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXNlciBoYXMgY2xpY2tlZCBiaWRcbiAgICovXG4gIG9uQmlkICgpIHtcbiAgICB0aGlzLm9wdHMub25CaWQodGhpcy5pdGVtKTtcbiAgICAvLyBjb25zb2xlLmxvZygnYmlkISBuZXdTZWNvbmRzOicsIG5ld1NlY29uZHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgaXRlbSBpbnN0YW5jZVxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgaWYgKHRoaXMuX2FuaW1hdGlvbnMgJiYgdGhpcy5fYW5pbWF0aW9ucy5sZW5ndGgpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fYW5pbWF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLl9hbmltYXRpb25zW2ldLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fY2xlYXJDeWNsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IHNpbmdsZSBjeWNsZSB0aW1lclxuICAgKi9cbiAgX2NsZWFyQ3ljbGUgKCkge1xuICAgIGlmICh0aGlzLl9jeWNsZSkge1xuICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5fY3ljbGUpO1xuICAgICAgdGhpcy5fY3ljbGUgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCBzaW5nbGUgY3ljbGUgdGltZXJcbiAgICovXG4gIF9zdGFydEN5Y2xlICgpIHtcbiAgICB0aGlzLl9jbGVhckN5Y2xlKCk7XG4gICAgdGhpcy5fY3ljbGUgPSB3aW5kb3cuc2V0SW50ZXJ2YWwodGhpcy5fb25DeWNsZVRpY2suYmluZCh0aGlzKSwgMTAwMCk7XG4gIH1cblxuICAvKipcbiAgICogT24gc2Vjb25kIHRpY2ssIGl0IHJ1bnMgZXZlcnkgc2Vjb25kIHVzaW5nIGBzZXRJbnRlcnZhbGAsIGl0XG4gICAqIGNvb3JkaW5hdGVzIHRoZSBhbmltYXRpb24gc3RhdGVzLlxuICAgKi9cbiAgX29uQ3ljbGVUaWNrICgpIHtcbiAgICAvLyBtYXliZSB0cmlnZ2VyIGV4cGlyYXRpb24gYmVoYXZpb3VyXG4gICAgdGhpcy5fbWF5YmVUcmlnZ2VyRXhwaXJhdGlvbigpO1xuXG4gICAgLy8gaW5jcmVtZW50IHNlY29uZFxuICAgIHRoaXMuc3RhdGUuc2Vjb25kKys7XG5cbiAgICAvLyBhcGkgY2FsbGJhY2tcbiAgICAvLyB0aGlzLm9wdHMub25TZWNvbmQodGhpcy5zdGF0ZS5zZWNvbmQsIHRoaXMuc3RhdGUsIHRoaXMpO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuc2Vjb25kID49IHRoaXMuc3RhdGUuZHVyYXRpb24pIHtcbiAgICAgIHRoaXMuX2NsZWFyQ3ljbGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IGV4cGlyYXRpb24gYXR0cmlidXRlIHRvIHRyaWdnZXIgZnVydGhlciBhbmltYXRpb25zIHRocm91Z2ggY3NzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBUaGUgZXhwaXJhdGlvbiBuYW1lIHRvIHNldCBvbiB0aGUgYXR0cmlidXRlXG4gICAqL1xuICBfdXBkYXRlVWlFeHBpcmF0aW9uIChuYW1lKSB7XG4gICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKHRoaXMub3B0cy5hdHRyRXhwaXJhdGlvbiwgbmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogTG9vcCB0aHJvdWdoIHRoZSBleHBpcmF0aW9uIGJyZWFrcG9pbnRzIG9mIHRoZSBnaXZlbiBzdGF0ZVxuICAgKiBhbmQgY2hlY2sgaWYgdGhlIGN1cnJlbnQgc2Vjb25kIGhhcyBwYXN0IHRoZSBleHBpcmF0aW9uIGJyZWFrcG9pbnRcbiAgICogKHdoaWNoIGlzIGRlZmluZWQgaW4gcGVyY2VudGFnZSBiZWNhdXNlIHRoZSBzdGF0ZSBkdXJhdGlvbiBpcyBkeW5hbWljLFxuICAgKiBzbyB3ZSBuZWVkIHRvIGNhbGN1bGF0ZSB0aGUgYnJlYWtwb2ludCBpbiBzZWNvbmRzKS5cbiAgICovXG4gIF9tYXliZVRyaWdnZXJFeHBpcmF0aW9uICgpIHtcbiAgICBsZXQgZXhwaXJhdGlvbnMgPSB0aGlzLnN0YXRlLmV4cGlyYXRpb25zO1xuICAgIGlmICghZXhwaXJhdGlvbnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBleHBpcmF0aW9ucyBhcnJheSBtdXN0IGJlIHNldCBpbiBvcmRlciBmcm9tIGxvd2VyIHRvIGhpZ2hlciBwZXJjZW50YWdlXG4gICAgZm9yIChsZXQgaSA9IGV4cGlyYXRpb25zLmxlbmd0aDsgaS0tOykge1xuICAgICAgbGV0IGV4cGlyYXRpb24gPSBleHBpcmF0aW9uc1tpXTtcbiAgICAgIGxldCBzZWNvbmRCcmVha3BvaW50ID0gKHRoaXMuc3RhdGUuZHVyYXRpb24gLyAxMDApICogZXhwaXJhdGlvbi5wZXJjZW50O1xuXG4gICAgICBpZiAodGhpcy5zdGF0ZS5zZWNvbmQgPiBzZWNvbmRCcmVha3BvaW50KSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVVpRXhwaXJhdGlvbihleHBpcmF0aW9uLm5hbWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIC8vIG90aGVyd2lzZSByZXNldCB0aGUgZXhwaXJhdGlvbiBhdHRyaWJ1dGVcbiAgICB0aGlzLl91cGRhdGVVaUV4cGlyYXRpb24oJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIEl0IG1ha2VzIG9uZSBmdWxsIGxvb3Agd2l0aCB0aGUgZ2l2ZW4gZHVyYXRpb24gb3IgYnkgcmVhZGluZyB0aGUgY3VycmVudFxuICAgKiBzdGF0ZSBkdXJhdGlvblxuICAgKi9cbiAgX3J1bkFuaW1hdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX2FuaW1hdGlvbnMgJiYgdGhpcy5fYW5pbWF0aW9ucy5sZW5ndGgpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fYW5pbWF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLl9hbmltYXRpb25zW2ldLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpbml0IGFuaW1hdGlvbnNcbiAgICB0aGlzLl9hbmltYXRpb25zID0gW107XG4gICAgaWYgKHRoaXMuX19zdGF0ZVN2Z3MgJiYgdGhpcy5fX3N0YXRlU3Zncy5sZW5ndGgpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5fX3N0YXRlU3Zncy5sZW5ndGg7IGorKykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygncnVuIGZvciAnLCB0aGlzLl9fc3RhdGVTdmdzW2ldKVxuICAgICAgICB0aGlzLl9hbmltYXRpb25zLnB1c2gobmV3IFN2Z1BpZVRpbWVyKHtcbiAgICAgICAgICBlbGVtZW50OiB0aGlzLl9fc3RhdGVTdmdzW2pdLFxuICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLnN0YXRlLmR1cmF0aW9uLCAvLyBzZWNvbmRzXG4gICAgICAgICAgc3RhcnRGcm9tOiB0aGlzLnN0YXRlLnNlY29uZCAvLyBzZWNvbmRzXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IG9iamVjdCBmcm9tIGFycmF5XG4gICAqXG4gICAqIEBwYXJhbSAge0FycmF5fSBhcnJheVxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHZhbHVlXG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgVGhlIGxvb2t1cCBvYmplY3RcbiAgICovXG4gIF9nZXRPYmpGcm9tQXJyYXkgKGFycmF5LCB2YWx1ZSkge1xuICAgIGxldCBsb29rdXBPYmplY3QgPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGFycmF5Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbG9va3VwT2JqZWN0W2FycmF5W2ldW3ZhbHVlXV0gPSBhcnJheVtpXTtcbiAgICB9XG4gICAgcmV0dXJuIGxvb2t1cE9iamVjdDtcbiAgfVxufVxuXG4vLyBleHBvcnQgdG8gcHVibGljIEFQSVxuYXBpWydJdGVtJ10gPSBJdGVtO1xuXG5leHBvcnQgZGVmYXVsdCBJdGVtO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5Jztcbi8vIGltcG9ydCAnc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suanMnO1xuLy8gaW1wb3J0ICdzdGlja3kta2l0L2Rpc3Qvc3RpY2t5LWtpdCc7XG4vLyBpbXBvcnQgJ3N0aWNreS1qcy9kaXN0L3N0aWNreS5taW4nO1xuXG5jbGFzcyBJdGVtRGV0YWlsIHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy4kb25Jbml0KCk7XG4gICAgJChkb2N1bWVudCkucmVhZHkodGhpcy4kb25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0XG4gICAqL1xuICAkb25Jbml0ICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBkb2N1bWVudCByZWFkeVxuICAgKi9cbiAgJG9uUmVhZHkgKCkge1xuICAgIHRoaXMuX18kdGh1bWJzID0gJCgnI2FwcEl0ZW1EZXRhaWxfX3RodW1icycpO1xuICAgIHRoaXMuX18kc2xpZGVyID0gJCgnI2FwcEl0ZW1EZXRhaWxfX3NsaWRlcicpO1xuICAgIHRoaXMuX18kc3RpY2t5ID0gJCgnI2FwcEl0ZW1EZXRhaWxfX21haW4tc3RpY2t5Jyk7XG5cbiAgICBpZiAodGhpcy5fXyRzbGlkZXIubGVuZ3RoICYmIHRoaXMuX18kdGh1bWJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5faW5pdFNsaWRlclRodW1icygpO1xuICAgICAgdGhpcy5faW5pdFNsaWRlcigpO1xuICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCB0aGlzLl9vblJlc2l6ZVNsaWRlcnMuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX18kc3RpY2t5Lmxlbmd0aCkge1xuICAgICAgLy8gdGhpcy5fXyRzdGlja3kuc3RpY2tfaW5fcGFyZW50KCk7XG4gICAgICB0aGlzLl9pbml0U3RpY2t5KCk7XG4gICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIHRoaXMuX29uUmVzaXplU3RpY2t5LmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPbiByZXNpemUgc2xpZGVzIGJlaGF2aW91cnNcbiAgICovXG4gIF9vblJlc2l6ZVNsaWRlcnMgKCkge1xuICAgIC8vIG5vIHNsaWRlciBpZiB0aGVyZSBpcyBvbmx5IG9uZSBpbWFnZVxuICAgIGlmICh0aGlzLl9fJHNsaWRlci5maW5kKCdpbWcnKS5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMuX18kc2xpZGVyLnNsaWNrKCd1bnNsaWNrJyk7XG4gICAgICB0aGlzLl9fJHRodW1icy5zbGljaygndW5zbGljaycpO1xuICAgIH0gZWxzZSB7XG5cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT24gcmVzaXplIHN0aWNreSBiZWhhdmlvdXNcbiAgICovXG4gIF9vblJlc2l6ZVN0aWNreSAoKSB7XG4gICAgY29uc3Qgc2NyZWVuTGdWZXJzaW9uID0gJCh3aW5kb3cpLndpZHRoKCkgPj0gOTkyOyAvLyBAQHJlZiAkZ3JpZC1icmVha3BvaW50czogbGcsXG5cbiAgICBpZiAodGhpcy5fc3RpY2t5SW5pdGlhbGlzZWQgJiYgc2NyZWVuTGdWZXJzaW9uKSB7XG4gICAgICB0aGlzLl9fJHN0aWNreS51bnN0aWNrKCk7XG4gICAgICB0aGlzLl9zdGlja3lJbml0aWFsaXNlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9pbml0U3RpY2t5KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXQgc3RpY2t5XG4gICAqL1xuICBfaW5pdFN0aWNreSAoKSB7XG4gICAgaWYgKHRoaXMuX3N0aWNreUluaXRpYWxpc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX18kc3RpY2t5LnN0aWNreSh7XG4gICAgICByZXNwb25zaXZlV2lkdGg6IHRydWUsXG4gICAgICBjbGFzc05hbWU6ICdpcy1zdGlja3knXG4gICAgfSk7XG4gICAgLy8gdGhpcy5fc3RpY2t5ID0gbmV3IFN0aWNreSgnI2FwcEl0ZW1EZXRhaWxfX21haW4tc3RpY2t5Jyk7XG4gICAgdGhpcy5fc3RpY2t5SW5pdGlhbGlzZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXQgc2xpZGVyIHRodW1ibmFpbHNcbiAgICovXG4gIF9pbml0U2xpZGVyVGh1bWJzICgpIHtcbiAgICBpZiAoIXRoaXMuX18kdGh1bWJzLmxlbmd0aCB8fCB0aGlzLl9zbGlkZXJUaHVtYnNJbml0aWFsaXNlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX18kdGh1bWJzLnNsaWNrKHtcbiAgICAgIHZlcnRpY2FsOiB0cnVlLFxuICAgICAgLy8gdmVydGljYWxTd2lwaW5nOiB0cnVlLFxuICAgICAgLy8gY2VudGVyTW9kZTogc2NyZWVuTGdWZXJzaW9uLFxuICAgICAgc2xpZGVzVG9TaG93OiA4LFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICBhc05hdkZvcjogdGhpcy5fXyRzbGlkZXIsXG4gICAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxuICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgIC8vIGluZmluaXRlOiBmYWxzZSxcbiAgICAgIHJlc3BvbnNpdmU6IFt7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDk5MiwgLy8gQEByZWYgJGdyaWQtYnJlYWtwb2ludHM6IGxnXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgdmVydGljYWw6IGZhbHNlLFxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9KTtcblxuICAgIHRoaXMuX3NsaWRlclRodW1ic0luaXRpYWxpc2VkID0gdHJ1ZTtcblxuICAgIC8vIHJlbW92ZSBhY3RpdmUgY2xhc3MgZnJvbSBhbGwgdGh1bWJuYWlsIHNsaWRlc1xuICAgIHRoaXMuX18kdGh1bWJzLmZpbmQoJy5zbGljay1zbGlkZScpLnJlbW92ZUNsYXNzKCdzbGljay1hY3RpdmUnKTtcblxuICAgIC8vIHNldCBhY3RpdmUgY2xhc3MgdG8gZmlyc3QgdGh1bWJuYWlsIHNsaWRlc1xuICAgIHRoaXMuX18kdGh1bWJzLmZpbmQoJy5zbGljay1zbGlkZScpLmVxKDApLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0IHNsaWRlclxuICAgKi9cbiAgX2luaXRTbGlkZXIgKCkge1xuICAgIGlmICghdGhpcy5fXyRzbGlkZXIubGVuZ3RoIHx8ICF0aGlzLl9fJHRodW1icy5sZW5ndGggfHwgdGhpcy5fc2xpZGVySW5pdGlhbGlzZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9fJHNsaWRlci5zbGljayh7XG4gICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgYXNOYXZGb3I6IHRoaXMuX18kdGh1bWJzXG4gICAgfSk7XG5cbiAgICB0aGlzLl9zbGlkZXJJbml0aWFsaXNlZCA9IHRydWU7XG5cbiAgICAvLyBvbiBiZWZvcmUgc2xpZGUgY2hhbmdlIG1hdGNoIGFjdGl2ZSB0aHVtYm5haWwgdG8gY3VycmVudCBzbGlkZVxuICAgIHRoaXMuX18kc2xpZGVyLm9uKCdiZWZvcmVDaGFuZ2UnLCAoZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSkgPT4ge1xuICAgICAgdGhpcy5fXyR0aHVtYnMuZmluZCgnLnNsaWNrLXNsaWRlJykucmVtb3ZlQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpO1xuICAgICAgdGhpcy5fXyR0aHVtYnMuZmluZCgnLnNsaWNrLXNsaWRlJykuZXEobmV4dFNsaWRlKS5hZGRDbGFzcygnc2xpY2stYWN0aXZlJyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVpbml0IFVJXG4gICAqL1xuICByZWluaXRVSSAoKSB7XG4gICAgdGhpcy5faW5pdFNsaWRlcigpO1xuICAgIHRoaXMuX2luaXRTbGlkZXJUaHVtYnMoKTtcbiAgICB0aGlzLl9pbml0U3RpY2t5KCk7XG4gIH1cbn1cblxubGV0IGl0ZW1EZXRhaWwgPSBuZXcgSXRlbURldGFpbCgpO1xuXG5leHBvcnQgZGVmYXVsdCBpdGVtRGV0YWlsO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY29uc3QgYSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5jb25zdCBwID0gbmF2aWdhdG9yLnBsYXRmb3JtO1xuXG5jb25zdCBicm93c2VycyA9IHtcbiAgJ3NhZmFyaSc6IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh3aW5kb3cuSFRNTEVsZW1lbnQpLmluZGV4T2YoJ0NvbnN0cnVjdG9yJykgPiAwLFxuICAvLyAnY2hyb21lJzogISF3aW5kb3cuY2hyb21lICYmICFvcGVyYSxcbiAgJ2llJzogLypAY2Nfb24hQCovZmFsc2UgfHwgISFkb2N1bWVudC5kb2N1bWVudE1vZGUsXG4gIC8vICdtYWMnOiBwLnRvVXBwZXJDYXNlKCkuaW5kZXhPZignTUFDJykgPj0gMCxcbiAgLy8gJ21hY0xpa2UnOiBwLm1hdGNoKC8oTWFjfGlQaG9uZXxpUG9kfGlQYWQpL2kpID8gdHJ1ZSA6IGZhbHNlLFxuICAnaW9zJzogcC5tYXRjaCgvKGlQaG9uZXxpUG9kfGlQYWQpL2kpID8gdHJ1ZSA6IGZhbHNlLFxuICAvLyAnd2luZG93cyc6IHAudG9VcHBlckNhc2UoKS5pbmRleE9mKCdXSU4nKSE9PS0xLFxuICAvLyAnbGludXgnOiBwLnRvVXBwZXJDYXNlKCkuaW5kZXhPZignTElOVVgnKSE9PS0xLFxuICAvLyAnYW5kcm9pZCc6IC9BbmRyb2lkL2kudGVzdChhKSxcbiAgLy8gJ2JsYWNrQmVycnknOiAvQmxhY2tCZXJyeS9pLnRlc3QoYSksXG4gIC8vICdpb3MnOiAvaVBob25lfGlQYWR8aVBvZC9pLnRlc3QoYSksXG59O1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIHZhciAkaHRtbCA9ICQoJ2h0bWwnKTtcbiAgZm9yIChuYW1lIGluIGJyb3dzZXJzKSB7XG4gICAgbGV0IGlzSXQgPSAhIWJyb3dzZXJzW25hbWVdO1xuICAgIC8vIGJyb3dzZXJzW2Jyb3dzZXJdO1xuICAgICRodG1sLnRvZ2dsZUNsYXNzKG5hbWUsIGlzSXQpO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgYnJvd3NlcnM7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IGFwaSBmcm9tICcuL2FwaSc7XG5cbmNsYXNzIENoZWNrb3V0IHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgLy8gYm9vdHN0cmFwXG4gICAgdGhpcy4kb25Jbml0KCk7XG4gICAgJChkb2N1bWVudCkucmVhZHkodGhpcy4kb25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0XG4gICAqL1xuICAkb25Jbml0ICgpIHtcbiAgICB0aGlzLl9icmVha3BvaW50TW9iaWxlID0gNjAwO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIGRvY3VtZW50IHJlYWR5XG4gICAqL1xuICAkb25SZWFkeSAoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2FwcC5qcyBkb2N1bWVudCBpcyByZWFkeScpO1xuICAgIHRoaXMuX18kd3JhcHBlciA9ICQoJyNoc0NoZWNrb3V0Jyk7XG5cbiAgICAvLyBiYWlsIGlmIHdlIGFyZSBub3Qgb24gdGhlIGNoZWNrb3V0IHBhZ2VcbiAgICBpZiAoIXRoaXMuX18kd3JhcHBlci5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9fJGZvcm0gPSAkKCcjaHNDaGVja291dF9fZm9ybScpO1xuICAgIHRoaXMuX18kd3JhcHBlckxlZnQgPSAkKCcuaHNDaGVja291dF9fbWFpbi1sZWZ0Jyk7XG4gICAgdGhpcy5fXyRicmVhZGNydW1icyA9ICQoJy5oc0NoZWNrb3V0X19icmVhZGNydW1iJyk7XG5cbiAgICB0aGlzLl9fJGNvdXBvbkFyZWEgPSAkKCcuaHNDaGVja291dF9fY291cG9uLWFyZWEnKTtcbiAgICB0aGlzLl9fJGNvdXBvblRyaWdnZXIgPSAkKCcuaHNDaGVja291dF9fY291cG9uLXRyaWdnZXInKTtcbiAgICB0aGlzLl9fJGNvdXBvbklucHV0ID0gJCgnLmhzQ2hlY2tvdXRfX2NvdXBvbi1pbnB1dCcpO1xuICAgIHRoaXMuX18kY291cG9uU3VibWl0ID0gJCgnLmhzQ2hlY2tvdXRfX2NvdXBvbi1zdWJtaXQnKTtcbiAgICB0aGlzLl9fJGNvdXBvbkZlZWRiYWNrID0gJCgnLmhzQ2hlY2tvdXRfX2NvdXBvbi1mZWVkYmFjaycpO1xuXG4gICAgdGhpcy5fXyRhZGRyZXNzUHJlZmlsbGVkID0gJCgnI2hzQWRkcmVzc19fcHJlZmlsbGVkJyk7XG4gICAgdGhpcy5fXyRpbnB1dFZvb3JuYW0gPSAkKCcjdm9vcm5hYW0nKTtcbiAgICB0aGlzLl9fJGlucHV0QWNodGVybmFhbSA9ICQoJyNhY2h0ZXJuYWFtJyk7XG4gICAgdGhpcy5fXyRpbnB1dFN0cmFhdCA9ICQoJyNzdHJhYXQnKTtcbiAgICB0aGlzLl9fJGlucHV0SHVpc251bW1lciA9ICQoJyNodWlzbnVtbWVyJyk7XG4gICAgdGhpcy5fXyRpbnB1dFBvc3Rjb2RlID0gJCgnI3Bvc3Rjb2RlJyk7XG4gICAgdGhpcy5fXyRpbnB1dFdvb25wbGFhdHMgPSAkKCcjd29vbnBsYWF0cycpO1xuICAgIHRoaXMuX18kaW5wdXRMYW5kID0gJCgnI2xhbmQnKTtcbiAgICB0aGlzLl9fJGFkZHJlc3NEaXNwbGF5ID0gJCgnI2hzQWRkcmVzc19fZGlzcGxheScpO1xuXG4gICAgdGhpcy5fXyRjb3N0V2luYmVkcmFnID0gJCgnLmhzQ2hlY2tvdXRfX2Nvc3Qtd2luYmVkcmFnJyk7XG4gICAgdGhpcy5fXyRjb3N0V2luYmVkcmFnRGVsID0gJCgnLmhzQ2hlY2tvdXRfX2Nvc3Qtd2luYmVkcmFnLS1kZWwnKTtcbiAgICB0aGlzLl9fJGNvc3RWZXJ6ZW5ka29zdGVuID0gJCgnLmhzQ2hlY2tvdXRfX2Nvc3QtdmVyemVuZGtvc3RlbicpO1xuICAgIHRoaXMuX18kY29zdFZlaWxpbmdrb3N0ZW4gPSAkKCcuaHNDaGVja291dF9fY29zdC12ZWlsaW5na29zdGVuJyk7XG4gICAgdGhpcy5fXyRjb3N0VG90YWFsID0gJCgnLmhzQ2hlY2tvdXRfX2Nvc3QtdG90YWFsJyk7XG5cbiAgICB0aGlzLl9fJGV4cGFuZGVyID0gJCgnLmhzQ2hlY2tvdXRfX2V4cGFuZGVyJyk7XG4gICAgdGhpcy5fXyRzdGVwMCA9ICQoJyNoc0NoZWNrb3V0X19zdGVwLTAnKTtcbiAgICB0aGlzLl9fJHN0ZXAxID0gJCgnI2hzQ2hlY2tvdXRfX3N0ZXAtMScpO1xuICAgIHRoaXMuX18kYnRuVG9TdGVwMSA9ICQoJy5oc0NoZWNrb3V0X190b3N0ZXAxJyk7XG4gICAgdGhpcy5fXyRidG5Ub1N0ZXAyID0gJCgnLmhzQ2hlY2tvdXRfX3Rvc3RlcDInKTtcbiAgICB0aGlzLl9fJHN1bW1hcnkgPSAkKCcuaHNDaGVja291dF9fbWFpbi1zdW1tYXJ5Jyk7XG5cbiAgICB0aGlzLl9fJHBheW1lbnRNZXRob2RzID0gJCgnaW5wdXRbbmFtZT1cInBheS1tZXRob2RcIl0nKTtcbiAgICB0aGlzLl9fJHBheW1lbnRCYW5rcyA9ICQoJ2lucHV0W25hbWU9XCJwYXktYmFua1wiXScpO1xuICAgIHRoaXMuX18kbWV0aG9kSWRlYWwgPSAkKCcuaHNDaGVja291dF9fbWV0aG9kLS1pZGVhbCcpO1xuICAgIHRoaXMuX18kYmFua1NlbGVjdG9yID0gJCgnLmhzQ2hlY2tvdXRfX2JhbmtzJyk7XG4gICAgdGhpcy5fXyRidG5TdWJtaXQgPSAkKCcuaHNDaGVja291dF9fc3VibWl0Jyk7XG5cbiAgICB0aGlzLl9fJGRldGFpbHMgPSAkKCcuaHNDaGVja291dF9fZGV0YWlscycpO1xuXG4gICAgLy8gYW5pbWF0ZSBzdGVwcyBAQGRpc2FibGVkXG4gICAgLy8gY29uc3QgbWluSGVpZ2h0ID0gdGhpcy5fXyRzdGVwMC5vdXRlckhlaWdodCgpICogMS41O1xuICAgIC8vIHRoaXMuX18kd3JhcHBlci5jc3MoJ21pbi1oZWlnaHQnLCBtaW5IZWlnaHQpO1xuICAgIC8vIHRoaXMuX18kd3JhcHBlckxlZnQuY3NzKCdtaW4taGVpZ2h0JywgbWluSGVpZ2h0KTtcblxuICAgIHRoaXMubWFuYWdlVmFsaWRhdGlvbigpO1xuXG4gICAgdGhpcy5fYmluZFVJKCk7XG5cbiAgICAvLyBzdGFydCBieSBzdGVwIDAgb24gbG9hZFxuICAgIHRoaXMuZ29Ub1N0ZXAoMCk7XG4gIH1cblxuICAvKipcbiAgICogTWFuYWdlIGZvcm0gdmFsaWRhdGlvblxuICAgKlxuICAgKiBAc2VlIG9wdGlvbnMgaGVyZSBodHRwczovL2pxdWVyeXZhbGlkYXRpb24ub3JnL3ZhbGlkYXRlL1xuICAgKiBAQHRvZG8gcGVyaGFwcyB1c2UgdGhpcyB0byBzdHlsZSB0aGUgdmFsaWRhdG9yIG9uIHRoZSBhbGxcbiAgICogd2Vic2l0ZTogYCQudmFsaWRhdG9yLnNldERlZmF1bHRzKHt9KWBcbiAgICovXG4gIG1hbmFnZVZhbGlkYXRpb24gKCkge1xuICAgIHRoaXMuX3ZhbGlkYXRpb24gPSB0aGlzLl9fJGZvcm0udmFsaWRhdGUoe1xuICAgICAgLy8gc3VibWl0SGFuZGxlcjogKCkgPT4ge1xuICAgICAgLy8gICB0aGlzLmdvVG9TdGVwKDEpO1xuICAgICAgLy8gfSxcbiAgICAgIGVycm9yQ2xhc3M6ICdoYXMtZGFuZ2VyJyxcbiAgICAgIHZhbGlkQ2xhc3M6ICdoYXMtc3VjY2VzcycsXG4gICAgICAvLyBlcnJvckVsZW1lbnQ6ICc8ZGl2IGNsYXNzPVwiZm9ybS1jb250cm9sLWZlZWRiYWNrXCI+JyxcbiAgICAgIC8vIGhpZ2hsaWdodDogZnVuY3Rpb24oZWxlbWVudCwgZXJyb3JDbGFzcywgdmFsaWRDbGFzcykge1xuICAgICAgLy8gICAkKGVsZW1lbnQpLnBhcmVudCgpLmFkZENsYXNzKGVycm9yQ2xhc3MpLnJlbW92ZUNsYXNzKHZhbGlkQ2xhc3MpO1xuICAgICAgLy8gfSxcbiAgICAgIC8vIHVuaGlnaGxpZ2h0OiBmdW5jdGlvbihlbGVtZW50LCBlcnJvckNsYXNzLCB2YWxpZENsYXNzKSB7XG4gICAgICAvLyAgICQoZWxlbWVudCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoZXJyb3JDbGFzcykuYWRkQ2xhc3ModmFsaWRDbGFzcyk7XG4gICAgICAvLyB9XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2codGhpcy5fdmFsaWRhdGlvbilcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIFVJXG4gICAqL1xuICBfYmluZFVJICgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIC8vIGJyZWFhZGNydW1ic1xuICAgIHNlbGYuX18kYnJlYWRjcnVtYnMub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IGVsID0gZS50YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgIGlmIChlbCkge1xuICAgICAgICBjb25zdCBzdGVwID0gJChlbCkuaW5kZXgoKTtcbiAgICAgICAgaWYgKHN0ZXAgPT09IDEpIHtcbiAgICAgICAgICBpZiAoc2VsZi5fXyRmb3JtLnZhbGlkKCkpIHtcbiAgICAgICAgICAgIHNlbGYuZ29Ub1N0ZXAoc3RlcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYuZ29Ub1N0ZXAoc3RlcCk7XG4gICAgICAgIH1cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gY291cG9uIGFyZWFcbiAgICBzZWxmLl9fJGNvdXBvbkFyZWEuaGlkZSgpO1xuICAgIHNlbGYuX18kY291cG9uRmVlZGJhY2suaGlkZSgpO1xuICAgIHNlbGYuX18kY291cG9uU3VibWl0LmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgc2VsZi5fXyRjb3Vwb25UcmlnZ2VyLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuX18kY291cG9uVHJpZ2dlci5zbGlkZVVwKDEwMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLl9fJGNvdXBvbkFyZWEuc2xpZGVEb3duKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBzZWxmLl9fJGNvdXBvbklucHV0Lm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICAgIHNlbGYuX18kY291cG9uU3VibWl0LmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5fXyRjb3Vwb25TdWJtaXQuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZWxmLl9fJGNvdXBvblN1Ym1pdC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLl9fJGNvdXBvbkZlZWRiYWNrLnNsaWRlRG93bigpO1xuICAgICAgc2VsZi5hcHBseUNvdXBvbihzZWxmLl9fJGNvdXBvbkZlZWRiYWNrLmRhdGEoJ2Rpc2NvdW50JykpO1xuICAgICAgc2VsZi5fXyRjb3Vwb25TdWJtaXQuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgIHNlbGYuX18kY291cG9uSW5wdXQub2ZmKCdpbnB1dCcpO1xuICAgIH0pO1xuXG4gICAgLy8gbW9iaWxlIGV4cGFuZGVyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgc2VsZi5fYnJlYWtwb2ludE1vYmlsZSkge1xuICAgICAgc2VsZi5fXyRzdW1tYXJ5LmhpZGUoKTtcbiAgICAgIHNlbGYuX18kZXhwYW5kZXIucmVtb3ZlQ2xhc3MoJ2V4cGFuZGVkJykuc2hvdygpO1xuICAgIH1cbiAgICBzZWxmLl9fJGV4cGFuZGVyLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuX18kc3VtbWFyeS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgc2VsZi5fXyRleHBhbmRlci50b2dnbGVDbGFzcygnZXhwYW5kZWQnKTtcbiAgICB9KTtcblxuICAgIC8vIGFkZHJlc3MgY2hvaWNlXG4gICAgc2VsZi5fXyRkZXRhaWxzLmhpZGUoKTtcbiAgICBpZiAoISEkKCdpbnB1dFtuYW1lPVwiYWRkcmVzc2Nob2ljZVwiXTpjaGVja2VkJykudmFsKCkpIHtcbiAgICAgIHNlbGYuX18kZGV0YWlscy5zbGlkZURvd24oKTtcbiAgICB9XG4gICAgJCgnaW5wdXRbbmFtZT1cImFkZHJlc3NjaG9pY2VcIl0nKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5fXyRkZXRhaWxzLnNsaWRlVG9nZ2xlKCEhdGhpcy52YWx1ZSk7XG4gICAgfSk7XG5cbiAgICAvLyB0byBzdGVwMVxuICAgIHNlbGYuX18kYnRuVG9TdGVwMS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc2VsZi5nb1RvU3RlcCgwKTtcbiAgICB9KTtcblxuICAgIC8vIHRvIHN0ZXAyXG4gICAgc2VsZi5fXyRidG5Ub1N0ZXAyLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoc2VsZi5fXyRmb3JtLnZhbGlkKCkpIHtcbiAgICAgICAgc2VsZi5nb1RvU3RlcCgxKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIHBheW1lbnQgbWV0aG9kXG4gICAgc2VsZi5fXyRiYW5rU2VsZWN0b3IuaGlkZSgpO1xuICAgIHNlbGYuX18kYnRuU3VibWl0LmhpZGUoKTtcbiAgICBzZWxmLl9fJHBheW1lbnRNZXRob2RzLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy52YWx1ZSA9PT0gJ2lkZWFsJykge1xuICAgICAgICBzZWxmLl9tYXliZVNob3dTdWJtaXRCdG4oc2VsZi5faXNCYW5rU2VsZWN0ZWQpO1xuICAgICAgICBzZWxmLl9fJGJhbmtTZWxlY3Rvci5zbGlkZURvd24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuX18kYnRuU3VibWl0LnNsaWRlRG93bigpO1xuICAgICAgICBzZWxmLl9fJGJhbmtTZWxlY3Rvci5zbGlkZVVwKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBiYW5rIHNlbGVjdGlvblxuICAgIHNlbGYuX18kcGF5bWVudEJhbmtzLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLl9pc0JhbmtTZWxlY3RlZCA9ICEhdGhpcy52YWx1ZTsgLy8gbWFrZSBpdCBhIGJvb2xlYW5cbiAgICAgIHNlbGYuX21heWJlU2hvd1N1Ym1pdEJ0bighIXRoaXMudmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1heWJlIHNob3cgdGhlIHN1Ym1pdCBidXR0b25cbiAgICogQHBhcmFtICB7Ym9vbGVhbn0gc2hvd0l0XG4gICAqL1xuICBfbWF5YmVTaG93U3VibWl0QnRuIChzaG93SXQpIHtcbiAgICBpZiAoc2hvd0l0KSB7XG4gICAgICB0aGlzLl9fJGJ0blN1Ym1pdC5zbGlkZURvd24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fXyRidG5TdWJtaXQuc2xpZGVVcCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHbyB0byBzdGVwXG4gICAqXG4gICAqIEBwYXJhbSAge051bWJlcn0gc3RlcCBlLmcuIDAsIDEsIDIsIGV0Yy5cbiAgICovXG4gIGdvVG9TdGVwIChzdGVwKSB7XG4gICAgLy8gZmlyc3QgcmVtb3ZlIGNsYXNzIGZyb20gYWxsIGJyZWFkY3J1bWJzXG4gICAgdGhpcy5fXyRicmVhZGNydW1icy5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAvLyBhZGQgdGhlIGFjdGl2ZSBjbGFzc1xuICAgIHRoaXMuX18kYnJlYWRjcnVtYnMuZmlsdGVyKChpbmRleCwgZWxlbSkgPT4ge1xuICAgICAgaWYgKGluZGV4ID09PSBzdGVwKSB7XG4gICAgICAgIC8vIGhpZ2hsaWdodCBjdXJyZW50IGJyZWFkY3J1bWJcbiAgICAgICAgJChlbGVtKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgLy8gdXNlZnVsIGZvciBnbG9iYWwgc3R5bGluZyBhbmQgaGlkaW5nL3Nob3dpbmcgYmFzZWQgb24gY3VycmVudCBzdGVwXG4gICAgICAgIHRoaXMuX18kd3JhcHBlci5hdHRyKCdkYXRhLXN0ZXAnLCBzdGVwKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChzdGVwID09PSAxKSB7XG4gICAgICB0aGlzLm1hbmFnZUFkZHJlc3MoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgY291cG9uXG4gICAqIEBwYXJhbSAge051bWJlcn0gZGlzY291bnQgVGhlIGFtb3VudCBvZiBkaXNjb3VudCBpbiBjYXNoXG4gICAqL1xuICBhcHBseUNvdXBvbiAoZGlzY291bnQpIHtcbiAgICBjb25zdCBjdXJyZW50UHJpY2UgPSB0aGlzLl9fJGNvc3RXaW5iZWRyYWcuZGF0YSgndmFsJyk7XG4gICAgY29uc3QgbmV3UHJpY2UgPSBwYXJzZUZsb2F0KGN1cnJlbnRQcmljZSkgLSBwYXJzZUZsb2F0KGRpc2NvdW50KTtcblxuICAgIC8vIGZpbGwgZGVsZXRlZCBwcmljZVxuICAgIHRoaXMuX18kY29zdFdpbmJlZHJhZ0RlbC5odG1sKHRoaXMuZm9ybWF0UHJpY2UoY3VycmVudFByaWNlKSk7XG5cbiAgICAvLyB1cGRhdGUgd2luYmVkcmFnIHByaWNlIChhbHNvIGl0J3MgZGF0YSByYXcgbnVtYmVyIHZhbHVlKVxuICAgIHRoaXMuX18kY29zdFdpbmJlZHJhZy5odG1sKHRoaXMuZm9ybWF0UHJpY2UobmV3UHJpY2UpKS5kYXRhKCd2YWwnLCBuZXdQcmljZSk7XG5cbiAgICAvLyB1cGRhdGUgdG90YWFsIHByaWNlXG4gICAgdGhpcy5fXyRjb3N0VG90YWFsLmh0bWwodGhpcy5mb3JtYXRQcmljZSh0aGlzLmdldFRvdGFsUHJpY2UoKSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0b3RhbCBwcmljZSBieSBzdW1taW5nIHZhbHVlcyBvbiB0aGUgRE9NXG4gICAqIEByZXR1cm4ge051bWJlcn1cbiAgICovXG4gIGdldFRvdGFsUHJpY2UgKCkge1xuICAgIGNvbnN0IGEgPSB0aGlzLmdldFByaWNlRnJvbSh0aGlzLl9fJGNvc3RXaW5iZWRyYWcpO1xuICAgIGNvbnN0IGIgPSB0aGlzLmdldFByaWNlRnJvbSh0aGlzLl9fJGNvc3RWZXJ6ZW5ka29zdGVuKTtcbiAgICBjb25zdCBjID0gdGhpcy5nZXRQcmljZUZyb20odGhpcy5fXyRjb3N0VmVpbGluZ2tvc3Rlbik7XG4gICAgcmV0dXJuIGEgKyBiICsgYztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcHJpY2UgZnJvbSBqUXVlcnkgRE9NIGVsZW1lbnRcbiAgICogQHBhcmFtICB7alF1ZXJ5fSAkZWxlbVxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAqL1xuICBnZXRQcmljZUZyb20gKCRlbGVtKSB7XG4gICAgbGV0IGFzU3RyaW5nO1xuICAgIGxldCB2YWwgPSAkZWxlbS5kYXRhKCd2YWwnKS50b1N0cmluZygpO1xuXG4gICAgaWYgKHZhbCkge1xuICAgICAgYXNTdHJpbmcgPSB2YWwucmVwbGFjZSgnLCcsICcuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzU3RyaW5nID0gJzAnO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VGbG9hdChhc1N0cmluZyk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIHplcm9lc1xuICAgKiBAc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI0MDM5NDQ4LzE5Mzg5NzBcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIGZvcm1hdFByaWNlICh2YWx1ZSkge1xuICAgIGNvbnN0IGFzTnVtYmVyID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgLy8gcmVwbGFjZSBkb3Qgd2l0aCBjb21tYSBhcyBpbiBkZXNpZ25cbiAgICBjb25zdCBwcmljZSA9IGFzTnVtYmVyLnRvRml4ZWQoMikucmVwbGFjZSgnLicsICcsJyk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVuY3koKSArICcgJyArIHByaWNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjdXJyZW5jeVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBnZXRDdXJyZW5jeSAoKSB7XG4gICAgcmV0dXJuICfigqwnO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hbmFnZSBhZGRyZXNzXG4gICAqL1xuICBtYW5hZ2VBZGRyZXNzICgpIHtcbiAgICBsZXQgcHJlZmlsbGVkQWRkcmVzcztcblxuICAgIGlmICghJCgnaW5wdXRbbmFtZT1hZGRyZXNzY2hvaWNlXTpjaGVja2VkJykudmFsKCkgJiYgdGhpcy5fXyRhZGRyZXNzUHJlZmlsbGVkLmh0bWwoKSkge1xuICAgICAgcHJlZmlsbGVkQWRkcmVzcyA9IHRoaXMuX18kYWRkcmVzc1ByZWZpbGxlZC5odG1sKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc3Qgdm9vcm5hbSA9IHRoaXMuX18kaW5wdXRWb29ybmFtLnZhbCgpO1xuICAgICAgY29uc3QgYWNodGVybmFhbSA9IHRoaXMuX18kaW5wdXRBY2h0ZXJuYWFtLnZhbCgpO1xuICAgICAgY29uc3Qgc3RyYWF0ID0gdGhpcy5fXyRpbnB1dFN0cmFhdC52YWwoKTtcbiAgICAgIGNvbnN0IGh1aXNudW1tZXIgPSB0aGlzLl9fJGlucHV0SHVpc251bW1lci52YWwoKTtcbiAgICAgIGNvbnN0IHBvc3Rjb2RlID0gdGhpcy5fXyRpbnB1dFBvc3Rjb2RlLnZhbCgpO1xuICAgICAgY29uc3Qgd29vbnBsYWF0cyA9IHRoaXMuX18kaW5wdXRXb29ucGxhYXRzLnZhbCgpO1xuICAgICAgY29uc3QgbGFuZCA9IHRoaXMuX18kaW5wdXRMYW5kLmZpbmQoJzpzZWxlY3RlZCcpLnRleHQoKTtcblxuICAgICAgcHJlZmlsbGVkQWRkcmVzcyA9IGAke3Zvb3JuYW19ICR7YWNodGVybmFhbX0sICR7c3RyYWF0fSAke2h1aXNudW1tZXJ9LFxuICAgICAgICA8YnI+JHtwb3N0Y29kZX0sICR7d29vbnBsYWF0c30sICR7bGFuZH1gO1xuICAgIH1cblxuICAgIHRoaXMuX18kYWRkcmVzc0Rpc3BsYXkuaHRtbChwcmVmaWxsZWRBZGRyZXNzKTtcbiAgfVxufVxuXG4vLyBleHBvcnQgdG8gcHVibGljIEFQSVxuYXBpWydjaGVja291dCddID0gbmV3IENoZWNrb3V0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0O1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBhcGkgZnJvbSAnLi9hcGknO1xuXG5jbGFzcyBTZWxsZXIge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvLyBib290c3RyYXBcbiAgICAkKGRvY3VtZW50KS5yZWFkeSh0aGlzLiRvblJlYWR5LmJpbmQodGhpcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIGRvY3VtZW50IHJlYWR5XG4gICAqL1xuICAkb25SZWFkeSAoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2FwcC5qcyBkb2N1bWVudCBpcyByZWFkeScpO1xuICAgIHRoaXMuX18kd3JhcHBlciA9ICQoJyNoc1NlbGxlcmNvbnRhY3QnKTtcblxuICAgIC8vIGJhaWwgaWYgd2UgYXJlIG5vdCBvbiB0aGUgcmlnaHQgcGFnZVxuICAgIGlmICghdGhpcy5fXyR3cmFwcGVyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX18kY291bnRyeVNlbGVjdG9yID0gJCgnLmhzTGV2ZXJlbkNvdW50cnknKTtcblxuICAgIHRoaXMuX2JpbmRVSSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgVUlcbiAgICovXG4gIF9iaW5kVUkgKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgc2VsZi5fXyRjb3VudHJ5U2VsZWN0b3IuaGlkZSgpO1xuICAgIC8vIGlmICghISQoJ2lucHV0W25hbWU9XCJsZXZlcmVuXCJdOmNoZWNrZWQnKS52YWwoKSkge1xuICAgIC8vICAgc2VsZi5fXyRjb3VudHJ5U2VsZWN0b3Iuc2xpZGVEb3duKCk7XG4gICAgLy8gfVxuXG4gICAgJCgnaW5wdXRbbmFtZT1cImxldmVyZW5cIl0nKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgaXNZZXMgPSB0aGlzLnZhbHVlID09PSAnamEnO1xuICAgICAgaWYgKGlzWWVzKSB7XG4gICAgICAgIHNlbGYuX18kY291bnRyeVNlbGVjdG9yLnNsaWRlRG93bigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5fXyRjb3VudHJ5U2VsZWN0b3Iuc2xpZGVVcCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbi8vIGV4cG9ydCB0byBwdWJsaWMgQVBJXG5hcGlbJ3NlbGxlciddID0gbmV3IFNlbGxlcigpO1xuXG5leHBvcnQgZGVmYXVsdCBTZWxsZXI7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IGFwaSBmcm9tICcuL2FwaSc7XG5cbmNsYXNzIEFjY291bnQge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvLyBib290c3RyYXBcbiAgICB0aGlzLiRvbkluaXQoKTtcbiAgICAkKGRvY3VtZW50KS5yZWFkeSh0aGlzLiRvblJlYWR5LmJpbmQodGhpcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRcbiAgICovXG4gICRvbkluaXQgKCkge1xuICAgIHRoaXMuX2JyZWFrcG9pbnRNb2JpbGUgPSA2MDA7XG4gIH1cblxuICAvKipcbiAgICogT24gZG9jdW1lbnQgcmVhZHlcbiAgICovXG4gICRvblJlYWR5ICgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnYXBwLmpzIGRvY3VtZW50IGlzIHJlYWR5Jyk7XG4gICAgdGhpcy5fXyR3cmFwcGVyID0gJCgnLmhzQWNjb3VudCcpO1xuXG4gICAgLy8gYmFpbCBpZiB3ZSBhcmUgbm90IG9uIHRoZSBhY2NvdW50IHBhZ2VcbiAgICBpZiAoIXRoaXMuX18kd3JhcHBlci5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl90dE1vZGFsKCk7XG4gICAgdGhpcy5fZ2VnZXZlbnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFjayBhbmQgdHJhY2UgbW9kYWxcbiAgICovXG4gIF90dE1vZGFsICgpIHtcbiAgICBsZXQgJHR0TW9kYWwgPSAkKCcjaHNUdE1vZGFsJyk7XG4gICAgaWYgKCEkdHRNb2RhbC5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5oc0FjY291bnRfX3RhYmxlLXR0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICR0dE1vZGFsLm1vZGFsKCk7XG4gICAgICAkdHRNb2RhbC5maW5kKCcudHRfX3ZlcnplbmRwYXJ0aWonKS50ZXh0KHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXZlcnplbmRwYXJ0aWonKSk7XG4gICAgICAkdHRNb2RhbC5maW5kKCcudHRfX2NvZGUnKS50ZXh0KHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWNvZGUnKSk7XG4gICAgICAvLyAkdHRNb2RhbC5vbignc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAvLyAgIC8vIGRvIHNvbWV0aGluZy4uLlxuICAgICAgLy8gfSlcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZWdldmVucyB2aWV3cyBzd2l0Y2hcbiAgICovXG4gIF9nZWdldmVucyAoKSB7XG4gICAgY29uc3QgJGJ0blRvRWRpdCA9ICQoJyNnZWdldmVuc19zd2l0Y2hlZGl0Jyk7XG4gICAgY29uc3QgJHZpZXdTaG93ID0gJCgnI2dlZ2V2ZW5zX3Nob3cnKTtcbiAgICBjb25zdCAkdmlld0VkaXQgPSAkKCcjZ2VnZXZlbnNfZWRpdCcpO1xuXG4gICAgaWYgKCEkYnRuVG9FZGl0Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IF9zd2l0Y2hWaWV3ID0gKGV2ZW50LCBuYW1lKSA9PiB7XG4gICAgICBsZXQgbmV3VmlldyA9IG5hbWU7XG4gICAgICBsZXQgY3VycmVudFZpZXcgPSB0aGlzLl9jdXJyZW50VmlldztcbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgaWYgKCFuZXdWaWV3KSB7XG4gICAgICAgIG5ld1ZpZXcgPSBsb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgICB9XG4gICAgICBpZiAoIW5ld1ZpZXcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG5ld1ZpZXcgPT09ICdzaG93JyAmJiBjdXJyZW50VmlldyAhPT0gJ3Nob3cnKSB7XG4gICAgICAgICR2aWV3RWRpdC5zbGlkZVVwKCk7XG4gICAgICAgICR2aWV3U2hvdy5zbGlkZURvd24oKTtcbiAgICAgICAgbG9jYXRpb24uaGFzaCA9IHRoaXMuX2N1cnJlbnRWaWV3ID0gJ3Nob3cnO1xuICAgICAgfSBlbHNlIGlmIChuZXdWaWV3ID09PSAnZWRpdCcgJiYgY3VycmVudFZpZXcgIT09ICdlZGl0Jykge1xuICAgICAgICAkdmlld1Nob3cuc2xpZGVVcCgpO1xuICAgICAgICAkdmlld0VkaXQuc2xpZGVEb3duKCk7XG4gICAgICAgIGxvY2F0aW9uLmhhc2ggPSB0aGlzLl9jdXJyZW50VmlldyA9ICdlZGl0JztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIF9zd2l0Y2hWaWV3LCBmYWxzZSk7XG5cbiAgICBfc3dpdGNoVmlldyhudWxsLCAnc2hvdycpO1xuXG4gICAgJGJ0blRvRWRpdC5jbGljaygoZSkgPT4geyBfc3dpdGNoVmlldyhlLCAnZWRpdCcgKX0pO1xuICB9XG59XG5cbi8vIGV4cG9ydCB0byBwdWJsaWMgQVBJXG5hcGlbJ2FjY291bnQnXSA9IG5ldyBBY2NvdW50KCk7XG5cbmV4cG9ydCBkZWZhdWx0IEFjY291bnQ7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IGFwaSBmcm9tICcuL2FwaSc7XG5cbmNsYXNzIENvdW50ZG93biB7XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuJG9uSW5pdCgpO1xuICAgICQoZG9jdW1lbnQpLnJlYWR5KHRoaXMuJG9uUmVhZHkuYmluZCh0aGlzKSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdFxuICAgKi9cbiAgJG9uSW5pdCAoKSB7XG4gIH1cblxuICAvKipcbiAgICogT24gZG9jdW1lbnQgcmVhZHlcbiAgICovXG4gICRvblJlYWR5ICgpIHtcbiAgICB0aGlzLl9fJHdyYXBwZXIgPSAkKCcuY291bnRkb3duJyk7XG5cbiAgICBpZiAoIXRoaXMuX18kd3JhcHBlci5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9fJGRheXMgPSB0aGlzLl9fJHdyYXBwZXIuZmluZCgnW2RhdGEtY291bnRkb3duPVwiZGF5c1wiXScpO1xuICAgIHRoaXMuX18kaG91cnMgPSB0aGlzLl9fJHdyYXBwZXIuZmluZCgnW2RhdGEtY291bnRkb3duPVwiaG91cnNcIl0nKTtcbiAgICB0aGlzLl9fJG1pbnV0ZXMgPSB0aGlzLl9fJHdyYXBwZXIuZmluZCgnW2RhdGEtY291bnRkb3duPVwibWludXRlc1wiXScpO1xuICAgIHRoaXMuX18kc2Vjb25kcyA9IHRoaXMuX18kd3JhcHBlci5maW5kKCdbZGF0YS1jb3VudGRvd249XCJzZWNvbmRzXCJdJyk7XG5cbiAgICB0aGlzLl9zdGFydENvdW50ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYW51YWxseSBpbml0XG4gICAqL1xuICBpbml0ICgpIHtcbiAgICB0aGlzLiRvblJlYWR5KCk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgY291bnRlcjtcbiAgICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBfc3RhcnRDb3VudGVyICgpIHtcbiAgICB0aGlzLl9zZWNvbmRzID0gMDtcbiAgICBpZiAodGhpcy5faW50ZXJ2YWwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpO1xuICAgIH1cbiAgICB0aGlzLl9pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMuX3NlY29uZHMgPSB0aGlzLl9zZWNvbmRzICsgMTtcbiAgICAgIHRoaXMuX3VwZGF0ZSgpO1xuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBVSSBldmVyeSBzZWNvbmRcbiAgICovXG4gIF91cGRhdGUgKCkge1xuICAgIGNvbnN0IGN1cnJlbnRTZWNvbmRzID0gcGFyc2VJbnQodGhpcy5fXyRzZWNvbmRzLmh0bWwoKSwgMTApO1xuICAgIGNvbnN0IGN1cnJlbnRNaW51dGVzID0gcGFyc2VJbnQodGhpcy5fXyRtaW51dGVzLmh0bWwoKSwgMTApO1xuICAgIGNvbnN0IGN1cnJlbnRIb3VycyA9IHBhcnNlSW50KHRoaXMuX18kaG91cnMuaHRtbCgpLCAxMCk7XG4gICAgY29uc3QgY3VycmVudERheXMgPSBwYXJzZUludCh0aGlzLl9fJGRheXMuaHRtbCgpLCAxMCk7XG5cbiAgICBsZXQgbmV3U2Vjb25kcyA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbihjdXJyZW50U2Vjb25kcyAtIDEsIDYwKSk7XG4gICAgbGV0IG5ld01pbnV0ZXMgPSBjdXJyZW50TWludXRlcztcbiAgICBsZXQgbmV3SG91cnMgPSBjdXJyZW50SG91cnM7XG4gICAgbGV0IG5ld0RheXMgPSBjdXJyZW50RGF5cztcblxuICAgIGlmIChuZXdTZWNvbmRzID09PSAtMSkge1xuICAgICAgbmV3U2Vjb25kcyA9IDU5O1xuICAgICAgbmV3TWludXRlcyA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbihjdXJyZW50TWludXRlcyAtIDEsIDU5KSk7XG5cbiAgICAgIGlmIChuZXdNaW51dGVzID09PSAtMSkge1xuICAgICAgICBuZXdNaW51dGVzID0gNTk7XG4gICAgICAgIG5ld0hvdXJzID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKGN1cnJlbnRIb3VycyAtIDEsIDIzKSk7XG5cbiAgICAgICAgaWYgKG5ld0hvdXJzID09PSAtMSkge1xuICAgICAgICAgIG5ld0hvdXJzID0gMjM7XG4gICAgICAgICAgbmV3RGF5cyA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbihuZXdEYXlzIC0gMSwgMzY0KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9fJHNlY29uZHMuaHRtbCh0aGlzLl9wYWQobmV3U2Vjb25kcykpO1xuICAgIHRoaXMuX18kbWludXRlcy5odG1sKHRoaXMuX3BhZChuZXdNaW51dGVzKSk7XG4gICAgdGhpcy5fXyRob3Vycy5odG1sKHRoaXMuX3BhZChuZXdIb3VycykpO1xuICAgIHRoaXMuX18kZGF5cy5odG1sKHRoaXMuX3BhZChuZXdEYXlzKSk7XG4gIH1cblxuICAvKipcbiAgICogUGFkIG51bWJlcnMgKGFkZCBsZWFkaW5nIHplcm8pXG4gICAqXG4gICAqIEBwYXJhbSAge051bWJlcn0gbnVtXG4gICAqIEBwYXJhbSAge051bWJlcn0gc2l6ZVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBfcGFkIChudW0sIHNpemU9Mikge1xuICAgIGxldCBzID0gbnVtICsgJyc7XG4gICAgd2hpbGUgKHMubGVuZ3RoIDwgc2l6ZSkgcyA9ICcwJyArIHM7XG4gICAgcmV0dXJuIHM7XG4gIH1cbn1cblxuLy8gZXhwb3J0IHRvIHB1YmxpYyBBUElcbmFwaVsnY291bnRkb3duJ10gPSBuZXcgQ291bnRkb3duKCk7XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZG93bjtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG4vLyBpbXBvcnQgdGV0aGVyIGZyb20gJ3RldGhlcic7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9zcmMvY29sbGFwc2UnO1xuaW1wb3J0ICdib290c3RyYXAvanMvc3JjL2FsZXJ0JztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL3NyYy9tb2RhbCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9zcmMvdG9vbHRpcCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9zcmMvZHJvcGRvd24nO1xuLy8gaW1wb3J0ICcuL2Jvb3RzdHJhcC00LWRldi9jb2xsYXBzZSc7IC8vICdib290c3RyYXAvanMvc3JjL2NvbGxhcHNlJztcbi8vIGltcG9ydCAnLi9ib290c3RyYXAtNC1kZXYvYWxlcnQnOyAvLyAnYm9vdHN0cmFwL2pzL3NyYy9hbGVydCc7XG4vLyBpbXBvcnQgJy4vYm9vdHN0cmFwLTQtZGV2L21vZGFsJzsgLy8gJ2Jvb3RzdHJhcC9qcy9zcmMvbW9kYWwnO1xuLy8gaW1wb3J0ICcuL2Jvb3RzdHJhcC00LWRldi90b29sdGlwJzsgLy8gJ2Jvb3RzdHJhcC9qcy9zcmMvdG9vbHRpcCc7XG4vLyBpbXBvcnQgJy4vYm9vdHN0cmFwLTQtZGV2L2Ryb3Bkb3duJzsgLy8gJ2Jvb3RzdHJhcC9qcy9zcmMvZHJvcGRvd24nO1xuXG4vLyBpbXBvcnQgJ2pxdWVyeS1tYXRjaC1oZWlnaHQvZGlzdC9qcXVlcnkubWF0Y2hIZWlnaHQnO1xuLy8gaW1wb3J0ICdkYXRhdGFibGVzLm5ldCc7XG4vLyBpbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmpzJztcblxuaW1wb3J0IGFwaSBmcm9tICcuL2FwaSc7XG4vLyBpbXBvcnQgJy4vZGVtbyc7XG5pbXBvcnQgJy4vYWJ0ZXN0aW5nJztcbmltcG9ydCAnLi9jb29raWVhbm5vdW5jZW1lbnQnXG5pbXBvcnQgJy4vbmFzayc7XG5pbXBvcnQgJy4vZmFxJztcbmltcG9ydCAnLi9pdGVtJztcbmltcG9ydCBpdGVtRGV0YWlsIGZyb20gJy4vaXRlbURldGFpbCc7XG5pbXBvcnQgJy4vYnJvd3NlcnMnO1xuaW1wb3J0ICcuL2NoZWNrb3V0JztcbmltcG9ydCAnLi9zZWxsZXInO1xuaW1wb3J0ICcuL2FjY291bnQnO1xuaW1wb3J0ICcuL2NvdW50ZG93bic7XG5cbmNsYXNzIEFwcCB7XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIC8vIGJvb3RzdHJhcFxuICAgIHRoaXMuJG9uSW5pdCgpO1xuICAgICQoZG9jdW1lbnQpLnJlYWR5KHRoaXMuJG9uUmVhZHkuYmluZCh0aGlzKSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdFxuICAgKi9cbiAgJG9uSW5pdCAoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2FwcC5qcyBpbml0aWFsaXplZCcpO1xuICAgIHRoaXMuX3VwZGF0ZUNvcHlyaWdodFllYXIoKTtcbiAgICB0aGlzLl9hY2NvdW50TWVudSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIGRvY3VtZW50IHJlYWR5XG4gICAqL1xuICAkb25SZWFkeSAoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2FwcC5qcyBkb2N1bWVudCBpcyByZWFkeScpO1xuICAgIHRoaXMuX18kaXRlbUNvbHMgPSAkKCcuaHNJdGVtX19jb2wnKTtcblxuICAgIHRoaXMuXyR3aW4gPSAkKHdpbmRvdyk7XG5cbiAgICAvLyB0aGlzLl9tb2JpbGVJbWFnZXMoKTtcbiAgICB0aGlzLl9tYXRjaENvbHNIZWlnaHQoKTtcbiAgICB0aGlzLl9tYW5hZ2VDYXRzU2xpZGVyKCk7XG4gICAgdGhpcy5faW5pdE1vZGFscygpO1xuICAgIHRoaXMuX2luaXRGb3JtcygpO1xuICAgIHRoaXMuX2luaXRUYWJsZXMoKTtcbiAgICB0aGlzLl9pbml0RHJvcGRvd25zKCk7XG4gICAgdGhpcy5faW5pdEF1dGhNb2RhbCgpO1xuICAgIHRoaXMuXyR3aW4ucmVzaXplKHRoaXMuX21hdGNoQ29sc0hlaWdodC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLl8kd2luLnJlc2l6ZSh0aGlzLl9tYW5hZ2VDYXRzU2xpZGVyLmJpbmQodGhpcykpO1xuICAgIC8vIHRoaXMuXyR3aW4ucmVzaXplKHRoaXMuX21vYmlsZUltYWdlcy5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0IHRvb2x0aXBzXG4gICAqXG4gICAqL1xuICBfaW5pdFRvb2x0aXBzICgpIHtcbiAgICAvLyBib290c3RyYXAgdG9vbHRpcHNcbiAgICAvLyAkKCcuanMtdG9vbHRpcCcpLnRvb2x0aXAoe30pO1xuICAgICQoJy5zaGlwcGluZ3RpbWUtdG9vbHRpcCcpLnRvb2x0aXAoe1xuICAgICAgYW5pbWF0aW9uOiBmYWxzZSxcbiAgICAgIG9mZnNldDogJy0xMHB4IDAnLFxuICAgICAgLy8gZGVsYXk6IHsgaGlkZTogMTAwMDAwMCB9LCAvLyBmb3IgZGVidWdnaW5nXG4gICAgICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJ0b29sdGlwIHRvb2x0aXAtdG9wIHRvb2x0aXAtLWxpZ2h0IHNoaXBwaW5ndGltZV9fdG9vbHRpcFwiIHJvbGU9XCJ0b29sdGlwXCI+PGRpdiBjbGFzcz1cInRvb2x0aXAtYXJyb3dcIj48L2Rpdj48ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PjwvZGl2PidcbiAgICB9KTtcbiAgICAvLyAkKCcuc2hpcHBpbmd0aW1lJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAkKHRoaXMpLnRvb2x0aXAoe1xuICAgIC8vICAgICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJ0b29sdGlwIHRvb2x0aXAtLWxpZ2h0XCIgcm9sZT1cInRvb2x0aXBcIj48ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvd1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+PC9kaXY+J1xuICAgIC8vICAgICBjb250YWluZXI6IHRoaXMsXG4gICAgLy8gICAgIG9mZnNldDogJzAgLTgwJScsXG4gICAgLy8gICAgIGRlbGF5OiB7IGhpZGU6IDEwMDAwMDAgfSAvLyBmb3IgZGVidWdnaW5nXG4gICAgLy8gICB9KTtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYW5hZ2UgaXRlbSBjYXJkJ3MgbW9iaWxlIGltYWdlc1xuICAgKi9cbiAgX21vYmlsZUltYWdlcyAoKSB7XG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgOTkyKSB7XG4gICAgICBsZXQgbW9iaWxlUHJvZHVjdEltYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hzSXRlbUNhcmRfX2JvdHRvbS1pbWcnKTtcbiAgICAgIGlmIChtb2JpbGVQcm9kdWN0SW1hZ2VzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9iaWxlUHJvZHVjdEltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCB0bXBJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBsZXQgaW1nID0gbW9iaWxlUHJvZHVjdEltYWdlc1tpXTtcbiAgICAgICAgICB0bXBJbWcuc3JjID0gaW1nLnNyYztcblxuICAgICAgICAgIGxldCAkd3JhcHBlciA9ICQoaW1nLnBhcmVudE5vZGUpO1xuXG4gICAgICAgICAgbGV0IGltZ0Nzc1N0cmluZyA9ICcnO1xuXG4gICAgICAgICAgdG1wSW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCB3cmFwcGVyV2lkdGggPSAkd3JhcHBlci5vdXRlcldpZHRoKHRydWUpOy8vLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgbGV0IHdyYXBwZXJIZWlnaHQgPSAkd3JhcHBlci5vdXRlckhlaWdodCh0cnVlKTsvLyAub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgbGV0IGltZ1dpZHRoID0gdG1wSW1nLm5hdHVyYWxXaWR0aDtcbiAgICAgICAgICAgIGxldCBpbWdIZWlnaHQgPSB0bXBJbWcubmF0dXJhbEhlaWdodDtcbiAgICAgICAgICAgIGxldCBhID0gTWF0aC5tYXgod3JhcHBlckhlaWdodCwgaW1nLmhlaWdodCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnd3JhcHBlckhlaWdodCcsIHdyYXBwZXJIZWlnaHQsICd3cmFwcGVySGVpZ2h0Jywgd3JhcHBlckhlaWdodCk7XG4gICAgICAgICAgICBpZiAoaW1nSGVpZ2h0ID4gaW1nV2lkdGgpIHtcbiAgICAgICAgICAgICAgaW1nQ3NzU3RyaW5nICs9IGBtYXgtd2lkdGg6JHt3cmFwcGVyV2lkdGh9cHg7aGVpZ2h0OmF1dG87bGVmdDowO3RvcDo1MCU7bWFyZ2luLXRvcDotJHtpbWcuaGVpZ2h0IC8gMn1weDtgO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaW1nQ3NzU3RyaW5nICs9IGBtYXgtaGVpZ2h0OiR7d3JhcHBlckhlaWdodH1weDt3aWR0aDphdXRvO2xlZnQ6NTAlO3RvcDowO21hcmdpbi1sZWZ0Oi0ke2ltZy53aWR0aCAvIDJ9cHg7YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW1nLnN0eWxlLmNzc1RleHQgPSBpbWdDc3NTdHJpbmcgKyAnb3BhY2l0eToxOyc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1hdGNoIHRoZSBoZWlnaHQgb2YgdGhlIGl0ZW0gY2FyZHMnIGNvbHVtbnNcbiAgICovXG4gIF9tYXRjaENvbHNIZWlnaHQgKCkge1xuICAgIGlmICh0aGlzLl9fJGl0ZW1Db2xzLmxlbmd0aCkge1xuICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID49IDk5Mikge1xuICAgICAgICB0aGlzLl9fJGl0ZW1Db2xzLm1hdGNoSGVpZ2h0KHt9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX18kaXRlbUNvbHMubWF0Y2hIZWlnaHQoeyByZW1vdmU6IHRydWUgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1hbmFnZSBjYXRlZ29yaWVzIHNsaWRlclxuICAgKi9cbiAgX21hbmFnZUNhdHNTbGlkZXIgKCkge1xuICAgIGNvbnN0ICRzdWJoZWFkZXJMaXN0ID0gJCgnLmFwcFN1YmhlYWRlcl9fbGlzdCcpO1xuICAgIGNvbnN0ICRzdWJoZWFkZXJMaW5rcyA9ICQoJy5hcHBTdWJoZWFkZXJfX2xpbmsnKTtcbiAgICBsZXQgc3ViaGVhZGVyTGlzdEZ1bGxXaWR0aCA9IDA7XG4gICAgbGV0IGN1cnJlbnRMaW5rSWR4O1xuXG4gICAgY29uc3QgX21heWJlU2hvd0hpbnRTY3JvbGxzID0gZnVuY3Rpb24gKGUsIHNsaWNrLCBjdXJyZW50LCBuZXh0SWR4KSB7XG4gICAgICBpZiAobmV4dElkeCA8ICRzdWJoZWFkZXJMaW5rcy5sZW5ndGggLSAzKSB7XG4gICAgICAgICRzdWJoZWFkZXJMaXN0LmFkZENsYXNzKCdzbGljay1oaW50LW5leHQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRzdWJoZWFkZXJMaXN0LnJlbW92ZUNsYXNzKCdzbGljay1oaW50LW5leHQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5leHRJZHggPiAxKSB7XG4gICAgICAgICRzdWJoZWFkZXJMaXN0LmFkZENsYXNzKCdzbGljay1oaW50LXByZXYnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRzdWJoZWFkZXJMaXN0LnJlbW92ZUNsYXNzKCdzbGljay1oaW50LXByZXYnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoISRzdWJoZWFkZXJMaXN0Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAkc3ViaGVhZGVyTGlua3MuZWFjaCgoaWR4LCBpdGVtKSA9PiB7XG4gICAgICBsZXQgJGl0ZW0gPSAkKGl0ZW0pO1xuICAgICAgc3ViaGVhZGVyTGlzdEZ1bGxXaWR0aCA9IHN1YmhlYWRlckxpc3RGdWxsV2lkdGggKyAkaXRlbS53aWR0aCgpO1xuICAgICAgaWYgKCRpdGVtLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICBjdXJyZW50TGlua0lkeCA9IGlkeDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGlmIHdlIGhhdmUgYSBzbGlkZXJcbiAgICBpZiAoJHN1YmhlYWRlckxpc3Qud2lkdGgoKSA8IHN1YmhlYWRlckxpc3RGdWxsV2lkdGgpIHtcbiAgICAgIC8vIGp1c3QgdXBkYXRlIHRoZSBjdXJyZW50IHNsaWRlXG4gICAgICBpZiAodGhpcy5fY2F0c1NsaWRlcikge1xuICAgICAgICBpZiAoY3VycmVudExpbmtJZHggfHwgY3VycmVudExpbmtJZHggPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9jYXRzU2xpZGVyLnRyaWdnZXIoJ3NsaWNrR29UbycsIGN1cnJlbnRMaW5rSWR4KTtcbiAgICAgICAgfVxuICAgICAgLy8gb3IgaW5pdCB0aGUgc2xpZGVyXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9jYXRzU2xpZGVySHRtbFByZVNsaWNrID0gJHN1YmhlYWRlckxpc3QuaHRtbCgpO1xuXG4gICAgICAgIHRoaXMuX2NhdHNTbGlkZXIgPSAkc3ViaGVhZGVyTGlzdC5zbGljayh7XG4gICAgICAgICAgLy8gc2xpZGVzVG9TaG93OiA0LCAvLyAkc3ViaGVhZGVyTGlua3MubGVuZ3RoLFxuICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICAgIC8vIGNlbnRlclBhZGRpbmc6IDAsXG4gICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgIGluaXRpYWxTbGlkZTogY3VycmVudExpbmtJZHhcbiAgICAgICAgfSk7XG5cbiAgICAgICAgX21heWJlU2hvd0hpbnRTY3JvbGxzKG51bGwsIG51bGwsIG51bGwsIGN1cnJlbnRMaW5rSWR4KTtcblxuICAgICAgICB0aGlzLl9jYXRzU2xpZGVyLm9uKCdiZWZvcmVDaGFuZ2UnLCBfbWF5YmVTaG93SGludFNjcm9sbHMpO1xuICAgICAgfVxuICAgIC8vIGlmIHdlIGRvbid0IHdhbnQgdG8gaGF2ZSBhIHNsaWRlclxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fY2F0c1NsaWRlcikge1xuICAgICAgICB0aGlzLl9jYXRzU2xpZGVyLnNsaWNrKCd1bnNsaWNrJylcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWhpbnQtcHJldicpXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1oaW50LW5leHQnKTtcbiAgICAgICAgJHN1YmhlYWRlckxpc3QuaHRtbCh0aGlzLl9jYXRzU2xpZGVySHRtbFByZVNsaWNrKTtcbiAgICAgICAgdGhpcy5fY2F0c1NsaWRlciA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZvciBjZW50ZXJlZCBtb2RhbFxuICAgKlxuICAgKiBAc2VlICBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDEzNzc1MDIvMTkzODk3MFxuICAgKi9cbiAgX2luaXRNb2RhbHMgKCkge1xuICAgICQoJy5tb2RhbC1kaWFsb2cnKS5vbignY2xpY2sgdGFwJywgZnVuY3Rpb24oZSkge1xuICAgICAgY29uc3QgX18kbW9kYWxEaWFsb2cgPSAkKHRoaXMpO1xuICAgICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCdtb2RhbC1kaWFsb2cnKSkge1xuICAgICAgICBfXyRtb2RhbERpYWxvZy5wYXJlbnQoKS5tb2RhbCgnaGlkZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXQgZm9ybXMgKHZhbGlkYXRpb24pXG4gICAqL1xuICBfaW5pdEZvcm1zICgpIHtcbiAgICAkKCcuZm9ybS12YWxpZGF0ZScpLnZhbGlkYXRlKHtcbiAgICAgIGVycm9yQ2xhc3M6ICdoYXMtZGFuZ2VyJyxcbiAgICAgIHZhbGlkQ2xhc3M6ICdoYXMtc3VjY2VzcycsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdCB0YWJsZXNcbiAgICovXG4gIF9pbml0VGFibGVzICgpIHtcbiAgICAvLyBkYXRhYmxlIG9uICdteSBhY2NvdW50JyBwYWdlc1xuICAgICQoJy5kYXRhdGFibGUnKS5EYXRhVGFibGUoe1xuICAgICAgc2VhcmNoaW5nOiBmYWxzZSxcbiAgICAgIG9yZGVyaW5nOiBmYWxzZSxcbiAgICAgIGRyYXdDYWxsYmFjazogdGhpcy5faW5pdFRvb2x0aXBzLmJpbmQodGhpcylcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0IGRyb3Bkb3duc1xuICAgKi9cbiAgX2luaXREcm9wZG93bnMgKCkge1xuICAgIC8vIGRyb3Bkb3duXG4gICAgJCgnI2hzTGFuZ19faGVhZGVyJylcbiAgICAgIC5vbignc2hvdy5icy5kcm9wZG93bicsICgpID0+IHtcbiAgICAgICAgJCgnI2hzSGVhZGVyJykuYWRkQ2xhc3MoJ2xhc3QtZHJvcGRvd24tb3BlbicpO1xuICAgICAgfSlcbiAgICAgIC5vbignaGlkZS5icy5kcm9wZG93bicsICgpID0+IHtcbiAgICAgICAgJCgnI2hzSGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2xhc3QtZHJvcGRvd24tb3BlbicpO1xuICAgICAgfSk7XG5cbiAgICAvLyAkKCcubmF2c2VsZWN0b3InKSAvLyA5OTEgY2hhbmdlIHRvIDxvcHRpb24+XG4gICAgJCgnLkpTbmF2c2VsX19zZWxlY3QnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLnZhbHVlO1xuICAgICAgLy8gZ2V0QXR0cmlidXRlKCdkYXRhLWhyZWYnKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgY29weXJpZ2h0IHllYXJcbiAgICovXG4gIF91cGRhdGVDb3B5cmlnaHRZZWFyKCkge1xuICAgIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1jb3B5eWVhcicpO1xuICAgIGlmIChlbCkge1xuICAgICAgZWwuaW5uZXJIVE1MID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBY2NvdW50IG1lbnVcbiAgICovXG4gIF9hY2NvdW50TWVudSAoKSB7XG4gICAgdmFyIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLW15YWNjb3VudF9idG4nKTtcbiAgICBpZiAoZWwpIHtcbiAgICAgIGVsLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnaHNBY2NvdW50LS1tZW51LW9wZW4nKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXQgYXV0aGVudGljYXRpb24gbW9kYWxzXG4gICAqL1xuICBfaW5pdEF1dGhNb2RhbCAoKSB7XG4gICAgbGV0ICRhdXRoTW9kYWwgPSAkKCcjaHNBdXRoTW9kYWwnKTtcbiAgICB0aGlzLl9fJGF1dGhNb2RhbCA9ICRhdXRoTW9kYWw7XG4gICAgaWYgKCEkYXV0aE1vZGFsLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgICRhdXRoTW9kYWwub24oJ3Nob3cuYnMubW9kYWwnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdhcHBBdXRoTW9kYWwtLW9wZW4nKTtcbiAgICB9KTtcbiAgICAkYXV0aE1vZGFsLm9uKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdhcHBBdXRoTW9kYWwtLW9wZW4nKTtcbiAgICB9KTtcbiAgICAkYXV0aE1vZGFsLm1vZGFsKCdoaWRlJyk7XG4gICAgLy8gJGF1dGhNb2RhbC5tb2RhbCgnaGlkZScpO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWF1dGhtb2RhbF0nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbGV0IGJ0biA9IHRoaXM7XG4gICAgICBsZXQgJGJ0biA9ICQodGhpcyk7XG4gICAgICBsZXQgdmlldyA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWF1dGhtb2RhbCcpO1xuICAgICAgaWYgKCF2aWV3KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYGRhdGEtYXV0aG1vZGFsYCBtdXN0IGhhdmUgYSB2YWx1ZSAoZS5nLiBgbG9naW5gIG9yIGByZWdpc3RlcmApJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgICRhdXRoTW9kYWwuYXR0cignZGF0YS12aWV3Jywgdmlldyk7XG4gICAgICB0cnkge1xuICAgICAgICAkYXV0aE1vZGFsLm1vZGFsKCdzaG93Jyk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb21wdCBsb2dpbiBtb2RhbFxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuICBwcm9tcHRMb2dpbiAoKSB7XG4gICAgaWYgKHRoaXMuX18kYXV0aE1vZGFsKSB7XG4gICAgICB0aGlzLl9fJGF1dGhNb2RhbC5hdHRyKCdkYXRhLXZpZXcnLCAnbG9naW4nKTtcbiAgICAgIHRoaXMuX18kYXV0aE1vZGFsLm1vZGFsKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFByb21wdCByZWdpc3RlciBtb2RhbFxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuICBwcm9tcHRSZWdpc3RlciAoKSB7XG4gICAgaWYgKHRoaXMuX18kYXV0aE1vZGFsKSB7XG4gICAgICB0aGlzLl9fJGF1dGhNb2RhbC5hdHRyKCdkYXRhLXZpZXcnLCAncmVnaXN0ZXInKTtcbiAgICAgIHRoaXMuX18kYXV0aE1vZGFsLm1vZGFsKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBVSSAoRXJ3aW4gY2FsbCdzIHRoaXMgd2hlbiBvcGVuaW5nIHRoZSBpdGVtIG1vZGFsKVxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuICB1cGRhdGVVSSAoKSB7XG4gICAgaXRlbURldGFpbC4kb25SZWFkeSgpO1xuICB9XG59XG5cbi8vIGV4cG9ydCB0byBwdWJsaWMgQVBJXG5hcGlbJ2FwcCddID0gbmV3IEFwcCgpO1xuIl0sIm5hbWVzIjpbImNvbnN0IiwibGV0IiwidGhpcyIsIiQiLCJhcGkiLCJpIl0sIm1hcHBpbmdzIjoiOzs7O0VBQUE7Ozs7Ozs7QUFPQUEsTUFBTSxJQUFJLEdBQUcsV0FBRSxDQUFDLEVBQUU7Ozs7Ozs7OztJQVNoQkMsSUFBSSxVQUFVLEdBQUcsTUFBSzs7SUFFdEJELElBQU0sT0FBTyxHQUFHLFFBQU87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