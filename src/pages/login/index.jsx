import React from 'react';
import { authorize } from '../../libraries/spotify';
import { useAuth } from '../../libraries/useAuth';
import {
  Box,
  Flex,
  Button,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
  Heading,
} from '@chakra-ui/react';
import { FaSpotify } from 'react-icons/fa';

export const Header = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Box>
      <Flex
        bg={'#242424'}
        color={'white'}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={'#242424'}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        ></Flex>
        <Flex flex={{ base: 2 }} justify={{ base: 'center', md: 'start' }}>
          <Button
            leftIcon={<FaSpotify fontSize='2xl' />}
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            variant='ghost'
            color='white'
          >
            Spotigi
          </Button>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          {!isAuthenticated && (
            <Button
              onClick={authorize}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'brand.300'}
              _hover={{ bg: 'whiteAlpha.500' }}
            >
              Log in
            </Button>
          )}
        </Stack>
      </Flex>
    </Box>
  );
};

const Login = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <Header />
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(https://images.unsplash.com/photo-1420161900862-9a86fa1f5c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
      >
        <VStack
          w={'full'}
          justify={'center'}
          textAlign={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
        >
          <Stack maxW={'2xl'} align={'center'} spacing={6}>
            <Heading as='h1' size='4xl' lineHeight={1.2}>
              Listening is everything
            </Heading>
            <Text
              as='i'
              color={'white'}
              fontSize={useBreakpointValue({ base: '2md', md: '4md' })}
            >
              Millions of songs and podcasts. No credit card needed.
            </Text>
            <Stack direction={'row'}>
              {!isAuthenticated && (
                <Button
                  size='lg'
                  onClick={authorize}
                  bg={'brand.300'}
                  color={'white'}
                  _hover={{ bg: 'whiteAlpha.500' }}
                >
                  Get Spotigi
                </Button>
              )}
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    </>
  );
};

export default Login;
