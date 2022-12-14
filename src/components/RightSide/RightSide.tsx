import React from 'react'
import VideoComponent from "./VideoComponent/VideoComponent";
import './RightSide.scss'

const RightSide: React.FC<any> = (videoData) => {
    return (
        <div className='main-size'>
            <VideoComponent
                videoData = {videoData}
            />
        </div>
    )
}
export default RightSide