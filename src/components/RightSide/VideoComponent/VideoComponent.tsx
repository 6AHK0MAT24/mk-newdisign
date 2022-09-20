import React from 'react'
import testImg from './test-img.png'
import './VideoComponent.scss'

const VideoComponent: React.FC<any> = () => {
    return (
        <div>
            <img src={testImg} width="100%" height="100%"  alt='icon'/>
        </div>
    )
}
export default VideoComponent