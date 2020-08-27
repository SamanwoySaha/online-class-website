import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="/home">
                            <img src="https://i.ibb.co/sPM16sz/7cca923b4856132689613b22c57ce8eb.png" alt="7cca923b4856132689613b22c57ce8eb" className="logo"/>
                        </a>
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/courses">Courses</a>
                            </li>
                            <li className="nav-item mr-3">
                                <a className="nav-link" href="/online-class">Online Class</a>
                            </li>
                            <form className="form-inline my-5 my-lg-0">
                                <input className="form-control mr-sm-2 border-1" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
                            </form>
                            <li className="nav-item ml-3">
                                <a className="nav-link" href="/my-cart">My Cart</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/sign-up">Sign Up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;