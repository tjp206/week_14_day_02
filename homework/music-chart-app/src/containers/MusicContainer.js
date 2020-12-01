import React, {useEffect, useState} from 'react';
import SongList from '../components/SongList.js'
import SongDetails from '../components/SongDetails.js'

const MusicContainer = () => {

    const [songs, setSongs] = useState([]);
    const [selectedSongId, setSelectedSongId] = useState(1);
    const [loaded, setLoaded] = useState(false);

    const getSongs= () => {
        console.log("getting song info");
        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`)
        .then(res => res.json())
        .then(data => setSongs(data.feed.entry))
        .then(() => setLoaded(true))
    }

    useEffect(() => {
        getSongs();
    }, [selectedSongId]);

    return (
        <>
            <h1>Top 20 UK Hits</h1>
            <SongList 
                songs={songs}
                loaded={loaded} />
            <SongDetails
                loaded={loaded}
            />
        </>

    )
}

export default MusicContainer;