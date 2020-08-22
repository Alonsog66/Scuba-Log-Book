import React from 'react';
import Dive from './Dive.js';

class DiveBox extends React.Component {
  render() {
    const { dives } = this.props;
    const diveArr = dives.map((dive, i) => <Dive key={i} diveInfo={dive} />);

    return (
      <div>
        <center>
          <strong>Recorded Dives</strong>
        </center>
        {diveArr.length ? (
          diveArr
        ) : (
          <center>
            <h4>No current dives to show. Go diving!</h4>
          </center>
        )}
      </div>
    );
  }
}

export default DiveBox;
