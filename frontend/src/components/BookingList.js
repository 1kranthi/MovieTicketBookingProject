import React, { useState, useEffect } from 'react';
import BookingService from '../services/BookingServices';

const BookingList = () => {
    const [bookings, setBookings] = useState([]);
    const [newBooking, setNewBooking] = useState({
        movie: { title: '' },
        theater: { name: '' },
        seats: []
    });
    const [errorMessage, setErrorMessage] = useState("");  // Define error message state

    useEffect(() => {
        fetchAllBookings();
    }, []);

    const fetchAllBookings = () => {
        BookingService.getAllBookings()
            .then(response => {
                setBookings(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the bookings!", error);
            });
    };

    const handleSeatsChange = (event) => {
        const seatsArray = event.target.value.split(',').map(seatNumber => ({
            seatNumber: seatNumber.trim(),
            availability: true  // Assuming all seats entered are available
        }));
        setNewBooking(prevBooking => ({
            ...prevBooking,
            seats: seatsArray
        }));
    };

    const createBooking = (event) => {
        event.preventDefault();

        // Only send movie title, theater name, and seats
        const payload = {
            movie: { title: newBooking.movie.title },
            theater: { name: newBooking.theater.name },
            seats: newBooking.seats
        };

        BookingService.createBooking(payload)
            .then(() => {
                fetchAllBookings();
                setNewBooking({
                    movie: { title: '' },
                    theater: { name: '' },
                    seats: []
                });
                setErrorMessage(""); // Clear error message on success
            })
            .catch(error => {
                // Set a generic error message for any runtime exceptions
                setErrorMessage("Booking failed. Please enter valid details."); 
                console.error("There was an error creating the booking!", error);
            });
    };

    const cancelBooking = (id) => {
        BookingService.cancelBooking(id)
            .then(() => {
                fetchAllBookings();
            })
            .catch(error => {
                console.error("There was an error canceling the booking!", error);
            });
    };

    return (
        <div>
            <h2><strong>Movie Bookings</strong></h2>

            {/* Display Error Message */}
            {errorMessage && <p className="error-message" style={{ color: 'red' }}>{errorMessage}</p>}

            {/* Create Booking Form */}
            <form onSubmit={createBooking}>
                {/* Movie Information */}
                <label><strong>Movie Title: </strong></label>
                <input
                    type="text"
                    value={newBooking.movie.title}
                    onChange={(e) => setNewBooking(prev => ({
                        ...prev,
                        movie: { ...prev.movie, title: e.target.value }
                    }))}
                    required
                />
                <br />

                {/* Theater Information */}
                <label><strong>Theater: </strong></label>
                <input
                    type="text"
                    value={newBooking.theater.name}
                    onChange={(e) => setNewBooking(prev => ({
                        ...prev,
                        theater: { ...prev.theater, name: e.target.value }
                    }))}
                    required
                />
                <br />

                {/* Seats */}
                <label><strong>Seats (comma-separated): </strong></label>
                <input
                    type="text"
                    value={newBooking.seats.map(seat => seat.seatNumber).join(',')}
                    onChange={handleSeatsChange}
                    required
                />
                <br />

                <button type="submit">Create Booking</button>
            </form>

            <br />

            {/* List of Bookings */}
            <h3><strong>All Bookings</strong></h3>
            <table>
                <thead>
                    <tr>
                        <th>Booking ID</th>
                        <th>Movie Title</th>
                        <th>Theater</th>
                        <th>Seats</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.length > 0 ? (
                        bookings.map((booking) => (
                            <tr key={booking.id}>
                                <td>{booking.id}</td>
                                <td>{booking.movie.title}</td>
                                <td>{booking.theater.name}</td>
                                <td>{booking.seats.map(seat => seat.seatNumber).join(', ')}</td>
                                <td>
                                    <button onClick={() => cancelBooking(booking.id)}>Cancel</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No bookings available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default BookingList;