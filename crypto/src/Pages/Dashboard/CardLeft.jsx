import { Box, Button, HStack, Icon, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BiTrendingUp } from "react-icons/bi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";

const CardLeft = () => {
  const time=["7:15","12:55","6:35","12:15","5:55"];
  return (
    <Stack
      p={6}
      bg={"white"}
      borderRadius={"xl"}
      mt={6}
      justifyContent={"space-between"} spacing={5 }>
        <HStack justifyContent={"space-between"}>
        <Stack>
          <Text fontSize={"sm"} fontWeight={"semibold"} color={"black.60"}>
            {" "}
            Current Price{" "}
          </Text>
          <Text textStyle={"h4"} fontWeight={"bold"}>
            Rs 26,670.25
          </Text>
        </Stack>
        <HStack
          ml={"-8.75rem"}
          mt={7}
          color={"green.400"}
          fontWeight={"semibold"}
        >
          <Icon as={BiTrendingUp} />
          <Text>0.04%</Text>
        </HStack>
        <HStack>
          <Button width={"70px"} fontSize={"14px"} px={"30px"}>
            <Icon mr={"7px"} as={BsFillPlusCircleFill} color={"white"} />
            Buy
          </Button>
          <Button width={"70px"} fontSize={"14px"} px={"30px"}>
            <Icon mr={"7px"} as={AiFillMinusCircle} color={"white"} />
            Sell
          </Button>
        </HStack>
      </HStack>
      <HStack
        cursor={"pointer"}
        alignItems={"center"}
        justifyContent={"center"}
        ml={"345px"}
        px={"4px"}
        bg={"black.20"}
        width={"150px"}
        height={"30px"}
        borderRadius={"lg"}
      >
        <Text
          bg={"white"}
          fontWeight={"semibold"}
          borderRadius={"md"}
          fontSize={"14px"}
          px={"5px"}
        >
          1H
        </Text>
        <Text
          bg={"white"}
          fontWeight={"semibold"}
          borderRadius={"md"}
          fontSize={"14px"}
          px={"5px"}
        >
          1D
        </Text>
        <Text
          bg={"white"}
          fontWeight={"semibold"}
          borderRadius={"md"}
          fontSize={"14px"}
          px={"5px"}
        >
          1W
        </Text>
        <Text
          bg={"white"}
          fontWeight={"semibold"}
          borderRadius={"md"}
          fontSize={"14px"}
          px={"5px"}
        >
          1M
        </Text>
      </HStack>
      <Box>
        <Image src="./Vector-27.svg" width={"100%"}/>
        <Image src="./Vector-26.svg" mt={"-135px"} width={"100%"}/>
      </Box>
      <HStack justifyContent={"space-between"}>
        {
          time.map((min)=>(
            <Text key={min} fontSize={"12px"} color={"black.80"} fontWeight={"semibold"} >{min}</Text>
          ))
        }
      </HStack>
    </Stack>
  );
};

export default CardLeft;
