(()=>{const e=document.querySelectorAll("header.wp-block-template-part"),t=new IntersectionObserver((([e])=>{console.log(e.intersectionRatio),e.target.classList.toggle("is-pinned",e.intersectionRatio<1),e.target.classList.toggle("utility-hidden",e.intersectionRatio<.5)}),{threshold:[.48,.9,1]});function o(e,t){let o=null;return function(){if(o)return;const n=this,r=arguments;o=setTimeout((()=>{e.call(n,...r),o=null}),t)}}e.forEach((e=>{t.observe(e)})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector("header.desktop-header-template-part.wp-block-template-part");e&&window.scrollY>34&&e.classList.add("is-pinned")}));const n=document.querySelectorAll("details.wp-block-details.query-taxonomy-accordion");if(n.length){const e=()=>{const{innerWidth:e}=window;n.forEach((t=>{e>781?t.setAttribute("open",""):t.removeAttribute("open")}))},t=o(e,500);window.addEventListener("resize",t),document.addEventListener("DOMContentLoaded",e)}const r=document.querySelectorAll("details.wp-block-details.is-style-taxonomy-accordion");r.length&&document.addEventListener("click",(function(e){if(!(window.innerWidth<=781))for(let t=0;t<r.length;t++)r[t].contains(e.target)||r[t].removeAttribute("open")}));const a=document.querySelector(".wp-block-ghub-content-toggle.is-style-active-on-load input.ghub-inactive");a&&!1===a.checked&&a.click();const i=document.querySelectorAll(".sticky-scroll");if(i){const e=()=>{i.forEach((e=>{let t=0;Array.from(e.children).forEach((e=>{t+=e.offsetHeight}));const o=document.querySelector("header.desktop-header-template-part");t>window.innerHeight-o.offsetHeight&&(e.style.maxHeight=window.innerHeight+"px",e.style.overflow="clip scroll")}))},t=o(e,500);window.addEventListener("resize",t),document.addEventListener("DOMContentLoaded",e)}var s=document.getElementsByTagName("iframe").length;for(m=0;m<s;m++){var c=document.getElementsByTagName("iframe")[m],d=c.src;(d.includes("parmail.syncromsp.com")||d.includes("go.pardot.com"))&&(c.className+=" pardot_form")}var l=document.location.href;l.includes("?")&&(l=l.split("?")[0]);var m,u="?"+localStorage.getItem("syn_p")+"&conversion_url="+l;for(s=document.getElementsByClassName("pardot_form").length,m=0;m<s;m++){var g=document.getElementsByClassName("pardot_form")[m].src+u;document.getElementsByClassName("pardot_form")[m].src=g}window.addEventListener("message",(function(e){if(e.data&&e.origin.includes("parmail.syncromsp.com")&&e.data.includes("px")){var t=document.getElementsByClassName("pardot_form");for(m=0;m<t.length;m++)t[m].contentWindow==e.source&&(t[m].height=e.data)}}),!0),window.addEventListener("message",(function(e){if(e.data&&e.origin.includes("parmail.syncromsp.com")){if(void 0===this.window.nab||!nab.trigger)return;if(nab.trigger("Conversion"),Array.isArray(e.data)&&"form-conversion"==e.data[0]){var t=e.data[1];console.log(t),window.dataLayer.push({event:t}),e.data[2]&&e.data[3]?window.location.replace(e.data[3]):console.log("No Redirect")}else e.data.includes("form-conversion:")&&(t=e.data.split(":")[1],console.log(t),window.dataLayer.push({event:t}))}}),!0)})();