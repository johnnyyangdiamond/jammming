import React, { useState } from "react";
import "./TrackList.css";
import Track from "../Track/Track";

const TrackList = (props) => {
  //const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  return (
    <div className="TrackList">
      {props.tracks.map((track) => (
        <Track
          key={track.id}
          track={track}
          onAdd={props.onAdd}
          isRemoval={props.isRemoval}
          onRemove={props.onRemove}
          currentlyPlaying={props.currentlyPlaying}
          setCurrentlyPlaying={props.setCurrentlyPlaying}
          currentSide={props.currentSide}
          setCurrentSide={props.setCurrentSide}
          side={props.side}
        />
      ))}
    </div>
  );
};

export default TrackList;
