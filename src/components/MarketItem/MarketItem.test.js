import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { MarketItem } from './MarketItem';

describe('MarketItem', () => {
  const { queryByText, getByAltText } = render(
    <Provider store={store}>
      <MarketItem
        id="id"
        image="image"
        name="name"
        symbol="symbol"
        current_price={999}
        high_24h={1000}
        low_24h={998}
      />
    </Provider>,
  );
  it('render coin component with props', () => {
    expect(queryByText(/name/i)).toBeInTheDocument();
    expect(getByAltText(/name/i)).toBeInTheDocument();
    expect(queryByText(/symbol/i)).toBeInTheDocument();
    expect(queryByText(/999/i)).toBeInTheDocument();
    expect(queryByText(/1000/i)).toBeInTheDocument();
    expect(queryByText(/998/i)).toBeInTheDocument();
  });
});
