function Gallery(id, jsonSrc) {
  Container.call(this);
  this.id = id;
  this.src = jsonSrc;
}
Gallery.prototype = Object.create(Container.prototype);
Gallery.prototype.constructor = Menu;
Gallery.prototype.render = function() {
  let result = "";
  for (let pic in this.src) {
    result += `<a href="${this.src[pic].full_img}"><img src="${this.src[pic].small_img}" alt="${this.src[pic].name}"></a>`;
  }
  return result;
}


/**
 * Gallery JSON format:
 * {
 *   pic_id : {
 *     name : "picture name",
 *     small_img : "path/to/small-img.jpg",
 *     full_img : "path/to/full-img.jpg"
 *   },
 *   ...
 * }
 */
let galleryJson = {
  pic1 : {
    name : "Double Cheeseburger",
    small_img : "./images/double-cheeseburger-small.jpg",
    full_img : "./images/double-cheeseburger.jpg"
  },
  pic2 : {
    name : "Pasta",
    small_img : "./images/pasta-small.jpg",
    full_img : "./images/pasta.jpg"
  },
  pic3 : {
    name : "Steak",
    small_img : "./images/steak-small.jpg",
    full_img : "./images/steak.jpg"
  },
}


let myGallery = new Gallery("photo-gallery", galleryJson);
document.querySelector("#gallery").addEventListener("click", () => {
  if (document.getElementById("photo-gallery") !== null) {
    myGallery.remove();
  } else {
    let galleryHTML = document.createElement('div');
    galleryHTML.className = "gallery-wrapper";
    galleryHTML.id = myGallery.id;
    galleryHTML.innerHTML = myGallery.render();
    document.body.appendChild(galleryHTML);
  }
})
