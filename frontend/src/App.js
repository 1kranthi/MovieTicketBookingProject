import React from 'react';
import UserList from './components/UserList';
import MovieList from './components/MovieList';
import SeatList from './components/SeatList';
import TheaterList from './components/TheaterList';
import BookingList from './components/BookingList';
import {BrowserRouter,Routes,Route} from 'react-router-dom'; 
import Navbar from './components/Navbar';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Welcome to the Movie Ticket Booking webpage</h1>
        <UserList/>
        <MovieList/>
        <SeatList/>
        <TheaterList/>
        <BookingList/>
      </header> */}
      <BrowserRouter>
         <Navbar/>
           <Routes>
               <Route path="movies" element={<MovieList/>}>
                  
               </Route>
               <Route path="seats" element={<SeatList/>}>
                  
               </Route>
               <Route path="user" element={<UserList/>}>
                  
               </Route>
               <Route path="theater" element={<TheaterList/>}>
                  
               </Route>
               <Route path="booking" element={<BookingList/>}>
                  
               </Route>
               <Route path="register" element={<RegistrationForm/>}>
                  
               </Route>

           </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
