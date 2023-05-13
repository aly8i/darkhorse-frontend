import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetCompanyQuery } from '../../redux/CompanyAPI';
import { Skeleton } from '@mui/material';

import './style.scss';

export default function Company() {
  const params = useParams();
  const { data, isSuccess, isLoading } = useGetCompanyQuery(params.companyId);

  if (isLoading && !isSuccess) {
    return (
      <div>
        <div className="container">
          <div className="blog-header mt-header">
            <div className="card-date">
              <p>
                <Skeleton variant="text" />
              </p>
            </div>
            <h1 className="container fs-95 blog-title ">
              <Skeleton variant="text" />
            </h1>
            <p>
              <Skeleton variant="text" />
            </p>
          </div>
        </div>
        <div className="container mt-section fw-semibold fs-30">
          <h3 className="w-70 fs-30">
            <Skeleton variant="rectangular" />
          </h3>
        </div>
        <div className="section-img-container mt-section ">
          <Skeleton variant="rectangular" />
        </div>
        <h3 className="container mt-section fw-semibold fs-30">
          <Skeleton variant="text" />
        </h3>
        {/* <div className="highlighted-text container">
          <h4 className="fs-45">Conclusion</h4>
          <Skeleton variant="rectangular" />
        </div> */}
      </div>
    );
  }

  const { payload: companyData } = data;

  return (
    <div className="company-details" data-cursor-text="">
      <div className="container">
        <div className="blog-header mt-header">
          <div className="card-date">
            <p>{companyData.date && `PUBLISHED ON ${new Date(companyData?.date).toDateString()}`}</p>
          </div>
          <h1 className="container fs-95 blog-title">{companyData.name}</h1>
          <p className="seo-description">{companyData.seo_descriptions}</p>
        </div>
      </div>
      <div className="container mt-section fw-semibold fs-30">
        <h3 className="w-70 text-slide-up-animation-3  fs-30">{companyData.description}</h3>
      </div>
      <div className="section-img-container mt-section ">
        <img src={companyData.image} alt="Hero" className="hero-img" />
      </div>
      <h3 className="container mt-section fw-semibold fs-30">Market Price at the time of Publishing this report : {companyData.price}₹ </h3>
      {/* <div className="highlighted-text container">
        <h4 className="fs-45">Conclusion</h4>
        <p className="fs-30">{isSuccess && !isLoading && companyData ? companyData.payload?.conclusion : ''}</p>
      </div> */}
    </div>
  );
}
