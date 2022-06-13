import { getToken } from "./token";
/**
 * Перевод в минуты:секунды
 * @param {number} num - Миллисекунды
 * @returns {string}
 */
 export function formatDuration(num) {
    let min = Math.floor(num / 60000);
    let sec = ((num % 60000) / 1000).toFixed(0);
    return min + ":" + (sec < 10 ? "0" + sec : sec);
  }

export async function fetchF(url){ 
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + (await getToken()),
      },
    })
      if (!res.ok) {
        alert("Ошибка загрузки данных");
        throw new Error(res.statusText);
      } else {
        const data = await res.json();
      return data;
      };
};

//Категории
export const getCategotyInSearch = async () => {
  return fetchF("https://api.spotify.com/v1/browse/categories");
};

//Рекоменации
export const getRecomend = async () => {
  return fetchF("https://api.spotify.com/v1/browse/featured-playlists");
};

//Выбранный плейлист в рекомендациях
export const getPlaylist = async () => {
  return fetchF(window.location.hash.slice(1));
};

//Выбранная категория
export const getCategoty = async () => {
    return fetchF(window.location.hash.slice(1));
  };

//Выбранный плейлист в категории
export const getPlaylistInCategory = async () => {
    return fetchF(window.location.hash.slice(1) + "/playlists");
  };
