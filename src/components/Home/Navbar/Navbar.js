import React from 'react';

const Navbar = () => {
    return (
        <nav class="container navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="/">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item active">
                        <a class="nav-link ms-4" href="/home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ms-4" href="patient">Petient</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ms-4" href="/deshboard">Deshboard</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ms-4 text-white" href="/admin">Admin</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ms-4 text-white" href="/blogs">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ms-4 text-white" href="/contact">Contact Us</a>
                    </li>
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;