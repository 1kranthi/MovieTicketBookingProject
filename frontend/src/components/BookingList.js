import React, { useState, useEffect } from 'react';
import BookingService from '../services/BookingServices';

const BookingList = () => {
    const [bookings, setBookings] = useState([]);
    const [newBooking, setNewBooking] = useState({
        movieTitle: '',
        seats: [],
        bookingStatus: 'pending'
    });
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [movieTitle, setMovieTitle] = useState('');

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
        setNewBooking(prevBooking => ({
            ...prevBooking,
            seats: event.target.value.split(',')
        }));
    };

    const createBooking = (event) => {
        event.preventDefault();
        BookingService.createBooking(newBooking, movieTitle)
            .then(() => {
                fetchAllBookings();
                setNewBooking({
                    movieTitle: '',
                    seats: [],
                    bookingStatus: 'pending'
                });
                setMovieTitle('');
            })
            .catch(error => {
                console.error("There was an error creating the booking!", error);
            });
    };

    const updateBooking = (id) => {
        BookingService.updateBookingByTitle(id, selectedBooking, selectedBooking.movieTitle)
            .then(() => {
                fetchAllBookings();
                setSelectedBooking(null);
            })
            .catch(error => {
                console.error("There was an error updating the booking!", error);
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

            {/* Create Booking Form */}
            <form onSubmit={createBooking}>
                <label><strong>Movie Title: </strong></label>
                <input
                    type="text"
                    value={movieTitle}
                    onChange={(e) => setMovieTitle(e.target.value)}
                    required
                />
                <br />

                <label><strong>Seats (comma-separated): </strong></label>
                <input
                    type="text"
                    name="seats"
                    value={newBooking.seats.join(',')}
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
                        <th>Seats</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking) => (
                        <tr key={booking.id}>
                            <td>{booking.id}</td>
                            <td>{booking.movie.title}</td>
                            <td>{booking.seats.map(seat => seat.seatNumber).join(', ')}</td>
                            <td>{booking.bookingStatus}</td>
                            <td>
                                <button onClick={() => cancelBooking(booking.id)}>Cancel</button>
                                <button onClick={() => setSelectedBooking(booking)}>Update</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <br />

            {/* Update Booking Form (if a booking is selected) */}
            {selectedBooking && (
                <div>
                    <h3><strong>Update Booking</strong></h3>
                    <form onSubmit={() => updateBooking(selectedBooking.id)}>
                        <label><strong>Movie Title: </strong></label>
                        <input
                            type="text"
                            name="movieTitle"
                            value={selectedBooking.movie.title}
                            disabled
                        />
                        <br />

                        <label><strong>Seats (comma-separated): </strong></label>
                        <input
                            type="text"
                            name="seats"
                            value={selectedBooking.seats.map(seat => seat.seatNumber).join(',')}
                            onChange={(e) => setSelectedBooking({
                                ...selectedBooking,
                                seats: e.target.value.split(',')
                            })}
                            required
                        />
                        <br />

                        <label><strong>Status: </strong></label>
                        <input
                            type="text"
                            name="bookingStatus"
                            value={selectedBooking.bookingStatus}
                            onChange={(e) => setSelectedBooking({
                                ...selectedBooking,
                                bookingStatus: e.target.value
                            })}
                            required
                        />
                        <br />

                        <button type="submit">Update Booking</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default BookingList;
