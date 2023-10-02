import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCameraImg, resetCameraImg } from "./features/cameraSlice";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import TextFieldsRoundedIcon from "@mui/icons-material/TextFieldsRounded";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import MusicNoteRoundedIcon from "@mui/icons-material/MusicNoteRounded";
import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";
import CropRotateRoundedIcon from "@mui/icons-material/CropRotateRounded";
import AlarmOnRoundedIcon from "@mui/icons-material/AlarmOnRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { v4 as uuid } from "uuid";
import { storage } from "./firebase/firebase.js";

import "./Preview.css";

function Preview() {
  const cameraImg = useSelector(selectCameraImg);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const dispatch = useDispatch();

  useEffect(() => {
    if (!cameraImg) {
      navigate("/"); // Use navigate to redirect to the home page
    }
  }, [cameraImg, navigate]);

  const handleClose = () => {
    dispatch(resetCameraImg());
    navigate("/");
  };

  const sendPost = () => {
    if (cameraImg) {
      const id = uuid();
      const uploadTask = storage.ref(`posts/${id}`).putString(cameraImg, "data_url");
  
      uploadTask.on("state_changed", (snapshot) => {
        // You can add logic here to track the progress of the upload if needed
      }, (error) => {
        // Handle any errors that occur during the upload
        console.error("Error uploading post:", error);
      }, () => {
        // Handle successful completion of the upload
        // You can navigate back to the home page or perform any other actions here
        navigate("/");
      });
    }
  };
  

  return (
    <div className="preview">
      <CloseRoundedIcon onClick={handleClose} className="preview-close" />
      <div className="preview-toolbar">
        <TextFieldsRoundedIcon className="right-part" />
        <CreateRoundedIcon className="right-part" />
        <EditNoteRoundedIcon className="right-part" />
        <MusicNoteRoundedIcon className="right-part" />
        <AttachFileRoundedIcon className="right-part" />
        <CropRotateRoundedIcon className="right-part" />
        <AlarmOnRoundedIcon className="right-part" />
      </div>
      <img src={cameraImg} alt="" />
      <div className="preview-footer" onClick={sendPost}>
        <h2>Send Now</h2>
        <SendRoundedIcon className="footer-icon" />
      </div>
    </div>
  );
}

export default Preview;
