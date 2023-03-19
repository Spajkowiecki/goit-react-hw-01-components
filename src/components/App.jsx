//dane z plikow JSON
import dane from '../data/user.json';
import dane2 from '../data/data.json';

import Profile from './Profile/Profile';
import Stats from './Data/Data';
import Statistics from './Statistics/Statistics';

//centrowanie
const style = {
  height: '100vh',
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

      <Statistics {...dane2} />
    </div>
  );
};
