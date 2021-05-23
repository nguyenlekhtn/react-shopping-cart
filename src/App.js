import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/index";
import Shop from "./components/Shop/index";
import Cart from "./components/Cart/index";
import NavBar from "./components/NavBar/index";
import Item from "./components/Item/index";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <main className="main">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/shop">
              <Shop />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route path="/shop/:itemId">
              <Item />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
