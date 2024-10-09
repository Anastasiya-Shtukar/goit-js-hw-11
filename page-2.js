import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i as c}from"./assets/vendor-I1I71QQ2.js";/* empty css                      */const n=document.querySelector(".btn-search"),r=document.querySelector(".search-images-input"),i=r.value,d=document.querySelector(".gallery");n.addEventListener("click",a=>{a.preventDefault(),console.log(r.value);const s=new URLSearchParams({key:"46374353-2f98dff3c8dab99fd2b2fa1f1",q:`'${i}'`,image_type:"photo",orientation:"horizontal",safesearch:!0});console.log(s.toString());const o=`https://pixabay.com/api/?${s}`;fetch(o,{method:"GET"}).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(e.hits.length===0)throw new Error("No results found");const l=e.map(t=>`<li class="gallery-item">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img
      class="gallery-image"
      src="${t.webformatURL}"
      data-source="${t.largeImageURL}"
      alt="${t.tags}"
    />
  </a>
  <div class="characteristics-photo">
  <div class="likes">Likes:${t.likes}</div>
  <div class="views">Views:${t.views}</div>
  <div class="comments">Comments:${t.comments}</div>
  <div class="downloads">Downloads:${t.downloads}</div>
  </div>
</li>`).join("");d.insertAdjacentHTML("beforeend",l)}).catch(e=>{console.error(e),c.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"})})});
//# sourceMappingURL=page-2.js.map
