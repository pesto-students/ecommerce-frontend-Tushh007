import React from 'react';
import { I18nProvider } from './utils/i18n';
import { useStateValue } from './store/StoreProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './views/Home/Home';
import Navbar from './components/navbar/Navbar';
import './App.css';

function App() {
  const [{ locale }] = useStateValue();
  return (
    <Router>
      <I18nProvider locale={locale}>
        <div className="App">
          <Switch>
            <Route path="/wishlist">
              <Navbar />
              <p>wishlist page</p>
              <Footer />
            </Route>
            <Route path="/cart">
              <Navbar />
              <p>cart page</p>
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
