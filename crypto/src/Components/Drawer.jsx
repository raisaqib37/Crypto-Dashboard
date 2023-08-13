import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import React from 'react'
import SideNav from './SideNav'

  function DrawerExample({btnRef,isOpen,onClose}) {

  
    return (
      <>
        
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <SideNav/>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  export default DrawerExample;