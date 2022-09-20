import React from 'react'
import MediaPanel from "./MediaPanel/MediaPanel";
import './LeftSide.scss'

const LeftSide: React.FC<any> = (data) => {
    console.log('data for work - ', data)
    return (
        <div className='main-size'>
            <MediaPanel />
        </div>
    )
}
export default LeftSide