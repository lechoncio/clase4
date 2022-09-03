

import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Greeting from "./components/Greeting";
import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = () => {

  return (
    <>
    <BrowserRouter> 
    <NavBar />
    <Greeting />
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:id" element={<ItemListContainer />} />
      <Route path="/item/:id" element={<ItemDetailContainer />} />
    
    
    </Routes>
    </BrowserRouter>

    {/*
    <p class="entrega">Entrega item detail container</p> 
    <ItemDetailContainer /> 
    <p class="entrega">FIN Entrega item detail container</p>
    
    
    */}
    
    </>
    )
  
}

export default App;

