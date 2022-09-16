import { Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import { useContext } from "react";
import { CartContext } from "./CartContext";



const CartWidget = () => {
  const test = useContext(CartContext)


    return (    
      <>
      
      
      <h3><Badge pill bg="secondary" text="dark">{test.calcItemsQty()}</Badge></h3>
      <span className="visually-hidden">unread messages</span>
      
      
      <Link to={"/cart"}><img class="cart" src="https://res.cloudinary.com/lechon/image/upload/v1662558348/skates/carrito3_dmlwvb.png" alt="carto4"></img></Link>

      
      
      </>
    );
  }
  
  export default CartWidget;
  