import React from "react";
import { Box, Text, Link, Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import { RiFacebookBoxFill, RiTwitterFill, RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const footerBgColor = useColorModeValue("gray.800", "gray.900");
  const textColor = useColorModeValue("gray.300", "gray.400");
  const iconColor = useColorModeValue("gray.400", "gray.500");
  const hoverColor = useColorModeValue("teal.300", "teal.500");

  return (
    <Box bg={footerBgColor} py={6}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        maxW="container.lg"
        mx="auto"
        px={4}
      >
        <Text fontSize="sm" color={textColor}>
          &copy; 2024 Animesh Kambhale. All rights reserved.
        </Text>
        <Flex alignItems="center" mt={{ base: 4, md: 0 }}>
          <Link mx={2} fontSize="sm" color={textColor} _hover={{ color: hoverColor }}>
            Privacy Policy
          </Link>
          <Link mx={2} fontSize="sm" color={textColor} _hover={{ color: hoverColor }}>
            Terms of Service
          </Link>
          <Box mx={2}>
            <Link href="https://www.facebook.com" isExternal>
              <Icon as={RiFacebookBoxFill} boxSize={6} color={iconColor} _hover={{ color: hoverColor }} />
            </Link>
          </Box>
          <Box mx={2}>
            <Link href="https://www.twitter.com" isExternal>
              <Icon as={RiTwitterFill} boxSize={6} color={iconColor} _hover={{ color: hoverColor }} />
            </Link>
          </Box>
          <Box mx={2}>
            <Link href="https://www.instagram.com" isExternal>
              <Icon as={RiInstagramFill} boxSize={6} color={iconColor} _hover={{ color: hoverColor }} />
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
