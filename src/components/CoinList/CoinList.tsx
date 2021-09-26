import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { fetchCoin } from '../../redux/asyncActions/fetchCoin';
import Loader from "../Loader/Loader";
import CoinItem from "../CoinItem/CoinItem";

export const CoinList = () => {
  const { coinId } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootStateOrAny) => state.loading);
  const coinData = useSelector((state: RootStateOrAny) => state.coin);
  
  useEffect(() => {
    dispatch(fetchCoin(coinId));
  }, []);

  return (
    <div className="coin-list">
      {Object.keys(coinData.coin).length && (
        <CoinItem {...coinData.coin} key={coinData.id} />
      )}
      {isLoading && <Loader />}
    </div>
  );
};

export default CoinList;
