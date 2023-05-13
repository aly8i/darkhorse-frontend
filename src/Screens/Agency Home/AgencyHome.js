import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.scss';

// Importing a dummy image and a dummy video for hover animation
import hoverVideo from '../../Assets/hoverVideo.mp4';

export default function AgencyHome() {
  const history = useHistory();
  return (
    <div className="container">
      <div className="mt-header">
        <p className="fs-30 mb-3 cxx">Always trying to be contrarian</p>

        <div className="d-flex flex-column-tablet" data-cursor="-media-blend">
          <h1
            className="text-slide-up-animation-1 mb-30 fs-95 outlined ml-4"
            data-cursor-video={hoverVideo}
            onClick={() => {
              history.push('/');
            }}
          >
            Blog
          </h1>
          <h1 className="text-slide-up-animation-1 fs-95 " data-cursor-video={hoverVideo}>
            <a href="https://dashboard.darkhorsestocks.in/" className=" ml-4 fs-95 outlined home-border mb-30">
              Dashboard
            </a>
          </h1>
          <h1 className="text-slide-up-animation-1 mb-30 fs-95" data-cursor-video={hoverVideo}>
            <a href="https://fundalysis.darkhorsestocks.in/" className=" ml-4 fs-95 outlined home-border">
              Fundalysis
            </a>
          </h1>
        </div>
      </div>
      <div className=" mt-section">
        <p className=" fs-30 home-text text-slide-up-animation-3">Darkhorsestocks was started with a simple aim that is to help small investors in the stock market. Today we are working in this direction to take it to new heights.</p>
      </div>
    </div>
  );
}
