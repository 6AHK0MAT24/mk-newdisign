import React from 'react'
import './TopTextInfo.scss'
import {nanoid} from "nanoid";
import {GLOBAL_URL} from "../../../assets/const/CONSTANTS";

let currentStop:any = null

const TopTextInfo: React.FC<any> = (routeInfo) => {

    if (routeInfo.routeInfo && routeInfo.stopBegin) {
        // console.log('TopTextInfo routeInfo - ', routeInfo.routeInfo.stops)
        // console.log('TopTextInfo stopBegin - ', routeInfo.stopBegin.index)
        // console.log('Нужна остановка - ', routeInfo.routeInfo.stops[routeInfo.stopBegin.index])
        // console.log('currentStop iconsBefore - ', currentStop.iconsBefore)
        // console.log('currentStop iconsAfter- ', currentStop.iconsAfter)
        currentStop = routeInfo.routeInfo.stops[routeInfo.stopBegin.index]
    }
    return (
        <>
            {currentStop ?
                <div className= 'topText'
                style={{backgroundColor: `${routeInfo.color}` }}
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