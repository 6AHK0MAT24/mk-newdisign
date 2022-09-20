import React from 'react'
import './TopTextInfo.scss'

const TopTextInfo: React.FC<any> = () => {
    return (
        <div className= 'topText'
            // style={{backgroundColor: item.index === 0 ? "red" : "white"}} Подключение цвета возможно через инлайн стили когдад будут приходить данные
        >
            <p className='ruBigText'>Ремзавод</p>
            <p className='enBigText'>Remzavod</p>
        </div>
    )
}

export default TopTextInfo;