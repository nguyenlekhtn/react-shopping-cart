import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/index";
import Shop from "./components/Shop/index";
import Cart from "./components/Cart/index";
import NavBar from "./components/NavBar/index";
import Item from "./components/Item/index";
import CardGrid from "./components/CardGrid/index";
import PurchaseList from "./components/PurchaseList/PurchaseList";

import { useEffect, useState } from "react";

function App(props) {
  const [cartItemsList, setCartItemsList] = useState([]);
  const products = props.products;

  const changeCartItemAmount = (itemId, newAmount) => {
    setCartItemsList((prevList) =>
      prevList.map((item) => {
        const modified = { ...item };
        if (modified.itemId === itemId) modified.amount = newAmount;
        return modified;
      })
    );
  };

  const totalPay = cartItemsList.reduce((acc, current) => {
    const itemId = current.itemId;
    const price = products.filter((products) => products.id === itemId)[0]
      .price;
    return acc + current.amount * price;
  }, 0);

  const purchaseList = (
    <PurchaseList
      cartItemsList={cartItemsList}
      products={products}
      changeCartItemAmount={changeCartItemAmount}
    />
  );

  // const changeItemMount = (itemId) => {
  //   setCartItemsList((prevList) => {
  //     if (prevList.filter((item) => item.itemId === itemId).length === 0) {
  //     }
  //   });
  // };

  useEffect(() => {
    console.log(cartItemsList);
  });

  return (
    <Router>
      <div className="app">
        <NavBar amount={cartItemsList.length} />
        <main className="main">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/shop">
              <Shop>
                <CardGrid data={products} />
              </Shop>
            </Route>
            <Route exact path="/cart">
              <Cart
                purchaseList={purchaseList}
                setCartItemsList={setCartItemsList}
                totalPay={totalPay}
              />
            </Route>
            <Route path="/shop/:itemId">
              <Item setCartItemsList={setCartItemsList} />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
