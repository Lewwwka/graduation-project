import { getToken } from "./token.js";

/**
 * Перевод в минуты:секунды
 * @param {number} num - Миллисекунды
 * @returns {string}
 */
function formatDuration(num) {
  let min = Math.floor(num / 60000);
  let sec = ((num % 60000) / 1000).toFixed(0);
  return min + ":" + (sec < 10 ? "0" + sec : sec);
}

//Информация о плейлисте
const getPlaylist = async () => {
    await
  fetch(window.location.hash.slice(1), {
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
      const name = document.querySelector(".playlist__name");
      const image = document.querySelector(".playlist__image");
      const description = document.querySelector(".playlist__description");
      description.textContent = data.description;
      image.setAttribute("src", data.images[0].url);
      name.textContent = data.name;
      const tabel = document.querySelector(".main__table");
      data.tracks.items.forEach((element, index) => {
        //Новая строка
        const tr = document.createElement("tr");
        tr.classList.add("table__items");

        //Нумерация треков в плейлисте
        const td = document.createElement("td");
        td.classList.add("table__item");
        td.classList.add("table__number");
        td.textContent = index + 1;

        //Описание
        const tdItem = document.createElement("td");
        tdItem.classList.add("table__item");
        const content = document.createElement("div");
        content.classList.add("table__content");
        const text = document.createElement("div");
        text.classList.add("table__text");

        //Название трека
        const track = document.createElement("h2");
        track.classList.add("table__track");
        track.textContent = element.track.name;

        //Автор трека
        const author = document.createElement("p");
        author.classList.add("table__author");
        author.textContent = element.track.artists[0].name;

        //Автор трека
        const album = document.createElement("td");
        album.classList.add("table__album");
        album.textContent = element.track.album.name;

        //Дата добавления
        const date = document.createElement("td");
        date.classList.add("table__date");
        date.textContent = new Date(element.added_at).toLocaleDateString();

        //Длительность трека
        const time = document.createElement("td");
        time.classList.add("table__time");
        time.textContent = formatDuration(element.track.duration_ms);

        text.appendChild(track);
        text.appendChild(author);
        content.appendChild(text);
        tdItem.appendChild(content);
        tr.appendChild(td);
        tr.appendChild(tdItem);
        tr.appendChild(album);
        tr.appendChild(date);
        tr.appendChild(time);
        tabel.appendChild(tr);
      });
    })
    .catch(
      () =>
        (document.querySelector(".playlist__name").textContent =
          "Ошибка подключения к серверу")
    );
}
await getPlaylist();