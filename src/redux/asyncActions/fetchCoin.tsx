import { fetchData } from '../../utils/fetchData';
import { stopLoadingAction } from '../actionCreators/loading';
import { addCoinAction } from '../actionCreators/coin';
import { coinUrlBase } from '../../mocks/url'

export const fetchCoin = (coinId) => {
  return dispatch => {
    fetchData(coinUrlBase + coinId).then(data => {
      dispatch(addCoinAction(data));
      dispatch(stopLoadingAction());
    });
  };
};
