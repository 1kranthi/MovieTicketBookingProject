import React, { useEffect, useState } from 'react';
import SeatService from '../services/SeatServices'; // Import the seat service

const SeatListOnly = () => {
    const [seats, setSeats] = useState([]);

    // Fetch seats when the component mounts
    useEffect(() => {
        loadSeats();
    }, []);

    // Function to fetch seats from the service
    const loadSeats = async () => {
        try {
            const response = await SeatService.getAllSeats();
            setSeats(response.data);
        } catch (error) {
            console.error("Error fetching seats:", error);
            setSeats([]); // If there's an error, set the list to empty
        }
    };

    return (
        <div>
            <h2>Seat List</h2>
            <ul>
                {seats.length > 0 ? (
                    seats.map((seat) => (
                        <li key={seat.seatNumber}>
                            {seat.seatNumber} - {seat.seatType} - {seat.availability ? 'Available' : 'Booked'}
                        </li>
                    ))
                ) : (
                    <li>No seats available.</li>
                )}
            </ul>
        </div>
    );
};

export default SeatListOnly;
