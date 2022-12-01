import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { exchangeLists } from '../redux/exchange/exchange';
import HomepageItem from './HomepageItem';
import './Homepage.css';

const Homepage = () => {
  const dispatch = useDispatch();
  const exchange = useSelector((state) => state.Exchange);
  useEffect(() => {
    if (exchange.length === 0) {
      dispatch(exchangeLists());
    }
  }, []);

  return (
    <div className="container">
      <ul className="exchange-list-conatiner">
        <h1 className="homepage-heading">Please Select Exchange</h1>
        {exchange.map((exchange) => {
          const { symbol, image, alt } = exchange;
          return (
            <HomepageItem
              key={exchange.symbol}
              symbol={symbol}
              image={image}
              alt={alt}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Homepage;
