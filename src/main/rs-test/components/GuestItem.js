// GuestItem.js
import React from 'react';

const GuestItem = ({ guest, onUpdate, onDelete }) => {
    return (
        <div className="bg-white p-2 mb-2 rounded-md shadow-md">
            <span>{guest.username} ({guest.email})</span>
            <button
                onClick={() => onUpdate(guest)}
                className="bg-green-500 text-white p-2 rounded-md ml-2 hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-200"
            >
                Edit
            </button>
            <button
                onClick={() => onDelete(guest.id)}
                className="bg-red-500 text-white p-2 rounded-md ml-2 hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-200"
            >
                Delete
            </button>
        </div>
    );
};

export default GuestItem;
