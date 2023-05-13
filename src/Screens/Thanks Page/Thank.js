import React from 'react';
import Button from '../../Components/Button/Button';
import './style.scss';
import Smile from '../../Assets/1.png';
import Congratulations from "../../Components/AnimationsComponent/Animation4/Animation4"

export default function Thank() {
  return (
    <>
      <div className="container">
        <div className="d-flex flex-column align-items-center justify-content-center h-100 text-center">
          <div className="d-flex align-items-center">
            <h2 className=" fs-95 ">Thank You</h2>
            <div className="d-flex justify-content-center smile-icon">
              <img src={Smile} alt="icon" />
            </div>
          </div>
          <h6 className=" fs-30 mt-1 semi-font">
            Your subscription means a lot to us.
            <br />
            We will try our best to not let you down.
          </h6>
          <div className="mt-6">
            <Button text="Home" />
          </div>
        </div>
      </div>
      <Congratulations/>
    </>
    
  );
}
