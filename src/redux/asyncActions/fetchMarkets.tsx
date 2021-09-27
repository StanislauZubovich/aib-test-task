import { fetchData } from '../../utils/fetchData';
import { stopLoadingAction } from '../actionCreators/loading';
import { addMarketsAction } from '../actionCreators/markets';
import { marketsUrl } from '../../mocks/url'

export const fetchMarkets = () => {
  return dispatch => {
    fetchData(marketsUrl).then(data => {
      dispatch(addMarketsAction(data));
      dispatch(stopLoadingAction());
    });
  };
};
