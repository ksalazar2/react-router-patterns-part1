import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

const Home = (props) => {
    return (
        <>
            <h1>Dog Finder</h1>
            <NavBar dogs={props.dogs} />
        </>
    )
};

export default Home;