import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { getProducts } from "../../services/productsServices";

export const ItemListContainer = ({title}) => {

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const {categoryId} = useParams();

    useEffect(() => {
        getProducts(categoryId)
        .then((data) => {
            setProducts(data);
            setFilteredProducts(data);
        })
        .catch((error) => {
            console.error("Error al obtener los productos:", error);
        });
    }, [categoryId]);
        
    return (
        <section className="item-list-container">
            <h1>{title}</h1>
            <div className="products-grid">
                <ItemList lista={filteredProducts}/>
            </div>
        </section> 
    );
};