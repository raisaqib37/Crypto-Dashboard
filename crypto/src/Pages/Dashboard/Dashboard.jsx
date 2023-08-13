import React from "react";
import Layout from "../../Components/Layout";
import { Button, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { BsInfoCircleFill } from "react-icons/bs";
import { BiArrowToBottom, BiArrowToTop } from "react-icons/bi";

const Dashboard = () => {
  return (
    <Layout title="Dashboard">
      <HStack p={"24px"} justifyContent={"space-between"} >
        <Stack>
          <Text fontSize={"sm"}>
            Total Portfolio Value <Icon cursor={"pointer"} _hover={{
              color:"purple.400",
            }} as={BsInfoCircleFill} />
          </Text>
          <Text textStyle={"h4"}>Rs 112,312.24</Text>
        </Stack>
        <Stack>
          <Text fontSize={"sm"}>Wallet Balances</Text>
          <HStack>
            <Text textStyle={"h4"}>22.39401000</Text>
            <Text
              fontWeight={"semibold"}
              fontSize={"10px"}
              bg={"black.10"}
              p={"5px"}
              borderRadius={"lg"}
            >
              BTC
            </Text>
          </HStack>
        </Stack>
        <HStack mt={"6"}>
          <Text textStyle={"h4"}>Rs 13000.00</Text>
          <Text
            fontWeight={"semibold"}
            fontSize={"10px"}
            bg={"black.10"}
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
    </Layout>
  );
};

export default Dashboard;
