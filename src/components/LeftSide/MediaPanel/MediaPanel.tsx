import React from 'react'
import './MediaPanel.scss'
// import TopValueInfo from "../TopValueInfo/TopValueInfo";
import VerticalLine from "../VerticalLine/VerticalLine";
import StopsInfo from "../StopsInfo/StopsInfo";
import BottomInfo from "../BottomInfo/BottomInfo";
import TopTextInfo from "../TopTextInfo/TopTextInfo";

const MediaPanel: React.FC<any> = () => {
    return (
        <div className="leftPanel">
            {/*<TopValueInfo />*/}
            <TopTextInfo />
            <VerticalLine />
            <StopsInfo />
            <BottomInfo />
        </div>
    )
}
export default MediaPanel