
import '../App.css';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (    
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div class="container-fluid">
        <a class="navbar-brand" href="../"><img class="logo" src="https://res.cloudinary.com/lechon/image/upload/v1661947925/skates/logo_qt6gzh.png" alt="logo"></img></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <Link class="nav1" to="category/completes">Skates Armados</Link>
              </li>
              <li class="nav-item">
              <Link class="nav1" to="category/decks">Decks</Link>
              </li>
              <li class="nav-item">
              <Link class="nav1" to="category/cruisers">Cruisers</Link>
              </li>
              
                           
              <li class="nav-item2">
                <a class="nav2" href="./login.html"><b>Login</b></a>
              </li>
              <li class="nav-item2">
                <a class="nav2" href="./regist.html"><b>Registrarse</b></a>
              </li>
            </ul>
            
          </div>
          
          <CartWidget />
      </div>
      
    </nav>       
    </>
  );
}

export default NavBar;
