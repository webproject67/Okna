!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);const r=n(2);r.keys().forEach(r),document.querySelectorAll("a").forEach(e=>e.addEventListener("click",e=>e.preventDefault()));const o=document.querySelectorAll(".sliders__item"),c=document.querySelectorAll(".sliders__btn");let s=0;const l=(e,t)=>{for(const e of c)e.classList.remove("sliders__btn--active");e.classList.add("sliders__btn--active");for(const e of o)e.classList.remove("sliders__item--active");o[t].classList.add("sliders__item--active")};c.forEach((e,t)=>{e.addEventListener("click",()=>l(e,t))}),setInterval(()=>{2==s++&&(s=0),l(c[s],s)},3e3);const i=document.querySelector(".forms__form"),u=i.querySelector(".forms__btn");i.addEventListener("submit",e=>{e.preventDefault(),u.style.display="none";const t=document.createElement("p");t.style.fonFamily="Exo2",t.style.color="#ffffff",t.style.fontSize="25px",t.style.fontWeight="700",t.style.textTransform="uppercase",t.textContent="Спасибо! Заявка отправлена!",i.insertBefore(t,null)});const f=document.querySelector(".scroll");let a;document.addEventListener("scroll",(function(){a=window.pageYOffset||document.documentElement.scrollTop,a>=900?f.classList.add("scroll--opacity"):f.classList.remove("scroll--opacity")}));const d=()=>{window.scrollBy(0,-100),a>0&&requestAnimationFrame(d)};f.addEventListener("click",(function(e){e.preventDefault(),d()}))},function(e,t,n){},function(e,t,n){var r={"./icon-scroll.svg":3};function o(e){var t=c(e);return n(t)}function c(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=c,e.exports=o,o.id=2},function(e,t,n){"use strict";n.r(t),t.default={id:"icon-scroll-usage",viewBox:"0 0 137.145 137.145",url:n.p+"img/svg/sprite.svg#icon-scroll",toString:function(){return this.url}}}]);