import { Box, Container, Heading, Text, Flex, Icon, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaCodeBranch, FaLaptopCode, FaRocket } from "react-icons/fa";

const MotionBox = motion(Box);
/** This is about */
export const AboutSection = () => {
  return (
    <Box id="about" py={20} bg="transparent">
      <Container maxW="7xl">
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <VStack spacing={4} textAlign="center" mb={16}>
            <Heading as="h2" size="2xl" color="white">
              Professional <Box as="span" color="brand.400">Summary</Box>
            </Heading>
            <Text color="gray.400" fontSize="xl" maxW="3xl">
              Frontend Developer with 4+ years of hands-on experience building enterprise-grade fintech and core banking applications.
            </Text>
          </VStack>

          <Flex direction={["column", "column", "row"]} gap={8} justify="center">
            {[
              {
                icon: FaCodeBranch,
                title: "Scale & Architecture",
                desc: "Expertise in React.js, TypeScript, Next.js, optimizing frontend architecture, and reducing duplicate code by up to 40%."
              },
              {
                icon: FaLaptopCode,
                title: "Dynamic Grids & Forms",
                desc: "Specialized in schema-driven dynamic forms and high-performance data grids using AG Grid and React Hook Form."
              },
              {
                icon: FaRocket,
                title: "Performance Optimization",
                desc: "Proven track record of cutting data-fetching latency by 35% through robust GraphQL and API integration."
              }
            ].map((item, idx) => (
              <Box 
                key={idx} 
                bg="gray.900" 
                p={8} 
                rounded="2xl" 
                flex={1}
                border="1px solid"
                borderColor="gray.700"
                _hover={{ borderColor: "brand.500", shadow: "xl", transform: "translateY(-5px)" }}
                transition="all 0.3s ease"
              >
                <Icon as={item.icon} boxSize={10} color="brand.400" mb={4} />
                <Heading as="h3" size="md" color="white" mb={3}>{item.title}</Heading>
                <Text color="gray.400" lineHeight="tall">{item.desc}</Text>
              </Box>
            ))}
          </Flex>
        </MotionBox>
      </Container>
    </Box>
  );
};
