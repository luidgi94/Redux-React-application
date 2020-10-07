import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import ProductsPage from './pages/Produits';
import CartPage from './pages/Panier';
import './App.css';
const App = ()=> {
  // let location = useLocation();
 
    return (
      <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ProductsPage} exact />
          <Route path="/cart" component={CartPage} exact />
        </Switch>
      </BrowserRouter>
      </React.Fragment>
    );
}

export default App;
