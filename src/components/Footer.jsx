import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiFillInstagram, AiFillTwitterSquare, AiFillYoutube, AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor="black" color="white" py={8} px={[4, 16]}>
      <Stack direction={['column', 'row']} spacing={[4, 8]} alignItems={['center', 'stretch']}>
        <VStack w={['full', '40%']} alignItems={['center', 'stretch']}>
          <Heading size="md" textTransform="uppercase" textAlign={['center', 'left']}>
            Subscribe to get updates
          </Heading>
          <HStack borderBottom="2px solid white" py={2}>
            <Input
              placeholder="Enter email here..."
              border="none"
              borderRadius="none"
              outline="none"
              focusBorderColor="none"
              _placeholder={{ color: 'gray.400' }}
            />
            <Button p={0} color="white" bgColor="red" borderRadius="0 20px 20px 0" _hover={{ bgColor: 'red.600' }}>
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack w={['full', '20%']} borderLeft={['none', '1px solid white']} borderRight={['none', '1px solid white']}>
          <Heading textAlign={['center', 'left']}>
            <span style={{ color: '#FF2E63', fontSize: '45px' }}>V</span>ideo
            <span style={{ color: '#FF2E63', fontSize: '45px' }}>V</span>ault
          </Heading>
        </VStack>
        <VStack w={['full', '40%']}>
          <Heading size="md" textTransform="uppercase" pb={2}>
            Social Media
          </Heading>
          <HStack spacing={4}>
            <Button color="red" bg="transparent" _hover={{ bg: 'red.100' }}>
              <AiFillYoutube size={'30px'} />
            </Button>
            <Button color="#0F9AFB" bg="transparent" _hover={{ bg: 'blue.100' }}>
              <AiFillTwitterSquare size={'30px'} />
            </Button>
            <Button color="#F04C5C" bg="transparent" _hover={{ bg: 'red.100' }}>
              <AiFillInstagram size={'30px'} />
            </Button>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
