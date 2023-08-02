import React from 'react'
import {Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton, Button, useDisclosure, color, VStack, HStack,Text} from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import {HiMenuAlt2} from "react-icons/hi";


import { useUserContext } from '../context/userContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';

const Header = () => {
    const { currentUser } = useUserContext();
    const logOut = () =>{
        signOut(auth).then(()=>{
            alert('Signout');
            window.location.reload();
        });
    }
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
        <Button 
        zIndex={"overlay"}
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
                    <Link to={"/"}>
                        <Button onClick={onClose}  color='#3F72AF' size='lg' height='48px' width='250px'>
                            Home 
                        </Button>
                    </Link>
                        <Button onClick={onClose} w={"full"} color='#3F72AF' size='lg' height='48px' width='250px'>
                            <Link to={"/videos"}>Videos</Link>
                        </Button>

                        <Button onClick={onClose} w={"full"} color='#3F72AF' size='lg' height='48px' width='250px'>
                            <Link to={"/videos?category=free"}>Free Videos</Link>
                        </Button>

                        <Button onClick={onClose} w={"full"} color='#3F72AF' size='lg' height='48px' width='250px'>
                            <Link to={"/upload"}>Upload Video</Link>
                        </Button>
                    </VStack>
                    <HStack pos={"absolute"} bottom={"10"} left={"0"} w={"full"} justifyContent={"space-evenly"}>
                        <div className="bottom-part">
                        <div className="username">
                            <Text> Hello👋<span style={{fontWeight:"bold",color:"#0B2D51",fontSize:"18px"}}>   {currentUser?.displayName}</span></Text>
                        </div>
                        {
                            currentUser?.displayName ? 
                            <div className='signout'> 
                            <Button colorScheme='red'  onClick={logOut}>
                                <Link to={"/login"} > Signout </Link>
                            </Button>
                            </div> 
                            : 
                            <div className="buttons">
                            <Button onClick={onClose} colorScheme='red'>
                                <Link to={"/login"}>Log In</Link>
                            </Button>
                            <Button onClick={onClose} colorScheme='red' variant={"outline"}>
                                <Link to={"/signup"}>Sign Up</Link>
                            </Button>
                            </div>
                        }
                        </div>
                    </HStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>
  )
}

export default Header