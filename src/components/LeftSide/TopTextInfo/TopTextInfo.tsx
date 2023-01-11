import React from 'react'
import './TopTextInfo.scss'
import {nanoid} from "nanoid";
import {GLOBAL_URL} from "../../../assets/const/CONSTANTS";

let currentStop: any = null

const TopTextInfo: React.FC<any> = (routeInfo) => {

    if (routeInfo.routeInfo && routeInfo.stopBegin) {
        // console.log('routeInfo.routeInfo.stops - ', routeInfo.routeInfo.stops)
        // console.log('routeInfo.stopBegin - ', routeInfo.stopBegin)

        // const stopInfo = panelData.routeInfo.stops.find((stop: { index: number; }) => stop.index === panelData.stopBegin.index)

        currentStop = routeInfo.routeInfo.stops.find((stop: {index: number}) => stop.index === routeInfo.stopBegin.index)
    }
    return (
        <>
            {currentStop ?
                <div className='topText'
                     style={{backgroundColor: `${routeInfo.color}`}}
                    // style={{backgroundColor: item.index === 0 ? "red" : "white"}} Подключение цвета возможно через инлайн стили когдад будут приходить данные
                >
                    {currentStop.iconsBefore.map((srcIcon: any) =>
                        <div className='icoBus icoMock' key={nanoid()}>
                            <img src={`http://${GLOBAL_URL}:8080${srcIcon}`} alt='nere-shop-ico'/>
                        </div>
                    )}
                    <p className='ruBigText'>{currentStop.nameRus}</p>
                    <p className='enBigText'>{currentStop.nameEng}</p>
                    {currentStop.iconsAfter.map((srcIcon: any) =>
                        <div className='icoBus icoMock' key={nanoid()}>
                            <img src={`http://${GLOBAL_URL}:8080${srcIcon}`} alt='nere-shop-ico'/>
                        </div>
                    )}
                </div>
                :
                null
            }
        </>
    )
}

export default TopTextInfo;
