import React from 'react';

import MainComponent from './components/MainComponent';
import Head from './components/Head';

import {BrowserRouter as Router} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div style={{height : '100%',width : '100%'}}>
      <Router>
        <Head />
        <MainComponent />
      </Router>
      
    </div>
  );
}

export default App;
