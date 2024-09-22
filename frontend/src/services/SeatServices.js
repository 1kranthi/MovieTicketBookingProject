import axios from 'axios';

const API_URL = '/api/seats';

const SeatService = {
    getAllSeats: async () => {
        return await axios.get(API_URL);
    },

    getSeatById: async (id) => {
        return await axios.get(`${API_URL}/${id}`);
    },

    createSeat: async (seatData) => {
        return await axios.post(API_URL, seatData);
    },

    updateSeat: async (id, seatData) => {
        return await axios.put(`${API_URL}/${id}`, seatData);
    },

    deleteSeat: async (id) => {
        return await axios.delete(`${API_URL}/${id}`);
    },
};

export default SeatService;
