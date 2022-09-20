import React from 'react'
import './VerticalLine.scss'
import blue_vector from '../../../assets/icons/blue_vector.png'

const VerticalLine: React.FC<any> = () => {
    return (
        <>
            <div className="vertLine" />
            <img className="blue-arrow" src={blue_vector} alt='icon'/>
        </>

    )
}
export default VerticalLine;