// import { useState } from "react";
// import supabase from "./supabase";
// import { Box, Button, Center, Field, Input, Text } from "@chakra-ui/react";
import { TimelineSeparator } from '@chakra-ui/react';
import React, { Component } from 'react';


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

//useState,useEffect,useRef
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
// import { Box, Button } from '@chakra-ui/react'
// import React, { useEffect, useState } from 'react'


// import supabase from './supabase'
// import { Provider } from './components/ui/provider'



//Github Signup
// function App() {
// const[user,setUser]=useState(null);

//   const gsignin=async()=>{
//     await supabase.auth.signInWithOAuth({
//       provider: 'github',
//     });
//   }

//   const logout=async()=>{
//     const { error } = await supabase.auth.signOut();
//   }
//   useEffect(()=>{
//     const fetchSession = async () => {
//       try {
//         const { data: session, error } = await supabase.auth.getSession();
//         setUser(session?.user);
//         console.log(session);
//         const{data}=supabase.auth.onAuthStateChange((event,error)=>{
//           switch(event){
//             case "SIGNED_IN":
//             setUser(session?.user);
//             break;
//             case "SIGNED_OUT":
//               setUser(null)
//               break;
//             default:
//           }
//         })
//         return()=>{
//           data.unsubscribe;
//         }
          
        

//       } catch (error) {
//         console.error('Unexpected error:', error);
//       }
//     };
  
//     fetchSession();
//   },[user])
//   return (
//     <Box>
//     {user ? <h1>Authenticated</h1> :  <Button onClick={gsignin}>Signin with Github</Button>
//   }
//   <Button onClick={logout}>Logout</Button>
//   </Box>
// );
// }  
  


// export default App;

//UseMemo

// import React, { useEffect, useMemo, useState } from 'react'

// function App() {
//   const[number,setNmber]=useState(0);
//   const[dark,setDark]=useState(false);
//   const doublenumber=useMemo(()=>{
//     return slowFunction(number)
//   },[number])
//   const theme={
//     backgroundColor:dark?"black":"white",
//     color:dark?"white":"black"
//   }
//   useEffect(()=>{
//     console.log("Theme Changed")
//   },[dark])
//   return (
//     <div>
//        <input type="number" value={number} onChange={(e)=>setNmber(e.target.value)}/>
//        <button onClick={()=>setDark((curr)=>!curr)}>toggle theme</button>
//        <div style={theme}>{doublenumber}</div>
//     </div>
   
//   )
// }

// export default App
// function slowFunction(num){
//   console.log("running slow")
//   for(let i=0;i<1000000000;i++){}
//     return num*2;
  
// }

//Sample Landing Page Design
// import React, { useEffect } from 'react';
// import {
//   Box,
//   Button,
//   Container,
//   Flex,
//   Heading,
//   HStack,
//   Text,
//   VStack,
//   Icon,
//   IconButton,
//   SimpleGrid,
// } from '@chakra-ui/react';
// import { FaPlay } from 'react-icons/fa';
// import { createClient } from '@supabase/supabase-js';

// // Initialize Supabase client
// const supabaseUrl = 'https://qejgfeeuqzjlubslzlin.supabase.co';
// const supabaseKey =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlamdmZWV1cXpqbHVic2x6bGluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NDA0MjcsImV4cCI6MjA1MDAxNjQyN30.hFpXxor_BTaOEoNQBt6VkjHzBk9IhTJkAAuH5pXoN7o';
// const supabase = createClient(supabaseUrl, supabaseKey);

// const Navbar = () => {
//   return (
//     <Box as="nav" py={4} borderBottom="1px" borderColor="gray.100">
//       <Container maxW="7xl">
//         <Flex justify="space-between" align="center">
//           {/* Logo */}
//           <Text fontSize="xl" fontWeight="bold">
//             HIRIC
//           </Text>

