import React from 'react';

function User(props) {
  return (
    <div id='user'>
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
