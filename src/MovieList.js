import React, {useState, useContext} from 'react';
import Movie from './Movie';
import {MovieContext} from './MovieContext'

const MovieList = () => {

    const [movies, setMovies] = useContext(MovieContext)

    return(
        <div>
            <Movie movies={movies}/>
        </div>
    )

}

export default MovieList;