import React, {useState} from 'react';
import Movie from './Movie';

const MovieList = () => {

        const [movies, setMovies] = useState([
            {
                name: 'Harry Potter',
                price: '$10',
                id: 212
            },
            {
                name: 'Lincoln',
                price: '$15',
                id: 123212
            },
            {
                name: 'Anno',
                price: '$12',
                id: 53212
            }
        ])



    return(
        <div>
            <Movie movies={movies}/>
        </div>
    )

}

export default MovieList;