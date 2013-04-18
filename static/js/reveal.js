/*!
 * reveal.js 2.4.0 (2013-04-18, 08:51)
 * http://lab.hakim.se/reveal-js
 * MIT licensed
 *
 * Copyright (C) 2013 Hakim El Hattab, http://hakim.se
 */
var Reveal=function(){"use strict";function e(e){return qt||At?(window.addEventListener("load",y,!1),l(yt,e),n(),r(),void 0):(document.body.setAttribute("class","no-transforms"),void 0)}function t(){if(St.theme=document.querySelector("#theme"),St.wrapper=document.querySelector(".reveal"),St.slides=document.querySelector(".reveal .slides"),!St.wrapper.querySelector(".progress")){var e=document.createElement("div");e.classList.add("progress"),e.innerHTML="<span></span>",St.wrapper.appendChild(e)}if(!St.wrapper.querySelector(".controls")){var t=document.createElement("aside");t.classList.add("controls"),t.innerHTML='<div class="navigate-left"></div><div class="navigate-right"></div><div class="navigate-up"></div><div class="navigate-down"></div>',St.wrapper.appendChild(t)}if(!St.wrapper.querySelector(".state-background")){var n=document.createElement("div");n.classList.add("state-background"),St.wrapper.appendChild(n)}if(!St.wrapper.querySelector(".pause-overlay")){var r=document.createElement("div");r.classList.add("pause-overlay"),St.wrapper.appendChild(r)}St.progress=document.querySelector(".reveal .progress"),St.progressbar=document.querySelector(".reveal .progress span"),yt.controls&&(St.controls=document.querySelector(".reveal .controls"),St.controlsLeft=d(document.querySelectorAll(".navigate-left")),St.controlsRight=d(document.querySelectorAll(".navigate-right")),St.controlsUp=d(document.querySelectorAll(".navigate-up")),St.controlsDown=d(document.querySelectorAll(".navigate-down")),St.controlsPrev=d(document.querySelectorAll(".navigate-prev")),St.controlsNext=d(document.querySelectorAll(".navigate-next")))}function n(){/iphone|ipod|android/gi.test(navigator.userAgent)&&!/crios/gi.test(navigator.userAgent)&&(window.addEventListener("load",v,!1),window.addEventListener("orientationchange",v,!1))}function r(){function e(){n.length&&head.js.apply(null,n),o()}for(var t=[],n=[],r=0,s=yt.dependencies.length;s>r;r++){var a=yt.dependencies[r];(!a.condition||a.condition())&&(a.async?n.push(a.src):t.push(a.src),"function"==typeof a.callback&&head.ready(a.src.match(/([\w\d_\-]*)\.?js$|[^\\\/]*$/i)[0],a.callback))}t.length?(head.ready(e),head.js.apply(null,t)):e()}function o(){t(),s(),O(),setTimeout(function(){f("ready",{indexh:wt,indexv:Lt,currentSlide:vt})},1)}function s(e){if(St.wrapper.classList.remove(yt.transition),"object"==typeof e&&l(yt,e),At===!1&&(yt.transition="linear"),St.wrapper.classList.add(yt.transition),St.wrapper.setAttribute("data-transition-speed",yt.transitionSpeed),St.controls&&(St.controls.style.display=yt.controls&&St.controls?"block":"none"),St.progress&&(St.progress.style.display=yt.progress&&St.progress?"block":"none"),yt.rtl?St.wrapper.classList.add("rtl"):St.wrapper.classList.remove("rtl"),yt.center?St.wrapper.classList.add("center"):St.wrapper.classList.remove("center"),yt.mouseWheel?(document.addEventListener("DOMMouseScroll",et,!1),document.addEventListener("mousewheel",et,!1)):(document.removeEventListener("DOMMouseScroll",et,!1),document.removeEventListener("mousewheel",et,!1)),yt.rollingLinks?p():m(),yt.theme&&St.theme){var t=St.theme.getAttribute("href"),n=/[^\/]*?(?=\.css)/,r=t.match(n)[0];yt.theme!==r&&(t=t.replace(n,yt.theme),St.theme.setAttribute("href",t))}a()}function a(){c(),i(),y(),gt=yt.autoSlide,I()}function i(){Dt=!0,window.addEventListener("hashchange",ct,!1),window.addEventListener("resize",lt,!1),yt.touch&&(St.wrapper.addEventListener("touchstart",Z,!1),St.wrapper.addEventListener("touchmove",Q,!1),St.wrapper.addEventListener("touchend",V,!1),window.navigator.msPointerEnabled&&(St.wrapper.addEventListener("MSPointerDown",B,!1),St.wrapper.addEventListener("MSPointerMove",G,!1),St.wrapper.addEventListener("MSPointerUp",J,!1))),yt.keyboard&&document.addEventListener("keydown",$,!1),yt.progress&&St.progress&&St.progress.addEventListener("click",tt,!1),yt.controls&&St.controls&&["touchstart","click"].forEach(function(e){St.controlsLeft.forEach(function(t){t.addEventListener(e,nt,!1)}),St.controlsRight.forEach(function(t){t.addEventListener(e,rt,!1)}),St.controlsUp.forEach(function(t){t.addEventListener(e,ot,!1)}),St.controlsDown.forEach(function(t){t.addEventListener(e,st,!1)}),St.controlsPrev.forEach(function(t){t.addEventListener(e,at,!1)}),St.controlsNext.forEach(function(t){t.addEventListener(e,it,!1)})})}function c(){Dt=!1,document.removeEventListener("keydown",$,!1),window.removeEventListener("hashchange",ct,!1),window.removeEventListener("resize",lt,!1),St.wrapper.removeEventListener("touchstart",Z,!1),St.wrapper.removeEventListener("touchmove",Q,!1),St.wrapper.removeEventListener("touchend",V,!1),window.navigator.msPointerEnabled&&(St.wrapper.removeEventListener("MSPointerDown",B,!1),St.wrapper.removeEventListener("MSPointerMove",G,!1),St.wrapper.removeEventListener("MSPointerUp",J,!1)),yt.progress&&St.progress&&St.progress.removeEventListener("click",tt,!1),yt.controls&&St.controls&&["touchstart","click"].forEach(function(e){St.controlsLeft.forEach(function(t){t.removeEventListener(e,nt,!1)}),St.controlsRight.forEach(function(t){t.removeEventListener(e,rt,!1)}),St.controlsUp.forEach(function(t){t.removeEventListener(e,ot,!1)}),St.controlsDown.forEach(function(t){t.removeEventListener(e,st,!1)}),St.controlsPrev.forEach(function(t){t.removeEventListener(e,at,!1)}),St.controlsNext.forEach(function(t){t.removeEventListener(e,it,!1)})})}function l(e,t){for(var n in t)e[n]=t[n]}function d(e){return Array.prototype.slice.call(e)}function u(e,t){var n=e.x-t.x,r=e.y-t.y;return Math.sqrt(n*n+r*r)}function v(){0===window.orientation?(document.documentElement.style.overflow="scroll",document.body.style.height="120%"):(document.documentElement.style.overflow="",document.body.style.height="100%"),setTimeout(function(){window.scrollTo(0,1)},10)}function f(e,t){var n=document.createEvent("HTMLEvents",1,2);n.initEvent(e,!0,!0),l(n,t),St.wrapper.dispatchEvent(n)}function p(){if(At&&!("msPerspective"in document.body.style))for(var e=document.querySelectorAll(ft+" a:not(.image)"),t=0,n=e.length;n>t;t++){var r=e[t];if(!(!r.textContent||r.querySelector("*")||r.className&&r.classList.contains(r,"roll"))){var o=document.createElement("span");o.setAttribute("data-title",r.text),o.innerHTML=r.innerHTML,r.classList.add("roll"),r.innerHTML="",r.appendChild(o)}}}function m(){for(var e=document.querySelectorAll(ft+" a.roll"),t=0,n=e.length;n>t;t++){var r=e[t],o=r.querySelector("span");o&&(r.classList.remove("roll"),r.innerHTML=o.innerHTML)}}function h(e){var t=d(e);return t.forEach(function(e,t){e.hasAttribute("data-fragment-index")||e.setAttribute("data-fragment-index",t)}),t.sort(function(e,t){return e.getAttribute("data-fragment-index")-t.getAttribute("data-fragment-index")}),t}function y(){if(St.wrapper){var e=St.wrapper.offsetWidth,t=St.wrapper.offsetHeight;e-=t*yt.margin,t-=t*yt.margin;var n=yt.width,r=yt.height;if("string"==typeof n&&/%$/.test(n)&&(n=parseInt(n,10)/100*e),"string"==typeof r&&/%$/.test(r)&&(r=parseInt(r,10)/100*t),St.slides.style.width=n+"px",St.slides.style.height=r+"px",Et=Math.min(e/n,t/r),Et=Math.max(Et,yt.minScale),Et=Math.min(Et,yt.maxScale),void 0===St.slides.style.zoom||navigator.userAgent.match(/(iphone|ipod|ipad|android)/gi)){var o="translate(-50%, -50%) scale("+Et+") translate(50%, 50%)";St.slides.style.WebkitTransform=o,St.slides.style.MozTransform=o,St.slides.style.msTransform=o,St.slides.style.OTransform=o,St.slides.style.transform=o}else St.slides.style.zoom=Et;for(var s=d(document.querySelectorAll(ft)),a=0,i=s.length;i>a;a++){var c=s[a];"none"!==c.style.display&&(c.style.top=yt.center?c.classList.contains("stack")?0:Math.max(-(c.offsetHeight/2)-20,-r/2)+"px":"")}}}function g(e,t){"object"==typeof e&&"function"==typeof e.setAttribute&&e.setAttribute("data-previous-indexv",t||0)}function w(e){return"object"==typeof e&&"function"==typeof e.setAttribute&&e.classList.contains("stack")?parseInt(e.getAttribute("data-previous-indexv")||0,10):0}function L(){if(yt.overview){z();var e=St.wrapper.classList.contains("overview");St.wrapper.classList.add("overview"),St.wrapper.classList.remove("exit-overview"),clearTimeout(Mt),clearTimeout(Pt),Mt=setTimeout(function(){for(var t=document.querySelectorAll(pt),n=0,r=t.length;r>n;n++){var o=t[n],s="translateZ(-2500px) translate("+105*(n-wt)+"%, 0%)";if(o.setAttribute("data-index-h",n),o.style.display="block",o.style.WebkitTransform=s,o.style.MozTransform=s,o.style.msTransform=s,o.style.OTransform=s,o.style.transform=s,o.classList.contains("stack"))for(var a=o.querySelectorAll("section"),i=0,c=a.length;c>i;i++){var l=n===wt?Lt:w(o),d=a[i],u="translate(0%, "+105*(i-l)+"%)";d.setAttribute("data-index-h",n),d.setAttribute("data-index-v",i),d.style.display="block",d.style.WebkitTransform=u,d.style.MozTransform=u,d.style.msTransform=u,d.style.OTransform=u,d.style.transform=u,d.addEventListener("click",dt,!0)}else o.addEventListener("click",dt,!0)}y(),e||f("overviewshown",{indexh:wt,indexv:Lt,currentSlide:vt})},10)}}function b(){if(yt.overview){clearTimeout(Mt),clearTimeout(Pt),St.wrapper.classList.remove("overview"),St.wrapper.classList.add("exit-overview"),Pt=setTimeout(function(){St.wrapper.classList.remove("exit-overview")},10);for(var e=d(document.querySelectorAll(ft)),t=0,n=e.length;n>t;t++){var r=e[t];r.style.display="",r.style.WebkitTransform="",r.style.MozTransform="",r.style.msTransform="",r.style.OTransform="",r.style.transform="",r.removeEventListener("click",dt,!0)}M(wt,Lt),I(),f("overviewhidden",{indexh:wt,indexv:Lt,currentSlide:vt})}}function E(e){"boolean"==typeof e?e?L():b():S()?b():L()}function S(){return St.wrapper.classList.contains("overview")}function A(){var e=document.body,t=e.requestFullScreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullScreen;t&&t.apply(e)}function q(){var e=St.wrapper.classList.contains("paused");z(),St.wrapper.classList.add("paused"),e===!1&&f("paused")}function T(){var e=St.wrapper.classList.contains("paused");St.wrapper.classList.remove("paused"),I(),e&&f("resumed")}function k(){x()?T():q()}function x(){return St.wrapper.classList.contains("paused")}function M(e,t,n,r){ut=vt;var o=document.querySelectorAll(pt);void 0===t&&(t=w(o[e])),ut&&ut.parentNode&&ut.parentNode.classList.contains("stack")&&g(ut.parentNode,Lt);var s=bt.concat();bt.length=0;var a=wt,i=Lt;wt=P(pt,void 0===e?wt:e),Lt=P(mt,void 0===t?Lt:t),y();e:for(var c=0,l=bt.length;l>c;c++){for(var u=0;s.length>u;u++)if(s[u]===bt[c]){s.splice(u,1);continue e}document.documentElement.classList.add(bt[c]),f(bt[c])}for(;s.length;)document.documentElement.classList.remove(s.pop());S()&&L(),Y(1500);var v=o[wt],p=v.querySelectorAll("section");if(vt=p[Lt]||v,n!==void 0){var m=h(vt.querySelectorAll(".fragment"));d(m).forEach(function(e,t){n>t?e.classList.add("visible"):e.classList.remove("visible")})}wt!==a||Lt!==i?f("slidechanged",{indexh:wt,indexv:Lt,previousSlide:ut,currentSlide:vt,origin:r}):ut=null,ut&&(ut.classList.remove("present"),document.querySelector(ht).classList.contains("present")&&setTimeout(function(){var e,t=d(document.querySelectorAll(pt+".stack"));for(e in t)t[e]&&g(t[e],0)},0)),N(),D()}function P(e,t){var n=d(document.querySelectorAll(e)),r=n.length;if(r){yt.loop&&(t%=r,0>t&&(t=r+t)),t=Math.max(Math.min(t,r-1),0);for(var o=0;r>o;o++){var s=n[o];if(S()===!1){var a=Math.abs((t-o)%(r-3))||0;s.style.display=a>3?"none":"block"}n[o].classList.remove("past"),n[o].classList.remove("present"),n[o].classList.remove("future"),t>o?n[o].classList.add("past"):o>t&&n[o].classList.add("future"),s.querySelector("section")&&n[o].classList.add("stack")}n[t].classList.add("present");var i=n[t].getAttribute("data-state");i&&(bt=bt.concat(i.split(" ")));var c=n[t].getAttribute("data-autoslide");gt=c?parseInt(c,10):yt.autoSlide}else t=0;return t}function D(){if(yt.progress&&St.progress){var e=d(document.querySelectorAll(pt)),t=document.querySelectorAll(ft+":not(.stack)").length,n=0;e:for(var r=0;e.length>r;r++){for(var o=e[r],s=d(o.querySelectorAll("section")),a=0;s.length>a;a++){if(s[a].classList.contains("present"))break e;n++}if(o.classList.contains("present"))break;o.classList.contains("stack")===!1&&n++}St.progressbar.style.width=n/(t-1)*window.innerWidth+"px"}}function N(){if(yt.controls&&St.controls){var e=C();St.controlsLeft.concat(St.controlsRight).concat(St.controlsUp).concat(St.controlsDown).concat(St.controlsPrev).concat(St.controlsNext).forEach(function(e){e.classList.remove("enabled")}),e.left&&St.controlsLeft.forEach(function(e){e.classList.add("enabled")}),e.right&&St.controlsRight.forEach(function(e){e.classList.add("enabled")}),e.up&&St.controlsUp.forEach(function(e){e.classList.add("enabled")}),e.down&&St.controlsDown.forEach(function(e){e.classList.add("enabled")}),(e.left||e.up)&&St.controlsPrev.forEach(function(e){e.classList.add("enabled")}),(e.right||e.down)&&St.controlsNext.forEach(function(e){e.classList.add("enabled")})}}function C(){var e=document.querySelectorAll(pt),t=document.querySelectorAll(mt);return{left:wt>0||yt.loop,right:e.length-1>wt||yt.loop,up:Lt>0,down:t.length-1>Lt}}function O(){var e=window.location.hash,t=e.slice(2).split("/"),n=e.replace(/#|\//gi,"");if(isNaN(parseInt(t[0],10))&&n.length){var r=document.querySelector("#"+n);if(r){var o=Reveal.getIndices(r);M(o.h,o.v)}else M(wt,Lt)}else{var s=parseInt(t[0],10)||0,a=parseInt(t[1],10)||0;M(s,a)}}function Y(e){if(yt.history)if(clearTimeout(xt),"number"==typeof e)xt=setTimeout(Y,e);else{var t="/";vt&&"string"==typeof vt.getAttribute("id")?t="/"+vt.getAttribute("id"):((wt>0||Lt>0)&&(t+=wt),Lt>0&&(t+="/"+Lt)),window.location.hash=t}}function X(e){var t,n=wt,r=Lt;if(e){var o=!!e.parentNode.nodeName.match(/section/gi),s=o?e.parentNode:e,a=d(document.querySelectorAll(pt));n=Math.max(a.indexOf(s),0),o&&(r=Math.max(d(e.parentNode.querySelectorAll("section")).indexOf(e),0))}if(!e&&vt){var i=vt.querySelectorAll(".fragment.visible");i.length&&(t=i.length)}return{h:n,v:r,f:t}}function R(){if(document.querySelector(mt+".present")){var e=h(document.querySelectorAll(mt+".present .fragment:not(.visible)"));if(e.length)return e[0].classList.add("visible"),f("fragmentshown",{fragment:e[0]}),!0}else{var t=h(document.querySelectorAll(pt+".present .fragment:not(.visible)"));if(t.length)return t[0].classList.add("visible"),f("fragmentshown",{fragment:t[0]}),!0}return!1}function H(){if(document.querySelector(mt+".present")){var e=h(document.querySelectorAll(mt+".present .fragment.visible"));if(e.length)return e[e.length-1].classList.remove("visible"),f("fragmenthidden",{fragment:e[e.length-1]}),!0}else{var t=h(document.querySelectorAll(pt+".present .fragment.visible"));if(t.length)return t[t.length-1].classList.remove("visible"),f("fragmenthidden",{fragment:t[t.length-1]}),!0}return!1}function I(){clearTimeout(kt),!gt||x()||S()||(kt=setTimeout(K,gt))}function z(){clearTimeout(kt)}function U(){(S()||H()===!1)&&C().left&&M(wt-1)}function W(){(S()||R()===!1)&&C().right&&M(wt+1)}function _(){(S()||H()===!1)&&C().up&&M(wt,Lt-1)}function F(){(S()||R()===!1)&&C().down&&M(wt,Lt+1)}function j(){if(H()===!1)if(C().up)_();else{var e=document.querySelector(pt+".past:nth-child("+wt+")");e&&(Lt=e.querySelectorAll("section").length+1||void 0,wt--,M(wt,Lt))}}function K(){R()===!1&&(C().down?F():W()),I()}function $(e){document.activeElement;var t=!(!document.activeElement||!document.activeElement.type&&!document.activeElement.href&&"inherit"===document.activeElement.contentEditable);if(!(t||e.shiftKey&&32!==e.keyCode||e.altKey||e.ctrlKey||e.metaKey)){var n=!0;if(x()&&-1===[66,190,191].indexOf(e.keyCode))return!1;switch(e.keyCode){case 80:case 33:j();break;case 78:case 34:K();break;case 72:case 37:U();break;case 76:case 39:W();break;case 75:case 38:_();break;case 74:case 40:F();break;case 36:M(0);break;case 35:M(Number.MAX_VALUE);break;case 32:S()?b():e.shiftKey?j():K();break;case 13:S()?b():n=!1;break;case 66:case 190:case 191:k();break;case 70:A();break;default:n=!1}n?e.preventDefault():27===e.keyCode&&At&&(E(),e.preventDefault()),I()}}function Z(e){Nt.startX=e.touches[0].clientX,Nt.startY=e.touches[0].clientY,Nt.startCount=e.touches.length,2===e.touches.length&&yt.overview&&(Nt.startSpan=u({x:e.touches[1].clientX,y:e.touches[1].clientY},{x:Nt.startX,y:Nt.startY}))}function Q(e){if(Nt.handled)navigator.userAgent.match(/android/gi)&&e.preventDefault();else{var t=e.touches[0].clientX,n=e.touches[0].clientY;if(2===e.touches.length&&2===Nt.startCount&&yt.overview){var r=u({x:e.touches[1].clientX,y:e.touches[1].clientY},{x:Nt.startX,y:Nt.startY});Math.abs(Nt.startSpan-r)>Nt.threshold&&(Nt.handled=!0,Nt.startSpan>r?L():b()),e.preventDefault()}else if(1===e.touches.length&&2!==Nt.startCount){var o=t-Nt.startX,s=n-Nt.startY;o>Nt.threshold&&Math.abs(o)>Math.abs(s)?(Nt.handled=!0,U()):-Nt.threshold>o&&Math.abs(o)>Math.abs(s)?(Nt.handled=!0,W()):s>Nt.threshold?(Nt.handled=!0,_()):-Nt.threshold>s&&(Nt.handled=!0,F()),e.preventDefault()}}}function V(){Nt.handled=!1}function B(e){e.pointerType===e.MSPOINTER_TYPE_TOUCH&&(e.touches=[{clientX:e.clientX,clientY:e.clientY}],Z(e))}function G(e){e.pointerType===e.MSPOINTER_TYPE_TOUCH&&(e.touches=[{clientX:e.clientX,clientY:e.clientY}],Q(e))}function J(e){e.pointerType===e.MSPOINTER_TYPE_TOUCH&&(e.touches=[{clientX:e.clientX,clientY:e.clientY}],V(e))}function et(e){clearTimeout(Tt),Tt=setTimeout(function(){var t=e.detail||-e.wheelDelta;t>0?K():j()},100)}function tt(e){e.preventDefault();var t=d(document.querySelectorAll(pt)).length,n=Math.floor(e.clientX/St.wrapper.offsetWidth*t);M(n)}function nt(e){e.preventDefault(),U()}function rt(e){e.preventDefault(),W()}function ot(e){e.preventDefault(),_()}function st(e){e.preventDefault(),F()}function at(e){e.preventDefault(),j()}function it(e){e.preventDefault(),K()}function ct(){O()}function lt(){y()}function dt(e){if(Dt&&S()){e.preventDefault();for(var t=e.target;t&&!t.nodeName.match(/section/gi);)t=t.parentNode;if(t&&!t.classList.contains("disabled")&&(b(),t.nodeName.match(/section/gi))){var n=parseInt(t.getAttribute("data-index-h"),10),r=parseInt(t.getAttribute("data-index-v"),10);M(n,r)}}}var ut,vt,ft=".reveal .slides section",pt=".reveal .slides>section",mt=".reveal .slides>section.present>section",ht=".reveal .slides>section:first-child",yt={width:960,height:700,margin:.1,minScale:.2,maxScale:1,controls:!0,progress:!0,history:!1,keyboard:!0,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,autoSlide:0,mouseWheel:!1,rollingLinks:!0,theme:null,transition:"default",transitionSpeed:"default",dependencies:[]},gt=0,wt=0,Lt=0,bt=[],Et=1,St={},At="WebkitPerspective"in document.body.style||"MozPerspective"in document.body.style||"msPerspective"in document.body.style||"OPerspective"in document.body.style||"perspective"in document.body.style,qt="WebkitTransform"in document.body.style||"MozTransform"in document.body.style||"msTransform"in document.body.style||"OTransform"in document.body.style||"transform"in document.body.style,Tt=0,kt=0,xt=0,Mt=0,Pt=0,Dt=!1,Nt={startX:0,startY:0,startSpan:0,startCount:0,handled:!1,threshold:80};return{initialize:e,configure:s,slide:M,left:U,right:W,up:_,down:F,prev:j,next:K,prevFragment:H,nextFragment:R,navigateTo:M,navigateLeft:U,navigateRight:W,navigateUp:_,navigateDown:F,navigatePrev:j,navigateNext:K,layout:y,availableRoutes:C,toggleOverview:E,togglePause:k,isOverview:S,isPaused:x,addEventListeners:i,removeEventListeners:c,getIndices:X,getSlide:function(e,t){var n=document.querySelectorAll(pt)[e],r=n&&n.querySelectorAll("section");return t!==void 0?r?r[t]:void 0:n},getPreviousSlide:function(){return ut},getCurrentSlide:function(){return vt},getScale:function(){return Et},getConfig:function(){return yt},getQueryHash:function(){var e={};return location.search.replace(/[A-Z0-9]+?=(\w*)/gi,function(t){e[t.split("=").shift()]=t.split("=").pop()}),e},isFirstSlide:function(){return null==document.querySelector(ft+".past")?!0:!1},isLastSlide:function(){return vt&&vt.classList.contains(".stack")?null==vt.querySelector(ft+".future")?!0:!1:null==document.querySelector(ft+".future")?!0:!1},addEventListener:function(e,t,n){"addEventListener"in window&&(St.wrapper||document.querySelector(".reveal")).addEventListener(e,t,n)},removeEventListener:function(e,t,n){"addEventListener"in window&&(St.wrapper||document.querySelector(".reveal")).removeEventListener(e,t,n)}}}();
