import React from 'react';

function User(props) {
  return (
    <div className='profile-info'>
      <img src={`https://robohash.org/set_set2/${Math.random()}`}></img>
      <ul>
        <li>
          Name: {props.userInfo.firstName} {props.userInfo.lastName}
        </li>
        <li>Diver Number: {props.userInfo.diverNumber}</li>
        <li>Email: {props.userInfo.email}</li>
      </ul>
    </div>
  );
}

export default User;
