import { getToken } from "./token.js";

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

//Информация о плейлисте
export const getPlaylist = async () => {
  const res = await
  fetch(window.location.hash.slice(1), {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + (await getToken()),
    },
  }  );
  if (!res.ok) {
    document.querySelector(".playlist__name").textContent =
    "Ошибка подключения к плейлисту";
    throw new Error(res.statusText);
  } else {
    const data = await res.json();
    return data;
  }
};
