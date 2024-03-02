import EmployeeListItem from '../employee-list-item/employee-list-item';
import './employee-list.css';

const EmployeeList = ({data, onDelete}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;          // (name={item.name} salary={item.salary} increase={item.increase}) - это и есть ...itemProps
        return (
            <EmployeeListItem 
                key={id} 
                {...itemProps}                              // можно использовать спрэд оператор {...item}, что даст тоже самое
                onDelete={() => onDelete(id)}/>       
        )
    })
    
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeeList;