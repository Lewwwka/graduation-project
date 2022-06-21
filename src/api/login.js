//Авторизация
const getAuth = async () => {
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
  };

  
export async function getLogin(){ 
    await getAuth();
    const res = await fetch("https://api.spotify.com/v1/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + (window.localStorage.getItem("token")),
      },
    }  );
    if (!res.ok) {
      throw new Error(res.statusText);
    } else {
      const data = await res.json();
      return data;
    }
  };