import {client_id, redirect_uri } from "./token.js";

//Запрос на авторизацию
const auth = document.querySelector(".login");
auth.setAttribute(
  "href",
  "https://accounts.spotify.com/authorize" +
    "?client_id=" +
    client_id +
    "&response_type=token" +
    "&redirect_uri=" +
    encodeURI(redirect_uri) +
    "&show_dialog=true" +
    "&scope=ugc-image-upload user-modify-playback-state user-read-playback-state user-read-currently-playing user-read-recently-played user-read-playback-position user-top-read playlist-read-private streaming user-read-email user-read-private user-library-read"
);

//Запись токена в localStorage 
let token = null;
const getAccessToken = window.location.hash;
if (getAccessToken && window.location.href.includes("access_token")) {
  token = getAccessToken
    .substring(1)
    .split("&")
    .find((elem) => elem.startsWith("access_token"))
    .split("=")[1];
  window.localStorage.setItem("token", token);
}

const getLogin = async () => {
  await fetch("https://api.spotify.com/v1/me", {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " +  window.localStorage.getItem("token"),
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
    //Фото/имя профиля
    const headerImage = document.querySelector(".header__image");
    const headerUsername = document.querySelector(".header__username");
    headerImage.setAttribute("src", data.images[0].url);
    headerUsername.textContent = data.display_name;
  })
  .catch(
    () =>
      (document.querySelector(".section__head").textContent =
        "Ошибка подключения к профилю")
  );
};
await getLogin();
