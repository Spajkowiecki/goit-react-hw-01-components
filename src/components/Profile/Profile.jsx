import style from '../Profile/Profile.module.css';
import noImage from '../../images/no-image.png';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export const Profile = ({
  avatar,
  username,
  tag,
  location,
  children,
  outlined,
  elevated,
}) => {
  return (
    //kontenter dla profile
    <div
      className={clsx(
        style.profile,
        outlined && style['isOutlined'],
        elevated && style['isElevated']
      )}
    >
      <div className={style.person}>
        <img src={avatar ? avatar : noImage} alt="profile avatar" />
        <ul>
          <li>{username}</li>
          <li>@{tag}</li>
          <li>{location}</li>
        </ul>
      </div>
      {children}
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  outlined: PropTypes.string,
  elevated: PropTypes.string,
};

export default Profile;
