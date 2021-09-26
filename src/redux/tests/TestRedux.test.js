import { startLoadingAction, stopLoadingAction } from '../actionCreators/loading';
import { addMarketsAction } from '../actionCreators/markets';
import { addCoinAction } from '../actionCreators/coin';
import { store } from '../store';

describe('Redux testing', () => {
  it('checks initial markets list', () => {
    const { markets } = store.getState();
    expect(markets).toStrictEqual([]);
  });
  it('checks initial coin list', () => {
    const { coin } = store.getState();
    expect(coin).toStrictEqual({coin: {}});
  });
  it('checks initial loading is equal to false', () => {
    const { loading } = store.getState();
    expect(loading).toBe(true);
  });
  it('add markets', () => {
    store.dispatch(
      addMarketsAction([
        { coin: 1 },
        { coin: 2 },
      ]),
    );
    const { markets } = store.getState();
    expect(markets).toStrictEqual([
      { coin: 1 },
      { coin: 2 },
    ]);
  });
  it('add coin', () => {
    store.dispatch(
      addCoinAction([
        { coin: 1 },
      ]),
    );
    const { coin } = store.getState();
    expect(coin).toStrictEqual(
      { coin: [{coin: 1}] },
    );
  });
  it('checks start loading', () => {
    store.dispatch(startLoadingAction());
    const { loading } = store.getState();
    expect(loading).toBe(true);
  });
  it('checks stop loading', () => {
    store.dispatch(stopLoadingAction());
    const { loading } = store.getState();
    expect(loading).toBe(false);
  });
});
