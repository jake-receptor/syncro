import*as e from"@wordpress/interactivity";var t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const n=(u={getContext:()=>e.getContext,getElement:()=>e.getElement,store:()=>e.store},a={},t.d(a,u),a),{state:o,actions:s}=(0,n.store)("outermost/mega-menu",{state:{get isMenuOpen(){return Object.values(o.menuOpenedBy).filter(Boolean).length>0},get menuOpenedBy(){return(0,n.getContext)().menuOpenedBy}},actions:{toggleMenuOnClick(){const e=(0,n.getContext)(),{ref:t}=(0,n.getElement)();window.document.activeElement!==t&&t.focus(),o.menuOpenedBy.click||o.menuOpenedBy.focus?(s.closeMenu("click"),s.closeMenu("focus")):(e.previousFocus=t,s.openMenu("click"))},closeMenuOnClick(){s.closeMenu("click"),s.closeMenu("focus")},handleMenuKeydown(e){o.menuOpenedBy.click&&"Escape"===e?.key&&(s.closeMenu("click"),s.closeMenu("focus"))},handleMenuFocusout(e){const t=(0,n.getContext)(),o=t.megaMenu?.querySelector(".wp-block-outermost-mega-menu__menu-container");(null===e.relatedTarget||!o?.contains(e.relatedTarget)&&e.target!==window.document.activeElement)&&(s.closeMenu("click"),s.closeMenu("focus"))},openMenu(e="click"){const{ref:t}=(0,n.getElement)();o.menuOpenedBy[e]=!0;const s=t?.closest("header");s?.classList.add("mega-menu-open")},closeMenu(e="click"){const t=(0,n.getContext)(),{ref:s}=(0,n.getElement)();o.menuOpenedBy[e]=!1;const l=s?.closest("header");l?.classList.remove("mega-menu-open"),o.isMenuOpen||(t.megaMenu?.contains(window.document.activeElement)&&t.previousFocus?.focus(),t.previousFocus=null,t.megaMenu=null)}},callbacks:{initMenu(){const e=(0,n.getContext)(),{ref:t}=(0,n.getElement)();o.isMenuOpen&&(e.megaMenu=t)}}}),l=window.getComputedStyle(document.body),c=l.getPropertyValue("--wp--style--root--padding-left").trim(),i=l.getPropertyValue("--wp--style--root--padding-left").trim();var u,a;function d(){const e=r(c),t=r(i);document.querySelectorAll(".wp-block-outermost-mega-menu__menu-container").forEach((n=>{const o=n.closest(".wp-block-navigation");if(!o)return;let s="left";o.classList.contains("items-justified-center")||o.classList.contains("items-justified-space-between")?s="center":o.classList.contains("items-justified-right")&&(s="right"),n.classList.contains("menu-justified-center")?s="center":(n.classList.contains("menu-justified-right")||n.classList.contains("menu-justified-left"))&&(s="right");const l=window.innerWidth-t-e,c=n.offsetWidth;let i="none";n.classList.contains("menu-width-full")?i="full":n.classList.contains("menu-width-wide")&&(i="wide");const u=n.getBoundingClientRect(),a=o.getBoundingClientRect(),d=a.left<=e?e-a.left:a.left-e,r=(l-c)/2;"center"===s?"none"===i&&c>l?(n.style.width=`${l}px`,n.style.left=`-${d}px`):u.left>0&&r>=u.left?n.style.left="":d>=r?(n.style.width="",n.style.left=`-${d-r}px`):(n.style.width="",n.style.left=r-d+"px"):"left"!==s&&"right"!==s||("none"===i&&c>l?(n.style.width=`${l}px`,n.style.left=`${d}px`):(n.style.width="",u.left<=0?n.style.left=`${d}px`:n.style.left=""))}))}function r(e){const t=document.createElement("div");t.style.width=e,document.body.appendChild(t);const n=window.getComputedStyle(t).width;return document.body.removeChild(t),parseFloat(n)}window.addEventListener("resize",d),"complete"===document.readyState?d():window.addEventListener("load",d);