import { useEffect, useState } from "react";
import desafio from "../utils/promesa";
import {data} from "../utils/data.js";
import ItemList from "../components/ItemList";


const ItemContainer = (props) => {
    
    const [products, setProducts] = useState([]);

    //componentDidMount
    useEffect(() => {
        //aqui usar la promesa
        desafio(data)
        .then(result => setProducts(result))
        .catch(err => console.log(err))

    }, [])

   
    return (
        <>
        <div class="containerr">
            <div class="row">                    
            <main id="items" class="cardsss">
        {
            products.map(item => (
            <>
                  
                <h3 class="skateName">{item.nombre}</h3>
                <img class="cards" src={item.image} alt="" />
                <h5>Marca : {item.brand}</h5>
                <p>Tipo : {item.categoryId}</p>
                <p>Descripción : {item.descripcion}</p>
                <p>ID del Producto = {item.id}</p>
                <p>Stock Disponible = {item.stock}</p>
                <p class="precio">Precio = {item.precio} pesos</p>
                <hr />
                
                
            </>
        
        
        ))
        }
        </main>
        </div>
        </div>
        </>
  
  )
}
export default ItemContainer;
