import React from 'react'
import './MediaPanel.scss'
import TopValueInfo from "../TopValueInfo/TopValueInfo";
import VerticalLine from "../VerticalLine/VerticalLine";
import StopsInfo from "../StopsInfo/StopsInfo";
import BottomInfo from "../BottomInfo/BottomInfo";
import TopTextInfo from "../TopTextInfo/TopTextInfo";
import NereInfo from "../Nere/NereInfo";
import TransferInfo from "../Transfer/TransferInfo";

const MediaPanel: React.FC<any> = ({panelData}) => {
    // console.log('panelData - ', panelData.speedTS)
    // console.log('route - ', panelData.routeInfo)
    return (
        <div className="leftPanel">
            <TopValueInfo
                speedInfo={panelData.speedTS}
                tempInfo={panelData.tempInside}
            />
            {/*<TopTextInfo />*/}

            <VerticalLine />
            <StopsInfo
                routeInfo = {panelData.routeInfo}
            />
            {/**/}
            {/*<NereInfo />*/}
            {/**/}
            {/*<TransferInfo />*/}


            <BottomInfo />
        </div>
    )
}
export default MediaPanel