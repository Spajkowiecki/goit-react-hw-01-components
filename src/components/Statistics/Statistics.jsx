import style2 from '../Data/Data.module.css';
import style from '../Statistics/Statistics.module.css';
import Data from '../Data/Data';

export const Statistics = ({ ...props }) => {
  return (
    <div className={style.statistics}>
      <h2>UPLOAD STATS</h2>
      <ul>
        {Object.entries({ ...props }).map(([key, { ...value }]) => {
          return (
            <li key={value.id}>
              <p>{value.label}</p>
              <p>{value.percentage}%</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Statistics;
