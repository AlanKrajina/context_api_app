import React, {useContext} from 'react';
import {MovieContext} from './MovieContext'

const Nav = () => {

  //  const value = useContext(MovieContext)
      const [movies, setMovies] = useContext(MovieContext)

    return (
        <div>
            <h4>Alan</h4>
            <p>Number of Movies: {movies.length}</p>
        </div>
    )

}

export default Nav;