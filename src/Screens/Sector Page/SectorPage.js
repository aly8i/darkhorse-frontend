import React, { useEffect, useState } from 'react';
import infoImg from '../../Assets/oracle 2.png';
import CompaniesSuggested from '../Companies_suggested/CompaniesSuggested';
import Chart from '../../Components/Chart/Chart';
import RechartsWrapper from './RechartsWrapper';
import { useGetSectorDetailsQuery, useGetSectorsQuery, useGetSectorSuggestedCompanyQuery } from '../../redux/HomeAPI';
import { Row } from 'antd';
import './style.scss';
import { Helmet } from 'react-helmet-async';

export default function SectorPage() {
  const selectedSectorId = localStorage.getItem('sector');
  const { data: sector, isSuccess: isSectorSuccess, isLoading: isSectorsLoading } = useGetSectorDetailsQuery(selectedSectorId);
  const { data: companies, isSuccess, isLoading } = useGetSectorSuggestedCompanyQuery(selectedSectorId);

  const [seoTags, setSeoTags] = useState('');

  useEffect(() => {
    let concatenatedDescriptions = '';
    companies?.payload.forEach((item) => {
      concatenatedDescriptions += ' ' + item.seo_descriptions;
    });
    setSeoTags(concatenatedDescriptions);
  }, [companies]);

  return (
    <div>
      <Helmet>
        <meta name="description" content={seoTags} />
      </Helmet>
      <div className="container">
        <h1 className="fs-95 mt-header">{!isSectorsLoading & isSectorSuccess && sector && sector.payload ? sector.payload.name : ''}</h1>
      </div>
      <div className="hero-img-container mt-section">
        <img src={!isSectorsLoading & isSectorSuccess && sector && sector.payload && sector.payload.image !== '' && sector.payload.image !== 'Links' ? sector.payload.image : infoImg} alt="Information Technology" className="hero-img" />
      </div>

      <div className="container">
        <div className="row gy-5 g-xl-8 mt-6">
          <div className="col-xxl-12">
            {/* <Chart />
            <Row></Row> */}
            <RechartsWrapper
              selected="sector"
              // graphDates={graphDates}
              // graphIndianIndexPoints={graphIndianIndexPoints}
              // graphSuggestedStockPoints={graphSuggestedStockPoints}
              // indianIndexData={indianIndexData}
              // indianIndexSelected={indianIndexSelected}
              // suggestedStockData={suggestedStockData}
              // suggestedStockSelected={suggestedStockSelected}
              // onTooltipHover={onTooltipHover}
            />
          </div>
        </div>
      </div>

      <div className="d-flex container mt-section Overview-Information flex-column-tablet">
        <p className="fw-bold text-slide-up-animation-3">Overview</p>
        <p className="overview-content text-slide-up-animation-3">{sector?.payload?.description}</p>
      </div>
      <CompaniesSuggested companies={companies} isSuccess={isSuccess} isLoading={isLoading} />
    </div>
  );
}
