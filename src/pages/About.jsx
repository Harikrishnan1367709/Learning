import React from 'react';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';

const About = () => {
  // const fruits = useSelector((state) => state.fruitinfo.fruits);
  // console.log(fruits);

  return (
    <div>
      <Navbar />
      <h1>Settings</h1>
      {/* {fruits.length > 0 ? (
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      ) : (
        <p>No fruits available. Add some in the Contact page!</p>
      )} */}
    </div>
  );
};

export default About;
