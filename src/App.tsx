import React, {useEffect, useState} from 'react';
import LeftSide from "./components/LeftSide/LeftSide";
import RightSide from "./components/RightSide/RightSide";
import './App.scss';

const ws = new WebSocket('ws://192.168.100.225:23245')

// let recievedData: any = null

function App() {
    const [messages, setMessages] = useState([])
    useEffect(() => {
        ws.addEventListener('message', (e)=>{
            // recievedData = JSON.parse((e.data))
            setMessages(JSON.parse((e.data)))
        })
    }, [])
    // console.log('messages', messages)
  return (
    <div className="App">
      <LeftSide data = {messages} />
      <RightSide />
    </div>
  );
}

export default App;
