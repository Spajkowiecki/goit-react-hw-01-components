import style from './Profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img className={style.avatar} src={avatar} alt={''} />
        <p className={style.username}>{username}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li>
          <span className={style.label}>Followers</span>
          <span className={style.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={style.label}>Views</span>
          <span className={style.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={style.label}>Likes</span>
          <span className={style.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
};

export default Profile;
