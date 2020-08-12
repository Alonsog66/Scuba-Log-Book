import React from 'react';
import User from './User';
import DiveBox from './DiveBox';

function Profile(props) {
  return (
    <div>
      <div class='profile-box'>
        <User userInfo={props.info} />
      </div>
      <div class='dive-container'>
        <DiveBox dives={props.info.dives} />
      </div>
    </div>
  );
}

export default Profile;
