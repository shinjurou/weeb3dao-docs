import * as React from "react";

export default ({ youtubeId }) => {
  return (
    <div className="relative pb-[56.25%] overflow-hidden h-0 mt-4">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        frameBorder="0"
      />
    </div>
  );
};
