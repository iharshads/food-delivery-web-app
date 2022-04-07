import React from 'react'
import { useHistory } from "react-router-dom";


function Checkout() {

    let history = useHistory();
    
    const routeChange = () =>{ 
        let path = `checkoutpage`; 
      history.push(path);
    }
  return (
    <div className='checkout mt-4' style={{border:"2px solid #49d893"}}>
        <h4>Items in your cart</h4>
        <div className="container">

        </div>
        <button className='btn btn-danger' onClick={routeChange}>Checkout</button>
    </div>
  )
}

export default Checkout