import { motion } from 'framer-motion';
import './style.scss';
import { useEffect, useRef, useState } from 'react';
import { usePrevious } from '../../utils/usePrevious';
import classNames from 'classnames';

function formatForDisplay(number = 0) {
  if (number >= 99999) {
    return parseFloat(Math.max(number, 0)).toFixed(0).split('').reverse();
  } else {
    return parseFloat(Math.max(number, 0)).toFixed(2).split('').reverse();
  }
}

function DecimalColumn() {
  return (
    <div>
      <span>.</span>
    </div>
  );
}

function NumberColumn({ digit, delta: animationClass }) {
  const [position, setPosition] = useState(0);
  // const [animationClass, setAnimationClass] = useState(null);
  // const previousDigit = usePrevious(digit);
  const columnContainer = useRef();

  const setColumnToNumber = (number) => {
    setPosition(`${10 * parseInt(number, 10)}%`);
  };

  // useEffect(() => setAnimationClass(previousDigit !== digit ? delta : ''), [digit, delta, previousDigit]);

  useEffect(() => setColumnToNumber(digit), [digit]);
  // console.log('digit', digit, animationClass)
  return (
    <div className="ticker-column-container" ref={columnContainer}>
      {/* <motion.div animate={{ y: position }} className={classNames('ticker-column', animationClass)} onAnimationComplete={() => setAnimationClass('')}> */}
      <motion.div animate={{ y: position }} className={classNames('ticker-column', animationClass)}>
        {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((num) => (
          <div key={num} className="ticker-digit">
            <span>{num}</span>
          </div>
        ))}
      </motion.div>
      <span className="number-placeholder">0</span>
    </div>
  );
}

export default function AnimatingNumber(props) {
  const { value: exactValue, classes = '' } = props;
  const value = Math.abs(exactValue);
  const numArray = formatForDisplay(value);
  // const previousNumber = usePrevious(value) || 0;
  let delta = null;
  if (exactValue >= 0) {
    delta = 'increase';
  } else {
    delta = 'decrease';
  }

  return (
    <motion.div layout className={`ticker-view ${classes}`}>
      {numArray.map((number, index) => (number === '.' ? <DecimalColumn key={index} /> : <NumberColumn key={index} digit={number} delta={delta} />))}
      {/* {exactValue < 0 && '-'} */}
    </motion.div>
  );
}
