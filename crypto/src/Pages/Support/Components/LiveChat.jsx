import { Heading, Icon, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { BiSolidMessageSquareDetail } from 'react-icons/bi'

const LiveChat = () => {
  return (
    <Stack p={6}>
        <Icon as={BiSolidMessageSquareDetail} cursor={"pointer"} color={"purple.500"} fontSize={"30px"}/>
        <Heading fontWeight={"bold"} fontSize={"32px"}>Live Chat</Heading>
        <Text color={"black.80"} fontWeight={"medium"}>Don’t have time to wait for the answer? Chat with us now.</Text>
    </Stack>
  )
}

export default LiveChat