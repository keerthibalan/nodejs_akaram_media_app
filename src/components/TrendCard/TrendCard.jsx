import React from "react";

import './TrendCard.css'
import {TrendData} from '../../Data/TrendData.js'


const TrendCard = () => {
    return(
        <div className="TrendCard">
            {TrendData.map((trend)=>{
                return(
                    <div className="Trend">
                        <span>#{trend.name}</span>
                        <span>#{trend.shares}</span>
                    </div>
                )
            })}
        </div>
    )
    
}

export default TrendCard