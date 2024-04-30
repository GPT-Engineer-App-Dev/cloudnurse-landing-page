import { Box, Flex, Heading, Text, Button, Input, Textarea, VStack } from '@chakra-ui/react';
import { FaLine } from 'react-icons/fa';

const Index = () => {
  return (
    <Box p={4}>
      <Flex direction="column" align="center" justify="center" minH="100vh">
        <Heading mb={4}>Welcome to CloudNurse</Heading>
        <Text fontSize="lg" mb={6}>
          Enhancing communication in nursing homes with AI and LINE integration.
        </Text>
        <Flex direction="column" align="center" justify="center" mb={10}>
          <Heading size="md" mb={2}>Features</Heading>
          <Text>AI-powered response generation</Text>
          <Text>Seamless integration with LINE for easy communication</Text>
          <Text>Real-time updates and notifications</Text>
        </Flex>
        <Flex direction="column" align="center" justify="center" mb={10}>
          <Heading size="md" mb={2}>Benefits</Heading>
          <Text>Improve communication between nursing staff and families</Text>
          <Text>Reduce response time and enhance care quality</Text>
          <Text>Accessible and user-friendly interface</Text>
        </Flex>
        <Flex direction="column" align="center" justify="center">
          <Heading size="md" mb={2}>Contact Us</Heading>
          <VStack spacing={3}>
            <Input placeholder="Your Name" />
            <Input placeholder="Email Address" />
            <Textarea placeholder="Your Message" />
            <Button rightIcon={<FaLine />} colorScheme="teal">Send Message</Button>
          </VStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Index;