import { getToken } from "./token.js";

if (window.location.hash) {
  fetch(window.location.hash.slice(1), {
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
      const head = document.querySelector(".section__head");
      head.textContent = data.name;
    });

  fetch(window.location.hash.slice(1) + "/playlists", {
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
        //Выводим плейлисты в выбранной категории
        const sectionBlocks = document.querySelector(".section__blocks");
        const block = document.createElement("div");
        const photo = document.createElement("a");
        const image = document.createElement("img");
        const nameOfPlaylist = document.createElement("h2");
        block.classList.add("section__block");
        photo.classList.add("section__photo");
        image.classList.add("photo");
        nameOfPlaylist.classList.add("section__nameOfAlbum");
        image.src = element.images[0].url;
        block.setAttribute("src", element.images[0].url);
        photo.setAttribute("href", "playlist.html" + "#" + element.href);
        nameOfPlaylist.innerHTML = element.name;
        photo.appendChild(image);
        block.appendChild(nameOfPlaylist);
        block.appendChild(photo);
        sectionBlocks.appendChild(block);
      });
    });
}
