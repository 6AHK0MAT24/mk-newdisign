import React from 'react'
import './StopsInfo.scss'
// import { ROUTE, STOP_TIMES } from '../../../mockData/STOP_TIMES'
import { ROUTE, STOP_TIMES } from '../../../mockData/STOP_TIMES_SOCKET'


const StopsInfo: React.FC<any> = (routeInfo) => {


    ROUTE.stops.map((item: { index: any }) => {
        console.log('item - ', item)
        console.log('item.index - ', item.index)
            console.log('STOP_TIMES.stops - ', STOP_TIMES.stops)
            const timeStop = STOP_TIMES.stops.find((ind: { index: any }) => ind.index === item.index).time
            console.log('timeStop - ', timeStop)
            Object.assign(item, {timeStop: timeStop});
    }
    )

    console.log('ROUTE - ', ROUTE.stops);
    // console.log('STOP_TIMES - ', STOP_sTIMES.stops)

    return (
        <>
            <div className="mainTrip">{ROUTE.stops.map((item: { index: any; timeStop: any; nameRus: any; nameEng: any }) =>
                <div className='tripInfo' key={item.index}>
                    {item.timeStop ?
                        <>
                            <div className='timeInfo'>{item.timeStop} мин</div>
                            <div className='roundPoint'></div>
                            <div className= {item.index === 0 ? 'textStop activeStop' : 'textStop'}
                                // style={{backgroundColor: item.index === 0 ? "red" : "white"}} Подключение цвета возможно через инлайн стили когдад будут приходить данные
                            >
                                <p className='ruTextStop'>{item.nameRus}</p>
                                <p className='enTextStop'>{item.nameEng}</p>
                            </div>
                        </>
                        :
                        null
                    }

                </div>
            )}
            </div>
        </>

    )
}
export default StopsInfo