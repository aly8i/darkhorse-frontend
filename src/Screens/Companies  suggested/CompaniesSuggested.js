import React, { createRef } from 'react';
import Button from '../../Components/Button/Button';
import Card from '../../Components/Card/Card';
import CardImage from '../../Assets/Card.png';
import './style.css';
import Filter from '../../Components/Filter/Filter';
import Slider from 'react-slick';
import { BsArrowRight } from 'react-icons/bs';
import { BsArrowLeft } from 'react-icons/bs';

export default function CompaniesSuggested() {
  const data = [
    {
      img: CardImage,
      title: 'Whirlpool Of India',
      price: '₹1576',
      rate: '+INR₹0.01 (+0.05%)',
      content: 'Whirlpool of India is a completely debt free subsidiary of the Whirlpool Corporation an American multinational manufacturer... ',
      date: 'PUBLISHED ON JAN 23',
    },
    {
      img: CardImage,
      title: 'Whirlpool Of India',
      price: '₹1576',
      rate: '+INR₹0.01 (+0.05%)',
      content: ' Whirlpool of India is a completely debt free subsidiary of the Whirlpool Corporation an American multinational manufacturer... ',
      date: 'PUBLISHED ON JAN 23',
    },
    {
      img: CardImage,
      title: 'Whirlpool Of India',
      price: '₹1576',
      rate: '+INR₹0.01 (+0.05%)',
      content: ' Whirlpool of India is a completely debt free subsidiary of the Whirlpool Corporation an American multinational manufacturer... ',
      date: 'PUBLISHED ON JAN 23',
    },
    {
      img: CardImage,
      title: 'Whirlpool Of India',
      price: '₹1576',
      rate: '+INR₹0.01 (+0.05%)',
      content: ' Whirlpool of India is a completely debt free subsidiary of the Whirlpool Corporation an American multinational manufacturer... ',
      date: 'PUBLISHED ON JAN 23',
    },
    {
      img: CardImage,
      title: 'Whirlpool Of India',
      price: '₹1576',
      rate: '+INR₹0.01 (+0.05%)',
      content: ' Whirlpool of India is a completely debt free subsidiary of the Whirlpool Corporation an American multinational manufacturer... ',
      date: 'PUBLISHED ON JAN 23',
    },
  ];

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
        {data.map((item) => (
          <Card img={item.img} title={item.title} price={item.price} rate={item.rate} content={item.content} date={item.date} />
        ))}
        <div></div>
      </Slider>

      <div className="d-flex slider-arrow ">
        <div className="slider-arrow-left" onClick={() => gotoPrev()}>
          <BsArrowLeft fontSize={30} />
        </div>
        <div className="slider-arrow-right" onClick={() => gotoNext()}>
          <BsArrowRight fontSize={30} />
        </div>
      </div>

      <Slider {...settings} className="sector-card" ref={customeSlider2}>
        {data.map((item) => (
          <Card img={item.img} title={item.title} price={item.price} rate={item.rate} content={item.content} date={item.date} />
        ))}
        <div></div>
      </Slider>
      <div className="d-flex slider-arrow ">
        <div className="slider-arrow-left" onClick={() => gotoPrev2()}>
          <BsArrowLeft fontSize={30} />
        </div>
        <div className="slider-arrow-right" onClick={() => gotoNext2()}>
          <BsArrowRight fontSize={30} />
        </div>
      </div>
      <Slider {...settings} className="sector-card" ref={customeSlider3}>
        {data.map((item) => (
          <Card img={item.img} title={item.title} price={item.price} rate={item.rate} content={item.content} date={item.date} />
        ))}
        <div></div>
      </Slider>
      <div className="d-flex slider-arrow ">
        <div className="slider-arrow-left" onClick={() => gotoPrev3()}>
          <BsArrowLeft fontSize={30} />
        </div>
        <div className="slider-arrow-right" onClick={() => gotoNext3()}>
          <BsArrowRight fontSize={30} />
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3 ">
        <Button text="Go back" />
      </div>
    </div>
  );
}
