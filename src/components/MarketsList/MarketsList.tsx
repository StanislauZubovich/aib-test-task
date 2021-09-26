import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import Loader from "../Loader/Loader";
import { MarketItem } from '../MarketItem/MarketItem';
import { fetchMarkets } from '../../redux/asyncActions/fetchMarkets';

export const MarketList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootStateOrAny) => state.loading);
  const markets = useSelector((state: RootStateOrAny) => state.markets);
  
  useEffect(() => {
    dispatch(fetchMarkets());
  }, []);

  return (
    <section className="markets-list">
      {markets.length && markets.map(item => (
          <MarketItem {...item} key={item.id} />
        ))
      }
      {isLoading && <Loader />}
    </section>
  );
};

export default MarketList;
