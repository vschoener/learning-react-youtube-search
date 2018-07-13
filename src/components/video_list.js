import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({ videos, onVideoSelect }) => {

    if (!videos) {
        return '';
    }

    const videosItems = videos.map((video) => {
        return (
            <VideoListItem
                key={video.id.videoId}
                video={video}
                onVideoSelect={onVideoSelect}
            />
        );
    });

    return (
        <ul className="videoList col-lg-5 list-group">
            {videosItems}
        </ul>
    );
};

export default VideoList;