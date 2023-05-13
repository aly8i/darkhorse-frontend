import React from 'react';
import Teamimg from '../../Assets/Group 290.png';
import './style.scss';

function TeamPage() {
  const team = [
    {
      img: Teamimg,
    },
    {
      img: Teamimg,
    },
    {
      img: Teamimg,
    },
    {
      img: Teamimg,
    },
    {
      img: Teamimg,
    },
    {
      img: Teamimg,
    },
    {
      img: Teamimg,
    },
    {
      img: Teamimg,
    },
    {
      img: Teamimg,
    },
  ];
  return (
    <div>
      <div className=" mt-header">
        {' '}
        <p className="container fs-30">Team </p> <h1 className="container fs-95 w-80">Best in industry team of analysts</h1>
      </div>

      <div className="container d-flex flex-wrap">
        {team.map((item) => (
          <div className="d-flex justify-content-center team-img" style={{ margin: '80px 0' }}>
            {' '}
            <img src={item.img} alt="item" />
          </div>
        ))}
      </div>

      <div className="container mt-section fs-30">
        Most of the analysts associated with darkhorsestocks have requested to keep their identity discrete due to thier association with some of the major investment banking funds 🏦 such as JP Morgan, HDFC AMC, Goldman Sacs, Morgan Stanley , Mirae AMC, ICICI Securities, ITI Mutual Fund, Kotak
        Securities etc
        <p className="">Therefore please do not ask for the same.</p>
      </div>
    </div>
  );
}

export default TeamPage;
