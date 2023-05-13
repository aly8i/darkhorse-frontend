import React from 'react';
import HeroImg from '../../Assets/hereo.png';
import SecImage from '../../Assets/image section.png';

import './style.scss';

export default function PhilosophyPage() {
  return (
    <div className="container philosopycontainer">
      <div >
        <h1 className="Philosophy  mt-header font-Averta text-slide-up-animation-2">Investment Philosophy</h1>
      </div>
      <div className="hero-img-container mt-section">
        <img src={HeroImg} alt="Hero" className="hero-img" />
      </div>

      <div className="d-flex  overview-wrapper mt-section ">
        <p className="overview-title philosophypage font-Averta w-600 size-30 text-slide-up-animation-3">Overview</p>
        <div className="overview-text overview-content philosophypage">
          <p className="font-Averta w-300 size-28  text-slide-up-animation-3 ">
            Lot of users have been repeatedly asking about the various strategies or the methodologies we follow at Darkhorsestocks that lead us to such amazing ideas. Although there is no secret behind it, you need to understand that just by looking at these points, it will not help you find the
            next multibagger idea.
          </p>
          <p className="text-slide-up-animation-3 mt-1 font-Averta w-300 size-28">
            Most of the analysts at darkhorsestocks have vast experience in the market, with professional qualifications, and, on top of that, they are associated with some of the major investment banking firms. As a result, we are able to provide you with ideas that are backed up by conviction.
            Despite that, there have been times when we have been wrong, and we are not ashamed of admitting our mistakes.
          </p>
          <p className=" text-slide-up-animation-3 mt-1 font-Averta w-300 size-28">
            Thus, the below list is not exhaustive; instead, these are some of the common ones to start with. Other than this, there are a number of different scenarios which keep on varying from one company to another or from one sector to another etc.
          </p>
        </div>
      </div>

      <div div className="  financlial-wrapper mt-section">
        <h3 className="font-Averta size-85  w-700 finaclinalParam">
          Financlial
           parameters
        </h3>
        <ul className="financlial-list font-Averta size-28 w-300">
          <li><span>Piotroski score</span> {'>'} 7,</li>
          <li> EPS latest quarter {'>'} 1.2 * EPS preceding year quarter,</li>
          <li> 100*((High price - Current price )/High price) {'<'} 10, </li>
          <li> Contingent liabilities {'< '}Net Profit last year, </li>
          <li>
            (Sales growth 3Years {'>'} 12% AND Net block{' >'} Net block 3Years back * 2) OR (Net block + Capital work in progress ) {'>'} 1.5 * (Net block preceding year + Capital work in progress preceding year ),
          </li>
          <li>
            Tax latest quarter {'>'} .10 * Net Profit latest quarter, PEG Ratio
            {'>'} 2,
          </li>
          <li>
            DMA 200 {'>'} Current price *0.95, G Factor {'>'} 1,
          </li>
          <li>Altman Z Score {'>'} 3,</li>
          <li>
            OPM last year + OPM preceding year) {'>'} 15 AND (NPM last year + NPM preceding year) {'>'} 8 AND ((Debtor days{' <'} 60) OR ((Inventory turnover ratio * NPM last year){' >'} 100 )) PB X PE
            {'<='} 22.5,
          </li>
          <li>Debt/ Number of equity shares {'< '}2 * NCAVPS, </li>
          <li>Working capital / Sales {'<'} 0.25, </li>
          <li>
            (Market Capitalization {'>'} 15) AND (Sales latest quarter {'>'}
            Sales preceding quarter) AND ((Net Profit latest quarter / Net Profit preceding quarter ) {'>'} 1.5)
          </li>
        </ul>
        <h6 className="font-Averta size-28  w-600 well-load mobile">Well, It was all just a load of crap. 💩</h6>
      </div>

      <div className=" above-wrraper mt-section">
        <h2 className="font-Averta size-85  w-700 didureally">
          Did you really  believed all just we said above? 🤨
        </h2>
        <h6 className="font-Averta size-28  w-600 well-load">Well, It was all just a load of crap. 💩</h6>
        <p className="font-Averta size-28  w-600 ifwould">
          If it would have been so simple everyone would be able to <br /> do it easily and you wont be here reading our philosophy <br /> searching for the unique multibagger formula.
        </p>
      </div>

      <div className="section-img-container philosohphy">
        <img src={SecImage} alt="Hero" className="hero-img" />
      </div>

      <div div className="  financlial-wrapper mt-section">
        <h3 className="font-Averta size-85  w-700 realthings">
          The real things  we look at
        </h3>
        <div className="">
          <p className='font-Averta size-28  w-300'> We try invest in companies with the following characteristics:</p>
         
          <ul className="financlial-list font-Averta size-28  w-300 philosophylist">
            <li>Companies based on the fundamentals or the strong businesses trading at deep discount.</li>
            <li>Small companies having significantly high market share in niche sectors with very less competition.</li>
            <li>Companies with cyclical business, currently in the trough or the recovery phase of its business cycle.</li>
            <li>Companies operating at very low capacity where utilisation is at very low levels given its total capacity.</li>
            <li>Companies where strong inflow of orders would be expected in the coming future as explained by the management backed by strong evidence of the demand of the product company is manufacturing.</li>
            <li>Companies where there is significant capex taking place to ramp up the manufacturing / production facilities.</li>
            <li>Companies, despite operating monopolistic market with high product differentiation because these companies can easily raise prices without hindering the demand of their products.</li>
            <li>Companies which spending very less on advertisements.</li>
            <li>Companies where promoter holding is very high where it can be seen that the interests of the promoters are aligned with that of the shareholders.</li>
            <li>Companies in which it is expected to be a radical change in the management where the reins of the business are handed over to the next generation to take it to the new heights.</li>
          </ul>
          <p className='font-Averta size-28  w-300 abovementioned'>
          Above mentioned are some of the points we try to look into companies but these <b className='w-700'>list is not exhaustive. </b> Also there could be companies that we might have suggested in past which would oppose our own investment philosophy but the same would have been supported by other
          factors which we might have looked into at the time of carrying on the research.
          </p>
         
        </div>
      </div>
      <div className=" end-wrapper mt-section end-section-common">
        <div className="">
          <h2 className="fs-95 header-fs-tablet text-slide-up-animation-3">
            In the end ✨
          </h2>
          <p className="text-slide-up-animation-3 font-Averta">
            The ❤️ of our investment strategy is centred on producing consistent
            alpha and, more crucially, identifying companies that are not on the
            radar of most analysts. To do so, we supplement our in-depth
            industry expertise with rigorous primary research, cutting-edge
            technology, and in-house unique tools to uncover insights and
            provide value.
          </p>
          <p className=" end-secend text-slide-up-animation-3 font-Averta">
            Our team includes some of the most prestigious research analysts,
            fund managers / portfolio managers, and other professionals, making
            it the most effective team of its kind in the Industry. In order to
            uncover the best stocks for our users, our team carries out its own
            independent and bottom-up analysis, which includes studying business
            annual reports and analysing them in depth. 😊
          </p>
        </div>
      </div>
    </div>
  );
}
