import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'

const Navbar = ({cartlength}) => {
  const navigate = useNavigate();
  return (
    <nav>
        <input type="checkbox" id='check'/>
        <label htmlFor="check">
            <i className='fas fa-bars' id = "btn"></i>
            <i className='fas fa-times' id = "cancel"></i>
        </label>

        <Link to="/products"><img src="https://www.freepnglogos.com/uploads/chef-png/png-psd-download-chef-cook-vector-illustration-14.png" alt="" /></Link>
        
        <ul>
         <li onClick={()=>{navigate("/cart")}}><i className="fas fa-shopping-cart fa-2x"></i>{cartlength}</li>   
        <li>BreakFast</li>
        <li>Lunch</li>
        <li>Dinner</li>
        </ul>


    </nav>
  )
}

export default Navbar