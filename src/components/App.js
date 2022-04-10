import React, { useContext } from "react";
import { AppContext } from "./../context/Context";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";

function App() {
  const context = useContext(AppContext);
  return (
    <div className="App">
      <AddProduct />
      <ProductList products={context.state.products} />
    </div>
  );
}

export default App;
