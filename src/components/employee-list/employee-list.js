import EmployeeListItem from '../employee-list-item/employee-list-item';
import './employee-list.css';

const EmployeeList = ({data, onDelete, onToggleIncrease, onToggleRise}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;          // (name={item.name} salary={item.salary} increase={item.increase}) - это и есть ...itemProps
        return (
            <EmployeeListItem 
                key={id} 
                {...itemProps}                              // можно использовать спрэд оператор {...item}, что даст тоже самое
                onDelete={() => onDelete(id)} 
                onToggleIncrease={() => onToggleIncrease(id)} 
                onToggleRise={() => onToggleRise(id)}/>       
        )
    })
    
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeeList;