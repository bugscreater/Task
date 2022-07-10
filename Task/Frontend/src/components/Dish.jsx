import React,{useEffect,useState} from 'react';
import './Dish.css';
import Navbar from './Navbar';
import {data} from '../config'; 
import { Link } from 'react-router-dom';

const Dish = ({counter,setCounter}) => {
    
    const no_of_items = data.length;
    
    const[item,setItem] = useState(data[counter]);
    const[cartlength,setCartlength] = useState(0);
    const[ischange,setIschange] = useState(false);

    

    useEffect(()=>{
        setItem(data[counter]);
        let cart_obj = JSON.parse(localStorage.getItem('cart'));
        let cart_len = Object.keys(cart_obj).length;

        setCartlength(cart_len);
        
    },[counter,ischange])

    const IncrementCounter = () =>{
        
        if(counter < no_of_items-1){
            setCounter(counter+1);
        }
        return;
        
        
    }

    const DecrementCounter = () =>{
        if(counter > 0){
            setCounter(counter-1);
        }
        return;
    }
   
    const Addtocart = () =>{
        setIschange(!ischange);
        let cart_obj = JSON.parse(localStorage.getItem('cart'));
        
        if(cart_obj === null){
            cart_obj = {};
            cart_obj[counter] = 1;
        }
        else{
            if(cart_obj[counter] === undefined){
                cart_obj[counter] = 1;
            }
        }

        localStorage.setItem('cart', JSON.stringify(cart_obj));
       
       

    }

    return (
  
    <header>
    <Navbar cartlength = {cartlength}/>   
    {counter<no_of_items-1?<i className="fa-solid fa-arrow-down fa-3x arr-down" onClick={IncrementCounter}></i>:null}
    {counter>0?<i className="fa-solid fa-arrow-up fa-3x arr-up"  onClick={DecrementCounter}></i>:null}
    <div className="container">
        
        <div className="header-content">
           
            <div className="row">
                <div className="col-lg-6">
                    <div style={{marginTop:"150px"}}></div>
                    <h1>{`${item.dishname} ${item.price}$`}</h1>
                    <p>{item.desc}</p>
                    <Link to="/placeorder"><button className='theme-btn'>Order now</button></Link>
                    <button  className='theme-btn' onClick={Addtocart}>Add to cart</button>
                    <div className="go-about"></div>
                </div>
               
                <div className="col-lg-6">
                    <div className = "mt-60"></div>
                    <img src={item.imageurl} className='img-responsive' alt=""/>
                </div>

            </div>
        </div>
    </div>
    </header>
    
    
  )
}

export default Dish