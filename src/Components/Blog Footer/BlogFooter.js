import React from 'react';
import './style.scss';

export default function BlogFooter() {
  return (
    <div className="blog-container">
      <div className="fs-75">
        <h2>Have an idea?</h2>
        <p className="blog-footer-text">Tell us about it</p>
      </div>
      <div className="d-flex justify-content-between">
        <div className="blog-contact ">
          <h4 className="fs-20">support@darkhorsestocksinception.in</h4>
          <p className="mt-3 ">837 Garden street, Milpitas California 95035, USA</p>
          <p className="mt-1"> Parimit Apartment, Besides parth hospital, Anjali cross road, Bhatta 380007, Ahmedabad, India.</p>
          <p className="mt-3">privacy policy</p>
        </div>

        <div className="footer-social">
          <ul className="blog-footer-list d-flex justify-content-between">
            <li>Linkedin </li>
            <a href="https://twitter.com/DARKHORSESTOCKS">Twitter</a> <li>Behance</li>
          </ul>

          <ul className="blog-footer-list d-flex justify-content-between">
            <li>Dribbble</li>
            <li>
              <a href="https://www.instagram.com/darkhorse_stocks/">Instagram</a>{' '}
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCKNoxoowoWYZEfKk8zIe8vQ/featured">Youtube</a>{' '}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
