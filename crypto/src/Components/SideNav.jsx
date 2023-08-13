import {
  Box,
  HStack,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BiSolidDashboard } from "react-icons/bi";
import { TbArrowsDoubleSwNe } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
const SideNav = () => {
  const NavLinks = [
    {
      text: "Dashboard",
      icon: BiSolidDashboard,
      link: "/",
    },
    {
      text: "Transactions",
      icon: TbArrowsDoubleSwNe,
      link: "/transaction",
    },
  ];
  return (
    <Stack
      width={"16.25rem"}
      height={"100vh"}
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      bg={"white"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box>
        <Heading mt={"5"} fontSize={"25px"} cursor={"pointer"}>
          @SAQIBWEBS
        </Heading>
        <Box px={"1"} mt={"6"}>
          {NavLinks.map((map) => (
            <HStack
              key={map.text}
              cursor={"pointer"}
              color={"black.60"}
              fontWeight={"bold"}
              px={"55px"}
              py={"13px"}
              transition={"0.1s ease-out"}
              borderRadius={"lg"}
              _hover={{
                color: "white",
                bg: "purple.500",
                transition: "0.2s ease-in",
              }}
              ml={"-55px"}
            >
              <Icon as={map.icon} />
              <Text>{map.text}</Text>
            </HStack>
          ))}
        </Box>
      </Box>
      <Box ml={"-70px"} mb={"30px"}>
        <HStack
          cursor={"pointer"}
          color={"black.60"}
          fontWeight={"bold"}
          _hover={{
            color: "black",
          }}
        >
          <Icon as={BiSupport} />
          <Text>Support</Text>
        </HStack>
      </Box>
    </Stack>
  );
};

export default SideNav;
