import style from './Friends.module.css';
import PropTypes from 'prop-types';

export const Friends = ({ ...data }) => {
  return (
    <div className={style.friends}>
      <ul>
        {Object.entries({ ...data }).map(([key, value]) => {
          return (
            <li key={value.id}>
              {value.isOnline ? (
                <span className={style.green}></span>
              ) : (
                <span className={style.red}></span>
              )}
              <img src={value.avatar} alt="User Avatar" />
              <p>{value.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Friends.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
  avatar: PropTypes.string,
};

export default Friends;
