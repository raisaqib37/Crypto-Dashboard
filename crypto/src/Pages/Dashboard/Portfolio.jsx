import React from "react";
import { Button, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { BsInfoCircleFill } from "react-icons/bs";
import { BiArrowToBottom, BiArrowToTop } from "react-icons/bi";

const Portfolio = () => {
  return (
    <HStack bg={"white"}
    borderRadius={"xl"}
      p={"6"}
      spacing={{
        base: "15px",
        lg: "10px",
      }}
      justifyContent={"space-between"}
      flexDir={{
        base: "column",
        lg: "row",
      }}
      align={{
        base: "left",
        lg: "center",
      }}
    >
      <Stack>
        <Text fontSize={"sm"} fontWeight={"semibold"} color={"black.60"}>
          Total Portfolio Value 
          <Icon ml={1}
            cursor={"pointer"}
            _hover={{
              color: "purple.400",
            }}
            as={BsInfoCircleFill}
          />
        </Text>
        <Text textStyle={"h4"} fontWeight={"bold"}>Rs 112,312.24</Text>
      </Stack>
      <Stack>
        <Text fontSize={"sm"} fontWeight={"semibold"} color={"black.60"}>Wallet Balances</Text>
        <HStack>
          <Text textStyle={"h4"} fontWeight={"bold"}>22.39401000</Text>
          <Text
            fontWeight={"semibold"}
            fontSize={"10px"}
            bg={"purple.100"}
            p={"5px"}
            borderRadius={"lg"}
          >
            BTC
          </Text>
        </HStack>
      </Stack>
      <HStack mt={"6"}>
        <Text textStyle={"h4"} fontWeight={"bold"}>Rs 13000.00</Text>
        <Text
          fontWeight={"semibold"}
          fontSize={"10px"}
          bg={"purple.100"}
          p={"5px"}
          borderRadius={"lg"}
        >
          PKR
        </Text>
      </HStack>
      <HStack>
        <Button>
          <Icon as={BiArrowToBottom} fontSize={"20px"} ml={-1} />
          Deposit
        </Button>
        <Button>
          <Icon as={BiArrowToTop} fontSize={"20px"} ml={-1} />
          Withdraw
        </Button>
      </HStack>
    </HStack>
  );
};

export default Portfolio;
