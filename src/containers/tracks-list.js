import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {selectTrack} from '../actions/index';


class TracksList extends Component {
    showList () {
        return this.props.musicTracks.map ((track) => {
            return (
                <li
                    onClick={() => this.props.selectTrack (track)}
                    key={track.id}
                >
                    {track.name}
                </li>
            )
        });
    }
    render () {
        return (
            <ol>
                {this.showList ()}
            </ol>
        );
    }
}

function mapStateToProps (state) {
    return {
        musicTracks: state.musicTrack
    }
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({selectTrack: selectTrack}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(TracksList);