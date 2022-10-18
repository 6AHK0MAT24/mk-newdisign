import React, {useState} from 'react'
import testImg from './test-img.png'
import './VideoComponent.scss'
import {GLOBAL_URL} from "../../../assets/const/CONSTANTS"
import {log} from "util";

// let mockurlToPlay = 'http://192.168.100.225:8080/sdcard/content/video/advertise/vid-1663921713042.mp4'

const VideoComponent: React.FC<any> = (data) => {
    // console.log('data.videoData - ', data.videoData.videoForPlay)
    // console.log('data.videoData - ', data.videoData)
    // const [urlForPlay, setUrlForPlay] = useState('http://194.85.217.98:8080/sdcard/content/video/showing_plan/vid-1661853390265_temp.mp4')
    // const ws = new WebSocket(`ws://${GLOBAL_URL}:23245`)

    // const [urlForPlay, setUrlForPlay] = useState(`http://${GLOBAL_URL}:8080/sdcard/content/video/showing_plan/ediny_1920х1080.mp4`)
    // const [urlForPlay, setUrlForPlay] = useState(`http://${GLOBAL_URL}:8080/sdcard/content/video/showing_plan/metromost10.mp4`)
    // const [urlForPlay, setUrlForPlay] = useState(`http://${GLOBAL_URL}:8080/sdcard/content/video/showing_plan/mymoscow10.mp4`)
    const [urlForPlay, setUrlForPlay] = useState(`http://${GLOBAL_URL}:8080`+data.videoData.videoForPlay.src)
    // console.log('data in video - ', data.videoData.videoForPlay.src )
    if(data.videoData.videoForPlay.src && urlForPlay !== `http://${GLOBAL_URL}:8080`+data.videoData.videoForPlay.src){
        // console.log('data.videoData.videoForPlay.src- ', `http://${GLOBAL_URL}`+data.videoData.videoForPlay.src)
        // console.log('да')
        setUrlForPlay (`http://${GLOBAL_URL}:8080`+data.videoData.videoForPlay.src)
    }
    // console.log('urlForPlay - ', urlForPlay)
    // const urlToPlay = `http://194.85.217.98:8080` + data.videoData.videoForPlay.src
    // if ( true) {
    //     setUrlForPlay(urlToPlay)
    // }

    // if (mockurlToPlay !== urlToPlay) {
    //
    //     console.log('mockurlToPlay - ', mockurlToPlay)
    // }

    // const mockurlToPlay = `http://192.168.100.225:8080/sdcard/content/video/advertise/vid-1663920055700.mp4`
    const endVideo = () => {
        console.log('endVideo')
        data.videoData.sendMessage(
            {
                "type": "COMPLETE",
                "label": data.videoData.videoForPlay.label
            }
        )
    }


    return (

        <div>
            {data.videoData.videoForPlay.src ?
                <>
                    <video
                        width="100%" height="100%"
                        autoPlay
                        muted
                        onEnded={endVideo}
                    >
                        <source src={urlForPlay}
                                type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </>
                :
                null
            }

            {/*<ReactPlayer url='https://www.youtube.com/watch?v=BQwj6A99oVc' />*/}
            {/*<video width="100%" height="100%">*/}
            {/*    <source  src={urlToPlay} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>*/}
            {/*</video>*/}
            {/*<img src={testImg} width="100%" height="100%"  alt='icon'/>*/}
        </div>
    )
}
export default VideoComponent