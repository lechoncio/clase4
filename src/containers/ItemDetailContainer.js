import { useEffect, useState } from "react";
import promesaDetail from "../utils/promesaDetail";
import {data} from "../utils/data.js";
import ItemDetail from "../components/ItemDetail";




const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});

    useEffect(() => {
        promesaDetail(2000, data[20])
        .then(result => setDato(result))
        .catch(err => console.log(err))
    }, []);

    return (
        <ItemDetail item={dato} />
        )
    }
       
    


export default ItemDetailContainer;
