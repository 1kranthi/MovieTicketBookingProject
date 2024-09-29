import React, { useEffect, useState } from 'react';
import SeatService from '../services/SeatServices';

const SeatList = () => {
    const [seats, setSeats] = useState([]);
    const [seat, setSeat] = useState({ seatNumber: '', seatType: '', availability: true });
    const [isUpdate, setIsUpdate] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        loadSeats();
    }, []);

    const loadSeats = async () => {
        const response = await SeatService.getAllSeats();
        setSeats(response.data);
    };

    const handleChange = (e) => {
        setSeat({ ...seat, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isUpdate) {
                await SeatService.updateSeat(seat.seatNumber, seat);
            } else {
                await SeatService.createSeat(seat);
            }
            loadSeats();
            resetForm();
        } catch (error) {
            setErrorMessage("Seat is not available or already booked.");
        }
    };

    const handleEdit = (seat) => {
        setSeat(seat);
        setIsUpdate(true);
    };

    const handleDelete = async (seatNumber) => {
        await SeatService.deleteSeat(seatNumber);
        loadSeats();
    };

    const handleLockSeat = async (seatNumber) => {
        try {
            await SeatService.lockSeat(seatNumber);
            setSeats(prevSeats => prevSeats.map(seat => 
                seat.seatNumber === seatNumber ? { ...seat, availability: false } : seat
            ));
        } catch (error) {
            setErrorMessage('Unable to lock seat. It might be already locked.');
        }
    };

    const handleUnlockSeat = async (seatNumber) => {
        try {
            await SeatService.unlockSeat(seatNumber);
            setSeats(prevSeats => prevSeats.map(seat => 
                seat.seatNumber === seatNumber ? { ...seat, availability: true } : seat
            ));
        } catch (error) {
            setErrorMessage('Unable to unlock seat.');
        }
    };

    const resetForm = () => {
        setSeat({ seatNumber: '', seatType: '', availability: true });
        setIsUpdate(false);
        setErrorMessage('');
    };

    return (
        <div>
            <h2>Seat Management</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="seatNumber"
                    value={seat.seatNumber}
                    onChange={handleChange}
                    placeholder="Seat Number"
                    required
                />
                {errorMessage && <div style={{color:'red'}}>{errorMessage}</div>}
                <input
                    type="text"
                    name="seatType"
                    value={seat.seatType}
                    onChange={handleChange}
                    placeholder="Seat Type"
                    required
                />
                <select
                    name="availability"
                    value={seat.availability}
                    onChange={handleChange}
                >
                    <option value={true}>Available</option>
                    <option value={false}>Booked</option>
                </select>
                <button type="submit">{isUpdate ? 'Update Seat' : 'Add Seat'}</button>
                <button type="button" onClick={resetForm}>Reset</button>
            </form>

            <ul>
                {seats.map(seat => (
                    <li key={seat.seatNumber}>
                        {seat.seatNumber} - {seat.seatType} - {seat.availability ? 'Available' : 'Booked'}
                        {seat.availability ? (
                            <button onClick={() => handleLockSeat(seat.seatNumber)}>Lock Seat</button>
                        ) : (
                            <button onClick={() => handleUnlockSeat(seat.seatNumber)}>Unlock Seat</button>
                        )}
                        <button onClick={() => handleEdit(seat)}>Edit</button>
                        <button onClick={() => handleDelete(seat.seatNumber)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SeatList;