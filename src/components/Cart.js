
import { serverTimestamp, doc, collection, setDoc, increment, updateDoc } from "firebase/firestore";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { db } from "../utils/firebaseConfig";



const Cart = () => {
    
    const test = useContext(CartContext);

    const createOrder = () => {
        let itemsForDB = test.cartList.map(item => ({
            id: item.id,
            title: item.brand,
            model: item.nombre,
            price: item.precio,
            quantity: item.quantity

                }))
        let order = {
            comprador:{
                name: "Alex Trujillo",
                email: "atrujillo@gmail.com",
                phone: "11 3819 6536"
            },
            date: serverTimestamp(),
            items: itemsForDB,
            total: test.calcTotalCompra()           
        }        
        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }

        createOrderInFirestore()
            .then(result => {
                alert("Champion, Your order has been created!" + result.id)
                test.cartList.forEach(async(item) => {
                const itemRef = doc(db, "products", item.id);
                await updateDoc(itemRef, {
                stock: increment(-item.quantity)
                });
            })
            test.clear()
            })
            .catch(err => console.log(err))


    }

    return (
        <>
         <div class="containerDetail2">      
            

            <div class="cardDetail2">

                <div class="flex-item">
                {            
                test.cartList.map (item =>
                <>
                <h2>{item.brand}</h2>
                <img class="cart2" src={item.image} alt="" />
                <span class="name2">  <span class="precio3">Modelo:</span> {item.nombre} <span class="precio3">/ Cantidad:</span> {item.quantity} <span class="precio3">/ Precio x Unidad =</span> {item.precio} pesos  <span class="precio3"> Subtotal: </span> {item.quantity * item.precio}</span>           
                
                <buttom class="btn btn-outline-primary btn-lg" onClick={() => test.removeItem(item.id)}>Quitar producto</buttom>
                <div><hr/></div>
                </>
                
                )
            
                }</div>
                <div class="flex-item">

        
        <hr />
        
        </div>
        </div>
                
        <div class="flex-item"><h1>Total Compra = {test.calcTotalCompra()} pesos . </h1> </div>

        <div class="flex-item"><buttom class="btn btn-secondary btn-lg" onClick={createOrder}> Realizar Compra</buttom></div>

        <div class="flex-item"><button class="btn btn-outline-danger btn-lg" onClick={test.clear}>Quitar todos</button></div>
        
        </div>
        
        </>
    )
}

export default Cart;