import React from 'react'
import { Link } from 'react-router-dom'
import {
    FaHome,
    FaMusic,
    FaHeart,
    FaList
} from 'react-icons/fa'

function Sidebar() {
    return (
        <aside className="sidebar">
            <h2>MENU</h2>

            <Link to="/">
                <FaHome /> Home
            </Link>

            <Link to="/library">
                <FaMusic /> Library
            </Link>

            <Link to="/favorites">
                <FaHeart /> Favorites
            </Link>

            <Link to="/playlist">
                <FaList /> Playlists
            </Link>
        </aside>
    )
}

export default Sidebar