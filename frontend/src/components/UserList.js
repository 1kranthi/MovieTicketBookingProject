import React, { useEffect, useState } from 'react';
import { getUsers, getUserByUsername, loginUser } from '../services/userServices';
import RegistrationForm from './RegistrationForm';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [usernameSearch, setUsernameSearch] = useState('');
    const [userByUsername, setUserByUsername] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const response = await getUsers();
        setUsers(response.data);
    };

    const handleLoginInputChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser(loginData);
            alert("Login successful!");
            setLoginData({ username: '', password: '' });
        } catch (error) {
            console.error('Login failed:', error);
            setErrorMessage('Invalid credentials');
        }
    };

    const handleUsenameSearchChange = (e) => {
        setUsernameSearch(e.target.value);
    };

    const fetchUserByUsername = async () => {
        if (usernameSearch) {
            try {
                const response = await getUserByUsername(usernameSearch);
                setUserByUsername(response);
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        }
    };

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {Array.isArray(users) && users.length > 0 ? (
                    users.map(user => (
                        <li key={user.username}>{user.username} - {user.email}</li>
                    ))
                ) : (
                    <li>No users found.</li>
                )}
            </ul>

            {/* Registration form imported and included */}
            <RegistrationForm fetchUsers={fetchUsers} />

            <h3>User Login</h3>
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

            <h3>Search User By Username</h3>
            <input
                type="text"
                value={usernameSearch}
                onChange={handleUsenameSearchChange}
                placeholder="Enter Username"
            />
            <button onClick={fetchUserByUsername}>Get User</button>
            {userByUsername && (
                <div>
                    <h4>User Details</h4>
                    <p>Username: {userByUsername.username}</p>
                    <p>Email: {userByUsername.email}</p>
                </div>
            )}
        </div>
    );
};

export default UserList;
