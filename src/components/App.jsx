//dane z plikow JSON
import style from './App.module.css';

import user from '../data/user.json';
import dane2 from '../data/data.json';
import dane3 from '../data/friends.json';
import dane4 from '../data/transactions.json';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import { FriendList, FriendListItem } from './FriendList/FriendList';
import { Transaction } from './Transaction/Transaction';

//tu bede wrzucał wszystkie komponenty
export const App = () => {
  //Nie można używać

  return (
    <div className={style.app}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={dane2} />
      <FriendList>
        <FriendListItem friends={dane3} />
      </FriendList>
      <Transaction items={dane4} />
    </div>
  );
};
