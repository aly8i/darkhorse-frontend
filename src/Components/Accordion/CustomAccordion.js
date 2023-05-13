import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

import { IoMdArrowDropdown } from "react-icons/io";
import expandedIcon from "../../Assets/Triangle light.svg"
import expandedIcon2 from "../../Assets/triangle filled.svg"

import React from "react";

export default function CustomAccordion(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
      className="container Accordion-wrapper"
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
    >
      <AccordionSummary
        className="AccordionSummary"
        expandIcon={
          expanded ? <img src={expandedIcon2} className="expanded-icon"/> : <img src={expandedIcon}/>
        }
      >
        <div className="d-flex justify-content-between w-100 accordion-text">
          <h5 className="fs-30 semi-font">{props.right}</h5>
          <h5 className="fs-30 semi-font">{props.left}</h5>
        </div>
      </AccordionSummary>
      <AccordionDetails className="AccordionDetails">
        {props.card}
      </AccordionDetails>
    </Accordion>
  );
}
