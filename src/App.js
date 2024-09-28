import UserList from './components/UserList';
import './App.css';

function App() {
  
  const allUsers = [
    { id: "1", name: "John Doe" },
    { id: "2", name: "Jane Smith" },
    { id: "3", name: "Alex Johnson" },
    { id: "4", name: "Emma Brown" },
    { id: "5", name: "Michael White" },
    { id: "6", name: "Sophia Black" },
    { id: "7", name: "Daniel Green" },
    { id: "8", name: "Olivia Blue" }
  ];

  return (
    <div className="App">
      <UserList usersArray={allUsers}/>
    </div>
  );
}

export default App;
