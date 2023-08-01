import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import "../App.css"
import man from "../assests/man.svg"

import { auth } from '../firebase/firebase';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { useUserContext } from '../context/userContext';

  const Login = () => {

    const navigate = useNavigate();
    const { setCurrentUser } = useUserContext();
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setCurrentUser(user);
          navigate('/');
        } else {
          setCurrentUser(null);
        }
      });
  
      return () => unsubscribe();
    }, [setCurrentUser]);

    const handleSubmit = async (e) =>{
      e.preventDefault();
      const email = e.target[0].value;
      const password = e.target[1].value;
      try 
      {
        await signInWithEmailAndPassword(auth, email, password);
      }
      catch(error)
      {
        console.log(error);
      }
    }
    return (
      <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form onSubmit={handleSubmit}>
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