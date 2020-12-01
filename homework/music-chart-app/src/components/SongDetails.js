import React from 'react';

const MusicDetails = ({songs, loaded}) => {
    if(!loaded) {
        return (
            <p>Please wait...</p>
        )
    }
    return(
        <>
            <h3>Song Details</h3>
            <p></p>
            <p></p>
        </>
    )
}

export default MusicDetails;