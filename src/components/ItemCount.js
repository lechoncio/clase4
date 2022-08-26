
import { useEffect, useState } from "react";
import { Button } from "@mui/material";


const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
    const [count, setCount] =useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }

    return (
        <div>
            
            <div><Button variant="contained" size="small" onClick={increment}>+</Button>{"Cantidad "}
            {count}{" unidades"}
            <Button variant="contained" size="small" onClick={decrement}>-</Button><br /><br />
            {
                stock
                ? <Button variant="contained" color="success" onClick={() => onAdd(count)}>Agregar al Carrito</Button>
                : <Button variant="contained" disabled>Agregar al Carrito</Button>
            }</div>

        </div>
    )
}
export default ItemCount;