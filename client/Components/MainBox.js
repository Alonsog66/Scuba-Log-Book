import React from 'react';
import Login from './Login.js';
import Signup from './Signup.js';
import Profile from './Profile.js';

class MainBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userInfo: {},
    };
    this.logIn = this.logIn.bind(this);
  }

  logIn(info) {
    this.setState((prevState) => {
      return {
        ...prevState,
        isLoggedIn: true,
        userInfo: info,
      };
    });
  }

  render() {
    return (
      <div id='main-box'>
        <h1>Scuba Log Book</h1>
        {this.state.isLoggedIn ? (
          <div>
            <Profile info={this.state.userInfo} />
          </div>
        ) : (
          <div>
            <Login logIn={this.logIn} />
            <Signup />
          </div>
        )}
      </div>
    );
  }
}
export default MainBox;
