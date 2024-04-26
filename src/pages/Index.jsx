import { Box, Flex, Input, Button, Text, VStack, HStack, Image } from '@chakra-ui/react';
import { FaSearch, FaUserCircle } from 'react-icons/fa';

const Index = () => {
  return (
    <Box p={5}>
      <Flex justifyContent="space-between" alignItems="center" mb={10}>
        <Text fontSize="3xl" fontWeight="bold">Developer Talent Marketplace</Text>
        <Button leftIcon={<FaUserCircle />} colorScheme="blue">Sign In</Button>
      </Flex>
      <VStack spacing={5}>
        <HStack>
          <Input placeholder="Search developers by skills..." size="lg" />
          <Button leftIcon={<FaSearch />} colorScheme="blue" size="lg">Search</Button>
        </HStack>
        <Flex wrap="wrap" justifyContent="space-between">
          {Array.from({ length: 8 }).map((_, index) => (
            <Box p={5} borderWidth="1px" borderRadius="lg" width="45%" mb={5}>
              <Flex alignItems="center">
                <Image borderRadius="full" boxSize="50px" src={`https://i.pravatar.cc/150?img=${index + 1}`} alt="Profile" />
                <Box ml={3}>
                  <Text fontWeight="bold">John Doe {index + 1}</Text>
                  <Text fontSize="sm">JavaScript, React</Text>
                </Box>
              </Flex>
              <Text mt={3}>Experienced Frontend Developer with a demonstrated history of working in the web development industry.</Text>
            </Box>
          ))}
        </Flex>
      </VStack>
    </Box>
  );
};

export default Index;