const E=document.getElementById("starlight__sidebar"),S=E?.querySelector("sl-sidebar-state-persist"),v="sl-sidebar-state",w=()=>{let s=[];const e=S?.dataset.hash||"";try{const t=sessionStorage.getItem(v),n=JSON.parse(t||"{}");Array.isArray(n.open)&&n.hash===e&&(s=n.open)}catch{}return{hash:e,open:s,scroll:E?.scrollTop||0}},T=s=>{try{sessionStorage.setItem(v,JSON.stringify(s))}catch{}},L=()=>T(w()),A=(s,e)=>{const t=w();t.open[e]=s,T(t)};S?.addEventListener("click",s=>{if(!(s.target instanceof Element))return;const e=s.target.closest("summary")?.closest("details");if(!e)return;const t=e.querySelector("sl-sidebar-restore"),n=parseInt(t?.dataset.index||"");isNaN(n)||A(!e.open,n)});addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&L()});addEventListener("pageHide",L);class C extends HTMLElement{constructor(){super();const e=this.querySelector("select");e&&e.addEventListener("change",t=>{t.currentTarget instanceof HTMLSelectElement&&(window.location.pathname=t.currentTarget.value)})}}customElements.define("starlight-lang-select",C);const H="modulepreload",M=function(s){return"/biblioteca-doc/"+s},b={},P=function(e,t,n){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),c=r?.nonce||r?.getAttribute("nonce");o=Promise.allSettled(t.map(u=>{if(u=M(u),u in b)return;b[u]=!0;const i=u.endsWith(".css"),h=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${h}`))return;const d=document.createElement("link");if(d.rel=i?"stylesheet":H,i||(d.as="script"),d.crossOrigin="",d.href=u,c&&d.setAttribute("nonce",c),document.head.appendChild(d),i)return new Promise((l,f)=>{d.addEventListener("load",l),d.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${u}`)))})}))}function a(r){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=r,window.dispatchEvent(c),!c.defaultPrevented)throw r}return o.then(r=>{for(const c of r||[])c.status==="rejected"&&a(c.reason);return e().catch(a)})};class _ extends HTMLElement{constructor(){super();const e=this.querySelector("button[data-open-modal]"),t=this.querySelector("button[data-close-modal]"),n=this.querySelector("dialog"),o=this.querySelector(".dialog-frame"),a=l=>{("href"in(l.target||{})||document.body.contains(l.target)&&!o.contains(l.target))&&c()},r=l=>{n.showModal(),document.body.toggleAttribute("data-search-modal-open",!0),this.querySelector("input")?.focus(),l?.stopPropagation(),window.addEventListener("click",a)},c=()=>n.close();e.addEventListener("click",r),e.disabled=!1,t.addEventListener("click",c),n.addEventListener("close",()=>{document.body.toggleAttribute("data-search-modal-open",!1),window.removeEventListener("click",a)}),window.addEventListener("keydown",l=>{(l.metaKey===!0||l.ctrlKey===!0)&&l.key==="k"&&(n.open?c():r(),l.preventDefault())});let u={};try{u=JSON.parse(this.dataset.translations||"{}")}catch{}const d=this.dataset.stripTrailingSlash!==void 0?l=>l.replace(/(.)\/(#.*)?$/,"$1$2"):l=>l;window.addEventListener("DOMContentLoaded",()=>{(window.requestIdleCallback||(f=>setTimeout(f,1)))(async()=>{const{PagefindUI:f}=await P(async()=>{const{PagefindUI:g}=await import("./ui-core.BeTpZ9pc.js");return{PagefindUI:g}},[]);new f({element:"#starlight__search",baseUrl:"/biblioteca-doc",bundlePath:"/biblioteca-doc".replace(/\/$/,"")+"/pagefind/",showImages:!1,translations:u,showSubResults:!0,processResult:g=>{g.url=d(g.url),g.sub_results=g.sub_results.map(p=>(p.url=d(p.url),p))}})})})}}customElements.define("site-search",_);const x="starlight-theme",k=s=>s==="auto"||s==="dark"||s==="light"?s:"auto",I=()=>k(typeof localStorage<"u"&&localStorage.getItem(x));function O(s){typeof localStorage<"u"&&localStorage.setItem(x,s==="light"||s==="dark"?s:"")}const R=()=>matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";function y(s){StarlightThemeProvider.updatePickers(s),document.documentElement.dataset.theme=s==="auto"?R():s,O(s)}matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{I()==="auto"&&y("auto")});class B extends HTMLElement{constructor(){super(),y(I()),this.querySelector("select")?.addEventListener("change",e=>{e.currentTarget instanceof HTMLSelectElement&&y(k(e.currentTarget.value))})}}customElements.define("starlight-theme-select",B);class N extends HTMLElement{constructor(){super(),this.btn=this.querySelector("button"),this.btn.addEventListener("click",()=>this.toggleExpanded());const e=this.closest("nav");e&&e.addEventListener("keyup",t=>this.closeOnEscape(t))}setExpanded(e){this.setAttribute("aria-expanded",String(e)),document.body.toggleAttribute("data-mobile-menu-expanded",e)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(e){e.code==="Escape"&&(this.setExpanded(!1),this.btn.focus())}}customElements.define("starlight-menu-button",N);const $="_top";class q extends HTMLElement{constructor(){super(),this._current=this.querySelector('a[aria-current="true"]'),this.minH=parseInt(this.dataset.minH||"2",10),this.maxH=parseInt(this.dataset.maxH||"3",10),this.onIdle=e=>(window.requestIdleCallback||(t=>setTimeout(t,1)))(e),this.init=()=>{const e=[...this.querySelectorAll("a")],t=i=>{if(i instanceof HTMLHeadingElement){if(i.id===$)return!0;const h=i.tagName[1];if(h){const d=parseInt(h,10);if(d>=this.minH&&d<=this.maxH)return!0}}return!1},n=i=>{if(!i)return null;const h=i;for(;i;){if(t(i))return i;for(i=i.previousElementSibling;i?.lastElementChild;)i=i.lastElementChild;const d=n(i);if(d)return d}return n(h.parentElement)},o=i=>{for(const{isIntersecting:h,target:d}of i){if(!h)continue;const l=n(d);if(!l)continue;const f=e.find(g=>g.hash==="#"+encodeURIComponent(l.id));if(f){this.current=f;break}}},a=document.querySelectorAll("main [id], main [id] ~ *, main .content > *");let r;const c=()=>{r||(r=new IntersectionObserver(o,{rootMargin:this.getRootMargin()}),a.forEach(i=>r.observe(i)))};c();let u;window.addEventListener("resize",()=>{r&&(r.disconnect(),r=void 0),clearTimeout(u),u=setTimeout(()=>this.onIdle(c),200)})},this.onIdle(()=>this.init())}set current(e){e!==this._current&&(this._current&&this._current.removeAttribute("aria-current"),e.setAttribute("aria-current","true"),this._current=e)}getRootMargin(){const e=document.querySelector("header")?.getBoundingClientRect().height||0,t=this.querySelector("summary")?.getBoundingClientRect().height||0,n=e+t+32,o=n+53,a=document.documentElement.clientHeight;return`-${n}px 0% ${o-a}px`}}customElements.define("starlight-toc",q);class K extends q{set current(e){super.current=e;const t=this.querySelector(".display-current");t&&(t.textContent=e.textContent)}constructor(){super();const e=this.querySelector("details");if(!e)return;const t=()=>{e.open=!1};e.querySelectorAll("a").forEach(n=>{n.addEventListener("click",t)}),window.addEventListener("click",n=>{e.contains(n.target)||t()}),window.addEventListener("keydown",n=>{if(n.key==="Escape"&&e.open){const o=e.contains(document.activeElement);if(t(),o){const a=e.querySelector("summary");a&&a.focus()}}})}}customElements.define("mobile-starlight-toc",K);class m extends HTMLElement{static#t=new Map;#e;#s="starlight-synced-tabs__";constructor(){super();const e=this.querySelector('[role="tablist"]');if(this.tabs=[...e.querySelectorAll('[role="tab"]')],this.panels=[...this.querySelectorAll(':scope > [role="tabpanel"]')],this.#e=this.dataset.syncKey,this.#e){const t=m.#t.get(this.#e)??[];t.push(this),m.#t.set(this.#e,t)}this.tabs.forEach((t,n)=>{t.addEventListener("click",o=>{o.preventDefault();const a=e.querySelector('[aria-selected="true"]');o.currentTarget!==a&&this.switchTab(o.currentTarget,n)}),t.addEventListener("keydown",o=>{const a=this.tabs.indexOf(o.currentTarget),r=o.key==="ArrowLeft"?a-1:o.key==="ArrowRight"?a+1:o.key==="Home"?0:o.key==="End"?this.tabs.length-1:null;r!==null&&this.tabs[r]&&(o.preventDefault(),this.switchTab(this.tabs[r],r))})})}switchTab(e,t,n=!0){if(!e)return;const o=n?this.getBoundingClientRect().top:0;this.tabs.forEach(r=>{r.setAttribute("aria-selected","false"),r.setAttribute("tabindex","-1")}),this.panels.forEach(r=>{r.hidden=!0});const a=this.panels[t];a&&(a.hidden=!1),e.removeAttribute("tabindex"),e.setAttribute("aria-selected","true"),n&&(e.focus(),m.#o(this,e),window.scrollTo({top:window.scrollY+(this.getBoundingClientRect().top-o)}))}#r(e){!this.#e||typeof localStorage>"u"||localStorage.setItem(this.#s+this.#e,e)}static#o(e,t){const n=e.#e,o=m.#n(t);if(!n||!o)return;const a=m.#t.get(n);if(a){for(const r of a){if(r===e)continue;const c=r.tabs.findIndex(u=>m.#n(u)===o);c!==-1&&r.switchTab(r.tabs[c],c,!1)}e.#r(o)}}static#n(e){return e.textContent?.trim()}}customElements.define("starlight-tabs",m);export{P as _};
