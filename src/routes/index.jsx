import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";

import Home from '../pages/Home';
import Portifolio from '../pages/Portifolio';

const RoutesComponent= () => (
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/portifolio" element={<Portifolio />}/>
  </Routes>
);

export default RoutesComponent;