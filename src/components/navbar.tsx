'use client'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Navbar() {
    const loggedIn: boolean = true

    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle')
    }, [])
    const LoggedInNavbar = () => (
        <div className="container">
            <Link href="/" style={{ textDecoration: 'none' }}>
                <button className="navbar-brand nav-link fs-4">
                    SponsorBook
                </button>
            </Link>
            <button
                className="navbar-toggler shadow-none border-0"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div
                className="sidebar offcanvas offcanvas-start"
                style={{ backdropFilter: 'blur' }}
                tabIndex={-1}
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
            >
                <div className="offcanvas-header border-bottom">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                        SponsorBook
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="offcanvas-body d-flex flex-column flex-lg-row">
                    <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3 fs-5">
                        <li className="nav-item mx-2">
                            <Link
                                href="/search"
                                className="text-decoration-none"
                            >
                                <button className="nav-link">Search</button>
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link
                                href="/sponsors"
                                className="text-decoration-none"
                            >
                                <button className="nav-link">Sponsors</button>
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link
                                href="/events"
                                className="text-decoration-none"
                            >
                                <button className="nav-link">Events</button>
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link
                                href="/history"
                                className="text-decoration-none"
                            >
                                <button className="nav-link">History</button>
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link
                                href="/university"
                                className="text-decoration-none"
                            >
                                <button className="nav-link">University</button>
                            </Link>
                        </li>
                    </ul>
                    <div className="d-flex flex-column justify-content-center align-items-center gap-3">
                        <Link href="/account">
                            <button className="btn btn-dark text-white text-decoration-none py-1 rounded-4">
                                Account
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )

    const LoggedOutNavbar = () => (
        <div className="container">
            <Link href="/" style={{ textDecoration: 'none' }}>
                <button className="navbar-brand nav-link fs-4">
                    SponsorBook
                </button>
            </Link>
            <div className="ms-auto justify-content-right align-items-right gap-3">
                <a
                    href="/"
                    className="text-white text-decoration-none px-3 py-1 bg-dark rounded-4"
                >
                    Sign In
                </a>
            </div>
        </div>
    )

    return (
        <>
            <nav className="navbar bg-body-tertiary fixed-top navbar-expand-lg">
                {loggedIn ? <LoggedInNavbar /> : <LoggedOutNavbar />}
            </nav>
        </>
    )
}
