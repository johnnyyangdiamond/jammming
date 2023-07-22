import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Track.css";

const Track = (props) => {
  const { track, onAdd, isRemoval, onRemove, currentlyPlaying, setCurrentlyPlaying, currentSide, setCurrentSide } = props;

  const addTrack = useCallback(() => {
    onAdd(track);
  }, [onAdd, track]);

  const removeTrack = useCallback(() => {
    onRemove(track);
  }, [onRemove, track]);

  const renderAction = () => {
    if (isRemoval) {
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

  useEffect(() => {
    if (currentlyPlaying !== track.id && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [currentlyPlaying, track.id]);

  useEffect(() => {
    if (currentSide !== props.side && currentlyPlaying === track.id) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [currentSide]);


  const handlePlayPreview = () => {
    if (audioRef.current !== null) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        setCurrentlyPlaying(null);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
        setCurrentlyPlaying(track.id);
        setCurrentSide(props.side);
      }
    } else {
      const audio = new Audio(track.previewUrl);
      audio.play();
      audioRef.current = audio;
      setIsPlaying(true);
      setCurrentlyPlaying(track.id);
      setCurrentSide(props.side);
    }

  };

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
        src={track.image}
        alt={track.name}
        height="50"
        width="50"
        onClick={handlePlayPreview}
        style={{ cursor: "pointer" }}
      />
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      {(isHovered || isPlaying) && (
        <div
          className="Track-indicators"
          onClick={handlePlayPreview}
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
