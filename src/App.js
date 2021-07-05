import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Categories from "./components/storefront/Categories";
import Products from "./components/storefront/Products";
import SimpleCart from "./components/cart/SimpleCart";
import {Switch, Route} from 'react-router-dom';
import ShoppingCart from "./components/cart/ShoppingCart";

function App() {
  return (
    <>
    <Header/>
    <Switch>
    <Route exact path="/">
    <Categories/>
    <Products/>
    <SimpleCart/>
    </Route>
    <Route exact path="/cart">
    <ShoppingCart/>
    </Route>
    </Switch>
     <Footer/>
    </>
  );
}

export default App;
