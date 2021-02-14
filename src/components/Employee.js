import React from "react";

function Employee(props) {
    console.log(props);
    return (
        <tr>
            <th scope="col">
                <img src={props.picture.medium} />
            </th>
            <td scope="col">
                {props.firstName}
            </td>
            <td scope="col">
                {props.lastName}
            </td>
            <td scope="col">
                {props.email}
            </td>

        </tr>);
}

export default Employee;