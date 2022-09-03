import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {

    const onAdd = (qty) => {
      alert("You have selected " + qty + " items.");
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
                  <ItemCount stock={item.stock} initial={1} onAdd={onAdd} /> 
                  <hr />
                </div>
        </div>
      </main>
                   
      




      </>
      )
    
  }

  export default ItemDetail;