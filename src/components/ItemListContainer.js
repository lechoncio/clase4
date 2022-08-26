import '../App.css';
import Greeting from './Greeting';
import ItemCount from "./ItemCount";

const ItemListContainer = () => {
  const onAdd = (qty) => {
    alert("Has seleccionado" + qty + "items")
  }

  return (    
    <>
    <Greeting />
    <ItemCount stock={5} initial={1} onAdd={onAdd} />       
    
    </>
  );
}

export default ItemListContainer;