// src/components/LoginForm.jsx
import React, { useState } from 'react';
import { Box, Center, Text, Field, Input, Button } from '@chakra-ui/react';
import supabase from './supabase';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage('error');
      setErrorMessage('Please enter both username and password.');
      return;
    }

    try {
      // Insert data into Supabase
      const { data, error } = await supabase
        .from('users')
        .insert([{ username, password }])
        .select();

      if (error) throw error;

      setUsername('');
      setPassword('');
      setMessage('success');
      setErrorMessage('Login Successful!');
      console.log('Inserted Data:', data);
    } catch (err) {
      console.error('Error:', err.message);
      setMessage('error');
      setErrorMessage('Failed to login. Please try again.');
    }
  };

  return (
    <Center>
      <Box
        maxWidth="400px"
        width="100%"
        padding="6"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
      >
        {/* Login Heading */}
        <Text fontSize="2xl" fontWeight="bold" mb="6" textAlign="center">
          Login
        </Text>

        {/* Login Form */}
        <Box as="form" onSubmit={handleSubmit}>
          {/* Username Field */}
          <Field mb="4">
            <Text fontWeight="bold" mb="2">
              Username
            </Text>
            <Input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Field>

          {/* Password Field */}
          <Field mb="4">
            <Text fontWeight="bold" mb="2">
              Password
            </Text>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Field>

          {/* Submit Button */}
          <Button type="submit" colorScheme="teal" width="full" mb="4">
            Login
          </Button>
        </Box>

        {/* Status Messages */}
        {message && (
          <Text
            color={message === 'success' ? 'green.500' : 'red.500'}
            textAlign="center"
          >
            {errorMessage}
          </Text>
        )}
      </Box>
    </Center>
  );
};

export default App;
