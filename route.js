import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/index";
import Detailed from './pages/Detailed'

const RoutesConfig = () => {
  return(
    <Routes>
      <Route element = { <Home/> }  path="/" />
      <Route element = { <Detailed/> }  path="/detailed/:username" />
    </Routes>
  )
}

export default RoutesConfig;