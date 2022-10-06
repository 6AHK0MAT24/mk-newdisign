import React from 'react'
import MediaPanel from "./MediaPanel/MediaPanel";
import './LeftSide.scss'

const LeftSide: React.FC<any> = (panelData) => {
    // console.log('routeInfo - ', panelData.routeInfo)
    // console.log('speedTS - ', panelData.speedTS)
    // console.log('tempInside - ', panelData.tempInside)
    // console.log('stopTimes - ', panelData.stopTimes)
    // console.log('stopEnd - ', panelData.stopEnd)
    // console.log('timeSync - ', panelData.timeSync)
    return (
        <div className='main-size'>
            <MediaPanel
                panelData={panelData}
            />
        </div>
    )
}
export default LeftSide