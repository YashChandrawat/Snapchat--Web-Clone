import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  cameraImg : null
};



export const cameraSlice = createSlice({
  name: "camera",
  initialState,
  reducers: {
    setCameraImg: (state, action) => {
      state.cameraImg = action.payload;
    },
    resetCameraImg : (state) => {
        state.cameraImg = null;
    }
  },
});

export const { setCameraImg } = cameraSlice.actions;

export const selectCameraImg = (state) => state.camera.cameraImg;

export default cameraSlice.reducer;
