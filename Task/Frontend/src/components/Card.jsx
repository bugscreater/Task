import React from 'react'
import {data} from '../config'; 
import { Link } from 'react-router-dom';

const Card = ({id,freq,additem,removeitem}) => {
  const AddItem = () =>{
    additem(id);
  }

  const RemoveItem = () =>{
    removeitem(id);
  }

  return (
    <div className="card" style={{Width: "18rem",paddingTop:"20px",marginTop:"10px"}}>
      
    <img className="card-img-top img-responsive" src={data[id].imageurl}  alt="Card image cap"/>
    <div className="card-body">
      <h2 className="card-title text-light">{`${data[id].dishname}  ${data[id].price}$`}</h2>
      <div className="card-title text-light">{`Quantity ${freq}`}</div>
      <br />
      <div>
      <Link to = "/placeOrder" className='text-dark'>Order Now</Link>
      <p className="card-text text-light">{data[id].desc}</p>
      </div>
      
      
     
      
      <button  className='theme-btn' onClick={RemoveItem}>Remove one</button>
      <button  className='theme-btn' onClick={AddItem}>Add one</button>
     
     
      

      

     
    </div>
    </div>
  )
}

export default Card