import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GuestItem from './GuestItem';
import UpdateGuestModal from "@/components/UpdateGuestModal"; // Import the GuestItem component

const GuestCrudComponent = () => {
    const [guests, setGuests] = useState([]);
    const [newGuest, setNewGuest] = useState({ username: '', email: '', password: '' });
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false); // Track if the update modal is open
    const [selectedGuest, setSelectedGuest] = useState(null); // Store the selected guest for update

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

    const updateGuest = async (guest) => {
        setSelectedGuest(guest); // Set the selected guest to be updated
        setIsUpdateModalOpen(true); // Open the update modal
    };

    // Close the update modal
    const closeUpdateModal = () => {
        setIsUpdateModalOpen(false);
        setSelectedGuest(null);
    };

    // Function to delete a guest
    const deleteGuest = async (guestId) => {
        try {
            await axios.delete(`/api/guests/${guestId}`);
            // Fetch the updated guest list
            fetchGuests();
        } catch (error) {
            console.error('Error deleting guest:', error);
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
                        <GuestItem
                            key={guest.id}
                            guest={guest}
                            onUpdate={updateGuest}
                            onDelete={deleteGuest}
                        />
                    ))}
                </ul>
            </div>
            {/* Render the update modal if it's open */}
            {isUpdateModalOpen && (
                <UpdateGuestModal
                    guest={selectedGuest}
                    onUpdate={(updatedGuest) => {
                        // Update the guest in the local state
                        const updatedGuests = guests.map((guest) =>
                            guest.id === updatedGuest.id ? updatedGuest : guest
                        );
                        setGuests(updatedGuests);
                    }}
                    onClose={closeUpdateModal}
                />
            )}
        </div>
    );
};

export default GuestCrudComponent;
