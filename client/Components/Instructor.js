import React from 'react';
import Profile from './Profile';

class Instructor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: ['', '', '', '', '', ''],
      divers: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.getDivers = this.getDivers.bind(this);
  }
  handleChange(event, i) {
    const arr = [...this.state.info];
    arr[i] = event.target.value;
    this.setState({ info: arr });
  }
  async getDivers() {
    const PORT = process.env.NODE_ENV === 'development' ? 8080 : 3000;
    const responseJSON = await fetch(`http://localhost:${PORT}/get_divers`);
    const response = await responseJSON.json();
    this.setState((prevState) => {
      return {
        ...prevState,
        divers: response,
      };
    });
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
    const diverArr = this.state.divers.map((diver) => (
      <Profile key={diver.diverNumber} info={diver} />
    ));
    return (
      <div id='instructor-div'>
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

        <div id='display-divers'>
          <button onClick={this.getDivers}>Click Me!</button>
          {diverArr}
        </div>
      </div>
    );
  }
}

export default Instructor;
