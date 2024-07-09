import React,{useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';


const Budget=()=>{
    let {budget,dispatch,remaining,currency}=useContext(AppContext);
    const [newBudget,setNewBudget]=useState(budget);
    const handleBudgetChange=(event)=>{
        setNewBudget(event.target.value);
        if(newBudget>20000)
        {
            alert(`Budget cannot exceed 20000, remaining funds ${remaining}`)
        }
        else if(newBudget<budget-remaining)
        {
            alert("You cannot reduce the budget lower than spending");
        }
        else
        {
            dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
            });
        }
        
    }
    return(
        <div className='alert alert-secondary'>
        <span>Budget: {currency}</span>
        <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} />
        </div>
    );
};

export default Budget;
