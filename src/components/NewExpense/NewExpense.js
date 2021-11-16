import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
import { useState } from "react";

const NewExpense = (props) => {

    const onSaveExpenseHandler=(expenseData)=>{

        const expense={
            id: Math.random().toString(),
            ...expenseData     
        }
        // console.log(expense)
        props.onNewExpenseData(expense);
    };

    const [isClicked, setIsClicked] = useState(false)
    const addExpensesBTNHandler = ()=>{
        setIsClicked(true);
    };

    const onCancelHandler=(a)=>{
        // console.log(a);
        if (a===true){
            setIsClicked(false);
        }
    };


  return (
    <div className="new-expense">
       { isClicked===false && <button onClick={addExpensesBTNHandler}>Add Expense</button>}
      { isClicked===true && <ExpenseForm onSaveExpenseData={onSaveExpenseHandler} onCancel={onCancelHandler}/>}
    </div>
  );
};

export default NewExpense;
