import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import Remaining from './components/Remaining';
import { AppProvider } from './context/AppContext';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import ExpenseItem from './components/ExpenseItem';
//import Remaining from './components/Remaining';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {    /*Budget Component*/
                            <div className='col-sm'>
                                <Budget />
                            </div>        
                        }
                        {
                            /* Remaining component*/
                            <div className='col-sm'>
                                <Remaining />
                            </div>
                        }        

                        {
                            /* Comprises of Expense Total Till now*/
                            <div className='col-sm'>
                                <ExpenseTotal />
                            </div>
                        }        
                       
                        {
                            /* Added ExpenseList component*/
                            <div>
                                <ExpenseList />
                            </div>
                        }             

                        {
                            /* Added AllocationForm component*/
                            <div>
                                <AllocationForm />
                            </div>
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
