import React from 'react'
import './TransferInfo.scss'
// import { NERE_INFO } from '../../../mockData/NERE_INFO'
// import BussIco from '../../../assets/icons/bus.png'
import {GLOBAL_URL} from "../../../assets/const/CONSTANTS";
import { nanoid } from 'nanoid'


const TransferInfo: React.FC<any> = ({transferInfoArr}) => {
    // console.log('transferInfoArr[0].icons - ', transferInfoArr[0].icons)
    // console.log('Math.random() - ', Math.random())

    return (
        <>
            <div className='transfer-caption'>
                Пересадка на
            </div>
            {transferInfoArr ?
                <div className="mainTransfer">{transferInfoArr.map((item: { index: any; icons: any }) =>
                    <div className='nereTransfer' key={nanoid()}>
                        {item.icons.map((srcIcon: any) =>
                            <div className='icoBus icoMock' key={nanoid()}>
                                <img className='icoSize' src={`http://${GLOBAL_URL}:8080${srcIcon}`} alt='nere-shop-ico'/>
                            </div>
                        )}
                        {/*<div className='icoBus icoMock'>*/}
                        {/*    /!*<img src={BussIco} alt='bus-ico' className='icoBusBG'/>*!/*/}
                        {/*    <img src={`http://${GLOBAL_URL}:8080${item.icons[0]}`} alt='nere-shop-ico'/>*/}
                        {/*</div>*/}
                        {/*<div className='transferTrl icoMock'>*/}
                        {/*    <img src={`http://${GLOBAL_URL}:8080${item.icons[1]}`} alt='nere-shop-ico'/>*/}
                        {/*</div>*/}
                        {/*<div className='transferTrm icoMock'>*/}
                        {/*    <img src={`http://${GLOBAL_URL}:8080${item.icons[0]}`} alt='nere-shop-ico'/>*/}
                        {/*</div>*/}
                        {/*<div className='transferAvt icoMock'>*/}
                        {/*    <img src={`http://${GLOBAL_URL}:8080${item.icons[0]}`} alt='nere-shop-ico'/>*/}
                        {/*</div>*/}

                    </div>
                )}
                </div>
                :
                null
            }

        </>

    )
}
export default TransferInfo