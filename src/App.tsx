import React, {useEffect, useState} from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import LeftSide from "./components/LeftSide/LeftSide";
import RightSide from "./components/RightSide/RightSide";
import './App.scss';

const ws = new WebSocket('ws://192.168.100.225:23245')

function App() {
    const handle = useFullScreenHandle();
    const [messages, setMessages] = useState([])
    useEffect(() => {
        ws.addEventListener('message', (e)=>{
            // recievedData = JSON.parse((e.data))
            setMessages(JSON.parse((e.data)))
        })
    }, [])
    useEffect(()=> {
        handle.enter
    }, [])
    return (
        <div className="App">
            {/*<button onClick={handle.enter}>*/}
            {/*    Enter fullscreen*/}
            {/*</button>*/}
            <FullScreen className="App" handle={handle}>
                <LeftSide data = {messages} />
                <RightSide />
            </FullScreen>

        </div>
    );
}

export default App;
