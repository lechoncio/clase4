

import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Item from "./components/Item";
import { Button } from "@mui/material";



//incorporo el ejercicio de la clase 4 pero con skates

const App = () => {

  return (
    <>  
    
    <NavBar />
    <ItemListContainer />
    
    <hr /> 
    <h3>abajo EJERCICIO CLASE 4 </h3>   

    <Item imagen= "??" tipo="Complete" marca="Santa Cruz" modelo= "Santa Cruz Screaming" precio= {10000} descripcion= "Skateboard pre armado con los mejores productos de la marca, Hecha de 7 capas de maple canadiense." />
    <Item imagen= "??" tipo="Deck" marca="Creature" modelo= "Creature Russell Skull" precio= {8000} descripcion= "Creature Deck, Fabricada con 7 capas de maple canadiense prensado individualmente para una mayor resistencia de la misma." /> 
    <hr />
    </>
    )
  
}

export default App;