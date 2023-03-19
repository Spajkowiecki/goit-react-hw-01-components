import style from './Data.module.css';

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

export default Data;
