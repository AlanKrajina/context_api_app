import React, {useState} from 'react';

const AddMovie = () => {


    const [name, setName] = useState(''); // empty string because input is empty on beginning
    const [price, setPrice] = useState(''); 






    return (
        <form>
            <input type='text' name='name'></input>
            <input type='text' name='price'></input>
            <button>Submit</button>
        </form>
    )

}

export default AddMovie;