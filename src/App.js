

import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemContainer from "./containers/ItemContainer";
import {data} from "./utils/data"
import Greeting from "./components/Greeting";


const App = () => {

  return (
    <>  
    
    <NavBar />
    <Greeting />
    <ItemContainer items={data} />
    <ItemListContainer />
    </>
    )
  
}

export default App;

//agregado <ItemContainer />