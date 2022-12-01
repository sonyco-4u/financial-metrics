import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { companyQuotesFromAPI } from '../../redux/companyquotes/companyquotes';

function CompanyItem({ exchange, name, symbol }) {
  const dispatch = useDispatch();
  const companySelected = () => {
    dispatch(companyQuotesFromAPI(exchange, symbol));
  };

  return (
    <li key={symbol} className="companyName">
      <Link
        to={`/quotes/${symbol}`}
        className="company-detail-container"
        onClick={companySelected}
      >
        <div className="company-symbol">{symbol}</div>
        <div className="company-name">{name}</div>
      </Link>
    </li>
  );
}
export default CompanyItem;
CompanyItem.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  exchange: PropTypes.string.isRequired,
};