import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { Parser } from 'html-to-react';
import { IoMdArrowDropdown } from 'react-icons/io';

import React from 'react';
import expandedIcon from '../../Assets/Triangle light.svg';
import expandedIcon2 from '../../Assets/Polygon 6.svg';

export default function BlogAccordion(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion className="Accordion-wrapper" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      <AccordionSummary
        className="AccordionSummary"
        expandIcon={
          expanded ? (
            <>
              <div className={localStorage.getItem('dark') === 'true' ? 'dark-icon' : 'light-icon'}>
                <svg focusable="false" width="37" height="31" viewBox="0 0 37 31" xmlns="http://www.w3.org/2000/svg">
                  <path d="M34.5215 1.25L18.5 29L2.47853 1.25L34.5215 1.25Z"></path>
                </svg>
              </div>
            </>
          ) : localStorage.getItem('dark') === 'false' ? (
            <img src={expandedIcon} className="svg-icon" />
          ) : (
            <img src={expandedIcon2} className="svg-icon" />
          )
        }
      >
        <div className="d-flex justify-content-between w-100 accordion-text">
          <h2 className="fs-45">{props.text}</h2>
        </div>
      </AccordionSummary>
      <AccordionDetails className="AccordionDetails">
        {/* {props.card} */}
        {Parser().parse(props.card)}
      </AccordionDetails>
    </Accordion>
  );
}
