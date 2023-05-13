import React from 'react';
import HeroImg from '../../Assets/hereo.png';
import Rectangle from '../../Assets/Rectangle 127.png';
import Button from '../../Components/Button/Button';
import SecImage from '../../Assets/image section.png';
import './style.scss';

export default function Fundalysis() {
  return (
    <div>
      <div className="mt-header">
        <div className="  container ">
          <p className="fs-30">Dashboard</p>
          <h1 className=" fs-95">
            A unique platform to <br /> track all darkhorsestock <br /> ideas
          </h1>
        </div>
      </div>
      <div className="hero-img-container">
        <img src={HeroImg} alt="Hero" className="hero-img" />
      </div>
      <div className=" mt-section container">
        <div className="w-70 dashbord-section">
          <p className="fs-30 text-slide-up-animation-3">Developing websites is about so much more than marketing. It’s also about aesthetics. For us, your site is the face of your company. Let’s make it stunning</p>
          <div className="d-flex justify-content-center dashbord-btn">
            <Button text="Go to Dashboard" />
          </div>
        </div>
      </div>

      <div className="section-img-container mt-section ">
        <img src={SecImage} alt="Hero" className="hero-img" />
      </div>

      <div className="container d-flex mt-section fs-30 feature-section flex-column-tablet">
        <h4 className="text-slide-up-animation-3">Features</h4>
        <p className="overview-content text-slide-up-animation-3">Developing websites is about so much more than marketing. It’s also about aesthetics. For us, your site is the face of your company. Let’s make it stunning</p>
      </div>

      <div className="mt-section d-flex container dashbord-img flex-column-tablet">
        <div className="first-img">
          <img src={Rectangle} alt="icon" />
        </div>
        <div className="secend-img">
          <img src={Rectangle} alt="icon" />
        </div>
      </div>

      <div className=" d-flex container dashbord-img flex-column-tablet">
        <div className="first-img container">
          <img src={Rectangle} alt="icon" />
        </div>
        <div className="secend-img container">
          <img src={Rectangle} alt="icon" />
        </div>
      </div>

      <div className="container d-flex mt-section fs-30 feature-section flex-column-tablet">
        <h4 className="text-slide-up-animation-3">Features</h4>
        <p className="overview-content">Developing websites is about so much more than marketing. It’s also about aesthetics. For us, your site is the face of your company. Let’s make it stunning</p>
      </div>

      <div className="section-img-container mt-section ">
        <img src={SecImage} alt="Hero" className="hero-img" />
      </div>

      <div className="container end-wrapper mt-section">
        <div className="w-70">
          <h2 className="fs-95 header-fs-tablet text-slide-up-animation-3">In the end ✨</h2>
          <p className="fs-30">
            The ❤️ of our investment strategy is centred on producing consistent alpha and, more crucially, identifying companies that are not on the radar of most analysts. To do so, we supplement our in-depth industry expertise with rigorous primary research, cutting-edge technology, and in-house
            unique tools to uncover insights and provide value.
          </p>
          <p className="fs-30 end-secend text-slide-up-animation-3">
            Our team includes some of the most prestigious research analysts, fund managers / portfolio managers, and other professionals, making it the most effective team of its kind in the Industry. In order to uncover the best stocks for our users, our team carries out its own independent and
            bottom-up analysis, which includes studying business annual reports and analysing them in depth. 😊
          </p>
        </div>
      </div>
    </div>
  );
}
