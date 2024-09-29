import React, { useState } from 'react';
import { loginUser } from '../services/userServices';

const UserLogin = () => {
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleLoginInputChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await loginUser(loginData);
            alert("Login successful!");
            setLoginData({ username: '', password: '' });
        } catch (error) {
            console.error('Login failed:', error);
            setErrorMessage('Invalid credentials');
        }
    };

    return (
        <div>
            <h2>User Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={loginData.username}
                    onChange={handleLoginInputChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={handleLoginInputChange}
                />
                <button type="submit">Login</button>
                {errorMessage && (
                    <p style={{ color: 'red' }}>{errorMessage}</p>
                )}
            </form>
        </div>
    );
};

export default UserLogin;
