import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import './Expenses.css'

import { useState } from "react";

const Expenses=(props)=> {
  const [filteredYear, setFilteredYear] = useState("2020")
  const onFilterYearHandler = (year)=>{

    console.log(year);
    setFilteredYear(year)

  };

  const filterExpenses=(expense)=>{
    // const currYear=expense.date.getFullYear()
    // console.log(currYear);
    return expense.date.getFullYear().toString()===filteredYear;
  };

  const filteredResult=props.items.filter(filterExpenses);

  // console.log(filteredResult);

  

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onFilterYear={onFilterYearHandler}/>
      <ExpensesList items={filteredResult}/>
      
    </Card>
  );
}

export default Expenses;
