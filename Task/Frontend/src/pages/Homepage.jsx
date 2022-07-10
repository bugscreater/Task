import React from 'react';
import './Homepage.css';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import LeftSide from '../components/LeftSide';

const Homepage = () => {
   const navigate = useNavigate();
   const[account,setAccount] = useState("");

  

   useEffect(()=>{
      if(account !== ""){
         navigate("/register",{state:{Account:account}});
      }
     
   },[account])

  
   
   return (
    <div className='split-screen'>
       
       <LeftSide/>

       <div className="right container-fluid">
           <form>
            <section className='copy d-inline container-fluid'>
                <h2>Join Us !</h2>
                <p>To begin this journey,tell us what type of account you'd be opening.</p>

            </section>
            <div className="choices">
               <div className='indvidual-account' onClick={()=>{setAccount("Individual")}}>
                
                 <h2>Individual   <i className="fa fa-arrow-right" aria-hidden="true"></i> </h2>
                 <p>Personal account to manage all your activities.</p>
               </div>
               <div className='buisness-account' onClick={()=>{setAccount("Buisness")}}>
                
                 <h2>Buisness  <i className="fa fa-arrow-right" aria-hidden="true"></i> </h2>
                 <p>Own or belong to company,this is for you.</p>
               </div>
            </div>
            </form>


         

       </div>


    </div>
  )
}

export default Homepage