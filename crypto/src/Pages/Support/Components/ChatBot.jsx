import { Stack, Text } from '@chakra-ui/react'
import React from 'react'

const ChatBot = () => {
  return (
    <Stack bg={"purple.500"} bgImg={"./boxes.png"} bgSize={"cover"} p={6} mt={6} borderRadius={"xl"} >
    <Text bg={"white"} color={"purple.500"} fontSize={"14px"} borderRadius={"xl"} width={"67px"} textAlign={"center"} fontWeight={"bold"}>Chatbot</Text>
    <Text color={"white"} fontWeight={"semibold"} fontSize={"18px"} >Chat with us now</Text>
</Stack>
  )
}

export default ChatBot