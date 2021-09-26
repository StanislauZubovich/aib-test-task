export const ADD_COIN = 'ADD_COIN';

const initialState = {};

export const coinReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_COIN:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
