import { getToken } from "./token.js";

export const getCategoty = async () => {
  const res =  await fetch(window.location.hash.slice(1), {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + (await getToken()),
    },
  });
  if (!res.ok) {
    document.querySelector(".section__head").textContent =
    "Ошибка подключения к выбранной категории";
    throw new Error(res.statusText);
  } else {
    const data = await res.json();
    return data;
  }
};

  export const getPlaylistInCategory = async () => {
    const res = await fetch(window.location.hash.slice(1) + "/playlists", {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + (await getToken()),
    },
  });
  if (!res.ok) {
    document.querySelector(".section__head").textContent =
    "Ошибка подключения к выбранной категории";
    throw new Error(res.statusText);
  } else {
    const data = await res.json();
    return data;
  }
};
