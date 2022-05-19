import { getToken } from "./token.js";
//Рекомендации
const getRecomend = async () => {
  await fetch("https://api.spotify.com/v1/browse/featured-playlists", {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + (await getToken()),
  },
})
  .then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    } else {
      return res.json();
    }
  })
  .then((data) => {
    data.playlists.items.forEach((element) => {
      const sectionBlocks = document.querySelector(".section__blocks");

      //Созданиее рекомандованого блока
      const block = document.createElement("div");
      block.classList.add("section__block");
      block.setAttribute("src", element.images[0].url);

      //Ссылка на рекомендацию
      const photo = document.createElement("a");
      photo.classList.add("section__photo");
      photo.setAttribute("href", "playlist.html" + "#" + element.href);

      //Картинка рекомендации
      const image = document.createElement("img");
      image.classList.add("photo");
      image.src = element.images[0].url;

      //Наименование рекомендации
      const nameOfCat = document.createElement("h2");
      nameOfCat.classList.add("section__nameOfAlbum");
      nameOfCat.innerHTML = element.name;

      block.appendChild(nameOfCat);
      photo.appendChild(image);
      block.appendChild(photo);
      sectionBlocks.appendChild(block);
    });
  })
  .catch(
    () =>
      (document.querySelector(".section__head").textContent =
        "Ошибка подключения к серверу")
  );
  }
  await getRecomend();