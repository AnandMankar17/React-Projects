import { useState } from 'react'

import './App.css'
import Bag from './components/Bag'
import Button from './components/Button'
import left from './assets/left-arrow.png'
import right from './assets/right-arrow.png'




function App() {
  const [bagOne, setBagOne] = useState(10)
  const [bagTwo, setBagTwo] = useState(0)

  const leftClick = ()=>{
    if(bagTwo>0){
      setBagOne(bagOne+1);
      setBagTwo(bagTwo-1);
    }
  }
  const rigthClick = ()=>{
    if(bagOne>0){
      setBagOne(bagOne-1);
      setBagTwo(bagTwo+1);
    }
  }


   
  

  return (
    <div className='Outer'>
    <Bag count={bagOne} id={1}  />
    <Button image={left} fun={leftClick}/>
    <Button image={right} fun={rigthClick}/>
    <Bag count={bagTwo} id={2} />

    </div>
  )
}

export default App
