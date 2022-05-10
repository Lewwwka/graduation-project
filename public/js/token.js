var client_id = "e36c62211b3e4ded808d93ff7e9d9d09";
var client_secret = "03e8dab40814412c97a52be2ce3c3c5f";
var redirect_uri = "http://localhost:3000/callback";

//Запрос на токен доступа
const getToken = async () => {
  if (window.localStorage.getItem("token") != null) {
    return window.localStorage.token;
  } else {
    const result = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " + Buffer.from(client_id + ":" + client_secret, "base64"),
      },
      body: "grant_type=client_credentials",
    });

    const data = await result.json();
    window.localStorage.setItem("token", data.access_token);
    return data.access_token;
  }
};

export { getToken, client_id, client_secret, redirect_uri };
