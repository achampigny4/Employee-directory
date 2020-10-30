//Employee component
import React from 'react';

const Employee = ({ image, fname, lname, email, phone }) => {
    return (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="row">Employee</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Cell phone</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th><img src={image} alt="Employee" /></th>
                    <th>{fname}{lname}</th>
                    <th>{email}</th>
                    <th>{phone}</th>
                </tr>
            </tbody>
        </table>
    );
}
export default Employee;