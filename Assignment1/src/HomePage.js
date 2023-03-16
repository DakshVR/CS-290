import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function HomePage() {
    return (
        <>
            <h1>
                Welcome To Beaver Store!!
            </h1>
            <h2>
                You Are At The Home Page. Click On Any Of This Links.
            </h2>
            <p className="link">
                <Link to="/items"> Go to the Items Page</Link><br />
                <Link to="/stores"> Go to the Stores Page</Link>
            </p>
        </>
    );
}

export default HomePage;