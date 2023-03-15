import Profile from './Profile';
import Media from './Media';
import dane from '../data/user.json';
import './Profile.css';

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
  const { stats, ...otherProps } = dane;
  return (
    <div style={style}>
      <Profile {...otherProps}>
        <ul className="profile__media">
          {Object.entries(stats).map(([key, value]) => {
            return (
              <li>
                <Media title={key} key={key} value={value}></Media>
              </li>
            );
          })}
        </ul>
      </Profile>
    </div>
  );
};
