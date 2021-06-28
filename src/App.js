import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Categories from "./components/storefront/Categories";
import Products from "./components/storefront/Products";
import SimpleCart from "./components/cart/SimpleCart";

function App() {
  return (
    <>
    <Header/>
    <Categories/>
    <Products/>
    <SimpleCart/>
     <Footer/>
    </>
  );
}

export default App;
