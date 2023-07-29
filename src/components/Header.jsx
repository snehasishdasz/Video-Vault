import React from 'react'
import {Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton, Button, useDisclosure, color, VStack, HStack} from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import {HiMenuAlt2} from "react-icons/hi";

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
        <Button 
        pos={"fixed"} 
        top={"4"} 
        left={"4"} 
        colorScheme='red' 
        p={"0"} 
        w={"10"} 
        h={"10"} 
        borderRadius={"full"}
        onClick={onOpen}
        >
            <HiMenuAlt2 size={"20"}  />
        </Button>

        <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
            <DrawerOverlay/>
            <DrawerContent>
            <DrawerCloseButton/>
                <DrawerHeader textAlign={"center"}><span style={{color:"#FF2E63",fontSize:"30px"}}>V</span>ideo<span style={{color:"#FF2E63",fontSize:"30px"}}>V</span>ault</DrawerHeader>
                <DrawerBody>
                    <VStack>
                        <Button onClick={onClose} w={"full"} color='#3F72AF'>
                            <Link to={"/"}>Home</Link>
                        </Button>

                        <Button onClick={onClose} w={"full"} color='#3F72AF'>
                            <Link to={"/videos"}>Videos</Link>
                        </Button>

                        <Button onClick={onClose} w={"full"} color='#3F72AF'>
                            <Link to={"/videos?category=free"}>Free Videos</Link>
                        </Button>

                        <Button onClick={onClose} w={"full"} color='#3F72AF'>
                            <Link to={"/upload"}>Upload Video</Link>
                        </Button>
                    </VStack>
                    <HStack pos={"absolute"} bottom={"10"} left={"0"} w={"full"} justifyContent={"space-evenly"}>
                        <Button onClick={onClose} colorScheme='red'>
                            <Link to={"/login"}>Log In</Link>
                        </Button>
                        <Button onClick={onClose} colorScheme='red' variant={"outline"}>
                            <Link to={"/signup"}>Sign Up</Link>
                        </Button>
                    </HStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>
  )
}

export default Header