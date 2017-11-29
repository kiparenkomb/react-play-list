import {combineReducers} from 'redux';
import PlayList from './playlist';

const allReducers = combineReducers ({
    musicTrack: PlayList
});

export default allReducers;
