import{t as c,b as l}from"../chunks/DcwDnKjg.js";import{i as h}from"../chunks/C0mxY9qE.js";import{r as v,G as b,ab as N,p as m,u as d,a5 as x,a6 as y,a4 as w,a7 as A}from"../chunks/tof2Osse.js";import{p as k,i as z}from"../chunks/02Xsc4JX.js";import{d as H,e as T}from"../chunks/kG1wJmMF.js";import{a as f}from"../chunks/BDvRVHtT.js";function g(t,e,a,r){var s=t.__attributes??(t.__attributes={});if(v){s[e]=t.getAttribute(e);return}s[e]!==(s[e]=a)&&(a==null?t.removeAttribute(e):typeof a!="string"&&$(t).includes(e)?t[e]=a:t.setAttribute(e,a))}var _=new Map;function $(t){var e=_.get(t.nodeName);if(e)return e;_.set(t.nodeName,e=[]);for(var a,r=t,s=Element.prototype;s!==r;){a=N(r);for(var i in a)a[i].set&&e.push(i);r=b(r)}return e}function Y(t,e,a){var r=t.__className,s=B(e);v&&t.className===s?t.__className=s:(r!==s||v&&t.className!==s)&&(e==null?t.removeAttribute("class"):t.className=s,t.__className=s)}function B(t,e){return(t??"")+""}let p=k({value:!0});function u(){p.value=!p.value}var E=c('<img class="theme-icon svelte-1czuxgx" alt="">'),G=c('<img class="theme-icon svelte-1czuxgx" alt="">'),I=c('<button type="button" id="theme-toggler" class="svelte-1czuxgx"><!></button>');function M(t,e){m(e,!1),h();var a=I();a.__click=function(...o){u==null||u.apply(this,o)};var r=x(a);{var s=o=>{var n=E();g(n,"src",`${f??""}/moon.svg`),l(o,n)},i=o=>{var n=G();g(n,"src",`${f??""}/sun.svg`),l(o,n)};z(r,o=>{p.value?o(s):o(i,!1)})}y(a),l(t,a),d()}H(["click"]);var R=c('<textarea id="input-area" placeholder="Type here..." class="svelte-r2duyp"></textarea>');function j(t){function e(r){const s=r.target,i=window.innerHeight*.75;s.style.height="auto",s.scrollHeight>i?(s.style.height=i+"px",s.style.overflowY="auto"):(s.style.height=s.scrollHeight+"px",s.style.overflowY="hidden")}var a=R();T("input",a,e),l(t,a)}var q=c("<div><!> <!></div>");function P(t,e){m(e,!1),h();var a=q(),r=x(a);j(r);var s=A(r,2);M(s,{}),y(a),w(()=>Y(a,`container ${(p.value?"dark":"light")??""} svelte-1gp9go0`)),l(t,a),d()}export{P as component};
