import React from 'react'
import './MediaPanel.scss'
import TopValueInfo from "../TopValueInfo/TopValueInfo";
import VerticalLine from "../VerticalLine/VerticalLine";
import StopsInfo from "../StopsInfo/StopsInfo";
import BottomInfo from "../BottomInfo/BottomInfo";
import TopTextInfo from "../TopTextInfo/TopTextInfo";
import NereInfo from "../Nere/NereInfo";
import TransferInfo from "../Transfer/TransferInfo";


let nereInfoArr: any = null
let transferInfoArr: any = null
let isNereTransfer = true

const MediaPanel: React.FC<any> = ({panelData}) => {

    if (panelData.stopBegin){

        const stopInfo = panelData.routeInfo.stops.find((stop: { index: number; }) => stop.index === panelData.stopBegin.index)
        isNereTransfer = stopInfo !== undefined
        if (isNereTransfer) {
            nereInfoArr = stopInfo.poi
            transferInfoArr = stopInfo.transfers

        }
    }
    return (
        <div className="leftPanel">

            {!panelData.showTransfer ?
                <>
                    <TopValueInfo
                        speedInfo={panelData.speedTS}
                        tempInfo={panelData.tempInside}
                    />
                    <VerticalLine
                        routeInfo={panelData.routeInfo}
                    />
                    <StopsInfo
                        routeInfo={panelData.routeInfo}
                        stopTimes={panelData.stopTimes}
                        stopEnd={panelData.stopEnd}
                    />
                </>

                :
                <>
                {transferInfoArr &&  transferInfoArr.length > 0 && nereInfoArr && nereInfoArr.length > 0 ?
                    <div className={transferInfoArr &&  transferInfoArr.length > 0 && nereInfoArr && nereInfoArr.length > 0 ? 'nereTransferDiv' : 'noClass'}>
                        <div className = {transferInfoArr &&  transferInfoArr.length > 0 && nereInfoArr && nereInfoArr.length > 0 ? 'onlyTransferInfo' : 'noClass'}>
                            <TransferInfo
                                transferInfoArr = {transferInfoArr}
                            />
                        </div>
                        <div className = {transferInfoArr &&  transferInfoArr.length > 0 && nereInfoArr && nereInfoArr.length > 0 ? 'onlyNereInfo' : 'noClass'}>
                            <NereInfo
                                nereInfoArr = {nereInfoArr}
                                newStyles = {true}
                            />
                        </div>


                    </div>
                    : null
                }
                    <TopTextInfo
                        routeInfo={panelData.routeInfo}
                        stopBegin = {panelData.stopBegin}
                    />
                    {nereInfoArr && nereInfoArr.length > 0 && transferInfoArr && transferInfoArr.length === 0 ?
                        <>
                            <NereInfo
                                nereInfoArr = {nereInfoArr}
                                newStyles = {false}
                            />
                        </>

                        :
                        null
                    }
                    {transferInfoArr && transferInfoArr.length > 0 && nereInfoArr && nereInfoArr.length === 0 ?
                        <>
                            <TransferInfo
                                transferInfoArr = {transferInfoArr}
                            />
                        </>

                        :
                        null
                    }

                </>

            }


            <BottomInfo
                routeInfo={panelData.routeInfo}
            />
        </div>
    )
}
export default MediaPanel
