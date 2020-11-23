import { useEffect, useState } from 'react'
import axios from 'axios'
import Country from './components/Country'

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
      <h1>Countries</h1>
      { countries.map(country => (
        <div key={country.name}>
          <Country country={country}/>          
        </div>
      )) }
    </div>
  );
}

export default App;
