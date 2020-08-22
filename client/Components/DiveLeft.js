import React from 'react';

function DiveLeft({ date, depth, location, visibility }) {
  return (
    <div className='dive-left'>
      <ul>
        <li> Date: {date}</li>
        <li>Depth: {depth}</li>
        <li>Location: {location}</li>
        <li>Visibility: {visibility}</li>
      </ul>
    </div>
  );
}

export default DiveLeft;
