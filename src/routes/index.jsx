import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";

import Landing from '../pages/Landing';

const RoutesComponent= () => (
  <Routes>
    <Route path="/" element={<Landing />}/>
  </Routes>
);

export default RoutesComponent;