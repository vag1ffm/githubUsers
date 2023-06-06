import React, {useEffect, useState} from 'react';
import {useLazyGetUserReposQuery, useSearchUsersQuery} from "../../store/reducer/githab.api";
import useDebounce from "../../hooks/debounce";
import RepoCard from "../RepoCard";

const HomePage = () => {
    const [search, setSearch] = useState('')
    const debounced = useDebounce(search)
    const [show, setShow] = useState(false)
    const {isLoading, isError, data} = useSearchUsersQuery(debounced, {
        skip: debounced.length < 3,
        refetchOnFocus: true,
    })

    const [fetchRepos, {isLoading: areReposLoading,  data: repos}] = useLazyGetUserReposQuery()


    useEffect(() => {
        setShow(debounced.length > 3 && data?.length! > 0)
    }, [debounced, data])

    const clickHandler = (username : string) => {
        fetchRepos(username)
        setShow(false)
    }


    return (
        <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
            {isError && <p className={"text-center text-red-600"}>Some thing went wrong</p>}


            <div className={'relative w-[560px]'}>
                <input
                    type="text"
                    className="border py-2 px-4 w-full h-[42px] mb-2"
                    placeholder="Search for Github username..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {
                    show &&  <ul className={' list-none absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white overflow-y-scroll'}>
                        {isLoading &&  <p className={'text-center'}> Loading... </p>}
                        {data?.map(user=> {
                            return <li key={user.id}
                                       onClick={() => clickHandler(user.login)}
                                       className={'py-2 px-4 hover:bg-gray-500 hover:text-white transition-[0.3s] cursor-pointer'}
                            >{user.login}</li>
                        }) }
                    </ul>
                }
                <div className="container">
                    {areReposLoading && <p>aaaaaaa</p>}
                    { repos?.map(repo => <RepoCard repo={repo} key={repo.id} />) }
                </div>

            </div>
        </div>
    );
};

export default HomePage;