import { useState, useEffect,useCallback} from 'react';
import {getCategotyInSearch} from "../../api/api"
import { Link , Routes, Route} from "react-router-dom";
import Category from './Category';

const CategoriesInSearch = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [categoty, setCategoties] = useState([]);

    const fetchData = useCallback(() => {
        setLoading(true);
        getCategotyInSearch()
          .then((fetchedData) => {
            let fdata = fetchedData.categories.items;
            setCategoties(fdata);
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
                <Route path="/category/*" element={<Category />} />
            </Routes>
            <main className="main">
                <h1 className="section__head ">Категории</h1>
                <section className="section last__section">
                    <div className="section__blocks">
                        {categoty.map(item => (
                            <div className="section__block" key={item.id} >
                                <h2 className="section__nameOfAlbum" >{item.name}</h2>
                                <Link to={"category#" + item.href} className="section__photo">
                                    <img className="photo" src={item.icons[0].url} alt="" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default CategoriesInSearch;