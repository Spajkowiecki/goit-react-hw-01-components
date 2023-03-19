import style from '../Statistics/Statistics.module.css';

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
