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

// let transferInfoArr: any = [
//         {
//             "icons":[
//                 "/sdcard/content/icons/1663739807925.svg",
//                 "/sdcard/content/icons/1663739808208.svg",
//                 "/sdcard/content/icons/1663739808027.svg",
//                 "/sdcard/content/icons/1663739807951.svg",
//                 "/sdcard/content/icons/1663739808064.svg",
//                 "/sdcard/content/icons/1663739807974.svg"
//             ]
//         }
//     ]

// let nereInfoArr: any = [
//     {
//         "icon":"/sdcard/content/icons/1663739808000.svg",
//         "name":"Точка интереса №1"
//     }
// ]

const MediaPanel: React.FC<any> = ({panelData}) => {
    if (panelData.stopBegin){
        // console.log('panelData.routeInfo.stops - ', panelData.routeInfo.stops)
        // console.log('panelData.stopBegin - ', panelData.stopBegin)
        // console.log('Рядом - ', panelData.routeInfo.stops[panelData.stopBegin.index].poi)
        // console.log('Пересадки - ', panelData.routeInfo.stops[panelData.stopBegin.index].transfers)
        nereInfoArr = panelData.routeInfo.stops[panelData.stopBegin.index].poi
        transferInfoArr = panelData.routeInfo.stops[panelData.stopBegin.index].transfers
    }
    // console.log('panelData.stopBegin - ', panelData.stopBegin)
    // console.log('panelData.stopEnd - ', panelData.stopEnd)
    // console.log('panelData.showTransfer - ', panelData.showTransfer)
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
                    <div className='nereTransferDiv'>
                        <div className = 'onlyTransferInfo'>
                            <TransferInfo
                                transferInfoArr = {transferInfoArr}
                            />
                        </div>
                        <div className = 'onlyNereInfo'>
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
                        <NereInfo
                            nereInfoArr = {nereInfoArr}
                            newStyles = {false}
                        />
                        :
                        null
                    }
                    {transferInfoArr && transferInfoArr.length > 0 && nereInfoArr && nereInfoArr.length === 0 ?
                        <TransferInfo
                            transferInfoArr = {transferInfoArr}
                        />
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