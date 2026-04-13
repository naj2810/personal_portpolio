import { Box, Heading, Text, Button, Flex, Image, VStack, HStack, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import profilePic from "../assets/profile.jpg";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

export const HeroSection = () => {
  return (
    <Box minH="100vh" display="flex" alignItems="center" bg="transparent"
      position="relative" overflow="hidden">

      {/* Decorative gradient blur in background */}
      <Box position="absolute" top="-20%" left="-10%" w="500px" h="500px"
        bgGradient="radial(blue.500, transparent, transparent)" filter="blur(100px)" opacity={0.2} zIndex={0} />
      <Box position="absolute" bottom="-20%" right="-10%" w="500px" h="500px"
        bgGradient="radial(purple.500, transparent, transparent)" filter="blur(100px)" opacity={0.2} zIndex={0} />

      <Flex as="main" direction={["column-reverse", "column-reverse", "row"]}
        w="full" maxW="7xl" mx="auto" p={8} zIndex={1} alignItems="center" justify="space-between">
        <MotionBox
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          flex={1}
        >
          <VStack align="flex-start" spacing={6}>
            <Box>
              <Text color="brand.400" fontWeight="bold" letterSpacing="widest" mb={2}>
                HI THERE, I'M
              </Text>
              <Heading as="h1" size="3xl" color="white" fontWeight="extrabold" lineHeight="shorter">
                Narendra <Box as="span" color="brand.500">Jagadhane</Box>
              </Heading>
              <Heading as="h2" size="lg" color="gray.400" mt={2} fontWeight="medium">
                Senior Frontend Developer
              </Heading>
            </Box>

            <Text color="gray.300" fontSize="lg" maxW="lg" lineHeight="tall">
              Specializing in React.js, TypeScript, and Next.js. I build enterprise-grade fintech and core banking applications with optimized data-fetching and high-performance grids.
            </Text>

            <HStack spacing={4} pt={2} flexWrap="wrap" justify={["center", "center", "flex-start"]}>
              <Button colorScheme="brand" size="lg" rounded="full" px={8}
                _hover={{ transform: 'translateY(-2px)', shadow: 'xl' }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
              <Button as="a" href="/resume.pdf" download="Narendra_Jagadhane_Resume.pdf" colorScheme="purple" size="lg" rounded="full" px={8}
                _hover={{ transform: 'translateY(-2px)', shadow: 'xl' }}
              >
                Download Resume
              </Button>
              <Button variant="outline" colorScheme="gray" size="lg" rounded="full" px={8} color="white"
                _hover={{ transform: 'translateY(-2px)', bg: 'whiteAlpha.200' }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </HStack>

            <HStack spacing={6} pt={6}>
              <Box as="a" href="https://linkedin.com/in/narendra-jagadhane" target="_blank" color="gray.400" _hover={{ color: "brand.400" }}>
                <Icon as={FaLinkedin} boxSize={6} />
              </Box>
              <Box as="a" href="mailto:narendrajagadhane@gmail.com" color="gray.400" _hover={{ color: "brand.400" }}>
                <Icon as={FaEnvelope} boxSize={6} />
              </Box>
            </HStack>
          </VStack>
        </MotionBox>

        <MotionFlex
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          flex={1}
          justify="center"
          align="center"
          mb={[10, 10, 0]}
        >
          <Box rounded="full" bgGradient="linear(to-br, brand.500, purple.500)" p="4px">
            <Image
              src={profilePic}
              alt="Narendra Jagadhane Profile"
              rounded="full"
              boxSize={["250px", "300px", "400px"]}
              objectFit="cover"
              bg="gray.900"
              p={2}
            />
          </Box>
        </MotionFlex>
      </Flex>
    </Box>
  );
};
