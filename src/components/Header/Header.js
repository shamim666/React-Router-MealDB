import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const activeStyle = {
        fontWeight : "bold",
        color: "red"
    }

    return (
       <nav>
           <NavLink to="/home" activeStyle={activeStyle}>Home</NavLink>
           <NavLink to="/menu" activeStyle={activeStyle}>Menu</NavLink>
           <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
           <NavLink to="*" activeStyle={activeStyle}>Notfound</NavLink>
       </nav>
    );
};

export default Header;