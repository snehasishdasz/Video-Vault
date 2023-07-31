import {
    Image,
    // Avatar,
    Button,
    Container,
    Heading,
    Input,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  import avatar from "../assests/man.svg"
  import { Link } from 'react-router-dom';
  import { NavLink } from 'react-router-dom';
  import "../App.css"
  import userImage from "../user-image.jpg"
  
  const Signup = () => {
    return (
      <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form>
          <VStack
            alignItems={'stretch'}
            spacing={'8'}
            w={['full', '96']}
            m={'auto'}
            my={'16'}
          >
            <Heading textAlign={"center"}><span style={{color:"#FF2E63",fontSize:"50px"}}>S</span>ign<span style={{color:"#FF2E63",fontSize:"50px"}}>U</span>p</Heading>
            {/* <Avatar alignSelf={'center'} boxSize={'32'} /> */}
            <Image src={avatar} alignSelf={'center'} boxSize={'32'} />
  
            <Input
              placeholder={'Name'}
              type={'text'}
              required
              focusBorderColor={'blue.500'}
            />
            <Input
              placeholder={'Email'}
              type={'email'}
              required
              focusBorderColor={'blue.500'}
            />
            <Input
              placeholder={'Password'}
              type={'password'}
              required
              focusBorderColor={'blue.500'}
            />
  
            <Button colorScheme={'red'} type={'submit'}>
              Sign Up
            </Button>
  
            <Text textAlign={'right'}>
              Already Signed Up?{' '}
              <Button variant={'link'} colorScheme={'red'}>
                <Link to={'/login'}>Login In</Link>
              </Button>
            </Text>
          </VStack>
        </form>
        <NavLink to="/aboutme">

      <div className="floating-icon" >
        <img src={userImage} alt="User" className="user-image" />
      </div>
      </NavLink>
      </Container>
    );
  };
  
  export default Signup;