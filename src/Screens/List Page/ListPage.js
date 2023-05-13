import React from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import AccordionCard from '../../Components/Accordion Card/AccordionCard';
import Button from '../../Components/Button/Button';
import CustomAccordion from '../../Components/Accordion/CustomAccordion';
import './style.scss';
import { useHistory } from 'react-router-dom';
import advisories from '../../Assets/data.js';

export default function ListPage(props) {
  const history = useHistory();
  return (
    <div className="container">
      <h1 className="fs-95 mt-header">
        List of <br /> advisories
      </h1>
      <div className="d-flex container overview-wrapper mt-section ">
        <p className="overview-title text-slide-up-animation-3">Overview</p>
        <div className="overview-text overview-content">
          <p className="text-slide-up-animation-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className="filter-wrapper d-flex justify-content-between mb-3 ">
        <div className=" filter-item d-flex align-items-center active">
          Name <AiOutlineArrowDown fontSize={35} />
        </div>
        <div className="filter-item d-flex align-items-center active">
          Price <AiOutlineArrowDown fontSize={35} />
        </div>
      </div>
      {advisories.map((item) => (
        <CustomAccordion right="Purnartha Advisory" left="Rs 1,00,000" card={<AccordionCard approx={item.Charges} no={item.No} plan={item.Plans} register={item.REGISTERED} trial={item.Free_Trial} type={item.Type_of_Service} />} />
      ))}
      <div
        className="d-flex justify-content-center mt-6 "
        onClick={() => {
          history.push('/pricing');
        }}
      >
        <Button text="Go back" />
      </div>
    </div>
  );
}
