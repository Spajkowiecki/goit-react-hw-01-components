import style from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      {title.length > 0 && <h2 className={style.title}>{title}</h2>}

      <ul className={style.list}>
        {stats.map(stat => (
          <li key={stat.id}>
            <span className={style.label}>{stat.label}</span>
            <span className={style.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistics;
