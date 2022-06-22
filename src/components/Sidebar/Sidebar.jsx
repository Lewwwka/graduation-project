import { Link } from "react-router-dom";
import Spotify_Logo from '../../images/Spotify_Logo.png'

function Sidebar() {
    return (
        <aside className="sidebar">
            <a href="/" className="sidebar__link">
                <img className="sidebar__logo" src={Spotify_Logo} alt=""/>
            </a>
            <nav className="navigation">
            <Link className="nav-link " to="/"><i className=" icon"></i>Главная</Link>
            <Link className="nav-link " to="/search"><i className=" icon"></i>Категории</Link>
            </nav>

        </aside>
    );
}

export default Sidebar;