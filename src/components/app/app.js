import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../employee-list/employee-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

    const data = [
        {name: 'John S.', salary: 800, increase: false},
        {name: 'Alex M.', salary: 3000, increase: true},
        {name: 'Smith K.', salary: 5000, increase: false},
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
                <EmployeeList data={data}/>
                <EmployeesAddForm/>
        </div>
    );
}

export default App;