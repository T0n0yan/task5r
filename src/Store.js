import { createStore } from "redux";

const initialState = {
  addedItems: 0,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "first":
      return { ...state, addedItems: payload };
    case "magazine":
      return { ...state, MagazineCount: payload };
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
