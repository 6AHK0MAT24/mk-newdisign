import React from 'react'
import './TopValueInfo.scss'

const TopValueInfo: React.FC<any> = ({speedInfo, tempInfo}) => {
    // console.log('speedTS - ', speedInfo.speed)
    // console.log('tempInfo - ', tempInfo.temperature)

    function formatDate(date: Date) {
        let dd: any = date.getDate();
        if (dd < 10) dd = '0' + dd;

        let mm: any = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        let yy:any = date.getFullYear() % 100;
        if (yy < 10) yy = '0' + yy;

        return dd + '.' + mm + '.' + yy;
    }

    function formatTime(date: Date) {
        let HH: any = date.getHours();
        if (HH < 10) HH = HH + '0';

        let MM: any = date.getMinutes();
        if (MM < 10) MM = MM + '0';

        return HH + ':' + MM;
    }


    const dateNow = new Date()

    return (
        <div className='topInfo'>
            <div className='topTime'>{formatTime(dateNow)}</div>
            <div className='topDate'>{formatDate(dateNow)}</div>
            <div className='topSpeed'>{speedInfo.speed} км/ч</div>
            <div className='topTemp'>+ {tempInfo.temperature}° в салоне</div>
        </div>
    )
}

export default TopValueInfo;