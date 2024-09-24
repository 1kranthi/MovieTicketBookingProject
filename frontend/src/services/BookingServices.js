import axios from 'axios';

const APT_URL='/api/bookings';

class BookingService{
    createBooking(booking,movieTitle){
        return axios.post(`${APT_URL}?movieTitle=${movieTitle}`,booking);
    }

    updateBookingByTitle(id,booking,movieTitle){
        return axios.post(`${APT_URL}/${id}?movieTitle=${movieTitle}`,booking);
    }

    cancleBooking(id){
        return axios.put(`${APT_URL}/cancel/${id}`);
    }

    getBookingById(id){
        return axios.get(`${APT_URL}/${id}`);
    }

    getAllBookings(){
        return axios.get(APT_URL);
    }
}

export default new BookingService();