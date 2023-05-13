import React, { useState } from 'react';
import './style.scss';

export default function Button({ text, className, onClick }) {
  let [entered, setEntered] = useState('not-active');

  const enterHandler = () => {
    setEntered('active');
    // console.log(entered)
  };

  const leaveHandler = () => {
    setEntered('not-active');
  };

  return (
    <div onClick={onClick} className="magnetic-wrap button-animation-1 " style={{ display: 'inline-block', cursor: 'pointer', marginRight: 35 }}>
      <div className="magnetic-area" onMouseLeave={leaveHandler} onMouseEnter={enterHandler}></div>
      <button
        type="button"
        className={`btn-component magnetic-content btn-animate btn ${className}
      ${entered === 'not-active' ? `${(entered = 'not-active')}` : 'active'}
      `}
      >
        <span className="btn-animate__filler"></span>
        <span className="btn-animate__text">{text}</span>
      </button>
    </div>
  );
}
