import React, { createContext, useContext, useReducer } from 'react'

const CartStateContext=createContext();
const CartDispatchContext=createContext(); // context initailize

const reducer =(state,action)=>{
  switch(action.type){
    case "ADD":
      return [...state,{id:action.id,name:action.name,qty:action.qty,price:action.price,img:action.img}]
    
    case "DEL":
      let newArr=[...state]
      newArr.splice(action.index,1)
      return newArr
      
      
    case "DROP":
        let empArray = []
        return empArray
    
    
    case "UPDATE":
        let arr = [...state]
        arr.find((food, index) => {
            if (food.id === action.id) {
                console.log(food.qty, parseInt(action.qty), action.price + food.price)
                arr[index] = { ...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price }
            }
            return arr
        })
        return arr 
    default:
      console.log("Error in Reducer")
  }
}
const CartProvider = ({children}) => {
  
  const[state,dispatch]=useReducer(reducer,[])     //[intail value,dispatch is multiple stage such as add,delete]   
                                                  // here we make useRedducer set to reducer so it gives values to reducer func       
    return (
      
        //now both context are glonbal by also applying in App.jsx
        // but we have only createdd context
    <CartDispatchContext.Provider value={dispatch}>   
      <CartStateContext.Provider value={state}>
          {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  )
}

//export context
export const useCart=()=>{
  useContext(CartDispatchContext)
}

export const useDispatchCart=()=>{
  useContext(CartStateContext)
}
export default CartProvider
