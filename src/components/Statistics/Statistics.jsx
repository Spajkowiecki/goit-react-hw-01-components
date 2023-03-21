import style from '../Statistics/Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, ...props }) => {
  return (
    <div className={style.statistics}>
      {title ? <h2>{title}</h2> : ' '}
      <ul>
        {Object.entries({ ...props }).map(([key, { ...value }]) => {
          return (
            <li style={{ backgroundColor: getRandomHexColor() }} key={value.id}>
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
