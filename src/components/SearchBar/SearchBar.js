import { useState } from 'react'
import './SearchBar.scss'

const SearchBar = ({ getQuery }) => {
    const [searchTerm, setSearchTerm] = useState('') 
    
    const handleSetSearchQuery = query => {
        setSearchTerm(query)
        getQuery(query)
    }

    return (
        <section>
            <input type="text" placeholder="Search for a country..." className="search-bar" onChange={e => handleSetSearchQuery(e.target.value)}></input>
        </section>
    )
}

export default SearchBar