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
      throw new Error(res.statusText);
    } else {
      return res.json();
    }
  })
  .then((data) => {
    data.categories.items.forEach((element) => {
      const sectionBlocks = document.querySelector(".section__blocks");

      //Созданиее блока категории
      const block = document.createElement("div");
      block.classList.add("section__block");
      block.setAttribute("src", element.icons[0].url);

      //Ссылка на категорию
      const photo = document.createElement("a");
      photo.classList.add("section__photo");
      photo.setAttribute("href", "category.html" + "#" + element.href);

      //Картинка категории
      const image = document.createElement("img");
      image.classList.add("photo");
      image.src = element.icons[0].url;

      //Наименование категории
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
