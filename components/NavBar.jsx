import Link from 'next/link'
const NavBar = () => {
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid">
        <div className="navbar-brand">
            <Link href="/">Reservas</Link>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <div className="nav-link">
                        <Link href="/usuarios">Usuarios</Link>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="nav-link">
                        <Link href="/reservas">Reservas</Link>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="nav-link">
                        <Link href="/libros">Libros</Link>
                    </div>
                </li>
            </ul>
        </div>
    </nav>)
}

export default NavBar