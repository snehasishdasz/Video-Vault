import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import man from "../assests/man.svg"
import { NavLink } from 'react-router-dom';
import { Carousel } from "react-responsive-carousel";
import "../App.css"
import Footer from './Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assests/N2.jpg"
import img2 from "../assests/A4.jpg"
import img3 from "../assests/C2.jpg"
import img4 from "../assests/R1.jpg"
import img5 from "../assests/S4.jpg"
import img6 from "../assests/G3.jpg"
import img7 from "../assests/V5.gif"

const headingOptions = {
    // pos: "absolute",
    // left: "50%",
    // top: "50%",
    // transform: "translate(-50%, -50%)",
    // textTransform: "uppercase",
    // p: "4",
    // size: "4xl"
    fontWeight: 'bold',
    fontSize: { base: '24px', md: '30px', lg: '36px' },
    p: { base: '10px', md: '12px', lg: '16px' },
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1
}


const Home = () => {

    return (
        <Box style={{ textAlign: "center" }} w={'400'}>
            {/* <MyCarousel/> */}
            {/* <Carousel
                autoPlay
                infiniteLoop
                interval={3000}
                showStatus={false}
                showThumbs={false}
                showArrows={false}>

                <Box h={"100vh"}>
                    <img src={img1} />
                    <Heading bgColor={"white"} color={"black"} pos={"absolute"} {...headingOptions}>Nature</Heading>
                </Box>
                <Box w={'full'} h={"100vh"}>
                    <img src={img2} />
                    <Heading bgColor={"white"} color={"black"} {...headingOptions}>Animal</Heading>
                </Box>
                <Box w={'full'} h={"100vh"}>
                    <img src={img3} />
                    <Heading bgColor={"white"} color={"black"} {...headingOptions}>Games</Heading>
                </Box>
                <Box w={'full'} h={"100vh"}>
                    <img src={img4} />
                    <Heading bgColor={"white"} color={"black"} {...headingOptions}>Racing</Heading>
                </Box>
                <Box w={'full'} h={"100vh"}>
                    <img src={img5} />
                    <Heading bgColor={"white"} color={"black"} {...headingOptions}>Sports</Heading>
                </Box>
                <Box w={'full'} h={"100vh"}>
                    <img src={img6} />
                    <Heading bgColor={"white"} color={"black"} {...headingOptions}>Gaming</Heading>
                </Box>
            </Carousel> */}

            {/* PART2 */}
            {/* <Carousel
      autoPlay
      infiniteLoop
      interval={3000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box h="100vh" position="relative">
        <img src={img1} alt="Nature" width="100%" height="100%" objectFit="cover" />
        <Heading bgColor="white" color="black" {...headingOptions}>
          Nature
        </Heading>
      </Box>
      <Box h="100vh" position="relative">
        <img src={img2} alt="Animal" width="100%" height="100%" objectFit="cover" />
        <Heading bgColor="white" color="black" {...headingOptions}>
          Animal
        </Heading>
      </Box>
      <Box h="100vh" position="relative">
        <img src={img3} alt="Games" width="100%" height="100%" objectFit="cover" />
        <Heading bgColor="white" color="black" {...headingOptions}>
          Games
        </Heading>
      </Box>
      <Box h="100vh" position="relative">
        <img src={img4} alt="Racing" width="100%" height="100%" objectFit="cover" />
        <Heading bgColor="white" color="black" {...headingOptions}>
          Racing
        </Heading>
      </Box>
      <Box h="100vh" position="relative">
        <img src={img5} alt="Sports" width="100%" height="100%" objectFit="cover" />
        <Heading bgColor="white" color="black" {...headingOptions}>
          Sports
        </Heading>
      </Box>
      <Box h="100vh" position="relative">
        <img src={img6} alt="Gaming" width="100%" height="100%" objectFit="cover" />
        <Heading bgColor="white" color="black" {...headingOptions}>
          Gaming
        </Heading>
      </Box>
    </Carousel> */}

            {/* 
    PART3 */}
            {/* <Carousel
                autoPlay
                infiniteLoop
                interval={3000}
                showStatus={false}
                showThumbs={false}
                showArrows={false}
            >
                <Box h={{ base: '60vh', md: '100vh' }} position="relative">
                    <img
                        src={img1}
                        alt="Nature"
                        width="100%"
                        height="100%"
                        objectFit="cover"
                    />
                    <Heading
                        bgColor="white"
                        color="black"
                        {...headingOptions}
                        position="absolute"
                        bottom="0"
                        left="0"
                        w="100%"
                        textAlign="center"
                    >
                        Nature
                    </Heading>
                </Box>

                <Box h={{ base: '60vh', md: '100vh' }} position="relative">
                    <img
                        src={img2}
                        alt="Nature"
                        width="100%"
                        height="100%"
                        objectFit="cover"
                    />
                    <Heading
                        bgColor="white"
                        color="black"
                        {...headingOptions}
                        position="absolute"
                        bottom="0"
                        left="0"
                        w="100%"
                        textAlign="center"
                    >
                        Animal
                    </Heading>
                </Box>

                <Box h={{ base: '60vh', md: '100vh' }} position="relative">
                    <img
                        src={img3}
                        alt="Nature"
                        width="100%"
                        height="100%"
                        objectFit="cover"
                    />
                    <Heading
                        bgColor="white"
                        color="black"
                        {...headingOptions}
                        position="absolute"
                        bottom="0"
                        left="0"
                        w="100%"
                        textAlign="center"
                    >
                        Games
                    </Heading>
                </Box>

                <Box h={{ base: '60vh', md: '100vh' }} position="relative">
                    <img
                        src={img4}
                        alt="Nature"
                        width="100%"
                        height="100%"
                        objectFit="cover"
                    />
                    <Heading
                        bgColor="white"
                        color="black"
                        {...headingOptions}
                        position="absolute"
                        bottom="0"
                        left="0"
                        w="100%"
                        textAlign="center"
                    >
                        Racing
                    </Heading>
                </Box>

                <Box h={{ base: '60vh', md: '100vh' }} position="relative">
                    <img
                        src={img5}
                        alt="Nature"
                        width="100%"
                        height="100%"
                        objectFit="cover"
                    />
                    <Heading
                        bgColor="white"
                        color="black"
                        {...headingOptions}
                        position="absolute"
                        bottom="0"
                        left="0"
                        w="100%"
                        textAlign="center"
                    >
                        Sports
                    </Heading>
                </Box>

                <Box h={{ base: '60vh', md: '100vh' }} position="relative">
                    <img
                        src={img6}
                        alt="Nature"
                        width="100%"
                        height="100%"
                        objectFit="cover"
                    />
                    <Heading
                        bgColor="white"
                        color="black"
                        {...headingOptions}
                        position="absolute"
                        bottom="0"
                        left="0"
                        w="100%"
                        textAlign="center"
                    >
                        Gaming
                    </Heading>
                </Box>
            </Carousel> */}

            <Carousel
                autoPlay
                infiniteLoop
                interval={3000}
                showStatus={false}
                showThumbs={false}
                showArrows={false}
            >
                <Box h={{ base: '60vh', md: '100vh' }}
        position="relative"
        overflow="hidden"
        borderRadius="8px"
        boxShadow="md">
                    <img
                        src={img1}
                        alt="Nature"
                        width="100%"
                        height="100%"
                        objectFit="cover"
                    />
                    <Heading
                        bgColor="white"
                        color="black"
                        {...headingOptions}
                        w={["100%","20%"]}
                        textAlign="center"
                    >
                        Nature
                    </Heading>
                </Box>

                <Box h={{ base: '60vh', md: '100vh' }}
        position="relative"
        overflow="hidden"
        borderRadius="8px"
        boxShadow="md">
                    <img
                        src={img2}
                        alt="Nature"
                        width="100%"
                        height="100%"
                        objectFit="cover"
                    />
                    <Heading
                        bgColor="white"
                        color="black"
                        {...headingOptions}
                        w={["100%","20%"]}
                        textAlign="center"
                    >
                        Animal
                    </Heading>
                </Box>

                <Box h={{ base: '60vh', md: '100vh' }}
        position="relative"
        overflow="hidden"
        borderRadius="8px"
        boxShadow="md">
                    <img
                        src={img3}
                        alt="Nature"
                        width="100%"
                        height="100%"
                        objectFit="cover"
                    />
                    <Heading
                        bgColor="white"
                        color="black"
                        {...headingOptions}
                        w={["100%","20%"]}
                        textAlign="center"
                    >
                        Games
                    </Heading>
                </Box>

                <Box h={{ base: '60vh', md: '100vh' }}
        position="relative"
        overflow="hidden"
        borderRadius="8px"
        boxShadow="md">
                    <img
                        src={img4}
                        alt="Nature"
                        width="100%"
                        height="100%"
                        objectFit="cover"
                    />
                    <Heading
                        bgColor="white"
                        color="black"
                        {...headingOptions}
                        w={["100%","20%"]}
                        textAlign="center"
                    >
                        Racing
                    </Heading>
                </Box>

                <Box h={{ base: '60vh', md: '100vh' }}
        position="relative"
        overflow="hidden"
        borderRadius="8px"
        boxShadow="md">
                    <img
                        src={img5}
                        alt="Nature"
                        width="100%"
                        height="100%"
                        objectFit="cover"
                    />
                    <Heading
                        bgColor="white"
                        color="black"
                        {...headingOptions}
                        w={["100%","20%"]}
                        textAlign="center"
                    >
                        Sports
                    </Heading>
                </Box>

                <Box h={{ base: '60vh', md: '100vh' }}
        position="relative"
        overflow="hidden"
        borderRadius="8px"
        boxShadow="md">
                    <img
                        src={img6}
                        alt="Nature"
                        width="100%"
                        height="100%"
                        objectFit="cover"
                    />
                    <Heading
                        bgColor="white"
                        color="black"
                        {...headingOptions}
                        w={["100%","20%"]}
                        textAlign="center"
                    >
                        Gaming
                    </Heading>
                </Box>

                {/* Repeat the same structure for other carousel slides */}
            </Carousel>




            {/* <Container maxWidth={"container.xl"} minH={"70vh"} p={"16"} >
                <Heading textTransform={"uppercase"} py={"2"} w={"fit-content"} borderBottom={"2px solid"} m={"auto"} ><span style={{ color: "#FF2E63", fontSize: "50px" }}>A</span>bout Us</Heading>

                <Stack
                    h={"full"}
                    p={"4"}
                    alignItems={"center"}
                    direction={["column", "row"]}
                >

                    <Image src={img7} h={["40", "300"]} />
                    <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4", "16"]} fontFamily={"Montserrat"} textAlign={"center"} fontWeight={"700"}>

                        Welcome to our <span style={{ color: "#FF2E63", fontSize: "30px" }}>V</span>IDEO <span style={{ color: "#FF2E63", fontSize: "30px" }}>S</span>treaming application, your gateway to a diverse world of entertainment! With a user-friendly interface and advanced search, you'll find the perfect content tailored to your preferences. Enjoy high-definition nature documentaries, where you can explore exotic landscapes and wildlife in stunning detail. Delight in heartwarming animal moments, from adorable pets to majestic creatures, captivating you with their charm and intelligence.

                        For sports enthusiasts, we offer real-time events, matches, and highlights from popular leagues and niche competitions. Stay up to date with the latest gaming trends, walkthroughs, reviews, and exciting live streams from your favorite gamers. Experience the adrenaline rush with our collection of jaw-dropping racing videos, featuring epic races and thrilling stunts across various terrains.

                    </Text>
                </Stack>
            </Container> */}

            <Container maxWidth="container.xl" minH="70vh" p={8}>
                <Heading
                    textTransform="uppercase"
                    py={2}
                    w="fit-content"
                    borderBottom="2px solid"
                    m="auto"
                    fontSize={{ base: '30px', md: '40px', lg: '50px' }}
                >
                    <span style={{ color: '#FF2E63' }}>A</span>bout Us
                </Heading>

                <Stack
                    h="full"
                    p={4}
                    alignItems="center"
                    direction={['column', 'row']}
                    spacing={8}
                >
                    <Image
                        src={img7}
                        h={['250px', '300px']}
                        borderRadius="8px"
                        boxShadow="lg"
                        objectFit="cover"
                    />

                    <Text
                        lineHeight="1.8"
                        p={['4', '16']}
                        fontFamily="Montserrat"
                        textAlign="left"
                        fontWeight="500"
                        fontSize={{ base: '16px', md: '18px', lg: '20px' }}

                    >
                        Welcome to our{' '}
                        <span style={{ color: '#FF2E63', fontSize: '30px' }}>V</span>IDEO{' '}
                        <span style={{ color: '#FF2E63', fontSize: '30px' }}>S</span>treaming
                        application, your gateway to a diverse world of entertainment! With a
                        user-friendly interface and advanced search, you'll find the perfect
                        content tailored to your preferences. Enjoy high-definition nature
                        documentaries, where you can explore exotic landscapes and wildlife
                        in stunning detail. Delight in heartwarming animal moments, from
                        adorable pets to majestic creatures, captivating you with their charm
                        and intelligence.
                        <br />
                        <br />
                        For sports enthusiasts, we offer real-time events, matches, and
                        highlights from popular leagues and niche competitions. Stay up to
                        date with the latest gaming trends, walkthroughs, reviews, and
                        exciting live streams from your favorite gamers. Experience the
                        adrenaline rush with our collection of jaw-dropping racing videos,
                        featuring epic races and thrilling stunts across various terrains.
                    </Text>
                </Stack>
            </Container>

            <NavLink to="/contributors">

                <div className="floating-icon"  >
                    <img src={man} alt="User" className="user-image" />
                    <div className="hover-message">Contributors</div>
                </div>


            </NavLink>
            <Footer />
        </Box>

    )
};
export default Home;