import React, { useState, useEffect } from 'react';
import { getUsers, getUserByUsername } from '../services/userServices';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [usernameSearch, setUsernameSearch] = useState('');
    const [userByUsername, setUserByUsername] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    // Fetch all users on component mount
    useEffect(() => {
        fetchUsers();
    }, []);

    // Function to fetch all users
    const fetchUsers = async () => {
        try {
            const response = await getUsers();
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users:", error);
            setUsers([]); // Set to empty if there's an error
        }
    };

    // Handle input change for username search
    const handleUsernameSearchChange = (e) => {
        setUsernameSearch(e.target.value);
    };

    // Fetch user by username
    const fetchUserByUsername = async () => {
        if (usernameSearch) {
            try {
                const response = await getUserByUsername(usernameSearch);
                setUserByUsername(response);
                setErrorMessage(''); // Clear any previous error message
            } catch (error) {
                console.error("Error fetching user:", error);
                setErrorMessage("User not found.");
                setUserByUsername(null);
            }
        }
    };

    return (
        <div>
            <h3>Search User By Username</h3>
            <input
                type="text"
                value={usernameSearch}
                onChange={handleUsernameSearchChange}
                placeholder="Enter Username"
            />
            <button onClick={fetchUserByUsername}>Get User</button>
            {errorMessage && (
                <p style={{ color: 'red' }}>{errorMessage}</p>
            )}
            {userByUsername && (
                <div>
                    <h4>User Details</h4>
                    <p>Username: {userByUsername.username}</p>
                    <p>Email: {userByUsername.email}</p>
                </div>
            )}

            <h3>All Users</h3>
            <ul>
                {Array.isArray(users) && users.length > 0 ? (
                    users.map((user) => (
                        <li key={user.username}>
                            {user.username} - {user.email}
                        </li>
                    ))
                ) : (
                    <li>No users found.</li>
                )}
            </ul>
        </div>
    );
};

export default UserManagement;
