import React, {useState} from 'react'
import testImg from './test-img.png'
import './VideoComponent.scss'

// let mockurlToPlay = 'http://192.168.100.225:8080/sdcard/content/video/advertise/vid-1663921713042.mp4'

const VideoComponent: React.FC<any> = (data) => {
    const [urlForPlay, setUrlForPlay] = useState('http://194.85.217.98:8080/sdcard/content/video/showing_plan/vid-1661853390265_temp.mp4')
    // console.log('data in video - ', data.videoData.videoForPlay.src )
    const urlToPlay = `http://194.85.217.98:8080` + data.videoData.videoForPlay.src
    // if ( true) {
    //     setUrlForPlay(urlToPlay)
    // }

    // if (mockurlToPlay !== urlToPlay) {
    //
    //     console.log('mockurlToPlay - ', mockurlToPlay)
    // }

    // const mockurlToPlay = `http://192.168.100.225:8080/sdcard/content/video/advertise/vid-1663920055700.mp4`


    return (
        <div>
            <video width="100%" height="100%" autoPlay muted loop>
                <source src={urlForPlay}
                        type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/*<ReactPlayer url='https://www.youtube.com/watch?v=BQwj6A99oVc' />*/}
            {/*<video width="100%" height="100%">*/}
            {/*    <source  src={urlToPlay} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>*/}
            {/*</video>*/}
            {/*<img src={testImg} width="100%" height="100%"  alt='icon'/>*/}
        </div>
    )
}
export default VideoComponent