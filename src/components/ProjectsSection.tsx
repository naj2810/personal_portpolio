import { Box, Container, Heading, Text, VStack, SimpleGrid, Icon, Flex, Badge, List, ListItem, ListIcon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaServer, FaCheckCircle } from "react-icons/fa";

const MotionBox = motion(Box);

export const ProjectsSection = () => {

  const featuredProjects = [
    {
      title: "DigiCore Bankers WorkBench",
      subtitle: "Internal Banking Tool | 2022 – Present",
      description: "Core banking internal application for bank staff, handling customer onboarding, account opening, loan processing, and multi-level approval workflows at scale.",
      bullets: [
        "Integrated AG Grid with server-side pagination, advanced column filtering, and multi-row selection to handle large-scale banking data.",
        "Built generic reusable form components with React Hook Form shared across 10+ modules — cut boilerplate and reduced dev time significantly.",
        "Resolved production-critical bugs across modules, ensuring zero-defect releases and uninterrupted banking operations.",
        "Led GraphQL integration cutting data-fetching latency by 35%."
      ],
      techStack: ["React.js", "TypeScript", "GraphQL", "AG Grid", "React Hook Form", "React Router"],
      icon: FaServer,
      color: "brand.400"
    },
    {
      title: "DigiBank Internet Banking Portal",
      subtitle: "Customer-facing Portal",
      description: "Customer-facing Internet Banking portal with account dashboards, fund transfers, bill payments, and tax-related transactions — built for performance and SEO compliance.",
      bullets: [
        "Used SSR and SSG strategies to significantly improve page load speed and achieve SEO compliance for public-facing pages.",
        "Built a shared ShadCN component repository with Tailwind CSS, enabling consistent UI across multiple banking apps.",
        "Implemented fully responsive layouts for seamless UX across desktop, tablet, and mobile.",
        "Designed modular component library reducing duplicate frontend code by 30–40%."
      ],
      techStack: ["Next.js", "TypeScript", "ShadCN UI", "Tailwind CSS", "SSR", "SSG"],
      icon: FaExternalLinkAlt,
      color: "purple.400"
    }
  ];

  return (
    <Box id="projects" py={20} bg="transparent">
      <Container maxW="7xl">
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <VStack spacing={4} textAlign="center" mb={16}>
            <Heading as="h2" size="2xl" color="white">
              Featured <Box as="span" color="brand.400">Projects</Box>
            </Heading>
            <Text color="gray.400" fontSize="xl" maxW="3xl">
              Deep dive into the enterprise-grade financial applications I've engineered and optimized.
            </Text>
          </VStack>

          <SimpleGrid columns={[1, 1, 2]} spacing={10}>
            {featuredProjects.map((project, idx) => (
              <Flex
                key={idx}
                direction="column"
                bg="gray.900"
                rounded="2xl"
                border="1px solid"
                borderColor="gray.700"
                p={8}
                _hover={{ transform: "translateY(-5px)", shadow: "2xl", borderColor: project.color }}
                transition="all 0.3s ease"
              >
                <Flex align="center" mb={2}>
                  <Box p={4} rounded="full" bg="gray.800" color={project.color} mr={4}>
                    <Icon as={project.icon} boxSize={8} />
                  </Box>
                  <Box>
                    <Heading size="lg" color="white">{project.title}</Heading>
                    <Text color={project.color} fontWeight="bold" mt={1}>{project.subtitle}</Text>
                  </Box>
                </Flex>

                <Text color="gray.400" fontSize="md" mb={6} lineHeight="tall">
                  {project.description}
                </Text>

                <List spacing={3} mb={8} flex={1}>
                  {project.bullets.map((bullet, i) => (
                    <ListItem key={i} color="gray.300" display="flex" alignItems="flex-start">
                      <ListIcon as={FaCheckCircle} color={project.color} mt={1} />
                      <Text lineHeight="tall">{bullet}</Text>
                    </ListItem>
                  ))}
                </List>

                <Flex flexWrap="wrap" gap={3}>
                  {project.techStack.map(tech => (
                    <Badge key={tech} px={3} py={1} bg="gray.800" color="gray.200" rounded="full" fontSize="sm" border="1px solid" borderColor="gray.600">
                      {tech}
                    </Badge>
                  ))}
                </Flex>
              </Flex>
            ))}
          </SimpleGrid>
        </MotionBox>
      </Container>
    </Box>
  );
};
