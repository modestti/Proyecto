import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"

export const ItemDetailContainer = () => {
    
    const [detail, setDetail] = useState({});

    const {id}= useParams();
    
    useEffect(() => {
        fetch("/data/products.json").then((res)=> {
            if(!res.ok){
                throw new Error("Error al cargar")
            }
            return res.json()
        }).then((data)=>{
            const found = data.find((p)=> p.id === id);
            if(found){
                setDetail(found);
            }else {
                throw new Error("No se encontro")
            }
        }).catch((err)=>{
            console.log(err.message)
        })
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