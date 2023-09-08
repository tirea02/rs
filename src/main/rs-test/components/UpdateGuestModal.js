import { useState } from 'react';
import axios from 'axios';

const UpdateGuestModal = ({ guest, onUpdate, onClose }) => {
    const [updatedGuest, setUpdatedGuest] = useState({ ...guest });

    const handleUpdate = async () => {
        try {
            await axios.put(`/api/guests/${guest.id}`, updatedGuest);
            onUpdate(updatedGuest);
            onClose(); // Close the modal after a successful update
        } catch (error) {
            console.error('Error updating guest:', error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg w-96">
                <h3 className="text-lg font-medium mb-4">Edit Guest</h3>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={updatedGuest.username}
                        onChange={(e) => setUpdatedGuest({ ...updatedGuest, username: e.target.value })}
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Email"
                        value={updatedGuest.email}
                        onChange={(e) => setUpdatedGuest({ ...updatedGuest, email: e.target.value })}
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        placeholder="Password"
                        value={updatedGuest.password}
                        onChange={(e) => setUpdatedGuest({ ...updatedGuest, password: e.target.value })}
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        onClick={handleUpdate}
                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 mr-2"
                    >
                        Update
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-gray-300 text-gray-700 p-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-200"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateGuestModal;
