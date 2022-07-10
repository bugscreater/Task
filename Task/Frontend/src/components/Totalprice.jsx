import React,{useEffect,useState} from 'react'
import {data} from '../config'; 


const Totalprice = ({items}) => {

  const[totalcost,setTotalCost] = useState(0); 

  useEffect(() => {
     totalprice();
  }, [items])
  
  
  
  const totalprice = () =>{
    var totalsum = 0;
    Object.entries(items).forEach(([key]) => (
        totalsum += data[key].price*items[key]
        
     
     ))
     setTotalCost(totalsum);
  }
  return (
    <div>
      {
        totalcost>0?<div className='container-fluid' style={{position:"absolute",bottom:"0",right:"0"}}>{`Total ${totalcost}$`}</div>:null
      }
      
    </div>
  )
}

export default Totalprice