import { FaMusic, FaSearch } from 'react-icons/fa'

function Header({ search, setSearch }) {
    return (
        <header className="header">
            <h2><FaMusic /> RAJU MUSIC</h2>

            <div className="search">
                <FaSearch />
                <input
                    type="text"
                    placeholder="Search songs..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="profile">R</div>
        </header>
    )
}

export default Header