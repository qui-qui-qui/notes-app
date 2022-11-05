import React from "react";
import { MdSearch } from 'react-icons/md/index.esm'

const Search = () => {
    return <div className="search">
        <MdSearch className='search-icon' size='1.3em' />
        <input type='text' placeholder='type to search...' />
    </div>
}

export default Search;