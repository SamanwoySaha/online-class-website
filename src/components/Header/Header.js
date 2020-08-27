import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a class="navbar-brand" href="#">
                            <img src="https://i.ibb.co/sPM16sz/7cca923b4856132689613b22c57ce8eb.png" alt="7cca923b4856132689613b22c57ce8eb" className="logo"/>

                        </a>
                        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Courses</a>
                            </li>
                            <li class="nav-item mr-3">
                                <a class="nav-link" href="#">Online Class</a>
                            </li>
                            <form class="form-inline my-5 my-lg-0">
                                <input class="form-control mr-sm-2 border-1" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
                            </form>
                            <li class="nav-item ml-3">
                                <a class="nav-link" href="#">My Cart</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Sign Up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;