//import React
import React from "react";

//import Link
import { Link } from "@inertiajs/inertia-react";

function Layout({ children }) {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-success">
                    <div className="container">
                        <Link className="navbar-brand" href="/posts">
                            Laravel Inertia React
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse"
                            aria-controls="navbarCollapse"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarCollapse"
                        ></div>
                    </div>
                </nav>
            </header>

            <main className="container mt-5">{children}</main>
        </>
    );
}

export default Layout;
