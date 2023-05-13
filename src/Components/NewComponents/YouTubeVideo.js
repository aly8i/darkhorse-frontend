import React from "react";

export default function YouTubeVideo() {
  return (
    <div className="video-wrapper">
    <iframe
className="video"
      src="https://www.youtube-nocookie.com/embed/OTd28lXLEfc?autoplay=1&mute=1"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe> </div>
  );
}
