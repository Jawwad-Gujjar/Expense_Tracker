import { createContext, useReducer } from "react"

    const iniialTransactions=[
        { amount :500 , desc :" Cash"},
        { amount :-40 , desc :" Book"},
        { amount :-200 , desc :" Camera"}
    ]
    export const TransectionContext = createContext(iniialTransactions);
    export const TransectionProvider=({children})=>{
        let [state,dispatch] =useReducer(TransectionContext, iniialTransactions)
        function addTransection(transObj){
             dispatch({
                 type :"ADD Transection",
                 payload:{
                    amount:transObj.amount,
                    desc :transObj.desc
                 } 
             })
             return(
                 <TransectionContext.Provider value={{
                    transactions : state,
                    addTransection
                 }}>
{children}
                 </TransectionContext.Provider>
             )
        }
    }
