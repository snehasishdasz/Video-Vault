import {
    Button,
    Container,
    Heading,
    Input,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  import { Link } from 'react-router-dom';
  import { NavLink } from 'react-router-dom';
  import "../App.css"
  import man from "../assests/man.svg"
  
  const Login = () => {
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
            <Heading textAlign={"center"}><span style={{color:"#FF2E63",fontSize:"50px"}}>L</span>ogin</Heading>
  
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
  
            <Button variant={'link'} alignSelf={'flex-end'}>
              <Link to={'/forgetpassword'}>Forget Password?</Link>
            </Button>
  
            <Button colorScheme={'red'} type={'submit'}>
              Log In
            </Button>
  
            <Text textAlign={'right'}>
              New User?{' '}
              <Button variant={'link'} colorScheme={'red'}>
                <Link to={'/signup'}>Sign Up</Link>
              </Button>
            </Text>
          </VStack>
        </form>
        <NavLink to="/aboutme">

      <div className="floating-icon" >
        <img src={man} alt="User" className="user-image" />
      </div>
      </NavLink>
      </Container>
    );
  };
  
  export default Login;