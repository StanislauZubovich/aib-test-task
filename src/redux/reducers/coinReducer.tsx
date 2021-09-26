export const ADD_COIN = 'ADD_COIN';

const initialState = {
  coin: {}
};

export const coinReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_COIN:
      return { ...state, coin: payload };
    default:
      return state;
  }
};
