import React from "react";

export const Tutorial = () => {
  return (
    <div id="welcome-tutorial">
      <h3 className="p-5">Tutorial</h3>
      <p className="pt-2">Do you need help getting started?</p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/oZNg8T53V1M"
        title="YouTube video player"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
