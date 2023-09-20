// pages/index.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/styles.css'; // Import your custom CSS file
import ClientComponent from '../components/ClientSideComponent';
import GuestCrudComponent from "@/components/GuestCrudComponent";
import RegistrationForm from "@/components/RegistrationForm";

const Home = () => {
    return (
        <div>
            <h1>Server Component</h1>
            <ClientComponent />
            {/*<GuestCrudComponent />*/}
            <RegistrationForm />

        </div>
    );
};

export default Home;
