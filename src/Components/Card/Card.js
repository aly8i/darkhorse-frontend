import './style.scss';
import React, { useEffect } from 'react';
import AnimatingNumber from '../AnimatingNumber/animation-number';
import { useState } from 'react';
import { Image } from 'antd';
import { useGetMessagesQuery } from '../../redux/WebSocket';
import { useHistory } from 'react-router-dom';
import { useGetTimeSeriesValueMutation } from '../../redux/HomeAPI';

export default function Card(props) {
  const [counter2, setCounter2] = useState(props.price ?? 0);
  const history = useHistory();
  const [getTimeSeriesValue, { data: timeSeriesData, isSusccess: isTimeSeriesSuccess, isLoading: isTimeSeriesLoading }] = useGetTimeSeriesValueMutation();
  const { data: messages, isSuccess: isMessageSuccess, isLoading: isMessageLoading } = useGetMessagesQuery();

  useEffect(() => {
    if (!isTimeSeriesLoading && isTimeSeriesSuccess && timeSeriesData && timeSeriesData.payload && timeSeriesData.payload.values.length > 0) {
      setCounter2(Number(timeSeriesData.payload.values[0].close));
    }
  }, [isTimeSeriesLoading, isTimeSeriesSuccess, timeSeriesData]);

  useEffect(() => {
    if (messages) {
      messages.map((ms) => {
        const tmp = JSON.parse(ms);
        if (tmp.event === 'price' && tmp?.symbol === props.code) {
          setCounter2(tmp.price);
        }
      });
    }
  }, [messages, props.code]);

  if (!props.Id) {
    return;
  }

  const onClickDefault = () => {
    history.push('/new-blog');
  };

  const gainValue = (counter2 ? counter2 - props.price_suggested : 0).toFixed(2);
  const gainPercentage = counter2 ? (((counter2 - props.price_suggested) * 100) / counter2).toFixed(2) : (props.gain_perc * 100).toFixed(2);

  return (
    <div className={props.from === 'search' ? 'searchcard-container card-container' : 'card-container'} data-cursor-text="Read report" onClick={props.onClick ?? onClickDefault}>
      <div className="img-container">
        <Image
          src={props.img}
          preview={false}
          fallback="data:image/png;base64,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"
        />
      </div>
      <div className={props.from === 'search' ? 'searchcard-content card-content' : 'card-content'}>
        <div className="card-title d-flex align-items-center my-0 justify-content-between">
          <h3 className="my-0 text-capitalize">{props.name ?? props.title}</h3>
          {/* <p className="my-0">{props.price}</p> */}
          {!['sector', 'blogposts', 'sectors', 'categories'].includes(props.type) && (
            <div style={{ display: 'flex' }}>
              {'₹'}
              <AnimatingNumber value={counter2 ? counter2 : '0000'} />
            </div>
          )}
        </div>
        {!['sector'].includes(props.type) && (
          <>
            <div className="card-rate d-flex align-items-center justify-content-between">
              <div
                style={{
                  display: 'flex',
                  gap: '0.2rem',
                  alignItems: 'center',
                }}
                className="price-wrapper"
              >
                {!['sector', 'blogposts', 'sectors', 'categories'].includes(props.type) && (
                  <>
                    <span>{gainValue >= 0 ? '+' : '-'}</span>
                    <div className="d-flex align-items-center">
                      INR <div>₹</div>
                    </div>
                    <AnimatingNumber value={gainValue} />
                    <div style={{ display: 'flex' }}>
                      {'('}
                      {gainValue >= 0 ? '+' : '-'}
                      <AnimatingNumber value={gainPercentage} />%{')'}
                      {'TODAY'}
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="card-text my-0">
              <p className="my-0">
                {props.content && props.content.length > 150 ? props.content.slice(0, 150) : ''}
                ...
              </p>
            </div>
            <div className="card-date">{props.date && `PUBLISHED ON ${new Date(props?.date).toDateString()}`}</div>
          </>
        )}
      </div>
    </div>
  );
}
