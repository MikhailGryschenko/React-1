import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)        // пробрасываем состояние наверх (onUpdateSearch здесь разные функции, локальная и приходящая из props)
    }

    render() {
        return (
            <input 
                type="text"
                className="form-control search-input"       // Эти классы идут из bootstrap
                placeholder="Найти сотрудника" 
                value={this.state.term} 
                onChange={this.onUpdateSearch}/>
        )
    }
}

export default SearchPanel;