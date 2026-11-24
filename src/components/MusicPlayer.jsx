import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from 'react-icons/fa'

import {
    currentSong,
    isPlaying,
    pauseSong,
    resumeSong,
    playSong
} from '../features/player/playerSlice'

import { allSongs } from '../features/songs/songSlice'

function MusicPlayer() {

    const dispatch = useDispatch()

    const song = useSelector(currentSong)
    const playing = useSelector(isPlaying)
    const songs = useSelector(allSongs)

    const audioRef = useRef(null)

    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const audio = audioRef.current

        if (!audio || !song) return

        audio.pause()
        audio.load()

        if (playing) {
            audio.play().catch(() => {
                dispatch(pauseSong())
            })
        }
    }, [song, playing, dispatch])

    function nextSong() {
        if (!song || !songs.length) return

        const index = songs.findIndex(item => item.id === song.id)
        const next = songs[(index + 1) % songs.length]

        dispatch(playSong(next))
    }

    function previousSong() {
        if (!song || !songs.length) return

        const index = songs.findIndex(item => item.id === song.id)
        const previous = songs[(index - 1 + songs.length) % songs.length]

        dispatch(playSong(previous))
    }

    function updateProgress() {
        const audio = audioRef.current

        if (audio && audio.duration) {
            setProgress((audio.currentTime / audio.duration) * 100)
        }
    }

    function changeProgress(e) {
        const audio = audioRef.current

        if (audio && audio.duration) {
            audio.currentTime = (Number(e.target.value) / 100) * audio.duration
        }
    }

    return (

        <div className="music-player">

            {song ? (
                <>
                    <audio
                        ref={audioRef}
                        src={song.audio}
                        onTimeUpdate={updateProgress}
                        onEnded={nextSong}
                    />

                    <div className="player-song">
                        <img src={song.image} alt={song.title} />

                        <div>
                            <h4>{song.title}</h4>
                            <p>{song.artist}</p>
                        </div>
                    </div>

                    <div className="player-controls">

                        <button onClick={previousSong}>
                            <FaStepBackward />
                        </button>

                        <button
                            onClick={() =>
                                dispatch(playing ? pauseSong() : resumeSong())
                            }
                        >
                            {playing ? <FaPause /> : <FaPlay />}
                        </button>

                        <button onClick={nextSong}>
                            <FaStepForward />
                        </button>

                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={progress}
                            onChange={changeProgress}
                        />

                    </div>
                </>
            ) : (
                <p>Select a song to start listening</p>
            )}

        </div>
    )
}

export default MusicPlayer