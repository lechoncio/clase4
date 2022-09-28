import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from "./CartContext";
import Swal from 'sweetalert2';

const ItemDetail = ({ item }) => {

  const [itemCount, setItemCount] = useState(0);
  const test = useContext(CartContext);

    const onAdd = (qty) => {
      Swal.fire({   
        width: "350px",    
        heightAuto: true,
        title: ("Usted ha seleccionado " + qty + " items."),   
        imageUrl: 'https://res.cloudinary.com/lechon/image/upload/v1664119561/skates/logo_chico_hml4s0.png',
        imageWidth: 250,
        imageHeight: 125,
        padding: '1%',
        color: '#ded7e6',
        background: '#48464b',
        showConfirmButton: false,
        timer: 1500    
    })   
      setItemCount(qty);
      test.addItem(item, qty);
}

    return (
      <> 
      <main class="containerDetail">
        <div class="cardDetail">
          
                <div class="flex-item">
                  <p class="name2"> Modelo:</p>
                  <p class="name"> {item.nombre}</p>
                  <img class="detail" src={item.image} alt="" />
                </div>
                  
                <div class="flex-item">
                  <hr />
                  <h2>Marca: {item.brand}</h2>
                  <p class="desc">Categoría : {item.category}</p>
                  <p class="desc">Descripción : {item.descripcion}</p>
                  <p class="desc">ID del Producto = {item.id}</p>
                  <p class="desc">Stock Disponible = {item.stock}</p>
                  <p class="precio">Precio = {item.precio} pesos</p> 
                  <hr />                
                  
                  
                                              
                        { 
                          itemCount === 0 && <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} /> 
                        }
                        { 
                          itemCount !== 0 && <Link to='/cart'><button class="btn btn-outline-primary btn-sm">CheckOut</button></Link> 
                        }
                    
                    <hr />
                </div>
        </div>
      </main>
                   
      




      </>
      )
    
  }

  export default ItemDetail;