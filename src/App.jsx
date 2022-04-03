import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import GloblalStyle from './styles/global';

import RoutesComponent from './routes';

const App= () =>(
  <>
    <GloblalStyle />
    <Router>
      <RoutesComponent/>
    </Router>
  </>
)

export default App;