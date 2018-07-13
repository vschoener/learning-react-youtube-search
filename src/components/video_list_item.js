import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
    const videoInfo = video.snippet;

    return (
        <li className="list-group-item" onClick={() => {onVideoSelect(video)}} >
            <div className="video-list media">
                <div className="media-left left">
                    <img src={videoInfo.thumbnails.default.url} />
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {videoInfo.title}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;