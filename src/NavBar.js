import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <>
            <nav>
                {props.dogs.map(dog => <NavLink to={dog.name}>{dog.name}</NavLink>)}
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar;