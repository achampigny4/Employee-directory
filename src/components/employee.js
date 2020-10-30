//Employee component
import React from 'react';

const Employee = ({ image, fname, lname, email, phone }) => {
    return (
        <table className="table">
            <tbody>
                <tr>
                    <th className="col1"><img src={image} alt="Employee" /></th>
                    <th className="col2">{fname}{lname}</th>
                    <th>{email}</th>
                    <th>{phone}</th>
                </tr>
            </tbody>
        </table>
    );
}
export default Employee;