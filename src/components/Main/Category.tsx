import { useState, useEffect } from 'react';
import {getCategoty,getPlaylistInCategory} from "../../api/category"
import { Link } from "react-router-dom";

const Category = () => {

    let [nameOfCategory, setNameOfCategory] = useState<any[]>([]);
    let [playlists, setPlaylists] = useState<any[]>([]);
 
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
        <main className="main" style={{ height: "100%" }}>
        <h1 className="section__head">{nameOfCategory}</h1>
            <section className="section last__section">
                <div className="section__blocks">
                    {playlists.map(item => (
                        <div className="section__block" key={item.id} >
                            <h2 className="section__nameOfAlbum" >{item.name}</h2>
                            <Link to={"playlist.html" + "#" + item.href}  className="section__photo">
                                <img className="photo" src={item.images[0].url} />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Category;