import style from '../Statistics/Statistics.module.css';

export const Statistics = ({ title, ...props }) => {
  return (
    <div className={style.statistics}>
      {title ? <h2>{title}</h2> : ' '}
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
