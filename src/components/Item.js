
const Item = (props) => {

    return (
      <> 
      <h2>{props.marca}</h2>
      <div>
        <p>Imagen: {props.imagen}</p>
        <p>Tipo: {props.tipo}</p>
        <p>Modelo: {props.modelo} </p>
        <p>Precio: {props.precio} Pesos</p>
        <p>Descripción: {props.descripcion}</p>
        
        
      </div>
      </>
      )
    
  }

  export default Item;