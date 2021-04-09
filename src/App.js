
import './App.css';
import {NavBar} from './components/NavBar/NavBar.js';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";
import CartProvider from "./context/cartContext.js";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useState} from 'react';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavBar /> 
          <Switch>
            <Route path="/" exact component={ItemListContainer}></Route>
            
            <Route path="/category/:categoryId">
              <ItemListContainer greeting="Bienvenidos"/>
            </Route>

            <Route path="/item/:itemId">
              <ItemDetailContainer />
            </Route>

            
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
