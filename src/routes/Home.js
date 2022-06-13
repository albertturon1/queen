import React from 'react'
import Albums from '../components/Albums'
import Landing from '../components/Landing'
import LatestSong from '../components/LatestSong'
import UpcomingTour from '../components/UpcomingTour'

export default function Home() {
    return (
        <>
            <Landing/>
            <div className="pt-10 w-full flex flex-col items-center">
                <UpcomingTour />
                <Albums />
                <LatestSong />
            </div>
        </>
    )
}
