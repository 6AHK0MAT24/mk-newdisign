import React, {useState} from 'react'
import './VideoComponent.scss'
import {GLOBAL_URL} from "../../../assets/const/CONSTANTS"

const VideoComponent: React.FC<any> = (data) => {
    const [reloadVideo, setReloadVideo] = useState(true)
    const [urlForPlay, setUrlForPlay] = useState(`http://${GLOBAL_URL}:8080` + data.videoData.videoForPlay.src)
    if (data.videoData.videoForPlay.src && urlForPlay !== `http://${GLOBAL_URL}:8080` + data.videoData.videoForPlay.src) {
        setUrlForPlay(`http://${GLOBAL_URL}:8080` + data.videoData.videoForPlay.src)
        setReloadVideo(true)
    }
    const endVideo = () => {
        const videoEndedLabel = {
            "type": "COMPLETE",
            "label": data.videoData.videoForPlay.label
        }
        setReloadVideo(false)
        data.videoData.ws.send(JSON.stringify(videoEndedLabel))
        setReloadVideo(false)

    }


    return (
        <div className="videoCenter">
            {data.videoData.videoForPlay.src && reloadVideo ?
                <>
                    <video
                        width="100%" height="100%"
                        autoPlay
                        muted
                        onEnded={endVideo}
                    >
                        <source src={urlForPlay}
                                type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </>
                :
                null
            }

        </div>
    )
}
export default VideoComponent