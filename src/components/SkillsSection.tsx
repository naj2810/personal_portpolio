import { Box, Container, Heading, Text, VStack, SimpleGrid, Flex, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaGitAlt, FaNodeJs, FaDatabase, FaTools } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiGraphql, SiMongodb } from "react-icons/si";

const MotionBox = motion(Box);

export const SkillsSection = () => {
  const skills = [
    { name: "React.js", icon: FaReact, color: "#61DAFB" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "SQL", icon: FaDatabase, color: "#336791" },
    { name: "Git / GitLab", icon: FaGitAlt, color: "#F05032" },
    { name: "CI/CD", icon: FaTools, color: "#39A854" },
    { name: "Turbo Repo", icon: FaTools, color: "#ED4C5C" },
    { name: "Webpack / Vite", icon: FaTools, color: "#8DD6F9" },
    { name: "Agile / Scrum", icon: FaTools, color: "#0052CC" },
    { name: "Code Review", icon: FaTools, color: "#000000" },
  ];

  return (
    <Box id="skills" py={20} bg="gray.900">
      <Container maxW="5xl">
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <VStack spacing={4} textAlign="center" mb={12}>
            <Heading as="h2" size="2xl" color="white">
              Technical <Box as="span" color="brand.400">Skills</Box>
            </Heading>
            <Text color="gray.400" fontSize="xl">
              Technologies and tools I use to build robust applications.
            </Text>
          </VStack>

          <SimpleGrid columns={[2, 3, 4, 5]} spacing={8} justifyItems="center">
            {skills.map((skill, idx) => (
              <Box
                key={idx}
                bg="gray.800"
                p={6}
                rounded="xl"
                w="full"
                maxW="160px"
                textAlign="center"
                border="1px solid"
                borderColor="gray.700"
                _hover={{ borderColor: skill.color, transform: "translateY(-5px)", shadow: `0 10px 15px -3px ${skill.color}20` }}
                transition="all 0.3s ease"
              >
                <Flex justify="center" mb={4}>
                  <Icon as={skill.icon} boxSize={8} color={skill.color} />
                </Flex>
                <Text color="gray.200" fontWeight="medium" fontSize="sm">{skill.name}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </MotionBox>
      </Container>
    </Box>
  );
};
