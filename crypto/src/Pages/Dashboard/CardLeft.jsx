import { Button, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import { BiTrendingUp } from 'react-icons/bi';
import { CustomCard } from '../../chakra/customcard';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { AiFillMinusCircle } from 'react-icons/ai';

const CardLeft = () => {
  return (
    <CustomCard mt={6}  >
        <HStack justifyContent={"space-between"} flexDir={{
        base: "column",
        lg: "row",
      }}
      align={{
        base: "center",
        lg: "center",
      }}>
            <Stack>
                <Text fontSize={"sm"}> Current Price </Text>
                <Text textStyle={"h4"}>Rs 26,670.25</Text>
                </Stack>
                <HStack ml={"-8.75rem"} mt={7} color={"green.400"} fontWeight={"semibold"}>
            <Icon  as={BiTrendingUp}/><Text>0.04%</Text>
            </HStack>
            <HStack>
              <Button width={"70px"} fontSize={"14px"} px={"30px"}><Icon mr={"7px"} as={BsFillPlusCircleFill} color={"white"} />Buy</Button>
              <Button width={"70px"} fontSize={"14px"} px={"30px"}><Icon mr={"7px"} as={AiFillMinusCircle} color={"white"} />Sell</Button>
            </HStack>
        </HStack>
    </CustomCard>
  )
}

export default CardLeft;