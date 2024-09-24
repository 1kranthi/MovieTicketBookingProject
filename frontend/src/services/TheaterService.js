import axios from 'axios';

const API_URL = '/api/theaters';

const getAllTheaters = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

const createTheater = async (theater) => {
    const response = await axios.post(API_URL, theater);
    return response.data;
};

const updateTheater = async (id, theater) => {
    const response = await axios.put(`${API_URL}/${id}`, theater);
    return response.data;
};

const deleteTheater = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};

export default {
    getAllTheaters,
    createTheater,
    updateTheater,
    deleteTheater,
};
