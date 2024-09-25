import axios from 'axios';

const API_URL = '/api/theaters'; // Adjust to your actual endpoint

class TheaterService {
    async getAllTheaters() {
        const response = await axios.get(API_URL);
        return response.data;
    }

    async createTheater(theater) {
        const response = await axios.post(API_URL, theater);
        return response.data;
    }

    async updateTheater(id, theater) {
        const response = await axios.put(`${API_URL}/${id}`, theater);
        return response.data;
    }

    async deleteTheater(id) {
        await axios.delete(`${API_URL}/${id}`);
    }
}

export default new TheaterService();
