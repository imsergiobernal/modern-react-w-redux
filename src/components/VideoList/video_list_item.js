import React from 'react'

// const VideoListItem = (video) => {
//     return <li>{video.video.snippet.title}</li>    
const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url
    const title = video.snippet.title

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <img className="mr-3 media-object" src={imageUrl} />
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    )
}

export default VideoListItem