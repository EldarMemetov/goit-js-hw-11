import{i as f,S as y}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d="https://pixabay.com/api",m="43475278-2a58784aecd56e70c750f20e8";async function h(t){const o=await fetch(`${d}/?key=${m}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`);if(!o.ok)throw new Error(res.statusText);return(await o.json()).hits}function g(t){t.style.display="block"}function L(t){t.style.display="none"}function b({webformatURL:t,largeImageURL:o,tags:s,likes:i,views:e,comments:r,downloads:n}){return`
<li class="gallery-item">
  <a class="gallery-link" href="${o}">
    <img class="gallery-image" src="${t}" alt="${s}" width="360" height="240" />
    <ul class="property-list">
      <li class="property-item">
        <p class="property-title">Likes</p>
        <p class="property-value">${i}</p>
      </li>
      <li class="property-item">
        <p class="property-title">Views</p>
        <p class="property-value">${e}</p>
      </li>
      <li class="property-item">
        <p class="property-title">Comments</p>
        <p class="property-value">${r}</p>
      </li>
      <li class="property-item">
        <p class="property-title">Downloads</p>
        <p class="property-value">${n}</p>
      </li>
    </ul>  
  </a>
</li>

  `}function l(t){t.innerHTML=""}function p(){f.error({title:"Error",message:"Sorry, there was an error processing your request. Please try again later.",position:"topRight"})}function w(){return new y(".gallery-item a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250})}const u=document.querySelector(".loader-container"),c=document.getElementById("form"),a=document.querySelector(".ul-group");c.addEventListener("submit",$);function $(t){t.preventDefault(),g(u),l(a);const o=c.elements.img.value.trim();h(o).then(s=>{s.length===0?(l(a),p()):v(s)}).catch(s=>{console.error(s),p()}).finally(()=>{L(u),c.reset()})}function v(t){l(a),t.forEach(s=>{const i=b(s);a.insertAdjacentHTML("beforeend",i)}),w().refresh()}
//# sourceMappingURL=commonHelpers.js.map
