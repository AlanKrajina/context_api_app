import React, {useState, useContext} from 'react';
import Movie from './Movie';
import {MovieContext} from './MovieContext'

const MovieList = () => {

    const value = useContext(MovieContext)

    return(
        <div>
            <Movie movies={value}/>
        </div>
    )

}

export default MovieList;