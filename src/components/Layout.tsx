import { Box, Flex, HStack, Button, Text, Container, Avatar, Image } from "@chakra-ui/react";
import React from "react";
import bgImage from "../assets/hero_bg.png";
import profilePic from "../assets/profile.jpg";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Box position="fixed" inset={0} zIndex={-1}>
        <Image src={bgImage} alt="Developer Workspace Base" objectFit="cover" w="full" h="full" opacity={0.15} />
        <Box position="absolute" inset={0} bgGradient="linear(to-b, gray.900, transparent, gray.900)" opacity={0.8} />
      </Box>
      <Box as="nav" bg="gray.900" borderBottom="1px solid" borderColor="gray.800" position="sticky" top={0} zIndex={100}>
        <Container maxW="7xl">
          <Flex h={16} alignItems="center" justify="space-between">
            <Flex align="center" gap={3}>
              <Avatar size="sm" src={profilePic} name="Narendra Jagadhane" border="2px solid" borderColor="brand.500" />
              <Text fontSize="xl" fontWeight="bold" color="white">
                NJ<Box as="span" color="brand.500">.</Box>
              </Text>
            </Flex>
            <HStack spacing={8} display={["none", "none", "flex"]}>
              {["About", "Experience", "Skills", "Projects", "Contact"].map((item) => (
                <Text
                  key={item}
                  color="gray.300"
                  _hover={{ color: "brand.400", cursor: "pointer" }}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {item}
                </Text>
              ))}
              <HStack spacing={4}>
                <Button
                  as="a"
                  href="/resume.pdf" download="Narendra_Jagadhane_Resume.pdf"
                  variant="outline"
                  colorScheme="purple"
                  size="sm"
                >
                  Resume
                </Button>
                <Button
                  colorScheme="brand"
                  size="sm"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Hire Me
                </Button>
              </HStack>
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Box as="main">
        {children}
      </Box>

      <Box as="footer" bg="gray.900" borderTop="1px solid" borderColor="gray.800" py={8}>
        <Container maxW="7xl" textAlign="center">
          <Text color="gray.500">© 2026 Narendra Jagadhane. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};
