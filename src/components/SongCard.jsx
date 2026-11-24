import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaPlay, FaHeart } from 'react-icons/fa'

import { playSong } from '../features/player/playerSlice'
import {
    toggleFavorite,
    allFavorites
} from '../features/favorites/favoriteSlice'

function SongCard({ song }) {

    const dispatch = useDispatch()
    const favorites = useSelector(allFavorites)

    const liked = favorites.some(item => item.id === song.id)

    return (
        <div className="song-card">

            <img src={song.image} alt={song.title} />

            <h3>{song.title}</h3>
            <p>{song.artist}</p>

            <div className="song-actions">

                <button onClick={() => dispatch(playSong(song))}>
                    <FaPlay /> Play
                </button>

                <button
                    className={liked ? 'liked' : ''}
                    onClick={() => dispatch(toggleFavorite(song))}
                >
                    <FaHeart />
                </button>

            </div>

        </div>
    )
}

export default SongCard