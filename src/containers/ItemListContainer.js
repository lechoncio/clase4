import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import { firestoreFetch } from "../utils/firebaseConfig";



export default function ItemListContainer(props) {

  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    firestoreFetch(idCategory)
      .then(result => setProducts(result))
      .catch(err => console.log(err))
  }, [idCategory])

    
    return (
      <div>
        <h1>{props.greetings}</h1>
        <ItemList items={products} />
      </div>
    );
  }