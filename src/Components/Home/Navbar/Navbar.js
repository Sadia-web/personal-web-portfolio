import React from 'react';

const Navbar = () => {
    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent font-weight-bold py-4">
                <a class="navbar-brand text-secondary " href="/">Sadia Sultana</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto ">
                        <li class="nav-item active">
                            <a class="nav-link mr-4 text-secondary" href="/home/#my-work">PROJECTS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-4 text-secondary" href="/blogs">BLOG</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-4 text-secondary" target="_blank" href="https://drive.google.com/file/d/1yi4zszR1HkX03HDWQYotNn_XtxGP1R4t/view?usp=sharing">RESUME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-4 text-secondary" href="/about">ABOUT ME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-4 text-secondary" href="/contact">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;