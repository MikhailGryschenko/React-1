import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../employee-list/employee-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John S.', salary: 800, increase: false, id: 1},
                {name: 'Alex M.', salary: 3000, increase: true, id: 2},
                {name: 'Smith K.', salary: 5000, increase: false, id: 3},
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
                        
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }
// или так попробовать...
/*     addItem = (name, price) => {
        this.setState(({data, maxId}) => {
            const newItem = {name: name, price: price, checked: false, id: maxId}
            const newArr = [...data, newItem];
 
            return {
                data: newArr,
                maxId: maxId + 1
            }
 
        })
    } */


    render() {
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                    <EmployeeList data={this.state.data} 
                    onDelete={this.deleteItem}/>
                    <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;