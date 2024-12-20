// import { useState } from "react";
// import supabase from "./supabase";
// import { Box, Button, Center, Field, Input, Text } from "@chakra-ui/react";

// function App() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!username || !password) {
//       setMessage('error');
//       setErrorMessage('Please enter both username and password.');
//       return;
//     }

//     try {
//       const { data, error } = await supabase
//         .from('users')
//         .insert([{ username, password }])
//         .select();

//       if (error) throw error;

//       setUsername('');
//       setPassword('');
//       setMessage('success');
//       setErrorMessage('Login Successful!');
//       console.log('Inserted Data:', data);
//     } catch (err) {
//       console.error(err.message);
//       setMessage('error');
//       setErrorMessage('Error logging in. Please try again.');
//     }
//   };

//   return (
//     <Center height="100vh">
//       <Box
//         as="form"
//         onSubmit={handleSubmit}
//         maxWidth="400px"
//         width="100%"
//         padding="6"
//         borderWidth="1px"
//         borderRadius="md"
//         boxShadow="md"
//         textAlign="center"
//       >
//         {/* Login Heading */}
//         <Text fontSize="2xl" fontWeight="bold" mb="6">
//           Login
//         </Text>

//         {/* Username Field */}
//         <Box mb="4">
//           <Field>
//             <Text fontWeight="bold" mb="2">
//               Username
//             </Text>
//             <Input
//               type="text"
//               placeholder="Enter your username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </Field>
//         </Box>

//         {/* Password Field */}
//         <Box mb="4">
//           <Field>
//             <Text fontWeight="bold" mb="2">
//               Password
//             </Text>
//             <Input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </Field>
//         </Box>

//         {/* Submit Button */}
//         <Button type="submit" colorScheme="teal" width="full" mb="4">
//           Login
//         </Button>

//         {/* Status Message */}
//         {message && (
//           <Text
//             color={message === 'success' ? 'green.500' : 'red.500'}
//             textAlign="center"
//           >
//             {errorMessage}
//           </Text>
//         )}
//       </Box>
//     </Center>
//   );
// }

// export default App;
// import { Box, Button, Text } from '@chakra-ui/react';
// import React, { useState } from 'react'
// import { useEffect } from 'react'

// function App() {
// const[num,setNum]=useState(2);
// const[num1,setNum1]=useState(5);
// // console.log(num);
//   useEffect(()=>{
//     setNum(3);
//     console.log("hi")
//     return ()=>{
//       setNum(2);
//       console.log("clean up")
//     }
//   },[num,num1])
//   return (<Box>
//    <Text>{num}</Text>
//    <Button onClick={()=>{setNum((a)=>a+1)}}>add</Button>
//    <Text>{num1}</Text>
//    <Button onClick={()=>{setNum1((a)=>a+1)}}>add1</Button>
//     </Box>
//   )
// }

// export default App
// import { Box, Button } from '@chakra-ui/react';
// import React, { useEffect, useRef, useState } from 'react'

// function App() {
//   const[value,setValue]=useState("");
//   console.log("Getting Rendered");
//   const ref=useRef();
//   useEffect(()=>{
//     ref.current=value;
//   },[value]);
//   const display=()=>{
//     console.log(ref.current);
//     ref.current.focus;
//   }
//   return (
//     <Box>
//     <div>App</div>
//     <input type="text" ref={ref} value={value} onChange={(e)=>{setValue(e.target.value)}}/>
//     <h1>My name is {value}</h1>
//     <h1>My name is {ref.current}</h1>
//     <Button onClick={display}>Get Input</Button>
//     </Box>
//   )
// }

// export default App
import { Box, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'


import supabase from './supabase'
import { Provider } from './components/ui/provider'




function App() {
const[user,setUser]=useState(null);

  const gsignin=async()=>{
    await supabase.auth.signInWithOAuth({
      provider: 'github',
    });
  }

  const logout=async()=>{
    const { error } = await supabase.auth.signOut();
  }
  useEffect(()=>{
    const fetchSession = async () => {
      try {
        const { data: session, error } = await supabase.auth.getSession();
        setUser(session?.user);
        console.log(session);
        const{data}=supabase.auth.onAuthStateChange((event,error)=>{
          switch(event){
            case "SIGNED_IN":
            setUser(session?.user);
            break;
            case "SIGNED_OUT":
              setUser(null)
              break;
            default:
          }
        })
        return()=>{
          data.unsubscribe;
        }
          
        

      } catch (error) {
        console.error('Unexpected error:', error);
      }
    };
  
    fetchSession();
  },[user])
  return (
    <Box>
    {user ? <h1>Authenticated</h1> :  <Button onClick={gsignin}>Signin with Github</Button>
  }
  <Button onClick={logout}>Logout</Button>
  </Box>
);
}  
  


export default App;