import React from 'react';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';
import './App.css';

import userData from './user.json';
import statisticsData from './data.json';
import friendData from './friends.json';
import transactionData from './transactions.json';

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