//           {/* Navigation Links */}
//           <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
//             <Text color="gray.600" _hover={{ color: 'gray.800' }}>
//               Home
//             </Text>
//             <Text color="gray.600" _hover={{ color: 'gray.800' }}>
//               Features
//             </Text>
//             <Text color="gray.600" _hover={{ color: 'gray.800' }}>
//               Services
//             </Text>
//             <Text color="gray.600" _hover={{ color: 'gray.800' }}>
//               About
//             </Text>
//             <Text color="gray.600" _hover={{ color: 'gray.800' }}>
//               Pricing
//             </Text>
//             <Text color="gray.600" _hover={{ color: 'gray.800' }}>
//               Blog
//             </Text>
//             <Text color="gray.600" _hover={{ color: 'gray.800' }}>
//               Contact
//             </Text>
//           </HStack>

//           {/* CTA Button */}
//           <Button colorScheme="teal" size="md" px={6} rounded="md">
//             Try It Free
//           </Button>
//         </Flex>
//       </Container>
//     </Box>
//   );
// };

// const HeroSection = () => {
//   return (
//     <Box
//       bgGradient="linear(to-r, blue.900, blue.800, blue.900)"
//       color="white"
//       backgroundColor="blue.500"
//       py={20}
//       position="relative"
//       overflow="hidden"
//     >
//       <Container maxW="7xl">
//         <VStack spacing={6} textAlign="center">
//           <Text
//             textTransform="uppercase"
//             letterSpacing="wider"
//             fontSize="sm"
//           >
//             AWESOME DESIGN
//           </Text>

//           <Heading
//             fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
//             maxW="800px"
//             lineHeight="1.2"
//           >
//             We love to make things amazing and simple
//           </Heading>

//           <Text
//             fontSize={{ base: "md", lg: "lg" }}
//             maxW="600px"
//             color="whiteAlpha.900"
//           >
//             Maecenas eget porttitor class semper sollicitudin lectus lorem varius dui imperdiet
//             aliquam vehicula tempor auctor dapibus pede semper ornare.
//           </Text>
//           <IconButton
//         aria-label="Play video"
//         icon={<Icon as={FaPlay} />}
//         size="lg"
//         border="2px"
//         borderColor="white"
//         color="white"
//         bg="blue.500"
//       />
//         </VStack>
//       </Container>
//     </Box>
//   );
// };

// const LogoSection = () => {
//   return (
//     <Container maxW="7xl" py={16}>
//       <SimpleGrid columns={{ base: 2, md: 4 }} spacing={12} alignItems="center">
//         <Text fontSize="xl" fontWeight="semibold" color="gray.500" textAlign="center">
//           ESSENCE
//         </Text>
//         <Text fontSize="xl" fontWeight="semibold" color="gray.500" textAlign="center">
//           BLACK SWAN
//         </Text>
//         <Text fontSize="xl" fontWeight="semibold" color="gray.500" textAlign="center">
//           TOYKIDS
//         </Text>
//         <Text fontSize="xl" fontWeight="semibold" color="gray.500" textAlign="center">
//           QUADRA
//         </Text>
//       </SimpleGrid>
//     </Container>
//   );
// };

// const LandingPage = () => {
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const { data, error } = await supabase.from('users').select('*');
//         if (error) throw error;
//         console.log('Data:', data);
//       } catch (error) {
//         console.error('Error:', error.message);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <Box minH="100vh" bg="white">
//       <Navbar />
//       <HeroSection />
//       <LogoSection />
//     </Box>
//   );
// };

// export default LandingPage;

//useCallBack

// import React, { useCallback, useState } from 'react'
// import List from './List';
// List

// function App() {
//   const[number,setnumber]=useState(0);
//   const[dark,useDark]=useState(false);

//   const getitems=useCallback(()=>{
//     return[number+1,number+2,number+3];
//   },[number])
//   const style={
//     backgroundColor:dark?"black":"white",
//     color:dark?"white":"black"
//   }
//   return (
//     <div style={style}>
//       <input type="number" value={number} onChange={(e)=>setnumber(parseInt(e.target.value))}/>
//       <button onClick={()=>{useDark((curr)=>!curr)}}>Toggle Theme</button>
//       <List getitems={getitems}/>
//     </div>
//   )
// }

// export default App

//useContext

// import React, { createContext, useContext, useState } from 'react'
// import App1 from './App1'
// export const createcontect=createContext();
// const App = () => {
//   const[theme,settheme]=useState("light");

