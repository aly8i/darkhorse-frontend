import React from 'react';
import CustomAccordion from '../../Components/Accordion/CustomAccordion';
import FaqCard from '../../Components/Accordion Card/FaqCard';
import Button from '../../Components/Button/Button';

export default function Faq() {
  return (
    <div className='container'>
      <div className=" ">
        <h1 className=" mt-header font-Averta faqpagee">
          Frequently
          asked questions
        </h1>
      </div>
      <div className="d-flex overview-wrapper faq-warapper mt-section faqOverview">
        <p className="overview-title subscribepage font-Averta w-600 size-30">Overview</p>
        <div className="overview-text overview-content subscribe-page">

          <p className="text-slide-up-animation-3 font-Averta w-300 size-28 faqtxt">
          In order to simply and get most of your queries cleared we have prepared a list of questions which have repeatedly asked by darkhorsestocks followers over the time. However if you have any other question which is not covered in the below list feel free to write us at support@darkhorsestocks.in


          </p>

        
        </div>

        
      </div>
         <div className="faqAccordion">
         <CustomAccordion right="I Darkhorsestocks Sebi registered?" card={<FaqCard />} />
         </div>
     
      <div className=" viewmorefaq d-flex justify-content-center">
      <Button text="View More" className={"subscribeBtn"} />
      </div>
    </div>
  );
}
