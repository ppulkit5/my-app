import ExpenseForm from './ExpenseForm';
import './NewExpense.css'
import { useState } from 'react';



const NewExpense= (props)=>{
    const [isEditing,setisEditing] = useState(false);

    const saveExpenseDataHandler=(enteredExpenseData)=>{
     const expenseData = {
         ...enteredExpenseData,
         id: Math.random.toString()
     };
     props.OnAddExpense(expenseData);
     setisEditing(false);
    };
    
    const startEditingHandler= ()=>{
        setisEditing(true);
    }
    const stopEditingHandler= ()=>{
        setisEditing(false);
    }

    return <div className='new-expense'>
        {!isEditing && <button onClick={startEditingHandler}> Add New Expense </button>}
        {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
}

export default NewExpense;