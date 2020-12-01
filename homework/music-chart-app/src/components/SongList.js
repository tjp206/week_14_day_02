import React from 'react';

const SongList = ({songs}) => {
    if(!songs) {
        return (
            <p>Please wait...</p>
        )
    }
    
    const songNodes = songs.map(song => {
        console.log(song);
        return(
            // <h5><a key={song.id} href={song.id.label}>{song["im:artist"].label} - {song["im:name"].label} - /a></h5>
             <h5><a key={song.id} href={song.id.label}>{song.title.label} - {song["im:price"].label}</a></h5>
        )
    }
    )

    return(
        <div className="song-list">
            {songNodes}
        </div>
        
    )
}

export default SongList;