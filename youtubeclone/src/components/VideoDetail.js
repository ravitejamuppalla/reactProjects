import React from "react";

import { Paper, Typography } from '@mui/material'

// Explain destructuring...
const VideoDetail = (props) => {
  console.log(props);

  // TODO - Spinner
  if (!props.videoID) return <div>Loading...</div>;

  const videoSrc = `https://www.youtube.com/embed/${props.videoID}`;

  return (
    <React.Fragment>
      <Paper elevation={6} style={"100%"}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      {/* <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h4">
          {props.title} - {props.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {props.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{props.decription}</Typography>
      </Paper> */}
    </React.Fragment>
  );
}

export default VideoDetail;