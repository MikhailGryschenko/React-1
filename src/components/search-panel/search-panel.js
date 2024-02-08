import './search-panel.css';

const SearchPanel = () => {
    return (
        <input 
            type="text"
            className="form-control search-input"       // Эти классы идут из bootstrap
            placeholder="Найти сотрудника"/>
    )
}

export default SearchPanel;