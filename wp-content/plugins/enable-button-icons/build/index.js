(()=>{var e={942:(e,t)=>{var n;!function(){"use strict";var l={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=c(e,o(n)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)l.call(e,n)&&e[n]&&(t=c(t,n));return t}function c(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()}},t={};function n(l){var a=t[l];if(void 0!==a)return a.exports;var o=t[l]={exports:{}};return e[l](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.React;var t=n(942),l=n.n(t);const a=window.wp.i18n,o=window.wp.hooks,c=window.wp.blockEditor,r=window.wp.components,i=window.wp.primitives,s=(0,e.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(i.Path,{d:"M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"})),h=(0,e.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(i.Path,{d:"M14.6 7l-1.2-1L8 12l5.4 6 1.2-1-4.6-5z"})),v=(0,e.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(i.Path,{d:"M10.8622 8.04053L14.2805 12.0286L10.8622 16.0167L9.72327 15.0405L12.3049 12.0286L9.72327 9.01672L10.8622 8.04053Z"})),w=(0,e.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(i.Path,{d:"m13.1 16-3.4-4 3.4-4 1.1 1-2.6 3 2.6 3-1.1 1z"})),m=(0,e.createElement)(i.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/SVG"},(0,e.createElement)(i.Path,{d:"M17.192 6.75L15.47 5.03l1.06-1.06 3.537 3.53-3.537 3.53-1.06-1.06 1.723-1.72h-3.19c-.602 0-.993.202-1.28.498-.309.319-.538.792-.695 1.383-.13.488-.222 1.023-.296 1.508-.034.664-.116 1.413-.303 2.117-.193.721-.513 1.467-1.068 2.04-.575.594-1.359.954-2.357.954H4v-1.5h4.003c.601 0 .993-.202 1.28-.498.308-.319.538-.792.695-1.383.149-.557.216-1.093.288-1.662l.039-.31a9.653 9.653 0 0 1 .272-1.653c.193-.722.513-1.467 1.067-2.04.576-.594 1.36-.954 2.358-.954h3.19zM8.004 6.75c.8 0 1.46.23 1.988.628a6.24 6.24 0 0 0-.684 1.396 1.725 1.725 0 0 0-.024-.026c-.287-.296-.679-.498-1.28-.498H4v-1.5h4.003zM12.699 14.726c-.161.459-.38.94-.684 1.396.527.397 1.188.628 1.988.628h3.19l-1.722 1.72 1.06 1.06L20.067 16l-3.537-3.53-1.06 1.06 1.723 1.72h-3.19c-.602 0-.993-.202-1.28-.498a1.96 1.96 0 0 1-.024-.026z"})),u=(0,e.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(i.Path,{d:"m14.5 6.5-1 1 3.7 3.7H4v1.6h13.2l-3.7 3.7 1 1 5.6-5.5z"})),b=(0,e.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(i.Path,{d:"M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"})),d=(0,e.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(i.Path,{d:"M6.6 6L5.4 7l4.5 5-4.5 5 1.1 1 5.5-6-5.4-6zm6 0l-1.1 1 4.5 5-4.5 5 1.1 1 5.5-6-5.5-6z"})),p=(0,e.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(i.Path,{d:"M11.6 7l-1.1-1L5 12l5.5 6 1.1-1L7 12l4.6-5zm6 0l-1.1-1-5.5 6 5.5 6 1.1-1-4.6-5 4.6-5z"})),g=(0,e.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(i.Path,{d:"M18 11.3l-1-1.1-4 4V3h-1.5v11.3L7 10.2l-1 1.1 6.2 5.8 5.8-5.8zm.5 3.7v3.5h-13V15H4v5h16v-5h-1.5z"})),E=(0,e.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(i.Path,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"})),f=(0,e.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(i.Path,{d:"M11 14.5l1.1 1.1 3-3 .5-.5-.6-.6-3-3-1 1 1.7 1.7H5v1.5h7.7L11 14.5zM16.8 5h-7c-1.1 0-2 .9-2 2v1.5h1.5V7c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v10c0 .3-.2.5-.5.5h-7c-.3 0-.5-.2-.5-.5v-1.5H7.8V17c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2z"})),_=(0,e.createElement)(i.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)(i.Path,{d:"M17 10h-1.2V7c0-2.1-1.7-3.8-3.8-3.8-2.1 0-3.8 1.7-3.8 3.8v3H7c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h10c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1zM9.8 7c0-1.2 1-2.2 2.2-2.2 1.2 0 2.2 1 2.2 2.2v3H9.8V7zm6.7 11.5h-9v-7h9v7z"})),x=(0,e.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(i.Path,{fillRule:"evenodd",d:"M7.25 16.437a6.5 6.5 0 1 1 9.5 0V16A2.75 2.75 0 0 0 14 13.25h-4A2.75 2.75 0 0 0 7.25 16v.437Zm1.5 1.193a6.47 6.47 0 0 0 3.25.87 6.47 6.47 0 0 0 3.25-.87V16c0-.69-.56-1.25-1.25-1.25h-4c-.69 0-1.25.56-1.25 1.25v1.63ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",clipRule:"evenodd"})),M=(0,e.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(i.Path,{d:"M17.3 10.1c0-2.5-2.1-4.4-4.8-4.4-2.2 0-4.1 1.4-4.6 3.3h-.2C5.7 9 4 10.7 4 12.8c0 2.1 1.7 3.8 3.7 3.8h9c1.8 0 3.2-1.5 3.2-3.3.1-1.6-1.1-2.9-2.6-3.2zm-.5 5.1h-9c-1.2 0-2.2-1.1-2.2-2.3s1-2.4 2.2-2.4h1.3l.3-1.1c.4-1.3 1.7-2.2 3.2-2.2 1.8 0 3.3 1.3 3.3 2.9v1.3l1.3.2c.8.1 1.4.9 1.4 1.8-.1 1-.9 1.8-1.8 1.8z"})),z=(0,e.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(i.Path,{d:"M17.3 10.1c0-2.5-2.1-4.4-4.8-4.4-2.2 0-4.1 1.4-4.6 3.3h-.2C5.7 9 4 10.7 4 12.8c0 2.1 1.7 3.8 3.7 3.8h9c1.8 0 3.2-1.5 3.2-3.3.1-1.6-1.1-2.9-2.6-3.2zm-.5 5.1h-4v-2.4L14 14l1-1-3-3-3 3 1 1 1.2-1.2v2.4H7.7c-1.2 0-2.2-1.1-2.2-2.3s1-2.4 2.2-2.4H9l.3-1.1c.4-1.3 1.7-2.2 3.2-2.2 1.8 0 3.3 1.3 3.3 2.9v1.3l1.3.2c.8.1 1.4.9 1.4 1.8 0 1-.8 1.8-1.7 1.8z"})),P=(0,e.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(i.Path,{d:"M12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zM3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 8.75a1.5 1.5 0 01.167 2.99c-.465.052-.917.44-.917 1.01V14h1.5v-.845A3 3 0 109 10.25h1.5a1.5 1.5 0 011.5-1.5zM11.25 15v1.5h1.5V15h-1.5z"})),V=(0,e.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(i.Path,{d:"M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"})),L=(0,e.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,e.createElement)(i.Path,{d:"M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"})),S=[{label:(0,a.__)("Automations + AI","enable-button-icons"),value:"automations-ai",icon:(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none"},(0,e.createElement)("g",{fill:"#D55E2E",clipPath:"url(#a)"},(0,e.createElement)("path",{d:"m3 18 1-2 2-1-2-1-1-2-1 2-2 1 2 1 1 2ZM16 16l2-1-2-1-1-2-1 2-2 1 2 1 1 2 1-2ZM10 2 9 0 8 2 6 3l2 1 1 2 1-2 2-1-2-1ZM3.75 10.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM.75 7.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM.75 1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM17.25 10.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM14.25 7.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM17.25 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM14.25 1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM7.5 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 12a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM7.5 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"})),(0,e.createElement)("defs",null,(0,e.createElement)("clipPath",{id:"a"},(0,e.createElement)("path",{fill:"#fff",d:"M0 0h18v18H0z"}))))},{label:(0,a.__)("Patch Management","enable-button-icons"),value:"patch-management",icon:(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:19,height:19,fill:"none"},(0,e.createElement)("g",{clipPath:"url(#a)"},(0,e.createElement)("path",{fill:"#D55E2E",d:"M9.945 6.632V2.827A2.312 2.312 0 0 0 8.07.527a2.25 2.25 0 0 0-2.625 2.22v5.686l-3.09 3.041a2.25 2.25 0 0 0 0 3.182l3.84 3.841h11.25V8.132l-7.5-1.5Zm6 10.365h-9.13l-3.4-3.402a.75.75 0 0 1-.005-1.056l2.035-2.002v2.71h1.5v-10.5a.75.75 0 0 1 .881-.74.814.814 0 0 1 .619.82v5.035l7.5 1.5v7.635Z"})),(0,e.createElement)("defs",null,(0,e.createElement)("clipPath",{id:"a"},(0,e.createElement)("path",{fill:"#fff",d:"M.945.497h18v18h-18z"}))))},{label:(0,a.__)("Remote Access","enable-button-icons"),value:"remote-access",icon:(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:19,height:19,fill:"none"},(0,e.createElement)("g",{clipPath:"url(#a)"},(0,e.createElement)("path",{fill:"#D55E2E",d:"M18.945 14.747V3.497a2.25 2.25 0 0 0-2.25-2.25h-13.5a2.25 2.25 0 0 0-2.25 2.25v11.25h8.25v1.5h-3.75v1.5h9v-1.5h-3.75v-1.5h8.25Zm-16.5-11.25a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 .75.75v9.75h-15v-9.75Zm9.724 3.75h3.776v1.5h-2.973l-1.995 2.99-2.25-4.5-1.005 1.51H3.945v-1.5H6.92l1.994-2.991 2.25 4.5 1.006-1.51Z"})),(0,e.createElement)("defs",null,(0,e.createElement)("clipPath",{id:"a"},(0,e.createElement)("path",{fill:"#fff",d:"M.945.497h18v18h-18z"}))))},{label:(0,a.__)("Chevron Right","enable-button-icons"),value:"chevron-right",icon:s},{label:(0,a.__)("Chevron Left","enable-button-icons"),value:"chevron-left",icon:h},{label:(0,a.__)("Chevron Right (Small)","enable-button-icons"),value:"chevron-right-small",icon:v},{label:(0,a.__)("Chevron Left (Small)","enable-button-icons"),value:"chevron-left-small",icon:w},{label:(0,a.__)("Shuffle","enable-button-icons"),value:"shuffle",icon:m},{label:(0,a.__)("Arrow Right","enable-button-icons"),value:"arrow-right",icon:u},{label:(0,a.__)("Arrow Left","enable-button-icons"),value:"arrow-left",icon:b},{label:(0,a.__)("Next","enable-button-icons"),value:"next",icon:d},{label:(0,a.__)("Previous","enable-button-icons"),value:"previous",icon:p},{label:(0,a.__)("Download","enable-button-icons"),value:"download",icon:g},{label:(0,a.__)("External Arrow","enable-button-icons"),value:"external-arrow",icon:(0,e.createElement)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("polygon",{points:"18 6 8.15240328 6 8.15240328 8.1101993 14.3985932 8.1101993 6 16.5087925 7.4912075 18 15.8898007 9.6014068 15.8898007 15.8475967 18 15.8475967"}))},{label:(0,a.__)("External","enable-button-icons"),value:"external",icon:E},{label:(0,a.__)("Login","enable-button-icons"),value:"login",icon:f},{label:(0,a.__)("Lock","enable-button-icons"),value:"lock-outline",icon:_},{label:(0,a.__)("Avatar","enable-button-icons"),value:"comment-author-avatar",icon:x},{label:(0,a.__)("Cloud","enable-button-icons"),value:"cloud",icon:M},{label:(0,a.__)("Cloud Upload","enable-button-icons"),value:"cloud-upload",icon:z},{label:(0,a.__)("Help","enable-button-icons"),value:"help",icon:P},{label:(0,a.__)("Info","enable-button-icons"),value:"info",icon:V},{label:(0,a.__)("WordPress","enable-button-icons"),value:"wordpress",icon:L}];(0,o.addFilter)("blocks.registerBlockType","enable-button-icons/add-attributes",(function(e){return"core/button"!==e.name?e:{...e,attributes:{...e.attributes,icon:{type:"string"},iconPositionLeft:{type:"boolean",default:!1}}}})),(0,o.addFilter)("editor.BlockEdit","enable-button-icons/add-inspector-controls",(function(t){return n=>{if("core/button"!==n.name)return(0,e.createElement)(t,{...n});const{attributes:l,setAttributes:o}=n,{icon:i,iconPositionLeft:s}=l;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(t,{...n}),(0,e.createElement)(c.InspectorControls,null,(0,e.createElement)(r.PanelBody,{title:(0,a.__)("Icon settings","enable-button-icons"),className:"button-icon-picker",initialOpen:!0},(0,e.createElement)(r.PanelRow,null,(0,e.createElement)(r.__experimentalGrid,{className:"button-icon-picker__grid",columns:"5",gap:"0"},S.map(((t,n)=>{var l;return(0,e.createElement)(r.Button,{key:n,label:t?.label,isPressed:i===t.value,className:"button-icon-picker__button",onClick:()=>o({icon:i===t.value?null:t.value})},null!==(l=t.icon)&&void 0!==l?l:t.value)})))),(0,e.createElement)(r.PanelRow,null,(0,e.createElement)(r.ToggleControl,{label:(0,a.__)("Show icon on left","enable-button-icons"),checked:s,onChange:()=>{o({iconPositionLeft:!s})}})))))}})),(0,o.addFilter)("editor.BlockListBlock","enable-button-icons/add-classes",(function(t){return n=>{const{name:a,attributes:o}=n;if("core/button"!==a||!o?.icon)return(0,e.createElement)(t,{...n});const c=l()(n?.className,{[`has-icon__${o?.icon}`]:o?.icon,"has-icon-position__left":o?.iconPositionLeft});return(0,e.createElement)(t,{...n,className:c})}}))})()})();