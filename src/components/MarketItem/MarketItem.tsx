import React from 'react';
import PropTypes from 'prop-types';
import { cardsData } from '../../mocks/data';

export const MarketItem = props => {
  const { id, image, name, symbol, current_price, high_24h, low_24h } = props;

  return (
    <article className="card">
      <a href={`/coin/${id}`} className="card__container">
        <div className="card__image" >
          <img src={image} alt={name} width="50" height="50" />
        </div>
        <div className="card__header">
          <h3 className="card__title">{name} <span className="card__title--subtitle">{symbol}</span></h3>
        </div>
        <div className="card__main">
          <span className="card__price"><span className="card__price--label">{cardsData.currentPriceLabel}</span>{current_price}</span>
          <span className="card__price"><span className="card__price--label">{cardsData.high24Label}</span>{high_24h}</span>
          <span className="card__price"><span className="card__price--label">{cardsData.low24Label}</span>{low_24h}</span>
        </div>
      </a>
    </article>
  );
};

MarketItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  current_price: PropTypes.number.isRequired,
  high_24h: PropTypes.number.isRequired,
  low_24h: PropTypes.number.isRequired,
};

export default MarketItem;
