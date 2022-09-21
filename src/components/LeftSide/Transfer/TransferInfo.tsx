import React from 'react'
import './TransferInfo.scss'
import { NERE_INFO } from '../../../mockData/NERE_INFO'
import BussIco from '../../../assets/icons/bus.png'


const TransferInfo: React.FC<any> = () => {

    return (
        <>
            <div className='nere-caption'>
                Пересадка на
            </div>
            <div className="mainNere">{NERE_INFO.stops.map((item: { index: any; timeStop: any; nameRus: any; nameEng: any }) =>
                <div className='nereInfo' key={item.index}>
                    <div className='icoBus'>
                        <img src={BussIco} alt='bus-ico' className='icoBusBG'/>
                    </div>
                    <div className='transferTrl'>
                        т14
                    </div>
                    <div className='transferTrm'>
                        7
                    </div>
                    <div className='transferAvt'>
                        c633
                    </div>

                </div>
            )}
            </div>
        </>

    )
}
export default TransferInfo