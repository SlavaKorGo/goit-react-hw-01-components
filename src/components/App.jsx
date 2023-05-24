import Profile from "components/profile/Profile";
import Statistics from "components/statistics/Statistics";
import FriendList from "./friends/FriendList";
import TransactionHistory from "./transactionHistory/TransactionHistory";
import user from './profile/user';
import data from './statistics/data';
import friends from "./friends/friends"; 
import transactions from "./transactionHistory/transactions"; 



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
 <TransactionHistory items={transactions} />
    </div>
  );
};

