import React from 'react'
import { Link } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import Modal from '../Modal'
import { useCart } from './ContextReducer'
const [cartview,setCartView]=useState(false)


const NAvbar = (props) => {

  let state=useCart();
  const handlelogout=(res,req)=>{
    localStorage.removeItem("authtoken")
    res.redirect('/login')
  }

  return (
    <div className='NAvbar '>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic " to="/">Foodzilla</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        {(localStorage.getItem("authtoken"))?
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">My orders</Link>
      </li>:""

        }
      
      {
        (!localStorage.getItem("authtoken"))?
        <div className="d-flex">
          <Link className='btn bg-white text-success mx-1' to='/login'>Login</Link>
          <Link className="btn bg-white text-success mx-1" to="/creatuser">SignUp</Link>
        </div>:
        <div className="d-flex">
          
          <div className="btn bg-white text-success mx-1" onClick={()=>{setCartView(true)}}>
            Mycarts{" "}
            <Badge pill bg='danger'>{state.length}</Badge>

          </div>
          {cartview?<Modal onClose={()=>{setCartView(false)}}></Modal>:null}
          
          <div className='btn bg-white text-success mx-1'  onClick={handlelogout}>Logout</div>
          
          
        </div>
      }
        
      
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NAvbar
