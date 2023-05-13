// import React, { createRef } from 'react';
// import Slider from 'react-slick';
// import { useHistory } from 'react-router-dom';

// import SkeletonCard from '../Skeleton card/SkeletonCard';
// import Card from '../Card/Card';

// import SecImage from '../../Assets/image section.png';
// import Plus from '../../Assets/Vector.png';
// import SliderArrows from '../SliderArrows/SliderArrows';

// const settings = {
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   initialSlide: 0,
//   nextArrow: <span className="d-none" />,
//   prevArrow: <span className="d-none" />,

//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         infinite: false,
//       },
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         initialSlide: 1,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//   ],
// };

// const HomePageSlider = (props) => {
//   const { isLoading, isLoadingSuccess, data, pageIds, type = '', pageURL } = props;
//   const history = useHistory();
//   const customSlider = createRef();

//   const gotoPrev = () => {
//     customSlider.current.slickPrev();
//   };
//   const gotoNext = () => {
//     customSlider.current.slickNext();
//   };

//   const viewMoreClickHandler = () => {
//     localStorage.setItem('selectedCompanyIdForViewMore', pageIds);
//     history.push(`/view-more/${pageURL}`);
//   };

//   const onSectorSelect = (id) => {
//     localStorage.setItem('sector', id);
//     history.push('/sector-page');
//   };

//   if (data && data.length < 3) {
//     settings.infinite = false;
//   } else {
//     settings.infinite = true;
//   }

//   const onClickHandler = (type, id) => {
//     if (type === 'sector') {
//       onSectorSelect(id);
//     } else {
//       history.push(`/company/${id}`);
//     }
//   };

//   return (
//     <div>
//       <Slider {...settings} ref={customSlider}>
//         {isLoading && !isLoadingSuccess && !data ? (
//           <SkeletonCard />
//         ) : (
//           data?.slice(0, 5).map((item, idx) => item && <Card {...item} img={item.image || SecImage} title={item.name} price={item.price} type={type} onClick={() => onClickHandler(type, item.Id)} rate={item.rate} content={item.description || ''} date={item.date} key={item.Id} />)
//         )}
//         {data && data.length > 5 && (
//           <div>
//             <div className="view-more" onClick={viewMoreClickHandler}>
//               <div>
//                 <img src={Plus} alt="" />
//               </div>
//               <p className="fw-bold" data-cursor-text="View More">
//                 View More
//               </p>
//             </div>
//           </div>
//         )}
//       </Slider>
//       {data && data.length > 3 && <SliderArrows prev={gotoPrev} next={gotoNext} />}
//     </div>
//   );
// };

// export default HomePageSlider;

import React, { useRef } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import { useHistory } from 'react-router-dom';

import SkeletonCard from '../Skeleton card/SkeletonCard';
import Card from '../Card/Card';

import SecImage from '../../Assets/image section.png';
import Plus from '../../Assets/Vector.png';
import SliderArrows from '../SliderArrows/SliderArrows';

const options = {
  items: 3,
  nav: false,
  dots: false,
  margin: 30,
  loop: true,
  autoplay: false,
  slideBy: 3,
  mouseDrag: false,
  responsive: {
    0: {
      items: 1,
      margin: 0,
    },
    600: {
      items: 2,
    },
    1024: {
      items: 3,
    },
  },
};

const HomePageSlider = (props) => {
  const { isLoading, isLoadingSuccess, data, pageIds, type = '', pageURL } = props;
  const history = useHistory();
  const owlRef = useRef(null);

  const gotoPrev = () => {
    owlRef.current.prev();
  };
  const gotoNext = () => {
    owlRef.current.next();
  };

  const viewMoreClickHandler = () => {
    localStorage.setItem('selectedCompanyIdForViewMore', pageIds);
    history.push(`/view-more/${pageURL}`);
  };

  const onSectorSelect = (id) => {
    localStorage.setItem('sector', id);
    history.push('/sector-page');
  };

  const onClickHandler = (type, id) => {
    if (type === 'sector') {
      onSectorSelect(id);
    } else {
      history.push(`/company/${id}`);
    }
  };

  const renderData = () => {
    return isLoading && !isLoadingSuccess && !data ? (
      <SkeletonCard />
    ) : (
      <>
        {data.length !== 4 && data.length !== 5
          ? data?.slice(0, 6).map((item, idx) =>
              idx < 5 ? (
                <div className="item" key={item.Id}>
                  <Card {...item} img={item.image || SecImage} title={item.name} price={item.price} type={type} onClick={() => onClickHandler(type, item.Id)} rate={item.rate} content={item.description || ''} date={item.date} />
                </div>
              ) : (
                <div className="item">
                  <div className="view-more" onClick={viewMoreClickHandler}>
                    <div>
                      <img src={Plus} alt="" />
                    </div>
                    <p className="fw-bold" data-cursor-text="View More">
                      View More
                    </p>
                  </div>
                </div>
              ),
            )
          : null}

        {data.length === 4 && (
          <>
            {data.slice(0, 4).map((item, idx) => (
              <div className="item" key={item.Id}>
                <Card {...item} img={item.image || SecImage} title={item.name} price={item.price} type={type} onClick={() => onClickHandler(type, item.Id)} rate={item.rate} content={item.description || ''} date={item.date} />
              </div>
            ))}
            <div className="item" key={5}>
              {/* Empty slide */}
            </div>
            <div className="item" key={6}>
              {/* Empty slide */}
            </div>
          </>
        )}

        {data.length === 5 && (
          <>
            {data.slice(0, 5).map(
              (item, idx) =>
                item && (
                  <div className="item" key={item.Id}>
                    <Card {...item} img={item.image || SecImage} title={item.name} price={item.price} type={type} onClick={() => onClickHandler(type, item.Id)} rate={item.rate} content={item.description || ''} date={item.date} />
                  </div>
                ),
            )}
            <div className="item" key={5}>
              {/* Empty slide */}
            </div>
          </>
        )}
      </>
    );
  };

  return (
    <div style={{ marginLeft: '3%', marginRight: '3%' }}>
      <OwlCarousel ref={owlRef} options={options}>
        {renderData()}
      </OwlCarousel>
      {data && data.length > 3 && <SliderArrows prev={gotoPrev} next={gotoNext} />}
    </div>
  );
};

export default HomePageSlider;
