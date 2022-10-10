import React, {useEffect, useState} from 'react';
import LeftSide from "./components/LeftSide/LeftSide";
import RightSide from "./components/RightSide/RightSide";
import './App.scss';

// const ws = new WebSocket('ws://192.168.100.225:23245')
const ws = new WebSocket('ws://194.85.217.98:23245')

function App() {
    const [routeInfo, setRouteInfo] = useState([])
    const [speedTS, setSpeedTS] = useState([])
    const [tempInside, setTempInside] = useState([])
    const [stopTimes, setStopTimes] = useState([])
    const [stopEnd, setStopEnd] = useState([])
    const [timeSync, setTimeSync] = useState([])
    const [playEmergency, setPlayEmergency] = useState([])
    const [playStream, setPlayStream] = useState([])

    const [videoForPlay, setVideoForPlay] = useState([])
    useEffect(() => {
        ws.addEventListener('message', (e) => {
            // console.log('Длина data - ', JSON.parse((e.data.length)))
            // console.log('type - ', (e.data))
            // console.log('JSON.parse((e.data)) - ', JSON.parse((e.data)).type)

            switch (JSON.parse((e.data)).type) {
                case 'ROUTE':
                    setRouteInfo(JSON.parse((e.data)))
                    break;
                case 'SPEED':
                    setSpeedTS(JSON.parse((e.data)))
                    break;
                case 'TEMPERATURE':
                    setTempInside(JSON.parse((e.data)))
                    break;
                case 'STOP_TIMES':
                    setStopTimes(JSON.parse((e.data)))
                    break;
                case 'STOP_END':
                    setStopEnd(JSON.parse((e.data)))
                    break;
                case 'TIMER_SYNC_INFO':
                    setTimeSync(JSON.parse((e.data)))
                    break;
                case 'PLAY_VIDEO':
                    setVideoForPlay(JSON.parse((e.data)))
                    break;
                case 'PLAY_EMERGENCY':
                    setPlayEmergency(JSON.parse((e.data)))
                    break;
                case 'PLAY_STREAM':
                    setPlayStream(JSON.parse((e.data)))
                    break;
                default:
                    console.log('Данных нет, ошибка сервера')
            }
        })
    }, [])
    return (
        <div className="App">
            <LeftSide
                routeInfo={routeInfo}
                speedTS={speedTS}
                tempInside={tempInside}
                stopTimes={stopTimes}
                stopEnd={stopEnd}
                timeSync={timeSync}
            />
            <RightSide
                videoForPlay={videoForPlay}
                playEmergency={playEmergency}
                playStream={playStream}
            />
        </div>
    );
}

export default App;
