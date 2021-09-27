import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { CoinItem } from './CoinItem';

describe('CoinItem', () => {
  const { queryByText } = render(
    <Provider store={store}>
      <CoinItem
        name="name"
        symbol="symbol"
        hashing_algorithm="hashing_algorithm"
        description={{ en: 'description'}}
        market_data={{ market_cap: { eur: 0 }}}
        links={{homepage: ["Homepage"]}}
        genesis_date="genesis_date"
      />
    </Provider>,
  );
  it('render coin component with props', () => {
    expect(queryByText(/name/i)).toBeInTheDocument();
    expect(queryByText(/symbol/i)).toBeInTheDocument();
    expect(queryByText(/hashing_algorithm/i)).toBeInTheDocument();
    expect(queryByText(/0/i)).toBeInTheDocument();
    expect(queryByText(/Homepage/i)).toBeInTheDocument();
    expect(queryByText(/genesis_date/i)).toBeInTheDocument();
  });
});