//   const taggletheme=()=>{
//     settheme((curr)=>(curr==="light"?"dark":"light"));
//   }
 
//   return (
    
//       <createcontect.Provider value={{theme}}>
//       <button onClick={taggletheme}>toggletheme</button>
//       <h1>App</h1>
//       <App1 />
//       </createcontect.Provider>
    
//   )
// }

// export default App

//useReducer

// import { Center } from '@chakra-ui/react';
// import React, { useReducer, useState } from 'react'
// function reducerfn(state,action){
// switch(action.type){
// case "increment":
// return {count:state.count+1};
// case "decrement":
// return {count:state.count-1};
// default:
// return state;
// }
// }
// const App = () => {
//   const[count,setcount]=useState(0);
//   const[state,dispatch]=useReducer(reducerfn,{count:1})

//   console.log(state);
//   return (
//     <div style={{display:"flex",alignItems:"center"}}>
//       <button onClick={()=>dispatch({type:"increment"})} style={{marginRight:"1em"}}>Add</button>
//       <h1  style={{marginRight:"1em"}}>{state.count}</h1>
//       <button onClick={()=>dispatch({type:"decrement"})} style={{marginRight:"1em"}}>Minus</button>
      
//     </div>
//   )
// }

// export default App


//React Redux

// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
// import Users from './pages/Users'
// import Contact from './pages/Contact'
// import Navbar from './pages/Navbar'





// const App = () => {
//   return (
//   <BrowserRouter>
//   {/* <Navbar/> */}
//   <Routes>
//    <Route path="/" element={<Home/>}></Route>
//    <Route path="/Users" element={<Users/>}></Route>
//    <Route path="/About" element={<About/>}></Route>
//    <Route path="/Contact" element={<Contact/>}></Route>
//   </Routes>
//   </BrowserRouter>
//   )
// }

// export default App


//Functional based component vs class Based Component
//Functional component
// import React, { Component, useEffect, useState } from 'react'

// const App = () => {
//   const [first,setfirst]=useState(1);
//   const [second,setsecond]=useState(100);
//   const getdata=()=>{
//     console.log("success")
//   }
//   useEffect(()=>{getdata()},[])
//   useEffect(()=>{console.log("first value changed")},[first])
//   return (
//     <div>
//       <h1>First : {first}</h1>
//       <h1>Second : {second}</h1>
//       <button onClick={()=>{setfirst((curr)=>curr+1)}}>Add First</button>
//       <button onClick={()=>{setsecond((curr)=>curr+1)}}>Add Second</button>
//     </div>
//   )
// }

// export default App

//Class Based Components

// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state={
//     first:1,
//     second:100
    
//     };
//     this.handleclick1=this.handleclick1.bind(this);
//     this.handleclick2=this.handleclick2.bind(this);

//   }
//   handleclick1(){
//     this.setState({first:this.state.first+1})
//   }
//   handleclick2(){
//     this.setState({second:this.state.second+1})
//   }
//   componentDidMount(){
//     console.log("Good Morning")
//   }
//   componentDidUpdate(prevProps,prevState){
//     if(prevProps.first !=this.state.first){
//       console.log("first value changed")
//     }
//   }
//   render(){
//     return(
//     <div>
//       <h1>first : {this.state.first}</h1>
//       <h1>Second : {this.state.second}</h1>
//       <button onClick={this.handleclick1}>Add First</button>
//       <button onClick={this.handleclick2}>Add Second</button>
//     </div>
//   );
//   }
// }
// export default App;

//Protected Routes

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Users from './pages/Users'
import Contact from './pages/Contact'
import Privaterouter from './pages/Privaterouter';






const App = () => {
  return (
  <BrowserRouter>
 
  <Routes>
   <Route path="/" element={<Home/>}></Route>
   <Route path="/Users" element={<Users/>}></Route>
   <Route element={<Privaterouter/>}>
   <Route path="/About" element={<About/>}></Route>
   </Route>
   <Route path="/Contact" element={<Contact/>}></Route>
  </Routes>
  </BrowserRouter>
  )
}

export default App

