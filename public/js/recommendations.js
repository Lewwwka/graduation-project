import { getToken } from "./token.js";
//Рекомендации
fetch("https://api.spotify.com/v1/browse/featured-playlists", {
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
    data.playlists.items.forEach((element) => {
      const sectionBlocks = document.querySelector(".section__blocks");
      const block = document.createElement("div");
      const photo = document.createElement("a");
      const image = document.createElement("img");
      const nameOfCat = document.createElement("h2");
      block.classList.add("section__block");
      photo.classList.add("section__photo");
      image.classList.add("photo");
      nameOfCat.classList.add("section__nameOfAlbum");
      image.src = element.images[0].url;
      block.setAttribute("src", element.images[0].url);
      photo.setAttribute("href", "playlist.html" + "#" + element.href);
      nameOfCat.innerHTML = element.name;
      photo.appendChild(image);
      block.appendChild(nameOfCat);
      block.appendChild(photo);
      sectionBlocks.appendChild(block);
    });
  });
