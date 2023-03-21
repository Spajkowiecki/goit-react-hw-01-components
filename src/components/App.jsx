//dane z plikow JSON
import dane from '../data/user.json';
import dane2 from '../data/data.json';
import dane3 from '../data/friends.json';
import dane4 from '../data/transactions.json';

import Profile from './Profile/Profile';
import Stats from './Data/Data';
import Statistics from './Statistics/Statistics';
import Friends from './Friends/Friends';
import Table from './Table/Table';
//centrowanie
const style = {
  height: '100vh',
  padding: '20px',
  display: 'flex',
  gap: '20px',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 40,
  color: '#010101',
};

//tu bede wrzucał wszystkie komponenty
export const App = () => {
  //Nie można używać

  return (
    <div style={style}>
      <Profile elevated="isElevated" {...dane}>
        <Stats {...dane.stats} />
      </Profile>

      <Statistics title="UPLOAD STATS" {...dane2} />
      <Friends {...dane3} />
      <Table items={dane4} />
    </div>
  );
};
