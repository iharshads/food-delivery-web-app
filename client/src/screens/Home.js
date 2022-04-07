import React from 'react'
import Pizza from '../components/Pizza'
import pizzas from '../data'

function Home() {
  return (
    <div>

        <div className="row">
            {pizzas.map(pizza=>{
                return <div className="col-md-4 " >
                    <Pizza pizza={pizza}/>
                </div>
            })}
        </div>

    </div>

  )
}

export default Home