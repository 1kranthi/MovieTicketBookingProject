import React, { useEffect, useState } from 'react';
import TheaterService from '../services/TheaterService';

const TheaterList = () => {
    const [theaters, setTheaters] = useState([]);
    const [theater, setTheater] = useState({ name: '', area: '', totalScreens: 0 });
    const [isUpdate, setIsUpdate] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const loadTheaters = async () => {
        const data = await TheaterService.getAllTheaters();
        setTheaters(data);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTheater({ ...theater, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        try {
            if (isUpdate) {
                await TheaterService.updateTheater(theater.id, theater);
            } else {
                await TheaterService.createTheater(theater);
            }
            loadTheaters();
            resetForm();
        } catch (error) {
            setErrorMessage("Error occurred while saving the theater.");
        }
    };

    const resetForm = () => {
        setTheater({ name: '', area: '', totalScreens: 0 });
        setIsUpdate(false);
    };

    const editTheater = (theater) => {
        setTheater(theater);
        setIsUpdate(true);
    };

    const deleteTheater = async (id) => {
        await TheaterService.deleteTheater(id);
        loadTheaters();
    };

    useEffect(() => {
        loadTheaters();
    }, []);

    return (
        <div>
            <h2>Theater Management</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={theater.name} onChange={handleChange} placeholder="Theater Name" required />
                <input type="text" name="area" value={theater.area} onChange={handleChange} placeholder="Area" required />
                <input type="number" name="totalScreens" value={theater.totalScreens} onChange={handleChange} placeholder="Total Screens" required />
                <button type="submit">{isUpdate ? 'Update Theater' : 'Add Theater'}</button>
                <button type="button" onClick={resetForm}>Reset</button>
                {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
            </form>
            <ul>
                {theaters.map((theater) => (
                    <li key={theater.id}>
                        {theater.name} - {theater.area} - {theater.totalScreens} screens
                        <button onClick={() => editTheater(theater)}>Edit</button>
                        <button onClick={() => deleteTheater(theater.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TheaterList;
