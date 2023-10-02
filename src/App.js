import React from "react";
import "./App.css";
import WebCamCapture from "./WebCamCapture";
import { Route, Routes } from "react-router-dom";
import Preview from "./Preview";
// import { useHistory } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="app-body">
        <Routes>
          <Route exact path="/" element={<WebCamCapture />} />
          <Route path="/preview" element={<Preview />} />

          {/* Define other routes here */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
