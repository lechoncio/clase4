
const Item = (props) => {

    return (
      <> 
      <h2>{props.nombre}</h2>
      <div>
        <p>{props.imagen}</p>
        <p>Marca:{props.brand}</p>
        <p>Tipo:{props.categoryId}</p>
        <p>Descripción: {props.descripcion} </p>
        <p>Precio: {props.precio} Pesos</p>
        <p>ID Producto: {props.id}</p>
        
        
      </div>
      </>
      )
    
  }

  export default Item;