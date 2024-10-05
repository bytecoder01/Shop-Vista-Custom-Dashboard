import React from 'react'
import './Mainhub.css'
import Panels from '../Panels/Panels'
import Orders from '../Orders/Orders'
function Mainhub() {
    return (
        <div className="Mainhub">
           <h1 className='title'>Dashboard</h1>
            <Panels/>
           
            <Orders/>
            
        </div>
    )
}

export default Mainhub
