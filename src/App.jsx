import { useState } from "react";
import supabase from "./supabase";
import { Box, Button, Center, Field, Input, Text } from "@chakra-ui/react";

function App() {
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
      console.error(err.message);
      setMessage('error');
      setErrorMessage('Error logging in. Please try again.');
    }
  };

  return (
    <Center height="100vh">
      <Box
        as="form"
        onSubmit={handleSubmit}
        maxWidth="400px"
        width="100%"
        padding="6"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        textAlign="center"
      >
        {/* Login Heading */}
        <Text fontSize="2xl" fontWeight="bold" mb="6">
          Login
        </Text>

        {/* Username Field */}
        <Box mb="4">
          <Field>
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
        </Box>

        {/* Password Field */}
        <Box mb="4">
          <Field>
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
        </Box>

        {/* Submit Button */}
        <Button type="submit" colorScheme="teal" width="full" mb="4">
          Login
        </Button>

        {/* Status Message */}
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
}

export default App;
