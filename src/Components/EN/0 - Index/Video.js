import * as React from "react";

const Video = ({ youtubeId, title }) => {
  return (
    <div className="relative pb-[56.25%] overflow-hidden h-0 mt-4">
      <iframe
        title={title}
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        frameBorder="0"
      />
    </div>
  );
};

export default Video;
