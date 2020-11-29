import { useEffect, useState } from 'react'
import './App.scss'
import axios from 'axios'
import Country from './components/Country/Country'
import Navbar from './components/Navbar/Navbar'
import SearchBar from './components/SearchBar/SearchBar'
import FilterSelect from './components/FilterSelect/FilterSelect'

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const fetchedCountries = await axios.get('https://restcountries.eu/rest/v2/all')
        setCountries(fetchedCountries.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCountries()
  }, [])

  return (
    <div className="App">
      <Navbar />
      <main className="app-container">
        <section className="filters-container">
          <SearchBar />
          <FilterSelect />
        </section>
        <section className="countries-container">
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

export default App;
