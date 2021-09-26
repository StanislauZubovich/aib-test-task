import PropTypes from 'prop-types';

export const CoinItem = props => {
  const { name, symbol, hashing_algorithm, description, market_data, links, genesis_date } = props;
  console.log(props)
  return (
    <div data-testid="card" className="cards__column">
      <div className="card">
        <div className="card__container">
          <span className="card__price">{name}</span>
          <span className="card__price">{symbol}</span>
          <span className="card__price">{hashing_algorithm}</span>
          <span className="card__price">{description.en}</span>
          <span className="card__price">{market_data.market_cap.eur}</span>
          <span className="card__price">{links.homepage[0]}</span>
          <span className="card__price">{genesis_date}</span>
        </div>
      </div>
    </div>
  );
};

CoinItem.propTypes = {
  name: PropTypes.string,
  symbol: PropTypes.string,
  hashing_algorithm: PropTypes.string,
  description: PropTypes.object,
  market_data: PropTypes.object,
  links: PropTypes.object,
  genesis_date: PropTypes.string,
};

export default CoinItem;
