import React from 'react'
import './VerticalLine.scss'
import blue_vector from '../../../assets/icons/blue_vector.png'

const VerticalLine: React.FC<any> = ({routeInfo}) => {
    return (
        <>
            <div className="vertLine" style={{background: `linear-gradient(#FFFFFF, ${routeInfo.color}, ${routeInfo.color}, ${routeInfo.color}, ${routeInfo.color}, ${routeInfo.color}, ${routeInfo.color}, #FFFFFF)` }} />
            <img className="blue-arrow" src={blue_vector} alt='icon'/>
        </>

    )
}
export default VerticalLine;