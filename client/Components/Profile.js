import React from 'react';
import User from './User';
import DiveBox from './DiveBox';

function Profile(props) {
  return (
    <div className='profile-box'>
      <div className='profile-info'>
        <User userInfo={props.info} />
      </div>
      <div className='dive-container'>
        <DiveBox dives={props.info.dives} />
      </div>
    </div>
  );
}

export default Profile;
