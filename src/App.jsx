import "./App.css";

import data from "./data/userData.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import Section from "./components/Section/Section";

function App() {
  return (
    <>
      <Section>
        <Profile
          name={data.username}
          tag={data.tag}
          stats={data.stats}
          image={data.avatar}
          location={data.location}
        />
      </Section>
      <Section>
        <FriendList friends={friends} />
      </Section>
      <Section>
        <TransactionHistory items={transactions} />
      </Section>
    </>
  );
}

export default App;
