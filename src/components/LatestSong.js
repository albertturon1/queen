import React from 'react'
import YoutubeEmbed from './YoutubeEmbed'

const SongData = {
    title: 'The Show Must Go On',
    embed: 't99KH0TR-J4',
    streamingPlatforms: [
        { platform: 'Spotify', link: 'https://open.spotify.com/track/3m86qx7aIeqFcYcQ1UXUvP', thumbnail_url: 'https://www.pngall.com/wp-content/uploads/9/Spotify-Logo-PNG-Picture.png' },
        { platform: 'Apple Music', link: 'https://music.apple.com/us/album/the-show-must-go-on/1440630800?i=1440630994', thumbnail_url: 'https://www.kindpng.com/picc/m/12-123232_apple-music-logo-circle-png-itunes-app-transparent.png' },
        { platform: 'YouTube', link: 'https://www.youtube.com/watch?v=t99KH0TR-J4', thumbnail_url: 'https://www.freepnglogos.com/uploads/youtube-play-red-logo-png-transparent-background-6.png' }
    ]
}

export default function LatestSong() {
    return (
        <div style={{ marginBottom: 100 }} className="px-10 max-w-screen-lg  w-full flex flex-row">
            <div className="flex-1">
                <YoutubeEmbed embed={SongData.embed} />
            </div>
            <div className="flex-1 pl-4 pt-3">
                <p className="text-2xl mb-2" style={{ fontFamily: "EB Garamond" }}>Najnowszy utwór</p>
                <p className="text-4xl mb-2 font-semibold" style={{ fontFamily: "EB Garamond" }}>{SongData.title}</p>
                <div className="flex flex-row items-center">
                    <p className="mr-2">Posłuchaj na </p>
                    <ListeningPlatforms streamingPlatforms={SongData.streamingPlatforms}/>
                </div>
            </div>
        </div>
    )
}

const ListeningPlatforms = ({ streamingPlatforms }) => {
    return streamingPlatforms.map((platform, index) => {
        return (
            <a key={index} className="w-7 mr-2 hover:cursor-pointer" href={platform.link} target="_blank" rel="noreferrer">
                <img src={platform.thumbnail_url} className="w-full h-full" alt={streamingPlatforms.platform}/>
            </a >
        )
    })
}

