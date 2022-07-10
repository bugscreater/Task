import React from 'react';
import Navbar from '../components/Navbar';
import './Cart.css';
import Card from '../components/Card';
import { useState,useEffect } from 'react';
import Totalprice from '../components/Totalprice';


const Cart = () => {
  const[items,setItems] = useState(JSON.parse(localStorage.getItem('cart')));
  const[ischange,setIschange] = useState(false);
  const[cartlength,setCartlength] = useState(0);
 
  
  
  useEffect(() => {
       
    setItems(JSON.parse(localStorage.getItem('cart')));
    let cart_obj = JSON.parse(localStorage.getItem('cart'));
    let cart_len = Object.keys(cart_obj).length;

    setCartlength(cart_len);
  
    
  }, [ischange])
  
 
  
  const additem = (id) =>{
    setIschange(!ischange);

    let cart_obj = JSON.parse(localStorage.getItem('cart'));
    if(cart_obj[id] !== undefined){
        cart_obj[id]++;
    }
    localStorage.setItem('cart', JSON.stringify(cart_obj));
   
  }

  const removeitem = (id) =>{
    setIschange(!ischange); 
    let cart_obj = JSON.parse(localStorage.getItem('cart'));
    if(cart_obj[id] !== undefined){
        if(cart_obj[id] === 1){
            delete cart_obj[id]; 
        }
        else{
           cart_obj[id]--;
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart_obj));
    
  }  


 

  return (
    <div className='Box'>
        <Navbar cartlength = {cartlength}/>
        <div className="container mt-60 p-10">
            {
                Object.entries(items).map(([key]) => (
                   <Card key = {key} id = {key} freq = {items[key]}  additem = {additem}  removeitem = {removeitem}/>
                ))
            }
            <Totalprice items={items}/>
        </div>
        
    </div>
      
  )
}

export default Cart