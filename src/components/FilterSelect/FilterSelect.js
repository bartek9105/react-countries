import './FilterSelect.scss'

const FilterSelect = () => {
    return (
        <select className="filter-select">
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    )
}

export default FilterSelect