const TransactionReduser =((state ,action )=>{
    switch(action.type){
        case "ADD Transection" :{
            console.log(action.payload,'---', ...state)
            return [action.payload, ...state]

        }
        default:
            console.log(state)
            return state
    }
})
export default TransactionReduser;