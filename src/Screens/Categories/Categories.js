import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import HeroImg from '../../Assets/hereo.png';
import Button from '../../Components/Button/Button';
import { useGetCategoriesQuery } from '../../redux/HomeAPI';
import { selectCategory } from '../../redux/Selected/index';
import './style.scss';

export default function Categories() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { data: categories, isSuccess, isLoading } = useGetCategoriesQuery();

  return (
    <div className="container">
      <div >
        <h1 className=" mt-header font-Averta categoreypage">
          Bifurcation 
          based on
          categories
        </h1>
      </div>
      <div className="hero-img-container">
        <img src={HeroImg} alt="Hero" className="hero-img" />
      </div>

   


      
      <div className="d-flex  overview-wrapper mt-section ">
        <p className="overview-title categorypage font-Averta w-600 size-30 text-slide-up-animation-3">Overview</p>
        <div className="overview-text overview-content categorypage">
          <p className="font-Averta w-300 size-28  text-slide-up-animation-3 ">
          Companies at darkhorsestocks are bifurcated into various different categories. Classification of these stocks in to various categories is explained below.
          </p>
         
        
        </div>
      </div>

  <div className='group-categorey-sections'>


  <div className=" mt-section">
        <div className="">
          <h2 className="font-Averta size-85  w-700 text-slide-up-animation-3 mb-10">Darkhorsestocks</h2>
          <p className="font-Averta w-300 size-28 text-slide-up-animation-3 mb-10">
            Darkhorsestock is our prime category where every week one stock idea is presented with all the relevant and introductory information. The company presented here is selected based on various suitable parameters and growth prospects we anticipate from the large pool of data . Normally
            companies suggested in this category are fundamentally strong and have proven consistent track record of growth. Some of the companies suggested under this category in past have delivered Phenomenal Returns.
          </p>
        </div>
        <div
          className="d-flex justify-content-center mt-3"
          onClick={() => {
            localStorage.setItem('category', 1);
            dispatch(selectCategory(1));
            // window.history.replaceState("", "", "/categories-individual");
            history.replace('/categories-individual');
          }}
        >
          <Button text="View all"  className={"subscribeBtn"}/>
        </div>
      </div>
      <div className="  mt-section">
        <div className="">
          <h2 className="font-Averta size-85 w-700 text-slide-up-animation-3 mb-10">Infographics</h2>
          <p className="font-Averta w-300 size-28 text-slide-up-animation-3 mb-10">
            This is the newest thing started by darkhorsestocks where we try to make investing more interactive and interesting. With Inforgraphic we present one old idea which has already been suggested previously and in our view the idea has missed the user attention or we would like users to
            focus more on the particular idea as we belive the same could have a good potential upside possible. With Inforgraphic we try to cover the maximum and most important points in a summarized manner which would interest users to dig deeper into the stock. However we also advice users to
            read full research report for the said idea presented via inforgraphic.
          </p>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <Button text="View all" className={"subscribeBtn mb-10"} />
        </div>
      </div>

      <div className="  mt-section">
      
          <h2 className="font-Averta size-85 w-700 holdingcompanytitle  text-slide-up-animation-3 mb-10">
            Holding 
            company
          </h2>
         
            <p className="font-Averta w-300 size-28 text-slide-up-animation-3 mt-10">
              Holding company are those companies which hold the shares of other companies. They are created specifically for the purpose of holding investments, creating layers of holding which may be feasible for tax saving purposes. Many a times the investment held by these companies are valued
              even more than the market cap of the holding companies but they are held with a view to never sell them.
            </p>
            <p className="font-Averta w-300 size-28 text-slide-up-animation-3 mt-2">
              So, holding companies can be considered as dead investments since the investments are subject to realization if any over very very long period. Therefore chances of holding companies delivering any meaning returns are negligible but they are worth knowing about or having I portfolio if
              you have a long term view of 5-10 years.
            </p>
            <div
          className="d-flex justify-content-center mt-3"
          onClick={() => {
            localStorage.setItem('category', 3);
            dispatch(selectCategory(3));
            history.replace('/categories-individual');
          }}
        >
          <Button text="View all" className={"subscribeBtn"} />
       
      </div>
        
        </div>
    

      <div className="  mt-section">
      
          <h2 className="font-Averta size-85 w-700 text-slide-up-animation-3 mb-10">Penny stocks</h2>
         
            <p className="font-Averta size-28 w-300 text-slide-up-animation-3 mt-1">
              As the name implies Incognito means hidden , is our category for Microcap/ Penny stocks. In India accounts are prepared in accordance with Accounting Standards which now are merged with newly introduced Indian Accounting Standards ( Ind AS). Normally accounts are prepared based on the
              concept of historical cost. As a result the Assets , Investments etc are presented based on the Lower of Fair Value or Historical cost which has a huge impact on the fundamental value of the company. Land for instance will always be undervalued under this concept of historical price
              base accounting.
            </p>
            <p className="font-Averta size-28 w-300 text-slide-up-animation-3 mt-1">
              Although under this category the ideas presented do posses enormous value but have failed to deliver any meaning full returns. In fact this category has turned out to be failure in terms of the growth or returns since most of the ideas presented under this category have failed to
              deliver any meaning full returns.
            </p>
            <p className="font-Averta size-28 w-300 text-slide-up-animation-3 mt-1">
              This ideas are suggested for informational purpose only.
              <span style={{ color: 'red' }} className='w-600'>Investing in this ideas is extremely risky and could lead to complete loss of capital.</span>
            </p>
            <div
          className="d-flex justify-content-center mt-3"
          onClick={() => {
            localStorage.setItem('category', 2);
            dispatch(selectCategory(2));
            history.replace('/categories-individual');
          }}
        >
          <Button text="View all" className={"subscribeBtn"} />
       
      </div>
          </div>{' '}
      
     
   
  </div>
    </div>
  );
}
