import React, { useState } from 'react';
import Navbar from './Navbar';
import { useDispatch } from 'react-redux';
import { setUser } from '../slices/userslice';


const Home = () => {
  const dispatch = useDispatch();
  const [user, setUserState] = useState({
    Name: '',
    Age: '',
    Email: '',
    Contact: '',
  });

  const onChanges = (e) => {
    const { name, value } = e.target;
    setUserState((currentInput) => {
      return { ...currentInput, [name]: value };
    });
  };

  const addUser = (e) => {
    e.preventDefault();
    dispatch(setUser(user));
    setUserState({ Name: '', Age: '', Email: '', Contact: '' }); // Clear form after submission
  };

  return (
    <div>
      <Navbar />
      <form>
        <label>Name</label>
        <br />
        <input
          name="Name"
          type="text"
          value={user.Name}
          onChange={onChanges}
        />
        <br />
        <label>Age</label>
        <br />
        <input
          name="Age"
          type="number"
          value={user.Age}
          onChange={onChanges}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          name="Email"
          type="text"
          value={user.Email}
          onChange={onChanges}
        />
        <br />
        <label>Contact</label>
        <br />
        <input
          name="Contact"
          type="text"
          value={user.Contact}
          onChange={onChanges}
        />
        <br />
        <button onClick={addUser}>Add</button>
      </form>
    </div>
  );
};

export default Home;
