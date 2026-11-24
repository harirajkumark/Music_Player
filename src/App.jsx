import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MusicPlayer from './components/MusicPlayer'
import Home from './pages/Home'
import Library from './pages/Library'
import Favorites from './pages/Favorites'
import Playlist from './pages/Playlist'
import './App.css'

function App() {
    const [search, setSearch] = useState('')
    return (
        <BrowserRouter>
            <div className="app">
                <Header search={search} setSearch={setSearch} />
                <div className="main-layout">            
                    <Sidebar />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home search={search} />} />
                            <Route path="/library" element={<Library />} />
                            <Route path="/favorites" element={<Favorites />} />
                            <Route path="/playlist" element={<Playlist />} />
                        </Routes>
                    </main>
                </div>
                <MusicPlayer />
            </div>
        </BrowserRouter>
    )
}

export default App