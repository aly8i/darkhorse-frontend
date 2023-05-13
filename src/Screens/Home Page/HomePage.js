import React, { useEffect, useState } from 'react';
import SecImage from '../../Assets/image section.png';
import { useGetCompaniesByTagQuery, useGetLatestIdeasQuery, useGetSectorsQuery, useGetTopGainersQuery, useGetTopLosersQuery, useGetTrendingIdeasQuery } from '../../redux/HomeAPI';
import { useSendMessageMutation } from '../../redux/WebSocket';
import { PAGE_IDS } from './PageIds';
import HomePageSlider from '../../Components/HomePageSlider/HomePageSlider';
import AnimatingNumber from '../../Components/AnimatingNumber/animation-number';
import classNames from 'classnames';

import './style.scss';
import { pageURLs } from '../../utils/routingConstants';
import LoopAnimation from "../../Components/AnimationsComponent/Animation2/Animation2.jsx"
export default function HomePage() {
  const [topGainersPageNo, setTopGainersPageNo] = useState(1);
  const [allTopGainers, setAllTopGainers] = useState([]);
  const { data: topGainers, isLoading: isTopGainersLoading, isSuccess: isTopGainersSuccess } = useGetTopGainersQuery(topGainersPageNo);

  const [topLosersPageNo, setTopLosersPageNo] = useState(1);
  const { data: topLosers, isLoading: isTopLosersLoading, isSuccess: isTopLoserSuccess } = useGetTopLosersQuery(topLosersPageNo);
  const [allTopLosers, setAllTopLosers] = useState([]);
  const { data: sectors, isLoading: isSectorsLoading, isSuccess: isSectorsSuccess } = useGetSectorsQuery();
  const [latestIdea, setLatestIdea] = useState({
    Id: 188,
    name: 'KPR MILLS',
    bse: 'NSE',
    date: '2022-10-01T18:06:40.000Z',
    code: 'KPRMILL',
    g_f_code: 'NSE:KPRMILL',
    price: 572.05,
    gain: 36.05,
    gain_perc: 0.06725746269,
    price_suggested: 536,
    pe: 22.77,
    heading: 'Significant capex and Solid Opm, management is confident of achieving 15-20% revenue growth in the coming period.',
    seo_descriptions: 'kpr mills | textiles | strong management',
    relative_index: 'INDEXNSE:NIFTY_50',
    image: 'https://i0.wp.com/darkhorsestocks.com/wp-content/uploads/2022/10/banner.jpeg?w=1600&ssl=1',
    paid: true,
    description:
      'K.P.R. Mill is engaged in one of the largest vertically integrated apparel manufacturing Companies in India. The Company produces Yarn, Knitted Fabric, Readymade Garments and Wind power. The company has presence across different sectors which includes textiles, Sugar and ethanol, power and somewhat automobile products as well.',
    sectorId: 7,
    categoryId: 4,
  });
  const [debtFreePageNo, setDebtFreePageNo] = useState(1);
  const {
    data: debtFreeCompanies,
    isLoading: isDebtFreeCompaniesLoading,
    isSuccess: isDebtFreeCompaniesSuccess,
  } = useGetCompaniesByTagQuery({
    id: PAGE_IDS.DEBT_FREE_COMPANIES,
    pageNo: debtFreePageNo,
  });
  const [allDebtFreeCompanies, setAllDebtFreeCompanies] = useState([]);

  const {
    data: holdingCompanies,
    isLoading: isHoldingCompaniesLoading,
    isSuccess: isHoldingCompaniesSuccess,
  } = useGetCompaniesByTagQuery({
    id: PAGE_IDS.HOLDING_COMPANIES,
    pageNo: debtFreePageNo,
  });
  const {
    data: ITCompanies,
    isLoading: isITCompaniesLoading,
    isSuccess: isITCompaniesSuccess,
  } = useGetCompaniesByTagQuery({
    id: PAGE_IDS.IT_COMPANIES,
    pageNo: debtFreePageNo,
  });
  const {
    data: pharmaceuticalCompanies,
    isLoading: isPharmaceuticalCompaniesLoading,
    isSuccess: isPharmaceuticalCompaniesSuccess,
  } = useGetCompaniesByTagQuery({
    id: PAGE_IDS.PHARMACEUTICAL_COMPANIES,
    pageNo: debtFreePageNo,
  });
  const {
    data: pennyStockCompanies,
    isLoading: isPennyStockCompaniesLoading,
    isSuccess: isPennyStockCompaniesSuccess,
  } = useGetCompaniesByTagQuery({
    id: PAGE_IDS.PNNY_STOCKS_COMPANIES,
    pageNo: debtFreePageNo,
  });
  const {
    data: chemicalsCompanies,
    isLoading: isChemicalsCompaniesLoading,
    isSuccess: isChemicalsCompaniesSuccess,
  } = useGetCompaniesByTagQuery({
    id: PAGE_IDS.CHEMICAL_COMPANIES,
    pageNo: debtFreePageNo,
  });

  useEffect(() => {
    if (!isTopGainersLoading && isTopGainersSuccess && topGainers && topGainers.payload && topGainers.payload.length > 0) {
      setAllTopGainers((prev) => [...prev, ...topGainers.payload]);
    }
  }, [isTopGainersLoading, isTopGainersSuccess, topGainers]);

  useEffect(() => {
    if (!isTopLosersLoading && isTopLoserSuccess && topLosers && topLosers.payload && topLosers.payload.length > 0) {
      setAllTopLosers((prev) => [...prev, ...topLosers.payload]);
    }
  }, [isTopLosersLoading, isTopLoserSuccess, topLosers]);

  useEffect(() => {
    if (!isDebtFreeCompaniesLoading && isDebtFreeCompaniesSuccess && debtFreeCompanies && debtFreeCompanies.payload && debtFreeCompanies.payload.length > 0) {
      setAllDebtFreeCompanies((prev) => [...prev, ...debtFreeCompanies.payload]);
    }
  }, [isDebtFreeCompaniesLoading, isDebtFreeCompaniesSuccess, debtFreeCompanies]);

  const { data: latestIdeas, isLoading: isLatestLoading, isSuccess: isLatestSuccess } = useGetLatestIdeasQuery();
  const { data: trendingIdeas, isLoading: isTrendingLoading, isSuccess: isTrendingSuccess } = useGetTrendingIdeasQuery();
  const [sendMessage, { data: message, isLoading: isMessageSendLoading, isSuccess: isMessageSendSuccess }] = useSendMessageMutation();

  useEffect(() => {
    let symbols = [];
    if (!isTopGainersLoading && isTopGainersSuccess && topGainers?.payload) {
      topGainers.payload.map((cp) => {
        if (cp) symbols.push({ symbol: `${cp.code}:${cp.bse}` });
      });
    }
    if (!isTopLosersLoading && isTopLoserSuccess && topLosers?.payload) {
      topLosers.payload.map((cp) => {
        if (cp) symbols.push({ symbol: `${cp.code}:${cp.bse}` });
      });
    }
    if (!isLatestLoading && isLatestSuccess && latestIdeas?.payload) {
      latestIdeas.payload.map((cp) => {
        if (cp) symbols.push({ symbol: `${cp.code}:${cp.bse}` });
      });
      let ideas = [...latestIdeas.payload];
      ideas.sort((x, y) => {
        return new Date(x.date) - new Date(y.date);
      });
      setLatestIdea(ideas[ideas.length - 1]);
    }
    if (!isTrendingLoading && isTrendingSuccess && trendingIdeas?.payload) {
      trendingIdeas.payload.map((cp) => {
        if (cp) symbols.push({ symbol: `${cp.code}:${cp.bse}` });
      });
    }
    if (!isDebtFreeCompaniesLoading && isDebtFreeCompaniesSuccess && debtFreeCompanies?.payload) {
      debtFreeCompanies.payload.map((cp) => {
        if (cp) symbols.push({ symbol: `${cp.code}:${cp.bse}` });
      });
    }

    if (!isHoldingCompaniesLoading && isHoldingCompaniesSuccess && holdingCompanies?.payload) {
      holdingCompanies.payload.map((cp) => {
        if (cp) symbols.push({ symbol: `${cp.code}:${cp.bse}` });
      });
    }
    if (!isITCompaniesLoading && isITCompaniesSuccess && ITCompanies?.payload) {
      ITCompanies.payload.map((cp) => {
        if (cp) symbols.push({ symbol: `${cp.code}:${cp.bse}` });
      });
    }
    if (!isPharmaceuticalCompaniesLoading && isPharmaceuticalCompaniesSuccess && pharmaceuticalCompanies?.payload) {
      pharmaceuticalCompanies.payload.map((cp) => {
        if (cp) symbols.push({ symbol: `${cp.code}:${cp.bse}` });
      });
    }
    if (!isPennyStockCompaniesLoading && isPennyStockCompaniesSuccess && pennyStockCompanies?.payload) {
      pennyStockCompanies.payload.map((cp) => {
        if (cp) symbols.push({ symbol: `${cp.code}:${cp.bse}` });
      });
    }
    if (!isChemicalsCompaniesLoading && isChemicalsCompaniesSuccess && chemicalsCompanies?.payload) {
      chemicalsCompanies.payload.map((cp) => {
        if (cp) symbols.push({ symbol: `${cp.code}:${cp.bse}` });
      });
    }
    sendMessage(symbols);
  }, [
    isTopGainersLoading,
    isTopGainersSuccess,
    isTopLosersLoading,
    isDebtFreeCompaniesLoading,
    isDebtFreeCompaniesSuccess,
    isTopLoserSuccess,
    isTrendingLoading,
    isTrendingSuccess,
    isLatestLoading,
    isLatestSuccess,
    isHoldingCompaniesLoading,
    isHoldingCompaniesSuccess,
    isITCompaniesLoading,
    isITCompaniesSuccess,
    isPharmaceuticalCompaniesLoading,
    isPharmaceuticalCompaniesSuccess,
    isPennyStockCompaniesLoading,
    isPennyStockCompaniesSuccess,
    isChemicalsCompaniesLoading,
    isChemicalsCompaniesSuccess,
  ]);
  
  const latestIdeaGain = latestIdea.price ? latestIdea.price - latestIdea.price_suggested : 0;
  const latestIdeaGainPercentage = latestIdea.price ? (((latestIdea.price - latestIdea.price_suggested) * 100) / latestIdea.price).toFixed(2) : (latestIdea.gain_perc * 100).toFixed(2);

  return (
    <>
      <div>
        <div className="home-container container">
          <div className="container mt-header main-header-home">
            <LoopAnimation/>
          </div>
        </div>
        <div className="container d-flex  card-img-container">
          <div className="card-content w-40">
            <div className="card-title d-flex align-items-center justify-content-between fs-30">
              <h2 className="my-0 fs-45 semi-font text-capitalize">{latestIdea.name} </h2>
            </div>
            <div className="card-rate d-flex align-items-center  fs-30  ">
              <p className={classNames('txtNum my-0 fs-22 semi-font', { 'text-red': latestIdeaGain < 0, 'text-green': latestIdeaGain >= 0 })}>₹{latestIdea.price}</p>
              <div className="d-flex align-items-center">
                <p
                  className="m-0 price-wrapper"
                  style={{
                    display: 'flex',
                    gap: '0.2rem',
                    width: '17rem',
                    justifyContent: 'right',
                    alignItems: 'center',
                    

                  }}
                >
                  <div className="d-flex">
                    <span>{latestIdeaGain >= 0 ? '+' : '-'}</span>
                    <span>INR₹</span>
                    <AnimatingNumber value={latestIdeaGain} />
                  </div>
                  {
                    <div className="d-flex">
                      {'('}
                      <span>{latestIdeaGain >= 0 ? '+' : '-'}</span>
                      <AnimatingNumber value={latestIdeaGainPercentage} />%{')'}
                    </div>
                  }
                  <p className="m-0 text-capitalize grey">Today</p>
                </p>
              </div>
            </div>
            <div className="w-90 ">
              <p className=" home-card-text text-slide-up-animation-3  size-28">{latestIdea.description || ''}</p>
            </div>
            <div className="card-date fs-25 ">
              <p className="semi-font">PUBLISHED ON {new Date(latestIdea?.date).toDateString()}</p>
            </div>
          </div>{' '}
          <div className="section-img-container ">
            <img src={SecImage} alt="Hero" className="hero-img" />
          </div>
        </div>
<div className="sliderContainer">
        <div className="mt-section">
          <h2 className="fs-75 container header-mb text-uppercase mt-section-title">Top Gainers</h2>
          <HomePageSlider isLoading={isTopGainersLoading} isLoadingSuccess={isTopGainersSuccess} data={allTopGainers} pageIds={PAGE_IDS.TOP_GAINERS} pageURL={pageURLs['Top Gainers']}/>
        </div>

        <div className="mt-section">
          <h2 className="fs-75 container header-mb text-uppercase mt-section-title">Top Losers</h2>
          <HomePageSlider isLoading={isTopLosersLoading} isLoadingSuccess={isTopLoserSuccess} data={allTopLosers} pageIds={PAGE_IDS.TOP_LOSERS} pageURL={pageURLs['Top Losers']}/>
        </div>

        <div className="mt-section">
          <h2 className="fs-75 container header-mb text-uppercase mt-section-title">Debt Free Companies</h2>
          <HomePageSlider isLoading={isDebtFreeCompaniesLoading} isLoadingSuccess={isDebtFreeCompaniesSuccess} data={allDebtFreeCompanies} pageIds={PAGE_IDS.DEBT_FREE_COMPANIES} pageURL={pageURLs['Debt Free Companies']}/>
        </div>

        <div className="mt-section">
          <h2 className="fs-75 container header-mb text-uppercase mt-section-title">Latest Ideas</h2>
          <HomePageSlider isLoading={isLatestLoading} isLoadingSuccess={isLatestSuccess} data={latestIdeas && latestIdeas.payload} pageIds={''} pageURL={pageURLs['Latest Ideas']}/>
        </div>

        <div className="mt-section">
          <h2 className="fs-75 container header-mb text-uppercase mt-section-title">Trending Ideas</h2>
          <HomePageSlider isLoading={isTrendingLoading} isLoadingSuccess={isTrendingSuccess} data={trendingIdeas && trendingIdeas.payload} pageIds={''} pageURL={pageURLs['Trending Ideas']}/>
        </div>

        <div className="mt-section">
          <h2 className="fs-75 container header-mb text-uppercase mt-section-title">Holding Companies</h2>
          <HomePageSlider isLoading={isHoldingCompaniesLoading} isLoadingSuccess={isHoldingCompaniesSuccess} data={holdingCompanies && holdingCompanies.payload} pageIds={PAGE_IDS.HOLDING_COMPANIES} pageURL={pageURLs['Holding Companies']}/>
        </div>

        <div className="mt-section">
          <h2 className="fs-75 container header-mb text-uppercase mt-section-title">Information Technology</h2>
          <HomePageSlider isLoading={isITCompaniesLoading} isLoadingSuccess={isITCompaniesSuccess} data={ITCompanies && ITCompanies.payload} pageIds={PAGE_IDS.IT_COMPANIES} pageURL={pageURLs['Information Technology']}/>
        </div>

        <div className="mt-section">
          <h2 className="fs-75 container header-mb text-uppercase mt-section-title">Pharmaceuticals</h2>
          <HomePageSlider isLoading={isPharmaceuticalCompaniesLoading} isLoadingSuccess={isPharmaceuticalCompaniesSuccess} data={pharmaceuticalCompanies && pharmaceuticalCompanies.payload} pageIds={PAGE_IDS.PHARMACEUTICAL_COMPANIES} pageURL={pageURLs['Pharmaceuticals']}/>
        </div>

        <div className="mt-section">
          <h2 className="fs-75 container header-mb text-uppercase mt-section-title">Penny Stocks</h2>
          <HomePageSlider isLoading={isPennyStockCompaniesLoading} isLoadingSuccess={isPennyStockCompaniesSuccess} data={pennyStockCompanies && pennyStockCompanies.payload} pageIds={PAGE_IDS.PHARMACEUTICAL_COMPANIES} pageURL={pageURLs['Penny Stocks']}/>
        </div>

        <div className="mt-section">
          <h2 className="fs-75 container header-mb text-uppercase mt-section-title">Chemicals</h2>
          <HomePageSlider isLoading={isChemicalsCompaniesLoading} isLoadingSuccess={isChemicalsCompaniesSuccess} data={chemicalsCompanies && chemicalsCompanies.payload} pageIds={PAGE_IDS.CHEMICAL_COMPANIES} pageURL={pageURLs['Chemicals']}/>
        </div>

        <div className="mt-section">
          <h6 className="fs-75 container header-mb text-uppercase mt-section-title">Sectors</h6>
          <HomePageSlider isLoading={isSectorsLoading} isLoadingSuccess={isSectorsSuccess} data={sectors && sectors.payload} pageIds={''} type="sector" pageURL={pageURLs['Sectors']}/>
        </div>
        </div>
      </div>
    </>
  );
}
