import React, {useState, useContext} from 'react'; // 1. imported useContext 
import {MovieContext} from './MovieContext'    //     2. imported MovieContext

const AddMovie = () => {

    const [movies,setMovies] = useContext(MovieContext)   // 3. uzeo podatke
    const [name, setName] = useState(''); // empty string because input is empty on beginning
    const [price, setPrice] = useState(''); 

    const updateName = e => {
        setName(e.target.value)  // state shows input in console
    }

    const updatePrice = e => {
        setPrice(e.target.value)
    }


    const addMovie = e => {
        e.preventDefault()
        setMovies(prevMovies => [...prevMovies, {name: name, price: price}])   // 4. 'setState' with previous data and NEW data
    }

    return (
        <form onSubmit={addMovie}>
            Name<input type='text' name='name' value={name} onChange={updateName}></input>
            Price<input type='text' name='price' value={price} onChange={updatePrice}></input>
            <button>Submit</button>
        </form>
    )

}

export default AddMovie;