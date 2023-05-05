import React from "react";
import {useLocation} from "react-router-dom";

function Contacts({details}) {
    const location = useLocation()
    console.log(location)
    const data = Array.from(location.state.details);

    return (

        <div>
            <h1>{location.state.details.name}</h1>
            <div>
                 {JSON.stringify(location.state.details)};
            </div>
        </div>


    );
}

export default Contacts;