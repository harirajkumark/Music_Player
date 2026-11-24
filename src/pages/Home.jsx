import React from 'react'
import { useSelector } from 'react-redux'

import { allSongs } from '../features/songs/songSlice'
import SongCard from '../components/SongCard'

function Home({ search }) {

    const songs = useSelector(allSongs)

    const filteredSongs = songs.filter(song =>
        song.title.toLowerCase().includes(search.toLowerCase()) ||
        song.artist.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="page">

            <h1>Welcome to Raju Music</h1>
            <p>Discover your favourite music.</p>

            <h2>Trending Songs</h2>

            <div className="song-grid">

                {filteredSongs.map(song => (
                    <SongCard key={song.id} song={song} />
                ))}

                {filteredSongs.length === 0 && <p>No songs found.</p>}

            </div>

        </div>
    )
}

export default Home