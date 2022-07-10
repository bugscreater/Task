import React from 'react'
import LeftSide from '../components/LeftSide'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {

   const navigate = useNavigate();
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

   const handlesubmit = (e) =>{
         e.preventDefault();
          
         // Call the authentication api...

         // ...
         navigate("/products");
         


   }

   return (
    <div className='split-screen'>
        <LeftSide/> 
        
        <div className="right">
         


          <form onSubmit={handlesubmit}>
             <section className='copy p-0'>
                <h2>Sign in</h2>
                <p>Sign in using your email and password.</p>

             </section>
             
             

             
             <div className='input-container email'>
                <label>Email address</label>
                <input id = "email" name = "email" type="email" required onChange={(e)=>{setEmail(e.target.value)}}/>


             </div>

             <div className='input-container password'>
                <label>Enter password</label>
                <input id = "password" name = "password"  type="password" required onChange={(e)=>{setPassword(e.target.value)}}/>
               
                <input type="checkbox" className='toogle-visibility' onChange={set_password_visibility}/>{showpassword?`Hide Password`:`Show Password`}


             </div>
             <br />

           
             


             <button className='register-btn' type= "submit">
                 Sign in
             </button>
           
              

          </form>

       </div>
            
    </div>
  )
}

export default Signin