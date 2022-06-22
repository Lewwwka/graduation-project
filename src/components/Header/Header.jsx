import {getLogin} from '../../api/login';
import { client_id, redirect_uri } from "../../api/token";
import { useState,useEffect, useCallback} from 'react';

const Header = () => {

     const [loading, setLoading] = useState(false);
     const [error, setError] = useState(null);
     const [name, setName] = useState("");
     const [photo, setPhoto] = useState("");
 
     const fetchData = useCallback(() => {
         setLoading(true);
         getLogin()
           .then((fetchedData) => {
             let fdata = fetchedData.display_name;
             setName(fdata);
             let fdata2 = fetchedData.images[0].url;
             setPhoto(fdata2);
           })
           .catch((err) => setError(err))
           .finally(() => setLoading(false));
       }, []);
     
       useEffect(() => {
         fetchData();
       }, [fetchData]);
    return (
        <header className="header">
            <div className="header__right">
                <a href={"https://accounts.spotify.com/authorize" +
                    "?client_id=" +
                    client_id +
                    "&response_type=token" +
                    "&redirect_uri=" +
                    encodeURI(redirect_uri) +
                    "&show_dialog=true" +
                    "&scope=ugc-image-upload user-modify-playback-state user-read-playback-state user-read-currently-playing user-read-recently-played user-read-playback-position user-top-read playlist-read-private streaming user-read-email user-read-private user-library-read"}
                    className="header__link login">
                    <img className="header__image" src={photo} alt='' />
                    <h3 className="header__username">{name ? name: "Войти"}</h3>
                </a>
            </div>
        </header>
    );
}

export default Header;