import React, { useState } from 'react';
import Navbar from './Navbar';
import { useDispatch } from 'react-redux';
import { setFruit } from '../slices/fruitslice';

const Contact = () => {
  const [fruitInput, setFruitInput] = useState('');
  const dispatch = useDispatch();

  const addFruit = () => {
    if (fruitInput.trim()) {
      dispatch(setFruit(fruitInput));
      setFruitInput(''); // Clear the input field after dispatch
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Logout</h1>
      {/* <input
        type="text"
        placeholder="Enter a fruit"
        value={fruitInput}
        onChange={(e) => setFruitInput(e.target.value)} // Use onChange instead of onClick
      />
      <button onClick={addFruit}>Add Fruit</button> */}
    </div>
  );
};

export default Contact;
