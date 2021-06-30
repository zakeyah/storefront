import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Categories from "./components/storefront/Categories";
import Products from "./components/storefront/Products";
import SimpleCart from "./components/cart/SimpleCart";
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Header/>
    <Switch>
    <Route exact path="/">
    <Categories/>
    <Products/>
    </Route>
    <Route exact path="/cart">
    <SimpleCart/>
    </Route>
    </Switch>
     <Footer/>
    </>
  );
}

export default App;
