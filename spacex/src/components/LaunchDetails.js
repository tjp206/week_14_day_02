import React from 'react';

const LaunchDetails = ({launch, loaded}) => {
    if(!loaded) {
        return (
            <p>Loading...</p>
        )
    }
    return(
        <>
            <h3>{launch.mission_name}</h3>
            <p>Rocket: {launch.rocket.rocket_name}</p>
            <p>Launch Date: {launch.launch_date_utc}</p>
            <p>Year: {launch.launch_year}</p>
        </>
    )
}

export default LaunchDetails;