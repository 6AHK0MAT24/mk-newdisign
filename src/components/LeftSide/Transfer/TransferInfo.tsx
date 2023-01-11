import React from 'react'
import './TransferInfo.scss'
import {GLOBAL_URL} from "../../../assets/const/CONSTANTS";
import {nanoid} from 'nanoid'


const TransferInfo: React.FC<any> = ({transferInfoArr}) => {

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
                                <img className='icoSize' src={`http://${GLOBAL_URL}:8080${srcIcon}`}
                                     alt='nere-shop-ico'/>
                            </div>
                        )}

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
