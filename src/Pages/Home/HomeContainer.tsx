import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Home } from './Home';
import { IData } from './type';

export const HomeContainer = () => {
    const [data, setData] = useState<Array<IData>>([
        {
            "_id": 0,
            "date": '',
            "name": '',
            "count": 0,
            "distance": 0
        }
    ]);
    const [searchValue, setSearchValue] = useState('');
    const [sortValue, setSortValue] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [pageLimit] = useState(4);
    const [sortPagination, setSortPagination] = useState("")
    const [operation, setOperation] = useState("")

    useEffect(() => {
        loadsData(0, 4, 0, operation, sortPagination);
    }, []);

    const loadsData = async (start: number, end: number, increase: number, optType: string | null = null, sort:string) => {
        switch (optType) {
            case 'search':
                setOperation(optType);
                setSortPagination('');
                return await axios.get(`http://localhost:5000/data?q=${searchValue}&_start=${start}&_end=${end}`)
                    .then((response) => {
                        setData(response.data)
                        setCurrentPage(currentPage + increase)
                    })
                    .catch((err) => console.log(err));
            case 'sort':
                setOperation(optType);
                setSortPagination(sort);                
                return await axios.get(`http://localhost:5000/data?_sort=${sort}&_order=asc&_start=${start}&_end=${end}`)
                .then((response) => {
                    setData(response.data)
                    setCurrentPage(currentPage + increase)
                })
                    .catch((err) => console.log(err))
            default:
                return await axios
                    .get(`http://localhost:5000/data?_start=${start}&_end=${end}`)
                    .then((response) => {
                        setData(response.data);
                        setCurrentPage(currentPage + increase);
                    })
                    .catch((err) => console.log(err)
                    )
        }

    }

    const handleReset = () => {
        loadsData(0, 4, 0, operation, sortPagination);
        setOperation('');
        setSearchValue('')
        setSortPagination('')
        setSortValue('')
    }

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        loadsData(0, 4, 0, 'search', sortPagination);
    }

    const handleSort = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        let value = e.currentTarget.value
        setSortValue(value)
        loadsData(0, 4, 0, 'sort', value)
    }

    return (
        <Home
            data={data}
            operation={operation}
            sortPagination={sortPagination}
            searchValue={searchValue}
            pageLimit={pageLimit}
            currentPage={currentPage}
            sortValue={sortValue}
            handleSearch={handleSearch}
            handleReset={handleReset}
            setSearchValue={setSearchValue}
            loadsData={loadsData}
            handleSort={handleSort}
        />
    )
}