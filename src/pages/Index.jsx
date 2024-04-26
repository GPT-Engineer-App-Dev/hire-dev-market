import { Box, Flex, Text, Input, Button, Image } from '@chakra-ui/react';
import { FaSearch, FaUser } from 'react-icons/fa';

const Index = () => {
  return (
    <Box p={5}>
      <Flex justifyContent="center" p={5}>
        <Image src="/images/landing-page.jpg" alt="Talent Marketplace" boxSize="600px" objectFit="cover" borderRadius="lg" />
      </Flex>
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" mt={5}>Welcome to the Developer Talent Marketplace</Text>
      <Text fontSize="xl" textAlign="center" mt={2}>Connect with top talent and explore job opportunities</Text>
      <Flex mt={10} justifyContent="center">
        <Input placeholder="Search developers or skills" size="lg" mr={2} />
        <Button leftIcon={<FaSearch />} colorScheme="blue" size="lg">Search</Button>
      </Flex>
      <Flex mt={10} justifyContent="space-around">
        <Button leftIcon={<FaUser />} colorScheme="teal" size="lg">Create Developer Profile</Button>
        <Button leftIcon={<FaUser />} colorScheme="orange" size="lg">View Job Listings</Button>
      </Flex>
    </Box>
  );
};

export default Index;