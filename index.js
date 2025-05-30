import{a as m,S as p,i as c}from"./assets/vendor-frHSA4Lh.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const y="50595103-65097a90456797714ffdbb949",h="https://pixabay.com/api/";async function g(s){const o=new URLSearchParams({key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});try{return(await m.get(`${h}?${o.toString()}`)).data}catch(e){throw console.error("Error fetching images from Pixabay:",e),e}}const n=document.getElementById("gallery"),a=document.querySelector(".loader");let i;function b(s){if(!n){console.error("Gallery element not found!");return}const o=s.map(e=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img
                    class="gallery-image"
                    src="${e.webformatURL}"
                    alt="${e.tags}"
                    loading="lazy"
                />
            </a>
            <div class="info">
                <p><b>Likes</b> ${e.likes}</p>
                <p><b>Views</b> ${e.views}</p>
                <p><b>Comments</b> ${e.comments}</p>
                <p><b>Downloads</b> ${e.downloads}</p>
            </div>
        </li>
    `).join("");n.innerHTML=o,i?i.refresh():i=new p(".gallery a",{captionsData:"alt",captionDelay:250})}function L(){n&&(n.innerHTML=""),i&&(i.destroy(),i=null)}function w(){a&&a.classList.remove("is-hidden")}function u(){a&&a.classList.add("is-hidden")}const f=document.getElementById("search-form"),E=document.getElementById("search-input");u();f.addEventListener("submit",async s=>{s.preventDefault();const o=E.value.trim();if(!o){c.error({title:"Error",message:"Search query cannot be empty!",position:"topRight",timeout:3e3});return}L(),w();try{const e=await g(o);u(),e.hits&&e.hits.length>0?b(e.hits):c.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:5e3})}catch(e){u(),console.error("Search failed:",e),c.error({title:"Error",message:`Failed to fetch images: ${e.message||"Unknown error"}. Please try again later.`,position:"topRight",timeout:5e3})}f.reset()});
//# sourceMappingURL=index.js.map
