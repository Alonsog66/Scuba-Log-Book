import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      info: ['', ''],
      incorrectInput: false,
      instructor: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitInfo = this.submitInfo.bind(this);
  }
  handleChange(event, i) {
    const arr = [...this.state.info];
    arr[i] = event.target.value;
    this.setState({ info: arr });
  }

  async submitInfo(email, password) {
    const PORT = process.env.NODE_ENV === 'development' ? 8080 : 3000;
    const responseJSON = await fetch(
      `http://localhost:${PORT}/get_diver?email=${email}&password=${password}`
    );
    const response = await responseJSON.json();
    if (response.error) {
      this.setState((prevState) => {
        return { ...prevState, incorrectInput: true };
      });
      return;
    }
    return this.props.logIn(response);
  }
  render() {
    return (
      <div id='login-box'>
        <center>
          <h2>
            <u>
              <b>Log In</b>
            </u>
          </h2>
        </center>
        <form
          action=''
          value='Update'
          onSubmit={(e) => {
            e.preventDefault();
            this.submitInfo(this.state.info[0], this.state.info[1]);
          }}
        >
          {!this.state.incorrectInput || (
            <p className='error'>Incorrect email and/or password!</p>
          )}
          <div>
            <label>Email:</label>
            <input type='text' onChange={(e) => this.handleChange(e, 0)} />
          </div>
          <div>
            <label>Password:</label>
            <input type='password' onChange={(e) => this.handleChange(e, 1)} />
          </div>
          <br></br>
          <center>
            <input className='myButton' type='submit' />
          </center>
        </form>
      </div>
    );
  }
}
export default Login;
