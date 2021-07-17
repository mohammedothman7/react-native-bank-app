import React, { useState, createContext } from "react";

export const Context = createContext();

export const Provider = (props) => {
  const [authToken, setAuthToken] = useState(null);

  return (
    <Context.Provider value={[authToken, setAuthToken]}>
      {props.children}
    </Context.Provider>
  );
};
