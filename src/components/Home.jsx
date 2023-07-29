import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {Carousel} from "react-responsive-carousel";
import  "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assests/N2.jpg"
import img2 from "../assests/A4.jpg"
import img3 from "../assests/C2.jpg"
import img4 from "../assests/R1.jpg"
import img5 from "../assests/S4.jpg"
import img6 from "../assests/G3.jpg"
import img7 from "../assests/V5.gif"


// const MyCarousel = () =>{
//     <Carousel 
//     autoPlay 
//     infiniteLoop 
//     interval={1000} 
//     showStatus={false} 
//     showThumbs={false} 
//     showArrows={false}>

//         <Box w={'full'} h={"100vh"}>
//             <Image src={img1}/>
//             <Heading bgColor={"white"} color={"black"}>Nature</Heading>
//         </Box>
//         <Box w={'full'} h={"100vh"}>
//             <Image src={img2}/>
//             <Heading bgColor={"white"} color={"black"}>Nature</Heading>
//         </Box>
//     </Carousel>
// };

const headingOptions = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    textTransform: "uppercase",
    p:"4",
    size: "4xl"
}

const Home = () => {
    
  return (
    <Box style={{textAlign:"center"}}w={'400'}>
        {/* <MyCarousel/> */}
        <Carousel 
    autoPlay 
    infiniteLoop 
    interval={1000} 
    showStatus={false} 
    showThumbs={false} 
    showArrows={false}>

        <Box  h={"100vh"}>
            <img   style={{borderRadius:"120px",padding:"80px"}}  src={img1}/>
            <Heading bgColor={"white"} color={"black"} pos={"absolute"} {...headingOptions}>Nature</Heading>
        </Box>
        <Box w={'full'} h={"100vh"}>
            <Image w={"400"} p={"80px"} src={img2}/>
            <Heading bgColor={"white"} color={"black"} {...headingOptions}>Animal</Heading>
        </Box>
        <Box w={'full'} h={"100vh"}>
            <Image w={"400"} p={"80px"} src={img3}/>
            <Heading bgColor={"white"} color={"black"} {...headingOptions}>Games</Heading>
        </Box>
        <Box w={'full'} h={"100vh"}>
            <Image w={"400"} p={"80px"} src={img4}/>
            <Heading bgColor={"white"} color={"black"} {...headingOptions}>Racing</Heading>
        </Box>
        <Box w={'full'} h={"100vh"}>
            <Image w={"400"} p={"80px"}  src={img5}/>
            <Heading bgColor={"white"} color={"black"} {...headingOptions}>Sports</Heading>
        </Box>
        <Box w={'full'} h={"100vh"}>
            <Image w={"400"} p={"80px"} src={img6}/>
            <Heading bgColor={"white"} color={"black"} {...headingOptions}>Gaming</Heading>
        </Box>
    </Carousel>
    <Container maxWidth={"container.xl"} minH={"70vh"} p={"16"} >
        <Heading textTransform={"uppercase"} py={"2"} w={"fit-content"} borderBottom={"2px solid"} m={"auto"} ><span style={{color:"#FF2E63",fontSize:"50px"}}>A</span>bout Us</Heading>

        <Stack
        h={"full"}
        p={"4"}
        alignItems={"center"}
        direction={["column", "row"]}
        >

        <Image src={img7} h={["30","300"]}/>
        <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} fontFamily={"Montserrat"} textAlign={"center"} fontWeight={"700"}>
            
Welcome to our video streaming application, your gateway to a diverse world of entertainment! With a user-friendly interface and advanced search, you'll find the perfect content tailored to your preferences. Enjoy high-definition nature documentaries, where you can explore exotic landscapes and wildlife in stunning detail. Delight in heartwarming animal moments, from adorable pets to majestic creatures, captivating you with their charm and intelligence.

For sports enthusiasts, we offer real-time events, matches, and highlights from popular leagues and niche competitions. Stay up to date with the latest gaming trends, walkthroughs, reviews, and exciting live streams from your favorite gamers. Experience the adrenaline rush with our collection of jaw-dropping racing videos, featuring epic races and thrilling stunts across various terrains.

        </Text>
        </Stack>
    </Container>
        
    </Box>
  )
};



export default Home 
