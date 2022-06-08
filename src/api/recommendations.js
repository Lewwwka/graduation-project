import { getToken } from "./token.js";
//Рекомендации
export const getRecomend = async () => {
  const res = await fetch(
    "https://api.spotify.com/v1/browse/featured-playlists",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " +(await getToken()),
      },
    }
  );
  if (!res.ok) {
    document.querySelector(".section__head").textContent =
    "Ошибка подключения к рекомендациям";
    throw new Error(res.statusText);
  } else {
    const data = await res.json();
    return data;
  }
};