import React, { useContext } from "react";
import { AppContext } from "./../context/Context";
import { v4 as uuidv4 } from "uuid";
import "./../style/AddProduct.css";

const AddProduct = () => {
  const context = useContext(AppContext);
  let productId = uuidv4();

  // Events
  const handleEvent = (e) => {
    const value = e.target.value;
    context.setStore({
      ...context.store,
      [e.target.name]: value,
      [e.target.description]: value,
      [e.target.price]: value,
    });
  };

  // Add product to state
  const addProduct = () => {
    const { name, description, category, price } = context.store;
    if (
      name.length < 2 ||
      description.length < 2 ||
      category.length < 2 ||
      price === 0
    )
      return alert("Wypełnij wszystkie pola formularza.");
    const products = [...context.state.products];
    const product = {
      id: productId,
      name,
      description,
      category,
      price,
    };
    products.push(product);
    context.setState({ products });
    // Clear form
    context.setStore({
      id: "",
      name: "",
      description: "",
      category: "",
      price: "",
    });
  };

  return (
    <div className="addProduct">
      <h1>Dodaj produkt</h1>
      <form action="">
        <label>Nazwa</label>
        <input
          type="text"
          name="name"
          value={context.store.name}
          onChange={handleEvent}
        />
        <br />
        <label>Opis</label>
        <input
          type="text"
          name="description"
          value={context.store.description}
          onChange={handleEvent}
        />
        <div className="selectContainer">
          <label>Kategoria</label>
          <select
            name="category"
            value={context.store.category}
            onChange={handleEvent}
          >
            <option value="-1">Wybierz opcje...</option>
            <option value="podzespoły komputerowe">
              podzespoły komputerowe
            </option>
            <option value="urządzenia peryferyjne">
              urządzenia peryferyjne
            </option>
            <option value="oprogramowanie">oprogramowanie</option>
            <option value="inne">inne</option>
          </select>
        </div>
        <label>Cena</label>
        <input
          type="number"
          name="price"
          min="0"
          max="10000"
          step="0.0"
          value={context.store.price}
          onChange={handleEvent}
        />
      </form>
      <button className="save" onClick={addProduct}>
        Zapisz
      </button>
    </div>
  );
};

export default AddProduct;
