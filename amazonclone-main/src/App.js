import "./App.css";
import Header from "./components/Headers/Header";
import AvaliableList from "./components/Home/AvaliableList";
import { CartItemsProvider } from "./store/cart-context";
import CartList from "./components/Cart/CartList";
import Home from "./pages/Home";
import { Route, Redirect } from "react-router-dom";
import Cart from "./pages/Cart";
import Footer from "./components/Home/Footer";
import Checkout from "./pages/Checkout";
import { AddressContex } from "./store/addressContext";
function App() {
  return (
    <CartItemsProvider>
      <AddressContex>
        <Route path="*">
          <Redirect to="/Home" ></Redirect>
        </Route>
        <Route path="/Home">
          <Home></Home>
        </Route>
        <Route path="/Cart" exact>  
          <Cart></Cart>
        </Route>
        <Route path="/Checkout">
          <Checkout></Checkout>
        </Route>
      </AddressContex>
    </CartItemsProvider>
  );
}

export default App;
