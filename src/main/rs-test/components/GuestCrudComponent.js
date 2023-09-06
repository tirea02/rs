import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GuestCrudComponent = () => {
    const [guests, setGuests] = useState([]);
    const [newGuest, setNewGuest] = useState({ username: '', email: '', password: '' });

    // Fetch guest data when the component mounts
    useEffect(() => {
        fetchGuests();
    }, []);

    // Function to fetch guest data
    const fetchGuests = async () => {
        try {
            const response = await axios.get('/api/guests');
            setGuests(response.data);
        } catch (error) {
            console.error('Error fetching guest data:', error);
        }
    };

    // Function to add a new guest
    const addGuest = async () => {
        try {
            await axios.post('/api/guests', newGuest);
            // Clear the form fields after adding
            setNewGuest({ username: '', email: '', password: '' });
            // Fetch the updated guest list
            fetchGuests();
        } catch (error) {
            console.error('Error adding guest:', error);
        }
    };

    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-semibold mb-4">Guest CRUD Operations</h2>

            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-medium mb-2">Add a New Guest</h3>
                <input
                    type="text"
                    placeholder="Username"
                    className="w-full p-2 border rounded-md mb-2"
                    value={newGuest.username || ''}
                    onChange={(e) => setNewGuest({ ...newGuest, username: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Email"
                    className="w-full p-2 border rounded-md mb-2"
                    value={newGuest.email || ''}
                    onChange={(e) => setNewGuest({ ...newGuest, email: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 border rounded-md mb-4"
                    value={newGuest.password || ''}
                    onChange={(e) => setNewGuest({ ...newGuest, password: e.target.value })}
                />
                <button
                    onClick={addGuest}
                    className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                >
                    Add Guest
                </button>
            </div>

            <div className="mt-8">
                <h3 className="text-lg font-medium mb-2">Guest List</h3>
                <ul>
                    {guests.map((guest) => (
                        <li
                            key={guest.id}
                            className="bg-white p-2 mb-2 rounded-md shadow-md"
                        >
                            {guest.username} ({guest.email})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default GuestCrudComponent;
