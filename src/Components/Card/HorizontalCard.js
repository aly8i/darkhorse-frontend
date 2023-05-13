import React from 'react';
import Mark from 'mark.js';
import { useGetSectorDetailsQuery } from '../../redux/HomeAPI';

const HorizontalCard = ({ imageUrl, heading, subHeading, sectors, tags, onClick, search }) => {
  const markRef = React.useRef(null);
  const markRefMob = React.useRef(null);
  React.useEffect(() => {
    const markInstance = new Mark(markRef.current);
    const markInstanceMob = new Mark(markRefMob.current);

    markInstance.mark(search, {
      className: 'highlight',
      acrossElements: true,
      separateWordSearch: false,
      exclude: ['.unsearchable'],
    });
    markInstanceMob.mark(search, {
      className: 'highlight',
      acrossElements: true,
      separateWordSearch: false,
    });
  }, [search]);

  const { data: sector, isSuccess: isSectorSuccess, isLoading: isSectorsLoading } = useGetSectorDetailsQuery(sectors);

  return (
    <>
      <div className="horizontal-card-container">
        <div className="horizontal-card" onClick={onClick}>
          <img src={imageUrl} alt="Small Image" className="h-card-img" />
          <div id="card-div" ref={markRef}>
            <h2 className="h-card-heading">{heading}</h2>
            <div style={{ marginTop: '2%' }}>
              {subHeading && (
                <p className="h-card-subheadings">
                  <span className="unsearchable" style={{ fontWeight: 'bold' }}>
                    Heading:{' '}
                  </span>
                  {subHeading}
                </p>
              )}
              {sectors && (
                <p className="h-card-subheadings">
                  <span className="unsearchable" style={{ fontWeight: 'bold' }}>
                    Sectors:{' '}
                  </span>
                  {sector?.payload?.name}
                </p>
              )}
              {tags && (
                <p className="h-card-subheadings">
                  <span className="unsearchable" style={{ fontWeight: 'bold' }}>
                    Tags:{' '}
                  </span>
                  {tags}
                </p>
              )}
            </div>
          </div>
        </div>
        <hr className="card-hr"></hr>
      </div>
      <div className="mob-card">
        <div id="card-div" ref={markRefMob} onClick={onClick}>
          <h2 className="h-card-heading" style={{ fontWeight: '800', fontSize: '24px' }}>
            {heading}
          </h2>
          <div style={{ marginTop: '2%' }}>
            {subHeading && (
              <p className="h-card-subheadings" style={{ fontWeight: '700', fontSize: '19px' }}>
                {subHeading}
              </p>
            )}
          </div>
          <hr className="mob-card-hr"></hr>
        </div>
      </div>
    </>
  );
};

export default HorizontalCard;
