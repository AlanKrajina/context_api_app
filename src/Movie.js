import React from 'react';

const Movie = (props) => {

    const movies = props.movies.map( movie => 
    <div key={movie.id}>
        <h4>{movie.name}</h4>
        <p>{movie.price}</p>
    </div>
    )


    return (
        <div>
            {movies}
        </div>
    )

}

export default Movie;