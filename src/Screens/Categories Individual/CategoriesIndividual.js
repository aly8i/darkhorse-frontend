import { Spin } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import HeroImg from '../../Assets/hereo.png';
import { useGetCategoryDetailsQuery, useGetCategorySuggestedCompanyQuery } from '../../redux/HomeAPI';
import CompaniesSuggested from '../Companies_suggested/CompaniesSuggested';
import './style.scss';

export default function CategoriesIndividual() {
  const selectedCategory = localStorage.getItem('category');

  const { data: categoryData, isSuccess, isLoading } = useGetCategoryDetailsQuery(selectedCategory);
  const { data: companies, isLoading: isCompaniesLoading, isSuccess: isCompaniesSuccess } = useGetCategorySuggestedCompanyQuery(selectedCategory);

  return (
    <div>
      {!isLoading && isSuccess ? (
        <>
          <div className="container">
            <h1 className=" fs-95 mt-header">{categoryData && categoryData.payload ? categoryData.payload.name : ''}</h1>
          </div>
          <div className="hero-img-container mt-section">
            <img src={HeroImg} alt="Hero" className="hero-img" />
          </div>

          <div className="overview-section container d-flex mt-section ">
            <p className="text-slide-up-animation-3">Overview</p>
            <p className="overview-content text-slide-up-animation-3">{categoryData && categoryData.payload ? categoryData.payload.description : ''}</p>
          </div>
        </>
      ) : (
        <Spin />
      )}
      <CompaniesSuggested companies={companies} isLoading={isCompaniesLoading} isSuccess={isCompaniesSuccess} />
    </div>
  );
}
