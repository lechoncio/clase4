import '../App.css';
import ItemCount from "../components/ItemCount";


const CounterContainer = () => {
  const onAdd = (qty) => {
    alert("Has seleccionado" + qty + "items")
  }

  return (    
    <>
    
    <ItemCount stock={5} initial={1} onAdd={onAdd} />        
    </>
  );
}

export default CounterContainer;