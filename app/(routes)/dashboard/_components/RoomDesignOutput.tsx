import React from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

function RoomDesignOutput({ room }: any) {
  return (
    <div>
      <ReactBeforeSliderComponent
        firstImage={{
            imageUrl: room?.aiImage
        }}
        secondImage={{
            imageUrl: room?.orgImage
        }}
      />
    </div>
  );
}

export default RoomDesignOutput;
