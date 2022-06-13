import { useState, useEffect } from 'react';
import {getCategotyInSearch} from "../../api/api"
import { Link , Routes, Route} from "react-router-dom";
import Category from './Category';

const CategoriesInSearch = () => {

    let [categoty, setCategoties] = useState([]);
 
    useEffect(() => {
        const getCategoties = async () => {
            let result = await getCategotyInSearch();
            let data = result.categories.items;
            setCategoties(data);
        }
        getCategoties();
    }, []);

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