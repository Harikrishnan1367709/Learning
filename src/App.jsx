import { Button, HStack } from '@chakra-ui/react'
import App1 from './App1'
import { Text } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import { Flex } from "@chakra-ui/react"
import supabase from './config/supabase'



function App() {


  return (
    

    <Box width="100%" height="100vh" justifyContent={"center"} display={"flex"}>
    <Flex align="center" justify="center"  >
     <Text>Welome to my project</Text>
    </Flex>
    </Box>
    

  )
}

export default App
