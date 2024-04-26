import { Box, Text, VStack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
  const { id } = useParams();
  const jobDetails = {
    title: 'Frontend Developer',
    company: `Company ${id}`,
    requirements: 'Proficient in JavaScript, React, HTML, CSS',
    description: 'We are looking for a Frontend Developer to join our team and help us build high-quality, innovative and fully performing software that complies with coding standards and technical design.',
    responsibilities: 'Develop new user-facing features, build reusable code and libraries for future use, ensure the technical feasibility of UI/UX designs.'
  };

  return (
    <Box p={5}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" fontWeight="bold">{jobDetails.title} at {jobDetails.company}</Text>
        <Text fontSize="lg">Requirements: {jobDetails.requirements}</Text>
        <Text>{jobDetails.description}</Text>
        <Text>Responsibilities:</Text>
        <Text>{jobDetails.responsibilities}</Text>
      </VStack>
    </Box>
  );
};

export default JobDetails;