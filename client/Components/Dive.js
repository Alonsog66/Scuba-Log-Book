import React from 'react';
import DiveLeft from './DiveLeft';
import DiveRight from './DiveRight';

function Dive(props) {
  const { date, depth, location, visibility, notes } = props.diveInfo;
  return (
    <div className='dive'>
      <DiveLeft
        key={'Dive' + date}
        date={date}
        depth={depth}
        location={location}
        visibility={visibility}
      />
      <DiveRight key={date} notes={notes} />
    </div>
  );
}

export default Dive;
