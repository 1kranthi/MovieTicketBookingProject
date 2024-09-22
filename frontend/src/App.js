import React from 'react';
import UserList from './components/UserList';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Movie Ticket Booking webpage</h1>
        <UserList/>
        <MovieList/>
      </header>
    </div>
  );
}

export default App;
