import { Box, Container, Flex, useDisclosure } from '@chakra-ui/react';
import React from 'react'
import SideNav from './SideNav';
import TopNav from './TopNav';
import DrawerExample from './Drawer';

const Layout = ({title,children}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
         <Flex>
            <Box display={{
                base:"none",
                lg:"block",
            }} >
    <SideNav/>
            </Box>
            <DrawerExample btnRef={btnRef} isOpen={isOpen} onClose={onClose} />
    <Box flexGrow={1}>
      <TopNav onOpen={onOpen} title={title}/>
      <Container maxWidth={"70rem"} mt={6} borderRadius={"xl"}>
        {children}
      </Container>
    </Box>
   </Flex>
  )
}

export default Layout;