import React from 'react'
import './BottomInfo.scss'
import iconM from '../../../assets/icons/m.png'
import icon9 from '../../../assets/icons/9.png'

const BottomInfo: React.FC<any> = (routeInfo) => {
    // console.log('BottomInfo - ', routeInfo)
    let lastStop = null
    let iconsAfter = []
    let iconsBefore = []

    if (routeInfo.routeInfo.stops){
        lastStop = routeInfo.routeInfo.stops.reduce((acc: { index: number }, curr: { index: number }) => acc.index > curr.index ? acc : curr);
        iconsAfter = lastStop.iconsAfter
        iconsBefore = lastStop.iconsAfter
        // console.log('lastStop - ', lastStop)
        // console.log('iconsAfter - ', iconsAfter)
        // console.log('iconsBefore - ', iconsBefore)
    }

    const urlToIcon = `http://194.85.217.98:8080` + routeInfo.routeInfo.icon
    // console.log('urlToIcon - ', urlToIcon)
    return (
        <div className='bottomInfo'>
            <div className='tripId'>
                <div className='tripIdText'>
                    <img className="metroIcon" src={urlToIcon}  alt='icon'/>
                </div>
            </div>
            <div className='stopInfo'>
                <p className='ruTextStop'>
                    <img className="metroIcon" src={iconM}  alt='icon'/>
                    <img className="numberIcon" src={icon9}  alt='icon'/>
                    {lastStop ? lastStop.nameRus : 'Данные загружаются'}
                </p>
                <p className='enTextStop'>
                    {lastStop ? lastStop.nameEng : 'Данные загружаются'}
                </p>
            </div>
        </div>
    )
}

export default BottomInfo;