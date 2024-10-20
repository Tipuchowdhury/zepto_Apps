import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import img from "../images/bbb.jpg"

const Navbar = () => {
    const { pathname } = useLocation();

    return (

        <div className='nav_bar'>
            <img src={img} className='logo' />
            <nav className="navbar">
                <Link to="/" className={pathname == "/" ? "nav_item nav_item_active" : "nav_item"}>Home</Link>
                <Link to="/wishlist" className={pathname == "/wishlist" ? "nav_item nav_item_active" : "nav_item"}>Wishlist</Link>
            </nav>
            <div></div>
        </div>

    );
};

export default Navbar;
