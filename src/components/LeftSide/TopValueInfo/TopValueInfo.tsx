import React from 'react'
import './TopValueInfo.scss'

const TopValueInfo: React.FC<any> = () => {
    return (
        <div className='topInfo'>
            <div className='topTime'>11:03</div>
            <div className='topDate'>28.01.2022</div>
            <div className='topSpeed'>17 км/ч</div>
            <div className='topTemp'>+ 23° в салоне</div>
        </div>
    )
}

export default TopValueInfo;