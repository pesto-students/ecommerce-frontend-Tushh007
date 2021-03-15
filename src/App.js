import React, { useEffect } from "react";
import { I18nProvider } from "./utils/i18n";
import { useStateValue } from "./store/StoreProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./views/Home/Home";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Category from "./views/Category/Category";
import Product from "./views/Product/Product";
import Wishlist from "./views/Wishlist/Wishlist";
import Cart from "./views/Cart/Cart";
import Checkout from "./views/Checkout/Checkout";
import { auth } from "./utils/firebase";

function App() {
  const [{ locale }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <I18nProvider locale={locale}>
        <div className="App">
          <Switch>
            <Route path="/wishlist">
              <Navbar />
              <Wishlist />
              <Footer />
            </Route>
            <Route path="/products/:category/:productName/:productId">
              <Navbar />
              <Product />
              <Footer />
            </Route>
            <Route path="/products/:category">
              <Navbar />
              <Category />
              <Footer />
            </Route>
            <Route path="/cart">
              <Navbar />
              <Cart />
              <Footer />
            </Route>
            <Route path="/checkout">
              <Navbar />
              <Checkout />
              <Footer />
            </Route>
            <Route path="/">
              <Navbar />
              <Home />
              <Footer />
            </Route>
          </Switch>
        </div>
      </I18nProvider>
    </Router>
  );
}

export default App;
