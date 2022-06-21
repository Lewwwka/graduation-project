import { useState, useEffect, useCallback} from 'react';
import {getRecomend} from "../../api/api"
import { Link , Routes, Route} from "react-router-dom";
import Playlist from './Playlist';

const Main = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [recomend, setRecomend] = useState([]);

    const fetchData = useCallback(() => {
        setLoading(true);
        getRecomend()
          .then((fetchedData) => {
            let fdata = fetchedData.playlists.items;
            setRecomend(fdata);
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