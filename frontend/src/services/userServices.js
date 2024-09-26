import axios from 'axios';

const API_URL = 'http://localhost:8095/api/users';

// To fetch all users
export const getUsers = async () => {
    try {
        const response = await axios.get(API_URL);
        return response;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};

// To create a new user (registration)
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
};

// To login a user
export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, userData);
        return response.data;
    } catch (error) {
        console.error("Error logging in user:", error);
        throw error;
    }
};

// To fetch user by username
export const getUserByUsername = async (username) => {
    try {
        const response = await axios.get(`${API_URL}/username/${username}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching user by username ${username}`, error);
        throw error;
    }
};
