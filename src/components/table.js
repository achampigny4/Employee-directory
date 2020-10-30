//Table component
import React from 'react';

const Table = () => {
    return (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th>Employee</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Cell phone</th>
                </tr>
            </thead>
        </table>
    );
}
export default Table;