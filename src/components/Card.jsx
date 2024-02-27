import React, { useEffect, useState } from 'react'
import { useDispatchCart,useCart } from './ContextReducer';
const Card = (props) => {

  let options =props.options;
  let priceOptions=Object.keys(options);
  let foodItems=props.foodItems;
  const handleClick = () => {
    if (!localStorage.getItem("token")) {
      navigate("/login")
    }
  }

  const[qty,setQty]=useState(1)
  const[size,setSize]=useState("")

  const handleQty = (e) => {
    setQty(e.target.value);
  }
  const handleOptions = (e) => {
    setSize(e.target.value);
  }
  
  let dispatch=useDispatchCart()
  const  handleAddToCart=async()=>{
    let food = []
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;

        break;
      }
    }
    console.log(food)
    console.log(new Date())
    if (food !== []) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty })
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
        console.log("Size different so simply ADD one more to the list")
        return
      }
      return
    } 

      await dispatch({type:"ADD",id:props.foodItems.id,name:props.foodItems.name,price:finalPrice,qty:qty,size:size})

 
    }

    let finalPrice=qty * parseInt(options[size]);
    useEffect(()=>{
        setSize(priceRef.current.value)
    },[])
  return (
    <div>
       <div >
      <div className="card m-3 " style={{"width": "18rem","maxHeight":"360px","padding":"5px"}}>
          <img  src={props.foodItem.img} style={{"filter":"brightness(80%)",objectFit:'cover'}} className='rounded'  alt="" />
          <div className="card-body">
            <h5 className="card-title">{propsfoodItem.name}</h5>
            
             <div className="container w-100 m-2rem  ">
              <select className="m-2 h-100 bg-sucess rounded" id="" onChange={handleQty}>
                {Array.from(Array(6),(e,i)=>{
                  return(
                    <option key={i} value={i+1}>{i+1}</option>
                  )
                })}
              </select>                                                    
              
              <select className="m-2 h-100 w-20 bg-success text-black rounded"  ref={priceRef} onClick={handleClick} onChange={handleOptions} style={{ select: "#FF0000" }}>
              {priceOptions.map((i) => {                                        //
                return <option key={i} value={i}>{i}</option>
              })}
            </select>
              <div className="d-inline ">Total Price</div>
              <hr></hr>
          <button className={`btn btn-success justify-center ms-2 `} onClick={handleAddToCart}>Add to Cart</button>   
            </div>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Card
