import React from 'react';

class Instructor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: ['', '', '', '', '', ''],
      //incorrectInput: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event, i) {
    const arr = [...this.state.info];
    arr[i] = event.target.value;
    this.setState({ info: arr });
  }

  async submitInfo(diverNumber, date, location, depth, visibility, notes) {
    const PORT = process.env.NODE_ENV === 'development' ? 8080 : 3000;
    const responseJSON = await fetch(`http://localhost:${PORT}/add_dive`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        diverNumber,
        date,
        location,
        depth,
        visibility,
        notes,
      }),
    });
    const response = await responseJSON.json();
    alert(`Successfully added dive to Diver Number: ${response.diverNumber}`);
  }

  render() {
    return (
      <div id='add-dive-box'>
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
              this.state.info[4],
              this.state.info[5]
            );
          }}
        >
          {/* {!this.state.incorrectInput || (
            <p className='error'>Diver number already has an account!</p>
          )} */}
          <div>
            <label>Diver Number:</label>
            <input type='text' onChange={(e) => this.handleChange(e, 0)} />
          </div>
          <div>
            <label>Date:</label>
            <input type='text' onChange={(e) => this.handleChange(e, 1)} />
          </div>
          <div>
            <label>Location:</label>
            <input type='text' onChange={(e) => this.handleChange(e, 2)} />
          </div>
          <div>
            <label>Depth:</label>
            <input type='text' onChange={(e) => this.handleChange(e, 3)} />
          </div>

          <div>
            <label>Visibility:</label>
            <input type='text' onChange={(e) => this.handleChange(e, 4)} />
          </div>
          <div>
            <label>Notes:</label>
            <input type='text' onChange={(e) => this.handleChange(e, 5)} />
          </div>

          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default Instructor;
