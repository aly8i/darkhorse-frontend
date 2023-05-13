import React from 'react';
import Button from '../../Components/Button/Button';
import './style.scss';
import { AiOutlineArrowDown } from 'react-icons/ai';
import CustomAccordion from '../../Components/Accordion/CustomAccordion';
import { useHistory } from 'react-router-dom';
import AccordionCard from '../../Components/Accordion Card/AccordionCard';

export default function Pricing() {
  const history = useHistory();
  return (
    <div className="container">
      <h1 className=" mt-header font-Averta">Pricing</h1>
      <div className="d-flex flex-column  align-items-center mt-section">
        <h6 className=" sub-header-title font-Averta">Rs 10,000</h6>
        <p className="size-24 w-600 price-per-year font-Averta">Price per year</p>
        <div
          className=" d-flex justify-content-center"
          onClick={() => {
            history.push('/subscriptions');
            window.location.reload();
          }}
        >
          {' '}
          <Button text="Subscribe" className={"subscribeBtn"} />
        </div>
      </div>
      <div div className="  mt-section">
        <div className="what-will">
          <h3 className="size-85 w-700 header-fs-tablet font-Averta">
            What will
            
            you get?
          </h3>
          <div className="pricing-list">
            <ul className=" font-Averta w-300 size-27">
              <li> 30-45* Darkhorsestock ideas per year.</li>
              <li>5-10* Pennystock ideas per year.</li>
              <li>Dashboard to track all darkhorsestock ideas on real time basis.</li>
              <p className="text-slide-up-animation-3 font-Averta size-19 w-300">
                *Number of ideas may differ depending upon the market conditions. When the market is at the peak or when we expect it to fall further or sometimes based on the valuation constrains we may not suggest ideas. 30-45 is what we expect but it can be even more or less than the suggested
                number.
              </p>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-section do-you-feel">
        <div className="">
          <h2 className="font-Averta size-85 w-700 ">Do you feel prices are its too high?</h2>

          <p className="fs-30 filter-text text-slide-up-animation-3 w-300 font-Averta"> Take a look at what all others out there are charging </p>
        </div>

        <div className='according-headings'>
          <div className="filter-wrapper d-flex justify-content-between mb-3">
            <div className=" filter-item d-flex align-items-center active">
              Name <AiOutlineArrowDown className="icon-mobile" fontSize={35} />
            </div>
            <div></div>
            <div className="filter-item d-flex align-items-center active">
              Price <AiOutlineArrowDown className="icon-mobile" fontSize={35} />
              <span className='peryear'>per year</span>
            </div>
          </div>
        </div>
        <CustomAccordion right="Purnartha Advisory" left="Rs 1,00,000" card={<AccordionCard />} />
        <CustomAccordion right="Purnartha Advisory" left="Rs 1,00,000" card={<AccordionCard />} />
        <CustomAccordion right="Purnartha Advisory" left="Rs 1,00,000" card={<AccordionCard />} />
        <CustomAccordion right="Purnartha Advisory" left="Rs 1,00,000" card={<AccordionCard />} />

        <div
          className="viewallBtn d-flex justify-content-center mt-1"
          onClick={() => {
            history.push('/list-page');
            window.location.reload();
          }}
        >
          <Button text="View all" className="subscribeBtn" />
        </div>
      </div>
      <div className=" mt-section fw-bold">
        <div className="">
          <h2 className="text-slide-up-animation-3 font-Averta size-85 w-700 irony-h2">And here’s the Irony</h2>
          <p className=" text-slide-up-animation-3 font-Averta size-28 w-300">None of the above advisories provide this many ideas, many of them dont even provide with a detailed research report and almost none of them provide with the real time dashboard like darkhorsestocks.</p>
        </div>
      </div>
      <div className=" mt-section">
        {' '}
        <div className="">
          <div className="w-70">
            <h2 className=" text-slide-up-animation-3 font-Averta size-85 w-700 still-not">Still not Convinced?</h2>
            <p className=" mt-1 text-slide-up-animation-3 size-28 w-300 font-Averta">Subscribe to our free plan for all small users where we suggest one company every month or around 10-12 companies every year and one infographic every week.</p>
          </div>
        </div>
        <div className="d-flex flex-direction-column align-items-center mt-1">
          <a href="https://api.whatsapp.com/send?phone=917874999975">
            <Button text="WhatsApp" className={" "}></Button>
          </a>
          <p className="gray-color mt-1 text-slide-up-animation-3">No spam - No advertisement</p>
        </div>
      </div>
    </div>
  );
}
