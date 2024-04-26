import { Box, Flex, Input, Button, Text, VStack, HStack, Image, Tab, Tabs, TabList, TabPanels, TabPanel, Link } from '@chakra-ui/react';
import { FaSearch, FaUserCircle, FaBriefcase } from 'react-icons/fa';
import { useState } from 'react';

const Index = () => {
  const [developerQuery, setDeveloperQuery] = useState('');
  const [jobQuery, setJobQuery] = useState('');
  const initialDevelopers = Array.from({ length: 8 }).map((_, index) => ({
    id: index + 1,
    name: `John Doe ${index + 1}`,
    skills: 'JavaScript, React',
    description: 'Experienced Frontend Developer with a demonstrated history of working in the web development industry.'
  }));
  const initialJobs = Array.from({ length: 5 }).map((_, index) => ({
    id: index + 1,
    title: 'Frontend Developer',
    company: `Company ${index + 1}`,
    description: 'Looking for an experienced frontend developer to join our dynamic team.'
  }));

  const [developers, setDevelopers] = useState(initialDevelopers);
  const [jobs, setJobs] = useState(initialJobs);

  const handleDeveloperSearch = () => {
    if (developerQuery === '') {
      setDevelopers(initialDevelopers);
    } else {
      const filteredDevelopers = initialDevelopers.filter(dev => dev.skills.toLowerCase().includes(developerQuery.toLowerCase()));
      setDevelopers(filteredDevelopers);
    }
  };

  const handleJobSearch = () => {
    if (jobQuery === '') {
      setJobs(initialJobs);
    } else {
      const filteredJobs = initialJobs.filter(job => job.title.toLowerCase().includes(jobQuery.toLowerCase()) || job.company.toLowerCase().includes(jobQuery.toLowerCase()));
      setJobs(filteredJobs);
    }
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
                {developers.map(developer => (
                  <Link href={`/developer/${developer.id}`} style={{ textDecoration: 'none' }}>
                    <Box p={5} borderWidth="1px" borderRadius="lg" width="45%" mb={5}>
                      <Flex alignItems="center">
                        <Image borderRadius="full" boxSize="50px" src={`https://i.pravatar.cc/150?img=${developer.id}`} alt="Profile" />
                        <Box ml={3}>
                          <Text fontWeight="bold">{developer.name}</Text>
                          <Text fontSize="sm">{developer.skills}</Text>
                        </Box>
                      </Flex>
                      <Text mt={3}>{developer.description}</Text>
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
                {jobs.map(job => (
                  <Link href={`/job/${job.id}`} style={{ textDecoration: 'none' }}>
                    <Box p={5} borderWidth="1px" borderRadius="lg" width="45%" mb={5}>
                      <Flex alignItems="center">
                        <Box ml={3}>
                          <Text fontWeight="bold">{job.title}</Text>
                          <Text fontSize="sm">{job.company}</Text>
                        </Box>
                      </Flex>
                      <Text mt={3}>{job.description}</Text>
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