import { useEffect, useState } from 'react'
import './App.scss'
import axios from 'axios'
import Country from './components/Country/Country'
import Navbar from './components/Navbar/Navbar'
import SearchBar from './components/SearchBar/SearchBar'
import FilterSelect from './components/FilterSelect/FilterSelect'
import Spinner from './components/Spinner/Spinner'

function App() {
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const fetchedCountries = await axios.get('https://restcountries.eu/rest/v2/all')
        setIsLoading(false)
        setCountries(fetchedCountries.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCountries()
  }, [])

  const handleSetQuery = async (query) => {
    try {
      setQuery(query)
      if (query) {
        const foundCountry = await axios.get(`https://restcountries.eu/rest/v2/name/${query}`)
        setIsLoading(false)
        setCountries(foundCountry.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <Navbar />
      <main className="app-container">
        <section className="filters-container">
          <SearchBar getQuery={query => handleSetQuery(query)}/>
          <FilterSelect />
        </section>
        { query ? <span>Results for "{query}"</span> : null }
        <section className="countries-container">
          { isLoading ? <Spinner /> : null }
          { countries.map(country => (
            <div key={country.name}>
              <Country country={country}/>          
            </div>
          )) }
        </section>
      </main>
    </div>
  );
}

export default App
