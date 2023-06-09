import PropTypes from 'prop-types'; 
import css from "./FriendList.module.css"; 


export default function FriendListItem ({avatar, name, isOnline, id}) {
  const getBgColor = (isOnline) => {
    return isOnline ? 'green' : 'red';
  };

  return (
    <li className={css.item} key={id}>
      <span className={css.status} style={{ backgroundColor: getBgColor(isOnline) }}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}; 




FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };