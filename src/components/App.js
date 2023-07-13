import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';


import userData from './user.json';
import statisticsData from './data.json';
import friendData from './friends.json';
import transactionData from './transactions.json';
import './App.css';

function App() {
  return (
    <div>
      <Profile 
      username={userData.username}
      tag={userData.tag}
      location={userData.location}
      avatar={userData.avatar}
      stats={userData.stats}
      />

      <Statistics title="Upload stats" stats={statisticsData} />

      <FriendList friends={friendData} />

      <TransactionHistory items={transactionData} />
    </div>
  );
}

export default App;
