import { useState, useEffect } from 'react';
import {getCategotyInSearch} from "../../api/categoriesInSearch"
import { Link } from "react-router-dom";

const CategoriesInSearch = () => {

    let [categoty, setCategoties] = useState<any[]>([]);
 
    useEffect(() => {
        const getCategoties = async () => {
            let result = await getCategotyInSearch();
            let data = result.categories.items;
            setCategoties(data);
        }
        getCategoties();
    }, []);

    return (
        <main className="main" style={{ height: "100%" }}>
            <h1 className="section__head ">Категории</h1>
            <section className="section last__section">
                <div className="section__blocks">
                    {categoty.map(item => (
                        <div className="section__block" key={item.id} >
                            <h2 className="section__nameOfAlbum" >{item.name}</h2>
                            <Link to= {"category.html" + "#" + item.href}  className="section__photo">
                                <img className="photo" src={item.icons[0].url}alt=""/>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default CategoriesInSearch;