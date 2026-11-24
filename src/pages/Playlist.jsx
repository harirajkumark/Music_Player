import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { allSongs } from '../features/songs/songSlice'
import SongCard from '../components/SongCard'

function Playlist() {

    const songs = useSelector(allSongs)

    const [playlistName, setPlaylistName] = useState('')
    const [playlists, setPlaylists] = useState([])

    function createPlaylist(e) {
        e.preventDefault()

        if (!playlistName.trim()) return

        setPlaylists([...playlists, {
            id: Date.now(),
            name: playlistName,
            songs: []
        }])

        setPlaylistName('')
    }

    return (
        <div className="page">

            <h1>My Playlists</h1>

            <form onSubmit={createPlaylist} className="playlist-form">

                <input
                    value={playlistName}
                    onChange={e => setPlaylistName(e.target.value)}
                    placeholder="Enter playlist name"
                />

                <button type="submit">Create Playlist</button>

            </form>

            {playlists.map(playlist => (
                <div key={playlist.id} className="playlist-item">
                    <h3>{playlist.name}</h3>
                    <p>{playlist.songs.length} Songs</p>
                </div>
            ))}

            <h2>Available Songs</h2>

            <div className="song-grid">
                {songs.map(song => (
                    <SongCard key={song.id} song={song} />
                ))}
            </div>

        </div>
    )
}

export default Playlist