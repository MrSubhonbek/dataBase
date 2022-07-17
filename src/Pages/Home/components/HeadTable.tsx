import { MDBTableHead } from 'mdb-react-ui-kit'
import React from 'react'

export const HeadTable = () => {
    return (
        <MDBTableHead dark>
            <tr>
                <th scope="col"> <span>#</span> </th>
                <th scope="col"> <span>Name</span> </th>
                <th scope="col"> <span>Date</span> </th>
                <th scope="col"> <span>Count</span> </th>
                <th scope="col"> <span>Distance</span> </th>
            </tr>
        </MDBTableHead>
    )
}