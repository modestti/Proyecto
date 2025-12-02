import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"
import { getProductById } from "../../services/productsServices"

export const ItemDetailContainer = () => {
    
    const [detail, setDetail] = useState({});

    const {id}= useParams();
    
    useEffect(() => {
       getProductById(id)
       .then((data) => {
        setDetail(data);
       })
       .catch((error) => {
        console.error("Error al obtener el detalle del producto:", error);
       });
    }, [id])

    return(
        <main  className="item-detail-container">
        
        {Object.keys(detail).length ? 
            (<div className="detail-content">
                <ItemDetail detail={detail}/>
            </div>):
            (<p>Cargando...</p> )}
        </main>
    )
}