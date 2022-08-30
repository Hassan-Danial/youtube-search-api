import React from "react";
import "../style/video_style.css";

function selectVideo(videoIdObj, onVideoSelected) {
    onVideoSelected(videoIdObj.videoId);
}
function get_style(imageurl) {
    const style = {
        backgroundImage: `url(${imageurl})`,
        backgroundSize: "100% 100%",
        height: "250px",
        width: "390px",
        cursor: "pointer",
    };
    return style;
}
function constructVideoTitles(vidoesData, onVideoSelected) {
    return vidoesData.map(({ snippet, id }, index) => {
        return (
            <div className="video" key={index} onClick={() => selectVideo(id, onVideoSelected)}>
                <div style={get_style(snippet.thumbnails.high.url)} key={index} />
                <p className="title">{snippet.title}</p>
            </div>
        );
    });
}
const Video = ({ data, onVideoSelected }) => {
    return (
        <>
            {constructVideoTitles(data, onVideoSelected)}
        </>
    );
};

export default Video;