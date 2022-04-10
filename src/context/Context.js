import React, { useState, useEffect } from "react";
export const AppContext = React.createContext(null);

const ContextWrapper = (props) => {
  const [state, setState] = useState(() => {
    const saved = localStorage.getItem("state");
    const InitialValue = JSON.parse(saved);
    return (
      InitialValue || {
        products: [],
      }
    );
  });

  // {
  //   products: [
  //     {
  //       id: uuidv4(),
  //       name: "Lorem ipsum 1",
  //       description: "Lorem1",
  //       category: "Lor1",
  //       price: 4,
  //     },
  //     {
  //       id: uuidv4(),
  //       name: "Lorem ipsum 2",
  //       description: "Lorem2",
  //       category: "Lor2",
  //       price: 2,
  //     },
  //     {
  //       id: uuidv4(),
  //       name: "Lorem ipsum 3",
  //       description: "Lorem3",
  //       category: "Lor3",
  //       price: 3,
  //     },
  //   ],
  // }

  const [store, setStore] = useState({
    id: "",
    name: "",
    description: "",
    category: "0",
    price: "",
    numberItems: "",
    placeholder: "select",
  });

  const [options, setOptions] = useState({
    options: [
      // { label: "Wybierz opcje...", value: "0", isDisabled: true },
      { label: "podzespoły komputerowe", value: "podzespoły komputerowe" },
      { label: "urządzenia peryferyjne", value: "urządzenia peryferyjne" },
      { label: "oprogramowanie", value: "oprogramowanie" },
      { label: "inne", value: "inne" },
    ],
  });

  // const [items, setItems] = useState({});

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  // // Edit
  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem("items"));
  //   if (items) {
  //     setItems(items);
  //   }
  // }, []);
  // console.log(items);

  return (
    <AppContext.Provider
      value={{ state, setState, store, setStore, options, setOptions }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextWrapper;
