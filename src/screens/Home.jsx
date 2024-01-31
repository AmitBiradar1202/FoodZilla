import React from 'react'
import NAvbar from '../components/NAvbar'
import FOOT from '../components/FOOT'
import Card from '../components/Card'
import Carousal from '../components/Carousal'

const Home = () => {
  return (
    <div>
      <div><NAvbar/></div>
     <div><Carousal/></div>
      <div className='m=5'><Card/><Card/><Card/><Card/><Card/></div>
      <div><FOOT/></div>
    </div>
  )
}

export default Home
