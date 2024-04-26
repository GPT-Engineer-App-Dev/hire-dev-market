import { Box, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
  const { id } = useParams();
  return (
    <Box p={5}>
      <Text fontSize="2xl" fontWeight="bold">Job Details - ID: {id}</Text>
      <Text mt={3}>Detailed information about the job will be displayed here.</Text>
    </Box>
  );
};

export default JobDetails;