import React from 'react'
import Updates from '../Updates/Updates'
import './Right.css'
import Review from '../Review/Review'

function Right() {
    return (
        <div>
        <div className="right">
            <h3 className='title-updates'>Notifications</h3>
            <Updates/>
        </div>
        <div>
            <h3 className='title-r'>Client Engagement Metrics </h3>
            <Review/>
        </div>
        </div>
    )
}

export default Right
