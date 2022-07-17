import { MDBBtn } from 'mdb-react-ui-kit'
import React from 'react'
interface IProps {
    handleSearch: (e: React.FormEvent<HTMLFormElement>) => void
    handleReset: () => void
    searchValue: string
    setSearchValue: (e: string) => void
}
export const SearchForm = (props: IProps) => {
    return (
        <form className="d-flex input-group w-auto my-2" onSubmit={props.handleSearch}>
            <input
                type="text"
                className="form-control mt-2"
                placeholder="Search ..."
                value={props.searchValue}
                onChange={(e) => props.setSearchValue(e.currentTarget.value)} />
            <MDBBtn className="m-2" type="submit" color="dark">Search</MDBBtn>
            <MDBBtn className="m-2" color="info" onClick={props.handleReset}>Reset</MDBBtn>
        </form>
    )
}

export default SearchForm