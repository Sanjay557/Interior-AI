import React, { useState } from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import AiOutputDialog from "./AiOutputDialog";

function RoomDesignOutput({ room }: any) {
  const [openDialogNew, setOpenDialogNew] = useState(false)
  const onClickHandler = () => {
    setOpenDialogNew(true)
  }
  return (
    <div className="shadow-md rounded-md p-2 border-solid-black border-2 cursor-pointer"
    onClick={()=> onClickHandler()}>
      <ReactBeforeSliderComponent
        firstImage={{
            imageUrl: room?.aiImage
        }}
        secondImage={{
            imageUrl: room?.orgImage
        }}
      />
      <div className="p-4 mt-4">
        <h2>Room Type: {room.roomType}</h2>
        <h2>Design Type: {room.designType}</h2>
      </div>

      <AiOutputDialog 
      aiImage={room?.aiImage} 
      orgImage={room?.orgImage}
      closeDialog={()=> setOpenDialogNew(false)}
      openDialog = {openDialogNew}
      />
    </div>
    
  );
}

export default RoomDesignOutput;
