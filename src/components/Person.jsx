import './Person.css';

const Person = props => {
  const { avatar, username, tag, location } = props;
  return (
    <div className="person">
      <img src={avatar} alt="selfie" />
      <div>
        <ul>
          <li>
            <h3>{username}</h3>
          </li>
          <li>
            <p>@{tag}</p>
          </li>
          <li>
            <p>{location}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Person;
