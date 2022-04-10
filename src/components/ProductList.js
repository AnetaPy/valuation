import React, { useContext } from "react";
import { AppContext } from "./../context/Context";
import Product from "./Product";
import "./../style/ProductList.css";

const ProductList = (props) => {
  const context = useContext(AppContext);

  // Delete function
  const deleteProduct = (id) => {
    let products = [...context.state.products];
    products = products.filter((product) => product.id !== id);
    context.setState({
      products,
    });
  };

  // Display products
  const products = context.state.products.map((product) => (
    <Product key={product.id} product={product} delete={deleteProduct} />
  ));

  // Summary
  const summaryArray = [];
  let sum = 0.0;
  props.products.forEach((product) => {
    summaryArray.push(Number(product.price));
  });
  for (let i = 0; i < summaryArray.length; i++) {
    sum += summaryArray[i];
  }
  const numberItems = summaryArray.length;
  let computerComponents = [0, 0];
  let devices = [0, 0];
  let software = [0, 0];
  let others = [0, 0];
  props.products.forEach((product) => {
    if (product.category === "podzespoły komputerowe") {
      computerComponents[0] += 1;
      computerComponents[1] += Number(product.price);
    } else if (product.category === "urządzenia peryferyjne") {
      devices[0] += 1;
      devices[1] += Number(product.price);
    } else if (product.category === "oprogramowanie") {
      software[0] += 1;
      software[1] += Number(product.price);
    } else {
      others[0] += 1;
      others[1] += Number(product.price);
    }
  });

  return (
    <>
      {numberItems ? (
        <div className="productList">
          <div className="content">
            <div className="headings">
              <h2>Nazwa</h2>
              <h2>Opis</h2>
              <h2>Kategoria</h2>
              <h2>Cena</h2>
            </div>
            <div className="products">{products}</div>
          </div>
          <div className="summary">
            <h2>Podsumowanie</h2>
            <div className="contentSummary">
              <p>{numberItems}</p>
              <p>{numberItems}</p>
              <p>{numberItems}</p>
              <p>{sum.toFixed(2)}</p>
            </div>
            <div className="contentSummaryCategory">
              <div className="summaryCategoryHeadings">
                <h3>Kategoria</h3>
                <h3>Ilość pozycji</h3>
                <h3>Koszty</h3>
              </div>
              <div className="summaryCategoryItems">
                <div className="category">
                  <p>podzespoły komputerowe</p>
                  <p>urządznia perfyferyjne</p>
                  <p>oprogramowanie</p>
                  <p>inne</p>
                </div>
                <div className="numberItems">
                  <p>{computerComponents[0]}</p>
                  <p>{devices[0]}</p>
                  <p>{software[0]}</p>
                  <p>{others[0]}</p>
                </div>
                <div className="costs">
                  <p>{computerComponents[1]}</p>
                  <p>{devices[1]}</p>
                  <p>{software[1]}</p>
                  <p>{others[1]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProductList;
