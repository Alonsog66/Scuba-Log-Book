import React from 'react';

function Signup(props) {
  return (
    <div id='signup-box'>
      <button onClick={props.signup}>
        {props.signupForm ? ' Login Here!' : 'Signup Here!'}
      </button>
    </div>
  );
}

export default Signup;
