import PropTypes from 'prop-types'; 
import css from "./Profile.module.css"

export default function Profile ({avatar, username, tag, 
  location, statsFllowers, statsViews, statsLikes}) {
  return <div className={css.profile}>
  <div className="description">
    <img
      src= {avatar}
      alt= {username}
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>
  
  <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{statsFllowers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{statsViews}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{statsLikes}</span>
    </li>
  </ul>
  </div>
  };

   Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    statsFllowers: PropTypes.number.isRequired,
    statsViews: PropTypes.number.isRequired,
    statsLikes: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
   }; 