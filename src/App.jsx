import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import GloblalStyle from './styles/global';

import RoutesComponent from './routes';

const App= () =>(
  <>
    <Router>
      <RoutesComponent/>
    </Router>
    <GloblalStyle />
  </>
)

export default App;