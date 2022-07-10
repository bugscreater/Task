import React,{useState} from 'react'
import Dish from '../components/Dish';

const Products = () => {
  const[counter,setCounter] = useState(0);  
  return (
    <>

       <Dish counter = {counter} setCounter = {setCounter}/>
    </>
  )
}

export default Products