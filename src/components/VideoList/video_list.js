import React from 'react'
import VideoListItem from './video_list_item'

const VideoList = (props) => {
    const VideoItems = props.videos.map((video) => {
        return <VideoListItem
            key={video.etag}
            onVideoSelect={props.onVideoSelect}
            video={video} />
    })

    return (
        <ul className="list-group">
            {VideoItems}
        </ul>
    )
}

export default VideoList