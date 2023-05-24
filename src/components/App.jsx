import Profile from "Profile";
import Statistics from "Statistics";
import FriendList from "./FriendList";
import user from './user';
import data from './data';
import friends from "./friends"; 



export default function App () {
  return (
    <div>
<Profile
  username={user.username}  
  tag={user.tag}  
  location={user.location} 
  avatar={user.avatar} 
  statsFllowers={user.stats.followers}
  statsViews = {user.stats.views}
  statsLikes = {user.stats.likes}
  />
 <Statistics title="Upload stats" 
 stats={data} 
 />
 <FriendList friends={friends} />
    </div>
  );
};

