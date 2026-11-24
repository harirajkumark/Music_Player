import { configureStore } from '@reduxjs/toolkit'

import songReducer from '../features/songs/songSlice'
import playerReducer from '../features/player/playerSlice'
import favoriteReducer from '../features/favorites/favoriteSlice'

export const store = configureStore({
    reducer: {
        songs: songReducer,
        player: playerReducer,
        favorites: favoriteReducer
    }
})