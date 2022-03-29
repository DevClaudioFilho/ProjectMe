import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";

import Home from '../pages/Home';
import Portifolio from '../pages/Portifolio';
import Contato from '../pages/Contato';

const RoutesComponent= () => (
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/portifolio" element={<Portifolio />}/>
    <Route path="/contato" element={<Contato />}/>
  </Routes>
);

export default RoutesComponent;