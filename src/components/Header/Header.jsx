import { useState, useEffect } from 'react';
import {getLogin} from '../../api/login'; 

const Header = () => {

    let [name, setName] = useState("");
    let [photo, setPhoto] = useState("");

     useEffect(() => {
        const getUser = async () => {
            let userName = await getLogin();
            let name = userName.display_name;
            setName(name);
            let photo = userName.images[0].url
            setPhoto(photo);
        }
        getUser();
    }, []);

    return (
        <header className="header">
            <div className="header__right">
                <a href='/' className="header__link login">
                    <img className="header__image" src={photo} alt='' />
                    <h3 className="header__username">{name ? name : "Войти" }</h3>
                </a>
            </div>
        </header>
    );
}

export default Header;