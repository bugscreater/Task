import React from 'react'
import { useNavigate } from 'react-router-dom'

const Placeorder = () => {
  const navigate = useNavigate();  
  return (
    
    <div className="container bg-dark">
    <button className='theme-btn' onClick={()=>{navigate(-1)}}>Go Back</button>  
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
        <p className='text-light'>
        Hurray! your order is placed😂😂🤣.
        </p>
        
    </div>
   
    </div>
  )
}

export default Placeorder