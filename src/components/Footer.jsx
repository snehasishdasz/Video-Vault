import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiFillInstagram, AiFillTwitterSquare, AiFillYoutube, AiOutlineSend} from "react-icons/ai"

const Footer = () => {
  return (
    <Box bgColor={"black"} minH={"40"} p={"16"} color={"white"} >
        <Stack direction={["column","row"]}>
            <VStack alignItems={"stretch"} w={'full'} px={"4"}>
                <Heading size={"md"} textTransform={"uppercase"} textAlign={["center","left"]}>
                    Subscribe to get updates
                </Heading>
                <HStack borderBottom={"2px solid white"} py={"2"}>
                <Input placeholder='Enter email here...' border={"none"} borderRadius={"none"} outline={"none"} focusBorderColor='none'/>
                    <Button p={"0"} color={"white"} bgColor={"red"} borderRadius={"0 20px 0 0"}>
                        <AiOutlineSend size={"20"}/>
                    </Button>
                </HStack>
            </VStack>
            <VStack w={'full'} 
            borderLeft={["none","1px solid white"]}
            borderRight={["none","1px solid white"]}
            >
                <Heading  textAlign={"center"}><span style={{color:"#FF2E63",fontSize:"45px"}}>V</span>ideo<span style={{color:"#FF2E63",fontSize:"45px"}}>V</span>ault</Heading>
                
            </VStack>
            <VStack w={'full'}>
                <Heading size={"md"} textTransform={"uppercase"} pb={"5px"}>Social Media</Heading>
                <HStack>
                <Button color='red'  >
                    <AiFillYoutube size={'30px'}/>
                    
                </Button>
                <Button color='#0F9AFB'  >
                    <AiFillTwitterSquare size={'30px'}/>
                </Button>
                <Button color='#F04C5C'  >
                    <AiFillInstagram size={'30px'}/>
                </Button>
                </HStack>
                
            </VStack>
        </Stack>

    </Box>
  )
}

export default Footer