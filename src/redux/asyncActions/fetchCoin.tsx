import { fetchData } from '../../utils/fetchData';
import { stopLoadingAction } from '../actionCreators/loading';
import { addMarketsAction } from '../actionCreators/markets';
import { coinUrlBase } from '../../mocks/url'

export const fetchCoin = (coinId) => {
  return dispatch => {
    fetchData(coinUrlBase + coinId).then(data => {
      dispatch(addMarketsAction(data));
      dispatch(stopLoadingAction());
    });
  };
};
