import*as e from"@wordpress/interactivity";var t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const n=(u={getContext:()=>e.getContext,getElement:()=>e.getElement,store:()=>e.store},r={},t.d(r,u),r),{state:o,actions:l}=(0,n.store)("cdc/mobile-menu-template-part",{state:{get isMenuOpen(){return Object.values(o.menuOpenedBy).filter(Boolean).length>0},get menuOpenedBy(){return(0,n.getContext)().menuOpenedBy},get roleAttribute(){return o.isMenuOpen?"dialog":null},get ariaModal(){return o.isMenuOpen?"true":null},get ariaLabel(){return(0,n.getContext)(),o.isMenuOpen?"Menu":null}},actions:{toggleMenuOnClick(){const e=(0,n.getContext)(),{ref:t}=(0,n.getElement)();window.document.activeElement!==t&&t.focus(),o.menuOpenedBy.click||o.menuOpenedBy.focus?(l.closeMenu("click"),l.closeMenu("focus")):(e.previousFocus=t,l.openMenu("click"))},closeMenuOnClick(){l.closeMenu("click"),l.closeMenu("focus")},handleMenuKeydown(e){o.menuOpenedBy.click&&"Escape"===e?.key&&(l.closeMenu("click"),l.closeMenu("focus"))},handleMenuFocusout(e){const t=(0,n.getContext)(),o=t.mobileModalMenu?.querySelector(".wp-block-cdc-mobile-menu-template-part__menu-container");null===e.relatedTarget||!o?.contains(e.relatedTarget)&&(e.target,window.document.activeElement)},openMenu(e="click"){o.menuOpenedBy[e]=!0,document.documentElement.classList.add("has-modal-open")},closeMenu(e="click"){const t=(0,n.getContext)();o.menuOpenedBy[e]=!1,o.isMenuOpen||(t.previousFocus=null,t.mobileModalMenu=null,document.documentElement.classList.remove("has-modal-open"))}},callbacks:{initMenu(){const e=(0,n.getContext)(),{ref:t}=(0,n.getElement)();o.isMenuOpen&&(e.mobileModalMenu=t)}}}),c=document.querySelector(".cdc-mobile-menu-template-part__menu-container"),s=document.querySelector(".cdc-mobile-menu-template-part__sticky-header");var u,r;let a=c.scrollTop;c.addEventListener("scroll",(()=>{if(c.scrollTop>0){let e=c.scrollTop;console.log(e),a>e?s.classList.add("scroll-show"):s.classList.remove("scroll-show"),e<64?s.classList.remove("scroll-show-shadow"):s.classList.add("scroll-show-shadow"),a=e}}));