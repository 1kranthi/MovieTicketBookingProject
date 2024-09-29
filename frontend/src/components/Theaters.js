import React, { useEffect, useState } from 'react';
import TheaterService from '../services/TheaterService'; // Import the necessary service

const TheaterListOnly = () => {
    const [theaters, setTheaters] = useState([]);

    // Fetch the theaters from the backend when the component mounts
    useEffect(() => {
        loadTheaters();
    }, []);

    // Function to fetch theaters using the service
    const loadTheaters = async () => {
        try {
            const data = await TheaterService.getAllTheaters();
            setTheaters(data);
        } catch (error) {
            console.error("Error fetching theaters:", error);
            setTheaters([]); // Set an empty list if an error occurs
        }
    };

    return (
        <div>
            <h2>Theater List</h2>

            <ul>
                {theaters.length > 0 ? (
                    theaters.map((theater) => (
                        <li key={theater.id}>
                            {theater.name} - {theater.area} - {theater.totalScreens} screens
                        </li>
                    ))
                ) : (
                    <li>No theaters available.</li>
                )}
            </ul>
        </div>
    );
};

export default TheaterListOnly;
