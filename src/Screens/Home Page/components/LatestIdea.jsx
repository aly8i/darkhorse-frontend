import React, { useEffect, useState } from 'react';
import AnimatingNumber from '../../../Components/AnimatingNumber/animation-number';
import classNames from 'classnames';
import SecImage from '../../../Assets/image section.png';
import { useGetLatestIdeasQuery } from '../../../redux/HomeAPI';
import '.././style.scss';

export default function LatestIdea() {
  const { data: latestIdeas, isLoading: isLatestLoading, isSuccess: isLatestSuccess } = useGetLatestIdeasQuery();

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

  useEffect(() => {
    if (!isLatestLoading && isLatestSuccess && latestIdeas?.payload) {
      let ideas = [...latestIdeas.payload];
      ideas.sort((x, y) => {
        return new Date(x.date) - new Date(y.date);
      });
      setLatestIdea(ideas[ideas.length - 1]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [isLatestLoading, isLatestSuccess]);
  }, [isLatestSuccess]);

  const latestIdeaGain = latestIdea?.price ? latestIdea.price - latestIdea.price_suggested : 0;
  const latestIdeaGainPercentage = latestIdea?.price ? (((latestIdea.price - latestIdea.price_suggested) * 100) / latestIdea.price).toFixed(2) : (latestIdea?.gain_perc * 100).toFixed(2);

  return (
    <div className="container d-flex align-items-center">
      <div className="card-content w-40">
        <div className="card-title d-flex align-items-center justify-content-between fs-30">
          <h2 className="my-0 fs-45 semi-font text-capitalize">{latestIdea?.name} </h2>
        </div>
        <div className="card-rate d-flex align-items-center justify-content-between fs-30 w-70 ">
          <p className={classNames('my-0 fs-30 semi-font', { 'text-red': latestIdeaGain < 0, 'text-green': latestIdeaGain >= 0 })}>₹{latestIdea?.price}</p>
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
              <p className="m-0">Today</p>
            </p>
          </div>
        </div>
        <div className="w-90 ">
          <p className="fs-25 home-card-text text-slide-up-animation-3">{latestIdea?.description || ''}</p>
        </div>
        <div className="card-date fs-25 ">
          <p className="semi-font">PUBLISHED ON {new Date(latestIdea?.date).toDateString()}</p>
        </div>
      </div>{' '}
      <div className="section-img-container w-40">
        <img src={SecImage} alt="Hero" className="hero-img" />
      </div>
    </div>
  );
}
