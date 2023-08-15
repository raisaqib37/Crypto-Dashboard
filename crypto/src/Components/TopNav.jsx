import { Box, HStack, Heading, Icon } from '@chakra-ui/react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';     
import { FaUserAlt } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';

const TopNav = ({title,btnRef,onOpen}) => {
  return (
    <Box px={"8"} boxShadow={"md"} bg={"white"} >

<HStack  justifyContent={"space-between"} height={16} mx={"auto"} maxWidth={"70rem"}>   
    <Icon _hover={{
      color: "purple.500",
    }} fontSize={"20px"} ref={btnRef} onClick={onOpen} display={{
      base:"block",
      xl:"none",
    }} as={FaBars} cursor={"pointer"}/>
      <Heading cursor={"pointer"} fontSize={"30px"}>{title}</Heading>
      <Menu>
  <MenuButton>
  <Icon as={FaUserAlt} color={"purple.400"} fontSize={"28px"} />
  </MenuButton>
  <MenuList>
    <MenuItem>Profile</MenuItem>
    <MenuItem>Security</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
    <MenuItem>Logout</MenuItem>
  </MenuList>
</Menu>
      </HStack> 
      </Box>
  )
}

export default TopNav;