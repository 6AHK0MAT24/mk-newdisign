import React from 'react'
import './NereInfo.scss'
// import { ROUTE, STOP_TIMES } from '../../../mockData/STOP_TIMES'
// import { NERE_INFO } from '../../../mockData/NERE_INFO'
// import NereShopIco from '../../../assets/icons/nere-shop.png'
import {GLOBAL_URL} from "../../../assets/const/CONSTANTS"
import {nanoid} from "nanoid";


const NereInfo: React.FC<any> = ({nereInfoArr, newStyles}) => {

    return (
        <>
            <div className={newStyles ? 'nere-caption' : 'nere-caption new-mainNere'}>
                Рядом
            </div>
            <div className={newStyles ? 'mainNere' :'mainNere new-mainNere'}>{nereInfoArr.map((item: { index: any; timeStop: any; name: any; icon: any;}) =>
                <div className='nereInfo new-nereInfo' key={nanoid()}>
                    <div className='icoNereInfo'>
                        <img className='icoSize' src={`http://${GLOBAL_URL}:8080${item.icon}`} alt='nere-shop-ico'/>
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