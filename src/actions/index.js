export const selectTrack = (track) => {
    alert('Now track is:' + track.name);
    return {
        type: 'TRACK_SELECTED',
        payload: track
    }
};