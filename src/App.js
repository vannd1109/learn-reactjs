import CartFeatute from 'features/Cart';
import ProductFeature from 'features/Product';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header';
import NotFound from "./components/NotFound";
import AlbumFuture from "./features/Album";
import TodoFeature from './features/Todo';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={ProductFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFuture} />
        <Route path="/products" component={ProductFeature} />
        <Route path="/cart" component={CartFeatute} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
