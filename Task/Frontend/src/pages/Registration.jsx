import React from 'react';
import './Registration.css';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import { useEffect } from 'react';
import LeftSide from '../components/LeftSide'
import { useState } from 'react';

const Registration = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const[istnc,setTnc] = useState(false);

   const[name,setName] = useState("");
   const[email,setEmail] = useState("");
   const[password,setPassword] = useState("");
   const[showpassword,setShowpassword] = useState(false);

   const set_password_visibility = () => {
      var x = document.getElementById("password");
      if (x.type === "password") {
        x.type = "text";
        setShowpassword(true);
      } else {
        x.type = "password";
        setShowpassword(false);
      }
   }

   useEffect(()=>{
      if(!location.state){
         navigate("/");
      }
   },[])
   
   const handlesubmit = (e) =>{
         e.preventDefault();   

         if(!istnc){
          return;
         }

         // Code for stroring the User in database....


         // ....

         // After store it to the db navigate to the sign in page...

         navigate("/signin");
   }

   if(location.state){

   return (
    <div className='split-screen'>
        <LeftSide/>

       <div className="right">
          <div className='navigation' onClick={()=>navigate(-1)}>
            <i className ="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
           
            
          </div> 

          <div className='container-fluid'>
          <form onSubmit={handlesubmit}>
             <section className='copy p-0'>
                <h2>{`Register ${location.state.Account} account`}</h2>
                <p>For the purpose of industry regulation your details are required.</p>

             </section>
             
             

             <div className='input-container name'>
                <label>Your fullname</label>
                <input id = "fname" name = "fname" type="text" required onChange={(e)=>{setName(e.target.value)}}/>


             </div>
             <div className='input-container email'>
                <label>Email address</label>
                <input id = "email" name = "email" type="email" required  onChange={(e)=>{setEmail(e.target.value)}}/>


             </div>

             <div className='input-container password'>
                <label>Create password</label>
                <input id = "password" name = "password"  type="password" required onChange={(e)=>{setPassword(e.target.value)}}/>
               
                <input type="checkbox" className='toogle-visibility' onChange={set_password_visibility}/>{showpassword?`Hide Password`:`Show Password`}


             </div>
             <br />

             <div className="input-container cta">
                <label className="container">
                 <input type="checkbox" onChange={()=>{setTnc(!istnc)}} />
                <span className="checkmark"></span>
                <small>I agree to terms & conditions. </small> 
                </label>

             </div>
             


             <button className='register-btn' type= "submit">
                 Register account
             </button>
           
              

          </form>
          </div>

       </div>


    </div>
  )
  }
}

export default Registration