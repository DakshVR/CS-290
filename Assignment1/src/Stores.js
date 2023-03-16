import React from "react";



function Store({ store }) {
    return (
        < div >
            <td>{store.city}  </td>
            <td> {store.state} </td>
            <td>{store.zipCode}</td>
        </div >
    );
}

export default Store;