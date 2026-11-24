import React from 'react'
import { useSelector } from 'react-redux'

import { allSongs } from '../features/songs/songSlice'
import SongCard from '../components/SongCard'

function Library() {

    const songs = useSelector(allSongs)

    return (
        <div className="page">

            <h1>Music Library</h1>

            <div className="song-grid">

                {songs.map(song => (
                    <SongCard key={song.id} song={song} />
                ))}

            </div>

        </div>
    )
}

export default Library