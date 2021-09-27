import { ADD_COIN } from '../reducers/coinReducer';

export const addCoinAction = payload => ({
  type: ADD_COIN,
  payload,
});
