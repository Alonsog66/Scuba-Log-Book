import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      info: ['', ''],
      incorrectInput: false,
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
    const responseJSON = await fetch(
      `http://localhost:8080/get_diver?email=${email}&password=${password}`
    );
    const response = await responseJSON.json();
    if (response.error)
      this.setState((prevState) => {
        return { ...prevState, incorrectInput: true };
      });
    return this.props.logIn(response);
  }
  render() {
    return (
      <div id='login-box'>
        <form
          action=''
          value='Update'
          onSubmit={(e) => {
            e.preventDefault();
            this.submitInfo(this.state.info[0], this.state.info[1]);
          }}
        >
          {!this.state.incorrectInput || (
            <p className='error'>Incorrect username and/or password!</p>
          )}
          <div>
            <label>Email:</label>
            <input type='text' onChange={(e) => this.handleChange(e, 0)} />
          </div>

          <div>
            <label>Password:</label>
            <input type='text' onChange={(e) => this.handleChange(e, 1)} />
          </div>
          <input type='submit' />
        </form>
      </div>
    );
  }
}
export default Login;
