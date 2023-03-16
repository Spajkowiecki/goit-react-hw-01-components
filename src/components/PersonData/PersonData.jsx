import styles from './PersonData.module.css';
import PropTypes from 'prop-types';

export const PersonData = ({ avatar, username, tag, location }) => {
  return (
    <div className={styles.personData}>
      <img src={avatar} alt="social avatar" />
      <ul>
        <li>{username}</li>
        <li>@{tag}</li>
        <li>{location}</li>
      </ul>
    </div>
  );
};

PersonData.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default PersonData;
