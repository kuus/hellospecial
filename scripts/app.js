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
      return this._mobileOS ? 'request-mobile' : 'request';
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy9oZWxsb3NwZWNpYWwvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvdXRpbC5qcyIsIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy9oZWxsb3NwZWNpYWwvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvY29sbGFwc2UuanMiLCIvbWVkaWEvYmxhbmtpL3dlYi93ZWItcHJvamVjdHMvaGVsbG9zcGVjaWFsL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL2FsZXJ0LmpzIiwiL21lZGlhL2JsYW5raS93ZWIvd2ViLXByb2plY3RzL2hlbGxvc3BlY2lhbC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2pzL3NyYy9tb2RhbC5qcyIsIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy9oZWxsb3NwZWNpYWwvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvdG9vbHRpcC5qcyIsIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy9oZWxsb3NwZWNpYWwvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvZHJvcGRvd24uanMiLCIvbWVkaWEvYmxhbmtpL3dlYi93ZWItcHJvamVjdHMvaGVsbG9zcGVjaWFsL3NyYy9hcHAvc2NyaXB0cy9hcGkuanMiLCIvbWVkaWEvYmxhbmtpL3dlYi93ZWItcHJvamVjdHMvaGVsbG9zcGVjaWFsL3NyYy9hcHAvc2NyaXB0cy9hYnRlc3RpbmcuanMiLCIvbWVkaWEvYmxhbmtpL3dlYi93ZWItcHJvamVjdHMvaGVsbG9zcGVjaWFsL3NyYy9hcHAvc2NyaXB0cy9jb29raWVhbm5vdW5jZW1lbnQuanMiLCIvbWVkaWEvYmxhbmtpL3dlYi93ZWItcHJvamVjdHMvaGVsbG9zcGVjaWFsL3NyYy9hcHAvc2NyaXB0cy9uYXNrLmpzIiwiL21lZGlhL2JsYW5raS93ZWIvd2ViLXByb2plY3RzL2hlbGxvc3BlY2lhbC9zcmMvYXBwL3NjcmlwdHMvZmFxLmpzIiwiL21lZGlhL2JsYW5raS93ZWIvd2ViLXByb2plY3RzL2hlbGxvc3BlY2lhbC9zcmMvYXBwL3NjcmlwdHMvaTE4bi5qcyIsIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy9oZWxsb3NwZWNpYWwvc3JjL2FwcC9zY3JpcHRzL3N0YXRlcy5kZWZhdWx0cy5qcyIsIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy9oZWxsb3NwZWNpYWwvc3JjL2FwcC9zY3JpcHRzL2NvbG9ycy5kZWZhdWx0cy5qcyIsIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy9oZWxsb3NwZWNpYWwvc3JjL2FwcC9zY3JpcHRzL3N2Z1BpZVRpbWVyLmpzIiwiL21lZGlhL2JsYW5raS93ZWIvd2ViLXByb2plY3RzL2hlbGxvc3BlY2lhbC9zcmMvYXBwL3NjcmlwdHMvaXRlbS5qcyIsIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy9oZWxsb3NwZWNpYWwvc3JjL2FwcC9zY3JpcHRzL2l0ZW1EZXRhaWwuanMiLCIvbWVkaWEvYmxhbmtpL3dlYi93ZWItcHJvamVjdHMvaGVsbG9zcGVjaWFsL3NyYy9hcHAvc2NyaXB0cy9icm93c2Vycy5qcyIsIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy9oZWxsb3NwZWNpYWwvc3JjL2FwcC9zY3JpcHRzL2NoZWNrb3V0LmpzIiwiL21lZGlhL2JsYW5raS93ZWIvd2ViLXByb2plY3RzL2hlbGxvc3BlY2lhbC9zcmMvYXBwL3NjcmlwdHMvc2VsbGVyLmpzIiwiL21lZGlhL2JsYW5raS93ZWIvd2ViLXByb2plY3RzL2hlbGxvc3BlY2lhbC9zcmMvYXBwL3NjcmlwdHMvYWNjb3VudC5qcyIsIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy9oZWxsb3NwZWNpYWwvc3JjL2FwcC9zY3JpcHRzL2NvdW50ZG93bi5qcyIsIi9tZWRpYS9ibGFua2kvd2ViL3dlYi1wcm9qZWN0cy9oZWxsb3NwZWNpYWwvc3JjL2FwcC9zY3JpcHRzL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjAuMC1hbHBoYS42KTogdXRpbC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgVXRpbCA9ICgoJCkgPT4ge1xuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBQcml2YXRlIFRyYW5zaXRpb25FbmQgSGVscGVyc1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgbGV0IHRyYW5zaXRpb24gPSBmYWxzZVxuXG4gIGNvbnN0IE1BWF9VSUQgPSAxMDAwMDAwXG5cbiAgY29uc3QgVHJhbnNpdGlvbkVuZEV2ZW50ID0ge1xuICAgIFdlYmtpdFRyYW5zaXRpb24gOiAnd2Via2l0VHJhbnNpdGlvbkVuZCcsXG4gICAgTW96VHJhbnNpdGlvbiAgICA6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICBPVHJhbnNpdGlvbiAgICAgIDogJ29UcmFuc2l0aW9uRW5kIG90cmFuc2l0aW9uZW5kJyxcbiAgICB0cmFuc2l0aW9uICAgICAgIDogJ3RyYW5zaXRpb25lbmQnXG4gIH1cblxuICAvLyBzaG91dG91dCBBbmd1c0Nyb2xsIChodHRwczovL2dvby5nbC9weHdRR3ApXG4gIGZ1bmN0aW9uIHRvVHlwZShvYmopIHtcbiAgICByZXR1cm4ge30udG9TdHJpbmcuY2FsbChvYmopLm1hdGNoKC9cXHMoW2EtekEtWl0rKS8pWzFdLnRvTG93ZXJDYXNlKClcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRWxlbWVudChvYmopIHtcbiAgICByZXR1cm4gKG9ialswXSB8fCBvYmopLm5vZGVUeXBlXG4gIH1cblxuICBmdW5jdGlvbiBnZXRTcGVjaWFsVHJhbnNpdGlvbkVuZEV2ZW50KCkge1xuICAgIHJldHVybiB7XG4gICAgICBiaW5kVHlwZTogdHJhbnNpdGlvbi5lbmQsXG4gICAgICBkZWxlZ2F0ZVR5cGU6IHRyYW5zaXRpb24uZW5kLFxuICAgICAgaGFuZGxlKGV2ZW50KSB7XG4gICAgICAgIGlmICgkKGV2ZW50LnRhcmdldCkuaXModGhpcykpIHtcbiAgICAgICAgICByZXR1cm4gZXZlbnQuaGFuZGxlT2JqLmhhbmRsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0cmFuc2l0aW9uRW5kVGVzdCgpIHtcbiAgICBpZiAod2luZG93LlFVbml0KSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Jvb3RzdHJhcCcpXG5cbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gVHJhbnNpdGlvbkVuZEV2ZW50KSB7XG4gICAgICBpZiAoZWwuc3R5bGVbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVuZDogVHJhbnNpdGlvbkVuZEV2ZW50W25hbWVdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYW5zaXRpb25FbmRFbXVsYXRvcihkdXJhdGlvbikge1xuICAgIGxldCBjYWxsZWQgPSBmYWxzZVxuXG4gICAgJCh0aGlzKS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgKCkgPT4ge1xuICAgICAgY2FsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghY2FsbGVkKSB7XG4gICAgICAgIFV0aWwudHJpZ2dlclRyYW5zaXRpb25FbmQodGhpcylcbiAgICAgIH1cbiAgICB9LCBkdXJhdGlvbilcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uRW5kU3VwcG9ydCgpIHtcbiAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbkVuZFRlc3QoKVxuXG4gICAgJC5mbi5lbXVsYXRlVHJhbnNpdGlvbkVuZCA9IHRyYW5zaXRpb25FbmRFbXVsYXRvclxuXG4gICAgaWYgKFV0aWwuc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkpIHtcbiAgICAgICQuZXZlbnQuc3BlY2lhbFtVdGlsLlRSQU5TSVRJT05fRU5EXSA9IGdldFNwZWNpYWxUcmFuc2l0aW9uRW5kRXZlbnQoKVxuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIFB1YmxpYyBVdGlsIEFwaVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjb25zdCBVdGlsID0ge1xuXG4gICAgVFJBTlNJVElPTl9FTkQ6ICdic1RyYW5zaXRpb25FbmQnLFxuXG4gICAgZ2V0VUlEKHByZWZpeCkge1xuICAgICAgZG8ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICAgICAgICBwcmVmaXggKz0gfn4oTWF0aC5yYW5kb20oKSAqIE1BWF9VSUQpIC8vIFwifn5cIiBhY3RzIGxpa2UgYSBmYXN0ZXIgTWF0aC5mbG9vcigpIGhlcmVcbiAgICAgIH0gd2hpbGUgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCkpXG4gICAgICByZXR1cm4gcHJlZml4XG4gICAgfSxcblxuICAgIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgbGV0IHNlbGVjdG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JylcblxuICAgICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgICBzZWxlY3RvciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJykgfHwgJydcbiAgICAgICAgc2VsZWN0b3IgPSAvXiNbYS16XS9pLnRlc3Qoc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBudWxsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxlY3RvclxuICAgIH0sXG5cbiAgICByZWZsb3coZWxlbWVudCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gICAgfSxcblxuICAgIHRyaWdnZXJUcmFuc2l0aW9uRW5kKGVsZW1lbnQpIHtcbiAgICAgICQoZWxlbWVudCkudHJpZ2dlcih0cmFuc2l0aW9uLmVuZClcbiAgICB9LFxuXG4gICAgc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4odHJhbnNpdGlvbilcbiAgICB9LFxuXG4gICAgdHlwZUNoZWNrQ29uZmlnKGNvbXBvbmVudE5hbWUsIGNvbmZpZywgY29uZmlnVHlwZXMpIHtcbiAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gY29uZmlnVHlwZXMpIHtcbiAgICAgICAgaWYgKGNvbmZpZ1R5cGVzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgIGNvbnN0IGV4cGVjdGVkVHlwZXMgPSBjb25maWdUeXBlc1twcm9wZXJ0eV1cbiAgICAgICAgICBjb25zdCB2YWx1ZSAgICAgICAgID0gY29uZmlnW3Byb3BlcnR5XVxuICAgICAgICAgIGNvbnN0IHZhbHVlVHlwZSAgICAgPSB2YWx1ZSAmJiBpc0VsZW1lbnQodmFsdWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VsZW1lbnQnIDogdG9UeXBlKHZhbHVlKVxuXG4gICAgICAgICAgaWYgKCFuZXcgUmVnRXhwKGV4cGVjdGVkVHlwZXMpLnRlc3QodmFsdWVUeXBlKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBgJHtjb21wb25lbnROYW1lLnRvVXBwZXJDYXNlKCl9OiBgICtcbiAgICAgICAgICAgICAgYE9wdGlvbiBcIiR7cHJvcGVydHl9XCIgcHJvdmlkZWQgdHlwZSBcIiR7dmFsdWVUeXBlfVwiIGAgK1xuICAgICAgICAgICAgICBgYnV0IGV4cGVjdGVkIHR5cGUgXCIke2V4cGVjdGVkVHlwZXN9XCIuYClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRUcmFuc2l0aW9uRW5kU3VwcG9ydCgpXG5cbiAgcmV0dXJuIFV0aWxcblxufSkoalF1ZXJ5KVxuXG5leHBvcnQgZGVmYXVsdCBVdGlsXG4iLCJpbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC4wLjAtYWxwaGEuNik6IGNvbGxhcHNlLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBDb2xsYXBzZSA9ICgoJCkgPT4ge1xuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDb25zdGFudHNcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIGNvbnN0IE5BTUUgICAgICAgICAgICAgICAgPSAnY29sbGFwc2UnXG4gIGNvbnN0IFZFUlNJT04gICAgICAgICAgICAgPSAnNC4wLjAtYWxwaGEuNidcbiAgY29uc3QgREFUQV9LRVkgICAgICAgICAgICA9ICdicy5jb2xsYXBzZSdcbiAgY29uc3QgRVZFTlRfS0VZICAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG4gIGNvbnN0IERBVEFfQVBJX0tFWSAgICAgICAgPSAnLmRhdGEtYXBpJ1xuICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgID0gJC5mbltOQU1FXVxuICBjb25zdCBUUkFOU0lUSU9OX0RVUkFUSU9OID0gNjAwXG5cbiAgY29uc3QgRGVmYXVsdCA9IHtcbiAgICB0b2dnbGUgOiB0cnVlLFxuICAgIHBhcmVudCA6ICcnXG4gIH1cblxuICBjb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgICB0b2dnbGUgOiAnYm9vbGVhbicsXG4gICAgcGFyZW50IDogJ3N0cmluZydcbiAgfVxuXG4gIGNvbnN0IEV2ZW50ID0ge1xuICAgIFNIT1cgICAgICAgICAgIDogYHNob3cke0VWRU5UX0tFWX1gLFxuICAgIFNIT1dOICAgICAgICAgIDogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgICBISURFICAgICAgICAgICA6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgICBISURERU4gICAgICAgICA6IGBoaWRkZW4ke0VWRU5UX0tFWX1gLFxuICAgIENMSUNLX0RBVEFfQVBJIDogYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuICB9XG5cbiAgY29uc3QgQ2xhc3NOYW1lID0ge1xuICAgIFNIT1cgICAgICAgOiAnc2hvdycsXG4gICAgQ09MTEFQU0UgICA6ICdjb2xsYXBzZScsXG4gICAgQ09MTEFQU0lORyA6ICdjb2xsYXBzaW5nJyxcbiAgICBDT0xMQVBTRUQgIDogJ2NvbGxhcHNlZCdcbiAgfVxuXG4gIGNvbnN0IERpbWVuc2lvbiA9IHtcbiAgICBXSURUSCAgOiAnd2lkdGgnLFxuICAgIEhFSUdIVCA6ICdoZWlnaHQnXG4gIH1cblxuICBjb25zdCBTZWxlY3RvciA9IHtcbiAgICBBQ1RJVkVTICAgICA6ICcuY2FyZCA+IC5zaG93LCAuY2FyZCA+IC5jb2xsYXBzaW5nJyxcbiAgICBEQVRBX1RPR0dMRSA6ICdbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSdcbiAgfVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjbGFzcyBDb2xsYXBzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgICB0aGlzLl9lbGVtZW50ICAgICAgICAgPSBlbGVtZW50XG4gICAgICB0aGlzLl9jb25maWcgICAgICAgICAgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgICAgdGhpcy5fdHJpZ2dlckFycmF5ICAgID0gJC5tYWtlQXJyYXkoJChcbiAgICAgICAgYFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2hyZWY9XCIjJHtlbGVtZW50LmlkfVwiXSxgICtcbiAgICAgICAgYFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2RhdGEtdGFyZ2V0PVwiIyR7ZWxlbWVudC5pZH1cIl1gXG4gICAgICApKVxuXG4gICAgICB0aGlzLl9wYXJlbnQgPSB0aGlzLl9jb25maWcucGFyZW50ID8gdGhpcy5fZ2V0UGFyZW50KCkgOiBudWxsXG5cbiAgICAgIGlmICghdGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModGhpcy5fZWxlbWVudCwgdGhpcy5fdHJpZ2dlckFycmF5KVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnRvZ2dsZSkge1xuICAgICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyBnZXR0ZXJzXG5cbiAgICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgICByZXR1cm4gVkVSU0lPTlxuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICAgIHJldHVybiBEZWZhdWx0XG4gICAgfVxuXG5cbiAgICAvLyBwdWJsaWNcblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgIGlmICgkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSkge1xuICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zaG93KClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbGxhcHNlIGlzIHRyYW5zaXRpb25pbmcnKVxuICAgICAgfVxuXG4gICAgICBpZiAoJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxldCBhY3RpdmVzXG4gICAgICBsZXQgYWN0aXZlc0RhdGFcblxuICAgICAgaWYgKHRoaXMuX3BhcmVudCkge1xuICAgICAgICBhY3RpdmVzID0gJC5tYWtlQXJyYXkoJCh0aGlzLl9wYXJlbnQpLmZpbmQoU2VsZWN0b3IuQUNUSVZFUykpXG4gICAgICAgIGlmICghYWN0aXZlcy5sZW5ndGgpIHtcbiAgICAgICAgICBhY3RpdmVzID0gbnVsbFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChhY3RpdmVzKSB7XG4gICAgICAgIGFjdGl2ZXNEYXRhID0gJChhY3RpdmVzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgICBpZiAoYWN0aXZlc0RhdGEgJiYgYWN0aXZlc0RhdGEuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1cpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc3RhcnRFdmVudClcbiAgICAgIGlmIChzdGFydEV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aXZlcykge1xuICAgICAgICBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJChhY3RpdmVzKSwgJ2hpZGUnKVxuICAgICAgICBpZiAoIWFjdGl2ZXNEYXRhKSB7XG4gICAgICAgICAgJChhY3RpdmVzKS5kYXRhKERBVEFfS0VZLCBudWxsKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTRSlcbiAgICAgICAgLmFkZENsYXNzKENsYXNzTmFtZS5DT0xMQVBTSU5HKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAwXG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG5cbiAgICAgIGlmICh0aGlzLl90cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICQodGhpcy5fdHJpZ2dlckFycmF5KVxuICAgICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VEKVxuICAgICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKHRydWUpXG5cbiAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTSU5HKVxuICAgICAgICAgIC5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0UpXG4gICAgICAgICAgLmFkZENsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnXG5cbiAgICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKGZhbHNlKVxuXG4gICAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihFdmVudC5TSE9XTilcbiAgICAgIH1cblxuICAgICAgaWYgKCFVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpKSB7XG4gICAgICAgIGNvbXBsZXRlKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhcGl0YWxpemVkRGltZW5zaW9uID0gZGltZW5zaW9uWzBdLnRvVXBwZXJDYXNlKCkgKyBkaW1lbnNpb24uc2xpY2UoMSlcbiAgICAgIGNvbnN0IHNjcm9sbFNpemUgICAgICAgICAgID0gYHNjcm9sbCR7Y2FwaXRhbGl6ZWREaW1lbnNpb259YFxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZChUUkFOU0lUSU9OX0RVUkFUSU9OKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSBgJHt0aGlzLl9lbGVtZW50W3Njcm9sbFNpemVdfXB4YFxuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ29sbGFwc2UgaXMgdHJhbnNpdGlvbmluZycpXG4gICAgICB9XG5cbiAgICAgIGlmICghJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSAkLkV2ZW50KEV2ZW50LkhJREUpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc3RhcnRFdmVudClcbiAgICAgIGlmIChzdGFydEV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBkaW1lbnNpb24gICAgICAgPSB0aGlzLl9nZXREaW1lbnNpb24oKVxuICAgICAgY29uc3Qgb2Zmc2V0RGltZW5zaW9uID0gZGltZW5zaW9uID09PSBEaW1lbnNpb24uV0lEVEggP1xuICAgICAgICAnb2Zmc2V0V2lkdGgnIDogJ29mZnNldEhlaWdodCdcblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudFtvZmZzZXREaW1lbnNpb25dfXB4YFxuXG4gICAgICBVdGlsLnJlZmxvdyh0aGlzLl9lbGVtZW50KVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0lORylcbiAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTRSlcbiAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxuXG4gICAgICBpZiAodGhpcy5fdHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgICAkKHRoaXMuX3RyaWdnZXJBcnJheSlcbiAgICAgICAgICAuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFRClcbiAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcodHJ1ZSlcblxuICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyhmYWxzZSlcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0lORylcbiAgICAgICAgICAuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFKVxuICAgICAgICAgIC50cmlnZ2VyKEV2ZW50LkhJRERFTilcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJydcblxuICAgICAgaWYgKCFVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpKSB7XG4gICAgICAgIGNvbXBsZXRlKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKFRSQU5TSVRJT05fRFVSQVRJT04pXG4gICAgfVxuXG4gICAgc2V0VHJhbnNpdGlvbmluZyhpc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGlzVHJhbnNpdGlvbmluZ1xuICAgIH1cblxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG5cbiAgICAgIHRoaXMuX2NvbmZpZyAgICAgICAgICA9IG51bGxcbiAgICAgIHRoaXMuX3BhcmVudCAgICAgICAgICA9IG51bGxcbiAgICAgIHRoaXMuX2VsZW1lbnQgICAgICAgICA9IG51bGxcbiAgICAgIHRoaXMuX3RyaWdnZXJBcnJheSAgICA9IG51bGxcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IG51bGxcbiAgICB9XG5cblxuICAgIC8vIHByaXZhdGVcblxuICAgIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBjb25maWcgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgY29uZmlnKVxuICAgICAgY29uZmlnLnRvZ2dsZSA9IEJvb2xlYW4oY29uZmlnLnRvZ2dsZSkgLy8gY29lcmNlIHN0cmluZyB2YWx1ZXNcbiAgICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgICByZXR1cm4gY29uZmlnXG4gICAgfVxuXG4gICAgX2dldERpbWVuc2lvbigpIHtcbiAgICAgIGNvbnN0IGhhc1dpZHRoID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhEaW1lbnNpb24uV0lEVEgpXG4gICAgICByZXR1cm4gaGFzV2lkdGggPyBEaW1lbnNpb24uV0lEVEggOiBEaW1lbnNpb24uSEVJR0hUXG4gICAgfVxuXG4gICAgX2dldFBhcmVudCgpIHtcbiAgICAgIGNvbnN0IHBhcmVudCAgID0gJCh0aGlzLl9jb25maWcucGFyZW50KVswXVxuICAgICAgY29uc3Qgc2VsZWN0b3IgPVxuICAgICAgICBgW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1bZGF0YS1wYXJlbnQ9XCIke3RoaXMuX2NvbmZpZy5wYXJlbnR9XCJdYFxuXG4gICAgICAkKHBhcmVudCkuZmluZChzZWxlY3RvcikuZWFjaCgoaSwgZWxlbWVudCkgPT4ge1xuICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoXG4gICAgICAgICAgQ29sbGFwc2UuX2dldFRhcmdldEZyb21FbGVtZW50KGVsZW1lbnQpLFxuICAgICAgICAgIFtlbGVtZW50XVxuICAgICAgICApXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gcGFyZW50XG4gICAgfVxuXG4gICAgX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhlbGVtZW50LCB0cmlnZ2VyQXJyYXkpIHtcbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGlzT3BlbiA9ICQoZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKVxuXG4gICAgICAgIGlmICh0cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgJCh0cmlnZ2VyQXJyYXkpXG4gICAgICAgICAgICAudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFRCwgIWlzT3BlbilcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyBzdGF0aWNcblxuICAgIHN0YXRpYyBfZ2V0VGFyZ2V0RnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudClcbiAgICAgIHJldHVybiBzZWxlY3RvciA/ICQoc2VsZWN0b3IpWzBdIDogbnVsbFxuICAgIH1cblxuICAgIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0ICR0aGlzICAgPSAkKHRoaXMpXG4gICAgICAgIGxldCBkYXRhICAgICAgPSAkdGhpcy5kYXRhKERBVEFfS0VZKVxuICAgICAgICBjb25zdCBfY29uZmlnID0gJC5leHRlbmQoXG4gICAgICAgICAge30sXG4gICAgICAgICAgRGVmYXVsdCxcbiAgICAgICAgICAkdGhpcy5kYXRhKCksXG4gICAgICAgICAgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnXG4gICAgICAgIClcblxuICAgICAgICBpZiAoIWRhdGEgJiYgX2NvbmZpZy50b2dnbGUgJiYgL3Nob3d8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgICAgX2NvbmZpZy50b2dnbGUgPSBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBDb2xsYXBzZSh0aGlzLCBfY29uZmlnKVxuICAgICAgICAgICR0aGlzLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICAgIH1cbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICB9XG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkKGRvY3VtZW50KS5vbihFdmVudC5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIGNvbnN0IHRhcmdldCA9IENvbGxhcHNlLl9nZXRUYXJnZXRGcm9tRWxlbWVudCh0aGlzKVxuICAgIGNvbnN0IGRhdGEgICA9ICQodGFyZ2V0KS5kYXRhKERBVEFfS0VZKVxuICAgIGNvbnN0IGNvbmZpZyA9IGRhdGEgPyAndG9nZ2xlJyA6ICQodGhpcykuZGF0YSgpXG5cbiAgICBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0YXJnZXQpLCBjb25maWcpXG4gIH0pXG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJC5mbltOQU1FXSAgICAgICAgICAgICA9IENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2VcbiAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IENvbGxhcHNlXG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCAgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICAgIHJldHVybiBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlXG4gIH1cblxuICByZXR1cm4gQ29sbGFwc2VcblxufSkoalF1ZXJ5KVxuXG5leHBvcnQgZGVmYXVsdCBDb2xsYXBzZVxuIiwiaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuMC4wLWFscGhhLjYpOiBhbGVydC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgQWxlcnQgPSAoKCQpID0+IHtcblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29uc3RhbnRzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjb25zdCBOQU1FICAgICAgICAgICAgICAgID0gJ2FsZXJ0J1xuICBjb25zdCBWRVJTSU9OICAgICAgICAgICAgID0gJzQuMC4wLWFscGhhLjYnXG4gIGNvbnN0IERBVEFfS0VZICAgICAgICAgICAgPSAnYnMuYWxlcnQnXG4gIGNvbnN0IEVWRU5UX0tFWSAgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuICBjb25zdCBEQVRBX0FQSV9LRVkgICAgICAgID0gJy5kYXRhLWFwaSdcbiAgY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUICA9ICQuZm5bTkFNRV1cbiAgY29uc3QgVFJBTlNJVElPTl9EVVJBVElPTiA9IDE1MFxuXG4gIGNvbnN0IFNlbGVjdG9yID0ge1xuICAgIERJU01JU1MgOiAnW2RhdGEtZGlzbWlzcz1cImFsZXJ0XCJdJ1xuICB9XG5cbiAgY29uc3QgRXZlbnQgPSB7XG4gICAgQ0xPU0UgICAgICAgICAgOiBgY2xvc2Uke0VWRU5UX0tFWX1gLFxuICAgIENMT1NFRCAgICAgICAgIDogYGNsb3NlZCR7RVZFTlRfS0VZfWAsXG4gICAgQ0xJQ0tfREFUQV9BUEkgOiBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG4gIH1cblxuICBjb25zdCBDbGFzc05hbWUgPSB7XG4gICAgQUxFUlQgOiAnYWxlcnQnLFxuICAgIEZBREUgIDogJ2ZhZGUnLFxuICAgIFNIT1cgIDogJ3Nob3cnXG4gIH1cblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgY2xhc3MgQWxlcnQge1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgICB9XG5cblxuICAgIC8vIGdldHRlcnNcblxuICAgIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICAgIHJldHVybiBWRVJTSU9OXG4gICAgfVxuXG5cbiAgICAvLyBwdWJsaWNcblxuICAgIGNsb3NlKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50IHx8IHRoaXMuX2VsZW1lbnRcblxuICAgICAgY29uc3Qgcm9vdEVsZW1lbnQgPSB0aGlzLl9nZXRSb290RWxlbWVudChlbGVtZW50KVxuICAgICAgY29uc3QgY3VzdG9tRXZlbnQgPSB0aGlzLl90cmlnZ2VyQ2xvc2VFdmVudChyb290RWxlbWVudClcblxuICAgICAgaWYgKGN1c3RvbUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLl9yZW1vdmVFbGVtZW50KHJvb3RFbGVtZW50KVxuICAgIH1cblxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG4gICAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICAgIH1cblxuXG4gICAgLy8gcHJpdmF0ZVxuXG4gICAgX2dldFJvb3RFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpXG4gICAgICBsZXQgcGFyZW50ICAgICA9IGZhbHNlXG5cbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICBwYXJlbnQgPSAkKHNlbGVjdG9yKVswXVxuICAgICAgfVxuXG4gICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICBwYXJlbnQgPSAkKGVsZW1lbnQpLmNsb3Nlc3QoYC4ke0NsYXNzTmFtZS5BTEVSVH1gKVswXVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyZW50XG4gICAgfVxuXG4gICAgX3RyaWdnZXJDbG9zZUV2ZW50KGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGNsb3NlRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkNMT1NFKVxuXG4gICAgICAkKGVsZW1lbnQpLnRyaWdnZXIoY2xvc2VFdmVudClcbiAgICAgIHJldHVybiBjbG9zZUV2ZW50XG4gICAgfVxuXG4gICAgX3JlbW92ZUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgJChlbGVtZW50KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgICAgaWYgKCFVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpIHx8XG4gICAgICAgICAgISQoZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSB7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lFbGVtZW50KGVsZW1lbnQpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAkKGVsZW1lbnQpXG4gICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgKGV2ZW50KSA9PiB0aGlzLl9kZXN0cm95RWxlbWVudChlbGVtZW50LCBldmVudCkpXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZChUUkFOU0lUSU9OX0RVUkFUSU9OKVxuICAgIH1cblxuICAgIF9kZXN0cm95RWxlbWVudChlbGVtZW50KSB7XG4gICAgICAkKGVsZW1lbnQpXG4gICAgICAgIC5kZXRhY2goKVxuICAgICAgICAudHJpZ2dlcihFdmVudC5DTE9TRUQpXG4gICAgICAgIC5yZW1vdmUoKVxuICAgIH1cblxuXG4gICAgLy8gc3RhdGljXG5cbiAgICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCAkZWxlbWVudCA9ICQodGhpcylcbiAgICAgICAgbGV0IGRhdGEgICAgICAgPSAkZWxlbWVudC5kYXRhKERBVEFfS0VZKVxuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBuZXcgQWxlcnQodGhpcylcbiAgICAgICAgICAkZWxlbWVudC5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gJ2Nsb3NlJykge1xuICAgICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHN0YXRpYyBfaGFuZGxlRGlzbWlzcyhhbGVydEluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgfVxuXG4gICAgICAgIGFsZXJ0SW5zdGFuY2UuY2xvc2UodGhpcylcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJChkb2N1bWVudCkub24oXG4gICAgRXZlbnQuQ0xJQ0tfREFUQV9BUEksXG4gICAgU2VsZWN0b3IuRElTTUlTUyxcbiAgICBBbGVydC5faGFuZGxlRGlzbWlzcyhuZXcgQWxlcnQoKSlcbiAgKVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBqUXVlcnlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQuZm5bTkFNRV0gICAgICAgICAgICAgPSBBbGVydC5falF1ZXJ5SW50ZXJmYWNlXG4gICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBBbGVydFxuICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgICByZXR1cm4gQWxlcnQuX2pRdWVyeUludGVyZmFjZVxuICB9XG5cbiAgcmV0dXJuIEFsZXJ0XG5cbn0pKGpRdWVyeSlcblxuZXhwb3J0IGRlZmF1bHQgQWxlcnRcbiIsImltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjAuMC1hbHBoYS42KTogbW9kYWwuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE1vZGFsID0gKCgkKSA9PiB7XG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgY29uc3QgTkFNRSAgICAgICAgICAgICAgICAgICAgICAgICA9ICdtb2RhbCdcbiAgY29uc3QgVkVSU0lPTiAgICAgICAgICAgICAgICAgICAgICA9ICc0LjAuMC1hbHBoYS42J1xuICBjb25zdCBEQVRBX0tFWSAgICAgICAgICAgICAgICAgICAgID0gJ2JzLm1vZGFsJ1xuICBjb25zdCBFVkVOVF9LRVkgICAgICAgICAgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbiAgY29uc3QgREFUQV9BUElfS0VZICAgICAgICAgICAgICAgICA9ICcuZGF0YS1hcGknXG4gIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCAgICAgICAgICAgPSAkLmZuW05BTUVdXG4gIGNvbnN0IFRSQU5TSVRJT05fRFVSQVRJT04gICAgICAgICAgPSAzMDBcbiAgY29uc3QgQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTiA9IDE1MFxuICBjb25zdCBFU0NBUEVfS0VZQ09ERSAgICAgICAgICAgICAgID0gMjcgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgRXNjYXBlIChFc2MpIGtleVxuXG4gIGNvbnN0IERlZmF1bHQgPSB7XG4gICAgYmFja2Ryb3AgOiB0cnVlLFxuICAgIGtleWJvYXJkIDogdHJ1ZSxcbiAgICBmb2N1cyAgICA6IHRydWUsXG4gICAgc2hvdyAgICAgOiB0cnVlXG4gIH1cblxuICBjb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgICBiYWNrZHJvcCA6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgICBrZXlib2FyZCA6ICdib29sZWFuJyxcbiAgICBmb2N1cyAgICA6ICdib29sZWFuJyxcbiAgICBzaG93ICAgICA6ICdib29sZWFuJ1xuICB9XG5cbiAgY29uc3QgRXZlbnQgPSB7XG4gICAgSElERSAgICAgICAgICAgICAgOiBgaGlkZSR7RVZFTlRfS0VZfWAsXG4gICAgSElEREVOICAgICAgICAgICAgOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgICBTSE9XICAgICAgICAgICAgICA6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgICBTSE9XTiAgICAgICAgICAgICA6IGBzaG93biR7RVZFTlRfS0VZfWAsXG4gICAgRk9DVVNJTiAgICAgICAgICAgOiBgZm9jdXNpbiR7RVZFTlRfS0VZfWAsXG4gICAgUkVTSVpFICAgICAgICAgICAgOiBgcmVzaXplJHtFVkVOVF9LRVl9YCxcbiAgICBDTElDS19ESVNNSVNTICAgICA6IGBjbGljay5kaXNtaXNzJHtFVkVOVF9LRVl9YCxcbiAgICBLRVlET1dOX0RJU01JU1MgICA6IGBrZXlkb3duLmRpc21pc3Mke0VWRU5UX0tFWX1gLFxuICAgIE1PVVNFVVBfRElTTUlTUyAgIDogYG1vdXNldXAuZGlzbWlzcyR7RVZFTlRfS0VZfWAsXG4gICAgTU9VU0VET1dOX0RJU01JU1MgOiBgbW91c2Vkb3duLmRpc21pc3Mke0VWRU5UX0tFWX1gLFxuICAgIENMSUNLX0RBVEFfQVBJICAgIDogYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuICB9XG5cbiAgY29uc3QgQ2xhc3NOYW1lID0ge1xuICAgIFNDUk9MTEJBUl9NRUFTVVJFUiA6ICdtb2RhbC1zY3JvbGxiYXItbWVhc3VyZScsXG4gICAgQkFDS0RST1AgICAgICAgICAgIDogJ21vZGFsLWJhY2tkcm9wJyxcbiAgICBPUEVOICAgICAgICAgICAgICAgOiAnbW9kYWwtb3BlbicsXG4gICAgRkFERSAgICAgICAgICAgICAgIDogJ2ZhZGUnLFxuICAgIFNIT1cgICAgICAgICAgICAgICA6ICdzaG93J1xuICB9XG5cbiAgY29uc3QgU2VsZWN0b3IgPSB7XG4gICAgRElBTE9HICAgICAgICAgICAgIDogJy5tb2RhbC1kaWFsb2cnLFxuICAgIERBVEFfVE9HR0xFICAgICAgICA6ICdbZGF0YS10b2dnbGU9XCJtb2RhbFwiXScsXG4gICAgREFUQV9ESVNNSVNTICAgICAgIDogJ1tkYXRhLWRpc21pc3M9XCJtb2RhbFwiXScsXG4gICAgRklYRURfQ09OVEVOVCAgICAgIDogJy5maXhlZC10b3AsIC5maXhlZC1ib3R0b20sIC5pcy1maXhlZCwgLnN0aWNreS10b3AnXG4gIH1cblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgY2xhc3MgTW9kYWwge1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICB0aGlzLl9jb25maWcgICAgICAgICAgICAgID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICAgIHRoaXMuX2VsZW1lbnQgICAgICAgICAgICAgPSBlbGVtZW50XG4gICAgICB0aGlzLl9kaWFsb2cgICAgICAgICAgICAgID0gJChlbGVtZW50KS5maW5kKFNlbGVjdG9yLkRJQUxPRylbMF1cbiAgICAgIHRoaXMuX2JhY2tkcm9wICAgICAgICAgICAgPSBudWxsXG4gICAgICB0aGlzLl9pc1Nob3duICAgICAgICAgICAgID0gZmFsc2VcbiAgICAgIHRoaXMuX2lzQm9keU92ZXJmbG93aW5nICAgPSBmYWxzZVxuICAgICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IGZhbHNlXG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgICAgID0gZmFsc2VcbiAgICAgIHRoaXMuX29yaWdpbmFsQm9keVBhZGRpbmcgPSAwXG4gICAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCAgICAgID0gMFxuICAgIH1cblxuXG4gICAgLy8gZ2V0dGVyc1xuXG4gICAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgICAgcmV0dXJuIFZFUlNJT05cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFxuICAgIH1cblxuXG4gICAgLy8gcHVibGljXG5cbiAgICB0b2dnbGUocmVsYXRlZFRhcmdldCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2lzU2hvd24gPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdyhyZWxhdGVkVGFyZ2V0KVxuICAgIH1cblxuICAgIHNob3cocmVsYXRlZFRhcmdldCkge1xuICAgICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01vZGFsIGlzIHRyYW5zaXRpb25pbmcnKVxuICAgICAgfVxuXG4gICAgICBpZiAoVXRpbC5zdXBwb3J0c1RyYW5zaXRpb25FbmQoKSAmJlxuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKSkge1xuICAgICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG4gICAgICB9XG4gICAgICBjb25zdCBzaG93RXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1csIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldFxuICAgICAgfSlcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNob3dFdmVudClcblxuICAgICAgaWYgKHRoaXMuX2lzU2hvd24gfHwgc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLl9pc1Nob3duID0gdHJ1ZVxuXG4gICAgICB0aGlzLl9jaGVja1Njcm9sbGJhcigpXG4gICAgICB0aGlzLl9zZXRTY3JvbGxiYXIoKVxuXG4gICAgICAkKGRvY3VtZW50LmJvZHkpLmFkZENsYXNzKENsYXNzTmFtZS5PUEVOKVxuXG4gICAgICB0aGlzLl9zZXRFc2NhcGVFdmVudCgpXG4gICAgICB0aGlzLl9zZXRSZXNpemVFdmVudCgpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkub24oXG4gICAgICAgIEV2ZW50LkNMSUNLX0RJU01JU1MsXG4gICAgICAgIFNlbGVjdG9yLkRBVEFfRElTTUlTUyxcbiAgICAgICAgKGV2ZW50KSA9PiB0aGlzLmhpZGUoZXZlbnQpXG4gICAgICApXG5cbiAgICAgICQodGhpcy5fZGlhbG9nKS5vbihFdmVudC5NT1VTRURPV05fRElTTUlTUywgKCkgPT4ge1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uZShFdmVudC5NT1VTRVVQX0RJU01JU1MsIChldmVudCkgPT4ge1xuICAgICAgICAgIGlmICgkKGV2ZW50LnRhcmdldCkuaXModGhpcy5fZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5fc2hvd0JhY2tkcm9wKCgpID0+IHRoaXMuX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpKVxuICAgIH1cblxuICAgIGhpZGUoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNb2RhbCBpcyB0cmFuc2l0aW9uaW5nJylcbiAgICAgIH1cblxuICAgICAgY29uc3QgdHJhbnNpdGlvbiA9IFV0aWwuc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkgJiZcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSlcbiAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgaGlkZUV2ZW50ID0gJC5FdmVudChFdmVudC5ISURFKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKGhpZGVFdmVudClcblxuICAgICAgaWYgKCF0aGlzLl9pc1Nob3duIHx8IGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG5cbiAgICAgIHRoaXMuX3NldEVzY2FwZUV2ZW50KClcbiAgICAgIHRoaXMuX3NldFJlc2l6ZUV2ZW50KClcblxuICAgICAgJChkb2N1bWVudCkub2ZmKEV2ZW50LkZPQ1VTSU4pXG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkub2ZmKEV2ZW50LkNMSUNLX0RJU01JU1MpXG4gICAgICAkKHRoaXMuX2RpYWxvZykub2ZmKEV2ZW50Lk1PVVNFRE9XTl9ESVNNSVNTKVxuXG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCAoZXZlbnQpID0+IHRoaXMuX2hpZGVNb2RhbChldmVudCkpXG4gICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKFRSQU5TSVRJT05fRFVSQVRJT04pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9oaWRlTW9kYWwoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG5cbiAgICAgICQod2luZG93LCBkb2N1bWVudCwgdGhpcy5fZWxlbWVudCwgdGhpcy5fYmFja2Ryb3ApLm9mZihFVkVOVF9LRVkpXG5cbiAgICAgIHRoaXMuX2NvbmZpZyAgICAgICAgICAgICAgPSBudWxsXG4gICAgICB0aGlzLl9lbGVtZW50ICAgICAgICAgICAgID0gbnVsbFxuICAgICAgdGhpcy5fZGlhbG9nICAgICAgICAgICAgICA9IG51bGxcbiAgICAgIHRoaXMuX2JhY2tkcm9wICAgICAgICAgICAgPSBudWxsXG4gICAgICB0aGlzLl9pc1Nob3duICAgICAgICAgICAgID0gbnVsbFxuICAgICAgdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgICA9IG51bGxcbiAgICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBudWxsXG4gICAgICB0aGlzLl9vcmlnaW5hbEJvZHlQYWRkaW5nID0gbnVsbFxuICAgICAgdGhpcy5fc2Nyb2xsYmFyV2lkdGggICAgICA9IG51bGxcbiAgICB9XG5cblxuICAgIC8vIHByaXZhdGVcblxuICAgIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBjb25maWcgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgY29uZmlnKVxuICAgICAgVXRpbC50eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcbiAgICAgIHJldHVybiBjb25maWdcbiAgICB9XG5cbiAgICBfc2hvd0VsZW1lbnQocmVsYXRlZFRhcmdldCkge1xuICAgICAgY29uc3QgdHJhbnNpdGlvbiA9IFV0aWwuc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkgJiZcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSlcblxuICAgICAgaWYgKCF0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUgfHxcbiAgICAgICAgIHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgLy8gZG9uJ3QgbW92ZSBtb2RhbHMgZG9tIHBvc2l0aW9uXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fZWxlbWVudClcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJylcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2Nyb2xsVG9wID0gMFxuXG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICBVdGlsLnJlZmxvdyh0aGlzLl9lbGVtZW50KVxuICAgICAgfVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLmFkZENsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmZvY3VzKSB7XG4gICAgICAgIHRoaXMuX2VuZm9yY2VGb2N1cygpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNob3duRXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1dOLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IHRyYW5zaXRpb25Db21wbGV0ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5mb2N1cykge1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93bkV2ZW50KVxuICAgICAgfVxuXG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICAkKHRoaXMuX2RpYWxvZylcbiAgICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIHRyYW5zaXRpb25Db21wbGV0ZSlcbiAgICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoVFJBTlNJVElPTl9EVVJBVElPTilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zaXRpb25Db21wbGV0ZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgX2VuZm9yY2VGb2N1cygpIHtcbiAgICAgICQoZG9jdW1lbnQpXG4gICAgICAgIC5vZmYoRXZlbnQuRk9DVVNJTikgLy8gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBmb2N1cyBsb29wXG4gICAgICAgIC5vbihFdmVudC5GT0NVU0lOLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoZG9jdW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJlxuICAgICAgICAgICAgICB0aGlzLl9lbGVtZW50ICE9PSBldmVudC50YXJnZXQgJiZcbiAgICAgICAgICAgICAgISQodGhpcy5fZWxlbWVudCkuaGFzKGV2ZW50LnRhcmdldCkubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgX3NldEVzY2FwZUV2ZW50KCkge1xuICAgICAgaWYgKHRoaXMuX2lzU2hvd24gJiYgdGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuS0VZRE9XTl9ESVNNSVNTLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEVTQ0FQRV9LRVlDT0RFKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgfSBlbHNlIGlmICghdGhpcy5faXNTaG93bikge1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLm9mZihFdmVudC5LRVlET1dOX0RJU01JU1MpXG4gICAgICB9XG4gICAgfVxuXG4gICAgX3NldFJlc2l6ZUV2ZW50KCkge1xuICAgICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcbiAgICAgICAgJCh3aW5kb3cpLm9uKEV2ZW50LlJFU0laRSwgKGV2ZW50KSA9PiB0aGlzLl9oYW5kbGVVcGRhdGUoZXZlbnQpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCh3aW5kb3cpLm9mZihFdmVudC5SRVNJWkUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgX2hpZGVNb2RhbCgpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICAgIHRoaXMuX3Nob3dCYWNrZHJvcCgoKSA9PiB7XG4gICAgICAgICQoZG9jdW1lbnQuYm9keSkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pXG4gICAgICAgIHRoaXMuX3Jlc2V0QWRqdXN0bWVudHMoKVxuICAgICAgICB0aGlzLl9yZXNldFNjcm9sbGJhcigpXG4gICAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihFdmVudC5ISURERU4pXG4gICAgICB9KVxuICAgIH1cblxuICAgIF9yZW1vdmVCYWNrZHJvcCgpIHtcbiAgICAgIGlmICh0aGlzLl9iYWNrZHJvcCkge1xuICAgICAgICAkKHRoaXMuX2JhY2tkcm9wKS5yZW1vdmUoKVxuICAgICAgICB0aGlzLl9iYWNrZHJvcCA9IG51bGxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfc2hvd0JhY2tkcm9wKGNhbGxiYWNrKSB7XG4gICAgICBjb25zdCBhbmltYXRlID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSkgP1xuICAgICAgICBDbGFzc05hbWUuRkFERSA6ICcnXG5cbiAgICAgIGlmICh0aGlzLl9pc1Nob3duICYmIHRoaXMuX2NvbmZpZy5iYWNrZHJvcCkge1xuICAgICAgICBjb25zdCBkb0FuaW1hdGUgPSBVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpICYmIGFuaW1hdGVcblxuICAgICAgICB0aGlzLl9iYWNrZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRoaXMuX2JhY2tkcm9wLmNsYXNzTmFtZSA9IENsYXNzTmFtZS5CQUNLRFJPUFxuXG4gICAgICAgIGlmIChhbmltYXRlKSB7XG4gICAgICAgICAgJCh0aGlzLl9iYWNrZHJvcCkuYWRkQ2xhc3MoYW5pbWF0ZSlcbiAgICAgICAgfVxuXG4gICAgICAgICQodGhpcy5fYmFja2Ryb3ApLmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpXG5cbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudC5DTElDS19ESVNNSVNTLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5faWdub3JlQmFja2Ryb3BDbGljaykge1xuICAgICAgICAgICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IGZhbHNlXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLl9jb25maWcuYmFja2Ryb3AgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKGRvQW5pbWF0ZSkge1xuICAgICAgICAgIFV0aWwucmVmbG93KHRoaXMuX2JhY2tkcm9wKVxuICAgICAgICB9XG5cbiAgICAgICAgJCh0aGlzLl9iYWNrZHJvcCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkb0FuaW1hdGUpIHtcbiAgICAgICAgICBjYWxsYmFjaygpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAkKHRoaXMuX2JhY2tkcm9wKVxuICAgICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY2FsbGJhY2spXG4gICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKEJBQ0tEUk9QX1RSQU5TSVRJT05fRFVSQVRJT04pXG5cbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX2lzU2hvd24gJiYgdGhpcy5fYmFja2Ryb3ApIHtcbiAgICAgICAgJCh0aGlzLl9iYWNrZHJvcCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICAgICAgY29uc3QgY2FsbGJhY2tSZW1vdmUgPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fcmVtb3ZlQmFja2Ryb3AoKVxuICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpICYmXG4gICAgICAgICAgICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSB7XG4gICAgICAgICAgJCh0aGlzLl9iYWNrZHJvcClcbiAgICAgICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY2FsbGJhY2tSZW1vdmUpXG4gICAgICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWxsYmFja1JlbW92ZSgpXG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjaygpXG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gdGhlIGZvbGxvd2luZyBtZXRob2RzIGFyZSB1c2VkIHRvIGhhbmRsZSBvdmVyZmxvd2luZyBtb2RhbHNcbiAgICAvLyB0b2RvIChmYXQpOiB0aGVzZSBzaG91bGQgcHJvYmFibHkgYmUgcmVmYWN0b3JlZCBvdXQgb2YgbW9kYWwuanNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBfaGFuZGxlVXBkYXRlKCkge1xuICAgICAgdGhpcy5fYWRqdXN0RGlhbG9nKClcbiAgICB9XG5cbiAgICBfYWRqdXN0RGlhbG9nKCkge1xuICAgICAgY29uc3QgaXNNb2RhbE92ZXJmbG93aW5nID1cbiAgICAgICAgdGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG5cbiAgICAgIGlmICghdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgJiYgaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSBgJHt0aGlzLl9zY3JvbGxiYXJXaWR0aH1weGBcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2lzQm9keU92ZXJmbG93aW5nICYmICFpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHt0aGlzLl9zY3JvbGxiYXJXaWR0aH1weGBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfcmVzZXRBZGp1c3RtZW50cygpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSAnJ1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJ1xuICAgIH1cblxuICAgIF9jaGVja1Njcm9sbGJhcigpIHtcbiAgICAgIHRoaXMuX2lzQm9keU92ZXJmbG93aW5nID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA8IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCA9IHRoaXMuX2dldFNjcm9sbGJhcldpZHRoKClcbiAgICB9XG5cbiAgICBfc2V0U2Nyb2xsYmFyKCkge1xuICAgICAgY29uc3QgYm9keVBhZGRpbmcgPSBwYXJzZUludChcbiAgICAgICAgJChTZWxlY3Rvci5GSVhFRF9DT05URU5UKS5jc3MoJ3BhZGRpbmctcmlnaHQnKSB8fCAwLFxuICAgICAgICAxMFxuICAgICAgKVxuXG4gICAgICB0aGlzLl9vcmlnaW5hbEJvZHlQYWRkaW5nID0gZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgfHwgJydcblxuICAgICAgaWYgKHRoaXMuX2lzQm9keU92ZXJmbG93aW5nKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID1cbiAgICAgICAgICBgJHtib2R5UGFkZGluZyArIHRoaXMuX3Njcm9sbGJhcldpZHRofXB4YFxuICAgICAgfVxuICAgIH1cblxuICAgIF9yZXNldFNjcm9sbGJhcigpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gdGhpcy5fb3JpZ2luYWxCb2R5UGFkZGluZ1xuICAgIH1cblxuICAgIF9nZXRTY3JvbGxiYXJXaWR0aCgpIHsgLy8gdGh4IGQud2Fsc2hcbiAgICAgIGNvbnN0IHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBzY3JvbGxEaXYuY2xhc3NOYW1lID0gQ2xhc3NOYW1lLlNDUk9MTEJBUl9NRUFTVVJFUlxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpXG4gICAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aFxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JvbGxEaXYpXG4gICAgICByZXR1cm4gc2Nyb2xsYmFyV2lkdGhcbiAgICB9XG5cblxuICAgIC8vIHN0YXRpY1xuXG4gICAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnLCByZWxhdGVkVGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGRhdGEgICAgICA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgICAgY29uc3QgX2NvbmZpZyA9ICQuZXh0ZW5kKFxuICAgICAgICAgIHt9LFxuICAgICAgICAgIE1vZGFsLkRlZmF1bHQsXG4gICAgICAgICAgJCh0aGlzKS5kYXRhKCksXG4gICAgICAgICAgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnXG4gICAgICAgIClcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IE1vZGFsKHRoaXMsIF9jb25maWcpXG4gICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgICB9XG4gICAgICAgICAgZGF0YVtjb25maWddKHJlbGF0ZWRUYXJnZXQpXG4gICAgICAgIH0gZWxzZSBpZiAoX2NvbmZpZy5zaG93KSB7XG4gICAgICAgICAgZGF0YS5zaG93KHJlbGF0ZWRUYXJnZXQpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gIH1cblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQoZG9jdW1lbnQpLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgbGV0IHRhcmdldFxuICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KHRoaXMpXG5cbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIHRhcmdldCA9ICQoc2VsZWN0b3IpWzBdXG4gICAgfVxuXG4gICAgY29uc3QgY29uZmlnID0gJCh0YXJnZXQpLmRhdGEoREFUQV9LRVkpID9cbiAgICAgICd0b2dnbGUnIDogJC5leHRlbmQoe30sICQodGFyZ2V0KS5kYXRhKCksICQodGhpcykuZGF0YSgpKVxuXG4gICAgaWYgKHRoaXMudGFnTmFtZSA9PT0gJ0EnIHx8IHRoaXMudGFnTmFtZSA9PT0gJ0FSRUEnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgY29uc3QgJHRhcmdldCA9ICQodGFyZ2V0KS5vbmUoRXZlbnQuU0hPVywgKHNob3dFdmVudCkgPT4ge1xuICAgICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICAvLyBvbmx5IHJlZ2lzdGVyIGZvY3VzIHJlc3RvcmVyIGlmIG1vZGFsIHdpbGwgYWN0dWFsbHkgZ2V0IHNob3duXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAkdGFyZ2V0Lm9uZShFdmVudC5ISURERU4sICgpID0+IHtcbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAgICAgICB0aGlzLmZvY3VzKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgTW9kYWwuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGFyZ2V0KSwgY29uZmlnLCB0aGlzKVxuICB9KVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBqUXVlcnlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQuZm5bTkFNRV0gICAgICAgICAgICAgPSBNb2RhbC5falF1ZXJ5SW50ZXJmYWNlXG4gICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBNb2RhbFxuICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgICByZXR1cm4gTW9kYWwuX2pRdWVyeUludGVyZmFjZVxuICB9XG5cbiAgcmV0dXJuIE1vZGFsXG5cbn0pKGpRdWVyeSlcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxcbiIsIi8qIGdsb2JhbCBUZXRoZXIgKi9cblxuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuMC4wLWFscGhhLjYpOiB0b29sdGlwLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBUb29sdGlwID0gKCgkKSA9PiB7XG5cbiAgLyoqXG4gICAqIENoZWNrIGZvciBUZXRoZXIgZGVwZW5kZW5jeVxuICAgKiBUZXRoZXIgLSBodHRwOi8vdGV0aGVyLmlvL1xuICAgKi9cbiAgaWYgKHR5cGVvZiBUZXRoZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdCb290c3RyYXAgdG9vbHRpcHMgcmVxdWlyZSBUZXRoZXIgKGh0dHA6Ly90ZXRoZXIuaW8vKScpXG4gIH1cblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29uc3RhbnRzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjb25zdCBOQU1FICAgICAgICAgICAgICAgID0gJ3Rvb2x0aXAnXG4gIGNvbnN0IFZFUlNJT04gICAgICAgICAgICAgPSAnNC4wLjAtYWxwaGEuNidcbiAgY29uc3QgREFUQV9LRVkgICAgICAgICAgICA9ICdicy50b29sdGlwJ1xuICBjb25zdCBFVkVOVF9LRVkgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbiAgY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUICA9ICQuZm5bTkFNRV1cbiAgY29uc3QgVFJBTlNJVElPTl9EVVJBVElPTiA9IDE1MFxuICBjb25zdCBDTEFTU19QUkVGSVggICAgICAgID0gJ2JzLXRldGhlcidcblxuICBjb25zdCBEZWZhdWx0ID0ge1xuICAgIGFuaW1hdGlvbiAgIDogdHJ1ZSxcbiAgICB0ZW1wbGF0ZSAgICA6ICc8ZGl2IGNsYXNzPVwidG9vbHRpcFwiIHJvbGU9XCJ0b29sdGlwXCI+J1xuICAgICAgICAgICAgICAgICsgJzxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+PC9kaXY+JyxcbiAgICB0cmlnZ2VyICAgICA6ICdob3ZlciBmb2N1cycsXG4gICAgdGl0bGUgICAgICAgOiAnJyxcbiAgICBkZWxheSAgICAgICA6IDAsXG4gICAgaHRtbCAgICAgICAgOiBmYWxzZSxcbiAgICBzZWxlY3RvciAgICA6IGZhbHNlLFxuICAgIHBsYWNlbWVudCAgIDogJ3RvcCcsXG4gICAgb2Zmc2V0ICAgICAgOiAnMCAwJyxcbiAgICBjb25zdHJhaW50cyA6IFtdLFxuICAgIGNvbnRhaW5lciAgIDogZmFsc2VcbiAgfVxuXG4gIGNvbnN0IERlZmF1bHRUeXBlID0ge1xuICAgIGFuaW1hdGlvbiAgIDogJ2Jvb2xlYW4nLFxuICAgIHRlbXBsYXRlICAgIDogJ3N0cmluZycsXG4gICAgdGl0bGUgICAgICAgOiAnKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKScsXG4gICAgdHJpZ2dlciAgICAgOiAnc3RyaW5nJyxcbiAgICBkZWxheSAgICAgICA6ICcobnVtYmVyfG9iamVjdCknLFxuICAgIGh0bWwgICAgICAgIDogJ2Jvb2xlYW4nLFxuICAgIHNlbGVjdG9yICAgIDogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICAgIHBsYWNlbWVudCAgIDogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgICBvZmZzZXQgICAgICA6ICdzdHJpbmcnLFxuICAgIGNvbnN0cmFpbnRzIDogJ2FycmF5JyxcbiAgICBjb250YWluZXIgICA6ICcoc3RyaW5nfGVsZW1lbnR8Ym9vbGVhbiknXG4gIH1cblxuICBjb25zdCBBdHRhY2htZW50TWFwID0ge1xuICAgIFRPUCAgICA6ICdib3R0b20gY2VudGVyJyxcbiAgICBSSUdIVCAgOiAnbWlkZGxlIGxlZnQnLFxuICAgIEJPVFRPTSA6ICd0b3AgY2VudGVyJyxcbiAgICBMRUZUICAgOiAnbWlkZGxlIHJpZ2h0J1xuICB9XG5cbiAgY29uc3QgSG92ZXJTdGF0ZSA9IHtcbiAgICBTSE9XIDogJ3Nob3cnLFxuICAgIE9VVCAgOiAnb3V0J1xuICB9XG5cbiAgY29uc3QgRXZlbnQgPSB7XG4gICAgSElERSAgICAgICA6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgICBISURERU4gICAgIDogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gICAgU0hPVyAgICAgICA6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgICBTSE9XTiAgICAgIDogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgICBJTlNFUlRFRCAgIDogYGluc2VydGVkJHtFVkVOVF9LRVl9YCxcbiAgICBDTElDSyAgICAgIDogYGNsaWNrJHtFVkVOVF9LRVl9YCxcbiAgICBGT0NVU0lOICAgIDogYGZvY3VzaW4ke0VWRU5UX0tFWX1gLFxuICAgIEZPQ1VTT1VUICAgOiBgZm9jdXNvdXQke0VWRU5UX0tFWX1gLFxuICAgIE1PVVNFRU5URVIgOiBgbW91c2VlbnRlciR7RVZFTlRfS0VZfWAsXG4gICAgTU9VU0VMRUFWRSA6IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YFxuICB9XG5cbiAgY29uc3QgQ2xhc3NOYW1lID0ge1xuICAgIEZBREUgOiAnZmFkZScsXG4gICAgU0hPVyA6ICdzaG93J1xuICB9XG5cbiAgY29uc3QgU2VsZWN0b3IgPSB7XG4gICAgVE9PTFRJUCAgICAgICA6ICcudG9vbHRpcCcsXG4gICAgVE9PTFRJUF9JTk5FUiA6ICcudG9vbHRpcC1pbm5lcidcbiAgfVxuXG4gIGNvbnN0IFRldGhlckNsYXNzID0ge1xuICAgIGVsZW1lbnQgOiBmYWxzZSxcbiAgICBlbmFibGVkIDogZmFsc2VcbiAgfVxuXG4gIGNvbnN0IFRyaWdnZXIgPSB7XG4gICAgSE9WRVIgIDogJ2hvdmVyJyxcbiAgICBGT0NVUyAgOiAnZm9jdXMnLFxuICAgIENMSUNLICA6ICdjbGljaycsXG4gICAgTUFOVUFMIDogJ21hbnVhbCdcbiAgfVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjbGFzcyBUb29sdGlwIHtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuXG4gICAgICAvLyBwcml2YXRlXG4gICAgICB0aGlzLl9pc0VuYWJsZWQgICAgICAgID0gdHJ1ZVxuICAgICAgdGhpcy5fdGltZW91dCAgICAgICAgICA9IDBcbiAgICAgIHRoaXMuX2hvdmVyU3RhdGUgICAgICAgPSAnJ1xuICAgICAgdGhpcy5fYWN0aXZlVHJpZ2dlciAgICA9IHt9XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgID0gZmFsc2VcbiAgICAgIHRoaXMuX3RldGhlciAgICAgICAgICAgPSBudWxsXG5cbiAgICAgIC8vIHByb3RlY3RlZFxuICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgICAgdGhpcy5jb25maWcgID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICAgIHRoaXMudGlwICAgICA9IG51bGxcblxuICAgICAgdGhpcy5fc2V0TGlzdGVuZXJzKClcblxuICAgIH1cblxuXG4gICAgLy8gZ2V0dGVyc1xuXG4gICAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgICAgcmV0dXJuIFZFUlNJT05cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgICByZXR1cm4gRGVmYXVsdFxuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICAgIHJldHVybiBOQU1FXG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBEQVRBX0tFWSgpIHtcbiAgICAgIHJldHVybiBEQVRBX0tFWVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgRXZlbnQoKSB7XG4gICAgICByZXR1cm4gRXZlbnRcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IEVWRU5UX0tFWSgpIHtcbiAgICAgIHJldHVybiBFVkVOVF9LRVlcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gICAgfVxuXG5cbiAgICAvLyBwdWJsaWNcblxuICAgIGVuYWJsZSgpIHtcbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9IHRydWVcbiAgICB9XG5cbiAgICBkaXNhYmxlKCkge1xuICAgICAgdGhpcy5faXNFbmFibGVkID0gZmFsc2VcbiAgICB9XG5cbiAgICB0b2dnbGVFbmFibGVkKCkge1xuICAgICAgdGhpcy5faXNFbmFibGVkID0gIXRoaXMuX2lzRW5hYmxlZFxuICAgIH1cblxuICAgIHRvZ2dsZShldmVudCkge1xuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGRhdGFLZXkgPSB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZXG4gICAgICAgIGxldCBjb250ZXh0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXkpXG5cbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgY29udGV4dCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKFxuICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldCxcbiAgICAgICAgICAgIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKClcbiAgICAgICAgICApXG4gICAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXksIGNvbnRleHQpXG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyLmNsaWNrID0gIWNvbnRleHQuX2FjdGl2ZVRyaWdnZXIuY2xpY2tcblxuICAgICAgICBpZiAoY29udGV4dC5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICAgICAgY29udGV4dC5fZW50ZXIobnVsbCwgY29udGV4dClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250ZXh0Ll9sZWF2ZShudWxsLCBjb250ZXh0KVxuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgaWYgKCQodGhpcy5nZXRUaXBFbGVtZW50KCkpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSkge1xuICAgICAgICAgIHRoaXMuX2xlYXZlKG51bGwsIHRoaXMpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9lbnRlcihudWxsLCB0aGlzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcblxuICAgICAgdGhpcy5jbGVhbnVwVGV0aGVyKClcblxuICAgICAgJC5yZW1vdmVEYXRhKHRoaXMuZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSlcblxuICAgICAgJCh0aGlzLmVsZW1lbnQpLm9mZih0aGlzLmNvbnN0cnVjdG9yLkVWRU5UX0tFWSlcbiAgICAgICQodGhpcy5lbGVtZW50KS5jbG9zZXN0KCcubW9kYWwnKS5vZmYoJ2hpZGUuYnMubW9kYWwnKVxuXG4gICAgICBpZiAodGhpcy50aXApIHtcbiAgICAgICAgJCh0aGlzLnRpcCkucmVtb3ZlKClcbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNFbmFibGVkICAgICA9IG51bGxcbiAgICAgIHRoaXMuX3RpbWVvdXQgICAgICAgPSBudWxsXG4gICAgICB0aGlzLl9ob3ZlclN0YXRlICAgID0gbnVsbFxuICAgICAgdGhpcy5fYWN0aXZlVHJpZ2dlciA9IG51bGxcbiAgICAgIHRoaXMuX3RldGhlciAgICAgICAgPSBudWxsXG5cbiAgICAgIHRoaXMuZWxlbWVudCA9IG51bGxcbiAgICAgIHRoaXMuY29uZmlnICA9IG51bGxcbiAgICAgIHRoaXMudGlwICAgICA9IG51bGxcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgaWYgKCQodGhpcy5lbGVtZW50KS5jc3MoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHVzZSBzaG93IG9uIHZpc2libGUgZWxlbWVudHMnKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBzaG93RXZlbnQgPSAkLkV2ZW50KHRoaXMuY29uc3RydWN0b3IuRXZlbnQuU0hPVylcbiAgICAgIGlmICh0aGlzLmlzV2l0aENvbnRlbnQoKSAmJiB0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVG9vbHRpcCBpcyB0cmFuc2l0aW9uaW5nJylcbiAgICAgICAgfVxuICAgICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcihzaG93RXZlbnQpXG5cbiAgICAgICAgY29uc3QgaXNJblRoZURvbSA9ICQuY29udGFpbnMoXG4gICAgICAgICAgdGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgICAgIHRoaXMuZWxlbWVudFxuICAgICAgICApXG5cbiAgICAgICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fCAhaXNJblRoZURvbSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGlwICAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgICAgICBjb25zdCB0aXBJZCA9IFV0aWwuZ2V0VUlEKHRoaXMuY29uc3RydWN0b3IuTkFNRSlcblxuICAgICAgICB0aXAuc2V0QXR0cmlidXRlKCdpZCcsIHRpcElkKVxuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgdGlwSWQpXG5cbiAgICAgICAgdGhpcy5zZXRDb250ZW50KClcblxuICAgICAgICBpZiAodGhpcy5jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgJCh0aXApLmFkZENsYXNzKENsYXNzTmFtZS5GQURFKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGxhY2VtZW50ICA9IHR5cGVvZiB0aGlzLmNvbmZpZy5wbGFjZW1lbnQgPT09ICdmdW5jdGlvbicgP1xuICAgICAgICAgIHRoaXMuY29uZmlnLnBsYWNlbWVudC5jYWxsKHRoaXMsIHRpcCwgdGhpcy5lbGVtZW50KSA6XG4gICAgICAgICAgdGhpcy5jb25maWcucGxhY2VtZW50XG5cbiAgICAgICAgY29uc3QgYXR0YWNobWVudCA9IHRoaXMuX2dldEF0dGFjaG1lbnQocGxhY2VtZW50KVxuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29uZmlnLmNvbnRhaW5lciA9PT0gZmFsc2UgPyBkb2N1bWVudC5ib2R5IDogJCh0aGlzLmNvbmZpZy5jb250YWluZXIpXG5cbiAgICAgICAgJCh0aXApXG4gICAgICAgICAgLmRhdGEodGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSwgdGhpcylcbiAgICAgICAgICAuYXBwZW5kVG8oY29udGFpbmVyKVxuXG4gICAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKHRoaXMuY29uc3RydWN0b3IuRXZlbnQuSU5TRVJURUQpXG5cbiAgICAgICAgdGhpcy5fdGV0aGVyID0gbmV3IFRldGhlcih7XG4gICAgICAgICAgYXR0YWNobWVudCxcbiAgICAgICAgICBlbGVtZW50ICAgICAgICAgOiB0aXAsXG4gICAgICAgICAgdGFyZ2V0ICAgICAgICAgIDogdGhpcy5lbGVtZW50LFxuICAgICAgICAgIGNsYXNzZXMgICAgICAgICA6IFRldGhlckNsYXNzLFxuICAgICAgICAgIGNsYXNzUHJlZml4ICAgICA6IENMQVNTX1BSRUZJWCxcbiAgICAgICAgICBvZmZzZXQgICAgICAgICAgOiB0aGlzLmNvbmZpZy5vZmZzZXQsXG4gICAgICAgICAgY29uc3RyYWludHMgICAgIDogdGhpcy5jb25maWcuY29uc3RyYWludHMsXG4gICAgICAgICAgYWRkVGFyZ2V0Q2xhc3NlczogZmFsc2VcbiAgICAgICAgfSlcblxuICAgICAgICBVdGlsLnJlZmxvdyh0aXApXG4gICAgICAgIHRoaXMuX3RldGhlci5wb3NpdGlvbigpXG5cbiAgICAgICAgJCh0aXApLmFkZENsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHByZXZIb3ZlclN0YXRlID0gdGhpcy5faG92ZXJTdGF0ZVxuICAgICAgICAgIHRoaXMuX2hvdmVyU3RhdGUgICA9IG51bGxcbiAgICAgICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuXG4gICAgICAgICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5TSE9XTilcblxuICAgICAgICAgIGlmIChwcmV2SG92ZXJTdGF0ZSA9PT0gSG92ZXJTdGF0ZS5PVVQpIHtcbiAgICAgICAgICAgIHRoaXMuX2xlYXZlKG51bGwsIHRoaXMpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFV0aWwuc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkgJiYgJCh0aGlzLnRpcCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSB7XG4gICAgICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZVxuICAgICAgICAgICQodGhpcy50aXApXG4gICAgICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKFRvb2x0aXAuX1RSQU5TSVRJT05fRFVSQVRJT04pXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb21wbGV0ZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaGlkZShjYWxsYmFjaykge1xuICAgICAgY29uc3QgdGlwICAgICAgID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICAgIGNvbnN0IGhpZGVFdmVudCA9ICQuRXZlbnQodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5ISURFKVxuICAgICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Rvb2x0aXAgaXMgdHJhbnNpdGlvbmluZycpXG4gICAgICB9XG4gICAgICBjb25zdCBjb21wbGV0ZSAgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9ob3ZlclN0YXRlICE9PSBIb3ZlclN0YXRlLlNIT1cgJiYgdGlwLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICB0aXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aXApXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JylcbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5ISURERU4pXG4gICAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgICAgIHRoaXMuY2xlYW51cFRldGhlcigpXG5cbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKGhpZGVFdmVudClcblxuICAgICAgaWYgKGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgJCh0aXApLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RyaWdnZXIuQ0xJQ0tdID0gZmFsc2VcbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVHJpZ2dlci5GT0NVU10gPSBmYWxzZVxuICAgICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUcmlnZ2VyLkhPVkVSXSA9IGZhbHNlXG5cbiAgICAgIGlmIChVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpICYmXG4gICAgICAgICAgJCh0aGlzLnRpcCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSB7XG4gICAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcbiAgICAgICAgJCh0aXApXG4gICAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSlcbiAgICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoVFJBTlNJVElPTl9EVVJBVElPTilcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcGxldGUoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9ob3ZlclN0YXRlID0gJydcbiAgICB9XG5cblxuICAgIC8vIHByb3RlY3RlZFxuXG4gICAgaXNXaXRoQ29udGVudCgpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuZ2V0VGl0bGUoKSlcbiAgICB9XG5cbiAgICBnZXRUaXBFbGVtZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMudGlwID0gdGhpcy50aXAgfHwgJCh0aGlzLmNvbmZpZy50ZW1wbGF0ZSlbMF1cbiAgICB9XG5cbiAgICBzZXRDb250ZW50KCkge1xuICAgICAgY29uc3QgJHRpcCA9ICQodGhpcy5nZXRUaXBFbGVtZW50KCkpXG5cbiAgICAgIHRoaXMuc2V0RWxlbWVudENvbnRlbnQoJHRpcC5maW5kKFNlbGVjdG9yLlRPT0xUSVBfSU5ORVIpLCB0aGlzLmdldFRpdGxlKCkpXG5cbiAgICAgICR0aXAucmVtb3ZlQ2xhc3MoYCR7Q2xhc3NOYW1lLkZBREV9ICR7Q2xhc3NOYW1lLlNIT1d9YClcblxuICAgICAgdGhpcy5jbGVhbnVwVGV0aGVyKClcbiAgICB9XG5cbiAgICBzZXRFbGVtZW50Q29udGVudCgkZWxlbWVudCwgY29udGVudCkge1xuICAgICAgY29uc3QgaHRtbCA9IHRoaXMuY29uZmlnLmh0bWxcbiAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ29iamVjdCcgJiYgKGNvbnRlbnQubm9kZVR5cGUgfHwgY29udGVudC5qcXVlcnkpKSB7XG4gICAgICAgIC8vIGNvbnRlbnQgaXMgYSBET00gbm9kZSBvciBhIGpRdWVyeVxuICAgICAgICBpZiAoaHRtbCkge1xuICAgICAgICAgIGlmICghJChjb250ZW50KS5wYXJlbnQoKS5pcygkZWxlbWVudCkpIHtcbiAgICAgICAgICAgICRlbGVtZW50LmVtcHR5KCkuYXBwZW5kKGNvbnRlbnQpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRlbGVtZW50LnRleHQoJChjb250ZW50KS50ZXh0KCkpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRlbGVtZW50W2h0bWwgPyAnaHRtbCcgOiAndGV4dCddKGNvbnRlbnQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VGl0bGUoKSB7XG4gICAgICBsZXQgdGl0bGUgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9yaWdpbmFsLXRpdGxlJylcblxuICAgICAgaWYgKCF0aXRsZSkge1xuICAgICAgICB0aXRsZSA9IHR5cGVvZiB0aGlzLmNvbmZpZy50aXRsZSA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgICAgICAgdGhpcy5jb25maWcudGl0bGUuY2FsbCh0aGlzLmVsZW1lbnQpIDpcbiAgICAgICAgICB0aGlzLmNvbmZpZy50aXRsZVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGl0bGVcbiAgICB9XG5cbiAgICBjbGVhbnVwVGV0aGVyKCkge1xuICAgICAgaWYgKHRoaXMuX3RldGhlcikge1xuICAgICAgICB0aGlzLl90ZXRoZXIuZGVzdHJveSgpXG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyBwcml2YXRlXG5cbiAgICBfZ2V0QXR0YWNobWVudChwbGFjZW1lbnQpIHtcbiAgICAgIHJldHVybiBBdHRhY2htZW50TWFwW3BsYWNlbWVudC50b1VwcGVyQ2FzZSgpXVxuICAgIH1cblxuICAgIF9zZXRMaXN0ZW5lcnMoKSB7XG4gICAgICBjb25zdCB0cmlnZ2VycyA9IHRoaXMuY29uZmlnLnRyaWdnZXIuc3BsaXQoJyAnKVxuXG4gICAgICB0cmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyKSA9PiB7XG4gICAgICAgIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgJCh0aGlzLmVsZW1lbnQpLm9uKFxuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5DTElDSyxcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnNlbGVjdG9yLFxuICAgICAgICAgICAgKGV2ZW50KSA9PiB0aGlzLnRvZ2dsZShldmVudClcbiAgICAgICAgICApXG5cbiAgICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyICE9PSBUcmlnZ2VyLk1BTlVBTCkge1xuICAgICAgICAgIGNvbnN0IGV2ZW50SW4gID0gdHJpZ2dlciA9PT0gVHJpZ2dlci5IT1ZFUiA/XG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50Lk1PVVNFRU5URVIgOlxuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5GT0NVU0lOXG4gICAgICAgICAgY29uc3QgZXZlbnRPdXQgPSB0cmlnZ2VyID09PSBUcmlnZ2VyLkhPVkVSID9cbiAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuTU9VU0VMRUFWRSA6XG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkZPQ1VTT1VUXG5cbiAgICAgICAgICAkKHRoaXMuZWxlbWVudClcbiAgICAgICAgICAgIC5vbihcbiAgICAgICAgICAgICAgZXZlbnRJbixcbiAgICAgICAgICAgICAgdGhpcy5jb25maWcuc2VsZWN0b3IsXG4gICAgICAgICAgICAgIChldmVudCkgPT4gdGhpcy5fZW50ZXIoZXZlbnQpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAub24oXG4gICAgICAgICAgICAgIGV2ZW50T3V0LFxuICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5zZWxlY3RvcixcbiAgICAgICAgICAgICAgKGV2ZW50KSA9PiB0aGlzLl9sZWF2ZShldmVudClcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgICQodGhpcy5lbGVtZW50KS5jbG9zZXN0KCcubW9kYWwnKS5vbihcbiAgICAgICAgICAnaGlkZS5icy5tb2RhbCcsXG4gICAgICAgICAgKCkgPT4gdGhpcy5oaWRlKClcbiAgICAgICAgKVxuICAgICAgfSlcblxuICAgICAgaWYgKHRoaXMuY29uZmlnLnNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gJC5leHRlbmQoe30sIHRoaXMuY29uZmlnLCB7XG4gICAgICAgICAgdHJpZ2dlciAgOiAnbWFudWFsJyxcbiAgICAgICAgICBzZWxlY3RvciA6ICcnXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9maXhUaXRsZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgX2ZpeFRpdGxlKCkge1xuICAgICAgY29uc3QgdGl0bGVUeXBlID0gdHlwZW9mIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnKVxuICAgICAgaWYgKHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJykgfHxcbiAgICAgICAgIHRpdGxlVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAnZGF0YS1vcmlnaW5hbC10aXRsZScsXG4gICAgICAgICAgdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgndGl0bGUnKSB8fCAnJ1xuICAgICAgICApXG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJycpXG4gICAgICB9XG4gICAgfVxuXG4gICAgX2VudGVyKGV2ZW50LCBjb250ZXh0KSB7XG4gICAgICBjb25zdCBkYXRhS2V5ID0gdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWVxuXG4gICAgICBjb250ZXh0ID0gY29udGV4dCB8fCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSlcblxuICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihcbiAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICAgIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKClcbiAgICAgICAgKVxuICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSwgY29udGV4dClcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbXG4gICAgICAgICAgZXZlbnQudHlwZSA9PT0gJ2ZvY3VzaW4nID8gVHJpZ2dlci5GT0NVUyA6IFRyaWdnZXIuSE9WRVJcbiAgICAgICAgXSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKCQoY29udGV4dC5nZXRUaXBFbGVtZW50KCkpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSB8fFxuICAgICAgICAgY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSG92ZXJTdGF0ZS5TSE9XKSB7XG4gICAgICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIb3ZlclN0YXRlLlNIT1dcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNsZWFyVGltZW91dChjb250ZXh0Ll90aW1lb3V0KVxuXG4gICAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSG92ZXJTdGF0ZS5TSE9XXG5cbiAgICAgIGlmICghY29udGV4dC5jb25maWcuZGVsYXkgfHwgIWNvbnRleHQuY29uZmlnLmRlbGF5LnNob3cpIHtcbiAgICAgICAgY29udGV4dC5zaG93KClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhvdmVyU3RhdGUuU0hPVykge1xuICAgICAgICAgIGNvbnRleHQuc2hvdygpXG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQuY29uZmlnLmRlbGF5LnNob3cpXG4gICAgfVxuXG4gICAgX2xlYXZlKGV2ZW50LCBjb250ZXh0KSB7XG4gICAgICBjb25zdCBkYXRhS2V5ID0gdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWVxuXG4gICAgICBjb250ZXh0ID0gY29udGV4dCB8fCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSlcblxuICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihcbiAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICAgIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKClcbiAgICAgICAgKVxuICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSwgY29udGV4dClcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbXG4gICAgICAgICAgZXZlbnQudHlwZSA9PT0gJ2ZvY3Vzb3V0JyA/IFRyaWdnZXIuRk9DVVMgOiBUcmlnZ2VyLkhPVkVSXG4gICAgICAgIF0gPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY29udGV4dC5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjbGVhclRpbWVvdXQoY29udGV4dC5fdGltZW91dClcblxuICAgICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhvdmVyU3RhdGUuT1VUXG5cbiAgICAgIGlmICghY29udGV4dC5jb25maWcuZGVsYXkgfHwgIWNvbnRleHQuY29uZmlnLmRlbGF5LmhpZGUpIHtcbiAgICAgICAgY29udGV4dC5oaWRlKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhvdmVyU3RhdGUuT1VUKSB7XG4gICAgICAgICAgY29udGV4dC5oaWRlKClcbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dC5jb25maWcuZGVsYXkuaGlkZSlcbiAgICB9XG5cbiAgICBfaXNXaXRoQWN0aXZlVHJpZ2dlcigpIHtcbiAgICAgIGZvciAoY29uc3QgdHJpZ2dlciBpbiB0aGlzLl9hY3RpdmVUcmlnZ2VyKSB7XG4gICAgICAgIGlmICh0aGlzLl9hY3RpdmVUcmlnZ2VyW3RyaWdnZXJdKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgY29uZmlnID0gJC5leHRlbmQoXG4gICAgICAgIHt9LFxuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHQsXG4gICAgICAgICQodGhpcy5lbGVtZW50KS5kYXRhKCksXG4gICAgICAgIGNvbmZpZ1xuICAgICAgKVxuXG4gICAgICBpZiAoY29uZmlnLmRlbGF5ICYmIHR5cGVvZiBjb25maWcuZGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGNvbmZpZy5kZWxheSA9IHtcbiAgICAgICAgICBzaG93IDogY29uZmlnLmRlbGF5LFxuICAgICAgICAgIGhpZGUgOiBjb25maWcuZGVsYXlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhcbiAgICAgICAgTkFNRSxcbiAgICAgICAgY29uZmlnLFxuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlXG4gICAgICApXG5cbiAgICAgIHJldHVybiBjb25maWdcbiAgICB9XG5cbiAgICBfZ2V0RGVsZWdhdGVDb25maWcoKSB7XG4gICAgICBjb25zdCBjb25maWcgPSB7fVxuXG4gICAgICBpZiAodGhpcy5jb25maWcpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5jb25maWcpIHtcbiAgICAgICAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0W2tleV0gIT09IHRoaXMuY29uZmlnW2tleV0pIHtcbiAgICAgICAgICAgIGNvbmZpZ1trZXldID0gdGhpcy5jb25maWdba2V5XVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29uZmlnXG4gICAgfVxuXG5cbiAgICAvLyBzdGF0aWNcblxuICAgIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBkYXRhICAgICAgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICAgIGNvbnN0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWdcblxuICAgICAgICBpZiAoIWRhdGEgJiYgL2Rpc3Bvc2V8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IFRvb2x0aXAodGhpcywgX2NvbmZpZylcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICAgIH1cbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICB9XG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJC5mbltOQU1FXSAgICAgICAgICAgICA9IFRvb2x0aXAuX2pRdWVyeUludGVyZmFjZVxuICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gVG9vbHRpcFxuICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgICByZXR1cm4gVG9vbHRpcC5falF1ZXJ5SW50ZXJmYWNlXG4gIH1cblxuICByZXR1cm4gVG9vbHRpcFxuXG59KShqUXVlcnkpXG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXBcbiIsImltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjAuMC1hbHBoYS42KTogZHJvcGRvd24uanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IERyb3Bkb3duID0gKCgkKSA9PiB7XG5cblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgY29uc3QgTkFNRSAgICAgICAgICAgICAgICAgICAgID0gJ2Ryb3Bkb3duJ1xuICBjb25zdCBWRVJTSU9OICAgICAgICAgICAgICAgICAgPSAnNC4wLjAtYWxwaGEuNidcbiAgY29uc3QgREFUQV9LRVkgICAgICAgICAgICAgICAgID0gJ2JzLmRyb3Bkb3duJ1xuICBjb25zdCBFVkVOVF9LRVkgICAgICAgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuICBjb25zdCBEQVRBX0FQSV9LRVkgICAgICAgICAgICAgPSAnLmRhdGEtYXBpJ1xuICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgICAgICAgPSAkLmZuW05BTUVdXG4gIGNvbnN0IEVTQ0FQRV9LRVlDT0RFICAgICAgICAgICA9IDI3IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIEVzY2FwZSAoRXNjKSBrZXlcbiAgY29uc3QgQVJST1dfVVBfS0VZQ09ERSAgICAgICAgID0gMzggLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgdXAgYXJyb3cga2V5XG4gIGNvbnN0IEFSUk9XX0RPV05fS0VZQ09ERSAgICAgICA9IDQwIC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIGRvd24gYXJyb3cga2V5XG4gIGNvbnN0IFJJR0hUX01PVVNFX0JVVFRPTl9XSElDSCA9IDMgLy8gTW91c2VFdmVudC53aGljaCB2YWx1ZSBmb3IgdGhlIHJpZ2h0IGJ1dHRvbiAoYXNzdW1pbmcgYSByaWdodC1oYW5kZWQgbW91c2UpXG5cbiAgY29uc3QgRXZlbnQgPSB7XG4gICAgSElERSAgICAgICAgICAgICA6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgICBISURERU4gICAgICAgICAgIDogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gICAgU0hPVyAgICAgICAgICAgICA6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgICBTSE9XTiAgICAgICAgICAgIDogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgICBDTElDSyAgICAgICAgICAgIDogYGNsaWNrJHtFVkVOVF9LRVl9YCxcbiAgICBDTElDS19EQVRBX0FQSSAgIDogYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YCxcbiAgICBGT0NVU0lOX0RBVEFfQVBJIDogYGZvY3VzaW4ke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gLFxuICAgIEtFWURPV05fREFUQV9BUEkgOiBga2V5ZG93biR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbiAgfVxuXG4gIGNvbnN0IENsYXNzTmFtZSA9IHtcbiAgICBCQUNLRFJPUCA6ICdkcm9wZG93bi1iYWNrZHJvcCcsXG4gICAgRElTQUJMRUQgOiAnZGlzYWJsZWQnLFxuICAgIFNIT1cgICAgIDogJ3Nob3cnXG4gIH1cblxuICBjb25zdCBTZWxlY3RvciA9IHtcbiAgICBCQUNLRFJPUCAgICAgIDogJy5kcm9wZG93bi1iYWNrZHJvcCcsXG4gICAgREFUQV9UT0dHTEUgICA6ICdbZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXScsXG4gICAgRk9STV9DSElMRCAgICA6ICcuZHJvcGRvd24gZm9ybScsXG4gICAgUk9MRV9NRU5VICAgICA6ICdbcm9sZT1cIm1lbnVcIl0nLFxuICAgIFJPTEVfTElTVEJPWCAgOiAnW3JvbGU9XCJsaXN0Ym94XCJdJyxcbiAgICBOQVZCQVJfTkFWICAgIDogJy5uYXZiYXItbmF2JyxcbiAgICBWSVNJQkxFX0lURU1TIDogJ1tyb2xlPVwibWVudVwiXSBsaTpub3QoLmRpc2FibGVkKSBhLCAnXG4gICAgICAgICAgICAgICAgICArICdbcm9sZT1cImxpc3Rib3hcIl0gbGk6bm90KC5kaXNhYmxlZCkgYSdcbiAgfVxuXG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBjbGFzcyBEcm9wZG93biB7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuXG4gICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG4gICAgfVxuXG5cbiAgICAvLyBnZXR0ZXJzXG5cbiAgICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgICByZXR1cm4gVkVSU0lPTlxuICAgIH1cblxuXG4gICAgLy8gcHVibGljXG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCAkKHRoaXMpLmhhc0NsYXNzKENsYXNzTmFtZS5ESVNBQkxFRCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcmVudCAgID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRoaXMpXG4gICAgICBjb25zdCBpc0FjdGl2ZSA9ICQocGFyZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgICAgRHJvcGRvd24uX2NsZWFyTWVudXMoKVxuXG4gICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiZcbiAgICAgICAgICEkKHBhcmVudCkuY2xvc2VzdChTZWxlY3Rvci5OQVZCQVJfTkFWKS5sZW5ndGgpIHtcblxuICAgICAgICAvLyBpZiBtb2JpbGUgd2UgdXNlIGEgYmFja2Ryb3AgYmVjYXVzZSBjbGljayBldmVudHMgZG9uJ3QgZGVsZWdhdGVcbiAgICAgICAgY29uc3QgZHJvcGRvd24gICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZHJvcGRvd24uY2xhc3NOYW1lID0gQ2xhc3NOYW1lLkJBQ0tEUk9QXG4gICAgICAgICQoZHJvcGRvd24pLmluc2VydEJlZm9yZSh0aGlzKVxuICAgICAgICAkKGRyb3Bkb3duKS5vbignY2xpY2snLCBEcm9wZG93bi5fY2xlYXJNZW51cylcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgICAgcmVsYXRlZFRhcmdldCA6IHRoaXNcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNob3dFdmVudCAgICAgPSAkLkV2ZW50KEV2ZW50LlNIT1csIHJlbGF0ZWRUYXJnZXQpXG5cbiAgICAgICQocGFyZW50KS50cmlnZ2VyKHNob3dFdmVudClcblxuICAgICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgdGhpcy5mb2N1cygpXG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG5cbiAgICAgICQocGFyZW50KS50b2dnbGVDbGFzcyhDbGFzc05hbWUuU0hPVylcbiAgICAgICQocGFyZW50KS50cmlnZ2VyKCQuRXZlbnQoRXZlbnQuU0hPV04sIHJlbGF0ZWRUYXJnZXQpKVxuXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBkaXNwb3NlKCkge1xuICAgICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRVZFTlRfS0VZKVxuICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgICB9XG5cblxuICAgIC8vIHByaXZhdGVcblxuICAgIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuQ0xJQ0ssIHRoaXMudG9nZ2xlKVxuICAgIH1cblxuXG4gICAgLy8gc3RhdGljXG5cbiAgICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IERyb3Bkb3duKHRoaXMpXG4gICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgICB9XG4gICAgICAgICAgZGF0YVtjb25maWddLmNhbGwodGhpcylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBzdGF0aWMgX2NsZWFyTWVudXMoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudCAmJiBldmVudC53aGljaCA9PT0gUklHSFRfTU9VU0VfQlVUVE9OX1dISUNIKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBiYWNrZHJvcCA9ICQoU2VsZWN0b3IuQkFDS0RST1ApWzBdXG4gICAgICBpZiAoYmFja2Ryb3ApIHtcbiAgICAgICAgYmFja2Ryb3AucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiYWNrZHJvcClcbiAgICAgIH1cblxuICAgICAgY29uc3QgdG9nZ2xlcyA9ICQubWFrZUFycmF5KCQoU2VsZWN0b3IuREFUQV9UT0dHTEUpKVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZ2dsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcGFyZW50ICAgICAgICA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0b2dnbGVzW2ldKVxuICAgICAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgICAgIHJlbGF0ZWRUYXJnZXQgOiB0b2dnbGVzW2ldXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoISQocGFyZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50ICYmIChldmVudC50eXBlID09PSAnY2xpY2snICYmXG4gICAgICAgICAgICAvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSB8fCBldmVudC50eXBlID09PSAnZm9jdXNpbicpXG4gICAgICAgICAgICAmJiAkLmNvbnRhaW5zKHBhcmVudCwgZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoaWRlRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkhJREUsIHJlbGF0ZWRUYXJnZXQpXG4gICAgICAgICQocGFyZW50KS50cmlnZ2VyKGhpZGVFdmVudClcbiAgICAgICAgaWYgKGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICB0b2dnbGVzW2ldLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXG5cbiAgICAgICAgJChwYXJlbnQpXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuICAgICAgICAgIC50cmlnZ2VyKCQuRXZlbnQoRXZlbnQuSElEREVOLCByZWxhdGVkVGFyZ2V0KSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgX2dldFBhcmVudEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIGxldCBwYXJlbnRcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpXG5cbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICBwYXJlbnQgPSAkKHNlbGVjdG9yKVswXVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyZW50IHx8IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgIH1cblxuICAgIHN0YXRpYyBfZGF0YUFwaUtleWRvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgICBpZiAoIS8oMzh8NDB8Mjd8MzIpLy50ZXN0KGV2ZW50LndoaWNoKSB8fFxuICAgICAgICAgL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8ICQodGhpcykuaGFzQ2xhc3MoQ2xhc3NOYW1lLkRJU0FCTEVEKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyZW50ICAgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodGhpcylcbiAgICAgIGNvbnN0IGlzQWN0aXZlID0gJChwYXJlbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgICBpZiAoIWlzQWN0aXZlICYmIGV2ZW50LndoaWNoICE9PSBFU0NBUEVfS0VZQ09ERSB8fFxuICAgICAgICAgICBpc0FjdGl2ZSAmJiBldmVudC53aGljaCA9PT0gRVNDQVBFX0tFWUNPREUpIHtcblxuICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEVTQ0FQRV9LRVlDT0RFKSB7XG4gICAgICAgICAgY29uc3QgdG9nZ2xlID0gJChwYXJlbnQpLmZpbmQoU2VsZWN0b3IuREFUQV9UT0dHTEUpWzBdXG4gICAgICAgICAgJCh0b2dnbGUpLnRyaWdnZXIoJ2ZvY3VzJylcbiAgICAgICAgfVxuXG4gICAgICAgICQodGhpcykudHJpZ2dlcignY2xpY2snKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgaXRlbXMgPSAkKHBhcmVudCkuZmluZChTZWxlY3Rvci5WSVNJQkxFX0lURU1TKS5nZXQoKVxuXG4gICAgICBpZiAoIWl0ZW1zLmxlbmd0aCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgbGV0IGluZGV4ID0gaXRlbXMuaW5kZXhPZihldmVudC50YXJnZXQpXG5cbiAgICAgIGlmIChldmVudC53aGljaCA9PT0gQVJST1dfVVBfS0VZQ09ERSAmJiBpbmRleCA+IDApIHsgLy8gdXBcbiAgICAgICAgaW5kZXgtLVxuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEFSUk9XX0RPV05fS0VZQ09ERSAmJiBpbmRleCA8IGl0ZW1zLmxlbmd0aCAtIDEpIHsgLy8gZG93blxuICAgICAgICBpbmRleCsrXG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgaW5kZXggPSAwXG4gICAgICB9XG5cbiAgICAgIGl0ZW1zW2luZGV4XS5mb2N1cygpXG4gICAgfVxuXG4gIH1cblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQoZG9jdW1lbnQpXG4gICAgLm9uKEV2ZW50LktFWURPV05fREFUQV9BUEksIFNlbGVjdG9yLkRBVEFfVE9HR0xFLCAgRHJvcGRvd24uX2RhdGFBcGlLZXlkb3duSGFuZGxlcilcbiAgICAub24oRXZlbnQuS0VZRE9XTl9EQVRBX0FQSSwgU2VsZWN0b3IuUk9MRV9NRU5VLCAgICBEcm9wZG93bi5fZGF0YUFwaUtleWRvd25IYW5kbGVyKVxuICAgIC5vbihFdmVudC5LRVlET1dOX0RBVEFfQVBJLCBTZWxlY3Rvci5ST0xFX0xJU1RCT1gsIERyb3Bkb3duLl9kYXRhQXBpS2V5ZG93bkhhbmRsZXIpXG4gICAgLm9uKGAke0V2ZW50LkNMSUNLX0RBVEFfQVBJfSAke0V2ZW50LkZPQ1VTSU5fREFUQV9BUEl9YCwgRHJvcGRvd24uX2NsZWFyTWVudXMpXG4gICAgLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1RPR0dMRSwgRHJvcGRvd24ucHJvdG90eXBlLnRvZ2dsZSlcbiAgICAub24oRXZlbnQuQ0xJQ0tfREFUQV9BUEksIFNlbGVjdG9yLkZPUk1fQ0hJTEQsIChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgfSlcblxuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogalF1ZXJ5XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAkLmZuW05BTUVdICAgICAgICAgICAgID0gRHJvcGRvd24uX2pRdWVyeUludGVyZmFjZVxuICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gRHJvcGRvd25cbiAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ICA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgcmV0dXJuIERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2VcbiAgfVxuXG4gIHJldHVybiBEcm9wZG93blxuXG59KShqUXVlcnkpXG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duXG4iLCIvLyBhbGxvdyB0aGlzIHRvIGJlIHNldCBmcm9tIG91dHNpZGUgb2YgdGhpcyBzY3JpcHQsIGUuZy4gZnJvbSB0aGUgYmFja2VuZFxuY29uc3QgYXBpID0gd2luZG93WydoZWxsb3NwZWNpYWwnXSB8fCB7XG4gICdvcHRzJzoge1xuICAgICdkZW1vJzogZmFsc2VcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2luZG93WydoZWxsb3NwZWNpYWwnXSA9IGFwaTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgYXBpIGZyb20gJy4vYXBpJztcblxuY2xhc3MgQUJ0ZXN0IHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgLy8gYm9vdHN0cmFwXG4gICAgdGhpcy4kb25Jbml0KCk7XG4gICAgJChkb2N1bWVudCkucmVhZHkodGhpcy4kb25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0XG4gICAqL1xuICAkb25Jbml0ICgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnYXBwLmpzIGluaXRpYWxpemVkJyk7XG4gICAgdGhpcy50ZXN0cyA9IHtcbiAgICAgICdTdGFuZG91dHJlZ2lzdHJhdGlvbic6IHt9LFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogT24gZG9jdW1lbnQgcmVhZHlcbiAgICovXG4gICRvblJlYWR5ICgpIHtcbiAgICAvLyB0aGlzLkFCdGVzdDAxKCk7XG4gIH1cblxuICAvKipcbiAgICogUnVuIHRlc3RcbiAgICogQHBhcmFtICB7U3RyaW5nfSBpZFxuICAgKi9cbiAgcnVuIChpZCkge1xuICAgIGlmICh0aGlzLnRlc3RzW2lkXSkge1xuICAgICAgdGhpc1sndGVzdCcgKyBpZF0oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihgQUJ0ZXN0IHdpdGggaWQgJHtpZH0gZG9lcyBub3QgZXhpc3RzYCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRlc3QgMDE6IEFCdGVzdC0tc3RhbmRvdXRyZWdpc3RyYXRpb25cbiAgICovXG4gIHRlc3RTdGFuZG91dHJlZ2lzdHJhdGlvbiAoKSB7XG4gICAgY29uc3QgJGhvbWVwYWdlQ2FyZCA9ICQoJyNob21lcGFnZVJlZ2lzdGVyQ2FyZCcpO1xuICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuICAgIGlmICghJGhvbWVwYWdlQ2FyZC5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgJGJvZHkuYWRkQ2xhc3MoJ0FCdGVzdC0tc3RhbmRvdXRyZWdpc3RyYXRpb24nKTtcbiAgICAvLyBvbiBjbGljayBhbnl3aGVyZSByZW1vdmUgdGhlIGNsYXNzXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICRib2R5LnJlbW92ZUNsYXNzKCdBQnRlc3QtLXN0YW5kb3V0cmVnaXN0cmF0aW9uJyk7XG4gICAgfSwgdHJ1ZSk7XG4gIH1cbn1cblxuLy8gZXhwb3J0IHRvIHB1YmxpYyBBUElcbmFwaVsnQUJ0ZXN0J10gPSBuZXcgQUJ0ZXN0KCk7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IGFwaSBmcm9tICcuL2FwaSc7XG5cbmNsYXNzIENvb2tpZUFubm91bmNlbWVudCB7XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIC8vIGJvb3RzdHJhcFxuICAgIHRoaXMuJG9uSW5pdCgpO1xuICAgICQoZG9jdW1lbnQpLnJlYWR5KHRoaXMuJG9uUmVhZHkuYmluZCh0aGlzKSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdFxuICAgKi9cbiAgJG9uSW5pdCAoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2FwcC5qcyBpbml0aWFsaXplZCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIGRvY3VtZW50IHJlYWR5XG4gICAqL1xuICAkb25SZWFkeSAoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICBjb25zdCAkY29udGFpbmVyID0gJCgnI2pzLWNvb2tpZWFubm91bmNlbWVudCcpO1xuICAgIGNvbnN0ICRkaXNtaXNzVHJpZ2dlcnMgPSAkKCcuanMtY29va2llYW5ub3VuY2VtZW50LWRpc21pc3MnKTtcblxuICAgIGlmICghJGNvbnRhaW5lci5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjb29raWVWYWx1ZSA9IHRoaXMuX3JlYWRDb29raWUoJ2Nvb2tpZWFubm91bmNlbWVudCcpO1xuXG4gICAgaWYgKGNvb2tpZVZhbHVlICE9PSAnc2hvd24nKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGNvbnRhaW5lci5hZGRDbGFzcygnaW4nKTtcbiAgICAgIH0sIDUwMCk7XG5cbiAgICAgICRkaXNtaXNzVHJpZ2dlcnMub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAkY29udGFpbmVyLnJlbW92ZUNsYXNzKCdpbicpO1xuICAgICAgICB0aGlzLl9jcmVhdGVDb29raWUoJ2Nvb2tpZWFubm91bmNlbWVudCcsICdzaG93bicsIDM2NSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBjb29raWVcbiAgICogQHNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjQxMDM1OTYvMTkzODk3MFxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtICB7TWl4ZWR9ICB2YWx1ZVxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGRheXNcbiAgICovXG4gIF9jcmVhdGVDb29raWUgKG5hbWUsIHZhbHVlLCBkYXlzKSB7XG4gICAgdmFyIGV4cGlyZXMgPSBcIlwiO1xuICAgIGlmIChkYXlzKSB7XG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXMqMjQqNjAqNjAqMTAwMCkpO1xuICAgICAgICBleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyBkYXRlLnRvVVRDU3RyaW5nKCk7XG4gICAgfVxuICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArIHZhbHVlICsgZXhwaXJlcyArIFwiOyBwYXRoPS9cIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkIGNvb2tpZVxuICAgKiBAc2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNDEwMzU5Ni8xOTM4OTcwXG4gICAqXG4gICAqIEBwYXJhbSAge1N0cmluZ30gbmFtZVxuICAgKiBAcmV0dXJuIHs/U3RyaW5nfVxuICAgKi9cbiAgX3JlYWRDb29raWUgKG5hbWUpIHtcbiAgICB2YXIgbmFtZUVRID0gbmFtZSArIFwiPVwiO1xuICAgIHZhciBjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xuICAgIGZvcih2YXIgaT0wO2kgPCBjYS5sZW5ndGg7aSsrKSB7XG4gICAgICAgIHZhciBjID0gY2FbaV07XG4gICAgICAgIHdoaWxlIChjLmNoYXJBdCgwKT09JyAnKSBjID0gYy5zdWJzdHJpbmcoMSxjLmxlbmd0aCk7XG4gICAgICAgIGlmIChjLmluZGV4T2YobmFtZUVRKSA9PSAwKSByZXR1cm4gYy5zdWJzdHJpbmcobmFtZUVRLmxlbmd0aCxjLmxlbmd0aCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgX2VyYXNlQ29va2llIChuYW1lKSB7XG4gICAgdGhpcy5fY3JlYXRlQ29va2llKG5hbWUsXCJcIiwtMSk7XG4gIH1cbn1cblxubmV3IENvb2tpZUFubm91bmNlbWVudCgpO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBhcGkgZnJvbSAnLi9hcGknO1xuXG5jbGFzcyBOYXNrIHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy4kb25Jbml0KCk7XG5cbiAgICAvLyBib290c3RyYXBcbiAgICAkKGRvY3VtZW50KS5yZWFkeSh0aGlzLiRvblJlYWR5LmJpbmQodGhpcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRcbiAgICovXG4gICRvbkluaXQgKCkge1xuICAgIC8vIHRyeSB0byBpbW1lZGlhdGVseSBoaWRlIHRoZSBjb250YWluZXIgdG8gZG9uJ3QgY2F1c2UgYSBmbGFzaCBvZiBcInVuc3R5bGVkXCIgY29udGVudFxuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb250YWluZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmFzaycpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250YWluZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnRhaW5lcnNbaV0uc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICB9XG4gICAgfSBjYXRjaChlKSB7fVxuXG4gICAgdGhpcy5fYnJvd3NlciA9IHRoaXMuX2dldEJyb3dzZXIoKTtcbiAgICB0aGlzLl9tb2JpbGVPUyA9IHRoaXMuX2dldE1vYmlsZU9TKCk7XG4gICAgdGhpcy5fcGVybWlzc2lvbiA9IHRoaXMuX2dldFBlcm1pc3Npb24oKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGBOYXNrLT4kb25Jbml0OiBtb2JpbGUgb3MgaXMgJHt0aGlzLl9tb2JpbGVPU30gYnJvd3NlciBkZXRlY3RlZCBpcyAke3RoaXMuX2Jyb3dzZXJ9LCBwZXJtaXNzaW9uIGlzICR7dGhpcy5fcGVybWlzc2lvbn1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBkb2N1bWVudCByZWFkeVxuICAgKi9cbiAgJG9uUmVhZHkgKCkge1xuICAgIGNvbnN0ICRjb250YWluZXIgPSAkKCcubmFzaycpO1xuXG4gICAgaWYgKCEkY29udGFpbmVyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX18kY29udGFpbmVyID0gJGNvbnRhaW5lcjtcblxuICAgIGNvbnN0IHZpZXcgPSB0aGlzLl9nZXRWaWV3TmFtZSgpO1xuICAgIHRoaXMuc2V0Vmlldyh2aWV3KTtcblxuICAgIGlmICh2aWV3ID09PSAncmVxdWVzdCcgfHwgdmlldyA9PT0gJ3JlcXVlc3QtbW9iaWxlJykge1xuICAgICAgdGhpcy5hc2soKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldEVudih0aGlzLl9nZXRFbnZOYW1lKCkpO1xuXG4gICAgdGhpcy5fXyRjb250YWluZXIuYWRkQ2xhc3MoJ25hc2stLXJlYWR5JykuY3NzKCdvcGFjaXR5JywgMSk7XG5cbiAgICAvLyBAQGRpc2FibGVkIGZvciBub3csIGJlY2F1c2UgaXQgd291bGRuJ3Qgd29yayBhbnl3YXkuLi5cbiAgICAvLyBAc2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zMTg2ODcwOC8xOTM4OTcwXG4gICAgLy8gJGNvbnRhaW5lci5maW5kKCcubmFza19fYXNrYnV0dG9uJykuY2xpY2soKCkgPT4ge1xuICAgIC8vICAgdGhpcy5hc2soKVxuICAgIC8vIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBicm93c2VyXG4gICAqXG4gICAqIGJhc2VkIG9uIEBsaW5rIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS85ODUxNzY5LzE5Mzg5NzBcbiAgICpcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgX2dldEJyb3dzZXIgKCkge1xuICAgIC8vIE9wZXJhIDguMCtcbiAgICBpZiAoKCEhd2luZG93Lm9wciAmJiAhIW9wci5hZGRvbnMpIHx8ICEhd2luZG93Lm9wZXJhIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignIE9QUi8nKSA+PSAwKSB7XG4gICAgICByZXR1cm4gJ29wZXJhJztcbiAgICB9XG5cbiAgICAvLyBGaXJlZm94IDEuMCtcbiAgICBpZiAodHlwZW9mIEluc3RhbGxUcmlnZ2VyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuICdmaXJlZm94JztcbiAgICB9XG5cbiAgICAvLyBTYWZhcmkgMy4wKyBcIltvYmplY3QgSFRNTEVsZW1lbnRDb25zdHJ1Y3Rvcl1cIlxuICAgIGlmICgvY29uc3RydWN0b3IvaS50ZXN0KHdpbmRvdy5IVE1MRWxlbWVudCkgfHwgKGZ1bmN0aW9uIChwKSB7IHJldHVybiBwLnRvU3RyaW5nKCkgPT09IFwiW29iamVjdCBTYWZhcmlSZW1vdGVOb3RpZmljYXRpb25dXCI7IH0pKCF3aW5kb3dbJ3NhZmFyaSddIHx8ICh0eXBlb2Ygc2FmYXJpICE9PSAndW5kZWZpbmVkJyAmJiBzYWZhcmkucHVzaE5vdGlmaWNhdGlvbikpKSB7XG4gICAgICByZXR1cm4gJ3NhZmFyaSc7XG4gICAgfVxuXG4gICAgLy8gSW50ZXJuZXQgRXhwbG9yZXIgNi0xMVxuICAgIGlmICgvKkBjY19vbiFAKi9mYWxzZSB8fCAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSkge1xuICAgICAgcmV0dXJuICdpZSc7XG4gICAgfVxuXG4gICAgLy8gRWRnZSAyMCtcbiAgICBpZiAoISF3aW5kb3cuU3R5bGVNZWRpYSkge1xuICAgICAgcmV0dXJuICdlZGdlJztcbiAgICB9XG5cbiAgICAvLyBDaHJvbWUgMStcbiAgICBpZiAoISF3aW5kb3cuY2hyb21lICYmICEhd2luZG93LmNocm9tZS53ZWJzdG9yZSkge1xuICAgICAgcmV0dXJuICdjaHJvbWUnO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgdGhlIG1vYmlsZSBvcGVyYXRpbmcgc3lzdGVtLlxuICAgKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgb25lIG9mICdpb3MnLCAnQW5kcm9pZCcsICdXaW5kb3dzIFBob25lJywgb3IgZmFsc2UuXG4gICAqXG4gICAqIEBsaW5rIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMTc0MjEwNy8xOTM4OTcwXG4gICAqXG4gICAqIEByZXR1cm5zIHtTdHJpbmd8Ym9vbGVhbn0gJ3dpbmRvd3N8YW5kcm9pZHxpb3N8ZmFsc2UnXG4gICAqL1xuICBfZ2V0TW9iaWxlT1MgKCkge1xuICAgIHZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93Lm9wZXJhO1xuXG4gICAgLy8gV2luZG93cyBQaG9uZSBtdXN0IGNvbWUgZmlyc3QgYmVjYXVzZSBpdHMgVUEgYWxzbyBjb250YWlucyBcIkFuZHJvaWRcIlxuICAgIGlmICgvd2luZG93cyBwaG9uZS9pLnRlc3QodXNlckFnZW50KSkge1xuICAgICAgcmV0dXJuICd3aW5kb3dzJztcbiAgICB9XG5cbiAgICBpZiAoL2FuZHJvaWQvaS50ZXN0KHVzZXJBZ2VudCkpIHtcbiAgICAgIHJldHVybiAnYW5kcm9pZCc7XG4gICAgfVxuXG4gICAgLy8gaU9TIGRldGVjdGlvbiBmcm9tOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS85MDM5ODg1LzE3NzcxMFxuICAgIGlmICgvaVBhZHxpUGhvbmV8aVBvZC8udGVzdCh1c2VyQWdlbnQpICYmICF3aW5kb3cuTVNTdHJlYW0pIHtcbiAgICAgIHJldHVybiAnaW9zJztcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG5vdGlmaWNhdGlvbnMgcGVybWlzc2lvbnNcbiAgICpcbiAgICogQHJldHVybiB7U3RyaW5nfSAnZGVuaWVkfGdyYW50ZWR8ZGVmYXVsdHx1bnN1cHBvcnRlZCdcbiAgICovXG4gIF9nZXRQZXJtaXNzaW9uICgpIHtcbiAgICBpZiAoTm90aWZpY2F0aW9uICYmIE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uKSB7XG4gICAgICByZXR1cm4gTm90aWZpY2F0aW9uLnBlcm1pc3Npb247XG4gICAgfVxuICAgIHJldHVybiAndW5zdXBwb3J0ZWQnO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB2aWV3IG5hbWVcbiAgICpcbiAgICogVmlld3M6XG4gICAqICdncmFudGVkJzogTm90aWZpY2F0aW9uIGFyZSBncmFudGVkIGFscmVhZHksIHdlIGRvbid0IGFzayBhbnl0aGluZ1xuICAgKiAncmVxdWVzdCc6IE9uIEFuZHJvaWQgbm90aWZpY2F0aW9ucyBhcmUgZGVuaWVkIGJ5IHRoZSB1c2VyLCB3ZSBhc2sgdG8gZW5hYmxlIHRoZW1cbiAgICogJ3JlcXVlc3QtbW9iaWxlJzogT24gQW5kcm9pZCBub3RpZmljYXRpb25zIGFyZSBkZW5pZWQgYnkgdGhlIHVzZXIsIHdlIGFzayB0byBlbmFibGUgdGhlbVxuICAgKiAnYWxsb3dpbmcnOiBPbiBkZXNrdG9wIG5vdGlmaWNhdGlvbnMgYXJlIGRlbmllZCBieSB0aGUgdXNlciwgdGhlIGFsbG93IGJveCBpcyBvcGVuZWRcbiAgICogJ2FsbG93aW5nLW1vYmlsZSc6IE9uIEFuZHJvaWQgbm90aWZpY2F0aW9ucyBhcmUgZGVuaWVkIGJ5IHRoZSB1c2VyLCB0aGUgYWxsb3cgYm94IGlzIG9wZW5lZFxuICAgKiAndGhhbmtzJzogT24gZGVza3RvcCBub3RpZmljYXRpb24gcGVybWlzc2lvbiBoYXMganVzdCBiZWVuIGdyYW50ZWQgYnkgdGhlIHVzZXJcbiAgICogJ3RoYW5rcy1tb2JpbGUnOiBPbiBBbmRyb2lkIG5vdGlmaWNhdGlvbiBwZXJtaXNzaW9uIGhhcyBqdXN0IGJlZW4gZ3JhbnRlZCBieSB0aGUgdXNlclxuICAgKiAnb3RoZXInOiBEZXNrdG9wIGJyb3dzZXIgb3RoZXIgdGhhbiBDaHJvbWUuIEZpcmVmb3gsIE9wZXJhLCBubyBub3RpZmljYXRpb25zIHN5c3RlbVxuICAgKiAnb3RoZXItbW9iaWxlJzogTW9iaWxlIGJyb3dzZXIgb3RoZXIgdGhhbiBBbmRyb2lkLCBubyBub3RpZmljYXRpb25zIHN5c3RlbVxuICAgKlxuICAgKiBAcGFyYW0gIHs/U3RyaW5nfSB2aWV3RmFtaWx5XG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gICBfZ2V0Vmlld05hbWUgKHZpZXdGYW1pbHkpIHtcbiAgICBpZiAodmlld0ZhbWlseSA9PT0gJ2FsbG93aW5nJykge1xuICAgICAgcmV0dXJuIHRoaXMuX21vYmlsZU9TID8gJ2FsbG93aW5nLW1vYmlsZScgOiAnYWxsb3dpbmcnO1xuICAgIH1cbiAgICBlbHNlIGlmICh2aWV3RmFtaWx5ID09PSAndGhhbmtzJykge1xuICAgICAgcmV0dXJuIHRoaXMuX21vYmlsZU9TID8gJ3RoYW5rcy1tb2JpbGUnIDogJ3RoYW5rcyc7XG4gICAgfVxuXG4gICAgLy8gaWYgKFsnY2hyb21lJywgJ2ZpcmVmb3gnLCAnb3BlcmEnXS5pbmRleE9mKHRoaXMuX2Jyb3dzZXIpID09PSAtMSkge1xuICAgIC8vIH1cblxuICAgIGlmICh0aGlzLl9wZXJtaXNzaW9uID09PSAndW5zdXBwb3J0ZWQnKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbW9iaWxlT1MgPyAnb3RoZXItbW9iaWxlJyA6ICdvdGhlcic7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuX3Blcm1pc3Npb24gPT09ICdkZWZhdWx0Jykge1xuICAgICAgcmV0dXJuIHRoaXMuX21vYmlsZU9TID8gJ3JlcXVlc3QtbW9iaWxlJyA6ICdyZXF1ZXN0JztcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5fcGVybWlzc2lvbiA9PT0gJ2RlbmllZCcpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tb2JpbGVPUyA/ICdyZXF1ZXN0LW1vYmlsZScgOiAncmVxdWVzdCc7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuX3Blcm1pc3Npb24gPT09ICdncmFudGVkJykge1xuICAgICAgcmV0dXJuICdncmFudGVkJztcbiAgICB9XG5cbiAgICByZXR1cm4gJ25vbmUnO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBlbnYgbmFtZVxuICAgKlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBfZ2V0RW52TmFtZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vYmlsZU9TID09PSAnYW5kcm9pZCcgPyAnYW5kcm9pZCcgOiB0aGlzLl9icm93c2VyO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB2aWV3IG9uIHRoZSBVSVxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB2aWV3XG4gICAqL1xuICBzZXRWaWV3ICh2aWV3KSB7XG4gICAgdGhpcy5fXyRjb250YWluZXIuYXR0cignZGF0YS1uYXNrLXZpZXctaXMnLCB2aWV3KTtcbiAgICBjb25zb2xlLmxvZyhgTmFzazogc2V0IHZpZXcgbmFtZSB0byBcIiR7dmlld31cImApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBlbnZpcm9ubWVudCBvbiB0aGUgVUlcbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAcGFyYW0ge1N0cmluZ30gZW52XG4gICAqL1xuICBzZXRFbnYgKGVudikge1xuICAgIHRoaXMuX18kY29udGFpbmVyLmF0dHIoJ2RhdGEtbmFzay1lbnYtaXMnLCBlbnYpO1xuICAgIGNvbnNvbGUubG9nKGBOYXNrOiBzZXQgZW52IHRvIFwiJHtlbnZ9XCJgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBBc2sgZm9yIHBlcm1pc3Npb25cbiAgICpcbiAgICogQHBhcmFtIHs/RnVuY3Rpb259IGNhbGxiYWNrXG4gICAqIEBwdWJsaWNcbiAgICpcbiAgICogQHJldHVybiB7dGhpc31cbiAgICovXG4gIGFzayAoY2FsbGJhY2spIHtcbiAgICBpZiAodGhpcy5fcGVybWlzc2lvbiA9PT0gJ3Vuc3VwcG9ydGVkJykge1xuICAgICAgY29uc29sZS5sb2coYE5hc2s6IE5vdGlmaWNhdGlvbiBhcmUgbm90IHN1cHBvcnRlZGApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgTmFzazogYXNraW5nIGZvciBwZXJtaXNzaW9uYCk7XG5cbiAgICB0aGlzLnNldFZpZXcodGhpcy5fZ2V0Vmlld05hbWUoJ2FsbG93aW5nJykpO1xuXG4gICAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKChwZXJtaXNzaW9uKSA9PiB7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2socGVybWlzc2lvbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChwZXJtaXNzaW9uID09PSAnZ3JhbnRlZCcpIHtcbiAgICAgICAgLy8gY29uc3Qgbm90aWZpY2F0aW9uID0gbmV3IE5vdGlmaWNhdGlvbignVGhhbmtzJyk7XG4gICAgICAgIHRoaXMuc2V0Vmlldyh0aGlzLl9nZXRWaWV3TmFtZSgndGhhbmtzJykpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAocGVybWlzc2lvbiA9PT0gJ2RlbmllZCcpIHtcbiAgICAgICAgdGhpcy5zZXRWaWV3KHRoaXMuX2dldFZpZXdOYW1lKCdyZXF1ZXN0JykpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuLy8gZXhwb3J0IHRvIHB1YmxpYyBBUElcbmFwaVsnbmFzayddID0gbmV3IE5hc2soKTtcblxuZXhwb3J0IGRlZmF1bHQgTmFzaztcbiIsImNsYXNzIEZhcSB7XG5cbiAgY29uc3RydWN0b3IgKCkge1xuXG4gICAgLy8gYm9vdHN0cmFwXG4gICAgdGhpcy4kb25Jbml0KCk7XG4gICAgJChkb2N1bWVudCkucmVhZHkodGhpcy4kb25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0XG4gICAqL1xuICAkb25Jbml0ICgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBkb2N1bWVudCByZWFkeVxuICAgKi9cbiAgJG9uUmVhZHkgKCkge1xuICAgIGlmICghJCgnI2hzRmFxJykubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgJGV4cGFuZGFibGVzID0gJCgnLmV4cGFuZGFibGVfX2JvZHknKTtcbiAgICBjb25zdCAkbm9SZXN1bHRzID0gJCgnLmhzRmFxX19ub3Jlc3VsdHMnKTtcbiAgICBjb25zdCBoaWdobGlnaHRPcHRzID0geyBjbGFzc05hbWU6ICdoc0ZhcV9fbWFyaycgfTtcblxuICAgICRleHBhbmRhYmxlcy5jb2xsYXBzZSh7XG4gICAgICB0b2dnbGU6IGZhbHNlXG4gICAgfSk7XG5cbiAgICAkKCcjaHNGYXFfZmlsdGVyTGlzdCcpLmxpdmVGaWx0ZXIoJyNoc0ZhcV9maWx0ZXJJbnB1dCcsICcuZXhwYW5kYWJsZScsIHtcbiAgICAgIGFmdGVyOiBmdW5jdGlvbiAoY29udGFpbnMsIGNvbnRhaW5zTm90KSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy52YWx1ZTtcblxuICAgICAgICBpZiAoIWNvbnRhaW5zLmxlbmd0aCkge1xuICAgICAgICAgICRleHBhbmRhYmxlcy5wYXJlbnQoKS5wYXJlbnQoKS5wcmV2KCkuaGlkZSgpO1xuICAgICAgICAgICRub1Jlc3VsdHMuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRub1Jlc3VsdHMuaGlkZSgpO1xuICAgICAgICAgICRleHBhbmRhYmxlcy5wYXJlbnQoKS5wYXJlbnQoKS5wcmV2KCkuc2hvdygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFxdWVyeSkge1xuICAgICAgICAgIC8vIGNvbnRhaW5zLmNvbGxhcHNlKCdoaWRlJykudW5oaWdobGlnaHQoaGlnaGxpZ2h0T3B0cyk7XG4gICAgICAgICAgLy8gY29udGFpbnNOb3QuY29sbGFwc2UoJ2hpZGUnKS51bmhpZ2hsaWdodChoaWdobGlnaHRPcHRzKTtcbiAgICAgICAgICAkZXhwYW5kYWJsZXMuY29sbGFwc2UoJ2hpZGUnKS51bmhpZ2hsaWdodChoaWdobGlnaHRPcHRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29udGFpbnMuZmluZCgnLmV4cGFuZGFibGVfX2JvZHknKS5jb2xsYXBzZSgnc2hvdycpXG4gICAgICAgICAgICAgIC51bmhpZ2hsaWdodChoaWdobGlnaHRPcHRzKVxuICAgICAgICAgICAgICAuaGlnaGxpZ2h0KHF1ZXJ5LCBoaWdobGlnaHRPcHRzKTtcblxuICAgICAgICAgICAgY29udGFpbnNOb3QuZmluZCgnLmV4cGFuZGFibGVfX2JvZHknKS5jb2xsYXBzZSgnaGlkZScpXG4gICAgICAgICAgICAgIC51bmhpZ2hsaWdodChoaWdobGlnaHRPcHRzKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcuaHNGYXFfX3NlYXJjaCcpLm9uKCdzdWJtaXQnLCB0aGlzLl9vblNlYXJjaFN1Ym1pdCk7XG4gICAgJCgnI2hzRmFxX2ZpbHRlclN1Ym1pdCcpLm9uKCdjbGljaycsIHRoaXMuX29uU2VhcmNoU3VibWl0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBzZWFyY2ggc3VibWl0XG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gZSBFdmVudFxuICAgKi9cbiAgX29uU2VhcmNoU3VibWl0IChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDYwMCkge1xuICAgICAgLy8gJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgLy8gICBzY3JvbGxUb3A6ICQoJy5oc0ZhcV9fbWFyaycpLmZpcnN0KCkub2Zmc2V0KCkudG9wIC0gNzBcbiAgICAgIC8vIH0sIDMwMCk7XG4gICAgICAkKCdodG1sLCBib2R5Jykuc2Nyb2xsVG9wKCQoJy5oc0ZhcV9fbWFyaycpLmZpcnN0KCkub2Zmc2V0KCkudG9wIC0gNzApO1xuICAgIH1cbiAgfVxufVxuXG5uZXcgRmFxKCk7XG4iLCJpbXBvcnQgYXBpIGZyb20gJy4vYXBpJztcblxuLyoqXG4gKiBHZXQgbGFuZyBjb2RlIGZyb20gdXJsXG4gKlxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRMYW5nRnJvbVVybCAoKSB7XG4gIGNvbnN0IHVybFBhcnRzID0gbG9jYXRpb24uaHJlZi5zcGxpdCgnLycpO1xuICBjb25zdCBsYW5nTWFwID0gd2luZG93LmkxOG47XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB1cmxQYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIGxldCB1cmxQYXJ0ID0gdXJsUGFydHNbaV07XG4gICAgaWYgKGxhbmdNYXBbdXJsUGFydF0gJiYgdXJsUGFydCAhPT0gJ2N1cnJlbnQnKSB7XG4gICAgICByZXR1cm4gdXJsUGFydDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuICdlbic7IC8vIGRlZmF1bHQgbGFuZ3VhZ2Vcbn1cblxuLyoqXG4gKiBHZXQgaTE4biBzdHJpbmcgYnkgaXRzIGlkXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSAgaWRcbiAqIEBwYXJhbSAgez9TdHJpbmd9IGdpdmVuTGFuZ1xuICogQHBhcmFtICB7P1N0cmluZ30gZmFsbGJhY2tcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEkxOG4gKGlkLCBnaXZlbkxhbmcsIGZhbGxiYWNrKSB7XG4gIGNvbnN0IGkxOG4gPSB3aW5kb3cuaTE4bjtcbiAgY29uc3QgbGFuZyA9IGdpdmVuTGFuZyB8fCBpMThuWydjdXJyZW50J10gfHwgZ2V0TGFuZ0Zyb21VcmwoKTtcbiAgY29uc3QgbGFuZ1N0cmluZ3MgPSBpMThuW2xhbmddO1xuICByZXR1cm4gbGFuZ1N0cmluZ3NbaWRdIHx8IGZhbGxiYWNrIHx8ICcnO1xufVxuXG5hcGlbJ2dldEkxOG4nXSA9IGdldEkxOG47XG4iLCJpbXBvcnQgYXBpIGZyb20gJy4vYXBpJztcbmltcG9ydCB7IGdldEkxOG4gfSBmcm9tICcuL2kxOG4nO1xuXG4vKipcbiAqIEFuYXRvbXkgb2YgYSBzdGF0ZSBvYmplY3RcbiAqXG4gKiAodmFsdWVzIHByZWNlZGVkIGJ5IGEgcXVlc3Rpb24gbWFyayBhcmUgb3B0aW9uYWwpXG5gYGBcbntcbiAgaWQ6IHtzdHJpbmd9LCAgICAgICAgICAgIC8vIEFsbCBsb3dlcmNhc2UsIG5vIHdoaXRlc3BhY2VzLiBUaGlzIGlzIHVzZWQgaW4gdGhlIGNzcyBhcyB3ZWxsLiBlLmcuICcnZWVubWFhbCcnLFxuICBpZHg6IHtOdW1iZXJ9LCAgICAgICAgICAgLy8gVGhlIGluZGV4IG9mIHRoZSBzdGF0ZSBpbiB0aGUgc3RhdGVzIHN1Y2Nlc3Npb24uIGUuZy4gYDFgXG4gIHRleHQ6IHtzdHJpbmd9LCAgICAgICAgICAvLyBUaGUgZGlzcGxheWVkIHRleHQgZm9yIHRoZSBzdGF0ZS4gRS5nLiBgJ0Vlbm1hYWwuLi4nYCxcbiAgZHVyYXRpb246IHs/TnVtYmVyfSwgICAgIC8vIER5bmFtaWNhbGx5IHNldCBieSB0aGUgSXRlbSBjbGFzcywgaXQgY2FuIGhhdmUgYSBkZWZhdWx0IHZhbHVlIHRob3VnaFxuICBpc0xhc3Q6IHs/Ym9vbGVhbn0sICAgICAgLy8gU2V0IGl0IHRvIHRydWUgaWYgeW91IHdhbnQgdG8gaW5kaWNhdGUgdGhhdCB0aGlzIHN0YXRlIGlzIHRoZSBsYXN0LiBPdGhlcndpc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBsYXN0IGlzIGFsd2F5cyBjb25zaWRlcmVkIGAndmVya29jaHQnYFxuICBleHBpcmF0aW9uczoge0FycmF5PFxuICAgICAgT2JqZWN0PFxuICAgICAgICBwZXJjZW50OiB7TnVtYmVyfSwgLy8gTnVtYmVyIHRoYXQgaW5kaWNhdGVzIGF0IHdoaWNoIHBvaW50IGluIHRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIChleHByZXNzZWQgaW4gcGVyY2VudGFnZSkgdGhpcyBleHBpcmF0aW9uIGJyZWFrcG9pbnQgaXMgdHJpZ2dlcmVkXG4gICAgICAgIG5hbWU6IHtzdHJpbmd9ICAgICAvLyBBbGwgbG93ZXJjYXNlLCBubyB3aGl0ZXNwYWNlcy4gVGhpcyBpcyB1c2VkIGluIHRoZSBjc3MgYXMgd2VsbC4gZS5nLiBgJ2JsaW5rJ2AsXG4gICAgICAgID5cbiAgICA+fVxuICBbe1xuICAgIHBlcmNlbnQ6IDcwLFxuICAgIG5hbWU6ICdibGluaydcbiAgfV1cbn1cbmBgYFxuKi9cblxuLyoqXG4gKiBUaGUgYHRleHRgIGlzIGRpc3BsYXllZCBpbiB0aGUgc3RhdHVzIGJhci5cbiAqXG4gKiBUaGUgYGR1cmF0aW9uYCBpcyBzZXQgZHluYW1pY2FsbHksIGl0J3MgaGVyZSBqdXN0IGZvciByZWZlcmVuY2UuXG4gKlxuICogVGhlIGBleHBpcmF0aW9uc2AgdmFsdWVzIGF2YWlsYWJsZSBhcmUgZm9yIG5vdzpcbiAqICdibGluaywgY2xvc2UsIGh1cnJ5LCBmaW5hbCc7IHRvIGVhY2ggb2YgdGhlbSBjb3JyZXNwb25kXG4gKiBzb21lIHZhcmlhdGlvbnMgYW5kIGFuaW1hdGlvbiBhcHBsaWVkIHRocm91Z2ggY3NzLiBFYWNoIGV4cGlyYXRpb24gbXVzdFxuICogZGVjbGFyZSBhIGBwZXJjZW50YCBwcm9wZXJ0eSB0aGF0IGluZGljYXRlcyB0aGUgcGVyY2VudGFnZSBhdCB3aGljaCBwb2ludFxuICogaW4gdGltZSB0cmlnZ2VyIHRoZSBleHBpcmF0aW9uIGFuaW1hdGlvbiAob3Igd2hhdGV2ZXIpLFxuICogZS5nLiBhIGBwZXJjZW50YCB2YWx1ZSBvZiBgNTBgIHdvdWxkIHRyaWdnZXIgYXQgdGhlIDE0dGggc2Vjb25kIGZvciBhXG4gKiBzdGF0ZSB0aGF0IGxhc3RzIDI4c1xuICovXG5jb25zdCBkZWZhdWx0U3RhdGVzID0gW1xuICB7XG4gICAgaWQ6ICdlZW5tYWFsJyxcbiAgICBpZHg6IDAsXG4gICAgdGV4dDogZ2V0STE4bignZWVubWFhbCcpLFxuICAgIGR1cmF0aW9uOiBudWxsLFxuICAgIGV4cGlyYXRpb25zOiBbe1xuICAgICAgcGVyY2VudDogNzAsXG4gICAgICBuYW1lOiAnYmxpbmsnXG4gICAgfV1cbiAgfSwge1xuICAgIGlkOiAnYW5kZXJtYWFsJyxcbiAgICBpZHg6IDEsXG4gICAgdGV4dDogZ2V0STE4bignYW5kZXJtYWFsJyksXG4gICAgZHVyYXRpb246IG51bGwsXG4gICAgZXhwaXJhdGlvbnM6IFt7XG4gICAgICBwZXJjZW50OiA1MCxcbiAgICAgIG5hbWU6ICdodXJyeSdcbiAgICB9LCB7XG4gICAgICBwZXJjZW50OiA3MCxcbiAgICAgIG5hbWU6ICdibGluaydcbiAgICB9LCB7XG4gICAgICBwZXJjZW50OiA5MCxcbiAgICAgIG5hbWU6ICdmaW5hbCdcbiAgICB9XVxuICB9LCB7XG4gICAgaWQ6ICdnZWJvZGVuJyxcbiAgICBpZHg6IDIsXG4gICAgdGV4dDogZ2V0STE4bignZ2Vib2RlbicpLFxuICAgIGR1cmF0aW9uOiBudWxsLFxuICAgIGV4cGlyYXRpb25zOiBbe1xuICAgICAgcGVyY2VudDogNTAsXG4gICAgICBuYW1lOiAnaHVycnknXG4gICAgfSwge1xuICAgICAgcGVyY2VudDogNzAsXG4gICAgICBuYW1lOiAnYmxpbmsnXG4gICAgfSwge1xuICAgICAgcGVyY2VudDogOTAsXG4gICAgICBuYW1lOiAnZmluYWwnXG4gICAgfV1cbiAgfSwge1xuICAgIGlkOiAnZ2Vib2Rlbi10aW1lbGVzcycsXG4gICAgaWR4OiAzLFxuICAgIHRleHQ6IGdldEkxOG4oJ2dlYm9kZW4tdGltZWxlc3MnKSxcbiAgICBkdXJhdGlvbjogbnVsbFxuICB9LCB7XG4gICAgaWQ6ICd2ZXJrb2NodCcsXG4gICAgaWR4OiA0LFxuICAgIHRleHQ6IGdldEkxOG4oJ3ZlcmtvY2h0JyksXG4gICAgZHVyYXRpb246IG51bGxcbiAgfSwge1xuICAgIGlkOiAnYmllZGVuJyxcbiAgICBpZHg6IDUsXG4gICAgdGV4dDogZ2V0STE4bignYmllZGVuJyksXG4gICAgZHVyYXRpb246IG51bGwsXG4gICAgZXhwaXJhdGlvbnM6IFt7XG4gICAgICBwZXJjZW50OiA3MCxcbiAgICAgIG5hbWU6ICdibGluaydcbiAgICB9XVxuICB9LCB7XG4gICAgaWQ6ICd3aW5uZW4nLFxuICAgIGlkeDogNixcbiAgICB0ZXh0OiBnZXRJMThuKCd3aW5uZW4nKSxcbiAgICBkdXJhdGlvbjogbnVsbCxcbiAgICBleHBpcmF0aW9uczogW3tcbiAgICAgIHBlcmNlbnQ6IDUwLFxuICAgICAgbmFtZTogJ2h1cnJ5J1xuICAgIH0sIHtcbiAgICAgIHBlcmNlbnQ6IDcwLFxuICAgICAgbmFtZTogJ2JsaW5rJ1xuICAgIH1dXG4gIH0sIHtcbiAgICBpZDogJ2dlbGFkZW4nLFxuICAgIGlkeDogNyxcbiAgICB0ZXh0OiBnZXRJMThuKCdnZWxhZGVuJyksXG4gICAgZHVyYXRpb246IG51bGwsXG4gICAgZXhwaXJhdGlvbnM6IFt7XG4gICAgICBwZXJjZW50OiA3MCxcbiAgICAgIG5hbWU6ICdibGluaydcbiAgICB9XVxuICB9LCB7XG4gICAgaWQ6ICdnZXNsb3RlbicsXG4gICAgaWR4OiA4LFxuICAgIHRleHQ6IGdldEkxOG4oJ2dlc2xvdGVuJyksXG4gICAgZHVyYXRpb246IG51bGwsXG4gICAgZXhwaXJhdGlvbnM6IFt7XG4gICAgICBwZXJjZW50OiA3MCxcbiAgICAgIG5hbWU6ICdibGluaydcbiAgICB9XVxuICB9LCB7XG4gICAgaWQ6ICdjb250cm9sZXJlbicsXG4gICAgaWR4OiA5LFxuICAgIHRleHQ6IGdldEkxOG4oJ2NvbnRyb2xlcmVuJyksXG4gICAgZHVyYXRpb246IG51bGxcbiAgfSwge1xuICAgIGlkOiAndWl0dmVya29jaHQnLFxuICAgIGlkeDogMTAsXG4gICAgdGV4dDogZ2V0STE4bigndWl0dmVya29jaHQnKSxcbiAgICBkdXJhdGlvbjogbnVsbFxuICB9LFxuXTtcblxuLy8gZXhwb3J0IHRvIHB1YmxpYyBBUElcbmFwaVsnZGVmYXVsdFN0YXRlcyddID0gZGVmYXVsdFN0YXRlcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdFN0YXRlcztcbiIsImltcG9ydCBhcGkgZnJvbSAnLi9hcGknO1xuXG5jb25zdCBkZWZhdWx0Q29sb3JzID0ge1xuICAnZWVubWFhbCc6IFsnIzZEQkY1MicsICcjQkNENTNBJ10sXG4gICdhbmRlcm1hYWwnOiBbJyNFQzI4MkUnLCAnI0Y1ODYzOSddLFxuICAnZ2Vib2Rlbic6IFsnIzg3NTZBMycsICcjQkM5MUMwJ10sXG4gICdnZWJvZGVuLXRpbWVsZXNzJzogWycjNmI0NDgyJywgJyNhODcxYWQnXSxcbiAgJ3ZlcmtvY2h0JzogWycjQjJCMkIyJywgJyNFNkU3RTYnXSxcbiAgJ2JpZWRlbic6IFsnIzBCNzJCQScsICcjNEE5REQ2J10sXG4gICd3aW5uZW4nOiBbJyNhZDAwNWQnLCAnZGVlcHBpbmsnXSxcbiAgJ2dlbGFkZW4nOiBbJyNhMzhkOGQnLCAnI2UyYmFiNyddLFxuICAnZ2VzbG90ZW4nOiBbJyM5ZDhmOGYnLCAnI2Q3YmZiZCddLFxuICAnY29udHJvbGVyZW4nOiBbJyM5NzkwOTAnLCAnI2NlYzRjMSddXG59O1xuXG4vLyBleHBvcnQgdG8gcHVibGljIEFQSVxuYXBpWydkZWZhdWx0Q29sb3JzJ10gPSBkZWZhdWx0Q29sb3JzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0Q29sb3JzO1xuIiwiLyohXG4gKiBIZWF2aWx5IGluc3BpcmVkIGJ5XG4gKlxuICogU1ZHIFBpZSBUaW1lciAwLjkuMSB8IEFuZGVycyBHcmltc3J1ZCwgZ3JpbnQubm8gfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vYWdyaW1zcnVkL3N2Z1BpZVRpbWVyLmpzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN2Z1BpZVRpbWVyIHtcblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5fZWxlbWVudCA9IHByb3BzLmVsZW1lbnQ7XG4gICAgdGhpcy5fc2l6ZSA9IDQwO1xuICAgIHRoaXMuX3N0YXJ0RnJvbSA9IHByb3BzLnN0YXJ0RnJvbSA/IHByb3BzLnN0YXJ0RnJvbSAqIDEwMDA6IDA7IC8vIHN0YXJ0RnJvbSBpcyBnaXZlbiBpbiBzZWNvbmRzXG4gICAgdGhpcy5fZHVyYXRpb24gPSBwcm9wcy5kdXJhdGlvbiA/IHByb3BzLmR1cmF0aW9uICogMTAwMCA6IDEwMDA7IC8vIGR1cmF0aW9uIGlzIGdpdmVuIGluIHNlY29uZHNcbiAgICB0aGlzLl9hY3R1YWxEdXJhdGlvbiA9IHRoaXMuX2R1cmF0aW9uIC0gdGhpcy5fc3RhcnRGcm9tO1xuICAgIHZhciBuID0gcHJvcHMubG9vcHM7XG5cbiAgICBpZiAodGhpcy5yZXEpIHtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgIH1cblxuICAgIC8vIFRoaXMgcGFydCBtaWdodCBiZSBjb25mdXNpbmc6XG4gICAgLy8gSWYgbj09MCwgZG8gaW5maW5pdGUgbG9vcHNcbiAgICAvLyBJbiBvdGhlciBjYXNlcyB3aGVyZSBuIGlzIHNldCwgZG8gbiBsb29wc1xuICAgIC8vIElmIG4gaXMgbm90IHNldCwgZG8gMSBsb29wXG4gICAgLy8gRG8gaXQgdGhpcyB3YXkgdG8gcHJldmVudCBtaXhpbmcgbj09MCBhbmQgIW5cbiAgICBuID0gKG4gPT09IDApID8gMCA6IG4gPyBuIDogMTtcblxuICAgIHZhciBlbmQgPSBEYXRlLm5vdygpICsgdGhpcy5fYWN0dWFsRHVyYXRpb24gKiBuO1xuICAgIHZhciB0b3RhbGR1ciA9IHRoaXMuX2FjdHVhbER1cmF0aW9uICogbjtcblxuICAgIC8vIERhdGUubm93IGZpeCBieSBBcmkgRnVjaHMsIGFmdWNocy50dW1ibHIuY29tL3Bvc3QvMjM1NTAxMjQ3NzQvZGF0ZS1ub3ctaW4taWU4XG4gICAgRGF0ZS5ub3cgPSBEYXRlLm5vdyB8fCBmdW5jdGlvbigpIHsgcmV0dXJuICtuZXcgRGF0ZSgpOyB9O1xuXG4gICAgLy8gQW5pbWF0ZSBmcmFtZSBieSBmcmFtZVxuICAgIChmdW5jdGlvbiBmcmFtZSgpIHtcbiAgICAgIHZhciBjdXJyZW50ID0gRGF0ZS5ub3coKTtcbiAgICAgIHZhciByZW1haW5pbmcgPSBlbmQgLSBjdXJyZW50O1xuXG4gICAgICAvLyBOb3cgc2V0IHJvdGF0aW9uIHJhdGVcbiAgICAgIC8vIEUuZy4gNTAlIG9mIGZpcnN0IGxvb3AgcmV0dXJucyAxLjVcbiAgICAgIC8vIEUuZy4gNzUlIG9mIHNpeHRoIGxvb3AgcmV0dXJucyA2Ljc1XG4gICAgICAvLyBIYXMgdG8gcmV0dXJuID4wIGZvciBTVkcgdG8gYmUgZHJhd24gY29ycmVjdGx5XG4gICAgICAvLyBJZiB5b3UgbmVlZCB0aGUgY3VycmVudCBsb29wLCB1c2UgTWF0aC5mbG9vcihyYXRlKVxuICAgICAgdmFyIHJhdGUgPSBuICsgMSAtIHJlbWFpbmluZyAvIHNlbGYuX2R1cmF0aW9uO1xuICAgICAgLy8gdG90YWwgcmF0ZSBmb3IgYSBmdWxsIGN5Y2xlIGlzIDAgdG8gMlxuICAgICAgcmF0ZSA9IHJhdGU7Ly8gKyAoKHNlbGYuX3N0YXJ0RnJvbSAqIDIpIC8gc2VsZi5fZHVyYXRpb24pO1xuXG4gICAgICAvLyBBcyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgd2lsbCBkcmF3IHdoZW5ldmVyIGNhcGFibGUsXG4gICAgICAvLyB0aGUgYW5pbWF0aW9uIG1pZ2h0IGVuZCBiZWZvcmUgaXQgcmVhY2hlcyAxMDAlLlxuICAgICAgLy8gTGV0J3Mgc2ltdWxhdGUgY29tcGxldGVuZXNzIG9uIHRoZSBsYXN0IHZpc3VhbFxuICAgICAgLy8gZnJhbWUgb2YgdGhlIGxvb3AsIHJlZ2FyZGxlc3Mgb2YgYWN0dWFsIHByb2dyZXNzXG4gICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50KVxuICAgICAgaWYgKHJlbWFpbmluZyA8IDYwKSB7XG4gICAgICAgIC8vIDEuMCBtaWdodCBicmVhaywgc2V0IHRvIHNsaWdodGx5IGxvd2VyIHRoYW4gMVxuICAgICAgICAvLyBVcGRhdGU6IFNldCB0byBzbGlnaHRseSBsb3dlciB0aGFuIG4gaW5zdGVhZFxuICAgICAgICBzZWxmLl9kcmF3KG4gLSAwLjAwMDEpO1xuICAgICAgICAvLyBTdG9wIGFuaW1hdGluZyB3aGVuIHdlIHJlYWNoIG4gbG9vcHMgKGlmIG4gaXMgc2V0KVxuICAgICAgICBpZihyZW1haW5pbmcgPCB0b3RhbGR1ciAmJiBuKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBUbyByZXZlcnNlLCB1bmNvbW1lbnQgdGhpcyBsaW5lXG4gICAgICAvLyByYXRlID0gMzYwIC0gcmF0ZTtcblxuICAgICAgLy8gZHJhd1xuICAgICAgc2VsZi5fZHJhdyhyYXRlKTtcbiAgICAgIC8vIHJlcXVlc3QgbmV4dCBmcmFtZVxuICAgICAgc2VsZi5yZXEgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnJhbWUpO1xuICAgIH0oKSk7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyBTVkcgcGF0aFxuICAgKlxuICAgKiB4IG9uIHRoZSByaWdodCBzaWRlIGlzIHBvc2l0aXZlLCB5IG9uIHRoZSBib3R0b20gc2lkZSBpcyBwb3NpdGl2ZSxcbiAgICogb24gdGhlIG90aGVyIHNpZGVzIHRoZXkgYXJlIG5lZ2F0aXZlXG4gICAqIEBwYXJhbSAge051bWJlcn0gcmF0ZVxuICAgKi9cbiAgX2RyYXcgKHJhdGUpIHtcbiAgICBsZXQgYW5nbGUgPSAzNjAgKiByYXRlO1xuICAgIGFuZ2xlICU9IDM2MDtcbiAgICAvLyBpZiAoYW5nbGUgPj0gMzU5LjkpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGFuZ2xlKVxuICAgIC8vIH1cblxuICAgIGxldCByYWQgPSAoYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICBsZXQgbWlkID0gKGFuZ2xlID4gMTgwKSA/IDEgOiAwO1xuICAgIGxldCB4ID0gTWF0aC5zaW4ocmFkKSAqIHRoaXMuX3NpemU7XG4gICAgbGV0IHkgPSBNYXRoLmNvcyhyYWQpICogLXRoaXMuX3NpemU7XG4gICAgbGV0IHNoYXBlID0gYE0gMCAwIHYgLSR7dGhpcy5fc2l6ZX0gQSAke3RoaXMuX3NpemV9ICR7dGhpcy5fc2l6ZX0gMSAke21pZH0gMSAke3h9ICR7eX0gemA7XG5cbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnZCcsIHNoYXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIHRoZSBhbmltYXRpb24gY2FuY2VsIHRoZSByZXF1ZXN0IGFuaW1hdGlvbiBmcmFtZVxuICAgKi9cbiAgc3RvcCAoKSB7XG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuX3JlcSk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgYW5pbWF0aW9uXG4gICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5zdG9wKCk7XG4gIH1cbn1cbiIsImltcG9ydCBhcGkgZnJvbSAnLi9hcGknO1xuaW1wb3J0IGRlZmF1bHRTdGF0ZXMgZnJvbSAnLi9zdGF0ZXMuZGVmYXVsdHMnO1xuaW1wb3J0IGRlZmF1bHRDb2xvcnMgZnJvbSAnLi9jb2xvcnMuZGVmYXVsdHMnO1xuaW1wb3J0IFN2Z1BpZVRpbWVyIGZyb20gJy4vc3ZnUGllVGltZXInO1xuXG4vLyBFeGFtcGxlIHVzZSBvZiB0aGUgQVBJXG4vLyAoZnVuY3Rpb24gKHdpbmRvdywgZG9jdW1lbnQsICQsIGFwaSkge1xuLy8gICB2YXIgbXlET01vckpxdWVyeSA9ICQoJy5oc0l0ZW0nKVswXTtcblxuLy8gICB2YXIgbXlJdGVtID0gbmV3IGFwaS5JdGVtKHtcbi8vICAgICBpZDogMTAsXG4vLyAgICAgZWxlbTogbXlET01vckpxdWVyeSxcbi8vICAgICAvLyBzdGF0ZTogMyxcbi8vICAgICBvblN0YXRlOiBmdW5jdGlvbiAoaXRlbSkge1xuLy8gICAgICAgY29uc29sZS5sb2coJ29uU3RhdGUgJyArIGl0ZW0uc3RhdGUuaWQsIGl0ZW0pO1xuLy8gICAgIH0sXG4vLyAgICAgb25FbmQ6IGZ1bmN0aW9uIChpdGVtKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZygnQXVjdGlvbiBlbmRzISBvbkVuZCcsIGl0ZW0pO1xuLy8gICAgIH0sXG4vLyAgICAgb25CaWQ6IGZ1bmN0aW9uIChpdGVtKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZygnQmlkISBvbiBpdGVtJywgaXRlbSk7XG4vLyAgICAgfVxuLy8gICB9KTtcbi8vICAgbXlJdGVtLnNldFN0YXRlKDAsIDE1KTtcbi8vICAgLy8gbXlJdGVtLmRlc3Ryb3koKTtcbi8vIH0pKHdpbmRvdywgZG9jdW1lbnQsIGpRdWVyeSwgd2luZG93LmhlbGxvc3BlY2lhbCk7XG5cbi8vIChmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCBhcGkpIHtcbi8vICAgLy8gY2FsbGluZyB0aGUgY29udHJ1Y3RvciBvciB0aGUgc2V0U3RhdGUgbWV0aG9kIHJldHVybiB0aGUgaXRlbSBpbnN0YW5jZVxuLy8gICB2YXIgbXlJdGVtID0gbmV3IGhlbGxvc3BlY2lhbC5JdGVtKHtcbi8vICAgICBpZDogMTIsXG4vLyAgICAgZWxlbTogJCgnLmhzSXRlbScpWzBdIC8vIHRoZSBpdGVtIGVsZW1lbnQgaW4gdGhlIGNhdGVnb3J5IHBhZ2Vcbi8vICAgfSkuc2V0U3RhdGUoJ2dlYm9kZW4nLCAxMSk7XG4vLyAgIC8vIGdyYWIgdGhlIHN0YXRlIGluIGEgdmFyaWFibGUgdG8gdXNlIGNsb3N1cmVcbi8vICAgdmFyIG15U3RhdGUgPSBteUl0ZW0uc3RhdGU7XG5cbi8vICAgLy8gZmFrZSBhc3luYyBsb2FkaW5nIG9mIGFqYXggY29udGVudFxuLy8gICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbi8vICAgICB2YXIgbXlJdGVtUG9wdXAgPSBuZXcgaGVsbG9zcGVjaWFsLkl0ZW0oe1xuLy8gICAgICAgaWQ6IDEyLFxuLy8gICAgICAgZWxlbTogJCgnLmhzSXRlbScpWzFdIC8vIHRoZSBpdGVtIGVsZW1lbnQgaW4gdGhlIHBvcHVwXG4vLyAgICAgfSk7XG4vLyAgICAgbXlJdGVtUG9wdXAucmVzdW1lU3RhdGUobXlTdGF0ZSk7XG4vLyAgIH0sIDMwMDApO1xuXG4vLyAgIC8vIGZha2UgYXN5bmMgc29tZXRoaW5nIGVsZXNlXG4vLyAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuLy8gICAgIHZhciBteUFzeW5jSXRlbSA9IG5ldyBoZWxsb3NwZWNpYWwuSXRlbSh7XG4vLyAgICAgICBpZDogMTIsXG4vLyAgICAgICBlbGVtOiAkKCcuaHNJdGVtJylbMl0gLy8gYW5vdGhlciBpdGVtIGVsZW1lbnRcbi8vICAgICB9KTtcbi8vICAgICBteUFzeW5jSXRlbS5yZXN1bWVTdGF0ZShteVN0YXRlKTtcbi8vICAgfSwgNTAwMCk7XG4vLyB9KSh3aW5kb3csIGRvY3VtZW50LCBqUXVlcnksIHdpbmRvd1snaGVsbG9zcGVjaWFsJ10pO1xuXG4vKipcbiAqIFRoZSBJdGVtIGNsYXNzIGRlZmF1bHQgb3B0aW9uc1xuICogQHR5cGUge09iamVjdH1cbiAqL1xuY29uc3QgZGVmYXVsdE9wdHMgPSB7XG4gIC8qKiBAdHlwZSB7QXJyYXl9IERlZmF1bHQgc3RhdGVzICovXG4gIHN0YXRlczogZGVmYXVsdFN0YXRlcyxcbiAgLyoqIEB0eXBlIHtzdHJpbmd9IGF0dHJpYnV0ZSBuYW1lICovXG4gIGF0dHJTdGF0ZTogJ2RhdGEtc3RhdGUnLFxuICAvKiogQHR5cGUge3N0cmluZ30gYXR0cmlidXRlIG5hbWUgKi9cbiAgYXR0ckV4cGlyYXRpb246ICdkYXRhLWV4cGlyYXRpb24nLFxuICAvKiogQHR5cGUge2Z1bmN0aW9uKEl0ZW0pfSBDYWxsYmFjayBhdCB0aGUgZW5kIG9mIGVhY2ggc3RhdGUgKi9cbiAgb25TdGF0ZTogZnVuY3Rpb24gKCkge30sXG4gIC8qKiBAdHlwZSB7ZnVuY3Rpb24oSXRlbSwgTnVtYmVyKX0gQ2FsbGJhY2sgZWFjaCBzZWNvbmQgb2YgYSBzdGF0ZSBwcm9ncmVzc2lvbiAqL1xuICAvLyBvblNlY29uZDogZnVuY3Rpb24gKCkge30sXG4gIC8qKiBAdHlwZSB7ZnVuY3Rpb24oSXRlbSl9IENhbGxiYWNrIGF0IHRoZSBlbmQgb2YgdGhlIGxhc3Qgc3RhdGUgKi9cbiAgb25FbmQ6IGZ1bmN0aW9uICgpIHt9LFxuICAvKiogQHR5cGUge2Z1bmN0aW9uKEl0ZW0pfSBDYWxsYmFjayBhdCBiaWQgY2xpY2sgKi9cbiAgb25CaWQ6IGZ1bmN0aW9uICgpIHt9LFxufVxuXG4vKipcbiAqIFRoZSBJdGVtIGNsYXNzIG5lZWRzIHRvIGJlIGluaXRpYWxpemVkIG9uIGRvY3VtZW50IHJlYWR5IHdpdGggYW4gaWQgYW5kIGFcbiAqIGNvbnRhaW5lciBlbGVtZW50XG4gKi9cbmNsYXNzIEl0ZW0ge1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0gIHtPYmplY3R9IG9wdHMgQ29udGFpbnMgcHJvcGVydGllczpcbiAgICogICAgICAgICAgICAgICAgICAgICAgICdpZCc6IHtzdHJpbmd9LFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgJ2VsZW0nOiB7SFRNTGVsZW1lbnR9LFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgJ3N0YXRlJzogez9OdW1iZXJ9XG4gICAqIEByZXR1cm4ge0l0ZW19ICAgICAgICBUaGUgaXRlbSBpbnN0YW5jZVxuICAgKi9cbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBpZiAodHlwZW9mIG9wdHMuaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgZWxlbWAgcHJvcGVydHkgaXMgcmVxdWlyZWQgd2hlbiBpbnN0YW50aWF0ZSBhIG5ldyBJdGVtJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0cy5pZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2BpZGAgcHJvcGVydHkgaXMgcmVxdWlyZWQgd2hlbiBpbnN0YW50aWF0ZSBhIG5ldyBJdGVtJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyoqIEB0eXBlIHtPYmplY3R9IEl0ZW0gZ2l2ZW4gb3B0cyAqL1xuICAgIHRoaXMub3B0cyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0T3B0cywgb3B0cyk7XG5cbiAgICAvKiogQHR5cGUge0hUTUxlbGVtZW50fSBCYXNpYyBET00gY29udGFpbmVyIGZvciB0aGUgaXRlbSAqL1xuICAgIHRoaXMuY29udGFpbmVyID0gb3B0cy5lbGVtLmpxdWVyeSA/IG9wdHMuZWxlbVswXSA6IG9wdHMuZWxlbTtcblxuICAgIC8qKiBAdHlwZSB7alF1ZXJ5fSBCYXNpYyBET00gY29udGFpbmVyIGZvciB0aGUgaXRlbSAoalF1ZXJ5IHdyYXApICovXG4gICAgdGhpcy4kY29udGFpbmVyID0gb3B0cy5lbGVtLmpxdWVyeSA/IG9wdHMuZWxlbSA6ICQob3B0cy5lbGVtKTtcblxuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSBJdGVtIGlkICovXG4gICAgdGhpcy5pZCA9IG9wdHMuaWQgfHwgdGhpcy5jb250YWluZXIuaWQ7XG5cbiAgICAvKiogQHR5cGUge0FycmF5fSBDb250YWlucyB0aGUgcG9zc2libGUgc3RhdGVzIGZvciB0aGUgaXRlbSwgYXMgYW4gYXJyYXkgKi9cbiAgICB0aGlzLnN0YXRlcyA9IHRoaXMub3B0cy5zdGF0ZXM7XG5cbiAgICAvKiogQHR5cGUge09iamVjdH0gQ29udGFpbnMgdGhlIHBvc3NpYmxlIHN0YXRlcyBmb3IgdGhlIGl0ZW0sIGFzIGFuIG9iamVjdCAoaW5kZXhlZCBieSBpZCkgKi9cbiAgICB0aGlzLnN0YXRlc01hcCA9IHRoaXMuX2dldE9iakZyb21BcnJheSh0aGlzLm9wdHMuc3RhdGVzLCAnaWQnKTtcblxuICAgIC8qKiBAdHlwZSB7ZnVuY3Rpb24oKX0gSG9sZHMgdGhlIGludGVydmFsbGVkIHJlZmVyZW5jZSBmb3Igb25lIGN5Y2xlICovXG4gICAgdGhpcy5fY3ljbGUgPSBudWxsO1xuXG4gICAgLyoqIEB0eXBlIHtOdW1iZXJ9IElEIG9mIG9uZSBvZiB0aGUgZm91ciBzdGF0ZXMgKi9cbiAgICB0aGlzLl9pbml0aWFsU3RhdGVJZCA9IG9wdHMuc3RhdGUgfHwgdGhpcy5jb250YWluZXIuZ2V0QXR0cmlidXRlKHRoaXMub3B0cy5hdHRyU3RhdGUpO1xuXG4gICAgLyoqIEB0eXBlIHtBcnJheTxTdmdQaWVUaW1lcj59IE9uZSBhbmltYXRpb24gcGVyIHN2ZyBlbGVtZW50ICovXG4gICAgdGhpcy5fYW5pbWF0aW9ucyA9IFtdO1xuXG4gICAgLy8gc2V0IERPTSByZWxhdGVkIHN0dWZmXG4gICAgdGhpcy5fYmluZFVJKCk7XG5cbiAgICAvLyBpZiAodGhpcy5faW5pdGlhbFN0YXRlSWQpIHtcbiAgICAvLyAgIHRoaXMuc2V0U3RhdGUodGhpcy5faW5pdGlhbFN0YXRlSWQpO1xuICAgIC8vIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKCdJdGVtLT5jb25zdHJ1Y3RvcigpJywgdGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0XG4gICAqL1xuICBfYmluZFVJICgpIHtcblxuICAgIC8qKiBAdHlwZSB7alF1ZXJ5fSBUaGUgJ0JpZWQnIGJ1dHRvbnMgKi9cbiAgICB0aGlzLl9fJGJpZCA9IHRoaXMuJGNvbnRhaW5lci5maW5kKCdbZGF0YS1iaWRdJyk7XG5cbiAgICAvKiogQHR5cGUge2pRdWVyeX0gKi9cbiAgICB0aGlzLl9fJHByaWNlID0gdGhpcy4kY29udGFpbmVyLmZpbmQoJ1tkYXRhLXByaWNlXScpO1xuXG4gICAgLyoqIEB0eXBlIHtqUXVlcnl9ICovXG4gICAgdGhpcy5fXyRiaWRkZXIgPSB0aGlzLiRjb250YWluZXIuZmluZCgnW2RhdGEtYmlkZGVyXScpO1xuXG4gICAgLyoqIEB0eXBlIHtBcnJheTxIVE1MZWxlbWVudD59ICovXG4gICAgdGhpcy5fX3N0YXRlU3ZncyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXN0YXRlLXN2Z10nKTtcblxuICAgIC8qKiBAdHlwZSB7QXJyYXk8SFRNTGVsZW1lbnQ+fSAqL1xuICAgIHRoaXMuX19zdGF0ZU1zZ3MgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zdGF0ZS1tc2ddJyk7XG5cbiAgICAvKiogQHR5cGUge0FycmF5PEhUTUxlbGVtZW50Pn0gKi9cbiAgICB0aGlzLl9fc3RvcHMxID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnN0b3AxJyk7XG5cbiAgICAvKiogQHR5cGUge0FycmF5PEhUTUxlbGVtZW50Pn0gKi9cbiAgICB0aGlzLl9fc3RvcHMyID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnN0b3AyJyk7XG5cbiAgICAvLyBiaW5kIGNsaWNrIGJ1dHRvblxuICAgIHRoaXMuX18kYmlkLm9uKCdjbGljaycsIHRoaXMub25CaWQuYmluZCh0aGlzKSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIG5ldyBzdGF0ZVxuICAgKiBAcGFyYW0ge1N0YXRlfSBzdGF0ZU9iamVjdFxuICAgKi9cbiAgYWRkU3RhdGUgKHN0YXRlT2JqZWN0KSB7XG4gICAgbGV0IHN0YXRlSWQgPSBzdGF0ZU9iamVjdC5pZDtcbiAgICB0aGlzLnN0YXRlc01hcFtzdGF0ZUlkXSA9IHN0YXRlT2JqZWN0O1xuXG4gICAgLy8gaGVyZSB3ZSBjb3VsZCBvciBzaG91bGQgb3IgcHVzaCB0aGUgbmV3IHN0YXRlXG4gICAgLy8gYXQgdGhlIHNwZWNpZmllZCBpbmRleCBpbiB0aGUgYXJyYXkgYnV0IEkgZG9uJ3QgcmVhbGx5XG4gICAgLy8gc2VlIHRoZSBwb2ludCBvZiB0aGlzIGF0IHRoaXMgc3RhZ2UuIFdlIHVzZSBzdGF0ZSBpZHNcbiAgICAvLyBub3cgYW55d2F5IHRvIGNoYW5nZSB0aGUgaXRlbSBzdHlsZSB0aHJvdWdoIGNzc1xuICAgIHRoaXMuc3RhdGVzLnB1c2goc3RhdGVPYmplY3QpO1xuXG4gICAgcmV0dXJuIHN0YXRlT2JqZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBzdGF0ZSB1cGRhdGluZyBVSSBhbmQgcnVubmluZyB0aGUgYW5pbWF0aW9uXG4gICAqXG4gICAqIEl0IGp1c3QgdXBkYXRlcyB0aGUgc3RhdGUgYW5pbWF0aW9uL2NvbG9yIGFuZCB0ZXh0IG1zZyxcbiAgICogZS5nLiAnYmlkZGluZywgZ29pbmcgb25jZSwgZ29pbmcgdHdpY2UsIHNvbGQnLCBpdCBhbHNvIGFkZHMgYW4gYXR0clxuICAgKiBvbiB0aGUgaXRlbSBjb250YWluZXIgc28gdGhhdCB3ZSBjYW4gdHdlYWsgdGhlIHN0eWxlIG9mIGl0ZW1cbiAgICogZGlmZmVyZW50bHkgZm9yIGVhY2ggc3RhdGUuXG4gICAqXG4gICAqIEBwYXJhbSB7P051bWJlcnxTdHJpbmd8U3RhdGV9IGdpdmVuU3RhdGUgVGhlIHN0YXRlIGluZGV4IGAwLDEsMiwzYCxcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvciBpZCAoZS5nLiAndmVya29jaHQnKSBvclxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBjdXN0b20gb2JqZWN0IChzZWUgdGhlXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuZGVmYXVsdHMuanMgdG8gc2VlIHRoZVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuYXRvbXkgb2YgYSBzdGF0ZSBvYmplY3QpXG4gICAqIEBwYXJhbSB7P051bWJlcn0gICAgICAgICAgICAgICBkdXJhdGlvbiAgVGhlIGR1cmF0aW9uIGluIHNlY29uZHNcbiAgICogQHBhcmFtIHs/TnVtYmVyfSAgICAgICAgICAgICAgIHN0YXJ0RnJvbSBUaGUgcmVzdW1pbmcgcG9pbnQgaW4gc2Vjb25kc1xuICAgKiBAcmV0dXJuIHtJdGVtfSAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBpdGVtIGluc3RhbmNlXG4gICAqL1xuICBzZXRTdGF0ZSAoZ2l2ZW5TdGF0ZSwgZHVyYXRpb24sIHN0YXJ0RnJvbSkge1xuICAgIC8vIHNldCBjdXJyZW50IHN0YXRlXG4gICAgaWYgKCQuaXNQbGFpbk9iamVjdChnaXZlblN0YXRlKSkge1xuICAgICAgLy8gaWYgd2UgYXJlIHJlc3VtaW5nIGp1c3QgYXNzaWduIHRoZSBnaXZlbiBzdGF0ZVxuICAgICAgaWYgKChnaXZlblN0YXRlLnNlY29uZCAmJiBnaXZlblN0YXRlLnNlY29uZCA+IDApIHx8IHN0YXJ0RnJvbSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gZ2l2ZW5TdGF0ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGVpdGhlciBieSB1c2luZyB0aGUgZ2l2ZW4gb2JqZWN0XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmFkZFN0YXRlKGdpdmVuU3RhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnN0YXRlc1tnaXZlblN0YXRlXSkge1xuICAgICAgLy8gb3IgYnkgZ3JhYmJpbmcgdGhlIHN0YXRlIHdpdGggaXRzIGlkeCB2YWx1ZVxuICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuc3RhdGVzW2dpdmVuU3RhdGVdO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnN0YXRlc01hcFtnaXZlblN0YXRlXSkge1xuICAgICAgLy8gb3IgYnkgZ3JhYmJpbmcgdGhlIHN0YXRlIHdpdGggaXRzIGlkeCB2YWx1ZVxuICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuc3RhdGVzTWFwW2dpdmVuU3RhdGVdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIG9yIGJ5IGdyYWJiaW5nIHRoZSBzdGF0ZSB3aXRoIHRoZSBpbml0aWFsIHN0YXRlIGlkIHZhbHVlXG4gICAgICB0aGlzLnN0YXRlID0gdGhpcy5zdGF0ZXNNYXBbdGhpcy5faW5pdGlhbFN0YXRlSWRdO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuc3RhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gc2V0IGN1cnJlbnQgc3RhdGUgc2Vjb25kXG4gICAgdGhpcy5zdGF0ZS5zZWNvbmQgPSBzdGFydEZyb20gfHwgMDtcblxuICAgIC8vIHNldCBjdXJyZW50IHN0YXRlIGR1cmF0aW9uXG4gICAgaWYgKGR1cmF0aW9uKSB7XG4gICAgICB0aGlzLnN0YXRlLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgfVxuICAgIC8vIHNldCBjeWNsZSBkdXJhdGlvblxuICAgIHRoaXMuX2N5Y2xlRHVyYXRpb24gPSB0aGlzLnN0YXRlLmR1cmF0aW9uIC0gdGhpcy5zdGF0ZS5zZWNvbmQ7XG5cbiAgICAvLyBkaXNwbGF5IHN0YXRlIG1lc3NhZ2VcbiAgICBpZiAodGhpcy5fX3N0YXRlTXNncyAmJiB0aGlzLl9fc3RhdGVNc2dzLmxlbmd0aCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9fc3RhdGVNc2dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuX19zdGF0ZU1zZ3NbaV0udGV4dENvbnRlbnQgPSB0aGlzLnN0YXRlLnRleHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZGlzcGxheSBzdGF0ZSBzdHlsZSB0aHJvdWdoIGNzc1xuICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSh0aGlzLm9wdHMuYXR0clN0YXRlLCB0aGlzLnN0YXRlLmlkKTtcblxuICAgIGxldCBwYWxldHRlID0gZGVmYXVsdENvbG9yc1t0aGlzLnN0YXRlLmlkXTtcbiAgICBpZiAocGFsZXR0ZSkge1xuICAgICAgaWYgKHRoaXMuX19zdG9wczEgJiYgdGhpcy5fX3N0b3BzMS5sZW5ndGgpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLl9fc3RvcHMxLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgdGhpcy5fX3N0b3BzMVtqXS5zZXRBdHRyaWJ1dGUoJ3N0b3AtY29sb3InLCBwYWxldHRlWzBdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX19zdG9wczIgJiYgdGhpcy5fX3N0b3BzMi5sZW5ndGgpIHtcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCB0aGlzLl9fc3RvcHMyLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgdGhpcy5fX3N0b3BzMltrXS5zZXRBdHRyaWJ1dGUoJ3N0b3AtY29sb3InLCBwYWxldHRlWzFdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIC4uLiBhbmQgZmlyZXMgdGhlIGFuaW1hdGlvblxuICAgIHRoaXMuX3J1bkFuaW1hdGlvbigpO1xuICAgIC8vIHN0YXJ0IHRoZSB0aW1lci4uLlxuICAgIHRoaXMuX3N0YXJ0Q3ljbGUoKTtcblxuICAgIC8vIGNhbGxiYWNrXG4gICAgdGhpcy5vcHRzLm9uU3RhdGUodGhpcyk7XG4gICAgLy8gY2FsbGJhY2sgb24gbGFzdCBzdGF0ZSAoJ3ZlcmtvY2h0JylcbiAgICBpZiAodGhpcy5zdGF0ZS5pZCA9PT0gJ3ZlcmtvY2h0JyB8fCB0aGlzLnN0YXRlLmlzTGFzdCkge1xuICAgICAgdGhpcy5vcHRzLm9uRW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc3VtZSBzdGF0ZVxuICAgKiBAcGFyYW0gIHtTdGF0ZX0gc3RhdGUgVGhlIHN0YXRlIG9iamVjdFxuICAgKiBAcmV0dXJuIHtJdGVtfSAgICAgICAgVGhlIGl0ZW0gaW5zdGFuY2VcbiAgICovXG4gIHJlc3VtZVN0YXRlIChzdGF0ZSkge1xuICAgIC8vIGNyZWF0ZSBhIG5ldyBzdGF0ZSBvYmplY3QgdG8gZG9uJ3QgaW50ZXJmZXJlIHdpdGggb3RoZXIgaXRlbXNcbiAgICAvLyBzdGF0ZXNcbiAgICBsZXQgbmV3U3RhdGUgPSAkLmV4dGVuZCh7fSwgc3RhdGUpO1xuICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUsIG51bGwsIHN0YXRlLnNlY29uZCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGRhdGFcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIERhdGEgZnJvbSBzZXJ2ZXIgdGhhdCBuZWVkIHRvIHVwZGF0ZSB0aGUgVUlcbiAgICovXG4gIHNldERhdGEgKGRhdGEpIHtcbiAgICBpZiAoZGF0YVsnY3VycmVudF9wcmljZSddKSB7XG4gICAgICB0aGlzLl9fJHByaWNlLnRleHQoZGF0YVsnY3VycmVudF9wcmljZSddKTtcbiAgICB9XG4gICAgaWYgKGRhdGFbJ2hpZ2hlc3RfYmlkZGVyJ10pIHtcbiAgICAgIHRoaXMuX18kYmlkZGVyLnRleHQoZGF0YVsnaGlnaGVzdF9iaWRkZXInXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVzZXIgaGFzIGNsaWNrZWQgYmlkXG4gICAqL1xuICBvbkJpZCAoKSB7XG4gICAgdGhpcy5vcHRzLm9uQmlkKHRoaXMuaXRlbSk7XG4gICAgLy8gY29uc29sZS5sb2coJ2JpZCEgbmV3U2Vjb25kczonLCBuZXdTZWNvbmRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IGl0ZW0gaW5zdGFuY2VcbiAgICovXG4gIGRlc3Ryb3kgKCkge1xuICAgIGlmICh0aGlzLl9hbmltYXRpb25zICYmIHRoaXMuX2FuaW1hdGlvbnMubGVuZ3RoKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2FuaW1hdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uc1tpXS5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2NsZWFyQ3ljbGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCBzaW5nbGUgY3ljbGUgdGltZXJcbiAgICovXG4gIF9jbGVhckN5Y2xlICgpIHtcbiAgICBpZiAodGhpcy5fY3ljbGUpIHtcbiAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuX2N5Y2xlKTtcbiAgICAgIHRoaXMuX2N5Y2xlID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgc2luZ2xlIGN5Y2xlIHRpbWVyXG4gICAqL1xuICBfc3RhcnRDeWNsZSAoKSB7XG4gICAgdGhpcy5fY2xlYXJDeWNsZSgpO1xuICAgIHRoaXMuX2N5Y2xlID0gd2luZG93LnNldEludGVydmFsKHRoaXMuX29uQ3ljbGVUaWNrLmJpbmQodGhpcyksIDEwMDApO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIHNlY29uZCB0aWNrLCBpdCBydW5zIGV2ZXJ5IHNlY29uZCB1c2luZyBgc2V0SW50ZXJ2YWxgLCBpdFxuICAgKiBjb29yZGluYXRlcyB0aGUgYW5pbWF0aW9uIHN0YXRlcy5cbiAgICovXG4gIF9vbkN5Y2xlVGljayAoKSB7XG4gICAgLy8gbWF5YmUgdHJpZ2dlciBleHBpcmF0aW9uIGJlaGF2aW91clxuICAgIHRoaXMuX21heWJlVHJpZ2dlckV4cGlyYXRpb24oKTtcblxuICAgIC8vIGluY3JlbWVudCBzZWNvbmRcbiAgICB0aGlzLnN0YXRlLnNlY29uZCsrO1xuXG4gICAgLy8gYXBpIGNhbGxiYWNrXG4gICAgLy8gdGhpcy5vcHRzLm9uU2Vjb25kKHRoaXMuc3RhdGUuc2Vjb25kLCB0aGlzLnN0YXRlLCB0aGlzKTtcblxuICAgIGlmICh0aGlzLnN0YXRlLnNlY29uZCA+PSB0aGlzLnN0YXRlLmR1cmF0aW9uKSB7XG4gICAgICB0aGlzLl9jbGVhckN5Y2xlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBleHBpcmF0aW9uIGF0dHJpYnV0ZSB0byB0cmlnZ2VyIGZ1cnRoZXIgYW5pbWF0aW9ucyB0aHJvdWdoIGNzc1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gVGhlIGV4cGlyYXRpb24gbmFtZSB0byBzZXQgb24gdGhlIGF0dHJpYnV0ZVxuICAgKi9cbiAgX3VwZGF0ZVVpRXhwaXJhdGlvbiAobmFtZSkge1xuICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSh0aGlzLm9wdHMuYXR0ckV4cGlyYXRpb24sIG5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIExvb3AgdGhyb3VnaCB0aGUgZXhwaXJhdGlvbiBicmVha3BvaW50cyBvZiB0aGUgZ2l2ZW4gc3RhdGVcbiAgICogYW5kIGNoZWNrIGlmIHRoZSBjdXJyZW50IHNlY29uZCBoYXMgcGFzdCB0aGUgZXhwaXJhdGlvbiBicmVha3BvaW50XG4gICAqICh3aGljaCBpcyBkZWZpbmVkIGluIHBlcmNlbnRhZ2UgYmVjYXVzZSB0aGUgc3RhdGUgZHVyYXRpb24gaXMgZHluYW1pYyxcbiAgICogc28gd2UgbmVlZCB0byBjYWxjdWxhdGUgdGhlIGJyZWFrcG9pbnQgaW4gc2Vjb25kcykuXG4gICAqL1xuICBfbWF5YmVUcmlnZ2VyRXhwaXJhdGlvbiAoKSB7XG4gICAgbGV0IGV4cGlyYXRpb25zID0gdGhpcy5zdGF0ZS5leHBpcmF0aW9ucztcbiAgICBpZiAoIWV4cGlyYXRpb25zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZXhwaXJhdGlvbnMgYXJyYXkgbXVzdCBiZSBzZXQgaW4gb3JkZXIgZnJvbSBsb3dlciB0byBoaWdoZXIgcGVyY2VudGFnZVxuICAgIGZvciAobGV0IGkgPSBleHBpcmF0aW9ucy5sZW5ndGg7IGktLTspIHtcbiAgICAgIGxldCBleHBpcmF0aW9uID0gZXhwaXJhdGlvbnNbaV07XG4gICAgICBsZXQgc2Vjb25kQnJlYWtwb2ludCA9ICh0aGlzLnN0YXRlLmR1cmF0aW9uIC8gMTAwKSAqIGV4cGlyYXRpb24ucGVyY2VudDtcblxuICAgICAgaWYgKHRoaXMuc3RhdGUuc2Vjb25kID4gc2Vjb25kQnJlYWtwb2ludCkge1xuICAgICAgICB0aGlzLl91cGRhdGVVaUV4cGlyYXRpb24oZXhwaXJhdGlvbi5uYW1lKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBvdGhlcndpc2UgcmVzZXQgdGhlIGV4cGlyYXRpb24gYXR0cmlidXRlXG4gICAgdGhpcy5fdXBkYXRlVWlFeHBpcmF0aW9uKCcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdCBtYWtlcyBvbmUgZnVsbCBsb29wIHdpdGggdGhlIGdpdmVuIGR1cmF0aW9uIG9yIGJ5IHJlYWRpbmcgdGhlIGN1cnJlbnRcbiAgICogc3RhdGUgZHVyYXRpb25cbiAgICovXG4gIF9ydW5BbmltYXRpb24gKCkge1xuICAgIGlmICh0aGlzLl9hbmltYXRpb25zICYmIHRoaXMuX2FuaW1hdGlvbnMubGVuZ3RoKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2FuaW1hdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uc1tpXS5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaW5pdCBhbmltYXRpb25zXG4gICAgdGhpcy5fYW5pbWF0aW9ucyA9IFtdO1xuICAgIGlmICh0aGlzLl9fc3RhdGVTdmdzICYmIHRoaXMuX19zdGF0ZVN2Z3MubGVuZ3RoKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuX19zdGF0ZVN2Z3MubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3J1biBmb3IgJywgdGhpcy5fX3N0YXRlU3Znc1tpXSlcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9ucy5wdXNoKG5ldyBTdmdQaWVUaW1lcih7XG4gICAgICAgICAgZWxlbWVudDogdGhpcy5fX3N0YXRlU3Znc1tqXSxcbiAgICAgICAgICBkdXJhdGlvbjogdGhpcy5zdGF0ZS5kdXJhdGlvbiwgLy8gc2Vjb25kc1xuICAgICAgICAgIHN0YXJ0RnJvbTogdGhpcy5zdGF0ZS5zZWNvbmQgLy8gc2Vjb25kc1xuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBvYmplY3QgZnJvbSBhcnJheVxuICAgKlxuICAgKiBAcGFyYW0gIHtBcnJheX0gYXJyYXlcbiAgICogQHBhcmFtICB7c3RyaW5nfSB2YWx1ZVxuICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgIFRoZSBsb29rdXAgb2JqZWN0XG4gICAqL1xuICBfZ2V0T2JqRnJvbUFycmF5IChhcnJheSwgdmFsdWUpIHtcbiAgICBsZXQgbG9va3VwT2JqZWN0ID0ge307XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcnJheS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxvb2t1cE9iamVjdFthcnJheVtpXVt2YWx1ZV1dID0gYXJyYXlbaV07XG4gICAgfVxuICAgIHJldHVybiBsb29rdXBPYmplY3Q7XG4gIH1cbn1cblxuLy8gZXhwb3J0IHRvIHB1YmxpYyBBUElcbmFwaVsnSXRlbSddID0gSXRlbTtcblxuZXhwb3J0IGRlZmF1bHQgSXRlbTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG4vLyBpbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmpzJztcbi8vIGltcG9ydCAnc3RpY2t5LWtpdC9kaXN0L3N0aWNreS1raXQnO1xuLy8gaW1wb3J0ICdzdGlja3ktanMvZGlzdC9zdGlja3kubWluJztcblxuY2xhc3MgSXRlbURldGFpbCB7XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuJG9uSW5pdCgpO1xuICAgICQoZG9jdW1lbnQpLnJlYWR5KHRoaXMuJG9uUmVhZHkuYmluZCh0aGlzKSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdFxuICAgKi9cbiAgJG9uSW5pdCAoKSB7XG4gIH1cblxuICAvKipcbiAgICogT24gZG9jdW1lbnQgcmVhZHlcbiAgICovXG4gICRvblJlYWR5ICgpIHtcbiAgICB0aGlzLl9fJHRodW1icyA9ICQoJyNhcHBJdGVtRGV0YWlsX190aHVtYnMnKTtcbiAgICB0aGlzLl9fJHNsaWRlciA9ICQoJyNhcHBJdGVtRGV0YWlsX19zbGlkZXInKTtcbiAgICB0aGlzLl9fJHN0aWNreSA9ICQoJyNhcHBJdGVtRGV0YWlsX19tYWluLXN0aWNreScpO1xuXG4gICAgaWYgKHRoaXMuX18kc2xpZGVyLmxlbmd0aCAmJiB0aGlzLl9fJHRodW1icy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX2luaXRTbGlkZXJUaHVtYnMoKTtcbiAgICAgIHRoaXMuX2luaXRTbGlkZXIoKTtcbiAgICAgICQod2luZG93KS5vbigncmVzaXplJywgdGhpcy5fb25SZXNpemVTbGlkZXJzLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9fJHN0aWNreS5sZW5ndGgpIHtcbiAgICAgIC8vIHRoaXMuX18kc3RpY2t5LnN0aWNrX2luX3BhcmVudCgpO1xuICAgICAgdGhpcy5faW5pdFN0aWNreSgpO1xuICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCB0aGlzLl9vblJlc2l6ZVN0aWNreS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT24gcmVzaXplIHNsaWRlcyBiZWhhdmlvdXJzXG4gICAqL1xuICBfb25SZXNpemVTbGlkZXJzICgpIHtcbiAgICAvLyBubyBzbGlkZXIgaWYgdGhlcmUgaXMgb25seSBvbmUgaW1hZ2VcbiAgICBpZiAodGhpcy5fXyRzbGlkZXIuZmluZCgnaW1nJykubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLl9fJHNsaWRlci5zbGljaygndW5zbGljaycpO1xuICAgICAgdGhpcy5fXyR0aHVtYnMuc2xpY2soJ3Vuc2xpY2snKTtcbiAgICB9IGVsc2Uge1xuXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9uIHJlc2l6ZSBzdGlja3kgYmVoYXZpb3VzXG4gICAqL1xuICBfb25SZXNpemVTdGlja3kgKCkge1xuICAgIGNvbnN0IHNjcmVlbkxnVmVyc2lvbiA9ICQod2luZG93KS53aWR0aCgpID49IDk5MjsgLy8gQEByZWYgJGdyaWQtYnJlYWtwb2ludHM6IGxnLFxuXG4gICAgaWYgKHRoaXMuX3N0aWNreUluaXRpYWxpc2VkICYmIHNjcmVlbkxnVmVyc2lvbikge1xuICAgICAgdGhpcy5fXyRzdGlja3kudW5zdGljaygpO1xuICAgICAgdGhpcy5fc3RpY2t5SW5pdGlhbGlzZWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faW5pdFN0aWNreSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0IHN0aWNreVxuICAgKi9cbiAgX2luaXRTdGlja3kgKCkge1xuICAgIGlmICh0aGlzLl9zdGlja3lJbml0aWFsaXNlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9fJHN0aWNreS5zdGlja3koe1xuICAgICAgcmVzcG9uc2l2ZVdpZHRoOiB0cnVlLFxuICAgICAgY2xhc3NOYW1lOiAnaXMtc3RpY2t5J1xuICAgIH0pO1xuICAgIC8vIHRoaXMuX3N0aWNreSA9IG5ldyBTdGlja3koJyNhcHBJdGVtRGV0YWlsX19tYWluLXN0aWNreScpO1xuICAgIHRoaXMuX3N0aWNreUluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0IHNsaWRlciB0aHVtYm5haWxzXG4gICAqL1xuICBfaW5pdFNsaWRlclRodW1icyAoKSB7XG4gICAgaWYgKCF0aGlzLl9fJHRodW1icy5sZW5ndGggfHwgdGhpcy5fc2xpZGVyVGh1bWJzSW5pdGlhbGlzZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9fJHRodW1icy5zbGljayh7XG4gICAgICB2ZXJ0aWNhbDogdHJ1ZSxcbiAgICAgIC8vIHZlcnRpY2FsU3dpcGluZzogdHJ1ZSxcbiAgICAgIC8vIGNlbnRlck1vZGU6IHNjcmVlbkxnVmVyc2lvbixcbiAgICAgIHNsaWRlc1RvU2hvdzogOCxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgYXNOYXZGb3I6IHRoaXMuX18kc2xpZGVyLFxuICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcbiAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAvLyBpbmZpbml0ZTogZmFsc2UsXG4gICAgICByZXNwb25zaXZlOiBbe1xuICAgICAgICBicmVha3BvaW50OiA5OTIsIC8vIEBAcmVmICRncmlkLWJyZWFrcG9pbnRzOiBsZ1xuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHZlcnRpY2FsOiBmYWxzZSxcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXG4gICAgICAgIH1cbiAgICAgIH1dXG4gICAgfSk7XG5cbiAgICB0aGlzLl9zbGlkZXJUaHVtYnNJbml0aWFsaXNlZCA9IHRydWU7XG5cbiAgICAvLyByZW1vdmUgYWN0aXZlIGNsYXNzIGZyb20gYWxsIHRodW1ibmFpbCBzbGlkZXNcbiAgICB0aGlzLl9fJHRodW1icy5maW5kKCcuc2xpY2stc2xpZGUnKS5yZW1vdmVDbGFzcygnc2xpY2stYWN0aXZlJyk7XG5cbiAgICAvLyBzZXQgYWN0aXZlIGNsYXNzIHRvIGZpcnN0IHRodW1ibmFpbCBzbGlkZXNcbiAgICB0aGlzLl9fJHRodW1icy5maW5kKCcuc2xpY2stc2xpZGUnKS5lcSgwKS5hZGRDbGFzcygnc2xpY2stYWN0aXZlJyk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdCBzbGlkZXJcbiAgICovXG4gIF9pbml0U2xpZGVyICgpIHtcbiAgICBpZiAoIXRoaXMuX18kc2xpZGVyLmxlbmd0aCB8fCAhdGhpcy5fXyR0aHVtYnMubGVuZ3RoIHx8IHRoaXMuX3NsaWRlckluaXRpYWxpc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fXyRzbGlkZXIuc2xpY2soe1xuICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICBkb3RzOiBmYWxzZSxcbiAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgIGFzTmF2Rm9yOiB0aGlzLl9fJHRodW1ic1xuICAgIH0pO1xuXG4gICAgdGhpcy5fc2xpZGVySW5pdGlhbGlzZWQgPSB0cnVlO1xuXG4gICAgLy8gb24gYmVmb3JlIHNsaWRlIGNoYW5nZSBtYXRjaCBhY3RpdmUgdGh1bWJuYWlsIHRvIGN1cnJlbnQgc2xpZGVcbiAgICB0aGlzLl9fJHNsaWRlci5vbignYmVmb3JlQ2hhbmdlJywgKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpID0+IHtcbiAgICAgIHRoaXMuX18kdGh1bWJzLmZpbmQoJy5zbGljay1zbGlkZScpLnJlbW92ZUNsYXNzKCdzbGljay1hY3RpdmUnKTtcbiAgICAgIHRoaXMuX18kdGh1bWJzLmZpbmQoJy5zbGljay1zbGlkZScpLmVxKG5leHRTbGlkZSkuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlaW5pdCBVSVxuICAgKi9cbiAgcmVpbml0VUkgKCkge1xuICAgIHRoaXMuX2luaXRTbGlkZXIoKTtcbiAgICB0aGlzLl9pbml0U2xpZGVyVGh1bWJzKCk7XG4gICAgdGhpcy5faW5pdFN0aWNreSgpO1xuICB9XG59XG5cbmxldCBpdGVtRGV0YWlsID0gbmV3IEl0ZW1EZXRhaWwoKTtcblxuZXhwb3J0IGRlZmF1bHQgaXRlbURldGFpbDtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0IGEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuY29uc3QgcCA9IG5hdmlnYXRvci5wbGF0Zm9ybTtcblxuY29uc3QgYnJvd3NlcnMgPSB7XG4gICdzYWZhcmknOiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwod2luZG93LkhUTUxFbGVtZW50KS5pbmRleE9mKCdDb25zdHJ1Y3RvcicpID4gMCxcbiAgLy8gJ2Nocm9tZSc6ICEhd2luZG93LmNocm9tZSAmJiAhb3BlcmEsXG4gICdpZSc6IC8qQGNjX29uIUAqL2ZhbHNlIHx8ICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlLFxuICAvLyAnbWFjJzogcC50b1VwcGVyQ2FzZSgpLmluZGV4T2YoJ01BQycpID49IDAsXG4gIC8vICdtYWNMaWtlJzogcC5tYXRjaCgvKE1hY3xpUGhvbmV8aVBvZHxpUGFkKS9pKSA/IHRydWUgOiBmYWxzZSxcbiAgJ2lvcyc6IHAubWF0Y2goLyhpUGhvbmV8aVBvZHxpUGFkKS9pKSA/IHRydWUgOiBmYWxzZSxcbiAgLy8gJ3dpbmRvd3MnOiBwLnRvVXBwZXJDYXNlKCkuaW5kZXhPZignV0lOJykhPT0tMSxcbiAgLy8gJ2xpbnV4JzogcC50b1VwcGVyQ2FzZSgpLmluZGV4T2YoJ0xJTlVYJykhPT0tMSxcbiAgLy8gJ2FuZHJvaWQnOiAvQW5kcm9pZC9pLnRlc3QoYSksXG4gIC8vICdibGFja0JlcnJ5JzogL0JsYWNrQmVycnkvaS50ZXN0KGEpLFxuICAvLyAnaW9zJzogL2lQaG9uZXxpUGFkfGlQb2QvaS50ZXN0KGEpLFxufTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICB2YXIgJGh0bWwgPSAkKCdodG1sJyk7XG4gIGZvciAobmFtZSBpbiBicm93c2Vycykge1xuICAgIGxldCBpc0l0ID0gISFicm93c2Vyc1tuYW1lXTtcbiAgICAvLyBicm93c2Vyc1ticm93c2VyXTtcbiAgICAkaHRtbC50b2dnbGVDbGFzcyhuYW1lLCBpc0l0KTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGJyb3dzZXJzO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBhcGkgZnJvbSAnLi9hcGknO1xuXG5jbGFzcyBDaGVja291dCB7XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIC8vIGJvb3RzdHJhcFxuICAgIHRoaXMuJG9uSW5pdCgpO1xuICAgICQoZG9jdW1lbnQpLnJlYWR5KHRoaXMuJG9uUmVhZHkuYmluZCh0aGlzKSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdFxuICAgKi9cbiAgJG9uSW5pdCAoKSB7XG4gICAgdGhpcy5fYnJlYWtwb2ludE1vYmlsZSA9IDYwMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBkb2N1bWVudCByZWFkeVxuICAgKi9cbiAgJG9uUmVhZHkgKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdhcHAuanMgZG9jdW1lbnQgaXMgcmVhZHknKTtcbiAgICB0aGlzLl9fJHdyYXBwZXIgPSAkKCcjaHNDaGVja291dCcpO1xuXG4gICAgLy8gYmFpbCBpZiB3ZSBhcmUgbm90IG9uIHRoZSBjaGVja291dCBwYWdlXG4gICAgaWYgKCF0aGlzLl9fJHdyYXBwZXIubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fXyRmb3JtID0gJCgnI2hzQ2hlY2tvdXRfX2Zvcm0nKTtcbiAgICB0aGlzLl9fJHdyYXBwZXJMZWZ0ID0gJCgnLmhzQ2hlY2tvdXRfX21haW4tbGVmdCcpO1xuICAgIHRoaXMuX18kYnJlYWRjcnVtYnMgPSAkKCcuaHNDaGVja291dF9fYnJlYWRjcnVtYicpO1xuXG4gICAgdGhpcy5fXyRjb3Vwb25BcmVhID0gJCgnLmhzQ2hlY2tvdXRfX2NvdXBvbi1hcmVhJyk7XG4gICAgdGhpcy5fXyRjb3Vwb25UcmlnZ2VyID0gJCgnLmhzQ2hlY2tvdXRfX2NvdXBvbi10cmlnZ2VyJyk7XG4gICAgdGhpcy5fXyRjb3Vwb25JbnB1dCA9ICQoJy5oc0NoZWNrb3V0X19jb3Vwb24taW5wdXQnKTtcbiAgICB0aGlzLl9fJGNvdXBvblN1Ym1pdCA9ICQoJy5oc0NoZWNrb3V0X19jb3Vwb24tc3VibWl0Jyk7XG4gICAgdGhpcy5fXyRjb3Vwb25GZWVkYmFjayA9ICQoJy5oc0NoZWNrb3V0X19jb3Vwb24tZmVlZGJhY2snKTtcblxuICAgIHRoaXMuX18kYWRkcmVzc1ByZWZpbGxlZCA9ICQoJyNoc0FkZHJlc3NfX3ByZWZpbGxlZCcpO1xuICAgIHRoaXMuX18kaW5wdXRWb29ybmFtID0gJCgnI3Zvb3JuYWFtJyk7XG4gICAgdGhpcy5fXyRpbnB1dEFjaHRlcm5hYW0gPSAkKCcjYWNodGVybmFhbScpO1xuICAgIHRoaXMuX18kaW5wdXRTdHJhYXQgPSAkKCcjc3RyYWF0Jyk7XG4gICAgdGhpcy5fXyRpbnB1dEh1aXNudW1tZXIgPSAkKCcjaHVpc251bW1lcicpO1xuICAgIHRoaXMuX18kaW5wdXRQb3N0Y29kZSA9ICQoJyNwb3N0Y29kZScpO1xuICAgIHRoaXMuX18kaW5wdXRXb29ucGxhYXRzID0gJCgnI3dvb25wbGFhdHMnKTtcbiAgICB0aGlzLl9fJGlucHV0TGFuZCA9ICQoJyNsYW5kJyk7XG4gICAgdGhpcy5fXyRhZGRyZXNzRGlzcGxheSA9ICQoJyNoc0FkZHJlc3NfX2Rpc3BsYXknKTtcblxuICAgIHRoaXMuX18kY29zdFdpbmJlZHJhZyA9ICQoJy5oc0NoZWNrb3V0X19jb3N0LXdpbmJlZHJhZycpO1xuICAgIHRoaXMuX18kY29zdFdpbmJlZHJhZ0RlbCA9ICQoJy5oc0NoZWNrb3V0X19jb3N0LXdpbmJlZHJhZy0tZGVsJyk7XG4gICAgdGhpcy5fXyRjb3N0VmVyemVuZGtvc3RlbiA9ICQoJy5oc0NoZWNrb3V0X19jb3N0LXZlcnplbmRrb3N0ZW4nKTtcbiAgICB0aGlzLl9fJGNvc3RWZWlsaW5na29zdGVuID0gJCgnLmhzQ2hlY2tvdXRfX2Nvc3QtdmVpbGluZ2tvc3RlbicpO1xuICAgIHRoaXMuX18kY29zdFRvdGFhbCA9ICQoJy5oc0NoZWNrb3V0X19jb3N0LXRvdGFhbCcpO1xuXG4gICAgdGhpcy5fXyRleHBhbmRlciA9ICQoJy5oc0NoZWNrb3V0X19leHBhbmRlcicpO1xuICAgIHRoaXMuX18kc3RlcDAgPSAkKCcjaHNDaGVja291dF9fc3RlcC0wJyk7XG4gICAgdGhpcy5fXyRzdGVwMSA9ICQoJyNoc0NoZWNrb3V0X19zdGVwLTEnKTtcbiAgICB0aGlzLl9fJGJ0blRvU3RlcDEgPSAkKCcuaHNDaGVja291dF9fdG9zdGVwMScpO1xuICAgIHRoaXMuX18kYnRuVG9TdGVwMiA9ICQoJy5oc0NoZWNrb3V0X190b3N0ZXAyJyk7XG4gICAgdGhpcy5fXyRzdW1tYXJ5ID0gJCgnLmhzQ2hlY2tvdXRfX21haW4tc3VtbWFyeScpO1xuXG4gICAgdGhpcy5fXyRwYXltZW50TWV0aG9kcyA9ICQoJ2lucHV0W25hbWU9XCJwYXktbWV0aG9kXCJdJyk7XG4gICAgdGhpcy5fXyRwYXltZW50QmFua3MgPSAkKCdpbnB1dFtuYW1lPVwicGF5LWJhbmtcIl0nKTtcbiAgICB0aGlzLl9fJG1ldGhvZElkZWFsID0gJCgnLmhzQ2hlY2tvdXRfX21ldGhvZC0taWRlYWwnKTtcbiAgICB0aGlzLl9fJGJhbmtTZWxlY3RvciA9ICQoJy5oc0NoZWNrb3V0X19iYW5rcycpO1xuICAgIHRoaXMuX18kYnRuU3VibWl0ID0gJCgnLmhzQ2hlY2tvdXRfX3N1Ym1pdCcpO1xuXG4gICAgdGhpcy5fXyRkZXRhaWxzID0gJCgnLmhzQ2hlY2tvdXRfX2RldGFpbHMnKTtcblxuICAgIC8vIGFuaW1hdGUgc3RlcHMgQEBkaXNhYmxlZFxuICAgIC8vIGNvbnN0IG1pbkhlaWdodCA9IHRoaXMuX18kc3RlcDAub3V0ZXJIZWlnaHQoKSAqIDEuNTtcbiAgICAvLyB0aGlzLl9fJHdyYXBwZXIuY3NzKCdtaW4taGVpZ2h0JywgbWluSGVpZ2h0KTtcbiAgICAvLyB0aGlzLl9fJHdyYXBwZXJMZWZ0LmNzcygnbWluLWhlaWdodCcsIG1pbkhlaWdodCk7XG5cbiAgICB0aGlzLm1hbmFnZVZhbGlkYXRpb24oKTtcblxuICAgIHRoaXMuX2JpbmRVSSgpO1xuXG4gICAgLy8gc3RhcnQgYnkgc3RlcCAwIG9uIGxvYWRcbiAgICB0aGlzLmdvVG9TdGVwKDApO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hbmFnZSBmb3JtIHZhbGlkYXRpb25cbiAgICpcbiAgICogQHNlZSBvcHRpb25zIGhlcmUgaHR0cHM6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy92YWxpZGF0ZS9cbiAgICogQEB0b2RvIHBlcmhhcHMgdXNlIHRoaXMgdG8gc3R5bGUgdGhlIHZhbGlkYXRvciBvbiB0aGUgYWxsXG4gICAqIHdlYnNpdGU6IGAkLnZhbGlkYXRvci5zZXREZWZhdWx0cyh7fSlgXG4gICAqL1xuICBtYW5hZ2VWYWxpZGF0aW9uICgpIHtcbiAgICB0aGlzLl92YWxpZGF0aW9uID0gdGhpcy5fXyRmb3JtLnZhbGlkYXRlKHtcbiAgICAgIC8vIHN1Ym1pdEhhbmRsZXI6ICgpID0+IHtcbiAgICAgIC8vICAgdGhpcy5nb1RvU3RlcCgxKTtcbiAgICAgIC8vIH0sXG4gICAgICBlcnJvckNsYXNzOiAnaGFzLWRhbmdlcicsXG4gICAgICB2YWxpZENsYXNzOiAnaGFzLXN1Y2Nlc3MnLFxuICAgICAgLy8gZXJyb3JFbGVtZW50OiAnPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbC1mZWVkYmFja1wiPicsXG4gICAgICAvLyBoaWdobGlnaHQ6IGZ1bmN0aW9uKGVsZW1lbnQsIGVycm9yQ2xhc3MsIHZhbGlkQ2xhc3MpIHtcbiAgICAgIC8vICAgJChlbGVtZW50KS5wYXJlbnQoKS5hZGRDbGFzcyhlcnJvckNsYXNzKS5yZW1vdmVDbGFzcyh2YWxpZENsYXNzKTtcbiAgICAgIC8vIH0sXG4gICAgICAvLyB1bmhpZ2hsaWdodDogZnVuY3Rpb24oZWxlbWVudCwgZXJyb3JDbGFzcywgdmFsaWRDbGFzcykge1xuICAgICAgLy8gICAkKGVsZW1lbnQpLnBhcmVudCgpLnJlbW92ZUNsYXNzKGVycm9yQ2xhc3MpLmFkZENsYXNzKHZhbGlkQ2xhc3MpO1xuICAgICAgLy8gfVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuX3ZhbGlkYXRpb24pXG4gIH1cblxuICAvKipcbiAgICogQmluZCBVSVxuICAgKi9cbiAgX2JpbmRVSSAoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBicmVhYWRjcnVtYnNcbiAgICBzZWxmLl9fJGJyZWFkY3J1bWJzLm9uKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCBlbCA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICBpZiAoZWwpIHtcbiAgICAgICAgY29uc3Qgc3RlcCA9ICQoZWwpLmluZGV4KCk7XG4gICAgICAgIGlmIChzdGVwID09PSAxKSB7XG4gICAgICAgICAgaWYgKHNlbGYuX18kZm9ybS52YWxpZCgpKSB7XG4gICAgICAgICAgICBzZWxmLmdvVG9TdGVwKHN0ZXApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLmdvVG9TdGVwKHN0ZXApO1xuICAgICAgICB9XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGNvdXBvbiBhcmVhXG4gICAgc2VsZi5fXyRjb3Vwb25BcmVhLmhpZGUoKTtcbiAgICBzZWxmLl9fJGNvdXBvbkZlZWRiYWNrLmhpZGUoKTtcbiAgICBzZWxmLl9fJGNvdXBvblN1Ym1pdC5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgIHNlbGYuX18kY291cG9uVHJpZ2dlci5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLl9fJGNvdXBvblRyaWdnZXIuc2xpZGVVcCgxMDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5fXyRjb3Vwb25BcmVhLnNsaWRlRG93bigpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgc2VsZi5fXyRjb3Vwb25JbnB1dC5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgICBzZWxmLl9fJGNvdXBvblN1Ym1pdC5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuX18kY291cG9uU3VibWl0LmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc2VsZi5fXyRjb3Vwb25TdWJtaXQub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5fXyRjb3Vwb25GZWVkYmFjay5zbGlkZURvd24oKTtcbiAgICAgIHNlbGYuYXBwbHlDb3Vwb24oc2VsZi5fXyRjb3Vwb25GZWVkYmFjay5kYXRhKCdkaXNjb3VudCcpKTtcbiAgICAgIHNlbGYuX18kY291cG9uU3VibWl0LmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICBzZWxmLl9fJGNvdXBvbklucHV0Lm9mZignaW5wdXQnKTtcbiAgICB9KTtcblxuICAgIC8vIG1vYmlsZSBleHBhbmRlclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IHNlbGYuX2JyZWFrcG9pbnRNb2JpbGUpIHtcbiAgICAgIHNlbGYuX18kc3VtbWFyeS5oaWRlKCk7XG4gICAgICBzZWxmLl9fJGV4cGFuZGVyLnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpLnNob3coKTtcbiAgICB9XG4gICAgc2VsZi5fXyRleHBhbmRlci5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLl9fJHN1bW1hcnkuc2xpZGVUb2dnbGUoKTtcbiAgICAgIHNlbGYuX18kZXhwYW5kZXIudG9nZ2xlQ2xhc3MoJ2V4cGFuZGVkJyk7XG4gICAgfSk7XG5cbiAgICAvLyBhZGRyZXNzIGNob2ljZVxuICAgIHNlbGYuX18kZGV0YWlscy5oaWRlKCk7XG4gICAgaWYgKCEhJCgnaW5wdXRbbmFtZT1cImFkZHJlc3NjaG9pY2VcIl06Y2hlY2tlZCcpLnZhbCgpKSB7XG4gICAgICBzZWxmLl9fJGRldGFpbHMuc2xpZGVEb3duKCk7XG4gICAgfVxuICAgICQoJ2lucHV0W25hbWU9XCJhZGRyZXNzY2hvaWNlXCJdJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuX18kZGV0YWlscy5zbGlkZVRvZ2dsZSghIXRoaXMudmFsdWUpO1xuICAgIH0pO1xuXG4gICAgLy8gdG8gc3RlcDFcbiAgICBzZWxmLl9fJGJ0blRvU3RlcDEub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHNlbGYuZ29Ub1N0ZXAoMCk7XG4gICAgfSk7XG5cbiAgICAvLyB0byBzdGVwMlxuICAgIHNlbGYuX18kYnRuVG9TdGVwMi5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHNlbGYuX18kZm9ybS52YWxpZCgpKSB7XG4gICAgICAgIHNlbGYuZ29Ub1N0ZXAoMSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBwYXltZW50IG1ldGhvZFxuICAgIHNlbGYuX18kYmFua1NlbGVjdG9yLmhpZGUoKTtcbiAgICBzZWxmLl9fJGJ0blN1Ym1pdC5oaWRlKCk7XG4gICAgc2VsZi5fXyRwYXltZW50TWV0aG9kcy5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMudmFsdWUgPT09ICdpZGVhbCcpIHtcbiAgICAgICAgc2VsZi5fbWF5YmVTaG93U3VibWl0QnRuKHNlbGYuX2lzQmFua1NlbGVjdGVkKTtcbiAgICAgICAgc2VsZi5fXyRiYW5rU2VsZWN0b3Iuc2xpZGVEb3duKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLl9fJGJ0blN1Ym1pdC5zbGlkZURvd24oKTtcbiAgICAgICAgc2VsZi5fXyRiYW5rU2VsZWN0b3Iuc2xpZGVVcCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gYmFuayBzZWxlY3Rpb25cbiAgICBzZWxmLl9fJHBheW1lbnRCYW5rcy5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5faXNCYW5rU2VsZWN0ZWQgPSAhIXRoaXMudmFsdWU7IC8vIG1ha2UgaXQgYSBib29sZWFuXG4gICAgICBzZWxmLl9tYXliZVNob3dTdWJtaXRCdG4oISF0aGlzLnZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXliZSBzaG93IHRoZSBzdWJtaXQgYnV0dG9uXG4gICAqIEBwYXJhbSAge2Jvb2xlYW59IHNob3dJdFxuICAgKi9cbiAgX21heWJlU2hvd1N1Ym1pdEJ0biAoc2hvd0l0KSB7XG4gICAgaWYgKHNob3dJdCkge1xuICAgICAgdGhpcy5fXyRidG5TdWJtaXQuc2xpZGVEb3duKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX18kYnRuU3VibWl0LnNsaWRlVXAoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR28gdG8gc3RlcFxuICAgKlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHN0ZXAgZS5nLiAwLCAxLCAyLCBldGMuXG4gICAqL1xuICBnb1RvU3RlcCAoc3RlcCkge1xuICAgIC8vIGZpcnN0IHJlbW92ZSBjbGFzcyBmcm9tIGFsbCBicmVhZGNydW1ic1xuICAgIHRoaXMuX18kYnJlYWRjcnVtYnMucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgLy8gYWRkIHRoZSBhY3RpdmUgY2xhc3NcbiAgICB0aGlzLl9fJGJyZWFkY3J1bWJzLmZpbHRlcigoaW5kZXgsIGVsZW0pID0+IHtcbiAgICAgIGlmIChpbmRleCA9PT0gc3RlcCkge1xuICAgICAgICAvLyBoaWdobGlnaHQgY3VycmVudCBicmVhZGNydW1iXG4gICAgICAgICQoZWxlbSkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgIC8vIHVzZWZ1bCBmb3IgZ2xvYmFsIHN0eWxpbmcgYW5kIGhpZGluZy9zaG93aW5nIGJhc2VkIG9uIGN1cnJlbnQgc3RlcFxuICAgICAgICB0aGlzLl9fJHdyYXBwZXIuYXR0cignZGF0YS1zdGVwJywgc3RlcCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc3RlcCA9PT0gMSkge1xuICAgICAgdGhpcy5tYW5hZ2VBZGRyZXNzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IGNvdXBvblxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGRpc2NvdW50IFRoZSBhbW91bnQgb2YgZGlzY291bnQgaW4gY2FzaFxuICAgKi9cbiAgYXBwbHlDb3Vwb24gKGRpc2NvdW50KSB7XG4gICAgY29uc3QgY3VycmVudFByaWNlID0gdGhpcy5fXyRjb3N0V2luYmVkcmFnLmRhdGEoJ3ZhbCcpO1xuICAgIGNvbnN0IG5ld1ByaWNlID0gcGFyc2VGbG9hdChjdXJyZW50UHJpY2UpIC0gcGFyc2VGbG9hdChkaXNjb3VudCk7XG5cbiAgICAvLyBmaWxsIGRlbGV0ZWQgcHJpY2VcbiAgICB0aGlzLl9fJGNvc3RXaW5iZWRyYWdEZWwuaHRtbCh0aGlzLmZvcm1hdFByaWNlKGN1cnJlbnRQcmljZSkpO1xuXG4gICAgLy8gdXBkYXRlIHdpbmJlZHJhZyBwcmljZSAoYWxzbyBpdCdzIGRhdGEgcmF3IG51bWJlciB2YWx1ZSlcbiAgICB0aGlzLl9fJGNvc3RXaW5iZWRyYWcuaHRtbCh0aGlzLmZvcm1hdFByaWNlKG5ld1ByaWNlKSkuZGF0YSgndmFsJywgbmV3UHJpY2UpO1xuXG4gICAgLy8gdXBkYXRlIHRvdGFhbCBwcmljZVxuICAgIHRoaXMuX18kY29zdFRvdGFhbC5odG1sKHRoaXMuZm9ybWF0UHJpY2UodGhpcy5nZXRUb3RhbFByaWNlKCkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdG90YWwgcHJpY2UgYnkgc3VtbWluZyB2YWx1ZXMgb24gdGhlIERPTVxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAqL1xuICBnZXRUb3RhbFByaWNlICgpIHtcbiAgICBjb25zdCBhID0gdGhpcy5nZXRQcmljZUZyb20odGhpcy5fXyRjb3N0V2luYmVkcmFnKTtcbiAgICBjb25zdCBiID0gdGhpcy5nZXRQcmljZUZyb20odGhpcy5fXyRjb3N0VmVyemVuZGtvc3Rlbik7XG4gICAgY29uc3QgYyA9IHRoaXMuZ2V0UHJpY2VGcm9tKHRoaXMuX18kY29zdFZlaWxpbmdrb3N0ZW4pO1xuICAgIHJldHVybiBhICsgYiArIGM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHByaWNlIGZyb20galF1ZXJ5IERPTSBlbGVtZW50XG4gICAqIEBwYXJhbSAge2pRdWVyeX0gJGVsZW1cbiAgICogQHJldHVybiB7TnVtYmVyfVxuICAgKi9cbiAgZ2V0UHJpY2VGcm9tICgkZWxlbSkge1xuICAgIGxldCBhc1N0cmluZztcbiAgICBsZXQgdmFsID0gJGVsZW0uZGF0YSgndmFsJykudG9TdHJpbmcoKTtcblxuICAgIGlmICh2YWwpIHtcbiAgICAgIGFzU3RyaW5nID0gdmFsLnJlcGxhY2UoJywnLCAnLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhc1N0cmluZyA9ICcwJztcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoYXNTdHJpbmcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCB6ZXJvZXNcbiAgICogQHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNDAzOTQ0OC8xOTM4OTcwXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBmb3JtYXRQcmljZSAodmFsdWUpIHtcbiAgICBjb25zdCBhc051bWJlciA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgIC8vIHJlcGxhY2UgZG90IHdpdGggY29tbWEgYXMgaW4gZGVzaWduXG4gICAgY29uc3QgcHJpY2UgPSBhc051bWJlci50b0ZpeGVkKDIpLnJlcGxhY2UoJy4nLCAnLCcpO1xuICAgIHJldHVybiB0aGlzLmdldEN1cnJlbmN5KCkgKyAnICcgKyBwcmljZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY3VycmVuY3lcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgZ2V0Q3VycmVuY3kgKCkge1xuICAgIHJldHVybiAn4oKsJztcbiAgfVxuXG4gIC8qKlxuICAgKiBNYW5hZ2UgYWRkcmVzc1xuICAgKi9cbiAgbWFuYWdlQWRkcmVzcyAoKSB7XG4gICAgbGV0IHByZWZpbGxlZEFkZHJlc3M7XG5cbiAgICBpZiAoISQoJ2lucHV0W25hbWU9YWRkcmVzc2Nob2ljZV06Y2hlY2tlZCcpLnZhbCgpICYmIHRoaXMuX18kYWRkcmVzc1ByZWZpbGxlZC5odG1sKCkpIHtcbiAgICAgIHByZWZpbGxlZEFkZHJlc3MgPSB0aGlzLl9fJGFkZHJlc3NQcmVmaWxsZWQuaHRtbCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnN0IHZvb3JuYW0gPSB0aGlzLl9fJGlucHV0Vm9vcm5hbS52YWwoKTtcbiAgICAgIGNvbnN0IGFjaHRlcm5hYW0gPSB0aGlzLl9fJGlucHV0QWNodGVybmFhbS52YWwoKTtcbiAgICAgIGNvbnN0IHN0cmFhdCA9IHRoaXMuX18kaW5wdXRTdHJhYXQudmFsKCk7XG4gICAgICBjb25zdCBodWlzbnVtbWVyID0gdGhpcy5fXyRpbnB1dEh1aXNudW1tZXIudmFsKCk7XG4gICAgICBjb25zdCBwb3N0Y29kZSA9IHRoaXMuX18kaW5wdXRQb3N0Y29kZS52YWwoKTtcbiAgICAgIGNvbnN0IHdvb25wbGFhdHMgPSB0aGlzLl9fJGlucHV0V29vbnBsYWF0cy52YWwoKTtcbiAgICAgIGNvbnN0IGxhbmQgPSB0aGlzLl9fJGlucHV0TGFuZC5maW5kKCc6c2VsZWN0ZWQnKS50ZXh0KCk7XG5cbiAgICAgIHByZWZpbGxlZEFkZHJlc3MgPSBgJHt2b29ybmFtfSAke2FjaHRlcm5hYW19LCAke3N0cmFhdH0gJHtodWlzbnVtbWVyfSxcbiAgICAgICAgPGJyPiR7cG9zdGNvZGV9LCAke3dvb25wbGFhdHN9LCAke2xhbmR9YDtcbiAgICB9XG5cbiAgICB0aGlzLl9fJGFkZHJlc3NEaXNwbGF5Lmh0bWwocHJlZmlsbGVkQWRkcmVzcyk7XG4gIH1cbn1cblxuLy8gZXhwb3J0IHRvIHB1YmxpYyBBUElcbmFwaVsnY2hlY2tvdXQnXSA9IG5ldyBDaGVja291dCgpO1xuXG5leHBvcnQgZGVmYXVsdCBDaGVja291dDtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgYXBpIGZyb20gJy4vYXBpJztcblxuY2xhc3MgU2VsbGVyIHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgLy8gYm9vdHN0cmFwXG4gICAgJChkb2N1bWVudCkucmVhZHkodGhpcy4kb25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBkb2N1bWVudCByZWFkeVxuICAgKi9cbiAgJG9uUmVhZHkgKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdhcHAuanMgZG9jdW1lbnQgaXMgcmVhZHknKTtcbiAgICB0aGlzLl9fJHdyYXBwZXIgPSAkKCcjaHNTZWxsZXJjb250YWN0Jyk7XG5cbiAgICAvLyBiYWlsIGlmIHdlIGFyZSBub3Qgb24gdGhlIHJpZ2h0IHBhZ2VcbiAgICBpZiAoIXRoaXMuX18kd3JhcHBlci5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9fJGNvdW50cnlTZWxlY3RvciA9ICQoJy5oc0xldmVyZW5Db3VudHJ5Jyk7XG5cbiAgICB0aGlzLl9iaW5kVUkoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIFVJXG4gICAqL1xuICBfYmluZFVJICgpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIHNlbGYuX18kY291bnRyeVNlbGVjdG9yLmhpZGUoKTtcbiAgICAvLyBpZiAoISEkKCdpbnB1dFtuYW1lPVwibGV2ZXJlblwiXTpjaGVja2VkJykudmFsKCkpIHtcbiAgICAvLyAgIHNlbGYuX18kY291bnRyeVNlbGVjdG9yLnNsaWRlRG93bigpO1xuICAgIC8vIH1cblxuICAgICQoJ2lucHV0W25hbWU9XCJsZXZlcmVuXCJdJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGlzWWVzID0gdGhpcy52YWx1ZSA9PT0gJ2phJztcbiAgICAgIGlmIChpc1llcykge1xuICAgICAgICBzZWxmLl9fJGNvdW50cnlTZWxlY3Rvci5zbGlkZURvd24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuX18kY291bnRyeVNlbGVjdG9yLnNsaWRlVXAoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG4vLyBleHBvcnQgdG8gcHVibGljIEFQSVxuYXBpWydzZWxsZXInXSA9IG5ldyBTZWxsZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsbGVyO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBhcGkgZnJvbSAnLi9hcGknO1xuXG5jbGFzcyBBY2NvdW50IHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgLy8gYm9vdHN0cmFwXG4gICAgdGhpcy4kb25Jbml0KCk7XG4gICAgJChkb2N1bWVudCkucmVhZHkodGhpcy4kb25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0XG4gICAqL1xuICAkb25Jbml0ICgpIHtcbiAgICB0aGlzLl9icmVha3BvaW50TW9iaWxlID0gNjAwO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIGRvY3VtZW50IHJlYWR5XG4gICAqL1xuICAkb25SZWFkeSAoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2FwcC5qcyBkb2N1bWVudCBpcyByZWFkeScpO1xuICAgIHRoaXMuX18kd3JhcHBlciA9ICQoJy5oc0FjY291bnQnKTtcblxuICAgIC8vIGJhaWwgaWYgd2UgYXJlIG5vdCBvbiB0aGUgYWNjb3VudCBwYWdlXG4gICAgaWYgKCF0aGlzLl9fJHdyYXBwZXIubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fdHRNb2RhbCgpO1xuICAgIHRoaXMuX2dlZ2V2ZW5zKCk7XG4gIH1cblxuICAvKipcbiAgICogVHJhY2sgYW5kIHRyYWNlIG1vZGFsXG4gICAqL1xuICBfdHRNb2RhbCAoKSB7XG4gICAgbGV0ICR0dE1vZGFsID0gJCgnI2hzVHRNb2RhbCcpO1xuICAgIGlmICghJHR0TW9kYWwubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuaHNBY2NvdW50X190YWJsZS10dCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAkdHRNb2RhbC5tb2RhbCgpO1xuICAgICAgJHR0TW9kYWwuZmluZCgnLnR0X192ZXJ6ZW5kcGFydGlqJykudGV4dCh0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS12ZXJ6ZW5kcGFydGlqJykpO1xuICAgICAgJHR0TW9kYWwuZmluZCgnLnR0X19jb2RlJykudGV4dCh0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2RlJykpO1xuICAgICAgLy8gJHR0TW9kYWwub24oJ3Nob3cuYnMubW9kYWwnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgLy8gICAvLyBkbyBzb21ldGhpbmcuLi5cbiAgICAgIC8vIH0pXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2VnZXZlbnMgdmlld3Mgc3dpdGNoXG4gICAqL1xuICBfZ2VnZXZlbnMgKCkge1xuICAgIGNvbnN0ICRidG5Ub0VkaXQgPSAkKCcjZ2VnZXZlbnNfc3dpdGNoZWRpdCcpO1xuICAgIGNvbnN0ICR2aWV3U2hvdyA9ICQoJyNnZWdldmVuc19zaG93Jyk7XG4gICAgY29uc3QgJHZpZXdFZGl0ID0gJCgnI2dlZ2V2ZW5zX2VkaXQnKTtcblxuICAgIGlmICghJGJ0blRvRWRpdC5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBfc3dpdGNoVmlldyA9IChldmVudCwgbmFtZSkgPT4ge1xuICAgICAgbGV0IG5ld1ZpZXcgPSBuYW1lO1xuICAgICAgbGV0IGN1cnJlbnRWaWV3ID0gdGhpcy5fY3VycmVudFZpZXc7XG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIGlmICghbmV3Vmlldykge1xuICAgICAgICBuZXdWaWV3ID0gbG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpO1xuICAgICAgfVxuICAgICAgaWYgKCFuZXdWaWV3KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdWaWV3ID09PSAnc2hvdycgJiYgY3VycmVudFZpZXcgIT09ICdzaG93Jykge1xuICAgICAgICAkdmlld0VkaXQuc2xpZGVVcCgpO1xuICAgICAgICAkdmlld1Nob3cuc2xpZGVEb3duKCk7XG4gICAgICAgIGxvY2F0aW9uLmhhc2ggPSB0aGlzLl9jdXJyZW50VmlldyA9ICdzaG93JztcbiAgICAgIH0gZWxzZSBpZiAobmV3VmlldyA9PT0gJ2VkaXQnICYmIGN1cnJlbnRWaWV3ICE9PSAnZWRpdCcpIHtcbiAgICAgICAgJHZpZXdTaG93LnNsaWRlVXAoKTtcbiAgICAgICAgJHZpZXdFZGl0LnNsaWRlRG93bigpO1xuICAgICAgICBsb2NhdGlvbi5oYXNoID0gdGhpcy5fY3VycmVudFZpZXcgPSAnZWRpdCc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBfc3dpdGNoVmlldywgZmFsc2UpO1xuXG4gICAgX3N3aXRjaFZpZXcobnVsbCwgJ3Nob3cnKTtcblxuICAgICRidG5Ub0VkaXQuY2xpY2soKGUpID0+IHsgX3N3aXRjaFZpZXcoZSwgJ2VkaXQnICl9KTtcbiAgfVxufVxuXG4vLyBleHBvcnQgdG8gcHVibGljIEFQSVxuYXBpWydhY2NvdW50J10gPSBuZXcgQWNjb3VudCgpO1xuXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50O1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBhcGkgZnJvbSAnLi9hcGknO1xuXG5jbGFzcyBDb3VudGRvd24ge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLiRvbkluaXQoKTtcbiAgICAkKGRvY3VtZW50KS5yZWFkeSh0aGlzLiRvblJlYWR5LmJpbmQodGhpcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRcbiAgICovXG4gICRvbkluaXQgKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIE9uIGRvY3VtZW50IHJlYWR5XG4gICAqL1xuICAkb25SZWFkeSAoKSB7XG4gICAgdGhpcy5fXyR3cmFwcGVyID0gJCgnLmNvdW50ZG93bicpO1xuXG4gICAgaWYgKCF0aGlzLl9fJHdyYXBwZXIubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fXyRkYXlzID0gdGhpcy5fXyR3cmFwcGVyLmZpbmQoJ1tkYXRhLWNvdW50ZG93bj1cImRheXNcIl0nKTtcbiAgICB0aGlzLl9fJGhvdXJzID0gdGhpcy5fXyR3cmFwcGVyLmZpbmQoJ1tkYXRhLWNvdW50ZG93bj1cImhvdXJzXCJdJyk7XG4gICAgdGhpcy5fXyRtaW51dGVzID0gdGhpcy5fXyR3cmFwcGVyLmZpbmQoJ1tkYXRhLWNvdW50ZG93bj1cIm1pbnV0ZXNcIl0nKTtcbiAgICB0aGlzLl9fJHNlY29uZHMgPSB0aGlzLl9fJHdyYXBwZXIuZmluZCgnW2RhdGEtY291bnRkb3duPVwic2Vjb25kc1wiXScpO1xuXG4gICAgdGhpcy5fc3RhcnRDb3VudGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogTWFudWFsbHkgaW5pdFxuICAgKi9cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy4kb25SZWFkeSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IGNvdW50ZXI7XG4gICAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgX3N0YXJ0Q291bnRlciAoKSB7XG4gICAgdGhpcy5fc2Vjb25kcyA9IDA7XG4gICAgaWYgKHRoaXMuX2ludGVydmFsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKTtcbiAgICB9XG4gICAgdGhpcy5faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLl9zZWNvbmRzID0gdGhpcy5fc2Vjb25kcyArIDE7XG4gICAgICB0aGlzLl91cGRhdGUoKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgVUkgZXZlcnkgc2Vjb25kXG4gICAqL1xuICBfdXBkYXRlICgpIHtcbiAgICBjb25zdCBjdXJyZW50U2Vjb25kcyA9IHBhcnNlSW50KHRoaXMuX18kc2Vjb25kcy5odG1sKCksIDEwKTtcbiAgICBjb25zdCBjdXJyZW50TWludXRlcyA9IHBhcnNlSW50KHRoaXMuX18kbWludXRlcy5odG1sKCksIDEwKTtcbiAgICBjb25zdCBjdXJyZW50SG91cnMgPSBwYXJzZUludCh0aGlzLl9fJGhvdXJzLmh0bWwoKSwgMTApO1xuICAgIGNvbnN0IGN1cnJlbnREYXlzID0gcGFyc2VJbnQodGhpcy5fXyRkYXlzLmh0bWwoKSwgMTApO1xuXG4gICAgbGV0IG5ld1NlY29uZHMgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oY3VycmVudFNlY29uZHMgLSAxLCA2MCkpO1xuICAgIGxldCBuZXdNaW51dGVzID0gY3VycmVudE1pbnV0ZXM7XG4gICAgbGV0IG5ld0hvdXJzID0gY3VycmVudEhvdXJzO1xuICAgIGxldCBuZXdEYXlzID0gY3VycmVudERheXM7XG5cbiAgICBpZiAobmV3U2Vjb25kcyA9PT0gLTEpIHtcbiAgICAgIG5ld1NlY29uZHMgPSA1OTtcbiAgICAgIG5ld01pbnV0ZXMgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oY3VycmVudE1pbnV0ZXMgLSAxLCA1OSkpO1xuXG4gICAgICBpZiAobmV3TWludXRlcyA9PT0gLTEpIHtcbiAgICAgICAgbmV3TWludXRlcyA9IDU5O1xuICAgICAgICBuZXdIb3VycyA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbihjdXJyZW50SG91cnMgLSAxLCAyMykpO1xuXG4gICAgICAgIGlmIChuZXdIb3VycyA9PT0gLTEpIHtcbiAgICAgICAgICBuZXdIb3VycyA9IDIzO1xuICAgICAgICAgIG5ld0RheXMgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4obmV3RGF5cyAtIDEsIDM2NCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fXyRzZWNvbmRzLmh0bWwodGhpcy5fcGFkKG5ld1NlY29uZHMpKTtcbiAgICB0aGlzLl9fJG1pbnV0ZXMuaHRtbCh0aGlzLl9wYWQobmV3TWludXRlcykpO1xuICAgIHRoaXMuX18kaG91cnMuaHRtbCh0aGlzLl9wYWQobmV3SG91cnMpKTtcbiAgICB0aGlzLl9fJGRheXMuaHRtbCh0aGlzLl9wYWQobmV3RGF5cykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhZCBudW1iZXJzIChhZGQgbGVhZGluZyB6ZXJvKVxuICAgKlxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IG51bVxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHNpemVcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgX3BhZCAobnVtLCBzaXplPTIpIHtcbiAgICBsZXQgcyA9IG51bSArICcnO1xuICAgIHdoaWxlIChzLmxlbmd0aCA8IHNpemUpIHMgPSAnMCcgKyBzO1xuICAgIHJldHVybiBzO1xuICB9XG59XG5cbi8vIGV4cG9ydCB0byBwdWJsaWMgQVBJXG5hcGlbJ2NvdW50ZG93biddID0gbmV3IENvdW50ZG93bigpO1xuXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd247XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuLy8gaW1wb3J0IHRldGhlciBmcm9tICd0ZXRoZXInO1xuaW1wb3J0ICdib290c3RyYXAvanMvc3JjL2NvbGxhcHNlJztcbmltcG9ydCAnYm9vdHN0cmFwL2pzL3NyYy9hbGVydCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9zcmMvbW9kYWwnO1xuaW1wb3J0ICdib290c3RyYXAvanMvc3JjL3Rvb2x0aXAnO1xuaW1wb3J0ICdib290c3RyYXAvanMvc3JjL2Ryb3Bkb3duJztcbi8vIGltcG9ydCAnLi9ib290c3RyYXAtNC1kZXYvY29sbGFwc2UnOyAvLyAnYm9vdHN0cmFwL2pzL3NyYy9jb2xsYXBzZSc7XG4vLyBpbXBvcnQgJy4vYm9vdHN0cmFwLTQtZGV2L2FsZXJ0JzsgLy8gJ2Jvb3RzdHJhcC9qcy9zcmMvYWxlcnQnO1xuLy8gaW1wb3J0ICcuL2Jvb3RzdHJhcC00LWRldi9tb2RhbCc7IC8vICdib290c3RyYXAvanMvc3JjL21vZGFsJztcbi8vIGltcG9ydCAnLi9ib290c3RyYXAtNC1kZXYvdG9vbHRpcCc7IC8vICdib290c3RyYXAvanMvc3JjL3Rvb2x0aXAnO1xuLy8gaW1wb3J0ICcuL2Jvb3RzdHJhcC00LWRldi9kcm9wZG93bic7IC8vICdib290c3RyYXAvanMvc3JjL2Ryb3Bkb3duJztcblxuLy8gaW1wb3J0ICdqcXVlcnktbWF0Y2gtaGVpZ2h0L2Rpc3QvanF1ZXJ5Lm1hdGNoSGVpZ2h0Jztcbi8vIGltcG9ydCAnZGF0YXRhYmxlcy5uZXQnO1xuLy8gaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5qcyc7XG5cbmltcG9ydCBhcGkgZnJvbSAnLi9hcGknO1xuLy8gaW1wb3J0ICcuL2RlbW8nO1xuaW1wb3J0ICcuL2FidGVzdGluZyc7XG5pbXBvcnQgJy4vY29va2llYW5ub3VuY2VtZW50J1xuaW1wb3J0ICcuL25hc2snO1xuaW1wb3J0ICcuL2ZhcSc7XG5pbXBvcnQgJy4vaXRlbSc7XG5pbXBvcnQgaXRlbURldGFpbCBmcm9tICcuL2l0ZW1EZXRhaWwnO1xuaW1wb3J0ICcuL2Jyb3dzZXJzJztcbmltcG9ydCAnLi9jaGVja291dCc7XG5pbXBvcnQgJy4vc2VsbGVyJztcbmltcG9ydCAnLi9hY2NvdW50JztcbmltcG9ydCAnLi9jb3VudGRvd24nO1xuXG5jbGFzcyBBcHAge1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvLyBib290c3RyYXBcbiAgICB0aGlzLiRvbkluaXQoKTtcbiAgICAkKGRvY3VtZW50KS5yZWFkeSh0aGlzLiRvblJlYWR5LmJpbmQodGhpcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRcbiAgICovXG4gICRvbkluaXQgKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdhcHAuanMgaW5pdGlhbGl6ZWQnKTtcbiAgICB0aGlzLl91cGRhdGVDb3B5cmlnaHRZZWFyKCk7XG4gICAgdGhpcy5fYWNjb3VudE1lbnUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBkb2N1bWVudCByZWFkeVxuICAgKi9cbiAgJG9uUmVhZHkgKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdhcHAuanMgZG9jdW1lbnQgaXMgcmVhZHknKTtcbiAgICB0aGlzLl9fJGl0ZW1Db2xzID0gJCgnLmhzSXRlbV9fY29sJyk7XG5cbiAgICB0aGlzLl8kd2luID0gJCh3aW5kb3cpO1xuXG4gICAgLy8gdGhpcy5fbW9iaWxlSW1hZ2VzKCk7XG4gICAgdGhpcy5fbWF0Y2hDb2xzSGVpZ2h0KCk7XG4gICAgdGhpcy5fbWFuYWdlQ2F0c1NsaWRlcigpO1xuICAgIHRoaXMuX2luaXRNb2RhbHMoKTtcbiAgICB0aGlzLl9pbml0Rm9ybXMoKTtcbiAgICB0aGlzLl9pbml0VGFibGVzKCk7XG4gICAgdGhpcy5faW5pdERyb3Bkb3ducygpO1xuICAgIHRoaXMuX2luaXRBdXRoTW9kYWwoKTtcbiAgICB0aGlzLl8kd2luLnJlc2l6ZSh0aGlzLl9tYXRjaENvbHNIZWlnaHQuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5fJHdpbi5yZXNpemUodGhpcy5fbWFuYWdlQ2F0c1NsaWRlci5iaW5kKHRoaXMpKTtcbiAgICAvLyB0aGlzLl8kd2luLnJlc2l6ZSh0aGlzLl9tb2JpbGVJbWFnZXMuYmluZCh0aGlzKSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdCB0b29sdGlwc1xuICAgKlxuICAgKi9cbiAgX2luaXRUb29sdGlwcyAoKSB7XG4gICAgLy8gYm9vdHN0cmFwIHRvb2x0aXBzXG4gICAgLy8gJCgnLmpzLXRvb2x0aXAnKS50b29sdGlwKHt9KTtcbiAgICAkKCcuc2hpcHBpbmd0aW1lLXRvb2x0aXAnKS50b29sdGlwKHtcbiAgICAgIGFuaW1hdGlvbjogZmFsc2UsXG4gICAgICBvZmZzZXQ6ICctMTBweCAwJyxcbiAgICAgIC8vIGRlbGF5OiB7IGhpZGU6IDEwMDAwMDAgfSwgLy8gZm9yIGRlYnVnZ2luZ1xuICAgICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwidG9vbHRpcCB0b29sdGlwLXRvcCB0b29sdGlwLS1saWdodCBzaGlwcGluZ3RpbWVfX3Rvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPjxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93XCI+PC9kaXY+PGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj48L2Rpdj4nXG4gICAgfSk7XG4gICAgLy8gJCgnLnNoaXBwaW5ndGltZScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIC8vICAgJCh0aGlzKS50b29sdGlwKHtcbiAgICAvLyAgICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwidG9vbHRpcCB0b29sdGlwLS1saWdodFwiIHJvbGU9XCJ0b29sdGlwXCI+PGRpdiBjbGFzcz1cInRvb2x0aXAtYXJyb3dcIj48L2Rpdj48ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PjwvZGl2PidcbiAgICAvLyAgICAgY29udGFpbmVyOiB0aGlzLFxuICAgIC8vICAgICBvZmZzZXQ6ICcwIC04MCUnLFxuICAgIC8vICAgICBkZWxheTogeyBoaWRlOiAxMDAwMDAwIH0gLy8gZm9yIGRlYnVnZ2luZ1xuICAgIC8vICAgfSk7XG4gICAgLy8gfSk7XG4gIH1cblxuICAvKipcbiAgICogTWFuYWdlIGl0ZW0gY2FyZCdzIG1vYmlsZSBpbWFnZXNcbiAgICovXG4gIF9tb2JpbGVJbWFnZXMgKCkge1xuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDk5Mikge1xuICAgICAgbGV0IG1vYmlsZVByb2R1Y3RJbWFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoc0l0ZW1DYXJkX19ib3R0b20taW1nJyk7XG4gICAgICBpZiAobW9iaWxlUHJvZHVjdEltYWdlcykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vYmlsZVByb2R1Y3RJbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgdG1wSW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgbGV0IGltZyA9IG1vYmlsZVByb2R1Y3RJbWFnZXNbaV07XG4gICAgICAgICAgdG1wSW1nLnNyYyA9IGltZy5zcmM7XG5cbiAgICAgICAgICBsZXQgJHdyYXBwZXIgPSAkKGltZy5wYXJlbnROb2RlKTtcblxuICAgICAgICAgIGxldCBpbWdDc3NTdHJpbmcgPSAnJztcblxuICAgICAgICAgIHRtcEltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgd3JhcHBlcldpZHRoID0gJHdyYXBwZXIub3V0ZXJXaWR0aCh0cnVlKTsvLy5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIGxldCB3cmFwcGVySGVpZ2h0ID0gJHdyYXBwZXIub3V0ZXJIZWlnaHQodHJ1ZSk7Ly8gLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIGxldCBpbWdXaWR0aCA9IHRtcEltZy5uYXR1cmFsV2lkdGg7XG4gICAgICAgICAgICBsZXQgaW1nSGVpZ2h0ID0gdG1wSW1nLm5hdHVyYWxIZWlnaHQ7XG4gICAgICAgICAgICBsZXQgYSA9IE1hdGgubWF4KHdyYXBwZXJIZWlnaHQsIGltZy5oZWlnaHQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3dyYXBwZXJIZWlnaHQnLCB3cmFwcGVySGVpZ2h0LCAnd3JhcHBlckhlaWdodCcsIHdyYXBwZXJIZWlnaHQpO1xuICAgICAgICAgICAgaWYgKGltZ0hlaWdodCA+IGltZ1dpZHRoKSB7XG4gICAgICAgICAgICAgIGltZ0Nzc1N0cmluZyArPSBgbWF4LXdpZHRoOiR7d3JhcHBlcldpZHRofXB4O2hlaWdodDphdXRvO2xlZnQ6MDt0b3A6NTAlO21hcmdpbi10b3A6LSR7aW1nLmhlaWdodCAvIDJ9cHg7YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGltZ0Nzc1N0cmluZyArPSBgbWF4LWhlaWdodDoke3dyYXBwZXJIZWlnaHR9cHg7d2lkdGg6YXV0bztsZWZ0OjUwJTt0b3A6MDttYXJnaW4tbGVmdDotJHtpbWcud2lkdGggLyAyfXB4O2A7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGltZy5zdHlsZS5jc3NUZXh0ID0gaW1nQ3NzU3RyaW5nICsgJ29wYWNpdHk6MTsnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNYXRjaCB0aGUgaGVpZ2h0IG9mIHRoZSBpdGVtIGNhcmRzJyBjb2x1bW5zXG4gICAqL1xuICBfbWF0Y2hDb2xzSGVpZ2h0ICgpIHtcbiAgICBpZiAodGhpcy5fXyRpdGVtQ29scy5sZW5ndGgpIHtcbiAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+PSA5OTIpIHtcbiAgICAgICAgdGhpcy5fXyRpdGVtQ29scy5tYXRjaEhlaWdodCh7fSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9fJGl0ZW1Db2xzLm1hdGNoSGVpZ2h0KHsgcmVtb3ZlOiB0cnVlIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNYW5hZ2UgY2F0ZWdvcmllcyBzbGlkZXJcbiAgICovXG4gIF9tYW5hZ2VDYXRzU2xpZGVyICgpIHtcbiAgICBjb25zdCAkc3ViaGVhZGVyTGlzdCA9ICQoJy5hcHBTdWJoZWFkZXJfX2xpc3QnKTtcbiAgICBjb25zdCAkc3ViaGVhZGVyTGlua3MgPSAkKCcuYXBwU3ViaGVhZGVyX19saW5rJyk7XG4gICAgbGV0IHN1YmhlYWRlckxpc3RGdWxsV2lkdGggPSAwO1xuICAgIGxldCBjdXJyZW50TGlua0lkeDtcblxuICAgIGNvbnN0IF9tYXliZVNob3dIaW50U2Nyb2xscyA9IGZ1bmN0aW9uIChlLCBzbGljaywgY3VycmVudCwgbmV4dElkeCkge1xuICAgICAgaWYgKG5leHRJZHggPCAkc3ViaGVhZGVyTGlua3MubGVuZ3RoIC0gMykge1xuICAgICAgICAkc3ViaGVhZGVyTGlzdC5hZGRDbGFzcygnc2xpY2staGludC1uZXh0Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkc3ViaGVhZGVyTGlzdC5yZW1vdmVDbGFzcygnc2xpY2staGludC1uZXh0Jyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXh0SWR4ID4gMSkge1xuICAgICAgICAkc3ViaGVhZGVyTGlzdC5hZGRDbGFzcygnc2xpY2staGludC1wcmV2Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkc3ViaGVhZGVyTGlzdC5yZW1vdmVDbGFzcygnc2xpY2staGludC1wcmV2Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEkc3ViaGVhZGVyTGlzdC5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgJHN1YmhlYWRlckxpbmtzLmVhY2goKGlkeCwgaXRlbSkgPT4ge1xuICAgICAgbGV0ICRpdGVtID0gJChpdGVtKTtcbiAgICAgIHN1YmhlYWRlckxpc3RGdWxsV2lkdGggPSBzdWJoZWFkZXJMaXN0RnVsbFdpZHRoICsgJGl0ZW0ud2lkdGgoKTtcbiAgICAgIGlmICgkaXRlbS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgY3VycmVudExpbmtJZHggPSBpZHg7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBpZiB3ZSBoYXZlIGEgc2xpZGVyXG4gICAgaWYgKCRzdWJoZWFkZXJMaXN0LndpZHRoKCkgPCBzdWJoZWFkZXJMaXN0RnVsbFdpZHRoKSB7XG4gICAgICAvLyBqdXN0IHVwZGF0ZSB0aGUgY3VycmVudCBzbGlkZVxuICAgICAgaWYgKHRoaXMuX2NhdHNTbGlkZXIpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRMaW5rSWR4IHx8IGN1cnJlbnRMaW5rSWR4ID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fY2F0c1NsaWRlci50cmlnZ2VyKCdzbGlja0dvVG8nLCBjdXJyZW50TGlua0lkeCk7XG4gICAgICAgIH1cbiAgICAgIC8vIG9yIGluaXQgdGhlIHNsaWRlclxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fY2F0c1NsaWRlckh0bWxQcmVTbGljayA9ICRzdWJoZWFkZXJMaXN0Lmh0bWwoKTtcblxuICAgICAgICB0aGlzLl9jYXRzU2xpZGVyID0gJHN1YmhlYWRlckxpc3Quc2xpY2soe1xuICAgICAgICAgIC8vIHNsaWRlc1RvU2hvdzogNCwgLy8gJHN1YmhlYWRlckxpbmtzLmxlbmd0aCxcbiAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgICAvLyBjZW50ZXJQYWRkaW5nOiAwLFxuICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICBpbml0aWFsU2xpZGU6IGN1cnJlbnRMaW5rSWR4XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF9tYXliZVNob3dIaW50U2Nyb2xscyhudWxsLCBudWxsLCBudWxsLCBjdXJyZW50TGlua0lkeCk7XG5cbiAgICAgICAgdGhpcy5fY2F0c1NsaWRlci5vbignYmVmb3JlQ2hhbmdlJywgX21heWJlU2hvd0hpbnRTY3JvbGxzKTtcbiAgICAgIH1cbiAgICAvLyBpZiB3ZSBkb24ndCB3YW50IHRvIGhhdmUgYSBzbGlkZXJcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX2NhdHNTbGlkZXIpIHtcbiAgICAgICAgdGhpcy5fY2F0c1NsaWRlci5zbGljaygndW5zbGljaycpXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1oaW50LXByZXYnKVxuICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2staGludC1uZXh0Jyk7XG4gICAgICAgICRzdWJoZWFkZXJMaXN0Lmh0bWwodGhpcy5fY2F0c1NsaWRlckh0bWxQcmVTbGljayk7XG4gICAgICAgIHRoaXMuX2NhdHNTbGlkZXIgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGb3IgY2VudGVyZWQgbW9kYWxcbiAgICpcbiAgICogQHNlZSAgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQxMzc3NTAyLzE5Mzg5NzBcbiAgICovXG4gIF9pbml0TW9kYWxzICgpIHtcbiAgICAkKCcubW9kYWwtZGlhbG9nJykub24oJ2NsaWNrIHRhcCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGNvbnN0IF9fJG1vZGFsRGlhbG9nID0gJCh0aGlzKTtcbiAgICAgIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcygnbW9kYWwtZGlhbG9nJykpIHtcbiAgICAgICAgX18kbW9kYWxEaWFsb2cucGFyZW50KCkubW9kYWwoJ2hpZGUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0IGZvcm1zICh2YWxpZGF0aW9uKVxuICAgKi9cbiAgX2luaXRGb3JtcyAoKSB7XG4gICAgJCgnLmZvcm0tdmFsaWRhdGUnKS52YWxpZGF0ZSh7XG4gICAgICBlcnJvckNsYXNzOiAnaGFzLWRhbmdlcicsXG4gICAgICB2YWxpZENsYXNzOiAnaGFzLXN1Y2Nlc3MnLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXQgdGFibGVzXG4gICAqL1xuICBfaW5pdFRhYmxlcyAoKSB7XG4gICAgLy8gZGF0YWJsZSBvbiAnbXkgYWNjb3VudCcgcGFnZXNcbiAgICAkKCcuZGF0YXRhYmxlJykuRGF0YVRhYmxlKHtcbiAgICAgIHNlYXJjaGluZzogZmFsc2UsXG4gICAgICBvcmRlcmluZzogZmFsc2UsXG4gICAgICBkcmF3Q2FsbGJhY2s6IHRoaXMuX2luaXRUb29sdGlwcy5iaW5kKHRoaXMpXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdCBkcm9wZG93bnNcbiAgICovXG4gIF9pbml0RHJvcGRvd25zICgpIHtcbiAgICAvLyBkcm9wZG93blxuICAgICQoJyNoc0xhbmdfX2hlYWRlcicpXG4gICAgICAub24oJ3Nob3cuYnMuZHJvcGRvd24nLCAoKSA9PiB7XG4gICAgICAgICQoJyNoc0hlYWRlcicpLmFkZENsYXNzKCdsYXN0LWRyb3Bkb3duLW9wZW4nKTtcbiAgICAgIH0pXG4gICAgICAub24oJ2hpZGUuYnMuZHJvcGRvd24nLCAoKSA9PiB7XG4gICAgICAgICQoJyNoc0hlYWRlcicpLnJlbW92ZUNsYXNzKCdsYXN0LWRyb3Bkb3duLW9wZW4nKTtcbiAgICAgIH0pO1xuXG4gICAgLy8gJCgnLm5hdnNlbGVjdG9yJykgLy8gOTkxIGNoYW5nZSB0byA8b3B0aW9uPlxuICAgICQoJy5KU25hdnNlbF9fc2VsZWN0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy52YWx1ZTtcbiAgICAgIC8vIGdldEF0dHJpYnV0ZSgnZGF0YS1ocmVmJyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGNvcHlyaWdodCB5ZWFyXG4gICAqL1xuICBfdXBkYXRlQ29weXJpZ2h0WWVhcigpIHtcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtY29weXllYXInKTtcbiAgICBpZiAoZWwpIHtcbiAgICAgIGVsLmlubmVySFRNTCA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWNjb3VudCBtZW51XG4gICAqL1xuICBfYWNjb3VudE1lbnUgKCkge1xuICAgIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1teWFjY291bnRfYnRuJyk7XG4gICAgaWYgKGVsKSB7XG4gICAgICBlbC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2hzQWNjb3VudC0tbWVudS1vcGVuJyk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0IGF1dGhlbnRpY2F0aW9uIG1vZGFsc1xuICAgKi9cbiAgX2luaXRBdXRoTW9kYWwgKCkge1xuICAgIGxldCAkYXV0aE1vZGFsID0gJCgnI2hzQXV0aE1vZGFsJyk7XG4gICAgdGhpcy5fXyRhdXRoTW9kYWwgPSAkYXV0aE1vZGFsO1xuICAgIGlmICghJGF1dGhNb2RhbC5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAkYXV0aE1vZGFsLm9uKCdzaG93LmJzLm1vZGFsJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnYXBwQXV0aE1vZGFsLS1vcGVuJyk7XG4gICAgfSk7XG4gICAgJGF1dGhNb2RhbC5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnYXBwQXV0aE1vZGFsLS1vcGVuJyk7XG4gICAgfSk7XG4gICAgJGF1dGhNb2RhbC5tb2RhbCgnaGlkZScpO1xuICAgIC8vICRhdXRoTW9kYWwubW9kYWwoJ2hpZGUnKTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1hdXRobW9kYWxdJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGxldCBidG4gPSB0aGlzO1xuICAgICAgbGV0ICRidG4gPSAkKHRoaXMpO1xuICAgICAgbGV0IHZpZXcgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1hdXRobW9kYWwnKTtcbiAgICAgIGlmICghdmlldykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2BkYXRhLWF1dGhtb2RhbGAgbXVzdCBoYXZlIGEgdmFsdWUgKGUuZy4gYGxvZ2luYCBvciBgcmVnaXN0ZXJgKScpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAkYXV0aE1vZGFsLmF0dHIoJ2RhdGEtdmlldycsIHZpZXcpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgJGF1dGhNb2RhbC5tb2RhbCgnc2hvdycpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9tcHQgbG9naW4gbW9kYWxcbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgcHJvbXB0TG9naW4gKCkge1xuICAgIGlmICh0aGlzLl9fJGF1dGhNb2RhbCkge1xuICAgICAgdGhpcy5fXyRhdXRoTW9kYWwuYXR0cignZGF0YS12aWV3JywgJ2xvZ2luJyk7XG4gICAgICB0aGlzLl9fJGF1dGhNb2RhbC5tb2RhbCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9tcHQgcmVnaXN0ZXIgbW9kYWxcbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgcHJvbXB0UmVnaXN0ZXIgKCkge1xuICAgIGlmICh0aGlzLl9fJGF1dGhNb2RhbCkge1xuICAgICAgdGhpcy5fXyRhdXRoTW9kYWwuYXR0cignZGF0YS12aWV3JywgJ3JlZ2lzdGVyJyk7XG4gICAgICB0aGlzLl9fJGF1dGhNb2RhbC5tb2RhbCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgVUkgKEVyd2luIGNhbGwncyB0aGlzIHdoZW4gb3BlbmluZyB0aGUgaXRlbSBtb2RhbClcbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgdXBkYXRlVUkgKCkge1xuICAgIGl0ZW1EZXRhaWwuJG9uUmVhZHkoKTtcbiAgfVxufVxuXG4vLyBleHBvcnQgdG8gcHVibGljIEFQSVxuYXBpWydhcHAnXSA9IG5ldyBBcHAoKTtcbiJdLCJuYW1lcyI6WyJjb25zdCIsImxldCIsInRoaXMiLCIkIiwiYXBpIiwiaSJdLCJtYXBwaW5ncyI6Ijs7OztFQUFBOzs7Ozs7O0FBT0FBLE1BQU0sSUFBSSxHQUFHLFdBQUUsQ0FBQyxFQUFFOzs7Ozs7Ozs7SUFTaEJDLElBQUksVUFBVSxHQUFHLE1BQUs7O0lBRXRCRCxJQUFNLE9BQU8sR0FBRyxRQUFP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QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzlELElBQVEsY0FBYyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzlELElBQVEsWUFBWSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFELElBQVEsV0FBVyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDOztJQUV4RCxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLElBQU0sVUFBVSxHQUFHLGNBQWMsQ0FBQztJQUNsQyxJQUFNLFFBQVEsR0FBRyxZQUFZLENBQUM7SUFDOUIsSUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDOztJQUU1QixJQUFNLFVBQVUsS0FBSyxDQUFDLENBQUMsRUFBRTtNQUN2QixVQUFZLEdBQUcsRUFBRSxDQUFDO01BQ2xCLFVBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDOztNQUU5RCxJQUFNLFVBQVUsS0FBSyxDQUFDLENBQUMsRUFBRTtRQUN2QixVQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLFFBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDOztRQUUxRCxJQUFNLFFBQVEsS0FBSyxDQUFDLENBQUMsRUFBRTtVQUNyQixRQUFV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