import React from "react";

export default function Video() {
  return (
    <div className="video-wrapper">
    <video controls="true" autoPlay className='video'>
      <source src="www.youtube.com/watch?v=IEDEtZ4UVtI" type="video/mp4" />
    </video></div>
  );
}
