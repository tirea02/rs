// pages/index.tsx
import React from 'react';
import '../src/css/styles.css'; // Import your custom CSS file
import ClientComponent from '../components/ClientSideComponent';
import GuestCrudComponent from "@/components/GuestCrudComponent";

const Home = () => {
    return (
        <div>
            <h1>Server Component</h1>
            <ClientComponent />
            <GuestCrudComponent />
        </div>
    );
};

export default Home;
