import React from 'react'
import VideoComponent from "./VideoComponent/VideoComponent";
import './RightSide.scss'

const RightSide: React.FC<any> = () => {
    return (
        <div className='main-size'>
            <VideoComponent />
        </div>
    )
}
export default RightSide