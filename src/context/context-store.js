import React, { useState } from "react";

export const StoreContext = React.createContext({
  products: [],
  toggleFav: (productId) => {},
});

const StoreContextProvider = (props) => {
  const [productsList, setProductsList] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

  const toggleFavoriteHandler = (productId) => {
    setProductsList((curProductsList) => {
      const prodIndex = curProductsList.findIndex((p) => p.id === productId);
      const newFavStatus = !curProductsList[prodIndex].isFavorite;
      const updatedProducts = [...curProductsList];
      updatedProducts[prodIndex] = {
        ...curProductsList[prodIndex],
        isFavorite: newFavStatus,
      };
      return updatedProducts;
    });
  };

  return (
    <StoreContext.Provider
      value={{
        products: productsList,
        toggleFav: toggleFavoriteHandler,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;