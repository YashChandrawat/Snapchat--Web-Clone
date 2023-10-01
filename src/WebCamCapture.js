import React, { useCallback, useRef } from "react";
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { useDispatch } from "react-redux";
import { setCameraImg } from "./features/cameraSlice";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./WebcamCapture.css";

const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user",
};

function WebCamCapture() {
  const webcamref = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate to navigate to different routes

  const capture = useCallback(() => {
    const imageSrc = webcamref.current.getScreenshot();
    dispatch(setCameraImg(imageSrc));
    navigate("/preview"); // Use navigate to go to the '/preview' route
  }, [webcamref, dispatch, navigate]); // Include 'webcamref', 'dispatch', and 'navigate' in the dependency array

  return (
    <div className="webcamcapture">
      <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamref}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />
      <RadioButtonUncheckedIcon
        className="capture-btn"
        onClick={capture}
        fontSize="large"
        cursor = "pointer"
      />
    </div>
  );
}

export default WebCamCapture;
