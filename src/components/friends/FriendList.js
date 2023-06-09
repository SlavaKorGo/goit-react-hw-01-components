import PropTypes from 'prop-types'; 
import FriendListItem from './FriendListItem';
import css from './FriendList.module.css'

export default function FriendList({friends}) {
    return (<ul className={css.friendList}>
    {friends.map(({avatar, name, isOnline, id}) => (
     <FriendListItem
     key={id}
     avatar={avatar}
     name={name}
     isOnline={isOnline}
     /> 
    ))}
   </ul>
   );  
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired, 
  }
  
  


  
  