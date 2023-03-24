import style from './FriendList.module.css';
//import PropTypes from 'prop-types';

const FriendList = ({ children }) => {
  return <ul className={style.friendList}>{children}</ul>;
};

const FriendListItem = ({ friends }) => {
  return friends.map(friend => {
    return (
      <li key={friend.id} className={style.item}>
        <span
          className={
            friend.isOnline ? style.status + ' ' + style.isOnline : style.status
          }
        ></span>
        <img
          className={style.avatar}
          src={friend.avatar}
          alt="User avatar"
          width="48"
        />
        <p className={style.name}>{friend.name}</p>
      </li>
    );
  });
};

export { FriendListItem, FriendList };
