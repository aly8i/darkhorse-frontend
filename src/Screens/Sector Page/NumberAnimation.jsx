import { Col, Row } from 'antd';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { usePrevious } from './hooks';
import './number-styles.scss';

function formatForDisplay(num = 0) {
  const abs = Math.abs(num);
  const tmp = parseFloat(Math.max(abs, 0).toString()).toFixed(2).split('').reverse();
  const resArray = num >= 0 ? tmp : [...tmp, '-'];
  return resArray;
}

function DecimalColumn(props) {
  return (
    <div>
      <span>{props.val}</span>
    </div>
  );
}

function NumberColumn(props) {
  const { digit, delta } = props;
  const [position, setPosition] = useState(0);
  const [animationClass, setAnimationClass] = useState(null);
  const previousDigit = usePrevious(digit);
  const columnContainer = useRef();

  const setColumnToNumber = (number) => {
    const num = columnContainer?.current?.clientHeight;
    if (columnContainer) setPosition((num ?? 1) * parseInt(number, 10));
  };

  useEffect(() => setAnimationClass(previousDigit !== digit ? delta : ''), [digit, delta]);

  useEffect(() => setColumnToNumber(digit), [digit]);

  return (
    <div className="ticker-column-container" ref={columnContainer}>
      <motion.div animate={{ y: position }} className={`ticker-column ${animationClass}`} onAnimationComplete={() => setAnimationClass('')}>
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

export default function NumberAnimation(props) {
  const { value, rs = false } = props;
  const numArray = formatForDisplay(value);
  const previousNumber = usePrevious(value);

  let delta;
  if (previousNumber && value > previousNumber) delta = 'increase';
  if (previousNumber && value < previousNumber) delta = 'decrease';

  return (
    <Row>
      {/* {rs && <Col span={1} style={{ border: '1px solid red' }}>Rs</Col>} */}
      <Col span={4} style={{ textAlign: 'left' }}>
        <motion.div layout className="ticker-view">
          {numArray.map((number, index) => (number === '.' || number === '-' ? <DecimalColumn key={index} val={number} /> : <NumberColumn key={index} digit={number} delta={delta ?? ''} />))}Rs
        </motion.div>
      </Col>
    </Row>
  );
}
