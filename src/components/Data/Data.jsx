import style from './Data.module.css';
import PropTypes from 'prop-types';

export const Data = ({ ...props }) => {
  return (
    <ul className={style.data}>
      {Object.entries(props).map(([key, value]) => {
        return (
          <li key={key}>
            <p>{key}</p>
            <p>{value}</p>
          </li>
        );
      })}
    </ul>
  );
};

Data.propTypes = {
  key: PropTypes.string,
  value: PropTypes.string,
};

export default Data;
