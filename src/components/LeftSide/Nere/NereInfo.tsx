import React from 'react'
import './NereInfo.scss'
import { ROUTE, STOP_TIMES } from '../../../mockData/STOP_TIMES'
import { NERE_INFO } from '../../../mockData/NERE_INFO'
import NereShopIco from '../../../assets/icons/nere-shop.png'
import {GLOBAL_URL} from "../../../assets/const/CONSTANTS"


const NereInfo: React.FC<any> = ({nereInfoArr, newStyles}) => {
    console.log('nereInfoArr - ', nereInfoArr)
    console.log('newStyles - ', newStyles)

    return (
        <>
            <div className={newStyles ? 'nere-caption new-mainNere' : 'nere-caption'}>
                Рядом
            </div>
            <div className={newStyles ? 'mainNere new-mainNere' :'mainNere'}>{nereInfoArr.map((item: { index: any; timeStop: any; name: any; icon: any;}) =>
                <div className='nereInfo' key={item.index}>
                    <div className='icoNereInfo'>
                        <img src={`http://${GLOBAL_URL}:8080${item.icon}`} alt='nere-shop-ico'/>
                    </div>
                    <div className= 'textInfo'
                    >
                        <p className='ruTextNere'>{item.name}</p>
                        {/*<p className='enTextNere'>{item.nameEng}</p>*/}
                    </div>
                </div>
            )}
            </div>
        </>

    )
}
export default NereInfo