import React from 'react';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../slices/userslice';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userinfo.Users);
  console.log(users);

  const deluser = (index) => {
    dispatch(deleteUser(index));
  };

  return (
    <div>
      <Navbar />
      <div>
        {users.map((value, index) => {
          return (
            <div key={index}>
              <h1>{value.Name}</h1>
              <h2>{value.Age}</h2>
              <h2>{value.Email}</h2>
              <h2>{value.Contact}</h2>
              <button onClick={() => deluser(index)}>delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
