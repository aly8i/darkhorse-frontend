import React from 'react';
import './style.scss';
import AnimatingNumber from './NumberAnimation';

const MyChartInfo = (props) => {
  const { companyLabel, companyPrice, indexLabel, indexPrice } = props;
  return (
    <div className="myChart-info">
      <div className="myChart-infoCompany">
        <p className="myChart-label">{companyLabel}</p>
        <p className="myChart-price">
          {/* ₹<span className="myChart-priceValue">{companyPrice}</span> */}
          ₹<AnimatingNumber value={companyPrice} />
        </p>
      </div>
      <div className="myChart-infoIndex">
        <p className="myChart-label">
          {indexLabel}
          <span className="myChart-lableName">-</span>
        </p>
        <p className="myChart-price">
          {/* ₹<span className="myChart-priceValue">{indexPrice}</span> */}
          ₹<AnimatingNumber value={indexPrice} />
        </p>
      </div>
    </div>
  );
};

export default MyChartInfo;
