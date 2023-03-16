import dane from '../data/user.json';

import Profile from './Profile/Profile';
import PersonData from './PersonData/PersonData';
import Data from './Data/Data';
//centrowanie
const style = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 40,
  color: '#010101',
};

//tu bede wrzucał wszystkie komponenty
export const App = () => {
  //Nie można używać
  const { stats, ...otherData } = dane;
  return (
    <div style={style}>
      <Profile elevated={true}>
        <PersonData {...otherData} />
        <ul>
          {Object.entries(stats).map(([key, value]) => {
            return (
              <li>
                <Data title={key} key={key} value={value} />
              </li>
            );
          })}
        </ul>
      </Profile>
    </div>
  );
};
