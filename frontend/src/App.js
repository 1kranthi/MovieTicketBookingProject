import UserList from './components/UserList';
import {fetchUsers} from './services/userServices';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Movie Ticket Booking webpage</h1>
        <UserList/>
      </header>
    </div>
  );
}

export default App;
