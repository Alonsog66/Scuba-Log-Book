import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: ['', '', '', '', ''],
      incorrectInput: false,
      instructor: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.submitInfo = this.submitInfo.bind(this);
  }
  handleChange(event, i) {
    const arr = [...this.state.info];
    arr[i] = event.target.value;
    this.setState({ info: arr });
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        ...prevState,
        instructor: !prevState.instructor,
      };
    });
  }

  async submitInfo(email, password, diverNumber, firstName, lastName) {
    const isInstructor = this.state.instructor;
    const PORT = process.env.NODE_ENV === 'development' ? 8080 : 3000;
    const responseJSON = await fetch(`http://localhost:${PORT}/add_diver`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        diverNumber,
        email,
        password,
        firstName,
        lastName,
        instructor: isInstructor,
      }),
    });
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
        <form
          action=''
          value='Update'
          onSubmit={(e) => {
            e.preventDefault();
            this.submitInfo(
              this.state.info[0],
              this.state.info[1],
              this.state.info[2],
              this.state.info[3],
              this.state.info[4]
            );
          }}
        >
          {!this.state.incorrectInput || (
            <p className='error'>Diver number already has an account!</p>
          )}
          <div>
            <label>Diver Number:</label>
            <input type='text' onChange={(e) => this.handleChange(e, 2)} />
          </div>
          <div>
            <label>First Name:</label>
            <input type='text' onChange={(e) => this.handleChange(e, 3)} />
          </div>
          <div>
            <label>Last Name:</label>
            <input type='text' onChange={(e) => this.handleChange(e, 4)} />
          </div>
          <div>
            <label>Email:</label>
            <input type='text' onChange={(e) => this.handleChange(e, 0)} />
          </div>

          <div>
            <label>Password:</label>
            <input type='password' onChange={(e) => this.handleChange(e, 1)} />
          </div>
          <div>
            <label>Instructor: </label>
            <input type='checkbox' onChange={this.handleClick} />
          </div>
          <input type='submit' />
        </form>
      </div>
    );
  }
}
export default SignupForm;
