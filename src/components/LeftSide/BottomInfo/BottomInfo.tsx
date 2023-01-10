import React, {useState} from 'react'
import './BottomInfo.scss'
import {GLOBAL_URL} from "../../../assets/const/CONSTANTS"
import {nanoid} from "nanoid";

const BottomInfo: React.FC<any> = (routeInfo) => {
    const [urlToIcon, setUrlToIcon] = useState(`http://${GLOBAL_URL}:8080` + routeInfo.routeInfo.icon)
    let lastStop = null

    if (routeInfo.routeInfo.stops && routeInfo.routeInfo.stops.length > 0){
        lastStop = routeInfo.routeInfo.stops.reduce((acc: { index: number }, curr: { index: number }) => acc.index > curr.index ? acc : curr);
    }

    if (routeInfo.routeInfo.icon && urlToIcon !== `http://${GLOBAL_URL}:8080` + routeInfo.routeInfo.icon) {
        setUrlToIcon (`http://${GLOBAL_URL}:8080` + routeInfo.routeInfo.icon)
    }
    return (
        <>
            {lastStop && routeInfo.routeInfo.stops.length > 0 && urlToIcon !== undefined ?
                <div className='bottomInfo'>
                    <div className='tripId'>
                        <div className='tripIdText'>
                            <img className="metroIcon" src={urlToIcon}  alt='icon'/>
                        </div>
                    </div>
                    <div className='stopInfo'>
                        <p className='ruTextStop'>
                            {lastStop.iconsBefore.map((srcIcon: any) =>
                                <div className='icoBus icoMock' key={nanoid()}>
                                    <img src={`http://${GLOBAL_URL}:8080${srcIcon}`} alt='nere-shop-ico'/>
                                </div>
                            )}
                            {lastStop ? lastStop.nameRus : 'Данные загружаются'}
                            {lastStop.iconsAfter.map((srcIcon: any) =>
                                <div className='icoBus icoMock' key={nanoid()}>
                                    <img src={`http://${GLOBAL_URL}:8080${srcIcon}`} alt='nere-shop-ico'/>
                                </div>
                            )}
                        </p>
                        <p className='enTextStop'>
                            {lastStop ? lastStop.nameEng : 'Данные загружаются'}
                        </p>
                    </div>
                </div>
                :
                null}
        </>
    )
}
export default BottomInfo;
