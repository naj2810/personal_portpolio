import { Box, Container, Heading, Text, VStack, Button, Input, Textarea, FormControl, FormLabel, FormErrorMessage, useToast, Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

type FormData = {
  name: string;
  email: string;
  message: string;
};

export const ContactSection = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>();
  const toast = useToast();

  const onSubmit = async (data: FormData) => {
    try {
      await fetch("https://formsubmit.co/ajax/narendrajagadhane@gmail.com", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: data.name,
            email: data.email,
            message: data.message,
            _subject: "New Portfolio Inquiry from " + data.name 
        })
      });

      toast({
        title: "Message sent.",
        description: "Thanks for reaching out! I'll get back to you soon.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      reset();
    } catch (error) {
      toast({
        title: "Sending failed.",
        description: "There was an issue sending your message. Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box id="contact" py={20} bg="transparent">
      <Container maxW="3xl">
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <VStack spacing={4} textAlign="center" mb={12}>
            <Heading as="h2" size="2xl" color="white">
              Get In <Box as="span" color="purple.400">Touch</Box>
            </Heading>
            <Text color="gray.400" fontSize="xl">
              Currently open to new opportunities. Let's build something amazing together.
            </Text>
          </VStack>

          <Box bg="gray.800" p={8} rounded="2xl" border="1px solid" borderColor="gray.700" shadow="xl">
            <form onSubmit={handleSubmit(onSubmit)}>
              <VStack spacing={6}>
                <Flex direction={["column", "row"]} gap={6} w="full">
                  <FormControl isInvalid={!!errors.name} isRequired>
                    <FormLabel color="gray.300">Name</FormLabel>
                    <Input 
                      placeholder="John Doe" 
                      bg="gray.900" 
                      border="1px solid" 
                      borderColor="gray.600"
                      _hover={{ borderColor: "brand.300" }}
                      _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px #2196f3" }}
                      {...register("name", { required: "Name is required" })} 
                    />
                    <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.email} isRequired>
                    <FormLabel color="gray.300">Email</FormLabel>
                    <Input 
                      type="email" 
                      placeholder="john@example.com" 
                      bg="gray.900" 
                      border="1px solid" 
                      borderColor="gray.600"
                      _hover={{ borderColor: "brand.300" }}
                      _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px #2196f3" }}
                      {...register("email", { 
                        required: "Email is required",
                        pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "invalid email address" }
                      })} 
                    />
                    <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                  </FormControl>
                </Flex>

                <FormControl isInvalid={!!errors.message} isRequired>
                  <FormLabel color="gray.300">Message</FormLabel>
                  <Textarea 
                    placeholder="Tell me about your project..." 
                    rows={6}
                    bg="gray.900" 
                    border="1px solid" 
                    borderColor="gray.600"
                    _hover={{ borderColor: "brand.300" }}
                    _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px #2196f3" }}
                    {...register("message", { required: "Message is required" })} 
                  />
                  <FormErrorMessage>{errors.message && errors.message.message}</FormErrorMessage>
                </FormControl>

                <Button 
                  type="submit" 
                  colorScheme="brand" 
                  size="lg" 
                  w="full" 
                  isLoading={isSubmitting}
                  loadingText="Sending"
                  _hover={{ transform: 'translateY(-2px)', shadow: 'xl' }}
                >
                  Send Message
                </Button>
              </VStack>
            </form>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
};
