import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Survey from "./Components/Survey";

function App() {
  return (
    <div className={"w-screen bg-[#000000fc] p-5 border-2 h-screen"}>
      <Routes>
        <Route path={"/"} element={<LandingPage />} />
        <Route path={"/survey"} element={<Survey />} />
      </Routes>
    </div>
  );
}

export default App;
