import React from 'react';
import Dive from './Dive.js';

class DiveBox extends React.Component {
  render() {
    const { dives } = this.props;
    const diveArr = dives.map((dive) => (
      <Dive key={dive.date} diveInfo={dive} />
    ));

    return <div id='dive-box'>{diveArr}</div>;
  }
}

export default DiveBox;
