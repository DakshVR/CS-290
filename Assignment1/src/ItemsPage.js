import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
import './App.css';

function ItemsPage({ items }) {
    return (
        <div>
            <h1>
                Check Out Our Products.
            </h1>
            <h2>
                Start Selecting Items From The Store.
            </h2>
            <table className="tbody">
                <caption className="caption"> Items Available</caption>
                <thread>
                    <tr>
                        <th> Item Name </th>
                        <th> Item Price </th>
                        <th> Quantity </th>
                    </tr>
                </thread>
                <tbody>
                    {items.map((item, i) =>
                        <Item item={item} key={i} />)}
                </tbody>
            </table>
            <br />
            <Link to="/stores"> Go to the Stores Page</Link> <br />
            <Link to="/"> Go Back to Home Page </Link>
        </div>
    );
}

export default ItemsPage;

