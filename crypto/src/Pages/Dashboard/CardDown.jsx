import { Stack, Text } from '@chakra-ui/react';
import React from 'react'

const CardDown = () => {
  return (
    <Stack bg={"white"} mt={6} bgImg={"./Visual.png"} bgSize={"cover"} p={"6"} borderRadius={"xl"}>
        <Text color={"white"} fontWeight={"semibold"} borderRadius={"xl"} bg={"purple.500"} width={"45px"} textAlign={"center"} fontSize={"14px"}>Loan</Text>
        <Text mt={3} color={"black"} textStyle={"h4"} fontWeight={"bold"} >Learn more about Loans – Keep your Bitcoin, access it’s value without selling it</Text>
    </Stack>
  )
}

export default CardDown;