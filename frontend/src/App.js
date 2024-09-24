import React from 'react';
import UserList from './components/UserList';
import MovieList from './components/MovieList';
import SeatList from './components/SeatList';
import TheaterList from './components/TheaterList';
import BookingList from './components/BookingList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Movie Ticket Booking webpage</h1>
        <UserList/>
        <MovieList/>
        <SeatList/>
        <TheaterList/>
        <BookingList/>
      </header>
    </div>
  );
}

export default App;
