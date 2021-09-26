import PropTypes from 'prop-types';

export const MarketItem = props => {
  const { id, image, name, symbol, current_price, high_24h, low_24h } = props;

  return (
    <div data-testid="card" className="cards__column">
      <div className="card">
        <div className="card__image">
          <a href={`/coin/${id}`}>
            <img src={image} alt={name} width="50" height="50" />
          </a>
        </div>
        <div className="card__content">
          <h3 className="card__title">{name} {symbol}</h3>
        </div>
        <div className="card__container">
          <span className="card__price">{current_price}</span>
          <span className="card__price">{high_24h}</span>
          <span className="card__price">{low_24h}</span>
        </div>
      </div>
    </div>
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
