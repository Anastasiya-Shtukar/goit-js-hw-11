import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{S as i,i as l}from"./assets/vendor-5ObWk2rO.js";/* empty css                      */const p=document.querySelector(".btn-search"),t=document.querySelector(".search-images-input").value,r=document.querySelector(".gallery");p.addEventListener("click",c=>{c.preventDefault(),console.log(t.value);const s=new URLSearchParams({key:"46374353-2f98dff3c8dab99fd2b2fa1f1",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});console.log(s.toString());const o=`https://pixabay.com/api/?${s}`;fetch(o,{method:"GET"}).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()}).then(a=>{if(a.hits.length===0)throw new Error("No results found");const n=a.hits.map(e=>`<li class="gallery-item">
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
</li>`).join("");r.innerHTML="",r.insertAdjacentHTML("beforeend",n),new i(".gallery a",{captionsData:"alt",captionDelay:250})}).catch(a=>{console.error(a),l.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"})})});
//# sourceMappingURL=page-2.js.map
