import { useState, useEffect } from 'react';
import {getRecomend} from "../../api/api"
import { Link , Routes, Route} from "react-router-dom";
import Playlist from './Playlist';

const Main = () => {

    let [recomend, setRecomend] = useState([]);

    useEffect(() => {
        const getRecomendations = async () => {
            let result = await getRecomend();
            let data = result.playlists.items;
            setRecomend(data);
        }
        getRecomendations();
    }, []);

    return (
        <div className="app">
        <Routes>
            <Route path="/playlist/*" element={<Playlist />} />
        </Routes>
        <main className="main">
            <h1 className="section__head recommendation">Рекомендации</h1>
            <section className="section last__section">
                <div className="section__blocks">
                    {recomend.map(item => (
                        <div className="section__block" key={item.id} >
                            <h2 className="section__nameOfAlbum" >{item.name}</h2>
                            <Link to={"playlist#" + item.href}  className="section__photo">
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

export default Main;