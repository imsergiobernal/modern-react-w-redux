import React from 'react'
import ReactPlayer from 'react-player'

const VideoDetail = ({video, isPlaying}) => {
    if (!video) {
        return <div>Loading...</div>
    }

    const videoId = video.id.videoId
    const url = `https://www.youtube.com/watch?v=${video.id.videoId}`

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <ReactPlayer
                    url={url}
                    height='100%'
                    playing={isPlaying}
                />
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div style={{ 'fontSize':'12px' }}>{video.snippet.description}</div>
            </div>
        </div>
    )
}

export default VideoDetail