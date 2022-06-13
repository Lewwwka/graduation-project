import { useState, useEffect } from 'react';
import { getCategoty, getPlaylistInCategory } from "../../api/api"
import { Link, Routes, Route } from "react-router-dom";
import Playlist from './Playlist';


const Category = () => {

    let [nameOfCategory, setNameOfCategory] = useState("");
    let [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const getNameOfCategory = async () => {
            let result = await getCategoty();
            let data = result.name;
            setNameOfCategory(data);
        }
        getNameOfCategory();
    }, []);

    useEffect(() => {
        const getPlaylists = async () => {
            let result = await getPlaylistInCategory();
            let data = result.playlists.items;
            setPlaylists(data);
        }
        getPlaylists();
    }, []);

    return (
        <div className="app">
            <Routes>
                <Route path="/playlist/*" element={<Playlist />} />
            </Routes>
            <main className="main">
                <h1 className="section__head">{nameOfCategory}</h1>
                <section className="section last__section">
                    <div className="section__blocks">
                        {playlists.map(item => (
                            <div className="section__block" key={item.id} >
                                <h2 className="section__nameOfAlbum" >{item.name}</h2>
                                <Link to={"playlist#" + item.href} className="section__photo">
                                    <img className="photo" src={item.images[0].url} alt="" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Category;