import { MDBCol, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
interface IProps {
    handleSort: (e: React.ChangeEvent<HTMLSelectElement>)=>void
    sortValue:string
}

const sortOptions = ['name', 'count', 'distance'];
export const Sort = (props:IProps) => {
  return (
    <MDBRow>
        <MDBCol size={8} className="d-flex">
          <h5 className="mx-2">Sort By:</h5>
          <select onChange={props.handleSort} value={props.sortValue}>
            <option>Select value</option>
            {sortOptions.map((e, index) => <option key={index} value={e}>{e}</option>)}
          </select>
        </MDBCol>
      </MDBRow>
  )
}

export default Sort