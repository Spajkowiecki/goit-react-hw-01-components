import styles from './Data.module.css';
import PropTypes from 'prop-types';

export const Data = ({ title, value }) => {
  return (
    <div className={styles.data}>
      <p>{title}</p>
      <p>{value}</p>
    </div>
  );
};

Data.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number,
};

export default Data;
