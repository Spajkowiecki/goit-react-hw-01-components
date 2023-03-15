import './Profile.css';

import Person from './Person';
const Profile = props => {
  const { avatar, username, tag, location, children } = props;
  return (
    <div className="profile">
      <Person
        avatar={avatar}
        username={username}
        tag={tag}
        location={location}
      />
      {children}
    </div>
  );
};

export default Profile;
