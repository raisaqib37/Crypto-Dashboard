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
import { Link, useLocation } from 'react-router-dom'
const SideNav = () => {
const location=useLocation();
const isActiveLink  = (link) =>{
  return location.pathname===link;
}


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
            <Link to={map.link} key={map.text}  >
            <HStack
            mt={4}
              cursor={"pointer"}
              fontWeight={"bold"}
              px={"55px"}
              py={"13px"}
              transition={"0.1s ease-out"}
              borderRadius={"lg"}
              _hover={{
                color: "white",
                bg: "purple.800",
                transition: "0.2s ease-in",
              }}
              bg={isActiveLink(map.link) ? "purple.800": "transparent"}
              color={isActiveLink(map.link) ? "white": "black"}
              ml={"-55px"}
            >
              <Icon as={map.icon} />
              <Text textDecoration={"none"}>{map.text}</Text>
            </HStack>
            </Link>
          ))}
        </Box>
      </Box>
      <Box ml={"-70px"} mb={"30px"}>
        <Link to={"/support"}>
        <HStack
          cursor={"pointer"}
          color={isActiveLink("/support") ? "black": "black.80"}
          fontWeight={"bold"}
          _hover={{
            color: "black",
          }}

        >
          <Icon as={BiSupport} />
          <Text textDecoration={"none"}>Support</Text>
        </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default SideNav;
