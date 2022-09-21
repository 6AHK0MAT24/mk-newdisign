import React from 'react'
import './MediaPanel.scss'
// import TopValueInfo from "../TopValueInfo/TopValueInfo";
import VerticalLine from "../VerticalLine/VerticalLine";
import StopsInfo from "../StopsInfo/StopsInfo";
import BottomInfo from "../BottomInfo/BottomInfo";
import TopTextInfo from "../TopTextInfo/TopTextInfo";
import NereInfo from "../Nere/NereInfo";
import TransferInfo from "../Transfer/TransferInfo";

const MediaPanel: React.FC<any> = () => {
    return (
        <div className="leftPanel">
            {/*<TopValueInfo />*/}
            <TopTextInfo />

            {/*<VerticalLine />*/}
            {/*<StopsInfo />*/}

            {/*<NereInfo />*/}
            <TransferInfo />


            <BottomInfo />
        </div>
    )
}
export default MediaPanel