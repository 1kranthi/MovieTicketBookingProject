import React, { useState } from 'react';
import { registerUser } from '../services/userServices';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrorMessage('');
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await registerUser(formData);
            setFormData({ username: '', email: '', password: '' });
            setErrorMessage('');
            alert("Registration successful!");
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setErrorMessage('Username already exists. Please choose a different one.');
            } else {
                console.error('Error creating user:', error);
            }
        }
    };

    return (
        <div>
            <h3>Add New User (Registration)</h3>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleInputChange}
                />
                {errorMessage && (
                    <p style={{ color: 'red' }}>{errorMessage}</p>
                )}
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
