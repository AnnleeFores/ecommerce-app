import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setshowCart] = useState(false);
  const [cartItem, setcartItem] = useState();
  const [totalPrice, settotalPrice] = useState();
  const [totalQuantities, settotalQuantities] = useState();
  const [qty, setQty] = useState(1);

  return (
    <Context.Provider
      value={{
        showCart,
        cartItem,
        totalPrice,
        totalQuantities,
        qty,
      }}
    >
      {children}
    </Context.Provider>
  );
};
