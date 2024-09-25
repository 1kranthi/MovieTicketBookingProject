import axios from 'axios';

const API_URL = '/api/bookings';  // Adjust the base URL as per your backend

class BookingService {

    // Create Booking with only movie title, theater name, and seats
    createBooking(booking) {
        return axios.post(API_URL, booking);
    }

    // Cancel Booking by ID
    cancelBooking(id) {
        return axios.put(`${API_URL}/cancel/${id}`);
    }

    // Get all Bookings
    getAllBookings() {
        return axios.get(API_URL);
    }
}

export default new BookingService();
