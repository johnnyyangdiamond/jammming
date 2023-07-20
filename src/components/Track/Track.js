/*
import React, { useCallback, useRef, useState } from "react";
import "./Track.css";

const Track = (props) => {
  const addTrack = useCallback(
    (event) => {
      props.onAdd(props.track);
    },
    [props.onAdd, props.track]
  );

  const removeTrack = useCallback(
    (event) => {
      props.onRemove(props.track);
    },
    [props.onRemove, props.track]
  );

  const renderAction = () => {
    if (props.isRemoval) {
      return (
        <button className="Track-action" onClick={removeTrack}>
          -
        </button>
      );
    }
    return (
      <button className="Track-action" onClick={addTrack}>
        +
      </button>
    );
  };

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlayPreview(previewUrl) {
    if (audioRef.current !== null) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      const audio = new Audio(previewUrl);
      audio.play();
      audioRef.current = audio;
      setIsPlaying(true);
    }
  }

  return (
    <div className="Track">
      <img
        src={props.track.image}
        alt={props.track.name}
        height="50"
        width="50"
        onClick={() => handlePlayPreview(props.track.previewUrl)}
        style={{ cursor: "pointer" }}
      />
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>
          {props.track.artist} | {props.track.album}
        </p>
      </div>
      {renderAction()}
    </div>
  );
};

export default Track;
*/

import React, { useCallback, useRef, useState } from "react";
import "./Track.css";

const Track = (props) => {
  const addTrack = useCallback(
    (event) => {
      props.onAdd(props.track);
    },
    [props.onAdd, props.track]
  );

  const removeTrack = useCallback(
    (event) => {
      props.onRemove(props.track);
    },
    [props.onRemove, props.track]
  );

  const renderAction = () => {
    if (props.isRemoval) {
      return (
        <button className="Track-action" onClick={removeTrack}>
          -
        </button>
      );
    }
    return (
      <button className="Track-action" onClick={addTrack}>
        +
      </button>
    );
  };

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  function handlePlayPreview(previewUrl) {
    if (audioRef.current !== null) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      const audio = new Audio(previewUrl);
      audio.play();
      audioRef.current = audio;
      setIsPlaying(true);
    }
  }

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="Track"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={props.track.image}
        alt={props.track.name}
        height="50"
        width="50"
        onClick={() => handlePlayPreview(props.track.previewUrl)}
        style={{ cursor: "pointer" }}
      />
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>
          {props.track.artist} | {props.track.album}
        </p>
      </div>
      {(isHovered || isPlaying) && (
        <div
          className="Track-indicators"
          onClick={() => handlePlayPreview(props.track.previewUrl)}
          style={{ cursor: "pointer" }}
        >
          {isPlaying ? (
            <span className="Pause-indicator">||</span>
          ) : (
            <span className="Play-indicator">▶</span>
          )}
        </div>
      )}
      {renderAction()}
    </div>
  );
};

export default Track;
