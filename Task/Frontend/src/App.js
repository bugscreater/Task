import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Signin from './pages/Signin';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Placeorder from './pages/Placeorder';

import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <div> 
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}  exact = {true}/>
        <Route path="/register" element={<Registration/>} exact = {true} />
        <Route path="/signin" element={<Signin/>} exact = {true}/>
        <Route path = "/products" element = {<Products/>} exact = {true}/>
        <Route path = "/cart" element = {<Cart/>} exact = {true}/>
        <Route path = "/placeorder" element = {<Placeorder/>} exact = {true}/>

       
      </Routes>
    </BrowserRouter>

    </div>

  );
}

export default App;
