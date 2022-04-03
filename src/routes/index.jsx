import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";

import Contato from '../pages/Contato';
import Landing from '../pages/Landing';

const RoutesComponent= () => (
  <Routes>
    <Route path="/" element={<Landing />}/>
    <Route path="/contato" element={<Contato />}/>
  </Routes>
);

export default RoutesComponent;