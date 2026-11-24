import React from 'react'
import { useSelector } from 'react-redux'

import { allFavorites } from '../features/favorites/favoriteSlice'
import SongCard from '../components/SongCard'

function Favorites() {

    const favorites = useSelector(allFavorites)

    return (
        <div className="page">

            <h1>My Favorites ❤️</h1>

            <div className="song-grid">

                {favorites.map(song => (
                    <SongCard key={song.id} song={song} />
                ))}

                {favorites.length === 0 && (
                    <p>No favourite songs yet.</p>
                )}

            </div>

        </div>
    )
}

export default Favorites