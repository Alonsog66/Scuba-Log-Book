import React from 'react';
import Login from './Login.js';
import Signup from './Signup.js';

class MainBox extends React.Component {
  render() {
    return (
      <div id='main-box'>
        <h1>Scuba Log Book</h1>
        <Login />
        <Signup />
      </div>
    );
  }
}
export default MainBox;
