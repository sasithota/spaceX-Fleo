import React from 'react';

import MainComponent from './components/MainComponent';
import Head from './components/Head';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div style={{height : '100%',width : '100%'}}>
      <Head />
      <MainComponent />
    </div>
  );
}

export default App;
