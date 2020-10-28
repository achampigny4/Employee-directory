//component
import React from 'react'
    ;
const Employee = ({ image, fname, lname, email, phone }) => {
    return (
        <div>
            <img src={image} alt="" />
            <h5>{fname}{lname}</h5>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
}
export default Employee;