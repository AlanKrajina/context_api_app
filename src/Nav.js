import React, {useState, useContext} from 'react';
import {MovieContext} from './MovieContext'

const Nav = () => {

    const value = useContext(MovieContext)

    return (
        <div>
            <h4>Alan</h4>
            <p>Number of Movies: {value.length}</p>
        </div>
    )

}

export default Nav;