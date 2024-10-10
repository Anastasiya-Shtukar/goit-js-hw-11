import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{S as p,i as h}from"./assets/vendor-5ObWk2rO.js";/* empty css                      */const d=document.querySelector(".btn-search"),r=document.querySelector(".search-images-input"),s=document.querySelector(".gallery"),m=document.querySelector(".search-images");d.addEventListener("click",c=>{c.preventDefault();const n=r.value;console.log(r.value),m.insertAdjacentHTML("afterend",'<div class="loader-div" id="loader-div"><span class="loader"></span></div>');const o=document.getElementById("loader-div"),t=new URLSearchParams({key:"46374353-2f98dff3c8dab99fd2b2fa1f1",q:`'${n}'`,image_type:"photo",orientation:"horizontal",safesearch:!0});console.log(t.toString());const i=`https://pixabay.com/api/?${t}`;fetch(i,{method:"GET"}).then(a=>{if(!a.ok)throw new Error(a.status);return(!a.ok||a.ok)&&(o.style.display="none"),a.json()}).then(a=>{if(a.hits.length===0)throw new Error("No results found");const l=a.hits.map(e=>`<li class="gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img
      class="gallery-image"
      src="${e.webformatURL}"
      data-source="${e.largeImageURL}"
      alt="${e.tags}"
    />
  </a>
  <div class="characteristics-photo">
  <p class="characteristic">Likes:<span class="characteristic-span">${e.likes}</span></p>
  <p class="characteristic">Views:<span class="characteristic-span">${e.views}</span></p>
  <p class="characteristic">Comments:<span class="characteristic-span">${e.comments}</span></p>
  <p class="characteristic">Downloads:<span class="characteristic-span">${e.downloads}</span></p>
  </div>
</li>`).join("");s.innerHTML="",s.insertAdjacentHTML("beforeend",l),new p(".gallery a",{captionsData:"alt",captionDelay:250})}).catch(a=>{console.error(a),s.innerHTML="",h.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"})})});
//# sourceMappingURL=page-2.js.map
