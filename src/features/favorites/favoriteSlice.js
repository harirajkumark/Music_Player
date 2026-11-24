import { createSlice } from '@reduxjs/toolkit'

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: {
        favorites: []
    },
    reducers: {
        toggleFavorite: (state, action) => {
            const exists = state.favorites.find(
                song => song.id === action.payload.id
            )

            if (exists) {
                state.favorites = state.favorites.filter(
                    song => song.id !== action.payload.id
                )
            } else {
                state.favorites.push(action.payload)
            }
        }
    }
})

export const { toggleFavorite } = favoriteSlice.actions
export const allFavorites = state => state.favorites.favorites

export default favoriteSlice.reducer