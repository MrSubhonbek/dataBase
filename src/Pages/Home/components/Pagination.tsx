import { MDBBtn, MDBPagination, MDBPaginationItem, MDBPaginationLink } from "mdb-react-ui-kit"
import React from "react"
import { IData } from "../type"

interface IProps {
    data: Array<IData>
    pageLimit: number
    sortPagination:string
    currentPage: number
    operation: string
    loadsData: (start: number, end: number, increase: number, operation:string, sortPagination:string) => void
}

export const Pagination = (props: IProps) => {
    if (props.data.length < 4 && props.currentPage === 0) return null
    if (props.currentPage === 0) {
        return (
            <MDBPagination className="mb-0">
                <MDBPaginationItem>
                    <MDBPaginationLink>1</MDBPaginationLink>
                </MDBPaginationItem>
                <MDBPaginationItem>
                    <MDBBtn onClick={() => props.loadsData(4, 8, 1, props.operation, props.sortPagination)}>Next</MDBBtn>
                </MDBPaginationItem>
            </MDBPagination>
        )
    } else if (props.currentPage < 4 - 1 && props.data.length === 4) {
        return (
            <MDBPagination className="mb-0">
                <MDBPaginationItem>
                    <MDBBtn onClick={() => props.loadsData((props.currentPage - 1) * 4, props.currentPage * 4, -1, props.operation, props.sortPagination)}>Prev</MDBBtn>
                </MDBPaginationItem>
                <MDBPaginationItem>
                    <MDBPaginationLink>{props.currentPage + 1}</MDBPaginationLink>
                </MDBPaginationItem>
                <MDBPaginationItem>
                    <MDBBtn onClick={() => props.loadsData((props.currentPage + 1) * 4, (props.currentPage + 2) * 4, 1, props.operation, props.sortPagination)}>Next</MDBBtn>
                </MDBPaginationItem>
            </MDBPagination>
        )
    } else {
        return (
            <MDBPagination className="mb-0">
                <MDBPaginationItem>
                    <MDBBtn onClick={() => props.loadsData((props.currentPage -1) *4, props.currentPage * 4, -1, props.operation, props.sortPagination)}>Prev</MDBBtn>
                </MDBPaginationItem>
                <MDBPaginationItem>
                    <MDBPaginationLink>{props.currentPage + 1}</MDBPaginationLink>
                </MDBPaginationItem>
            </MDBPagination>
        )
    }
}