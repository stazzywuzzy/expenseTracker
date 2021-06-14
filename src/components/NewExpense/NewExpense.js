import React, {useState} from "react";

import '../../asset/css/NewExpense.css'
import ExpenseForm from "../Expenses/ExpenseForm";

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false)

    const onSaveExpenseData = (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler= () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
            {isEditing && <ExpenseForm
                onSaveExpenseData={onSaveExpenseData}
                onCancel={stopEditingHandler} />}
        </div>
    )
}

export default NewExpense;