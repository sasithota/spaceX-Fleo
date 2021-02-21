import React from 'react';

import MainComponent from './components/MainComponent';

import {Navbar,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
  container : {
    width : "100%",
    height: window.innerHeight,
  },
  head : {

    height : '10%'
  },
  body : {
    height : '90%'
  }
}
function App() {
  return (
    <div style={styles.container}>
      <div style={styles.head}>
        {/* navbar */}
        <Navbar bg="white" variant="white">
          <Navbar.Brand style={{fontSize:'35px'}} href="www.spacex.com">SpaceX</Navbar.Brand>
        </Navbar>
      </div>
      <div style={styles.body}>
         {/* main */}
         <MainComponent />
      </div>
    </div>
  );
}

export default App;
