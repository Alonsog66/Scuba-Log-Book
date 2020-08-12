import React from 'react';

function DiveLeft({ date, depth, location, visibility }) {
  return (
    <div className='dive-left'>
      <ul>
        <li> date: {date}</li>
        <li>depth: {depth}</li>
        <li>location: {location}</li>
        <li>visibility: {visibility}</li>
      </ul>
    </div>
  );
}

export default DiveLeft;
