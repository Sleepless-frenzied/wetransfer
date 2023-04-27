import React from "react";
import {useLocation} from "react-router-dom";

function Contacts({details}) {
    const location = useLocation()
    console.log(location)

    return (
        <h1>{location.state.details.name}</h1>

    );
}

export default Contacts;