import React, { Component } from 'react';
import { createStore } from 'redux';
// import allReducers from './reducers';
import TracksList from '../containers/tracks-list';

const PlayListTracks = () => (
    <div>
        <hr />
        <h1>PlayList Tracks:</h1>
        <TracksList />
        <h1>Details:</h1>
    </div>
);

export default PlayListTracks;
