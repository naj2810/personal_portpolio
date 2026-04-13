import { Box, Container, Heading, Text, VStack, Circle, Flex, List, ListItem, ListIcon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const MotionBox = motion(Box);

export const ExperienceSection = () => {
  return (
    <Box id="experience" py={20} bg="transparent" position="relative">
      <Container maxW="5xl">
        <VStack spacing={4} textAlign="center" mb={16}>
          <Heading as="h2" size="2xl" color="white">
            Work <Box as="span" color="purple.400">Experience</Box>
          </Heading>
          <Text color="gray.400" fontSize="xl">
            My professional journey in building robust core banking apps.
          </Text>
        </VStack>

        <Box position="relative">
          {/* Timeline Line */}
          <Box position="absolute" left={["20px", "20px", "50%"]} top={0} bottom={0} w="2px" bg="gray.700" transform={["none", "none", "translateX(-50%)"]} />

          <VStack spacing={12} align="stretch">
            {/* Job 1 */}
            <MotionBox
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              position="relative"
            >
              <Flex direction={["column", "column", "row"]} align="center" justify="space-between">
                <Box flex={1} pr={[0, 0, 12]} pl={[12, 12, 0]} textAlign={["left", "left", "right"]} w="full">
                  <Heading size="lg" color="white">Frontend Engineer — React.js / TypeScript</Heading>
                  <Text color="brand.400" fontSize="lg" fontWeight="bold" mt={1}>iDigiCloud Technologies Private Limited</Text>
                  <Text color="gray.500" mb={1}>Pune, Maharashtra</Text>
                  <Text color="gray.500" mb={4}>March 2022 – Present (4+ Years)</Text>
                </Box>

                <Circle size="40px" bg="gray.900" border="4px solid" borderColor="brand.500" zIndex={1} position="absolute" left={["0", "0", "50%"]} transform={["none", "none", "translateX(-50%)"]} />

                <Box flex={1} pl={[12, 12, 12]} w="full" mt={[4, 4, 0]}>
                  <Box bg="gray.800" p={6} rounded="xl" border="1px solid" borderColor="gray.700">
                    <List spacing={3}>
                      {[
                        "Built and maintained enterprise fintech web applications in React.js and TypeScript for daily banking operations.",
                        "Designed a reusable modular component library, reducing duplicate frontend code by 30–40% across teams.",
                        "Architected schema-driven dynamic forms with custom validation pipelines using React Hook Form.",
                        "Led GraphQL integration cutting data-fetching latency by 35% and improving app responsiveness.",
                        "Resolved complex cross-module AG Grid defects ensuring stable production releases.",
                        "Conducted code reviews and mentored junior developers on TypeScript and React best practices."
                      ].map((bullet, idx) => (
                        <ListItem key={idx} color="gray.300" display="flex" alignItems="flex-start">
                          <ListIcon as={FaCheckCircle} color="brand.400" mt={1} />
                          <Text lineHeight="tall">{bullet}</Text>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Box>
              </Flex>
            </MotionBox>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};
