import { Skeleton } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import SecImage from '../../Assets/blog1.webp';
import BlogAccordion from '../../Components/Accordion/BlogAccordion';
import { useGetBlogDetailsQuery } from '../../redux/BlogsAPI';

import './style.scss';

export default function BlogDetails() {
  const params = useParams();
  const { data, isSuccess, isLoading } = useGetBlogDetailsQuery(params.blogId);

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
        <div className="highlighted-text container">
          <h4 className="fs-45">Conclusion</h4>
          <Skeleton variant="rectangular" />
        </div>
      </div>
    );
  }

  const { payload: blogData } = data;

  return (
    <div>
      <div className="container">
        <div className="blog-header mt-header">
          <div className="card-date">
            <p>{blogData.date && `PUBLISHED ON ${new Date(blogData?.date).toDateString()}`}</p>
          </div>
          <h1 className="container fs-95 blog-title ">{blogData.name}</h1>
          {/* <p>Debt free | Cash Rich | Long Term Investing | Darkhorsestock</p> */}
        </div>
      </div>
      <div className="container mt-section fw-semibold fs-30">
        <h3 className="w-70 text-slide-up-animation-3  fs-30">{blogData.description}</h3>
      </div>

      <div className="section-img-container mt-section ">
        <img src={SecImage} alt="Hero" className="hero-img" />
      </div>
      {/* <h3 className="container mt-section fw-semibold fs-30">Market Price at the time of Publishing this report : 590 Rs </h3> */}

      <div className="mt-section">
        {blogData.BlogPart.map((item) => (
          <BlogAccordion text={item.text} card={item.card} />
        ))}
      </div>
      <div className="highlighted-text container">
        <h4 className="fs-45">Conclusion</h4>
        <p className="fs-30">{blogData?.conclusion}</p>
      </div>
    </div>
  );
}
