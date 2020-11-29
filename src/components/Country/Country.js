import './Country.scss'

const Country = ({ country }) => {
    return (
        <section className="country">
            <img src={country.flag} alt={country.name} className="country__flag"></img>
            <div className="country-details-container">
                <span className="country__name">{country.name}</span>
                <div className="country-details">
                    <span className="country__key">Population:</span>
                    <span className="country__value">{country.population}</span>
                </div>
                <div className="country-details">
                    <span className="country__key">Region:</span>
                    <span className="country__value">{country.region}</span>
                </div>
                <div className="country-details">
                    <span className="country__key">Capital:</span>
                    <span className="country__value">{country.capital}</span>
                </div>
            </div>
        </section>
    )
}

export default Country