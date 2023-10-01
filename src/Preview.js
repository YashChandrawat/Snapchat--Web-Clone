import React from "react";
import { useSelector } from "react-redux";
import { selectCameraImg } from "./features/cameraSlice";

function Preview() {
  // Use useSelector to select the cameraImg from the Redux store
  const cameraImg = useSelector(selectCameraImg);

  return (
    <div>
      {cameraImg && <img src={cameraImg} alt="Camera Preview" />}
    </div>
  );
}

export default Preview;
