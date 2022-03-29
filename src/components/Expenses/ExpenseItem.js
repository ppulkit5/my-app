import ExpenseDate from './ExpemseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    // const ExpenseDate= new Date(2022,2,18);
    // const ExpenseTitle= 'Car ins';
    // const ExpenseAmount= 2894.9;

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{props.title} </h2>
                    <div className='expense-item__price'>{props.amount} </div>
                </div>
            </Card>
        </li>
    );
}
export default ExpenseItem;