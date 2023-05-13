import React, { createRef, useState } from 'react';
import Button from '../../Components/Button/Button';
import Card from '../../Components/Card/Card';
import CardImage from '../../Assets/Card.png';
import './style.scss';
import Filter from '../../Components/Filter/Filter';
import Slider from 'react-slick';
import { BsArrowRight } from 'react-icons/bs';
import { BsArrowLeft } from 'react-icons/bs';
import { useGetCategorySuggestedCompanyQuery, useGetSectorsQuery, useGetSectorSuggestedCompanyQuery } from '../../redux/HomeAPI';
import { useHistory } from 'react-router-dom';

export default function CompaniesSuggested(props) {
  // const { data: sectors, isSuccess: isSectorSuccess, isLoading: isSectorsLoading } = useGetSectorsQuery();
  // const [selectedSector, setSelectedSector] = useState(28);
  const [selectedCompany, setSelectedCompany] = useState('');
  const history = useHistory();
  // const {data: companies, isSuccess, isLoading} = useGetSectorSuggestedCompanyQuery(selectedSector);
  const { companies, isSuccess, isLoading } = props;

  // const data = !isLoading && isSuccess && companies.payload ? companies.payload.map((s) => ({
  //   img: s.image!==''? s.image : CardImage,
  //   title: s.name ?? "Whirlpool Of India",
  //   content: s.description ?? "Whirlpool of India is a completely debt free subsidiary of the Whirlpool Corporation an American multinational manufacturer... ",
  //   price: `₹${s.price}`,
  // })) : [];

  const onCompanyClick = (company) => {
    setSelectedCompany(company);
    history.replace('/new-blog');
  };

  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const customeSlider = createRef();
  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };
  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const customeSlider2 = createRef();
  const gotoPrev2 = () => {
    customeSlider2.current.slickPrev();
  };
  const gotoNext2 = () => {
    customeSlider2.current.slickNext();
  };

  const customeSlider3 = createRef();
  const gotoPrev3 = () => {
    customeSlider3.current.slickPrev();
  };
  const gotoNext3 = () => {
    customeSlider3.current.slickNext();
  };

  return (
    <div>
      <div className="container">
        <h5 className=" fs-95 mt-header">
          suggested <br /> companies
        </h5>
      </div>

      <Filter />

      <Slider {...settings} className="sector-card" ref={customeSlider}>
        {!isLoading &&
          isSuccess &&
          companies.payload &&
          companies.payload.map((item) => {
            if (item) {
              return <Card {...item} img={item.image ?? CardImage} title={item.name ?? item.title} price={item.price} rate={item.rate} content={item.description} date={item.date} onClick={onCompanyClick} />;
            }
          })}
        <div></div>
      </Slider>
      <div className="d-flex slider-arrow ">
        <div className="slider-arrow-left" onClick={() => gotoPrev3()}>
          <BsArrowLeft fontSize={25} />
        </div>
        <div className="slider-arrow-right" onClick={() => gotoNext3()}>
          <BsArrowRight fontSize={25} />
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3 ">
        <Button text="Go back" />
      </div>
    </div>
  );
}
