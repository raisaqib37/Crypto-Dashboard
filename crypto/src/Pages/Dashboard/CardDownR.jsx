import { Stack, Text } from '@chakra-ui/react';
import React from 'react'

const CardDownR = () => {
  return (
    <Stack bg={"purple.500"} bgImg={"./boxes.png"} bgSize={"cover"} p={6} mt={6} borderRadius={"xl"} >
        <Text bg={"white"} color={"purple.500"} fontSize={"14px"} p={1} borderRadius={"xl"} width={"67px"} textAlign={"center"} fontWeight={"bold"}>Contact</Text>
        <Text color={"white"} fontWeight={"semibold"} textStyle={"h4"} >Learn more about our real estate, mortgage, and corporate account services</Text>
    </Stack>
  )
}

export default CardDownR;