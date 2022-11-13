import React from 'react'
import './BottomInfo.scss'
// import iconM from '../../../assets/icons/m.png'
// import icon9 from '../../../assets/icons/9.png'
import {GLOBAL_URL} from "../../../assets/const/CONSTANTS"
import {nanoid} from "nanoid";

const BottomInfo: React.FC<any> = (routeInfo) => {
    let lastStop = null

    if (routeInfo.routeInfo.stops && routeInfo.routeInfo.stops.length > 0){
        lastStop = routeInfo.routeInfo.stops.reduce((acc: { index: number }, curr: { index: number }) => acc.index > curr.index ? acc : curr);

    }

    const urlToIcon = `http://${GLOBAL_URL}:8080` + routeInfo.routeInfo.icon
    return (
        <>
            {lastStop && routeInfo.routeInfo.stops.length > 0 ?
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
                            {/*<img className="metroIcon" src={iconM}  alt='icon'/>*/}
                            {/*<img className="numberIcon" src={icon9}  alt='icon'/>*/}
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