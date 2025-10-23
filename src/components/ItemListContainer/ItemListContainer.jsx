import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";

export const ItemListContainer = ({title}) => {

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const {categoryId} = useParams();

    useEffect(() => {
        fetch("/data/products.json").then((res)=> {
            if(!res.ok){
                throw new Error("Error en la llamada")
            }
            return res.json();
        }).then((data)=>{
            setProducts(data);
        }).catch((err)=> {
            console.log(err);
        });
    }, []);

    useEffect(() => {
        if (categoryId) {
            const filtered = products.filter(
            (prod) => prod.category === categoryId
            );
            setFilteredProducts(filtered);
        } else {
        setFilteredProducts(products);
        }
    }, [categoryId, products]);
        
    return (
        <section className="item-list-container">
            <h1>{title}</h1>
            <div className="products-grid">
                <ItemList lista={filteredProducts}/>
            </div>
        </section> 
    );
};