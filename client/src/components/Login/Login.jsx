import React, { useState } from 'react';
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Heading,
} from '@chakra-ui/react';

const LoginPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
      window.location.href = '/dashboard';
    }, 2000);
  };

  return (
    <Box
      bg="linear-gradient(135deg, #1e1e1e, #4a4a4a)"
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="white"
    >
      <Container
        p={8}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="2xl"
        bg="gray.900"
        maxW="sm"
        textAlign="center"
      >
        <Heading as="h1" size="xl" mb={6} color="teal.300">Welcome Admin</Heading>
        <form onSubmit={handleLogin}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="admin@gmail.com"
              value="admin@gmail.com"
              borderColor="gray.700"
              _placeholder={{ color: 'gray.500' }}
              isReadOnly
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value="admin"
              borderColor="gray.700"
              _placeholder={{ color: 'gray.500' }}
              isReadOnly
            />
          </FormControl>
          <Button
            mt={6}
            w="100%"
            colorScheme="teal"
            variant="solid"
            _hover={{ bg: 'teal.400' }}
            type="submit"
          >
            Login
          </Button>
        </form>
        <AlertDialog isOpen={isOpen} leastDestructiveRef={undefined}>
          <AlertDialogOverlay>
            <AlertDialogContent bg="gray.800" color="white">
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Welcome Admin
              </AlertDialogHeader>
              <AlertDialogBody>
                Redirecting to the dashboard page...
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button onClick={() => setIsOpen(false)}>Cancel</Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Container>
    </Box>
  );
};

export default LoginPage;
