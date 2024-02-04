import React from 'react'

const Card = (props) => {
  return (
    <div>
       <div >
      <div className="card m-3 " style={{"width": "18rem","maxHeight":"360px","padding":"5px"}}>
          <img  style={{"filter":"brightness(80%)",objectFit:'cover'}} className='rounded' src="https://media.istockphoto.com/id/1305516669/photo/shahi-paneer-or-paneer-kadai.jpg?s=2048x2048&w=is&k=20&c=xG2suSX3cU6-dvy1kLpThdvpxWLLACEZbBcsUzY_Q7M=" alt="" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className="container w-100 m-2rem  ">
              <select className="m-2 h-100 bg-sucess rounded" id="">
                {Array.from(Array(6),(e,i)=>{
                  return(
                    <option key={i} value={i+1}>{i+1}</option>
                  )
                })}
              </select>
              <select className="m-2 h-100  bg-sucess rounded"id="">
                <option value="half" >Half</option>
                <option value="full" >Full</option>
              </select>
              <div className="d-inline ">Total Price</div>
            </div>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Card
