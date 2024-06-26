import React from "react";
import {
  Box,
  Flex,
  Container,
  Input,
  IconButton,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Badge,
  useColorMode,
  useToast,
  Spacer,
  Heading,
} from "@chakra-ui/react";
import { ChevronDownIcon, BellIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  return (
    <Box
      py={4}
      bgGradient="linear(to-r, #1e1e1e, #4a4a4a)"
      position="sticky"
      top={0}
      zIndex={1000}
      boxShadow="md"
    >
      <Container maxW="container.lg">
        <Flex justify="space-between" align="center">
          <Heading as="h1" size="md" color="teal.300">Admin Dashboard</Heading>
          <Spacer />
          <Box w="50%">
            <Input
              type="text"
              placeholder="Search..."
              size="md"
              borderRadius="full"
              bg={colorMode === "light" ? "white" : "gray.800"}
              px={4}
              py={2}
              color={colorMode === "light" ? "gray.800" : "white"}
              _placeholder={{
                color: colorMode === "light" ? "gray.500" : "gray.300",
              }}
              _focus={{ outline: "none", borderColor: "teal.300" }}
            />
          </Box>
          <Flex align="center">
            <IconButton
              aria-label="Toggle Theme"
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              bg="transparent"
              border="none"
              _hover={{ bg: "gray.700" }}
              onClick={toggleColorMode}
              mx={2}
            />
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<ChevronDownIcon boxSize={6} />}
                bg="transparent"
                border="none"
                position="relative"
                _hover={{ bg: "gray.700" }}
                mx={2}
              >
                <Badge
                  colorScheme="red"
                  color="white"
                  position="absolute"
                  top="-1"
                  right="-1"
                  borderRadius="full"
                >
                  3
                </Badge>
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
            <Avatar
              size="md"
              src="https://avatars.githubusercontent.com/u/98324988?s=400&u=530b0111ed8ff553980fa4a59788f514656ace13&v=4"
              ml={4}
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
