import React from 'react'
import './StopsInfo.scss'

let STOP_TIMES: any = {
    "type": "STOP_TIMES",
    "stops": [
        {
            "index": 0,
            "time": 1
        },
        {
            "index": 1,
            "time": 1
        }
    ]
}

let ROUTE: any = {
    "type": "ROUTE",
    "icon": "/sdcard/content/icons/1663739807885.svg",
    "color": "#ADD8E6",
    "stops": [
        {
            "index": 0,
            "iconsBefore": [],
            "nameRus": "Идет загрузка",
            "nameEng": "Loading",
            "iconsAfter": [],
            "transfers": [],
            "poi": []
        },
        {
            "index": 1,
            "iconsBefore": [],
            "nameRus": "Идет загрузка",
            "nameEng": "Loading",
            "iconsAfter": [],
            "transfers": [],
            "poi": []
        }
    ]
}


ROUTE.stops.map((item: { index: any }) => {
        const timeStop = STOP_TIMES.stops.find((ind: { index: any }) => ind.index === item.index).time
        Object.assign(item, {timeStop: timeStop});
    }
)

const StopsInfo: React.FC<any> = (routeInfo) => {

    if (routeInfo.stopTimes.stops && routeInfo.routeInfo.stops) {
        ROUTE = routeInfo.routeInfo
        STOP_TIMES = routeInfo.stopTimes
        ROUTE.stops.map((item: { index: any }) => {
                if (STOP_TIMES.stops) {
                    const timeStop = STOP_TIMES?.stops.find((ind: { index: any }) => ind.index === item.index)
                    if (timeStop) {
                        Object.assign(item, {timeStop: timeStop.time});
                    }

                }

            }
        )

    }

    return (
        <>
            <div
                className="mainTrip">{ROUTE.stops.map((item: { index: any; timeStop: any; nameRus: any; nameEng: any }) =>
                <div className='tripInfo' key={item.index}>
                    {item.timeStop && routeInfo.stopEnd && item.index >= routeInfo.stopEnd.index ?
                        <>
                            <div className='timeInfo'>{item.timeStop} мин</div>
                            <div className='roundPoint'></div>
                            <div className={item.index === 0 ? 'textStop activeStop' : 'textStop'}
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