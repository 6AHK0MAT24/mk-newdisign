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

        let yy: any = date.getFullYear() % 100;
        if (yy < 10) yy = '0' + yy;

        return dd + '.' + mm + '.' + yy;
    }

    function newTime(date: Date) {
        return [date.getHours(), date.getMinutes()].map(function (x) {
            return x < 10 ? "0" + x : x
        }).join(":")
    }


    const dateNow = new Date()

    return (
        <div className='topInfo'>
            <div className='topTime'>{newTime(dateNow)}</div>
            <div className='topDate'>{formatDate(dateNow)}</div>
            <div className='topSpeed'>{speedInfo.speed} км/ч</div>
            {tempInfo && tempInfo.temperature !== undefined ?
                <div className='topTemp'>{tempInfo.temperature}° в салоне</div>
                :
                null}
        </div>
    )
}

export default TopValueInfo;
