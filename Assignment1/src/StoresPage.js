import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Store from './Stores';
import './App.css';


function StoresPage({ stores }) {
    const [name, setName] = useState('');
    return (
        <div>
            <h1>
                Locations Of Beaver Store.
            </h1>
            <h2>
                Beaver Store's Now Located At.
            </h2>
            <table className="tbody">
                <caption className="caption"> Locations</caption>
                <thread>
                    <tr>
                        <th> City </th>
                        <th> State </th>
                        <th> zipCode</th>
                    </tr>
                </thread>
                <tbody>
                    {stores.map((store, i) =>
                        <Store store={store} key={i} />)}
                </tbody>
            </table >
            <br />
            <form>
                <fieldset >
                    <legend> Zip-Code</legend>
                    <label >Enter Your 5 Digit zip code
                        <input type="text" name="zip" maxLength={5}
                            onChange={e => setName(e.target.value)} />
                    </label>
                </fieldset>
                <button onClick={e => {
                    setName(e.target.value);
                    alert(`The 5 Digit Code You Entered Is ${name}`);
                    e.preventDefault();
                }}>Submit</button>
            </form>
            <Link to="/items"> Go to the Item Page</Link><br />
            <Link to="/"> Go Back to Home Page </Link>
        </div >
    );
}

export default StoresPage;