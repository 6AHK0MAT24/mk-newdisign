import React from 'react'
import './StopsInfo.scss'
import { ROUTE, STOP_TIMES } from '../../../mockData/STOP_TIMES'


const StopsInfo: React.FC<any> = () => {

    ROUTE.stops.map((item: { index: any }) => {
        // console.log(item.index)
            const timeStop = STOP_TIMES.stops.find((ind: { index: any }) => ind.index === item.index).time
            Object.assign(item, {timeStop: timeStop});
    }
    )

    // console.log('ROUTE - ', ROUTE.stops);
    // console.log('STOP_TIMES - ', STOP_TIMES.stops)

    return (
        <>
            <div className="mainTrip">{ROUTE.stops.map((item: { index: any; timeStop: any; nameRus: any; nameEng: any }) =>
                <div className='tripInfo' key={item.index}>
                    <div className='timeInfo'>{item.timeStop} мин</div>
                    <div className='roundPoint'></div>
                    <div className= {item.index === 0 ? 'textStop activeStop' : 'textStop'}
                         // style={{backgroundColor: item.index === 0 ? "red" : "white"}} Подключение цвета возможно через инлайн стили когдад будут приходить данные
                    >
                        <p className='ruTextStop'>{item.nameRus}</p>
                        <p className='enTextStop'>{item.nameEng}</p>
                    </div>
                </div>
            )}
            </div>
        </>

    )
}
export default StopsInfo