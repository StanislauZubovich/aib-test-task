export const ADD_MARKETS = 'ADD_MARKETS';

const initialState = [];

export const marketsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_MARKETS:
      return [...state, ...payload];
    default:
      return state;
  }
};
