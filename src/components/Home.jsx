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


const AnimatedHighlightText = ({ children }) => (
    <Box as="span" position="relative">
      {children}
      <Box
        as="span"
        position="absolute"
        left="0"
        bottom="-4px"
        w="100%"
        h="2px"
        bgColor="#FF2E63"
        opacity="0.7"
        borderRadius="4px"
        zIndex="1"
        animation="highlight 2s infinite"
      />
    </Box>
  );

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
        fontSize={{ base: '16px', md: '18px', lg: '18px' }}
      >
        Welcome to our{' '}
        <span style={{ color: '#FF2E63', fontSize: '30px' }}>V</span>IDEO{' '}
        <span style={{ color: '#FF2E63', fontSize: '30px' }}>S</span>treaming application, where entertainment meets convenience! Our platform is designed to provide you with a seamless video streaming experience like never before. Whether you're a movie enthusiast, a sports fanatic, or simply looking for a dose of entertainment, our website has got you covered.
        <br />
        <br />
        With our user-friendly interface, creating an account and logging in is a breeze. Once you've signed up, you'll have access to a vast library of sample videos, ranging from captivating documentaries to thrilling sports highlights and more. You can explore a diverse collection of content tailored to your preferences and interests.
        <br />
        <br />
        But that's not all! We understand that everyone has a story to tell, and that's why we allow our users to <AnimatedHighlightText>upload their videos</AnimatedHighlightText>. You can now share your favorite memories, talents, and experiences with the world, and store them securely in your own personal account. Enjoy the freedom of <AnimatedHighlightText>watching your own videos</AnimatedHighlightText><AnimatedHighlightText>whenever you like, on any device, at any time</AnimatedHighlightText>
        <br />
        <br />
        At our video streaming application, we strive to provide you with a seamless and immersive viewing experience. So sit back, relax, and let the entertainment begin! Join us on this exciting journey of discovery and connection through the power of videos.
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