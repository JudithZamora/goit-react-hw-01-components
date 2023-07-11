import React from 'react';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <li className="item-f" key={friend.id}>
          <span
            className="status"
            style={{ backgroundColor: friend.isOnline ? 'green' : 'red' }}
          ></span>
          <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
