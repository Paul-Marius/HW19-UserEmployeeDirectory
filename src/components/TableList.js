import React from "react";

function TableList(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Photo</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                </tr>
            </thead>
        </table>
    );
}

export default TableList;