import "./App.css";

import data from "./data/userData.json";
import friends from "./data/friends.json";

import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";

function App() {
  return (
    <>
      <Profile {...data} />
      <FriendList friends={friends} />
    </>
  );
}

export default App;
