import React from "react";

function Thead(props) {
    console.log("Thead props: ", props);

    return (
        <thead>
            <tr>
                <th className="th-sm">Photo</th>
                <th onClick={() => props.sorting("Last_Name")} className="th-sm">Last Name</th>
                <th onClick={() => props.sorting("First_Name")} className="th-sm">First Name</th>
                <th className="th-sm">email</th>
                <th className="th-sm">Cell </th>
                <th onClick={() => props.sorting("Age")} className="th-sm">Age</th>
            </tr>
        </thead>
    );
}

export default Thead;