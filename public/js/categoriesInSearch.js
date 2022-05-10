import { getToken } from "./token.js";

//Выводим доступные категории для пользователя
fetch("https://api.spotify.com/v1/browse/categories", {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + (await getToken()),
  },
})
  .then((res) => {
    if (!res.ok) {
      return Promise.reject(res.status);
    } else {
      return res.json();
    }
  })
  .then((data) => {
    data.categories.items.forEach((element) => {
      const sectionBlocks = document.querySelector(".section__blocks");
      const block = document.createElement("div");
      const photo = document.createElement("a");
      const image = document.createElement("img");
      const nameOfCat = document.createElement("h2");
      block.classList.add("section__block");
      photo.classList.add("section__photo");
      image.classList.add("photo");
      nameOfCat.classList.add("section__nameOfAlbum");
      image.src = element.icons[0].url;
      block.setAttribute("src", element.icons[0].url);
      photo.setAttribute("href", "category.html" + "#" + element.href);
      nameOfCat.innerHTML = element.name;
      photo.appendChild(image);
      block.appendChild(nameOfCat);
      block.appendChild(photo);
      sectionBlocks.appendChild(block);
    });
  });
