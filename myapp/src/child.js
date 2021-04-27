import React, { useContext } from 'react'
import {TransectionContext} from './transContext'

function Child() {
 
     let transactions = useContext(TransectionContext)
    
  return (
    <div className="container">
    <h1 className="text-center">Expense Tracker</h1>
    <h3>Your Balance <br/> $260</h3>
    
    <div className="expense-contaoner">
    <h3>INCOME <br/> $500</h3>
    <h3>EXPENSE<br/>$240 </h3>
    </div>
    <h3>History</h3>
    <hr />
    <ul  className="transaction-list">
        {transactions.map((transObj,ind)=>{
            return(
                <li key={ind}>
                <span>{transObj.desc}</span>
                <span>{transObj.amount}</span>
            </li> 
            )

        })}
 
    </ul>
    <h3>Add New Transaction</h3>
    <hr />
    <form className="transaction-form">
        <label>
            Enter Disciption<br/>
            <input type="text" required/>
        </label>
        <br/>
        <label>
            Enter Amount<br/>
            <input type="number" required/>
        </label>
        <br/>
        <input type="submit" value="Add Transaction"/>
    </form>
    </div>
  );
}

export default Child;
