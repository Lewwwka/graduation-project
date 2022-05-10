import { client_id, redirect_uri } from "./token.js";
//Запрос на авторизацию
document.querySelector(".login").addEventListener("click", function () {
  let url =
    "https://accounts.spotify.com/authorize" +
    "?client_id=" +
    client_id +
    "&response_type=token" +
    "&redirect_uri=" +
    encodeURI(redirect_uri) +
    "&show_dialog=true" +
    "&scope=ugc-image-upload user-modify-playback-state user-read-playback-state user-read-currently-playing user-read-recently-played user-read-playback-position user-top-read playlist-read-private streaming user-read-email user-read-private user-library-read";
  window.location.replace(url);
});

window.onload = function () {
  let code = null;
  const queryString = window.location.hash;
  if (queryString && window.location.href.includes("callback")) {
    code = queryString
      .substring(1)
      .split("&")
      .find((elem) => elem.startsWith("access_token"))
      .split("=")[1];
    window.localStorage.setItem("token", code);
    window.localStorage.setItem("authorization", true);
    window.history.pushState("", "", redirect_uri);
  }

  if (window.localStorage.getItem("authorization")) {
    fetch("https://api.spotify.com/v1/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        //Фото/имя профиля
        const headerImage = document.querySelector(".header__image");
        const headerUsername = document.querySelector(".header__username");
        headerImage.setAttribute("src", data.images[0].url);
        headerUsername.textContent = data.display_name;
      });
  }
};
