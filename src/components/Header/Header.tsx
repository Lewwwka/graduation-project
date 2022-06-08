import { useState, useEffect } from 'react';
import {getLogin} from '../../api/onload'; 

const Header = () => {

    let [user, setUser] = useState<any>([]);
    let [photo, setPhoto] = useState<any>([]);

     useEffect(() => {
        const getUser = async () => {
            let userName = await getLogin();
            let name = userName;
            setUser(name);
            let photo = userName.images[0].url
            setPhoto(photo);
        }
        getUser();
    }, []);

    return (
        <header className="header">
            <div className="header__right">
                <a href='' className="header__link login">
                    <img className="header__image" src={photo} alt='' />
                    <h3 className="header__username">{user.display_name}</h3>
                </a>
            </div>
        </header>
    );
}

export default Header;