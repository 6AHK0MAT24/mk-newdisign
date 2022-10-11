import React from 'react'
import './StopsInfo.scss'
// import { ROUTE, STOP_TIMES } from '../../../mockData/STOP_TIMES'
// import { ROUTE, STOP_TIMES } from '../../../mockData/STOP_TIMES_SOCKET'
// import { ROUTE, STOP_TIMES } from '../../../mockData/STOP_TIMES_LOAD'

let STOP_TIMES: any = {
    "type":"STOP_TIMES",
    "stops":[
        {
            "index":0,
            "time":1
        },
        {
            "index":1,
            "time":1
        }
    ]
}

let ROUTE: any = {
    "type": "ROUTE",
    "icon": "/sdcard/content/icons/1663739807885.svg",
    "color": "#ADD8E6",
    "stops":[
        {
            "index":0,
            "iconsBefore":[

            ],
            "nameRus":"Идет загрузка",
            "nameEng":"Loading",
            "iconsAfter":[

            ],
            "transfers":[

            ],
            "poi":[

            ]
        },
        {
            "index":1,
            "iconsBefore":[

            ],
            "nameRus":"Идет загрузка",
            "nameEng":"Loading",
            "iconsAfter":[

            ],
            "transfers":[

            ],
            "poi":[

            ]
        }
    ]
}

// console.log('ROUTE - ', ROUTE)
// console.log('STOP_TIMES - ', STOP_TIMES)
ROUTE.stops.map((item: { index: any }) => {
        // routeInfo.routeInfo.stops.map((item: { index: any }) => {
        // console.log('item - ', item)
        // console.log('item.index - ', item.index)
        //     console.log('STOP_TIMES.stops - ', STOP_TIMES.stops)
        const timeStop = STOP_TIMES.stops.find((ind: { index: any }) => ind.index === item.index).time
        // console.log('timeStop - ', timeStop)
        Object.assign(item, {timeStop: timeStop});
    }
)

const StopsInfo: React.FC<any> = (routeInfo) => {
    console.log('routeInfo.stopEnd - ', routeInfo.stopEnd)
    // console.log('routeInfo.stopTimes.stops - ', routeInfo.stopTimes.stops)
    // console.log('routeInfo.routeInfo.stops - ', routeInfo.routeInfo.stops)

    if (routeInfo.stopTimes.stops && routeInfo.routeInfo.stops) {
        // console.log("ЕСТЬ!")
        ROUTE = routeInfo.routeInfo
        STOP_TIMES = routeInfo.stopTimes
        // console.log('new ROUTE - ', ROUTE)
        // console.log('new STOP_TIMES - ', STOP_TIMES)
        // console.log('STOP_TIMES.stops - ', STOP_TIMES.stops)
        ROUTE.stops.map((item: { index: any }) => {
                // routeInfo.routeInfo.stops.map((item: { index: any }) => {
                // console.log('item - ', item)
                // console.log('item.index - ', item.index)
                //     console.log('STOP_TIMES.stops - ', STOP_TIMES.stops)
            if (STOP_TIMES.stops) {
                const timeStop = STOP_TIMES?.stops.find((ind: { index: any }) => ind.index === item.index)
                if(timeStop){
                    // console.log('timeStop - ', timeStop)
                    Object.assign(item, {timeStop: timeStop.time});
                }

            } else {
                // console.log('STOP_TIMES.stop НЕТ')
            }

            }
        )

    } else {
        // console.log("Нет!")
    }

    // const ROUTE = routeInfo.routeInfo.stops
    // const STOP_TIMES = routeInfo.stopTimes.stops





    // console.log('ROUTE with Time - ', ROUTE.stops);
    // console.log('STOP_TIMES - ', STOP_sTIMES.stops)

    return (
        <>
            <div className="mainTrip">{ROUTE.stops.map((item: { index: any; timeStop: any; nameRus: any; nameEng: any }) =>
                <div className='tripInfo' key={item.index}>
                    {item.timeStop && routeInfo.stopEnd && item.index >= routeInfo.stopEnd.index ?
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