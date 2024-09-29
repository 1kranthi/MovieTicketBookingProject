import axios from 'axios';

const API_URL = '/api/seats';

const SeatService = {
    getAllSeats: async () => {
        return await axios.get(API_URL);
    },

    getSeatByNumber: async (seatNumber) => {
        return await axios.get(`${API_URL}/${seatNumber}`);
    },

    createSeat: async (seatData) => {
        return await axios.post(API_URL, seatData);
    },

    updateSeat: async (seatNumber, seatData) => {
        return await axios.put(`${API_URL}/${seatNumber}`, seatData);
    },

    deleteSeat: async (seatNumber) => {
        return await axios.delete(`${API_URL}/${seatNumber}`);
    },

    lockSeat: async (seatNumber) => {
        return await axios.post(`${API_URL}/${seatNumber}/lock`);
    },

    unlockSeat: async (seatNumber) => {
        return await axios.post(`${API_URL}/${seatNumber}/unlock`);
    },

    completeBooking: async (selectedSeats) => {
        // Assuming you have a booking endpoint in the backend
        return await axios.post('/api/bookings', selectedSeats);
    }
};

export default SeatService;