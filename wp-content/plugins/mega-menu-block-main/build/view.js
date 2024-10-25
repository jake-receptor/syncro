import*as e from"@wordpress/interactivity";var t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const n=(u={getContext:()=>e.getContext,getElement:()=>e.getElement,store:()=>e.store},d={},t.d(d,u),d),{state:o,actions:s}=(0,n.store)("outermost/mega-menu",{state:{get isMenuOpen(){return Object.values(o.menuOpenedBy).filter(Boolean).length>0},get menuOpenedBy(){return(0,n.getContext)().menuOpenedBy}},actions:{toggleMenuOnClick(){const e=(0,n.getContext)(),{ref:t}=(0,n.getElement)();console.log("toggleMenuOnClick",t),window.document.activeElement!==t&&t.focus(),o.menuOpenedBy.click||o.menuOpenedBy.focus?(s.closeMenu("click"),s.closeMenu("focus")):(e.previousFocus=t,s.openMenu("click"))},closeMenuOnClick(){console.log("closeMenuOnClick"),s.closeMenu("click"),s.closeMenu("focus")},handleMenuKeydown(e){console.log("handleMenuKeydown"),o.menuOpenedBy.click&&"Escape"===e?.key&&(s.closeMenu("click"),s.closeMenu("focus"))},handleMenuFocusout(e){console.log("handleMenuFocusout");const t=(0,n.getContext)(),o=t.megaMenu?.querySelector(".wp-block-outermost-mega-menu__menu-container");(null===e.relatedTarget||!o?.contains(e.relatedTarget)&&e.target!==window.document.activeElement)&&(s.closeMenu("click"),s.closeMenu("focus"))},openMenu(e="click"){console.log("openMenu",e);const{ref:t}=(0,n.getElement)();console.log("menuOpenedOn",t),o.menuOpenedBy[e]=!0;const s=t?.closest("header");s?.classList.add("mega-menu-open"),document.body.classList.add("mega-menu-open")},closeMenu(e="click"){const t=(0,n.getContext)(),{ref:s}=(0,n.getElement)();console.log("closeMenu",e),console.log("menuClosedOn",s),o.menuOpenedBy[e]=!1;const l=s?.closest("header");l?.classList.remove("mega-menu-open"),document.body.classList.remove("mega-menu-open"),o.isMenuOpen||(t.megaMenu?.contains(window.document.activeElement)&&t.previousFocus?.focus(),t.previousFocus=null,t.megaMenu=null)}},callbacks:{initMenu(){const e=(0,n.getContext)(),{ref:t}=(0,n.getElement)();o.isMenuOpen&&(e.megaMenu=t)}}}),l=window.getComputedStyle(document.body),c=l.getPropertyValue("--wp--style--root--padding-left").trim(),i=l.getPropertyValue("--wp--style--root--padding-left").trim();var u,d;function a(){const e=r(c),t=r(i);document.querySelectorAll(".wp-block-outermost-mega-menu__menu-container").forEach((n=>{const o=n.closest(".wp-block-navigation");if(!o)return;let s="left";o.classList.contains("items-justified-center")||o.classList.contains("items-justified-space-between")?s="center":o.classList.contains("items-justified-right")&&(s="right"),n.classList.contains("menu-justified-center")?s="center":(n.classList.contains("menu-justified-right")||n.classList.contains("menu-justified-left"))&&(s="right");const l=window.innerWidth-t-e,c=window.innerWidth-document.body.clientWidth,i=n.offsetWidth;let u="none";n.classList.contains("menu-width-full")?u="full":n.classList.contains("menu-width-wide")&&(u="wide");const d=n.getBoundingClientRect(),a=o.getBoundingClientRect(),r=a.left<=e?e-a.left:a.left-e,m=(l-i)/2;"center"===s?"none"===u&&i>l?(n.style.width=`${l+c}px`,n.style.left=`-${r+c}px`):d.left>0&&m>=d.left?n.style.left="":r>=m?(n.style.width="",n.style.left=`-${r-m+c}px`):(n.style.width="",n.style.left=m-r+"px"):"left"!==s&&"right"!==s||("none"===u&&i>l?(n.style.width=`${l}px`,n.style.left=`${r}px`):(n.style.width="",d.left<=0?n.style.left=`${r}px`:n.style.left=""))}))}function r(e){const t=document.createElement("div");t.style.width=e,document.body.appendChild(t);const n=window.getComputedStyle(t).width;return document.body.removeChild(t),parseFloat(n)}window.addEventListener("resize",a),"complete"===document.readyState?a():window.addEventListener("load",a);