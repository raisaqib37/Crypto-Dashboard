import { Button, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import { BiSolidDollarCircle } from 'react-icons/bi';

const CardRight = () => {
  return (
    <Stack  p={6} bg={"white"} mt={6} borderRadius={"xl"}>
        <Text fontSize={"sm"} fontWeight={"semibold"} color={"black.60"}>Recent Transactions</Text>
        <HStack justifyContent={"space-between"} mt={3} >
            <Icon as={BiSolidDollarCircle} borderRadius={"3xl"} bg={"black.10"} fontSize={"47px"} p={"8px"}/>
            <Stack ml={"-150px"}>
                <Text  fontSize={"14px"} fontWeight={"semibold"}>PKR Deposit</Text>
                <Text fontSize={"14px"} color={"black.80"} fontWeight={"semibold"} >2022-06-09 7:06 PM</Text>
            </Stack>
                <Text fontSize={"16px"} fontWeight={"bold"}> +Rs 81,123.10</Text>
        </HStack>
        <HStack justifyContent={"space-between"} mt={3} >
            <Icon as={BiSolidDollarCircle} borderRadius={"3xl"} bg={"black.10"} fontSize={"47px"} p={"8px"}/>
            <Stack ml={"-110px"}>
                <Text  fontSize={"14px"} fontWeight={"semibold"}> BTC Sell</Text>
                <Text fontSize={"14px"} color={"black.80"} fontWeight={"semibold"} >2022-05-27 12:32 PM</Text>
            </Stack>
                <Text fontSize={"16px"} fontWeight={"bold"}> - 12.48513391 BTC</Text>
        </HStack>
        <HStack justifyContent={"space-between"} mt={3} >
            <Icon as={BiSolidDollarCircle} borderRadius={"3xl"} bg={"black.10"} fontSize={"47px"} p={"8px"}/>
            <Stack ml={"-150px"}>
                <Text  fontSize={"14px"} fontWeight={"semibold"}>PKR Deposit</Text>
                <Text fontSize={"14px"} color={"black.80"} fontWeight={"semibold"} >2022-06-09 7:06 PM</Text>
            </Stack>
                <Text fontSize={"16px"} fontWeight={"bold"}> +Rs 81,123.10</Text>
        </HStack>
        <Button mt={"6"} width={"100%"} bg={"black.20"} color={"black"} _hover={{
             bg:"black.40", color:"black",
        }} >See All</Button>
    </Stack>
  )
}

export default CardRight;