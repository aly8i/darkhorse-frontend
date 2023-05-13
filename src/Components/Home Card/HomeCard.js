import React from 'react';
import './style.scss';
import LockPic from '../../Assets/lock circle.png';

export default function HomeCard(props) {
  return (
    <div className="card-container">
      <div className="img-home-container">
        <img src={props.img} alt="card" />
      </div>
      <div className="d-flex align-items-center justify-content-center ">
        <img src={LockPic} alt="card" className="lock-pic" />
      </div>
      <div className="card-home-content my-0 ">
        <h3 className="my-0 card-home-title ">{props.title}</h3>
        <p className="card-home-text">{props.text}</p>

        <button className="card-btn fw-bold"> {props.btn}</button>
      </div>
    </div>
  );
}
