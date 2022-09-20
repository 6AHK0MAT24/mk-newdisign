import React from 'react'
import './BottomInfo.scss'
import iconM from '../../../assets/icons/m.png'
import icon9 from '../../../assets/icons/9.png'

const BottomInfo: React.FC<any> = () => {
    return (
        <div className='bottomInfo'>
            <div className='tripId'>
                <div className='tripIdText'>
                    с929
                </div>
            </div>
            <div className='stopInfo'>
                <p className='ruTextStop'>
                    <img className="metroIcon" src={iconM}  alt='icon'/>
                    <img className="numberIcon" src={icon9}  alt='icon'/>
                    Южная
                </p>
                <p className='enTextStop'>Yuznaia</p>
            </div>
        </div>
    )
}

export default BottomInfo;