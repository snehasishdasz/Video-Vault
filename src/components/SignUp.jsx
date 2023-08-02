import { Image,Button,Container,Heading,Input,Text,VStack } from '@chakra-ui/react';
import React from 'react';
import avatar from "../assests/man.svg"
import { Link, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import "../App.css"
import man from "../assests/man.svg"
import { auth, db } from '../firebase/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

  const Signup = () => {

    const navigate = useNavigate();
    const handleSigup = async (e) => {
      e.preventDefault();
      const name = e.target[0].value;
      const email = e.target[1].value;
      const password = e.target[2].value;

      try 
      {
        const {user} = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(user, {displayName:name});
        await setDoc(doc(db, 'users', user.uid),{ uid: user.uid, name, email, videourl:[] })
        alert('Sign up successful');
        console.log(user);
        navigate('/login')
      }
      catch(error)
      {
        console.log(error);
      }

    }
    return (
      <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form onSubmit={handleSigup}>
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
        <img src={man} alt="User" className="user-image" />
      </div>
      </NavLink>
      </Container>
    );
  };
  
  export default Signup;