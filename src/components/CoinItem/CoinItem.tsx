import PropTypes from 'prop-types';
import { coinData } from '../../mocks/data';

export const CoinItem = props => {
  const { name, symbol, hashing_algorithm, description, market_data, links, genesis_date } = props;
  console.log(props)
  return (
    <article className="coin">
      <div className="coin__container">
        <div className="coin__header">
          <h3 className="coin__title">{name} <span className="coin__title--subtitle">{symbol}</span></h3>
        </div>
        <div className="coin__main">
          <p className="card__info"><a href={links.homepage[0]}>{coinData.HomepageLinkLabel}</a></p>
          <p className="card__info">{coinData.marketCapLabel}{market_data.market_cap.eur}</p>
          <p className="card__info" dangerouslySetInnerHTML={{__html:description.en}}></p>
          {hashing_algorithm && 
            <p className="card__info">{coinData.hashAlgorithmLabel}{hashing_algorithm}</p>
          }
          {genesis_date && 
            <p className="card__info">{coinData.genesisDataLabel}{genesis_date}</p>
          }
        </div>
      </div>
    </article>
  );
};

CoinItem.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  hashing_algorithm: PropTypes.string,
  description: PropTypes.object,
  market_data: PropTypes.object.isRequired,
  links: PropTypes.object.isRequired,
  genesis_date: PropTypes.string,
};

export default CoinItem;
