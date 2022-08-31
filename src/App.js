

import NavBar from "./components/NavBar";
import CounterContainer from "./containers/CounterContainer";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Greeting from "./components/Greeting";


const App = () => {

  return (
    <>  
    <NavBar />
    <p class="entrega">Entrega item detail container</p> 
    <ItemDetailContainer /> 
    <p class="entrega">FIN Entrega item detail container</p>
    

    {/*<Greeting /><ItemListContainer /><CounterContainer />
    
    
    */}
    
    </>
    )
  
}

export default App;

