import React from "react";

export default function HamburgerBar(props) {
  const { clicked, onClick } = props;

 

  return (
    <>
      <div
        className={clicked ? "hamburger open" : "hamburger close"}
        onClick={onClick}
      >
        <div className="hamburger__bar-wrapper">
          <span className="hamburger__bar top"></span>
          
          <span className="hamburger__bar bottom"></span>
        </div>
      </div>
    </>
  );
}
