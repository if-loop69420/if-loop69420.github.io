(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();const A={};let j=R;const w=1,_=2,O={owned:null,cleanups:null,context:null,owner:null};var h=null;let y=null,c=null,d=null,$=0;function k(e,n){const t=h,s=e.length===0,i=s?O:{owned:null,cleanups:null,context:null,owner:n||t},l=s?e:()=>e(()=>T(()=>L(i)));h=i;try{return C(l,!0)}finally{h=t}}function b(e,n,t){const s=H(e,n,!1,w);I(s)}function T(e){try{return e()}finally{}}function q(e,n,t){let s=e.value;return(!e.comparator||!e.comparator(s,n))&&(e.value=n,e.observers&&e.observers.length&&C(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i],f=y&&y.running;f&&y.disposed.has(l),(f&&!l.tState||!f&&!l.state)&&(l.pure?c.push(l):d.push(l),l.observers&&D(l)),f||(l.state=w)}if(c.length>1e6)throw c=[],new Error},!1)),n}function I(e){if(!e.fn)return;L(e);const n=h,t=$;h=e,G(e,e.value,t),h=n}function G(e,n,t){let s;try{s=e.fn(n)}catch(i){e.pure&&(e.state=w),F(i)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?q(e,s):e.value=s,e.updatedAt=t)}function H(e,n,t,s=w,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:h,context:null,pure:t};return h===null||h!==O&&(h.owned?h.owned.push(l):h.owned=[l]),l}function P(e){const n=y;if(e.state===0||n)return;if(e.state===_||n)return E(e);if(e.suspense&&T(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<$);)(e.state||n)&&t.push(e);for(let s=t.length-1;s>=0;s--)if(e=t[s],e.state===w||n)I(e);else if(e.state===_||n){const i=c;c=null,C(()=>E(e,t[0]),!1),c=i}}function C(e,n){if(c)return e();let t=!1;n||(c=[]),d?t=!0:d=[],$++;try{const s=e();return K(t),s}catch(s){c||(d=null),F(s)}}function K(e){if(c&&(R(c),c=null),e)return;const n=d;d=null,n.length&&C(()=>j(n),!1)}function R(e){for(let n=0;n<e.length;n++)P(e[n])}function E(e,n){const t=y;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===w||t?i!==n&&P(i):(i.state===_||t)&&E(i,n))}}function D(e){const n=y;for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];(!s.state||n)&&(s.state=_,s.pure?c.push(s):d.push(s),s.observers&&D(s))}}function L(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const l=i.pop(),f=t.observerSlots.pop();s<i.length&&(l.sourceSlots[f]=s,i[s]=l,t.observerSlots[s]=f)}}if(e.owned){for(n=0;n<e.owned.length;n++)L(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function Q(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function F(e){throw e=Q(e),e}function V(e,n){return T(()=>e(n||{}))}function W(e,n,t){let s=t.length,i=n.length,l=s,f=0,o=0,r=n[i-1].nextSibling,u=null;for(;f<i||o<l;){if(n[f]===t[o]){f++,o++;continue}for(;n[i-1]===t[l-1];)i--,l--;if(i===f){const a=l<s?o?t[o-1].nextSibling:t[l-o]:r;for(;o<l;)e.insertBefore(t[o++],a)}else if(l===o)for(;f<i;)(!u||!u.has(n[f]))&&n[f].remove(),f++;else if(n[f]===t[l-1]&&t[o]===n[i-1]){const a=n[--i].nextSibling;e.insertBefore(t[o++],n[f++].nextSibling),e.insertBefore(t[--l],a),n[i]=t[l]}else{if(!u){u=new Map;let p=o;for(;p<l;)u.set(t[p],p++)}const a=u.get(n[f]);if(a!=null)if(o<a&&a<l){let p=f,S=1,B;for(;++p<i&&p<l&&!((B=u.get(n[p]))==null||B!==a+S);)S++;if(S>a-o){const M=n[f];for(;o<a;)e.insertBefore(t[o++],M)}else e.replaceChild(t[o++],n[f++])}else f++;else n[f++].remove()}}}function J(e,n,t,s={}){let i;return k(l=>{i=l,n===document?e():Z(n,e(),n.firstChild?null:void 0,t)},s.owner),()=>{i(),n.textContent=""}}function X(e,n,t){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return t&&(i=i.firstChild),i}function Y(e,n,t){t==null?e.removeAttribute(n):e.setAttribute(n,t)}function m(e,n){n==null?e.removeAttribute("class"):e.className=n}function Z(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return v(e,n,s,t);b(i=>v(e,n(),i,t),s)}function v(e,n,t,s,i){for(A.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(n===t)return t;const l=typeof n,f=s!==void 0;if(e=f&&t[0]&&t[0].parentNode||e,l==="string"||l==="number"){if(A.context)return t;if(l==="number"&&(n=n.toString()),f){let o=t[0];o&&o.nodeType===3?o.data=n:o=document.createTextNode(n),t=g(e,t,s,o)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||l==="boolean"){if(A.context)return t;t=g(e,t,s)}else{if(l==="function")return b(()=>{let o=n();for(;typeof o=="function";)o=o();t=v(e,o,t,s)}),()=>t;if(Array.isArray(n)){const o=[],r=t&&Array.isArray(t);if(N(o,n,t,i))return b(()=>t=v(e,o,t,s,!0)),()=>t;if(A.context){if(!o.length)return t;for(let u=0;u<o.length;u++)if(o[u].parentNode)return t=o}if(o.length===0){if(t=g(e,t,s),f)return t}else r?t.length===0?U(e,o,s):W(e,t,o):(t&&g(e),U(e,o));t=o}else if(n instanceof Node){if(A.context&&n.parentNode)return t=f?[n]:n;if(Array.isArray(t)){if(f)return t=g(e,t,s,n);g(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function N(e,n,t,s){let i=!1;for(let l=0,f=n.length;l<f;l++){let o=n[l],r=t&&t[l];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))i=N(e,o,r)||i;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();i=N(e,Array.isArray(o)?o:[o],Array.isArray(r)?r:[r])||i}else e.push(o),i=!0;else{const u=String(o);r&&r.nodeType===3&&r.data===u?e.push(r):e.push(document.createTextNode(u))}}return i}function U(e,n,t=null){for(let s=0,i=n.length;s<i;s++)e.insertBefore(n[s],t)}function g(e,n,t,s){if(t===void 0)return e.textContent="";const i=s||document.createTextNode("");if(n.length){let l=!1;for(let f=n.length-1;f>=0;f--){const o=n[f];if(i!==o){const r=o.parentNode===e;!l&&!f?r?e.replaceChild(i,o):e.insertBefore(i,t):r&&o.remove()}else l=!0}}else e.insertBefore(i,t);return[i]}const z=""+new URL("logo-123b04bc.svg",import.meta.url).href,ee="_App_9g4xh_1",te="_logo_9g4xh_5",ne="_header_9g4xh_11",ie="_link_9g4xh_22",x={App:ee,logo:te,"logo-spin":"_logo-spin_9g4xh_1",header:ne,link:ie},se=X('<div><header><img alt="logo"><p>Edit <code>src/App.tsx</code> and save to reload.</p><a href="https://github.com/solidjs/solid" target="_blank" rel="noopener noreferrer">Learn Solid</a></header></div>'),le=()=>(()=>{const e=se.cloneNode(!0),n=e.firstChild,t=n.firstChild,s=t.nextSibling,i=s.nextSibling;return Y(t,"src",z),b(l=>{const f=x.App,o=x.header,r=x.logo,u=x.link;return f!==l._v$&&m(e,l._v$=f),o!==l._v$2&&m(n,l._v$2=o),r!==l._v$3&&m(t,l._v$3=r),u!==l._v$4&&m(i,l._v$4=u),l},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),e})();J(()=>V(le,{}),document.getElementById("root"));
