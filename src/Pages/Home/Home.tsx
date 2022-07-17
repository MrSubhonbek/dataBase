import React from 'react'
import { MDBTable, MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';

import { Pagination } from "./components/Pagination";
import { SearchForm } from "./components/SearchForm";
import { Sort } from "./components/Sort";
import { HeadTable } from "./components/HeadTable";
import { BodyTable } from "./components/BodyTable";
import { IData } from './type';

interface IProps {
  data: Array<IData>
  searchValue: string
  pageLimit: number
  currentPage: number
  sortValue: string
  sortPagination: string
  operation: string
  handleSearch: (e: React.FormEvent<HTMLFormElement>) => void
  handleReset: () => void
  setSearchValue: (e: string) => void
  loadsData: (start: number, end: number, increase: number, operation: string, sortPagination: string) => void
  handleSort: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const Home = (props: IProps) => {

  return (
    <MDBContainer>
      <h2>Data Base</h2>
      <SearchForm
        handleSearch={props.handleSearch}
        handleReset={props.handleReset}
        searchValue={props.searchValue}
        setSearchValue={props.setSearchValue} />
      <MDBRow>
        <MDBCol size={12}>
          <MDBTable >
            <HeadTable />
            <BodyTable data={props.data} />
          </MDBTable>
        </MDBCol>
      </MDBRow>
      {props.data.length > 0 &&
        <>
          <div className="d-flex justify-content-center">
            <Pagination
              data={props.data}
              operation={props.operation}
              pageLimit={props.pageLimit}
              sortPagination={props.sortPagination}
              currentPage={props.currentPage}
              loadsData={props.loadsData} />
          </div><Sort handleSort={props.handleSort} sortValue={props.sortValue} />
        </>
      }

    </MDBContainer>
  )
}