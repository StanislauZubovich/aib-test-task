import { useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { fetchCoin } from '../../redux/asyncActions/fetchCoin';
import Loader from "../Loader/Loader";
import CoinItem from "../CoinItem/CoinItem";
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

export const CoinList = () => {
  const { coinId } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootStateOrAny) => state.loading);
  const coinData = useSelector((state: RootStateOrAny) => state.coin);
  
  useEffect(() => {
    dispatch(fetchCoin(coinId));
  }, []);

  return (
    <div data-testid="coin-list">
      {Object.keys(coinData.coin).length && (
        <div className="blah">
          <CoinItem {...coinData.coin} key={coinData.id} />
        </div>
      )}
      {isLoading && <Loader />}
    </div>
  );
};

export default CoinList;
