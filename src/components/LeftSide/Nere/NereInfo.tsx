import React from 'react'
import './NereInfo.scss'
import { ROUTE, STOP_TIMES } from '../../../mockData/STOP_TIMES'
import { NERE_INFO } from '../../../mockData/NERE_INFO'
import NereShopIco from '../../../assets/icons/nere-shop.png'


const NereInfo: React.FC<any> = () => {

    return (
        <>
            <div className='nere-caption'>
                Рядом
            </div>
            <div className="mainNere">{NERE_INFO.stops.map((item: { index: any; timeStop: any; nameRus: any; nameEng: any }) =>
                <div className='nereInfo' key={item.index}>
                    <div className='icoNereInfo'>
                        <img src={NereShopIco} alt='nere-shop-ico'/>
                    </div>
                    <div className= 'textInfo'
                    >
                        <p className='ruTextNere'>{item.nameRus}</p>
                        {/*<p className='enTextNere'>{item.nameEng}</p>*/}
                    </div>
                </div>
            )}
            </div>
        </>

    )
}
export default NereInfo