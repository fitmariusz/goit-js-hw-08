function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},t.parcelRequired7c6=o);var n=o("kEUo3");const l={email:"",message:""};keyData="feedback-form-state";const s=(e,t)=>{try{const r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Set state error: ",e.message)}},i=document.querySelector(".feedback-form"),u=document.querySelector("input"),d=document.querySelector("textarea"),c=(e=>{try{const t=localStorage.getItem(e);return null===t?l:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}})(keyData);var f,m;console.log(c),i.elements.email.value=null!==(f=c.email)&&void 0!==f?f:"",i.elements.message.value=null!==(m=c.message)&&void 0!==m?m:"",u.addEventListener("input",e(n).throttle((e=>{c.email=e.target.value,s(keyData,c)}),500)),d.addEventListener("input",e(n).throttle((e=>{c.message=e.target.value,s(keyData,c)}),500)),i.addEventListener("submit",(e=>{e.preventDefault(),localStorage.removeItem(keyData),i.reset()}));
//# sourceMappingURL=03-feedback.fce13016.js.map
