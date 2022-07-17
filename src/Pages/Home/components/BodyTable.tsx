import { MDBTableBody } from 'mdb-react-ui-kit'
import React from 'react'
import { IData } from '../type'
interface IProps {
    data: Array<IData>
};
export function BodyTable(props: IProps) {
    const showDataHandler = props.data.map((e, index) => <MDBTableBody key={e._id}>
        <tr>
            <th scope="row">{e._id}</th>
            <td>{e.name}</td>
            <td>{e.date}</td>
            <td>{e.count}</td>
            <td>{e.distance}</td>
        </tr>
    </MDBTableBody>)
    return (
        <>
            {props.data.length === 0 ? (
                <MDBTableBody className="align-center mb-0">
                    <tr>
                        <td colSpan={8} className="text-center mb-0">No data found</td>
                    </tr>
                </MDBTableBody>
            ) : (
                showDataHandler
            )
            }
        </>
    )
}