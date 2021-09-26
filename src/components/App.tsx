import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { fetchMarkets } from '../redux/asyncActions/fetchMarkets';
import Main from "./Main/main";
import Loader from "./Loader/Loader";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootStateOrAny) => state.loading);
  const markets = useSelector((state: RootStateOrAny) => state.markets);

  useEffect(() => {
    dispatch(fetchMarkets());
  }, []);

  return (
    <div className="wrapper">
      {markets.length && (
        <main className="main">
          <div className="main__block">
            <Main/>
          </div>
        </main>
      )}
      {isLoading && <Loader />}
    </div>
  );
};

export default App;
