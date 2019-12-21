import React, {useState, createContext} from 'react';
 
export const MovieContext = createContext();

export const MovieProvider = (props) => {

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
    ]);


    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}

