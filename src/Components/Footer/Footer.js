import React from 'react';
import './style.scss';

export default function Footer() {
  return (
    <div className="d-flex justify-content-between sub-footer">
      <ul className="d-flex footer-list flex-column-tablet">
        <li className="line-animation-3">DARKHORSESTOCKS 2022</li>
        <li className="line-animation-3">PRIVACY POLICY</li>
        <li className="line-animation-3">T&C</li>
        <li className="line-animation-3">REFUND POLICY</li>
        <li className="line-animation-3">DISCLAIMER</li>
      </ul>
    </div>
  );
}
