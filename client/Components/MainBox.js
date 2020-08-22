import React from 'react';
import Login from './Login.js';
import Signup from './Signup.js';
import Profile from './Profile.js';
import SignupForm from './SignupForm.js';
import Instructor from './Instructor.js';

class MainBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userInfo: {},
      signupForm: false,
      isInstructor: false,
    };
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.signup = this.signup.bind(this);
  }

  logIn(info) {
    this.setState((prevState) => {
      return {
        ...prevState,
        isInstructor: info.instructor,
        signupForm: false,
        isLoggedIn: true,
        userInfo: info,
      };
    });
  }
  signup() {
    this.setState((prevState) => {
      return {
        ...prevState,
        signupForm: !prevState.signupForm,
      };
    });
  }
  logOut() {
    this.setState({
      isLoggedIn: false,
      userInfo: {},
      signupForm: false,
      isInstructor: false,
    });
  }

  render() {
    return (
      <div id='main-box'>
        <h1>Scuba Log Book</h1>
        {this.state.isLoggedIn ? (
          this.state.isInstructor ? (
            <div>
              <div id='text' className='logOut' onClick={this.logOut}>
                Log out
              </div>
              <Instructor />
            </div>
          ) : (
            <div>
              <div id='text' className='logOut2' onClick={this.logOut}>
                Log out
              </div>
              <Profile info={this.state.userInfo} />
            </div>
          )
        ) : this.state.signupForm ? (
          // Sign up form
          <div className='jeho-box'>
            <SignupForm logIn={this.logIn} />
            <br></br>
            <Signup signupForm={this.state.signupForm} signup={this.signup} />
          </div>
        ) : (
          // Log in form
          <div className='jeho-box'>
            <Login logIn={this.logIn} />
            <br></br>
            <Signup signupForm={this.state.signupForm} signup={this.signup} />
          </div>
        )}
      </div>
    );
  }
}
export default MainBox;
