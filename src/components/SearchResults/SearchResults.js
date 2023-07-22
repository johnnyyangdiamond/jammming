import React from "react";

import "./SearchResults.css";

import TrackList from "../TrackList/TrackList";

const SearchResults = (props) => {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList 
        tracks={props.searchResults} 
        onAdd={props.onAdd} 
        currentlyPlaying={props.currentlyPlaying}
        setCurrentlyPlaying={props.setCurrentlyPlaying}
        currentSide={props.currentSide}
        setCurrentSide={props.setCurrentSide}
        side={'SearchResults'}
      />
    </div>
  );
};

export default SearchResults;
