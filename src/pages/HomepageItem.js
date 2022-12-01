import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { companyDataFromAPI } from '../redux/company/company';

function HomepageItem({ symbol, image, alt }) {
  const dispatch = useDispatch();
  const exchangeSelected = () => {
    const exchange = symbol;
    dispatch(companyDataFromAPI(exchange));
  };

  return (
    <li key={symbol}>
      <Link
        to={`/company/${symbol}`}
        className="exchange-detail-container"
        onClick={exchangeSelected}
      >
        <div className="imgContainer">
          <img src={image} alt={alt} />
        </div>
      </Link>
    </li>
  );
}
export default HomepageItem;

HomepageItem.propTypes = {
  alt: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};
