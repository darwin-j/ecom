export const initialState = {
  basket: [],
  user: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "addToBasket":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "removeFromBasket":
      const index = state.basket.findIndex((item) => item.id === action.id);
      let newBasket = [...state.basket];
      console.log(newBasket);
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log(`item with id ${action.id} not found`);
      }
      console.log(newBasket);
      return {
        ...state,
        basket: newBasket,
      };

    case "setUser":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
