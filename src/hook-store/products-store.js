import { initStore } from "./use-store";

const ConfigureStore = () => {
  initStore(
    {
      TOGGLE_FAV: (prevState, productId) => {
        const prodIndex = prevState.products.findIndex(
          (p) => p.id === productId
        );
        const newFavStatus = !prevState.products[prodIndex].isFavorite;
        const updatedProducts = [...prevState.products];
        updatedProducts[prodIndex] = {
          ...prevState.products[prodIndex],
          isFavorite: newFavStatus,
        };
        return {
          products: updatedProducts,
        };
      },
    },
    {
      products: [
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
      ],
    }
  );
};

export default ConfigureStore;