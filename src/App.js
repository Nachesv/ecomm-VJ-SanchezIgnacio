
import './App.css';
import {NavBar} from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {CartProvider} from "./context/CartContext";
import {Cart} from './components/Cart/Cart.js'



function App() {
  return (
    <CartProvider>
    <BrowserRouter >
      <div className="App">
      <NavBar />
        <Switch >
          <Route exact path='/'>
            <ItemListContainer />
          </Route>

          <Route exact path='/category/:categoryId'>
              <ItemListContainer />
          </Route>


          <Route exact path='/item/:itemId'  >
              <ItemDetailContainer />
          </Route>

          <Route exact path="/cart">
              <Cart />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
