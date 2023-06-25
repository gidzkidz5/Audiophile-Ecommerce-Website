import { createContext } from "react";
import { useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  const updateCartData = (newData) => {
    setCartData((prevData) => {
      if (prevData.some((item) => item.currentProduct.id === newData.currentProduct.id)) {
        const updatedArray = prevData.map((item) => {
          if (item.currentProduct.id === newData.currentProduct.id) {
            return { ...item, itemQuantity: item.itemQuantity + newData.itemQuantity };
          } else {
          return item;
          }
        });
  
        return updatedArray;
      } else {
        return [...prevData, newData];
      }
    });
  };

  const updateCartItemQuantity = (productId, newQuantity) => {
    setCartData((prevData) => {
      const updatedArray = prevData.map((item) => {
        if (item.currentProduct.id === productId) {
          const updatedItem = { ...item, itemQuantity: newQuantity };
          return updatedItem.itemQuantity > 0 ? updatedItem : null;
        } else {
          return item;
        }
      });
      return updatedArray.filter((item) => item !== null);
    });
  };

  return (
    <CartContext.Provider value={{ cartData, updateCartData, updateCartItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};





// const updateCartData = (newData) => {
//   setCartData((prevData) => {
//     const existingItem = prevData.find((item) => item.currentProduct.id === newData.currentProduct.id);
//     if (existingItem) {
//       const updatedArray = prevData.map((item) => {
//         if (item.currentProduct.id === newData.currentProduct.id) {
//           return { ...item, itemQuantity: item.itemQuantity + newData.itemQuantity };
//         } else {
//           return item;
//         }
//       });
//       return updatedArray;
//     } else {
//       return [...prevData, newData];
//     }
//   });
// };