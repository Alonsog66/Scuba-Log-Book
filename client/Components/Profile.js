import React from 'react';
import User from './User';
import DiveBox from './DiveBox';

function Profile(props) {
  return (
    <div id='profile-box'>
      <User userInfo={props.info} />
      <DiveBox dives={props.info.dives} />
    </div>
  );
}

export default Profile;
