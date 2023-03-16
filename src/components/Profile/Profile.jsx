import style from './Profile.module.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export const Profile = ({ children, elevated }) => {
  return (
    <div className={clsx(style.profile, elevated && style['is-elevated'])}>
      {children}
    </div>
  );
};

Profile.propTypes = {
  elevated: PropTypes.bool,
};

export default Profile;
