import { useState, useEffect, useCallback } from 'react';
import { getCategoty, getPlaylistInCategory } from "../../api/api"
import { Link, Routes, Route } from "react-router-dom";
import Playlist from './Playlist';


const Category = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [nameOfCategory, setNameOfCategory] = useState("");
    const [playlists, setPlaylists] = useState([]);

    const fetchData = useCallback(() => {
        setLoading(true);
        getCategoty()
          .then((fetchedData) => {
            let fdata = fetchedData.name;
            setNameOfCategory(fdata);
          })
          .catch((err) => setError(err))
          .finally(() => setLoading(false));
        getPlaylistInCategory()
          .then((fetchedData) => {
            let fdata = fetchedData.playlists.items;
            setPlaylists(fdata);
          })
          .catch((err) => setError(err))
          .finally(() => setLoading(false));
      }, []);
    
      useEffect(() => {
        fetchData();
      }, [fetchData]);

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