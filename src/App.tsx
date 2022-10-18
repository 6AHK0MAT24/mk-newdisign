import React, {useEffect, useState} from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import LeftSide from "./components/LeftSide/LeftSide";
import RightSide from "./components/RightSide/RightSide";
import {GLOBAL_URL} from "./assets/const/CONSTANTS"
import './App.scss';

// const ws = new WebSocket('ws://192.168.100.225:23245')
const ws = new WebSocket(`ws://${GLOBAL_URL}:23245`)

// ws.onmessage = (event) => {
//     console.log("Получены данные " + event.data)
// };


function App() {
    const [socketUrl, setSocketUrl] = useState(`ws://${GLOBAL_URL}:23245`);
    const [messageHistory, setMessageHistory] = useState([]);
    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

    const [routeInfo, setRouteInfo] = useState([])
    const [speedTS, setSpeedTS] = useState([])
    const [tempInside, setTempInside] = useState([])
    const [stopTimes, setStopTimes] = useState([])
    const [stopBegin, setStopBegin] = useState(null)
    const [stopEnd, setStopEnd] = useState(null)
    const [timeSync, setTimeSync] = useState([])
    const [playEmergency, setPlayEmergency] = useState([])
    const [playStream, setPlayStream] = useState([])
    const [showTransfer, setShowTransfer] = useState(false)

    const [videoForPlay, setVideoForPlay] = useState([])

    useEffect(() => {
        if (lastMessage !== null) {
            // @ts-ignore
            setMessageHistory((prev) => prev.concat(lastMessage));
        }
    }, [lastMessage, setMessageHistory]);
    // console.log('lastMessage - ', lastMessage?.data)

    useEffect(()=>{
        switch (lastMessage?.data.type) {
            case 'ROUTE':
                console.log('lastMessage?.data.type')
                setRouteInfo(JSON.parse((lastMessage?.data)))
                break;
            case 'SPEED':
                setSpeedTS(JSON.parse((lastMessage?.data)))
                break;
            case 'TEMPERATURE':
                setTempInside(JSON.parse((lastMessage?.data)))
                break;
            case 'STOP_TIMES':
                setStopTimes(JSON.parse((lastMessage?.data)))
                break;
            case 'STOP_BEGIN':
                setStopBegin(JSON.parse((lastMessage?.data)))
                setShowTransfer(true)
                break;
            case 'STOP_END':
                setStopEnd(JSON.parse((lastMessage?.data)))
                setShowTransfer(false)
                break;
            case 'TIMER_SYNC_INFO':
                setTimeSync(JSON.parse((lastMessage?.data)))
                break;
            case 'PLAY_VIDEO':
                setVideoForPlay(JSON.parse((lastMessage?.data)))
                break;
            case 'PLAY_EMERGENCY':
                setPlayEmergency(JSON.parse((lastMessage?.data)))
                break;
            case 'PLAY_STREAM':
                setPlayStream(JSON.parse((lastMessage?.data)))
                break;
            default:
                console.log('Данных нет, ошибка сервера')
        }
    },[])

    useEffect(() => {
        ws.addEventListener('message', (e) => {
            switch (JSON.parse((e.data)).type) {
                case 'ROUTE':
                    // console.log('e.data - ', e.data)
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
                case 'STOP_BEGIN':
                    setStopBegin(JSON.parse((e.data)))
                    setShowTransfer(true)
                    break;
                case 'STOP_END':
                    setStopEnd(JSON.parse((e.data)))
                    setShowTransfer(false)
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
                stopBegin={stopBegin}
                stopEnd={stopEnd}
                timeSync={timeSync}
                showTransfer={showTransfer}
            />
            <RightSide
                videoForPlay={videoForPlay}
                playEmergency={playEmergency}
                playStream={playStream}
                sendMessage={sendMessage}
                ws={ws}
            />
        </div>
    );
}

export default App;
