import { Box, Flex, Input, Button, Text, VStack, HStack, Image, Tab, Tabs, TabList, TabPanels, TabPanel, Link } from '@chakra-ui/react';
import { FaSearch, FaUserCircle, FaBriefcase } from 'react-icons/fa';
import { useState } from 'react';

const Index = () => {
  const [developerQuery, setDeveloperQuery] = useState('');
  const [jobQuery, setJobQuery] = useState('');

  const handleDeveloperSearch = () => {
    // Placeholder for developer search functionality
    console.log(`Searching for developers with skill: ${developerQuery}`);
  };

  const handleJobSearch = () => {
    // Placeholder for job search functionality
    console.log(`Searching for jobs with title: ${jobQuery}`);
  };

  return (
    <Box p={5}>
      <Flex justifyContent="space-between" alignItems="center" mb={10}>
        <Text fontSize="3xl" fontWeight="bold">Developer Talent Marketplace</Text>
        <Button leftIcon={<FaUserCircle />} colorScheme="blue" onClick={() => console.log('Sign In Clicked')}>Sign In</Button>
      </Flex>
      <Tabs variant="enclosed">
        <TabList>
          <Tab>Developers</Tab>
          <Tab>Jobs</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <VStack spacing={5}>
              <HStack>
                <Input placeholder="Search developers by skills..." size="lg" value={developerQuery} onChange={(e) => setDeveloperQuery(e.target.value)} />
                <Button leftIcon={<FaSearch />} colorScheme="blue" size="lg" onClick={handleDeveloperSearch}>Search</Button>
              </HStack>
              <Flex wrap="wrap" justifyContent="space-between">
                {Array.from({ length: 8 }).map((_, index) => (
                  <Link href={`/developer/${index + 1}`} style={{ textDecoration: 'none' }}>
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
                  </Link>
                ))}
              </Flex>
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack spacing={5}>
              <HStack>
                <Input placeholder="Search jobs by title or company..." size="lg" value={jobQuery} onChange={(e) => setJobQuery(e.target.value)} />
                <Button leftIcon={<FaSearch />} colorScheme="blue" size="lg" onClick={handleJobSearch}>Search</Button>
              </HStack>
              <Flex wrap="wrap" justifyContent="space-between">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Link href={`/job/${index + 1}`} style={{ textDecoration: 'none' }}>
                    <Box p={5} borderWidth="1px" borderRadius="lg" width="45%" mb={5}>
                      <Flex alignItems="center">
                        <Box ml={3}>
                          <Text fontWeight="bold">Frontend Developer</Text>
                          <Text fontSize="sm">Company {index + 1}</Text>
                        </Box>
                      </Flex>
                      <Text mt={3}>Looking for an experienced frontend developer to join our dynamic team.</Text>
                    </Box>
                  </Link>
                ))}
              </Flex>
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Index;