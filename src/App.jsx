import { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";

function App() {
  const [userInput, setUserInput] = useState([]);

  const handleUserData = (userInput) => {
    setUserInput(prev => [...prev, userInput]);
  }

  return <div>
    <AddUser handleUserData={handleUserData} />
    <UserList users={userInput} />
  </div>;
}

export default App;
