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

  const [store, setStore] = useState({
    id: "",
    name: "",
    description: "",
    category: "-1",
    price: "",
    numberItems: "",
  });

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, setState, store, setStore }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextWrapper;
