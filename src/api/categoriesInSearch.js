import { getToken } from "./token.js";

//Выводим доступные категории для пользователя
export const getCategotyInSearch = async () => { 
  const res = await  fetch("https://api.spotify.com/v1/browse/categories", {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + (await getToken()),
    },
  }  );
  if (!res.ok) {
    document.querySelector(".section__head").textContent =
    "Ошибка подключения к категориям";
    throw new Error(res.statusText);
  } else {
    const data = await res.json();
    return data;
  }
};


