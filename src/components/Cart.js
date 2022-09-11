import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
    
    const test = useContext(CartContext);
    


    return (
        <>
         <div class="containerDetail2">      
            <button class="btn btn-outline-danger btn-sm" onClick={test.clear}>Quitar todos</button>

            <div class="cardDetail2">

                <div class="flex-item">
                {            
                test.cartList.map (item =>
                <>
                <h2>{item.brand}</h2>
                <img class="cart2" src={item.image} alt="" />
                <span class="name2">  <span class="precio3">Modelo:</span> {item.nombre} <span class="precio3">/ Cantidad:</span> {item.quantity} <span class="precio3">/ Precio x Unidad =</span> {item.precio} pesos </span>                 
                
                <buttom class="btn btn-outline-primary btn-lg" onClick={() => test.removeItem(item.id)}>Quitar producto</buttom>
                <div><hr/></div>
                </>
                
                )
            
                }</div>
                <div class="flex-item">

        
        <hr />
        
        </div>
        </div>
                
        <h1> "Hola Muchachos! Soy el tremendo Carrito" </h1> 
        
        </div>
        
        </>
    )
}

export default Cart;