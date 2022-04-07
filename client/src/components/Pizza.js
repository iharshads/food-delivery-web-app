import React from 'react'
import { useState } from 'react'
import { Formik, Form, Field } from 'formik';
import pizzas from '../data'

function Pizza({pizza}) {
    const [quantity, setquantity]=useState(1)
    const [varient, setvarient]=useState('S')
  return (
    // <div>
    //     <h4>{pizza.name}</h4>
    //     <img src={pizza.image} alt="" />
    // </div>
    <div className="card mx-2 my-4 shadow bg-body rounded-3"  style={{width:"15rem", height:"31rem"}}>
        <div className='text-center mt-2'>
    <img src={pizza.image}   style={{width:"10rem", height:"8rem"}}  className="card-img-top" alt="..."/>
        </div>
    <div className="card-body">
      <h5 className="card-title">{pizza.name}</h5>
      <p className="card-text text-secondary">Paneer tossed in our signature desi chilli sauce with fried rice.</p>
      <Formik  initialValues={{name:pizza.name, size:'', quantity:''}}   >
          <Form>
      <div className='d-flex sizeprice ' >
          <div className='d-flex size'>
              <p>Size: </p>
              {/* <Field  value={varient} onChange={(e)=>{setvarient(e.target.value)}} className='mx-2' name='size'>
              {pizza.varients.map(varient=>{
                      return <option value={varient}>{varient}</option>
                  })}
              </Field> */}
              <select className='mx-2' name="size" id="" value={varient} onChange={(e)=>{setvarient(e.target.value)}}>
                  {pizza.varients.map(varient=>{
                      return <option value={varient}>{varient}</option>
                  })}
              </select>
          </div >
          <div className='quantity d-flex'>
          <p>Quantity: </p>
         <select className='mx-2' name="" id=""    value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
             {[...Array(10).keys()].map((x , i)=>{
                 return <option value={i+1}>{i+1}</option>
             })}
         </select>
          </div>
      </div>
      <div>
            <h5>Price: &#8377;{pizza.prices[0][varient]*quantity}</h5>
      </div>
      <button href="#" className="btn m-1 btn-danger">Add to cart</button>
      </Form>
      </Formik>
    </div>
  </div>
  )
}

export default Pizza