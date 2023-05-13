import React from 'react';
import ArrowDark from "../../Assets/Arrow 13.svg";
import ArrowLight from "../../Assets/Arrow 15.svg";
import { useAppSelector } from '../../store/hooks';

const SliderArrows = (props) => {
    const { prev, next } = props;
    const darkMode = useAppSelector((store)=>store.theme.dark);
    return (
        <div className="d-flex slider-arrow">
            <div className="slider-arrow-left" onClick={() => prev()} data-cursor-text="previous">
                {darkMode ? <img src={ArrowLight} alt="arrow-light" />:<img src={ArrowDark} alt="arrow-dark"/>}
            </div>
            <div className="slider-arrow-right" onClick={() => next()} data-cursor-text="next">
                {darkMode ? <img src={ArrowLight} className="expanded-icon" alt="arrow-light" />:<img src={ArrowDark} className="expanded-icon" alt="arrow-dark"/>}
            </div>
        </div>
    );
}

export default SliderArrows