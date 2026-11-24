import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentSong: null,
    isPlaying: false
}

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {

        playSong: (state, action) => {
            state.currentSong = action.payload
            state.isPlaying = true
        },

        pauseSong: (state) => {
            state.isPlaying = false
        },

        resumeSong: (state) => {
            state.isPlaying = true
        },

        nextSong: (state, action) => {
            state.currentSong = action.payload
            state.isPlaying = true
        }

    }
})

export const {
    playSong,
    pauseSong,
    resumeSong,
    nextSong
} = playerSlice.actions

export const currentSong = (state) => state.player.currentSong

export const isPlaying = (state) => state.player.isPlaying

export default playerSlice.reducer